setTimeout(()=>console.log(1),0);

new Promise(function(resovle,reject){
    console.log(2)
    resovle(3)
}).then((val)=>{
    console.log(val);
    setTimeout(()=>{console.log(4)})
});

new Promise(function(resovle,reject){
    console.log(20)
    resovle(30)
}).then((val)=>{
    console.log(val);
    setTimeout(()=>{console.log(40)})
});

// 2,3, 20,30, 1,4, 40
