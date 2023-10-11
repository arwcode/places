export default async function notFound(req, res) {
	res.status(404).json({message: "Not found...", status: 404})
}