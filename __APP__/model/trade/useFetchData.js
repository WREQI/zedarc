var e = require("../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../@babel/runtime/helpers/objectSpread2"),
  n = require("../../@babel/runtime/helpers/defineProperty"),
  u = require("../../@babel/runtime/helpers/asyncToGenerator"),
  o = require("../../common/vendor.js"),
  c = require("../../service/connect/index.js"),
  i = require("../../config/enum.js"),
  s = require("../index/useTabBar.js"),
  l = require("../../config/cgi.js"),
  d = require("../../utils/index.js"),
  v = require("../../service/log/index.js"),
  f = require("../../config/key.js"),
  T = require("./conditions/useFetchNTCondList.js"),
  _ = require("../../cgi/trade/stock.js"),
  m = require("../../cgi/trade/convertible-bonds-service.js");
require("../../service/broker.js");
var p = require("../../utils/getPlatform.js"),
  h = require("../../components/NetworkDetect/useNetworkDetect.js"),
  E = require("../../service/aegis/platform/not-wujie.js"),
  k = require("../../utils/market.js"),
  S = require("../../service/request/cancelTokenManager.js"),
  A = require("../../service/aegis/utils.js"),
  R = require("../../config/enum/condition.js"),
  g = require("./validateTradeData.js"),
  y = require("../../service/connect/maps.js"),
  C = require("../../config/broker/11100/index.js"),
  q = new v.Log("trade/model/fetch"),
  D = new _.TradeStockService(),
  b = new m.ConvertibleBondsService();
exports.useFetchData = function (v, _, m, x, I, O, N) {
  var M = o.getCurrentInstance().proxy,
    w = v.tradeAccount,
    H = v.tradeAuth,
    P = v.reloadTradeAccount,
    j = v.fetchPositionAndOrder,
    B = v.initOrderInfo,
    F = v.mapStockinfoFromPushToReq,
    L = v.stock,
    K = o.ref(null),
    G = o.ref(null),
    U = !1,
    Y = o.ref([y.SCHEME.TRADE_POSITION, y.SCHEME.TRADE_HQ]),
    Q = o.ref(c.SOURCE.WEBSOCKET),
    W = o.ref(!0),
    J = o.ref({ status: "0", title: "", content: "" }),
    $ = T.useFetchNoTriggerCondList(),
    X = $.fetchNoTriggerCondList,
    V = $.noTriggerConditions,
    z = $.fetchStatus,
    Z = $.totalNum,
    ee = $.condStatusType,
    te = $.setCondStatusType;
  o.watch(
    function () {
      return x.currentTab.value;
    },
    function () {
      _e();
    }
  );
  var re,
    ae = p.getPlatform().isMpPlugin;
  function ne(e) {
    var t,
      r = "";
    try {
      r = o.index.getStorageSync(f.TRADE_CONFIRM_NEED_SIGN);
    } catch (e) {
      A.reportEventSafely("mon_trade_getsignflag_fail", { ext3: e });
    }
    var a = "" === r;
    H.fetchTradeAuth(D, {
      stockholder_code: e || se(),
      market: v.market.value,
      stock_code: v.code.value,
      stock_cls: null == (t = L.value.secu_info) ? void 0 : t.class,
      stock_name: v.name.value || "",
      query_ft: a ? "1" : "0",
    })
      .then(function () {
        try {
          o.index.setStorageSync(
            f.TRADE_CONFIRM_NEED_SIGN,
            H.needSignFirstTrade
          );
        } catch (e) {
          A.reportEventSafely("mon_trade_setsignflag_fail", { ext3: e });
        }
      })
      .catch(function (t) {
        H.handleFetchTradeAuthFail(L.value.isGGT, e || se()),
          q.info("queryTradeAuthority fail", t.retmsg);
      });
  }
  function ue() {
    v.strategy.value === i.STRATEGY.MANUAL ||
    v.strategy.value === i.STRATEGY.AFTER_CLOSED
      ? W.value || (v.updatePrice.value = !1)
      : (v.updatePrice.value = !0);
  }
  function oe(e) {
    if (
      (e.fundsinfo &&
        (w.max_buy_money =
          (v.market.value === i.MARKET.HK
            ? e.fundsinfo.ggt_can_trade
            : +e.fundsinfo.hs_can_trade) ||
          +e.fundsinfo.can_trade ||
          0),
      e.holdstock)
    ) {
      var t = e.holdstock.find(function (e) {
        return (
          e.code === v.code.value &&
          e.market === v.market.value &&
          (!v.holder.value || e.stockholder_code === v.holder.value)
        );
      });
      t
        ? ((w.max_sell_qty = +t.can_use || 0),
          (w.hold_qty = +t.hold_num || 0),
          g.validateHoldStockData(t, v.code.value, v.market.value))
        : ((w.max_sell_qty = 0), (w.hold_qty = 0));
    }
  }
  function ce() {
    return ie.apply(this, arguments);
  }
  function ie() {
    return (ie = u(
      r().mark(function e() {
        return r().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (((e.prev = 0), x.currentTab.value === s.TAB.CONDITION)) {
                    e.next = 3;
                    break;
                  }
                  return e.abrupt("return");
                case 3:
                  return (e.next = 5), X();
                case 5:
                  ee.value === R.CondStatus.WAIT &&
                    m.updateCondTotalNum(Z.value),
                    (e.next = 10);
                  break;
                case 8:
                  (e.prev = 8), (e.t0 = e.catch(0));
                case 10:
                case "end":
                  return e.stop();
              }
          },
          e,
          null,
          [[0, 8]]
        );
      })
    )).apply(this, arguments);
  }
  function se() {
    return M.stockholder || v.holder.value;
  }
  function le() {
    return de.apply(this, arguments);
  }
  function de() {
    return (de = u(
      r().mark(function e() {
        var t, a;
        return r().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.prev = 0),
                    (e.next = 3),
                    v.queryTradeShowData({
                      market: v.market.value,
                      stock_code: v.code.value,
                      stockholder_code: se(),
                      qryBulletin: "1",
                    })
                  );
                case 3:
                  (a = e.sent), g.validateTradeShowData(a, v.code.value);
                  try {
                    o.index.setStorageSync(
                      f.ASSET_HOLDSTOCK_LEN,
                      null == (t = null == a ? void 0 : a.holdstock)
                        ? void 0
                        : t.length
                    );
                  } catch (e) {}
                  return (
                    M.simpleMode && M.$emit("toggleBrokerSuc"),
                    (e.next = 9),
                    m.updateByCGI(a)
                  );
                case 9:
                  m.updateRepoCond(null == a ? void 0 : a.repo_cond),
                    (U = a.refresh_time || 0);
                  try {
                    M.$stat.click("trade.trade.data", "", "", {}),
                      (function (e) {
                        var t = e.filter(function (e) {
                          return "1" === e.bulletin_status;
                        });
                        if (0 !== t.length) {
                          var r = t[0];
                          (J.value.status = r.bulletin_status),
                            (J.value.title = r.bulletin_title),
                            r.bulletin_content
                              ? (J.value.content = r.bulletin_content
                                  .replace(/&lt;/g, "<")
                                  .replace(/&gt;/g, ">")
                                  .replace(/&quot;/g, '"'))
                              : (J.value.content = "");
                        } else J.value = {};
                      })(a.bulletin || []);
                  } catch (e) {
                    A.reportEventSafely("mon_trade_bulletin_fail", { ext3: e });
                  }
                  return e.abrupt("return", a);
                case 15:
                  throw ((e.prev = 15), (e.t0 = e.catch(0)), e.t0);
                case 18:
                case "end":
                  return e.stop();
              }
          },
          e,
          null,
          [[0, 15]]
        );
      })
    )).apply(this, arguments);
  }
  function ve(e) {
    return fe.apply(this, arguments);
  }
  function fe() {
    return (fe = u(
      r().mark(function e(t) {
        var a;
        return r().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.prev = 0),
                    (e.next = 3),
                    P({
                      market: v.market.value,
                      stock_code: v.code.value,
                      stockholder_code: v.holder.value,
                    })
                  );
                case 3:
                  return (
                    (a = e.sent),
                    e.abrupt(
                      "return",
                      (o.get(
                        C.brokerConfig,
                        "trade.tradeStock.cleanRevokingItemsMapsByReload",
                        !1
                      ) && (m.revokingItemsMaps.value = {}),
                      m.updateByCGI(a, { updateCondNum: !1 }),
                      m.updateRepoCond(null == a ? void 0 : a.repo_cond),
                      a)
                    )
                  );
                case 7:
                  if (
                    ((e.prev = 7),
                    (e.t0 = e.catch(0)),
                    !(null == t ? void 0 : t.isThrowError))
                  ) {
                    e.next = 11;
                    break;
                  }
                  throw e.t0;
                case 11:
                case "end":
                  return e.stop();
              }
          },
          e,
          null,
          [[0, 7]]
        );
      })
    )).apply(this, arguments);
  }
  function Te() {
    G.value && (clearTimeout(G.value), (G.value = null));
  }
  function _e() {
    var e, o, f, T;
    !(function () {
      try {
        if (!d.isTradeTime(v.isKCB.value) && !k.isHKMarket(v.market.value))
          return;
        Te(),
          (G.value = setTimeout(function () {
            d.isTradeTime(v.isKCB.value) &&
              E.aegisReporter.reportEvent("mon_trade_no_push_data", {
                ext4: v.code.value,
              });
          }, 6e4));
      } catch (e) {}
    })();
    var _,
      p =
        (n((e = {}), s.TAB.HOLDING, [
          y.SCHEME.TRADE_POSITION,
          y.SCHEME.TRADE_HQ,
        ]),
        n(e, s.TAB.HISTORY, [y.SCHEME.TRADE_TODAY, y.SCHEME.TRADE_HQ]),
        n(e, s.TAB.CONDITION, [y.SCHEME.PRICE_CONDITION, y.SCHEME.TRADE_HQ]),
        n(e, s.TAB.TRADE, [y.SCHEME.TRADE_TODAY, y.SCHEME.TRADE_HQ]),
        e),
      h = p[x.currentTab.value] || [y.SCHEME.TRADE_HQ];
    (Y.value = h),
      c.connector({
        acceptSchemes: p,
        reportScene: "trade",
        downgradeInterval: U,
        source: Q.value,
        scheme: Y.value,
        context: this,
        options: {
          scode:
            v.code.value && v.market.value
              ? m.getScode([{ code: v.code.value, market: v.market.value }])
              : m.getScode(),
        },
        beforeRequest:
          ((o = {}),
          n(o, l.API_STOCK_INFO, function () {
            return (
              !(
                !d.isTradeTime(v.isKCB.value) ||
                L.value.market_state === i.MARKET_STATE.NOT_TRADEDAY
              ) &&
              !(!v.market.value || !v.code.value) && {
                market: v.market.value,
                code: v.code.value,
                needquote: 1,
                needfive: 1,
              }
            );
          }),
          n(o, l.API_TRADE_REFRESH, function () {
            if ("" === m.getScode()) return !1;
            var e = m.getScode().split(","),
              t = "".concat(v.market.value, ":").concat(v.code.value),
              r = e.findIndex(function (e) {
                return e === t;
              });
            return (
              -1 !== r && e.splice(r, 1),
              0 !== e.length &&
                !(
                  !d.isTradeTime(v.isKCB.value) ||
                  L.value.market_state === i.MARKET_STATE.NOT_TRADEDAY
                ) && { scode: e, scene: "0" }
            );
          }),
          o),
        beforeSend: {},
        connected: function () {},
        disconnected: function () {},
        upgrade:
          ((f = {}),
          n(f, c.SOURCE.AJAX, function () {
            (m.enablePredictiveLogic.value = !0), clearTimeout(K.value), Te();
          }),
          n(f, c.SOURCE.WEBSOCKET, function () {
            m.enablePredictiveLogic.value = !1;
          }),
          f),
        data:
          ((T = {
            quotation: function (e) {
              var t = e.five_trans,
                n = e.secu_quote,
                u = e.market_state,
                o = e.secu_info;
              window &&
                window.__trade_stock_update_stage &&
                (window.__trade_stock_update_stage = !0),
                clearTimeout(K.value),
                d.ts(
                  r().mark(function e() {
                    var c, i, l, d, f;
                    return r().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.code === v.code.value &&
                                n.market === v.market.value &&
                                !1 === I.value &&
                                ((i = a(
                                  a({}, L.value.quote),
                                  {},
                                  {
                                    five_trans: t,
                                    secu_quote: n,
                                    market_state: u,
                                    secu_info: o,
                                  }
                                )),
                                (
                                  null == (c = L.value.quote)
                                    ? void 0
                                    : c.isFrontDefaultStock
                                )
                                  ? (F(i),
                                    delete i.isFrontDefaultStock,
                                    0 == +(v.order.price || 0) &&
                                      (v.updatePrice.value = !0))
                                  : ue(),
                                v.handleFetchStockInfo({
                                  res: i,
                                  fromPush: !0,
                                }),
                                g.validatePushData(n, t, o),
                                O.updateMinChartLatestData(n.dqj),
                                Te()),
                              void (e.next = 3)
                            );
                          case 3:
                            (l = o.market),
                              (d = o.secu_code),
                              (f = n.dqj),
                              x.currentTab.value === s.TAB.HISTORY &&
                                m.updateDqjInHistory({
                                  code: d,
                                  market: l,
                                  dqj: f,
                                  market_state: u,
                                }),
                              m.quotationProcessStrategy({
                                code: d,
                                market: l,
                                dqj: f,
                              });
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )(),
                (K.value = setTimeout(function () {
                  c.connector.source !== c.SOURCE.AJAX &&
                    L.value.market_state !== i.MARKET_STATE.SIESTA &&
                    ((Q.value = c.SOURCE.AJAX), _e());
                }, 6e4));
            },
          }),
          n(T, l.API_STOCK_INFO, function (e) {
            d.ts(
              r().mark(function t() {
                var a, n, u;
                return r().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (a = e.quote.dqj),
                          (n = e.info),
                          (u = n.market),
                          n.secu_code === v.code.value &&
                            u === v.market.value &&
                            (ue(),
                            v.handleFetchStockInfo({
                              res: e,
                              code: v.code.value,
                            })),
                          void (t.next = 4)
                        );
                      case 4:
                        x.currentTab.value === s.TAB.HISTORY &&
                          m.updateDqjInHistory({
                            code: v.code.value,
                            market: v.market.value,
                            dqj: a,
                            market_state: e.market_state,
                          }),
                          x.currentTab.value === s.TAB.HOLDING &&
                            m.processQuotationChange({
                              code: v.code.value,
                              market: v.market.value,
                              dqj: a,
                            }),
                          O.updateMinChartLatestData(a);
                      case 7:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          }),
          n(
            T,
            "new_home_push",
            ((_ = u(
              r().mark(function e(t) {
                return r().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), m.updateByPush(t);
                      case 2:
                        oe(t);
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e) {
              return _.apply(this, arguments);
            })
          ),
          n(T, l.API_TRADE_REFRESH, function (e) {
            if (e.slist) {
              var r,
                n = t(e.slist);
              try {
                for (n.s(); !(r = n.n()).done; ) {
                  var u = r.value,
                    o = "";
                  u.market === i.MARKET.SA
                    ? (o = e.market_state_s)
                    : u.market === i.MARKET.HA
                    ? (o = e.market_state_h)
                    : u.market === i.MARKET.BJ
                    ? (o = e.market_state_bj)
                    : u.market === i.MARKET.NQ
                    ? (o = e.market_state_nq)
                    : u.market === i.MARKET.HK && (o = e.market_state_hk),
                    x.currentTab.value === s.TAB.HISTORY &&
                      m.updateDqjInHistory(
                        a(a({}, u), {}, { market_state: o })
                      ),
                    x.currentTab.value === s.TAB.HOLDING &&
                      m.quotationProcessStrategy(u);
                }
              } catch (e) {
                n.e(e);
              } finally {
                n.f();
              }
            }
          }),
          T),
      });
  }
  return {
    tradeBulletinConfig: J,
    firstUpdate: W,
    fetchTradeShow: le,
    fetchTradeReload: ve,
    fetchPositionAndOrder:
      ((re = u(
        r().mark(function e() {
          var t;
          return r().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.prev = 0), (e.next = 3), j();
                  case 3:
                    (t = e.sent),
                      m.updateByCGI(t, { updateCondNum: !1 }),
                      oe(t),
                      (e.next = 9);
                    break;
                  case 7:
                    (e.prev = 7), (e.t0 = e.catch(0));
                  case 9:
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
      function () {
        return re.apply(this, arguments);
      }),
    fetchWebsocket: _e,
    initMethods: (function () {
      var t = u(
        r().mark(function t() {
          var n,
            u,
            s,
            l,
            d,
            T,
            _,
            m,
            p,
            k,
            R,
            y,
            C,
            D,
            x,
            I,
            O = arguments;
          return r().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = O.length > 0 && void 0 !== O[0] ? O[0] : {}),
                      (u = !1),
                      c.connector.source === c.SOURCE.AJAX && c.disconnect(),
                      (t.prev = 3),
                      (s = M.$route.query),
                      (l = s.price),
                      (d = s.amount),
                      g.validateQueryParams(l, d, v.code.value),
                      (T = v.code.value && v.market.value),
                      (_ = n.isManualRefresh),
                      (m = n.resetFirstUpdate),
                      W.value ||
                        m ||
                        _ ||
                        (function () {
                          try {
                            A.reportEventSafely("mon_trade_init_reenter", {
                              ext3: v.code.value,
                              ext4: v.market.value,
                              ext5: JSON.stringify({
                                trade_mode: N.value,
                                action: v.action.value,
                                strategy: v.strategy.value,
                              }),
                            });
                          } catch (e) {}
                        })(),
                      _ ||
                        (m && (W.value = !0),
                        (v.updatePrice.value = !1),
                        W.value && (v.strategy.value = i.STRATEGY.MANUAL)),
                      (p = [
                        _ ? ve() : le(),
                        T
                          ? v.fetchStockInfo({
                              market: v.market.value,
                              code: v.code.value,
                              needquote: 1,
                              needfive: 1,
                            })
                          : null,
                      ].filter(function (e) {
                        return e;
                      })),
                      (t.next = 11),
                      Promise.all(p)
                    );
                  case 11:
                    (k = t.sent), (R = e(k, 1)), (y = R[0]);
                    try {
                      T &&
                        L.value.fetchRiskLimit &&
                        L.value.fetchRiskLimit(b, {
                          action: "trade",
                          conv_code_list: ""
                            .concat(v.market.value)
                            .concat(v.code.value),
                        });
                    } catch (e) {
                      A.reportEventSafely("mon_trade_fetchrisklimit_fail", {
                        ext3: e,
                      });
                    }
                    !_ &&
                      W.value &&
                      ((C =
                        o.index.getStorageSync(f.LAST_TRADE_PRICE_STRATEGY) ||
                        {}),
                      (D = C.lastPriceStrategy),
                      (x = void 0 === D ? i.STRATEGY.MANUAL : D) ===
                      i.STRATEGY.AFTER_CLOSED
                        ? ((v.strategy.value = i.STRATEGY.MANUAL),
                          o.index.removeStorageSync(
                            f.LAST_TRADE_PRICE_STRATEGY
                          ))
                        : (v.strategy.value = x)),
                      [
                        i.MARKET_STATE.AFTER_PREPARE,
                        i.MARKET_STATE.AFTER_TRADING,
                      ].indexOf(L.value.market_state) > -1 &&
                        (v.order.strategy = i.STRATEGY.AFTER_CLOSED),
                      w.getShareHolderCards(v.market.value || ""),
                      W.value && B(W.value, N.value),
                      W.value && l && !isNaN(+l) && (v.price.value = +l),
                      T &&
                        (W.value &&
                          ((v.amount.value = d || L.value.minAmount),
                          N.value !== i.TRADE_MODE.STANDARD &&
                            v.order.isBuyAction &&
                            (v.amount.value = "0")),
                        ne(null == y ? void 0 : y.stockholder_code),
                        (u = !0)),
                      (W.value = !1),
                      S.isRequestUnCompleteWhenRoute(y) || _e(),
                      S.isRequestUnCompleteWhenRoute(y) &&
                        (S.removeUnCompleteFlag(y),
                        E.aegisReporter.reportEvent(
                          "TRADE_UNCOMPLETE_REQ_WHEN_ROUTE"
                        )),
                      s.minChart &&
                        M.$nextTick(function () {
                          var e = M.$refs.tradeQuoteInfo;
                          e && e.firstInitMinChart();
                        }),
                      ce(),
                      (t.next = 26);
                    break;
                  case 19:
                    if (
                      ((t.prev = 19),
                      (t.t0 = t.catch(3)),
                      q.info("初始化出错", t.t0),
                      !ae)
                    ) {
                      t.next = 25;
                      break;
                    }
                    if (
                      ((I = h.useNetworkDetect()),
                      !(0, I.handleNetworkDetectError)(M, t.t0, function () {
                        a(n);
                      }))
                    ) {
                      t.next = 25;
                      break;
                    }
                    return t.abrupt("return");
                  case 25:
                    v.market.value !== i.MARKET.HK ||
                      u ||
                      (ne(),
                      A.reportEventSafely("mon_trade_tradeshowfail_fetchauth")),
                      (t.t0 && t.t0.retcode) ||
                        A.reportEventSafely("mon_trade_init_fail", {
                          ext3: t.t0,
                        }),
                      o.index.showToast({
                        title: t.t0.retmsg || "服务器繁忙 请稍后再试",
                        icon: "none",
                      });
                  case 26:
                  case "end":
                    return t.stop();
                }
            },
            t,
            null,
            [[3, 19]]
          );
        })
      );
      function a() {
        return t.apply(this, arguments);
      }
      return a;
    })(),
    fetchCondList: ce,
    clearNoTargetPushTimmer: Te,
    cancelValidatePushData: function () {
      var e, t;
      null == (t = null == (e = g.validatePushData) ? void 0 : e.cancel) ||
        t.call(e);
    },
    noPushDataTimer: K,
    noTriggerConditions: V,
    condFetchStatus: z,
    condStatusType: ee,
    setCondStatusType: te,
  };
};
