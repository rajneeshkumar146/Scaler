*Event Loop with Callback Queue*
The event loop is a fundamental concept in JavaScript that governs how asynchronous operations are managed and executed within a single-threaded environment.

The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first function from the callback queue and pushes it onto the call stack for execution.

This process ensures that the asynchronous code is executed when the call stack is clear.

Takeaways:
JavaScript is single-threaded. It provides us the logic whereas the Web API provides the features.

Callback queue: When an asynchronous operation (like a setTimeout or an event listener) is ready to be executed, its callback function is placed in the callback queue.

Event loop: The event loop continuously checks the call stack and the callback queue and pushes the function from the callback to the callstack.