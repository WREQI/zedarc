Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default = void 0),
  require("../../@babel/runtime/helpers/Objectentries");
var t,
  e,
  r,
  o,
  n,
  i,
  s,
  a = require("./enum"),
  u = function () {
    return (u =
      Object.assign ||
      function (t) {
        for (var e, r = 1, o = arguments.length; r < o; r++)
          for (var n in (e = arguments[r]))
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t;
      }).apply(this, arguments);
  },
  h = function (t, e, r, o) {
    return new (r || (r = Promise))(function (n, i) {
      function s(t) {
        try {
          u(o.next(t));
        } catch (t) {
          i(t);
        }
      }
      function a(t) {
        try {
          u(o.throw(t));
        } catch (t) {
          i(t);
        }
      }
      function u(t) {
        var e;
        t.done
          ? n(t.value)
          : ((e = t.value),
            e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                })).then(s, a);
      }
      u((o = o.apply(t, e || [])).next());
    });
  },
  E = function (t, e) {
    var r,
      o,
      n,
      i,
      s = {
        label: 0,
        sent: function () {
          if (1 & n[0]) throw n[1];
          return n[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: a(0), throw: a(1), return: a(2) }),
      "function" == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function a(a) {
      return function (u) {
        return (function (a) {
          if (r) throw new TypeError("Generator is already executing.");
          for (; i && ((i = 0), a[0] && (s = 0)), s; )
            try {
              if (
                ((r = 1),
                o &&
                  (n =
                    2 & a[0]
                      ? o.return
                      : a[0]
                      ? o.throw || ((n = o.return) && n.call(o), 0)
                      : o.next) &&
                  !(n = n.call(o, a[1])).done)
              )
                return n;
              switch (((o = 0), n && (a = [2 & a[0], n.value]), a[0])) {
                case 0:
                case 1:
                  n = a;
                  break;
                case 4:
                  return s.label++, { value: a[1], done: !1 };
                case 5:
                  s.label++, (o = a[1]), (a = [0]);
                  continue;
                case 7:
                  (a = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (
                    !((n = s.trys),
                    (n = n.length > 0 && n[n.length - 1]) ||
                      (6 !== a[0] && 2 !== a[0]))
                  ) {
                    s = 0;
                    continue;
                  }
                  if (3 === a[0] && (!n || (a[1] > n[0] && a[1] < n[3]))) {
                    s.label = a[1];
                    break;
                  }
                  if (6 === a[0] && s.label < n[1]) {
                    (s.label = n[1]), (n = a);
                    break;
                  }
                  if (n && s.label < n[2]) {
                    (s.label = n[2]), s.ops.push(a);
                    break;
                  }
                  n[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              a = e.call(t, s);
            } catch (t) {
              (a = [6, t]), (o = 0);
            } finally {
              r = n = 0;
            }
          if (5 & a[0]) throw a[1];
          return { value: a[0] ? a[1] : void 0, done: !0 };
        })([a, u]);
      };
    }
  },
  R = (function () {
    function R() {
      (this[t] = 0),
        (this[e] = !1),
        (this[r] = !1),
        (this[o] = {}),
        (this[n] = !1),
        (this[i] = !1),
        (this[s] = !1),
        (this.network = {
          networkType: "error",
          signalStrength: 0,
          hasSystemProxy: !1,
        }),
        (this.isPreload = !1),
        (this.data = {}),
        this.setNetwork();
    }
    return (
      (R.prototype.collectReportTime = function (t) {
        this.data = u(u({}, this.data), t);
      }),
      (R.prototype.setReportParam = function (t) {
        var e = this;
        Object.entries(t).forEach(function (t) {
          var r = t[0],
            o = t[1];
          e[r] = o;
        });
      }),
      (R.prototype.getReportData = function () {
        return {
          reportCount: this[a.PERFORMANCE_KEY.reportCount],
          hasHidePage: this[a.PERFORMANCE_KEY.hasHidePage],
          hasVideoNodeRetry: this[a.PERFORMANCE_KEY.hasVideoNodeRetry],
          retryReason: this[a.PERFORMANCE_KEY.retryReason],
          isAdPlayError: this[a.PERFORMANCE_KEY.isAdPlayError],
          hasAdRequestRetry: this[a.PERFORMANCE_KEY.hasAdRequestRetry],
          hasVideoRequestRetry: this[a.PERFORMANCE_KEY.hasVideoRequestRetry],
          isPreload: this.isPreload,
          network: this.network,
          data: this.data,
        };
      }),
      (R.prototype.restore = function () {
        var t = this;
        (this.data = {}),
          [
            a.PERFORMANCE_KEY.hasHidePage,
            a.PERFORMANCE_KEY.hasVideoNodeRetry,
            a.PERFORMANCE_KEY.isAdPlayError,
            a.PERFORMANCE_KEY.hasAdRequestRetry,
            a.PERFORMANCE_KEY.hasVideoRequestRetry,
          ].forEach(function (e) {
            t[e] = !1;
          }),
          (this[a.PERFORMANCE_KEY.retryReason] = {}),
          (this.isPreload = !1);
      }),
      (R.prototype.setNetwork = function () {
        return h(this, void 0, void 0, function () {
          var t = this;
          return E(this, function (e) {
            return (
              wx.getNetworkType({
                success: function (e) {
                  var r = e.networkType,
                    o = e.signalStrength,
                    n = e.hasSystemProxy;
                  t.network = {
                    networkType: r,
                    signalStrength: o,
                    hasSystemProxy: n,
                  };
                },
              }),
              [2]
            );
          });
        });
      }),
      R
    );
  })();
exports.default = R;
(t = a.PERFORMANCE_KEY.reportCount),
  (e = a.PERFORMANCE_KEY.hasHidePage),
  (r = a.PERFORMANCE_KEY.hasVideoNodeRetry),
  (o = a.PERFORMANCE_KEY.retryReason),
  (n = a.PERFORMANCE_KEY.isAdPlayError),
  (i = a.PERFORMANCE_KEY.hasAdRequestRetry),
  (s = a.PERFORMANCE_KEY.hasVideoRequestRetry);
