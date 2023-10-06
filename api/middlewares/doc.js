import fs from 'fs/promises'
import { marked } from 'marked'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const readmePath = join(__dirname, '..', 'README.md')

export default async function (req, res) {
	try {
		const data = await fs.readFile(readmePath, 'utf8')
		const html = marked(data)

		const styledHTML = `
    <html>
    <head>
      <title>REST API Documentation</title>
      <style>
        body {
          padding: 10px;
        }
      </style>
    </head>
    <body>
      ${html}
    </body>
    </html>
  `
		res.header('Content-Type', 'text/html')
		res.send(styledHTML)
	} catch (err) {
		console.error(err)
		res.status(500).send('Error reading README.md file')
	}
}
