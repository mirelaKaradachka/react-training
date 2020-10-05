class Person {
  constructor(id, fname, lname, address) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.address = address;
  }

  toString() {
    return `ID:  ${this.id}, Name: ${this.fname} ${this.lname}, Address:  ${this.address}`;
  }
}

p1 = new Person(1, "Ivan", "Petrov", "Sofia");
console.log(p1.toString());

const ROLE_USER = 0,
  ROLE_ADMIN = 1;

const ROLE = ["ROLE_USER", "ROLE_ADMIN"];
class User extends Person {
  constructor(
    id,
    username,
    password,
    fname,
    lname,
    address,
    roles = [ROLE[ROLE_USER]]
  ) {
    super(id, fname, lname, address);
    this.username = username;
    this.password = password;
    this.roles = roles;
  }

  toString() {
    return (
      super.toString() +
      `, Username: ${this.username} , Roles: ${this.roles
        .map((role) => ROLE[role])
        .join(", ")}`
    );
  }
}

u1 = new User(2, "mitko", "mitko", "Dimitar", "Gerorgiev", "Plovdiv");
console.log(u1.toString());

u1 = new User(3, "admin", "admin", "Hristo", "Gerorgiev", "Varna", [
  ROLE_ADMIN,
  ROLE_USER,
]);
console.log(u1.toString());
