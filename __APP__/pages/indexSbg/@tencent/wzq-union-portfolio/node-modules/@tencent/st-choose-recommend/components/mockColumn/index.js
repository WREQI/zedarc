var e = require("../../../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  u = function (e, r, n) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  a = function (e, t) {
    for (var a in t || (t = {})) o.call(t, a) && u(e, a, t[a]);
    if (n) {
      var i,
        s = r(n(t));
      try {
        for (s.s(); !(i = s.n()).done; ) {
          a = i.value;
          c.call(t, a) && u(e, a, t[a]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  i = require("../../../../../../../../../common/vendor.js"),
  s = require("../recommend/index.js"),
  l = require("../../../../../../stock-base/visibilityObserver/index.js"),
  m = i.ref(!1),
  p = null,
  f = null;
var v = {
    props: { isCurrent: { type: Boolean, default: !1 } },
    setup: function (r, t) {
      return (function (r, t) {
        var n = t.emit,
          o = s.useClickProxy().proxyHandlers,
          c = i.getCurrentInstance().proxy || i.getCurrentInstance();
        i.onMounted(function () {
          (p = setTimeout(function () {
            f = new l.VisibilityObserver(
              ".mock-column",
              {
                once: !0,
                throttle: 1e3,
                callback: function (e) {
                  e &&
                    i.StockBridge.report("yy.choose.recommend_mocktrade_brow");
                },
                intersection: { threshold: 0.2 },
              },
              { context: c }
            );
          }, 500)),
            n("columnStatus", { type: "mockColumn", flag: !0 });
        }),
          (function () {
            return (
              (t = this),
              null,
              (n = e().mark(function t() {
                var n, o;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.prev = 0), r.isCurrent)) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          return (
                            (e.next = 5),
                            i.StockBridge.request(
                              "https://wzq.tenpay.com/svr/user/user_service/get_user_center_info",
                              i.RequestTypeEnum.GET
                            )
                          );
                        case 5:
                          (n = e.sent),
                            (o = n.mn_stock_info),
                            (m.value =
                              (null == o ? void 0 : o.is_new_user) || !1),
                            (e.next = 13);
                          break;
                        case 10:
                          (e.prev = 10), (e.t0 = e.catch(0)), (m.value = !1);
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 10]]
                );
              })),
              new Promise(function (e, r) {
                var o = function (e) {
                    try {
                      u(n.next(e));
                    } catch (e) {
                      r(e);
                    }
                  },
                  c = function (e) {
                    try {
                      u(n.throw(e));
                    } catch (e) {
                      r(e);
                    }
                  },
                  u = function (r) {
                    return r.done
                      ? e(r.value)
                      : Promise.resolve(r.value).then(o, c);
                  };
                u((n = n.apply(t, null)).next());
              })
            );
            var t, n;
          })(),
          i.onBeforeUnmount(function () {
            var e, r;
            null ==
              (r =
                null == (e = null == f ? void 0 : f.observer)
                  ? void 0
                  : e.disconnect) || r.call(e),
              p && clearTimeout(p);
          });
        var u = { mockNewUser: m },
          v = o({
            toMocktrade: function () {
              i.StockBridge.report("yy.choose.recommend_mocktrade_click"),
                i.StockRouter.routeTo({ name: "mocktrade" });
            },
          });
        return a(a({}, u), v);
      })(r, { emit: t.emit });
    },
  },
  d = i._export_sfc(v, [
    [
      "render",
      function (e, r, t, n, o, c) {
        return i.e({ a: e.mockNewUser }, (e.mockNewUser, {}), {
          b: i.o(function () {
            return e.toMocktrade && e.toMocktrade.apply(e, arguments);
          }, 3511),
        });
      },
    ],
    ["__scopeId", "data-v-b7acb993"],
  ]);
wx.createComponent(d);
