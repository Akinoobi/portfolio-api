import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import File from "App/Models/File"
import EmployeeProfileTable from "App/Models/EmployeeProfileTable"
import Application from '@ioc:Adonis/Core/Application'

export default class FilesController {
      public async uploadImage({request, response, params}: HttpContextContract) {
        const employeeUpdate = await EmployeeProfileTable
          const avatar = request.file('avatar')
          if (avatar) {
            const imageName = new Date().getTime().toString() + `.${avatar.extname}`
            await avatar.move(Application.publicPath('images'), {
                name: imageName
            })
            employeeUpdate.avatar = `images/${imageName}`
        }

        // employeeUpdate.details = request.input('details')
        await employeeUpdate?.save()
        return response.redirect(`/${employeeUpdate.id}`)
      }
}
