class TreeFlyWeight{
    constructor(texture){
        // this part is public ,can be shared by 
        // all object with same texture,but different position and size
        this.texture = texture
    }
    render(postion,size){}

}
class TreeFactory{
    constructor(){
        this.flayWeightTrees={}
    }

    getTree(texture){

        if(this.flayWeightTrees[texture]){
            return this.flayWeightTrees[texture];
        }else{
            var tree = new TreeFlyWeight(texture)
            this.flayWeightTrees[texture] = tree
            return tree;
        }
    }
}

function test(){
    var treeFactory = new TreeFactory()
    var tree1 = treeFactory.getTree('bai_yang')
    var tree2 = treeFactory.getTree('bai_yang')
    var tree3 = treeFactory.getTree('bai_yang')
    var tree4 = treeFactory.getTree('hu_yang')

    tree1.render({x:10,y:20},{width:50,height:100})
    tree2.render({x:10,y:20},{width:50,height:100})
    tree3.render({x:10,y:20},{width:50,height:100})
    tree4.render({x:10,y:20},{width:50,height:100})

    console.log(treeFactory.flayWeightTrees)

}

test()