var e = require("../../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var n = require("../../../common/vendor.js"),
  o = require("../../../cgi/condition.js"),
  c = require("../../../cgi/signProtocol.js"),
  i = require("../../../common/components/Dialog/index.js");
require("./ConditionBase.js");
var a = require("../../../cgi/trade/stock.js"),
  s = require("../../../domain/entities/trade-stock/trade-account.js"),
  u = require("../../../domain/entities/trade-stock/trade-auth.js"),
  d = require("../../../domain/entities/trade-stock/service/pre-check.js"),
  l = require("../../../stores/trade-stock/useQuotes.js"),
  p = require("../../../cgi/password.js"),
  f = require("../../../components/Password/index.js"),
  k = require("./useWebsocket.js"),
  h = require("./useCondProtocolCheck.js"),
  v = require("../../../adapter/router.js"),
  m = require("../../../config/key.js");
require("../../../service/broker.js");
var x = require("../../../service/aegis/platform/not-wujie.js"),
  b = require("./useCondCheck.js"),
  g = require("../../../config/broker/11100/index.js");
exports.useConditionBase = function (w, C) {
  var y,
    _,
    S,
    q,
    j,
    P,
    I,
    O,
    T,
    A,
    N,
    R,
    E,
    B = null == (y = n.getCurrentInstance()) ? void 0 : y.proxy,
    D = !1,
    L = n.ref(!0),
    G = n.computed(function () {
      return L.value && !w.isUpdate;
    }),
    W = new a.TradeStockService(),
    Q = n.reactive(new s.TradeAccount(W)),
    U = n.reactive(new u.AccountTradeAuth()),
    F = new d.ConditionOrderCheckService(w, Q, U),
    H = l.useQuotes(),
    J = H.stock,
    $ = H.quoteInfo,
    M = H.fetchQuotes,
    z = H.handleQuoteRes,
    K = k.useWebsocket(),
    V = K.fetchWebsocket,
    X = K.clearWss,
    Y = h.useCondProtocolCheck().checkBoxClick,
    Z =
      (null == (S = null == (_ = g.brokerConfig) ? void 0 : _.trade)
        ? void 0
        : S.signProtocolNeedRead) || !1,
    ee =
      (null == (j = null == (q = g.brokerConfig) ? void 0 : q.trade)
        ? void 0
        : j.condProtocolFromBroker) || !1,
    re =
      (null == (I = null == (P = g.brokerConfig) ? void 0 : P.trade)
        ? void 0
        : I.condProtocolNeedCA) || !1,
    te = n.ref(""),
    ne = n.ref([]),
    oe = n.ref(!1);
  function ce() {
    return ie.apply(this, arguments);
  }
  function ie() {
    return (ie = t(
      r().mark(function e() {
        var t;
        return r().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (!w.isUpdate) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return");
              case 2:
                if (!D) {
                  e.next = 4;
                  break;
                }
                return e.abrupt("return");
              case 4:
                return (
                  (D = !0),
                  (e.next = 7),
                  o.conditionOrderApi.orderInit().catch(function (e) {
                    return (D = !1), Promise.reject(e);
                  })
                );
              case 7:
                (t = e.sent),
                  (D = !1),
                  w.setCondId(t.cond_id),
                  (L.value = "1" === t.is_need_risk_tips),
                  (te.value = t.can_not_open_reason);
              case 9:
              case "end":
                return e.stop();
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  function ae() {
    return se.apply(this, arguments);
  }
  function se() {
    return (se = t(
      r().mark(function e() {
        var t,
          n = arguments;
        return r().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((t = n.length > 0 && void 0 !== n[0] && n[0]),
                  (e.t0 = t),
                  e.t0)
                ) {
                  e.next = 5;
                  break;
                }
                return (
                  (e.next = 5),
                  c.signProtocol.signConditionProtocal().catch(function (e) {
                    return (
                      i.Dialog({ context: B, message: "协议签署失败，请重试" }),
                      Promise.reject(e || new Error("协议签署失败"))
                    );
                  })
                );
              case 5:
                return (L.value = !1), e.abrupt("return", !0);
              case 7:
              case "end":
                return e.stop();
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  function ue() {
    return de.apply(this, arguments);
  }
  function de() {
    return (de = t(
      r().mark(function e() {
        var t;
        return r().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Q.fetchAccountInfo({
                    market: w.market,
                    stock_code: w.code,
                    stockholder_code:
                      null == (t = null == B ? void 0 : B.$route.query)
                        ? void 0
                        : t.holder,
                    qry_bulletin: "0",
                    retry_time: "0",
                  })
                );
              case 2:
                return e.abrupt("return", e.sent);
              case 3:
              case "end":
                return e.stop();
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  function le() {
    return pe.apply(this, arguments);
  }
  function pe() {
    return (pe = t(
      r().mark(function e() {
        return r().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  M({
                    code: w.code,
                    market: w.market,
                    needquote: "1",
                    needfive: "1",
                  })
                );
              case 2:
                return e.abrupt("return", e.sent);
              case 3:
              case "end":
                return e.stop();
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  return {
    quoteInfo: $,
    stockInfo: J,
    tradeAccount: Q,
    tradeAuth: U,
    orderCheckService: F,
    stockSetting: ne,
    isSubmitLoading: oe,
    signedProtocol: function (e) {
      return new Promise(function (o, c) {
        if (!G.value) return o(!0);
        var a;
        Z
          ? (v.router().push({ name: "ConditionProtocol" }),
            c({ retcode: "GO_PROTOCOL", retmsg: "需要跳转签署协议" }))
          : (i.Dialog({
              selector: "#condition-order-risk-dialog",
              context: e,
              title: "协议签署",
              showCancelButton: !0,
              cancelButtonText: "不同意",
              confirmButtonText: "同意并确认",
              beforeClose:
                ((a = t(
                  r().mark(function e(t, n) {
                    return r().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if ("confirm" !== t) {
                                e.next = 15;
                                break;
                              }
                              if (((e.prev = 1), !Y())) {
                                e.next = 4;
                                break;
                              }
                              return e.abrupt("return", void n(!1));
                            case 4:
                              return (e.next = 6), ae();
                            case 6:
                              o(!0), (e.next = 12);
                              break;
                            case 9:
                              (e.prev = 9),
                                (e.t0 = e.catch(1)),
                                x.aegisReporter.reportEvent(
                                  "condition-base-sign-protocol-fail",
                                  { ext2: JSON.stringify(e.t0) }
                                ),
                                c({
                                  retcode: "SIGN_FAIL",
                                  retmsg: "协议签署失败",
                                });
                            case 12:
                              n(), (e.next = 16);
                              break;
                            case 15:
                              c({
                                retcode: "SIGN_CANCEL",
                                retmsg: "取消协议签署",
                              }),
                                n();
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
                  return a.apply(this, arguments);
                }),
            }),
            n.index.$once(
              "condition.protocol.sign",
              t(
                r().mark(function t() {
                  return r().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          try {
                            i.Dialog.hide({
                              context: e,
                              selector: "#condition-order-risk-dialog",
                            }),
                              o(!0);
                          } catch (e) {
                            o(!1);
                          }
                        case 1:
                        case "end":
                          return r.stop();
                      }
                  }, t);
                })
              )
            ));
      });
    },
    initCond:
      ((E = t(
        r().mark(function e() {
          return r().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  try {
                    ce();
                  } catch (e) {}
                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )),
      function () {
        return E.apply(this, arguments);
      }),
    initTradeService:
      ((R = t(
        r().mark(function t() {
          var n, o, c, i, a;
          return r().wrap(
            function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    return (
                      (r.prev = 0), (r.next = 3), Promise.all([ue(), le()])
                    );
                  case 3:
                    return (
                      (i = r.sent),
                      F.setStock(J.value),
                      U.fetchTradeAuth(
                        W,
                        e(
                          {
                            stockholder_code: Q.stockholder_code,
                            market: w.market,
                            stock_code: w.code,
                            stock_name: w.name || "",
                            stock_cls:
                              null == (n = J.value.secu_info)
                                ? void 0
                                : n.class,
                            query_ft: "0",
                          },
                          (
                            null ==
                            (c =
                              null == (o = g.brokerConfig) ? void 0 : o.trade)
                              ? void 0
                              : c.enableCondSettingRiskTips
                          )
                            ? { qry_notice_info: "1" }
                            : {}
                        )
                      ),
                      (a = i[0] || {}),
                      r.abrupt(
                        "return",
                        ((ne.value = a.stock_setting || []),
                        Q.getShareHolderCards(w.market || ""),
                        V(
                          e(
                            {
                              code: w.code,
                              market: w.market,
                              stockInfo: J,
                              downgradeInterval: +(a.refresh_time || 0),
                              stockCallback: function (e, r) {
                                z(e, { code: w.code, fromPush: r });
                              },
                              assetCallback: function (e) {
                                !(function (e) {
                                  if (
                                    (e.fundsinfo &&
                                      (Q.max_buy_money = String(
                                        +e.fundsinfo.can_trade || 0
                                      )),
                                    e.holdstock)
                                  ) {
                                    var r = e.holdstock.find(function (e) {
                                      return (
                                        e.code === w.code &&
                                        e.market === w.market
                                      );
                                    });
                                    Q.max_sell_qty = r
                                      ? String(+r.can_use || 0)
                                      : "0";
                                  }
                                })(e);
                              },
                            },
                            (null == C ? void 0 : C.wbSchema)
                              ? { schema: C.wbSchema }
                              : {}
                          )
                        ),
                        i)
                      )
                    );
                  case 9:
                    throw (
                      ((r.prev = 9),
                      (r.t0 = r.catch(0)),
                      x.aegisReporter.reportEvent(
                        "condition-base-init-trade-service-fail",
                        { ext2: JSON.stringify(r.t0) }
                      ),
                      r.t0)
                    );
                  case 12:
                  case "end":
                    return r.stop();
                }
            },
            t,
            null,
            [[0, 9]]
          );
        })
      )),
      function () {
        return R.apply(this, arguments);
      }),
    checkInit:
      ((N = t(
        r().mark(function e() {
          return r().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (((e.t0 = w.condId), e.t0)) {
                    e.next = 4;
                    break;
                  }
                  return (
                    (e.next = 4),
                    ce().catch(function (e) {
                      return (
                        n.index.showToast({
                          title: "订单初始化失败",
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
      )),
      function () {
        return N.apply(this, arguments);
      }),
    orderSubmit:
      ((A = t(
        r().mark(function e(n, c) {
          var i, a;
          return r().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!oe.value) {
                      e.next = 4;
                      break;
                    }
                    x.aegisReporter.reportEvent(
                      "condition-base-order-submit-reentry-blocked"
                    ),
                      (e.next = 36);
                    break;
                  case 4:
                    return (
                      (oe.value = !0),
                      (e.prev = 5),
                      (e.prev = 6),
                      (e.next = 9),
                      (a = null == c ? void 0 : c.onCheckPwd),
                      new Promise(
                        (function () {
                          var e = t(
                            r().mark(function e(t, n) {
                              return r().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 2),
                                        p.passwordCgi.shouldCheckPassword({
                                          market: w.market,
                                        })
                                      );
                                    case 2:
                                      "1" === e.sent.needcheck
                                        ? (f.Password({
                                            context: B,
                                            theme: f.THEME.TRADE,
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
                                          }),
                                          null == a || a())
                                        : t("");
                                    case 5:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (r, t) {
                            return e.apply(this, arguments);
                          };
                        })()
                      )
                    );
                  case 9:
                    e.next = 14;
                    break;
                  case 11:
                    return (
                      (e.prev = 11),
                      (e.t0 = e.catch(6)),
                      e.abrupt("return", void (null == c || c.onCancel(e.t0)))
                    );
                  case 14:
                    if (
                      (null == c || c.onLoading(), (e.prev = 15), !w.isUpdate)
                    ) {
                      e.next = 22;
                      break;
                    }
                    return (e.next = 19), o.conditionOrderApi.orderUpdate(n);
                  case 19:
                    (i = e.sent), (e.next = 27);
                    break;
                  case 22:
                    return (e.next = 24), o.conditionOrderApi.orderCreate(n);
                  case 24:
                    (i = e.sent), w.setCondId(""), ce();
                  case 27:
                    null == c || c.onSuccess(i), (e.next = 33);
                    break;
                  case 30:
                    (e.prev = 30),
                      (e.t1 = e.catch(15)),
                      x.aegisReporter.reportEvent(
                        "condition-base-order-submit-fail",
                        { ext2: JSON.stringify(e.t1) }
                      ),
                      null == c || c.onFail(e.t1);
                  case 33:
                    return (e.prev = 33), (oe.value = !1), e.finish(33);
                  case 36:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [
              [5, , 33, 36],
              [6, 11],
              [15, 30],
            ]
          );
        })
      )),
      function (e, r) {
        return A.apply(this, arguments);
      }),
    queryInfo:
      ((T = t(
        r().mark(function e(t) {
          return r().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.prev = 0),
                      (e.next = 3),
                      o.conditionOrderApi.orderQueryInfo({ cond_id: t })
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 6:
                    return (
                      (e.prev = 6),
                      (e.t0 = e.catch(0)),
                      e.abrupt(
                        "return",
                        (n.index.showToast({
                          title: "信息拉取失败",
                          icon: "none",
                        }),
                        Promise.reject(e.t0))
                      )
                    );
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
      function (e) {
        return T.apply(this, arguments);
      }),
    updateSignStatus: function () {
      var e = n.index.getStorageSync(m.CONDIITON_SIGN_PROTOCOL);
      n.index.removeStorageSync(m.CONDIITON_SIGN_PROTOCOL), e && ae(ee || re);
    },
    checkBlockTips:
      ((O = t(
        r().mark(function e() {
          return r().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt("return", b.checkBlockTips(te));
                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )),
      function () {
        return O.apply(this, arguments);
      }),
    clearWss: function () {
      w.isStockSet && X();
    },
    fetchTradeShow: ue,
  };
};
