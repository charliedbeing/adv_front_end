export function myPromise(fn) {
    let state = "pending";
    let value = null;
    let handlers = [];
  
    function resolve(result) {
      state = "fulfilled";
      value = result;
      handlers.forEach(handle);
      handlers = null;
    }
  
    function reject(error) {
      state = "rejected";
      value = error;
      handlers.forEach(handle);
      handlers = null;
    }
  
    function handle(handler) {
      if (state === "pending") {
        handlers.push(handler);
      } else {
        if (state === "fulfilled" && typeof handler.onFulfilled === "function") {
          handler.onFulfilled(value);
        }
        if (state === "rejected" && typeof handler.onRejected === "function") {
          handler.onRejected(value);
        }
      }
    }
  
    this.then = function(onFulfilled, onRejected) {
      return new myPromise(function(resolve, reject) {
        handle({
          onFulfilled: onFulfilled || null,
          onRejected: onRejected || null,
          resolve: resolve,
          reject: reject
        });
      });
    };
  
    fn(resolve, reject);
  }
  


  // Example usage:
  let p = new myPromise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Hello, world!");
    }, 1000);
  });
  
  p.then(function(value) {
    console.log(value); // Output: "Hello, world!"
  });
  