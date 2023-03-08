function f(fn){
    const res =function(value){
        console.log(value)
        console.log('res')
    }

    const rej = function(value){
        console.log(value)
        console.log('rej')
    }

    fn(res,rej)
}

var test = new f(function(a,b){
    a("hello");
    b("hi")
})

