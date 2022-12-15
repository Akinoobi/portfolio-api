import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class EmployeeProfileTables extends BaseSchema {
  protected tableName = 'employee_profile_tables'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('first_name', 255).notNullable
      table.string('last_name', 255).notNullable
      table.date('birthdate').notNullable
      table.string('gender', 255).notNullable
      table.string('marital_status',20).notNullable
      table.enu('department', ['Admin','Engineering', 'Finance']).defaultTo('Admin').notNullable
      table.string('position').notNullable
      table.date('date_hired').notNullable
      table.enu('employment_status', ['Casual','Probitionary', 'Regular']).notNullable
      table.string('contact_number', 255).notNullable
      table.string('email', 255).notNullable
      table.string('address', 255).notNullable
      table.string('city', 255).notNullable
      table.string('province', 255).notNullable
      table.string('nationality', 255).notNullable
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
