var e = require("../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../@babel/runtime/helpers/createClass"),
  t = require("../../@babel/runtime/helpers/typeof");
require("../../app.js");
var c = Object.defineProperty;
require("../../common/vendor.js");
var r = require("./cancelTokenConst.js"),
  a = new ((function () {
    function a() {
      e(this, a),
        (function (e, n, r) {
          (function (e, n, t) {
            n in e
              ? c(e, n, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (e[n] = t);
          })(e, "symbol" != t(n) ? n + "" : n, r);
        })(this, "cancelTokens", new Map());
    }
    return (
      n(a, [
        {
          key: "generateRequestId",
          value: function (e, n) {
            return ""
              .concat(e, "_")
              .concat(Date.now(), "_")
              .concat(Math.random().toString(36).substring(2, 9), "_")
              .concat(n ? this.hashObject(n) : "");
          },
        },
        {
          key: "hashObject",
          value: function (e) {
            try {
              for (var n = JSON.stringify(e), t = 0, c = 0; c < n.length; c++)
                (t = (t << 5) - t + n.charCodeAt(c)), (t |= 0);
              return Math.abs(t).toString(36);
            } catch (e) {
              return "";
            }
          },
        },
        {
          key: "addCancelToken",
          value: function (e, n, t, c) {
            try {
              this.cleanupExpiredTokens();
              var r = this.generateRequestId(e, c);
              return (
                this.cancelTokens.set(r, {
                  id: r,
                  url: e,
                  cancelTokenSource: n,
                  timestamp: Date.now(),
                  params: c,
                  cancelTokenType: t,
                }),
                r
              );
            } catch (e) {
              return "";
            }
          },
        },
        {
          key: "removeCancelToken",
          value: function (e) {
            e && this.cancelTokens.delete(e);
          },
        },
        {
          key: "cancelAllRequests",
          value: function (e) {
            var n = e || "Requests cancelled due to route change",
              t = this.cancelTokens.size;
            return (
              this.cancelTokens.forEach(function (e) {
                var t;
                e.cancelTokenType === r.CancelTokenType.cancel
                  ? e.cancelTokenSource.cancel(n)
                  : (null == (t = null == e ? void 0 : e.cancelTokenSource)
                      ? void 0
                      : t.token) &&
                    (e.cancelTokenSource.token._request_uncomplete_whenroute_mark =
                      !0);
              }),
              this.cancelTokens.clear(),
              t
            );
          },
        },
        {
          key: "cleanupExpiredTokens",
          value: function () {
            var e = this,
              n = Date.now(),
              t = 0;
            return (
              this.cancelTokens.forEach(function (c, r) {
                n - c.timestamp > 12e3 && (e.cancelTokens.delete(r), t++);
              }),
              t
            );
          },
        },
      ]),
      a
    );
  })())();
(exports.cancelTokenManager = a),
  (exports.isRequestUnCompleteWhenRoute = function (e) {
    return null == e ? void 0 : e._request_uncomplete_whenroute_mark;
  }),
  (exports.removeUnCompleteFlag = function (e) {
    e &&
      e._request_uncomplete_whenroute_mark &&
      delete e._request_uncomplete_whenroute_mark;
  });
