require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/defineProperty"),
  t = require("../../@babel/runtime/helpers/objectSpread2");
require("../../@babel/runtime/helpers/Objectvalues");
var r = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/slicedToArray"),
  a = require("../../@babel/runtime/helpers/asyncToGenerator"),
  o = require("../../common/vendor.js"),
  c = require("../../cgi/trade.js"),
  i = require("../../config/enum.js");
require("../../service/broker.js");
var u = require("../../config/key.js"),
  l = require("../../service/log/index.js"),
  s = require("./utils.js"),
  d = require("../../common/components/Dialog/index.js"),
  v = require("../../cgi/signProtocol.js"),
  f = require("../../components/Password/index.js"),
  h = require("../../service/auth/auth.js"),
  m = require("../../service/auth/auth.type.js"),
  p = require("./Order.js"),
  k = require("../../service/stat/mp-weixin.js"),
  _ = require("../../config/errcode.js"),
  g = require("./stock-hooks/useCheck.js"),
  T = require("../../domain/applications/trade-stock/pre-check.js"),
  x = require("../../domain/applications/trade-stock/submit.js"),
  b = require("../../stores/user/useUserinfo.js"),
  S = require("./stock-hooks/useTradeStock.js"),
  y = require("../../utils/getPlatform.js"),
  A = require("../../domain/entities/trade-stock/errorCode.js"),
  E = require("./check-handlers/check-shareholders-handler.js"),
  R = require("../../service/aegis/platform/not-wujie.js"),
  q = require("../../domain/applications/trade-stock/types.js"),
  C = require("./useSnapshot.js"),
  D = require("../../service/aegis/utils.js"),
  w = require("./validateTradeData.js"),
  P = require("../../config/broker/11100/index.js"),
  H = new l.Log("trade/model");
exports.useTrade = function () {
  var l =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.noop,
    O = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    I = o.getCurrentInstance().proxy,
    j = b.useUserinfoStore(),
    M = S.useTradeStockStore(),
    F = M.tradeAccount,
    N = M.tradeAuth,
    B = M.order,
    L = M.stock,
    G = M.orderCheckService,
    K = M.stockSetting,
    U = M.quickAmount,
    Q = M.fetchQuotes,
    Y = M.handleFetchQuotes,
    $ = M.handleFetchQuotesDefault,
    W = M.mapStockinfo,
    V = M.mapStockinfoFromPushToReq,
    z = M.formatSecuInfo,
    J = M.fetchTradeAccount,
    X = M.reloadTradeAccount,
    Z = M.fetchPositionAndOrder,
    ee = M.getQuickAmountValue,
    te = M.initOrderInfo,
    re = M.resetPriceStrategy,
    ne = M.strategyMap;
  I.passwordInstance = null;
  var ae = o.ref(""),
    oe = C.useSnapshot(),
    ce = null == O ? void 0 : O.isConditionEntryInTradeResult,
    ie = o.ref(null),
    ue = o.ref(""),
    le = o.ref(""),
    se = o.ref(""),
    de = o.ref(""),
    ve = o.ref(""),
    fe = o.ref(""),
    he = o.ref(!0),
    me = o.computed({
      get: function () {
        return B.action;
      },
      set: function (e) {
        B.action = e;
      },
    }),
    pe = o.computed({
      get: function () {
        return B.price;
      },
      set: function (e) {
        B.price = e;
      },
    }),
    ke = o.computed({
      get: function () {
        return B.amount;
      },
      set: function (e) {
        B.amount = e;
      },
    }),
    _e = o.computed({
      get: function () {
        return B.strategy;
      },
      set: function (e) {
        B.strategy = e;
      },
    }),
    ge = o.ref(!1),
    Te = o.ref(!1),
    xe = o.ref(!1),
    be = o.ref(!1),
    Se = g.useCheck({
      order: B,
      checkScene: q.CheckScene.dialog,
      tradeStockStore: M,
    }),
    ye = Se.errorTips,
    Ae = Se.checkTradeRiskHandler,
    Ee = Se.checkCanTrade,
    Re = Se.checkPriceValidHandler,
    qe = Se.checkPriceHandler,
    Ce = Se.checkAuthHandle,
    De = Se.checkBuyAmountHandler,
    we = Se.checkAccountMoneyHandler,
    Pe = Se.checkOrderAmountCanSellHandler,
    He = Se.checkSellAmountValidHandler,
    Oe = Se.checkOrderGGTStockholderHandler,
    Ie = o.computed(function () {
      return o.isEmpty(L.value)
        ? {
            percent: { buy: "--", sell: "--" },
            fiveTrans: {},
            yestodayPrice: 0,
          }
        : L.value.transInfo;
    });
  o.watch(
    [
      function () {
        return B.price;
      },
      function () {
        return F.max_buy_money;
      },
      function () {
        return F.ggt_stockholder_code;
      },
    ],
    (function () {
      var e = a(
        r().mark(function e(t) {
          var a, o;
          return r().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((a = n(t, 1)), (o = a[0])))
                      try {
                        F.calcLeastManualMoney({
                          stock: L.value,
                          price: o,
                          rate: B.orderExchangeRate,
                        });
                      } catch (e) {
                        R.aegisReporter.reportEvent(
                          "calcLeastManualMoney_error",
                          { ext3: JSON.stringify(e) }
                        );
                      }
                    if (!+o || !F.max_buy_money) {
                      e.next = 11;
                      break;
                    }
                    return (
                      (e.prev = 3),
                      (e.next = 6),
                      F.debounceForGetMaxBuyQty(L.value, o)
                    );
                  case 6:
                    e.next = 11;
                    break;
                  case 8:
                    (e.prev = 8),
                      (e.t0 = e.catch(3)),
                      R.aegisReporter.reportEvent(
                        "debounceForGetMaxBuyQty_error",
                        { ext3: JSON.stringify(e.t0) }
                      );
                  case 11:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[3, 8]]
          );
        })
      );
      return function (t) {
        return e.apply(this, arguments);
      };
    })()
  );
  var je = o.computed(function () {
      return L.value.isKCB;
    }),
    Me = o.computed(function () {
      return L.value.isGem;
    }),
    Fe = o.computed(function () {
      return je.value || Me.value || "all" === L.value.supportAfterTrade;
    }),
    Ne = o.computed(function () {
      return L.value.spreadAcc;
    }),
    Be = o.computed(function () {
      return ue.value && le.value;
    });
  function Le(e) {
    var t = e.res,
      r = e.code,
      n = e.fromPush,
      a = void 0 !== n && n;
    a || w.validateStockInfoData(t, r),
      a ? z(t) : W(t, r),
      Y(t),
      (se.value = t.secu_info.secu_name),
      he.value && Ge();
  }
  function Ge(e) {
    var t;
    if (
      I.$route.query.order_type !== i.ORDER_TYPES.PRICE &&
      (e &&
        Object.values(i.STRATEGY).includes(+e) &&
        ((B.strategy = +e),
        e !== i.STRATEGY.AFTER_CLOSED &&
          o.index.setStorageSync(u.LAST_TRADE_PRICE_STRATEGY, {
            lastPriceStrategy: e,
          })),
      Be.value)
    ) {
      var r =
        null == (t = null == ne ? void 0 : ne[B.strategy])
          ? void 0
          : t.getPrice();
      r && (B.price = r);
    }
  }
  function Ke(e) {
    I.$router.push({
      name: "BizRiskUpdate",
      query: {
        match_type: null == e ? void 0 : e.matchType,
        from: "trade",
        market: le.value,
        code: ue.value,
      },
    });
  }
  function Ue(e) {
    return new Promise(
      (function () {
        var t = a(
          r().mark(function t(n, a) {
            return r().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      h.Auth({
                        biometricsScene: m.BiometricsScene.TRADE,
                        theme: f.THEME.TRADE,
                        context: I,
                        isTrade: !0,
                        showErrorWithNotice: !1,
                        embeddedMode: I.embeddedMode,
                        checkPWDScenes: null == e ? void 0 : e.checkPWDScenes,
                        onSuccess: function (e) {
                          n(e);
                        },
                        onCancel: function () {
                          a({ retcode: "pwd_oncancel" });
                        },
                        onHide: function () {
                          a({ retcode: "pwd_onhide" });
                        },
                        onError: function (e) {
                          a(e);
                        },
                      })
                    );
                  case 2:
                    I.passwordInstance = t.sent;
                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function (e, r) {
          return t.apply(this, arguments);
        };
      })()
    );
  }
  function Qe() {
    return Ye.apply(this, arguments);
  }
  function Ye() {
    return (Ye = a(
      r().mark(function e() {
        var t,
          n,
          a,
          i,
          u,
          l,
          s = arguments;
        return r().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (t = s.length > 0 && void 0 !== s[0] ? s[0] : {}),
                    I.embeddedMode || o.index.showLoading({ title: "加载中" }),
                    (e.next = 4),
                    c.tradeCgi.shouldCheckPassword({ market: le.value })
                  );
                case 4:
                  if (
                    ((n = e.sent),
                    (a = n.needcheck),
                    (i = n.trade_tips),
                    H.info("checkTradeRequest", {
                      needcheck: a,
                      trade_tips: i,
                    }),
                    o.index.hideLoading(),
                    "1" !== a)
                  ) {
                    e.next = 21;
                    break;
                  }
                  return (
                    (e.prev = 8),
                    (e.next = 11),
                    Ue({
                      checkPWDScenes: null == t ? void 0 : t.checkPWDScenes,
                    })
                  );
                case 11:
                  return (u = e.sent), (e.next = 14), st(u.encodePwd, t);
                case 14:
                  e.next = 19;
                  break;
                case 16:
                  return (
                    (e.prev = 16),
                    (e.t0 = e.catch(8)),
                    e.abrupt(
                      "return",
                      ((Te.value = !1),
                      D.reportEventSafely("mon_trade_pwd_fail", { ext3: e.t0 }),
                      e.t0)
                    )
                  );
                case 19:
                  e.next = 25;
                  break;
                case 21:
                  return (
                    (e.next = 23),
                    (l = i),
                    new Promise(function (e) {
                      l && B.isBuyAction
                        ? d.Dialog({
                            message: l,
                            showCancelButton: !0,
                            cancelButtonText: "继续买入",
                            confirmButtonText: "取消",
                            context: I,
                            onCancel: function () {
                              e();
                            },
                            onConfirm: function () {
                              Te.value = !1;
                            },
                          })
                        : e();
                    })
                  );
                case 23:
                  return (e.next = 25), st(void 0, t);
                case 25:
                case "end":
                  return e.stop();
              }
          },
          e,
          null,
          [[8, 16]]
        );
      })
    )).apply(this, arguments);
  }
  function $e() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      r =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : { text: "", handler: function () {} },
      n = arguments.length > 2 ? arguments[2] : void 0,
      a = t({}, e);
    null == O ||
      O.tradeFail(
        t(t({}, a), {}, { errorTitle: "", buttonHandler: r }, n || {})
      );
  }
  function We() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    null == O ||
      O.tradeFail(
        t(
          t({}, r),
          {},
          {
            errorTitle: "委托提交结果查询繁忙",
            buttonHandler: "jumpTodayOrder",
          },
          e || {}
        )
      );
  }
  o.watch(
    function () {
      return le.value;
    },
    function (e) {
      var t, r, n;
      e &&
        ([
          i.MARKET.BJ,
          i.MARKET.SA,
          i.MARKET.HA,
          i.MARKET.NQ,
          i.MARKET.HK,
        ].includes(e) ||
          null ==
            (n =
              null == (r = null == (t = R.aegisReporter) ? void 0 : t.sdk)
                ? void 0
                : r.error) ||
          n.call(r, { msg: "TRADE-INVALID-MARKET", ext2: e }));
    }
  );
  var Ve = null;
  function ze() {
    Ve && (clearTimeout(Ve), (Ve = null));
  }
  function Je() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = t({}, r);
    n.retmsg || (n.retmsg = "风险测评不匹配");
    var a = {
      text: "查看风险测评",
      handler: function () {
        (Ve = setTimeout(function () {
          Ke(N), ze();
        }, 100)),
          k.stat.click("trade.trade.click.risk_unmatch");
      },
    };
    null == O ||
      O.tradeFail(
        t(t({}, n), {}, { errorTitle: "", buttonHandler: a }, e || {})
      );
  }
  var Xe = null;
  function Ze() {
    Xe && (clearTimeout(Xe), (Xe = null));
  }
  function et() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = t({}, r);
    n.retmsg || (n.retmsg = "风险测评过期");
    var a = {
      text: "更新风险测评",
      handler: function () {
        (Xe = setTimeout(function () {
          Ke(N), Ze();
        }, 100)),
          k.stat.click("trade.trade.click.risk_expired");
      },
    };
    null == O ||
      O.tradeFail(
        t(t({}, n), {}, { errorTitle: "", buttonHandler: a }, e || {})
      );
  }
  var tt,
    rt,
    nt,
    at,
    ot,
    ct = o.ref(!1);
  function it() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = t({}, r);
    n.retmsg || (n.retmsg = "当前时间不允许此类交易，可前往条件单设置触发条件");
    var a = {
      text: "去下条件单",
      handler: function () {
        var e = {
          code: ue.value,
          market: le.value,
          name: encodeURIComponent(se.value),
          tradeToCondFlag: "1",
        };
        I.$router.push({ name: "PriceCondition", query: e }),
          k.stat.click("trade.trade.click.go_to_condition");
      },
    };
    null == O || O.tradeFail(t(t({}, n), {}, { buttonHandler: a }, e || {}));
  }
  function ut(e, n) {
    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      c = t({}, o);
    c.retmsg || (c.retmsg = "高风险股票");
    var u = {
      text: "继续交易",
      handler: function () {
        var e;
        ((e = a(
          r().mark(function e(t) {
            var n;
            return r().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (ct.value = !0),
                        (n = {
                          snapshotData: t,
                          specialParams: { highrisk_chk: 1 },
                          checkPWDScenes: i.CHECK_PWD_SCENES.continueTrade,
                        }),
                        (e.prev = 2),
                        (e.next = 5),
                        Qe(n)
                      );
                    case 5:
                      return (e.prev = 5), (ct.value = !1), e.finish(5);
                    case 8:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, , 5, 8]]
            );
          })
        )),
        function (t) {
          return e.apply(this, arguments);
        })(n),
          k.stat.click("trade.trade.click.continue_trade");
      },
    };
    $e(c, u, t(t({}, e), {}, { errorTitle: "交易风险提示" }));
  }
  function lt() {
    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      a = t({}, n);
    if (!a.retmsg) {
      var o,
        c =
          (e(
            (o = {}),
            _.SHAREHOLDER_NOT_DESIGNATED,
            "当前股东卡未指定，无法交易，请联系券商客服咨询并办理股东卡指定业务。"
          ),
          e(
            o,
            _.SHAREHOLDER_NOT_FOUND,
            "没有对应交易市场的股东账户，请咨询券商客服开通"
          ),
          o);
      a.retmsg = c[a.retcode] || "股东账户异常，请咨询券商客服";
    }
    $e(
      a,
      {
        text: "联系券商客服",
        handler: function () {
          var e = "".concat(P.brokerConfig.base.tel).replace(/-/g, "");
          I.$sdk.makePhoneCall(e),
            k.stat.click("trade.trade.click.contact_broker");
        },
      },
      t({}, r)
    );
  }
  function st(e) {
    return dt.apply(this, arguments);
  }
  function dt() {
    return (dt = a(
      r().mark(function n(a) {
        var c,
          i,
          u,
          v,
          f,
          h,
          m,
          g,
          T,
          b,
          S,
          A,
          E,
          q,
          C,
          M,
          F,
          N,
          G,
          K,
          U,
          Q,
          Y,
          $,
          W,
          V,
          z,
          J = arguments;
        return r().wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  (c = J.length > 1 && void 0 !== J[1] ? J[1] : {}),
                    I.embeddedMode || o.index.showLoading({ title: "提交中" }),
                    (q = oe.order.value);
                  try {
                    o.isEmpty(q) &&
                      (null ==
                        (v =
                          null ==
                          (u = null == (i = R.aegisReporter) ? void 0 : i.sdk)
                            ? void 0
                            : u.error) ||
                        v.call(u, "mon_trade_snapshot_empty_submit"));
                  } catch (e) {}
                  return (
                    null == O || O.tradeSubmit({ action: q.action }),
                    (function (e, t) {
                      var r;
                      try {
                        var n =
                            [
                              M.MARKET_STATE.AFTER_PREPARE,
                              M.MARKET_STATE.AFTER_TRADING,
                            ].indexOf(t) > -1,
                          a =
                            [M.ACTION.AFTER_BUY, M.ACTION.AFTER_SELL].indexOf(
                              e
                            ) > -1;
                        n &&
                          !a &&
                          D.reportEventSafely(
                            "mon_trade_after_action_mismatch",
                            {
                              ext1:
                                (null == (r = null == oe ? void 0 : oe.code)
                                  ? void 0
                                  : r.value) || "",
                              ext2: e,
                              ext3: t,
                            }
                          );
                      } catch (n) {}
                    })(
                      null == q ? void 0 : q.action,
                      null == (f = null == L ? void 0 : L.value)
                        ? void 0
                        : f.market_state
                    ),
                    H.info("sendTradeRequest", a),
                    (r.prev = 5),
                    (M =
                      c && c.snapshotData
                        ? c.snapshotData
                        : x.generateParams(oe)),
                    (C = t({}, M)),
                    w.validateSubmitParams(M),
                    (r.next = 10),
                    x.submit({
                      stockOrder: B,
                      data: t(
                        t({}, M),
                        (null == c ? void 0 : c.specialParams) || {}
                      ),
                      token: a,
                    })
                  );
                case 10:
                  (F = r.sent),
                    H.info("sendTradeRequest res", F),
                    (Te.value = !1),
                    (ae.value = "succ"),
                    (N = s.getSubmitResultTip(F, q.action).title),
                    (G = ""),
                    (K = ""),
                    (null == (m = null == (h = L.value.quote) ? void 0 : h.info)
                      ? void 0
                      : m.secu_code) === oe.code.value
                      ? ((G =
                          null == (g = L.value.secu_quote) ? void 0 : g.dqj),
                        (K = L.value.quantityUnit))
                      : null ==
                          (b =
                            null == (T = R.aegisReporter) ? void 0 : T.sdk) ||
                        b.error({ msg: "TRADE_STOCK_NOT_MATCH_AFTER_SUBMIT" }),
                    l(
                      p.genOrder({
                        name: F.name,
                        market: F.market,
                        code: F.scode,
                        contract_no: F.contract_no,
                        can_cancel: "1",
                        match_num: "0",
                        trade_num: F.quantity,
                        order_price: F.price,
                        trade_type: F.action,
                        trade_state: "0",
                        stock_type: "0",
                        submitTip: N,
                        trade_time: o
                          .dayjs(1e3 * F.trade_time)
                          .format("YYYY-MM-DD HH:mm:ss"),
                        time_type: F.time_type,
                        dqj: G,
                        frontOrderType: "undone",
                        unit: K,
                      })
                    ),
                    o.index.hideLoading(),
                    null == O || O.tradeSuccess(F),
                    (function (e, t) {
                      try {
                        null == O ||
                          O.tradeSubmitSuccess({
                            market: e.market,
                            action: e.action,
                            stockCode: t.code.value,
                          });
                      } catch (e) {}
                    })(F, oe),
                    (r.next = 51);
                  break;
                case 17:
                  if (
                    ((r.prev = 17),
                    (r.t0 = r.catch(5)),
                    (null == r.t0 ? void 0 : r.t0.retcode) ||
                      D.reportEventSafely("mon_trade_submit_error", {
                        ext3: r.t0,
                        ext4:
                          null == (S = null == oe ? void 0 : oe.market)
                            ? void 0
                            : S.value,
                      }),
                    (ae.value = "fail"),
                    (Te.value = !1),
                    H.info("sendTradeRequest error", r.t0.retmsg),
                    !/^51088820$/.test(r.t0.retcode))
                  ) {
                    r.next = 33;
                    break;
                  }
                  return (
                    (r.prev = 20),
                    (r.next = 23),
                    Ue({
                      checkPWDScenes: null == c ? void 0 : c.checkPWDScenes,
                    })
                  );
                case 23:
                  return (U = r.sent), (r.next = 26), st(U.encodePwd, c);
                case 26:
                  r.next = 31;
                  break;
                case 28:
                  (r.prev = 28), (r.t1 = r.catch(20)), (Te.value = !1);
                case 31:
                  r.next = 51;
                  break;
                case 33:
                  if (r.t0.retcode !== _.TRADE_RISKTEST_UNMATCH) {
                    r.next = 37;
                    break;
                  }
                  null == O ||
                    O.tradeFail(t(t({}, r.t0), {}, { action: q.action })),
                    (r.next = 51);
                  break;
                case 37:
                  if (
                    r.t0.retcode !== _.TRADE_SUBMIT_STOCK_NO_AUTH ||
                    10900 !== P.brokerConfig.base.code
                  ) {
                    r.next = 41;
                    break;
                  }
                  null == (A = null == j ? void 0 : j.userinfo) ||
                    A.fundaccount,
                    d.Dialog({
                      context: I,
                      message: r.t0.retmsg,
                      showCancelButton: !0,
                      confirmButtonText: "开通主板交易权限",
                      customClass: "mp-dialog__small",
                      onConfirm: function () {
                        I.$router.push({ name: "BizOpenStock" });
                      },
                    }),
                    (r.next = 51);
                  break;
                case 41:
                  if (
                    r.t0.retcode !== _.USER_CAN_NOT_TRADE_TODAY ||
                    !(null == (E = null == j ? void 0 : j.userinfo)
                      ? void 0
                      : E.start_trade_time)
                  ) {
                    r.next = 47;
                    break;
                  }
                  y.getPlatform(),
                    (Q =
                      "新开户需下个交易日才能交易；如您绑定存量沪市股卡，需联系券商办理指定业务才可交易。如有需要可联系"
                        .concat(P.brokerConfig.base.name, "客服：")
                        .concat(P.brokerConfig.base.tel)),
                    null == O ||
                      O.tradeFail(
                        t(t({}, r.t0), {}, { retmsg: Q, action: q.action })
                      ),
                    k.stat.click("trade.trade.submit.no_trade_auth_today"),
                    (r.next = 51);
                  break;
                case 47:
                  if (
                    ((W = { action: q.action }),
                    (V =
                      "function" == typeof ce && ce()
                        ? e({}, _.TRADE_NOT_TRADING_TIME, it.bind(null, W))
                        : {}),
                    (z = t(
                      t(
                        (e((Y = {}), _.TRADE_SUBMIT_TIMEOUT, We.bind(null, W)),
                        e(Y, _.TRADE_RISK_TEST_UNMATCH, Je.bind(null, W)),
                        e(Y, _.TRADE_RISK_TEST_EXPIRED, et.bind(null, W)),
                        e(Y, _.TRADE_HIGHRISK_GUOXIN, ut.bind(null, W, C)),
                        Y),
                        V
                      ),
                      {},
                      (e(
                        ($ = {}),
                        _.SHAREHOLDER_NOT_DESIGNATED,
                        lt.bind(null, W)
                      ),
                      e($, _.SHAREHOLDER_NOT_FOUND, lt.bind(null, W)),
                      $)
                    )),
                    !r.t0.retcode || !z[r.t0.retcode])
                  ) {
                    r.next = 50;
                    break;
                  }
                  return r.abrupt(
                    "return",
                    ((0, z[r.t0.retcode])(r.t0),
                    void k.stat.click("trade.trade.submit.cgi_error"))
                  );
                case 50:
                  null == O || O.tradeFail(t(t({}, r.t0), W)),
                    k.stat.click("trade.trade.submit.cgi_error");
                case 51:
                case "end":
                  return r.stop();
              }
          },
          n,
          null,
          [
            [5, 17],
            [20, 28],
          ]
        );
      })
    )).apply(this, arguments);
  }
  return (
    o.watch(
      function () {
        return Te.value;
      },
      function (e) {
        e || (ct.value = !1);
      }
    ),
    {
      tradeAccount: F,
      tradeAuth: N,
      stock: L,
      orderCheckService: G,
      stockSetting: K,
      quickAmount: U,
      fetchQuotes: Q,
      handleFetchQuotes: Y,
      handleFetchQuotesDefault: $,
      mapStockinfo: W,
      mapStockinfoFromPushToReq: V,
      formatSecuInfo: z,
      fetchTradeAccount: J,
      reloadTradeAccount: X,
      fetchPositionAndOrder: Z,
      getQuickAmountValue: ee,
      initOrderInfo: te,
      resetPriceStrategy: re,
      hasSubmittedFlag: ae,
      isStockSet: Be,
      pricePrecision: Ne,
      action: me,
      amount: ke,
      code: ue,
      errorTips: ye,
      holder: de,
      isTrading: Te,
      initStatus: ge,
      market: le,
      name: se,
      price: pe,
      order: B,
      strategy: _e,
      updatePrice: he,
      showConfirmation: xe,
      isAfterTradeStock: Fe,
      isGem: Me,
      isKCB: je,
      transInfo: Ie,
      defaultName: ve,
      defaultDqj: fe,
      isShowRefresh: be,
      resetForm: function () {
        Ge(i.STRATEGY.MANUAL);
        var e = I.$route.query.amount;
        B.amount = e || L.value.minAmount;
      },
      checkTradeRequest: Qe,
      fetchStockInfo:
        ((ot = a(
          r().mark(function e(t) {
            var n, a, c, i, u, l;
            return r().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Q(t, {
                          code: ue.value,
                          market: le.value,
                          name: se.value || ve.value,
                          defaultDqj: fe.value,
                        })
                      );
                    case 3:
                      (i = e.sent).isFrontDefaultStock
                        ? (se.value || (se.value = ve.value),
                          (u = "stockinfoErrorTips"),
                          (o.index.showLoadingInstance = {
                            noAutoHide: !0,
                            uniqueKey: u,
                          }),
                          o.index.showToast({
                            title: "行情信息获取超时,可手动输入价格数量下单",
                            icon: "none",
                            duration: 2500,
                          }),
                          (l = setTimeout(function () {
                            o.index.showLoadingInstance &&
                              o.index.showLoadingInstance.uniqueKey === u &&
                              (o.index.showLoadingInstance = void 0),
                              l && (clearTimeout(l), (l = null));
                          }, 2500)))
                        : (i.info || (i.info = {}),
                          i.info.name ||
                            ((i.info.name = se.value || ve.value),
                            null ==
                              (c =
                                null ==
                                (a =
                                  null == (n = R.aegisReporter)
                                    ? void 0
                                    : n.sdk)
                                  ? void 0
                                  : a.error) ||
                              c.call(a, {
                                msg: "TRADE-STOCKINFO-LACKNAME",
                                ext3: t.code,
                              })),
                          Le({ res: i, code: t.code })),
                        (e.next = 10);
                      break;
                    case 7:
                      (e.prev = 7),
                        (e.t0 = e.catch(0)),
                        o.index.showToast({
                          title: e.t0.retmsg || "服务器繁忙 请稍后再试",
                          icon: "none",
                        }),
                        D.reportEventSafely("mon_trade_stockinfo_fail", {
                          ext3: e.t0,
                        });
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 7]]
            );
          })
        )),
        function (e) {
          return ot.apply(this, arguments);
        }),
      handleFetchStockInfo: Le,
      proceedTransactions:
        ((at = a(
          r().mark(function e(t) {
            var a, o, c, i, u, l, s, v, f, h, m, p, _, g, x, b, S, y, R, q, C;
            return r().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((q = j.userinfo), Be.value)) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        (d.Dialog({ message: "请先输入股票名称", context: I }),
                        D.reportEventSafely("mon_trade_no_stock", {
                          ext3:
                            null ==
                            (c =
                              null ==
                              (o =
                                null == (a = null == L ? void 0 : L.value)
                                  ? void 0
                                  : a.quote)
                                ? void 0
                                : o.info)
                              ? void 0
                              : c.secu_code,
                        }),
                        !1)
                      );
                    case 3:
                      return (
                        (e.prev = 3),
                        (e.next = 6),
                        new Promise(function (e, t) {
                          try {
                            var r = (
                                P.brokerConfig.trade.checkShareHolderCards || {}
                              ).canBindOnline,
                              a = void 0 !== r && r,
                              o = P.brokerConfig.trade.canContact || !1,
                              c = G.checkShareholderCards(),
                              i = n(c, 2),
                              u = i[0],
                              l = i[1];
                            if (u) e(!0);
                            else {
                              if (
                                [A.TradeCheckErrorCode.noGZAccount].includes(
                                  l.retcode
                                )
                              )
                                return void E.openAccountOnline(l, {
                                  statPrefix: "trade.trade",
                                })
                                  .then(function () {
                                    e(!0);
                                  })
                                  .catch(function (e) {
                                    t(e);
                                  });
                              var s = {
                                  brow: "trade.trade.stop.".concat(l.retcode),
                                  confirm: "trade.trade.stop.".concat(
                                    l.retcode,
                                    "_confirm"
                                  ),
                                  continue: "trade.trade.stop.".concat(
                                    l.retcode,
                                    "_continue"
                                  ),
                                  close: "trade.trade.stop.".concat(
                                    l.retcode,
                                    "_close"
                                  ),
                                },
                                v = "我知道了";
                              a
                                ? (v = "添加股东卡")
                                : o && (v = "联系券商客服"),
                                d.Dialog({
                                  title: "无法交易",
                                  context: I,
                                  message: "".concat(l.retmsg),
                                  messageAlign: "left",
                                  showCancelButton: !0,
                                  showClose: !0,
                                  cancelButtonText: "继续交易",
                                  confirmButtonText: v,
                                  onConfirm: function () {
                                    if ((k.stat.click(s.confirm), a))
                                      I.$router.push({
                                        name: "BizShareHolderBind",
                                      });
                                    else if (o) {
                                      I.$stat.click("trade.trade.contact");
                                      var e = ""
                                        .concat(P.brokerConfig.base.tel)
                                        .replace(/-/g, "");
                                      I.$sdk.makePhoneCall(e);
                                    }
                                    t(l);
                                  },
                                  onCancel: function (r, n) {
                                    if (
                                      "close" === (null == n ? void 0 : n.from)
                                    )
                                      return k.stat.click(s.close), t(l);
                                    k.stat.click(s.continue), e(!0);
                                  },
                                }),
                                k.stat.click(s.brow);
                            }
                          } catch (t) {
                            D.reportEventSafely(
                              "mon_trade_checkshareholder_error",
                              { ext3: t }
                            ),
                              e(!0);
                          }
                        })
                      );
                    case 6:
                      e.next = 11;
                      break;
                    case 8:
                      return (
                        (e.prev = 8),
                        (e.t0 = e.catch(3)),
                        e.abrupt(
                          "return",
                          (D.reportEventSafely("mon_trade_no_holders", {
                            ext3:
                              null ==
                              (l =
                                null ==
                                (u =
                                  null == (i = null == L ? void 0 : L.value)
                                    ? void 0
                                    : i.quote)
                                  ? void 0
                                  : u.info)
                                ? void 0
                                : l.secu_code,
                            ext4:
                              null == (s = q.shareholdercards)
                                ? void 0
                                : s.length,
                            ext5: null == e.t0 ? void 0 : e.t0.retcode,
                          }),
                          !1)
                        )
                      );
                    case 11:
                      if (
                        ((ye.value = []),
                        (B.action = t),
                        ge.value ||
                          D.reportEventSafely("mon_trade_no_init", {
                            ext3:
                              null ==
                              (h =
                                null ==
                                (f =
                                  null == (v = null == L ? void 0 : L.value)
                                    ? void 0
                                    : v.quote)
                                  ? void 0
                                  : f.info)
                                ? void 0
                                : h.secu_code,
                          }),
                        !Te.value)
                      ) {
                        e.next = 13;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        (H.info("untradable, there is pending trade request"),
                        D.reportEventSafely("mon_trade_istrading", {
                          ext3:
                            null ==
                            (_ =
                              null ==
                              (p =
                                null == (m = null == L ? void 0 : L.value)
                                  ? void 0
                                  : m.quote)
                                ? void 0
                                : p.info)
                              ? void 0
                              : _.secu_code,
                        }),
                        !1)
                      );
                    case 13:
                      return (
                        (Te.value = !0),
                        (C = T.check({
                          checkTradeRiskHandler: Ae,
                          checkCanTradeHandler: Ee,
                          checkPriceValidHandler: Re,
                          checkPriceHandler: qe,
                          checkAuthHandle: Ce,
                          checkBuyAmountHandler: De,
                          checkAccountMoneyHandler: we,
                          checkOrderAmountCanSellHandler: Pe,
                          checkSellAmountValidHandler: He,
                          checkOrderGGTStockholderHandler: Oe,
                        })),
                        (e.prev = 15),
                        (e.next = 18),
                        C(G, q)
                      );
                    case 18:
                      e.next = 23;
                      break;
                    case 20:
                      return (
                        (e.prev = 20),
                        (e.t1 = e.catch(15)),
                        e.abrupt(
                          "return",
                          ((Te.value = !1),
                          e.t1 && e.t1.message && e.t1.stack
                            ? D.reportEventSafely("mon_trade_check_jserror", {
                                ext3: e.t1,
                                ext4:
                                  null ==
                                  (b =
                                    null ==
                                    (x =
                                      null == (g = null == L ? void 0 : L.value)
                                        ? void 0
                                        : g.quote)
                                      ? void 0
                                      : x.info)
                                    ? void 0
                                    : b.secu_code,
                              })
                            : D.reportEventSafely("mon_trade_check_error", {
                                ext3: e.t1,
                                ext4:
                                  null ==
                                  (R =
                                    null ==
                                    (y =
                                      null == (S = null == L ? void 0 : L.value)
                                        ? void 0
                                        : S.quote)
                                      ? void 0
                                      : y.info)
                                    ? void 0
                                    : R.secu_code,
                              }),
                          !1)
                        )
                      );
                    case 23:
                      return e.abrupt("return", !0);
                    case 24:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [3, 8],
                [15, 20],
              ]
            );
          })
        )),
        function (e) {
          return at.apply(this, arguments);
        }),
      queryTradeShowData:
        ((nt = a(
          r().mark(function e(t) {
            var n, a, o, c, i, u;
            return r().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = t.market),
                        (a = t.stock_code),
                        (o = t.stockholder_code),
                        t.isRetry,
                        (c = t.qryBulletin),
                        (i = void 0 === c ? "0" : c),
                        (e.prev = 1),
                        (e.next = 4),
                        J({
                          market: n,
                          stock_code: a,
                          stockholder_code: o,
                          qry_bulletin: i,
                          retry_time: 0,
                        })
                      );
                    case 4:
                      return (
                        (u = e.sent),
                        e.abrupt(
                          "return",
                          ((ge.value = !0),
                          (be.value = "1" === u.refresh_btn),
                          u)
                        )
                      );
                    case 8:
                      throw (
                        ((e.prev = 8),
                        (e.t0 = e.catch(1)),
                        (ge.value = !1),
                        e.t0)
                      );
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 8]]
            );
          })
        )),
        function (e) {
          return nt.apply(this, arguments);
        }),
      setPriceByStrategy: Ge,
      checkSuitability:
        ((rt = a(
          r().mark(function e() {
            var a, o, c, i;
            return r().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (B.isBuyAction && !L.value.isConvertibleBonds) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return", !0);
                  case 2:
                    if (
                      ((a = G.checkSuitability()),
                      (o = n(a, 2)),
                      (c = o[0]),
                      (i = o[1]),
                      c)
                    ) {
                      e.next = 6;
                      break;
                    }
                    switch (
                      (i.data &&
                        (i.data.onConfirm = function () {
                          Ke(N),
                            k.stat.click(
                              "trade.trade.stop.".concat(i.retcode, "_confirm")
                            );
                        }),
                      i.retcode)
                    ) {
                      case "show-confirmation":
                        xe.value = !0;
                      case "need_load_video":
                      case "can_not_buy":
                      case "test_outtime":
                      case "not_test":
                      case "risk_level_outdated":
                        d.Dialog(
                          t(
                            t({}, i.data),
                            {},
                            { message: i.retmsg, context: I }
                          )
                        );
                      case "other_reason":
                        d.Dialog({
                          message: "产品尚未设置风险等级，如需购买，请联系"
                            .concat(P.brokerConfig.base.name, "客服：")
                            .concat(P.brokerConfig.base.tel),
                          context: I,
                        });
                    }
                    return e.abrupt(
                      "return",
                      (k.stat.click("trade.trade.stop.".concat(i.retcode)), !1)
                    );
                  case 6:
                    return e.abrupt("return", !0);
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        function () {
          return rt.apply(this, arguments);
        }),
      signFirstTradeConfirm:
        ((tt = a(
          r().mark(function e() {
            return r().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        v.signProtocol.signFirstTrade({
                          risk_ver: "1",
                          operate_type: "5",
                        })
                      );
                    case 3:
                      o.index.setStorageSync(u.TRADE_CONFIRM_NEED_SIGN, !1),
                        (e.next = 8);
                      break;
                    case 6:
                      (e.prev = 6), (e.t0 = e.catch(0));
                    case 8:
                      N.needSignFirstTrade = !1;
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 6]]
            );
          })
        )),
        function () {
          return tt.apply(this, arguments);
        }),
      clearReference: function () {
        var e;
        null == (e = null == F ? void 0 : F.clearDebounceForGetMaxBuyQty) ||
          e.call(F),
          ze(),
          Ze();
      },
      tradeResultBtnLoading: ct,
      snapshot: oe,
      currentCheckReject: ie,
    }
  );
};
