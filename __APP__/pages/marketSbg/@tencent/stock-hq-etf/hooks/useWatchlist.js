var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  s = function (e, r, n) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  i = function (e, t) {
    for (var n in t || (t = {})) c.call(t, n) && s(e, n, t[n]);
    if (o) {
      var a,
        i = r(o(t));
      try {
        for (i.s(); !(a = i.n()).done; ) {
          n = a.value;
          u.call(t, n) && s(e, n, t[n]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  p = function (e, r) {
    return n(e, a(r));
  },
  l = function (e, r, t) {
    return new Promise(function (n, a) {
      var o = function (e) {
          try {
            u(t.next(e));
          } catch (e) {
            a(e);
          }
        },
        c = function (e) {
          try {
            u(t.throw(e));
          } catch (e) {
            a(e);
          }
        },
        u = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(o, c);
        };
      u((t = t.apply(e, r)).next());
    });
  },
  f = require("../../../../../common/vendor.js");
function d(r) {
  return l(
    this,
    null,
    e().mark(function t() {
      var n, a, o;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if ("mpweapp" !== f.ShellTypeEnum.SHY) {
                e.next = 2;
                break;
              }
              return e.abrupt("return", { openid: "", fskey: "" });
            case 2:
              return (e.next = 4), f.StockBridge.getLoginInfoUnion();
            case 4:
              if (((e.t0 = e.sent), e.t0)) {
                e.next = 7;
                break;
              }
              e.t0 = {};
            case 7:
              return (
                (n = e.t0),
                (a = n.qluin),
                (o = n.qlskey),
                e.abrupt(
                  "return",
                  p(
                    i(
                      {},
                      r
                        ? { app: "wzqxcx", appid: "wx4ffb369b6881ee5e" }
                        : { app: "mini_h5", appid: "wx9cf8c670ebd68ce4" }
                    ),
                    { openid: a || "", fskey: o || "", check: 11 }
                  )
                )
              );
            case 11:
            case "end":
              return e.stop();
          }
      }, t);
    })
  );
}
exports.useWatchlist = function () {
  var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    t = r.isMp,
    n = void 0 !== t && t,
    a = r.isApp,
    o = void 0 !== a && a,
    c = r.getSdk,
    u = void 0 === c ? null : c,
    s = r.eventName,
    k = void 0 === s ? "" : s,
    v = f.ref(!1),
    b = f.ref(!1),
    x = f.ref(!1);
  return {
    isAdded: v,
    isLoading: b,
    isSubmitting: x,
    sync: function (r) {
      return l(
        this,
        null,
        e().mark(function t() {
          return e().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (r) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt(
                      "return",
                      ((v.value = !1), void (b.value = !1))
                    );
                  case 2:
                    return (
                      (b.value = !0),
                      (t.prev = 3),
                      (t.next = 6),
                      (function (r) {
                        return l(
                          this,
                          null,
                          e().mark(function t() {
                            var a, c, s, l, k, b;
                            return e().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (r && "--" !== r) {
                                      e.next = 2;
                                      break;
                                    }
                                    return e.abrupt(
                                      "return",
                                      void (v.value = !1)
                                    );
                                  case 2:
                                    if (
                                      ((a =
                                        "function" == typeof u ? u() : null),
                                      !(o && a && a.checkStockZxg))
                                    ) {
                                      e.next = 8;
                                      break;
                                    }
                                    return (e.next = 6), a.checkStockZxg(r);
                                  case 6:
                                    return (
                                      (c = e.sent),
                                      e.abrupt(
                                        "return",
                                        void (v.value = Boolean(c && c.exist))
                                      )
                                    );
                                  case 8:
                                    return (e.next = 10), d(n);
                                  case 10:
                                    if ((s = e.sent).openid && s.fskey) {
                                      e.next = 13;
                                      break;
                                    }
                                    return e.abrupt(
                                      "return",
                                      void (v.value = !1)
                                    );
                                  case 13:
                                    return (
                                      (l = n ? { forceCallback: !0 } : void 0),
                                      (e.next = 16),
                                      f.StockBridge.request(
                                        "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/stockGroups",
                                        f.RequestTypeEnum.GET,
                                        p(i({}, s), { stocks: r }),
                                        l
                                      )
                                    );
                                  case 16:
                                    (k = e.sent),
                                      (b =
                                        k &&
                                        k.data &&
                                        k.data[r] &&
                                        k.data[r].grpids),
                                      (v.value =
                                        Array.isArray(b) && b.length > 0);
                                  case 19:
                                  case "end":
                                    return e.stop();
                                }
                            }, t);
                          })
                        );
                      })(r)
                    );
                  case 6:
                    t.next = 11;
                    break;
                  case 8:
                    (t.prev = 8), (t.t0 = t.catch(3)), (v.value = !1);
                  case 11:
                    return (t.prev = 11), (b.value = !1), t.finish(11);
                  case 14:
                  case "end":
                    return t.stop();
                }
            },
            t,
            null,
            [[3, 8, 11, 14]]
          );
        })
      );
    },
    toggle: function (r, t) {
      return l(
        this,
        null,
        e().mark(function a() {
          var c, s, l, b, h, m, g;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (x.value || !r || "--" === r) {
                      e.next = 41;
                      break;
                    }
                    if (
                      (k &&
                        f.StockBridge.mtaReport({ busi: "hq", eventName: k }),
                      (x.value = !0),
                      (e.prev = 2),
                      (c = "function" == typeof u ? u() : null),
                      !(o && c && c.addStockZxg && c.removeStockFromGroup))
                    ) {
                      e.next = 20;
                      break;
                    }
                    if (!t) {
                      e.next = 11;
                      break;
                    }
                    return (e.next = 8), c.addStockZxg(r);
                  case 8:
                    (e.t0 = e.sent), (e.next = 14);
                    break;
                  case 11:
                    return (e.next = 13), c.removeStockFromGroup(r);
                  case 13:
                    e.t0 = e.sent;
                  case 14:
                    if (
                      ((s = e.t0),
                      (l = t
                        ? "addStockToGroup:ok"
                        : "removeStockFromGroup:ok"),
                      s && s.err_msg === l)
                    ) {
                      e.next = 18;
                      break;
                    }
                    throw new Error(
                      (s && s.err_msg) || "watchlist toggle failed"
                    );
                  case 18:
                    e.next = 32;
                    break;
                  case 20:
                    return (e.next = 22), d(n);
                  case 22:
                    if ((b = e.sent).openid && b.fskey) {
                      e.next = 25;
                      break;
                    }
                    throw new Error("missing login info");
                  case 25:
                    return (
                      (h = [
                        {
                          act: t ? "sa" : "sd",
                          code: r,
                          timestamp: Math.floor(Date.now() / 1e3),
                        },
                      ]),
                      (e.next = 28),
                      f.StockBridge.request(
                        "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq",
                        f.RequestTypeEnum.GET,
                        p(i({}, b), { seq: JSON.stringify(h) }),
                        { forceCallback: !0 }
                      )
                    );
                  case 28:
                    if (
                      ((m = e.sent),
                      (g = m && m.data && m.data.record),
                      m &&
                        0 === m.code &&
                        Array.isArray(g) &&
                        g.length > 0 &&
                        g.every(function (e) {
                          return e && 0 === e.code;
                        }))
                    ) {
                      e.next = 32;
                      break;
                    }
                    throw new Error(
                      (m && m.msg) ||
                        (g && g[0] && g[0].code) ||
                        "watchlist toggle failed"
                    );
                  case 32:
                    (v.value = t),
                      f.StockBridge.toast(t ? "已添加自选" : "已删除自选"),
                      (e.next = 38);
                    break;
                  case 35:
                    (e.prev = 35),
                      (e.t1 = e.catch(2)),
                      f.StockBridge.toast(t ? "添加自选失败" : "删除自选失败");
                  case 38:
                    return (e.prev = 38), (x.value = !1), e.finish(38);
                  case 41:
                  case "end":
                    return e.stop();
                }
            },
            a,
            null,
            [[2, 35, 38, 41]]
          );
        })
      );
    },
  };
};
