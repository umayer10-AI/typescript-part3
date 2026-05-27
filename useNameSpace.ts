import { admin1, admin2 } from "./namespace"

const b = new admin1.A()
b.login()
admin1.a()

const c = new admin2.A()
c.login()
admin2.a()