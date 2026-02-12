// const a = () => {
//     b();
//     console.log('a');
// }
// const b = () => {
//     c();
//     console.log('b');
// }
// const c = () => {
//     console.log('c');
// };
// a();
const fetchData = new Promise((resolve, reject) =>{
    const success = false;

    if(success){
        resolve("Data fetched Successfully");
        console.log("data fetched")
    }else {
        reject("No data found");
        console.log("data is not fetched");
    }
});

fetchData
    .then((message)=>{
        console.log(message);
    })
    .catch((err)=>{
    console.log(err);
})