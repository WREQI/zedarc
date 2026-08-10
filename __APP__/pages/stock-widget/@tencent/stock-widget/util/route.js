var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  i = function (e, o, r) {
    return o in e
      ? t(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[o] = r);
  },
  u = function (e, t) {
    for (var u in t || (t = {})) n.call(t, u) && i(e, u, t[u]);
    if (r) {
      var c,
        l = o(r(t));
      try {
        for (l.s(); !(c = l.n()).done; ) {
          u = c.value;
          a.call(t, u) && i(e, u, t[u]);
        }
      } catch (e) {
        l.e(e);
      } finally {
        l.f();
      }
    }
    return e;
  },
  c = require("../../../../../common/vendor.js"),
  l = require("../../stock-hq-data/index.js"),
  s = require("../../stock-news-sdk/index.js"),
  d = c.StockBridge.ENV === c.EnvTypeEnum.SHY_NATIVE,
  f = {}.ios;
(exports.goToChoosePage = function () {
  d
    ? shy.navigateTo({ url: "qqstock://zixuan" })
    : (c.wx$1.hideKeyboard(), c.StockRouter.routeTo({ name: "ChooseIndex" }));
}),
  (exports.goToJgpjDetail = function (e) {
    if (!d)
      return (
        c.wx$1.hideKeyboard(),
        void c.StockBridge.routeTo({
          url: "/pages/searchAi/jgpjDetail?symbol=".concat(e),
        })
      );
    var o = encodeURIComponent(
      JSON.stringify({
        p_key: "com.tencent.shy.search_ai",
        p_url: "jgrate?symbol=".concat(e),
        p_title: "机构评级",
      })
    );
    c.StockBridge.routeTo({ url: "qqstock://SHY?info=".concat(o) });
  }),
  (exports.goToMockTrade = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    d ||
      (c.wx$1.hideKeyboard(),
      c.StockRouter.routeTo({ name: "mocktrade", query: e }));
  }),
  (exports.goToNewsDetail = function (e) {
    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (e) {
      if (!d)
        return (
          c.wx$1.hideKeyboard(),
          void c.StockRouter.routeTo({
            name: "informationDetail",
            query: u({ id: e }, o),
          })
        );
      s.sdk.navigateToNewsDetail(u({ id: e }, o));
    }
  }),
  (exports.goToStockDetail = function (e, o) {
    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (!d)
      return (
        c.wx$1.hideKeyboard(),
        void c.StockRouter.routeTo({
          name: "stockdetail",
          query: u({ market: e, scode: o }, t),
        })
      );
    shy.navigateTo({
      url: "qqstock://StockDetail?info=".concat(
        encodeURIComponent(
          JSON.stringify(u({ code: l.utils.getSymbol(e, o), showNav: !0 }, t))
        )
      ),
    });
  }),
  (exports.isAPP = d),
  (exports.isMP = !0),
  (exports.isiOS = f),
  (exports.useHqCardKit = function () {
    var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = o.request,
      r = o.formatData,
      n =
        void 0 === r
          ? function (e) {
              return e;
            }
          : r,
      a = o.onShouldShowChange,
      i = (o.isActivatedRefresh, c.ref(null)),
      u = c.ref(!!i.value),
      l = c.ref(null),
      s = function (e) {
        var o = u.value,
          t = !!e && !!i.value;
        return (u.value = t), null == a || a(t, o), t;
      },
      d = function () {
        var o,
          r,
          a,
          c = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (
          (o = exports),
          (r = null),
          (a = e().mark(function o() {
            var r, a;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ((!c && !u.value) || "function" != typeof t) {
                        e.next = 15;
                        break;
                      }
                      return (l.value = null), (e.prev = 2), (e.next = 5), t();
                    case 5:
                      if (((r = e.sent), (a = n(r)), (i.value = a), a)) {
                        e.next = 9;
                        break;
                      }
                      throw new Error("请求成功但无可渲染数据");
                    case 9:
                      s(!0), (e.next = 15);
                      break;
                    case 12:
                      (e.prev = 12),
                        (e.t0 = e.catch(2)),
                        (l.value = e.t0),
                        s(!1);
                    case 15:
                    case "end":
                      return e.stop();
                  }
              },
              o,
              null,
              [[2, 12]]
            );
          })),
          new Promise(function (e, t) {
            var n = function e(o) {
                try {
                  u(a.next(o));
                } catch (e) {
                  t(e);
                }
              },
              i = function (e) {
                try {
                  u(a.throw(e));
                } catch (e) {
                  t(e);
                }
              },
              u = function (o) {
                return o.done
                  ? e(o.value)
                  : Promise.resolve(o.value).then(n, i);
              };
            u((a = a.apply(o, r)).next());
          })
        );
      };
    return (
      c.onBeforeMount(function () {
        d(!0);
      }),
      c.onUnmounted(function () {}),
      { cardData: i, shouldShow: u, handleShouldShow: s, error: l, refresh: d }
    );
  });
