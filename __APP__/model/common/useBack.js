require("../../app.js");
var e = require("../../common/vendor.js"),
  r = require("../../utils/getPlatform.js");
require("../../service/broker.js");
var n = require("../../service/navigateMp.js"),
  i = require("../../adapter/router.js"),
  t = require("../../config/broker/11100/index.js"),
  a = function (e) {
    return (null == e ? void 0 : e.startsWith("/")) ? e : "/".concat(e);
  };
exports.usePersonal = function () {
  return {
    backToPreviousPage: function (e) {
      var t,
        o,
        u,
        l,
        s = r.getPlatform(),
        d = s.isMiniProgram,
        g = s.isInMainXcx,
        c = s.isPCWeixin,
        v = getCurrentPages();
      if (
        1 === v.length ||
        ("undefined" != typeof history && history.length <= 1)
      )
        g ? i.router().back() : i.router().push({ name: "AssetIndex" });
      else {
        var f = v.findIndex(function (r) {
          return !(!r || !r.route) && a(r.route).indexOf(e) > -1;
        });
        if (
          -1 === f &&
          g &&
          (null == (t = null == window ? void 0 : window.wx)
            ? void 0
            : t.miniProgram)
        )
          return (
            c && i.router().back({ delta: v.length }),
            void window.wx.miniProgram.navigateBack()
          );
        0 === f &&
        d &&
        (null ==
        (l =
          null ==
          (u =
            null == (o = null == global ? void 0 : global.getVm)
              ? void 0
              : o.call(global))
            ? void 0
            : u.globalData)
          ? void 0
          : l.isSupportPlugin)
          ? n.navigateBackMiniProgram()
          : i.router().back({ delta: v.length - f - 1 });
      }
    },
    toAsset: function (o) {
      var u = o || {},
        l = u.type,
        s = void 0 === l ? "push" : l,
        d = u.query,
        g = void 0 === d ? {} : d,
        c = r.getPlatform().isMpPlugin,
        v = "/pages/asset/index",
        f = e.lib.stringify(g);
      if (
        (f && (v = "".concat(v, "?").concat(f)),
        global.getVm().globalData.isSupportPlugin)
      )
        n.navigateBackMiniProgram({
          extraData: {
            path: "/pages/index/trade?dealerCode="
              .concat(t.brokerConfig.base.code, "&")
              .concat(f),
          },
          fail: function (r) {
            e.index.reLaunch({ url: v });
          },
        });
      else {
        var x = getCurrentPages(),
          p = x.findIndex(function (e) {
            return !(!e || !e.route) && a(e.route).indexOf("asset/index") > -1;
          });
        p >= 0
          ? i.router().back({ delta: x.length - p - 1 })
          : c
          ? i.router()[s]({ name: "AssetIndex", query: g })
          : e.index.reLaunch({ url: v });
      }
    },
  };
};
