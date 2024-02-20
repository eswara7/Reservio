import express from "express"
const app = express()
import cors from "cors"
import dotenv from 'dotenv'


dotenv.config({path:"./config/config.env"})
import {dbConnection} from "./database/dbConnection.js"
import { errorMiddleware } from "./error/error.js"
import reservationRouter from "./routes/reservationRoute.js";

app.use(cors({
    origin: [process.env.FRONTEND_URL ], //[,frontend1 , fe2,fe3... ] one be can used for all fe's
    method:["POST"],
    credentials:true
}));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/v1/reservation",reservationRouter)
dbConnection();

app.use(errorMiddleware)
export default app