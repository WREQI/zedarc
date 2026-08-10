var e = require("../../common/vendor.js"),
  t = getApp().globalData,
  a = {
    data: function () {
      return { list: [], skin: e.wx$1.getStorageSync("user/skin") || "white" };
    },
    onLoad: function (a) {
      var n = this;
      (this.urlParams = a),
        e.wx$1.setNavigationBarTitle({ title: "持股变动" }),
        this.queryData(),
        t.setSkin(function (e) {
          n.skin = "black" === e ? "black" : "white";
        });
    },
    methods: {
      queryData: function () {
        var e = this,
          a = this.urlParams,
          n = {
            url: t.CGI_PREFIX + "information.fcgi",
            data: { scode: a.scode, markets: a.market, type: 2 },
            success: function (a) {
              if (a && "0" === a.retcode) {
                var n = a.equity_change || [];
                (n = n.map(function (e) {
                  return (
                    e.change.indexOf("+") >= 0
                      ? (e.changeClass = "red")
                      : e.change.indexOf("-") >= 0
                      ? (e.changeClass = "green")
                      : (n.changeClass = ""),
                    e
                  );
                })),
                  (e.list = n);
              } else t.showError(a.retmsg, a.retcode);
            },
          };
        t.wx.request(n);
      },
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog")
  )();
var n = e._export_sfc(a, [
  [
    "render",
    function (t, a, n, r, s, i) {
      return {
        a: t.rootFontSize,
        b: e.p({ "no-auto": !0 }),
        c: e.f(t.list, function (t, a, n) {
          return {
            a: e.t(t.gudong),
            b: e.t(t.change),
            c: e.n(t.changeClass),
            d: e.t(t.date),
            e: a,
          };
        }),
        d: e.n("skin-" + t.skin),
      };
    },
  ],
  ["__scopeId", "data-v-cde75922"],
]);
wx.createPage(n);
