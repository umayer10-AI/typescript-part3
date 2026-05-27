interface A {
    name: string,
    location: string,
    students: number,
    branch?: number
}

// let a: Partial<A> = {
//     name: "Umayer",
//     location: "Fatullah",
//     students: 200,
// }

// const a = (v: Partial<A>) => {

// }
// a({name: "Umayer"})


const a = (v: Required<A>) => {
    return v
}

console.log(a({name: "Umayer",location: "Fatullah", students: 22, branch: 21}))