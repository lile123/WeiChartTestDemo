
var API_URL = 'https://api.octinn.com'

var header = {
    "Content-Type": 'application/json',
    "OI-APPKEY": "504937958e90289a72233b9e69f6e785",
    "OI-UDID": "00000000000000000000000000000000",//当用户登陆后会被替换成openID
    'OI-AUTH': '',//保存的是token
    "OI-TYPE": "USER",
    "OI-APIVER": '34'
}

function fetchApi(url, method, params){
  // console.log(url)
  // console.log(header)
  var showTip = true
  if (params.noTip) {
    showTip = false
    delete params.noTip
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${API_URL}/${url}`,
      method: method,
      data: params,
      header: header,
      success: function (result) {
        if (result.statusCode == 200 || result.statusCode == 201) {
            resolve(result);
        } else {
            reject(result);
            if (showTip) {
              wx.showModal({
                  title: '提示',
                  content: result.data.msg,
                  showCancel: false,
                  confirmColor: '#FF3939',
                  success: function (res) {
                  }
              })
            }
        }
      },
      fail: function (result) {
        reject(result);
      }
    })
  })
}

function fetchPut(url, params = {}){
    return fetchApi( url, 'PUT', params)
}

function fetchGet(url, params = {}){
  return fetchApi( url, 'GET', params)
}

function fetchPost(url, params = {}){
  return fetchApi(url, 'POST', params)
}

function fetchDelete(url, params = {}){
  return fetchApi(url, 'DELETE', params)
}

module.exports = {
  header: header,
  fetchPut: fetchPut,
  fetchGet: fetchGet,
  fetchPost: fetchPost,
  fetchDelete: fetchDelete,
}
