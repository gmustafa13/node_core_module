/**
 * sallow copy
 */

let a = {
    name: "gulam",
    email: "gmustafa.mansoori@gmail.com",
    add: {
        state: "maharashtra",
        district: {
            name: "mumbai",
            taluka: "panvel"
        }
    }
}

const copy = Object.assign({}, a);
console.log("copy==", copy, copy.add.district.name);
console.log("object chaining",copy?.add?.district);

/**
 * symbol used for discribe 
 */
let gulam = Symbol("learning js")
console.log("gulam", gulam);
/** sepret copy and nested refrance obj/array */

// const structedCopy = structuredClone(a) 
// console.log("structedCopy", structedCopy);

