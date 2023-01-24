/**
 * methods
 * toDateString()
 * getDate()
 * getFullyear()
 * getMonth()
 * getDay()
 * getHours()
 * getMinutes()
 * getSecounds()
 * getMilisecound()
 * setDate()
 * setFullyear()
 * setMonth()
 * setDay()
 * setHours()
 * setMinutes()
 * setSecounds()
 * 
 */

// new instance of date class
const now = new Date();
console.log("now date", now);

// in string form
console.log("redable form", now.toDateString());

// only year
console.log("year  ", now.getFullYear())

// only month
console.log("month  ", now.getMonth())

// only day
console.log("day  ", now.getDay())



console.log("Example to Subtract two dates")
var d1 = new Date("March 16, 2022");
var d2 = new Date("April 6, 2022");
var sub = d2.getTime() - d1.getTime();
const msDay = 1000 * 60 * 60 * 24

d = sub / msDay
console.log("dddd",d);
