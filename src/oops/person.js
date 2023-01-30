// parent class

class Person {
    constructor(name, city, school) {
        this.name = name;
        this.city = city;
        this.school = school
    }

    getGender() {
        return this.gender
    }
    setGender(gender) {
        this.gender = gender
    }

    getDOB() {
        return new Date(this.dob).getFullYear()
    }
    setDOB(dob) {
        this.dob = dob
    }

    claculateAge() {
        return new Date().getFullYear() - this.getDOB()     
    }
    bio() {
        throw new Error('Abstract method')
    }
}

module.exports = {
    Person
}