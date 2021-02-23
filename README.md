# posthere1_be
Team collaborative React web application that uses an algorithm to help users post their comments on Reddit


 Action                      | URL                        | Method | Response           |
| :-------------------------- | :------------------------- | :----- | :----------------- |
| Can reach API               | /                          | GET    |  valid 200 OK      |
| register a user             | api/auth/register          | POST   |  valid 201 Created |
| login a user                | api/auth/login             | POST   |  valid 200 OK      |
| can get a list of users     | api/users                  | GET    |  valid 200 OK      |
| can delete a user           | api/users/:id              | DELETE |  valid 200 OK      |
| can view all posts          | api/posts                  | GET    |  valid 200 OK      |
| can view post by ID         | api/posts/:id              | GET    |  valid 200 OK      |
| can add a post              | api/posts/:id              | POST   |  valid 201 Created |
| can update your post        | api/posts/:id/             | PUT    |  valid 200 OK      |
| can delete your post        | api/posts/:id/             | DELETE |  valid 200 OK      |

 

## REGISTRATION DATA

| PROPERTY               | TYPE              | EXAMPLE          | Notes                          |
| :-------------------   | :---------------- | :--------------  | :----------------------------- |
| username               |  string           | "username"       | required                       |
| password               |  string           | "password"       | required                       |


## LOGIN DATA

| PROPERTY               | TYPE              | EXAMPLE          | Notes                          |
| :-------------------   | :---------------- | :--------------  | :----------------------------- |
| username               |  string           | "Reddit User"    | required                       |
| password               |  string           | "password"       | required                       |

## post DATA

| PROPERTY               | TYPE              | EXAMPLE          | Notes                          |
| :-------------------   | :---------------- | :--------------  | :----------------------------- |
| title                  |  string           | "Title of Post"  | required                       |
| text                   |  string           | "post text"      | required                       |
| results                |  number           | 1                | Can only be 1, 3, or 5         |


### THINGS TO NOTE ###
