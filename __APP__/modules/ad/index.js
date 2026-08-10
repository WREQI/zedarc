var t = require("../../@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.Ad = void 0);
var e,
  n = require("../../behaviors/logger"),
  i = require("../../enums"),
  o = t(require("../../index")),
  r = require("../dataset/enum"),
  a = require("../performance/enum"),
  l = t(require("../plugins/base/index")),
  s = require("../utils/index"),
  p =
    ((e = function (t, n) {
      return (e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(t, n);
    }),
    function (t, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = t;
      }
      e(t, n),
        (t.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    }),
  u = function (t, e, n, i) {
    return new (n || (n = Promise))(function (o, r) {
      function a(t) {
        try {
          s(i.next(t));
        } catch (t) {
          r(t);
        }
      }
      function l(t) {
        try {
          s(i.throw(t));
        } catch (t) {
          r(t);
        }
      }
      function s(t) {
        var e;
        t.done
          ? o(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                })).then(a, l);
      }
      s((i = i.apply(t, e || [])).next());
    });
  },
  d = function (t, e) {
    var n,
      i,
      o,
      r,
      a = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (r = { next: l(0), throw: l(1), return: l(2) }),
      "function" == typeof Symbol &&
        (r[Symbol.iterator] = function () {
          return this;
        }),
      r
    );
    function l(l) {
      return function (s) {
        return (function (l) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; r && ((r = 0), l[0] && (a = 0)), a; )
            try {
              if (
                ((n = 1),
                i &&
                  (o =
                    2 & l[0]
                      ? i.return
                      : l[0]
                      ? i.throw || ((o = i.return) && o.call(i), 0)
                      : i.next) &&
                  !(o = o.call(i, l[1])).done)
              )
                return o;
              switch (((i = 0), o && (l = [2 & l[0], o.value]), l[0])) {
                case 0:
                case 1:
                  o = l;
                  break;
                case 4:
                  return a.label++, { value: l[1], done: !1 };
                case 5:
                  a.label++, (i = l[1]), (l = [0]);
                  continue;
                case 7:
                  (l = a.ops.pop()), a.trys.pop();
                  continue;
                default:
                  if (
                    !((o = a.trys),
                    (o = o.length > 0 && o[o.length - 1]) ||
                      (6 !== l[0] && 2 !== l[0]))
                  ) {
                    a = 0;
                    continue;
                  }
                  if (3 === l[0] && (!o || (l[1] > o[0] && l[1] < o[3]))) {
                    a.label = l[1];
                    break;
                  }
                  if (6 === l[0] && a.label < o[1]) {
                    (a.label = o[1]), (o = l);
                    break;
                  }
                  if (o && a.label < o[2]) {
                    (a.label = o[2]), a.ops.push(l);
                    break;
                  }
                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }
              l = e.call(t, a);
            } catch (t) {
              (l = [6, t]), (i = 0);
            } finally {
              n = o = 0;
            }
          if (5 & l[0]) throw l[1];
          return { value: l[0] ? l[1] : void 0, done: !0 };
        })([l, s]);
      };
    }
  },
  c = require("./legacy/ad"),
  f = (0, n.logFactory)("ad-adapter"),
  v = { skipText: "关闭广告", waitingText: "秒后可关闭" };
try {
  var h = s.Cache.get("__tp_ad_text__");
  h
    ? (v = h)
    : (0, s.request)({
        url: "https://wuji.video.qq.com/fcgi-bin/wuji?appid=1001781&appkey=fe7eb78d8f694f8b9de1c4be3a0802c6",
      }).then(function (t) {
        var e,
          n,
          i =
            (null ===
              (n =
                null === (e = null == t ? void 0 : t.data) || void 0 === e
                  ? void 0
                  : e.data) || void 0 === n
              ? void 0
              : n[0]) || {},
          o = i.adCloseText,
          r = i.adJumpText;
        o &&
          r &&
          ((v.skipText = o),
          (v.waitingText = "秒".concat(r)),
          s.Cache.set("__tp_ad_text__", v, 864e5));
      });
} catch (t) {}
exports.Ad = (function (t) {
  function e(e, n) {
    var o = t.call(this, e) || this;
    if (
      ((o.player = e),
      (o.config = n),
      (o.skippable = 0),
      (o.totalDuration = 0),
      !n)
    )
      throw Error();
    return (
      (o.config = n),
      o.player.on(i.Events.PLAY_SESSION_START, o.bindEvents, o),
      o.player.on(i.Events.PLAY_SESSION_END, o.unbindEvents, o),
      o.player.on(i.Events.AD_END, o.unbindEvents, o),
      o
    );
  }
  return (
    p(e, t),
    Object.defineProperty(e.prototype, "adControl", {
      get: function () {
        return {
          skippable: this.skippable,
          totalDuration: this.totalDuration,
          skipText: this.config.adSkipText || v.skipText,
          waitingText: this.config.adWaitingText || v.waitingText,
        };
      },
      enumerable: !1,
      configurable: !0,
    }),
    (e.prototype.destroy = function () {
      this.unbindEvents();
    }),
    (e.prototype.requestAd = function (t) {
      var e, n, r;
      return u(this, void 0, void 0, function () {
        var l, s, p, u, v, h, g, E, _, b, x, S, T, m, A, w, k, P, D, q, R, C;
        return d(this, function (d) {
          switch (d.label) {
            case 0:
              return 1 === this.config.scene || t.mode === i.PlayMode.LIVE
                ? [2, []]
                : ((w = this.config),
                  (k = w.chid),
                  (l = void 0 === k ? 41 : k),
                  (P = w.live),
                  (s = void 0 === P ? 0 : P),
                  (D = w.pu),
                  (p = void 0 === D ? 1 : D),
                  (u = t.vid),
                  (v = t.coverid),
                  (h = t.guid),
                  (g = t.platform),
                  (q = o.default.getSystemInfo()),
                  (E = q.deviceModel),
                  (_ = q.osPlatform),
                  (b = E.toLowerCase()),
                  (x = { pc: 0, iphone: 3, ipad: 6, android: 9 }),
                  (b = E.indexOf("iphone")
                    ? "iphone"
                    : E.indexOf("ipad")
                    ? "ipad"
                    : "android" === _
                    ? "android"
                    : "pc"),
                  (T = {
                    vid: (S = "string" != typeof u) ? "" : u,
                    previd: S ? u.previd : "",
                    pu: p,
                    chid: l,
                    live: s,
                    coverid: v,
                    platform: g,
                    ty: "web",
                    ad_type: "WL",
                    pf: "H5",
                    pf_ex: b,
                    from: x[b],
                    rfid: "",
                    pt: 0,
                    v: "TencentPlayerV3.2.19.358",
                    plugin: o.default.getPlayerVersion(),
                    speed: 0,
                    adaptor: 2,
                    musictxt: "",
                    st: 0,
                    resp_type: "json",
                    _t: Date.now(),
                    vptag: "",
                    url: "",
                    refer: "",
                    pid: "",
                    mbid: "",
                    oid: "",
                    dtype: 1,
                    guid: h,
                    lt: y("main_login"),
                    opid: y("openid"),
                    atkn: y("access_token"),
                    appid: y("appid"),
                    uid: y("vuserid"),
                    tkn: y("vusession"),
                  }),
                  this.player.performance.collectReportTime(
                    (((R = {})[a.PERFORMANCE_KEY.getAdStart] = Date.now()), R)
                  ),
                  [4, c(T, this.player.internalMsg, this.player.performance)]);
            case 1:
              return (
                (m = d.sent()),
                (A =
                  (null === (e = m.adList) || void 0 === e
                    ? void 0
                    : e.map(function (t) {
                        return t();
                      })) || []),
                this.player.performance.collectReportTime(
                  (((C = {})[a.PERFORMANCE_KEY.getAdEnd] = Date.now()), C)
                ),
                A.forEach(function (t) {
                  "1" === t.oid && t.onReportEmpty();
                }),
                f("ad list ready", A),
                (this.skippable =
                  (null === (n = A[0]) || void 0 === n ? void 0 : n.skipable) ||
                  0),
                (this.totalDuration =
                  (null === (r = A[0]) || void 0 === r
                    ? void 0
                    : r.totalDuration) || 0),
                [2, A]
              );
          }
        });
      });
    }),
    (e.prototype.bindEvents = function () {
      this.player.internalMsg.on(i.EventsExt.AD_SKIP, this.onAdSkip, this),
        this.player.internalMsg.on(
          i.VideoNodeEvents.FIRST_PLAYING,
          this.onStart,
          this
        ),
        this.player.internalMsg.on(i.VideoNodeEvents.ERROR, this.onError, this),
        this.player.internalMsg.on(
          i.EventsExt.DATASET_STATE_UPDATE,
          this.onStateChange,
          this
        );
    }),
    (e.prototype.unbindEvents = function () {
      this.player.internalMsg.off(i.EventsExt.AD_SKIP, this.onAdSkip, this),
        this.player.internalMsg.off(
          i.VideoNodeEvents.FIRST_PLAYING,
          this.onStart,
          this
        ),
        this.player.internalMsg.off(
          i.VideoNodeEvents.ERROR,
          this.onError,
          this
        ),
        this.player.internalMsg.off(
          i.EventsExt.DATASET_STATE_UPDATE,
          this.onStateChange,
          this
        );
    }),
    (e.prototype.onAdSkip = function () {
      var t, e, n;
      f("ad skip report"),
        null ===
          (n =
            null ===
              (e =
                null === (t = this.player.currentPlayConfig) || void 0 === t
                  ? void 0
                  : t.extra) || void 0 === e
              ? void 0
              : e.onSkip) ||
          void 0 === n ||
          n.call(e);
    }),
    (e.prototype.onStart = function () {
      var t, e, n;
      f("ad start report"),
        null ===
          (n =
            null ===
              (e =
                null === (t = this.player.currentPlayConfig) || void 0 === t
                  ? void 0
                  : t.extra) || void 0 === e
              ? void 0
              : e.onStart) ||
          void 0 === n ||
          n.call(e);
    }),
    (e.prototype.onError = function () {
      var t, e, n;
      f("ad error report"),
        null ===
          (n =
            null ===
              (e =
                null === (t = this.player.currentPlayConfig) || void 0 === t
                  ? void 0
                  : t.extra) || void 0 === e
              ? void 0
              : e.onError) ||
          void 0 === n ||
          n.call(e);
    }),
    (e.prototype.onStateChange = function (t) {
      this.player.isAd &&
        t.key === r.DataState.END &&
        (f("ad end report"), this.onEnd());
    }),
    (e.prototype.onEnd = function () {
      var t, e, n;
      null ===
        (n =
          null ===
            (e =
              null === (t = this.player.currentPlayConfig) || void 0 === t
                ? void 0
                : t.extra) || void 0 === e
            ? void 0
            : e.onEnd) ||
        void 0 === n ||
        n.call(e);
    }),
    (e.pluginName = "ad-adapter"),
    e
  );
})(l.default);
function y(t) {
  if (!t) return "";
  var e = o.default.getCookie(),
    n = e.main_login;
  if (!n) return "";
  if ("main_login" === t) return n;
  if ("qq" === n) {
    var i = e["vqq_".concat(t)];
    if (i) return i;
  }
  return e[t];
}
