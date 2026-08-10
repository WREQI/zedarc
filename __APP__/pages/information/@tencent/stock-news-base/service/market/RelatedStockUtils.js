var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/typeof"),
  n = require("../../../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../../../@babel/runtime/helpers/createClass"),
  o = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  c = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  u = function (e, t, n) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  l = function (e, t) {
    for (var n in t || (t = {})) a.call(t, n) && u(e, n, t[n]);
    if (c) {
      var r,
        i = o(c(t));
      try {
        for (i.s(); !(r = i.n()).done; ) {
          n = r.value;
          s.call(t, n) && u(e, n, t[n]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  f = function (e, t, n) {
    return new Promise(function (r, o) {
      var i = function (e) {
          try {
            a(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        c = function (e) {
          try {
            a(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(i, c);
        };
      a((n = n.apply(e, t)).next());
    });
  },
  h = require("./RelatedStockHelper.js"),
  k = require("../../../../../../common/vendor.js"),
  p = (function () {
    function o() {
      n(this, o),
        (this.name = "RelatedStockUtils"),
        (this.relatedStockHelper = new h.RelatedStockHelper()),
        (this.stockInPortfolioDic = {});
    }
    return (
      r(
        o,
        [
          {
            key: "checkAppStockExist",
            value: function (e) {
              return new Promise(function (t) {
                shy.checkStockExist(e, function (e) {
                  var n = (e || {}).exist;
                  t(n);
                });
              });
            },
          },
          {
            key: "requestStockIsInPortfolio",
            value: function (n) {
              return f(
                this,
                null,
                e().mark(function r() {
                  var o,
                    i,
                    c,
                    a = this;
                  return e().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            e.next = 14;
                            break;
                          case 2:
                            if (!(o < n.length)) {
                              e.next = 11;
                              break;
                            }
                            return (
                              (i = n[o]),
                              (e.next = 6),
                              this.checkAppStockExist(i)
                            );
                          case 6:
                            (c = e.sent),
                              (this.stockInPortfolioDic[i] = c ? 1 : 0);
                          case 8:
                            o++, (e.next = 2);
                            break;
                          case 11:
                            this.notifyChange(), (e.next = 15);
                            break;
                          case 14:
                            this.relatedStockHelper
                              .isExistInZixuan(n)
                              .then(function (e) {
                                "object" == t(e) &&
                                  null !== e &&
                                  ((a.stockInPortfolioDic = l(
                                    l({}, a.stockInPortfolioDic),
                                    e
                                  )),
                                  a.notifyChange());
                              })
                              .catch(function (e) {});
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    r,
                    this
                  );
                })
              );
            },
          },
          {
            key: "requestStockToAdd",
            value: function (t, n) {
              return f(
                this,
                null,
                e().mark(function r() {
                  return e().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            e.next = 5;
                            break;
                          case 5:
                            return (
                              (e.prev = 5),
                              (e.next = 8),
                              this.relatedStockHelper.addStockToZixuan(t, n)
                            );
                          case 8:
                            if (((e.t0 = e.sent), !e.t0)) {
                              e.next = 11;
                              break;
                            }
                            (this.stockInPortfolioDic[n] = t ? 1 : 0),
                              this.notifyChange();
                          case 11:
                            return e.abrupt("return", !0);
                          case 14:
                            return (
                              (e.prev = 14),
                              (e.t1 = e.catch(5)),
                              e.abrupt("return", !1)
                            );
                          case 17:
                          case "end":
                            return e.stop();
                        }
                    },
                    r,
                    this,
                    [[5, 14]]
                  );
                })
              );
            },
          },
          {
            key: "isStockInPortfolio",
            value: function (e) {
              return 1 === this.stockInPortfolioDic[e];
            },
          },
          {
            key: "notifyChange",
            value: function () {
              k.StockBridge.busEmit(
                "news-RelatedStockChange",
                this.stockInPortfolioDic
              );
            },
          },
        ],
        [
          {
            key: "getInstance",
            value: function () {
              return o._instance || (o._instance = new o()), o._instance;
            },
          },
        ]
      ),
      o
    );
  })();
exports.RelatedStockUtils = p;
