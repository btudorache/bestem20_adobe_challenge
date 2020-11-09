# Setup Backend - Ubuntu/MacOS

## Prerequisites 
**Requirements: Python3, pip**

## Installation 
Clone the repository locally:

```
cd bestem20_adobe_challenge_seism/backend/      # change folder
pip3 install virtualenv                         # install virtualenv package
virtualenv venv                                 # create virtual env
source venv/bin/activate                        # activate venv 
pip3 install -r requirements.txt                # install requirements
python3 manage.py migrate                       # create database tables/fields
python3 manage.py loaddata data.json            # load initial data
python3 manage.py runserver                     # run local server
```

Or just use the provided api at https://artbazar.herokuapp.com/api/

## Api

*format:* http_verb : url : action

GET : http://localhost:8000/api/ : gets all posts

POST : http://localhost:8000/api/ : creates new post

<br>

GET : http://localhost:8000/api/{id}/ : gets post with post_id *{id}*

PUT : http://localhost:8000/api/{id}/ : updates post with post_ud *{id}*

DELETE : http://localhost:8000/api/{id}/ : deletes post with post_id *{id}*

<br>

GET : http://localhost:8000/api/random/ : gets random post from database


# Setup - Frontend

## Prerequisites 
1. [Node](https://nodejs.org/en/)

## Installation 
1. Change directory to frontend using `cd frontend`
2. Run `npm install` to install project dependencies.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Media
Media for our app:

Main List View

![main](C:\Users\Bogdan\Desktop\my_projects\Python\bestem20_adobe_challenge_seism\readme_media\main.png)

Detail View

![detail](C:\Users\Bogdan\Desktop\my_projects\Python\bestem20_adobe_challenge_seism\readme_media\detail.png)

Create View

![create](C:\Users\Bogdan\Desktop\my_projects\Python\bestem20_adobe_challenge_seism\readme_media\create.png)