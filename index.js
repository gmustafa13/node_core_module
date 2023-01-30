const express = require('express');
const app = express();
const { PORT } = require('./src/constans/config');


// class based files
const person = require('./src/oops/person');
const student = require('./src/oops/student');

// new instance of person

const p1 = new person.Person('gulam', 'navi mumbai', 'vidyalankar');
p1.setGender('male');
p1.setDOB('12-10-1992');
console.log("p1 details", p1);
console.log(p1.claculateAge())


// new instance of student 

const s1 = new student.student('gulam', '12-10-1992', 'male', 'mumbai', 'vidyalankar', 'extc');
s1.setDOB('12-10-1992');
s1.setGender('male')
console.log("s1===",s1);
/**
 * services 
 */

app.listen(PORT, (err) => {
    if (err) throw new Error('Error while connecting server');
    console.info(`server running on ${PORT}`)
})