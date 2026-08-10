require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  r = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  i = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  l = function (e, t, n) {
    return new Promise(function (r, o) {
      var a = function (e) {
          try {
            c(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        u = function (e) {
          try {
            c(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        c = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(a, u);
        };
      c((n = n.apply(e, t)).next());
    });
  },
  s = require("../../../../../common/vendor.js"),
  p = require("../api/index.js"),
  f = require("../node-modules/@tencent/st-tools/dist/index.js");
function h(e) {
  return Array.isArray(e) && 0 !== e.length
    ? e
        .filter(function (e) {
          return e.point && Array.isArray(e.etf) && e.etf.length > 0;
        })
        .map(function (e, n) {
          return (
            (l = (function (e, n) {
              for (var r in n || (n = {})) u.call(n, r) && i(e, r, n[r]);
              if (a) {
                var o,
                  l = t(a(n));
                try {
                  for (l.s(); !(o = l.n()).done; ) {
                    r = o.value;
                    c.call(n, r) && i(e, r, n[r]);
                  }
                } catch (e) {
                  l.e(e);
                } finally {
                  l.f();
                }
              }
              return e;
            })({}, e)),
            r(l, o({ rank: n + 1 }))
          );
          var l;
        })
    : [];
}
var d = s.defineComponent({
  name: "SearchPage",
  components: {
    HotTopicNavBar: function () {
      return "./components/HotTopicNavBar.js";
    },
    ListItem: function () {
      return "./components/ListItem.js";
    },
    SearchBar: function () {
      return "./components/SearchBar.js";
    },
  },
  setup: function () {
    var t = s.getCurrentInstance(),
      n = s.computed(function () {
        return (t && t.proxy && t.proxy.$route) || {};
      }),
      r = s.ref([]),
      o = s.ref(""),
      a = s.ref(!1),
      u = s.ref(0),
      c = s.ref(!1),
      i = s.ref(null),
      d = s.ref(0),
      v = s.ref(0),
      m = ["mpwzq", "mpweapp"].includes("mpweapp"),
      g = !1;
    if (!m && "undefined" != typeof navigator) {
      var y = f.dist.detect(navigator.userAgent).env.IS_ZXG;
      g = y;
    }
    var b = s.computed(function () {
        return s.StockBridge.getStorage("user/skin") || "white";
      }),
      w = null,
      k = 0,
      x = (n.value.query && n.value.query.keyword) || "";
    x && (o.value = String(x));
    var P = s.computed(function () {
        return r.value;
      }),
      S = s.computed(function () {
        return o.value.trim().length > 0;
      }),
      L = s.computed(function () {
        return S.value && !a.value && 0 === P.value.length;
      }),
      B = s.computed(function () {
        return m || g
          ? { paddingTop: "".concat(d.value + v.value + 16, "px") }
          : {};
      });
    function I() {
      var e, t;
      (r.value = []),
        (u.value = 0),
        (c.value = !1),
        null == (t = null == (e = i.value) ? void 0 : e.resetStatus) ||
          t.call(e);
    }
    function N(t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return l(
        this,
        null,
        e().mark(function o() {
          var l, f, d, v, m, g, y, b, w;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if ((v = t.trim())) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return", (I(), (a.value = !1), !1));
                  case 3:
                    if (!a.value) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt("return", c.value);
                  case 5:
                    if (n || c.value) {
                      e.next = 7;
                      break;
                    }
                    return e.abrupt("return", !1);
                  case 7:
                    return (
                      (k = m = k + 1),
                      (a.value = !0),
                      (g = n ? 0 : u.value),
                      (e.prev = 10),
                      (e.next = 13),
                      p.api.getDigHotList(s.StockBridge, {
                        offset: g,
                        count: 20,
                        key: v,
                      })
                    );
                  case 13:
                    (y = e.sent),
                      (b =
                        (null == (l = null == y ? void 0 : y.data)
                          ? void 0
                          : l.hot_point_list) || []),
                      m === k &&
                        ((w = n ? b : r.value.concat(b)),
                        (r.value = h(w)),
                        (u.value = g + b.length),
                        (c.value = b.length >= 20),
                        n &&
                          (null ==
                            (d =
                              null == (f = i.value) ? void 0 : f.resetStatus) ||
                            d.call(f))),
                      (e.next = 21);
                    break;
                  case 18:
                    (e.prev = 18), (e.t0 = e.catch(10)), m === k && n && I();
                  case 21:
                    return (
                      (e.prev = 21), m === k && (a.value = !1), e.finish(21)
                    );
                  case 24:
                    return e.abrupt("return", c.value);
                  case 25:
                  case "end":
                    return e.stop();
                }
            },
            o,
            null,
            [[10, 18, 21, 24]]
          );
        })
      );
    }
    function R() {
      return l(
        this,
        null,
        e().mark(function t() {
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt("return", N(o.value, !1));
                case 1:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      );
    }
    function q() {
      if (
        (void 0 !== s.wx$1 &&
          "function" == typeof s.wx$1.hideKeyboard &&
          s.wx$1.hideKeyboard(),
        "undefined" != typeof document)
      ) {
        var e = document.activeElement;
        e &&
          ["INPUT", "TEXTAREA"].includes(e.tagName) &&
          "function" == typeof e.blur &&
          e.blur();
      }
    }
    return (
      s.onMounted(function () {
        N(o.value, !0);
      }),
      m ||
        s.onBeforeUnmount(function () {
          w && clearTimeout(w);
        }),
      {
        skin: b,
        keyword: o,
        matchedList: P,
        hasKeyword: S,
        showEmptyResult: L,
        hasNext: c,
        isLoading: a,
        isMP: m,
        isAPP: g,
        reachBottomRef: i,
        topSearchStyle: B,
        showFooterLogo: ["mpwzq", "wzqlight"].includes("mpweapp"),
        goBack: function () {
          s.StockRouter.routeBack(1);
        },
        handleNavLayout: function (e) {
          (d.value = e.safeTop || 0), (v.value = e.navBarHeight || 0);
        },
        handlePageInteraction: function () {
          q();
        },
        handlePageScroll: function () {
          q();
        },
        onCancel: function () {
          w && (clearTimeout(w), (w = null)),
            s.StockBridge.mtaReport({
              busi: "hq",
              eventName: "hot_topic_search_cancel_click",
            }),
            s.StockRouter.routeBack(1);
        },
        onInput: function (e) {
          (o.value = e),
            s.StockBridge.mtaReport({
              busi: "hq",
              eventName: "search_box_input",
            }),
            w && clearTimeout(w),
            (w = setTimeout(function () {
              N(o.value, !0);
            }, 300));
        },
        loadMore: R,
        onReachBottom: function () {
          return l(
            this,
            null,
            e().mark(function t() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), R();
                    case 2:
                      return e.abrupt("return", !e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          );
        },
      }
    );
  },
});
Array ||
  (
    s.resolveComponent("HotTopicNavBar") +
    s.resolveComponent("SearchBar") +
    s.resolveComponent("ListItem") +
    s.resolveComponent("st-reach-bottom")
  )();
var v = s._export_sfc(d, [
  [
    "render",
    function (e, t, n, r, o, a) {
      return s.e(
        { a: e.isMP || e.isAPP },
        e.isMP || e.isAPP
          ? {
              b: s.o(e.goBack, 598),
              c: s.o(e.handleNavLayout, 599),
              d: s.p({ title: "挖热点", "app-title-visible": !0 }),
            }
          : {},
        {
          e: s.o(e.onInput, 600),
          f: s.o(e.onCancel, 601),
          g: s.p({ value: e.keyword }),
          h: s.s(e.topSearchStyle),
          i: e.isMP,
        },
        e.isMP
          ? s.e(
              {
                j: s.f(e.matchedList, function (e, t, n) {
                  return {
                    a: "68bcfcfb-2-" + n,
                    b: s.p({ item: e, rank: t + 1, scene: "search" }),
                    c: e.symbol || e.rank,
                  };
                }),
                k: e.showEmptyResult,
              },
              (e.showEmptyResult, {}),
              { l: e.isLoading && e.matchedList.length > 0 },
              (e.isLoading && e.matchedList.length, {}),
              { m: e.showFooterLogo && e.matchedList.length > 0 && !e.hasNext },
              (e.showFooterLogo && e.matchedList.length > 0 && e.hasNext, {}),
              {
                n: s.n({ "page-body--locked": !e.hasKeyword }),
                o: e.hasKeyword,
                p: s.o(function () {
                  return (
                    e.handlePageScroll && e.handlePageScroll.apply(e, arguments)
                  );
                }, 602),
                q: s.o(function () {
                  return e.loadMore && e.loadMore.apply(e, arguments);
                }, 603),
              }
            )
          : s.e(
              {
                r: s.f(e.matchedList, function (e, t, n) {
                  return {
                    a: "68bcfcfb-4-" + n + ",68bcfcfb-3",
                    b: s.p({ item: e, rank: t + 1, scene: "search" }),
                    c: e.symbol || e.rank,
                  };
                }),
                s: e.showEmptyResult,
              },
              (e.showEmptyResult, {}),
              { t: e.showFooterLogo && e.matchedList.length > 0 && !e.hasNext },
              (e.showFooterLogo && e.matchedList.length > 0 && e.hasNext, {}),
              {
                v: s.sr("reachBottomRef", "68bcfcfb-3"),
                w: s.n({ "page-body--locked": !e.hasKeyword }),
                x: s.o(e.handlePageScroll, 604),
                y: s.p({
                  "finished-text": " ",
                  "immediate-check": !1,
                  offset: 10,
                  disabled: !e.hasNext || !e.hasKeyword,
                  "on-reach-bottom": e.onReachBottom,
                }),
              }
            ),
        {
          z: e.skin,
          A: s.o(function () {
            return (
              e.handlePageInteraction &&
              e.handlePageInteraction.apply(e, arguments)
            );
          }, 605),
          B: s.o(function () {
            return (
              e.handlePageInteraction &&
              e.handlePageInteraction.apply(e, arguments)
            );
          }, 606),
        }
      );
    },
  ],
  ["__scopeId", "data-v-68bcfcfb"],
]);
wx.createComponent(v);
