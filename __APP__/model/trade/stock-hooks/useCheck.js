var e = require("../../../@babel/runtime/helpers/defineProperty"),
  t = require("../../../@babel/runtime/helpers/objectSpread2"),
  n = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var c = require("../../../common/vendor.js"),
  r = require("../../../common/components/Dialog/index.js"),
  a = require("../../../service/stat/mp-weixin.js"),
  i = require("../../../cgi/signProtocol.js");
require("../../../service/broker.js");
var s = require("../../../service/log/index.js"),
  l = require("../../../stores/user/useUserinfo.js"),
  u = require("../../../config/enum.js"),
  d = require("../../../domain/entities/trade-stock/condition-order.js"),
  m = require("../../../config/key.js"),
  f = require("../../../utils/market.js"),
  _ = require("../../../utils/getPlatform.js"),
  k = require("../../../utils/index.js"),
  g = require("../../kzz/useKzz.js"),
  v = require("../../../domain/applications/trade-stock/types.js"),
  h = require("../useSplitMode.js"),
  p = require("../../../service/aegis/utils.js"),
  C = require("../../../config/broker/11100/index.js");
exports.useCheck = function (x) {
  var T,
    B = x.order,
    b = x.checkScene,
    y = x.tradeStockStore,
    S = null == (T = c.getCurrentInstance()) ? void 0 : T.proxy,
    w = new s.Log("trade/useCheck"),
    q = c.inject("curPageContext"),
    z = c.storeToRefs(l.useUserinfoStore()).userinfo,
    D = y.tradeAccount,
    P = y.tradeAuth,
    j = y.stock,
    A = c.ref([]),
    E = h.useSplitMode().splitModeQuery;
  function I() {
    return new Promise(function (e, t) {
      var n = C.brokerConfig.base.name || "",
        o = C.brokerConfig.base.tel || "";
      r.Dialog({
        context: q || S,
        message:
          "根据交易所规则，该证券已从当前市场退市，不支持继续交易。如您仍持有该证券，请联系券商客服咨询处理。"
            .concat(n, "客服电话：")
            .concat(o),
        confirmButtonText: "联系券商客服",
        showCancelButton: !0,
        cancelButtonText: "取消",
        messageAlign: "left",
        onConfirm: function () {
          var e,
            t = String(o).replace(/-/g, "");
          t &&
            (null == (e = null == S ? void 0 : S.$sdk)
              ? void 0
              : e.makePhoneCall) &&
            S.$sdk.makePhoneCall(t),
            a.stat.click("trade.trade.stop.delisted_contact_broker");
        },
        onCancel: function () {
          a.stat.click("trade.trade.stop.delisted_cancel");
        },
      }),
        a.stat.click("trade.trade.stop.delisted_dialog_show"),
        t("股票已退市");
    });
  }
  function O() {
    var e, t, n, o;
    try {
      var r =
          (null == (t = null == (e = j.value.quote) ? void 0 : e.info)
            ? void 0
            : t.market) || "",
        a = ""
          .concat(
            (null == (o = null == (n = j.value.quote) ? void 0 : n.info)
              ? void 0
              : o.secu_code) || "",
            ":"
          )
          .concat(r),
        i = c.index.getStorageSync(m.TRADE_RISK_TIPS_STOCK_DIC) || {};
      if (!i[a]) return !1;
      var s = c.dayjs().format("YYYYMMDD");
      return c.dayjs(s).diff(c.dayjs(i[a]), "days") < 1;
    } catch (r) {
      return !1;
    }
  }
  function R() {
    var n, o, r, a;
    try {
      var i =
          (null == (o = null == (n = j.value.quote) ? void 0 : n.info)
            ? void 0
            : o.market) || "",
        s = ""
          .concat(
            (null == (a = null == (r = j.value.quote) ? void 0 : r.info)
              ? void 0
              : a.secu_code) || "",
            ":"
          )
          .concat(i),
        l = c.index.getStorageSync(m.TRADE_RISK_TIPS_STOCK_DIC) || {},
        u = c.dayjs().format("YYYYMMDD");
      (l = t(t({}, l), {}, e({}, s, u))),
        c.index.setStorageSync(m.TRADE_RISK_TIPS_STOCK_DIC, l);
    } catch (i) {
      return !1;
    }
  }
  function K(e) {
    return new Promise(function (t, n) {
      if (O()) return t(!0);
      r.Dialog({
        context: q || S,
        message: "当前股票股价".concat(
          1 === e ? "小于" : "接近",
          "1元。根据交易所规则，如果公司股票收盘价连续20个交易日低于1元，将触及交易类强制退市情形，公司股票将被交易所终止上市交易。请确认相关风险，谨慎投资。"
        ),
        showCancelButton: !0,
        cancelButtonText: "继续交易",
        confirmButtonText: "取消交易",
        onConfirm: function () {
          n("取消交易：股价提醒"),
            a.stat.click(
              "trade.trade.stop.lower_than_".concat(e, "_risk_stock_cancel")
            );
        },
        onCancel: function () {
          R(),
            t(!0),
            a.stat.click(
              "trade.trade.stop.lower_than_".concat(e, "_risk_stock_confirm")
            );
        },
      }),
        a.stat.click("trade.trade.stop.lower_than_".concat(e, "_risk_stock"));
    });
  }
  return {
    errorTips: A,
    checkTradeRiskHandler: function (e) {
      switch (e.retcode) {
        case "kzz_risk":
          return (
            d.Condition,
            B.isBuyAction
              ? (function (e) {
                  return (
                    (g.useKzz().tradeRiskItem.value = e),
                    new Promise(function (e, t) {
                      var n, o;
                      r.Dialog({
                        context:
                          (null == (o = null == (n = q || S) ? void 0 : n.$refs)
                            ? void 0
                            : o.kzzRiskDialog) ||
                          q ||
                          S,
                        selector: "#trade-kzz-risk-dialog",
                        showCancelButton: !0,
                        cancelButtonText: "继续交易",
                        confirmButtonText: "取消交易",
                        onConfirm: function () {
                          t("取消交易：可转债风险提示");
                        },
                        onCancel: function () {
                          e(!0);
                        },
                      });
                    })
                  );
                })(e.data)
              : Promise.resolve(!0)
          );
        case "sign_kcbkzz":
          return (
            d.Condition,
            B.isBuyAction
              ? new Promise(function (e) {
                  r.Dialog({
                    context: q || S,
                    message:
                      "根据上交所要求，投资者参与科创板可转债应符合科创板股票投资者适当性管理要求，未开通科创板交易权限的投资者不能将所持可转债转换为股票，请关注并知晓不能转股可能造成的风险。",
                    confirmButtonText: "已知晓",
                    onConfirm: function () {
                      return o(
                        n().mark(function t() {
                          var o, c, r, s;
                          return n().wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.prev = 0),
                                      (t.next = 3),
                                      i.signProtocol.signKcbKzz({
                                        market:
                                          null ==
                                          (c =
                                            null == (o = j.value.quote)
                                              ? void 0
                                              : o.info)
                                            ? void 0
                                            : c.market,
                                        code:
                                          null ==
                                          (s =
                                            null == (r = j.value.quote)
                                              ? void 0
                                              : r.info)
                                            ? void 0
                                            : s.secu_code,
                                      })
                                    );
                                  case 3:
                                    (P.needShowKcbKzzTip = !1), (t.next = 8);
                                    break;
                                  case 6:
                                    (t.prev = 6), (t.t0 = t.catch(0));
                                  case 8:
                                    e(!0),
                                      a.stat.click(
                                        "trade.trade.stop.sign_kcbkzz_confirm"
                                      );
                                  case 9:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[0, 6]]
                          );
                        })
                      )();
                    },
                  }),
                    a.stat.click("trade.trade.stop.sign_kcbkzz");
                })
              : Promise.resolve(!0)
          );
        case "sign_gemhzj":
          return new Promise(function (e, t) {
            r.Dialog({
              context: q || S,
              message:
                "2020年8月24日起，所有创业板股票将实施新交易规则，涨跌幅调整为20%，交易申报数量、报价范围、盘中临时停牌机制均有调整。请注意交易风险，理性参与投资",
              confirmButtonText: "已知晓",
              showCancelButton: !0,
              onConfirm: function () {
                i.signProtocol.signGemHzj().then(function () {
                  P.needSignGemHzj = !1;
                }),
                  e(!0),
                  a.stat.click("trade.trade.stop.sign_gemhzj_confirm");
              },
              onCancel: function () {
                t("取消交易：创业板核准制风险提示");
              },
            }),
              a.stat.click("trade.trade.stop.sign_gemhzj");
          });
        case "broker-stock-risk":
          return new Promise(function (e, t) {
            r.Dialog({
              context: q || S,
              message: P.tradeNoticeInfo,
              cancelButtonText: "继续交易",
              confirmButtonText: "取消交易",
              showCancelButton: !0,
              onConfirm: function () {
                t("取消交易：风险股票提示"),
                  a.stat.click("trade.trade.stop.sign_risk_stock_cancel");
              },
              onCancel: function () {
                var n, o, c, s;
                i.signProtocol
                  .signTradeRiskStock({
                    market:
                      null ==
                      (o = null == (n = j.value.quote) ? void 0 : n.info)
                        ? void 0
                        : o.market,
                    code:
                      null ==
                      (s = null == (c = j.value.quote) ? void 0 : c.info)
                        ? void 0
                        : s.secu_code,
                  })
                  .then(function (t) {
                    e(!0);
                  })
                  .catch(function (n) {
                    103422153 === n.retcode
                      ? r.Dialog({
                          context: q || S,
                          title: "风险提示",
                          message: n.retmsg || "提交异常，请重试",
                          onConfirm: function () {
                            t("风险提示");
                          },
                        })
                      : e(!0);
                  }),
                  a.stat.click("trade.trade.stop.sign_risk_stock_confirm");
              },
            }),
              a.stat.click("trade.trade.stop.risk_stock");
          });
        case "delisting-arrangement-risk":
          return B.isBuyAction
            ? new Promise(function (e, t) {
                if (O()) return e(!0);
                r.Dialog({
                  context: q || S,
                  message:
                    "根据交易所规则，进入退市整理期的证券即将终止上市，请注意退市风险，谨慎投资。",
                  showCancelButton: !0,
                  cancelButtonText: "继续交易",
                  confirmButtonText: "取消交易",
                  onConfirm: function () {
                    t("取消交易：退市整理股票提示"),
                      a.stat.click(
                        "trade.trade.stop.delisting_arr_risk_stock_cancel"
                      );
                  },
                  onCancel: function () {
                    R(),
                      e(!0),
                      a.stat.click(
                        "trade.trade.stop.delisting_arr_risk_stock_confirm"
                      );
                  },
                }),
                  a.stat.click("trade.trade.stop.delisting_arr_risk_stock");
              })
            : Promise.resolve(!0);
        case "less-than-one-stock-risk":
          return B.isBuyAction ? K(1) : Promise.resolve(!0);
        case "less-than-one-point-one-stock-risk":
          return B.isBuyAction ? K(1.1) : Promise.resolve(!0);
        case "st-stock-risk":
          return B.isBuyAction
            ? new Promise(function (e, t) {
                var n, o, i;
                if (O()) return e(!0);
                var s =
                    (null == (o = null == (n = j.value.quote) ? void 0 : n.info)
                      ? void 0
                      : o.name) || "",
                  l = /^\*ST/i.test(s),
                  u = l ? "*ST" : "ST",
                  d = c.get(C.brokerConfig, "trade.riskTips", {}),
                  m = d.stRiskTip,
                  f = void 0 === m ? "" : m,
                  _ = d.stStarRiskTip,
                  k =
                    f ||
                    "根据交易所规则，该股票已被交易所实施风险警示提醒(ST)，请关注相关风险，谨慎投资。",
                  g =
                    (void 0 === _ ? "" : _) ||
                    "根据交易所规则，该股票已被交易所实施退市风险警示提醒(*ST)，请关注相关风险，谨慎投资。";
                r.Dialog({
                  context: q || S,
                  message: l ? g : k,
                  showCancelButton: !0,
                  cancelButtonText: "继续交易",
                  confirmButtonText: "取消交易",
                  onConfirm: function () {
                    var e;
                    t("取消交易：ST股票交易提示"),
                      a.stat.click(
                        "trade.trade.stop.".concat(
                          null == (e = null == u ? void 0 : u.toLowerCase)
                            ? void 0
                            : e.call(u),
                          "_risk_stock_cancel"
                        )
                      );
                  },
                  onCancel: function () {
                    var t;
                    R(),
                      e(!0),
                      a.stat.click(
                        "trade.trade.stop.".concat(
                          null == (t = null == u ? void 0 : u.toLowerCase)
                            ? void 0
                            : t.call(u),
                          "_risk_stock_confirm"
                        )
                      );
                  },
                }),
                  a.stat.click(
                    "trade.trade.stop.".concat(
                      null == (i = null == u ? void 0 : u.toLowerCase)
                        ? void 0
                        : i.call(u),
                      "_risk_stock"
                    )
                  );
              })
            : Promise.resolve(!0);
        default:
          return Promise.resolve(!0);
      }
    },
    checkCanTrade: function () {
      return new Promise(function (e, t) {
        if (
          ("1" === z.value.trade_limit && (w.info("交易受限"), t("交易受限")),
          j.value.secu_info.status !== u.STOCK_STATE.DELISTED)
        ) {
          if (
            !j.value.isGGT ||
            j.value.market_state !== u.MARKET_STATE.NOT_TRADEDAY
          )
            return B.isBuyAction && B.orderType === u.ORDER_TYPES.OLO
              ? (w.info("碎股单不支持买入"),
                void r.Dialog({
                  context: q || S,
                  message: "根据交易所规则，碎股交易只可卖出，不支持买入",
                  confirmButtonText: "我知道了",
                  showCancelButton: !1,
                  onConfirm: function () {
                    e(!1);
                  },
                }))
              : void e(!0);
          r.Dialog({
            context: q || S,
            message: "当前非港股通交易日，不支持买卖委托提交",
            confirmButtonText: "我知道了",
            cancelButtonText: "继续交易",
            showCancelButton: !0,
            messageAlign: "center",
            onConfirm: function () {
              e(!1);
            },
            onCancel: function () {
              e(!0);
            },
          });
        } else
          I().catch(function () {
            e(!1);
          });
      });
    },
    checkDelistedStock: I,
    checkPriceValidHandler: function (e) {
      return new Promise(function (t, n) {
        if (
          (A.value.push("".concat(e.retmsg)),
          a.stat.click("trade.trade.stop.".concat(e.retcode)),
          !e ||
            "price_match_minimum_tick_size_error" !== e.retcode ||
            b === v.CheckScene.userInput)
        )
          return (
            e &&
              "price_zero" === e.retcode &&
              b === v.CheckScene.dialog &&
              r.Dialog({
                context: q || S,
                message: "请输入价格",
                confirmButtonText: "确定",
              }),
            n(e.retcode)
          );
        r.Dialog({
          context: q || S,
          title: "",
          message:
            "根据交易所规则，不同价格的港股其最小价格变动单位不同，当前证券价格变动单位需为".concat(
              e.data,
              "的整数倍"
            ),
          confirmButtonText: "我知道了",
          cancelButtonText: "继续交易",
          showCancelButton: !0,
          messageAlign: "left",
          onConfirm: function () {
            n(e.retcode);
          },
          onCancel: function () {
            t(!0);
          },
        });
      });
    },
    checkPriceHandler: function (e) {
      return new Promise(function (t, n) {
        A.value.push((null == e ? void 0 : e.retmsg) || ""),
          e &&
            "price_cage_error" === e.retcode &&
            b !== v.CheckScene.userInput &&
            a.stat.click("trade.trade.price_cage_error"),
          n(e.retcode);
      });
    },
    checkAuthHandle: function (e) {
      return new Promise(function (n, o) {
        var c,
          i,
          s,
          l,
          u,
          d,
          m,
          f,
          _,
          k,
          g,
          v,
          h,
          p = {
            no_kc_auth: {
              enable: !(null == (c = C.brokerConfig.dictionary.Enties.kechuang)
                ? void 0
                : c.hidden),
              confirmBtn: "开通科创板权限",
              name: "BizKeChuangOpen",
            },
            no_kc_growth_auth: {
              enable: !(null ==
              (i = C.brokerConfig.dictionary.Enties.kechuanggrowth)
                ? void 0
                : i.hidden),
              confirmBtn: "去开通",
              cancelBtn: "我知道了",
              name: "BizKeChuangGrowthOpen",
            },
            no_ggt_auth: {
              title: "请先开通港股通权限",
              enable: !(null == (s = C.brokerConfig.dictionary.Enties.ggt)
                ? void 0
                : s.hidden),
              confirmBtn: "开通权限",
              name: "BizGGTOpen",
            },
            no_st_auth: {
              enable: !(null == (l = C.brokerConfig.dictionary.Enties.st)
                ? void 0
                : l.hidden),
              confirmBtn: "开通ST权限",
              name: "BizSt",
            },
            no_gem_auth: {
              enable: !(null == (u = C.brokerConfig.dictionary.Enties.gem)
                ? void 0
                : u.hidden),
              confirmBtn: "立即开通",
              name: "BizGem",
            },
            no_gemLow_auth: {
              enable: !(null == (d = C.brokerConfig.dictionary.Enties.gem)
                ? void 0
                : d.hidden),
              confirmBtn: "立即升级",
              name: "BizGem",
            },
            no_kzz_auth: {
              enable: !(null == (m = C.brokerConfig.dictionary.Enties.kzz)
                ? void 0
                : m.hidden),
              confirmBtn: "开通权限",
              name: "BizKzz",
            },
            bj_auth_notopen: {
              enable:
                C.brokerConfig.dictionary.Enties.bj &&
                !C.brokerConfig.dictionary.Enties.bj.hidden,
              confirmBtn: "开通",
              name: "BizBjIndex",
            },
            bj_auth_opening: { enable: !1, confirmBtn: "", name: "" },
            gz_auth_notopen: {
              enable:
                C.brokerConfig.dictionary.Enties.stocktransfer &&
                !C.brokerConfig.dictionary.Enties.stocktransfer.hidden,
              confirmBtn: (
                null ==
                (_ =
                  null == (f = C.brokerConfig.trade) ? void 0 : f.nqOpenConfig)
                  ? void 0
                  : _.authOpenOnline
              )
                ? "开通"
                : "联系券商",
              confirmType: (
                null ==
                (g =
                  null == (k = C.brokerConfig.trade) ? void 0 : k.nqOpenConfig)
                  ? void 0
                  : g.authOpenOnline
              )
                ? ""
                : "callBroker",
              name: (
                null ==
                (h =
                  null == (v = C.brokerConfig.trade) ? void 0 : v.nqOpenConfig)
                  ? void 0
                  : h.authOpenOnline
              )
                ? "BizStockTransferAuth"
                : "",
            },
            gz_auth_opening: { enable: !1, confirmBtn: "", name: "" },
          },
          x = (null == S ? void 0 : S.$route).query,
          T = e.retcode,
          B = e.retmsg,
          b = e.data;
        w.info("untradable ".concat(T));
        var y = p[T];
        function z() {
          var e = "".concat(C.brokerConfig.base.tel).replace(/-/g, "");
          null == S || S.$sdk.makePhoneCall(e);
        }
        y.enable
          ? r.Dialog({
              context: q || S,
              title: (null == y ? void 0 : y.title) || "请先开通权限",
              message: B,
              confirmButtonText: null == y ? void 0 : y.confirmBtn,
              showCancelButton: !0,
              showClose: !0,
              cancelButtonText: "继续交易",
              messageAlign: "justify",
              onConfirm: function () {
                var e = { callBroker: z };
                y.confirmType && e[y.confirmType]
                  ? e[y.confirmType]()
                  : null == S ||
                    S.$router.push({
                      name: null == y ? void 0 : y.name,
                      query: t(
                        t(
                          {
                            from: "trade",
                            market: x.market,
                            code: x.code,
                            holder: x.holder,
                          },
                          b || {}
                        ),
                        {},
                        { fromEmbedded: S.embeddedMode }
                      ),
                    }),
                  a.stat.click("trade.trade.stop.".concat(T, "_confirm")),
                  o(T);
              },
              onCancel: function (e, t) {
                if ("close" === (null == t ? void 0 : t.from))
                  return (
                    a.stat.click("trade.trade.stop.".concat(T, "_close")), o(T)
                  );
                a.stat.click("trade.trade.stop.".concat(T, "_continue")), n(!0);
              },
            })
          : r.Dialog({
              context: q || S,
              title: (null == y ? void 0 : y.title) || "请先开通权限",
              message: B,
              showCancelButton: !0,
              showClose: !0,
              cancelButtonText: "继续交易",
              confirmButtonText: "我知道了",
              onConfirm: function () {
                a.stat.click("trade.trade.stop.".concat(T, "_confirm")), o(T);
              },
              onCancel: function (e, t) {
                if ("close" === (null == t ? void 0 : t.from))
                  return (
                    a.stat.click("trade.trade.stop.".concat(T, "_close")), o(T)
                  );
                a.stat.click("trade.trade.stop.".concat(T, "_continue")), n(!0);
              },
            }),
          a.stat.click("trade.trade.stop.".concat(T));
      });
    },
    checkBuyAmountHandler: function (e) {
      return new Promise(function (t, n) {
        return e.stop
          ? (r.Dialog({ context: q || S, message: e.retmsg }),
            a.stat.click("trade.trade.stop.amount_error"),
            n(e.retcode))
          : (A.value.push(e.retmsg || ""), t(!0));
      });
    },
    checkAccountMoneyHandler: function (e) {
      return new Promise(function (n, o) {
        var i = j.value.secu_info.name;
        if ("money_not_enough" === e.retcode) {
          var s = function () {
            var n,
              o,
              r,
              s,
              l,
              u = t(
                {
                  from: "trade",
                  fromEmbedded: S.embeddedMode,
                  market:
                    null == (o = null == (n = j.value.quote) ? void 0 : n.info)
                      ? void 0
                      : o.market,
                  code:
                    null == (s = null == (r = j.value.quote) ? void 0 : r.info)
                      ? void 0
                      : s.secu_code,
                  name: i,
                  holder: D.stockholder_code,
                  money: null == (l = e.data) ? void 0 : l.needMoney,
                  price: B.price,
                  amount: B.amount,
                },
                E.value
              ),
              d = _.getPlatform(),
              m = d.isInIframe,
              g = d.isZxg;
            if (S.embeddedMode && m && !g) {
              var v = location.href.split("?")[0];
              v = v.replace("iframe.html", "index.html");
              var h = c.dist.urltools.make(
                "".concat(v, "#/transfer/fund"),
                t({}, u)
              );
              (h = k.keepClientURlArgs(h)),
                S.$sdk.navigateTo({ url: h, newWebview: !0 });
            } else
              null == S || S.$router.push({ name: "TransferFund", query: u });
            a.stat.click(
              "trade.trade.stop.money_not_enough_confirm",
              void 0,
              void 0,
              f.getStatStockId(j.value)
            );
          };
          return C.brokerConfig.trade.canSkipFundCheck
            ? (r.Dialog({
                context: q || S,
                title: "可用资金不足",
                message: e.retmsg,
                confirmButtonText: "转入资金",
                cancelButtonText: "继续交易",
                showClose: !0,
                showCancelButton: !0,
                messageAlign: "left",
                onCancel: function (t, c) {
                  return "close" === (null == c ? void 0 : c.from)
                    ? o(e.retcode)
                    : (a.stat.click(
                        "trade.trade.stop.money_not_enough_continue",
                        void 0,
                        void 0,
                        f.getStatStockId(j.value)
                      ),
                      n(!0));
                },
                onConfirm: function () {
                  return s(), o(e.retcode);
                },
              }),
              void a.stat.click(
                "trade.trade.stop.money_not_enough",
                void 0,
                void 0,
                f.getStatStockId(j.value)
              ))
            : (r.Dialog({
                context: q || S,
                title: "可用资金不足",
                message: e.retmsg,
                confirmButtonText: "转入资金",
                showCancelButton: !0,
                messageAlign: "left",
                onConfirm: function () {
                  s();
                },
              }),
              a.stat.click(
                "trade.trade.stop.money_not_enough",
                void 0,
                void 0,
                f.getStatStockId(j.value)
              ),
              o(e.retcode));
        }
        return "max_amount_not_enough" === e.retcode
          ? (r.Dialog({
              context: q || S,
              title: "可用资金不足",
              message: e.retmsg,
              messageAlign: "left",
              confirmButtonText: "我知道了",
              cancelButtonText: "继续交易",
              showCancelButton: !0,
              onConfirm: function () {
                a.stat.click("trade.trade.stop.max_amount_not_enough_confirm"),
                  o(e.retcode);
              },
              onCancel: function () {
                a.stat.click("trade.trade.continue.max_amount_not_enough"),
                  n(!0);
              },
            }),
            void a.stat.click("trade.trade.stop.max_amount_not_enough"))
          : e.retcode
          ? (r.Dialog({ context: q || S, message: e.retmsg }), o(e.retcode))
          : n(!0);
      });
    },
    checkOrderAmountCanSellHandler: function (e) {
      return new Promise(function (t, n) {
        var o = j.value,
          c = o.quantityUnit,
          i = o.stockTypeName,
          s = o.sellTipsText,
          l = C.brokerConfig.trade,
          u = l.fullRefreshTips,
          d = void 0 === u ? "" : u,
          m = l.halfRefreshTips,
          _ = void 0 === m ? "" : m,
          k = S && S.embeddedMode ? _ : d,
          g = {
            not_hold: "你未持有".concat(j.value.stockTypeName).concat(k),
            hold_qty: "您的可卖数量不足".concat(k),
            route_qty: ""
              .concat(s, "目前最大可卖")
              .concat(D.max_sell_qty)
              .concat(c)
              .concat(k),
            max_sell_qty: "已有"
              .concat(D.route_qty)
              .concat(c, "卖出中，当前无可卖股票")
              .concat(k),
            sellable: "已有"
              .concat(D.route_qty)
              .concat(c, "卖出中，当前剩")
              .concat(D.max_sell_qty)
              .concat(c, "可卖")
              .concat(k),
            max_sell_qty_1: ""
              .concat(s)
              .concat(D.route_qty)
              .concat(c, "卖出中，当前无可卖")
              .concat(i)
              .concat(k),
            sellable_1: ""
              .concat(s)
              .concat(D.route_qty)
              .concat(c, "卖出中，当前剩")
              .concat(D.max_sell_qty)
              .concat(c, "可卖")
              .concat(k),
            max_sell_qty_2: ""
              .concat(D.route_qty)
              .concat(c, "卖出中，当前无可卖")
              .concat(i)
              .concat(k),
            sellable_2: ""
              .concat(D.route_qty)
              .concat(c, "卖出中，当前剩")
              .concat(D.max_sell_qty)
              .concat(c, "可卖")
              .concat(k),
          };
        r.Dialog({
          context: q || S,
          message: g[e.retcode],
          confirmButtonText: "我知道了",
          cancelButtonText: "继续交易",
          showCancelButton: !0,
          onConfirm: function () {
            a.stat.click("trade.trade.stop.amount_cansell"), n(e.retcode);
          },
          onCancel: function () {
            a.stat.click("trade.trade.continue.amount_cansell"), t(!0);
          },
        }),
          a.stat.click(
            "trade.trade.stop.".concat(e.retcode),
            void 0,
            void 0,
            f.getStatStockId(j.value)
          );
      });
    },
    checkSellAmountValidHandler: function (e) {
      return new Promise(function (t, n) {
        switch (e.retcode) {
          case "amount_empty":
            r.Dialog({
              context: q || S,
              message: "请填写委托数量",
              confirmButtonText: "我知道了",
              onConfirm: function () {
                a.stat.click("trade.trade.stop.amount_empty"), n(e.retcode);
              },
            });
            break;
          case "sell-amount-over-limit":
            A.value.push(e.retmsg || ""), t(!0);
            break;
          case "bj_onetime_sell":
          case "bj_less_min_amount":
          case "kc_less_min_amount":
          case "ggt_onetime_sell":
          case "ggt_less_min_amount":
          case "kc_onetime_sell":
          case "amount_partial_max_noodd":
          case "amount_partial_max_hasodd":
            return (
              r.Dialog({
                context: q || S,
                message: e.retmsg,
                confirmButtonText: "调整数量",
                cancelButtonText: "我知道了",
                showCancelButton: !0,
                onConfirm: function () {
                  (B.amount = e.data.suggestAmount),
                    a.stat.click("trade.trade.stop.adjust_amount"),
                    n(e.retcode);
                },
                onCancel: function () {
                  n(e.retcode);
                },
              }),
              void a.stat.click("trade.trade.stop.amount_partial")
            );
          default:
            t(!0);
        }
      });
    },
    checkOrderGGTStockholderHandler: function (e) {
      return new Promise(function (t, n) {
        var o,
          c,
          i,
          s,
          l = e.retcode;
        r.Dialog({
          context: q || S,
          message: "请确认沪/深港通交易股东卡",
          confirmButtonText: "确认股东卡",
          showCancelButton: !0,
          showClose: !0,
          cancelButtonText: "继续交易",
          onConfirm: function () {
            a.stat.click("trade.trade.stop.".concat(l, "_confirm")), n(l);
          },
          onCancel: function (e, o) {
            if ("close" === (null == o ? void 0 : o.from))
              return (
                a.stat.click("trade.trade.stop.".concat(l, "_close")), n(l)
              );
            a.stat.click("trade.trade.stop.".concat(l, "_continue")), t(!0);
          },
        }),
          a.stat.click("trade.trade.stop.".concat(l)),
          p.reportEventSafely("mon_trade_submit_noholder", {
            ext3:
              null == (c = null == (o = j.value.quote) ? void 0 : o.info)
                ? void 0
                : c.market,
            ext4:
              null == (s = null == (i = j.value.quote) ? void 0 : i.info)
                ? void 0
                : s.secu_code,
          });
      });
    },
  };
};
