"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin2 = exports.admin1 = void 0;
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
})(admin1 || (exports.admin1 = admin1 = {}));
var admin2;
(function (admin2) {
    class A {
        login() {
            console.log("User Login Function");
        }
    }
    admin2.A = A;
    admin2.a = () => {
        console.log("List of Users");
    };
})(admin2 || (exports.admin2 = admin2 = {}));
// const b = new admin1.A()
// b.login()
// admin1.a()
//# sourceMappingURL=namespace.js.map