
import express from 'express'
import cors from 'cors'
import form from './routes/form.routes.js'
const app = express()

app.use('/', form)
app.use(cors({
     origin: 'https://mohit-sonii.github.io',
     optionsSuccessStatus: 200
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