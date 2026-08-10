require("../../@babel/runtime/helpers/Arrayincludes");
var e,
  r,
  a,
  t,
  n,
  o = require("../../@babel/runtime/helpers/taggedTemplateLiteral"),
  u = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../@babel/runtime/helpers/asyncToGenerator"),
  s = require("../../@babel/runtime/helpers/slicedToArray"),
  c = require("../../@babel/runtime/helpers/objectSpread2"),
  T = require("../../common/vendor.js"),
  l = require("../../cgi/transfer.js"),
  _ = require("../../config/enum/transfer.js"),
  p = require("../../config/errcode.js"),
  d = require("./utils.js"),
  R = require("../../components/Password/index.js"),
  E = require("../../utils/index.js");
require("../../service/broker.js");
var f = require("../../common/components/Dialog/index.js"),
  v = require("../../service/log/index.js"),
  m = require("../../service/stat/mp-weixin.js"),
  A = require("../../utils/getPlatform.js"),
  S = require("../../stores/user/useUserinfo.js"),
  D = require("../../config/enum/account.js"),
  N = require("../../service/aegis/utils.js"),
  y = require("./transferMonitorEvents.js"),
  b = require("../trade/useSplitMode.js"),
  w = require("../../stores/transfer/useTransferInMoneySearch.js"),
  I = require("../common/useServerTime.js"),
  x = require("../../config/broker/11100/index.js"),
  h = new v.Log("useTransfer");
T.dayjs.extend(T.isBetween);
var g = 0,
  C = function (e) {
    return c(
      {},
      e
        ? {
            plan: e
              .map(function (e) {
                return (e[2] = e[2] / 1e3), e.join("|");
              })
              .join("#"),
          }
        : void 0
    );
  },
  P = function (e) {
    var r = e.isX724TransferUser,
      a = e.err,
      t = e.plan;
    if (r) {
      if (1 === t.length) return _.TRANSFER_RESULT.FAIL;
      var n = t[0][0];
      switch (a) {
        case p.TRANSFER_T1_FAIL:
        case p.TRANSFER_T1_TIMEOUT:
          return -1 <
            [_.TRANSFER_TYPE.RECHARGE_T1, _.TRANSFER_TYPE.WITHDRAW_T1].indexOf(
              n
            )
            ? _.TRANSFER_RESULT.FAIL
            : _.TRANSFER_RESULT.SCHEDULED;
        case p.TRANSFER_T2_FAIL:
        case p.TRANSFER_T2_TIMEOUT:
          return -1 < [_.TRANSFER_TYPE.WITHDRAW_T2].indexOf(n)
            ? _.TRANSFER_RESULT.FAIL
            : _.TRANSFER_RESULT.SCHEDULED;
        default:
          return _.TRANSFER_RESULT.FAIL;
      }
    } else
      switch (a) {
        case p.TRANSFER_T1_FAIL:
        case p.TRANSFER_T2_FAIL:
          return _.TRANSFER_RESULT.PREFAIL;
        case p.TRANSFER_T1_TIMEOUT:
        case p.TRANSFER_T2_TIMEOUT:
          return _.TRANSFER_RESULT.PRETIMEOUT;
        default:
          return _.TRANSFER_RESULT.ERROR;
      }
  };
exports.useTransfer = function () {
  var v,
    F = A.getPlatform(),
    k = F.isWeixin,
    M = F.isOEM,
    L = null == (v = T.getCurrentInstance()) ? void 0 : v.proxy,
    O = T.inject("curPageContext", null),
    U = S.useUserinfoStore(),
    Y = T.storeToRefs(U).userinfo,
    B = T.computed(function () {
      var e;
      return (
        "1" ===
          (null == (e = null == Y ? void 0 : Y.value)
            ? void 0
            : e.in_out_control) || !1
      );
    }),
    W = b.useSplitMode().splitModeQuery,
    q = I.useServerTime().processTimeToTransferTime,
    H = x.brokerConfig.dictionary.Enties,
    j = void 0 === H ? {} : H,
    J = !!j.changebankcard && !j.changebankcard.hidden,
    X = T.computed(function () {
      return !!j.fundrecord && !j.fundrecord.hidden && !M && B.value;
    }),
    G = !!j.updateid && !j.updateid.hidden,
    K = T.ref(!0),
    V = T.ref(""),
    $ = T.ref(void 0),
    z = T.ref(0),
    Q = T.ref(""),
    Z = T.ref(""),
    ee = T.ref(""),
    re = T.ref(null),
    ae = T.ref(!1),
    te = T.ref(null),
    ne = T.reactive({
      activeUrl: "",
      availAbleTransfer: !0,
      bankAbbr: "",
      bankName: "银行",
      cardSupportWXPay: !1,
      cardTail: "",
      hasBindWxPay: !1,
      isActive: !1,
      needOpenWxAuth: !1,
      nextTradeTime: 0,
      preTranStatus: "",
      active: "",
      support: !1,
      supportMode: [],
      supportUrl: "",
      transferType: "",
      trueCard: !0,
      verifyPwMode: l.TRANSFER_PWDCHECK_TYPE.TRADE,
      supportCard: !0,
      notSupportText: "",
      needAddCard: !1,
      isTradeDay: !1,
      timeFromServer: "",
    }),
    oe = T.reactive({
      canTrade: 0,
      canDraw: 0,
      canDayDraw: 0,
      canDayDrawT1: 0,
      canDayDrawT2: 0,
      newStockPay: 0,
      todayDrawDate: 0,
      preDrawDate: [],
      balanceMoney: 0,
      timeType: null,
      canPreDraw: 0,
    }),
    ue = T.get(x.brokerConfig.transfer, "idCardExpireRecently", {}),
    ie = T.get(x.brokerConfig.transfer, "idCardExpired", {}),
    se = T.computed(function () {
      return [l.PreTranStatus.REALTIME, l.PreTranStatus.PRETIME].includes(
        ne.preTranStatus
      );
    }),
    ce = T.computed(function () {
      var e = d.isRecharge(ne.transferType)
        ? T.get(ue, "isDisableForIn", !1)
        : T.get(ue, "isDisableForOut", !1);
      return (
        se.value ||
          (K.value && ne.preTranStatus !== l.PreTranStatus.CLEARTIME) ||
          (e = !0),
        e
      );
    }),
    Te = T.computed(function () {
      var e = d.isRecharge(ne.transferType)
        ? T.get(ie, "isDisableForIn", !0)
        : T.get(ie, "isDisableForOut", !0);
      return (
        se.value ||
          (K.value && ne.preTranStatus !== l.PreTranStatus.CLEARTIME) ||
          (e = !0),
        e
      );
    }),
    le = T.computed(function () {
      return {
        NORMAL: {
          type: "NORMAL",
          showTips: !1,
          tips: function () {
            return "";
          },
          transferBtnDisable: !1,
        },
        OUTTRADETIME: {
          type: "OUTTRADETIME",
          showTips: !0,
          tips: function () {
            return "非转账时间，请在"
              .concat(ve.value)
              .concat(
                ne.transferType === _.TRANSFER_TYPE.RECHARGE ? "转入" : "转出",
                "资金"
              );
          },
          transferBtnDisable: !0,
        },
        CLEARTIME: {
          type: "CLEARTIME",
          showTips: !0,
          tips: function () {
            return p.TRANSFER_CLEARTIME;
          },
          transferBtnDisable: !0,
        },
        NOAVAILABLE: {
          type: "NOAVAILABLE",
          showTips: !0,
          tips: function () {
            return "券商网络繁忙，转账服务暂停";
          },
          transferBtnDisable: !0,
        },
        GUIDE: {
          type: "GUIDE",
          showTips: !0,
          tips: function () {
            return "根据银行要求，出入金前需先激活银行卡";
          },
          otherBtn: function () {
            return M ? "" : "去激活";
          },
          transferBtnDisable: !0,
        },
        BINDCARD: {
          type: "BINDCARD",
          showTips: !0,
          tips: function () {
            if (de.value === l.PAYMODE.WXPAY) return "";
            var e = "请绑定";
            return (
              ne.trueCard
                ? (e += ""
                    .concat(
                      ne.bankName ? ne.bankName.replace(/银行$/, "") : "",
                      "银行卡"
                    )
                    .concat(
                      ne.cardTail ? "(尾号:".concat(ne.cardTail, ")") : ""
                    ))
                : (e += "与股票账户关联的".concat(
                    ne.bankName ? ne.bankName.replace(/银行$/, "") : "",
                    "银行卡"
                  )),
              e
            );
          },
          otherBtn: function () {
            return "绑定银行卡";
          },
          transferBtnDisable: !0,
        },
        RELATETO: {
          type: "RELATETO",
          showTips: !0,
          tips: function () {
            return "根据银行要求，请先激活银行卡";
          },
          otherBtn: function () {
            return M ? "" : "去激活";
          },
          transferBtnDisable: !0,
        },
        SUPPORT: {
          type: "SUPPORT",
          showTips: !0,
          tips: function () {
            return "不支持当前银行卡出入金";
          },
          otherBtn: M ? "" : "去更换银行卡",
          transferBtnDisable: !0,
        },
        SUPPORT_NEW: {
          type: "SUPPORT_NEW",
          showTips: !0,
          tips: function () {
            return "不支持当前银行卡出入金";
          },
          otherBtn: M ? "" : "去更换银行卡",
          transferBtnDisable: !0,
        },
        OTHER: {
          type: "OTHER",
          showTips: !1,
          tips: function () {
            return "";
          },
          transferBtnDisable: !1,
        },
        EXPIRED_RECENTLY: {
          type: "EXPIRED_RECENTLY",
          showTips: !0,
          tips: function () {
            return (null == ue ? void 0 : ue.tips) || "";
          },
          otherBtn: G ? "去更新身份证" : "",
          transferBtnDisable: ce.value,
        },
        IDCARD_EXPIRED: {
          type: "IDCARD_EXPIRED",
          showTips: !0,
          tips: function () {
            return (
              (null == ie ? void 0 : ie.tips) || "身份证已过有效期，出入金受限"
            );
          },
          otherBtn: G ? "去更新身份证" : "",
          transferBtnDisable: Te.value,
        },
      };
    }),
    _e = T.ref(le.value.OTHER),
    pe = T.computed(function () {
      return d.isRecharge(ne.transferType)
        ? "in"
        : d.isWithdraw(ne.transferType)
        ? "out"
        : String(ne.transferType);
    }),
    de = T.computed(function () {
      var e = ne.supportMode.filter(function (e) {
        return "1" === e.can_use && "1" === e.default;
      });
      return (e.length && e[0].support_mode) || l.PAYMODE.BANK;
    }),
    Re = T.computed(function () {
      return Boolean(
        ne.preTranStatus && ne.preTranStatus !== l.PreTranStatus.DISABLED
      );
    }),
    Ee = T.computed(function () {
      return 10800 === x.brokerConfig.base.code;
    });
  function fe(e) {
    var r = e.split(":").map(Number);
    if (r.length > 3) return r.slice(0, 3);
    for (; r.length < 3; ) r.push(0);
    return r;
  }
  var ve = T.computed(function () {
      var e = ne.bankAbbr,
        r = void 0 === e ? "" : e,
        a = (x.brokerConfig.transfer || {}).bankTime,
        t = void 0 === a ? {} : a,
        n = ne.realTransferTime,
        o = void 0 === n ? {} : n;
      if (
        (T.isEmpty(o) ||
          (o = {
            startTime: fe((null == o ? void 0 : o.start_time) || ""),
            endTime: fe((null == o ? void 0 : o.end_time) || ""),
          }),
        !T.isEmpty(o) || t[r] || t.default)
      ) {
        var u = (!T.isEmpty(o) && o) || t[r] || t.default,
          i = u.startTime,
          c = void 0 === i ? [] : i,
          l = u.endTime,
          _ = void 0 === l ? [] : l;
        if (T.isArray(c) && 3 === c.length && T.isArray(_) && 3 === _.length) {
          var p = s(c, 2),
            d = p[0],
            R = p[1],
            f = s(_, 2),
            v = f[0],
            m = f[1];
          return "交易日"
            .concat(E.fixedTimeNumber(d), ":")
            .concat(E.fixedTimeNumber(R), "-")
            .concat(E.fixedTimeNumber(v), ":")
            .concat(E.fixedTimeNumber(m));
        }
      }
      return "交易日09:00-16:00";
    }),
    me = T.computed(function () {
      return Re.value
        ? T.__CJS__export_add__(
            oe.canDraw,
            T.__CJS__export_add__(
              oe.canDayDraw,
              T.__CJS__export_add__(oe.canDayDrawT1, oe.canDayDrawT2)
            )
          )
        : Ee.value
        ? Math.max(oe.canDraw, T.__CJS__export_reduce__(oe.canTrade, 1))
        : oe.canDraw;
    }),
    Ae = T.computed(function () {
      return 0 != +oe.canPreDraw;
    }),
    Se = T.computed(function () {
      if (1 === T.__CJS__export_reduce__(oe.canTrade, me.value)) return !0;
      var e = Math.min(
        T.__CJS__export_reduce__(oe.canTrade, oe.canDraw),
        oe.newStockPay
      );
      if (
        oe.canTrade > me.value &&
        oe.newStockPay > 0 &&
        T.__CJS__export_reduce__(oe.canTrade, me.value) >= e
      )
        return !0;
      if (oe.canTrade < me.value && oe.newStockPay > 0) {
        if (oe.canDayDrawT1 > 0) return !0;
        if (0 == +oe.canDayDrawT1 && e > 0) return !0;
      }
      return !1;
    }),
    De = T.computed(function () {
      var e = T.__CJS__export_add__(
          oe.canDraw,
          T.__CJS__export_add__(
            oe.canDayDraw,
            T.__CJS__export_add__(oe.canDayDrawT1, oe.canDayDrawT2)
          )
        ),
        r = me.value || e,
        a = 0,
        t = 0,
        n = 0,
        o = 0;
      return (
        $.value >= r
          ? ((a = oe.canDraw),
            (t = oe.canDayDraw),
            (n = oe.canDayDrawT1),
            (o = oe.canDayDrawT2))
          : $.value >=
            T.__CJS__export_add__(
              oe.canDraw,
              T.__CJS__export_add__(oe.canDayDraw, oe.canDayDrawT1)
            )
          ? ((a = oe.canDraw),
            (t = oe.canDayDraw),
            (n = oe.canDayDrawT1),
            (o = T.__CJS__export_reduce__(
              $.value,
              T.__CJS__export_add__(T.__CJS__export_add__(a, t), n)
            )))
          : $.value >= T.__CJS__export_add__(oe.canDraw, oe.canDayDraw)
          ? ((a = oe.canDraw),
            (t = oe.canDayDraw),
            (n = T.__CJS__export_reduce__(
              $.value,
              T.__CJS__export_add__(a, t)
            )),
            (o = 0))
          : (oe.canDraw ? ((a = $.value), (t = 0)) : ((a = 0), (t = $.value)),
            (n = 0),
            (o = 0)),
        { realtime: a, t0: t, t1: n, t2: o }
      );
    }),
    Ne = T.computed(function () {
      var e = T.dayjs(V.value)
          .set("hour", 15)
          .set("minute", 0)
          .set("second", 0),
        r = T.dayjs(V.value).set("hour", 15).set("minute", 25).set("second", 0);
      if (
        T.dayjs(V.value).isBetween(e, r) &&
        $.value > T.__CJS__export_reduce__(oe.canDayDrawT1, oe.balanceMoney)
      ) {
        var a = T.__CJS__export_reduce__(
          De.value.t1,
          T.__CJS__export_reduce__(oe.canDayDrawT1, oe.balanceMoney)
        );
        return 100 * Math.ceil(a / 100);
      }
      return 0;
    }),
    ye = T.computed(function () {
      var e = [],
        r = De.value,
        a = r.realtime,
        t = r.t0,
        n = r.t1,
        o = r.t2;
      return (
        a &&
          e.push({
            amount: a,
            arriveText: "实时到账",
            arriveTimestamp: V.value,
          }),
        t &&
          e.push({
            amount: t,
            arriveText: T.dayjs(oe.todayDrawDate).format("YYYY-MM-DD"),
            arriveTimestamp: oe.todayDrawDate,
          }),
        n &&
          e.push({
            amount: n,
            arriveText: T.dayjs(oe.preDrawDate[0]).format("YYYY-MM-DD"),
            arriveTimestamp: oe.preDrawDate[0],
          }),
        o &&
          e.push({
            amount: o,
            arriveText: T.dayjs(oe.preDrawDate[1]).format("YYYY-MM-DD"),
            arriveTimestamp: oe.preDrawDate[1],
          }),
        e
      );
    }),
    be = T.computed(function () {
      return "function" == typeof _e.value.otherBtn
        ? _e.value.otherBtn()
        : _e.value.otherBtn;
    }),
    we = T.computed(function () {
      return "function" == typeof _e.value.tips
        ? _e.value.tips()
        : _e.value.tips;
    }),
    Ie = w.useTransferInMoneySearch(),
    xe = Ie.handleSearchCardMoneyAuthInfo,
    he = Ie.handleCardInfo;
  function ge() {
    switch (ne.preTranStatus) {
      case l.PreTranStatus.CLEARTIME:
        throw p.TRANSFER_CLEARTIME;
      case l.PreTranStatus.REALTIME:
      case l.PreTranStatus.PRETIME:
      case l.PreTranStatus.DISABLED:
    }
  }
  function Ce(e) {
    var r = [
        _.TRANSFER_TYPE.WITHDRAW,
        parseInt(T.__CJS__export_yuan2fen__(De.value.realtime), 10),
        0,
      ],
      a = [
        _.TRANSFER_TYPE.WITHDRAW_T1,
        parseInt(T.__CJS__export_yuan2fen__(De.value.t0), 10),
        oe.todayDrawDate,
      ],
      t = [
        "0" === oe.timeType
          ? _.TRANSFER_TYPE.WITHDRAW_T2
          : _.TRANSFER_TYPE.WITHDRAW_T1,
        parseInt(T.__CJS__export_yuan2fen__(De.value.t1), 10),
        oe.preDrawDate[0],
      ],
      n = [
        _.TRANSFER_TYPE.WITHDRAW_T2,
        parseInt(T.__CJS__export_yuan2fen__(De.value.t2), 10),
        oe.preDrawDate[1],
      ];
    return Fe({
      payload: { money: e, action: l.GETORDERPKG_ACTION.CREATE_X724 },
      plan: [r, a, t, n].filter(function (e) {
        var r = s(e, 2);
        r[0];
        return r[1] > 0;
      }),
    });
  }
  function Pe(e) {
    return Array.isArray(e)
      ? Fe({
          plan: [
            [_.TRANSFER_TYPE.WITHDRAW, e[0], 0],
            [_.TRANSFER_TYPE.WITHDRAW_T1, e[1], oe.preDrawDate[0]],
          ].filter(function (e) {
            var r = s(e, 2);
            r[0];
            return r[1] > 0;
          }),
        })
      : Fe({
          payload: {
            money: e,
            mode: de.value,
            type: _.TRANSFER_TYPE.WITHDRAW,
            scenes: "0",
          },
        });
  }
  function Fe(e) {
    return ke.apply(this, arguments);
  }
  function ke() {
    return (ke = i(
      u().mark(function e(r) {
        var a, t, n, o, i, s, T, _, E, v, m, A, S, D;
        return u().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (a = r.payload),
                    (t = r.plan),
                    (n = void 0 === t ? [] : t),
                    (i = Date.now()),
                    (e.prev = 2),
                    (e.next = 5),
                    l.transferCgi.create(
                      c(
                        c({}, a),
                        d.isWithdraw(ne.transferType) && n.length
                          ? {
                              transfer_info: n
                                .map(function (e) {
                                  return e
                                    .slice(0, 2)
                                    .concat(["0", de.value])
                                    .join("|");
                                })
                                .join("#"),
                            }
                          : void 0
                      )
                    )
                  );
                case 5:
                  if (
                    ((s = e.sent),
                    N.reportMonitorTime(
                      y.TRANSFER_MONITOR.CREATE_TIME,
                      Date.now() - i
                    ),
                    (T = d.isRecharge(ne.transferType) ? "in" : "out"),
                    N.reportMonitorEvent(y.TRANSFER_MONITOR.CREATE_SUC, {
                      ext2: "".concat(T, "|").concat(ne.bankAbbr),
                    }),
                    s.mode !== l.PAYMODE.BANK)
                  ) {
                    e.next = 17;
                    break;
                  }
                  if (ne.verifyPwMode !== l.TRANSFER_PWDCHECK_TYPE.TRADE) {
                    e.next = 13;
                    break;
                  }
                  "n" === s.checkPasswd
                    ? "1" === s.cardPinNeed && d.isRecharge(ne.transferType)
                      ? (re.value = {
                          payload: c(
                            c(c({}, s), a),
                            {},
                            {
                              token_type: l.TOKEN_TYPE.FUND_PWD,
                              transfer_token: "",
                            }
                          ),
                          plan: n,
                        })
                      : ((_ = ne.bankName || ""),
                        (E = x.brokerConfig.base.name),
                        (v = "您申请"
                          .concat(
                            d.isRecharge(ne.transferType)
                              ? "转入" +
                                  (_ && E
                                    ? "(".concat(_, "转").concat(E, ")")
                                    : "")
                              : "转出" +
                                  (_ && E
                                    ? "(".concat(E, "转").concat(_, ")")
                                    : "")
                          )
                          .concat($.value, "元，请确认是否转账")),
                        f.Dialog({
                          context: O,
                          message: v,
                          onConfirm: function () {
                            Me({
                              payload: c(
                                c({}, s),
                                {},
                                {
                                  token_type: l.TOKEN_TYPE.FUND_PWD,
                                  transfer_token: "",
                                  money: a.money,
                                }
                              ),
                              plan: n,
                            });
                          },
                          showCancelButton: !0,
                          confirmButtonText: "确认转账",
                        }))
                    : ((m = setTimeout(function () {
                        N.reportMonitorEvent(
                          y.TRANSFER_MONITOR.VERIFY_PWD_STUCK,
                          { ext2: d.isRecharge(ne.transferType) ? "in" : "out" }
                        );
                      }, 3e4)),
                      (A = function () {
                        m && (clearTimeout(m), (m = null));
                      }),
                      R.Password({
                        context: O,
                        verifyCGI: "verifyTransfer",
                        theme: R.THEME.TRANSFER,
                        noSubmit:
                          null == (o = x.brokerConfig.transfer)
                            ? void 0
                            : o.noSubmit,
                        onSuccess: function (e) {
                          A(),
                            "1" === s.cardPinNeed &&
                            d.isRecharge(ne.transferType)
                              ? (re.value = {
                                  payload: c(
                                    c(c({}, s), a),
                                    {},
                                    {
                                      token_type: l.TOKEN_TYPE.FUND_PWD,
                                      transfer_token: e.encodePwd,
                                    }
                                  ),
                                  plan: n,
                                })
                              : Me({
                                  payload: c(
                                    c({}, s),
                                    {},
                                    {
                                      token_type: l.TOKEN_TYPE.FUND_PWD,
                                      transfer_token: e.encodePwd,
                                      money: a.money,
                                    }
                                  ),
                                  plan: n,
                                });
                        },
                        onCancel: function () {
                          A();
                        },
                        onError: function () {
                          A();
                        },
                        onHide: function () {
                          A();
                        },
                      })),
                    (e.next = 15);
                  break;
                case 13:
                  if (ne.verifyPwMode === l.TRANSFER_PWDCHECK_TYPE.WXPAY) {
                    e.next = 15;
                    break;
                  }
                  throw p.WRONG_TRANSFER_PWDCHECK_TYPE;
                case 15:
                  e.next = 19;
                  break;
                case 17:
                  if (s.mode === l.PAYMODE.WXPAY) {
                    e.next = 19;
                    break;
                  }
                  throw p.WRONG_TRANSFER_MODE;
                case 19:
                  e.next = 28;
                  break;
                case 21:
                  (e.prev = 21),
                    (e.t0 = e.catch(2)),
                    N.reportMonitorTime(
                      y.TRANSFER_MONITOR.CREATE_TIME,
                      Date.now() - i
                    ),
                    (S = d.isRecharge(ne.transferType) ? "in" : "out"),
                    N.reportMonitorEvent(y.TRANSFER_MONITOR.CREATE_FAIL, {
                      ext2: "".concat(S, "|").concat(ne.bankAbbr),
                      ext3: ""
                        .concat(
                          (null == e.t0 ? void 0 : e.t0.retcode) || "unknown",
                          "|"
                        )
                        .concat((null == e.t0 ? void 0 : e.t0.retmsg) || ""),
                    }),
                    (D = ""),
                    101521019 === e.t0.retcode
                      ? ((D = k
                          ? "证券账户的实名与微信支付绑定银行卡的实名不一致，无法使用微信支付。如需使用，请更换微信支付实名信息"
                          : "证券账户的实名与你绑定的银行卡的实名不一致，无法使用。如需使用，请更换实名信息"),
                        f.Dialog({ context: O, message: D }))
                      : f.Dialog({ context: O, message: e.t0.retmsg });
                case 28:
                case "end":
                  return e.stop();
              }
          },
          e,
          null,
          [[2, 21]]
        );
      })
    )).apply(this, arguments);
  }
  function Me(e) {
    return Le.apply(this, arguments);
  }
  function Le() {
    return (Le = i(
      u().mark(function e(r) {
        var a, t, n, o, i, R, E, f;
        return u().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (a = r.pinStr),
                    (t = r.payload),
                    (n = r.plan),
                    (o = void 0 === n ? [] : n),
                    (re.value = null),
                    (ae.value = !0),
                    (i = Date.now()),
                    (e.prev = 3),
                    (e.next = 6),
                    l.transferCgi.transfer(
                      c(
                        c(
                          { pinStr: a },
                          T.pick(t, [
                            "token_type",
                            "pinStr",
                            "transfer_token",
                            "wxpay_token",
                          ])
                        ),
                        T.pick(
                          t,
                          Re.value ? ["new_dealNo"] : ["dealNo", "pre_dealNo"]
                        )
                      )
                    )
                  );
                case 6:
                  ((R = e.sent).dealNo = t.dealNo),
                    N.reportMonitorTime(
                      y.TRANSFER_MONITOR.SUBMIT_TIME,
                      Date.now() - i
                    ),
                    (E = d.isRecharge(ne.transferType) ? "in" : "out"),
                    N.reportMonitorEvent(y.TRANSFER_MONITOR.SUBMIT_SUC, {
                      ext2: "".concat(E, "|").concat(ne.bankAbbr),
                    }),
                    "1" === R.need_qry_result
                      ? ((g = 0), Oe({ payload: t, plan: o }))
                      : (d.isRecharge(ne.transferType) &&
                          "1" === R.switch_pre &&
                          (o = o.map(function (e) {
                            var r = s(e, 2)[1];
                            return [
                              _.TRANSFER_TYPE.RECHARGE_T1,
                              r,
                              ne.nextTradeTime,
                            ];
                          })),
                        Ye(
                          c(
                            c(
                              {
                                status:
                                  Re.value && d.isSchedule(o)
                                    ? _.TRANSFER_RESULT.SCHEDULED
                                    : _.TRANSFER_RESULT.SUCCESS,
                                type: d.isRecharge(ne.transferType)
                                  ? "charging"
                                  : "drawing",
                                amount: t.money,
                                applyTime: R.timeStamp || Date.now() / 1e3,
                              },
                              C(o)
                            ),
                            {},
                            {
                              x724: Number(Re.value),
                              dealNo: t.uniq_dealNo || t.dealNo,
                            }
                          )
                        ),
                        (ae.value = !1),
                        (te.value = _.TRANSFER_RESULT.SUCCESS)),
                    (e.next = 36);
                  break;
                case 12:
                  (e.prev = 12),
                    (e.t0 = e.catch(3)),
                    N.reportMonitorTime(
                      y.TRANSFER_MONITOR.SUBMIT_TIME,
                      Date.now() - i
                    ),
                    (f = d.isRecharge(ne.transferType) ? "in" : "out"),
                    (e.t1 =
                      (N.reportMonitorEvent(y.TRANSFER_MONITOR.SUBMIT_FAIL, {
                        ext2: "".concat(f, "|").concat(ne.bankAbbr),
                        ext3: ""
                          .concat(
                            (null == e.t0 ? void 0 : e.t0.retcode) || "unknown",
                            "|"
                          )
                          .concat((null == e.t0 ? void 0 : e.t0.retmsg) || ""),
                      }),
                      (ae.value = !1),
                      e.t0.retcode)),
                    (e.next =
                      51088835 === e.t1
                        ? 19
                        : 103421023 === e.t1
                        ? 21
                        : 103421021 === e.t1
                        ? 23
                        : 11111111 === e.t1
                        ? 25
                        : 22222222 === e.t1
                        ? 27
                        : 33333333 === e.t1
                        ? 29
                        : 44444444 === e.t1
                        ? 31
                        : 103424181 === e.t1
                        ? 33
                        : 35);
                  break;
                case 19:
                  return (
                    (te.value = _.TRANSFER_RESULT.TIMEOUT),
                    Ye({
                      status: _.TRANSFER_RESULT.TIMEOUT,
                      type: d.isRecharge(ne.transferType)
                        ? "charging"
                        : "drawing",
                      amount: t.money,
                      x724: Number(Re.value),
                      dealNo: t.uniq_dealNo || t.dealNo,
                    }),
                    e.abrupt("break", 36)
                  );
                case 21:
                  return (
                    (te.value = _.TRANSFER_RESULT.IDEXPIRED),
                    Ye({
                      status: _.TRANSFER_RESULT.IDEXPIRED,
                      type: d.isRecharge(ne.transferType)
                        ? "charging"
                        : "drawing",
                      amount: t.money,
                      reason: e.t0.retmsg,
                      x724: Number(Re.value),
                      dealNo: t.uniq_dealNo || t.dealNo,
                    }),
                    e.abrupt("break", 36)
                  );
                case 23:
                  return (
                    (te.value = _.TRANSFER_RESULT.FAIL),
                    Ye({
                      status: _.TRANSFER_RESULT.FAIL,
                      type: d.isRecharge(ne.transferType)
                        ? "charging"
                        : "drawing",
                      amount: t.money,
                      reason: "资金安全卡未激活",
                      activeUrl: e.t0.active_url,
                      x724: Number(Re.value),
                      dealNo: t.uniq_dealNo || t.dealNo,
                    }),
                    e.abrupt("break", 36)
                  );
                case 25:
                  return (
                    (te.value = _.TRANSFER_RESULT.PREFAIL),
                    Ye(
                      c(
                        c(
                          {
                            status: P({
                              isX724TransferUser: Re.value,
                              err: p.TRANSFER_T1_FAIL,
                              plan: o,
                            }),
                            type: d.isRecharge(ne.transferType)
                              ? "charging"
                              : "drawing",
                            amount: t.money,
                            canDraw: oe.canDraw,
                            reason: e.t0.retmsg,
                            applyTime: e.t0.timeStamp
                              ? e.t0.timeStamp
                              : Date.now() / 1e3,
                          },
                          C(o)
                        ),
                        {},
                        {
                          x724: Number(Re.value),
                          dealNo: t.uniq_dealNo || t.dealNo,
                        }
                      )
                    ),
                    e.abrupt("break", 36)
                  );
                case 27:
                  return (
                    (te.value = _.TRANSFER_RESULT.PRETIMEOUT),
                    Ye(
                      c(
                        c(
                          {
                            status: P({
                              isX724TransferUser: Re.value,
                              err: p.TRANSFER_T1_TIMEOUT,
                              plan: o,
                            }),
                            type: d.isRecharge(ne.transferType)
                              ? "charging"
                              : "drawing",
                            amount: t.money,
                            canDraw: oe.canDraw,
                            reason: e.t0.retmsg,
                            applyTime: e.t0.timeStamp
                              ? e.t0.timeStamp
                              : Date.now() / 1e3,
                          },
                          C(o)
                        ),
                        {},
                        {
                          x724: Number(Re.value),
                          dealNo: t.uniq_dealNo || t.dealNo,
                        }
                      )
                    ),
                    e.abrupt("break", 36)
                  );
                case 29:
                  return (
                    (te.value = _.TRANSFER_RESULT.PREFAIL),
                    Ye(
                      c(
                        c(
                          {
                            status: P({
                              isX724TransferUser: Re.value,
                              err: p.TRANSFER_T2_FAIL,
                              plan: o,
                            }),
                            type: d.isRecharge(ne.transferType)
                              ? "charging"
                              : "drawing",
                            amount: t.money,
                            canDraw: oe.canDraw,
                            reason: e.t0.retmsg,
                            applyTime: e.t0.timeStamp
                              ? e.t0.timeStamp
                              : Date.now() / 1e3,
                          },
                          C(o)
                        ),
                        {},
                        {
                          x724: Number(Re.value),
                          dealNo: t.uniq_dealNo || t.dealNo,
                        }
                      )
                    ),
                    e.abrupt("break", 36)
                  );
                case 31:
                  return (
                    (te.value = _.TRANSFER_RESULT.PRETIMEOUT),
                    Ye(
                      c(
                        c(
                          {
                            status: P({
                              isX724TransferUser: Re.value,
                              err: p.TRANSFER_T2_TIMEOUT,
                              plan: o,
                            }),
                            type: d.isRecharge(ne.transferType)
                              ? "charging"
                              : "drawing",
                            amount: t.money,
                            canDraw: oe.canDraw,
                            reason: e.t0.retmsg,
                            applyTime: e.t0.timeStamp
                              ? e.t0.timeStamp
                              : Date.now() / 1e3,
                          },
                          C(o)
                        ),
                        {},
                        {
                          x724: Number(Re.value),
                          dealNo: t.uniq_dealNo || t.dealNo,
                        }
                      )
                    ),
                    e.abrupt("break", 36)
                  );
                case 33:
                  return (
                    (te.value = _.TRANSFER_RESULT.DEADLINE),
                    Ye({
                      status: _.TRANSFER_RESULT.DEADLINE,
                      type: d.isRecharge(ne.transferType)
                        ? "charging"
                        : "drawing",
                      amount: t.money,
                      reason: e.t0.retmsg,
                      x724: Number(Re.value),
                      dealNo: t.uniq_dealNo || t.dealNo,
                    }),
                    e.abrupt("break", 36)
                  );
                case 35:
                  (te.value = _.TRANSFER_RESULT.FAIL),
                    Ye({
                      status: _.TRANSFER_RESULT.FAIL,
                      type: d.isRecharge(ne.transferType)
                        ? "charging"
                        : "drawing",
                      amount: t.money,
                      reason: e.t0.retmsg,
                      x724: Number(Re.value),
                      dealNo: t.uniq_dealNo || t.dealNo,
                    });
                case 36:
                case "end":
                  return e.stop();
              }
          },
          e,
          null,
          [[3, 12]]
        );
      })
    )).apply(this, arguments);
  }
  function Oe(e) {
    return Ue.apply(this, arguments);
  }
  function Ue() {
    return (Ue = i(
      u().mark(function e(r) {
        var a, t, n;
        return u().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (a = r.payload),
                    (t = r.plan),
                    (e.prev = 1),
                    (g += 1),
                    (e.next = 5),
                    l.transferCgi.qryTransferResult({ dealNo: a.dealNo })
                  );
                case 5:
                  (n = e.sent),
                    (e.t0 = n.state),
                    (e.next = "2" === e.t0 ? 9 : "3" === e.t0 ? 11 : 13);
                  break;
                case 9:
                  return (
                    N.reportMonitorEvent(y.TRANSFER_MONITOR.RESULT_SUC, {
                      ext2: d.isRecharge(ne.transferType) ? "in" : "out",
                    }),
                    (ae.value = !1),
                    (te.value = _.TRANSFER_RESULT.SUCCESS),
                    d.isRecharge(ne.transferType) &&
                      "1" === a.switch_pre &&
                      (t = t.map(function (e) {
                        var r = s(e, 2)[1];
                        return [
                          _.TRANSFER_TYPE.RECHARGE_T1,
                          r,
                          ne.nextTradeTime,
                        ];
                      })),
                    Ye(
                      c(
                        c(
                          {
                            status:
                              Re.value && d.isSchedule(t)
                                ? _.TRANSFER_RESULT.SCHEDULED
                                : _.TRANSFER_RESULT.SUCCESS,
                            type: d.isRecharge(ne.transferType)
                              ? "charging"
                              : "drawing",
                            amount: a.money,
                            applyTime: a.timeStamp || Date.now() / 1e3,
                          },
                          C(t)
                        ),
                        {},
                        {
                          x724: Number(Re.value),
                          dealNo: a.uniq_dealNo || a.dealNo,
                        }
                      )
                    ),
                    e.abrupt("break", 20)
                  );
                case 11:
                  return (
                    N.reportMonitorEvent(y.TRANSFER_MONITOR.RESULT_FAIL, {
                      ext2: d.isRecharge(ne.transferType) ? "in" : "out",
                      ext3: ""
                        .concat(n.errcode || "unknown", "|")
                        .concat(n.errmsg || ""),
                    }),
                    (ae.value = !1),
                    (te.value = _.TRANSFER_RESULT.FAIL),
                    Ye({
                      status: _.TRANSFER_RESULT.FAIL,
                      type: d.isRecharge(ne.transferType)
                        ? "charging"
                        : "drawing",
                      amount: a.money,
                      reason: n.errmsg,
                      x724: Number(Re.value),
                      dealNo: a.uniq_dealNo || a.dealNo,
                    }),
                    e.abrupt("break", 20)
                  );
                case 13:
                  if (!(g < 10)) {
                    e.next = 19;
                    break;
                  }
                  return (e.next = 16), E.sleep(500);
                case 16:
                  Oe({ payload: a, plan: t }), (e.next = 20);
                  break;
                case 19:
                  N.reportMonitorEvent(y.TRANSFER_MONITOR.RESULT_FAIL, {
                    ext2: d.isRecharge(ne.transferType) ? "in" : "out",
                    ext3: "timeout|轮询超时",
                  }),
                    (ae.value = !1),
                    (te.value = _.TRANSFER_RESULT.TIMEOUT),
                    Ye({
                      status: _.TRANSFER_RESULT.TIMEOUT,
                      type: d.isRecharge(ne.transferType)
                        ? "charging"
                        : "drawing",
                      amount: a.money,
                      x724: Number(Re.value),
                      dealNo: a.uniq_dealNo || a.dealNo,
                    });
                case 20:
                  e.next = 25;
                  break;
                case 22:
                  (e.prev = 22),
                    (e.t1 = e.catch(1)),
                    N.reportMonitorEvent(y.TRANSFER_MONITOR.RESULT_FAIL, {
                      ext2: d.isRecharge(ne.transferType) ? "in" : "out",
                      ext3: ""
                        .concat(
                          (null == e.t1 ? void 0 : e.t1.retcode) || "exception",
                          "|"
                        )
                        .concat(
                          (null == e.t1 ? void 0 : e.t1.retmsg) ||
                            (null == e.t1 ? void 0 : e.t1.errmsg) ||
                            ""
                        ),
                    }),
                    (ae.value = !1),
                    (te.value = _.TRANSFER_RESULT.FAIL),
                    Ye({
                      status: _.TRANSFER_RESULT.FAIL,
                      type: d.isRecharge(ne.transferType)
                        ? "charging"
                        : "drawing",
                      amount: a.money,
                      reason: e.t1.retmsg || e.t1.errmsg,
                      x724: Number(Re.value),
                      dealNo: a.uniq_dealNo || a.dealNo,
                    });
                case 25:
                case "end":
                  return e.stop();
              }
          },
          e,
          null,
          [[1, 22]]
        );
      })
    )).apply(this, arguments);
  }
  function Ye(e) {
    var r = L.$route.query,
      a = c(
        {
          from: r.from || "",
          fromEmbedded: r.fromEmbedded || "",
          code: r.code || "",
          name: r.name || "",
          market: r.market || "",
          holder: r.holder || "",
          purchase_date: r.purchase_date || "",
          trade_amount: r.amount,
          trade_price: r.price,
        },
        W.value
      );
    X.value
      ? L.$router.push({
          name: "TransferFundRecordsDetail",
          query: c(c({ transfer_type: ne.transferType }, e), a),
        })
      : L.$router.push({
          name: "TransferResult",
          query: c(c({ bank: ne.bankAbbr }, e), a),
        });
  }
  function Be() {
    return x.brokerConfig.trade.bankcardchange;
  }
  function We() {
    L.$stat.click(
      "trade.transfer".concat(pe.value.toLowerCase(), ".changecard")
    ),
      L.$router.push({ name: "AccountCard" });
  }
  var qe,
    He,
    je,
    Je = T.computed(function () {
      return T.dayjs(ne.nextTradeTime).format("YYYY-MM-DD HH:mm");
    }),
    Xe = T.computed(function () {
      if (_e.value.type !== le.value.NORMAL.type) return "";
      var e;
      if ("function" == typeof x.brokerConfig.transfer.transferTime) {
        var r = { bankAbbr: ne.bankAbbr };
        e = x.brokerConfig.transfer.transferTime(r);
      } else e = x.brokerConfig.transfer.transferTime;
      if (Re.value)
        return (function () {
          if (ne.transferType === _.TRANSFER_TYPE.RECHARGE) {
            if (ne.preTranStatus === l.PreTranStatus.REALTIME) {
              var e = x.brokerConfig.transfer.realTimeTipsText;
              return (
                (void 0 === e ? {} : e)[ne.bankAbbr] ||
                "当前为".concat(ve.value, "，预计实时到账")
              );
            }
            return "非实时转账时间，预计于".concat(Je.value, "前到账");
          }
          if (ne.transferType === _.TRANSFER_TYPE.WITHDRAW) {
            var r = De.value,
              a = r.t0,
              t = r.t1,
              n = r.t2;
            if (a || t || n) {
              var o;
              n
                ? (o = oe.preDrawDate[1])
                : t
                ? (o = oe.preDrawDate[0])
                : a && (o = oe.todayDrawDate);
              var u = T.dayjs(o).format("YYYY-MM-DD HH:mm");
              return ne.preTranStatus === l.PreTranStatus.REALTIME
                ? "使用预约转账功能，预计于".concat(u, "前到账")
                : "非实时转账时间，预计于".concat(u, "前到账");
            }
            if (ne.preTranStatus === l.PreTranStatus.REALTIME) {
              var i = x.brokerConfig.transfer.realTimeTipsText;
              return (
                (void 0 === i ? {} : i)[ne.bankAbbr] ||
                "当前为".concat(ve.value, "，预计实时到账")
              );
            }
            return "非实时转账时间，预计于".concat(Je.value, "前到账");
          }
          return "";
        })();
      var a = e.endTime,
        t = void 0 === a ? [16, 0, 0] : a,
        n = T.dayjs(V.value),
        o = n.set("hour", t[0]).set("minute", t[1]).set("second", t[2]),
        u = o.add(-10, "minute"),
        i = n.isBetween(u, o, "[)"),
        s = ""
          .concat(E.fixedTimeNumber(t[0]), ":")
          .concat(E.fixedTimeNumber(t[1]));
      return i
        ? "交易日实时转账截止至".concat(s, "，之后将延后到账")
        : "当前为".concat(ve.value, "，预计实时到账");
    });
  return {
    money: $,
    pageStatus: _e,
    transferData: ne,
    payMode: de,
    isX724TransferUser: Re,
    transferring: ae,
    pendingPreTransferNum: z,
    transferOutDelayTip: ee,
    getOrderPackage:
      ((je = i(
        u().mark(function e(r) {
          var a,
            t,
            n,
            o,
            s,
            c,
            T,
            p,
            R,
            E = arguments;
          return u().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = !(E.length > 1 && void 0 !== E[1]) || E[1]),
                      (s = Date.now()),
                      (e.prev = 2),
                      (ne.transferType = r),
                      (e.next = 6),
                      l.transferCgi.init(r)
                    );
                  case 6:
                    (c = e.sent),
                      (ne.bankAbbr = c.bank_abbr),
                      (ne.trueCard = !!+c.is_true_card),
                      (ne.bankName = c.bank_name),
                      (ne.cardTail = c.card_tail),
                      (ne.availAbleTransfer = !!+c.avaiable),
                      (ne.supportMode = c.support_mode_list || []),
                      (ne.verifyPwMode = c.verify_passwd_mode),
                      (ne.support = "1" === c.support),
                      (ne.hasBindWxPay = !!+c.wxpay),
                      (ne.isActive = "1" === c.active),
                      (ne.supportUrl = decodeURIComponent(c.support_url || "")),
                      (ne.activeUrl = decodeURIComponent(c.active_url || "")),
                      (ne.cardSupportWXPay = "1" === c.wxpay_bank_type),
                      (ne.realTransferTime =
                        (null == (t = c.real_transfer_time) ? void 0 : t[0]) ||
                        {}),
                      (ne.isTradeDay = "1" === c.is_trade_day),
                      (ne.timeFromServer = c.servertime),
                      xe({
                        isSupportSearch: "1" === c.can_qry_bank_balance,
                        isNeedBankPassword: "1" === c.check_pwd_bank_balance,
                        bankAbbr: c.bank_abbr,
                      }),
                      he({
                        bankName: c.bank_name,
                        cardTail: c.card_tail,
                        bankAbbr: c.bank_abbr,
                      }),
                      (T = c.support_mode_list.find(function (e) {
                        return "2" === e.support_mode;
                      })) &&
                        "1" === T.need_open &&
                        (ne.needOpenWxAuth = !0),
                      (ne.active = c.active),
                      (ne.preTranStatus = c.pretran_status || ""),
                      (ne.nextTradeTime = 1e3 * c.next_trade_time),
                      (ne.isWithinPostExpirationWindow =
                        c.cred_expired_status ===
                        D.IDCARD_STATUS.EXPIRED_RECENTLY),
                      (ne.isIdcardExpired =
                        c.cred_expired_status === D.IDCARD_STATUS.EXPIRED),
                      (ne.needAddCard = "1" === c.need_add_card),
                      Re.value &&
                        a &&
                        i(
                          u().mark(function e() {
                            var r, a, t, n, o, i, s, c;
                            return u().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (((e.prev = 0), !B.value)) {
                                        e.next = 10;
                                        break;
                                      }
                                      return (
                                        (e.next = 4),
                                        l.transferCgi.queryTransferList({
                                          action: "pre_num",
                                        })
                                      );
                                    case 4:
                                      (r = e.sent),
                                        (a = r.pre_num),
                                        (t = void 0 === a ? 0 : a),
                                        (z.value = +t || 0),
                                        (e.next = 18);
                                      break;
                                    case 10:
                                      return (
                                        (e.next = 12),
                                        l.transferCgi.qryPendingPreTransfers()
                                      );
                                    case 12:
                                      (n = e.sent),
                                        (o = n.pre_in_num),
                                        (i = void 0 === o ? 0 : o),
                                        (s = n.pre_out_num),
                                        (c = void 0 === s ? 0 : s),
                                        (z.value = (+i || 0) + (+c || 0));
                                    case 18:
                                      e.next = 23;
                                      break;
                                    case 20:
                                      (e.prev = 20),
                                        (e.t0 = e.catch(0)),
                                        N.reportMonitorEvent(
                                          y.TRANSFER_MONITOR
                                            .PRETRANSFER_QRY_FAIL,
                                          {
                                            ext3: ""
                                              .concat(
                                                (null == e.t0
                                                  ? void 0
                                                  : e.t0.retcode) || "unknown",
                                                "|"
                                              )
                                              .concat(
                                                (null == e.t0
                                                  ? void 0
                                                  : e.t0.retmsg) || ""
                                              ),
                                          }
                                        );
                                    case 23:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[0, 20]]
                            );
                          })
                        )(),
                      r === _.TRANSFER_TYPE.WITHDRAW &&
                        i(
                          u().mark(function e() {
                            var r, a;
                            return u().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        l.transferCgi.queryTransferList({
                                          action: "tips",
                                        })
                                      );
                                    case 3:
                                      (r = e.sent),
                                        (a = r.cashout_tips),
                                        (ee.value = a || ""),
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
                        )(),
                      (Q.value = ne.bankAbbr || ""),
                      (Z.value = r),
                      N.reportMonitorTime(
                        y.TRANSFER_MONITOR.INIT_TIME,
                        Date.now() - s
                      ),
                      (p = d.isRecharge(r) ? "in" : "out"),
                      N.reportMonitorEvent(y.TRANSFER_MONITOR.INIT_SUC, {
                        ext2: "".concat(p, "|").concat(ne.bankAbbr),
                      }),
                      (e.next = 20);
                    break;
                  case 14:
                    if (
                      ((e.prev = 14),
                      (e.t0 = e.catch(2)),
                      N.reportMonitorTime(
                        y.TRANSFER_MONITOR.INIT_TIME,
                        Date.now() - s
                      ),
                      (R = d.isRecharge(r) ? "in" : "out"),
                      N.reportMonitorEvent(y.TRANSFER_MONITOR.INIT_FAIL, {
                        ext2: "".concat(R, "|").concat(ne.bankAbbr),
                        ext3: ""
                          .concat(
                            (null == e.t0 ? void 0 : e.t0.retcode) || "unknown",
                            "|"
                          )
                          .concat((null == e.t0 ? void 0 : e.t0.retmsg) || ""),
                      }),
                      103421021 !== (null == e.t0 ? void 0 : e.t0.retcode))
                    ) {
                      e.next = 20;
                      break;
                    }
                    return e.abrupt(
                      "return",
                      ((ne.supportCard = !1),
                      void (ne.notSupportText =
                        (null ==
                        (o =
                          null == (n = x.brokerConfig.transfer)
                            ? void 0
                            : n.bindBankcard)
                          ? void 0
                          : o.noCardTips) || e.t0.retmsg))
                    );
                  case 20:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[2, 14]]
          );
        })
      )),
      function (e) {
        return je.apply(this, arguments);
      }),
    getPageState: function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q;
      return new Promise(function (r, a) {
        if ("2" === ne.active) return (_e.value = le.value.RELATETO), void r();
        if (!ne.availAbleTransfer)
          return (
            (_e.value = le.value.NOAVAILABLE),
            r(),
            void N.reportMonitorEvent(y.TRANSFER_MONITOR.UNAVAILABLE, {
              ext2: ne.bankAbbr,
            })
          );
        if (!ne.support) {
          var t = Be();
          return (
            (_e.value = t ? le.value.SUPPORT_NEW : le.value.SUPPORT), void r()
          );
        }
        return ne.support && !ne.isActive
          ? ((_e.value = le.value.GUIDE), void r())
          : de.value === l.PAYMODE.BANK
          ? ne.hasBindWxPay
            ? void e({ bankAbbr: ne.bankAbbr, serverTime: ne.timeFromServer })
                .then(function (e) {
                  var a = e.isTradeTime,
                    t = e.date;
                  if (
                    ((K.value = ne.isTradeDay && a),
                    (V.value = t),
                    ne.isWithinPostExpirationWindow &&
                      !ue.isUseOutTimeStatusWithOutTime)
                  )
                    return (
                      (_e.value = le.value.EXPIRED_RECENTLY), void r(!ce.value)
                    );
                  if (ne.isIdcardExpired && !ie.isUseOutTimeStatusWithOutTime)
                    return (
                      (_e.value = le.value.IDCARD_EXPIRED), void r(!Te.value)
                    );
                  switch (ne.preTranStatus) {
                    case "":
                    case l.PreTranStatus.DISABLED:
                      K.value
                        ? ((_e.value = le.value.NORMAL), r(!0))
                        : ((_e.value = le.value.OUTTRADETIME), r());
                      break;
                    case l.PreTranStatus.REALTIME:
                    case l.PreTranStatus.PRETIME:
                      (_e.value = le.value.NORMAL), r(!0);
                      break;
                    case l.PreTranStatus.CLEARTIME:
                      (_e.value = le.value.CLEARTIME), r();
                      break;
                    default:
                      _e.value = le.value.OTHER;
                  }
                })
                .catch(function (e) {
                  ("" !== ne.preTranStatus &&
                    ne.preTranStatus !== l.PreTranStatus.DISABLED) ||
                    ((_e.value = le.value.OUTTRADETIME), r());
                })
            : ((_e.value = le.value.BINDCARD), void r())
          : de.value === l.PAYMODE.WXPAY
          ? (ne.cardSupportWXPay, (_e.value = le.value.NORMAL), void r())
          : ((_e.value = le.value.NOAVAILABLE), void r());
      });
    },
    onTransfer:
      ((He = i(
        u().mark(function e() {
          var r;
          return u().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.prev = 0), ne.availAbleTransfer)) {
                      e.next = 3;
                      break;
                    }
                    throw p.TRANSFER_NOT_AVAILABLE;
                  case 3:
                    return (
                      Q.value &&
                        ne.bankAbbr !== Q.value &&
                        N.reportMonitorEvent(y.TRANSFER_MONITOR.CARD_MISMATCH, {
                          ext2: ""
                            .concat(
                              d.isRecharge(ne.transferType) ? "in" : "out",
                              "|"
                            )
                            .concat(ne.bankAbbr),
                          ext3: "init:"
                            .concat(Q.value, "|current:")
                            .concat(ne.bankAbbr),
                        }),
                      Z.value &&
                        ne.transferType !== Z.value &&
                        N.reportMonitorEvent(y.TRANSFER_MONITOR.TYPE_MISMATCH, {
                          ext2: ""
                            .concat(
                              d.isRecharge(ne.transferType) ? "in" : "out",
                              "|"
                            )
                            .concat(ne.bankAbbr),
                          ext3: "init:"
                            .concat(Z.value, "|current:")
                            .concat(ne.transferType),
                        }),
                      (e.next = 6),
                      new Promise(function (e, r) {
                        if (!/(\d|\.)+/g.test($.value))
                          return (
                            N.reportMonitorEvent(
                              y.TRANSFER_MONITOR.AMOUNT_INVALID,
                              { ext2: "format_error" }
                            ),
                            r("请输入正确的金额")
                          );
                        if (
                          ne.transferType === _.TRANSFER_TYPE.RECHARGE &&
                          +$.value >= 1e8
                        )
                          return (
                            N.reportMonitorEvent(
                              y.TRANSFER_MONITOR.AMOUNT_INVALID,
                              { ext2: "exceed" }
                            ),
                            r("已超出最大可转入金额，请调整")
                          );
                        if (
                          ne.transferType === _.TRANSFER_TYPE.WITHDRAW &&
                          +$.value > +me.value
                        )
                          return (
                            N.reportMonitorEvent(
                              y.TRANSFER_MONITOR.AMOUNT_INVALID,
                              { ext2: "exceed" }
                            ),
                            r("已超出可转出金额，请调整")
                          );
                        var a = parseInt(
                          T.__CJS__export_yuan2fen__($.value),
                          10
                        );
                        if (!a || a <= 0)
                          return (
                            N.reportMonitorEvent(
                              y.TRANSFER_MONITOR.AMOUNT_INVALID,
                              { ext2: "zero_or_negative" }
                            ),
                            r("请输入正确的金额")
                          );
                        e(a);
                      })
                    );
                  case 6:
                    (r = e.sent),
                      (e.t0 = ne.transferType),
                      (e.next =
                        e.t0 === _.TRANSFER_TYPE.RECHARGE
                          ? 10
                          : e.t0 === _.TRANSFER_TYPE.WITHDRAW
                          ? 17
                          : 23);
                    break;
                  case 10:
                    return (
                      ge(),
                      (e.next = 13),
                      new Promise(function (e, r) {
                        return Re.value
                          ? ne.preTranStatus === l.PreTranStatus.REALTIME
                            ? e()
                            : void f.Dialog({
                                context: L,
                                selector: "#pre-time-confirm",
                                onConfirm: function () {
                                  e();
                                },
                                onCancel: function () {
                                  r(p.TRANSFER_CANCEL);
                                },
                                showCancelButton: !0,
                                confirmButtonText: "确认转入",
                              })
                          : e();
                      })
                    );
                  case 13:
                    return (
                      (e.next = 15),
                      (function (e) {
                        if (
                          de.value !== l.PAYMODE.WXPAY ||
                          ne.cardSupportWXPay
                        ) {
                          var r, a;
                          switch (ne.preTranStatus) {
                            case l.PreTranStatus.REALTIME:
                              (r = {
                                type: _.TRANSFER_TYPE.RECHARGE,
                                action: l.GETORDERPKG_ACTION.CREATE_X724,
                              }),
                                (a = [[_.TRANSFER_TYPE.RECHARGE, e, 0]]);
                              break;
                            case l.PreTranStatus.PRETIME:
                              (r = {
                                type: _.TRANSFER_TYPE.RECHARGE_T1,
                                action: l.GETORDERPKG_ACTION.CREATE_X724,
                              }),
                                (a = [
                                  [
                                    _.TRANSFER_TYPE.RECHARGE_T1,
                                    e,
                                    ne.nextTradeTime,
                                  ],
                                ]);
                              break;
                            case l.PreTranStatus.CLEARTIME:
                              throw p.TRANSFER_CLEARTIME;
                            default:
                              r = { type: _.TRANSFER_TYPE.RECHARGE };
                          }
                          return Fe({
                            payload: c(
                              c({}, r),
                              {},
                              { money: e, mode: de.value, scenes: "0" }
                            ),
                            plan: a,
                          });
                        }
                      })(r)
                    );
                  case 15:
                    return (
                      m.stat.click("trade.transferin.go"), e.abrupt("break", 24)
                    );
                  case 17:
                    return (
                      ge(),
                      (e.next = 20),
                      new Promise(function (e, r) {
                        if ("1" === oe.timeType) {
                          var a = T.__CJS__export_reduce__(
                            oe.canTrade,
                            +$.value
                          );
                          if (oe.canTrade >= me.value)
                            oe.newStockPay > 0 && a < oe.newStockPay
                              ? f.Dialog({
                                  context: O,
                                  message: "你有新股或新债待缴费用"
                                    .concat(
                                      oe.newStockPay,
                                      "元,转出后可用资金仅剩"
                                    )
                                    .concat(
                                      a,
                                      "元,资金不足将导致新股或新债扣款失败"
                                    ),
                                  onConfirm: function () {
                                    e();
                                  },
                                  onCancel: function () {
                                    r(p.TRANSFER_CANCEL);
                                  },
                                  showCancelButton: !0,
                                  confirmButtonText: "仍然转出",
                                })
                              : e();
                          else {
                            var t = Math.min(
                              T.__CJS__export_reduce__(oe.canTrade, oe.canDraw),
                              oe.newStockPay
                            );
                            T.__CJS__export_reduce__(
                              oe.canDraw,
                              De.value.realtime
                            ) >= T.__CJS__export_reduce__(oe.newStockPay, t)
                              ? e()
                              : f.Dialog({
                                  context: O,
                                  message: "你有新股或新债待缴费用".concat(
                                    oe.newStockPay,
                                    "元,转出后资金不足将导致新股或新债扣款失败"
                                  ),
                                  onConfirm: function () {
                                    e();
                                  },
                                  onCancel: function () {
                                    r(p.TRANSFER_CANCEL);
                                  },
                                  showCancelButton: !0,
                                  confirmButtonText: "仍然转出",
                                });
                          }
                        } else e();
                      })
                    );
                  case 20:
                    return (
                      (function (e) {
                        if (Re.value)
                          +$.value <= oe.canDraw
                            ? Ce(e)
                            : T.index.$emit("show-transfer-plan", !0);
                        else if (
                          Ae.value &&
                          +$.value > oe.canDraw &&
                          +$.value <= me.value
                        ) {
                          if (oe.canDraw < 0)
                            throw "今日可转出金额为负数, 无法转出。";
                          var r;
                          (r =
                            0 === oe.canDraw
                              ? "你发起了一笔"
                                  .concat(
                                    Number($.value).toFixed(2),
                                    "元的转账，预计将于"
                                  )
                                  .concat(
                                    T.dayjs(oe.preDrawDate[0]).format(
                                      "MM月DD日"
                                    ),
                                    "到账。"
                                  )
                              : "你发起了一笔"
                                  .concat(
                                    Number($.value).toFixed(2),
                                    "元的转账，\n          其中"
                                  )
                                  .concat(
                                    oe.canDraw.toFixed(2),
                                    "元预计即时到账，\n          "
                                  )
                                  .concat(
                                    T.__CJS__export_reduce__(
                                      $.value,
                                      oe.canDraw
                                    ).toFixed(2),
                                    "元预计于"
                                  )
                                  .concat(
                                    T.dayjs(oe.preDrawDate[0]).format(
                                      "MM月DD日"
                                    ),
                                    "上午9:30分前到账"
                                  )),
                            f.Dialog({
                              context: O,
                              message: r,
                              onConfirm: function () {
                                Pe([
                                  parseInt(
                                    T.__CJS__export_yuan2fen__(oe.canDraw),
                                    10
                                  ),
                                  parseInt(
                                    T.__CJS__export_yuan2fen__(
                                      $.value - oe.canDraw
                                    ),
                                    10
                                  ),
                                ]);
                              },
                              showCancelButton: !0,
                              confirmButtonText: "仍然转出",
                            });
                        } else Pe(e);
                      })(r),
                      m.stat.click("trade.transferout.go"),
                      e.abrupt("break", 24)
                    );
                  case 23:
                    throw new Error();
                  case 24:
                    e.next = 38;
                    break;
                  case 26:
                    (e.prev = 26),
                      (e.t1 = e.catch(0)),
                      (e.t2 = e.t1),
                      (e.next =
                        e.t2 === p.TRANSFER_CANCEL
                          ? 31
                          : e.t2 === p.TRANSFER_NOT_AVAILABLE
                          ? 33
                          : e.t2 === p.TRANSFER_PENDING_TOO_MANY ||
                            e.t2 === p.TRANSFER_CLEARTIME
                          ? 35
                          : 37);
                    break;
                  case 31:
                    return h.info("取消转账"), e.abrupt("break", 38);
                  case 33:
                    return (
                      f.Dialog({
                        context: O,
                        message: ""
                          .concat(ne.bankName, "银行卡(尾号")
                          .concat(
                            ne.cardTail,
                            ")暂不可用，请联系券商或者开户银行确认银行卡状态"
                          ),
                      }),
                      e.abrupt("break", 38)
                    );
                  case 35:
                    return (
                      f.Dialog({ context: O, message: e.t1 }),
                      e.abrupt("break", 38)
                    );
                  case 37:
                    f.Dialog({
                      context: O,
                      message: "string" == typeof e.t1 ? e.t1 : e.t1.retmsg,
                    });
                  case 38:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[0, 26]]
          );
        })
      )),
      function () {
        return He.apply(this, arguments);
      }),
    cancel: function (e) {
      return l.transferCgi.cancel(e);
    },
    maxTransferAmount: me,
    isAppointmentUser: Ee,
    havePreDraw: Ae,
    hasFreezeMoney: Se,
    qryFundInfo:
      ((qe = i(
        u().mark(function e() {
          var r, a, t, n;
          return u().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.prev = 0), !Re.value)) {
                      e.next = 11;
                      break;
                    }
                    return (e.next = 4), l.transferCgi.qryTransferFundInfo();
                  case 4:
                    if (((r = e.sent), (a = r.fundsinfo))) {
                      e.next = 8;
                      break;
                    }
                    throw "查询交易详情失败";
                  case 8:
                    (oe.canTrade = Number(a.can_trade || "0")),
                      (oe.canDraw = Number(a.can_draw || "0")),
                      (oe.canDayDraw = Number(a.can_day_draw || "0")),
                      (oe.canDayDrawT1 = Number(a.can_day_one_draw || "0")),
                      (oe.canDayDrawT2 = Number(a.can_day_two_draw || "0")),
                      (oe.newStockPay = Number(a.new_stock_pay || "0")),
                      (oe.todayDrawDate = 1e3 * (a.today_timestamp || 0)),
                      (oe.preDrawDate = (
                        (a.pretran_timestamp || "").split("#") || []
                      ).map(function (e) {
                        return 1e3 * e;
                      })),
                      (oe.balanceMoney = Number(a.balance_money || "0")),
                      (oe.timeType = a.time_type),
                      (e.next = 18);
                    break;
                  case 11:
                    return (e.next = 13), l.transferCgi.qryFundInfo();
                  case 13:
                    if (((t = e.sent), (n = t.fundsinfo))) {
                      e.next = 17;
                      break;
                    }
                    throw "查询交易详情失败";
                  case 17:
                    (oe.canDraw = Number(n.can_draw || "0")),
                      (oe.canPreDraw = Number(n.can_pre_draw || "0")),
                      (oe.canTrade = Number(n.can_trade || "0")),
                      (oe.todayDrawDate = T.dayjs(n.today_draw_date)
                        .toDate()
                        .getTime()),
                      (oe.preDrawDate = T.flatten([n.pre_draw_date]).map(
                        function (e) {
                          return T.dayjs(e).toDate().getTime();
                        }
                      )),
                      (oe.timeType = n.time_type),
                      (oe.newStockPay = Number(n.new_stock_pay || "0"));
                  case 18:
                    e.next = 23;
                    break;
                  case 20:
                    (e.prev = 20),
                      (e.t0 = e.catch(0)),
                      N.reportMonitorEvent(
                        y.TRANSFER_MONITOR.FUNDINFO_724_FAIL,
                        {
                          ext3: ""
                            .concat(
                              (null == e.t0 ? void 0 : e.t0.retcode) ||
                                "unknown",
                              "|"
                            )
                            .concat(
                              (null == e.t0 ? void 0 : e.t0.retmsg) || ""
                            ),
                        }
                      ),
                      T.index.showToast({ title: e.t0.retmsg });
                  case 23:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[0, 20]]
          );
        })
      )),
      function () {
        return qe.apply(this, arguments);
      }),
    drawablePlan: ye,
    drawFromBalance: Ne,
    transferX724: Ce,
    transferNormal: Pe,
    fundsInfoData: oe,
    transferByBankPwd: function (e) {
      Me(c({ pinStr: e.encodePwd }, re.value));
    },
    needValidateBankPwd: re,
    handleOtherBtnClick: function () {
      var u = function (e) {
        return "TRADE.TRANSFER"
          .concat(String(pe.value).toUpperCase(), ".")
          .concat(e);
      };
      if (_e.value.type === le.value.GUIDE.type)
        return (
          m.stat.click(u(e || (e = o(["NEEDACTIVE"])))),
          void L.$router.push({ name: "GuideCommon" })
        );
      if (_e.value.type === le.value.BINDCARD.type)
        return m.stat.click(u(r || (r = o(["NEEDBIND"])))), void ne.trueCard;
      if (_e.value.type === le.value.RELATETO.type)
        return (
          m.stat.click(u(a || (a = o(["RELATETO"])))),
          void L.$router.push({
            name: "CheckPwd",
            query: { show: !0, name: L.$route.name },
          })
        );
      if (_e.value.type !== le.value.SUPPORT_NEW.type)
        return _e.value.type === le.value.SUPPORT.type
          ? void (J ? We() : L.$router.push({ name: "AccountCard" }))
          : [
              le.value.EXPIRED_RECENTLY.type,
              le.value.IDCARD_EXPIRED.type,
            ].includes(_e.value.type)
          ? (m.stat.click(u(n || (n = o(["", ""])), _e.value.type)),
            void L.$router.push({ name: "BizIdUpdate" }))
          : void 0;
      if ((m.stat.click(u(t || (t = o(["", ""])), _e.value.type)), J)) We();
      else {
        var i = Be();
        i && L.$router.push({ name: "VProtocol", query: c({}, i) });
      }
    },
    transferTypeId: pe,
    otherBtnText: be,
    tipsText: we,
    realTimeTip: ve,
    transferTimeTip: Xe,
    nextTradeTimeFmt: Je,
    toChangeCard: We,
    serverTime: V,
    isFundRecordAvailable: X,
    isChangeCardAvailable: J,
    closePreTransferTipDialog: function () {
      f.Dialog.hide({ context: L, selector: "#pre-time-confirm" });
    },
    isNewFundRecordUser: B,
    handleOutTimeWithInputMoney: function () {
      d.isRecharge(ne.transferType) &&
        !K.value &&
        se.value &&
        (_e.value = le.value.NORMAL);
    },
    restoreExpiredPageStatus: function () {
      d.isRecharge(ne.transferType) &&
        !K.value &&
        se.value &&
        (ne.isWithinPostExpirationWindow
          ? (_e.value = le.value.EXPIRED_RECENTLY)
          : ne.isIdcardExpired && (_e.value = le.value.IDCARD_EXPIRED));
    },
  };
};
