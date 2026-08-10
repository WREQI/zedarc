require("../../../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../../../common/vendor.js"),
  t = require("../../../../Index.js"),
  a = {
    inject: ["hqBridge"],
    props: {
      data: { type: Object, default: function () {} },
      pagination: { type: Boolean, default: !1 },
    },
    data: function () {
      return { timer: null };
    },
    beforeDestroy: function () {
      clearTimeout(this.timer);
    },
    methods: {
      gotoCardDetailPage: function () {
        var a = this,
          n = this.data || {},
          o = n.path,
          i = n.eventId,
          r = n.query,
          c = n.isOtherDomain,
          d = n.routerName,
          s = n.pathName,
          u = /stat_data=(i[^&]*)/i.exec(o);
        if (
          (u
            ? this.hqBridge.report(
                "hq.choose_hq.hstab.function_area_".concat(i, "_click"),
                { fchannel_id_fm_i: u[1] }
              )
            : this.hqBridge.report(
                "hq.choose_hq.hstab.function_area_".concat(i, "_click")
              ),
          c)
        )
          this.timer = setTimeout(function () {
            e.StockBridge.openExtraWebview(o, {}), clearTimeout(a.timer);
          }, 300);
        else {
          if (s) return void e.StockRouter.routeTo({ name: s });
          var l = "https://wzq.tenpay.com/mp/v2/index.html#"
            .concat(o.includes("?") ? "".concat(o) : "".concat(o, "?"))
            .concat(r ? t.concatParam(r) : "");
          d
            ? this.hqBridge.busEmit("navigateToApplyIndex", {
                stat: null == r ? void 0 : r.stat_data,
              })
            : "national_debt" === i
            ? e.wx$1.navigateTo({
                url:
                  "/pages/market/pages/NationalDebtDetail" +
                  (r ? "?".concat(t.concatParam(r)) : ""),
              })
            : e.wx$1.navigateTo({
                url: "/pages/additional/webview/index?url=".concat(
                  encodeURIComponent(l)
                ),
              });
        }
      },
    },
  };
Array || e.resolveComponent("qianji-red-point-placeholder")();
var n = e._export_sfc(a, [
  [
    "render",
    function (t, a, n, o, i, r) {
      return e.e(
        { a: n.data.src, b: n.data.badgeIcon },
        n.data.badgeIcon ? { c: n.data.badgeIcon } : {},
        {
          d: e.t(n.data.title),
          e: e.p({
            name: "hq-functionarea-".concat(n.data.name, "-redpoint-container"),
          }),
          f: e.n(n.data.name),
          g: e.n(n.pagination ? "" : "non-pagination-wrapper"),
          h: e.o(function () {
            return (
              r.gotoCardDetailPage && r.gotoCardDetailPage.apply(r, arguments)
            );
          }, 5506),
        }
      );
    },
  ],
  ["__scopeId", "data-v-6d0649f6"],
]);
wx.createComponent(n);
