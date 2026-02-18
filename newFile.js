//what is callstack?
//callstack is a data structure that keeps track of the function calls in a program. 
//It is used to keep track of the order of function calls and to manage the execution of the program. 
// When a function is called, it is added to the callstack, and when it returns, it is removed from the callstack. 
// The callstack is also used to manage the scope of variables and to handle exceptions.
// const a=()=>{
//     b();
//     console.log("Function A");
// };
// const b=()=>{
//     console.log("Function B");
// };

// a();

// const login = async()=>{
//     await checkHeader();
//     await checkpassword();
// }

const os = require("os");


const http = require('http');

const memory = os.freemem();

const server = http.createServer((req, res) => {

    const requesturl = req.url;
    console.log("requesturl : ", requesturl);

    const requestMethod = req.method;
    console.log("requestMethod : ", requestMethod);

    if (requesturl === "/home") {
        console.log("this is home page");
        res.end("Welcome to Home Page");
    }

    else if (requesturl === "/about") {
        console.log("this is About page");
        res.end("Welcome to About Page");
    }

    else if (requesturl === "/memo") {
        console.log("this is memo page");
        console.log(memory);
        //res.end("Welcome to memo Page");
        res.end(`memory ${memory}`);
    }

    else {
        res.end("404 Page Not Found");
    }
});

const port = 3000;
server.listen(port);

console.log("Server running at http://localhost:3000");

