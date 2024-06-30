
import express from 'express'
import cors from 'cors'
import form from './routes/form.routes.js'
const app = express()



const corsOptions = {
     origin: ['http://localhost:5173','https://commerce-harbor-fze.netlify.app'],
     methods: ['GET', 'POST'],
     allowedHeaders: ['Content-Type'],
 };
app.use(cors(corsOptions))
app.use('/contact', form)

app.use((err, req, res, next) => {
     const statusCode = err.statusCode || 500;
     const message = err.message || 'Internal Server Error';
     res.status(statusCode).json({
          status: 'error',
          statusCode,
          message
     });
});


export { app }