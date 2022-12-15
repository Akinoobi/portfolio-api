import { schema } from '@ioc:Adonis/Core/Validator'
import EmployeeProfile from 'App/Models/DynamooModel/EmployeeProfileTable'

export default class EmployeeProfileDynamo {
    public async index ({ response }) {
        const employee = await EmployeeProfile.scan().exec();

        return response.status(202).json(employee)
    }

    public async store ({ response, request}) {

        const validated = await request.validate({
        schema: schema.create({
            first_name: schema.string(),
            last_name: schema.string(),
            birdate: schema.date(),
            gender: schema.string(),
            marital_status: schema.string(),
            department: schema.string(),
            position: schema.string(),
            date_hired: schema.string(),
            employment_status: schema.string(),
            contact_number: schema.string(),
            email: schema.string(),
            address: schema.string(),
            city: schema.string(),
            province: schema.string(),
            nationality: schema.string(),

        }),
    })
    const employeeCreate = await EmployeeProfile.create({id: Date.now(), first_name: validated.first_name, last_name: validated.last_name, birthdate: validated.birdate, gender: validated.gender, marital_status: validated.marital_status, department: validated.department, position: validated.position, date_hired: validated.date_hired, employment_status: validated.employment_status, contact_number:validated.contact_number, email: validated.email, address: validated.address, city: validated.city, province: validated.province, nationality: validated.nationality})
    // const employeeCreate = await EmployeeProfile.create({id: Date.now(), first_name: validated.first_name})

    return response.status(200).json(employeeCreate)
    }
    public async showById({response, params}) {
        const viewEmployee = await EmployeeProfile.get({
            id: Number(params.id),
        })
        return response.status(200).json(viewEmployee)
    }

  public async update({ request, response, params }) {
    // https://preview.adonisjs.com/guides/validator/introduction
    const validated = await request.validate({
        schema: schema.create({
            first_name: schema.string(),
            last_name: schema.string(),
            birdate: schema.date(),
            gender: schema.string(),
            marital_status: schema.string(),
            department: schema.string(),
            position: schema.string(),
            date_hired: schema.string(),
            employment_status: schema.string(),
            contact_number: schema.string(),
            email: schema.string(),
            address: schema.string(),
            city: schema.string(),
            province: schema.string(),
            nationality: schema.string(),

        }),
    })

    // https://dynamoosejs.com/guide/Model#modelupdatekey-updateobj-settings-callback
    const employeeUpdate = await EmployeeProfile.update({id: Date.now(), first_name: validated.first_name, last_name: validated.last_name, birthdate: validated.birdate, gender: validated.gender, marital_status: validated.marital_status, department: validated.department, position: validated.position, date_hired: validated.date_hired, employment_status: validated.employment_status, contact_number:validated.contact_number, email: validated.email, address: validated.address, city: validated.city, province: validated.province, nationality: validated.nationality})

    return response.status(200).json(employeeUpdate)
  }
    public async delete({ response, params }) {
        // https://dynamoosejs.com/guide/Model#modeldeletekey-settings
        await EmployeeProfile.delete({
          id: Number(params.id),
        })
    
        return response.status(200)
      }


}