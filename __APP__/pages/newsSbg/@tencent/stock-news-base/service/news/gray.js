var e = require("../../../../../../@babel/runtime/helpers/typeof"),
  n = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  u = Object.defineProperty,
  o = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  s = function (e, n, r) {
    return n in e
      ? u(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[n] = r);
  },
  i = function (e, n) {
    for (var r in n || (n = {})) a.call(n, r) && s(e, r, n[r]);
    if (o) {
      var u,
        i = t(o(n));
      try {
        for (i.s(); !(u = i.n()).done; ) {
          r = u.value;
          c.call(n, r) && s(e, r, n[r]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  p = function (e, n, r) {
    return new Promise(function (t, u) {
      var o = function (e) {
          try {
            c(r.next(e));
          } catch (e) {
            u(e);
          }
        },
        a = function (e) {
          try {
            c(r.throw(e));
          } catch (e) {
            u(e);
          }
        },
        c = function (e) {
          return e.done ? t(e.value) : Promise.resolve(e.value).then(o, a);
        };
      c((r = r.apply(e, n)).next());
    });
  },
  l = require("../../../../../../common/vendor.js"),
  f = require("../../../stock-crypto-modules-hq/src/config.js"),
  d = l._default().env.IS_ZXG,
  v = "https://snp.tenpay.com",
  h = function () {
    return "mpweapp" === l.ShellTypeEnum.SHY;
  },
  b = { zxg: "wxcbc3ab3807acb685" },
  m = function () {
    return d || "mpweapp" === l.ShellTypeEnum.SHY ? "zxg" : "zxg_xcx";
  },
  y = function () {
    return p(
      exports,
      null,
      r().mark(function e() {
        var n, t, u, o;
        return r().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (((e.prev = 0), !h())) {
                    e.next = 7;
                    break;
                  }
                  return (
                    (e.next = 4),
                    new Promise(function (e) {
                      try {
                        shy.getUserInfo(function (n) {
                          return e(n || {});
                        });
                      } catch (n) {
                        e({});
                      }
                    })
                  );
                case 4:
                  return (
                    (n = e.sent),
                    (t = { wx: 11, qq: 10, phone: 13 }),
                    e.abrupt("return", {
                      openid: (null == n ? void 0 : n.openid) || "",
                      fskey: (null == n ? void 0 : n.fskey) || "",
                      check:
                        (null == n ? void 0 : n.check) ||
                        t[null == n ? void 0 : n.type] ||
                        11,
                    })
                  );
                case 7:
                  if (!d) {
                    e.next = 12;
                    break;
                  }
                  return (e.next = 10), l.StockBridge.getZxgLoginInfo("");
                case 10:
                  return (
                    (u = e.sent),
                    e.abrupt("return", {
                      openid: (null == u ? void 0 : u.openid) || "",
                      fskey: (null == u ? void 0 : u.fskey) || "",
                      check: (null == u ? void 0 : u.check) || 11,
                    })
                  );
                case 12:
                  return (e.next = 14), l.StockBridge.getLoginInfoUnion();
                case 14:
                  return (
                    (o = e.sent),
                    e.abrupt("return", {
                      openid: (null == o ? void 0 : o.qluin) || "",
                      fskey: (null == o ? void 0 : o.qlskey) || "",
                      check: 11,
                    })
                  );
                case 18:
                  return (
                    (e.prev = 18),
                    (e.t0 = e.catch(0)),
                    e.abrupt("return", { openid: "", fskey: "", check: 11 })
                  );
                case 21:
                case "end":
                  return e.stop();
              }
          },
          e,
          null,
          [[0, 18]]
        );
      })
    );
  },
  x = function () {
    return p(
      exports,
      null,
      r().mark(function e() {
        var t, u, o, a, c, s, p, l, d, v, x, k;
        return r().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (u = m()),
                  (o = (function (e) {
                    return b[e] || f.APPIDENUM[e] || "wx9cf8c670ebd68ce4";
                  })(u)),
                  (a = h()),
                  (e.next = 5),
                  Promise.all([
                    y(),
                    a
                      ? new Promise(function (e) {
                          try {
                            shy.getSystemInfo(function (n) {
                              return e(n || {});
                            });
                          } catch (n) {
                            e({});
                          }
                        })
                      : Promise.resolve({}),
                  ])
                );
              case 5:
                return (
                  (c = e.sent),
                  (s = n(c, 2)),
                  (p = s[0]),
                  (l = s[1]),
                  (d = p.openid),
                  (v = p.fskey),
                  (x = p.check),
                  (k = a
                    ? (null == l ? void 0 : l.devid) ||
                      (null == l ? void 0 : l.devId) ||
                      ""
                    : d),
                  e.abrupt(
                    "return",
                    i(
                      {
                        openid: d,
                        fskey: v,
                        appid: o,
                        check: x,
                        device_id: k,
                        app: u,
                      },
                      a
                        ? {
                            _appName:
                              (null == (t = null == l ? void 0 : l.os)
                                ? void 0
                                : t.toLowerCase()) || "",
                            _appver: (null == l ? void 0 : l.appVersion) || "",
                            _osVer: (null == l ? void 0 : l.osVersion) || "",
                            _devId:
                              (null == l ? void 0 : l.devid) ||
                              (null == l ? void 0 : l.devId) ||
                              "",
                            _dev: (null == l ? void 0 : l.dev) || "",
                          }
                        : {}
                    )
                  )
                );
              case 14:
              case "end":
                return e.stop();
            }
        }, e);
      })
    );
  };
function k(n) {
  return p(this, arguments, function (n) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      u =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : l.RequestTypeEnum.GET;
    return r().mark(function o() {
      var a, c, s, p, f, d, h, b;
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return (r.next = 2), x();
            case 2:
              return (
                (a = r.sent),
                (c = u === l.RequestTypeEnum.POST),
                (s = Object.keys(t).reduce(function (e, n) {
                  return void 0 !== t[n] && null !== t[n] && (e[n] = t[n]), e;
                }, {})),
                (p = (function (n) {
                  return Object.keys(n).reduce(function (r, t) {
                    var u = n[t];
                    return (
                      (r[t] =
                        "object" == e(u) && null !== u ? JSON.stringify(u) : u),
                      r
                    );
                  }, {});
                })(i(i({}, a), c ? {} : s))),
                (f = c ? s : {}),
                (d = (function (e, n, r) {
                  var t = m(),
                    u = Math.floor(Date.now() / 1e3),
                    o = l
                      .md5Module("".concat(t).concat(r.toUpperCase()))
                      .toUpperCase(),
                    a = n.length > 0 ? l.md5Module(n).toUpperCase() : "",
                    c = Object.keys(e)
                      .sort()
                      .filter(function (n) {
                        var r = e[n];
                        return null != r && "" !== r;
                      })
                      .map(function (n) {
                        return "".concat(n, "=").concat(e[n]);
                      })
                      .join("&"),
                    s = l.md5Module("".concat(u).concat(a).concat(c).concat(o));
                  return {
                    "x-appid": t,
                    "x-sa-v": "4",
                    "x-timestamp": String(u),
                    "x-sa-sign": s,
                  };
                })(p, c ? JSON.stringify(f) : "", u)),
                (h = (function (e) {
                  return Object.keys(e)
                    .map(function (n) {
                      return "".concat(n, "=").concat(encodeURIComponent(e[n]));
                    })
                    .join("&");
                })(i(i({}, p), d))),
                (b = h
                  ? "".concat(v).concat(n, "?").concat(h)
                  : "".concat(v).concat(n)),
                r.abrupt(
                  "return",
                  l.StockBridge.request(b, u, f, {
                    isShowToast: !1,
                    withoutCommonParams: !0,
                    headers: { "Content-Type": "application/json" },
                  })
                )
              );
            case 11:
            case "end":
              return r.stop();
          }
      }, o);
    })();
  });
}
var g = null,
  w = null,
  q = function (e, n) {
    var r = Number(
      String(null != e ? e : "")
        .replace("%", "")
        .trim()
    );
    return (
      r >= 100 ||
      (!(r <= 0 || !n) &&
        (function (e) {
          for (var n = 0, r = 0; r < e.length; r++)
            (n = (n << 5) - n + e.charCodeAt(r)), (n |= 0);
          return Math.abs(n);
        })(n) %
          1e6 <
          1e4 * r)
    );
  };
(exports.graphqlRequest = function (e, n, t) {
  return p(
    this,
    null,
    r().mark(function u() {
      var o;
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return (
                (o = { operationName: e, variables: n }),
                r.abrupt(
                  "return",
                  ("string" == typeof t
                    ? (o.query = t)
                    : (o.extensions = { persistedQuery: t }),
                  k("/zxg/news/graphql", o, l.RequestTypeEnum.GET))
                )
              );
            case 2:
            case "end":
              return r.stop();
          }
      }, u);
    })
  );
}),
  (exports.isNewsGrayUser = function (n) {
    return p(
      exports,
      null,
      r().mark(function t() {
        var u, o, a, c;
        return r().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (t.next = 2),
                  g ||
                    (g = p(
                      exports,
                      null,
                      r().mark(function n() {
                        var t, u, o, a, c, s, i, p;
                        return r().wrap(
                          function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  return (
                                    (u = {}),
                                    (o = null),
                                    (a = ""),
                                    (n.prev = 1),
                                    (n.next = 4),
                                    y()
                                  );
                                case 4:
                                  if (((c = n.sent), (a = c.openid))) {
                                    n.next = 8;
                                    break;
                                  }
                                  return n.abrupt("return", {
                                    percent: null,
                                    interfaces: u,
                                    openid: "",
                                  });
                                case 8:
                                  return (
                                    (n.next = 10),
                                    l.Wuji.get({
                                      appid: "news",
                                      schemaid: "abtesting",
                                      rowid: "6a1e745e1adf82521c003596",
                                      size: Math.floor(100 * Math.random()) + 1,
                                    })
                                  );
                                case 10:
                                  if (
                                    200 ===
                                      (null == (s = n.sent)
                                        ? void 0
                                        : s.code) &&
                                    (null == s ? void 0 : s.data)
                                  ) {
                                    i = null;
                                    try {
                                      (p = s.data.addFav),
                                        (i =
                                          "string" == typeof p
                                            ? JSON.parse(p)
                                            : p);
                                    } catch (e) {}
                                    !i ||
                                      (null != i.version && 1 !== i.version) ||
                                      (i.interfaces &&
                                        "object" == e(i.interfaces) &&
                                        (u = i.interfaces),
                                      (o = null != (t = i.percent) ? t : null));
                                  }
                                  n.next = 16;
                                  break;
                                case 14:
                                  (n.prev = 14), (n.t0 = n.catch(1));
                                case 16:
                                  return n.abrupt("return", {
                                    percent: o,
                                    interfaces: u,
                                    openid: a,
                                  });
                                case 17:
                                case "end":
                                  return n.stop();
                              }
                          },
                          n,
                          null,
                          [[1, 14]]
                        );
                      })
                    )),
                  g
                );
              case 2:
                if (
                  ((u = t.sent),
                  (o = u.percent),
                  (a = u.interfaces),
                  (c = u.openid),
                  !a || !(n in a))
                ) {
                  t.next = 11;
                  break;
                }
                if (!q(a[n], c)) {
                  t.next = 9;
                  break;
                }
                return t.abrupt("return", !0);
              case 9:
                t.next = 13;
                break;
              case 11:
                if (!q(o, c)) {
                  t.next = 13;
                  break;
                }
                return t.abrupt("return", !0);
              case 13:
                return t.abrupt(
                  "return",
                  (w ||
                    (w = p(
                      exports,
                      null,
                      r().mark(function e() {
                        var n, t, u, o, a, c;
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.prev = 0), (e.next = 3), y();
                                case 3:
                                  if (
                                    ((n = e.sent),
                                    (t = n.openid),
                                    (u = n.fskey),
                                    t)
                                  ) {
                                    e.next = 8;
                                    break;
                                  }
                                  return e.abrupt("return", !1);
                                case 8:
                                  return (
                                    (o = m()),
                                    (a = h()),
                                    (e.next = 12),
                                    l.StockBridge.request(
                                      "https://wzq.tenpay.com/svr/user/user_service/check_user_tagrule",
                                      l.RequestTypeEnum.GET,
                                      i(
                                        {
                                          app: o,
                                          appid: "snp_refactor_gray",
                                          openid: t,
                                          fskey: u,
                                        },
                                        "zxg" === o ? { channel: 1 } : {}
                                      ),
                                      i(
                                        {},
                                        a ? { withoutCommonParams: !0 } : {}
                                      )
                                    )
                                  );
                                case 12:
                                  return (
                                    (c = e.sent),
                                    e.abrupt(
                                      "return",
                                      1 == +(null == c ? void 0 : c.status)
                                    )
                                  );
                                case 16:
                                  return (
                                    (e.prev = 16),
                                    (e.t0 = e.catch(0)),
                                    e.abrupt("return", !1)
                                  );
                                case 19:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 16]]
                        );
                      })
                    )),
                  w)
                );
              case 14:
              case "end":
                return t.stop();
            }
        }, t);
      })
    );
  }),
  (exports.newsRequest = k);
