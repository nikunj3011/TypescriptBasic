var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Ohayu, " + person.firstName + " " + person.lastName;
}
Swal.fire('Any fool can use a computer')
var user = new Student("Helly", "J.", "Chan");
document.body.textContent = greeter(user);
