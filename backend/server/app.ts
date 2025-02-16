import express, { Request, Response } from "express";
import dotenv from 'dotenv'
import pool from "../config/db";
import userRouter from "../routes/user.routes"
import quizRouter from "../routes/quiz.routes"
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin: "http://localhost:5173", 
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
}));

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

dotenv.config()

try {
    pool.getConnection().then(() => {
        console.log("Connected")
    })
} catch (e) {
    console.log(e)
}


app.get('/', (req: Request, res:Response) => {
    res.send("Hello World")
})

// Using the user route
app.use('/user', userRouter)
app.use('/quiz', quizRouter)

app.listen(3000, () => {
    console.log("Running on port 3000: http://localhost:3000/")
})