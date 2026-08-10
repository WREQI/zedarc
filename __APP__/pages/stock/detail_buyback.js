var t = require("../../common/vendor.js"),
  e = getApp().globalData,
  r = {
    data: function () {
      return { list: [], skin: t.wx$1.getStorageSync("user/skin") || "white" };
    },
    onLoad: function (r) {
      var a = this;
      (this.urlParams = r),
        t.wx$1.setNavigationBarTitle({ title: "公司回购" }),
        this.queryData(),
        e.setSkin(function (t) {
          a.skin = "black" === t ? "black" : "white";
        });
    },
    methods: {
      queryData: function () {
        var t = this,
          r = this.urlParams,
          a = {
            url: e.CGI_PREFIX + "information.fcgi",
            data: { scode: r.scode, markets: r.market, type: 2 },
            success: function (r) {
              if (r && "0" === r.retcode) {
                var a = r.buy_back || [];
                t.list = a;
              } else e.showError(r.retmsg, r.retcode);
            },
          };
        e.wx.request(a);
      },
    },
  };
Array ||
  (
    t.resolveComponent("mp-privacy-dialog") +
    t.resolveComponent("stock-privacy-dialog")
  )();
var a = t._export_sfc(r, [
  [
    "render",
    function (e, r, a, i, o, n) {
      return {
        a: e.rootFontSize,
        b: t.p({ "no-auto": !0 }),
        c: t.f(e.list, function (e, r, a) {
          return { a: t.t(e.price), b: t.t(e.quantity), c: t.t(e.date), d: r };
        }),
        d: t.n("skin-" + e.skin),
      };
    },
  ],
  ["__scopeId", "data-v-e201f570"],
]);
wx.createPage(a);
