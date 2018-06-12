const vm = require('vm')

/**
 * 解析出jsonp的回调数据
 * 
 * @param {string} data jsonp数据 
 * @param {string} callbackFunctionName jsonp数据中的函数名称 
 */
module.exports = (data, callbackFunctionName) => {
    let value
    const obj = {}
    vm.createContext(obj)
    obj[callbackFunctionName] = val => value = val
    vm.runInContext(data, obj)
    return value
}