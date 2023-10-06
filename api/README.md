# REST API Documentation
- **URL:** `/api/doc`

## Person Endpoints

### Read All Persons
- **URL:** `/api/people`
- **Method:** GET
- **Description:** Get a list of all people.
- **Response:**
  - Status Code: 200 OK
  - Body: List of people in JSON format.

### Create a Person
- **URL:** `/api/people`
- **Method:** POST
- **Description:** Create a new person.
- **Request Body:**
  - JSON object representing the person's data.
- **Response:**
  - Status Code: 201 Created
  - Body: JSON object representing the created person.

### Update a Person
- **URL:** `/api/persons/:id`
- **Method:** PUT
- **Description:** Update an existing person by ID.
- **Request Parameters:**
  - `id`: ID of the person to be updated.
- **Request Body:**
  - JSON object containing the updated person data.
- **Response:**
  - Status Code: 200 OK
  - Body: JSON object representing the updated person.

### Delete a Person
- **URL:** `/api/persons/:id`
- **Method:** DELETE
- **Description:** Delete a person by ID.
- **Request Parameters:**
  - `id`: ID of the person to be deleted.
- **Response:**
  - Status Code: 200 OK
  - Body: Message confirming the deletion.

### Delete All Persons
- **URL:** `/api/persons`
- **Method:** DELETE
- **Description:** Delete all people.
- **Response:**
  - Status Code: 200 OK
  - Body: Message confirming the deletion of all people.

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
