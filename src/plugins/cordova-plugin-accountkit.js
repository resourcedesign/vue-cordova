exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof AccountKit === 'undefined') {
      return cb(false)
    }

    // pass through the object
    Vue.cordova.accountKit = AccountKit

    return cb(true)

  }, false)
}
