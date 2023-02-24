var obj = {
    username: 'charlie',
    arr:   [1,2,[1,2,[1,2,3]]],
    friends: [
        2,
        "hello",
        [1,2,3],
        {
            name: 'charlie',
            address: {
                country: 'ca',
                province: 'ON',
                city: 'markham'
            }
        },
        {
            name: 'fiona',
            address: {
                country: 'ca',
                province: 'ON',
                city: 'north york'
            }
        }],
    address: {
        houseNo: 38,
        roadName: 'Catalina Cres',
        city: {
            name: 'richmond hill',
            code: 'rh',
            location: 'north of toronto'
        }
    }
}

function copy_array_deep(arr,acc){

    for(var i=0;i<arr.length;i++){

        if(typeof arr[i] !='object'){
            acc.push(arr[i])
        }else if(arr[i] instanceof Array){
            acc.push(copy_array_deep(arr[i],[]))
        }else if(typeof arr[i] === 'object' &&  !(arr[i] instanceof Array) ){
            acc.push(f(arr[i],{}))
        }
    }
    return acc;
}


function f(obj, acc) {
    for (const key in obj) {
        if (typeof obj[key] !== 'object') {
            acc[key] = obj[key]
        } else if (!(obj[key] instanceof Array)) {
            acc[key] = f(obj[key], {})
        } else if (obj[key] instanceof Array) {
            acc[key]= copy_array_deep(obj[key],[])
        }
    }

    return acc;
}



// var arr1 =[1,2,[1,2,[1,2,3]]]
// var test2=  copy_array_deep(arr1,[])

// console.log(test2)

var test = f(obj, {})
// arr:   [1,2,[1,2,[1,2,3]]],
/*
 friends: [
        2,
        "hello",
        [1,2,3],
        {
            name: 'charlie',
            address: {
                country: 'ca',
                province: 'ON',
                city: 'markham'
            }
        },
*/
console.log(test['arr'][2][2][0])
console.log(test['arr'][2][2][1])
console.log(test['arr'][2][2][2])

console.log(test['friends'][3]['address']['city'])