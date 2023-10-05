import Person from '../models/person.model.js'

export const readAll = async (req, res) => {
	try {
		const persons = await Person.find()
		res.status(200).json(persons)

		console.log(persons)
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
}

export const createOne = async (req, res) => {
	const personData = req.body
	console.log(personData);
	try {
		const person = new Person(personData)
		await person.save()

		res.status(201).json(person)

		console.log(`Person added...`)
		console.log(person)
	} catch (err) {
		res.status(409).json({ message: err.message })
	}
}


export const updateOne = async (req, res) => {
	const { id } = req.params
	const updatedData = req.body
	try {
		const updatedPerson = await Person.findByIdAndUpdate(
			id,
			{ $set: updatedData },
			{ new: true }
		)
		res.json(updatedPerson)

		console.log(`Person updated...`)
		console.log(updatedPerson)
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
}

export const deleteOne = async (req, res, next) => {
	const { id } = req.params
	try {
		const deletedPerson = await Person.findByIdAndRemove(id)
		res.json({ message: `Person ${id} deleted successfully.` })

		console.log(`Person deleted...`)
		console.log(deletedPerson)
	} catch (err) {
		next(err)
	}
}

export const deleteAll = async (req, res, next) => {
	try {
		const deletedPerson = await Person.deleteMany({})
		res.json({ message: 'All persons deleted successfully.' })

		console.log(`All persons deleted...`)
	} catch (err) {
		next(err)
	}
}
