import Route from '@ioc:Adonis/Core/Route'

/**
 * DynamoControllers
 */

Route.group(() => {
    Route.get('/employee-dynamo', 'EmployeeProfileDynamo.index')
    Route.post('/employee-dynamo', 'EmployeeProfileDynamo.store')
    Route.get('/employee-dynamo/:id', 'EmployeeProfileDynamo.showById')
    Route.put('/employee-dynamo/:id', 'EmployeeProfileDynamo.update')
    Route.delete('/employee-dynamo/:id', 'EmployeeProfileDynamo.delete')
  })
  .prefix('v1')
  .namespace('App/Controllers/Http/V1/Backend')
  // .namespace('App/Controllers/Http/DynamoControllers')