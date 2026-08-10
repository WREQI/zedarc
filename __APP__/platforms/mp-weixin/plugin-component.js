require("../../app.js");
var n = require("../../common/vendor.js")._export_sfc(
  {
    components: {
      PluginAssetDataInfo: function () {
        return "../../bizs/asset/PluginAssetDataInfo.js";
      },
      PluginPassword: function () {
        return "../../components/Password/PluginPassword.js";
      },
      PluginAssetHoldStock: function () {
        return "../../bizs/asset/PluginAssetHoldStock.js";
      },
      PluginAcccountUserName: function () {
        return "../../pages/account/components/UserName.js";
      },
      PluginMessageBox: function () {
        return "../../pages/message/components/boxComponent.js";
      },
    },
  },
  [
    [
      "render",
      function (n, s, e, o, t, r) {
        return {};
      },
    ],
  ]
);
wx.createPage(n);
