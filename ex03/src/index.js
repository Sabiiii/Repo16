class Person {
    get display() {
        var message = 'Static method is invoked from Person class';
    }

    constructor(show) {
        message.show = show;
    }
    static show() {
        console.log("Static method is invoked from Person class");
    }
}
Person.show();
return message;

var message = new Person();
message.show();
module.exports = Person;







