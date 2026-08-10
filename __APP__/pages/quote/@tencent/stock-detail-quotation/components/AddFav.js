require("../../../../../@babel/runtime/helpers/Objectentries");
var e = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../@babel/runtime/helpers/typeof"),
  s = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  o = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  d = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  l = function (e, t, n) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  p = function (e, t) {
    for (var n in t || (t = {})) d.call(t, n) && l(e, n, t[n]);
    if (c) {
      var r,
        i = s(c(t));
      try {
        for (i.s(); !(r = i.n()).done; ) {
          n = r.value;
          u.call(t, n) && l(e, n, t[n]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  h = function (e, t, n) {
    return new Promise(function (r, s) {
      var i = function (e) {
          try {
            a(n.next(e));
          } catch (e) {
            s(e);
          }
        },
        o = function (e) {
          try {
            a(n.throw(e));
          } catch (e) {
            s(e);
          }
        },
        a = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(i, o);
        };
      a((n = n.apply(e, t)).next());
    });
  },
  f = require("../../../../../common/vendor.js"),
  k = require("../../stock-hq-data/index.js"),
  m = require("../../../js-cookie/src/js.cookie.js"),
  b = require("../../stock-hq-core/utils/storage/local.js"),
  g = require("../../stock-hq-core/utils/market.js"),
  y = window && window.navigator && /qqnews/.test(navigator.userAgent),
  w = function () {},
  x = y
    ? require("@tencent/qqnews-jsapi")
    : { setLocalStorage: w, getLocalStorage: w },
  v = x.setLocalStorage,
  S = x.getLocalStorage,
  _ = function (e, t) {
    return new Promise(function (n) {
      v({ key: e, value: JSON.stringify(t) })
        .then(function (e) {
          e && 0 == +e.errCode ? n(e) : n();
        })
        .catch(function (e) {
          n();
        });
    });
  },
  I = function (e) {
    return (function (e) {
      return new Promise(function (t) {
        S({ key: e })
          .then(function (e) {
            if (e && 0 == +e.errCode) {
              var n = e.value;
              try {
                var r = "" === n ? n : JSON.parse(n);
                t(r);
              } catch (e) {
                t(n);
              }
            } else t(null);
          })
          .catch(function (e) {
            t(null);
          });
      });
    })(e).then(function (t) {
      if (!t) {
        var n = b.sls.getItem(e);
        if (n) return _(e, n), b.sls.setItem(e, ""), n;
      }
      return t;
    });
  },
  A = !1;
try {
  A = !0;
} catch (e) {}
var q = function (e) {
    return (
      !A &&
      ("mini" === e ||
      (window.$app && /^h5_.*/.test(window.$app)) ||
      (window.$app && /^quick_.*/.test(window.$app))
        ? window.$app
        : void 0)
    );
  },
  P = function (e) {
    return h(
      exports,
      null,
      n().mark(function t() {
        var s;
        return n().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                if (((s = null), !y)) {
                  t.next = 9;
                  break;
                }
                return (t.next = 4), I("LOGIN_INFO");
              case 4:
                if (((s = t.sent), "object" == r(s))) {
                  t.next = 7;
                  break;
                }
                try {
                  s = JSON.parse(s);
                } catch (e) {}
              case 7:
                t.next = 10;
                break;
              case 9:
                s = b.sls.getItem("LOGIN_INFO");
              case 10:
                return t.abrupt("return", !!(q(e) && s && s.openid) && s);
              case 11:
              case "end":
                return t.stop();
            }
        }, t);
      })
    );
  },
  T = "choose/userStock",
  j = "choose/userGroups",
  C = f.isBroker
    ? [{ name: "全部", id: "1", display: !0, system: !0, key: "ALL", type: 1 }]
    : [
        { name: "全部", id: "1", display: !0, system: !0, key: "ALL", type: 1 },
        { name: "沪深", id: "6", display: !0, system: !0, key: "HS", type: 2 },
        { name: "港股", id: "5", display: !0, system: !0, key: "HK", type: 2 },
        { name: "美股", id: "4", display: !0, system: !0, key: "US", type: 2 },
        { name: "ETF", id: "3", display: !0, system: !0, key: "FUND", type: 2 },
        {
          name: "场外基金",
          id: "7",
          display: !0,
          system: !0,
          key: "CWJJ",
          type: 2,
        },
      ];
function B() {
  return h(
    this,
    null,
    n().mark(function e() {
      var t;
      return n().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (!y) {
                e.next = 6;
                break;
              }
              return (e.next = 3), I(T);
            case 3:
              if (((t = e.sent), "object" != r(t)))
                try {
                  t = JSON.parse(t);
                } catch (e) {}
              return e.abrupt("return", t || {});
            case 6:
              return e.abrupt("return", b.sls.getItem(T) || {});
            case 7:
            case "end":
              return e.stop();
          }
      }, e);
    })
  );
}
function O() {
  return h(
    this,
    null,
    n().mark(function e() {
      var t;
      return n().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (!y) {
                e.next = 6;
                break;
              }
              return (e.next = 3), I(j);
            case 3:
              if (((t = e.sent), !Array.isArray(t)))
                try {
                  t = JSON.parse(t);
                } catch (e) {}
              return e.abrupt("return", t || []);
            case 6:
              return e.abrupt("return", b.sls.getItem(j) || []);
            case 7:
            case "end":
              return e.stop();
          }
      }, e);
    })
  );
}
function N(e, t) {
  return h(
    this,
    null,
    n().mark(function r() {
      var s, i, o, a, c, d, u, l, p, f, k, m, w;
      return n().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              if (((r.t0 = !q()), r.t0)) {
                r.next = 5;
                break;
              }
              return (r.next = 4), P();
            case 4:
              r.t0 = r.sent;
            case 5:
              if (!r.t0) {
                r.next = 7;
                break;
              }
              return r.abrupt("return");
            case 7:
              if (e.grpid) {
                r.next = 12;
                break;
              }
              return (r.next = 10), O();
            case 10:
              (s = r.sent.find(function (e) {
                return "全部" === e.name && 1 == +e.type;
              })),
                (e.grpid = s && void 0 !== s.id ? s.id : "1");
            case 12:
              return (
                (i = e.code),
                (o = e.grpid),
                (a = e.stockInfo),
                (r.next = 17),
                B()
              );
            case 17:
              return (
                (c = r.sent),
                t ||
                  0 !== Object.keys(c).length ||
                  C.map(function (e) {
                    c[e.id] = { list: [], len: 0 };
                  }),
                (d = (c[o] || {}).list || []),
                (u = d.findIndex(function (e) {
                  return e.chooseSymbol === i;
                })),
                t || -1 !== u ? t && -1 !== u && d.splice(u, 1) : d.unshift(a),
                (c[o] = { list: d, len: d.length }),
                (l = "6"),
                (p = a.type),
                (f = a.stock_type),
                g.isFund(f)
                  ? (l = "3")
                  : g.isHKMarket(p)
                  ? (l = "5")
                  : g.isUSMarket(p) && (l = "4"),
                (k = (c[l] || {}).list || []),
                (m = k.findIndex(function (e) {
                  return e.chooseSymbol === i;
                })),
                t || -1 !== m ? t && -1 !== m && k.splice(u, 1) : k.unshift(a),
                (c[l] = { list: k, len: k.length }),
                (r.next = 29),
                (function (e) {
                  return h(
                    this,
                    null,
                    n().mark(function t() {
                      return n().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (!y) {
                                t.next = 5;
                                break;
                              }
                              return (t.next = 3), _(T, e);
                            case 3:
                              t.next = 6;
                              break;
                            case 5:
                              b.sls.setItem(T, e);
                            case 6:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                })(c)
              );
            case 29:
              if (t) {
                r.next = 38;
                break;
              }
              return (r.next = 32), O();
            case 32:
              if (((w = r.sent), (r.t1 = w.length), r.t1)) {
                r.next = 38;
                break;
              }
              return (
                (w = C),
                (r.next = 38),
                (function (e) {
                  return h(
                    this,
                    null,
                    n().mark(function t() {
                      return n().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (!y) {
                                t.next = 5;
                                break;
                              }
                              return (t.next = 3), _(j, e);
                            case 3:
                              t.next = 6;
                              break;
                            case 5:
                              b.sls.setItem(j, e);
                            case 6:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                })(w)
              );
            case 38:
            case "end":
              return r.stop();
          }
      }, r);
    })
  );
}
var $ = (function () {
    function r(t) {
      var s = this;
      e(this, r);
      var i = t.request;
      this.Serv = new k.ChooseApi(function (e) {
        return new Promise(function (t, r) {
          return h(
            s,
            null,
            n().mark(function s() {
              var c, d, u, l, h, f, k, b, g, y, w, x, v, S, _, I, A;
              return n().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if (
                        ("string" == typeof e && (e = { url: e }),
                        (d = (c = e).url),
                        (u = c.params),
                        (l = void 0 === u ? {} : u),
                        (h = c.data),
                        (f = void 0 === h ? {} : h),
                        (k = c.method),
                        (b = void 0 === k ? "get" : k),
                        (g = c.options),
                        (y = void 0 === g ? {} : g),
                        (w = {}),
                        !q())
                      ) {
                        n.next = 16;
                        break;
                      }
                      return (n.next = 6), P();
                    case 6:
                      if (((n.t0 = n.sent), n.t0)) {
                        n.next = 9;
                        break;
                      }
                      n.t0 = {};
                    case 9:
                      (x = n.t0),
                        (v = x.check),
                        (S = x.openid),
                        (_ = x.fskey),
                        (w = S ? { check: v, openid: S, fskey: _ } : {}),
                        (n.next = 17);
                      break;
                    case 16:
                      w = {
                        appid: "wx9cf8c670ebd68ce4",
                        openid: m.cookie.get("wzq_qluin"),
                        fskey: m.cookie.get("wzq_qlskey"),
                        access_token: "",
                        check: 11,
                        _devId: m.cookie.get("wzq_qlskey"),
                        buildType: "rdm",
                        new_opt: 1,
                      };
                    case 17:
                      i(
                        d,
                        b,
                        l,
                        ((I = p({}, y)),
                        (A = {
                          params: p(p({}, l), w),
                          data: f,
                          headers: {
                            "content-type":
                              "application/x-www-form-urlencoded; charset=UTF-8",
                          },
                        }),
                        o(I, a(A)))
                      )
                        .then(function (e) {
                          !e || (void 0 !== e.code && 0 != +e.code)
                            ? r({ msg: e && e.msg, retmsg: e && e.msg })
                            : t(e);
                        })
                        .catch(function (e) {
                          r(e);
                        });
                    case 18:
                    case "end":
                      return n.stop();
                  }
              }, s);
            })
          );
        });
      });
    }
    return (
      t(r, [
        {
          key: "queryUserStock",
          value: function () {
            return h(
              this,
              null,
              n().mark(function e() {
                var t, r, s;
                return n().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.t0 = q()), !e.t0)) {
                            e.next = 5;
                            break;
                          }
                          return (e.next = 4), P();
                        case 4:
                          e.t0 = !e.sent;
                        case 5:
                          if (!e.t0) {
                            e.next = 15;
                            break;
                          }
                          return (e.next = 8), B();
                        case 8:
                          return (t = e.sent), (e.next = 11), O();
                        case 11:
                          return (
                            (r = e.sent),
                            (t = Array.isArray(t) ? {} : t),
                            (s = []),
                            e.abrupt(
                              "return",
                              (Object.keys(t).map(function (e) {
                                "" !== e &&
                                  (s[
                                    C.findIndex(function (t) {
                                      return t.id === e;
                                    })
                                  ] = {
                                    groupinfo:
                                      r.find(function (t) {
                                        return t.id == e;
                                      }) || {},
                                    stocklist: t[e].list,
                                  });
                              }),
                              Promise.resolve({
                                retcode: 0,
                                groups: r.length ? r : C,
                                grouplist: s,
                              }))
                            )
                          );
                        case 15:
                          return e.abrupt(
                            "return",
                            this.Serv.queryUserStock({
                              range: "group",
                              followedVer: 0,
                              allInfoVer: 0,
                              all_groups: 1,
                            })
                          );
                        case 16:
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
          key: "editGroup",
          value: function (e) {
            return h(
              this,
              null,
              n().mark(function t() {
                var r, s, i;
                return n().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          (r = { timestamp: new Date().getTime(), act: e.act }),
                            (t.t0 = e.act),
                            (t.next =
                              "ga" === t.t0 || "gu" === t.t0
                                ? 4
                                : "gd" === t.t0
                                ? 6
                                : "go" === t.t0
                                ? 8
                                : "gs" === t.t0 || "gh" === t.t0
                                ? 10
                                : "sa" === t.t0
                                ? 12
                                : "sd" === t.t0
                                ? 32
                                : "sp" === t.t0 || "st" === t.t0
                                ? 52
                                : "so" === t.t0
                                ? 54
                                : 55);
                          break;
                        case 4:
                          return (
                            (r.grpid =
                              e.grpid || "TEMP-".concat(new Date().getTime())),
                            (r.grpname = e.grpname),
                            t.abrupt("break", 55)
                          );
                        case 6:
                          return (
                            (r.grpid = e.grpid),
                            (r.sync = e.sync ? 1 : 0),
                            t.abrupt("break", 55)
                          );
                        case 8:
                          return (r.grplist = e.grplist), t.abrupt("break", 55);
                        case 10:
                          return (r.grpid = e.grpid), t.abrupt("break", 55);
                        case 12:
                          if (e.grpid) {
                            t.next = 17;
                            break;
                          }
                          return (t.next = 15), O();
                        case 15:
                          (s = t.sent.find(function (e) {
                            return "全部" === e.name && 1 == +e.type;
                          })),
                            (e.grpid = s && void 0 !== s.id ? s.id : "1");
                        case 17:
                          if (((t.t1 = q()), !t.t1)) {
                            t.next = 22;
                            break;
                          }
                          return (t.next = 21), P();
                        case 21:
                          t.t1 = !t.sent;
                        case 22:
                          if (!t.t1) {
                            t.next = 31;
                            break;
                          }
                          if (!window.__QUICKAPP__) {
                            t.next = 27;
                            break;
                          }
                          (t.t2 =
                            (this.addStockToQUICKAPP(e),
                            Promise.resolve({ code: 0 }))),
                            (t.next = 30);
                          break;
                        case 27:
                          return (t.next = 29), N(e);
                        case 29:
                          t.t2 = Promise.resolve({ code: 0 });
                        case 30:
                          return t.abrupt("return", t.t2);
                        case 31:
                          (r.grpid = e.grpid), (r.code = e.code);
                        case 32:
                          if (e.grpid) {
                            t.next = 37;
                            break;
                          }
                          return (t.next = 35), O();
                        case 35:
                          (i = t.sent.find(function (e) {
                            return "全部" === e.name && 1 == +e.type;
                          })),
                            (e.grpid = i && void 0 !== i.id ? i.id : "1");
                        case 37:
                          if (((t.t3 = q()), !t.t3)) {
                            t.next = 42;
                            break;
                          }
                          return (t.next = 41), P();
                        case 41:
                          t.t3 = !t.sent;
                        case 42:
                          if (!t.t3) {
                            t.next = 51;
                            break;
                          }
                          if (!window.__QUICKAPP__) {
                            t.next = 47;
                            break;
                          }
                          (t.t4 =
                            (this.addStockToQUICKAPP(e, !0),
                            Promise.resolve({ code: 0 }))),
                            (t.next = 50);
                          break;
                        case 47:
                          return (t.next = 49), N(e, !0);
                        case 49:
                          t.t4 = Promise.resolve({ code: 0 });
                        case 50:
                          return t.abrupt("return", t.t4);
                        case 51:
                          (r.grpid = e.grpid), (r.code = e.code);
                        case 52:
                          return (
                            (r.grpid = e.grpid),
                            (r.code = e.code),
                            t.abrupt("break", 55)
                          );
                        case 54:
                          (r.grpid = e.grpid), (r.codelist = e.codelist);
                        case 55:
                          return t.abrupt(
                            "return",
                            this.Serv.batchUpdateStock({
                              data: "seq=".concat(
                                encodeURIComponent(JSON.stringify([r]))
                              ),
                            })
                          );
                        case 56:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
          },
        },
        {
          key: "followBatchStock",
          value: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "1",
              r =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return h(
              this,
              null,
              n().mark(function s() {
                var i,
                  o,
                  a,
                  c,
                  d,
                  u,
                  l = this;
                return n().wrap(
                  function (s) {
                    for (;;)
                      switch ((s.prev = s.next)) {
                        case 0:
                          if (
                            ((i = []),
                            (o = r
                              ? e
                              : k.utils.formatStock((e && e.join(",")) || "")),
                            (s.t0 = q()),
                            !s.t0)
                          ) {
                            s.next = 6;
                            break;
                          }
                          return (s.next = 5), P();
                        case 5:
                          s.t0 = !s.sent;
                        case 6:
                          if (!s.t0) {
                            s.next = 22;
                            break;
                          }
                          return (s.next = 9), this.Serv.getQTs(o);
                        case 9:
                          if (
                            ((a = s.sent),
                            (c = []),
                            Object.entries(a).map(function (e) {
                              return h(
                                l,
                                null,
                                n().mark(function r() {
                                  var s,
                                    i,
                                    o,
                                    a = this;
                                  return n().wrap(function (r) {
                                    for (;;)
                                      switch ((r.prev = r.next)) {
                                        case 0:
                                          (s = e[1]),
                                            (i = s[0]),
                                            (o = {
                                              61: "nq",
                                              62: "bj",
                                              51: "0",
                                              1: "1",
                                              2: "p",
                                              100: "2",
                                              real: "3",
                                              delay: "3",
                                            }),
                                            t.split(",").map(function (t) {
                                              return h(
                                                a,
                                                null,
                                                n().mark(function r() {
                                                  return n().wrap(function (n) {
                                                    for (;;)
                                                      switch (
                                                        (n.prev = n.next)
                                                      ) {
                                                        case 0:
                                                          c.push({
                                                            code: s[2],
                                                            grpid: t,
                                                            stockInfo: {
                                                              chooseSymbol: e[0]
                                                                .split("_")
                                                                .pop(),
                                                              name: s[1],
                                                              scode: s[2],
                                                              stock_type: s[10],
                                                              type: o[i],
                                                              zde:
                                                                s[4] > 0
                                                                  ? "+".concat(
                                                                      s[4]
                                                                    )
                                                                  : s[4],
                                                              zdf:
                                                                s[5] > 0
                                                                  ? "+".concat(
                                                                      s[5]
                                                                    )
                                                                  : s[5],
                                                              zsz: s[9],
                                                              dqj: s[3],
                                                              zjcj: s[3],
                                                              status: s[8],
                                                              susp_flag:
                                                                "S" === s[8],
                                                            },
                                                          });
                                                        case 1:
                                                        case "end":
                                                          return n.stop();
                                                      }
                                                  }, r);
                                                })
                                              );
                                            });
                                        case 2:
                                        case "end":
                                          return r.stop();
                                      }
                                  }, r);
                                })
                              );
                            }),
                            c && c.length)
                          ) {
                            s.next = 13;
                            break;
                          }
                          return s.abrupt("return");
                        case 13:
                          (d = c.length), (u = 0);
                        case 15:
                          if (!(u < d)) {
                            s.next = 21;
                            break;
                          }
                          return (s.next = 18), N(c[u]);
                        case 18:
                          u += 1;
                        case 19:
                          s.next = 15;
                          break;
                        case 21:
                          return s.abrupt(
                            "return",
                            Promise.resolve({ code: 0 })
                          );
                        case 22:
                          return s.abrupt(
                            "return",
                            (t.split(",").map(function (e) {
                              o &&
                                o.map(function (t) {
                                  i.push({
                                    grpid: e,
                                    act: "sa",
                                    code: t,
                                    timestamp: new Date().getTime(),
                                  });
                                });
                            }),
                            this.Serv.batchUpdateStock({
                              data: "seq=".concat(
                                encodeURIComponent(JSON.stringify(i))
                              ),
                            }))
                          );
                        case 23:
                        case "end":
                          return s.stop();
                      }
                  },
                  s,
                  this
                );
              })
            );
          },
        },
        {
          key: "addStockToQUICKAPP",
          value: function (e, t) {
            if (window.__QUICKAPP__) {
              var n = e.stockInfo,
                r = void 0 === n ? {} : n,
                s = r.chooseSymbol,
                i = r.scode,
                o = r.type;
              system &&
                system.postMessage(
                  JSON.stringify({
                    type: t ? "deletestock" : "addstock",
                    symbol: s,
                    code: i,
                    market: o,
                  })
                );
            }
          },
        },
        {
          key: "queryStockGroups",
          value: function (e) {
            return this.Serv.queryStockGroups({
              params: { stocks: (e && e.join(",")) || "" },
            });
          },
        },
      ]),
      r
    );
  })(),
  U = null,
  L = {
    inject: { prefetch: { default: function () {} } },
    props: [
      "type",
      "skin",
      "market",
      "scode",
      "stockType",
      "symbol",
      "stockInfo",
      "userinfo",
      "isShowTrade",
      "isShowLctFollow",
      "didAgreeUserAgreement",
    ],
    components: {
      Batch: function () {
        return "./batch/Index.js";
      },
      BubbleTip: function () {
        return "./BubbleTip.js";
      },
    },
    data: function () {
      return {
        added: !1,
        dataReady: !1,
        NewChooseApi: null,
        isMini: q(f.StockBridge.ENV),
        isH5: "mp" !== f.StockBridge.ENV,
        batchShow: "close",
      };
    },
    computed: {
      isMP: function () {
        return "mp" === f.StockBridge.ENV;
      },
      isIndex: function () {
        return k.utils.isIndex(this.stockType);
      },
      isHSPlate: function () {
        return k.utils.isHSPlate(this.market);
      },
      isBubbleShow: function () {
        return (
          (this.isIndex || this.isHSPlate) &&
          void 0 !== this.isShowTrade &&
          !this.isShowTrade &&
          this.dataReady &&
          !this.added &&
          !f.StockBridge.getStorage("buy-zs-bk-bubble-show")
        );
      },
      bubbleText: function () {
        return this.isBubbleShow
          ? "该".concat(
              this.isIndex ? "指数" : "板块",
              "暂无可买ETF，加入自选关注"
            )
          : "";
      },
    },
    watch: {
      added: {
        handler: function (e) {
          this.$emit("changeAdded", e);
        },
        immediate: !0,
      },
    },
    created: function () {
      this.isH5 && (this.NewChooseApi = new $(f.StockBridge)),
        U ||
          (U = new k.DetailApi(function () {
            for (
              var e, t = arguments.length, n = new Array(t), r = 0;
              r < t;
              r++
            )
              n[r] = arguments[r];
            return 1 === n.length
              ? f.StockBridge.request(n[0], "GET", {}, { forceCallback: !0 })
              : (n[3] && (n[3].forceCallback = !0),
                (e = f.StockBridge).request.apply(e, n));
          })),
        this.judgeAdded();
    },
    beforeUnmount: function () {
      this.reportTimer && clearTimeout(this.reportTimer);
    },
    methods: {
      isJudgeStockAddedCallback: function () {
        return h(
          this,
          null,
          n().mark(function e() {
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      window.__QUICKAPP__ &&
                        system &&
                        system.postMessage(
                          JSON.stringify({
                            type: "isJudgeStockAdded",
                            symbol: this.symbol,
                          })
                        );
                    case 1:
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
      judgeAdded: function () {
        return h(
          this,
          null,
          n().mark(function e() {
            var t,
              r,
              s,
              i,
              o,
              a,
              c,
              d,
              u,
              l,
              p,
              h,
              k,
              m = this;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        !(null == (t = this.prefetch) ? void 0 : t.getAdded)
                      ) {
                        e.next = 6;
                        break;
                      }
                      return (
                        (e.next = 3),
                        this.prefetch.getAdded(this.scode, this.market)
                      );
                    case 3:
                      (this.added = e.sent), (e.next = 56);
                      break;
                    case 6:
                      if (
                        ((i = {
                          app: this.isMP ? "mp" : "wzq",
                          market: this.market,
                          scode: this.scode,
                        }),
                        !this.isMP)
                      ) {
                        e.next = 12;
                        break;
                      }
                      (o =
                        (null ==
                        (s =
                          null == (r = getApp().globalData) ? void 0 : r.Login)
                          ? void 0
                          : s.loginKeys) || {}),
                        (i.openId = o.qluin),
                        (i.fsKey = o.qlskey),
                        (e.next = 53);
                      break;
                    case 12:
                      if ("wzq" !== f.StockBridge.ENV) {
                        e.next = 16;
                        break;
                      }
                      (i.openId = f.StockBridge.getCookie("wzq_qluin")),
                        (i.fsKey = f.StockBridge.getCookie("wzq_qlskey")),
                        (e.next = 53);
                      break;
                    case 16:
                      if (!this.isMini) {
                        e.next = 53;
                        break;
                      }
                      return (e.next = 19), P();
                    case 19:
                      if ((a = e.sent)) {
                        e.next = 51;
                        break;
                      }
                      if (!window.__QUICKAPP__) {
                        e.next = 35;
                        break;
                      }
                      return (
                        (e.prev = 22),
                        (c = function () {
                          return new Promise(function (e) {
                            system &&
                              system.onmessage &&
                              (system.onmessage = function (t) {
                                var n = JSON.parse(t);
                                "isJudgeStockAdded" === n.type && e(n.isAdded);
                              });
                          });
                        }),
                        (e.next = 26),
                        this.isJudgeStockAddedCallback()
                      );
                    case 26:
                      return (e.next = 28), c();
                    case 28:
                      (this.added = e.sent), (e.next = 33);
                      break;
                    case 31:
                      (e.prev = 31), (e.t0 = e.catch(22));
                    case 33:
                      e.next = 50;
                      break;
                    case 35:
                      return (e.next = 37), O();
                    case 37:
                      return (
                        (d = e.sent.find(function (e) {
                          return "全部" === e.name && 1 == +e.type;
                        })),
                        (u = d && void 0 !== d.id ? d.id : "1"),
                        (e.next = 41),
                        B()
                      );
                    case 41:
                      if (((e.t3 = u), (e.t2 = e.sent[e.t3]), e.t2)) {
                        e.next = 45;
                        break;
                      }
                      e.t2 = {};
                    case 45:
                      if (((e.t1 = e.t2.list), e.t1)) {
                        e.next = 48;
                        break;
                      }
                      e.t1 = [];
                    case 48:
                      (l = e.t1),
                        (this.added =
                          -1 !==
                          l.findIndex(function (e) {
                            return e.chooseSymbol === m.symbol;
                          }));
                    case 50:
                      return e.abrupt(
                        "return",
                        ((this.dataReady = !0),
                        void this.$parent.$emit(
                          "onToggleAdded",
                          this.added,
                          !1
                        ))
                      );
                    case 51:
                      (p = a.check),
                        (h = a.openid),
                        (k = a.fskey),
                        (i.openId = h),
                        (i.fsKey = k),
                        (i.check = p),
                        (i.app = window.$app);
                    case 53:
                      return (
                        (e.next = 55), U.judgeAdded(i, { needProcess: !0 })
                      );
                    case 55:
                      this.added = e.sent;
                    case 56:
                      (this.channelId = this.getChannel()),
                        f.StockBridge.report(
                          "hq.stock_detail.quotation_addChoose_brow",
                          {
                            stocklist: this.symbol,
                            fchannel_id_fm_i: this.channelId,
                            hasaddlist: this.added ? 1 : 0,
                          }
                        ),
                        (this.dataReady = !0),
                        this.$parent.$emit("onToggleAdded", this.added, !1),
                        f.StockBridge.busEmit("common-judgeAdded", this.added);
                    case 57:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[22, 31]]
            );
          })
        );
      },
      finishBatch: function (e, t) {
        switch (e) {
          case "move":
            "fail" !== t &&
              ((this.batchShow = "close"), "success" === t && this.finishAdd());
            break;
          case "directlyDel":
            (this.batchShow = "close"),
              "success" === t &&
                ((this.added = !1),
                f.StockBridge.report("stocklist.quotation_cancel", {
                  stocklist: this.symbol,
                }));
        }
        "success" === t &&
          (this.$parent.$emit("onToggleAdded", this.added, !0),
          f.StockBridge.busEmit("common-toggleAdded", this.added));
      },
      toggleAdded: function (e) {
        return h(
          this,
          null,
          n().mark(function t() {
            var r,
              s = this;
            return n().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!this.isMini) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        e
                          ? void (
                              this.$protocol &&
                              this.$protocol({
                                onAgree: function () {
                                  return h(
                                    s,
                                    null,
                                    n().mark(function e() {
                                      var t;
                                      return n().wrap(
                                        function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (e.next = 2),
                                                  null ==
                                                  (t = this.NewChooseApi)
                                                    ? void 0
                                                    : t.editGroup({
                                                        act: "sa",
                                                        code: this.symbol,
                                                        stockInfo:
                                                          this.stockInfo,
                                                      })
                                                );
                                              case 2:
                                                (this.added = !0),
                                                  f.StockBridge.toast(
                                                    "已添加自选"
                                                  ),
                                                  f.StockBridge.report(
                                                    "stocklist.quotation_add",
                                                    {
                                                      stocklist: this.symbol,
                                                      fchannel_id_fm_i:
                                                        this.channelId,
                                                    }
                                                  ),
                                                  this.$parent.$emit(
                                                    "onToggleAdded",
                                                    this.added,
                                                    !0
                                                  );
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
                              })
                            )
                          : (null == (r = this.NewChooseApi) ||
                              r.editGroup({
                                act: "sd",
                                code: this.symbol,
                                stockInfo: this.stockInfo,
                              }),
                            (this.added = !1),
                            f.StockBridge.toast("已删除自选"),
                            f.StockBridge.report("stocklist.quotation_cancel", {
                              stocklist: this.symbol,
                              fchannel_id_fm_i: this.channelId,
                            }),
                            void this.$parent.$emit(
                              "onToggleAdded",
                              this.added,
                              !0
                            ))
                      );
                    case 2:
                      this.didAgreeUserAgreement
                        ? (this.batchShow = e ? "move" : "directlyDel")
                        : this.$parent.$emit("needUserAgreementStatus");
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
      },
      finishAdd: function () {
        var e = this;
        (this.added = !0),
          f.StockBridge.report("stocklist.quotation_add", {
            stocklist: this.symbol,
            fchannel_id_fm_i: this.channelId,
          }),
          this.$parent.$emit("onToggleAdded", this.added, !0),
          this.reportTimer && clearTimeout(this.reportTimer),
          (this.reportTimer = setTimeout(function () {
            f.StockBridge.busEmit("growth-user.behavior.union", {
              type: "click",
              event: "custom_add_stock",
            }),
              e.isHSPlate &&
                f.StockBridge.busEmit("growth-user.behavior.union", {
                  type: "click",
                  event: "custom_add_plate",
                }),
              "ETF" === e.stockType &&
                f.StockBridge.busEmit("growth-user.behavior.union", {
                  type: "click",
                  event: "custom_add_etf",
                });
          }, 1500));
      },
      getChannel: function () {
        var e = "ILs00p000l028";
        if (
          (k.utils.isIndex(this.stockType) && (e = "ILs00p000l029"),
          k.utils.isHSPlate(this.market) && (e = "ILs00p000l030"),
          k.utils.isFund(this.stockType))
        )
          switch (this.stockType) {
            case "ETF":
              e = "ILs00p000l037";
              break;
            case "FJ":
            case "FJ-CX":
              e = "ILs00p000l018";
              break;
            case "LOF":
            case "QDII-LOF/ETF":
              e = "ILs00p000l038";
          }
        return e;
      },
      syncAdded: function (e) {
        this.added = e;
      },
    },
  };
Array || (f.resolveComponent("BubbleTip") + f.resolveComponent("batch"))();
var J = f._export_sfc(L, [
  [
    "render",
    function (e, t, n, r, s, i) {
      return f.e(
        { a: s.dataReady },
        s.dataReady
          ? f.e(
              { b: "icon" === n.type },
              "icon" === n.type
                ? f.e(
                    { c: s.added },
                    s.added
                      ? {
                          d: f.o(function (e) {
                            return i.toggleAdded(!1);
                          }, 2727),
                        }
                      : {
                          e: f.o(function (e) {
                            return i.toggleAdded(!0);
                          }, 2728),
                        }
                  )
                : f.e(
                    { f: s.added },
                    s.added
                      ? {
                          g: f.o(function (e) {
                            return i.toggleAdded(!1);
                          }, 2729),
                        }
                      : {
                          h: f.t(i.bubbleText),
                          i: f.p({
                            arrowPosition: "top-right",
                            isShow: i.isBubbleShow,
                          }),
                          j: f.o(function (e) {
                            return i.toggleAdded(!0);
                          }, 2730),
                        }
                  ),
              {
                k: "close" !== s.batchShow,
                l: f.o(i.finishBatch, 2731),
                m: f.p({
                  show: s.batchShow,
                  skin: n.skin,
                  scodelist: [
                    "".concat(n.stockInfo.type, ":").concat(n.stockInfo.scode),
                  ],
                }),
                n: "black" === n.skin ? 1 : "",
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-21ffbd24"],
]);
wx.createComponent(J);
