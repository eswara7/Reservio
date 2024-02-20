import mongoose from "mongoose";

export const dbConnection =()=>{
    mongoose.connect(process.env.MONGO_URI,{dbName:"ReserVio db"})
    .then(()=>{console.log("database connection successful")})
    .catch(err=>{console.log(`some error occured ${err}`)})

}