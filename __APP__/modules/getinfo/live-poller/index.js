var e =
  require("../../../@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.LiveStatus = exports.LivePoller = void 0);
var t,
  n = require("../../utils/index"),
  r = e(require("../../utils/cancel-token")),
  o = require("../../../behaviors/logger"),
  l = e(require("../../utils/gen-id")),
  i = function () {
    return (i =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var o in (t = arguments[n]))
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      }).apply(this, arguments);
  },
  a = function (e, t, n, r) {
    return new (n || (n = Promise))(function (o, l) {
      function i(e) {
        try {
          u(r.next(e));
        } catch (e) {
          l(e);
        }
      }
      function a(e) {
        try {
          u(r.throw(e));
        } catch (e) {
          l(e);
        }
      }
      function u(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(i, a);
      }
      u((r = r.apply(e, t || [])).next());
    });
  },
  u = function (e, t) {
    var n,
      r,
      o,
      l,
      i = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (l = { next: a(0), throw: a(1), return: a(2) }),
      "function" == typeof Symbol &&
        (l[Symbol.iterator] = function () {
          return this;
        }),
      l
    );
    function a(a) {
      return function (u) {
        return (function (a) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; l && ((l = 0), a[0] && (i = 0)), i; )
            try {
              if (
                ((n = 1),
                r &&
                  (o =
                    2 & a[0]
                      ? r.return
                      : a[0]
                      ? r.throw || ((o = r.return) && o.call(r), 0)
                      : r.next) &&
                  !(o = o.call(r, a[1])).done)
              )
                return o;
              switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                case 0:
                case 1:
                  o = a;
                  break;
                case 4:
                  return i.label++, { value: a[1], done: !1 };
                case 5:
                  i.label++, (r = a[1]), (a = [0]);
                  continue;
                case 7:
                  (a = i.ops.pop()), i.trys.pop();
                  continue;
                default:
                  if (
                    !((o = i.trys),
                    (o = o.length > 0 && o[o.length - 1]) ||
                      (6 !== a[0] && 2 !== a[0]))
                  ) {
                    i = 0;
                    continue;
                  }
                  if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                    i.label = a[1];
                    break;
                  }
                  if (6 === a[0] && i.label < o[1]) {
                    (i.label = o[1]), (o = a);
                    break;
                  }
                  if (o && i.label < o[2]) {
                    (i.label = o[2]), i.ops.push(a);
                    break;
                  }
                  o[2] && i.ops.pop(), i.trys.pop();
                  continue;
              }
              a = t.call(e, i);
            } catch (e) {
              (a = [6, e]), (r = 0);
            } finally {
              n = o = 0;
            }
          if (5 & a[0]) throw a[1];
          return { value: a[0] ? a[1] : void 0, done: !0 };
        })([a, u]);
      };
    }
  },
  s = (0, o.logFactory)("live-poller");
!(function (e) {
  (e[(e.READY = 1)] = "READY"),
    (e[(e.PLAYING = 2)] = "PLAYING"),
    (e[(e.OVER = 3)] = "OVER");
})(t || (exports.LiveStatus = t = {}));
var c = {
  vappid: "31678259",
  vsecret: "1e029a67beb2d7e7e7bb8321fb161a46fe76c7837beb2cee",
  otype: "ojson",
};
exports.LivePoller = (function () {
  function e() {
    var e = this;
    (this.pollTimer = null),
      (this.pollInterval = 5e3),
      (this.pollRequestParam = null),
      (this.onLiveEnded = null),
      (this.onLiveStart = null),
      (this.cancelToken = null),
      (this.uuid = (0, l.default)(5)),
      (this.onLoadSuccess = function (n) {
        var r;
        e.pollTimer && clearTimeout(e.pollTimer);
        var o = (function (e) {
          var n = null == e ? void 0 : e.data;
          if (!n) return null;
          var r = n.pollContext,
            o = n.liveStatus,
            l = { status: t.PLAYING, context: r };
          (o !== t.READY && o !== t.OVER) || (l.status = o);
          return l;
        })(n);
        return (
          !!o &&
          (o.status === t.OVER
            ? (null === (r = e.onLiveEnded) || void 0 === r || r.call(e), !1)
            : ((e.pollRequestParam = i(i({}, e.pollRequestParam), {
                pollContext: o.context,
              })),
              (e.pollTimer = setTimeout(function () {
                e.load();
              }, e.pollInterval)),
              e.onLiveStart && (e.onLiveStart(), (e.onLiveStart = null)),
              !0))
        );
      });
  }
  return (
    (e.prototype.stop = function () {
      s(this.uuid, "poller stopped"),
        this.cancelToken &&
          (this.cancelToken.cancel(), (this.cancelToken = null)),
        this.pollTimer &&
          (clearInterval(this.pollTimer), (this.pollTimer = null));
    }),
    (e.prototype.start = function (e, t) {
      this.stop(),
        s(this.uuid, "poller start for pid: ", e),
        (this.pollRequestParam = i(i({}, c), {
          pollDataKey: "pid=".concat(e),
        })),
        (this.onLiveEnded = null == t ? void 0 : t.onEnd),
        (this.onLiveStart = null == t ? void 0 : t.onStart),
        this.load();
    }),
    (e.prototype.load = function () {
      return a(this, void 0, void 0, function () {
        var t, o, l;
        return u(this, function (i) {
          switch (i.label) {
            case 0:
              if (!this.pollRequestParam) return [2];
              this.cancelToken || (this.cancelToken = (0, r.default)()),
                (t = ""
                  .concat(e.cgi, "?")
                  .concat((0, n.objectToQueryString)(this.pollRequestParam))),
                (i.label = 1);
            case 1:
              return (
                i.trys.push([1, 3, , 4]),
                s(this.uuid, "poller request with: ", this.pollRequestParam),
                [4, (0, n.request)({ url: t }, this.cancelToken)]
              );
            case 2:
              return (o = i.sent()), this.onLoadSuccess(o), [3, 4];
            case 3:
              return (
                (l = i.sent()),
                console.warn("live poller load error", l),
                this.stop(),
                [3, 4]
              );
            case 4:
              return [2];
          }
        });
      });
    }),
    (e.cgi = "https://zbaccess.video.qq.com/fcgi/live_poll"),
    e
  );
})();
