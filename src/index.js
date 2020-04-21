// In replacement of @babel/polyfill
import "core-js/stable";
import "regenerator-runtime/runtime";


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

document.write(a);
