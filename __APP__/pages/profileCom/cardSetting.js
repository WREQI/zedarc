var r = require("../../common/vendor.js"),
  e = require("./utils.js"),
  o = {
    components: {
      CardSetting: function () {
        return "./@tencent/wzq-profile-page/components/cardSetting.js";
      },
    },
    setup: function () {
      var o = r.useBrokerInfo(),
        t = o.highestPriorityDealer,
        n = void 0 === t ? {} : t,
        i = o.hasBind,
        a = r.ref(!1);
      return (
        r.onBeforeMount(function () {
          a.value = e.initCardSupportVersion();
        }),
        { highestPriorityDealer: n, hasBind: i, cardSupportVersion: a }
      );
    },
  };
Array ||
  (
    r.resolveComponent("mp-privacy-dialog") +
    r.resolveComponent("stock-privacy-dialog") +
    r.resolveComponent("CardSetting")
  )();
var t = r._export_sfc(o, [
  [
    "render",
    function (e, o, t, n, i, a) {
      return {
        a: e.rootFontSize,
        b: r.p({
          highestPriorityDealer: n.highestPriorityDealer,
          hasBind: n.hasBind,
          cardSupportVersion: n.cardSupportVersion,
        }),
      };
    },
  ],
]);
wx.createPage(t);
