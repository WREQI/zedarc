var e = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  s = function (e, t, n) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  c = function (e, t) {
    for (var i in t || (t = {})) o.call(t, i) && s(e, i, t[i]);
    if (r) {
      var c,
        u = n(r(t));
      try {
        for (u.s(); !(c = u.n()).done; ) {
          i = c.value;
          a.call(t, i) && s(e, i, t[i]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return e;
  },
  u = require("../../stock-news-core/utils/request/index.js"),
  g = require("../../stock-news-core/utils/loginHelper.js"),
  p = require("../../stock-news-core/utils/tools.js"),
  l = require("../../../../../common/vendor.js"),
  d = "https://snp.tenpay.com/cgi/cgi-bin/snp/like",
  m = "https://snp.tenpay.com/cgi-bin/snpgw_om_subscribe.fcgi";
exports.VideoAPI = (function () {
  function n() {
    e(this, n);
  }
  return (
    t(n, [
      {
        key: "getMd5Params",
        value: function () {
          return p.md5();
        },
      },
      {
        key: "queryStaticNums",
        value: function (e) {
          return u.request(
            "https://wzq.tenpay.com/cgi/cgi-bin/numserver/getStaticNums",
            e,
            { method: "GET" }
          );
        },
      },
      {
        key: "getVideoInfo",
        value: function (e) {
          var t = "https://snp.tenpay.com/cgi/cgi-bin/snp/video/videoInfo",
            n = this.getMd5Params(),
            i = c(c(c({}, n), e), this.getLoginData(t));
          return u.request(t, i, { method: "get" });
        },
      },
      {
        key: "getFollowVideo",
        value: function (e) {
          var t = "https://snp.tenpay.com/cgi/cgi-bin/snp/video/subMediaVDList",
            n = c(c(c({}, this.getMd5Params()), e), this.getLoginData(t));
          return u.request(t, n, { method: "get" });
        },
      },
      {
        key: "videoLike",
        value: function (e) {
          var t = c(c({}, e), this.getLoginData(d));
          return u.request(d, t, { method: "get" });
        },
      },
      {
        key: "videoSubcribe",
        value: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.action,
            n = e.media_id,
            i = this.getLoginData(m),
            r = i.access_token,
            o = p.getUserInfo(),
            a = o.openid,
            s = o.signkey,
            c = o.appid,
            g = {
              action: t,
              appid: c,
              om_media_id: n,
              wx_access_token: r,
              wx_openid: a,
            },
            d = "action="
              .concat(t, "&appid=")
              .concat(c, "&om_media_id=")
              .concat(n, "&wx_access_token=")
              .concat(r, "&wx_openid=")
              .concat(a, "&key=")
              .concat(s),
            y = l.md5Module(d);
          return (
            (g.sign = y), u.request(m, g, { method: "get", dropCookie: !0 })
          );
        },
      },
      {
        key: "getVideos",
        value: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = "https://snp.tenpay.com/cgi/cgi-bin/snp/video/main",
            n = this.getMd5Params(),
            i = c(c(c({}, e), n), this.getLoginData(t));
          return (
            (i.fskey || i.qlskey) && (i._devId = i.fskey || i.qlskey),
            u.request(t, i, { method: "get" })
          );
        },
      },
      {
        key: "getLoginData",
        value: function (e) {
          return g.getLoginParamsObject(e);
        },
      },
    ]),
    n
  );
})();
