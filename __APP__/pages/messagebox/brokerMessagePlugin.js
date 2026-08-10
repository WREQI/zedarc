var e = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = Object.defineProperty,
  t = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  i = function (e, n, t) {
    return n in e
      ? r(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[n] = t);
  },
  c = require("../../common/vendor.js"),
  d = require("../../utils/broker/usePluginInfo.js"),
  h = c.ref("100%");
function s() {
  return {
    height: h,
    setHeight: function (e) {
      h.value = e;
    },
  };
}
var p = {
  components: {
    loadingPlaceHolder: function () {
      return "./loadingPlaceholder.js";
    },
  },
  props: {
    curBroker: {
      type: Object,
      default: function () {
        return {};
      },
    },
    contentHeight: { type: String, default: "565px" },
  },
  setup: function (r, h) {
    var p = this,
      f = h.emit,
      g = c.ref(!1);
    c.onMounted(function () {
      return (
        (e = p),
        null,
        (r = n().mark(function e() {
          return n().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), c.getPcIsDisabledTrade();
                case 2:
                  g.value = e.sent;
                case 3:
                case "end":
                  return e.stop();
              }
          }, e);
        })),
        new Promise(function (n, t) {
          var a = function (e) {
              try {
                l(r.next(e));
              } catch (e) {
                t(e);
              }
            },
            o = function (e) {
              try {
                l(r.throw(e));
              } catch (e) {
                t(e);
              }
            },
            l = function (e) {
              return e.done ? n(e.value) : Promise.resolve(e.value).then(a, o);
            };
          l((r = r.apply(e, null)).next());
        })
      );
      var e, r;
    });
    var y,
      P = c.useBrokerInfo(),
      v = P.isBrokerPluginEnable,
      R = P.isTradeEnable,
      b = d.usePluginInfo(c.ref(r.curBroker)),
      S = c.ref(
        c.sdkBridge.isMaintain({ biz: "trade", broker: r.curBroker.code })
      ),
      O = c.computed(function () {
        return v(r.curBroker.code) && !r.curBroker.unsupported && R.value;
      }),
      m = c.inject("cardLoadManager") || {},
      C = c.computed(function () {
        return !S.value && O.value && m.canRender(r.curBroker.code);
      }),
      L = c.ref(!1),
      k = c.computed(function () {
        return !L.value && !S.value && C.value;
      }),
      B = s().setHeight;
    return (
      c.watch(
        function () {
          return r.contentHeight;
        },
        function (e) {
          B(e);
        },
        { immediate: !0 }
      ),
      (y = (function (n, r) {
        for (var t in r || (r = {})) l.call(r, t) && i(n, t, r[t]);
        if (o) {
          var a,
            c = e(o(r));
          try {
            for (c.s(); !(a = c.n()).done; ) {
              t = a.value;
              u.call(r, t) && i(n, t, r[t]);
            }
          } catch (e) {
            c.e(e);
          } finally {
            c.f();
          }
        }
        return n;
      })(
        {
          isMaintain: S,
          COMMON_PAGE_STATUS: c.COMMON_PAGE_STATUS,
          isSupportBrokerPlugin: O,
          isPcDisable: g,
          canRender: C,
          showLoading: k,
        },
        b
      )),
      t(
        y,
        a({
          handleLoader: function () {
            (L.value = !0), c.usePluginSafebox().processZl(r.curBroker.code);
          },
          handleStyleChange: function (e) {
            var n, t;
            f("styleChange", {
              status:
                (null ==
                (t =
                  null == (n = null == e ? void 0 : e.detail)
                    ? void 0
                    : n.__args__)
                  ? void 0
                  : t[0]) || e,
              code: r.curBroker.code,
            });
          },
          handlePullRefresh: function () {
            f("pullRefresh", r.curBroker.code);
          },
        })
      )
    );
  },
  computed: {
    errorType: function () {
      return c.COMMON_PAGE_ERROR.EMPTY;
    },
  },
};
Array ||
  (
    c.resolveComponent("st-status") + c.resolveComponent("loading-place-holder")
  )();
var f = c._export_sfc(p, [
  [
    "render",
    function (e, n, r, t, a, o) {
      return c.e(
        { a: !r.curBroker.unsupported },
        r.curBroker.unsupported
          ? {}
          : c.e(
              { b: t.isSupportBrokerPlugin && t.isPcDisable },
              t.isSupportBrokerPlugin && t.isPcDisable
                ? {}
                : e.isZhaoShang && t.canRender
                ? {
                    d: r.contentHeight,
                    e: c.o(function () {
                      return (
                        t.handleLoader && t.handleLoader.apply(t, arguments)
                      );
                    }, 2099),
                    f: c.o(function () {
                      return (
                        t.handleStyleChange &&
                        t.handleStyleChange.apply(t, arguments)
                      );
                    }, 2100),
                    g: c.o(function () {
                      return (
                        t.handlePullRefresh &&
                        t.handlePullRefresh.apply(t, arguments)
                      );
                    }, 2101),
                  }
                : e.isHuaLin && t.canRender
                ? {
                    i: r.contentHeight,
                    j: c.o(function () {
                      return (
                        t.handleLoader && t.handleLoader.apply(t, arguments)
                      );
                    }, 2102),
                    k: c.o(function () {
                      return (
                        t.handleStyleChange &&
                        t.handleStyleChange.apply(t, arguments)
                      );
                    }, 2103),
                    l: c.o(function () {
                      return (
                        t.handlePullRefresh &&
                        t.handlePullRefresh.apply(t, arguments)
                      );
                    }, 2104),
                  }
                : e.isGuangFa && t.canRender
                ? {
                    n: r.contentHeight,
                    o: c.o(function () {
                      return (
                        t.handleLoader && t.handleLoader.apply(t, arguments)
                      );
                    }, 2105),
                    p: c.o(function () {
                      return (
                        t.handleStyleChange &&
                        t.handleStyleChange.apply(t, arguments)
                      );
                    }, 2106),
                    q: c.o(function () {
                      return (
                        t.handlePullRefresh &&
                        t.handlePullRefresh.apply(t, arguments)
                      );
                    }, 2107),
                  }
                : e.isGuoXin && t.canRender
                ? {
                    s: r.contentHeight,
                    t: c.o(function () {
                      return (
                        t.handleLoader && t.handleLoader.apply(t, arguments)
                      );
                    }, 2108),
                    v: c.o(function () {
                      return (
                        t.handleStyleChange &&
                        t.handleStyleChange.apply(t, arguments)
                      );
                    }, 2109),
                    w: c.o(function () {
                      return (
                        t.handlePullRefresh &&
                        t.handlePullRefresh.apply(t, arguments)
                      );
                    }, 2110),
                  }
                : e.isGuoJin && t.canRender
                ? {
                    y: r.contentHeight,
                    z: c.o(function () {
                      return (
                        t.handleLoader && t.handleLoader.apply(t, arguments)
                      );
                    }, 2111),
                    A: c.o(function () {
                      return (
                        t.handleStyleChange &&
                        t.handleStyleChange.apply(t, arguments)
                      );
                    }, 2112),
                    B: c.o(function () {
                      return (
                        t.handlePullRefresh &&
                        t.handlePullRefresh.apply(t, arguments)
                      );
                    }, 2113),
                  }
                : e.isZhongJinCaiFu && t.canRender
                ? {
                    D: r.contentHeight,
                    E: c.o(function () {
                      return (
                        t.handleLoader && t.handleLoader.apply(t, arguments)
                      );
                    }, 2114),
                    F: c.o(function () {
                      return (
                        t.handleStyleChange &&
                        t.handleStyleChange.apply(t, arguments)
                      );
                    }, 2115),
                    G: c.o(function () {
                      return (
                        t.handlePullRefresh &&
                        t.handlePullRefresh.apply(t, arguments)
                      );
                    }, 2116),
                  }
                : e.isZhongXinJianTou && t.canRender
                ? {
                    I: r.contentHeight,
                    J: c.o(function () {
                      return (
                        t.handleLoader && t.handleLoader.apply(t, arguments)
                      );
                    }, 2117),
                    K: c.o(function () {
                      return (
                        t.handleStyleChange &&
                        t.handleStyleChange.apply(t, arguments)
                      );
                    }, 2118),
                    L: c.o(function () {
                      return (
                        t.handlePullRefresh &&
                        t.handlePullRefresh.apply(t, arguments)
                      );
                    }, 2119),
                  }
                : t.isMaintain
                ? {}
                : {
                    N: c.p({
                      type: t.COMMON_PAGE_STATUS.ERROR,
                      "error-type": o.errorType,
                      "show-error-img": !0,
                      "show-error-tips": !0,
                      "show-btn": !1,
                      "error-tips": "暂无新消息",
                    }),
                  },
              {
                c: e.isZhaoShang && t.canRender,
                h: e.isHuaLin && t.canRender,
                m: e.isGuangFa && t.canRender,
                r: e.isGuoXin && t.canRender,
                x: e.isGuoJin && t.canRender,
                C: e.isZhongJinCaiFu && t.canRender,
                H: e.isZhongXinJianTou && t.canRender,
                M: !t.isMaintain,
                O: t.showLoading,
              },
              (t.showLoading, {}),
              { P: r.contentHeight }
            )
      );
    },
  ],
  ["__scopeId", "data-v-2b1ec240"],
]);
wx.createComponent(f);
var g = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvc3JjL3BhZ2VzL21lc3NhZ2Vib3gvYnJva2VyTWVzc2FnZVBsdWdpbi52dWU =
  g),
  (exports.usePlaceholderHeight = s);
