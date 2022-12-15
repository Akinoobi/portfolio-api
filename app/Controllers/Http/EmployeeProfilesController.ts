// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import EmployeeProfileTable from "App/Models/EmployeeProfileTable"

export default class EmployeeProfilesController {
    public async index ({request}){
        // const page = request.input('page',1)
        // const limit = request.input('per_page',10)
        // return EmployeeProfile.query().paginate(page, limit)
        return await EmployeeProfileTable.all()
      }
      public async store ({request, response}:HttpContextContract) {
        await EmployeeProfileTable.create({
          first_name:request.input('first_name'),
          last_name:request.input('last_name'),
          birthdate:request.input('birthdate'),
          gender:request.input('gender'),
          marital_status:request.input('marital_status'),
          department:request.input('department'),
          position:request.input('position'),
          date_hired:request.input('date_hired'),
          employment_status:request.input('employment_status'),
          contact_number:request.input('contact_number'),
          email:request.input('email'),
          address:request.input('address'),
          city:request.input('city'),
          province:request.input('province'),
          nationality:request.input('nationality'),
        })
        return response.status(201).json({'success': true})
      }
      public async update ({request, response, params}:HttpContextContract) {
        const bodyRequest = request.body()
        const employeeUpdate = await EmployeeProfileTable.findOrFail(params.id)
        employeeUpdate.first_name = bodyRequest.first_name
        employeeUpdate.last_name = bodyRequest.last_name
        employeeUpdate.birthdate = bodyRequest.birthdate
        employeeUpdate.gender = request.input('gender')
        employeeUpdate.marital_status = request.input('marital_status')
        employeeUpdate.department = request.input('department')
        employeeUpdate.position = request.input('position')
        employeeUpdate.date_hired = request.input('date_hired')
        employeeUpdate.employment_status = request.input('employment_status')
        employeeUpdate.contact_number = request.input('contact_number')
        employeeUpdate.email = request.input('email')
        employeeUpdate.address = request.input('address')
        employeeUpdate.city = request.input('city')
        employeeUpdate.province = request.input('province')
        employeeUpdate.nationality = request.input('nationality')
        return await employeeUpdate.save()
      }

      public async viewId ({request, response, params}:HttpContextContract) {
        const employeeView = await EmployeeProfileTable.find(params.id)
        return employeeView
      }
      public async delete ({request, response, params}:HttpContextContract) {
        const deleteEmployee = await EmployeeProfileTable.findOrFail(params.id)
        await deleteEmployee.delete()
        return response.status(201).json({'deleted successfully': true})
      }

}
