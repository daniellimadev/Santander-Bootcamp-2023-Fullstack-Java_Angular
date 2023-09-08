/**
 * Interface
 */

// (type x interface)

interface robot2  {
    id:number;
    name:string;
}

type robot = {
    id:number;
    name:string;
}

const bot: robot2 = {
    id:1,
    name:"megaman",
};


class Pessoa implements robot2 {
    id: number;
    name: string;
    
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    sayHello(): string {
        return"Hello";
    }
}

const p = new Pessoa(1,"gustsman")
console.log(p.sayHello)