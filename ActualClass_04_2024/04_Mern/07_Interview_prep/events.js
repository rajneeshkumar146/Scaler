const eventEmitter = require("events");
const myEmitter = new eventEmitter();

const secondCb = (...args) => {
    console.log("Callback Listner for the new Events: ", args);
    console.log("----------------------");
}

// listners
myEmitter.on("myEvent", (...args) => {
    console.log("There is a new Event! ", args);
});

myEmitter.on("myEvent", (...args) => {
    console.log("Another listner for the new event: ", args);
    console.log("----------------------");
});


// emit an event.
myEmitter.emit("myEvent", 1, 2);
myEmitter.on("myEvent", secondCb);
myEmitter.emit("myEvent", 1, 2, 3);


/**
 * this.event = {}
 * event objects will have keys {events} and values {array of listner}
 * on() -> add a listner to the {events}
 * emit() -> emit the event
 * 
 * 
 * this.events = {
 * myEvent: [listener1, listener2, listener3],
 * anotherEvent: [[listener4, listener5]]
 * } 
 * 
 */
