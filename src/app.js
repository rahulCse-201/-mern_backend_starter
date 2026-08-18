import express from 'express';

const app = express();




app.get('/', (req, res)=>{
    res.send("Hello, this is MERN backend starter setup");
})









export default app;