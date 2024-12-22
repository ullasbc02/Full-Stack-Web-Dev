// console.log("Hello, World!");
// const fs = require('node:fs');

// const content = 'Some content!';

// fs.writeFile('text.txt', content, err => {
//   if (err) {
//     console.error(err);
//   } else {
//     // file written successfully
//   }
// });


import oneinerJoke from 'one-liner-joke' //using ECMAScript modules
// var oneLinerJoke = require('one-liner-joke'); //using CommonJS modules
console.log(oneinerJoke.getRandomJoke().body);

