
import dotenv from 'dotenv'
import { mongoDB } from "./database/database.mongodb.js";
import {handleError} from "./utils/handleError.util.js"
import {app} from './app.js'
dotenv.config({
     path: './.env'
})


mongoDB().then(() => {
     if (process.env.NODE_ENV !== 'production') {
          const PORT = process.env.PORT || 8000;
          app.listen(PORT, () => {
               console.log(`Server is running on port ${PORT}`);
          });
     }
}).catch((err) => {
     throw new handleError( 500, 'Error in running the server')
})

