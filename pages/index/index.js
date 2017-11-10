//index.js
//获取应用实例
var api = require('../../utils/api.js')
const app = getApp()

Page({
  data: {

  },


  onLoad: function () {
    api.fetchGet('layout/4', {
      'cityId': '310100',
      'preview' : false,
      'r' : 'main'
    }).then(res => {
      console.log(res)
    })
  },

})
