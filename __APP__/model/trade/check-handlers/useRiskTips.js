var n = require("../../../@babel/runtime/helpers/defineProperty"),
  e = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var o = require("../../../common/vendor.js"),
  t = require("../../../common/components/Dialog/index.js"),
  i = require("../../../config/key.js"),
  r = require("../../../cgi/signProtocol.js");
require("../../../config/enum.js"),
  require("../../../domain/entities/trade-stock/stock-order.js"),
  require("../../../domain/entities/trade-stock/condition-order.js"),
  require("../../../service/broker.js"),
  require("../../../config/enum/trade.js");
var c = require("../../../service/stat/mp-weixin.js"),
  s = require("../../../config/broker/11100/index.js");
exports.useRiskTips = function (u) {
  var a,
    l = u.stock,
    f = u.statPrefix,
    d = u.checkService,
    _ = null == (a = o.getCurrentInstance()) ? void 0 : a.proxy;
  function k(n) {
    f && c.stat.click("".concat(f, ".").concat(n));
  }
  function m() {
    var t, r, c, s;
    try {
      var u =
          (null == (r = null == (t = l.value.quote) ? void 0 : t.info)
            ? void 0
            : r.market) || "",
        a = ""
          .concat(
            (null == (s = null == (c = l.value.quote) ? void 0 : c.info)
              ? void 0
              : s.secu_code) || "",
            ":"
          )
          .concat(u),
        f = o.index.getStorageSync(i.TRADE_RISK_TIPS_STOCK_DIC) || {},
        d = o.dayjs().format("YYYYMMDD");
      (f = e(e({}, f), {}, n({}, a, d))),
        o.index.setStorageSync(i.TRADE_RISK_TIPS_STOCK_DIC, f);
    } catch (n) {
      return !1;
    }
  }
  function g() {
    var n, e, t, r;
    try {
      var c =
          (null == (e = null == (n = l.value.quote) ? void 0 : n.info)
            ? void 0
            : e.market) || "",
        s = ""
          .concat(
            (null == (r = null == (t = l.value.quote) ? void 0 : t.info)
              ? void 0
              : r.secu_code) || "",
            ":"
          )
          .concat(c),
        u = o.index.getStorageSync(i.TRADE_RISK_TIPS_STOCK_DIC) || {};
      if (!u[s]) return !1;
      var a = o.dayjs().format("YYYYMMDD");
      return o.dayjs(a).diff(o.dayjs(u[s]), "days") < 1;
    } catch (n) {
      return !1;
    }
  }
  function v(n, e) {
    return new Promise(function (o, i) {
      if (g()) return o(!0);
      t.Dialog({
        context: _,
        message: "当前股票股价".concat(
          1 === n ? "小于" : "接近",
          "1元。根据交易所规则，如果公司股票收盘价连续20个交易日低于1元，将触及交易类强制退市情形，公司股票将被交易所终止上市交易。请确认相关风险，谨慎投资。"
        ),
        showCancelButton: !0,
        cancelButtonText: "继续交易",
        confirmButtonText: "取消交易",
        onConfirm: function () {
          i(e), k("stop.lower_than_".concat(n, "_risk_stock_cancel"));
        },
        onCancel: function () {
          m(), o(!0), k("stop.lower_than_".concat(n, "_risk_stock_confirm"));
        },
      }),
        k("stop.lower_than_".concat(n, "_risk_stock"));
    });
  }
  return {
    checkTradeRiskHandler: function (n) {
      var e, i, c;
      switch (n.retcode) {
        case "sign_gemhzj":
          return (function (n) {
            return new Promise(function (e, o) {
              t.Dialog({
                context: _,
                message:
                  "2020年8月24日起，所有创业板股票将实施新交易规则，涨跌幅调整为20%，交易申报数量、报价范围、盘中临时停牌机制均有调整。请注意交易风险，理性参与投资",
                confirmButtonText: "已知晓",
                showCancelButton: !0,
                onConfirm: function () {
                  r.signProtocol.signGemHzj().then(function () {
                    d.auth.needSignGemHzj = !1;
                  }),
                    e(!0),
                    k("stop.sign_gemhzj_confirm");
                },
                onCancel: function () {
                  o(n);
                },
              }),
                k("stop.sign_gemhzj");
            });
          })(n);
        case "broker-stock-risk":
          return void 0 !== (c = u.skipBrokerStockRisk) &&
            ("function" == typeof c ? c() : o.isRef(c) ? c.value : c)
            ? Promise.resolve(!0)
            : (
                null == (i = null == (e = s.brokerConfig) ? void 0 : e.trade)
                  ? void 0
                  : i.enableCondSettingRiskTips
              )
            ? new Promise(function (n, e) {
                t.Dialog({
                  context: _,
                  title: "风险提示",
                  message: d.auth.tradeNoticeInfo,
                  showCancelButton: !0,
                  cancelButtonText: "取消",
                  confirmButtonText: "确认",
                  onConfirm: function () {
                    var e, o, t, i;
                    r.signProtocol
                      .signTradeRiskStock({
                        market:
                          null ==
                          (o = null == (e = l.value.quote) ? void 0 : e.info)
                            ? void 0
                            : o.market,
                        code:
                          null ==
                          (i = null == (t = l.value.quote) ? void 0 : t.info)
                            ? void 0
                            : i.secu_code,
                      })
                      .catch(function (n) {}),
                      n(!0),
                      k("stop.cond_setting_risk_confirm");
                  },
                  onCancel: function () {
                    e({
                      retcode: "COND_SETTING_RISK_CANCEL",
                      retmsg: "取消条件单设置",
                    }),
                      k("stop.cond_setting_risk_cancel");
                  },
                }),
                  k("stop.cond_setting_risk");
              })
            : (function (n) {
                return new Promise(function (e, o) {
                  t.Dialog({
                    context: _,
                    message: d.auth.tradeNoticeInfo,
                    cancelButtonText: "继续交易",
                    confirmButtonText: "取消交易",
                    showCancelButton: !0,
                    onConfirm: function () {
                      o("取消交易"), k("stop.sign_risk_stock_cancel");
                    },
                    onCancel: function () {
                      var i, c, s, u;
                      r.signProtocol
                        .signTradeRiskStock({
                          market:
                            null ==
                            (c = null == (i = l.value.quote) ? void 0 : i.info)
                              ? void 0
                              : c.market,
                          code:
                            null ==
                            (u = null == (s = l.value.quote) ? void 0 : s.info)
                              ? void 0
                              : u.secu_code,
                        })
                        .then(function (n) {
                          e(!0);
                        })
                        .catch(function (i) {
                          103422153 === i.retcode
                            ? t.Dialog({
                                context: _,
                                title: "风险提示",
                                message: i.retmsg || "提交异常，请重试",
                                onConfirm: function () {
                                  o(n);
                                },
                              })
                            : e(!0);
                        }),
                        k("stop.sign_risk_stock_confirm");
                    },
                  }),
                    k("stop.risk_stock");
                });
              })(n);
        case "delisting-arrangement-risk":
          return (function (n) {
            return new Promise(function (e, o) {
              if (g()) return e(!0);
              t.Dialog({
                context: _,
                message:
                  "根据交易所规则，进入退市整理期的证券即将终止上市，请注意退市风险，谨慎投资。",
                showCancelButton: !0,
                cancelButtonText: "继续交易",
                confirmButtonText: "取消交易",
                onConfirm: function () {
                  o(n), k("stop.delisting_arr_risk_stock_cancel");
                },
                onCancel: function () {
                  m(), e(!0), k("stop.delisting_arr_risk_stock_confirm");
                },
              }),
                k("stop.delisting_arr_risk_stock");
            });
          })(n);
        case "less-than-one-stock-risk":
          return v(1, n);
        case "less-than-one-point-one-stock-risk":
          return v(1.1, n);
        default:
          return Promise.resolve(!0);
      }
    },
  };
};
