import mongoose, { Schema } from "mongoose";

const formSchema = new Schema({
     name: {
          type: String,
          required: true
     },
     email: {
          type: String,
          required: true
     },
     contact: {
          type: Number,
          required: true
     },
     subject: {
          type: String,
          required: true
     },
     message: {
          type: String,
          required: true
     },
})

export const Form = mongoose.model('Form', formSchema)