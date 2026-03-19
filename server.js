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
const userRoutes = require('./routes/userRouts')
const productRoutes = require('./routes/productRoutes') 

const app = express()
app.get('/', (req, res) => {
    res.json({ message: 'Server setup done', status: 200 });
})

app.use("/", userRoutes)
app.use("/", productRoutes)
app.use(express.json())

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
