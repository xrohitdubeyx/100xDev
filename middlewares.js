//this a middleware created which will count the number of requests hit on every endpoints 


const express = require("express");
const app = express();

let requestCount = 0

app.use((req, res, next)=>{
    requestCount += 1
    next()
})

app.get('/user', (req, res)=>{
        res.status(200).json({ firstName: "taylor"})
})

app.post('/user', (req, res)=>{
    res.status(200).json({ msg : "created a trump pic"});
})

app.get('/requestCount', (req, res)=>{
    res.status(200).json({ requestCount});
})

app.listen(4000, (req, res)=>{
    console.log("its going on 4000")
});
