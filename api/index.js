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

// Define the port for Express server
const PORT = process.env.PORT || 5000

// Create an instance of the Express
const app = express()

// Request logger middleware
app.use(logger)

// JSON body parser middleware
app.use(express.json())

// API routes for handling person data
app.use('/api/people', personRoutes)

// API documentation
app.use('/api/doc', doc);

// Additional API routes
app.use('/api', api)

try {
	// Connect to MongoDB
	await mongoose.connect(process.env.MONGODB)

	// Start the Express server
	app.listen(PORT, () => {
		console.log(`
Server started...
http://localhost:${PORT}`)
	})
} catch (err) {
	console.error(err)
}

export default app
