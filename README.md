## <b>Andrew Nikiforov</b> Test Task

## Installation

```
$ npm install
```

## Create `.env` file

Example:

```
DB_NAME="test_task"
DB_USERSNAME="sa"
DB_PASSWORD="root"
DB_HOST=ANDREW-G15
```

## Init DB

```
$ npm run init-db
```

## Running the app

```
$ npm run dev
```

### Open <a>web.postman.co/workspace</a>

## Request examples:

### Ping

```
Method: GET
Path: localhost:5000/ping

Response body: {
    "message": "Dogshouseservice.Version1.0.1"
}
```

### Dogs

```
Method: GET
Path: localhost:5000/dogs

Response body: {
    "totalPages": 1,
    "currentPage": [
        {
            "id": 1,
            "name": "Neo",
            "color": "red&amber",
            "tail_length": 22,
            "weight": 32
        },
    ]
}

Query params: attribute, order, pageNumber, limit
Path examples: 
    localhost:5000/dogs?attribute=weight&order=asc
    localhost:5000/dogs?pageNumber=1&attribute=weight&limit=1&order=asc
    localhost:5000/dogs?pageNumber=1&attribute=weight&&order=asc
```

### Create Dog

```
Method: POST
Path: localhost:5000/dogs

Request body: {
    "name": "Jessy",
    "color": "black",
    "tail_length": 22,
    "weight": 36
}

Response body: {
    "id": 2,
    "name": "Jessy",
    "color": "black",
    "tail_length": 22,
    "weight": 36
}
```
