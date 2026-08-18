const mongoose = require("mongoose")

const bankSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required:true,
        },
        lastName:{
            type:String,
            required: true,
        },
        fatherMotherName:{
            type:String,
            required: true,
        },
        dateOfBirth:{
            type: String,
            required: true,
        },
        gender:{
            type: String,
            enum:["Male","Female","Other"]
        },
        contactNumber:{
            type:Number,
            required:true,
        },
        address:{
            type:String,
            required: true,
        },
        customerPhotoUrl:{
            type: String,
            required:true,
        },
        addharCard:{
            type: Number,
            required: true,
        },
        panNo:{
            type:String,
        },
        email:{
            type: String,
        },
        marritalStatus:{
            type:String,
            enum:["Married", "Unmaaried", "Single", "Divorce"],
        },

        
    },
    {timestamps: true}
)

const Bank = mongoose.model("Bank", bankSchema)