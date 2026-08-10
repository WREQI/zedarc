require("../../../app.js");
var e = require("../../../common/vendor.js"),
  i = require("../../../config/event.js");
require("../../../service/broker.js");
var r = require("../../../service/navigateMp.js"),
  o = require("../../../config/mpConfig.js"),
  n = require("../../../service/login/mp.js"),
  t = require("../../../config/broker/11100/index.js"),
  s = function (r) {
    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    r.$emit("showPwdPopup"), e.index.$emit(i.PLUGIN_SHOW_PWD, !0, o.from || "");
  },
  c = {
    showPWD: s,
    hidePWD: function () {
      var r =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      e.index.$emit(i.PLUGIN_SHOW_PWD, !1, r.from || "");
    },
    clickAsset: function (e, i) {
      var s,
        c,
        a = {};
      (null == i ? void 0 : i.isCurrentBroker) ||
        ((a.showSwitchToast = !0),
        null ==
          (c = null == (s = n.login) ? void 0 : s.clearReloginRetryTimes) ||
          c.call(s)),
        (function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            i = "/pages/index/trade?brokerCode=".concat(
              t.brokerConfig.base.code,
              "&switchBroker=1"
            );
          (null == e ? void 0 : e.showSwitchToast) &&
            (i = "".concat(i, "&showSwitchToast=1")),
            r.navigateTo({ url: i, linkType: o.linkTypeMap.plugin2MainMp });
        })(a);
    },
    notifyAssetShow: function () {},
    isWebsocket: !0,
    isShowRate: !1,
    clickPwd: function (e, i) {
      s(e), (e.isAutoToAssetAfterPwdSuc = !0);
    },
    clickTransfer: function (e, i) {
      !(function (e) {
        var i = t.brokerConfig.base.code;
        e.$router.push({
          name: "TransferFund",
          query: {
            switchBroker: "1",
            brokerCode: i,
            tagName: "TO_TRANSFER_AFTER_SWITCH",
          },
        });
      })(e);
    },
    clickMore: function () {
      r.navigateTo({
        url: "/pages/profileCom/brokerAccount",
        linkType: o.linkTypeMap.plugin2MainMp,
      });
    },
  };
exports.bridge = c;
