var e = require("../@babel/runtime/helpers/slicedToArray"),
  r = require("../@babel/runtime/helpers/toConsumableArray"),
  t = require("../@babel/runtime/helpers/objectSpread2");
require("../@babel/runtime/helpers/Arrayincludes"), require("../app.js");
var n = require("../common/vendor.js"),
  o = require("../config/index.js"),
  i = require("./getPlatform.js"),
  a = require("../config/mpConfig.js");
require("../service/broker.js");
var l = require("../config/key.js"),
  u = require("../router/pageAuth.js"),
  s = require("../pages.js"),
  c = require("./system.js"),
  d = require("../config/broker/11100/index.js"),
  p = s.__CJS__export_default__().routes,
  g = { "pages/asset/index": "pages/index/trade" },
  v = i.getPlatform(),
  m = v.isZxg,
  f = v.bizPlatformVer,
  b = v.isZxgHarmony,
  x = v.isMpPlugin,
  y = b ? "11.26.0" : "11.29.0";
function h() {
  var e = "/platforms/mp-weixin/webview/index";
  return x
    ? "plugin-private://".concat(d.brokerConfig.base.appid).concat(e)
    : "".concat(e);
}
function k() {
  var e,
    r,
    t = getCurrentPages(),
    n = t[t.length - 1];
  if (!n) return { route: "", path: "", name: "", meta: {}, query: {} };
  var o = n.route.replace(/^.*\/pages\/(.*)$/, "$1"),
    i = "";
  (o = o.includes("pages/") ? o : "pages/".concat(o)).startsWith(
    "pages/".concat(d.brokerConfig.base.fullName)
  ) && (o = o.replace("/".concat(d.brokerConfig.base.fullName), "")),
    "pages/index/trade" === o &&
      (null == (r = null == (e = n.$vm) ? void 0 : e.pluginRoute)
        ? void 0
        : r.value) &&
      (i = n.$vm.pluginRoute.value);
  var a =
    p.find(function (e) {
      return e.path === (i || o);
    }) || {};
  return {
    route: n.route,
    path: o,
    name: (null == a ? void 0 : a.name) || "",
    query: n.options || {},
    meta: (null == a ? void 0 : a.meta) || {},
  };
}
function C() {
  var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    r = i.getPlatform(),
    t = r.isSimpleMode;
  return t
    ? e
      ? "/mp/lite/index.html"
      : decodeURIComponent("%2Fmp%2Fv2%2Findex.html%3Flite%3D1")
    : decodeURIComponent("%2Fmp%2Fv2%2Findex.html");
}
var M = function (e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
    if (!+e) return "0 Bytes";
    var t = r < 0 ? 0 : r,
      n = Math.floor(Math.log(e) / Math.log(1024));
    return ""
      .concat(parseFloat((e / Math.pow(1024, n)).toFixed(t)), " ")
      .concat(["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][n]);
  },
  P = function () {
    var e,
      r,
      t = getCurrentPages(),
      o = (null == t ? void 0 : t[(null == t ? void 0 : t.length) - 1]) || {},
      i = o.options,
      a = void 0 === i ? {} : i,
      l = o.route,
      u = void 0 === l ? "" : l,
      s = "https://".concat(d.brokerConfig.base.domain).concat(C()),
      c = u;
    if (x) {
      var p = "__plugin__/".concat(d.brokerConfig.base.appid, "/");
      "pages/index/trade" === u &&
      (null ==
      (r = null == (e = null == o ? void 0 : o.$vm) ? void 0 : e.pluginRoute)
        ? void 0
        : r.value)
        ? (c = o.$vm.pluginRoute.value.replace("pages", ""))
        : (null == u ? void 0 : u.indexOf(p)) > -1
        ? (c = c.split(p)[1].replace("pages", ""))
        : "pages/quote/quote" === u && (c = "/trade/stock");
    } else u.startsWith("pages/") && (c = u.replace("pages", ""));
    return "".concat(s, "#").concat(c, "?").concat(n.lib.stringify(a));
  };
(exports.calcBase64ImgSize = function (e) {
  try {
    if (!e || !(null == e ? void 0 : e.startsWith("data:image")))
      return { fileSize: 0, formatted: "0 Bytes" };
    var r = e,
      t = "base64,",
      n = (r = r.substring(r.indexOf(t) + t.length)).indexOf("="),
      o = 0.75 * (r = -1 !== n ? r.substring(0, n) : r).length;
    return { fileSize: o, formatted: M(o) };
  } catch (e) {}
  return { fileSize: 0, formatted: "0 Bytes" };
}),
  (exports.fixedTimeNumber = function (e) {
    return isNaN(+e) ? "" : +e < 10 ? "0".concat(e) : e;
  }),
  (exports.formatBytes = M),
  (exports.getBytesRange = function (e) {
    var r = "INVALID",
      t = 7340032;
    return null == e || isNaN(Number(e))
      ? r
      : e <= 524288
      ? "[0, 500k]"
      : e <= 1048576
      ? "(500k, 1M]"
      : e <= 2097152
      ? "(1M, 2M]"
      : e <= 3145728
      ? "(2M, 3M]"
      : e <= 4194304
      ? "(3M, 4M]"
      : e <= 5242880
      ? "(4M, 5M]"
      : e <= 6291456
      ? "(5M, 6M]"
      : e <= t
      ? "(6M, 7M]"
      : e > t
      ? "(7M, INF]"
      : r;
  }),
  (exports.getCache = function (e) {
    var r = n.index.getStorageSync(e);
    return (
      !!r &&
      (n.dayjs().isBefore(n.dayjs(r.expires))
        ? r.value
        : (n.index.removeStorageSync(e), !1))
    );
  }),
  (exports.getCurRouteInfo = k),
  (exports.getH5Url = P),
  (exports.getIsMpPluginComponent = function () {
    var e = !1;
    try {
      var r = global;
      if (r.pluginGetCurrentPages) {
        var t = r.pluginGetCurrentPages();
        (null == t ? void 0 : t.length) >= 1 && (e = null === t[t.length - 1]);
      }
    } catch (e) {}
    return e;
  }),
  (exports.getMpFromSource = function (e) {
    var r,
      t,
      i,
      a,
      u,
      s,
      d,
      p = "wzqxcx";
    try {
      if (x) {
        var g = e || c.getAccountInfo();
        p = (
          null == (r = null == g ? void 0 : g.miniProgram) ? void 0 : r.appId
        )
          ? g.miniProgram.appId === o.MP_INFO.zxgxcx
            ? "zxgxcx"
            : "wzqxcx"
          : (null ==
            (a =
              null ==
              (i =
                null ==
                (t = null == requireMiniProgram ? void 0 : requireMiniProgram())
                  ? void 0
                  : t.main2Plugin)
                ? void 0
                : i.call(t))
              ? void 0
              : a.from) || n.index.getStorageSync(l.MP_FROM_SOURCE);
      } else
        p =
          (null ==
          (d =
            null ==
            (s =
              null == (u = null == global ? void 0 : global.getVm)
                ? void 0
                : u.call(global))
              ? void 0
              : s.globalData)
            ? void 0
            : d.from) || n.index.getStorageSync(l.MP_FROM_SOURCE);
    } catch (e) {}
    return p;
  }),
  (exports.getMpRetUrl = function (e, r, o) {
    var i;
    if ("pages/protocol/vtools-protocol" === r) {
      var l = k() || {};
      (null == (i = null == l ? void 0 : l.name)
        ? void 0
        : i.startsWith("Apply")) && (o.need_apply_account_query = 1);
    }
    o.dealerCode = d.brokerConfig.base.code;
    var s = !1,
      c = "1" === (null == e ? void 0 : e.buildPlugin),
      p = global.getVm().globalData.isSupportPlugin,
      v = !1,
      m = "";
    x
      ? ((v = c), (s = !c), (m = a.linkTypeMap.plugin2Plugin))
      : p &&
        c &&
        ![
          "pages/product/jiaxinbao/record",
          "pages/product/duotianqi/trade-record-detail",
          "pages/product/duotianqi/result",
          "platforms/mp-weixin/webview/index",
        ].includes(r) &&
        !r.startsWith("pages/apply")
      ? ((v = !0), (m = a.linkTypeMap.mp2Plugin))
      : (v = !1);
    var f = u.HALL_ROUTER_MAP.find(function (r) {
      return e.name === r.name;
    });
    !f &&
      "BizBrokerService" === e.name &&
      (null == o ? void 0 : o.key) &&
      (f = { key: o.key });
    var b = n.get(d.brokerConfig, "hall.third", {}),
      y = b.enable,
      M = void 0 !== y && y,
      q = b.entry;
    if (!f || !M || !q[f.key])
      return {
        url: (function (e) {
          var r = e.url,
            t = void 0 === r ? "" : r,
            o = e.isWebviewPage,
            i = void 0 !== o && o,
            a = e.isPlugin,
            l = void 0 !== a && a,
            u = e.isOpenThirdUrl,
            s = void 0 !== u && u,
            c = e.data,
            p = void 0 === c ? {} : c,
            v = n.lib.stringify(p),
            m = t;
          if (s) return "".concat(h(), "?url=").concat(encodeURIComponent(t));
          if (i)
            return (
              (m = "https://".concat(d.brokerConfig.base.domain).concat(C())),
              (m = ""
                .concat(n.dist.urltools.make(m, {}), "#")
                .concat(n.dist.urltools.make(t.replace("pages", ""), p))),
              "".concat(h(), "?url=").concat(encodeURIComponent(m))
            );
          if (l) {
            if (!g[t])
              return "plugin-private://"
                .concat(d.brokerConfig.base.appid, "/")
                .concat(m, "?")
                .concat(v);
            m = "".concat(g[t], "?").concat(v);
          } else m = "".concat(m, "?").concat(v);
          return "/".concat(m);
        })({ url: r, isWebviewPage: s, isPlugin: v, data: o }),
        linkType: m,
        dealerCode: d.brokerConfig.base.code,
        query: o,
      };
    var S = t(
        {
          key: f.key,
          inner: 1,
          originUrl: (null == o ? void 0 : o.originUrl) || P(),
        },
        n.pick(o || {}, ["fundaccount", "source"])
      ),
      _ = "https://"
        .concat(d.brokerConfig.base.domain)
        .concat(C(), "#/oauth/broker?")
        .concat(n.lib.stringify(S));
    return {
      url: "".concat(h(), "?url=").concat(encodeURIComponent(_)),
      linkType: m,
      dealerCode: d.brokerConfig.base.code,
      query: o,
    };
  }),
  (exports.getQuoteTradeParams = function (e) {
    return (null == e ? void 0 : e.stockholder_code)
      ? { trade_params: JSON.stringify({ holder: e.stockholder_code }) }
      : {};
  }),
  (exports.getStaticPath = C),
  (exports.getWebviewUrl = h),
  (exports.isAppSupportAssetAutoEntryEmbeddedTrade = function () {
    return m && n.gte(f, y);
  }),
  (exports.isDarkTheme = function () {
    var e,
      r,
      t,
      n,
      o = !1;
    try {
      o =
        "dark" ===
        (null ==
        (n =
          null ==
          (t =
            null ==
            (r = null == (e = requireMiniProgram()) ? void 0 : e.main2Plugin)
              ? void 0
              : r.call(e))
            ? void 0
            : t.getTheme)
          ? void 0
          : n.call(t));
    } catch (e) {}
    return o;
  }),
  (exports.isInTimeRange = function (e) {
    var r,
      t = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/;
    return n.isBoolean(e)
      ? e
      : n.isString(e)
      ? /^week-([0-6],?)*[0-6]$/i.test(e)
        ? (
            (null == (r = e.match(/week-(.*)/))
              ? void 0
              : r[1].split(",").map(function (e) {
                  return Number(e);
                })) || []
          ).includes(n.dayjs().day())
        : !!t.test(e) && t.test(e) && n.dayjs().isBefore(n.dayjs(e))
      : !!n.isArray(e) &&
        n.values(e).some(function (e) {
          return !!(
            t.test(e[0]) &&
            t.test(e[1]) &&
            n.dayjs().isAfter(n.dayjs(e[0])) &&
            n.dayjs().isBefore(n.dayjs(e[1]))
          );
        });
  }),
  (exports.isTradeTime = function () {
    var e = (function () {
        var e = new Date(),
          r = e.getTime(),
          t = e.getTimezoneOffset() / 60;
        return -8 !== t ? new Date(r + 60 * (t + 8) * 60 * 1e3).getTime() : r;
      })(),
      r = n.dayjs(e).format("HH") + n.dayjs(e).format("mm");
    return r >= "0900" && r <= "1600";
  }),
  (exports.isZeroVal = function (e) {
    return void 0 === e || isNaN(e) || 0 == +e;
  }),
  (exports.keepClientURlArgs = function (i) {
    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    a = [].concat(r(o.CLIENT_URL_ARGS), r(o.BIZ_URL_ARGS), r(a));
    var l = i.split("#"),
      u = e(l, 2),
      s = u[0],
      c = u[1],
      d = t(
        t(
          {},
          n.pick(
            t(
              t({}, n.dist.urltools.param.parse()),
              n.dist.urltools.param.parse(location.hash)
            ),
            a
          )
        ),
        n.pick(
          t(
            t({}, n.dist.urltools.param.parse(s)),
            n.dist.urltools.param.parse(c)
          ),
          a
        )
      ),
      p = {};
    return (
      c && (p = n.omit(n.dist.urltools.param.parse(c), Object.keys(d))),
      n.dist.urltools.make(s, d) +
        (c ? "#".concat(n.dist.urltools.make(c.split("?")[0], p)) : "")
    );
  }),
  (exports.setCache = function (e, r) {
    var t =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 86400,
      o = "number" == typeof t ? n.dayjs().add(t, "second") : t;
    n.index.setStorageSync(e, { value: r, expires: o });
  }),
  (exports.setClipboardData = function (e) {
    var r, t;
    null == (t = null == (r = n.index) ? void 0 : r.setClipboardData) ||
      t.call(r, e);
  }),
  (exports.sleep = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return new Promise(function (r) {
      return setTimeout(r, e);
    });
  }),
  (exports.ts = function (e) {
    if (("function" == typeof e && (e = e()), e && "function" == typeof e.next))
      return function r() {
        var t = Date.now(),
          n = null;
        do {
          n = e.next();
        } while (!n.done && Date.now() - t < 25);
        n.done || setTimeout(r);
      };
  });
