const http = require("http")


const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/plain');
    // res.write('Hello World!!!');

    // res.setHeader('Content-Type', 'text/html');
    // res.write("<html><head><title>My First Node Server</title></head><body><h1>Welcome to my first Node Server</h1></body></html>")
    // res.write("<h2>My name is Node</h2>")
    // res.write("<h3>Nodeeee is super cool</h3>")

    res.setHeader('Content-Type', 'text/json');
    const jsonData={
        message: "Hello World!",
        data: new Date()
    };

    const jsonResponse = JSON.stringify(jsonData);
    res.write(jsonResponse);

    res.end();
});

const port = 3000;
const host = "localhost";
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});