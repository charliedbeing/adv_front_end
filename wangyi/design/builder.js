ComputerBuilder.prototype.count=0;

function ComputerBuilder(){
    this.computer ={}
    var self = this;
    
    this.addCPU = function(cpu){
        ComputerBuilder.prototype.count +=1;
        this.computer['cpu']= cpu;
        return self;
    }

    this.addMEMARY = function(memory){
        this.computer['memory']= memory;
        return self;
    }

}



function test(){
    var c1 = new ComputerBuilder()

    c1.addCPU('P9').addMEMARY("256M")

    var c2 = new ComputerBuilder()

    c2.addCPU('P8').addMEMARY('1512M')

    console.log(c1.computer)
    console.log(c2.computer)


    var c3 = new ComputerBuilder()

    c3.addCPU('P8').addMEMARY('1512M')

    console.log(c3.computer)
    console.log(c3.computer)

    console.log(ComputerBuilder.prototype.count)
}

test()

