import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import { connect } from './utils/db'
import reportRouter from './resources/report/report.router'

export const app = express()

app.disable('x-powered-by')


app.use(
  cors({
    origin: process.env.FRONTEND_URL
  })
)
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api/report', reportRouter)
app.use(express.static('dist'))

export const start = async () => {
  try {
    await connect()
    app.listen(process.env.PORT, () => {
      console.log(`REST API on http://localhost:${process.env.PORT}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
