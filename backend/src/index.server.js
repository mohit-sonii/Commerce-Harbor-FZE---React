
import dotenv from 'dotenv'
import { mongoDB } from "./database/database.mongodb.js";
import { handleError } from "./utils/handleError.util.js"
import { app } from './app.js'
dotenv.config({
     path: './.env'
})


mongoDB().then(() => {
     app.listen(process.env.PORT, () => {
          console.log(`Server is running on port ${process.env.PORT}`);
     });

}).catch((err) => {
     throw new handleError(500, err.message || 'Error in running the server')
})

