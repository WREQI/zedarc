require("../../../../@babel/runtime/helpers/Arrayincludes");
var n = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  a = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  r = function (n, e, a) {
    return e in n
      ? t(n, e, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (n[e] = a);
  },
  c = function (n, t) {
    for (var c in t || (t = {})) o.call(t, c) && r(n, c, t[c]);
    if (a) {
      var w,
        s = e(a(t));
      try {
        for (s.s(); !(w = s.n()).done; ) {
          c = w.value;
          i.call(t, c) && r(n, c, t[c]);
        }
      } catch (n) {
        s.e(n);
      } finally {
        s.f();
      }
    }
    return n;
  },
  w = function (n, t) {
    var r = {};
    for (var c in n) o.call(n, c) && t.indexOf(c) < 0 && (r[c] = n[c]);
    if (null != n && a) {
      var w,
        s = e(a(n));
      try {
        for (s.s(); !(w = s.n()).done; ) {
          c = w.value;
          t.indexOf(c) < 0 && i.call(n, c) && (r[c] = n[c]);
        }
      } catch (n) {
        s.e(n);
      } finally {
        s.f();
      }
    }
    return r;
  },
  s = function (n, e, t) {
    return new Promise(function (a, o) {
      var i = function (n) {
          try {
            c(t.next(n));
          } catch (n) {
            o(n);
          }
        },
        r = function (n) {
          try {
            c(t.throw(n));
          } catch (n) {
            o(n);
          }
        },
        c = function (n) {
          return n.done ? a(n.value) : Promise.resolve(n.value).then(i, r);
        };
      c((t = t.apply(n, e)).next());
    });
  },
  u = require("../../../../common/vendor.js"),
  l = function (n) {
    var e = [],
      t = function (t) {
        var a = n[t];
        a.constructor === Array
          ? a.forEach(function (n) {
              e.push("".concat(t, "=").concat(n));
            })
          : e.push("".concat(t, "=").concat(a));
      };
    for (var a in n) t(a);
    return e.join("&");
  },
  d =
    u.StockBridge.ENV === u.EnvTypeEnum.WZQ ||
    u.StockBridge.ENV === u.EnvTypeEnum.WZQ_LITE,
  g = function (n) {
    return n && n.useBroker
      ? n.useBroker
      : getApp && getApp().globalData.brokerUtils;
  },
  v =
    Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          getStorageSync: function (n) {
            return u.wx$1 && u.wx$1.getStorageSync
              ? u.wx$1.getStorageSync(n)
              : localStorage
              ? localStorage.getItem(n)
              : void 0;
          },
          hasBindBrokerAccount: function (e) {
            return s(
              exports,
              null,
              n().mark(function t() {
                var a;
                return n().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (!d) {
                            n.next = 10;
                            break;
                          }
                          return (
                            (n.prev = 1),
                            (n.next = 4),
                            TradeFunc.fetchBrokerInfo()
                          );
                        case 4:
                          return n.abrupt("return", TradeFunc.isBind());
                        case 7:
                          (n.prev = 7), (n.t0 = n.catch(1));
                        case 9:
                          return n.abrupt("return", !1);
                        case 10:
                          return (
                            (a = g(e)), n.abrupt("return", a && a.hasBind.value)
                          );
                        case 12:
                        case "end":
                          return n.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 7]]
                );
              })
            );
          },
          isStockCodeSupport: function (n) {
            return (
              !!n &&
              ["sz", "sh", "hk", "us", "pt", "bj", "nq", "fu", "ft"].includes(
                n.substr(0, 2)
              )
            );
          },
          loadingBar: function (n) {
            "show" === n
              ? u.wx$1 && u.wx$1.showLoading({ title: "" })
              : "hide" === n && u.wx$1 && u.wx$1.hideLoading();
          },
          navigateToAIFinancialReport: function (n) {
            var e = n,
              t = (e.instance, e.id),
              a = (e.title, w(e, ["instance", "id", "title"])),
              o = l(a),
              i = {
                url: "/pages/report/AIFinancial/index?id="
                  .concat(t)
                  .concat(o ? "&".concat(o) : ""),
              };
            u.wx$1 && u.wx$1.navigateTo
              ? u.wx$1.navigateTo(i)
              : window &&
                window.wx &&
                window.wx.miniProgram &&
                window.wx.miniProgram.navigateTo(i);
          },
          navigateToLiveCalendar: function (n) {
            var e = n.date || Date.now(),
              t = {
                url: "/pages/additional/webview/index?url=".concat(
                  encodeURIComponent(
                    "https://wzq.tenpay.com/mp/v2/index.html#/information/liveCombine?id=LC2022122300000000000000&date=".concat(
                      e
                    )
                  )
                ),
              };
            u.wx$1 && u.wx$1.navigateTo
              ? u.wx$1.navigateTo(t)
              : window &&
                window.wx &&
                window.wx.miniProgram &&
                window.wx.miniProgram.navigateTo(t);
          },
          navigateToLiveDetail: function (n) {
            var e = n,
              t = (e.instance, e.id),
              a = w(e, ["instance", "id"]),
              o = l(a),
              i = {
                url: "/pages/live/liveDetail?id="
                  .concat(t)
                  .concat(o ? "&".concat(o) : ""),
              };
            u.wx$1 && u.wx$1.navigateTo
              ? u.wx$1.navigateTo(i)
              : window &&
                window.wx &&
                window.wx.miniProgram &&
                window.wx.miniProgram.navigateTo(i);
          },
          navigateToMorningReport: function (n) {
            var e = n,
              t = (e.instance, e.id),
              a = w(e, ["instance", "id"]),
              o = l(a),
              i = {
                url: "/pages/report/morning/main?id="
                  .concat(t, "&articleStyle=card&subtype=morningreportcard")
                  .concat(o ? "&".concat(o) : ""),
              };
            u.wx$1 && u.wx$1.navigateTo
              ? u.wx$1.navigateTo(i)
              : window &&
                window.wx &&
                window.wx.miniProgram &&
                window.wx.miniProgram.navigateTo(i);
          },
          navigateToNewsDetail: function (n) {
            var e = n,
              t = (e.instance, e.id),
              a = (e.title, w(e, ["instance", "id", "title"])),
              o = l(a),
              i = {
                url: "/pages/newsCon/newsDetail/main?id="
                  .concat(t)
                  .concat(o ? "&".concat(o) : ""),
              };
            u.wx$1 && u.wx$1.navigateTo
              ? u.wx$1.navigateTo(i)
              : window &&
                window.wx &&
                window.wx.miniProgram &&
                window.wx.miniProgram.navigateTo(i);
          },
          navigateToNewsSubject: function (n) {
            var e = n,
              t = (e.instance, e.id),
              a = (e.title, w(e, ["instance", "id", "title"])),
              o = l(a),
              i = {
                url: "/pages/newsCon/topic/main?id="
                  .concat(t)
                  .concat(o ? "&".concat(o) : ""),
              };
            u.wx$1 && u.wx$1.navigateTo
              ? u.wx$1.navigateTo(i)
              : window &&
                window.wx &&
                window.wx.miniProgram &&
                window.wx.miniProgram.navigateTo(i);
          },
          navigateToRelatedEtf: function (n) {
            var e = n,
              t = e.symbol,
              a = e.stockType,
              o = e.stockName,
              i =
                (e.instance,
                w(e, ["symbol", "stockType", "stockName", "instance"])),
              r = l(i),
              c = {
                url: "/pages/additional/webview/index?url=".concat(
                  encodeURIComponent(
                    "https://wzq.tenpay.com/mp/v2/index.html#/kch/etf-teaching?".concat(
                      "symbol="
                        .concat(t, "&stockType=")
                        .concat(a, "&stockName=")
                        .concat(o)
                        .concat(r ? "&".concat(r) : "")
                    )
                  )
                ),
              };
            u.wx$1 && u.wx$1.navigateTo
              ? u.wx$1.navigateTo(c)
              : window &&
                window.wx &&
                window.wx.miniProgram &&
                window.wx.miniProgram.navigateTo(c);
          },
          navigateToStockDetail: function (n) {
            var e,
              t,
              a = n,
              o = (a.symbol, a.stockCode),
              i = a.stockMarket,
              r =
                (a.stockName,
                a.instance,
                w(a, [
                  "symbol",
                  "stockCode",
                  "stockMarket",
                  "stockName",
                  "instance",
                ])),
              c = null != (e = getCurrentPages()) ? e : [],
              s = c[c.length - 2];
            if (s && "pages/quote/quote" === s.route) {
              var d = null != (t = s.options) ? t : {},
                g = d.scode,
                v = d.market;
              if (g === o && String(v) === String(i))
                return void u.wx$1.navigateBack();
            }
            var x = l(r),
              m = {
                url: "/pages/quote/quote?market="
                  .concat(i, "&scode=")
                  .concat(o)
                  .concat(x ? "&".concat(x) : ""),
              };
            u.wx$1 && u.wx$1.navigateTo
              ? u.wx$1.navigateTo(m)
              : window &&
                window.wx &&
                window.wx.miniProgram &&
                window.wx.miniProgram.navigateTo(m);
          },
          navigateToTrade: function (e) {
            return s(
              exports,
              null,
              n().mark(function t() {
                var a, o, i, r, s, u;
                return n().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        (o = (a = e).stockMarket),
                          (i = a.stockCode),
                          (r = a.instance),
                          (s = w(a, ["stockMarket", "stockCode", "instance"])),
                          d
                            ? r.$router.push({
                                path: "/trade/stock",
                                query: c({ market: o, code: i }, s),
                              })
                            : (u = g(r)) &&
                              u.navigateToTrade({
                                name: "TradeStock",
                                query: c({ market: o, code: i }, s),
                              });
                      case 2:
                      case "end":
                        return n.stop();
                    }
                }, t);
              })
            );
          },
          navigateToVideoDetail: function (n) {
            var e = n,
              t = (e.instance, e.id),
              a = w(e, ["instance", "id"]),
              o = l(a),
              i = {
                url: "/pages/newsCon/video/videoDetail?newsId="
                  .concat(t)
                  .concat(o ? "&".concat(o) : ""),
              };
            u.wx$1 && u.wx$1.navigateTo
              ? u.wx$1.navigateTo(i)
              : window &&
                window.wx &&
                window.wx.miniProgram &&
                window.wx.miniProgram.navigateTo(i);
          },
          navigateToZixuan: function () {
            u.wx$1.switchTab({ url: "/pages/index/index" });
          },
          setNavigationBarTitle: function n(e) {
            var t = e.title,
              a = e.success,
              o = e.fail,
              i = e.complete;
            u.wx$1 &&
              n &&
              u.wx$1.setNavigationBarTitle({
                title: t,
                success: a,
                fail: o,
                complete: i,
              });
          },
          setStorageSync: function (n, e) {
            u.wx$1 && u.wx$1.setStorageSync
              ? u.wx$1.setStorageSync(n, e)
              : localStorage && localStorage.setItem(n, e);
          },
          showToast: function (n) {
            var e = n,
              t = e.instance,
              a = e.title,
              o = w(e, ["instance", "title"]);
            u.wx$1 && u.wx$1.showToast
              ? u.wx$1.showToast(c({ title: a }, o))
              : t && t.$cApi && t.$cApi.showToast && t.$cApi.showToast(a);
          },
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ) || {};
exports.sdk = v;
