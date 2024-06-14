## Nodejs

# Why use nodejs for web serve
1. Node.js is a popular choice for web servers, especially in
scenarios involving heavy I/O operations and small server
requirements. Here's why Node.js is a suitable option for such
use cases:

2. Non-Blocking I/O Model:
a. Node.js is designed around a non-blocking, event-driven
architecture. This means it can efficiently handle multiple
I/O operations concurrently without blocking the execution
of other tasks.
b. When performing heavy I/O operations, such as reading
and writing files, making network requests, or interacting
with databases, Node.js can initiate these operations and
continue executing other code while waiting for the I/O
operations to complete. This asynchronous approach is
highly advantageous for scenarios with many concurrent
I/O tasks.

3. Scalability:
a. In situations involving heavy I/O, it's common for multiple
clients to make simultaneous requests to the server.
Node.js's non-blocking model allows it to handle a large
number of concurrent connections efficiently, making it a
suitable choice for scalable applications. It can process
incoming requests as soon as they arrive, rather than
waiting for each request to complete before moving on to
the next one.

4. Low Overhead:
a. Node.js has a relatively small memory footprint compared
to some other web server technologies. This makes it
well-suited for small server applications where resource
utilization needs to be efficient. You can run multiple
Node.js instances on a single server without consuming
excessive system resources

5. Rich Ecosystem:


## Ports
a. What is a Port Number?

b. In the context of computer networking, a port number is a
way to identify a specific process or service within a device
that uses the Internet Protocol (IP).

c. Why the concept of ports was invented if it is not a
physical thing?

d. Think of ports as a mechanism for multitasking. While an
IP address identifies a machine, many different
applications and services run on that machine at once.
Each of these services needs a way to receive the
appropriate data packets without confusion. Ports allow a
single machine with one IP address to efficiently manage
multiple services simultaneously. By assigning different
services to different ports, a computer can easily determine

which application should handle incoming data.
2. Valid Range: Port numbers can range from 0 to 65535.
Well-Known Ports: 0-1023, reserved for system and standard
services.
4. Registered Ports: 1024-49151, typically used for user
applications.
5. Dynamic/Private Ports: 49152-65535, used for dynamic
purposes.


## Nodemon
npm intsall -g nodemon
npm install --save-dev nodemon

