var e = require("../../@babel/runtime/helpers/slicedToArray");
require("../../@babel/runtime/helpers/Arrayincludes");
var r = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var o = require("../../common/vendor.js"),
  i = require("../../cgi/condition.js"),
  a = require("../../cgi/signProtocol.js"),
  c = require("../../config/key.js"),
  u = require("../../common/components/Dialog/index.js"),
  s = require("../../cgi/password.js"),
  d = require("../../components/Password/index.js"),
  l = require("../../config/enum.js"),
  m = require("../common/useServerTime.js"),
  p = require("../../config/errcode.js"),
  f = require("../../service/stat/mp-weixin.js"),
  v = require("../../domain/entities/trade-stock/condition-order.js"),
  h = require("../../cgi/trade/condition.js"),
  k = require("../../domain/entities/trade-stock/service/pre-check.js"),
  x = require("../../domain/applications/trade-stock/pre-condition-check.js"),
  g = require("../../stores/user/useUserinfo.js"),
  T = require("./stock-hooks/useCheck.js"),
  C = require("../../stores/app/useMode.js"),
  _ = require("../../filters/money.js");
require("../../service/broker.js");
var y = require("../../utils/market.js"),
  w = require("../../components/SubmitResult/enum.js"),
  S = require("./conditions/useCondProtocolCheck.js"),
  b = require("./conditions/useCondCheck.js"),
  P = require("../../utils/toast.js"),
  O = require("../../config/enum/condition.js"),
  E = require("./conditions/useConditionErrorHandle.js"),
  I = require("../../config/broker/11100/index.js"),
  q = {
    price: "0",
    amount: "0",
    order_price: "0",
    quantity: "0",
    cond_price: "0",
    trade_type: l.ACTION.BUY,
    valid_day_enum: "",
    cond_id: "",
  },
  R = null;
exports.useConditionOrderTrade = function (A) {
  var D,
    j,
    N,
    B,
    H,
    L,
    M,
    U,
    V = A.market,
    Y = A.code,
    $ = A.name,
    F = A.holder,
    Q = A.tradeAuth,
    G = A.tradeAccount,
    K = A.stock,
    W = null == (D = o.getCurrentInstance()) ? void 0 : D.proxy,
    Z = g.useUserinfoStore(),
    z = o.storeToRefs(Z).userinfo,
    J = C.useModeStore(),
    X = o.storeToRefs(J).simpleMode,
    ee = new h.TradeConditionStockService(),
    re = o.reactive(new v.Condition(ee)),
    ne = new k.ConditionOrderCheckService(re, G, Q),
    te = b.useCondCheck(ne).checkCompositeSync,
    oe = o.ref(!1),
    ie = m.useServerTime().checkTransferTime,
    ae = o.ref(!0),
    ce = o.ref(""),
    ue = o.ref(!1),
    se = o.ref(!1),
    de = o.ref(!1),
    le = o.ref(!1),
    me = o.ref(!1),
    pe = o.ref(!0),
    fe = !1,
    ve =
      (null == (N = null == (j = I.brokerConfig) ? void 0 : j.trade)
        ? void 0
        : N.signProtocolNeedRead) || !1,
    he = o.ref([]),
    ke = T.useCheck({ order: re, tradeStockStore: A }),
    xe = ke.errorTips,
    ge = ke.checkTradeRiskHandler,
    Te = ke.checkCanTrade,
    Ce = ke.checkAuthHandle,
    _e = E.useConditionErrorHandle(),
    ye = _e.setLastRetcode,
    we = _e.getErrorBtnText,
    Se = S.useCondProtocolCheck().checkBoxClick,
    be = o.computed(function () {
      return ae.value && !re.isUpdate;
    }),
    Pe = o.computed(function () {
      if (void 0 !== K.value.spreadAcc) return K.value.spreadAcc;
      if (!re.isInvestCondOrder && re.condPrice) {
        var e = re.condPrice.split(".")[1];
        if (e) return e.length;
      }
      if (re.isInvestCondOrder) {
        var r = (re.upperLimit || "").split(".")[1],
          n = (re.lowerLimit || "").split(".")[1],
          t = Math.max(
            (null == r ? void 0 : r.length) || 0,
            (null == n ? void 0 : n.length) || 0
          );
        if (t > 0) return t;
      }
    }),
    Oe = o.computed(function () {
      return (
        re.isUpdate,
        {
          confirmBuy: "保存设置",
          confirmSell: "保存设置",
          defaultText: "保存设置",
          investBtnText: "保存设置",
        }
      );
    }),
    Ee = o.computed(function () {
      var e = 0,
        r = re.condPrice,
        n = (K.value.secu_quote || {}).dqj;
      return r && n
        ? ((e = _.formatNoUnit(((+r - n) / n) * 100, !0)),
          0 === Number(e) ? "+".concat(_.formatNoUnit(0)) : e)
        : "+".concat(_.formatNoUnit(0));
    }),
    Ie = o.computed(function () {
      var e = re.condPrice,
        r = (K.value.secu_quote || {}).dqj;
      if (!e || !r) return 0;
      var n = ((+e - r) / r) * 100;
      return ""
        .concat(n >= 0 ? "+" : "-")
        .concat(Math.floor(Math.abs(n) * Math.pow(10, 2)) / Math.pow(10, 2));
    });
  function qe(e) {
    var r,
      n = ((null == (r = K.value) ? void 0 : r.secu_quote) || {}).dqj,
      t = Number(e),
      o = Number(n);
    n &&
      (t > o
        ? (re.remindType = O.PriceConditionRemindType.upTo)
        : t < o
        ? (re.remindType = O.PriceConditionRemindType.downTo)
        : ((re.remindType =
            re.tradeType === l.ACTION.SELL
              ? O.PriceConditionRemindType.upTo
              : O.PriceConditionRemindType.downTo),
          he.value.push(O.CondWeakTipsText.meet)));
  }
  function Re() {
    var e = W.$route.query.cond_info,
      r = W.$route.query.order_type,
      n = {};
    if (e)
      try {
        var o = decodeURIComponent(e);
        o.includes("{") || (o = decodeURIComponent(o)), (n = JSON.parse(o));
      } catch (e) {
        n = {};
      }
    return t({ order_type: r }, n);
  }
  function Ae() {
    var e, r, n, o;
    if (pe.value) {
      fe = !0;
      var i = Re(),
        a = t(
          t({}, q),
          {},
          {
            cond_price:
              null !==
                (e =
                  null == (o = null == (n = K.value.quote) ? void 0 : n.quote)
                    ? void 0
                    : o.dqj) && void 0 !== e
                ? e
                : "",
            quantity: null !== (r = K.value.minAmount) && void 0 !== r ? r : 0,
          },
          i
        );
      (re.isInvestCondOrder = i.order_type === l.ORDER_TYPES.INVEST),
        (re.condPrice = a.cond_price),
        (re.price = a.order_price),
        (re.amount = a.quantity),
        (re.tradeType = a.trade_type),
        (re.validDayEnum = a.valid_day_enum || ""),
        (re.endTime = a.end_time),
        (re.investPeriod = a.invest_period || ""),
        (re.investWeekday = a.invest_weekday || ""),
        (re.investDate = a.invest_date || ""),
        (re.investTime = a.invest_time || "10:00"),
        (re.investQuantity = a.invest_quantity || ""),
        (re.maxAmount = a.max_amount || ""),
        (re.highSettingExpanded = !(!a.upper_limit && !a.lower_limit)),
        (re.highSettingChecked = !(!a.upper_limit && !a.lower_limit)),
        (re.upperLimit = a.upper_limit || ""),
        (re.lowerLimit = a.lower_limit || ""),
        (re.buyPriceType = a.buy_price_type || O.PriceType.SellOne),
        (re.isInvestAmountMode = "" === re.investQuantity),
        re.validDayEnum ||
          (re.validDayEnum = re.isInvestCondOrder
            ? l.INVEST_ORDER_VALIDATES.YEAR1
            : l.ORDER_VALIDATES.YEAR),
        setTimeout(function () {
          fe = !1;
        }, 0);
    }
  }
  function De(e, r) {
    return je.apply(this, arguments);
  }
  function je() {
    return (je = n(
      r().mark(function e(n, t) {
        var o, a, c, u;
        return r().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if ((n && (ue.value = !1), !re.isUpdate)) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return");
              case 2:
                if (!ue.value) {
                  e.next = 4;
                  break;
                }
                return e.abrupt("return");
              case 4:
                return (
                  (se.value = !0),
                  (e.next = 7),
                  i.conditionOrderApi.orderInit().catch(function (e) {
                    return (
                      (se.value = !1),
                      me.value || ((me.value = !0), De()),
                      Promise.reject(e || new Error("条件单初始化失败"))
                    );
                  })
                );
              case 7:
                (c = e.sent),
                  (se.value = !1),
                  (ue.value = !0),
                  (re.condId = c.cond_id),
                  (ae.value = "1" === c.is_need_risk_tips),
                  (ce.value = c.can_not_open_reason),
                  (null == t ? void 0 : t.refreshOrderOnly) ||
                    ((re.validDayEnum = re.isInvestCondOrder
                      ? l.INVEST_ORDER_VALIDATES.YEAR1
                      : l.ORDER_VALIDATES.YEAR),
                    (u =
                      null ==
                      (a = null == (o = K.value.quote) ? void 0 : o.quote)
                        ? void 0
                        : a.dqj) && ((re.condPrice = u), (re.price = u)));
              case 9:
              case "end":
                return e.stop();
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  function Ne() {
    R && clearTimeout(R);
  }
  function Be() {
    return se.value
      ? ((de.value = !0), o.index.showLoading({ title: "正在初始化" }), !1)
      : ((de.value = !1), !0);
  }
  function He() {
    return Le.apply(this, arguments);
  }
  function Le() {
    return (Le = n(
      r().mark(function e() {
        return r().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  a.signProtocol.signConditionProtocal().catch(function (e) {
                    return (
                      u.Dialog({ context: W, message: "协议签署失败，请重试" }),
                      Promise.reject(e || new Error("协议签署失败"))
                    );
                  })
                );
              case 2:
                return (ae.value = !1), e.abrupt("return", !0);
              case 4:
              case "end":
                return e.stop();
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  function Me(e) {
    return new Promise(function (t, o) {
      if (!be.value) return t(!0);
      var i;
      ve
        ? (W.$router.push({ name: "ConditionProtocol" }), o("需要签署协议"))
        : u.Dialog({
            selector: "#condition-order-risk-dialog",
            context: e,
            title: "协议签署",
            showCancelButton: !0,
            cancelButtonText: "不同意",
            confirmButtonText: "同意并确认",
            beforeClose:
              ((i = n(
                r().mark(function e(n, i) {
                  return r().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ("confirm" !== n) {
                              e.next = 15;
                              break;
                            }
                            if (((e.prev = 1), !Se())) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt("return", void i(!1));
                          case 4:
                            return (e.next = 6), He();
                          case 6:
                            t(!0), (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(1)),
                              o("协议签署失败");
                          case 12:
                            i(), (e.next = 16);
                            break;
                          case 15:
                            o("取消协议签署"), i();
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 9]]
                  );
                })
              )),
              function (e, r) {
                return i.apply(this, arguments);
              }),
          }),
        (pe.value = !1);
    });
  }
  function Ue() {
    return ne.checkMarket();
  }
  function Ve(e) {
    return new Promise(function (r, n) {
      return u.Dialog({ context: W, message: e.retmsg }), n("input error");
    });
  }
  function Ye(e) {
    return new Promise(function (r, n) {
      if (e.stop)
        return (
          u.Dialog({ context: W, message: e.retmsg }),
          f.stat.click("trade.trade.stop.amount_error"),
          n("amount_error")
        );
      xe.value.push(e.retmsg), r(!0);
    });
  }
  function $e(e) {
    return new Promise(function (r, n) {
      var t;
      xe.value.push(re.createLimitTips(null == (t = e.data) ? void 0 : t.over)),
        r(!0);
    });
  }
  function Fe(e) {
    return new Promise(function (r, n) {
      xe.value.push((null == e ? void 0 : e.retmsg) || ""), r(!0);
    });
  }
  function Qe(e) {
    return new Promise(function (r, n) {
      [
        "kc_less_min_amount",
        "kc_onetime_sell",
        "amount_partial_max_noodd",
        "amount_partial_max_hasodd",
      ].includes(null == e ? void 0 : e.retcode)
        ? u.Dialog({
            context: W,
            message: e.retmsg,
            confirmButtonText: "调整数量",
            cancelButtonText: "我知道了",
            showCancelButton: !0,
            onConfirm: function () {
              (re.amount = e.data.suggestAmount),
                f.stat.click("trade.trade.stop.adjust_amount"),
                n(e.retcode);
            },
            onCancel: function () {
              n(e.retcode);
            },
          })
        : u.Dialog({
            context: W,
            message: null == e ? void 0 : e.retmsg,
            confirmButtonText: "我知道了",
            cancelButtonText: "仍要卖出",
            showCancelButton: !0,
            onConfirm: function () {
              n("取消");
            },
            onCancel: function () {
              r(!0), f.stat.click("trade.trade.stop.amount_error_confrim");
            },
          }),
        f.stat.click("trade.trade.stop.amount_error");
    });
  }
  function Ge(e) {
    return new Promise(function (r, n) {
      switch (null == e ? void 0 : e.retcode) {
        case "order-status-change":
          return (
            (function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { retmsg: "该条件单状态可能已变更，您可确认后重新创建" };
              u.Dialog({
                title: "".concat(re.orderTypeName, "失败"),
                context: W,
                message: e.retmsg,
                confirmButtonText: "重新创建",
                cancelButtonText: "知道了",
                showCancelButton: !0,
                onConfirm: function () {
                  W.$router.replace({
                    name: "TradeStock",
                    query: {
                      code: Y.value,
                      market: V.value,
                      name: encodeURIComponent($.value),
                      order_type: re.isInvestCondOrder
                        ? l.ORDER_TYPES.INVEST
                        : l.ORDER_TYPES.PRICE,
                    },
                  });
                },
              });
            })(),
            n()
          );
        case "not-trade-time":
          return u.Dialog({ context: W, message: e.retmsg }), n();
      }
    });
  }
  function Ke() {
    return We.apply(this, arguments);
  }
  function We() {
    return (We = n(
      r().mark(function e() {
        return r().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (((e.t0 = re.condId), e.t0)) {
                  e.next = 4;
                  break;
                }
                return (
                  (e.next = 4),
                  De().catch(function (e) {
                    return (
                      o.index.showToast({
                        title: "订单初始化失败，请刷新重试",
                        icon: "none",
                        duration: 2e3,
                      }),
                      Promise.reject(e)
                    );
                  })
                );
              case 4:
              case "end":
                return e.stop();
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  function Ze() {
    var e,
      r = Z.userinfo,
      n = void 0 === r ? {} : r,
      t = n.shareholdercards,
      i = void 0 === t ? [] : t,
      a = (
        (null == (e = I.brokerConfig.trade)
          ? void 0
          : e.checkShareHolderCards) || {}
      ).canBindOnline,
      c = void 0 !== a && a,
      s = I.brokerConfig.trade.canContact || !1;
    if (0 === i.length || o.isEmpty(n)) return !0;
    var d =
        i.findIndex(function (e) {
          return e.market === y.MARKET_CODE_SH;
        }) > -1,
      l =
        i.findIndex(function (e) {
          return e.market === y.MARKET_CODE_SZ;
        }) > -1,
      m = "我知道了";
    c ? (m = "添加股东卡") : s && (m = "联系券商客服");
    var p = "";
    V.value !== y.MARKET_CODE_SH || d
      ? V.value !== y.MARKET_CODE_SZ || l || (p = "深市")
      : (p = "沪市");
    var f = "请联系"
      .concat(I.brokerConfig.base.name, "：客服电话")
      .concat(I.brokerConfig.base.tel);
    return (
      !p ||
      (u.Dialog({
        context: W,
        title: "无法交易",
        message: "当前未开通".concat(p, "股东卡。如有需要，").concat(f),
        messageAlign: "left",
        showCancelButton: c || s,
        cancelButtonText: "我知道了",
        confirmButtonText: m,
        onConfirm: function () {
          if (c) W.$router.push({ name: "BizShareHolderBind" });
          else if (s) {
            var e = "".concat(I.brokerConfig.base.tel).replace(/-/g, "");
            W.$sdk.makePhoneCall(e);
          }
        },
      }),
      !1)
    );
  }
  return (
    o.watch(
      function () {
        return K.value;
      },
      function (e) {
        ne.setStock(e);
      }
    ),
    o.watch(
      function () {
        return re.condPrice;
      },
      function (e) {
        fe || (re.price = e), qe(e);
      }
    ),
    o.watch(
      [
        function () {
          return re.price;
        },
        function () {
          return G.max_buy_money;
        },
      ],
      function (r) {
        var n = e(r, 1)[0],
          t = Number(n);
        t &&
          !isNaN(t) &&
          G.max_buy_money &&
          G.debounceForGetMaxBuyQty(K.value, n);
      }
    ),
    o.onBeforeUnmount(function () {
      B && B();
    }),
    {
      createUpdateDiffConf: Oe,
      initing: se,
      waitingSign: de,
      needSign: be,
      init: ue,
      trading: le,
      resetForm: Ae,
      initOrderFront: function () {
        var e,
          r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          n = Re();
        if ((Ae(), !ue.value || r))
          if (
            ((re.condId = n.cond_id || ""),
            (re.isUpdate = Boolean(n.cond_id)),
            (re.isRecreate = Boolean(n.is_recreate)),
            (re.isInvestCondOrder = n.order_type === l.ORDER_TYPES.INVEST),
            De(r, { refreshOrderOnly: re.isRecreate || !pe.value }),
            re.isInvestCondOrder)
          )
            Ne(),
              (R = setTimeout(function () {
                var e = ne.investCondStockCheck();
                e &&
                  o.index.showToast({
                    title: e || "定期定投不支持当前标的",
                    icon: "none",
                    duration: 3e3,
                  });
              }, 1e3));
          else if (n.order_type === l.ORDER_TYPES.PRICE) {
            var t = Ue();
            t &&
              !t[0] &&
              (null == (e = t[1]) ? void 0 : e.retmsg) &&
              (B = P.showToast({
                title: t[1].retmsg,
                icon: "none",
                duration: 3e3,
              }));
          }
      },
      orderInit: De,
      resetFormFlag: pe,
      errorTips: xe,
      weakHint: he,
      confirmDialog: oe,
      pageSignAndOrder:
        ((U = n(
          r().mark(function e() {
            var n, t, i, a, u, s;
            return r().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (a = o.index.getStorageSync(c.CONDIITON_SIGN_PROTOCOL)),
                      o.index.removeStorageSync(c.CONDIITON_SIGN_PROTOCOL);
                    try {
                      (u =
                        null == (n = null == W ? void 0 : W.selectComponent)
                          ? void 0
                          : n.call(W, "#condition-order-risk-dialog")) &&
                        ((s = (null == u ? void 0 : u.$vm) || u),
                        (null == (t = null == s ? void 0 : s.isShow)
                          ? void 0
                          : t.call(s)) &&
                          (null == (i = null == s ? void 0 : s.onClickClose) ||
                            i.call(s)));
                    } catch (e) {}
                    if (((e.t0 = a), !e.t0)) {
                      e.next = 7;
                      break;
                    }
                    return (e.next = 7), He();
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        function () {
          return U.apply(this, arguments);
        }),
      orderCreate:
        ((M = n(
          r().mark(function e(i) {
            return r().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        new Promise(
                          (function () {
                            var e = n(
                              r().mark(function e(n, t) {
                                return r().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          s.passwordCgi.shouldCheckPassword({
                                            market: V.value,
                                          })
                                        );
                                      case 2:
                                        "1" === e.sent.needcheck
                                          ? d.Password({
                                              context: W,
                                              theme: d.THEME.TRADE,
                                              isTrade: !0,
                                              showErrorWithNotice: !1,
                                              onSuccess: function (e) {
                                                var r = e.encodePwd;
                                                n(r);
                                              },
                                              onCancel: function () {
                                                t();
                                              },
                                              onHide: function () {
                                                t();
                                              },
                                            })
                                          : n("");
                                      case 5:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            );
                            return function (r, n) {
                              return e.apply(this, arguments);
                            };
                          })()
                        )
                      );
                    case 3:
                      e.next = 8;
                      break;
                    case 5:
                      return (
                        (e.prev = 5),
                        (e.t0 = e.catch(0)),
                        e.abrupt("return", void (oe.value = !1))
                      );
                    case 8:
                      return (
                        (e.next = 10),
                        (function () {
                          var e = n(
                            r().mark(function e(n) {
                              var i, a;
                              return r().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (((i = n.callback), !le.value)) {
                                        e.next = 3;
                                        break;
                                      }
                                      return e.abrupt("return");
                                    case 3:
                                      return (
                                        (a = re.isInvestCondOrder
                                          ? "定期定投"
                                          : "价格"),
                                        o.index.$emit("condition.result.show"),
                                        i({
                                          status: w.SimpleAnimStatus.Loading,
                                          actionStyle:
                                            re.tradeType === l.ACTION.BUY
                                              ? w.ActionStyle.BuyStyle
                                              : w.ActionStyle.SellStyle,
                                          statusTitle: "".concat(
                                            a,
                                            "条件单提交中"
                                          ),
                                        }),
                                        (e.next = 8),
                                        re
                                          .submit({
                                            market: V.value,
                                            scode: Y.value,
                                            name: $.value,
                                            holder: F.value,
                                          })
                                          .catch(function (e) {
                                            var r = t({}, e);
                                            return (
                                              (null == e
                                                ? void 0
                                                : e.retcode) ===
                                                p.UPDATE_END_CONDITION &&
                                                (r.retmsg =
                                                  (null == e
                                                    ? void 0
                                                    : e.retmsg) ||
                                                  "该条件单状态可能已变更，您可确认后重新创建"),
                                              ye(e.retcode),
                                              i({
                                                status: w.SimpleAnimStatus.Fail,
                                                statusTitle: "".concat(
                                                  a,
                                                  "条件单设置失败"
                                                ),
                                                tips: r.retmsg,
                                                buttonText: we(),
                                              }),
                                              (le.value = !1),
                                              Promise.reject(
                                                e || new Error("条件单设置失败")
                                              )
                                            );
                                          })
                                      );
                                    case 8:
                                      (le.value = !1),
                                        ye(0),
                                        i({
                                          status: w.SimpleAnimStatus.Success,
                                          statusTitle: "".concat(
                                            a,
                                            "条件单设置成功"
                                          ),
                                          buttonText: "查看条件单",
                                        }),
                                        De(!0, { refreshOrderOnly: !0 });
                                    case 12:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (r) {
                            return e.apply(this, arguments);
                          };
                        })()(i)
                      );
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 5]]
            );
          })
        )),
        function (e) {
          return M.apply(this, arguments);
        }),
      startOrder:
        ((L = n(
          r().mark(function t() {
            var i, a, c, s;
            return r().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      (re.tradeType === l.ACTION.BUY
                        ? f.stat.click("trade.trade.cond.buy")
                        : f.stat.click("trade.trade.cond.sell"),
                      Ze())
                    ) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    if (
                      ((i = te([Ue])),
                      (a = e(i, 2)),
                      (c = a[0]),
                      (s = a[1]),
                      !c)
                    ) {
                      t.next = 17;
                      break;
                    }
                    if (((t.t0 = Be()), !t.t0)) {
                      t.next = 15;
                      break;
                    }
                    return (t.next = 8), b.checkBlockTips(ce);
                  case 8:
                    return (t.next = 10), Ke();
                  case 10:
                    return (
                      (t.next = 12),
                      Me(null == W ? void 0 : W.$refs.condProtocol)
                    );
                  case 12:
                    (he.value = []),
                      qe(re.condPrice),
                      n(
                        r().mark(function e() {
                          var n, t, i, a;
                          return r().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (xe.value = []),
                                    X.value ||
                                      o.index.showLoading({ title: "" }),
                                    (e.next = 3),
                                    ie()
                                  );
                                case 3:
                                  return (
                                    (n = e.sent),
                                    (t = n.date),
                                    (i = n.isTradeDay),
                                    (a = x.check({
                                      checkInputCompleteHandler: Ve,
                                      checkTradeRiskHandler: ge,
                                      checkCanTradeHandler: Te,
                                      checkAuthHandle: Ce,
                                      checkOrderPurchaseQuantityHandler: Ye,
                                      checkIsInLimitChgRangeHandler: $e,
                                      checkSellAmountInMaxLimitHandler: Fe,
                                      checkPartialAmountHandler: Qe,
                                      checkValidDayHandler: Ge,
                                    })),
                                    (e.next = 9),
                                    a(ne, t, i, z.value)
                                  );
                                case 9:
                                  o.index.hideLoading(), (oe.value = !0);
                                case 11:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      )();
                  case 15:
                    t.next = 18;
                    break;
                  case 17:
                    u.Dialog({
                      context: W,
                      title: "".concat(re.orderTypeName, "失败"),
                      message: null == s ? void 0 : s.retmsg,
                    });
                  case 18:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )),
        function () {
          return L.apply(this, arguments);
        }),
      pricePrecision: Pe,
      triggerValZdf: Ee,
      triggerValDiff: Ie,
      conditionOrder: re,
      condOrderCheckService: ne,
      startInvesetOrder:
        ((H = n(
          r().mark(function t() {
            var i, a, c, s;
            return r().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      (f.stat.click("trade.trade.invest_cond.create"), Ze())
                    ) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    if (
                      ((i = ne.checkInvestCond()),
                      (a = e(i, 2)),
                      (c = a[0]),
                      (s = a[1]),
                      !c)
                    ) {
                      t.next = 16;
                      break;
                    }
                    if (((t.t0 = Be()), !t.t0)) {
                      t.next = 14;
                      break;
                    }
                    return (t.next = 8), b.checkBlockTips(ce);
                  case 8:
                    return (t.next = 10), Ke();
                  case 10:
                    return (
                      (t.next = 12),
                      Me(null == W ? void 0 : W.$refs.condProtocol)
                    );
                  case 12:
                    (he.value = []),
                      n(
                        r().mark(function e() {
                          var n, t, i, a;
                          return r().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (xe.value = []),
                                    X.value ||
                                      o.index.showLoading({ title: "" }),
                                    (e.next = 3),
                                    ie()
                                  );
                                case 3:
                                  return (
                                    (n = e.sent),
                                    (t = n.date),
                                    (i = n.isTradeDay),
                                    (a = x.check({
                                      checkInputCompleteHandler: function () {
                                        return Promise.resolve();
                                      },
                                      checkTradeRiskHandler: ge,
                                      checkCanTradeHandler: Te,
                                      checkAuthHandle: Ce,
                                      checkOrderPurchaseQuantityHandler:
                                        function () {
                                          return Promise.resolve();
                                        },
                                      checkIsInLimitChgRangeHandler:
                                        function () {
                                          return Promise.resolve();
                                        },
                                      checkSellAmountInMaxLimitHandler:
                                        function () {
                                          return Promise.resolve();
                                        },
                                      checkPartialAmountHandler: function () {
                                        return Promise.resolve();
                                      },
                                      checkValidDayHandler: function () {
                                        return Promise.resolve();
                                      },
                                    })),
                                    (e.next = 9),
                                    a(ne, t, i, z.value)
                                  );
                                case 9:
                                  o.index.hideLoading(), (oe.value = !0);
                                case 11:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      )();
                  case 14:
                    t.next = 17;
                    break;
                  case 16:
                    u.Dialog({
                      context: W,
                      title: "".concat(re.orderTypeName, "失败"),
                      message: null == s ? void 0 : s.retmsg,
                    });
                  case 17:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )),
        function () {
          return H.apply(this, arguments);
        }),
      clearInvestCondTimeout: Ne,
    }
  );
};
