/**
 * just use one object that share the code in class 
 * 100 pop share one 
 */
function pop(){}

pop.prototype.action= function(){}

pop.prototype.show= function(arr){}

var popArr=[
    {text:'good',style:[23,343,434]},
    {text:'good',style:[23,343,434]},
]

var poper = new pop()

for(var i=0;i<100;i++){
    poper.show(popArr[i])

    poper.action()
}