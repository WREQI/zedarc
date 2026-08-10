var e = require("../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = require("../../../../@babel/runtime/helpers/typeof"),
  s = Object.defineProperty,
  c = Object.defineProperties,
  u = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  h = Object.prototype.propertyIsEnumerable,
  p = function (e, t, r) {
    return t in e
      ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  f = function (e, t, r) {
    return p(e, "symbol" != a(t) ? t + "" : t, r);
  },
  m = function (e, t, r) {
    return new Promise(function (n, i) {
      var a = function (e) {
          try {
            c(r.next(e));
          } catch (e) {
            i(e);
          }
        },
        s = function (e) {
          try {
            c(r.throw(e));
          } catch (e) {
            i(e);
          }
        },
        c = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(a, s);
        };
      c((r = r.apply(e, t)).next());
    });
  },
  v = require("../../../../common/vendor.js"),
  b = require("./api/service.js"),
  d = require("./chartImage/chartImageUtil.js"),
  g = v.getApiFullUrl(
    "cgi/cgi-bin/generalminute/mini/bath",
    v.API_HOST_ENUM.PROXY_QQ
  ),
  k = {},
  y = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return m(exports, [].concat(t), function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return n().mark(function t() {
        var r, a, s, f, m;
        return n().wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  if (
                    ((a = e.slice(0, 50).map(function (e) {
                      return {
                        stockCode: e.chooseSymbol,
                        needWidth: 40,
                        stockType: e.stock_type,
                        app: "wzq_h5",
                      };
                    })),
                    (s = e
                      .map(function (e) {
                        return e.chooseSymbol;
                      })
                      .join("_")),
                    !e || !e.length || k[s])
                  ) {
                    t.next = 16;
                    break;
                  }
                  return (
                    (k[s] = !0),
                    (t.prev = 3),
                    (t.next = 6),
                    b.request(
                      "".concat(g, "?app=mini_h5"),
                      "POST",
                      { bathReq: a },
                      { header: { "Content-Type": "application/json" } },
                      !0
                    )
                  );
                case 6:
                  (f = t.sent), (t.next = 11);
                  break;
                case 9:
                  (t.prev = 9), (t.t0 = t.catch(3));
                case 11:
                  return (t.prev = 11), (k[s] = !1), t.finish(11);
                case 14:
                  return (
                    (m = []),
                    t.abrupt(
                      "return",
                      ((null == (r = null == f ? void 0 : f.data)
                        ? void 0
                        : r.miniList) &&
                        f.data.miniList.length &&
                        (m = f.data.miniList.map(function (e) {
                          if (e && 0 === e.code && e.data)
                            return (
                              (t = (function (e, t) {
                                for (var r in t || (t = {}))
                                  l.call(t, r) && p(e, r, t[r]);
                                if (o) {
                                  var n,
                                    a = i(o(t));
                                  try {
                                    for (a.s(); !(n = a.n()).done; ) {
                                      r = n.value;
                                      h.call(t, r) && p(e, r, t[r]);
                                    }
                                  } catch (e) {
                                    a.e(e);
                                  } finally {
                                    a.f();
                                  }
                                }
                                return e;
                              })({}, e.data)),
                              (r = { ts: new Date().getTime() }),
                              c(t, u(r))
                            );
                          var t, r;
                        })),
                      m)
                    )
                  );
                case 16:
                case "end":
                  return t.stop();
              }
          },
          t,
          null,
          [[3, 9, 11, 14]]
        );
      })();
    });
  };
exports.DataToImages = (function () {
  function i(e) {
    var r = e.stockList,
      n = e.callback;
    t(this, i),
      f(this, "stockList", null),
      f(this, "minsList", null),
      f(this, "imageList", []),
      f(this, "callback", function () {
        return null;
      }),
      (this.stockList = r),
      (this.minsChartUtils = d.chartImageUtil),
      "function" == typeof n && (this.callback = n),
      this.getImages();
  }
  return (
    r(i, [
      {
        key: "getImages",
        value: function () {
          return m(
            this,
            null,
            n().mark(function e() {
              var t;
              return n().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), this.getMinsData();
                      case 2:
                        return (e.next = 4), this.drawChart();
                      case 4:
                        (t = e.sent) && this.callback(t);
                      case 6:
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
        key: "getMinsData",
        value: function () {
          return m(
            this,
            null,
            n().mark(function e() {
              var t;
              return n().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), y(this.stockList);
                      case 3:
                        (t = e.sent), (this.minsList = t), (e.next = 9);
                        break;
                      case 7:
                        (e.prev = 7), (e.t0 = e.catch(0));
                      case 9:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[0, 7]]
              );
            })
          );
        },
      },
      {
        key: "drawChart",
        value: function () {
          return m(
            this,
            null,
            n().mark(function e() {
              var t = this;
              return n().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!this.minsList) {
                          e.next = 9;
                          break;
                        }
                        return (
                          (e.prev = 1),
                          (e.next = 4),
                          this.minsList.reduce(function (e, r) {
                            return m(
                              t,
                              null,
                              n().mark(function t() {
                                return n().wrap(
                                  function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (t.next = 2), e;
                                        case 2:
                                          return t.abrupt(
                                            "return",
                                            this.drawSingleChart(r)
                                          );
                                        case 3:
                                        case "end":
                                          return t.stop();
                                      }
                                  },
                                  t,
                                  this
                                );
                              })
                            );
                          }, Promise.resolve())
                        );
                      case 4:
                        return e.abrupt("return", this.imageList);
                      case 7:
                        (e.prev = 7), (e.t0 = e.catch(1));
                      case 9:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[1, 7]]
              );
            })
          );
        },
      },
      {
        key: "drawSingleChart",
        value: function () {
          return m(this, arguments, function () {
            var t = this,
              r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            return n().mark(function i() {
              var a, s, c, u, o, l, h;
              return n().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (a = e(r.priceList)),
                        (s = r.preClose),
                        (c = r.stockCode),
                        (u =
                          t.stockList.find(function (e) {
                            return c === e.chooseSymbol;
                          }).riseDropStyle || ""),
                        (o = t.minsChartUtils.getStrokeColor(u)),
                        (l = t.minsChartUtils.calculateMaxMin(a, s)),
                        (n.next = 8),
                        t.minsChartUtils.startDrawLineChart(l, o)
                      );
                    case 8:
                      (h = n.sent),
                        t.imageList.push({ stockCode: c, image: h });
                    case 10:
                    case "end":
                      return n.stop();
                  }
              }, i);
            })();
          });
        },
      },
    ]),
    i
  );
})();
