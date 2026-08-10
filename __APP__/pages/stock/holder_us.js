var e = require("../../common/vendor.js"),
  n = getApp().globalData,
  t = {
    data: function () {
      return {
        skin: e.wx$1.getStorageSync("user/skin") || "white",
        ver: "",
        zygd: "",
        date: "",
        cgjj: "",
      };
    },
    onLoad: function (e) {
      var t = this,
        c = this,
        g = e,
        a = {
          url: n.CGI_PREFIX + "information.fcgi",
          data: { scode: g.scode, markets: g.market, type: 15 },
          success: function (e) {
            if (e && "0" === e.retcode) {
              if (e.zygd)
                for (var n = 0; n < e.zygd.length; n++)
                  "未变" !== e.zygd[n].change &&
                    (e.zygd[n].changeClass =
                      e.zygd[n].change.indexOf("-") >= 0 ? "green" : "red");
              if (e.cgjj && e.cgjj.length > 0)
                for (var t = 0; t < e.cgjj.length; t++)
                  "未变" !== e.cgjj[t].change &&
                    (e.cgjj[t].changeClass =
                      e.cgjj[t].change.indexOf("-") >= 0 ? "green" : "red");
              (c.zygd = e.zygd), (c.date = e.zygd_date), (c.cgjj = e.cgjj);
            }
          },
        };
      n.wx.request(a),
        n.setSkin(function (e) {
          (t.skin = "black" === e ? "black" : "white"),
            (t.ver = n.getPhoneModel(n.device.model));
        });
    },
    onReady: function () {},
    onShow: function () {},
    onHide: function () {},
    onUnload: function () {},
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog")
  )();
var c = e._export_sfc(t, [
  [
    "render",
    function (n, t, c, g, a, o) {
      return e.e(
        {
          a: n.rootFontSize,
          b: e.p({ "no-auto": !0 }),
          c: e.t(n.date),
          d: e.f(n.zygd, function (n, t, c) {
            return {
              a: e.t(n.stockholder),
              b: e.t(n.bcccgs),
              c: e.t(n.ratio),
              d: e.t(n.change),
              e: e.n(n.changeClass),
              f: t,
            };
          }),
          e: n.cgjj && n.cgjj.length > 0,
        },
        n.cgjj && n.cgjj.length > 0 ? { f: e.t(n.date) } : {},
        { g: n.cgjj && n.cgjj.length > 0 },
        n.cgjj && n.cgjj.length > 0
          ? {
              h: e.f(n.cgjj, function (n, t, c) {
                return {
                  a: e.t(n.stockholder),
                  b: e.t(n.bcccgs),
                  c: e.t(n.ratio),
                  d: e.t(n.change),
                  e: e.n(n.changeClass),
                  f: t,
                };
              }),
            }
          : {},
        { i: e.n("skin-" + n.skin), j: e.n(n.ver) }
      );
    },
  ],
  ["__scopeId", "data-v-03a58303"],
]);
wx.createPage(c);
