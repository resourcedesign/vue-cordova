exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof net.justin_credible.cordova.SpinnerPlugin === 'undefined') {
      return cb(false)
    }

    // pass through the object
    Vue.cordova.spinnerPlugin = net.justin_credible.cordova.SpinnerPlugin

    return cb(true)

  }, false)
}
