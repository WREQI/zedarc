require("../../@babel/runtime/helpers/Arrayincludes");
var e,
  t,
  n = require("../../@babel/runtime/helpers/toConsumableArray"),
  r = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../@babel/runtime/helpers/defineProperty"),
  i = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var u = require("../../common/vendor.js"),
  c = require("../../service/stat/mp-weixin.js");
require("../../service/broker.js");
var s = require("../../utils/market.js"),
  l = require("../../service/log/index.js"),
  p = require("../../cgi/newstock.js"),
  f = require("../../cgi/types/newstock.js"),
  h = require("../../cgi/gem.js"),
  g = require("../../cgi/password.js"),
  d = require("../../components/Password/index.js"),
  m = require("../../cgi/signProtocol.js"),
  v = require("../../config/key.js"),
  k = require("../../common/components/Dialog/index.js"),
  _ = require("../../config/enum.js"),
  T = require("../../config/errcode.js"),
  y = require("../common/useServerTime.js"),
  B = require("../../stores/user/useUserinfo.js"),
  E = require("../../service/aegis/platform/not-wujie.js"),
  b = require("../../config/broker/11100/index.js");
function x(e, t, n) {
  try {
    var r = t;
    E.aegisReporter.reportEvent(e, {
      ext4: JSON.stringify(
        i(
          {
            retcode: null == r ? void 0 : r.retcode,
            retmsg:
              (null == r ? void 0 : r.retmsg) ||
              (null == r ? void 0 : r.message),
          },
          n
        )
      ),
    });
  } catch (e) {}
}
var w = function (e, t) {
    if (isNaN(+e)) return e;
    var n = t !== f.EPurchaseType.DEBT ? "股" : "张";
    return +e >= 1e4
      ? "".concat((+e / 1e4).toFixed(2).replace(/\.?0+$/, ""), "万").concat(n)
      : "".concat(e).concat(n);
  },
  N =
    (a((t = {}), f.EPurchaseType.KCB, "科"),
    a(t, f.EPurchaseType.CYB, "创"),
    a(
      t,
      f.EPurchaseType.DEBT,
      (a((e = {}), f.EConvType.CYB, "创"), a(e, f.EConvType.KCB, "科"), e)
    ),
    t);
(exports.formatMarketTag = function (e) {
  var t;
  return e.purchase_type === f.EPurchaseType.STOCK ||
    (e.purchase_type === f.EPurchaseType.DEBT &&
      e.conv_type === f.EConvType.DEBT)
    ? null == (t = _.MARKET[e.market])
      ? void 0
      : t.toUpperCase()
    : e.purchase_type !== f.EPurchaseType.DEBT
    ? N[e.purchase_type]
    : N[e.purchase_type][e.conv_type];
}),
  (exports.formatUnit = w),
  (exports.showExplain = function (e) {
    var t = {
      title: "发行市盈率",
      message:
        "<p>发行市盈率采用滚动市盈率(TTM)，若公司发行市盈率显著高于公司所处行业的平均市盈率，可能存在破发风险，请投资者谨慎决策。</p><p>市盈率数据和信息说明仅供参考，不构成任何投资建议，实际情况请以市场数据为准</p>",
      messageType: "html",
      messageAlign: "justify",
    };
    e === f.EPurchaseType.DEBT &&
      ((t.title = "转股溢价率"),
      (t.message =
        "<p>转股溢价率=转债价格/转股价值 -1，转股价值=（转债价格/转股价格） * 正股价格；是当前可转债价格相较于转股后价值的溢价程度。</p><p>溢价率会随当前正股股价波动。一般来说转股溢价率越高，投资者的盈利空间越小，转股溢价率越低，投资者盈利空间越大。</p><p>溢价率数据和信息说明仅供参考，不构成任何投资建议，实际情况请以市场数据为准。</p>")),
      k.Dialog(i({}, t));
  }),
  (exports.useNewstockBooking = function () {
    var e,
      t,
      a,
      N,
      C,
      S,
      O,
      D,
      A = null == (e = u.getCurrentInstance()) ? void 0 : e.proxy,
      P = new l.Log("newstock/booking"),
      I = u.reactive({
        bookingCount: "0",
        needNotifyTimeStamp: "",
        canBookingList: [],
        notBookingList: [],
        bookingList: [],
      }),
      L = u.ref({ pageNum: 0, pageSize: 10 }),
      K = u.ref(!1),
      R = u.computed(function () {
        return I.bookingList.filter(function (e) {
          return e.purchase_type !== f.EPurchaseType.DEBT;
        });
      }),
      j = u.computed(function () {
        return I.bookingList.filter(function (e) {
          return e.purchase_type === f.EPurchaseType.DEBT;
        });
      }),
      q = u.ref(!1),
      M = u.computed(function () {
        return I.bookingList.length > 3;
      }),
      G = u.computed(function () {
        return I.canBookingList.filter(function (e) {
          return e.purchase_type !== f.EPurchaseType.DEBT;
        });
      }),
      H = u.computed(function () {
        return I.canBookingList.filter(function (e) {
          return e.purchase_type === f.EPurchaseType.DEBT;
        });
      }),
      z = u.computed(function () {
        return I.notBookingList.filter(function (e) {
          return e.purchase_type !== f.EPurchaseType.DEBT;
        });
      }),
      U = u.computed(function () {
        return I.notBookingList.filter(function (e) {
          return e.purchase_type === f.EPurchaseType.DEBT;
        });
      });
    function F() {
      return W.apply(this, arguments);
    }
    function W() {
      return (W = o(
        r().mark(function e() {
          var t,
            o,
            a,
            i,
            c,
            s,
            l,
            h,
            g,
            d,
            m,
            v,
            _,
            T,
            y,
            B,
            E,
            b,
            w,
            N = arguments;
          return r().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = N.length > 0 && void 0 !== N[0] ? N[0] : {}),
                      (o = t.forceUpdate),
                      (a = void 0 === o || o),
                      (i = t.showDefaultErrorDialog),
                      (c = void 0 === i || i),
                      (s = t.failCb),
                      (l = void 0 === s ? u.noop : s),
                      (h = t.defalutSelected),
                      (g = void 0 !== h && h),
                      (e.prev = 1),
                      a && (L.value.pageNum = 0),
                      (e.next = 5),
                      p.newstockCgi.processNewStockBooking({
                        action: p.BookingActionType.QUERY,
                        page_num: String(L.value.pageNum),
                        page_size: String(L.value.pageSize),
                      })
                    );
                  case 5:
                    (d = e.sent),
                      (m = d.booking_count),
                      (v = void 0 === m ? "0" : m),
                      (_ = d.newstock_booking_risk_tips),
                      (T = d.new_ipo_notify_time),
                      (y = void 0 === T ? "" : T),
                      (B = d.booking_list),
                      (E = void 0 === B ? [] : B),
                      (b = d.after_purchase_list),
                      (w = void 0 === b ? [] : b),
                      0 === L.value.pageNum &&
                        ((function (e, t) {
                          var n = [],
                            r = [];
                          e.forEach(function (e) {
                            var o, a;
                            if (
                              (e.purchase_type !== f.EPurchaseType.DEBT &&
                                (e.purchase_amount_upper_limit = String(
                                  1e4 * (+e.purchase_amount_upper_limit || 0)
                                )),
                              (e.selected = !1),
                              t)
                            )
                              (e.selected = !0),
                                (e._purchaseAmount =
                                  e.purchase_type === f.EPurchaseType.DEBT
                                    ? 1e4
                                    : 0);
                            else {
                              var i = I.canBookingList.findIndex(function (t) {
                                return (
                                  t.purchase_code === e.purchase_code &&
                                  t.stock_name === e.stock_name
                                );
                              });
                              -1 !== i
                                ? ((e.selected = I.canBookingList[i].selected),
                                  (e._purchaseAmount =
                                    I.canBookingList[i]._purchaseAmount))
                                : (e._purchaseAmount =
                                    e.purchase_type === f.EPurchaseType.DEBT
                                      ? 1e4
                                      : 0);
                            }
                            e._optionsArr = (function (e) {
                              var t = [],
                                n = 0;
                              for (
                                n = parseInt(e.max_purchase_quantity, 10);
                                n > 0;

                              )
                                t.push({ text: String(n), value: n }),
                                  (n -= 500);
                              return (
                                t.unshift({ text: "最优额度", value: 0 }), t
                              );
                            })(e);
                            var u =
                              (null == (a = e.comparable_company)
                                ? void 0
                                : a.split(";")) || [];
                            (u = u.map(function (e) {
                              var t,
                                n = e.split(","),
                                r =
                                  null == (t = null == n ? void 0 : n[0])
                                    ? void 0
                                    : t.slice(2),
                                o = null == n ? void 0 : n[1];
                              return o && r
                                ? "".concat(o, "(").concat(r, ")")
                                : "";
                            })),
                              (e.comparable_company = u.join(","));
                            var c =
                              +(null !== (o = e.issue_price) && void 0 !== o
                                ? o
                                : "-") || "--";
                            "--" === c
                              ? ((e.issue_price = c), r.push(e))
                              : e.purchase_status !==
                                f.EPurchaseStatus.UNFINISHED
                              ? r.push(e)
                              : n.push(e),
                              $(e);
                          }),
                            (I.canBookingList = [].concat(n)),
                            (I.notBookingList = [].concat(r));
                        })(w, g),
                        (K.value = "1" === _),
                        (I.bookingCount = v),
                        (I.needNotifyTimeStamp = String(1e3 * Number(y)))),
                      (I.bookingList = a
                        ? n(E)
                        : [].concat(n(I.bookingList), n(E))),
                      E.length &&
                        I.bookingList.length < +I.bookingCount &&
                        ((L.value.pageNum += 1),
                        setTimeout(function () {
                          F({ forceUpdate: !1 });
                        }, 10)),
                      (e.next = 21);
                    break;
                  case 18:
                    (e.prev = 18),
                      (e.t0 = e.catch(1)),
                      !c && u.isFunction(l)
                        ? l()
                        : k.Dialog({
                            message: e.t0.retmsg || "网络繁忙 请稍后重试",
                          }),
                      x("MONITOR-NEWBOOKING-QUERY-FAIL", e.t0, {
                        pageNum: L.value.pageNum,
                      });
                  case 21:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[1, 18]]
          );
        })
      )).apply(this, arguments);
    }
    var Y = function (e) {
        var t = e.type === f.EPurchaseType.DEBT ? "新债" : "新股";
        k.Dialog({
          message: "如需申购"
            .concat(e.text)
            .concat(t, ",请到就近")
            .concat(b.brokerConfig.base.name, "营业部开通")
            .concat(e.text, "交易权限。若有疑问,请联系")
            .concat(b.brokerConfig.base.name, "客服:")
            .concat(b.brokerConfig.base.tel),
        });
      },
      $ = function (e) {
        var t = "",
          n = !1;
        switch (
          ("--" === e.issue_price && (t = "暂无发行价"), e.purchase_status)
        ) {
          case f.EPurchaseStatus.NO_QUOTA:
            (t = "暂无申购配额, 去查看配额规则"), (n = !0);
            break;
          case f.EPurchaseStatus.NO_GEM:
            (t = "暂无创业板权限, 去开通"), (n = !0);
            break;
          case f.EPurchaseStatus.NO_KCB:
            (t = "暂无科创板权限, 去开通"), (n = !0);
            break;
          case f.EPurchaseStatus.NO_SH:
            (t = "暂无沪市交易权限, 如何处理"), (n = !0);
            break;
          case f.EPurchaseStatus.NO_SZ:
            (t = "暂无深市交易权限, 如何处理"), (n = !0);
            break;
          case f.EPurchaseStatus.FIX_GEM:
            (t = "创业板权限不足, 去升级"), (n = !0);
            break;
          case f.EPurchaseStatus.NO_SZ_KZZ:
            (t = "暂无深市可转债权限, 去开通"), (n = !0);
            break;
          case f.EPurchaseStatus.NO_SH_KZZ:
            (t = "暂无沪市可转债权限, 去开通"), (n = !0);
            break;
          case f.EPurchaseStatus.NO_KCB_GROWTH:
            (t = "暂无科创成长层权限, 去开通"), (n = !0);
        }
        return (
          (e.notbook = { text: t, highLight: n }), { text: t, highLight: n }
        );
      },
      Z = u.computed(function () {
        return I.canBookingList.filter(function (e) {
          return e.selected;
        });
      }),
      Q = u.computed(function () {
        return I.canBookingList.every(function (e) {
          return e.selected;
        });
      }),
      V = u.ref(!1);
    function X(e) {
      return J.apply(this, arguments);
    }
    function J() {
      return (J = o(
        r().mark(function e(t) {
          var n, o, a, i;
          return r().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  (n = t.market),
                    (o = t.code),
                    (a = t.keyName),
                    (i = t.value),
                    I.canBookingList.some(function (e) {
                      if (e.market === n && e.purchase_code === o)
                        return (e[a] = i), !0;
                    });
                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    var ee = u.ref(!1),
      te = u.ref({});
    function ne() {
      return re.apply(this, arguments);
    }
    function re() {
      return (re = o(
        r().mark(function e() {
          var t, n, a, u, s;
          return r().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!K.value) {
                    e.next = 12;
                    break;
                  }
                  if (
                    ((a =
                      (null ==
                      (n =
                        null == (t = b.brokerConfig.hall) ? void 0 : t.newstock)
                        ? void 0
                        : n.booking) || {}),
                    (u = a.need_match),
                    (s = void 0 !== u && u),
                    (e.t0 = s),
                    !e.t0)
                  ) {
                    e.next = 7;
                    break;
                  }
                  return (
                    (e.next = 6),
                    o(
                      r().mark(function e() {
                        var t, n;
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    p.newstockCgi.queryMatchInfo()
                                  );
                                case 3:
                                  if (((e.t0 = e.sent), e.t0)) {
                                    e.next = 6;
                                    break;
                                  }
                                  e.t0 = {};
                                case 6:
                                  (n = e.t0),
                                    (e.t1 =
                                      ((te.value = i(
                                        i({}, n),
                                        {},
                                        { pname: "预约打新" }
                                      )),
                                      te.value.match_type)),
                                    (e.next =
                                      e.t1 ===
                                      _.TRADE_MATCH_TYPE.NEED_SIGN_MATCH_PRO
                                        ? 10
                                        : e.t1 ===
                                          _.TRADE_MATCH_TYPE
                                            .NEED_SIGN_NOT_MATCH_PRO
                                        ? 11
                                        : e.t1 ===
                                          _.TRADE_MATCH_TYPE.RISK_LEVEL_OUTDATED
                                        ? 12
                                        : e.t1 === _.TRADE_MATCH_TYPE.NOT_TEST
                                        ? 13
                                        : e.t1 ===
                                          _.TRADE_MATCH_TYPE.TEST_OUTTIME
                                        ? 14
                                        : (e.t1,
                                          _.TRADE_MATCH_TYPE.NOT_NEED_MATCH,
                                          15));
                                  break;
                                case 10:
                                  return e.abrupt(
                                    "return",
                                    (ie &&
                                      -1 ===
                                        (null == (t = oe.value)
                                          ? void 0
                                          : t.findIndex(function (e) {
                                              return e.key === ie.key;
                                            })) &&
                                      oe.value.push(ie),
                                    !0)
                                  );
                                case 11:
                                  return e.abrupt(
                                    "return",
                                    (k.Dialog({
                                      message:
                                        n.cannot_open_desc ||
                                        "您的风险测评结果与本服务不适配，无法参与该服务。请更新风险测评。",
                                      messageAlign: "justify",
                                      showCancelButton: !0,
                                      confirmButtonText: "更新测评",
                                      onConfirm: ue,
                                    }),
                                    !1)
                                  );
                                case 12:
                                  return e.abrupt(
                                    "return",
                                    (k.Dialog({
                                      message: "你的风险测评不完整，请先更新。",
                                      showCancelButton: !0,
                                      confirmButtonText: "更新风险测评",
                                      onConfirm: ue,
                                    }),
                                    !1)
                                  );
                                case 13:
                                  return e.abrupt(
                                    "return",
                                    (k.Dialog({
                                      message: "你的风险等级未测评，请先测评。",
                                      showCancelButton: !0,
                                      confirmButtonText: "更新风险测评",
                                      onConfirm: ue,
                                    }),
                                    !1)
                                  );
                                case 14:
                                  return e.abrupt(
                                    "return",
                                    (k.Dialog({
                                      message: "你的风险测评已过期，请先更新。",
                                      showCancelButton: !0,
                                      confirmButtonText: "更新风险测评",
                                      onConfirm: ue,
                                    }),
                                    !1)
                                  );
                                case 15:
                                  return e.abrupt("return", !0);
                                case 16:
                                  e.next = 21;
                                  break;
                                case 18:
                                  return (
                                    (e.prev = 18),
                                    (e.t2 = e.catch(0)),
                                    e.abrupt(
                                      "return",
                                      (k.Dialog({
                                        message:
                                          e.t2.retmsg || "网络繁忙 请稍后重试",
                                        messageAlign: "justify",
                                      }),
                                      x(
                                        "MONITOR-NEWBOOKING-MATCHINFO-FAIL",
                                        e.t2
                                      ),
                                      !1)
                                    )
                                  );
                                case 21:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 18]]
                        );
                      })
                    )()
                  );
                case 6:
                  e.t0 = !e.sent;
                case 7:
                  if (!e.t0) {
                    e.next = 9;
                    break;
                  }
                  return e.abrupt("return");
                case 9:
                  (V.value = !0), (e.next = 13);
                  break;
                case 12:
                  c.stat.click(
                    "trade.playnew.booking.booking",
                    void 0,
                    void 0,
                    {
                      all_selected: Q.value ? "1" : "0",
                      has_stock: Z.value.some(function (e) {
                        return e.purchase_type !== f.EPurchaseType.DEBT;
                      })
                        ? "1"
                        : "0",
                      has_debt: Z.value.some(function (e) {
                        return e.purchase_type === f.EPurchaseType.DEBT;
                      })
                        ? "1"
                        : "0",
                    }
                  ),
                    (ee.value = !0);
                case 13:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    var oe = u.ref(
        (null ==
        (C =
          null ==
          (N =
            null == (a = null == (t = b.brokerConfig) ? void 0 : t.hall)
              ? void 0
              : a.newstock)
            ? void 0
            : N.booking)
          ? void 0
          : C.protocols) || []
      ),
      ae = (
        (null ==
        (D =
          null == (O = null == (S = b.brokerConfig) ? void 0 : S.hall)
            ? void 0
            : O.newstock)
          ? void 0
          : D.booking) || {}
      ).matchProtocol,
      ie = void 0 === ae ? null : ae;
    function ue() {
      null == A ||
        A.$router.push({
          name: "BizRiskUpdate",
          query: { match_type: te.value.match_type, from: "trade" },
        });
    }
    function ce(e) {
      return se.apply(this, arguments);
    }
    function se() {
      return (se = o(
        r().mark(function e(t) {
          var n, o, a, i, c;
          return r().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.type),
                      (o = t.sinfo),
                      (a = t.allCancel),
                      (i = void 0 !== a && a),
                      (e.prev = 1),
                      (e.next = 4),
                      g.passwordCgi.shouldCheckPassword({})
                    );
                  case 4:
                    (c = e.sent),
                      "1" === c.needcheck
                        ? d.Password({
                            theme: d.THEME.TRADE,
                            isTrade: !0,
                            showErrorWithNotice: !1,
                            onSuccess: function () {
                              return le(n, o, i);
                            },
                          })
                        : le(n, o, i),
                      (e.next = 12);
                    break;
                  case 9:
                    (e.prev = 9),
                      (e.t0 = e.catch(1)),
                      u.index.showToast({
                        title: e.t0.retmsg || "网络繁忙 请稍后再试",
                        icon: "none",
                      }),
                      x("MONITOR-NEWBOOKING-CHECKPWD-FAIL", e.t0, { type: n });
                  case 12:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[1, 9]]
          );
        })
      )).apply(this, arguments);
    }
    function le(e, t, n) {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (pe = o(
        r().mark(function e(t, n, o) {
          var a, c, s, l;
          return r().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if ((P.info("操作信息sinfo", n), o || n)) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt(
                      "return",
                      (P.error("预约提交异常: sinfo为空", {
                        type: t,
                        allCancel: o,
                      }),
                      E.aegisReporter.reportEvent(
                        "MONITOR-NEWBOOKING-EMPTY-SINFO",
                        { ext4: t }
                      ),
                      void k.Dialog({ message: "数据已更新，请重新选择" }))
                    );
                  case 2:
                    return (
                      u.index.showLoading({ title: "提交中" }),
                      (q.value = !0),
                      (e.prev = 3),
                      (a = o ? { cancel_all: "1" } : {}),
                      (e.next = 7),
                      p.newstockCgi.processNewStockBooking(
                        i({ action: t, newstock_list: o ? "" : n }, a)
                      )
                    );
                  case 7:
                    if (
                      ((c = e.sent),
                      (s = c.fail_result_data),
                      !(l = void 0 === s ? [] : s).length)
                    ) {
                      e.next = 12;
                      break;
                    }
                    throw { fail_result_data: l };
                  case 12:
                    u.index.showToast({
                      icon: "success",
                      title:
                        t === p.BookingActionType.BOOKING
                          ? "预约成功"
                          : "取消成功",
                      duration: 2e3,
                    }),
                      (e.next = 18);
                    break;
                  case 15:
                    (e.prev = 15),
                      (e.t0 = e.catch(3)),
                      (function (e) {
                        var t = e.type,
                          n = e.data,
                          r = void 0 === n ? [] : n,
                          o = e.sinfo,
                          a = e.isCancelAll,
                          i =
                            t === p.BookingActionType.BOOKING
                              ? "预约打新提交失败"
                              : "取消预约失败",
                          u = [],
                          c = !1,
                          s = r.filter(function (e) {
                            return (
                              T.IPOBOOKING_INVALID_ORDER_TIME === e.ext_retcode
                            );
                          });
                        if (s.length)
                          !(function (e) {
                            var t = e.type,
                              n = e.list,
                              r = void 0 === n ? [] : n,
                              o = e.isCancelAll;
                            if (t === p.BookingActionType.CANCEL) {
                              var a = I.bookingList.filter(function (e) {
                                return r.includes(e.purchase_code);
                              });
                              if (o)
                                return void k.Dialog({
                                  message: "".concat(
                                    a
                                      .map(function (e) {
                                        return "“".concat(e.stock_name, "”");
                                      })
                                      .join(),
                                    "提交申购中，无法取消预约"
                                  ),
                                  confirmButtonText: "知道了",
                                });
                              k.Dialog({
                                message: "".concat(
                                  a
                                    .map(function (e) {
                                      return "“".concat(e.stock_name, "”");
                                    })
                                    .join(),
                                  "提交申购中，无法取消预约"
                                ),
                                confirmButtonText: "知道了",
                              });
                            } else if (t === p.BookingActionType.BOOKING) {
                              if (Z.value.length === r.length)
                                return void k.Dialog({
                                  message:
                                    "您预约的股票可立即申购，是否前往申购",
                                  confirmButtonText: "前往申购",
                                  showCancelButton: !0,
                                  cancelButtonText: "知道了",
                                  onConfirm: function () {
                                    null == A ||
                                      A.$router.push({ name: "NewStock" });
                                  },
                                });
                              var i = Z.value.filter(function (e) {
                                return r.includes(e.purchase_code);
                              });
                              k.Dialog({
                                message: "".concat(
                                  i
                                    .map(function (e) {
                                      return "“".concat(e.stock_name, "”");
                                    })
                                    .join(),
                                  "可立即申购，无法预约，是否前往申购"
                                ),
                                confirmButtonText: "前往申购",
                                showCancelButton: !0,
                                cancelButtonText: "知道了",
                                onConfirm: function () {
                                  null == A ||
                                    A.$router.push({ name: "NewStock" });
                                },
                              });
                            }
                          })({
                            list: s.map(function (e) {
                              return e.purchase_code;
                            }),
                            type: t,
                            isCancelAll: a,
                          });
                        else {
                          if (r.length) {
                            var l = r.filter(function (e) {
                              return ![
                                T.BOOKING_REPEAT_ERR,
                                T.CANCEL_BOOKING_REPEAT_ERR,
                              ].includes(e.ext_retcode);
                            });
                            u =
                              t === p.BookingActionType.BOOKING
                                ? I.canBookingList
                                    .filter(function (e) {
                                      return (
                                        -1 !==
                                        l.findIndex(function (t) {
                                          return (
                                            e.purchase_code === t.purchase_code
                                          );
                                        })
                                      );
                                    })
                                    .map(function (e) {
                                      return [
                                        "".concat(e.purchase_code),
                                        "".concat(e._purchaseAmount),
                                      ].join("|");
                                    })
                                : l.map(function (e) {
                                    return "".concat(e.purchase_code);
                                  });
                          }
                          if (
                            !r.length ||
                            u.length ||
                            (r.length && o.split(",").length > r.length)
                          ) {
                            r.length &&
                              (o.split(",").length > r.length ||
                                (a && I.bookingCount)) &&
                              ((i =
                                t === p.BookingActionType.BOOKING
                                  ? "预约打新部分成功"
                                  : "取消预约部分成功"),
                              (c = !0));
                            var f = u.join() || o;
                            P.info("重试列表:", f),
                              k.Dialog({
                                title: i,
                                message:
                                  t === p.BookingActionType.BOOKING
                                    ? "因网络繁忙，您预约打新操作".concat(
                                        c ? "仅部分" : "不",
                                        "成功，请稍后再试"
                                      )
                                    : "因网络繁忙，预约打新取消".concat(
                                        c ? "仅部分" : "不",
                                        "成功，请稍后再试"
                                      ),
                                confirmButtonText: "再试一次",
                                showCancelButton: !0,
                                cancelButtonText: "我知道了",
                                messageAlign: "justify",
                                onConfirm: function () {
                                  return le(t, f, a);
                                },
                              });
                          } else
                            k.Dialog({
                              message: "因网络繁忙，请稍后再试",
                              confirmButtonText: "我知道了",
                            });
                        }
                      })({
                        type: t,
                        data: null == e.t0 ? void 0 : e.t0.fail_result_data,
                        sinfo: n,
                        isCancelAll: o,
                      });
                  case 18:
                    return (
                      (e.prev = 18),
                      u.index.hideLoading(),
                      F({
                        showDefaultErrorDialog: !1,
                        failCb: function () {
                          k.Dialog({ message: "网络繁忙 请稍后重试[-1]" });
                        },
                      }),
                      e.finish(18)
                    );
                  case 21:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[3, 15, 18, 21]]
          );
        })
      )).apply(this, arguments);
    }
    var fe = u.computed(function () {
        if (I.needNotifyTimeStamp) {
          var e = +u.index.getStorageSync(v.NEWSTOCK_BOOKING_NOTIFY);
          if (!e) return !1;
          var t = u
            .dayjs(new Date(+I.needNotifyTimeStamp))
            .isAfter(u.dayjs(new Date(e)));
          if (e && t) return !0;
        }
        return !1;
      }),
      he = u.ref(!u.index.getStorageSync(v.NEWSTOCK_BOOKING_BUBBLE)),
      ge = u.ref(!1);
    u.watch(
      function () {
        return ge.value;
      },
      function (e) {
        e || ((ke.value = ""), (me.value = ""), (ve.value = "0"));
      }
    );
    var de = u.ref("0"),
      me = u.ref(""),
      ve = u.ref("0"),
      ke = u.ref("");
    function _e() {
      (ke.value = ""), (me.value = ""), (ve.value = "0");
    }
    var Te = u.ref(!1),
      ye = null;
    function Be() {
      ye && (clearTimeout(ye), (ye = null));
    }
    var Ee,
      be,
      xe,
      we = B.useUserinfoStore(),
      Ne = u.computed(function () {
        var e;
        return (
          "1" ===
          (null == (e = we.userinfo) ? void 0 : e.is_newstock_booking_gray)
        );
      }),
      Ce = null;
    return (
      u.watch(
        function () {
          return Ne.value;
        },
        function (e) {
          e &&
            (0, y.useServerTime().getServerTime)().then(function (e) {
              var t = e.date,
                n = 60 * t.getHours() + t.getMinutes(),
                r = u
                  .dayjs(t)
                  .set("hour", 9)
                  .set("minute", 30)
                  .set("second", 0),
                o = u.dayjs(t).isBefore(r),
                a =
                  "-1" !== e.marketState[_.MARKET.HA] &&
                  "-1" !== e.marketState[_.MARKET.SA];
              o &&
                a &&
                (Ce = setTimeout(function () {
                  F();
                }, 1e3 * (60 * (570 - n) + 5 - t.getSeconds())));
            });
        },
        { immediate: !0 }
      ),
      u.onBeforeUnmount(function () {
        Ce && clearTimeout(Ce), Be();
      }),
      {
        EPurchaseType: f.EPurchaseType,
        newStockBookingData: I,
        bookedStockList: R,
        bookedDebtkList: j,
        canBookingStockList: G,
        canBookingDebtList: H,
        notBookingStockList: z,
        notBookingDebtList: U,
        showMore: q,
        showMoreButtonShow: M,
        needRiskTip: K,
        selectedCanBookingList: Z,
        allSelected: Q,
        riskTipVisible: V,
        newAddNotify: fe,
        bubbleTips: he,
        showBookingConfirmDialog: ee,
        showDebtActionSheet: ge,
        debtSubmitMaxNum: de,
        selectRadioIndex: ve,
        debtInputNum: me,
        matchInfo: te,
        debtNumInputFocus: Te,
        protocols: oe,
        onDebtNumInputBlur: function () {
          Te.value = !1;
        },
        onStockPickerChange: function (e, t) {
          var n = e.detail.value;
          !(function (e, t) {
            var n = I.canBookingList.findIndex(function (t) {
              return t.purchase_code === e.purchase_code;
            });
            I.canBookingList[n]._purchaseAmount = t;
          })(t, t._optionsArr[n].value);
        },
        onDebtPickerChange: function () {
          var e = 0;
          if (0 == +ve.value) e = +de.value;
          else if (1 == +ve.value) {
            if (me.value.length > 0) {
              var t = me.value.charAt(me.value.length - 1);
              if (0 == +me.value || 0 != +t || +me.value > +de.value)
                return void u.index.showToast({
                  title: "申购数量须为10的倍数，最大不超过".concat(de.value),
                  icon: "none",
                });
            }
            if (0 === me.value.length)
              return void u.index.showToast({
                title: "申购数量须为10的倍数，最大不超过".concat(de.value),
                icon: "none",
              });
            e = +me.value;
          }
          I.canBookingList.some(function (t) {
            if (t.purchase_code === ke.value)
              return (t._purchaseAmount = e), !0;
          }),
            _e();
        },
        onDebtPickerClick: function (e) {
          (de.value = e.max_purchase_quantity),
            (ke.value = e.purchase_code),
            (ge.value = !0);
        },
        radioChange: function (e) {
          (ve.value = e.detail.value),
            1 == +ve.value &&
              (Be(),
              (ye = setTimeout(function () {
                Te.value = !0;
              }, 300)));
        },
        allSelectedClickHandler: function (e) {
          I.canBookingList.length &&
            (c.stat.click(
              "trade.playnew.booking.all_selected." +
                (e ? "unselect" : "seletct")
            ),
            I.canBookingList.forEach(function (t) {
              t.selected = !e;
            }));
        },
        signRiskTipDialog:
          ((xe = o(
            r().mark(function e() {
              return r().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          m.signProtocol.signNewStockBookingRisk()
                        );
                      case 3:
                        (K.value = !1), ne(), (e.next = 10);
                        break;
                      case 7:
                        (e.prev = 7),
                          (e.t0 = e.catch(0)),
                          k.Dialog({
                            message: e.t0.retmsg || "网络繁忙 请稍后重试",
                          }),
                          x("MONITOR-NEWBOOKING-SIGNRISK-FAIL", e.t0);
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
          function () {
            return xe.apply(this, arguments);
          }),
        queryBookingData: F,
        showMoreButtonClickHandler: function () {
          (q.value = !q.value),
            c.stat.click(
              "trade.playnew.booking.show_more.click." +
                (q.value ? "show" : "not_show")
            );
        },
        cancel: function (e) {
          var t = e.isAll,
            n = e.item;
          c.stat.click("trade.playnew.booking.cancel");
          var r = t
            ? "您将取消".concat(
                I.bookingCount,
                "只新股/新债的预约打新，取消后将不会自动提交打新申购，您需要手动进入新股申购进行申购"
              )
            : "您将取消".concat(
                (null == n ? void 0 : n.stock_name) || "该新股/新债",
                "的预约打新，取消后将不会自动提交打新申购，您需要手动进入新股申购进行申购"
              );
          k.Dialog({
            title: "确认取消预约",
            message: r,
            confirmButtonText: "取消预约",
            cancelButtonText: "关闭",
            showCancelButton: !0,
            messageAlign: "justify",
            onConfirm: function () {
              c.stat.click("trade.playnew.booking.cancel_dialog.confirm");
              var e = (null == n ? void 0 : n.purchase_code) || "";
              t &&
                (e = I.bookingList
                  .map(function (e) {
                    return "".concat(e.purchase_code);
                  })
                  .join()),
                ce({
                  type: p.BookingActionType.CANCEL,
                  sinfo: e,
                  allCancel: t,
                });
            },
            onCancel: function () {
              c.stat.click("trade.playnew.booking.cancel_dialog.cancel");
            },
          });
        },
        booking: ne,
        notBookingReasonTextHandler: $,
        hideRedPoint: function () {
          (I.needNotifyTimeStamp = ""),
            u.index.setStorageSync(
              v.NEWSTOCK_BOOKING_NOTIFY,
              new Date().valueOf()
            );
        },
        hideBubbleTips: function () {
          (he.value = !1),
            u.index.setStorageSync(v.NEWSTOCK_BOOKING_BUBBLE, !0);
        },
        goToDetails: function (e) {
          null == A ||
            A.$router.push({
              name: "NewStockDetails",
              query: { pucode: e.purchase_code },
            });
        },
        formatUnit: w,
        onBookingConfirm:
          ((be = o(
            r().mark(function e() {
              var t;
              return r().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (ee.value = !1),
                        c.stat.click(
                          "trade.playnew.booking.booking_dialog.confirm"
                        ),
                        (e.next = 4),
                        new Promise(function (e) {
                          var t,
                            n = [];
                          Z.value.forEach(function (e) {
                            s.defaultMarketUtils.isKcbDebt(e.purchase_code) &&
                              "1" === e.kcb_kzz_risk_tips &&
                              n.push({
                                market: e.market,
                                code: e.purchase_code,
                              });
                          }),
                            n.length
                              ? k.Dialog({
                                  title: "科创板可转债",
                                  message:
                                    "投资者参与科创板可转债应符合科创板股票投资者适当性管理要求，未开通科创板交易权限的投资者请关注并知晓不能转股可能造成的影响。",
                                  messageAlign: "left",
                                  showClose: !0,
                                  confirmButtonText: "继续预约",
                                  onConfirm:
                                    ((t = o(
                                      r().mark(function t() {
                                        return r().wrap(function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                try {
                                                  !(function () {
                                                    var e = o(
                                                      r().mark(function e(t) {
                                                        var n, a, u;
                                                        return r().wrap(
                                                          function (e) {
                                                            for (;;)
                                                              switch (
                                                                (e.prev =
                                                                  e.next)
                                                              ) {
                                                                case 0:
                                                                  if (
                                                                    ((a =
                                                                      B.useUserinfoStore()),
                                                                    "1" !==
                                                                      (null ==
                                                                      (n =
                                                                        a.userinfo)
                                                                        ? void 0
                                                                        : n.kcb_kzz_tips_broker))
                                                                  ) {
                                                                    e.next = 7;
                                                                    break;
                                                                  }
                                                                  return (
                                                                    (u = t.map(
                                                                      (function () {
                                                                        var e =
                                                                          o(
                                                                            r().mark(
                                                                              function e(
                                                                                t
                                                                              ) {
                                                                                return r().wrap(
                                                                                  function (
                                                                                    e
                                                                                  ) {
                                                                                    for (;;)
                                                                                      switch (
                                                                                        (e.prev =
                                                                                          e.next)
                                                                                      ) {
                                                                                        case 0:
                                                                                          return (
                                                                                            (e.next = 2),
                                                                                            m.signProtocol.signKcbKzz(
                                                                                              t
                                                                                            )
                                                                                          );
                                                                                        case 2:
                                                                                          X(
                                                                                            i(
                                                                                              i(
                                                                                                {},
                                                                                                t
                                                                                              ),
                                                                                              {},
                                                                                              {
                                                                                                keyName:
                                                                                                  "kcb_kzz_risk_tips",
                                                                                                value:
                                                                                                  "0",
                                                                                              }
                                                                                            )
                                                                                          );
                                                                                        case 3:
                                                                                        case "end":
                                                                                          return e.stop();
                                                                                      }
                                                                                  },
                                                                                  e
                                                                                );
                                                                              }
                                                                            )
                                                                          );
                                                                        return function (
                                                                          t
                                                                        ) {
                                                                          return e.apply(
                                                                            this,
                                                                            arguments
                                                                          );
                                                                        };
                                                                      })()
                                                                    )),
                                                                    (e.next = 5),
                                                                    Promise.allSettled(
                                                                      u
                                                                    )
                                                                  );
                                                                case 5:
                                                                  e.next = 10;
                                                                  break;
                                                                case 7:
                                                                  return (
                                                                    (e.next = 9),
                                                                    m.signProtocol.signKcbKzz(
                                                                      t[0]
                                                                    )
                                                                  );
                                                                case 9:
                                                                  t.forEach(
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      X(
                                                                        i(
                                                                          i(
                                                                            {},
                                                                            e
                                                                          ),
                                                                          {},
                                                                          {
                                                                            keyName:
                                                                              "kcb_kzz_risk_tips",
                                                                            value:
                                                                              "0",
                                                                          }
                                                                        )
                                                                      );
                                                                    }
                                                                  );
                                                                case 10:
                                                                case "end":
                                                                  return e.stop();
                                                              }
                                                          },
                                                          e
                                                        );
                                                      })
                                                    );
                                                    return function (t) {
                                                      return e.apply(
                                                        this,
                                                        arguments
                                                      );
                                                    };
                                                  })()(n);
                                                } catch (e) {
                                                } finally {
                                                  e(!0);
                                                }
                                              case 1:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t);
                                      })
                                    )),
                                    function () {
                                      return t.apply(this, arguments);
                                    }),
                                })
                              : e(!1);
                        })
                      );
                    case 4:
                      (t = Z.value
                        .map(function (e) {
                          return [
                            "".concat(e.purchase_code),
                            "".concat(e._purchaseAmount),
                          ].join("|");
                        })
                        .join()),
                        ce({ type: p.BookingActionType.BOOKING, sinfo: t });
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          function () {
            return be.apply(this, arguments);
          }),
        onBookingCancel:
          ((Ee = o(
            r().mark(function e() {
              return r().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      c.stat.click(
                        "trade.playnew.booking.booking_dialog.cancel"
                      ),
                        (ee.value = !1);
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          function () {
            return Ee.apply(this, arguments);
          }),
        stockPickerIndex: function (e) {
          return e._optionsArr.findIndex(function (t) {
            return t.value === +e._purchaseAmount;
          });
        },
        onDebtPickerClose: _e,
        solutionHanlder: function (e) {
          switch (e.purchase_status) {
            case f.EPurchaseStatus.NO_QUOTA:
              return (
                (t = e.purchase_type),
                void (
                  null == A ||
                  A.$router.push({
                    name: "NewStockTips",
                    query: { tab: t !== f.EPurchaseType.DEBT ? "0" : "1" },
                  })
                )
              );
            case f.EPurchaseStatus.NO_GEM:
              return void (
                null == A ||
                A.$router.push({
                  name: "BizGem",
                  query: { returl: A.$route.path },
                })
              );
            case f.EPurchaseStatus.NO_KCB:
              return void (
                null == A || A.$router.push({ name: "BizKeChuangOpen" })
              );
            case f.EPurchaseStatus.NO_SH:
              return void Y({ type: e.purchase_type, text: "沪市" });
            case f.EPurchaseStatus.NO_SZ:
              return void Y({ type: e.purchase_type, text: "深市" });
            case f.EPurchaseStatus.FIX_GEM:
              return void o(
                r().mark(function e() {
                  var t, n, o, a, i, u;
                  return r().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.prev = 0),
                              !(null ==
                              (n =
                                null == (t = b.brokerConfig.hall)
                                  ? void 0
                                  : t.third)
                                ? void 0
                                : n.enable) ||
                                !(null ==
                                (i =
                                  null ==
                                  (a =
                                    null == (o = b.brokerConfig.hall)
                                      ? void 0
                                      : o.third)
                                    ? void 0
                                    : a.entry)
                                  ? void 0
                                  : i.gem))
                            ) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              void (
                                null == A ||
                                A.$router.push({ name: "BizGemAuth" })
                              )
                            );
                          case 3:
                            return (e.next = 5), h.gemCgi.queryStatus(!0);
                          case 5:
                            "2" === (u = e.sent).xgem_status
                              ? k.Dialog({
                                  message:
                                    "请在交易日9:00-16:00进行创业板交易权限升级。下一交易日为".concat(
                                      u.xgem_opening_day,
                                      "。"
                                    ),
                                })
                              : null == A ||
                                A.$router.push({
                                  name: "BizGemAuth",
                                  query: {
                                    status: u.xgem_status,
                                    gemTransfer: "1",
                                  },
                                }),
                              (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              k.Dialog({ message: e.t0.retmsg });
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]]
                  );
                })
              )();
            case f.EPurchaseStatus.NO_SZ_KZZ:
            case f.EPurchaseStatus.NO_SH_KZZ:
              return void (null == A || A.$router.push({ name: "BizKzz" }));
            case f.EPurchaseStatus.NO_KCB_GROWTH:
              return void (
                null == A || A.$router.push({ name: "BizKeChuangGrowthOpen" })
              );
            default:
              return;
          }
          var t;
        },
        selectHandler: function (e, t) {
          var n = I.canBookingList.findIndex(function (t) {
            return e.purchase_code === t.purchase_code;
          });
          I.canBookingList[n].selected = !t;
        },
      }
    );
  });
