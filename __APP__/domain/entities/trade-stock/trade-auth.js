var e = require("../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  s = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/createClass"),
  a = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var n = Object.defineProperty,
  o = function (e, t, r) {
    return (
      (function (e, t, r) {
        t in e
          ? n(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r,
            })
          : (e[t] = r);
      })(e, "symbol" != a(t) ? t + "" : t, r),
      r
    );
  },
  c = require("../../../config/enum/trade.js"),
  h = require("../../../config/enum.js");
require("../../../service/broker.js");
var u = require("../../../service/aegis/utils.js"),
  d = require("../../../stores/user/useUserinfo.js"),
  _ = require("../../../model/trade/utils.js"),
  l = require("../../../config/broker/11100/index.js");
exports.AccountTradeAuth = (function () {
  function a() {
    s(this, a),
      o(this, "matchType", h.TRADE_MATCH_TYPE.NOT_NEED_MATCH),
      o(this, "matchTypeInfo", {}),
      o(this, "authorities", {
        st: !0,
        gem: !0,
        kc: !0,
        kc_growth: !0,
        bj: c.BJAccountStatus.opened,
        gz: c.GZAccountStatus.opened,
        ggt: c.GGTAccountStatus.opened,
      }),
      o(this, "gemRegisterStatus", "2"),
      o(this, "needSignGemHzj", !1),
      o(this, "needSignFirstTrade", !1),
      o(this, "tradeNoticeInfo", ""),
      o(this, "szKzzStatus", !0),
      o(this, "shKzzStatus", !0),
      o(this, "needShowKcbKzzTip", !1),
      o(this, "needSTRiskTips", !1),
      o(this, "needDelistingArrangementTips", !1),
      o(this, "needOneYuanRiskTips", !0),
      o(this, "ggtStatus", !1),
      o(this, "ggtShareHolderCardList", []),
      o(this, "ggtShareHolderCardListFallback", []),
      o(this, "ggtShareHolder", ""),
      o(this, "authFetchedFailed", !1),
      o(this, "fetchAuthFailed", !1);
  }
  var n;
  return (
    i(a, [
      {
        key: "getGGTShareHolderCardList",
        value: function () {
          var e;
          return (null == (e = this.ggtShareHolderCardList)
            ? void 0
            : e.length) > 0
            ? this.ggtShareHolderCardList
            : this.ggtShareHolderCardListFallback || [];
        },
      },
      {
        key: "handleFetchTradeAuthFail",
        value: function (e, t) {
          var r;
          try {
            if (e) {
              var s = (
                (null == (r = d.useUserinfoStore().userinfo)
                  ? void 0
                  : r.shareholdercards) || []
              )
                .filter(function (e) {
                  return "1" === e.ggt_status;
                })
                .map(function (e) {
                  return {
                    stockholder_code: e.code,
                    market: _.convertGGTStockHolderMarket(e.code),
                  };
                });
              if (s.length > 0)
                return (
                  (this.ggtShareHolderCardListFallback = s),
                  (this.fetchAuthFailed = !1),
                  (this.ggtShareHolder = t || s[0].stockholder_code),
                  void u.reportEventSafely("mon_trade_ggtcard_fallback")
                );
              u.reportEventSafely("mon_trade_ggtcard_fail");
            }
            this.fetchAuthFailed = !0;
          } catch (e) {
            this.fetchAuthFailed = !0;
          }
        },
      },
      {
        key: "fetchTradeAuth",
        value:
          ((n = r(
            t().mark(function e(r, s) {
              var i, a, n;
              return t().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), r.fetchTradeAuth(s);
                      case 2:
                        return (
                          (a = e.sent).match_type &&
                            u.reportEventSafely("mon_trade_unexpect_matchtype"),
                          (this.authFetchedFailed = !1),
                          (this.matchType =
                            a.match_type || h.TRADE_MATCH_TYPE.NOT_NEED_MATCH),
                          (this.matchTypeInfo = {
                            code: s.stock_code,
                            dealercode: l.brokerConfig.base.code,
                            dealername: l.brokerConfig.base.name,
                            credentialname: a.credentialname,
                            fundaccount: a.fundaccount,
                            flagTotal: "1" !== a.total_flag,
                            flagRisk: "1" !== a.risk_flag,
                            flagTerm: "1" !== a.term_flag,
                            flagInRange: "1" !== a.inrange_flag,
                            riskLevel: a.risk_level || "1",
                            investTerm: a.invest_term,
                            investRange: a.invest_range
                              ? a.invest_range.split(",")
                              : [],
                            riskLevelStock: a.stock_risk_level,
                            investTermStock: a.stock_invest_term,
                            investRangeStock: a.stock_invest_range
                              ? a.stock_invest_range.split(",")
                              : [],
                          }),
                          (this.authorities = {
                            st: "1" === (a.st_permission || "1"),
                            gem: "1" === (a.gem_permission || "1"),
                            kc: "1" === (a.kc_permission || "1"),
                            kc_growth: "1" === (a.kc_grow_permission || "1"),
                            bj: a.bj_status,
                            gz: a.gz_status,
                            ggt: a.ggt_status,
                          }),
                          (this.gemRegisterStatus =
                            a.gem_register_status || "2"),
                          (this.needSignGemHzj = "1" === a.need_sign_gem_hzj),
                          "0" === s.query_ft
                            ? (this.needSignFirstTrade = !1)
                            : ((n = "1" === a.need_sign_ft),
                              (this.needSignFirstTrade = n)),
                          e.abrupt(
                            "return",
                            ((this.szKzzStatus =
                              "1" === (a.sz_kzz_status || "1")),
                            (this.shKzzStatus =
                              "1" === (a.sh_kzz_status || "1")),
                            (this.needShowKcbKzzTip =
                              "1" === a.kcb_kzz_risk_tips),
                            (this.tradeNoticeInfo = a.notice_info || ""),
                            (this.needSTRiskTips = "1" === a.stRiskTips),
                            (this.needDelistingArrangementTips =
                              "1" === a.delistingArrangementTips),
                            (this.ggtShareHolderCardList =
                              a.hk_stock_connect || []),
                            (this.ggtShareHolder =
                              a.stockholder_code ||
                              (null == (i = this.ggtShareHolderCardList[0])
                                ? void 0
                                : i.stockholder_code) ||
                              ""),
                            a)
                          )
                        );
                      case 5:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          )),
          function (e, t) {
            return n.apply(this, arguments);
          }),
      },
      {
        key: "check",
        value: function (t, r) {
          var s = t.hasPurchasePermission(this.authorities, r),
            i = e(s, 2),
            a = i[0],
            n = i[1];
          return a ? [!0] : [!1, n];
        },
      },
      {
        key: "checkSuitability",
        value: function () {
          var e = l.brokerConfig.common.RISK[this.matchTypeInfo.riskLevelStock],
            t = (e && e.text) || "未知",
            r = {
              confirmButtonText: "更新风险测评",
              cancelButtonText: "取消",
              showCancelButton: !0,
            };
          switch (this.matchType) {
            case h.TRADE_MATCH_TYPE.NOT_NEED_MATCH:
            case h.TRADE_MATCH_TYPE.NEED_SIGN_MATCH_PRO:
              return [!0];
            case h.TRADE_MATCH_TYPE.NEED_SIGN_NOT_MATCH_PRO:
              return [!1, { retcode: "show-confirmation" }];
            case h.TRADE_MATCH_TYPE.NEED_LOAD_VIDEO:
              return [
                !1,
                {
                  retcode: "need_load_video",
                  retmsg: "该产品需风险测评为".concat(
                    t,
                    "及以上用户方可购买，你暂不符合。根据《上海证券业金融产品销售业务自律规范》，需前往就近营业部开通权限后方可买入。"
                  ),
                  data: r,
                },
              ];
            case h.TRADE_MATCH_TYPE.CAN_NOT_BUY:
              return [
                !1,
                {
                  retcode: "can_not_buy",
                  retmsg: "该产品需风险测评为".concat(
                    t,
                    "型及以上用户方可购买，你暂不符合。根据《证券期货投资者适当性管理办法》，你不能买入该产品。"
                  ),
                  data: r,
                },
              ];
            case h.TRADE_MATCH_TYPE.TEST_OUTTIME:
              return [
                !1,
                {
                  retcode: "test_outtime",
                  retmsg: "你的风险测评已过期，请先更新",
                  data: r,
                },
              ];
            case h.TRADE_MATCH_TYPE.NOT_TEST:
              return [
                !1,
                {
                  retcode: "not_test",
                  retmsg: "你的风险等级未测评，请先测评",
                  data: r,
                },
              ];
            case h.TRADE_MATCH_TYPE.RISK_LEVEL_OUTDATED:
              return [
                !1,
                {
                  retcode: "risk_level_outdated",
                  retmsg: "你的风险测评不完整，请先更新",
                  data: r,
                },
              ];
            case h.TRADE_MATCH_TYPE.OTHER_REASON:
              return [!1, { retcode: "other_reason" }];
            default:
              return [!0];
          }
        },
      },
    ]),
    a
  );
})();
