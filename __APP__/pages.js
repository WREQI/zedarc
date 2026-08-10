require("@babel/runtime/helpers/Arrayincludes");
var _,
  e = require("@babel/runtime/helpers/objectSpread2"),
  r = require("@babel/runtime/helpers/toConsumableArray"),
  t = require("./router/modules/asset.js"),
  a = require("./router/modules/account.js"),
  o = require("./router/modules/analysis.js"),
  u = require("./router/modules/apply.js"),
  i = require("./router/modules/biz.js"),
  s = require("./router/modules/debt.js"),
  l = require("./router/modules/newstock.js"),
  n = require("./router/modules/product.js"),
  p = require("./router/modules/protocol.js"),
  d = require("./router/modules/share.js"),
  C = require("./router/modules/system.js"),
  m = require("./router/modules/trade.js"),
  c = require("./router/modules/transfer.js"),
  E = require("./router/modules/allocate-debt.js"),
  I = require("./router/modules/activity.js"),
  S = require("./router/pageAuth.js"),
  R = require("./router/modules/guide.js"),
  N = require("./router/modules/message.js"),
  f = require("./router/modules/oauth.js"),
  g = require("./router/modules/common.js"),
  b = require("./router/modules/devtools.js"),
  J = require("./router/modules/etf-subscribe.js"),
  P = {
    UNI_SCRIPT_DEFINE: {
      "BROKER-ZHONGXINJIANTOU": !0,
      "PLUGIN-MODE": !0,
      "BROKER-CMS": !1,
      "BROKER-HUALIN": !1,
      "BROKER-ZSZQ": !1,
      "BROKER-GJZQ": !1,
      PURE_MINIAPP: !1,
      "BROKER-CNHT": !1,
      "BROKER-GUOSEN": !1,
      OEM: !1,
      MICRO: !1,
      "BROKER-ZHONGJINCAIFU": !1,
      "BROKER-GUANGFA": !1,
      "BROKER-HTSEC": !1,
      "BROKER-ZHONGXIN": !1,
      "BROKER-GUOTAIJUNAN": !1,
      "BROKER-HUATAI": !1,
      "BROKER-XINGYE": !1,
      "BROKER-CAIXIN": !1,
    },
    env: {},
  },
  h = { exports: {} };
if (P.platform && P.env.UNI_CUSTOM_CONTEXT)
  try {
    P.UNI_SCRIPT_DEFINE = JSON.parse(P.env.UNI_CUSTOM_CONTEXT || "");
  } catch (x) {}
if (P.env.IFRAME)
  h.exports = function () {
    return {
      pages: [
        {
          path: "pages/trade/embedded",
          style: { navigationBarTitleText: "交易", enablePullDownRefresh: !0 },
          name: "TradeEmbedded",
          busis: ["trade"],
        },
      ].concat(
        r(
          (P.UNI_SCRIPT_DEFINE &&
            P.UNI_SCRIPT_DEFINE["BROKER-ZHONGJINCAIFU"]) ||
            "zhongjincaifu" === P.env.MP_BROKER
            ? [
                {
                  path: "pages/biz/broker-service/chart-embedded",
                  style: {
                    navigationBarTitleText: "行情图表",
                    enablePullDownRefresh: !1,
                  },
                  name: "BizChartEmbedded",
                  busis: ["trade"],
                },
              ]
            : []
        )
      ),
      routes: [
        {
          path: "pages/trade/embedded",
          style: { navigationBarTitleText: "交易", enablePullDownRefresh: !0 },
          name: "TradeEmbedded",
          busis: ["trade"],
        },
      ].concat(
        r(
          (P.UNI_SCRIPT_DEFINE &&
            P.UNI_SCRIPT_DEFINE["BROKER-ZHONGJINCAIFU"]) ||
            "zhongjincaifu" === P.env.MP_BROKER
            ? [
                {
                  path: "pages/biz/broker-service/chart-embedded",
                  style: {
                    navigationBarTitleText: "行情图表",
                    enablePullDownRefresh: !1,
                  },
                  name: "BizChartEmbedded",
                  busis: ["trade"],
                },
              ]
            : []
        )
      ),
      globalStyle: {
        navigationBarTextStyle: "black",
        navigationBarTitleText: "交易",
        navigationBarBackgroundColor: "#F8F8F8",
        backgroundColor: "#F8F8F8",
        h5: { titleNView: !1 },
      },
    };
  };
else {
  var T,
    v = t.__CJS__export_default__ || t.__CJS__import__0__,
    x = a.__CJS__export_default__ || a.__CJS__import__1__,
    O = o.__CJS__export_default__ || o.__CJS__import__2__,
    B = u.__CJS__export_default__ || u.__CJS__import__3__,
    U = i.__CJS__export_default__ || i.__CJS__import__4__,
    F = s.__CJS__export_default__ || s.__CJS__import__5__,
    j = l.__CJS__export_default__ || l.__CJS__import__6__,
    q = n.__CJS__export_default__ || n.__CJS__import__7__,
    A = p.__CJS__export_default__ || p.__CJS__import__8__,
    y = d.__CJS__export_default__ || d.__CJS__import__9__,
    D = C.__CJS__export_default__ || C.__CJS__import__10__,
    K = m.__CJS__export_default__ || m.__CJS__import__11__,
    M = c.__CJS__export_default__ || c.__CJS__import__12__,
    k = E.__CJS__export_default__ || E.__CJS__import__13__,
    w = (I.__CJS__export_default__ || I.__CJS__import__14__,
    S.__CJS__import__15__).F_BROKER_NOPEN,
    G = R.__CJS__export_default__ || R.__CJS__import__16__,
    H = N.__CJS__export_default__ || N.__CJS__import__17__,
    Z = f.__CJS__export_default__ || f.__CJS__import__18__,
    z = g.__CJS__export_default__ || g.__CJS__import__19__,
    X = b.__CJS__export_default__ || b.__CJS__import__20__,
    L = J.__CJS__export_default__ || J.__CJS__import__21__;
  P.UNI_SCRIPT_DEFINE && P.UNI_SCRIPT_DEFINE.OEM && P.UNI_SCRIPT_DEFINE.MICRO;
  var Q = {
      path: "platforms/mp-weixin/webview/index",
      style: { navigationBarTitleText: " ", enablePullDownRefresh: !1 },
      buildPlugin: "1",
      name: "WebviewIndex",
      meta: { signature: w.COMMON },
    },
    V = [].concat(r(v), r(A), []),
    W = [].concat(
      r(x),
      r(B),
      r(U),
      r(F),
      r(j),
      r(q),
      r(y),
      r(D),
      r(K),
      r(M),
      r(k),
      r(H),
      r(Z),
      r(G),
      r(L)
    ),
    Y = {
      pages: V,
      globalStyle: {
        navigationBarTextStyle: "black",
        navigationBarTitleText: "交易",
        navigationBarBackgroundColor: "#F8F8F8",
        backgroundColor: "#F8F8F8",
        h5: { titleNView: !1 },
      },
    };
  if (
    (P.UNI_SCRIPT_DEFINE,
    (Y.subPackages = W),
    Y.pages.unshift(Q),
    "plugin" === P.env.MP_PLATFORM &&
      Y.pages.unshift({
        path: "platforms/mp-weixin/plugin-component",
        buildPlugin: "1",
        name: "PluginComponent",
      }),
    P.UNI_SCRIPT_DEFINE &&
      !P.UNI_SCRIPT_DEFINE.PURE_MINIAPP &&
      (T = Y.subPackages).push.apply(T, r(z)),
    (P.UNI_SCRIPT_DEFINE && P.UNI_SCRIPT_DEFINE.PURE_MINIAPP) ||
      P.env.PURE_MINIAPP)
  ) {
    var $,
      __ = [];
    B.forEach(function (_) {
      var r = _.root;
      _.pages.forEach(function (_) {
        __.push(e(e({}, _), {}, { path: "".concat(r, "/").concat(_.path) }));
      });
    }),
      (Y.pages = [Q].concat(r(A), __)),
      (Y.subPackages = []),
      (null == (_ = null == P ? void 0 : P.argv)
        ? void 0
        : _.includes("--with-devtools")) &&
        ($ = Y.subPackages).push.apply($, r(X));
  }
  h.exports = function () {
    var _;
    if (P.env.BUSI_NAME) {
      Y.pages = Y.pages.filter(function (_) {
        return "1" === (null == _ ? void 0 : _.buildPlugin);
      });
      var t = [];
      (Y.subPackages || []).forEach(function (_) {
        var r = [];
        _.pages.forEach(function (_) {
          "1" === (null == _ ? void 0 : _.buildPlugin) && r.push(_);
        }),
          W.length > 0 && t.push(e(e({}, _), {}, { pages: r }));
      }),
        (Y.subPackages = t);
    }
    P.platform ||
      Y.subPackages.find(function (_) {
        return "pages/analysis" === (null == _ ? void 0 : _.root);
      }) ||
      (_ = Y.subPackages).push.apply(_, r(O));
    var a = [];
    return (
      (a = a.concat(Y.pages)),
      (Y.subPackages || []).forEach(function (_) {
        _.pages.forEach(function (r) {
          a.push(
            e(e({}, r), {}, { path: "".concat(_.root, "/").concat(r.path) })
          );
        });
      }),
      (Y.routes = a),
      Y
    );
  };
}
var e_ = (null == h.exports ? {} : h.exports).default || h.exports;
exports.__CJS__export_default__ = e_;
