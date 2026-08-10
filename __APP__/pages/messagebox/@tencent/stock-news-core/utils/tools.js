var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  i = function (e, n, o) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[n] = o);
  },
  a = function (t, a) {
    for (var c in a || (a = {})) o.call(a, c) && i(t, c, a[c]);
    if (n) {
      var s,
        u = e(n(a));
      try {
        for (u.s(); !(s = u.n()).done; ) {
          c = s.value;
          r.call(a, c) && i(t, c, a[c]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return t;
  },
  c = require("../../../../../common/vendor.js");
require("./apiMapping.js");
var s = require("../../../js-cookie/src/js.cookie.js"),
  u = require("./knife.js"),
  d = require("../../stock-crypto-modules-config/dist/index.js"),
  p = null == navigator ? void 0 : navigator.userAgent,
  l = {
    isApp: function () {
      return /qqstock/i.test(p);
    },
    isWeb: function () {
      return !/qqstock/i.test(p);
    },
    isQQBrowser: function () {
      return /m?(qqbrowser)[/\s]?([\w.]+)/i.test(p);
    },
    isWechat: function () {
      return /MicroMessenger/i.test(p);
    },
    isWZQ: function () {
      return "wzq.tenpay.com" === (null == location ? void 0 : location.host);
    },
    isH5Lite: function () {
      return !1;
    },
    isMPWebView: function () {
      var e, t, n, o;
      return (
        "zxgxcx_h5" ===
        (null ==
        (o =
          null ==
          (n =
            null ==
            (t = null == (e = c.StockBridge) ? void 0 : e.getCurRouteInfo)
              ? void 0
              : t.call(e))
            ? void 0
            : n.query)
          ? void 0
          : o.srcsite)
      );
    },
    copyToPasteboard: function (e, t) {
      if (c.StockBridge.ENV === c.EnvTypeEnum.MP)
        c.wx$1.setClipboardData({
          data: e,
          success: function () {
            c.StockBridge.toast(t, "none");
          },
        });
      else if (c.StockBridge.ENV === c.EnvTypeEnum.SHY_NATIVE)
        shy.copyToPasteboard(e), shy.showToast("top", t);
      else
        try {
          var n = document.createElement("textarea");
          document.body.appendChild(n),
            (n.value = e),
            n.select(),
            document.execCommand("copy"),
            document.body.removeChild(n),
            c.StockBridge.toast(t, "none");
        } catch (e) {
          c.StockBridge.toast("复制失败", "none");
        }
    },
  };
function g() {
  return l.isH5Lite();
}
function m() {
  var e = {};
  return (
    c.wx$1
      ? (e = {
          app: "xcx",
          appid: "xcx",
          openid: c.wx$1.getStorageSync("_qluin") || "",
          fskey: c.wx$1.getStorageSync("_qlskey") || "",
          check: 12,
          signkey: d.dist.SIGN_KEY.wzq_snp,
        })
      : window &&
        window.__WZQ__ &&
        s.cookie &&
        (g() ||
          (e = {
            app: "wzq",
            appid: "wzq",
            openid: s.cookie.get("wzq_qluin") || "",
            fskey: s.cookie.get("wzq_qlskey") || "",
            check: 12,
            signkey: d.dist.SIGN_KEY.wzq_snp,
          })),
    e
  );
}
var y = ["日", "一", "二", "三", "四", "五", "六"];
(exports.envUtil = l),
  (exports.formatImage = function (e) {
    return "string" == typeof e ? e.replace(/^(http|https):/, "https:") : e;
  }),
  (exports.gdParamsFormat = function (e) {
    var t = m(),
      n = a(a({}, t), e),
      o = n.signkey;
    delete n.signkey;
    var r = ""
      .concat(
        Object.keys(n)
          .sort()
          .map(function (e) {
            return "".concat(e, "=").concat(n[e]);
          })
          .join("&"),
        "&key="
      )
      .concat(o || d.dist.SIGN_KEY.wzq_analyse);
    return (n.sign = c.md5Module(r)), n;
  }),
  (exports.getFormattedTime = function (e) {
    return e ? u.timeFormat(e, u.timeFormatType.exact) : "";
  }),
  (exports.getTimeDate = function (e) {
    var t = e,
      n = new Date(t),
      o = n.getFullYear(),
      r = n.getMonth() + 1,
      i = n.getDate(),
      a = y[n.getDay()],
      c = n.getHours(),
      s = n.getMinutes(),
      u = n.getSeconds() < 10 ? n.getSeconds() : "0".concat(n.getSeconds());
    return {
      time: t,
      year: o,
      month: r,
      date: i,
      day: a,
      hour: c < 10 ? "0".concat(c) : c,
      minute: s < 10 ? "0".concat(s) : s,
      secend: u < 10 ? "0".concat(u) : u,
      dateStr: new Date(n).toLocaleDateString(),
    };
  }),
  (exports.getUserInfo = m),
  (exports.getXGSign = function (e) {
    var t = [];
    for (var n in e) n && t.push("".concat(n, "=").concat(e[n]));
    return (
      t.push("key=".concat(d.dist.SIGN_KEY.wzq_analyse)),
      c.md5Module(t.join("&"))
    );
  }),
  (exports.isH5Lite = g),
  (exports.isShare = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return !!(
      (e && e.query && 1 == +e.query.__share_flag__) ||
      "share" === e.query.pagetype
    );
  }),
  (exports.md5 = function () {
    var e = "zxg_h5",
      t = d.dist.SIGN_KEY.zxgh5;
    window &&
      window.__WZQ__ &&
      ((e = "wzq"), (t = d.dist.SIGN_KEY.wzq_snp), g()),
      (e = "xcx"),
      (t = d.dist.SIGN_KEY.wzq_snp);
    var n = Math.floor(Math.random() * Math.floor(1e4)),
      o = c.md5Module(e + t + n);
    return {
      zappid: e,
      sign: o,
      nonce: n,
      queryStr: "zappid=".concat(e, "&sign=").concat(o, "&nonce=").concat(n),
    };
  }),
  (exports.md5WithTimestampWithPlatform = function () {
    var e = "zxg_h5",
      t = d.dist.SIGN_KEY.zxgh5;
    window &&
      window.__WZQ__ &&
      ((e = "wzq"), (t = d.dist.SIGN_KEY.wzq_snp), g()),
      (e = "xcx"),
      (t = d.dist.SIGN_KEY.wzq_snp);
    var n = new Date().getTime();
    n = parseInt(n / 1e3);
    var o = Math.floor(Math.random() * Math.floor(1e4)),
      r = c.md5Module(e + t + o + n);
    return {
      zappid: e,
      sign: r,
      nonce: o,
      timestamp: n,
      queryStr: "zappid="
        .concat(e, "&sign=")
        .concat(r, "&nonce=")
        .concat(o, "&timestamp=")
        .concat(n),
    };
  });
