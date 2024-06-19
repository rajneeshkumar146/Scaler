const express = require("express");

// create an express app.
const app = express();
app.use(express.json());   // it is a middleware for all post request which help to receive reqest body.

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

// Start the server.
const port = 3000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

