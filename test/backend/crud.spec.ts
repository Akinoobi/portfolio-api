import test from 'japa'
import supertest from 'supertest'
import { JSDOM } from 'jsdom'
import EmployeeProfileTable, { Departments, Status } from 'App/Models/EmployeeProfileTable'
import moment from 'moment'
const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Crud API Tests', (group) => {
    test('create', async (assert) => {
        const employee = new EmployeeProfileTable()
        employee.first_name= 'Anne',
        employee.last_name= 'Hathaway',
        employee.birthdate= moment('12-11-1982','DD-MM-YYYY').toDate(),
        employee.gender='Female',
        employee.marital_status= 'Single',
        employee.department = Departments.Finance,
        employee.position = 'Actres/Singer',
        employee.date_hired = moment('30-02-2003','DD-MM-YYYY').toDate(),
        employee.employment_status = Status.Casual,
        employee.contact_number = '639864895613',
        employee.email = 'anneh@hollywoodceleb.com',
        employee.address = 'Brooklyn, New York, United States',
        employee.city = 'New York',
        employee.province = 'New York',
        employee.nationality = 'American',
        await employee.save()
    
        assert.notEqual(employee.email, 'secret')
      })
      test('edit', async (assert) => {
        const employeeUpdate = await EmployeeProfileTable.findOrFail(2)
        employeeUpdate.first_name= 'Marichu',
        employeeUpdate.last_name= 'Hathaway',
        employeeUpdate.birthdate= moment('12-11-1982','DD-MM-YYYY').toDate(),
        employeeUpdate.gender='Female',
        employeeUpdate.marital_status= 'Single',
        employeeUpdate.department = Departments.Finance,
        employeeUpdate.position = 'Actres/Singer',
        employeeUpdate.date_hired = moment('30-02-2003','DD-MM-YYYY').toDate(),
        employeeUpdate.employment_status = Status.Casual,
        employeeUpdate.contact_number = '639864895613',
        employeeUpdate.email = 'anneh@hollywoodceleb.com',
        employeeUpdate.address = 'Brooklyn, New York, United States',
        employeeUpdate.city = 'New York',
        employeeUpdate.province = 'New York',
        employeeUpdate.nationality = 'American',
        await employeeUpdate.save()
      })
      test('view', async (assert) => {
        const employeeView = await EmployeeProfileTable.find(2)
        assert.exists(employeeView, '"healthy":true')
        // return employeeView
      })
      test('delete', async (assert) => {
        const deleteEmployee = await EmployeeProfileTable.findOrFail(8)
        assert.exists(deleteEmployee, '"healthy":true')
        await deleteEmployee.delete()
        // return deleteEmployee
      })
  })