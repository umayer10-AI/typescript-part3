interface A {
    name: string,
    location: string,
    students: number,
    branch: number
}

const a: Omit<A, 'branch' | 'students'> = {
    name: 'Umayer',
    location: "Fatullah",
    // students: 22
}
console.log(a)