# Setup

**Requirements: Python3, pip**

Clone the repository locally:

```
cd rest_api_test\backend\
pip install virtualenv                   # install virtualenv package
virtualenv venv                          # create virtual env
source venv/bin/activate                 # activate venv 
pip install -r requirements.txt          # install requirements
python manage.py migrate                 # create database tables/fields
python manage.py loaddata data.json      # load initial data
python manage.py runserver               # run local server
```

# Api

*format:* http_verb : url : action

GET : http://localhost:8000/api/ : gets all posts

POST : http://localhost:8000/api/ : creates new post

<br>

GET : http://localhost:8000/api/{id} : gets post with post_id *{id}*

PUT : http://localhost:8000/api/{id} : updates post with post_ud *{id}*

DELETE : http://localhost:8000/api/{id} : deletes post with post_id *{id}*


# Frontend

## Prerequisites 
1. [Node](https://nodejs.org/en/)

## Installation 
1. Change directory to frontend using `cd frontend`
2. Run `npm install` to install project dependencies.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
