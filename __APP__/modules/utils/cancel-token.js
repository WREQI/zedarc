var e = require("../../@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default = function () {
    return new i();
  });
var r,
  t = require("../../enums"),
  o = e(require("../../libs/simple-defer")),
  n = e(require("../error/index")),
  u =
    ((r = function (e, t) {
      return (r =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, r) {
            e.__proto__ = r;
          }) ||
        function (e, r) {
          for (var t in r)
            Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
        })(e, t);
    }),
    function (e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Class extends value " + String(t) + " is not a constructor or null"
        );
      function o() {
        this.constructor = e;
      }
      r(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((o.prototype = t.prototype), new o()));
    }),
  i = (function (e) {
    function r() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return (
      u(r, e),
      (r.prototype.cancel = function () {
        this.resolve(n.default.pluginError(t.ErrorCode.REQUEST_ABORT));
      }),
      r
    );
  })(o.default);
