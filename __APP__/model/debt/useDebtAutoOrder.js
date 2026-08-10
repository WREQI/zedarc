require("../../@babel/runtime/helpers/Objectvalues");
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../../@babel/runtime/helpers/slicedToArray");
require("../../@babel/runtime/helpers/Objectentries");
var n,
  a = require("../../@babel/runtime/helpers/objectSpread2"),
  o = require("../../@babel/runtime/helpers/defineProperty");
require("../../app.js");
var u = require("../../common/vendor.js"),
  s = require("../../cgi/debt.js"),
  i = require("../../cgi/jiaxinbao.js"),
  c = require("../../cgi/signProtocol.js"),
  l = require("../../common/components/Dialog/index.js"),
  p = require("../../cgi/password.js"),
  v = require("../../components/Password/index.js"),
  d = require("../../stores/user/useUserinfo.js"),
  m = require("../../utils/market.js");
require("../../service/broker.js");
var f = require("../../service/stat/mp-weixin.js"),
  T = require("../common/useServerTime.js"),
  b = require("../common/useVisibleControl.js"),
  y = require("../../components/SubmitResult/enum.js"),
  k = require("../trade/conditions/useCondCheck.js"),
  g = require("../../adapter/router.js"),
  h = require("../trade/conditions/useConditionErrorHandle.js"),
  E = require("./useDebtAutoOrderTimeRedDot.js"),
  x = require("./debtAutoOrderTime.js"),
  S = require("../../config/broker/11100/index.js"),
  C = { PRODUCT: "PRODUCT", RATE: "RATE", PRICE: "PRICE", TIME: "TIME" },
  R = { SZ: "0", SH: "1" },
  D = { REAL: "0", LEAST: "1" },
  A = { ALL: "0", SAVE: "1" },
  _ = { CUSTOM: "0" },
  w = { UNSET: "0", START: "1", PAUSE: "2" },
  O = { START: "0", PAUSE: "1" },
  P = "1",
  U =
    "系统按设置的时间自动委托下单，可能出现因同一时间下单人数过多导致延时委托或因行情波动剧烈委托无法成交的情况，以实际成交时间和状态为准。";
function I(e) {
  var t = [
    { key: C.PRODUCT, title: "选择产品" },
    { key: C.RATE, title: "自动下单利率" },
    { key: C.PRICE, title: "自动下单金额" },
  ];
  return e && t.push({ key: C.TIME, title: "自动下单时间" }), t;
}
function M(e) {
  var t = {
    settingFormBottomDesc: e ? "" : "交易日15:00-15:30自动下单",
    formBottomDesc:
      "10800" === String(S.brokerConfig.base.code)
        ? ""
        : "如需取出资金，需先暂停运行。T日暂停，若未自动下单，T+1日资金可取；若已下单，T+2日可取。",
    pageBottomDescHeader: "投资须知",
    pageBottomDesc:
      "1、自动下单有效期默认为一年，到期后需重新设置。每次修改更新或恢复运行都会刷新有效期。\n2、为提高成交概率，触发时以行情盘口对手盘第五档价格下单。委托单由交易所撮合成交，本系统不保证一定成交。\n3、若当日有打新中签缴款则不自动下单。",
    pageBottomDescUnset:
      "10800" === String(S.brokerConfig.base.code)
        ? "1、自动下单有效期默认为一年，到期后需重新设置。每次修改更新或恢复运行都会刷新有效期。\n2、为提高成交概率，触发时以行情盘口对手盘第五档价格下单。委托单由交易所撮合成交，本系统不保证一定成交。\n3、若当日有打新中签缴款则不自动下单。"
        : "1、设置自动下单后，如需取出资金，需提前终止策略。T日终止，若未自动下单，T+1资金可取；若已下单，T+2日可取。\n2、自动下单有效期默认为一年，到期后需重新设置。每次修改更新或恢复运行都会刷新有效期。\n3、为提高成交概率，触发时以行情盘口对手盘第五档价格下单。委托单由交易所撮合成交，本系统不保证一定成交。\n4、若当日有打新中签缴款则不自动下单。",
  };
  if (e) {
    t.pageBottomDesc = "".concat(t.pageBottomDesc, "\n4、").concat(U);
    var r = "10800" === String(S.brokerConfig.base.code) ? "4" : "5";
    t.pageBottomDescUnset = ""
      .concat(t.pageBottomDescUnset, "\n")
      .concat(r, "、")
      .concat(U);
  }
  if (
    ("10900" !== String(S.brokerConfig.base.code) ||
      e ||
      ((t.pageBottomDesc = "".concat(
        t.pageBottomDesc,
        "\n4、收市后 15:00 自动委托下单，可能出现因同一时间下单人数过多导致延时委托或因行情波动剧烈委托无法成交的情况，以实际成交时间和状态为准。"
      )),
      (t.pageBottomDescUnset = "".concat(
        t.pageBottomDescUnset,
        "\n5、收市后 15:00 自动委托下单，可能出现因同一时间下单人数过多导致延时委托或因行情波动剧烈委托无法成交的情况，以实际成交时间和状态为准。"
      ))),
    "10500" === String(S.brokerConfig.base.code))
  ) {
    var n =
        '1、使用通用回购自动扫单会按照服务费率<span style="color: #E63535">0.0035%</span>收取（已包含原手动下单佣金率），当下单时若收益低于1.33%无法覆盖手续费时，当天不进行自动下单。\n2、自动下单有效期默认为一年，到期或修改交易密码后需重新设置（手动暂停运行再恢复）。每次修改更新或恢复运行都会刷新有效期。\n3、为提高成交概率，触发时以行情盘口对手盘第五档价格下单。因条件单触发时间不确定，因此具体计息时间和收益以交易所、登记结算机构等记录为准。委托单由交易所撮合成交，本系统不保证一定成交。\n4、若当日有打新中签缴款则不自动下单',
      a =
        '1、使用通用回购自动扫单会按照服务费率<span style="color: #E63535">0.0035%</span>收取（已包含原手动下单佣金率），当下单时若收益低于1.33%无法覆盖手续费时，当天不进行自动下单。\n2、设置自动下单后，如需取出资金，需提前终止策略。T日终止，若未自动下单，T+1资金可取；若已下单，T+2日可取。\n3、自动下单有效期默认为一年，到期后需重新设置。每次修改更新或恢复运行都会刷新有效期。\n4、为提高成交概率，触发时以行情盘口对手盘第五档价格下单。因条件单触发时间不确定，因此具体计息时间和收益以交易所、登记结算机构等记录为准。委托单由交易所撮合成交，本系统不保证一定成交。\n5、若当日有打新中签缴款则不自动下单';
    (t.pageBottomDesc = e ? "".concat(n, "\n5、").concat(U) : n),
      (t.pageBottomDescUnset = e ? "".concat(a, "\n6、").concat(U) : a);
  }
  return (
    "11100" === String(S.brokerConfig.base.code) &&
      ((t.settingFormBottomDesc =
        "如需取出资金，需先暂停运行。T日暂停，若未自动下单，T+1资金可取；若已下单，T+2日可取。"),
      (t.pageBottomDescUnset =
        "1、自动下单有效期默认为一年，到期后需重新设置。每次修改更新或恢复运行都会刷新有效期。\n2、为提高成交概率，触发时以行情盘口对手盘第五档价格下单。委托单由交易所撮合成交，本系统不保证一定成交。\n3、若当日有打新中签缴款则不自动下单。\n4、系统按设置的时间自动委托下单，可能出现因同一时间下单人数过多导致延时委托或因行情波动剧烈委托无法成交的情况，以实际成交时间和状态为准。\n5、条件单功能与中信建投证券其他官方渠道提供的条件单功能独立监控和执行。如在中信建投证券多个官方渠道使用条件单功能，可能会存在部分条件单下单不成功的情况，以最终委托成交为准。投资有风险，入市需谨慎。"),
      (t.pageBottomDesc =
        "1、自动下单有效期默认为一年，到期后需重新设置。每次修改更新或恢复运行都会刷新有效期。\n2、为提高成交概率，触发时以行情盘口对手盘第五档价格下单。委托单由交易所撮合成交，本系统不保证一定成交。\n3、若当日有打新中签缴款则不自动下单。\n4、系统按设置的时间自动委托下单，可能出现因同一时间下单人数过多导致延时委托或因行情波动剧烈委托无法成交的情况，以实际成交时间和状态为准。\n5、条件单功能与中信建投证券其他官方渠道提供的条件单功能独立监控和执行。如在中信建投证券多个官方渠道使用条件单功能，可能会存在部分条件单下单不成功的情况，以最终委托成交为准。投资有风险，入市需谨慎。")),
    t
  );
}
var j =
  (o((n = {}), C.PRODUCT, {
    SZ: {
      name: "深市1天期",
      scode: "131810",
      market: "0",
      type: R.SZ,
      typeName: "sz",
      desc: "1000元起",
    },
    SH: {
      name: "沪市1天期",
      scode: "204001",
      market: "1",
      type: R.SH,
      typeName: "sh",
      desc: "1000元起",
    },
  }),
  o(n, C.RATE, {
    REAL: {
      name: "实时利率",
      type: D.REAL,
      typeName: "real",
      desc: "为提高成交概率，以触发时盘口买五价下单",
    },
    LEAST: {
      name: "保底利率",
      type: D.LEAST,
      typeName: "least",
      desc: "当实时利率大于保底利率时，会以实时利率委托。",
      minRate: 1.5,
      hasValue: !0,
    },
  }),
  o(n, C.PRICE, {
    ALL: { name: "全部可用资金", type: A.ALL, typeName: "all" },
    SAVE: {
      name: "保留金额",
      type: A.SAVE,
      typeName: "save",
      desc: "设置保留金额，其余资金用于自动下单",
      hasValue: !0,
    },
  }),
  o(n, C.TIME, {
    CUSTOM: {
      name: "自定义时间",
      type: _.CUSTOM,
      typeName: "custom",
      desc: "请输入自动下单时间（格式：HH:MM）",
      hasValue: !0,
    },
  }),
  n);
(exports.AUTO_ORDER_STATUS = w),
  (exports.CHANGE_ORDER_STATUS = O),
  (exports.DEBT_PRICE_TYPE = A),
  (exports.DEBT_PRODUCT_TYPE = R),
  (exports.DEBT_RATE_TYPE = D),
  (exports.DEBT_TIME_TYPE = _),
  (exports.FORM_KEY_LIST = C),
  (exports.useDebtAutoOrder = function () {
    var n,
      U,
      B,
      q,
      L,
      V,
      N,
      H,
      Y = null == (U = u.getCurrentInstance()) ? void 0 : U.proxy,
      F = T.useServerTime().getServerTime,
      K = h.useConditionErrorHandle(),
      Z = K.setLastRetcode,
      z = K.getErrorBtnText,
      G = u.ref(""),
      $ = u.computed(function () {
        return x.isDebtAutoOrderNeedSetTime();
      }),
      W =
        (o((n = {}), C.RATE, { integer: 2, decimal: 2 }),
        o(n, C.PRICE, { integer: 9, decimal: 2 }),
        n),
      J = u.computed(function () {
        var e, t;
        if ($.value) {
          var r =
            null == (t = null == (e = X.value) ? void 0 : e[C.TIME])
              ? void 0
              : t.value;
          return r ? "交易日".concat(r) : "交易日15:00～15:30";
        }
        return "交易日15:00～15:30";
      }),
      Q = u.reactive(M($.value)),
      X = u.ref(
        (function (e) {
          var t,
            r =
              (o((t = {}), C.PRODUCT, { type: "", value: "" }),
              o(t, C.RATE, { type: "", value: "" }),
              o(t, C.PRICE, { type: "", value: "" }),
              t);
          return e && (r[C.TIME] = { type: "", value: "" }), r;
        })($.value)
      ),
      ee = u.ref(I($.value));
    u.watch($, function (e) {
      e &&
        (Object.assign(Q, M(!0)),
        (ee.value = I(!0)),
        X.value[C.TIME] ||
          (X.value = a(
            a({}, X.value),
            {},
            o({}, C.TIME, { type: "", value: "" })
          )));
    });
    var te = u.ref({}),
      re = u.ref(x.normalizeInvestTimeSetFlag()),
      ne = E.useDebtAutoOrderTimeRedDot(re),
      ae = ne.showTimeRedDot,
      oe = ne.markTimeRedDotClicked;
    function ue(e) {
      return "11100" === String(S.brokerConfig.base.code)
        ? te.value.invest_time || x.getDefaultInvestTime(G.value)
        : e
        ? "1" === re.value
          ? te.value.invest_time || ""
          : x.getDefaultInvestTime(G.value)
        : te.value.invest_time || "";
    }
    var se,
      ie,
      ce,
      le = u.ref(w.UNSET),
      pe = u.ref(!1),
      ve = u.ref(!1),
      de = u.ref(""),
      me = u.computed(function () {
        return Object.entries(X.value).every(function (e) {
          var t = r(e, 2),
            n = t[0],
            a = t[1];
          if (!a.type) return !1;
          var o = Ae({ key: n, type: a.type });
          return !((null == o ? void 0 : o.hasValue) && !a.value);
        });
      }),
      fe = u.ref(!1),
      Te = u.ref(!1),
      be = u.ref(!1),
      ye = u.ref(!1),
      ke = b.useVisibleControl(),
      ge = ke.visible,
      he = ke.show,
      Ee = ke.hide,
      xe =
        (null == (q = null == (B = S.brokerConfig) ? void 0 : B.trade)
          ? void 0
          : q.signProtocolNeedRead) || !1,
      Se =
        (null == (V = null == (L = S.brokerConfig) ? void 0 : L.trade)
          ? void 0
          : V.condProtocolFromBroker) || !1,
      Ce =
        (null == (H = null == (N = S.brokerConfig) ? void 0 : N.trade)
          ? void 0
          : H.condProtocolNeedCA) || !1,
      Re = !1;
    function De() {
      var e = ee.value.map(function (e) {
        var t,
          r = a({}, e),
          n = e.key,
          o = (null == (t = X.value) ? void 0 : t[n]) || {},
          u = Ae({ key: n, type: o.type });
        switch (n) {
          case C.PRODUCT:
            (r.mainValue = null == u ? void 0 : u.name),
              (r.subValue = null == u ? void 0 : u.scode);
            break;
          case C.RATE:
            o.type === D.REAL && (r.mainValue = null == u ? void 0 : u.name),
              o.type === D.LEAST &&
                (r.mainValue = o.value ? "≥".concat(o.value, "%") : "");
            break;
          case C.PRICE:
            o.type === A.ALL &&
              ((r.mainValue = null == u ? void 0 : u.name), (r.subValue = "")),
              o.type === A.SAVE &&
                (o.value
                  ? ((r.mainValue = "保留".concat(o.value, "元")),
                    (r.subValue = "其余资金用于自动下单"))
                  : ((r.mainValue = ""), (r.subValue = "")));
            break;
          case C.TIME:
            o.type === _.CUSTOM && (r.mainValue = o.value || "");
        }
        return r;
      });
      ee.value = e;
    }
    function Ae(e) {
      var t = e.key,
        r = e.type;
      if (!t || !r || !Object.values(C).includes(t)) return {};
      var n = j[t];
      return (
        Object.values(n).find(function (e) {
          return e.type === r;
        }) || {}
      );
    }
    function _e() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      e.forEach(function (e) {
        var t = e.key,
          r = e.type,
          n = e.value;
        if (t) {
          X.value[t] || (X.value[t] = { type: "", value: "" });
          var a = Ae({ key: t, type: r });
          (X.value[t].type = r),
            (X.value[t].value = (null == a ? void 0 : a.hasValue) ? n : "");
        }
      }),
        De();
    }
    function we() {
      return Oe.apply(this, arguments);
    }
    function Oe() {
      return (Oe = t(
        e().mark(function r() {
          return e().wrap(function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return r.abrupt(
                    "return",
                    new Promise(
                      (function () {
                        var r = t(
                          e().mark(function t(r) {
                            return e().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        c.signProtocol.signConditionProtocal()
                                      );
                                    case 3:
                                      (ve.value = !0), r(!0), (e.next = 10);
                                      break;
                                    case 7:
                                      (e.prev = 7),
                                        (e.t0 = e.catch(0)),
                                        l.Dialog({
                                          context: Y,
                                          message: "协议签署失败，请重试",
                                        }),
                                        r(!1);
                                    case 10:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              t,
                              null,
                              [[0, 7]]
                            );
                          })
                        );
                        return function (e) {
                          return r.apply(this, arguments);
                        };
                      })()
                    )
                  );
                case 1:
                case "end":
                  return r.stop();
              }
          }, r);
        })
      )).apply(this, arguments);
    }
    function Pe() {
      return new Promise(
        (function () {
          var r = t(
            e().mark(function r(n) {
              return e().wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.next = 2),
                          t(
                            e().mark(function t() {
                              var r, n, a;
                              return e().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (pe.value) {
                                          e.next = 13;
                                          break;
                                        }
                                        return (
                                          (e.prev = 1),
                                          (e.next = 4),
                                          s.debtApi.qryRepoCondProtocol()
                                        );
                                      case 4:
                                        (r = e.sent),
                                          (n = r.is_need_risk_tips),
                                          (a = r.can_not_open_reason),
                                          (pe.value = !0),
                                          (ve.value = "0" === n),
                                          (de.value = a),
                                          (e.next = 13);
                                        break;
                                      case 10:
                                        (e.prev = 10),
                                          (e.t0 = e.catch(1)),
                                          (pe.value = !1),
                                          (ve.value = !1);
                                      case 13:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                t,
                                null,
                                [[1, 10]]
                              );
                            })
                          )()
                        );
                      case 2:
                        return (r.prev = 2), (r.next = 5), k.checkBlockTips(de);
                      case 5:
                        r.next = 10;
                        break;
                      case 7:
                        return (
                          (r.prev = 7),
                          (r.t0 = r.catch(2)),
                          r.abrupt("return", n(!1))
                        );
                      case 10:
                        if (!ve.value) {
                          r.next = 12;
                          break;
                        }
                        return r.abrupt("return", n(!0));
                      case 12:
                        xe
                          ? (g.router().push({ name: "ConditionProtocol" }),
                            (fe.value = !1))
                          : l.Dialog({
                              selector: "#condition-order-risk-dialog",
                              title: "协议签署",
                              showCancelButton: !0,
                              cancelButtonText: "不同意",
                              confirmButtonText: "已阅读并同意",
                              beforeClose: (function () {
                                var r = t(
                                  e().mark(function t(r, a) {
                                    var o;
                                    return e().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if ("confirm" !== r) {
                                              e.next = 7;
                                              break;
                                            }
                                            return (e.next = 3), we();
                                          case 3:
                                            (o = e.sent),
                                              n(o),
                                              a(),
                                              (e.next = 8);
                                            break;
                                          case 7:
                                            n(!1), a();
                                          case 8:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, t);
                                  })
                                );
                                return function (e, t) {
                                  return r.apply(this, arguments);
                                };
                              })(),
                            }),
                          Re ||
                            ((Re = !0),
                            u.index.$once(
                              "condition.protocol.sign",
                              t(
                                e().mark(function t() {
                                  var r, a, o, u, s, i;
                                  return e().wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if (!Se && !Ce) {
                                              e.next = 2;
                                              break;
                                            }
                                            return e.abrupt(
                                              "return",
                                              ((ve.value = !0), void n(!0))
                                            );
                                          case 2:
                                            if (
                                              ((e.prev = 2),
                                              (fe.value = !0),
                                              !(u =
                                                null ==
                                                (r =
                                                  null == Y
                                                    ? void 0
                                                    : Y.selectComponent)
                                                  ? void 0
                                                  : r.call(
                                                      Y,
                                                      "#condition-order-risk-dialog"
                                                    )))
                                            ) {
                                              e.next = 16;
                                              break;
                                            }
                                            if (
                                              ((s =
                                                (null == u ? void 0 : u.$vm) ||
                                                u),
                                              !(null ==
                                              (a =
                                                null == s ? void 0 : s.isShow)
                                                ? void 0
                                                : a.call(s)))
                                            ) {
                                              e.next = 11;
                                              break;
                                            }
                                            null ==
                                              (o =
                                                null == s
                                                  ? void 0
                                                  : s.handleConfirm) ||
                                              o.call(s),
                                              (e.next = 16);
                                            break;
                                          case 11:
                                            if (!xe) {
                                              e.next = 16;
                                              break;
                                            }
                                            return (e.next = 14), we();
                                          case 14:
                                            (i = e.sent), n(i);
                                          case 16:
                                            e.next = 21;
                                            break;
                                          case 18:
                                            (e.prev = 18),
                                              (e.t0 = e.catch(2)),
                                              n(!1);
                                          case 21:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    t,
                                    null,
                                    [[2, 18]]
                                  );
                                })
                              )
                            ));
                      case 13:
                      case "end":
                        return r.stop();
                    }
                },
                r,
                null,
                [[2, 7]]
              );
            })
          );
          return function (e) {
            return r.apply(this, arguments);
          };
        })()
      );
    }
    function Ue() {
      return Ie.apply(this, arguments);
    }
    function Ie() {
      return (Ie = t(
        e().mark(function t() {
          var r,
            n,
            a,
            o,
            u,
            i,
            c,
            p,
            v,
            f,
            T,
            b,
            y,
            k,
            g,
            h = arguments;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = h.length > 0 && void 0 !== h[0] ? h[0] : {}),
                      (n = r.forceSetting),
                      (a = void 0 === n ? "0" : n),
                      (o = r.confFromFlag),
                      (u = void 0 === o ? "" : o),
                      (e.prev = 1),
                      (e.next = 4),
                      s.debtApi.qryRepoCondStatus()
                    );
                  case 4:
                    (i = e.sent),
                      (c = (null == i ? void 0 : i.status) || w.UNSET),
                      (ye.value = c !== w.UNSET),
                      (te.value = i || {}),
                      (re.value = x.normalizeInvestTimeSetFlag(
                        null == i ? void 0 : i.invest_time_set_flag
                      )),
                      u && $.value && (G.value = u),
                      (p = d.useUserinfoStore()),
                      (v = p.userinfo),
                      (f = (void 0 === v ? {} : v).shareholdercards),
                      (b =
                        (T = void 0 === f ? [] : f).findIndex(function (e) {
                          return (
                            (null == e ? void 0 : e.market) === m.MARKET_CODE_SH
                          );
                        }) > -1),
                      (y =
                        T.findIndex(function (e) {
                          return (
                            (null == e ? void 0 : e.market) === m.MARKET_CODE_SZ
                          );
                        }) > -1),
                      (k = [
                        { key: C.PRODUCT, type: y && !b ? R.SZ : R.SH },
                        { key: C.RATE, type: D.REAL },
                        { key: C.PRICE, type: A.ALL },
                      ]),
                      (g = a === P || c === w.UNSET),
                      $.value &&
                        k.push({ key: C.TIME, type: _.CUSTOM, value: ue(g) }),
                      c !== w.UNSET &&
                        ((k = [
                          { key: C.PRODUCT, type: te.value.trade_market },
                          {
                            key: C.RATE,
                            type: te.value.income_rate_type,
                            value: te.value.income_rate || "",
                          },
                          {
                            key: C.PRICE,
                            type: te.value.order_price_type,
                            value: te.value.remain_assets || "",
                          },
                        ]),
                        $.value &&
                          k.push({
                            key: C.TIME,
                            type: _.CUSTOM,
                            value: ue(g),
                          })),
                      _e(k),
                      (le.value = "1" === a ? w.UNSET : c),
                      (e.next = 16);
                    break;
                  case 13:
                    (e.prev = 13),
                      (e.t0 = e.catch(1)),
                      l.Dialog({
                        message:
                          (null == e.t0 ? void 0 : e.t0.retmsg) ||
                          "网络繁忙 请稍后再试",
                      });
                  case 16:
                  case "end":
                    return e.stop();
                }
            },
            t,
            null,
            [[1, 13]]
          );
        })
      )).apply(this, arguments);
    }
    function Me(e) {
      return je.apply(this, arguments);
    }
    function je() {
      return (je = t(
        e().mark(function t(r) {
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((e.prev = 0),
                      (Te.value = !0),
                      (e.t0 = r === O.START),
                      !e.t0)
                    ) {
                      e.next = 7;
                      break;
                    }
                    return (e.next = 6), Be();
                  case 6:
                    e.t0 = !e.sent;
                  case 7:
                    if (!e.t0) {
                      e.next = 9;
                      break;
                    }
                    return e.abrupt("return");
                  case 9:
                    return (
                      u.index.showLoading({ title: "设置中", mask: !0 }),
                      f.stat.click(
                        "trade.debt.auto_order.change_status_" +
                          (r === O.START ? "start" : "stop")
                      ),
                      (e.next = 13),
                      s.debtApi.setRepoCondStatus({ status: r, match_type: 0 })
                    );
                  case 13:
                    Ue(), (e.next = 19);
                    break;
                  case 16:
                    (e.prev = 16),
                      (e.t1 = e.catch(0)),
                      l.Dialog({
                        message:
                          (null == e.t1 ? void 0 : e.t1.retmsg) ||
                          "网络繁忙 请稍后再试",
                      });
                  case 19:
                    return (
                      (e.prev = 19),
                      (Te.value = !1),
                      u.index.hideLoading(),
                      e.finish(19)
                    );
                  case 22:
                  case "end":
                    return e.stop();
                }
            },
            t,
            null,
            [[0, 16, 19, 22]]
          );
        })
      )).apply(this, arguments);
    }
    function Be() {
      return new Promise(
        (function () {
          var r = t(
            e().mark(function r(n) {
              return e().wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (
                          ((r.prev = 0),
                          "10800" === String(S.brokerConfig.base.code))
                        ) {
                          r.next = 3;
                          break;
                        }
                        return r.abrupt("return", n(!0));
                      case 3:
                        return (
                          (r.next = 5),
                          t(
                            e().mark(function t() {
                              var r, n;
                              return e().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (e.next = 3),
                                          i.jiaxinbaoCgi.service({ action: 5 })
                                        );
                                      case 3:
                                        (r = e.sent),
                                          (n =
                                            "1" ===
                                              (null == r
                                                ? void 0
                                                : r.balance_service_status) &&
                                            "1" ===
                                              (null == r
                                                ? void 0
                                                : r.balance_auto_order)),
                                          (be.value = !!n),
                                          (e.next = 11);
                                        break;
                                      case 8:
                                        (e.prev = 8),
                                          (e.t0 = e.catch(0)),
                                          (be.value = !1);
                                      case 11:
                                        return e.abrupt("return", be.value);
                                      case 12:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                t,
                                null,
                                [[0, 8]]
                              );
                            })
                          )()
                        );
                      case 5:
                        if (r.sent) {
                          r.next = 7;
                          break;
                        }
                        return r.abrupt("return", n(!0));
                      case 7:
                        l.Dialog({
                          title: "功能提醒",
                          message:
                            "您当前已开通了“余额增值”服务，因两个服务属于同类型，请确认是否将“余额增值”服务切换至“通用回购自动下单”",
                          messageAlign: "left",
                          showCancelButton: !0,
                          confirmButtonText: "确认切换",
                          onConfirm: function () {
                            f.stat.click("trade.debt.auto_order.switch_to_jxb"),
                              n(!0);
                          },
                          onCancel: function () {
                            n(!1);
                          },
                        }),
                          (r.next = 13);
                        break;
                      case 10:
                        (r.prev = 10), (r.t0 = r.catch(0)), n(!0);
                      case 13:
                      case "end":
                        return r.stop();
                    }
                },
                r,
                null,
                [[0, 10]]
              );
            })
          );
          return function (e) {
            return r.apply(this, arguments);
          };
        })()
      );
    }
    function qe() {
      (le.value = w.UNSET),
        $.value && _e([{ key: C.TIME, type: _.CUSTOM, value: ue(!0) }]);
    }
    return {
      FORM_INSTRUCTION: Q,
      orderStatus: le,
      orderInfo: te,
      showTimeRedDot: ae,
      markTimeRedDotClicked: oe,
      formList: ee,
      selectedData: X,
      preciseCtrl: W,
      triggerTime: J,
      isSubDataValidate: me,
      isOrderSaving: fe,
      isChangingStatus: Te,
      isModify: ye,
      updateFormList: De,
      selectedKeyToCfg: function (e) {
        return (e && Object.values(C).includes(e) && j[e]) || {};
      },
      selectedValToCfg: Ae,
      setSelectedData: _e,
      initPageStatus: Ue,
      signCondProtocol: Pe,
      submitAutoOrder:
        ((ce = t(
          e().mark(function r(n) {
            var a, o, u, i, c, l, d, m, f, T, b;
            return e().wrap(
              function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (a = n.callback),
                        (r.next = 3),
                        t(
                          e().mark(function r() {
                            return e().wrap(function (r) {
                              for (;;)
                                switch ((r.prev = r.next)) {
                                  case 0:
                                    return r.abrupt(
                                      "return",
                                      new Promise(
                                        (function () {
                                          var r = t(
                                            e().mark(function t(r) {
                                              return e().wrap(
                                                function (e) {
                                                  for (;;)
                                                    switch ((e.prev = e.next)) {
                                                      case 0:
                                                        return (
                                                          (e.prev = 0),
                                                          (e.next = 3),
                                                          p.passwordCgi.shouldCheckPassword(
                                                            {}
                                                          )
                                                        );
                                                      case 3:
                                                        "1" === e.sent.needcheck
                                                          ? v.Password({
                                                              theme:
                                                                v.THEME.TRADE,
                                                              isTrade: !0,
                                                              showErrorWithNotice:
                                                                !1,
                                                              onSuccess:
                                                                function () {
                                                                  r(!0);
                                                                },
                                                              onCancel:
                                                                function () {
                                                                  r(!1);
                                                                },
                                                              onError:
                                                                function () {
                                                                  r(!1);
                                                                },
                                                            })
                                                          : r(!0),
                                                          (e.next = 11);
                                                        break;
                                                      case 8:
                                                        (e.prev = 8),
                                                          (e.t0 = e.catch(0)),
                                                          r(!0);
                                                      case 11:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                },
                                                t,
                                                null,
                                                [[0, 8]]
                                              );
                                            })
                                          );
                                          return function (e) {
                                            return r.apply(this, arguments);
                                          };
                                        })()
                                      )
                                    );
                                  case 1:
                                  case "end":
                                    return r.stop();
                                }
                            }, r);
                          })
                        )()
                      );
                    case 3:
                      if (r.sent) {
                        r.next = 5;
                        break;
                      }
                      return r.abrupt("return", !1);
                    case 5:
                      return (
                        (l = null == (o = X.value) ? void 0 : o[C.PRODUCT]),
                        (d = null == (u = X.value) ? void 0 : u[C.RATE]),
                        (m = null == (i = X.value) ? void 0 : i[C.PRICE]),
                        (f = null == (c = X.value) ? void 0 : c[C.TIME]),
                        (T = Ae({
                          key: C.PRODUCT,
                          type: null == l ? void 0 : l.type,
                        })),
                        (b = {
                          market: T.market,
                          scode: T.scode,
                          name: T.name,
                          income_rate_type: d.type,
                          income_rate: d.value,
                          order_price_type: m.type,
                          remain_assets: m.value,
                          match_type: 0,
                        }),
                        $.value &&
                          (null == f ? void 0 : f.value) &&
                          ((b.invest_time = f.value),
                          (b.invest_time_set_flag = "1")),
                        (r.prev = 7),
                        he(),
                        a({
                          status: y.SimpleAnimStatus.Loading,
                          statusTitle: "通用回购自动下单提交中",
                        }),
                        (r.next = 12),
                        s.debtApi.submitRepoCond(b)
                      );
                    case 12:
                      Z(0), Ue(), (r.next = 19);
                      break;
                    case 16:
                      return (
                        (r.prev = 16),
                        (r.t0 = r.catch(7)),
                        r.abrupt(
                          "return",
                          (Z(r.t0.retcode),
                          void a({
                            status: y.SimpleAnimStatus.Fail,
                            statusTitle: "通用回购自动下单设置失败",
                            tips:
                              (null == r.t0 ? void 0 : r.t0.retmsg) ||
                              "网络繁忙 请稍后再试",
                            buttonText: z(),
                          }))
                        )
                      );
                    case 19:
                      a({
                        status: y.SimpleAnimStatus.Success,
                        statusTitle: "通用回购自动下单设置成功",
                        buttonText: "查看条件单",
                      });
                    case 20:
                    case "end":
                      return r.stop();
                  }
              },
              r,
              null,
              [[7, 16]]
            );
          })
        )),
        function (e) {
          return ce.apply(this, arguments);
        }),
      getAutoEndTime:
        ((ie = t(
          e().mark(function t() {
            var r, n, a, o, s;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = ""), (e.prev = 1), (e.next = 4), F();
                    case 4:
                      (n = e.sent),
                        (a = n.date),
                        (o = u
                          .dayjs(a)
                          .set("hour", 15)
                          .set("minute", 0)
                          .set("second", 0)),
                        (s = u.dayjs(a).isAfter(o) ? 365 : 364),
                        (r = "".concat(
                          u.dayjs().add(s, "day").format("YYYY-MM-DD"),
                          " 15:30"
                        )),
                        (e.next = 14);
                      break;
                    case 11:
                      (e.prev = 11),
                        (e.t0 = e.catch(1)),
                        (r = "".concat(
                          u.dayjs().add(364, "day").format("YYYY-MM-DD"),
                          " 15:30"
                        ));
                    case 14:
                      return e.abrupt("return", r);
                    case 15:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[1, 11]]
            );
          })
        )),
        function () {
          return ie.apply(this, arguments);
        }),
      changeOrderStatus: Me,
      enterModifySetting: qe,
      resumeAutoOrder: function () {
        x.shouldConfigureDebtAutoOrderTime(re.value) ? qe() : Me(O.START);
      },
      preSubmitCheck:
        ((se = t(
          e().mark(function t() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      new Promise(function (e) {
                        var t,
                          r = d.useUserinfoStore().userinfo,
                          n = void 0 === r ? {} : r,
                          a = n.shareholdercards,
                          o = void 0 === a ? [] : a;
                        if (0 === o.length || u.isEmpty(n)) return e(!0);
                        var s =
                            o.findIndex(function (e) {
                              return (
                                (null == e ? void 0 : e.market) ===
                                m.MARKET_CODE_SH
                              );
                            }) > -1,
                          i =
                            o.findIndex(function (e) {
                              return (
                                (null == e ? void 0 : e.market) ===
                                m.MARKET_CODE_SZ
                              );
                            }) > -1,
                          c = null == (t = X.value) ? void 0 : t[C.PRODUCT],
                          p = Ae({
                            key: C.PRODUCT,
                            type: null == c ? void 0 : c.type,
                          }).market,
                          v = p === m.MARKET_CODE_SH && !s,
                          f = p === m.MARKET_CODE_SZ && !i,
                          T = "";
                        v && (T = "沪市"),
                          f && (T = "深市"),
                          v || f
                            ? l.Dialog({
                                title: "交易提示",
                                message: "当前查询您暂未开通".concat(
                                  T,
                                  "股东卡，可能会导致交易失败，请确认您已开通股东卡再提交设置"
                                ),
                                messageAlign: "left",
                                showCancelButton: !0,
                                confirmButtonText: "继续提交",
                                onConfirm: function () {
                                  e(!0);
                                },
                                onCancel: function () {
                                  e(!1);
                                },
                              })
                            : e(!0);
                      })
                    );
                  case 2:
                    if (((e.t0 = !!e.sent), !e.t0)) {
                      e.next = 12;
                      break;
                    }
                    return (e.next = 6), Be();
                  case 6:
                    if (((e.t1 = !!e.sent), !e.t1)) {
                      e.next = 11;
                      break;
                    }
                    return (e.next = 10), Pe();
                  case 10:
                    e.t1 = !!e.sent;
                  case 11:
                    e.t0 = e.t1;
                  case 12:
                    return e.abrupt("return", e.t0);
                  case 13:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )),
        function () {
          return se.apply(this, arguments);
        }),
      autoDebtResultState: ge,
      showAutoDebtResult: he,
      hideAutoDebtResult: Ee,
    };
  });
