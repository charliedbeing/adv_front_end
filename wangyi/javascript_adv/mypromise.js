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

new Promise(resolve =>{
  console.log('a1')
  resolve()
})
.then(()=>{
  console.log('a2')
  new Promise(resolve =>{
    console.log('b1')
    resolve()
  })
  .then(()=>console.log('b2'))
  .then(()=>console.log('b3'))
})
.then(()=>console.log('a4'))



function test1(){
    
console.log('0_first')
  
setTimeout(()=>{
  console.log('setTimeout1')
},10)


  // Example usage:
  // myPromise
  let p = new myPromise(function(res, rej) {
    console.log('02_ belonging creating promise ')
    setTimeout(function() {
      console.log('will be called depended on timer')
      res("Hello, world!");
    }, 10);
  });
  
  p.then(function(value) {
    console.log(value); // Output: "Hello, world!"
    new myPromise((resovle,reject)=>{
      setTimeout(()=>{
        resovle("Charlie")
      })
      
    })

  }).then((value)=>{
    console.log("hello" + value)
  });




  let p2= new Promise(function(resolve,reject){

    console.log('03_ belonging creating promise')
    setTimeout(function(){
  
      reject("no way to run")
    },10)
  })

  p2.then(()=>{},(e)=>{
    console.error(e)
  })

  setTimeout(()=>{
    console.log('setTimeout2')
  },10)
  

  
}

