import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import v1Routes from './routes/v1'

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/v1/', v1Routes)

app.listen(PORT, () => {
  console.log(`Server Listen in port ${PORT}`)
})
