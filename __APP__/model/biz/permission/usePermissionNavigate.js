require("../../../@babel/runtime/helpers/Arrayincludes");
var e,
  n,
  a,
  o = require("../../../@babel/runtime/helpers/defineProperty");
require("../../../app.js");
var i = require("../../../common/vendor.js"),
  t = require("./constants.js"),
  r = require("../../../service/navigateMp.js"),
  E = require("../../../utils/navigator.js"),
  I = require("../../../config/mpConfig.js"),
  u = require("../../../utils/getPlatform.js");
require("../../../service/broker.js");
var S = require("../../../common/components/Dialog/index.js"),
  s = require("../../../adapter/router.js"),
  l = require("../../../config/broker/11100/index.js"),
  c = l.brokerConfig.dictionary.Enties || {},
  M = function (e) {
    var n = c[e];
    return n && !n.hidden ? n.routeName : "";
  },
  P =
    (o((e = {}), t.PERMISSION_KEY.GEM, M("gem")),
    o(e, t.PERMISSION_KEY.KE_CHUANG, M("kechuang")),
    o(e, t.PERMISSION_KEY.BJ, M("bj")),
    o(e, t.PERMISSION_KEY.GGT, M("ggt")),
    o(e, t.PERMISSION_KEY.KZZ, M("kzz")),
    o(e, t.PERMISSION_KEY.REPO, M("debtPermission")),
    o(e, t.PERMISSION_KEY.NQ, {
      stocktransfer: M("stocktransfer"),
      stocktransferAuth: M("stocktransferAuth"),
    }),
    o(e, t.PERMISSION_KEY.ST, M("st")),
    o(e, t.PERMISSION_KEY.KC_GROW, M("kechuanggrowth")),
    o(e, t.PERMISSION_KEY.ALL, M("permission")),
    o(e, t.PERMISSION_KEY.MAIN_BOARD, ""),
    o(e, t.PERMISSION_KEY.ETF, ""),
    e),
  g =
    (o((n = {}), t.PERMISSION_KEY.MAIN_BOARD, "a"),
    o(n, t.PERMISSION_KEY.ETF, "etf"),
    o(n, t.PERMISSION_KEY.KE_CHUANG, "kch"),
    o(n, t.PERMISSION_KEY.GEM, "chy"),
    o(n, t.PERMISSION_KEY.KZZ, "bond"),
    o(n, t.PERMISSION_KEY.GGT, "hk"),
    n),
  N =
    (o((a = {}), t.PERMISSION_KEY.MAIN_BOARD, "hs"),
    o(a, t.PERMISSION_KEY.ETF, "fund"),
    o(a, t.PERMISSION_KEY.KE_CHUANG, "hskcb"),
    o(a, t.PERMISSION_KEY.GEM, "cyb"),
    o(a, t.PERMISSION_KEY.KZZ, "kzz"),
    o(a, t.PERMISSION_KEY.GGT, "ggt"),
    a);
exports.usePermissionNavigate = function (e) {
  var n = e.router,
    a = e.simpleMode,
    o = e.isKeChuangOpened,
    c = e.hasNqHolder,
    M = u.getPlatform(),
    R = M.isZxg,
    K = M.isMpPlugin,
    p = M.isInMainXcx;
  function O(e) {
    var n,
      a,
      o = g[e],
      t = "/pages/index/market?currentTab=".concat(o || "", "&isRelaunch=1");
    if (K) r.navigateTo({ url: t, linkType: I.linkTypeMap.plugin2MainMp });
    else if (p)
      null == (a = null == (n = i.wx$1) ? void 0 : n.miniProgram) ||
        a.reLaunch({ url: t });
    else if (R) {
      var u = N[e] || "hs";
      location.href = "qqstock://GotoAppLocation?info=".concat(
        encodeURIComponent(JSON.stringify({ path: "hangqing/".concat(u) }))
      );
    } else E.hrefToWzqDomain("/market/index", o ? { currentTab: o } : {});
  }
  function _() {
    a.value
      ? K
        ? r.navigateTo({
            url: "/pages/market/pages/ETFPage",
            linkType: I.linkTypeMap.plugin2MainMp,
          })
        : E.hrefToWzqDomain("/pages/market/pages/ETFPage")
      : O(t.PERMISSION_KEY.ETF);
  }
  function v() {
    a.value ? T(t.PERMISSION_KEY.GEM) : O(t.PERMISSION_KEY.GEM);
  }
  function d() {
    a.value ? T(t.PERMISSION_KEY.GGT) : O(t.PERMISSION_KEY.GGT);
  }
  function m() {
    K
      ? r.navigateTo({
          url: "/pages/market/pages/ConvertibleBondPage",
          linkType: I.linkTypeMap.plugin2MainMp,
        })
      : E.hrefToWzqDomain("/hq/ConvertibleBond");
  }
  function f() {
    a.value ? m() : O(t.PERMISSION_KEY.KZZ);
  }
  function Y() {
    var e, n;
    !K || a.value
      ? !p || a.value
        ? R
          ? (location.href = "qqstock://GoHangQingHotList?info=".concat(
              encodeURIComponent(JSON.stringify({ type: "bjs" }))
            ))
          : a.value
          ? T(t.PERMISSION_KEY.BJ)
          : E.hrefToWzqDomain("/bj-rank")
        : null == (n = null == (e = i.wx$1) ? void 0 : e.miniProgram) ||
          n.navigateTo({
            url: "/pages/additional/webview/index?url=".concat(
              encodeURIComponent(
                "https://wzq.tenpay.com/mp/v2/index.html#/bj-rank"
              )
            ),
          })
      : r.navigateTo({
          url: "/pages/additional/webview/index?url=".concat(
            encodeURIComponent(
              "https://wzq.tenpay.com/mp/v2/index.html#/bj-rank"
            )
          ),
          linkType: I.linkTypeMap.plugin2MainMp,
        });
  }
  function k() {
    a.value ? O(t.PERMISSION_KEY.MAIN_BOARD) : O(t.PERMISSION_KEY.KE_CHUANG);
  }
  function T(e) {
    if (e === t.PERMISSION_KEY.KC_GROW && o) {
      var a = o.value
        ? P[t.PERMISSION_KEY.KC_GROW]
        : P[t.PERMISSION_KEY.KE_CHUANG];
      if (a) return void n.push({ name: a });
    }
    if (e !== t.PERMISSION_KEY.NQ) {
      var i = P[e];
      i
        ? n.push({ name: i })
        : S.Dialog({
            message: "自选股暂不支持该交易权限开通，请联系"
              .concat(l.brokerConfig.base.name, "客服")
              .concat(l.brokerConfig.base.tel),
          });
    } else {
      var r = P[t.PERMISSION_KEY.NQ],
        E = (null == c ? void 0 : c.value)
          ? null == r
            ? void 0
            : r.stocktransferAuth
          : null == r
          ? void 0
          : r.stocktransfer;
      E
        ? n.push({ name: E })
        : S.Dialog({
            message: "自选股暂不支持该交易权限开通，请联系"
              .concat(l.brokerConfig.base.name, "客服")
              .concat(l.brokerConfig.base.tel),
          });
    }
  }
  return {
    toMarketPage: O,
    toGemPage: v,
    toETFPage: _,
    toGgtPage: d,
    toKzzPage: f,
    toKzzRankPage: m,
    toBjRankPage: Y,
    toKcGrowPage: k,
    toPermissionPage: T,
    navigateOpened: function (e) {
      [t.PERMISSION_KEY.MAIN_BOARD, t.PERMISSION_KEY.KE_CHUANG].includes(e)
        ? O(e)
        : e === t.PERMISSION_KEY.GEM
        ? v()
        : [
            t.PERMISSION_KEY.NQ,
            t.PERMISSION_KEY.ST,
            t.PERMISSION_KEY.ALL,
          ].includes(e)
        ? T(e)
        : e === t.PERMISSION_KEY.REPO
        ? n.push({ name: "Debt" })
        : e === t.PERMISSION_KEY.BJ
        ? Y()
        : e === t.PERMISSION_KEY.ETF
        ? _()
        : e === t.PERMISSION_KEY.GGT
        ? d()
        : e === t.PERMISSION_KEY.KZZ
        ? f()
        : e === t.PERMISSION_KEY.KC_GROW && k();
    },
    navigateToPositionList: function () {
      var e,
        a,
        o,
        i,
        t,
        r,
        E =
          null !==
            (e =
              null !==
                (a =
                  null ==
                  (i =
                    null == (o = null == n ? void 0 : n.currentRoute)
                      ? void 0
                      : o.value)
                    ? void 0
                    : i.name) && void 0 !== a
                ? a
                : null == (t = null == n ? void 0 : n.currentRoute)
                ? void 0
                : t.name) && void 0 !== e
            ? e
            : null == (r = s.route())
            ? void 0
            : r.name;
      "AssetIndex" !== E &&
        "MarginAssetIndex" !== E &&
        n.push({ name: "AssetIndex" }).catch(function () {});
    },
    navigateToIndexDetail: function (e, n, a) {
      var o = {
        code: e,
        scode: e,
        market: n,
        type: n,
        name: a || "",
        cls: "Z",
      };
      i.index.navToQuote(o, {});
    },
    navigateToSectorDetail: function (e, n) {
      var a = { code: e, scode: e, market: "p", type: "p", name: n || "" };
      i.index.navToQuote(a, {});
    },
  };
};
