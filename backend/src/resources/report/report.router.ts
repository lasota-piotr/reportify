import { Router } from 'express'
import controllers from './report.controllers'

const router = Router()

// /api/report
router
  .route('/')
  .get(controllers.getMany)
  .post(controllers.createOne)

// /api/report/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

export default router
