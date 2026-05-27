const b = (constructor: Function) => {
    console.log(constructor.name)
}
const c = (target: any, key: any) => {
    console.log(key)
}

@b
class Admin {
    // @c
    constructor(public x: number, public y: number){

    }
}

let a = new Admin(10,20)
// console.log(a)