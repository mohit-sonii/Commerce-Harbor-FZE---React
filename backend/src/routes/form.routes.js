
import { Router } from 'express'
import { formController } from '../controllers/form.controller.js'
const router = Router()

router.route('/').post(formController)

export default router