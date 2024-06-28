
import express from 'express'
import cors from 'cors'
import form from './routes/form.routes.js'
const app = express()

app.use('/', form)
app.use(cors({
     origin: 'https://commerce-harbor-fze-mern.vercel.app/',
     credentials: true
}))

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