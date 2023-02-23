import {myPromise} from "./mypromise.js"

function addTwo(num){
    return num+2
}
function addThree(num){
    return num+3
}

function multiyFive(num){
    return num * 5
}

function compose(a,b){

    var _args = arguments

   return function(x){
        var temp
        for(var i=0;i<_args.length;i++){
            if(i ==0){
                temp = _args[i](x)
            }else{
                temp=_args[i](temp)
            }
        }
        return temp
   }
}



var num_add_2_add_3 = compose(addTwo,addThree,multiyFive)

console.log(num_add_2_add_3(10))


// Promise.resolve(10).then(addTwo).then(addThree).then(res=>{
//     console.log(res)
// })




// myPromise.then(()=>10).then(addTwo).then(addThree).then(res=>{
//     console.log(res)
// })

let test =  new myPromise(()=>10);


test.then(addTwo).then(addThree).then(res=>{
    console.log(res)
})