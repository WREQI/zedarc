var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  u = Object.defineProperty,
  c = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  p = function (e, r, t) {
    return r in e
      ? u(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t);
  },
  l = function (e, r) {
    for (var t in r || (r = {})) i.call(r, t) && p(e, t, r[t]);
    if (a) {
      var u,
        c = n(a(r));
      try {
        for (c.s(); !(u = c.n()).done; ) {
          t = u.value;
          s.call(r, t) && p(e, t, r[t]);
        }
      } catch (e) {
        c.e(e);
      } finally {
        c.f();
      }
    }
    return e;
  },
  f = function (e, r, t) {
    return new Promise(function (n, u) {
      var c = function (e) {
          try {
            a(t.next(e));
          } catch (e) {
            u(e);
          }
        },
        o = function (e) {
          try {
            a(t.throw(e));
          } catch (e) {
            u(e);
          }
        },
        a = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(c, o);
        };
      a((t = t.apply(e, r)).next());
    });
  },
  h = require("../../../../../../common/vendor.js"),
  v = (function (e) {
    return (e[(e.SHARE_TYPE_HOTISSUE = 1)] = "SHARE_TYPE_HOTISSUE"), e;
  })(v || {}),
  d = (function (e) {
    return (
      (e[(e.QUERY_RESULT = 1)] = "QUERY_RESULT"),
      (e[(e.UNQUERY_RESULT = 0)] = "UNQUERY_RESULT"),
      e
    );
  })(d || {}),
  y = "https://".concat(
    h.StockBridge.ENV !== h.EnvTypeEnum.MP ? location.host : "wzq.tenpay.com"
  ),
  m = { headers: { "Content-Type": "application/json" }, forceCallback: !0 },
  b = new ((function () {
    function u() {
      r(this, u);
    }
    return (
      t(u, [
        {
          key: "queryCode",
          value: function (r) {
            return f(
              this,
              null,
              e().mark(function t() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt(
                          "return",
                          h.StockBridge.request(
                            y + "/svr/user/user_service/generate_share_code",
                            h.RequestTypeEnum.POST,
                            l({}, r),
                            m
                          )
                            .then(function (e) {
                              return e;
                            })
                            .catch(function (e) {
                              return e;
                            })
                        );
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            );
          },
        },
        {
          key: "reportCode",
          value: function (r) {
            return f(
              this,
              null,
              e().mark(function t() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt(
                          "return",
                          h.StockBridge.request(
                            y + "/svr/user/user_service/report_share_click",
                            h.RequestTypeEnum.POST,
                            l({}, r),
                            m
                          )
                            .then(function (e) {
                              return e;
                            })
                            .catch(function (e) {
                              return e;
                            })
                        );
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            );
          },
        },
        {
          key: "customRequest",
          value: function (r, t) {
            return f(
              this,
              null,
              e().mark(function n() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt(
                          "return",
                          h.StockBridge.request(
                            y + r,
                            h.RequestTypeEnum.POST,
                            l({}, t),
                            m
                          )
                            .then(function (e) {
                              return e;
                            })
                            .catch(function (e) {
                              return e;
                            })
                        );
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, n);
              })
            );
          },
        },
        {
          key: "getInviteCode",
          value: function (r, t) {
            return f(
              this,
              null,
              e().mark(function n() {
                var u;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), this.queryCode(r);
                        case 3:
                          return (
                            (u = e.sent),
                            e.abrupt(
                              "return",
                              ("function" == typeof t && t(u), u.share_code)
                            )
                          );
                        case 7:
                          return (
                            (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            e.abrupt(
                              "return",
                              ("function" == typeof t && t({}), "")
                            )
                          );
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  n,
                  this,
                  [[0, 7]]
                );
              })
            );
          },
        },
        {
          key: "reportInviteCode",
          value: function () {
            return f(this, arguments, function () {
              var r = this,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              return e().mark(function n() {
                var u, a, i, s, p;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((a = ""),
                            h.StockBridge.ENV !== h.EnvTypeEnum.MP
                              ? ((i = l(
                                  l(
                                    {},
                                    h._default$1.param.parse(location.hash)
                                  ),
                                  h._default$1.param.parse(location.search)
                                )),
                                (a = (null == i ? void 0 : i.share_code) || ""))
                              : ((s = h.StockBridge.getCurRouteInfo()),
                                (a =
                                  (null == (u = null == s ? void 0 : s.query)
                                    ? void 0
                                    : u.share_code) || "")),
                            !a)
                          ) {
                            e.next = 10;
                            break;
                          }
                          return (
                            (e.prev = 3),
                            (e.next = 6),
                            r.reportCode(
                              ((p = l({}, t)), c(p, o({ share_code: a })))
                            )
                          );
                        case 6:
                          e.next = 10;
                          break;
                        case 8:
                          (e.prev = 8), (e.t0 = e.catch(3));
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  n,
                  null,
                  [[3, 8]]
                );
              })();
            });
          },
        },
        {
          key: "customBehavior",
          value: function (r, t) {
            return f(
              this,
              null,
              e().mark(function u() {
                var c, o, p;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (c = r).api,
                            (o = (function (e, r) {
                              var t = {};
                              for (var u in e)
                                i.call(e, u) &&
                                  r.indexOf(u) < 0 &&
                                  (t[u] = e[u]);
                              if (null != e && a) {
                                var c,
                                  o = n(a(e));
                                try {
                                  for (o.s(); !(c = o.n()).done; ) {
                                    u = c.value;
                                    r.indexOf(u) < 0 &&
                                      s.call(e, u) &&
                                      (t[u] = e[u]);
                                  }
                                } catch (e) {
                                  o.e(e);
                                } finally {
                                  o.f();
                                }
                              }
                              return t;
                            })(c, ["api"])),
                            (e.next = 6),
                            this.customRequest(r.api, o)
                          );
                        case 6:
                          (p = e.sent) && "function" == typeof t && t && t(p),
                            (e.next = 13);
                          break;
                        case 10:
                          (e.prev = 10),
                            (e.t0 = e.catch(0)),
                            "function" == typeof t && t("");
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  u,
                  this,
                  [[0, 10]]
                );
              })
            );
          },
        },
      ]),
      u
    );
  })())();
(exports.QUERYRESULT = d), (exports.SHARETYPE = v), (exports.ShareInvite = b);
