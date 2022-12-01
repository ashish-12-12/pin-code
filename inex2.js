// const lat = require('./latilongi')
const express = require('express')
const finder = require('./latilongi')
const app = express()
const port = 3000
app.get('/loc',(req,res)=>{
    finder(req.query.latitude,req.query.longitude,(error,finderdata)=>{
        if(error){
            return res.send({error})
        }
      else{
          
        var  postalcode=finderdata
        console.log("PPPPPPPPPPPPPPP",postalcode);
        console.log("fffffffffff",finderdata);
        const value = finderdata.split(" ")
        const get = value[9]
        console.log(get);

      }
    })
})
app.listen(port,()=>{
    console.log("app is listen oh this"+port);
})