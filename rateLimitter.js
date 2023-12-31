// rate limitter 

const express = require("express")
const app = express()

let numberOfRequestForUser = {}
setInterval(()=>{
    numberOfRequestForUser = {}
}, 1000);

app.use((req, res, next)=>{
    const userID = req.header.user-id;
    if(numberOfRequestForUser[userID]){
        numberOfRequestForUser += 1
        if(numberOfRequestForUser[userID] > 5){
            res.status(404).send("not allowed to access after 5 times")
        }
        else{
            next()
        }
    } else{
        numberOfRequestForUser[userID] = 1
        next();
    }
})

app.get('/', (req, res)=>{

})


app.listen(3000, ()=>{
    console.log("it 3000")
})