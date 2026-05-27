interface A {
    name: string,
    location: string,
    students: number,
    branch: number
}

let a: Partial<A> = {
    name: "Umayer",
    location: "Fatullah",
    students: 200,
}