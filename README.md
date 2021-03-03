# Authentication using JSON Web Tokens (JWTs) 

https://git.heroku.com/family-recipes-9.git
# Creates tempory user sessions with the Bearer Token

# Build Week Project Family Recipes

# Version 1

Will get/put/post/delete recipes, log the user in/out, register the user, view other users as a user, view other users as admin, or view the currently logged in user only.  

# End Points

POST | /api/auth/logout | Log the user out by destroying the session

POST | /api/auth/login | Logs in the user and returns the session token

POST  | /api/auth/login    | Logs in the user

POST  | /api/auth/register | Registers the user to the database

POST | /api/auth/register | Registers the user to the database & encrypts the password

POST | /api/recipes | Add another recipe

GET | /api/auth/users | Get User settings 

GET | /api/auth/users/:id | Get User settings based on user id 

GET | /api/recipes | Get recipes by user or role

PUT | /api/auth/users | Edit User settings (change password)

DELETE | /api/recipes/:id | Delete recipe based by id

# Recipe Schema object

{

    "id": 1,

    "title": "Eggwhites with ham",

    "source": "food.com",

    "ingredients": "fried shrimp with chocolate chips",

    "instructions": "Step 1 fry the shrimp step 2 batter the chocolate 3 other stuff as well here",

    "category": "c food",

    "img": "../../assets/img/shrimps.jpg"
    
}


# Advanced Dev Topics

Do we need posts to be public or do we need role restricted private posts?

For the recipes post at instructions value- Does front end need new lines for each direction? Do we need a way to map threw each step of the recipe? If so should this get changed to an array or a name value pair? Like an auto incrementing field within a record. Something where each step is a new element and is easily mapped threw to give you a new line on every step of that direction?


## Future

1] Work on validating and making middleware so each request or response based off the users session validity.

2] Work on Testing. 

3] Lets all make different styling skins once its done. 

