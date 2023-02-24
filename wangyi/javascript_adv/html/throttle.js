function throttle(fn,delay){
    let flag = true
    let throttle_id

    return function(){
        let args = [...arguments]
        if(flag){

            fn.apply(this,args)
            flag =false

            throttle_id = setTimeout(()=>{
                fn.apply(this,args)
                flag =false
            },delay)

        }else{
            if(throttle_id){
                clearTimeout(throttle_id)
            }

            throttle_id = setTimeout(()=>{
                fn.apply(this,args)
                flag =false
            },delay)
        }
    }
}
function submit_action(){
    console.log('submit')
}

let throttle_submit = throttle(submit_action,500)
