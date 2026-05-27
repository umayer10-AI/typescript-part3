const up = (t: any, key: string, descriptor: PropertyDescriptor) => {
    descriptor.value = function dsum(x: number ,y: number){
        let b = x+y
        return "the Output of "+x+ " and " +y+" is "+ b
    }
}

class A {
    @up
    sum(x: number ,y: number){
        return x+y
    }
}
const a = new A()
console.log(a.sum(10,20))