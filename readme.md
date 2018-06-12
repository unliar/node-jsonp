# 用于解析jsonp数据或者直接从接口获取解析后的jsonp数据

## 解析jsonp数据
```
const parser = require("node-fetch-jsonp").parseJSONP

const data = parser("abb(12345)","abb")

console.log(data)

```

## 从接口获取jsonp数据
```
const getJSONP = require("node-fetch-jsonp").getJSONP

getJSONP('https://m.jin10.com/flash',{jsonpCallback:'abb',maxId:0,count:200,_:78946325412},'jsonpCallback').then(data=>console.log(data))
```
