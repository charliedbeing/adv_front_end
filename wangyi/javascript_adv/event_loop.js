function foo() {
    console.log('foo');
  }
  
  function bar() {
    console.log('bar');
  }
  
  function baz() {
    console.log('baz');
  }
  
//   setTimeout(foo, 0);
  
//   bar();
  
//   setTimeout(baz, 0);

//   console.log('------------')

  //
/**
 * In the Chrome event loop mechanism, there are two main types of queues:

Callback queue: This is also known as the "task queue". When an asynchronous function completes, 
its callback function is added to the callback queue. 
The event loop continuously checks this queue for tasks to execute. 
When the call stack is empty, the event loop takes the first task from the callback queue 
and executes it. 

Examples of asynchronous functions that use the callback queue include setTimeout, setInterval, and requestAnimationFrame.

Microtask queue: This is also known as the "job queue". Microtasks are higher-priority tasks that need to be executed as soon as possible. When a microtask is enqueued, it is added to the end of the microtask queue. Examples of functions that add microtasks to the queue include Promise.resolve(), Promise.reject(), and queueMicrotask(). The event loop checks the microtask queue after each task on the call stack completes, and executes all microtasks that are currently in the queue before continuing to process the callback queue.

It's important to note that the microtask queue has a higher priority than the callback queue.
 This means that any microtasks in the queue will be executed
  before any callbacks in the callback queue.
   This can have implications for the order in which code is executed and can cause 
   unexpected behavior if not taken into account.



The event loop will always first check the microtask queue (i.e., the "job queue") 
for any pending callbacks before checking the callback queue.
 Therefore, any callbacks registered with Promise.resolve() will be executed before 
 any setTimeout callbacks.

To summarize, Promise and setTimeout are not in the same queue in the JavaScript event mechanism.
 The setTimeout callback is added to the callback queue, while the Promise callback is added to 
 the microtask queue. The event loop will always check the microtask queue
 (i.e., the "job queue") before checking the callback queue.

 */

console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve().then(() => console.log("Promise 1"));

Promise.resolve().then(() => {
  console.log("Promise 2");
  setTimeout(() => console.log("Timeout 2"), 0);
});

console.log("End");