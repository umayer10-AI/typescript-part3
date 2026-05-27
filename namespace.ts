export namespace admin1 {
    export class A {
        login() {
            console.log("User Login Function")
        }
    }
    export const a = () => {
        console.log("List of Users")
    }
}

export namespace admin2 {
    export class A {
        login() {
            console.log("User Login Function")
        }
    }
    export const a = () => {
        console.log("List of Users")
    }
}

// const b = new admin1.A()
// b.login()
// admin1.a()