// http://api.positionstack.com/v1/reverse?access_key=d2abc0e44f3ff256c928c5eecc3b456f&query=40.7638435,-73.9729691

const request = require('request')
const { callbackify } = require('util')
const finder = (latitude, longitude, callback) => {
    const url = `http://api.positionstack.com/v1/reverse?access_key=d2abc0e44f3ff256c928c5eecc3b456f&query=` + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('unable to find', undefined)
        }
        else {
            callback(undefined, `postal code of the given lattitude and longitude is `  +  body.data[0].postal_code)
        }
    })
}   

module.exports = finder