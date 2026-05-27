// type User = {
//     [key: string]: number
// }

// let a: User = {
//     mobile: 9999,
//     id: 12,
//     mark: 90,
//     age: 21,
//     semester: 3,
// }
// console.log(a)


type User = {
    name: string,
    mobile: number,
    id: number,
    readonly [key: string]: number | string
}

let a: User = {
    name: "Umayer",
    mobile: 9999,
    id: 12,
    mark: 90,
    age: 21,
    semester: 3,
}
// a.la = "hello"
console.log(a)