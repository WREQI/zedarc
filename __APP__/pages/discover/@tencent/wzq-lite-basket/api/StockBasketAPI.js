var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../../@babel/runtime/helpers/createClass");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var n = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = Object.defineProperty,
  c = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  o = function (e, t, r) {
    return t in e
      ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  i = function (e, t) {
    for (var r in t || (t = {})) s.call(t, r) && o(e, r, t[r]);
    if (c) {
      var a,
        i = n(c(t));
      try {
        for (i.s(); !(a = i.n()).done; ) {
          r = a.value;
          u.call(t, r) && o(e, r, t[r]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  f = function (e, t, r) {
    return new Promise(function (n, a) {
      var c = function (e) {
          try {
            u(r.next(e));
          } catch (e) {
            a(e);
          }
        },
        s = function (e) {
          try {
            u(r.throw(e));
          } catch (e) {
            a(e);
          }
        },
        u = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(c, s);
        };
      u((r = r.apply(e, t)).next());
    });
  },
  l = require("../../stock-hq-core/utils/storage/local.js");
require("../../../js-cookie/src/js.cookie.js");
var p,
  h = require("../../../../../common/vendor.js");
(p = {}),
  Object.defineProperty(p, "__esModule", { value: !0 }),
  (p.SIGN_KEY = void 0),
  (p.SIGN_KEY = {
    stock: "EE530E7508AB5831978E6006381898E9",
    mpweapp: "B833418A24C7EC2E5A534348665B9B0C",
    mpwzq: "98FA47ACCCEC0A3C5A4768991E1D9113",
    h5: "98FA47ACCCEC0A3C5A4768991E1D9113",
    df: "34C0A93DF3AD73D4307E468317380146",
    zxgh5: "9c8e247b438b7d0ae845f9931810a387",
    wzq_snp: "15b3a7844a6d44115f4b52c8aa3cc36e",
    wzqxcx: "68cae00479351606086e78d754042961",
    mini_h5: "cedc068249f7041d474b638038b13b8f",
    light_h5: "5b566bb10c9999cf25c8e53127c075f4",
    i_ask: "E3164D66F12E3A29A8C08530215B4FD8",
    xuanji: "cf1f3fd583d54b656f67bf2ee4e939fa",
    wzq_analyse: "01d16d0a381fbda39775faa1dff16446",
    GUOSEN: "15c752a9e8b7d04d638ad229cbe084e2",
    ZHONGXINJIANTOU: "c65bb114387a9315e9ec0cf2764884d9",
    DAFENG: "9fbf6158eca46d1fe6eeb487abf9ce6b",
  }),
  (p.default = p.SIGN_KEY);
var d = "https://proxy.finance.qq.com",
  b = "https://proxy.finance.qq.com/cgi/cgi-bin",
  k =
    [h.EnvTypeEnum.SHY_NATIVE, h.EnvTypeEnum.SHY_WEB].includes(
      h.StockBridge.ENV
    ) || "mpweapp" === h.ShellTypeEnum.SHY;
exports.StockBasketAPI = (function () {
  function n(e) {
    if ((t(this, n), !e || !e.request))
      throw new Error("必须传入hqBridge对象，且该对象必须包含request方法");
    (this.hqBridge = e), (this.request = e.request);
  }
  return (
    r(n, [
      {
        key: "getUserInfo",
        value: function () {
          return k
            ? new Promise(function (e) {
                shy.getUserInfo(function (t) {
                  return e(t);
                });
              })
            : "mp" === this.hqBridge.ENV
            ? {
                app: h.OriginTypeEnum.mpweapp,
                appid: "wx4ffb369b6881ee5e",
                openid: l.sls.getItem("_qluin"),
                fskey: l.sls.getItem("_qlskey"),
                check: 11,
              }
            : -1 !== ["wzq_light", "wzq"].indexOf(this.hqBridge.ENV)
            ? {
                appid: "wx9cf8c670ebd68ce4",
                openid: this.hqBridge.getCookie("wzq_qluin"),
                fskey: this.hqBridge.getCookie("wzq_qlskey"),
                check: 11,
              }
            : {};
        },
      },
      {
        key: "getBasketDiscover",
        value: function (t) {
          return f(
            this,
            null,
            e().mark(function r() {
              var n;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.getUserInfo()),
                          e.abrupt(
                            "return",
                            this.request(
                              "".concat(b, "/watchlist/discover"),
                              "get",
                              i(i({}, n), t),
                              { forceCallback: !0 }
                            )
                          )
                        );
                      case 2:
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
        key: "getBasketRank",
        value: function (t) {
          return f(
            this,
            null,
            e().mark(function r() {
              var n;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.getUserInfo()),
                          e.abrupt(
                            "return",
                            this.request(
                              "".concat(b, "/watchlist/rank"),
                              "get",
                              i(i({}, n), t),
                              { forceCallback: !0 }
                            )
                          )
                        );
                      case 2:
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
        key: "getBasketDetail",
        value: function () {
          return f(this, arguments, function () {
            var t = this,
              r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            return e().mark(function n() {
              var a;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), t.getUserInfo();
                    case 2:
                      return (
                        (a = e.sent),
                        e.abrupt(
                          "return",
                          t.request(
                            "".concat(b, "/watchlist/detail"),
                            "get",
                            i(i({}, a), r),
                            { forceCallback: !0 }
                          )
                        )
                      );
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, n);
            })();
          });
        },
      },
      {
        key: "getBasketSummary",
        value: function (t) {
          return f(
            this,
            null,
            e().mark(function r() {
              var n;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.getUserInfo()),
                          e.abrupt(
                            "return",
                            this.request(
                              "".concat(b, "/watchlist/summary"),
                              "get",
                              i(
                                i(i({}, n), {
                                  ranking_count: 2,
                                  field_mode: "summary2",
                                  with_column: "firstpage",
                                }),
                                t
                              ),
                              { forceCallback: !0 }
                            )
                          )
                        );
                      case 2:
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
        key: "getBasketIndex",
        value: function (t) {
          return f(
            this,
            null,
            e().mark(function r() {
              var n;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.getUserInfo()),
                          e.abrupt(
                            "return",
                            this.request(
                              "".concat(b, "/watchlist/index"),
                              "get",
                              i(i({}, n), t),
                              { forceCallback: !0 }
                            )
                          )
                        );
                      case 2:
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
        key: "updateBasketWatched",
        value: function (t) {
          return f(
            this,
            null,
            e().mark(function r() {
              var n, a;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!k) {
                          e.next = 13;
                          break;
                        }
                        return (
                          (n = JSON.parse(t.seq).map(function (e) {
                            return new Promise(function (t, r) {
                              var n = function (e) {
                                "success" === e.status ? t({ code: 0 }) : r();
                              };
                              "sa" === e.act
                                ? shy.addStockToGroup(e.code, void 0, "1", n)
                                : shy.removeStockFromGroup(e.code, n);
                            });
                          })),
                          (e.prev = 2),
                          (e.next = 5),
                          Promise.all(n)
                        );
                      case 5:
                        return (
                          (e.t0 = e.sent),
                          (e.t1 = { record: e.t0 }),
                          e.abrupt("return", { code: 0, data: e.t1 })
                        );
                      case 10:
                        return (
                          (e.prev = 10),
                          (e.t2 = e.catch(2)),
                          e.abrupt("return", { code: -1 })
                        );
                      case 13:
                        return (
                          (a = this.getUserInfo()),
                          e.abrupt(
                            "return",
                            this.request(
                              "".concat(
                                d,
                                "/newstock/stockapp/Updstock/operseq"
                              ),
                              "get",
                              i(i({}, a), t),
                              { forceCallback: !0 }
                            )
                          )
                        );
                      case 15:
                      case "end":
                        return e.stop();
                    }
                },
                r,
                this,
                [[2, 10]]
              );
            })
          );
        },
      },
      {
        key: "getIndexCommentColumn",
        value: function (t) {
          return f(
            this,
            null,
            e().mark(function r() {
              var n;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.getUserInfo()),
                          e.abrupt(
                            "return",
                            this.request(
                              "".concat(
                                d,
                                "/group/newstockgroup/comment/indexCommentColumn"
                              ),
                              "get",
                              i(i({}, n), t),
                              { forceCallback: !0 }
                            )
                          )
                        );
                      case 2:
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
        key: "getBasketUpdateHistory",
        value: function () {
          return f(this, arguments, function () {
            var t = this,
              r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            return e().mark(function n() {
              var a;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = t.getUserInfo()),
                        e.abrupt(
                          "return",
                          t.request(
                            "".concat(b, "/watchlist/records"),
                            "get",
                            i(i({}, a), r),
                            { forceCallback: !0 }
                          )
                        )
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, n);
            })();
          });
        },
      },
    ]),
    n
  );
})();
