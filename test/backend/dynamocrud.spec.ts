import EmployeeProfile from "App/Models/DynamooModel/EmployeeProfileTable";
import { Departments, Status } from "App/Models/EmployeeProfileTable";
import test from 'japa'
import jwt from 'jsonwebtoken'
import moment from "moment";
import supertest from "supertest";

const BASE_URL = `http://localhost:${process.env.PORT}`

test.group('DynamoEmployeeProfileController', () => {

    test('Welcome', async (assert) => {
        const { status, text } = await supertest(BASE_URL).get('/v1/employee-dynamo')
        assert.equal(status, 202)
        assert.exists(text, '"healthy":true')

    })
    test('can create', async (assert) => {
        const token = jwt.sign(
            { userId: '1', email: 'john@doe.com', name: 'John Doe' },
            process.env.APP_SECRET
        )
        await EmployeeProfile.create({ id: Date.now(), first_name: 'Kobe', last_name: 'Bryant', gender: 'Male', marital_status: 'Single', department: Departments.Admin, position: 'Basketball Legend', employment_status: Status.Regular, contact_number: '639647813499', email: 'kobebryant@nba.com', address: 'Los Angeles, California, USA', city: 'California', province: 'California', nationality: 'nationality' })
        const response = await supertest(BASE_URL)
            .post('/v1/employee-dynamo')
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .expect(422)

        assert.notEqual(response.body.length, 0)
    })

    test('can update', async (assert) => {
        const token = jwt.sign(
          { userId: '1', email: 'john@doe.com', name: 'John Doe' },
          process.env.APP_SECRET
        )
    
        const employeeUpdate = await EmployeeProfile.create({ id: Date.now(), first_name: 'Kobexxxx', last_name: 'Bryant', gender: 'Male', marital_status: 'Single', department: Departments.Admin, position: 'Basketball Legend', employment_status: Status.Regular, contact_number: '639647813499', email: 'kobebryant@nba.com', address: 'Los Angeles, California, USA', city: 'California', province: 'California', nationality: 'nationality' })
        const last_name = 'BryantLegend'
    
        const response = await supertest(BASE_URL)
          .put(`/v1/employee-dynamo/${employeeUpdate.id}`)
          .set('Accept', 'application/json')
          .field('last_name', last_name)
        //   .set('Authorization', `Bearer ${token}`)
          .expect(422)
    
        assert.equal(response.body.last_name, last_name)
      })

    test('can delete', async () => {
        const token = jwt.sign(
            { userId: '1', email: 'john@doe.com', name: 'John Doe' },
            process.env.APP_SECRET
        )

        const employeeToDelete = await EmployeeProfile.create({ id: Date.now(), first_name: 'Testing Firstname', last_name: 'Testing to Delete Last name', gender: 'Male', marital_status: 'Single', department: Departments.Admin, position: 'Basketball Legend', employment_status: Status.Regular, contact_number: '639647813499', email: 'kobebryant@nba.com', address: 'Los Angeles, California, USA', city: 'California', province: 'California', nationality: 'nationality' })

        await supertest(BASE_URL)
            .delete(`/v1/employee-dynamo/${employeeToDelete.id}`)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
    })

})