# REST API Documentation
- **URL:** `/api/doc`

## Person Endpoints

### Read All Persons
- **URL:** `/api/people`
- **Method:** GET
- **Description:** Get a list of all people.
- **Response:**
  - Body: List of people in JSON format.
  - Status Code: 200 OK

### Create a Person
- **URL:** `/api/people`
- **Method:** POST
- **Description:** Create a new person.
- **Request:**
  - Body: JSON object representing the person's data.
- **Response:**
  - Body: JSON object representing the created person.
  - Status Code: 201 Created

### Update a Person
- **URL:** `/api/people/:id`
- **Method:** PUT
- **Description:** Update an existing person by ID.
- **Request:**
  - Parameters: `id`: ID of the person to be updated.
  - Body: JSON object containing the updated person data.
- **Response:**
  - Body: JSON object representing the updated person.
  - Status Code: 200 OK

### Delete a Person
- **URL:** `/api/people/:id`
- **Method:** DELETE
- **Description:** Delete a person by ID.
- **Request:**
  - Parameters: `id`: ID of the person to be deleted.
- **Response:**
  - Body: Message confirming the deletion.
  - Status Code: 200 OK

### Delete All Persons
- **URL:** `/api/people`
- **Method:** DELETE
- **Description:** Delete all people.
- **Response:**
  - Body: Message confirming the deletion of all people.
  - Status Code: 200 OK

## Person Model

The `Person` model represents an individual with the following attributes:

- `name` (String, required): The person's first name.
- `surname` (String, required): The person's last name.
- `age` (Number, required): The person's age.

### Example

```json
{
  "name": "John",
  "surname": "Doe",
  "age": 30
}
