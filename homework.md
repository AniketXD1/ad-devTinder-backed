- Create a repository
- Initialize the repository
- node_modules, package.json, package-lock.json
- Install express
- Create a server
- Listen to port 7777
- Write request handlers /test, /hello
- Install nodemon and update scripts inside package.json
- what are dependencies
- what is the use of "-g" while npm install
- Difference between caret and tilde (^ vs ~)

- Initialize git
- .gitignore
- create a remote repo on github
- Push all code to remote origin
- Play with routes and route extensions ex. /hello , /hello/2 , /xyz
- Order of the routes matter a lot
- Install Postman app and make a workspace/collection > test API call
- write logic to handel GET, POST, PATCH, DELETE API calls and test them on postman
- Explore routing and use of ?, +, \* , () in the routes
- use of regex in routes /a/ , /.\*fly$/
- Reading the query params in the routes
- Reading dynamic routes

- Multiple route handlers - Play with the code
- next()
- next function and errors along with res.send()

- app.use("/user, rH [rH2,rH3],rH4,rH5")
- what is middleware? why do we need it?
- how express JS basically handles request behind the scenes
- Difference between app.use and app.all
- write a dummy auth middleware for a admin
- write a dummy auth middleware for all user routes , except /user/login
- Error Handling using app.use("/", (err, req, res, next)=>{})

- Create a free cluster on mongoDB Offical website(mongo Atlas)
- Install mongoose library
- Connect your application to the Database "connection-URL"/devTinder
- call the connectDB function and connect to database before starting application on 7777
- Create user schema & User Model
- create POST/signup API to add data to database
- Push some documents using API calls form postman
- Error handling using try , catch

- js object vs JSON (difference)
- Add the express.json middleware to your app
- Make your signup API dynamic to recive data form the end user
- User.findone()--> with duplicate emailId which object will return
- API - get user by email
- API - Feed API - GET /feed - get all the users from the database
- API - get user by ID
- create a delete user API
- difference between PATCH and PUT
- API - update a user
- explore the mongooes documention for model methods
- what are options in a Model.findOneAndUpdate method explore more about it
- API - update user with email id

- Explore schematype options from the documention
- add required, unique, lowercase, min, minLength, trim,
- add default
- create a custom validate function for gender
- Improve the DB schema - Put all appropiate validation on each field in schema
- Add timestamps to the userSchema
- Add API level validation on PATCH request and Signup post api
- Data sanitizing Add API validation for each field
- Install validator
- explore validator library function and use validator function for password, email, photoUrl

- NEVER TRUST req.body
-

- validate data in SignUp API
- Install bcrypt package
- create PasswordHash using bcrypt.hash & save the user is encrypted password
- create login API
- Compare passwords and throw error if email or password is invalid
