import { Router } from 'express'
import * as person from '../controllers/person.controller.js'

const router = Router()
router.get('/', person.readAll)
router.post('/', person.createOne)
router.patch('/:id', person.updateOne)
router.delete('/:id', person.deleteOne)
router.delete('/', person.deleteAll)

export default router
