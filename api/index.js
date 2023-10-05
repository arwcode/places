import express from 'express'
import mongoose from 'mongoose'

import api from './controllers/api.controller.js'
import personRoutes from  './routes/person.routes.js'

import { PORT, MONGODB } from './config/config.js'

const app = express()

app.use(express.json())
app.use((req, res, next) => {
	console.log(req.method, req.url)
	next()
})

app.use('/api/persons', personRoutes)
app.use('/api', api)

try {
	await mongoose.connect(MONGODB)

	app.listen(PORT, () => {
		console.log(`
Server started...
http://localhost:${PORT}`)
	})
} catch (err) {
	console.error(err)
}

export default app
