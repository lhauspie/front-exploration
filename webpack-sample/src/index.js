require("../assets/stylesheets/styles.scss");

// In replacement of @babel/polyfill
import "core-js/stable";
import "regenerator-runtime/runtime";

if (process.env.NODE_ENV === "development") {
  console.log('Looks like we are in development mode!');
} else if (process.env.NODE_ENV === "production") {
  console.log('Looks like we are in poduction mode!');
} else {
  console.log('Looks like we are neither in poduction or development mode!');
}

// create a generator function returning an
// iterator to a specified range of numbers
function* range (begin, end, interval = 1) {
    for (let i = begin; i < end; i += interval) {
        yield i;
    }
}


let a = "I'm learning Webpack ! And I try now to generate ES5 code from ES6 code ";

for (let i of range(0, 10)) {
  console.log(a + i);
}

document.write("<dive class='element'>" + a + "</div>");
