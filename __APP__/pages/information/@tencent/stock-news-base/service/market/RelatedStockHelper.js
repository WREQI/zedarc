var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../../../@babel/runtime/helpers/createClass"),
  a = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  s = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  u = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  p = function (e, t) {
    for (var r in t || (t = {})) c.call(t, r) && u(e, r, t[r]);
    if (s) {
      var n,
        p = a(s(t));
      try {
        for (p.s(); !(n = p.n()).done; ) {
          r = n.value;
          o.call(t, r) && u(e, r, t[r]);
        }
      } catch (e) {
        p.e(e);
      } finally {
        p.f();
      }
    }
    return e;
  },
  i = function (e, t, r) {
    return new Promise(function (a, n) {
      var s = function (e) {
          try {
            o(r.next(e));
          } catch (e) {
            n(e);
          }
        },
        c = function (e) {
          try {
            o(r.throw(e));
          } catch (e) {
            n(e);
          }
        },
        o = function (e) {
          return e.done ? a(e.value) : Promise.resolve(e.value).then(s, c);
        };
      o((r = r.apply(e, t)).next());
    });
  },
  l = require("../../../../../../common/vendor.js"),
  f = require("../../../stock-news-core/utils/request/index.js");
require("../../../../js-cookie/src/js.cookie.js"),
  (exports.RelatedStockHelper = (function () {
    function a(e) {
      t(this, a), (this.stockCodes = e);
    }
    return (
      r(a, [
        {
          key: "isArrayEmpty",
          value: function (e) {
            return !Array.isArray(e) || e.length <= 0;
          },
        },
        {
          key: "handleQTData",
          value: function (e, t) {
            if (this.isArrayEmpty(e)) return [];
            var r,
              a = { hk: "r_", us: "t_" },
              n = t,
              s = [];
            return (
              e.forEach(function (e) {
                var t = e.symbol.slice(0, 2),
                  c = a[t] || "";
                (r = e.symbol
                  .replace(/^us\.?/, "us")
                  .replace(/(\.OQ|\.N|\.AM|\.PS)$/gi, "")
                  .replace(/\./g, "__")),
                  (n[r] = n[c + r] || {});
                var o = "jj" === t,
                  u = o
                    ? n[r][7] && Number.parseFloat(n[r][7]).toFixed(2)
                    : n[r][32] || "";
                s.push(
                  p(p({}, e), {
                    name: e.name.split(".")[0] || n[r][1],
                    symbol: o ? r : r.substr(0, 2) + n[r][2],
                    stockType: n[r][61] || "",
                    marketTag: r.substr(0, 2).toUpperCase(),
                    updown: u,
                    state: n[r][40] || "",
                    price: n[r][3] || "",
                    kcbFlag: "kcb" === e["data-bktype"],
                  })
                );
              }),
              s
            );
          },
        },
        {
          key: "requestQT",
          value: function (t) {
            return i(
              this,
              null,
              e().mark(function r() {
                var a, n, s;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!this.isArrayEmpty(t)) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return", {});
                        case 2:
                          return (
                            (a = []),
                            (s = { hk: "r_", us: "t_" }),
                            t.forEach(function (e) {
                              var t = e.slice(0, 2);
                              (n =
                                (s[t] || "") +
                                e
                                  .replace(/^us\.?/, "us")
                                  .replace(/(\.OQ|\.N|\.AM|\.PS)$/gi, "")
                                  .replace(/\./g, "__")),
                                a.push(n);
                            }),
                            (e.next = 7),
                            f.request(
                              "https://qt.gtimg.cn/utf8/?fmt=json&q="
                                .concat(a.join(","), "&r=")
                                .concat(Math.random()),
                              {},
                              { method: "get", isShowToast: !1 }
                            )
                          );
                        case 7:
                          return e.abrupt("return", e.sent);
                        case 8:
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
          key: "isExistInZixuan",
          value: function (t) {
            return i(
              this,
              null,
              e().mark(function r() {
                var a, n, s, c, o, u, p, i;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((a = {}), !this.isArrayEmpty(t))) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return", a);
                        case 3:
                          return (
                            (n = this.getParams()),
                            (s = n.app),
                            (c = n.openId),
                            (o = n.fsKey),
                            (u = n.check),
                            (p =
                              "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/stockAdd?stocks="
                                .concat(t.join(","), "&app=")
                                .concat(s, "&appid=wx9cf8c670ebd68ce4&check=")
                                .concat(u, "&openid=")
                                .concat(c, "&fskey=")
                                .concat(o)),
                            (e.prev = 4),
                            (e.next = 7),
                            f.request(p, {}, { method: "get", isShowToast: !1 })
                          );
                        case 7:
                          (i = e.sent) &&
                            0 === i.code &&
                            i.data &&
                            (a = i.data),
                            (e.next = 13);
                          break;
                        case 11:
                          (e.prev = 11), (e.t0 = e.catch(4));
                        case 13:
                          return e.abrupt("return", a);
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  },
                  r,
                  this,
                  [[4, 11]]
                );
              })
            );
          },
        },
        {
          key: "addStockToZixuan",
          value: function (t, r) {
            return i(
              this,
              null,
              e().mark(function a() {
                var n, s, c, o, u, p, i, l, h;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = {
                              timestamp: new Date().getTime(),
                              act: t ? "sa" : "sd",
                              grpid: "1",
                              code: r,
                            }),
                            (s = this.getParams()),
                            (c = s.app),
                            (o = s.openId),
                            (u = s.fsKey),
                            (p = s.check),
                            (i =
                              "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq?app="
                                .concat(c, "&appid=wx9cf8c670ebd68ce4&openid=")
                                .concat(o, "&fskey=")
                                .concat(u, "&check=")
                                .concat(p)),
                            (e.prev = 1),
                            (l = {
                              seq: encodeURIComponent(JSON.stringify([n])),
                            }),
                            (e.next = 5),
                            f.request(i, l, { method: "post", isShowToast: !1 })
                          );
                        case 5:
                          if (!(h = e.sent) || 0 === h.code) {
                            e.next = 8;
                            break;
                          }
                          return e.abrupt("return", !1);
                        case 8:
                          e.next = 13;
                          break;
                        case 10:
                          return (
                            (e.prev = 10),
                            (e.t0 = e.catch(1)),
                            e.abrupt("return", !1)
                          );
                        case 13:
                          return e.abrupt("return", !0);
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  },
                  a,
                  this,
                  [[1, 10]]
                );
              })
            );
          },
        },
        {
          key: "handleUsStockCode",
          value: function (e) {
            var t = {};
            return (
              Object.keys(e).forEach(function (r) {
                var a = r;
                r.toUpperCase() === "usIXIC".toUpperCase()
                  ? (a = "us.IXIC")
                  : r.toUpperCase() === "usDJI".toUpperCase()
                  ? (a = "us.DJI")
                  : r.toUpperCase() === "usINX".toUpperCase()
                  ? (a = "us.INX")
                  : r.toUpperCase() === "usNDX".toUpperCase()
                  ? (a = "us.NDX")
                  : r.toUpperCase() === "usVIX".toUpperCase()
                  ? (a = "us.VIX")
                  : r.toUpperCase() === "usHXC".toUpperCase() && (a = "us.HXC"),
                  (t[a] = e[r]);
              }),
              t
            );
          },
        },
        {
          key: "getParams",
          value: function () {
            var e, t, r;
            return (
              l.wx$1 &&
                ((e = "zxg_xcx"),
                (t = l.wx$1.getStorageSync("_qluin")),
                (r = l.wx$1.getStorageSync("_qlskey"))),
              { app: e, openId: t, fsKey: r, check: 11 }
            );
          },
        },
      ]),
      a
    );
  })());
