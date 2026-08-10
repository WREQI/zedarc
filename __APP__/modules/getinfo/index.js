var e = require("../../@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.GetInfoAdapter = void 0);
var t,
  n = e(require("../plugins/base/index")),
  r = e(require("./live/index")),
  o = e(require("./vod/index")),
  i = require("../utils/index"),
  u =
    ((t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        })(e, n);
    }),
    function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function r() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r()));
    }),
  c = function (e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function u(e) {
        try {
          a(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function c(e) {
        try {
          a(r.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function a(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(u, c);
      }
      a((r = r.apply(e, t || [])).next());
    });
  },
  a = function (e, t) {
    var n,
      r,
      o,
      i,
      u = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: c(0), throw: c(1), return: c(2) }),
      "function" == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function c(c) {
      return function (a) {
        return (function (c) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; i && ((i = 0), c[0] && (u = 0)), u; )
            try {
              if (
                ((n = 1),
                r &&
                  (o =
                    2 & c[0]
                      ? r.return
                      : c[0]
                      ? r.throw || ((o = r.return) && o.call(r), 0)
                      : r.next) &&
                  !(o = o.call(r, c[1])).done)
              )
                return o;
              switch (((r = 0), o && (c = [2 & c[0], o.value]), c[0])) {
                case 0:
                case 1:
                  o = c;
                  break;
                case 4:
                  return u.label++, { value: c[1], done: !1 };
                case 5:
                  u.label++, (r = c[1]), (c = [0]);
                  continue;
                case 7:
                  (c = u.ops.pop()), u.trys.pop();
                  continue;
                default:
                  if (
                    !((o = u.trys),
                    (o = o.length > 0 && o[o.length - 1]) ||
                      (6 !== c[0] && 2 !== c[0]))
                  ) {
                    u = 0;
                    continue;
                  }
                  if (3 === c[0] && (!o || (c[1] > o[0] && c[1] < o[3]))) {
                    u.label = c[1];
                    break;
                  }
                  if (6 === c[0] && u.label < o[1]) {
                    (u.label = o[1]), (o = c);
                    break;
                  }
                  if (o && u.label < o[2]) {
                    (u.label = o[2]), u.ops.push(c);
                    break;
                  }
                  o[2] && u.ops.pop(), u.trys.pop();
                  continue;
              }
              c = t.call(e, u);
            } catch (e) {
              (c = [6, e]), (r = 0);
            } finally {
              n = o = 0;
            }
          if (5 & c[0]) throw c[1];
          return { value: c[0] ? c[1] : void 0, done: !0 };
        })([c, a]);
      };
    }
  };
exports.GetInfoAdapter = (function (e) {
  function t(t) {
    return e.call(this, t) || this;
  }
  return (
    u(t, e),
    (t.prototype.destroy = function () {}),
    (t.prototype.request = function (e) {
      return c(this, void 0, void 0, function () {
        var t;
        return a(this, function (n) {
          return (
            (t = "vod" === this.player.mode ? o.default : r.default),
            this.cancelToken && this.cancelToken.cancel(),
            (this.cancelToken = (0, i.createCancelToken)()),
            [2, t(e, this.cancelToken)]
          );
        });
      });
    }),
    t
  );
})(n.default);
