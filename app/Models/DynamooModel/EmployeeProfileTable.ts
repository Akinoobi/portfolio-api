import * as dynamoose from 'dynamoose'

const schema = new dynamoose.Schema(
    {
        id: {
            type: Number,
            hashKey: true,
        },
        first_name: {
            type: String,
        },
        last_name: {
            type: String,
        },
        birthdate: {
            type: Date,
        },
        gender: {
            type: String,
        },
        marital_status: {
            type: String,
        },
        department: {
            type: String,
        },
        position: {
            type: String,
        },
        date_hired: {
            type: Date,
        },
        employment_status: {
            type: String
        },
        contact_number: {
            type: String
        },
        email: {
            type: String
        },
        address: {
            type: String
        },
        city: {
            type: String
        },
        province: {
            type: String
        },
    },
    {
        saveUnknown: true,
        timestamps: true,
    }
)

const EmployeeProfile = dynamoose.model('EmployeeProfileTable', schema)

export default EmployeeProfile