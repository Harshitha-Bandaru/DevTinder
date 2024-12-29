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
