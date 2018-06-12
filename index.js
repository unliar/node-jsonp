const axios = require('axios')
const parse = require("./fetchJSONPData")
const urls = require("url")


/**
 * 获取jsonp数据
 * 
 * @param {string} url baseurl 基础的jsonp接口地址
 * @param {Object} query url query object jsonp 地址参数
 * @param {string} [callbackKey] callback key name 后端接口获取jsonp函数的key  默认为jQuery的jsonpCallback
 * 
 * @example getJSONP('https://m.jin10.com/flash',{jsonpCallback:'abb',maxId:0,count:200,_:78946325412},'jsonpCallback')
 */
const getJSONP = (url, query, callbackKey = 'jsonpCallback') => {
    const querys = urls.format({
        query
    })
    const targetUrl = `${url}${querys}`
    return axios.get(targetUrl).then(res => {
        return parse(res.data, query[callbackKey])
    })
}

exports.getJSONP = getJSONP
exports.parseJSONP = parse