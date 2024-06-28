
import mongoose from 'mongoose'
import { handleError } from '../utils/handleError.util.js'

export const mongoDB = async () => {
     try {
          const connection = await mongoose.connect(`${process.env.mongoUrl}`)
          if (!connection) throw new handleError(500, 'Error while connecting with server')
     } catch (err) { throw new handleError(500, 'Connection with database failed') }
}