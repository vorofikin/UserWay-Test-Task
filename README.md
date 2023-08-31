## <b>Andrew Nikiforov</b> Test Task

## Installation

```
$ npm install
```

## Create `.env` file

Example:

```
DB_NAME=test_task
DB_USERSNAME=root
DB_PASSWORD=root
DB_HOST=localhost
REDIS_HOST=redis
```


### Open <a>web.postman.co/workspace</a>

## Request examples:

### Create Short Url

```
Method: POST
Path: localhost:5000/url

Request body: {
    "url": "https://userway.org/",
}
Response: {
    "id": null,
    "originalUrl": "https://userway.org/",
    "shortUrl": "pxtepMpE"
}
```

```
Request body: {
    "shortUrl": "pxtepMpE",
}
Resoinse: "https://userway.org/"
```


```
Method: GET
Path: localhost:5000/url/pxtepMpE

Redirect to https://userway.org/
```
