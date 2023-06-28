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
    path.resolve(__dirname, "specs/shoppingCart.spec.js"),
    path.resolve(__dirname, "specs/shoppingCart1.spec.js")
  ]
});

beforeTest: function (test, context) {
  //console.log('Before Test: ', test.title);
  console.log('Test file path:', test.file);
//  console.log('Test description:', test.description);

  // Example: Set up test-specific configurations or variables
//  context.myVariable = 'Test-specific value';
// You can access this variable within your test script using `context.myVariable`
},
