// interface A {
//     name: string,
//     location: string,
//     students: number,
//     branch: number
// }

// const a: Omit<A, 'branch' | 'students'> = {
//     name: 'Umayer',
//     location: "Fatullah",
//     // students: 22
// }
// console.log(a)



// type A = "loading" | "error" | "pending" | "success"

// let a: Exclude<A, "pending"> = "success"
// a = "error"

// let a: Extract<A, 'success' | 'error'> = "success"
// a = "error"


// type A = string | number | undefined | null | string[];

// const a: NonNullable<A> = "umayer"


type A = 'Admin' | 'user' | 'guest'
let a: A = "Admin"
let b: Record<A,string> = {
    Admin : "Umayer",
    user: "Ahmad",
    guest: "Peter",
}