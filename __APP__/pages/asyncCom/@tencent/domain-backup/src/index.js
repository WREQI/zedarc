require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  a = require("../../../../../@babel/runtime/helpers/typeof"),
  i = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  l = Object.defineProperty,
  o = Object.defineProperties,
  u = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  f = Object.prototype.propertyIsEnumerable,
  p = function (e, r, n) {
    return r in e
      ? l(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  d = function (e, r) {
    for (var n in r || (r = {})) s.call(r, n) && p(e, n, r[n]);
    if (c) {
      var t,
        a = i(c(r));
      try {
        for (a.s(); !(t = a.n()).done; ) {
          n = t.value;
          f.call(r, n) && p(e, n, r[n]);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
    return e;
  },
  h = function (e, r) {
    return o(e, u(r));
  };
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var y = require("../../../../../common/vendor.js"),
  m = {
    FULL_URL: /^https?:\/\/.+/i,
    EXTRACT_DOMAIN: /^https?:\/\/([^/\\?#]+)/i,
    PARSE_URL: /^(https?):\/\/([^/]+)(.*)/i,
    HAS_PROTOCOL: /^https?:\/\//,
  };
function b(e) {
  if (!e || "string" != typeof e) return null;
  var r = e.match(m.EXTRACT_DOMAIN);
  return r ? r[1] : null;
}
function v(e) {
  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  if (!e) throw new Error("DomainBackupManager instance is required");
  var n = r || y.wx$1.request,
    t = function (r) {
      if (!r || "object" != a(r)) return n.call(y.wx$1, r);
      var t = r,
        l = t.url,
        o = t.success,
        u = t.fail,
        p = t.complete,
        h = (function (e, r) {
          var n = {};
          for (var t in e) s.call(e, t) && r.indexOf(t) < 0 && (n[t] = e[t]);
          if (null != e && c) {
            var a,
              l = i(c(e));
            try {
              for (l.s(); !(a = l.n()).done; ) {
                t = a.value;
                r.indexOf(t) < 0 && f.call(e, t) && (n[t] = e[t]);
              }
            } catch (e) {
              l.e(e);
            } finally {
              l.f();
            }
          }
          return n;
        })(t, ["url", "success", "fail", "complete"]),
        b = !1,
        v = null,
        g = function () {
          (b = !0), v && (clearTimeout(v), (v = null));
        },
        _ = function (r, n) {
          return function (t) {
            if ("function" == typeof r)
              try {
                r(t);
              } catch (r) {
                e._logError("".concat(n, " callback error"), r);
              }
          };
        };
      if (
        !l ||
        !(function (e) {
          return "string" == typeof e && m.HAS_PROTOCOL.test(e);
        })(l)
      )
        return n.call(y.wx$1, r);
      var k = l,
        E = e.shouldUseBackupDomain(k),
        O = E.shouldSwitch,
        w = E.url;
      O && (k = w);
      return (function r(t) {
        return n.call(
          y.wx$1,
          d(
            {
              url: t,
              success: function (r) {
                g(), e._clearRetryMark(t), _(o, "Success")(r);
              },
              fail: function (n) {
                var a;
                (a = n.errMsg) &&
                [
                  "net::ERR_NAME_NOT_RESOLVED",
                  "net::ERR_CONNECTION_REFUSED",
                  "net::ERR_CONNECTION_RESET",
                  "net::ERR_CONNECTION_ABORTED",
                  "net::ERR_TIMED_OUT",
                  "timeout",
                ].some(function (e) {
                  return a.includes(e);
                })
                  ? (function (n, t) {
                      if (!b) {
                        var a = e._findDomainConfig(n);
                        if (!a) return g(), void _(u, "Fail")(t);
                        var i = e._getDomainType(n);
                        "primary" === i && a.backup
                          ? e._isUserInGrayList()
                            ? (e._switchToBackup(n),
                              r(e._replaceDomain(n, a.backup)))
                            : (g(), _(u, "Fail")(t))
                          : "backup" === i
                          ? e._hasRetried(n)
                            ? (g(), _(u, "Fail")(t))
                            : (e._markRetried(n),
                              e._report("retry_attempt", {
                                url: n,
                                reason: "backup_failed",
                              }),
                              (v = setTimeout(function () {
                                b ||
                                  (e._switchToPrimary(n),
                                  r(e._replaceDomain(n, a.primary)));
                              }, e.retryDelay || 1e3)))
                          : (g(), _(u, "Fail")(t));
                      }
                    })(t, n)
                  : (g(), _(u, "Fail")(n));
              },
              complete: function (e) {
                g(), _(p, "Complete")(e);
              },
            },
            h
          )
        );
      })(k);
    };
  try {
    y.wx$1.request = t;
  } catch (e) {
    try {
      var l = Object.getOwnPropertyDescriptor(y.wx$1, "request");
      if (l && !l.configurable)
        throw new Error(
          "wx.request is not configurable and cannot be replaced"
        );
      Object.defineProperty(y.wx$1, "request", {
        value: t,
        writable: !0,
        configurable: !0,
        enumerable: (null == l ? void 0 : l.enumerable) || !0,
      });
    } catch (e) {
      throw new Error("Failed to replace wx.request: " + e.message);
    }
  }
  return { request: t };
}
var g = { appid: "act", schemaid: "domain_mapping" },
  _ = { appid: "act", schemaid: "exp_strategy" };
function k() {
  return (
    (e = this),
    null,
    (r = n().mark(function e() {
      var r, a, i, l, o, u, c, s, f, p, m, b, v;
      return n().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.prev = 0),
                  "zxg",
                  (e.next = 4),
                  Promise.all([
                    y.Wuji.get(g),
                    y.Wuji.get(
                      h(d({}, _), {
                        filter: encodeURIComponent("platform = ".concat("zxg")),
                      })
                    ),
                  ])
                );
              case 4:
                if (
                  ((r = e.sent),
                  (a = t(r, 2)),
                  (i = a[0]),
                  (l = a[1]),
                  200 == +i.code && 200 == +l.code)
                ) {
                  e.next = 10;
                  break;
                }
                throw new Error("Wuji config fetch failed");
              case 10:
                if (Array.isArray(i.data) && Array.isArray(l.data)) {
                  e.next = 12;
                  break;
                }
                throw new Error("Invalid data format");
              case 12:
                return (
                  (o = l.data || []),
                  (u = o.find(function (e) {
                    return e && "globalEnabled" === e.strategy_id;
                  })),
                  (c = !(!u || 0 === u.enable)),
                  (s = o.find(function (e) {
                    return e && "allUser" === e.strategy_id;
                  })),
                  (f = !(!s || 0 === s.enable)),
                  (p = o
                    .filter(function (e) {
                      return e && "openid" === e.strategy_id && 0 !== e.enable;
                    })
                    .map(function (e) {
                      return e.value;
                    })
                    .filter(function (e) {
                      return null != e;
                    })),
                  (m = o.find(function (e) {
                    return e && "grayEnabled" === e.strategy_id;
                  })),
                  (b = !(!m || 0 === m.enable)),
                  (v = (b && parseInt(m.value, 10)) || 0),
                  e.abrupt("return", {
                    domains: (i.data || [])
                      .map(function (e) {
                        return {
                          primary: (null == e ? void 0 : e.domain_com) || "",
                          backup: (null == e ? void 0 : e.domain_cn) || "",
                          enabled: 0 !== (null == e ? void 0 : e.enable),
                        };
                      })
                      .filter(function (e) {
                        return e.primary && e.backup;
                      }),
                    exp: {
                      globalEnabled: c,
                      allUserEnabled: f,
                      openidList: p || [],
                      grayEnabled: b,
                      grayRatio: v,
                    },
                  })
                );
              case 16:
                return (
                  (e.prev = 16),
                  (e.t0 = e.catch(0)),
                  e.abrupt("return", {
                    domains: [],
                    exp: {
                      globalEnabled: !1,
                      allUserEnabled: !1,
                      openidList: [],
                      grayEnabled: !1,
                      grayRatio: 0,
                    },
                  })
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
    })),
    new Promise(function (n, t) {
      var a = function (e) {
          try {
            l(r.next(e));
          } catch (e) {
            t(e);
          }
        },
        i = function (e) {
          try {
            l(r.throw(e));
          } catch (e) {
            t(e);
          }
        },
        l = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(a, i);
        };
      l((r = r.apply(e, null)).next());
    })
  );
  var e, r;
}
var E = (function () {
    function n() {
      var r =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      e(this, n),
        (this.domains = r),
        (this.expConfig = t),
        (this.userOpenid = null),
        (this.retriedDomains = new Set()),
        (this.retryDelay = a.retryDelay || 1e3),
        (this.reportCallback = null);
    }
    return (
      r(n, [
        {
          key: "setUserOpenid",
          value: function (e) {
            this.userOpenid = e;
          },
        },
        {
          key: "_isUserInGrayList",
          value: function () {
            var e = this.expConfig,
              r = e.globalEnabled,
              n = e.allUserEnabled,
              t = e.openidList,
              a = e.grayEnabled,
              i = e.grayRatio;
            return (
              !!r &&
              (!!n ||
                !(
                  !this.userOpenid ||
                  !(null == t ? void 0 : t.includes(this.userOpenid))
                ) ||
                (!!(a && i > 0 && this.userOpenid) &&
                  this._isInGrayRatio(this.userOpenid, i)))
            );
          },
        },
        {
          key: "_isInGrayRatio",
          value: function (e, r) {
            if (!e || r <= 0) return !1;
            if (r >= 100) return !0;
            for (var n = e.slice(-3), t = 0, a = 0; a < n.length; a++)
              t = (31 * t + n.charCodeAt(a)) % 100;
            return t < r;
          },
        },
        {
          key: "_findDomainConfig",
          value: function (e) {
            var r = (null == e ? void 0 : e.includes("://")) ? b(e) : e;
            return (
              (r &&
                this.domains.find(function (e) {
                  return e.primary === r || e.backup === r;
                })) ||
              null
            );
          },
        },
        {
          key: "_logError",
          value: function (e, r) {
            "undefined" != typeof console && console.warn;
          },
        },
        {
          key: "isEnabled",
          value: function (e) {
            var r = this._findDomainConfig(e);
            return !(
              !(null == r ? void 0 : r.enabled) || !this._isUserInGrayList()
            );
          },
        },
        {
          key: "_getDomainType",
          value: function (e) {
            var r = b(e);
            if (!r) return null;
            var n = this._findDomainConfig(r);
            return n
              ? n.primary === r
                ? "primary"
                : n.backup === r
                ? "backup"
                : null
              : null;
          },
        },
        {
          key: "_replaceDomain",
          value: function (e, r) {
            return (function (e, r) {
              if (!e || !r) return e;
              var n = (function (e) {
                if (!e || "string" != typeof e) return null;
                var r = e.match(m.PARSE_URL);
                return r ? { protocol: r[1], domain: r[2], path: r[3] } : null;
              })(e);
              return n
                ? "".concat(n.protocol, "://").concat(r).concat(n.path)
                : e;
            })(e, r);
          },
        },
        {
          key: "_switchToBackup",
          value: function (e) {
            var r = this._findDomainConfig(e);
            return (
              !!r &&
              (this.retriedDomains.delete(r.primary),
              this.retriedDomains.delete(r.backup),
              !0)
            );
          },
        },
        {
          key: "shouldUseBackupDomain",
          value: function (e) {
            var r = this._findDomainConfig(e);
            return (null == r ? void 0 : r.enabled) &&
              this._isUserInGrayList() &&
              "primary" === this._getDomainType(e) &&
              r.backup
              ? {
                  shouldSwitch: !0,
                  url: this._replaceDomain(e, r.backup),
                  config: r,
                }
              : { shouldSwitch: !1, url: e };
          },
        },
        {
          key: "_hasRetried",
          value: function (e) {
            var r = b(e);
            return !!r && this.retriedDomains.has(r);
          },
        },
        {
          key: "_markRetried",
          value: function (e) {
            var r = b(e);
            r && this.retriedDomains.add(r);
          },
        },
        {
          key: "_clearRetryMark",
          value: function (e) {
            var r = b(e);
            r && this.retriedDomains.delete(r);
          },
        },
        {
          key: "_switchToPrimary",
          value: function (e) {
            var r = this._findDomainConfig(e);
            return (
              !!r &&
              (this.retriedDomains.delete(r.primary),
              this.retriedDomains.delete(r.backup),
              !0)
            );
          },
        },
        {
          key: "setReportCallback",
          value: function (e) {
            this.reportCallback = e;
          },
        },
        {
          key: "_report",
          value: function (e, r) {
            if ("function" == typeof this.reportCallback)
              try {
                this.reportCallback(e, h(d({}, r), { timestamp: Date.now() }));
              } catch (e) {
                this._logError("Report callback error", e);
              }
          },
        },
      ]),
      n
    );
  })(),
  O = null,
  w = !1,
  D = null,
  R = null;
(exports.DomainBackupManager = E),
  (exports.initDomainBackup = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      r = e.reportCallback,
      n = void 0 === r ? null : r,
      t = e.retryDelay,
      i = void 0 === t ? 1e3 : t;
    return w
      ? Promise.resolve()
      : R ||
          (R = k()
            .then(function (e) {
              var r = e.domains,
                t = e.exp;
              try {
                if ("function" == typeof getApp) {
                  var l = getApp();
                  l &&
                    "object" == a(l) &&
                    (l.domainBackupGlobalEnabled = t.globalEnabled);
                }
              } catch (e) {}
              t.globalEnabled &&
                (D || (D = y.wx$1.request),
                (O = (function (e, r, n) {
                  return new E(e, r, n);
                })(r, t, { retryDelay: i })),
                n && O.setReportCallback(n),
                v(O, D),
                (w = !0));
            })
            .catch(function (e) {
              throw ((w = !1), (O = null), (R = null), e);
            }));
  }),
  (exports.setUserOpenid = function (e) {
    return (
      O
        ? Promise.resolve(O)
        : R
        ? R.then(function () {
            return O || null;
          })
        : Promise.resolve(null)
    ).then(function (r) {
      r && r.setUserOpenid(e);
    });
  });
