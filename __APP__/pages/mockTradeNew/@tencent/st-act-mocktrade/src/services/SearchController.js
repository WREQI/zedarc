var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper");
require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../../../../@babel/runtime/helpers/createClass"),
  c = require("../../../../../../@babel/runtime/helpers/inherits"),
  a = require("../../../../../../@babel/runtime/helpers/createSuper"),
  o = Object.defineProperty,
  i = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  h = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  f = function (e, t, r) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  m = function (e, t, r) {
    return new Promise(function (n, c) {
      var a = function (e) {
          try {
            i(r.next(e));
          } catch (e) {
            c(e);
          }
        },
        o = function (e) {
          try {
            i(r.throw(e));
          } catch (e) {
            c(e);
          }
        },
        i = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(a, o);
        };
      i((r = r.apply(e, t)).next());
    });
  },
  E = require("../../../../../../common/vendor.js"),
  p = require("./BaseController.js"),
  k = function (e) {
    return new Promise(function (t, r) {
      E.wx$1.getStorage({
        key: e,
        success: function (e) {
          t(e.data);
        },
        fail: function () {
          r("获取storage失败");
        },
      });
    });
  },
  S = function (e, t) {
    return new Promise(function (r, n) {
      E.wx$1.setStorage({
        key: e,
        data: t,
        success: function () {
          r();
        },
        fail: function () {
          n("写storage失败");
        },
      });
    });
  },
  d = "HISTORY_STOCK_KEY",
  C = (function (o) {
    c(C, o);
    var E = a(C);
    function C() {
      var e;
      return (
        r(this, C),
        ((e = E.call(this)).searchInited = !1),
        (e.searching = !1),
        (e.holdStockList = []),
        (e.searchStockList = []),
        (e.historyStockList = []),
        (e.topSearchedStocks = []),
        e
      );
    }
    return (
      n(C, [
        {
          key: "setSearchInit",
          value: function (e) {
            (this.searchInited = e),
              this.getHistory(),
              this.getAssetData(),
              this.getTopSearchedStocks();
          },
        },
        {
          key: "getAssetData",
          value: function () {
            var e = this;
            return this.fetch(p.MN_HOME_CGI).then(function (t) {
              var r = t.stock_asset || [];
              return (
                (e.holdStockList = r.map(function (e) {
                  var t = ""
                    .concat(e.code, ".")
                    .concat(p.MARKET_CODE[+e.market].toUpperCase());
                  return {
                    name: e.name,
                    code: e.code,
                    fullCode: t,
                    market: +e.market,
                    marketCN: p.MARKET_CODE[+e.market],
                  };
                })),
                e.emit(p.EVENT_NAME.GOT_ASSET_OVERVIEW),
                t
              );
            });
          },
        },
        {
          key: "search",
          value: function (e) {
            var t = this,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 30;
            if (e)
              return (
                this.report("search", "search", "search"),
                (this.searchKeyword = e),
                (this.searching = !0),
                this.emit(p.EVENT_NAME.SEARCH_START),
                this.fetch(p.SEARCH_CGI, {
                  keyword: encodeURIComponent(e),
                  limit: r,
                  scenes: 8,
                })
                  .then(function (e) {
                    t.searching = !1;
                    var r = e.sl || [];
                    (r = r.filter(function (e) {
                      return (
                        ["0", "2", "3", "4", "5", "e", "k", "c"].indexOf(
                          e.cls
                        ) >= 0
                      );
                    })),
                      (t.searchStockList = r.map(function (e) {
                        var r = ""
                            .concat(e.c, ".")
                            .concat(p.MARKET_CODE[+e.t].toUpperCase()),
                          n = r.match(
                            new RegExp("".concat(t.searchKeyword), "i")
                          );
                        return {
                          name: e.n,
                          code: e.c,
                          market: +e.t,
                          marketCN: p.MARKET_CODE[+e.t],
                          fullCode: r,
                          preCode: n ? r.substring(0, n.index) : "",
                          matchCode: n
                            ? r.substr(n.index, t.searchKeyword.length)
                            : "",
                          restCode: n
                            ? r.substr(n.index + t.searchKeyword.length)
                            : "",
                        };
                      })),
                      t.emit(p.EVENT_NAME.SEARCH_SUCCESS);
                  })
                  .catch(function (e) {
                    t.emit(p.EVENT_NAME.ERROR_ALERT, e.retmsg);
                  })
              );
          },
        },
        {
          key: "getHistory",
          value: function () {
            var e = this;
            k(d)
              .then(function (t) {
                (e.historyStockList = t || []),
                  e.emit(p.EVENT_NAME.GOT_SEARCH_HISTORY_DATA);
              })
              .catch(function () {});
          },
        },
        {
          key: "addHistory",
          value: function (e) {
            return m(
              this,
              null,
              t().mark(function r() {
                var n, c;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            k(d).catch(function () {
                              return [];
                            })
                          );
                        case 2:
                          if (((t.t0 = t.sent), t.t0)) {
                            t.next = 5;
                            break;
                          }
                          t.t0 = [];
                        case 5:
                          (n = t.t0), (c = 0);
                        case 7:
                          if (!(c < n.length)) {
                            t.next = 14;
                            break;
                          }
                          if (n[c].code !== e.code) {
                            t.next = 11;
                            break;
                          }
                          return n.splice(c, 1), t.abrupt("break", 14);
                        case 11:
                          c++, (t.next = 7);
                          break;
                        case 14:
                          return (
                            n.unshift(e), (t.prev = 15), (t.next = 18), S(d, n)
                          );
                        case 18:
                          (this.historyStockList = n), (t.next = 23);
                          break;
                        case 21:
                          (t.prev = 21), (t.t1 = t.catch(15));
                        case 23:
                          this.emit(p.EVENT_NAME.GOT_SEARCH_HISTORY_DATA);
                        case 24:
                        case "end":
                          return t.stop();
                      }
                  },
                  r,
                  this,
                  [[15, 21]]
                );
              })
            );
          },
        },
        {
          key: "clearHistory",
          value: function () {
            (this.historyStockList = []),
              S(d, this.historyStockList),
              this.emit(p.EVENT_NAME.GOT_SEARCH_HISTORY_DATA);
          },
        },
        {
          key: "formatStocks",
          value: function (t) {
            return t
              .filter(function (e) {
                return ["0", "1"].includes(e.market);
              })
              .map(function (t) {
                var r,
                  n,
                  c = ""
                    .concat(t.code, ".")
                    .concat(p.MARKET_CODE[+t.market].toUpperCase());
                return (
                  (r = (function (t, r) {
                    for (var n in r || (r = {})) h.call(r, n) && f(t, n, r[n]);
                    if (u) {
                      var c,
                        a = e(u(r));
                      try {
                        for (a.s(); !(c = a.n()).done; ) {
                          n = c.value;
                          l.call(r, n) && f(t, n, r[n]);
                        }
                      } catch (e) {
                        a.e(e);
                      } finally {
                        a.f();
                      }
                    }
                    return t;
                  })({}, t)),
                  (n = {
                    name: t.name,
                    code: t.code,
                    fullCode: c,
                    market: +t.market,
                    marketCN: p.MARKET_CODE[+t.market],
                  }),
                  i(r, s(n))
                );
              });
          },
        },
        {
          key: "getTopSearchedStocks",
          value: function () {
            return m(
              this,
              null,
              t().mark(function e() {
                var r;
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            this.fetch(
                              p.TOP_SEARCHED_STOCKS_CGI,
                              { action: 5, period: 0 },
                              { notNeedGameInfo: !0 }
                            )
                          );
                        case 2:
                          (r = e.sent),
                            (this.topSearchedStocks = this.formatStocks(
                              r.stock || []
                            )),
                            this.emit(p.EVENT_NAME.GOT_TOP_SEARCHED_STOCKS);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
          },
        },
        {
          key: "getHotSearchedStocks",
          value: function (e) {
            return m(
              this,
              null,
              t().mark(function r() {
                var n;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            this.fetch(
                              p.HOT_SEARCHED_STOCKS_CGI,
                              { action: 5, period: e },
                              { notNeedGameInfo: !0 }
                            )
                          );
                        case 2:
                          return (
                            (n = t.sent),
                            t.abrupt("return", this.formatStocks(n.stock || []))
                          );
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  },
                  r,
                  this
                );
              })
            );
          },
        },
      ]),
      C
    );
  })(p.BaseController);
exports.createSearchController = function () {
  return new C();
};
