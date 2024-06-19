const express = require("express");

// create an express app.
const app = express();
app.use(express.json());   // it is a middleware for all post request which help to receive reqest body.
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));


const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // call the next middleware.
}

// app.use(loggerMiddleware);  // it will work for all type of requests.


// define a route
app.get("/", (req, res) => {
    res.send("Hello express!!")
});

app.get("/about", (req, res) => {
    res.send("this is about page");
});

app.post("/data", (req, res) => {
    // console.log("request recieved", req);
    console.log("request recieved", req.body);
    res.send("this is post request");
});

const users = [
    { id: 1, name: "john" },
    { id: 2, name: "Doe" },
];

app.post("/users", (req, res) => {
    const newUser = req.body;

    // Operation
    const userId = users.length + 1;
    newUser.id = userId;

    // persist this information in your DB
    users.push(newUser);

    // send the status code.
    res.status(201).json({ message: "User created", user: newUser });

    console.log("Print all Users: ", users);
});


const usersDb = [];
const notAllowList = ["R", "r"];
app.post('/payment', (req, res) => {
    const paymentBody = req.body;
    if (paymentBody.user.startsWith('r') || paymentBody.user.startsWith('R')) {   // instead of this one create a notAllowList
        res.status(400).json({ message: 'Invalid User' });
    }else {
        usersDb.push(paymentBody);
        res.status(200).json({ message: 'Valid User,User saved'});
    }

    console.log("Print all Users: ", usersDb)
});


app.delete("/users/:id", (req,res)=>{
    const userId = parseInt(req.params.id);

    // find the user with id.
    const userIndex = users.findIndex((user)=> user.id === userId);
    if(userIndex === -1){
        return res.status(404).json({message:"user not found"});
    }

    users.splice(userIndex, 1);
    res.status(200).json({message: "user deleted"})

    console.log("Print all Users: ", users)
});

app.get("/special", loggerMiddleware, (req, res)=> {
    res.send("this is a special route");
});

// localhost:3000/search?name=rajneesh
app.get("/search", (req, res)=> {
    const queryParam = req.query;   
    console.log("queryParam: ", queryParam);
    res.send(`Your parameter are ${JSON.stringify(queryParam)}`)
});

app.use((req, res)=>{
    res.status(404).send("page not found");
});

// Start the server.
const port = 3000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

