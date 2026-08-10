var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../@babel/runtime/helpers/defineProperty"),
  n = require("../../common/vendor.js"),
  a = require("../../cgi/trade.js"),
  o = require("./useTradeSet.js"),
  u = require("../../config/enum.js"),
  c = require("../../common/components/Dialog/index.js"),
  i = require("../../service/connect/index.js"),
  s = require("../../config/cgi.js"),
  d = require("../../utils/index.js"),
  _ = require("./useStockInfo.js"),
  m = require("../../cgi/password.js"),
  l = require("../../components/Password/index.js"),
  f = require("./debtConfig.js");
require("../../service/broker.js");
var v = require("../../service/auth/auth.js"),
  p = require("../../service/auth/auth.type.js"),
  T = require("../../config/broker/11100/index.js"),
  h = require("../../service/connect/maps.js");
exports.useTradeDebt = function () {
  var A,
    E,
    k = n.getCurrentInstance().proxy,
    g = _.useStockInfo(),
    x = g.fetchStockInfo,
    y = g.stockInfo,
    S = g.transInfo,
    C = g.stockName,
    D = g.handleFetchStockInfo,
    I = o.useTradeSet(),
    b = I.tradeInitWrapper,
    q = I.tradeSetSubmit,
    R = n.ref(""),
    w = n.ref(""),
    N = n.reactive({
      earn_days: "",
      today_date: "",
      lockup_days: "",
      endlock_date: "",
      cashout_date: "",
      commision_rate: "",
      max_buy_money: "",
      matchType: "",
      needRepoTradeRiskTip: "",
    }),
    O = n.ref(0),
    j = n.ref(0),
    P = n.ref(""),
    M = n.ref(!1),
    L = n.ref(1e3),
    K = (null == (A = T.brokerConfig.trade) ? void 0 : A.repoPermission) || {},
    B = K.permissionTips,
    J = K.permissionConfirm,
    H = K.openRepoPermissionOnline,
    V = n.computed(function () {
      switch (y.value.market_state) {
        case u.MARKET_STATE.NOT_TRADEDAY:
          return "已休市，券商清算完成前/夜市委托开始前提交的订单将会失效，之后提交的订单将在下个交易日交易";
        case u.MARKET_STATE.NOT_OPEN:
          return "未开市，现在发起的委托将在9:15开市后进行交易";
        case u.MARKET_STATE.SIESTA:
          return "午间休市，现在发起的委托将在13:00开市后进行交易";
        case u.MARKET_STATE.CLOSED:
          return "已休市，券商清算完成前/夜市委托开始前提交的订单将会失效，之后提交的订单将在下个交易日交易";
        default:
          return "";
      }
    }),
    F = n.computed(function () {
      var e,
        r = n.__CJS__export_div__(
          n.__CJS__export_div__(
            n.__CJS__export_mul__(
              n.__CJS__export_mul__(N.earn_days, O.value),
              j.value
            ),
            365
          ),
          100
        ),
        t = (null == (e = f.debtConfig[w.value]) ? void 0 : e.rate) || 0,
        a = n.__CJS__export_div__(n.__CJS__export_mul__(j.value, t), 1e4);
      return n.__CJS__export_reduce__(r, a);
    });
  return {
    amount: j,
    code: w,
    connect: function () {
      i.connector({
        source: i.SOURCE.AJAX,
        scheme: [h.SCHEME.DEBT_TRADE_HQ],
        beforeRequest: t({}, s.API_STOCK_INFO, function () {
          return (
            !(
              !d.isTradeTime() ||
              y.value.market_state === u.MARKET_STATE.NOT_TRADEDAY
            ) &&
            !(!w.value || !R.value) && {
              market: R.value,
              code: w.value,
              needquote: 1,
              needfive: 1,
            }
          );
        }),
        data: t({}, s.API_STOCK_INFO, function (e) {
          var r = e.info,
            t = r.market;
          r.secu_code === w.value &&
            t === R.value &&
            D({ res: e, code: w.value });
        }),
      });
    },
    expectedIncome: F,
    fetchStockInfo: x,
    initTrade:
      ((E = r(
        e().mark(function r() {
          var t;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.prev = 0),
                      (e.next = 3),
                      b(function (e) {
                        return a.tradeCgi.init({
                          type: "1",
                          market: R.value,
                          code: w.value,
                          retry_time: e,
                        });
                      })
                    );
                  case 3:
                    (t = e.sent),
                      (N.earn_days = t.earn_days),
                      (N.today_date = t.today_date),
                      (N.lockup_days = t.lockup_days),
                      (N.endlock_date = t.endlock_date),
                      (N.cashout_date = t.cashout_date),
                      (N.commision_rate = t.commision_rate),
                      (N.max_buy_money = t.max_buy_money),
                      (N.matchType =
                        t.matchType || u.TRADE_MATCH_TYPE.NOT_NEED_MATCH),
                      (N.needRepoTradeRiskTip = "1" === t.repo_risk_tips || !1),
                      (e.next = 10);
                    break;
                  case 7:
                    (e.prev = 7),
                      (e.t0 = e.catch(0)),
                      c.Dialog({
                        context: k,
                        message: e.t0.retmsg || "网络繁忙 请稍后再试",
                      });
                  case 10:
                  case "end":
                    return e.stop();
                }
            },
            r,
            null,
            [[0, 7]]
          );
        })
      )),
      function () {
        return E.apply(this, arguments);
      }),
    isTrading: M,
    market: R,
    metaData: N,
    onConfirmLend: function () {
      if (
        (function () {
          var e = !1;
          return (
            M.value &&
              ((e = !0),
              c.Dialog({ context: k, message: "请等待当前交易请求完成" })),
            N.earn_days ||
              ((e = !0), c.Dialog({ context: k, message: "请等待完成初始化" })),
            (O.value && j.value) ||
              ((e = !0),
              c.Dialog({ context: k, message: "请输入年化率和申购金额" })),
            e
          );
        })()
      )
        return !1;
      (M.value = !0),
        Promise.resolve()
          .then(function () {
            return new Promise(function (e, r) {
              O.value <= 0 &&
                r({
                  retcode: "EINVALIDRATE",
                  retmsg: "申购年化利率必须大于0.000",
                }),
                e(!0);
            });
          })
          .then(function () {
            return new Promise(function (e, r) {
              var t = L.value;
              switch (String(R.value)) {
                case u.MARKET.HA:
                case u.MARKET.SA:
                  if (!j.value || j.value % t)
                    return r({
                      retcode: "EINVALIDAMOUNT",
                      retmsg: "借出金额必须为".concat(t, "元或其整数倍"),
                    });
                  if (j.value > 1e9)
                    return r({
                      retcode: "EINVALIDAMOUNT",
                      retmsg: "借出金额最大为1,000,000,000元",
                    });
                  break;
                default:
                  return r({
                    retcode: "EINVALIDMARKET",
                    retmsg: "没有获取到正确的市场代码",
                  });
              }
              e();
            });
          })
          .then(function () {
            return new Promise(
              (function () {
                var t = r(
                  e().mark(function r(t, n) {
                    var a;
                    return e().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              m.passwordCgi.shouldCheckPassword({
                                market: R.value,
                              })
                            );
                          case 2:
                            (a = e.sent),
                              "1" === a.needcheck
                                ? v.Auth({
                                    biometricsScene:
                                      p.BiometricsScene.DEBT_TRADE,
                                    context: k,
                                    theme: l.THEME.TRADE,
                                    isTrade: !0,
                                    showErrorWithNotice: !1,
                                    onSuccess: function (e) {
                                      var r = e.encodePwd;
                                      t(r);
                                    },
                                    onCancel: function () {
                                      n();
                                    },
                                    onHide: function () {
                                      n();
                                    },
                                  })
                                : t();
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, r);
                  })
                );
                return function (e, r) {
                  return t.apply(this, arguments);
                };
              })()
            );
          })
          .then(function (e) {
            return (function (e) {
              return new Promise(function (r, t) {
                P.value && t({ retcode: "ENOTAVAILABLE", retmsg: P.value }),
                  r(e);
              });
            })(e);
          })
          .then(function (t) {
            return ((a = r(
              e().mark(function r(t) {
                var a;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          n.index.showLoading({ title: "借出中" }),
                          (e.next = 3),
                          q({
                            token: t,
                            action: "2",
                            type: 1,
                            code: w.value,
                            name: C.value,
                            market: R.value,
                            quantity: j.value,
                            price: O.value,
                            matchType: N.matchType,
                            riskVer: "1",
                          })
                        );
                      case 3:
                        (a = e.sent),
                          (M.value = !1),
                          k.$router.push({
                            name: "TradeDebtResult",
                            query: {
                              action: u.ACTION.SELL,
                              retcode: a.retcode,
                            },
                          });
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, r);
              })
            )),
            function (e) {
              return a.apply(this, arguments);
            })(t);
            var a;
          })
          .catch(function (e) {
            if (((M.value = !1), e))
              switch (null == e ? void 0 : e.retcode) {
                case "ECANCEL":
                case "PASSWORD_CANCEL":
                  break;
                case "ELACKMONEY":
                  c.Dialog({
                    context: k,
                    message: "资金账户余额不足，需转账".concat(e.retmsg, "元"),
                    showCancelButton: !0,
                    confirmButtonText: "转入资金",
                    onConfirm: function () {
                      k.$router.push({
                        name: "TransferFund",
                        query: {
                          money: e.retmsg,
                          from: "debt",
                          market: R.value,
                          code: w.value,
                          name: C.value,
                        },
                      });
                    },
                  });
                  break;
                case 176206971:
                  c.Dialog({
                    context: k,
                    message:
                      e.retmsg ||
                      B ||
                      "您还未开通通用回购交易权限，请先开通权限",
                    showCancelButton: H,
                    cancelButtonText: "我知道了",
                    confirmButtonText: H ? J : "我知道了",
                    onConfirm: function () {
                      H && k.$router.push({ name: "BizDebtIndex" });
                    },
                  });
                  break;
                default:
                  c.Dialog({ context: k, message: e.retmsg }),
                    k.$stat.click("trade.tradedebt.request.fail");
              }
          });
    },
    rate: O,
    stockInfo: y,
    stockName: C,
    tradeTips: V,
    transInfo: S,
    unit: L,
  };
};
