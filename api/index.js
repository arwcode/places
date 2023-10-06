// Import modules
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

// Import controllers, middlewares and routes
import api from './controllers/api.controller.js'
import personRoutes from './routes/person.routes.js'
import logger from './middlewares/logger.js'
import doc from './middlewares/doc.js'

// Create an instance of the Express app
const app = express()

// Use middlewares
app.use(logger) // Logger
app.use(express.json()) // JSON body parser
app.use(cors()) // Cross-Origin Resource Sharing

// Use routes
app.use('/api/people', personRoutes) // People
app.use('/api/doc', doc) // API documentation
app.use('/api', api) // Other API routes

try {
	// Loading .env
	dotenv.config()

	// Connect to MongoDB
	await mongoose.connect(process.env.MONGODB)

	// Define the port
	const PORT = process.env.PORT || 5000

	// Start the Express server
	app.listen(PORT, () => {
		console.log(`
	REST API server started...
	http://localhost:${PORT}`)
	})
} catch (err) {
	console.error(err)
}

export default app
