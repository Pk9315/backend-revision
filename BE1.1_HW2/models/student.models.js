const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required: true,
        },
        email:{
            type:String,
            required:true,
        },
        age:{
            type:Number,
        },
        course:{
            type:String,
        },
        gender:{
            type:String,
            enum:["Male","Female","Other"],
        },
        isActive:{
            type:Boolean,
            default:true,
        },
        skills:[{
            type:String
        }],

    },{timestamps: true}
)


const Student = mongoose.model("Student", studentSchema)

module.exports = Student