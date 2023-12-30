const express = require("express")
const app = express()
const port = 3000

app.use(express.json())

//user having data 
const users = [{
    firstName:"michael",
    kidneys: [{
        healthy: false,
    }]
}]

// to get data 
app.get('/getKidneys', (req, res)=>{
    const michaelsKidney = users[0].kidneys;
    const numberOfKidneys = michaelsKidney.length
    let numberOfHealthykidneys = 0
    for(let i = 0; i<michaelsKidney.length; i++){
        if(michaelsKidney[i].healthy){
            numberOfHealthykidneys += 1 ;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthykidneys;
    res.json({
        michaelsKidney,
        numberOfKidneys,
        numberOfHealthykidneys,
        numberOfUnhealthyKidneys
    })
})

// to add kidneys 
app.post('/postHealthyKidneys', (req, res)=>{
    let isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })

    res.json({
        message:"kidneys stored successfull"
    })
})

// to update kidneys 
app.put('/updateKidneys', (req, res)=>{
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }

    console.log(users[0].kidneys.healthy);
    res.json({
        "message": "kidney updated Successfull"
    })
})

// to remove unhealthy kidneys 
app.delete('/deleteKidneys', (req, res)=>{
    let noOfKidneys = [];
    for(let i=0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            noOfKidneys.push({
                healthy:true
            })
        }
    }

    users[0].kidneys = noOfKidneys
    res.json({
        message: "unhealthy kidney removed"
    })
})

app.listen(port , ()=>{
    console.log("its listening to 3000");
})
