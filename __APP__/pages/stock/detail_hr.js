var e = require("../../common/vendor.js"),
  t = getApp().globalData,
  r = {
    data: function () {
      return {
        list: [],
        skin: e.wx$1.getStorageSync("user/skin") || "white",
        ver: "",
      };
    },
    onLoad: function (r) {
      var o = this;
      (this.urlParams = r),
        e.wx$1.setNavigationBarTitle({ title: "公司高管" }),
        this.queryData(),
        t.setSkin(function (e) {
          (o.skin = "black" === e ? "black" : "white"),
            (o.ver = t.getPhoneModel(t.device.model));
        });
    },
    methods: {
      queryData: function () {
        var e = this,
          r = this.urlParams,
          o = {
            url: t.CGI_PREFIX + "information.fcgi",
            data: { scode: r.scode, markets: r.market, type: 11 },
            success: function (r) {
              r && "0" === r.retcode
                ? (e.list = r.director)
                : t.showError(r.retmsg, r.retcode);
            },
          };
        t.wx.request(o);
      },
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog")
  )();
var o = e._export_sfc(r, [
  [
    "render",
    function (t, r, o, a, n, i) {
      return {
        a: t.rootFontSize,
        b: e.p({ "no-auto": !0 }),
        c: e.f(t.list, function (t, r, o) {
          return { a: e.t(t.dname), b: e.t(t.dposition), c: r };
        }),
        d: e.n("skin-" + t.skin),
        e: e.n(t.ver),
      };
    },
  ],
  ["__scopeId", "data-v-5d4df48b"],
]);
wx.createPage(o);
