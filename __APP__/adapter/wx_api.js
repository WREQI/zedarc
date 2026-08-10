require("../@babel/runtime/helpers/Arrayincludes");
var e = require("../common/vendor.js"),
  t = require("../service/aegis/platform/not-wujie.js"),
  r = {},
  n = ["mp-broker://cookies"];
function c(e, t) {
  try {
    r.__keys__ || (r.__keys__ = []);
    var c = r.__keys__.findIndex(function (t) {
      return t.name === e;
    });
    if (void 0 !== r[e])
      return null === t
        ? (delete r[e], void r.__keys__.splice(c, 1))
        : ((r[e] = t), void (r.__keys__[c].time = Date.now()));
    if (r.__keys__.length >= 20) {
      var o = r.__keys__
          .filter(function (e) {
            return !n.includes(e.name);
          })
          .sort(function (e, t) {
            return e.time - t.time;
          })[0].name,
        a = r.__keys__.findIndex(function (e) {
          return e.name === o;
        });
      r.__keys__.splice(a, 1), delete r[o];
    }
    r.__keys__.push({ name: e, time: Date.now() }), (r[e] = t);
  } catch (e) {}
}
!(function () {
  var n,
    o,
    a = {};
  try {
    var i = e.wx$1.getSystemInfoSync();
    if (((a = i), "ohos" === i.platform && e.gt(i.version, "1.0.2"))) {
      var l = e.wx$1.setStorageSync,
        u = e.wx$1.getStorageSync,
        s = e.wx$1.setStorage,
        y = e.wx$1.getStorage,
        _ = e.wx$1.removeStorageSync,
        f = e.wx$1.clearStorageSync;
      Object.defineProperty(e.wx$1, "setStorageSync", {
        value: function (t, r) {
          try {
            c(t, r), l.call(e.wx$1, t, r);
          } catch (e) {}
        },
      }),
        Object.defineProperty(e.wx$1, "getStorageSync", {
          value: function (t) {
            try {
              return u.call(e.wx$1, t) || r[t];
            } catch (e) {
              return r[t];
            }
          },
        }),
        Object.defineProperty(e.wx$1, "setStorage", {
          value: function (t) {
            try {
              c(t.key, t.data), s.call(e.wx$1, t);
            } catch (e) {
              "function" == typeof t.success && t.success(),
                "function" == typeof t.complete && t.complete();
            }
          },
        }),
        Object.defineProperty(e.wx$1, "getStorage", {
          value: function (t) {
            try {
              y.call(e.wx$1, t);
            } catch (e) {
              "function" == typeof t.success && t.success({ data: r[t.key] }),
                "function" == typeof t.complete &&
                  t.complete({ data: r[t.key] });
            }
          },
        }),
        Object.defineProperty(e.wx$1, "removeStorageSync", {
          value: function (t) {
            try {
              c(t, null), _.call(e.wx$1, t);
            } catch (e) {}
          },
        }),
        Object.defineProperty(e.wx$1, "clearStorageSync", {
          value: function () {
            try {
              (r = {}), f.call(e.wx$1);
            } catch (e) {}
          },
        });
    }
  } catch (_) {
    null == (o = null == (n = t.aegisReporter) ? void 0 : n.reportEvent) ||
      o.call(n, "WX-PATCH-API-ERROR", { ext4: _, ext5: a });
  }
})();
