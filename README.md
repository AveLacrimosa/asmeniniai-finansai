# How to use
To clone and run this application, you'll need [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/download/) and [PostMan](https://www.postman.com/downloads/) From your command line:
```
# Clone this repository
$ git clone 

# Go into the repository
$ cd Event_Page

# Install dependencies
$ npm install

# Run the app
$ npm start
```


# EndPoints
To use these endpoints you will need to have [PostMan](https://www.postman.com/downloads/) opened and for each endpoint it's recommended to open a new tab by pressing new and HTTP Request 

## Register

1. Pick the Post Method
2. Put ```http://localhost:5001/api/users``` as url
3. Select Body section, select raw and on the right change Text to JSON
4. Paste in this code and replace the necessary information with your own
	```
	{
    "name": "your name",
    "email": "email@gmail.com",
    "password": "password"
	}
    ```
5. Click "Send" Button

## Login

1. Must have completed the registration
2. Pick the Post Method
3. Put ```http://localhost:5000/api/users/login``` as url
4. Select Body section, select raw and on the right change Text to JSON
5. Paste in this code and replace the necessary information with your own
 	```
	{
    "email": "email@gmail.com",
    "password": "password"
	}
    ```
6. Click "Send" Button
7. At the Bottom copy the "token" value

## Creating an event

1. Pick the Post Method
2. Put ```http://localhost:5001/api/finance``` as url
3. Select Body section, select raw and on the right change Text to JSON
4. Paste in this code and replace the necessary information with your own
 	```
	{
    "salary": "Your salary",
    "category": "Spending category",
    "spending" : "How much money you spent"
	}
    ```
5. Make sure you have the token copied from Login
6. Click the Headers section next to Body
7. In the Key section type "Authorization", In the Value section type "```Bearer the_token```"
8. Click "Send" Button

## Update event

1. Pick the PUT Method
2. Copy the _id of the event you want to update and replace "your_id" with it in the next step
3. Put ```http://localhost:5000/api/finance/your_id``` as url
4. Select Body section, select raw and on the right change Text to JSON
5. Paste in this code and replace the necessary information with your own
 	```
	{
    "salary": "Your salary",
    "category": "Spending category",
    "spending" : "How much money you spent"
	}
    ```
6. Make sure you have the token copied from Login
7. Click the Headers section next to Body
8. In the Key section type "Authorization", In the Value section type "```Bearer the_token```"
9. Click "Send" Button

## Delete event

1. Pick the DELETE Method
2. Copy the _id of the event you want to delete and replace "your_id" with it in the next step
3. Put ```http://localhost:5001/api/finance/your_id``` as url
4. Make sure you have the token copied from Login
5. Click the Headers section next to Body
6. In the Key section type "Authorization", In the Value section type "```Bearer the_token```"
7. Click "Send" Button


## Viewing Your events

1. Pick the GET Method
3. Put ```http://localhost:5001/api/finance/``` as url
4. Make sure you have the token copied from Login
5. Click the Headers section next to Body
6. In the Key section type "Authorization", In the Value section type "```Bearer the_token```"
7. Click "Send" Button