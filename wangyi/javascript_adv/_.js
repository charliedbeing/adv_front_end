export const  _= (function(){
    var _data = arguments

    return {

        getValue:function(){
            return _data;
        },

        filter:function(fn) {
            var data
            if(_data.length ===0){
                data =[...arguments]
            }else{
                data =_data
            }
            var result =[]
            var exist = false;
            for(var i=0;i< data.length;i++){
                if(fn(data[i])){
                    result.push(data[i])
                }
            }
            _data = result
            return this

        },

        unique:function(){
            var data
            if(_data.length ===0){
                data = arguments[0]
            }else{
                data =_data
            }
            var result =[]
            var exist = false;
            for(var i=0;i<data.length;i++){

                for(var j=0;j<result.length;j++){
                    if(result[j] == data[i]){
                        exist =true;
                        break;
                    }
                }
            

                if(!exist){
                    result.push(data[i])
                }

                exist =false
            }
            _data = result
            return this
        },
        map:function(fn){
            var data
            if(_data.length ===0){
                data =[...arguments]
            }else{
                data =_data
            }
            var result =[]
            var exist = false;

            for(var i=0;i<data.length;i++){
                result.push(fn(data[i]))
            }

            _data = result
            return this
        }
    }
})()