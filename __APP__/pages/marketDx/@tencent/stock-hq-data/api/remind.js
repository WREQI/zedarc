require("../../../../../@babel/runtime/helpers/Objectentries"),
  require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/typeof"),
  r = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../../../@babel/runtime/helpers/createClass"),
  i = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  u = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  s = Object.defineProperty,
  o = Object.defineProperties,
  l = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  v = Object.prototype.propertyIsEnumerable,
  d = function (e, r, t) {
    return r in e
      ? s(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t);
  },
  f = function (e, r) {
    for (var t in r || (r = {})) c.call(r, t) && d(e, t, r[t]);
    if (a) {
      var n,
        i = u(a(r));
      try {
        for (i.s(); !(n = i.n()).done; ) {
          t = n.value;
          v.call(r, t) && d(e, t, r[t]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  h = function (e, r) {
    return o(e, l(r));
  },
  b = require("../utils.js"),
  p = [0, 2],
  m = [0],
  k = function (e) {
    return null == e || "" === e;
  },
  y = function (e) {
    return m.includes(e);
  },
  _ = function (e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      t = r.filterNetInflow,
      n = void 0 !== t && t,
      u = r.filterSpecificTurnover,
      s = void 0 !== u && u;
    return Object.entries(e).filter(function (e) {
      var r = i(e, 1)[0];
      return !((n && "net_inflow" === r) || (s && "specific_turnover" === r));
    });
  },
  g = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return f(
      {
        isIndex: !1,
        isETF: !1,
        isFund: !1,
        market: "",
        isHSMarket: function () {
          return !1;
        },
        isHKMarket: function () {
          return !1;
        },
        isHKFund: function () {
          return !1;
        },
        stockType: "",
        showFundNav: !1,
      },
      e
    );
  },
  S = function (e, r) {
    var t = r.isIndex,
      n = r.isETF,
      i = r.isFund,
      u = r.market,
      s = r.isHSMarket,
      o = r.isHKMarket,
      l = r.isHKFund,
      a = r.stockType,
      c = r.showFundNav;
    switch (e) {
      case "new_high_low":
      default:
        return !0;
      case "limit_up_down":
        return s(u) && !t;
      case "big_event":
        return !t && !n;
      case "large_order":
        return !t && !n && !i && !l(u, a) && (s(u) || o(u));
      case "fund_nav_update":
      case "func_nav_update":
        return c;
    }
  };
exports.RemindApi = (function () {
  function u(e) {
    t(this, u), (this.ajaxPost = e || this.defaultAjaxPost);
  }
  return (
    n(u, [
      {
        key: "defaultAjaxPost",
        value: function (e, t) {
          return (
            (n = this),
            null,
            (i = r().mark(function n() {
              return r().wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.prev = 0),
                          (r.next = 3),
                          fetch(e, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(t),
                          })
                        );
                      case 3:
                        return r.abrupt("return", r.sent.json());
                      case 6:
                        return (
                          (r.prev = 6),
                          (r.t0 = r.catch(0)),
                          r.abrupt("return", {})
                        );
                      case 9:
                      case "end":
                        return r.stop();
                    }
                },
                n,
                null,
                [[0, 6]]
              );
            })),
            new Promise(function (e, r) {
              var t = function (e) {
                  try {
                    s(i.next(e));
                  } catch (e) {
                    r(e);
                  }
                },
                u = function (e) {
                  try {
                    s(i.throw(e));
                  } catch (e) {
                    r(e);
                  }
                },
                s = function (r) {
                  return r.done
                    ? e(r.value)
                    : Promise.resolve(r.value).then(t, u);
                };
              s((i = i.apply(n, null)).next());
            })
          );
          var n, i;
        },
      },
      {
        key: "queryStockAlert",
        value: function (e) {
          return this.ajaxPost(
            "https://wzq.tenpay.com/svr/stock/alert/query",
            e
          );
        },
      },
      {
        key: "isSubscribeItemClosed",
        value: function (e) {
          if (!e) return !0;
          var r = e.notice_type,
            t = e.alert_time;
          return 1 == +r ? !!t : "user_manual_close" === t;
        },
      },
      {
        key: "checkValidSubscribeInfos",
        value: function (r) {
          var t = this,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (
            !!r &&
            _(r, n).some(function (r) {
              var n = i(r, 2)[1];
              return (
                !k(n) &&
                (Array.isArray(n)
                  ? 0 !== n.length &&
                    !n.every(function (e) {
                      return t.isSubscribeItemClosed(e);
                    })
                  : "object" != e(n) || Object.keys(n).length > 0)
              );
            })
          );
        },
      },
      {
        key: "checkHasClosedSubscribeInfos",
        value: function (e) {
          var r = this,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (
            !!e &&
            _(e, t).some(function (e) {
              var t = i(e, 2)[1];
              return (
                !k(t) &&
                !!Array.isArray(t) &&
                0 !== t.length &&
                t.some(function (e) {
                  return r.isSubscribeItemClosed(e);
                })
              );
            })
          );
        },
      },
      {
        key: "checkValidSmartTip",
        value: function (e) {
          var r,
            t,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          if (!(null == (r = null == e ? void 0 : e.smart) ? void 0 : r.length))
            return !1;
          var u = g(n),
            s = (null == (t = e.smart[0]) ? void 0 : t.smart_tip) || {};
          return Object.entries(s).some(function (e) {
            var r = i(e, 2),
              t = r[0];
            return (
              !(function (e) {
                return p.includes(e);
              })(r[1]) && S(t, u)
            );
          });
        },
      },
      {
        key: "checkHasReminded",
        value: function (e) {
          var r,
            t,
            n,
            i,
            u =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            s =
              null ==
              (t = null == (r = null == e ? void 0 : e.stocks) ? void 0 : r[0])
                ? void 0
                : t.subscribe_infos,
            o =
              null ==
              (i = null == (n = null == e ? void 0 : e.stocks) ? void 0 : n[0])
                ? void 0
                : i.show_fund_nav_update,
            l = this.checkValidSubscribeInfos(s, {
              filterNetInflow: u.filterNetInflow,
              filterSpecificTurnover: u.filterSpecificTurnover,
            }),
            a = this.checkValidSmartTip(e, h(f({}, u), { showFundNav: o }));
          return l || a;
        },
      },
      {
        key: "checkHasRemindedAuto",
        value: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = e.market,
            t = e.stock_type,
            n = e.subscribe_infos,
            i = e.show_fund_nav_update,
            u = e.smart_tip,
            s = b.isIndex(t),
            o = "ETF" === t,
            l = b.isFund(t),
            a = this.checkValidSubscribeInfos(n),
            c = { smart: [{ smart_tip: u || {} }] },
            v = this.checkValidSmartTip(c, {
              isIndex: s,
              isETF: o,
              isFund: l,
              market: r,
              isHSMarket: b.isHSMarket,
              isHKMarket: b.isHKMarket,
              isHKFund: b.isHKFund,
              stockType: t,
              showFundNav: i,
            });
          return a || v;
        },
      },
      {
        key: "checkHasClosedSmartTip",
        value: function (e) {
          var r,
            t,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          if (!(null == (r = null == e ? void 0 : e.smart) ? void 0 : r.length))
            return !1;
          var u = g(n),
            s = (null == (t = e.smart[0]) ? void 0 : t.smart_tip) || {};
          return Object.entries(s).some(function (e) {
            var r = i(e, 2),
              t = r[0],
              n = r[1];
            return y(n) && S(t, u);
          });
        },
      },
      {
        key: "checkHasClosedSettings",
        value: function (e) {
          var r,
            t,
            n,
            i,
            u =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            s =
              null ==
              (t = null == (r = null == e ? void 0 : e.stocks) ? void 0 : r[0])
                ? void 0
                : t.subscribe_infos,
            o =
              null ==
              (i = null == (n = null == e ? void 0 : e.stocks) ? void 0 : n[0])
                ? void 0
                : i.show_fund_nav_update,
            l = this.checkHasClosedSubscribeInfos(s, {
              filterNetInflow: u.filterNetInflow,
              filterSpecificTurnover: u.filterSpecificTurnover,
            }),
            a = this.checkHasClosedSmartTip(e, h(f({}, u), { showFundNav: o }));
          return l || a;
        },
      },
      {
        key: "getClosedSubscribeItems",
        value: function (e) {
          var r = this,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          if (!e) return [];
          var n = [];
          return (
            _(e, t).forEach(function (e) {
              var t = i(e, 2)[1];
              Array.isArray(t) &&
                t.forEach(function (e) {
                  r.isSubscribeItemClosed(e) && n.push(e);
                });
            }),
            n
          );
        },
      },
      {
        key: "getClosedSmartTipKeys",
        value: function (e) {
          var r,
            t,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          if (!(null == (r = null == e ? void 0 : e.smart) ? void 0 : r.length))
            return [];
          var u = g(n),
            s = (null == (t = e.smart[0]) ? void 0 : t.smart_tip) || {};
          return Object.entries(s)
            .filter(function (e) {
              var r = i(e, 2),
                t = r[0],
                n = r[1];
              return y(n) && S(t, u);
            })
            .map(function (e) {
              return i(e, 1)[0];
            });
        },
      },
      {
        key: "mergeListData",
        value: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            n = t.isLite,
            u = void 0 !== n && n,
            s = e.reduce(function (e, r) {
              var t;
              return (
                (e[
                  null == (t = null == r ? void 0 : r.symbol)
                    ? void 0
                    : t.slice(2)
                ] = r),
                e
              );
            }, {});
          return r.map(function (e) {
            var r,
              t,
              n = f({}, e);
            u &&
              n.subscribe_infos &&
              (n = h(f({}, n), {
                subscribe_infos: Object.fromEntries(
                  Object.entries(n.subscribe_infos).filter(function (e) {
                    var r = i(e, 1)[0];
                    return "net_inflow" !== r && "specific_turnover" !== r;
                  })
                ),
              }));
            var o =
                null ==
                (t =
                  null == (r = null == e ? void 0 : e.code)
                    ? void 0
                    : r.replace)
                  ? void 0
                  : t.call(r, /(\.N|\.OQ|\.AM|\.PS|\.OTC)/g, ""),
              l = s[e.code];
            return h(l ? f(f({}, n), l) : f({}, n), { code: o, scode: n.code });
          });
        },
      },
    ]),
    u
  );
})();
