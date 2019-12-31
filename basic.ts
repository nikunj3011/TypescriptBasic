class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Ohayu, " + person.firstName + " " + person.lastName;
}

let user = new Student("Helly", "J.", "Chan");

document.body.textContent = greeter(user);