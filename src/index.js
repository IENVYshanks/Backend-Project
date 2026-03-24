//require('dotenv').config({path : './env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})



connectDB().then(()=>{
    
        console.log("Connected")
})
.catch((err) => {
    console.log("error",err)
})
