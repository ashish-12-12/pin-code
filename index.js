const use = require('./user')
const express = require('express')
const { log } = require('console')
const User = require('./user')
const finder = require('./latilongi')
const { get } = require('request')
const app = express()
const port = 1212
app.use(express.json())

app.get('/loc', (req, res) => {
  finder(req.query.latitude, req.query.longitude, (error, finderdata) => {
    console.log(";;;;;;;;;;;;;",req.query.latitude);
    if (error) {
      return res.send({ error })
    }
    const postalcode = finderdata
    const value = finderdata.split(" ")
    const pcode = value[9]
    console.log(pcode);
    var pincode = pcode
    let user = []
    done(user, pincode)
    if (user && user.length > 0) {
      res.send({ finderdata, user })
    }
    else {
      res.send("user is nor find")
    }

  })
})
function done(userObj, pincode) {
  use.forEach((value) => {
    let dot ={}
    let userkey = Object.keys(value);
    let pincodekey = value[userkey];
    if (pincodekey.hasOwnProperty(pincode)) {
      dot.name = userkey[0]
      dot.address = pincodekey[pincode]
      const answer = dot.address
      userObj.push(dot)
    }
  })
  return userObj
}
app.listen(port, () => {
  console.log('server is running on the port ' + port);
})