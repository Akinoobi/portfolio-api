import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import * as dynamoose from 'dynamoose'

/*
|--------------------------------------------------------------------------
| Provider
|--------------------------------------------------------------------------
|
| Your application is not ready when this file is loaded by the framework.
| Hence, the level imports relying on the IoC container will not work.
| You must import them inside the life-cycle methods defined inside
| the provider class.
|
| @example:
|
| public async ready () {
|   const Database = (await import('@ioc:Adonis/Lucid/Database')).default
|   const Event = (await import('@ioc:Adonis/Core/Event')).default
|   Event.on('db:query', Database.prettyPrint)
| }
|
*/
export default class DynamooseProvider {
  public static needsApplication = true

  constructor(protected application: ApplicationContract) {}

  public register() {
    const ddb = new dynamoose.aws.sdk.DynamoDB({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    })

    if (process.env.DYNAMODB_LOCAL) {
      dynamoose.aws.ddb.local(process.env.DYNAMODB_URL)
    } else {
      dynamoose.aws.ddb.set(ddb)
    }

    this.application.container.singleton('Dynamoose', () => ddb)
  }
}
