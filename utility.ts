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


// const a = (v: Required<A>) => {
//     return v
// }

// console.log(a({name: "Umayer",location: "Fatullah", students: 22, branch: 21}))


// const a: Readonly<A> = {
//     name: "Umayer",
//     location: "Fatullah",
//     students: 20,
//     branch: 3
// }
// a.name = "heloo"


const a: Pick<A, 'name'| 'location'> = {
    name: "Umayer",
    location: "Fatullah",
}