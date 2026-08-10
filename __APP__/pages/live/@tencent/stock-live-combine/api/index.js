var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  a = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  u = function (e, r) {
    for (var n in r || (r = {})) s.call(r, n) && a(e, n, r[n]);
    if (o) {
      var i,
        u = t(o(r));
      try {
        for (u.s(); !(i = u.n()).done; ) {
          n = i.value;
          c.call(r, n) && a(e, n, r[n]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return e;
  },
  p = function (e, t) {
    return n(e, i(t));
  },
  l = require("../../../../../common/vendor.js"),
  f = require("../../stock-news-core/utils/request/index.js"),
  g = require("../../../js-cookie/src/js.cookie.js"),
  d = require("../../stock-crypto-modules-config/dist/index.js"),
  v = require("../../stock-news-base/service/news/gray.js"),
  q = require("../../stock-news-base/service/news/apis/queryNewsInfo.js"),
  w = {}.IS_LITE_MODE,
  y = function (e) {
    var t,
      r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
      n = (null == navigator ? void 0 : navigator.userAgent) || "",
      i = /\b(iPad|iPhone|iPod)\b.*? OS ([\d_]+)/.test(n),
      o =
        (null == (t = null == n ? void 0 : n.toLowerCase())
          ? void 0
          : t.indexOf("micromessenger")) > -1,
      s = "zxg";
    w && (s = "mini_h5");
    var c = u({ platform: i ? 1 : 2, zappid: s, check: 11 }, e);
    if (l.wx$1) {
      var a = l.wx$1.getStorageSync("_qluin"),
        f = l.wx$1.getStorageSync("_qlskey"),
        v = "plus";
      c = p(u({}, c), {
        app: v,
        qluin: a,
        qlskey: f,
        openid: a,
        fskey: f,
        platform: l.wx$1.getSystemInfoSync().system.indexOf("iOS") >= 0 ? 1 : 2,
        check: 12,
      });
    } else if (o) {
      var q = "wzq";
      w && (q = "mini_h5");
      var y = {
        app: q,
        device_id: 1,
        appid: g.cookie.get("wzq_qlappid") || g.cookie.get("qlappid"),
        openid: g.cookie.get("wzq_qluin"),
        fskey: g.cookie.get("wzq_qlskey") || g.cookie.get("qlskey"),
        qluin: g.cookie.get("wzq_qluin") || g.cookie.get("qluin"),
        qlskey: g.cookie.get("wzq_qlskey") || g.cookie.get("qlskey"),
        check: 12,
      };
      c = u(u({}, c), y);
    }
    return (
      r &&
        (c.sign = (function (e) {
          var t = Object.keys(e)
              .sort()
              .filter(function (t) {
                return "" !== e[t] && void 0 !== e[t];
              })
              .map(function (t) {
                return "".concat(t, "=").concat(e[t]);
              }),
            r = d.dist.SIGN_KEY.mini_h5;
          return (
            w && (r = d.dist.SIGN_KEY.light_h5),
            l.md5Module("".concat(t.join("&"), "&key=").concat(r))
          );
        })(c)),
      c
    );
  };
(exports.cancelReserveLive = function (e) {
  var t = y(e);
  return f.request(
    "https://snp.tenpay.com/cgi-bin/snpgw_cancel_reserve_live.fcgi",
    u({}, t),
    { method: "post", dropCookie: !0 }
  );
}),
  (exports.getLiveCalendarTimeLine = function (e) {
    var t = y(e);
    return f.request(
      "https://proxy.finance.qq.com/cgi/cgi-bin/zxgapi/calendar/timeline",
      p(u({}, t), { check: 11, appid: "wx9cf8c670ebd68ce4" }),
      { method: "get" }
    );
  }),
  (exports.getLiveSubjectData = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return (
      (i = exports),
      (o = [].concat(r)),
      (s = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "post",
          n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return e().mark(function i() {
          var o, s, c;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), v.isNewsGrayUser("queryNewsInfo");
                case 2:
                  if (!e.sent) {
                    e.next = 4;
                    break;
                  }
                  return e.abrupt(
                    "return",
                    q.queryNewsInfo({ news_id: t.news_id, reserve: t.reserve })
                  );
                case 4:
                  return (
                    "https://snp.tenpay.com/cgi-bin/snpgw_unified_newsinfo.fcgi",
                    (o = { method: r, isShowToast: n }),
                    t,
                    (s = y(t, !1)),
                    (e.next = 9),
                    f.request(
                      "https://snp.tenpay.com/cgi-bin/snpgw_unified_newsinfo.fcgi",
                      s,
                      o
                    )
                  );
                case 9:
                  return (
                    (c = e.sent),
                    e.abrupt("return", q.adaptQueryNewsInfoResp(c))
                  );
                case 11:
                case "end":
                  return e.stop();
              }
          }, i);
        })();
      }),
      new Promise(function (e, t) {
        var r = function (e) {
            try {
              c(s.next(e));
            } catch (e) {
              t(e);
            }
          },
          n = function (e) {
            try {
              c(s.throw(e));
            } catch (e) {
              t(e);
            }
          },
          c = function (t) {
            return t.done ? e(t.value) : Promise.resolve(t.value).then(r, n);
          };
        c((s = s.apply(i, o)).next());
      })
    );
    var i, o, s;
  }),
  (exports.requestUsersetting = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = "https://wzq.tenpay.com/cgi-bin/usersetting.fcgi?t=".concat(
        Date.now()
      );
    return f.request(t, e, { method: "post", isShowToast: !1 });
  }),
  (exports.reserveLive = function (e) {
    var t = y(e);
    return f.request(
      "https://snp.tenpay.com/cgi-bin/snpgw_reserve_live.fcgi",
      u({}, t),
      { method: "post", dropCookie: !0 }
    );
  }),
  (exports.subscribeLiveCalendar = function (e) {
    var t = y(e);
    return f.request(
      "https://proxy.finance.qq.com/cgi/cgi-bin/zxgapi/calendar/subscribe",
      p(u({}, t), { check: 11, appid: "wx9cf8c670ebd68ce4" }),
      { method: "get" }
    );
  });
