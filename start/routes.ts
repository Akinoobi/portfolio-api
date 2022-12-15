/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Application from '@ioc:Adonis/Core/Application'
import { cuid } from '@ioc:Adonis/Core/Helpers'
import './path/api'

Route.get('/', 'EmployeeProfilesController.index')

Route.group(() => {
  Route.get('/employee', 'EmployeeProfilesController.index')
  Route.post('/employee', 'EmployeeProfilesController.store')
  Route.patch('/employee/:id', 'EmployeeProfilesController.update')
  Route.get('/employee/:id', 'EmployeeProfilesController.viewId')
  Route.delete('/employee/:id', 'EmployeeProfilesController.delete')
  Route.post('/employee/avatar', 'FilesController.uploadImage')
}).prefix('api')

Route.get('/employee/create', () => {
  return 'Display a form to create a post'
})

Route.post('/employee', async () => {
  return 'Handle post creation form request'
})

Route.get('/employee/:id', () => {
  return 'Return a single post'
})

Route.get('/employee/:id/edit', () => {
  return 'Display a form to edit a post'
})

Route.put('/employee/:id', () => {
  return 'Handle post update form submission'
})

Route.delete('/employee/:id', () => {
  return 'Delete post'
})
