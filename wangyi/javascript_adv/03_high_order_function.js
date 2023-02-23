var arr=[1,2,3]

Array.prototype.myForEach= function(fn){
    for(var i=0;i< this.length;i++){
        fn(this[i])
    }
}

// arr.myForEach((x)=>console.log(x))

arr.myForEach(x=> 3*x)

Array.prototype.myMap= function(fn){
    for(var i=0;i<this.length;i++){
        this[i] = fn(this[i])
    }
}

// arr.myMap(x=> 3*x)

console.log(arr)
//[1,2,3]

var arr_t =[10,20,30]

var re_test =  arr.reduce((pre,now,index,arr_t)=>{
    //console.log(arr_t)
    console.log(pre)
    return pre+now
},0)

console.log(re_test)

// var f = function(a1,a2){
//     return a1+a2
// }

// console.log([... f.arguments])

Array.prototype.myReduce=function(fn,initValue){
    var result
    if(initValue != undefined){
        for(var i=0; i< this.length;i++){
            if(i==0){
                result = initValue
            }else{
                result = fn(result,this[i],i,this)
            }      
        }
    }else{
        for(var i=1; i< this.length;i++){
            if(i==1){
                result = fn(this[0],this[i],i,this)
            }else{
                result = fn(result,this[i],i,this)
            }      
        }
    }

    return result
    
}

/**

Array.prototype.MyReduce= function(fn,init){
    var i=0
    var len = this.length
    var pre = init
    if(init == undefined){
        pre = this[0]
        i = 1
    }
    for(i;i<len;i++){
        pre = fn.call(this,pre,this[i],i,this)
    }
    return pre
}

var my_test = arr.myReduce((pre,now,index,arr)=>{
    console.log(index)
    console.log(arr)
    return pre+now;
},100)

console.log(my_test)

var arr_1 =[{a:1},{a:2},{c:3}]

var my_test_2=  arr_1.myReduce((pre,now,index,arr)=>{
        return {... pre, ...now}
})

console.log(my_test_2)

const merge = (pre,now,index,arr)=>{
    for(const key in pre){
        if(key in now){
            now[key]=pre[key]+now[key]
        }else{
            now[key]=pre[key]
        }
    }
    return now
}

var my_test_3=  arr_1.myReduce(merge)

console.log(my_test_3)


var routes = [
    {path:'/' , components:"hello"},
    {path:'/test' , components:"test"}
];

const obj = {
    '/':'hello',
    '/test':"test"
}
var o={}
o[routes[0]['path']]= routes[0]['components']

console.log(o)


const merge2 = (pre,now,index,arr)=>{
    var pre_n = {}
    var now_n = {}

    pre_n[pre['path']]=pre['components']
    now_n[now['path']]=now['components']

    return {...pre_n , ...now_n}
}

var obj1 = routes.myReduce(merge2)

console.log(obj1)

// console.log(obj1['/test'])


 */

var arr3 =[
    {
        type:"all",
        num:1
    },
    {
        type:"all",
        num:2
    },
    {
        type:"all",
        num:3
    }
]

// var test_arr3 = arr3.myReduce((pre,now)=>{
  


//     if(pre['type'] === "all" && (now['type'] === "all")){
//         now['num'] = now['num']+pre['num']
//         return now
//     }else if(pre['type'] === "all" && now['type'] !== "all"){
//         return pre
//     }else if (now['type'] === "all" && pre['type'] !== "all"){
//         return now
//     }else{
//         return {}
//     }
    
// })

// console.log(test_arr3['num'])


var test_arr3 = arr3.myReduce((pre,current)=>{
    if(current['type'] === 'all'){
        pre = pre+ current['num']
    }
    return pre
},0)

console.log('====================')
console.log(test_arr3)

var test_arr4 = arr3.reduce((pre,current)=>{
    if(current['type'] === 'all'){
        pre = pre+ current['num']
    }
    return pre
},0)

console.log(test_arr4)

var arr4= [1,2,3,4,5,6]

var test_arr4= arr4.filter((current,index)=>{
    return current%2 ===0
})

console.log(arr4)
console.log(test_arr4)

Array.prototype.myFilter= function(fn){
    var result =[]
    for(var i=0;i<this.length;i++){
        if(fn.call(this,this[i],i)){
            if(typeof this[i] ==='object'){
                result.push(Object.create(this[i]))
            }
            result.push(this[i])
        }
    }
    return result
}
var arr5= [1,2,3,4,5,6]

var test_arr5= arr5.filter((current,index)=>{
    return current%2 ===0
})

console.log(arr5)
console.log(test_arr5)

/**
 * find all attributes in object which match some condition
 */
var object1= {name:'dzg',age:40,adress:'38 catalina cres'}

Object.prototype.findAttributes= function(fn){
    var result =[]
    for (const key in this) {
        if(fn(key)){
            result.push(key)
        }
    }
    return result
}

var test_obj1 = object1.findAttributes(atrr => atrr.length >3)

console.log(test_obj1)

var obj = {
    num1:1,
    num2:2,
    num3:3,
    num4:4
}

var test_obj11 = obj.findAttributes(attr => obj[attr]%2 ===0)

console.log(test_obj11)
