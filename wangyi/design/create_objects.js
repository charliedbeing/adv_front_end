/**
 * Factory
 * 
 * Builder 轮播图
 */
let window ={};

(function(){
    function infoPop(){}
    function confirmPop(){}
    function cancelPop(){}
    
    // create 3  info, 3 confirm, 3 cancel
    
    function pop(type,content, color){
        switch (type) {
            case "info":
                return new infoPop(content, color)
            case "cofirm":
                return new confirmPop(content, color)
            case "cancel": 
                return new cancelPop(content, color)
            default:
                break;
        }
    }
    window.pop=pop
})();


var arr=[
    {type:'info',content:'hello',color:'red'},
    {type:'info',content:'hello2',color:'red'},
    {type:'info',content:'hello3',color:'red'},
    {type:'cofirm',content:'Yes1',color:'red'},
    {type:'cofirm',content:'Yes2',color:'red'},
    {type:'cofirm',content:'Yes3',color:'red'},
]

let p1 = window.pop('info','hello','red')

arr = arr.map(p => window.pop(p.type,p.content,p.color))

console.log(typeof arr[0]);


(function(){

    function pop2(type,content,color){
        if(this instanceof pop2){
            var s = new this[type](content,color)
            return s
        }else{
            return new pop2(type,content,color)
        }
    }

    pop2.prototype.info= function(){
        console.log('info   Pop')
    }
    pop2.prototype.confirm= function(){
        console.log('confirmPop')
    }
    pop2.prototype.cancel= function(){
        console.log('cancelPop')
    }

    window.pop2=pop2

})()


let p2 = window.pop2('info','hello','red')




