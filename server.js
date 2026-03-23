// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.json({ message: 'Server setup done', status: 200 });
// })
// app.get('/home', (req, res) => {
//     const clientData = req.params.uid;
//     res.json({ message: 'Welcome to Home Page', clientData: clientData, status: 200 });
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

// const express = require('express');

// const app = express();

// app.get("/users", (req, res) => {
//    const getuser = require('./controllers/usercontroller');
//    getuser.getAllUsers(req, res);
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });



const express = require('express')
const jwt = require('jsonwebtoken')
const userRoutes = require('./routes/userRouts')
const productRoutes = require('./routes/productRoutes')
const authRoutes = require('./routes/authRoutes')

const jwtToken = process.env.jwtToken || 'your_secret_key' 

const app = express()
app.get('/', (req, res) => {
    res.json({ message: 'Server setup done', status: 200 });
})
// const userMiddleware = (req, res, next) => {
//     // Middleware logic for user authentication or other checks
//     console.log("User middleware executed", req.query.skip);
//     if(req.query.skip === "true") {
//         next();
//     }else{
//         res.send("Unortherised user");
//     }
// }
// app.use(userMiddleware)






const authMiddleware = (req, res, next) => {
    // Middleware logic for user authentication or other checks
    const authHeader = req.headers.authorization?.split(' ')[1]; // Assuming Bearer token
    console.log("User middleware executed", authHeader);
    console.log("JWT Token from env:", jwtToken); 
    if(!authHeader){
        res.send("Unauthorized user");
    } else {
        try {
            const decoded = jwt.verify(authHeader, jwtToken);
            req.user = decoded; // Attach user info to the request object
            console.log("Decoded token:", decoded);
        } catch (err) {
            return res.status(401).json({ message: "Invalid token" });
        }
    }

    //If fails authentication, you can send a response like this:
    //res.send("Unauthorized access");

    // If successful, call next() to proceed to the next middleware or route handler
    //next();
};
app.use(authMiddleware);



app.use(express.json())


app.use("/admin",authMiddleware, userRoutes)
app.use("/", productRoutes)
app.use("/", authRoutes)


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
