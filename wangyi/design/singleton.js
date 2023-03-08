
function store(){
    this.store ={}

    store.owner="charlie"

    store.count=1

    if(store.ss){
        store.count +=1;
        return store.ss
    }
    store.ss = this;
}

// store.instance = null;

function test1(){

var t1 = new store()

t1.store['a']=90;

var t2 = new store()

t2.store['b']=910

console.log(t2.store)

console.log(t1 === t2)

console.log(store.owner)

console.log(typeof store.owner)

console.log(store.count)
}

//from master

function Singleton(){
    this.store={}

    Singleton.members={}

    this.count =1;

    Singleton.sum =1;

    if(Singleton.instance){
        this.count +=1;

        Singleton.sum+=1;
        return Singleton.instance
    }

    const privateVariable ="I am a private variable"

    function privateMethod1(){
        console.log('I am a private method')
    }

    this.publicMethod = function(){
        console.log('I am a public method')
    }
    this.publicVariable =" public variable"
    
    Singleton.instance = this;
}

function test_singleton(){
    var s1 = new Singleton()
    var s2 = new Singleton()

    console.log(s1===s2)

    console.log(s1.store === s2.store)
    console.log(s2.count)
    console.log(Singleton.sum)

    console.log(s1.privateVariable)
    console.log(s1.publicVariable)

    // members just belong to function itself.
    console.log(s2.members);

    Singleton.members['a']='charlie'


    console.log(Singleton.members);




}

test_singleton()

// another example to use function property

let _Vue
function install (Vue){
    if(install.installed && _Vue === Vue){
        return ;
    }else{
        install.installed = true
        _Vue = Vue
    }
}

