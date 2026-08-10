var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../common/vendor.js"),
  r = require("../../utils/hqWSHelper.js"),
  n = {
    name: "MpRotateStockList",
    components: {
      landscape: function () {
        return "./@tencent/wzq-portfolio-landscape/mp.js";
      },
    },
    provide: function () {
      return { hqBridge: this.hqBridge, hqWSHelper: r.hqWSHelper };
    },
    data: function () {
      return {
        hqBridge: new t.HQBridge(),
        firstLoad: !0,
        hkVIP: !1,
        isGrayUser: !1,
        skin: t.wx$1.getStorageSync("user/skin") || "white",
      };
    },
    created: function () {},
    onLoad: function (e) {
      var t = e || {},
        r = t.groupId,
        n = t.order,
        a = t.orderBy;
      try {
        var o = (this.$refs.landscape || {} || {}).handleActivated;
        "function" == typeof o &&
          o(!0, { groupId: r || "1", order: n, orderBy: a });
      } catch (o) {}
      this.judgeGrayUser();
    },
    onShow: function () {
      var e = this;
      if (this.firstLoad) this.firstLoad = !1;
      else
        try {
          var r = (this.$refs.landscape || {} || {}).handleActivated;
          "function" == typeof r && r(this.firstLoad);
        } catch (e) {}
      this.skin = t.wx$1.getStorageSync("user/skin") || "white";
      try {
        getApp().globalData.setSkin(function (t) {
          e.skin = "black" === t ? "black" : "white";
        });
      } catch (e) {}
    },
    onUnload: function () {
      try {
        var e = (this.$refs.landscape || {} || {}).beforeRouteLeave;
        "function" == typeof e && e();
      } catch (e) {}
    },
    onHide: function () {
      try {
        var e = (this.$refs.landscape || {} || {}).beforeRouteLeave;
        "function" == typeof e && e();
      } catch (e) {}
    },
    onShareAppMessage: function () {
      return { title: "你能用微信盯盘啦", path: "/pages/index/index" };
    },
    onResize: function (e) {
      e &&
        "landscape" !== e.deviceOrientation &&
        t.wx$1.navigateBack({ complete: function () {} });
    },
    methods: {
      judgeGrayUser: function () {
        return (
          (r = this),
          null,
          (n = e().mark(function r() {
            var n, a;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (n = t.wx$1.getStorageSync("_qluin")),
                        (e.next = 4),
                        t.judgeGrayUser(n, "9309506721")
                      );
                    case 4:
                      (a = e.sent), (this.isGrayUser = a), (e.next = 11);
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(0)), (this.isGrayUser = !1);
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              this,
              [[0, 8]]
            );
          })),
          new Promise(function (e, t) {
            var a = function (e) {
                try {
                  i(n.next(e));
                } catch (e) {
                  t(e);
                }
              },
              o = function (e) {
                try {
                  i(n.throw(e));
                } catch (e) {
                  t(e);
                }
              },
              i = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(a, o);
              };
            i((n = n.apply(r, null)).next());
          })
        );
        var r, n;
      },
    },
  };
Array ||
  (
    t.resolveComponent("landscape") +
    t.resolveComponent("mp-privacy-dialog") +
    t.resolveComponent("stock-privacy-dialog")
  )();
var a = t._export_sfc(n, [
  [
    "render",
    function (e, r, n, a, o, i) {
      return {
        a: e.rootFontSize,
        b: t.sr("landscape", "befbd748-0"),
        c: o.skin,
        d: t.p({ "hk-v-i-p": o.hkVIP, isGrayUser: o.isGrayUser }),
        e: t.p({ "no-auto": !0 }),
      };
    },
  ],
]);
(n.__runtimeHooks = 2), wx.createPage(a);
