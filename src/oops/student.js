const person = require('./person');

// inheritance
class Student extends person.Person {
    constructor(name, dob, gender, city,school, stream) {
        super(name, city, school);
        // this.setDOB(dob);
        // this.setGender(gender)
        this.stream = stream;
    }
    //encapsule
    setId(id) {
        this.id = id
    }
    getId() {
        return this.id
    }

    // schoolYear() {
    //     if(this.claculateAge >)
    // }
}

module.exports = {
    student: Student
}