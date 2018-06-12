const jsonp = require('./index')

const data = jsonp.parseJSONP("abb(12345)", "abb")
console.log(data)
const getJSONP = require("node-fetch-jsonp").getJSONP

getJSONP('https://m.jin10.com/flash', {
    jsonpCallback: 'abb',
    maxId: 0,
    count: 200,
    _: 78946325412
}, 'jsonpCallback').then(data => console.log(data))