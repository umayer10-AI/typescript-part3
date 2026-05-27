interface A {
    name: string,
    location: string,
    students: number,
    branch: number
}

// let a: Partial<A> = {
//     name: "Umayer",
//     location: "Fatullah",
//     students: 200,
// }

const a = (v: Partial<A>) => {

}

a({name: "Umayer"})