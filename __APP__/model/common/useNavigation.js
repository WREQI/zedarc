require("../../app.js");
var e = require("../../utils/getPlatform.js"),
  r = require("../../utils/navigator.js"),
  i = require("../../config/mpConfig.js"),
  a = require("../../service/navigateMp.js");
exports.useNavigation = function () {
  var t = e.getPlatform(),
    n = t.isMpPlugin,
    o = t.isZxg;
  return {
    gotoApplyRecords: function () {
      n
        ? a.navigateTo({
            url: "/pages/account/applyrecords",
            linkType: i.linkTypeMap.plugin2MainMp,
          })
        : r.hrefToWzqDomain(
            "/account/applyrecords",
            {},
            { openUrlWithExtraWebview: o }
          );
    },
  };
};
