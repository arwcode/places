import express from 'express'
import { PORT } from './config/config.js'
import api from './controllers/api.controller.js'

const app = express()

app.use('/api', api)

app.listen(PORT, () => {
	console.log(`
Server started...
http://localhost:${PORT}`)
})

export default app
