require("../../../app.js");
var e = require("../../../adapter/router.js"),
  t = require("../../../common/vendor.js"),
  i = require("../../../stores/app/useMode.js"),
  o = require("../../../model/biz/permission/usePermissionNavigate.js"),
  r = require("../../../model/biz/permission/constants.js"),
  n = require("../../../utils/getPlatform.js"),
  s = require("./constants.js");
exports.usePermissionExciteNavigate = function () {
  var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    u = t.storeToRefs(i.useModeStore()),
    _ = u.simpleMode,
    g = o.usePermissionNavigate({
      router: e.router(),
      simpleMode: _,
      isKeChuangOpened: a.isKeChuangOpened,
      hasNqHolder: a.hasNqHolder,
    }),
    E = n.getPlatform(),
    I = E.isZxg;
  function S(e, t) {
    "wzq_h5" !== e && "zxg_mp" !== e
      ? "zxg_app" !== e
        ? P(t)
        : g.toMarketPage(r.PERMISSION_KEY.MAIN_BOARD)
      : g.toMarketPage(r.PERMISSION_KEY.KE_CHUANG);
  }
  function P(e) {
    if (e.quote)
      if ("sector" !== e.quote.type) {
        var t = s.INDEX_MARKET_MAP[e.quote.code] || e.quote.market;
        g.navigateToIndexDetail(e.quote.code, t);
      } else g.navigateToSectorDetail(e.quote.code, e.quote.label);
  }
  return {
    goTrade: function (e) {
      var t = e.tradeTarget,
        i = e.permissionKey;
      if ("position" !== t)
        if ("index" === t && e.quote) P(e);
        else {
          var o = (function (e) {
            var t = n.getPlatform(),
              i = t.isZxg,
              o = t.isMpPlugin,
              r = t.isWzqXcx,
              s = t.isZxgXcx,
              a = t.isInWzqXcx,
              u = t.isInZxgXcx;
            return i
              ? "zxg_app"
              : r || a
              ? "wzq_mp"
              : o || s || u
              ? "zxg_mp"
              : e
              ? "lite_h5"
              : "wzq_h5";
          })(!!_.value);
          "kzz_rank" === t ||
          (function (e) {
            return (
              e === r.PERMISSION_KEY.KZZ ||
              e === r.PERMISSION_KEY.SH_KZZ ||
              e === r.PERMISSION_KEY.SZ_KZZ
            );
          })(i)
            ? (function (e) {
                "lite_h5" !== e && "wzq_mp" !== e
                  ? g.toMarketPage(r.PERMISSION_KEY.KZZ)
                  : g.toKzzRankPage();
              })(o)
            : "bj_rank" !== t && i !== r.PERMISSION_KEY.BJ
            ? i !== r.PERMISSION_KEY.GEM
              ? (function (e) {
                  return (
                    e === r.PERMISSION_KEY.GGT ||
                    e === r.PERMISSION_KEY.HGT ||
                    e === r.PERMISSION_KEY.SGT
                  );
                })(i)
                ? (function (e, t) {
                    "lite_h5" !== e && "wzq_mp" !== e
                      ? g.toMarketPage(r.PERMISSION_KEY.GGT)
                      : P(t);
                  })(o, e)
                : i !== r.PERMISSION_KEY.KC_GROW &&
                  i !== r.PERMISSION_KEY.KE_CHUANG
                ? e.quote
                  ? P(e)
                  : g.navigateOpened(i)
                : S(o, e)
              : (function (e, t) {
                  "wzq_h5" !== e && "zxg_mp" !== e
                    ? P(t)
                    : g.toMarketPage(r.PERMISSION_KEY.GEM);
                })(o, e)
            : (function (e, t) {
                "wzq_h5" !== e && "zxg_app" !== e ? P(t) : g.toBjRankPage();
              })(o, e);
        }
      else g.navigateToPositionList();
    },
    goOpen: function (e) {
      g.toPermissionPage(e.permissionKey);
    },
    goIndex: P,
    isZxg: I,
  };
};
