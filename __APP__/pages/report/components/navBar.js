var e = require("../../../common/vendor.js"),
  t = {
    props: {
      title: { type: String, default: "" },
      headerAlpha: { type: Number, default: 0 },
    },
    data: function () {
      var t,
        o,
        n =
          (null ==
          (o = null == (t = getApp().globalData.detect) ? void 0 : t.env)
            ? void 0
            : o.IS_PCWEIXIN) || !1;
      return {
        statusBarHeight: (
          (e.wx$1.getWindowInfo && e.wx$1.getWindowInfo()) ||
          e.wx$1.getSystemInfoSync()
        ).statusBarHeight,
        isPc: n,
        showHomeIcon: !1,
        skin: e.wx$1.getStorageSync("user/skin") || "white",
      };
    },
    created: function () {
      try {
        getCurrentPages().length <= 1 && (this.showHomeIcon = !0);
      } catch (e) {}
    },
    methods: {
      goBack: function () {
        e.wx$1.navigateBack();
      },
      goHome: function () {
        e.wx$1.switchTab({ url: "/pages/index/index" });
      },
    },
  },
  o = e._export_sfc(t, [
    [
      "render",
      function (t, o, n, a, c, r) {
        return e.e(
          { a: c.isPc },
          c.isPc
            ? {}
            : c.showHomeIcon
            ? {
                c: e.o(function () {
                  return r.goHome && r.goHome.apply(r, arguments);
                }, 1448),
              }
            : {
                d: e.o(function () {
                  return r.goBack && r.goBack.apply(r, arguments);
                }, 1449),
              },
          {
            b: c.showHomeIcon,
            e: e.t(n.title),
            f: "".concat(n.headerAlpha),
            g: "".concat(c.statusBarHeight, "px"),
            h:
              "black" === c.skin
                ? "rgba(0, 0, 0, ".concat(n.headerAlpha, ")")
                : "rgba(255, 255, 255, ".concat(n.headerAlpha, ")"),
          }
        );
      },
    ],
    ["__scopeId", "data-v-1854f724"],
  ]);
wx.createComponent(o);
