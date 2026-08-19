const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema(
    {
        employeeImage: String,
        name: String,
        designation: String,
        employeeId: Number,
        employeeDob: String,
        email: String,
        employeeContact: String,
        address: String,
    }
)

const Employee = mongoose.model("Employee", employeeSchema)

module.exports = Employee 