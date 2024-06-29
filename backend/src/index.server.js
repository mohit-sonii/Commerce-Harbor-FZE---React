
import dotenv from 'dotenv'
import { mongoDB } from "./database/database.mongodb.js";
import { handleError } from "./utils/handleError.util.js"
import { app } from './app.js'
dotenv.config({
     path: './.env'
})


const startServer = async () => {
     try {
          await mongoDB();
          const PORT = process.env.PORT || 8000;
          app.listen(PORT, () => {
               console.log(`Server is running on port ${PORT}`);
          });
     } catch (err) {
          console.error('Failed to connect to the database', err);
          // Handle error appropriately, for example:
          process.exit(1);
     }
};

startServer();