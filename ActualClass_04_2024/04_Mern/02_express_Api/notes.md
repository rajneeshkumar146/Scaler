## APis
   In backend developement, an API of various endpoints or routes that define specific functionality or service that your server provide. 


## Express

  1. Simpler and cleaner syntax
  
  2. Code readability
  
  3. Routing: Express provides a straightforward way to define routes
     and handle different HTTP methods (GET, POST, PUT, DELETE,
     etc.). In vanilla Node.js, you'd typically have to handle URLs and
     methods manually, which can be cumbersome.
  
  4. Middleware: One of the core features of Express is its
     convenience in use of middleware, which are functions that have
     access to the request object (req), the response object (res), and
     the next middleware function in the application’s
     request-response cycle. .
   

Setting up an express application.
Step 1: create a file index.js
step 2: npm init -y
step 3: npm install express --save
step 4: sudo npm i nodemon -g   (it will install nodemon at global level)


## Seeing the request body.
    What Does `app.use(express.json())` Do?
    
    Purpose: It helps your Express application understand and work with JSON data sent in requests.
    
    Functionality: It automatically parses incoming JSON requests and
    makes the data available in req.body.
