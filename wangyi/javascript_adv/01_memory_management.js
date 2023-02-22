function testMemory(){
    var memory = process.memoryUsage().heapUsed;
    console.log(memory/1024/1024 + "mb")
}

function f1(){
    var a = {a1:234}
    var b =a
    var c = [1,2,3]
    var d = function(){console.log(123)}
    {a2:456}
    
    const descriptors = Object.getOwnPropertyDescriptors(c)
    
    console.log(descriptors)
    
    
    
    var size = 30* 1024 * 1024
    
    // global variable 
    var arr1 = new Array(size)
    testMemory();
    
    // var arr2 = new Array(size)
    // testMemory()
    // var arr3 = new Array(size)
    
    (function(){
        // local variable
        var arr2 = new Array(size)
        testMemory()
        var arr3 = new Array(size)
        testMemory()
    })();
    
    var3 = (function(){
        // local variable
        var arr2 = new Array(size)
        testMemory()
        var arr3 = new Array(size)
    
        testMemory()
        return arr3
    })();
    
    testMemory()
    var arr4 = new Array(size)
    testMemory()
    var arr5 = new Array(size)
    testMemory()
    var arr6 = new Array(size)
    testMemory()
    
}

// one avoid to define global varaible , if defined, it need to be released as soon as possible

// two avoid closure

// var arr=[] // arr is global variable, it will not be released when memory are limited.
function fn(){
    // var arr=[]   each time when fn finished, arr was released
    return function(){
        var size = 30* 1024 * 1024
        arr.push(new Array(size))
    }

}

for(var i=0;i<10;i++){
    fn()();
    testMemory();
}

// here 
var fn2 = (function(){
    var arr =[];   // arr is closure for fn2 , and fn2 is global variable 
    return function(){
        // method to make sure the closure variable keep fixed amount of memory size
        // avoid it group up until it's memory overflow
        if(arr.length>4){
            arr.shift()
        }
        arr.push(new Array(30*1024*1024));
        testMemory();
    }
})();



for(var i=0;i<10;i++){

    fn2()
    
}

/**
 *  Node  global.gc
 * node --max-old-space-size=1700 a.js or node --max-new-space-size=1024 b.js
 * 
 * The V8 JavaScript engine uses a combination of stop-the-world and incremental approaches for garbage collection, 
 * depending on the type of garbage collection being performed.

V8 has two main garbage collection algorithms: generational garbage collection and full stop-the-world garbage collection.

Generational garbage collection is an incremental algorithm that V8 uses to collect garbage from new objects 
and short-lived objects. This algorithm divides objects into two generations, young and old. 
The young generation is collected incrementally, while the old generation is collected using a stop-the-world approach. 
During the young generation collection, the V8 engine is able to run JavaScript code in parallel with garbage collection.

Full stop-the-world garbage collection is used by V8 for long-lived objects and when the heap size exceeds
 a certain threshold. During this type of garbage collection, V8 pauses the JavaScript execution completely, 
 and all JavaScript threads are stopped while the garbage collector runs. Once garbage collection is complete,
  JavaScript execution resumes.

The use of both stop-the-world and incremental approaches allows V8 to balance the need for 
fast and efficient garbage collection with the need to minimize the impact on JavaScript performance. 
By using generational garbage collection for short-lived objects and incremental collection for new objects, 
V8 can minimize the frequency and duration of stop-the-world collections, resulting in better overall performance.
 */