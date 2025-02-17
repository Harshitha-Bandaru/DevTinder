DevTinder

1. Creating the Project

- npm init - generates package.json
- src/app.js - starting point of application

2. Routing and Request Handlers

- order of writing the routes matter a lot
- Take note of wild card match

3. Route Handlers

- You can write the route handlers like app.route("/route",RH1,RH2,[RH3,RH4],RH5)

4. Error Handling

- to handle the errors gracefully without exposing any code -
  app.use("/",(err,req,res,next)=>
  {if(err){
  res.status(500).send("Something went wrong")
  }
  })

5. Best Practice

- You should connect to DB first and then listen on a port, that way, you can always make sure that database connection is established when users hit the api's

6. connecting to db, schema, model

- connect to db
- define schema
- define model
- Convention : Model name should always with Capital letter indicating it's a model

7. Diving into APIs

- If the casing doesn't match in the key, mongodb ignores it
- If you pass a key that is non-existent in schema, MongoDB ignores it

To Explore:

- difference between JSON and javascript object
- objectId, **v** in mongodb
- express.json - middleware
- difference between PATCH and PUT

8. Data Sanitization and Schema Validations

- NEVER TRUST req.body

- Explore schema type options from the documentaion
- add required, unique, lowercase, min, minlength, trim
- add default
- create a custom validation function for gender
- add timestamps
- add api level validations for PATCH, Signup POST API
- Data Sanitization : add api validation for each field
- Explore validator and use the functions - password, url, email etc.

9. Encrypting Passwords

- Validate data in Signup after receiving - helper function
- Install bcrypt
- create a pash using bcrypt.hash
- write login api, compare hash
- just sat invalid credentials, never expose your DB

10. JWT, cookies, authentication

- jsonwebtoken lib to generate, sign
- cookie parser to parse coookies

To explore: this in arrow functions, normal functions
token expiry, cookie expiry
