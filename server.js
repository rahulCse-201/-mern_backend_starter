import express from 'express';

const app = express();

const PORT= 5000;


app.get('/', (req, res)=>{
    res.send("Hello, this is MERN backend starter setup");
})

app.listen(PORT, ()=>{
    console.log(`server is listening on http://localhost:${PORT}`);
})