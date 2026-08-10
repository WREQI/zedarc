var r = require("../../@babel/runtime/helpers/defineProperty"),
  e = require("../../@babel/runtime/helpers/typeof");
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var t = require("../../common/vendor.js"),
  n = "user_behavior_trade_tags",
  a = null,
  o = null,
  u = function () {
    return new Map();
  },
  i = function () {
    return (
      o ||
      (o = (function () {
        try {
          if (a) return Promise.resolve(a);
          var r = (null == (e = t.Wuji) ? void 0 : e.default) || t.Wuji;
          return r && "function" == typeof r.get
            ? r
                .get({
                  appid: "trade",
                  schemaid: "user_behavior_tag_mapping_new",
                  size: "total",
                })
                .then(function (r) {
                  var e = Array.isArray(null == r ? void 0 : r.data)
                      ? r.data
                      : [],
                    t = u();
                  return (
                    e.forEach(function (r) {
                      var e = null == r ? void 0 : r.mta_event_name,
                        n = null == r ? void 0 : r.url_param_key;
                      if (e && n) {
                        var a = String(e).toLowerCase(),
                          o = {
                            matchKey: (null == r ? void 0 : r.key) || "",
                            matchValue: null == r ? void 0 : r.value,
                            urlParamKey: String(n),
                          };
                        t.has(a) || t.set(a, []), t.get(a).push(o);
                      }
                    }),
                    (a = t)
                  );
                })
                .catch(function (r) {
                  return (
                    (function (r, e) {
                      try {
                        t.mpReporter.reportEvent(
                          "MONITOR-USER-BEHAVIOR-TAG-WUJI-FAIL",
                          {
                            ext3:
                              (null == e ? void 0 : e.message) ||
                              String(e || ""),
                          }
                        );
                      } catch (r) {}
                    })(0, r),
                    a || u()
                  );
                })
            : Promise.resolve(u());
        } catch (r) {
          return Promise.resolve(a || u());
        }
        var e;
      })()
        .then(
          function (r) {
            return r || u();
          },
          function () {
            return a || u();
          }
        )
        .then(function (r) {
          return (o = null), r;
        }))
    );
  },
  c = function (r) {
    return (
      r &&
      "object" == e(r) &&
      "string" == typeof r.key &&
      "" !== r.key &&
      "number" == typeof r.ts
    );
  },
  l = function () {
    try {
      return (function (r) {
        if (Array.isArray(r)) return r;
        if ("string" == typeof r && r)
          try {
            var e = JSON.parse(r);
            return Array.isArray(e) ? e : [];
          } catch (r) {
            return [];
          }
        return [];
      })(t.wx$1.getStorageSync(n)).filter(c);
    } catch (r) {
      return [];
    }
  },
  f = function (r, e) {
    var a = l().filter(function (e) {
      return (null == e ? void 0 : e.key) !== r;
    });
    a.push({ key: r, ts: e }),
      (function (r) {
        try {
          t.wx$1.setStorageSync(n, r);
        } catch (r) {}
      })(a.slice(-3));
  };
i(),
  (exports.consumeBehaviorTradeTagsParams = function () {
    return Promise.resolve().then(function () {
      var e = l();
      !(function () {
        try {
          t.wx$1.removeStorageSync(n);
        } catch (r) {}
      })();
      var a = e
        .slice(0, 3)
        .map(function (r) {
          var e = r.key,
            t = r.ts;
          return "".concat(e, ":").concat(t);
        })
        .join(",");
      return a ? r({}, n, a) : {};
    });
  }),
  (exports.recordBehaviorTag = function (r, e) {
    if (r) {
      var t = Date.now();
      i()
        .then(function (n) {
          !(function (r, e, t, n) {
            var a = null == e ? void 0 : e.get(String(r).toLowerCase());
            if (a && a.length) {
              var o = n || {};
              a.forEach(function (r) {
                if (r.matchKey) {
                  var e = o[r.matchKey];
                  void 0 !== e &&
                    String(e) === String(r.matchValue) &&
                    f(r.urlParamKey, t);
                } else f(r.urlParamKey, t);
              });
            }
          })(r, n, t, e);
        })
        .catch(function () {});
    }
  });
