export function validatePhone (rule, value, callback) {
  var mobileRegex = /^1[0-9]{10}$/
  if (!mobileRegex.test(value)) {
    callback(new Error('手机号码格式不正确！'))
  } else {
    callback()
  }
}
