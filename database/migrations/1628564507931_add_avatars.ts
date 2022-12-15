import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class EmployeeProfileTables extends BaseSchema {
  protected tableName = 'employee_profile_tables'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.binary('avatar')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('avatar')
    })
  }
}
