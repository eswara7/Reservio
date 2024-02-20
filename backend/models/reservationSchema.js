import mongoose, { mongo } from "mongoose";
import validator from "validator";

const reservationSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"fristname should atleast contain 3 characters"],
        maxLength:[30,"firstname should not contain more than 30 charecters"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"lastname should atleast contain 3 charecters"],
        maxLength:[30,"lastName shoudl not contain more than 30 charecters"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"enter vaild email"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"phone must contains 10digits"],
        maxLength:[10,"phone must contains 10digits"],
        validate:[validator.isMobilePhone,"enter valid number"]
    },
    time:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
    
})
export const Reservation = mongoose.model("Reservation",reservationSchema)