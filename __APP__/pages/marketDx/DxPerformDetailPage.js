var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../common/vendor.js"),
  n = {
    components: {
      DxPerformPage: function () {
        return "./@tencent/stock-hq-dxpage/PerformIndex.js";
      },
    },
    onShareAppMessage: function () {
      return { title: "近期打新获利请查收" };
    },
    provide: function () {
      return { hqBridge: this.hqBridge };
    },
    data: function () {
      return { hqBridge: new r.HQBridge(), userInfo: {}, query: null };
    },
    computed: {},
    onLoad: function (e) {
      this.query = e;
    },
    onPullDownRefresh: function () {
      return (
        (r = this),
        null,
        (n = e().mark(function r() {
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    this.$refs.dxperform &&
                      this.$refs.dxperform.onPullingDown();
                  case 1:
                  case "end":
                    return e.stop();
                }
            },
            r,
            this
          );
        })),
        new Promise(function (e, o) {
          var t = function (e) {
              try {
                u(n.next(e));
              } catch (e) {
                o(e);
              }
            },
            i = function (e) {
              try {
                u(n.throw(e));
              } catch (e) {
                o(e);
              }
            },
            u = function (r) {
              return r.done ? e(r.value) : Promise.resolve(r.value).then(t, i);
            };
          u((n = n.apply(r, null)).next());
        })
      );
      var r, n;
    },
    onReachBottom: function () {
      var e = this;
      setTimeout(function () {
        e.$refs.dxperform && e.$refs.dxperform.handleReachBottom();
      }, 500);
    },
    created: function () {
      this.hqBridge.setTitle("打新日历"),
        r.wx$1.setBackgroundColor({ backgroundColor: "#F5F6FA" });
    },
    methods: {
      finishPullDown: function () {
        r.wx$1.stopPullDownRefresh();
      },
    },
  };
Array ||
  (
    r.resolveComponent("mp-privacy-dialog") +
    r.resolveComponent("stock-privacy-dialog") +
    r.resolveComponent("DxPerformPage")
  )();
var o = r._export_sfc(n, [
  [
    "render",
    function (e, n, o, t, i, u) {
      return {
        a: e.rootFontSize,
        b: r.p({ "no-auto": !0 }),
        c: r.sr("dxperform", "5b4131ae-2"),
        d: r.o(u.finishPullDown, 408),
        e: r.p({ query: i.query }),
      };
    },
  ],
]);
(n.__runtimeHooks = 2), wx.createPage(o);
