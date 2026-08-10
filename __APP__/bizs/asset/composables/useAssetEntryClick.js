var e = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var r = require("../../../common/vendor.js");
require("../../../service/broker.js"), require("../../../utils/index.js");
var t = require("../../../utils/navigator.js"),
  i = require("../../../utils/getPlatform.js"),
  o = require("../../../config/key.js"),
  s = require("../../../model/act/useGovBondsInfo.js"),
  u = require("../../../model/index/useAssetActivity.js"),
  a = require("../../../stores/red-point/useQuickEntry.js"),
  n = require("../../../stores/new-stock/useNewStockEntryTip.js"),
  c = require("../../../stores/user/useUserinfo.js"),
  l = require("../../../adapter/router.js"),
  d = require("../../../service/stat/mp-weixin.js");
require("../../../service/sdk/lib/api.js");
var v = require("../../../service/sdk/platform/mp-weixin.js"),
  f = require("../../../config/broker/11100/index.js");
exports.useAssetEntryClick = function (y) {
  var k = y.assetFetchData,
    p = y.handleEntryAdvClick,
    m = i.getPlatform().isZxg,
    N = a.useQuickEntry(),
    S = n.useNewStockEntryTip(),
    E = S.isClickedNewStock,
    h = S.newStockOnClick,
    _ = r.storeToRefs(S).isHasNew,
    q = c.useUserinfoStore(),
    w = r.storeToRefs(q).userinfo,
    R = q.forceGetUserInfo,
    T = u.useAssetActivity().isShowETFRaceRedPoint,
    j = r.ref(!1),
    A = r.ref("1" !== r.index.getStorageSync(o.SHADOW_ACCOUNT_REDPOINT)),
    C = r.ref(!0);
  return {
    onEntryClick: function (i) {
      var u,
        a = {};
      if (
        "NewStock" === i.routeName &&
        (N.deleteRedPoint(f.brokerConfig.dictionary.Enties.ipo.routeName),
        _.value && !E())
      )
        return (
          h(),
          void l
            .router()
            .push({ name: "NewStockRecords", query: { purchase_type: "2" } })
        );
      if ("ProductDuoTianQi" === i.routeName) {
        var n = (null == (u = w.value) ? void 0 : u.activityinfo) || {},
          c = n.activity_id,
          y = void 0 === c ? "" : c,
          S = n.activity_acct,
          q = void 0 === S ? "" : S,
          R = n.activity_type,
          T = void 0 === R ? "" : R,
          b = e(
            { jump_by: "inner" },
            "jxbActivity" === i.type
              ? {
                  isRelaunch: 0,
                  activity_id: y,
                  activity_acct: q,
                  activity_type: T,
                }
              : {}
          );
        return l
          .router()
          .push({
            name: i.routeName,
            query: e(
              e(e({}, l.route().query), b),
              {},
              { showSwitchToast: "0" }
            ),
          });
      }
      if ("AssetAll" === i.routeName) {
        var g = N.allEntryBubble;
        "股东卡" === (null == g ? void 0 : g.contentText) &&
          d.stat.click("trade.asset.newer_shareholder_bubble_click"),
          N.deleteBizHallAfterClick(),
          (C.value = !0);
      }
      if (k.hasNewStock && "NewStock" === i.routeName)
        return l
          .router()
          .push({ name: i.routeName, query: { hasNewStock: "1" } });
      if ("etfRace" === i.routeName) {
        var x = r.index.getStorageSync(o.ETF_RACE_ETF_ICON_REDPOINT) || {};
        return (
          (null == x ? void 0 : x.isClicked) ||
            r.index.setStorageSync(
              o.ETF_RACE_ETF_ICON_REDPOINT,
              e(e({}, x), {}, { isClicked: !0 })
            ),
          (j.value = !1),
          void setTimeout(function () {
            var e =
              "https://zqact03.tenpay.com/activity/page/etfEnrollMatchFourthPhase/#/index?target=rank&frombroker=".concat(
                f.brokerConfig.base.code
              );
            m ? v.sdk.redirect("WebBrowser", { p_url: e }) : t.uniHref(e);
          }, 100)
        );
      }
      return (
        "ShadowAccount" === i.routeName &&
          (r.index.setStorageSync(o.SHADOW_ACCOUNT_REDPOINT, "1"),
          (A.value = !1)),
        "BizBrokerService" === i.routeName &&
          (a = e(e({}, a), r.pick(i, ["key", "isMargin", "replace"]))),
        (a = e(e({}, a), p(i, s.RP_CACHE_TYPE.ASSET) || {})),
        l.router().push({ name: i.routeName, query: a })
      );
    },
    showEtfRaceRed: j,
    showShadowaccountRed: A,
    refreshEtfRaceRed: function () {
      j.value = T();
    },
    refreshEntryRedDotOnAppear: function () {
      C.value && m && ((C.value = !1), R());
    },
  };
};
