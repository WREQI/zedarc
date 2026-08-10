var n = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../common/vendor.js"),
  a = {
    components: {
      AIFinancial: function () {
        return "../../reportFinancialSbg/report.js";
      },
    },
    data: function () {
      return { param: null };
    },
    onLoad: function (n) {
      this.param = n;
    },
    onShow: function () {
      try {
        this.$refs.aiFinancialRef && this.$refs.aiFinancialRef.onShow();
      } catch (n) {}
    },
    onPageScroll: getApp().globalData.throttle(16, function (n) {
      try {
        this.$refs.aiFinancialRef && this.$refs.aiFinancialRef.onPageScroll(n);
      } catch (n) {}
    }),
    onReachBottom: function () {
      try {
        this.$refs.aiFinancialRef && this.$refs.aiFinancialRef.onReachBottom();
      } catch (n) {}
    },
    onHide: function () {
      try {
        this.$refs.aiFinancialRef && this.$refs.aiFinancialRef.onHide();
      } catch (n) {}
    },
    onShareAppMessage: function () {
      return (
        (e = this),
        null,
        (a = n().mark(function e() {
          return n().wrap(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (n.prev = 0), (n.next = 3), this.$refs.aiFinancialRef
                    );
                  case 3:
                    if (((n.t0 = n.sent), !n.t0)) {
                      n.next = 6;
                      break;
                    }
                    n.t0 = this.$refs.aiFinancialRef.onShareAppMessage();
                  case 6:
                    return n.abrupt("return", n.t0);
                  case 9:
                    (n.prev = 9), (n.t1 = n.catch(0));
                  case 11:
                  case "end":
                    return n.stop();
                }
            },
            e,
            this,
            [[0, 9]]
          );
        })),
        new Promise(function (n, t) {
          var r = function (n) {
              try {
                o(a.next(n));
              } catch (n) {
                t(n);
              }
            },
            i = function (n) {
              try {
                o(a.throw(n));
              } catch (n) {
                t(n);
              }
            },
            o = function (e) {
              return e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
            };
          o((a = a.apply(e, null)).next());
        })
      );
      var e, a;
    },
    onShareTimeline: function () {
      try {
        return (
          this.$refs.aiFinancialRef &&
          this.$refs.aiFinancialRef.onShareTimeline()
        );
      } catch (n) {}
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("AIFinancial")
  )();
var t = e._export_sfc(a, [
  [
    "render",
    function (n, a, t, r, i, o) {
      return e.e(
        { a: n.rootFontSize, b: e.p({ "no-auto": !0 }), c: i.param },
        i.param
          ? {
              d: e.sr("aiFinancialRef", "7cb11478-2"),
              e: e.p({ param: i.param }),
            }
          : {}
      );
    },
  ],
]);
(a.__runtimeHooks = 7), wx.createPage(t);
