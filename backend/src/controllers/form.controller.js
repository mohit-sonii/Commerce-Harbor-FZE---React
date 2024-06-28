
import { handleError } from '../utils/handleError.util.js'
import { Form } from '../models/form.model.js'
import { handleResponse } from '../utils/handleResponse.util.js'

export const formController = async (req, res) => {
     try {
          const { name, email, contact, message, subject } = req.body
          if (!name || !email || !contact || !message || !subject) throw new handleError('400', 'None of the fields can left empty')
          const formData = await Form.create({
               name, email, message, contact, subject
          })
          if(!formData) throw new handleError(500,'Their is a problem submitting request')
          return res
               .status(200)
               .json(new handleResponse(
                    formData,
                    200,
                    'Form submitted successfully'
               ))

     } catch (err) {
          throw new handleError(400, 'Their is an issue while submitting the form')
     }
}