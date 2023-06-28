// for more information visit https://github.tools.sap/sProcurement/qmate/blob/main/documentation/topics/gettingStarted/configuration.md
const path = require("path");
const merge = require(path.resolve(process.env.DEEPMERGE_PATH));
const profile = require(path.resolve(process.env.QMATE_CONFIGS, "chrome.conf.js"));

exports.config = merge(profile.config, {
  params: {
    import: {
      data: "./data/"
    }
  },

  specs: [
    path.resolve(__dirname, "specs/shoppingCart.spec.js")
    path.resolve(__dirname,"specs/shoppingCart2.spec.js")
  ]
});
