import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export enum Departments {
  Admin = 'Admin',
  Engineering = 'Engineering',
  Finance = 'Finance'
}

export enum Status {
  Casual = 'Casual',
  Probitionary = 'Probitionary',
  Regular = 'Regular'
}

export default class EmployeeProfileTable extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public first_name: string

  @column()
  public last_name: string

  @column()
  public birthdate: Date

  @column()
  public gender: string

  @column()
  public marital_status: string

  @column()
  public department: Departments

  @column()
  public position: string

  @column()
  public date_hired: Date

  @column()
  public employment_status: Status

  @column()
  public contact_number: string

  @column()
  public email: string

  @column()
  public address: string

  @column()
  public city: string

  @column()
  public province: string

  @column()
  public nationality: string
  @column()
  public avatar: string
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
