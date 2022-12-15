// import test from 'japa'
// import supertest from 'supertest'
// import { JSDOM } from 'jsdom'
// import EmployeeProfileTable, { Departments, Status } from 'App/Models/EmployeeProfileTable'
// import moment from 'moment'
// const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

// test.group('Example Training API Tests', (group) => {
//   test('sum 2+2', (assert) => {
//     assert.deepEqual(2 + 2, 4)
//   })

//   test('404 route doesn\'t exist', async (assert) => {
//     const { text } = await supertest(BASE_URL).get('/thisRouteDoesntExist').expect(404)
//     assert.exists(text, 'handled E_ROUTE_NOT_FOUND: Cannot GET:/asdlas')
//   })

//   test('health check route is working', async (assert) => {
//     const { status, text } = await supertest(BASE_URL).get('/api/employee')
//     assert.equal(status, 200)
//     assert.exists(text, '"healthy":true')
//   })

//   test('ensure home page works', async (assert) => {
//     /**
//      * Make request
//      */
//     // const { text } = await supertest(BASE_URL).get('/').expect(200)

//     /**
//      * Construct JSDOM instance using the response HTML
//      */
//     // const { document } = new JSDOM(text).window

//     // const first_name = document.querySelector('.objProp')
//     // console.log(first_name)
//     assert.exists('birthdate')
//     // assert.equal(first_name!.textContent!.trim(), 'It Works!')
//   })
//   test('create new user', async (assert) => {
//     const employee = new EmployeeProfileTable()
//     employee.first_name = 'Anne',
//       employee.last_name = 'Hathaway',
//       employee.birthdate = moment('12-11-1982', 'DD-MM-YYYY').toDate(),
//       employee.gender = 'Female',
//       employee.marital_status = 'Single',
//       employee.department = Departments.Finance,
//       employee.position = 'Actres/Singer',
//       employee.date_hired = moment('30-02-2003', 'DD-MM-YYYY').toDate(),
//       employee.employment_status = Status.Casual,
//       employee.contact_number = '639864895613',
//       employee.email = 'anneh@hollywoodceleb.com',
//       employee.address = 'Brooklyn, New York, United States',
//       employee.city = 'New York',
//       employee.province = 'New York',
//       employee.nationality = 'American',
//       await employee.save()

//     assert.notEqual(employee.email, 'secret')
//   })
// })