/*
 * @Author: fangbao
 * @Date: 2020-05-17 11:37:17
 * @LastEditors: fangbao
 * @LastEditTime: 2020-05-17 11:40:19
 * @FilePath: /xt-crm/Users/fb/Documents/experiment/jsdoc/libs/date.js
 */

/**
 * 获取当前时间戳
 * @returns {number} - 返回当前时间戳
 */
function getNow () {
  return new Date().getTime()
}

/**
 * 格式化时间
 * @param {*} date 
 * @returns {string}
 */

function fromatDate (date) {
  return new Date(date)
}