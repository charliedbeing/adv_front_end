var x=100

const module={
    x:42,
    getX:function(a){
        
        return this.x +a;
    }
}

const unboundGetX = module.getX
try {
    console.log(unboundGetX())
} catch (error) {
    
}


const bindGex = unboundGetX.bind(module,10 )

console.log(bindGex())

Function.prototype.mybind_= function(pointer){
    var self = this;
    var args = Array.prototype.slice.call(arguments,1)
    // return function(args){
    //      self.this = pointer
    //      return self(args)
    // }
    // self.this = pointer
    // return function(pointer){
    //     self.this = pointer
    //     return self(args)
    // }

    return function(){
        return self.apply(pointer,args.concat(Array.prototype.slice.call(arguments)))
    }
}

/**
 * the essential idea is to resolve the this pointer, make the function into the pointer object, 
 * then the function is inner of the object, and then this inner of  function will pointer to the object.
 * this is how to resovle this issue.
 */
Function.prototype.mybind= function(pointer,arg){
    var self = this;
    // var args = Array.prototype.slice.call(arguments,1)
    // return function(args){
    //      self.this = pointer
    //      return self(args)
    // }
    // self.this = pointer
    // return function(pointer){
    //     self.this = pointer
    //     return self(args)
    // }

    return function(){
        pointer['f_temp_1'] = self
        return pointer['f_temp_1'](arg)
    }
}


const bindGex2 = unboundGetX.mybind(module,10 )

console.log(bindGex2())



function myApply(fn, thisArg, argsArray) {
    // Check if the first argument is a function
    if (typeof fn !== "function") {
      throw new TypeError("First argument must be a function");
    }
    
    // Get the context object (thisArg) or global object (window)
    const context = thisArg || window;
    
    // Create a unique property name on the context object to store the function
    const uniquePropName = `__${Date.now()}`;
    context[uniquePropName] = fn;
    
    // Call the function with the given arguments
    const result = context[uniquePropName](...argsArray);
    
    // Delete the unique property from the context object to clean up
    delete context[uniquePropName];
    
    // Return the result of the function call
    return result;
  }
  