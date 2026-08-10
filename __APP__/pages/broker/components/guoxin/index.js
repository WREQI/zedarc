var e;
require("../../../../@babel/runtime/helpers/Arrayincludes");
var n = require("../../../../module/plugin/pluginComponentLifeTimeMixin.js"),
  o = require("../../../../common/vendor.js"),
  r = (null == (e = getApp()) ? void 0 : e.globalData) || {},
  t = {
    mixins: [n.PluginComponentLifeTimeMixin],
    setup: function (e, n) {
      var t = n.emit,
        i = o.useBrokerInfo(),
        l = i.hasBind,
        u = i.highestPriorityDealer,
        a = void 0 === u ? {} : u,
        p = o.computed(function () {
          return l.value;
        }),
        s = o.computed(function () {
          return Boolean(a.value.userstateFront & o.USERSTATE_PID.FAILED);
        }),
        c = o.computed(function () {
          return Boolean(a.value.userstateFront & o.USERSTATE_PID.VERIFYING);
        }),
        d = o.inject("pluginRoute"),
        v = o.inject("scrollHeight", 0);
      d.value = o.computed(function () {
        return p.value
          ? "pages/asset/index"
          : s.value
          ? "pages/apply/recover"
          : c.value
          ? "pages/apply/progress"
          : "";
      });
      var m = [];
      return {
        isAsset: p,
        isApplyRecover: s,
        isApplyProgress: c,
        handleReportTime: function (e) {
          var n, o, i, l, u, a;
          t("ready");
          var p =
              (null ==
              (o =
                null == (n = null == e ? void 0 : e.detail)
                  ? void 0
                  : n.__args__)
                ? void 0
                : o[0]) || {},
            s =
              (null == (l = null == (i = getApp()) ? void 0 : i.globalData)
                ? void 0
                : l.__tradeTabTime) || "",
            c = "".concat(p.event, "-").concat(p.dealerCode);
          !m.includes(c) &&
            s &&
            (null ==
              (a =
                null == (u = null == r ? void 0 : r.mpReporter)
                  ? void 0
                  : u.reportTime) ||
              a.call(
                u,
                "PAGE-ASSET-INDEX-OPEN-TIME-".concat(c),
                Date.now() - s
              ),
            m.push(c));
        },
        handleJumpQuote: function (e) {
          var n = e || {},
            r = n.type,
            t = n.scode,
            i = o.preload || {},
            l = i.queryStockInfo,
            u = i.queryPrimary;
          "function" == typeof l && r && t && l(t, r),
            "function" == typeof u && r && t && u(t, r);
        },
        scrollHeight: v,
      };
    },
    data: function () {
      return { componentEle: ".broker-index" };
    },
  },
  i = o._export_sfc(t, [
    [
      "render",
      function (e, n, r, t, i, l) {
        return o.e(
          { a: t.isAsset },
          t.isAsset
            ? {
                b: t.scrollHeight,
                c: o.o(function () {
                  return (
                    t.handleReportTime && t.handleReportTime.apply(t, arguments)
                  );
                }, 2524),
                d: o.o(function () {
                  return (
                    t.handleJumpQuote && t.handleJumpQuote.apply(t, arguments)
                  );
                }, 2525),
              }
            : t.isApplyRecover
            ? { f: t.scrollHeight }
            : t.isApplyProgress
            ? { h: t.scrollHeight }
            : {},
          { e: t.isApplyRecover, g: t.isApplyProgress }
        );
      },
    ],
  ]);
wx.createComponent(i);
