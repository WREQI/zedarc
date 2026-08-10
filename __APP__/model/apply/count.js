var e = require("../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../@babel/runtime/helpers/createClass"),
  t = require("../../@babel/runtime/helpers/typeof");
require("../../app.js");
var n = Object.defineProperty,
  s = function (e, i, s) {
    return (
      (function (e, i, t) {
        i in e
          ? n(e, i, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          : (e[i] = t);
      })(e, "symbol" != t(i) ? i + "" : i, s),
      s
    );
  };
exports.Count = (function () {
  function t(i) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60;
    e(this, t),
      s(this, "totalTime"),
      s(this, "onTimeChangeListener"),
      s(this, "mTimer", null),
      s(this, "mTime", 0),
      (this.totalTime = n),
      (this.onTimeChangeListener = i);
  }
  return (
    i(t, [
      {
        key: "tick",
        value: function (e) {
          var i = this;
          e && this.mTime >= 0
            ? (this.onTimeChangeListener(this.mTime),
              (this.mTime -= 1),
              (this.mTimer = setTimeout(function () {
                i.tick(!0);
              }, 1e3)))
            : (this.mTimer = null);
        },
      },
      {
        key: "setTotalTime",
        value: function (e) {
          this.totalTime = e;
        },
      },
      {
        key: "getTotalTime",
        value: function () {
          return this.totalTime;
        },
      },
      {
        key: "start",
        value: function () {
          (this.mTime = this.totalTime), this.clean(), this.tick(!0);
        },
      },
      {
        key: "continue",
        value: function (e) {
          (this.mTime = e), this.clean(), this.tick(!0);
        },
      },
      {
        key: "stop",
        value: function () {
          this.clean(), this.tick(!1);
        },
      },
      {
        key: "clear",
        value: function () {
          this.clean(), (this.mTime = 0), this.onTimeChangeListener(this.mTime);
        },
      },
      {
        key: "clean",
        value: function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.mTimer && (clearTimeout(this.mTimer), (this.mTimer = null)),
            e &&
              (this.onTimeChangeListener = function () {
                return null;
              });
        },
      },
    ]),
    t
  );
})();
