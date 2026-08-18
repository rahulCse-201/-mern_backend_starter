import express from 'express';

const app = express();



app.use(express.json());  // to parse the incoming request body as JSON, like when data come in body of request, it will parse it and make it available in req.body

// app.use(express.urlencoded({extended: true})); // to parse the incoming request body as urlencoded data, like when data come in body of request, it will parse it and make it available in req.body
// app.use(express.static('public')); // to serve static files like images, css, js etc from public folder



app.get('/', (req, res)=>{
    res.send("Hello, this is MERN backend starter setup");
})


// import routes || segregate routes
import authRouter from './routes/auth.routes.js';


// routes declaration
app.use('/api/auth', authRouter);










export default app;