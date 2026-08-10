var r = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../../@babel/runtime/helpers/slicedToArray"),
  n = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var a = require("../../../common/vendor.js"),
  u = require("../../../utils/getPlatform.js"),
  i = "user_behavior_trade_tags",
  o = "mp-broker://operate-adv-behavior-tags",
  c = function (r) {
    if (!r || "object" != n(r)) return !1;
    var e = r;
    return (
      "string" == typeof e.key &&
      "" !== e.key &&
      "number" == typeof e.ts &&
      Number.isFinite(e.ts)
    );
  },
  l = function (r) {
    return r
      .slice(0, 3)
      .map(function (r) {
        var e = r.key,
          t = r.ts;
        return "".concat(e, ":").concat(t);
      })
      .join(",");
  },
  s = function (r) {
    return r
      .split(",")
      .map(function (r) {
        var e = r.split(":"),
          n = t(e, 2),
          a = n[0],
          u = void 0 === a ? "" : a,
          i = n[1],
          o = void 0 === i ? "" : i;
        return { key: u.trim(), ts: Number(o) };
      })
      .filter(c);
  },
  p = function r(e) {
    if (Array.isArray(e))
      return "string" == typeof e[0] ? r(e[0]) : l(e.filter(c));
    if ("string" != typeof e || "" === e) return "";
    var t = (function (r) {
        try {
          return decodeURIComponent(r);
        } catch (e) {
          return r;
        }
      })(e),
      n = (function (r) {
        try {
          return JSON.parse(r);
        } catch (r) {
          return null;
        }
      })(t);
    return Array.isArray(n) ? l(n.filter(c)) : l(s(t));
  },
  v = function () {
    return !!u.getPlatform().isZxg;
  },
  f = function (r) {
    return (
      v() &&
      "function" == typeof (null == r ? void 0 : r.getAppDiskStorage) &&
      "function" == typeof (null == r ? void 0 : r.setAppDiskStorage)
    );
  },
  d = (function () {
    var t = e(
      r().mark(function t(n) {
        var a, u, o, c;
        return r().wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  if (f(n)) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", "");
                case 2:
                  return (
                    (t.prev = 2),
                    (t.next = 5),
                    null == (a = null == n ? void 0 : n.getAppDiskStorage)
                      ? void 0
                      : a.call(n, i)
                  );
                case 5:
                  if (
                    ((u = t.sent),
                    (o = (null != u ? u : {}).data),
                    (c = void 0 === o ? "" : o),
                    (t.t0 = c),
                    !t.t0)
                  ) {
                    t.next = 13;
                    break;
                  }
                  return (
                    (t.next = 13),
                    (function () {
                      var t = e(
                        r().mark(function e(t, n) {
                          var a;
                          return r().wrap(
                            function (r) {
                              for (;;)
                                switch ((r.prev = r.next)) {
                                  case 0:
                                    if (!f(t)) {
                                      r.next = 8;
                                      break;
                                    }
                                    return (
                                      (r.prev = 1),
                                      (r.next = 4),
                                      null ==
                                      (a =
                                        null == t
                                          ? void 0
                                          : t.setAppDiskStorage)
                                        ? void 0
                                        : a.call(t, i, n)
                                    );
                                  case 4:
                                    r.next = 8;
                                    break;
                                  case 6:
                                    (r.prev = 6), (r.t0 = r.catch(1));
                                  case 8:
                                  case "end":
                                    return r.stop();
                                }
                            },
                            e,
                            null,
                            [[1, 6]]
                          );
                        })
                      );
                      return function (r, e) {
                        return t.apply(this, arguments);
                      };
                    })()(n, "")
                  );
                case 13:
                  return t.abrupt("return", c);
                case 16:
                  return (
                    (t.prev = 16), (t.t1 = t.catch(2)), t.abrupt("return", "")
                  );
                case 19:
                case "end":
                  return t.stop();
              }
          },
          t,
          null,
          [[2, 16]]
        );
      })
    );
    return function (r) {
      return t.apply(this, arguments);
    };
  })();
(exports.buildBehaviorLabelRecords = function (r) {
  return s(r).map(function (r) {
    return { label: r.key, event_time: r.ts };
  });
}),
  (exports.cacheBehaviorTradeTags = function (r) {
    try {
      a.index.setStorageSync(o, r);
    } catch (r) {}
  }),
  (exports.getBehaviorTradeTagsParam = (function () {
    var t = e(
      r().mark(function e(t, n) {
        var u, o;
        return r().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                if (!v()) {
                  r.next = 6;
                  break;
                }
                return (r.t0 = p), (r.next = 4), d(n);
              case 4:
                return (r.t1 = r.sent), r.abrupt("return", (0, r.t0)(r.t1));
              case 6:
                if (!(u = p(null == t ? void 0 : t[i]))) {
                  r.next = 9;
                  break;
                }
                return r.abrupt("return", u);
              case 9:
                return (
                  (o = p("")),
                  r.abrupt(
                    "return",
                    o ||
                      p(
                        (function () {
                          var r, e, t, n, u, o;
                          try {
                            var c =
                                null ==
                                (e =
                                  null ==
                                  (r =
                                    null == requireMiniProgram
                                      ? void 0
                                      : requireMiniProgram())
                                    ? void 0
                                    : r.main2Plugin)
                                  ? void 0
                                  : e.call(r),
                              l =
                                (null ==
                                (t =
                                  null == c
                                    ? void 0
                                    : c.consumeBehaviorTradeTags)
                                  ? void 0
                                  : t.call(c)) ||
                                (null ==
                                (n =
                                  null == c ? void 0 : c.getBehaviorTradeTags)
                                  ? void 0
                                  : n.call(c)) ||
                                (null == (u = null == c ? void 0 : c.mainMpWx)
                                  ? void 0
                                  : u.call(c, "getStorageSync", i));
                            if (l)
                              return (
                                null == (o = null == c ? void 0 : c.mainMpWx) ||
                                  o.call(c, "removeStorageSync", i),
                                l
                              );
                          } catch (r) {}
                          try {
                            var s = a.index.getStorageSync(i);
                            return s && a.index.removeStorageSync(i), s;
                          } catch (r) {
                            return "";
                          }
                        })()
                      )
                  )
                );
              case 11:
              case "end":
                return r.stop();
            }
        }, e);
      })
    );
    return function (r, e) {
      return t.apply(this, arguments);
    };
  })()),
  (exports.hasBehaviorTradeTagsChanged = function (r) {
    try {
      return a.index.getStorageSync(o) !== r;
    } catch (r) {
      return !0;
    }
  });
