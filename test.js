// //block 1
// console.log("Node JS");
// console.log("Started");
// setTimeout(() => {
//     console.log("Processing...");
// }, 2000);
// setTimeout(() => {
//     console.log("Processing 2...");
// }, 1000);
// console.log("Ended");
// console.log("Finished");

// //block 2
// console.log("Started2");
// for (let i = 0; i <=5e9; i++) {}
// console.log("Ended2");

// console.log("Started3");
// setTimeout(() => {
//     console.log("Processing3...");
// }, 0);
// for (let i = 0; i <=5e9; i++) {}
// console.log("Ended3");

// console.log("1");
// const getConsole = () => {
//     console.log("2");
//     setTimeout(() => {
//         console.log("3");
//     }, 1000);
// };
// getConsole();
// for (let i = 0; i <= 5e9; i++) {}
// console.log("4");

//import add,multiply,div from './utilis.js';
import add from './utilis.js';
const output = add(2, 3);
console.log(`Addition: ${output}`);