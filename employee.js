const {initializeDatabase} = require("./db/db.connect")
const fs = require("fs")
const Employee = require("./model/employeeCard.models")


initializeDatabase()

const jsonData = fs.readFileSync("employee.json", "utf-8")
const employeesData = JSON.parse(jsonData)

function employeeDetails(){
    try{
        for(let employeeData of employeesData){
            const newEmployee = new Employee({
                employeeImage: employeeData.employeeImage,
                name: employeeData.name,
                designation: employeeData.designation,
                employeeId: employeeData.employeeId,
                employeeDob: employeeData.employeeDob,
                email: employeeData.email,
                employeeContact: employeeData.employeeContact,
                address: employeeData.address,
            })
            newEmployee.save()
        }
        
    }
    catch(error){
        console.log(error)
    }
}
employeeDetails()