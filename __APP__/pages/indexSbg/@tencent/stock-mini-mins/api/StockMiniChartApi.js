var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../../../@babel/runtime/helpers/createClass"),
  i = require("../../../../../@babel/runtime/helpers/typeof"),
  r = Object.defineProperty,
  o = function (e, t, n) {
    return new Promise(function (i, r) {
      var o = function (e) {
          try {
            u(n.next(e));
          } catch (e) {
            r(e);
          }
        },
        a = function (e) {
          try {
            u(n.throw(e));
          } catch (e) {
            r(e);
          }
        },
        u = function (e) {
          return e.done ? i(e.value) : Promise.resolve(e.value).then(o, a);
        };
      u((n = n.apply(e, t)).next());
    });
  },
  a = require("../../../../../common/vendor.js"),
  u = require("./service.js"),
  c = a.mitt(),
  s = new ((function () {
    function e() {
      t(this, e);
    }
    return (
      n(e, [
        {
          key: "getBus",
          value: function () {
            var e, t, n;
            return (
              (null == (e = null == window ? void 0 : window.__UNION_BRIDGE__)
                ? void 0
                : e.UNION_BUS) ||
              (void 0 !== a.index &&
                (null ==
                (n = null == (t = a.index) ? void 0 : t.__UNION_BRIDGE__)
                  ? void 0
                  : n.UNION_BUS)) ||
              c
            );
          },
        },
        {
          key: "$on",
          value: function (e, t) {
            this.getBus().on(e, t);
          },
        },
        {
          key: "$off",
          value: function (e, t) {
            this.getBus().off(e, t);
          },
        },
        {
          key: "$emit",
          value: function (e, t) {
            this.getBus().emit(e, t);
          },
        },
      ]),
      e
    );
  })())(),
  l = {},
  f = [],
  h = [],
  d = [],
  p = 3e5,
  v = {},
  m = 0,
  b = new ((function () {
    function c() {
      t(this, c),
        (function (e, t, n) {
          (function (e, t, n) {
            t in e
              ? r(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[t] = n);
          })(e, "symbol" != i(t) ? t + "" : t, n);
        })(
          this,
          "batchMinsUrl",
          a.getApiFullUrl(
            "cgi/cgi-bin/generalminute/mini/bath",
            a.API_HOST_ENUM.PROXY_QQ
          )
        );
    }
    return (
      n(c, [
        {
          key: "refreshCache",
          value: function (e) {
            (l = {}),
              (d = []),
              (v = {}),
              (h = f.map(function (e) {
                return e.chooseSymbol;
              })),
              this.batchGetMiniMinsRequest(f, e);
          },
        },
        {
          key: "batchGetMiniMins",
          value: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = arguments.length > 2 ? arguments[2] : void 0;
            if ((n && (this.batchMinsUrl = n), e && e.length))
              for (var i = 0, r = e.length; i < r; i += 50) {
                var o = e.slice(i, i + 50);
                o && this.batchGetMiniMinsRequest(o, t);
              }
          },
        },
        {
          key: "batchGetMiniMinsRequest",
          value: function () {
            return o(this, arguments, function () {
              var t = this,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                i = arguments.length > 1 ? arguments[1] : void 0;
              return e().mark(function r() {
                var o, a, c, b, k, y, _;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (0 === m) {
                            e.next = 3;
                            break;
                          }
                          if (!(new Date().getTime() - m < p)) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          if (
                            ((c = []),
                            n.forEach(function (e) {
                              (l[e.chooseSymbol] &&
                                !t.needUpdate(l[e.chooseSymbol])) ||
                                c.push(e);
                            }),
                            (c = c.filter(function (e) {
                              return -1 === d.indexOf(e.chooseSymbol);
                            })),
                            (b = c
                              .map(function (e) {
                                return e.chooseSymbol;
                              })
                              .join("_")),
                            !c || !c.length || v[b])
                          ) {
                            e.next = 27;
                            break;
                          }
                          return (
                            (d = d.concat(
                              c.map(function (e) {
                                return e.chooseSymbol;
                              })
                            )),
                            (v[b] = !0),
                            (e.prev = 8),
                            (y = c.slice(0, 50).map(function (e) {
                              return {
                                stockCode: e.chooseSymbol,
                                needWidth: 40,
                                stockType: e.stock_type,
                                app: "wzq_h5",
                              };
                            })),
                            (e.next = 12),
                            u.request(
                              "".concat(t.batchMinsUrl, "?app=mini_h5"),
                              "POST",
                              { bathReq: y },
                              {
                                header: { "Content-Type": "application/json" },
                                headers: { "Content-Type": "application/json" },
                              },
                              !0
                            )
                          );
                        case 12:
                          (k = e.sent), (e.next = 17);
                          break;
                        case 15:
                          (e.prev = 15), (e.t0 = e.catch(8));
                        case 17:
                          return (
                            (e.prev = 17),
                            (v[b] = !1),
                            (_ = c.map(function (e) {
                              return e.chooseSymbol;
                            })),
                            (d = d.filter(function (e) {
                              return -1 === _.indexOf(e);
                            })),
                            e.finish(17)
                          );
                        case 22:
                          if (
                            0 !== (null == k ? void 0 : k.code) ||
                            (null == (o = null == k ? void 0 : k.data)
                              ? void 0
                              : o.show)
                          ) {
                            e.next = 24;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            void (m = new Date().getTime())
                          );
                        case 24:
                          if (
                            ((null == (a = null == k ? void 0 : k.data)
                              ? void 0
                              : a.miniList) &&
                              k.data.miniList.length &&
                              k.data.miniList.forEach(function (e) {
                                e &&
                                  0 === e.code &&
                                  e.data &&
                                  (l[e.data.stockCode] ||
                                    (l[e.data.stockCode] = {}),
                                  (l[e.data.stockCode].data = e.data),
                                  (l[e.data.stockCode].ts =
                                    new Date().getTime()));
                              }),
                            i)
                          ) {
                            e.next = 26;
                            break;
                          }
                          return e.abrupt("return", l);
                        case 26:
                          f.filter(function (e) {
                            return h.indexOf(e.chooseSymbol) > -1;
                          }).forEach(function (e) {
                            var t = e.chooseSymbol || "",
                              n = l[t];
                            if (n)
                              var r = setTimeout(function () {
                                s.$emit(
                                  "stock_chart_render_"
                                    .concat(t.replace(".", "_"), "_")
                                    .concat(i),
                                  n
                                ),
                                  clearTimeout(r);
                              }, 100);
                          });
                        case 27:
                        case "end":
                          return e.stop();
                      }
                  },
                  r,
                  null,
                  [[8, 15, 17, 22]]
                );
              })();
            });
          },
        },
        {
          key: "needUpdate",
          value: function (e) {
            return new Date().getTime() - e.ts >= 24e4;
          },
        },
        {
          key: "drawStocksMins",
          value: function (e, t) {
            e && (f = e),
              f.forEach(function (e) {
                var n = e.chooseSymbol || "";
                s.$emit(
                  "stock_chart_render_"
                    .concat(n.replace(".", "_"), "_")
                    .concat(t),
                  !0
                );
              });
          },
        },
        {
          key: "getOrRequestMiniMinsData",
          value: function (e, t) {
            var n = this;
            return new Promise(function (i) {
              var r = h.indexOf(e);
              if (l[e] && !n.needUpdate(l[e]))
                return r > -1 && h.splice(r, 1), void i(l[e]);
              -1 === r && h.push(e),
                -1 === d.indexOf(e) && n.batchGetMiniMins(f, t),
                i(null);
            });
          },
        },
        {
          key: "getMiniMins",
          value: function (t, n, i) {
            return o(
              this,
              null,
              e().mark(function r() {
                var o;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!l[t]) {
                          e.next = 3;
                          break;
                        }
                        if (!(new Date().getTime() - l[t].ts < p)) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return", l[t].data);
                      case 3:
                        return (
                          (e.next = 5),
                          u.request(
                            a.getApiFullUrl(
                              "cgi/cgi-bin/generalminute/mini/minute",
                              a.API_HOST_ENUM.PROXY_QQ
                            ),
                            "GET",
                            { stockCode: t, needWidth: i, stockType: n }
                          )
                        );
                      case 5:
                        return (
                          (o = e.sent),
                          e.abrupt(
                            "return",
                            (o &&
                              (l[t] || (l[t] = {}),
                              (l[t].data = o),
                              (l[t].ts = new Date().getTime())),
                            o)
                          )
                        );
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, r);
              })
            );
          },
        },
      ]),
      c
    );
  })())();
(exports.BUS = s), (exports.StockMiniChartApi = b);
