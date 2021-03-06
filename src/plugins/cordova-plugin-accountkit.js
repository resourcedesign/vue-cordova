exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof org.apache.cordova.facebook.AccountKitPlugin === 'undefined') {
      return cb(false)
    }

    // pass through the object
    Vue.cordova.accountKit = org.apache.cordova.facebook.AccountKitPlugin

    return cb(true)

  }, false)
}
