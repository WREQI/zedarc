require("../../app.js");
var e = require("../../utils/getPlatform.js"),
  r = require("../../stores/red-point/useEntryTips.js"),
  t = require("../../common/vendor.js"),
  o = require("../../service/stat/mp-weixin.js"),
  u = {
    props: { routeName: { type: String, default: "" } },
    setup: function (u) {
      var i = "ios" === e.getPlatform().platform,
        n = t.storeToRefs(r.useEntryTips()).bubbleTips,
        s = t.computed(function () {
          var e;
          return (
            (null == (e = n.value[u.routeName]) ? void 0 : e.contentText) || ""
          );
        });
      return (
        t.watch(
          s,
          function (e) {
            if (e) {
              if ("AssetAll" === u.routeName && "股东卡" === e)
                return void o.stat.click(
                  "trade.asset.newer_shareholder_bubble_brow"
                );
              if ("AccountPersonal" === u.routeName && "股东卡" === e)
                return void o.stat.click(
                  "trade.all.newer_shareholder_bubble_brow"
                );
            }
          },
          { immediate: !0 }
        ),
        { isIOS: i, currentRouteTip: s }
      );
    },
  },
  i = t._export_sfc(u, [
    [
      "render",
      function (e, r, o, u, i, n) {
        return t.e(
          { a: u.currentRouteTip },
          u.currentRouteTip ? { b: t.t(u.currentRouteTip) } : {},
          { c: t.n(u.isIOS ? "ios" : "") }
        );
      },
    ],
  ]);
wx.createComponent(i);
