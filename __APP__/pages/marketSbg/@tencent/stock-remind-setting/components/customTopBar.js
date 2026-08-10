var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var o = require("../../../../../common/vendor.js"),
  t = {
    components: {},
    inject: ["hqBridge"],
    props: { isFixed: { type: Boolean, default: !1 } },
    data: function () {
      var e, o, t, n;
      return {
        safeTop: 0,
        height: 0,
        showHome: !1,
        showTopIcon: !1,
        isPC:
          null ==
          (n =
            null ==
            (t =
              null == (o = null == (e = getApp()) ? void 0 : e.globalData)
                ? void 0
                : o.detect)
              ? void 0
              : t.env)
            ? void 0
            : n.IS_PCWEIXIN,
        stockOverView: {},
      };
    },
    computed: {
      isZxgMpPc: function () {
        return this.isPC;
      },
    },
    created: function () {
      this.getSafeArea();
      var e = getApp().globalData.systemInfo || {},
        t = e.platform,
        n = e.SDKVersion,
        i = o.gte(n, "3.6.1");
      (["ios", "android", "devtools"].includes(t) || i) &&
        (this.showTopIcon = !0);
    },
    methods: {
      goHome: function () {
        o.wx$1.switchTab({ url: "/pages/index/index" });
      },
      goBack: function () {
        o.wx$1.navigateBack();
      },
      getSafeArea: function () {
        var t = this,
          n =
            (o.wx$1.getWindowInfo && o.wx$1.getWindowInfo()) ||
            o.wx$1.getSystemInfoSync(),
          i = n.statusBarHeight,
          r = void 0 === i ? 0 : i,
          s = n.safeArea,
          a = void 0 === s ? {} : s;
        (this.safeTop = Math.max(a.top, r)),
          this.$nextTick(function () {
            return (
              (o = t),
              null,
              (n = e().mark(function o() {
                var t, n, i;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            this.hqBridge.getEleInfo(".top-bar-container", this)
                          );
                        case 2:
                          (t = e.sent),
                            (n = (t || {}).height),
                            (i = void 0 === n ? 0 : n),
                            this.$emit("getTopBarHeight", i);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  },
                  o,
                  this
                );
              })),
              new Promise(function (e, t) {
                var i = function (e) {
                    try {
                      s(n.next(e));
                    } catch (e) {
                      t(e);
                    }
                  },
                  r = function (e) {
                    try {
                      s(n.throw(e));
                    } catch (e) {
                      t(e);
                    }
                  },
                  s = function (o) {
                    return o.done
                      ? e(o.value)
                      : Promise.resolve(o.value).then(i, r);
                  };
                s((n = n.apply(o, null)).next());
              })
            );
            var o, n;
          });
      },
    },
  },
  n = o._export_sfc(t, [
    [
      "render",
      function (e, t, n, i, r, s) {
        return o.e(
          { a: !s.isZxgMpPc },
          s.isZxgMpPc ? {} : { b: "".concat(n.isFixed ? r.safeTop : 0, "px") },
          { c: !s.isZxgMpPc },
          s.isZxgMpPc
            ? {}
            : o.e(
                { d: !s.isZxgMpPc },
                s.isZxgMpPc
                  ? {}
                  : o.e(
                      { e: r.showHome && r.showTopIcon },
                      r.showHome && r.showTopIcon
                        ? {
                            f: o.o(function () {
                              return s.goHome && s.goHome.apply(s, arguments);
                            }, 2281),
                          }
                        : {},
                      { g: !r.showHome && r.showTopIcon },
                      !r.showHome && r.showTopIcon
                        ? {
                            h: o.o(function () {
                              return s.goBack && s.goBack.apply(s, arguments);
                            }, 2282),
                          }
                        : {}
                    ),
                {
                  i: "".concat(r.safeTop, "px"),
                  j: n.isFixed ? "fixed" : "relative",
                }
              ),
          { k: !s.isZxgMpPc && n.isFixed },
          (!s.isZxgMpPc && n.isFixed, {})
        );
      },
    ],
    ["__scopeId", "data-v-3b2d0a32"],
  ]);
wx.createComponent(n);
