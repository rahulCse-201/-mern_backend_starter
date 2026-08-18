// this file basically for connecting the things or starting like db connection , starting server etc

import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import connectDB from './db/index.js';


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 5000, ()=>{
        console.log(`server is listening on http://localhost:${process.env.PORT || 5000}`);
    })
})
.catch((err)=>{
    console.log(`DB connection failed !! Error: ${err}`);
})










