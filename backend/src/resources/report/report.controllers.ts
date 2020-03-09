import { crudControllers, Model } from '../../utils/crud'
import { Report } from './report.model'
import { RequestHandler } from 'express'
import { initialReports } from './__mocks__/initialReports'

export const reset = (model: Model): RequestHandler => async (req, res) => {
  try {
    await model.deleteMany({})
    const doc = await model.create(initialReports, { validateBeforeSave: true })
    res.status(201).json({ data: doc })
  } catch (e) {
    console.error(e)
    res.status(400).send(e)
  }
}

export default { ...crudControllers(Report), reset: reset(Report) }
