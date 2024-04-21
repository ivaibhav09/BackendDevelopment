import mongoose from 'mongoose';
import {DB_NAME} from "./constants.js";
import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config({
    path: './env'
})

;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", () => {
            console.log("ERRROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => { console.log(`App is listening on port ${process.env.PORT}`);
     })


    } catch (error) {
        console.error("ERROR:", error);
    }
})()