function debounce(func,delay){

    let  controll_f_id

    return function(...args){
        if(controll_f_id){
            clearTimeout(controll_f_id)
        }
        controll_f_id = setTimeout(() => {
            func.apply(this,args)
        }, delay);
    }
}

function print_out_input(value){
    console.log(value)
}

let debounce_print = debounce(print_out_input,500)