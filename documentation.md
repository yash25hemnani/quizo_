# Quiz API

## Base URL

```
http://localhost:5000/
```

## Endpoints

### Check Session

```http
GET /check
```

#### Response
```json
{
  "loggedIn": "true"
}
```

### Signup

```http
POST /user/signup
```

#### Request Body
```json
{
  "username": "exampleUser",
}
```

#### Response
```json
{
  "result": "User inserted successfully!"
}
```

### Login

```http
POST /user/login
```

#### Request Body
```json
{
  "username": "exampleUser",
  "password": "password123"
}
```

#### Response
```json
{
  "message": "Login Successful",
  "username": "exampleUser"
}
```

### Fetch All Quizzes

```http
POST /quiz/all-quizzes
```

#### Request Body
```json
{
  "username": "exampleUser"
}
```

#### Response
```json
{
  "quizzes": [],
  "message": "Fetched"
}
```

### Add a Quiz

```http
POST /quiz/add
```

#### Request Body
```json
{
  "username": "exampleUser",
  "title": "Quiz Title",
  "description": "Quiz Description"
}
```

#### Response
```json
{
  "result": "Quiz inserted successfully!"
}
```

### Delete a Quiz

```http
POST /quiz/delete
```

#### Request Body
```json
{
  "question_id": 1
}
```

#### Response
```json
{
  "message": "Deleted Successfully"
}
```

### Fetch a Single Quiz

```http
GET /quiz/fetch-one/:id
```

#### Response
```json
{
  "quiz": {},
  "message": "Fetched successfully"
}
```

### Update a Quiz

```http
POST /quiz/update/:id
```

#### Request Body
```json
{
  "title": "Updated Quiz Title",
  "description": "Updated Description"
}
```

#### Response
```json
{
  "message": "Updated successfully"
}
```
