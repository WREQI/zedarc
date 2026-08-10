require("../../app.js");
var e = require("../../adapter/getApp.js"),
  t = require("../../common/vendor.js").defineStore("appContext", function () {
    return {
      app: null,
      login: null,
      stat: null,
      useRoute: function () {
        return e.getApp().$vm.$route;
      },
      useRouter: function () {
        return e.getApp().$vm.$router;
      },
    };
  });
exports.useAppContext = t;
