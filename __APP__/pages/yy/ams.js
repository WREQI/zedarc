var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../common/vendor.js"),
  r = {
    components: {
      ams: function () {
        return "./@tencent/st-ams-union/Index.js".then(function (e) {
          return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LWFtcy11bmlvbi9JbmRleC52dWU;
        });
      },
      PreloadPlugin: function () {
        return "../broker/preloadplugin4.js";
      },
    },
    provide: function () {
      return { hqBridge: this.hqBridge, TradeFunc: n.sdkBridge };
    },
    data: function () {
      return { hqBridge: new n.HQBridge(), options: {} };
    },
    computed: {
      dealerCode: function () {
        var e;
        return (null == (e = this.options) ? void 0 : e.broker) || "10100";
      },
    },
    onLoad: function (n) {
      return (
        (r = this),
        null,
        (o = e().mark(function r() {
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    this.options = n;
                  case 1:
                  case "end":
                    return e.stop();
                }
            },
            r,
            this
          );
        })),
        new Promise(function (e, n) {
          var t = function (e) {
              try {
                a(o.next(e));
              } catch (e) {
                n(e);
              }
            },
            i = function (e) {
              try {
                a(o.throw(e));
              } catch (e) {
                n(e);
              }
            },
            a = function (n) {
              return n.done ? e(n.value) : Promise.resolve(n.value).then(t, i);
            };
          a((o = o.apply(r, null)).next());
        })
      );
      var r, o;
    },
  };
Array ||
  (
    n.resolveComponent("mp-privacy-dialog") +
    n.resolveComponent("stock-privacy-dialog") +
    n.resolveComponent("ams") +
    n.resolveComponent("preload-plugin")
  )();
var o = n._export_sfc(r, [
  [
    "render",
    function (e, r, o, t, i, a) {
      return n.e(
        {
          a: e.rootFontSize,
          b: n.p({ "no-auto": !0 }),
          c: n.p({ params: i.options }),
          d: a.dealerCode,
        },
        a.dealerCode ? { e: n.p({ "dealer-code": a.dealerCode }) } : {}
      );
    },
  ],
]);
wx.createPage(o);
