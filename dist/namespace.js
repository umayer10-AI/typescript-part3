"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var admin1;
(function (admin1) {
    class A {
        login() {
            console.log("User Login Function");
        }
    }
    admin1.A = A;
    admin1.a = () => {
        console.log("List of Users");
    };
})(admin1 || (admin1 = {}));
var admin2;
(function (admin2) {
    class A {
        login() {
            console.log("User Login Function");
        }
    }
    const a = () => {
        console.log("List of Users");
    };
})(admin2 || (admin2 = {}));
const b = new admin1.A();
b.login();
//# sourceMappingURL=namespace.js.map