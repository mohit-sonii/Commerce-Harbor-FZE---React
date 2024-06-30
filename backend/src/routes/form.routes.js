
import { Router } from 'express'
import { formController } from '../controllers/form.controller.js'
import multer from 'multer'
const upload = multer()
const router = Router()

router.route('/').post(upload.none(), formController)

export default router