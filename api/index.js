// Import modules
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

// Import custom components
import api from './controllers/api.controller.js'
import personRoutes from './routes/person.routes.js'
import logger from './middlewares/logger.js'
import doc from './middlewares/doc.js'

// Loading environment variables
dotenv.config()

// Create an instance of the Express
const app = express()

// Middlewares
app.use(logger) // Logger
app.use(express.json()) // JSON body parser
app.use(cors()) // Cross-Origin Resource Sharing

// Routes
app.use('/api/people', personRoutes) // People
app.use('/api/doc', doc) // API documentation
app.use('/api', api) // Other API routes

try {
	// Connect to MongoDB
	await mongoose.connect(process.env.MONGODB)

	// Start the Express server
	app.listen(process.env.PORT || 5000, () => {
		console.log(`
	Server started...
	http://localhost:${PORT}`)
	})
} catch (err) {
	console.error(err)
}

export default app
