var e = require("../../../@babel/runtime/helpers/defineProperty"),
  i = require("../../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../@babel/runtime/helpers/createClass"),
  n = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var s = Object.defineProperty,
  o = function (e, i, r) {
    return (
      (function (e, i, r) {
        i in e
          ? s(e, i, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r,
            })
          : (e[i] = r);
      })(e, "symbol" != n(i) ? i + "" : i, r),
      r
    );
  },
  a = require("../../../service/stat/mp-weixin.js");
exports.Timing = (function () {
  function n() {
    var e,
      i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    r(this, n),
      o(this, "_symbol", ""),
      o(this, "_isUsePerformance", !1),
      o(this, "_startTime", 0),
      o(this, "_consumingTime", 0),
      (this._symbol = i || this._generateUuid());
    var s = t.performance;
    s &&
      void 0 !==
        (null == (e = null == window ? void 0 : window.performance)
          ? void 0
          : e.now) &&
      (this._isUsePerformance = !0);
  }
  return (
    t(n, [
      {
        key: "getSymbol",
        value: function () {
          return this._symbol;
        },
      },
      {
        key: "start",
        value: function () {
          this._isUsePerformance
            ? (this._startTime = performance.now())
            : (this._startTime = +Date.now());
        },
      },
      {
        key: "stop",
        value: function () {
          var e;
          if (0 !== this._startTime)
            return (
              (e = this._isUsePerformance ? performance.now() : +Date.now()),
              (this._consumingTime = e - this._startTime),
              this._isUsePerformance &&
                (this._consumingTime = +this._consumingTime.toFixed(2)),
              (this._startTime = 0),
              this._consumingTime
            );
        },
      },
      {
        key: "stat",
        value: function (r, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if (!r || !t) throw new Error("无效的上报埋点或计时字段");
          0 !== this._consumingTime &&
            a.stat.click(
              r,
              void 0,
              void 0,
              i(i({}, n), {}, e({}, t, this._consumingTime))
            );
        },
      },
      {
        key: "_generateUuid",
        value: function () {
          return this.innerGenerateUuidForMp();
        },
      },
      {
        key: "innerGenerateUuidForH5",
        value: function () {
          var e = URL.createObjectURL(new Blob()),
            i = e.toString();
          return URL.revokeObjectURL(e), i.substring(i.lastIndexOf("/") + 1);
        },
      },
      {
        key: "innerGenerateUuidForMp",
        value: function () {
          for (var e = [], i = "0123456789abcdef", r = 0; r < 36; r++) {
            var t = Math.floor(16 * Math.random());
            e[r] = i.substring(t, t + 1);
          }
          e[14] = "4";
          var n = (3 & parseInt(e[19], 16)) | 8;
          return (
            (e[19] = i.substring(n, n + 1)),
            (e[8] = "-"),
            (e[13] = "-"),
            (e[18] = "-"),
            (e[23] = "-"),
            e.join("")
          );
        },
      },
    ]),
    n
  );
})();
