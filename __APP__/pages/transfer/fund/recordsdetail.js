require("../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../../../@babel/runtime/helpers/objectSpread2"),
  a = require("../../../@babel/runtime/helpers/toConsumableArray");
require("../../../app.js");
var n = require("../../../common/vendor.js"),
  o = require("../../../model/transfer/useFundRecords.js");
require("../../../service/sdk/lib/api.js");
var s = require("../../../service/sdk/platform/mp-weixin.js"),
  u = require("../../../stores/user/useUserinfo.js");
require("../../../service/broker.js");
var l = require("../../../config/enum/transfer.js"),
  i = require("../../../filters/money.js"),
  c = require("../../../utils/getPlatform.js"),
  f = require("../../../common/components/Dialog/index.js"),
  v = require("../../../utils/index.js"),
  d = require("../../../config/key.js"),
  T = require("../../../model/common/useBack.js"),
  _ = require("../../../utils/findPage.js"),
  m = require("../../../stores/actconfig/useActconfig.js"),
  p = require("../../../service/actTemps.js"),
  S = require("../../../model/common/useServerTime.js"),
  R = require("../../../config/enum.js"),
  g = require("../../../cgi/debt.js"),
  x = require("../../../model/index/useReportAssetData.js"),
  h = require("../../../config/bank.js"),
  E = require("../../../service/aegis/platform/not-wujie.js"),
  b = require("../../../model/trade/useSplitMode.js"),
  D = require("../../../stores/app/useNavbar.js"),
  A = require("../../../components/MilestoneDialog/constants.js"),
  C = require("../../../utils/time.js"),
  U = require("../../../mixin/platforms/index.js"),
  N = require("../../../service/aegis/utils.js"),
  k = require("../../../config/broker/11100/index.js"),
  y = {
    mixins: [U.pluginMixins],
    components: {
      Loading: function () {
        return "../../../common/components/Loading/index.js";
      },
      MpDialog: function () {
        return "../../../common/components/Dialog/Dialog.js";
      },
      TransferProgress: function () {
        return "../../../components/TransferProgress/TransferProgress.js";
      },
      MilestoneDialog: function () {
        return "../../../components/MilestoneDialog/index.js";
      },
    },
    setup: function () {
      var U,
        y,
        F,
        I,
        O,
        M = "继续交易",
        j = "查看激活指引",
        w = "更新身份证",
        q = "返回活动",
        L = "交易通用回购深市一天期",
        P = "交易通用回购沪市一天期",
        Y = "重试",
        B = "查看资产",
        H = "我知道了",
        $ =
          (null ==
          (y =
            null == (U = Object.keys(h.BANKS))
              ? void 0
              : U.map(function (e) {
                  return {
                    name: h.BANKS[e].name,
                    code: h.BANKS[e].code,
                    tel: h.BANKS[e].tel,
                  };
                }))
            ? void 0
            : y.filter(function (e, t, r) {
                return (
                  t ===
                  r.findIndex(function (t) {
                    return t.code === e.code;
                  })
                );
              })) || [],
        K = n.getCurrentInstance().proxy,
        W = u.useUserinfoStore(),
        X = n.ref(!1),
        G = o.useFundRecords(),
        J = G.queryTransferList,
        V = G.cancel,
        z = n.ref({}),
        Q = n.ref(""),
        Z = n.ref(!1),
        ee = n.ref(""),
        te = n.ref(0),
        re = n.ref([]),
        ae = n.ref(!1),
        ne = n.ref({}),
        oe = n.ref(!0),
        se = n.ref(!1),
        ue = n.ref(!1),
        le = n.ref(!1),
        ie = n.ref(!1),
        ce = n.ref(!1),
        fe = n.ref("UNKNOWN"),
        ve = c.getPlatform().isZxg,
        de = n.computed(function () {
          return se.value && le.value && !ve;
        }),
        Te = m.useActConfigStore(),
        _e = n.storeToRefs(Te).actRechargeID,
        me = Te.setActRechargeID,
        pe = W.getUserInfo,
        Se = n.ref(""),
        Re = n.ref(""),
        ge = n.ref(""),
        xe = n.ref(""),
        he = "charging",
        Ee = "drawing",
        be = n.ref(""),
        De = n.ref(!1),
        Ae = n.ref({}),
        Ce = n.ref(!1),
        Ue = n.ref(!0),
        Ne = n.ref("YYYY-MM-DD HH:mm:ss"),
        ke = n.ref(!0),
        ye = n.ref(""),
        Fe = n.ref(""),
        Ie = n.ref(!1),
        Oe = n.ref([]),
        Me = n.ref({}),
        je = n.storeToRefs(D.useNavbarStore()).externalNavBar4Mp,
        we = n.ref(null),
        qe = n.computed(function () {
          return ie.value && xe.value === l.TRANSFER_RESULT.SUCCESS
            ? [A.ExciteType.FIRST_DEPOSIT]
            : [];
        }),
        Le = n.computed(function () {
          var e;
          return (
            ie.value &&
            Ce.value &&
            String(null == (e = z.value) ? void 0 : e.transfer_total_state) ===
              l.FUNDS_RECORDS_STATUS.SUC &&
            Pe.value
          );
        }),
        Pe = n.ref(!1),
        Ye = n.ref(-1),
        Be = n.computed(function () {
          var e;
          return (
            (null == (e = null == W ? void 0 : W.userinfo)
              ? void 0
              : e.fundaccount) || ""
          );
        }),
        He = k.brokerConfig.base.name || "",
        $e = T.usePersonal().toAsset,
        Ke = b.useSplitMode().splitModeQuery;
      function We(e) {
        try {
          var t = "";
          tt(e) ? (t = "转入记录") : rt(e) && (t = "转出记录"),
            t && s.sdk.setPageTitle({ title: t });
        } catch (e) {}
      }
      function Xe(e) {
        return i.formatNoUnit(Math.abs(e));
      }
      function Ge(e, t) {
        var r = { serialNumber: Oe.value.length + 1 };
        return (
          [
            "value",
            "pre_contract_no",
            "transferred_time",
            "state",
            "contract_no",
            "ext_errmsg",
            "finish_time",
          ].forEach(function (a) {
            r[a] = e["".concat(t, "_").concat(a)] || "";
          }),
          (r.feTransferTime =
            r.finish_time || r.transferred_time
              ? n
                  .dayjs(1e3 * (r.finish_time || r.transferred_time))
                  .format(Ne.value)
              : ""),
          (r.feContractNo = r.contract_no || r.pre_contract_no || ""),
          r
        );
      }
      function Je(e) {
        return void 0 === e || ["0", "+0.00", "-0.00", "0.00"].includes(e);
      }
      function Ve(e) {
        var t, o;
        if (n.isEmpty(e))
          return (re.value = []), (te.value = 0), (ae.value = !1), {};
        We(e.transfer_type);
        var s = !rt(e.transfer_type);
        if (
          ((Q.value = s ? "转入" : "转出"),
          (ie.value = s),
          be.value || (be.value = s ? he : Ee),
          e.transfer_time &&
            (null == (o = null == (t = k.brokerConfig) ? void 0 : t.transfer)
              ? void 0
              : o.transferNewVersionDate) &&
            ((Ue.value = !n
              .dayjs(1e3 * e.transfer_time)
              .isBefore(k.brokerConfig.transfer.transferNewVersionDate)),
            Ue.value || (Ne.value = "YYYY-MM-DD")),
          (ye.value = ""),
          e.bank_code && ke.value)
        ) {
          var u = $.find(function (t) {
            return t.code === e.bank_code;
          });
          u && u.tel
            ? ((ke.value = !0), (ye.value = u.tel))
            : ((ke.value = !1),
              E.aegisReporter.reportEvent("RECORDS-DETAIL-UNMATCH-BANK-CODE", {
                ext2: e.bank_code,
              }));
        } else ke.value = !1;
        (e.feTransferMoney =
          void 0 !== e.transfer_total_value
            ? Xe(e.transfer_total_value)
            : "--"),
          (Ce.value = Je(e.second_value) && Je(e.third_value)),
          (Oe.value = []),
          Je(e.first_value) || Oe.value.push(Ge(e, "first")),
          Je(e.second_value) || Oe.value.push(Ge(e, "second")),
          Je(e.third_value) || Oe.value.push(Ge(e, "third"));
        var i = [],
          c = e.bank_name || "银行";
        e.card_num && (c = "".concat(c, "(").concat(e.card_num, ")")),
          i.push({
            title: Ce.value ? "实时转账" : "预约转账",
            resultIndex: -1,
            items: [
              {
                leftText: "从",
                rightText: s
                  ? c
                  : ""
                      .concat(He)
                      .concat(Be.value ? "(".concat(Be.value, ")") : ""),
              },
              {
                leftText: "".concat(Q.value, "至"),
                rightText: s
                  ? ""
                      .concat(He)
                      .concat(Be.value ? "(".concat(Be.value, ")") : "")
                  : c,
              },
              {
                leftText: "".concat(Q.value, "金额"),
                rightText: "¥ ".concat(
                  void 0 !== e.transfer_total_value
                    ? Xe(e.transfer_total_value)
                    : "--"
                ),
              },
              {
                leftText: "".concat(Q.value, "时间"),
                rightText: "".concat(
                  e.transfer_time
                    ? n.dayjs(1e3 * e.transfer_time).format(Ne.value)
                    : ""
                ),
              },
            ],
          }),
          (re.value = [
            {
              state: s ? "in" : "out",
              text: "".concat(Q.value, "资金"),
              date: e.transfer_time
                ? n.dayjs(1e3 * e.transfer_time).format("YYYY-MM-DD")
                : "",
              time:
                e.transfer_time && Ue.value
                  ? n.dayjs(1e3 * e.transfer_time).format("HH:mm:ss")
                  : "",
            },
          ]);
        var f = (function (e) {
          var t = [];
          return (
            e.forEach(function (e, r) {
              var a = [];
              switch (e.state) {
                case l.FUNDS_RECORDS_STATUS.SUC:
                  a = (function (e) {
                    var t = [
                      {
                        leftText: "状态",
                        rightText: "".concat(Q.value, "成功"),
                        rightClass: "suc",
                      },
                      {
                        leftText: "金额",
                        rightText: "¥ ".concat(
                          void 0 !== e.value ? Xe(e.value) : "--"
                        ),
                      },
                      {
                        leftText: "完成时间",
                        rightText: e.feTransferTime || "",
                      },
                    ];
                    return (
                      e.feContractNo &&
                        t.push({
                          leftText: "流水号",
                          rightText: e.feContractNo || "",
                        }),
                      t
                    );
                  })(e);
                  break;
                case l.FUNDS_RECORDS_STATUS.TIMEOUT:
                case l.FUNDS_RECORDS_STATUS.ONWAY:
                  a = (function (e) {
                    var t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                      r = [
                        { leftText: "状态", rightText: "在途" },
                        {
                          leftText: "金额",
                          rightText: "¥ ".concat(
                            void 0 !== e.value ? Xe(e.value) : "--"
                          ),
                        },
                      ];
                    return (
                      Ce.value ||
                        r.push({
                          leftText: "预计到账时间",
                          rightText: e.feTransferTime
                            ? "".concat(
                                n
                                  .dayjs(e.feTransferTime)
                                  .format("YYYY-MM-DD HH:mm"),
                                "前"
                              )
                            : "",
                        }),
                      !t &&
                        e.pre_contract_no &&
                        r.splice(
                          1,
                          0,
                          t
                            ? null
                            : {
                                leftText: "",
                                rightText: "取消".concat(Q.value),
                                rightClass: "click-btn normal",
                                isShowCancelTransfer: !0,
                                contract_no: e.contract_no || "",
                                pre_contract_no: e.pre_contract_no || "",
                              }
                        ),
                      r
                    );
                  })(e);
                  break;
                case l.FUNDS_RECORDS_STATUS.CANCEL:
                  a = (function (e) {
                    return [
                      {
                        leftText: "状态",
                        rightText: "已取消",
                        rightClass: "cancel",
                      },
                      {
                        leftText: "金额",
                        rightText: "¥ ".concat(
                          void 0 !== e.value ? Xe(e.value) : "--"
                        ),
                      },
                      {
                        leftText: "取消时间",
                        rightText: e.feTransferTime || "",
                      },
                    ];
                  })(e);
                  break;
                case l.FUNDS_RECORDS_STATUS.FAIL:
                  a = (function (e) {
                    var t,
                      r,
                      a,
                      n =
                        (null == (t = e.ext_errmsg)
                          ? void 0
                          : t.includes("券商提示：")) || !1,
                      o = n
                        ? null == (r = e.ext_errmsg)
                          ? void 0
                          : r.replace("券商提示：", "")
                        : null == (a = e.ext_errmsg)
                        ? void 0
                        : a.replace("银行提示：", "");
                    Fe.value = n ? k.brokerConfig.base.tel : "";
                    var s = [
                      {
                        leftText: "状态",
                        rightText: "".concat(Q.value, "失败"),
                        rightClass: "fail",
                      },
                      {
                        leftText: "",
                        rightText: o || "",
                        rightClass: o ? "normal fail-msg" : "contact",
                      },
                      {
                        leftText: "",
                        rightText: ke.value
                          ? "详细信息可联系".concat(
                              n ? "券商" : "银行",
                              "客服:"
                            )
                          : "",
                        rightClass: "normal contact",
                        contactCustomer: ke.value,
                        tel: n ? Fe.value : ye.value,
                      },
                      {
                        leftText: "金额",
                        rightText: "¥ ".concat(
                          void 0 !== e.value ? Xe(e.value) : "--"
                        ),
                      },
                      {
                        leftText: "更新时间",
                        rightText: e.feTransferTime || "",
                      },
                    ];
                    return (
                      e.feContractNo &&
                        s.push({
                          leftText: "流水号",
                          rightText: e.feContractNo || "",
                        }),
                      s
                    );
                  })(e);
              }
              t.push({
                title: "第".concat(r + 1, "笔资金"),
                items: a,
                resultIndex: r,
              });
            }),
            t
          );
        })(Oe.value);
        if (
          (f.length > 0 &&
            (1 === f.length && (f[0].title = "转账结果"),
            i.push.apply(i, a(f))),
          Ce.value)
        ) {
          var v = e.transfer_total_state === l.FUNDS_RECORDS_STATUS.ONWAY,
            d = e.transfer_total_state === l.FUNDS_RECORDS_STATUS.FAIL,
            T = "success";
          v ? (T = "pending") : d && (T = "fail");
          var _ = e.first_finish_time || e.first_transferred_time || "";
          re.value.push({
            state: T,
            text: "".concat(Q.value).concat(d ? "失败" : "成功"),
            date: !v && _ ? n.dayjs(1e3 * _).format("YYYY-MM-DD") : "",
            time:
              !v && _ && Ue.value ? n.dayjs(1e3 * _).format("HH:mm:ss") : "",
          }),
            (te.value = 1),
            (ae.value = v);
        } else if (Oe.value.length > 0) {
          var m;
          (m = re.value).push.apply(
            m,
            a(
              (function (e) {
                var t = [],
                  r = 1;
                return (
                  (ae.value = !1),
                  e.forEach(function (a, o) {
                    var s,
                      u = "",
                      i = !1;
                    switch (a.state) {
                      case l.FUNDS_RECORDS_STATUS.SUC:
                        (s = "success"),
                          (r = Math.min(o + 2, e.length)),
                          (u =
                            l.FUNDS_RECORDS_STATUS_TEXT[
                              l.FUNDS_RECORDS_STATUS.SUC
                            ]),
                          (ae.value = !1);
                        break;
                      case l.FUNDS_RECORDS_STATUS.FAIL:
                        (r = Math.min(o + 2, e.length)),
                          (u =
                            l.FUNDS_RECORDS_STATUS_TEXT[
                              l.FUNDS_RECORDS_STATUS.FAIL
                            ]),
                          (ae.value = !1),
                          (s = "fail");
                        break;
                      case l.FUNDS_RECORDS_STATUS.CANCEL:
                        (r = Math.min(o + 2, e.length)),
                          (u =
                            l.FUNDS_RECORDS_STATUS_TEXT[
                              l.FUNDS_RECORDS_STATUS.CANCEL
                            ]),
                          (ae.value = !1),
                          (s = "cancel");
                        break;
                      default:
                        (s = "pending"),
                          (ae.value = !0),
                          (i = !0),
                          (u =
                            l.FUNDS_RECORDS_STATUS_TEXT[
                              l.FUNDS_RECORDS_STATUS.SUC
                            ]);
                    }
                    var c = i ? "HH:mm" : "HH:mm:ss";
                    t.push({
                      state: s,
                      text: ""
                        .concat(
                          1 === e.length
                            ? "".concat(Q.value)
                            : "第".concat(o + 1, "笔")
                        )
                        .concat(u),
                      date: a.feTransferTime
                        ? n.dayjs(a.feTransferTime).format("YYYY-MM-DD")
                        : "",
                      time:
                        a.feTransferTime && Ue.value
                          ? ""
                              .concat(n.dayjs(a.feTransferTime).format(c))
                              .concat(i ? "前" : "")
                          : "",
                    });
                  }),
                  (te.value = r),
                  t
                );
              })(Oe.value)
            )
          );
          var p = Oe.value
            .filter(function (e) {
              return [
                l.FUNDS_RECORDS_STATUS.TIMEOUT,
                l.FUNDS_RECORDS_STATUS.ONWAY,
              ].includes(e.state);
            })
            .sort(function (e, t) {
              return n.dayjs(e.feTransferTime).diff(n.dayjs(t.feTransferTime));
            });
          if (p.length > 0) {
            var S = p[0];
            (Me.value = r({}, S)),
              (Me.value.feTransferTime = n
                .dayjs(S.feTransferTime)
                .format("YYYY-MM-DD HH:mm"));
          }
          Ie.value = rt(e.transfer_type) && p.length > 0;
        }
        z.value = r(r({}, e), {}, { viewList: i });
      }
      function ze() {
        return Qe.apply(this, arguments);
      }
      function Qe() {
        return (Qe = t(
          e().mark(function t() {
            var r, a;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        J({ dealNo: ee.value, page_str: "" })
                      );
                    case 3:
                      (a = e.sent),
                        (null == (r = null == a ? void 0 : a.data)
                          ? void 0
                          : r[0]) && Ve(a.data[0]),
                        (e.next = 10);
                      break;
                    case 7:
                      (e.prev = 7), (e.t0 = e.catch(0)), (z.value = {});
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
        )).apply(this, arguments);
      }
      function Ze() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return "TRADE.TRANSFER"
          .concat(fe.value, "RESULT.")
          .concat(t.filter(Boolean).map(n.upperCase).join("_"));
      }
      function et() {
        var e = (function () {
          var e = K.$route.query;
          return r(
            {
              code: e.code,
              market: e.market,
              name: decodeURIComponent(e.name || ""),
              holder: e.holder || "",
              price: e.trade_price,
              amount: e.trade_amount,
            },
            Ke.value
          );
        })();
        (function (e) {
          var t = _.findPage(e),
            r = t.index,
            a = t.length;
          return r >= 0 && (K.$router.back({ delta: a - r - 1 }), !0);
        })(
          de.value
            ? "pages/quote/quote"
            : ue.value
            ? "pages/trade/debt"
            : "pages/trade/stock"
        ) ||
          (K.$router.push({
            name: ue.value ? "TradeDebt" : "TradeStock",
            query: e,
          }),
          N.reportEventSafely("transfer_to_newtrade"));
      }
      function tt(e) {
        return [l.TRANSFER_TYPE.RECHARGE, "charge"].includes(e);
      }
      function rt(e) {
        return [l.TRANSFER_TYPE.WITHDRAW, "draw"].includes(e);
      }
      function at(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          x.useReportAssetDataV3(ge.value),
            K.$stat.click(
              e,
              "",
              "",
              r(
                { status: xe.value || l.TRANSFER_RESULT.EMPTY, type: be.value },
                t
              )
            );
        } catch (e) {}
      }
      function nt() {
        return ot.apply(this, arguments);
      }
      function ot() {
        return (ot = t(
          e().mark(function r() {
            var a,
              o,
              s,
              u,
              i,
              c,
              f,
              v,
              d,
              T,
              _,
              m,
              p,
              x,
              h,
              E,
              b,
              D,
              A,
              C,
              U,
              N,
              y,
              F,
              I;
            return e().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    if (
                      ((a = K.$route.query),
                      (o = a.status),
                      (s = void 0 === o ? "" : o),
                      (u = a.code),
                      (i = void 0 === u ? "" : u),
                      (c = a.market),
                      (f = void 0 === c ? "" : c),
                      (v = a.reason),
                      (d = void 0 === v ? "" : v),
                      (T = a.from_msg),
                      (_ = void 0 === T ? "" : T),
                      (m = a.from),
                      (p = void 0 === m ? "" : m),
                      (x = a.fromEmbedded),
                      (h = void 0 === x ? "" : x),
                      (E = a.type),
                      (b = void 0 === E ? "" : E),
                      (D = a.name),
                      (A = void 0 === D ? "" : D),
                      (C = a.transfer_type),
                      (U = void 0 === C ? "" : C),
                      (N = a.amount),
                      (y = void 0 === N ? "" : N),
                      s)
                    ) {
                      r.next = 3;
                      break;
                    }
                    return r.abrupt(
                      "return",
                      ((Se.value = ""),
                      (ge.value = ""),
                      (De.value = !1),
                      void (Pe.value = !1))
                    );
                  case 3:
                    (Pe.value = !0),
                      (ke.value = !0),
                      (xe.value = s),
                      (F = _ || p || ""),
                      (I = d ? decodeURIComponent(d) : ""),
                      (r.t0 =
                        ((ie.value = tt(U) || tt(b)),
                        (ce.value = rt(U) || rt(b)),
                        (se.value =
                          "trade" === F || ("" !== i && "" !== A && "" !== f)),
                        (ue.value = "debt" === F && "" !== i && "" !== f),
                        (le.value = "true" === h),
                        (ge.value = n.__CJS__export_fen2yuan__(y || 0)),
                        ie.value
                          ? (fe.value = "IN")
                          : ce.value && (fe.value = "OUT"),
                        b
                          ? (be.value = b)
                          : ie.value
                          ? (be.value = he)
                          : ce.value && (be.value = Ee),
                        ("charge" !== b && "draw" !== b) ||
                          (xe.value =
                            "" === d
                              ? l.TRANSFER_RESULT.SUCCESS
                              : "身份证已过有效期或个人信息不完整" === I
                              ? l.TRANSFER_RESULT.IDEXPIRED
                              : l.TRANSFER_RESULT.FAIL),
                        me(),
                        xe.value)),
                      (r.next =
                        r.t0 === l.TRANSFER_RESULT.SUCCESS
                          ? 8
                          : r.t0 === l.TRANSFER_RESULT.FAIL ||
                            r.t0 === l.TRANSFER_RESULT.ERROR
                          ? 28
                          : r.t0 === l.TRANSFER_RESULT.IDEXPIRED
                          ? 30
                          : r.t0 === l.TRANSFER_RESULT.DEADLINE
                          ? 32
                          : r.t0 === l.TRANSFER_RESULT.TIMEOUT ||
                            r.t0 === l.TRANSFER_RESULT.SCHEDULED
                          ? 34
                          : 35);
                    break;
                  case 8:
                    if (!ie.value) {
                      r.next = 26;
                      break;
                    }
                    if (!se.value && !ue.value) {
                      r.next = 13;
                      break;
                    }
                    (Se.value = M),
                      (Re.value = Ze(
                        "SUCCESS",
                        "TRADECONTINUE",
                        se.value ? "FROMTRADE" : "FROMDEBT"
                      )),
                      (r.next = 24);
                    break;
                  case 13:
                    if (!+_e.value) {
                      r.next = 17;
                      break;
                    }
                    (Se.value = q),
                      at("trade.transfer.act_btn_brow"),
                      (r.next = 24);
                    break;
                  case 17:
                    return (
                      (r.next = 19),
                      t(
                        e().mark(function t() {
                          var r, a, n, o, s, u, l, i, c, f, v, d, T, _, m, p, x;
                          return e().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      ((e.prev = 0),
                                      [10800, 10100, 15900].includes(
                                        null ==
                                          (a =
                                            null == (r = k.brokerConfig)
                                              ? void 0
                                              : r.base)
                                          ? void 0
                                          : a.code
                                      ))
                                    ) {
                                      e.next = 3;
                                      break;
                                    }
                                    return e.abrupt("return", !1);
                                  case 3:
                                    if (!(parseInt(ge.value, 10) < 1e3)) {
                                      e.next = 5;
                                      break;
                                    }
                                    return e.abrupt("return", !1);
                                  case 5:
                                    return (
                                      (n = S.useServerTime()),
                                      (o = n.checkTransferTime),
                                      (e.next = 9),
                                      o()
                                    );
                                  case 9:
                                    if (
                                      ((s = e.sent), (u = s.date), s.isTradeDay)
                                    ) {
                                      e.next = 14;
                                      break;
                                    }
                                    return e.abrupt("return", !1);
                                  case 14:
                                    if (
                                      ((l = new Date(u)),
                                      (i = l.getHours()),
                                      (c = l.getMinutes()),
                                      15 === i && c >= 0 && c <= 29)
                                    ) {
                                      e.next = 17;
                                      break;
                                    }
                                    return e.abrupt("return", !1);
                                  case 17:
                                    return (e.next = 19), pe();
                                  case 19:
                                    return (
                                      (f = e.sent),
                                      (v = f.shareholdercards),
                                      (T =
                                        (d = void 0 === v ? [] : v).findIndex(
                                          function (e) {
                                            return e.market === R.MARKET.HA;
                                          }
                                        ) > -1),
                                      (_ =
                                        d.findIndex(function (e) {
                                          return e.market === R.MARKET.SA;
                                        }) > -1),
                                      (De.value = !T && _),
                                      (e.next = 27),
                                      g.debtApi.qryRepoinfo({
                                        market: De.value
                                          ? R.MARKET.SA
                                          : R.MARKET.HA,
                                      })
                                    );
                                  case 27:
                                    return (
                                      (m = e.sent),
                                      (p = m.stock),
                                      (x = void 0 === p ? [] : p),
                                      e.abrupt(
                                        "return",
                                        !!x[0] && ((Ae.value = x[0]), !0)
                                      )
                                    );
                                  case 33:
                                    return (
                                      (e.prev = 33),
                                      (e.t0 = e.catch(0)),
                                      e.abrupt("return", !1)
                                    );
                                  case 36:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            t,
                            null,
                            [[0, 33]]
                          );
                        })
                      )()
                    );
                  case 19:
                    if (!r.sent) {
                      r.next = 23;
                      break;
                    }
                    (Se.value = De.value ? L : P),
                      at("trade.transfer.debt_btn_brow", { issa: +De.value }),
                      (r.next = 24);
                    break;
                  case 23:
                    (Se.value = B), at("trade.transfer.succdefault_btn_brow");
                  case 24:
                    r.next = 27;
                    break;
                  case 26:
                    ce.value &&
                      ((Se.value = B),
                      at("trade.transfer.succdefault_btn_brow"));
                  case 27:
                    return r.abrupt("break", 35);
                  case 28:
                    return (
                      "资金安全卡未激活" === I
                        ? ((Se.value = j),
                          (Re.value = Ze("ERROR", "NEEDACTIVE")))
                        : de.value &&
                          ie.value &&
                          ((Se.value = M),
                          (Re.value = Ze(
                            xe.value !== l.TRANSFER_RESULT.FAIL
                              ? "ERROR"
                              : "FAIL",
                            "TRADECONTINUE",
                            "FROMTRADE"
                          ))),
                      r.abrupt("break", 35)
                    );
                  case 30:
                    return (
                      (Se.value = w),
                      (Re.value = Ze("IDEXPIRED", "NEEDUPDATEID")),
                      r.abrupt("break", 35)
                    );
                  case 32:
                    return (
                      (Se.value = Y),
                      (Re.value = Ze("DEADLINE", "BACKTRANSFER")),
                      (ke.value = !1),
                      r.abrupt("break", 35)
                    );
                  case 34:
                    de.value && ie.value
                      ? ((Se.value = M),
                        (Re.value = Ze(
                          xe.value === l.TRANSFER_RESULT.TIMEOUT
                            ? "TIMEOUT"
                            : "SCHEDULED",
                          "TRADECONTINUE",
                          "FROMTRADE"
                        )))
                      : ((Se.value = H),
                        at("trade.transfer.scheduled_btn_brow"));
                  case 35:
                  case "end":
                    return r.stop();
                }
            }, r);
          })
        )).apply(this, arguments);
      }
      return {
        dealNo: ee,
        brokerName: He,
        bankTel: ye,
        fundaccount: Be,
        transferData: z,
        recentlyPendingTransferInfo: Me,
        isShowFeTransferOutTips: Ie,
        hasLoaded: X,
        transferText: Q,
        currentProgress: te,
        progressState: re,
        feTransferList: Oe,
        showBtn: oe,
        showProgressText: ae,
        FUNDS_RECORDS_STATUS: l.FUNDS_RECORDS_STATUS,
        setPageTitle: We,
        queryTransferInfo: ze,
        cancelTransfer:
          ((O = t(
            e().mark(function r(a) {
              return e().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      at(
                        "trade.transfer_fund_records_detail.cancal_transfer_btn_click"
                      ),
                        !Z.value &&
                          a &&
                          f.Dialog({
                            context: K,
                            message: "是否取消此笔资金".concat(Q.value, "？"),
                            showCancelButton: !0,
                            cancelButtonText: "否",
                            confirmButtonText: "是",
                            onCancel: function () {
                              (Z.value = !1),
                                at(
                                  "trade.transfer_fund_records_detail.cancal_transfer_popup_cancel"
                                );
                            },
                            onConfirm: (function () {
                              var r = t(
                                e().mark(function t() {
                                  var r;
                                  return e().wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              at(
                                                "trade.transfer_fund_records_detail.cancal_transfer_popup_confirm"
                                              ),
                                              (e.prev = 1),
                                              (Z.value = !0),
                                              (e.next = 5),
                                              V({
                                                type: z.value.transfer_type,
                                                contract_no: a,
                                                pretran_date:
                                                  C.formatUnixTimeInEast8(
                                                    z.value.transfer_time,
                                                    "YYYYMMDD"
                                                  ),
                                              })
                                            );
                                          case 5:
                                            if (
                                              ((r = e.sent),
                                              n.index.showToast({
                                                title: "已取消".concat(Q.value),
                                                icon: "none",
                                              }),
                                              n.index.setStorageSync(
                                                d.FUND_RECORD_DETAIL_CANCE_ORDER,
                                                "1"
                                              ),
                                              !ee.value)
                                            ) {
                                              e.next = 15;
                                              break;
                                            }
                                            return (e.next = 11), v.sleep(300);
                                          case 11:
                                            return (e.next = 13), ze();
                                          case 13:
                                            e.next = 16;
                                            break;
                                          case 15:
                                            !(function (e, t) {
                                              var r = t.timeStamp,
                                                a = void 0 === r ? "" : r;
                                              [
                                                "first",
                                                "second",
                                                "third",
                                              ].forEach(function (t) {
                                                [
                                                  ne.value[
                                                    "".concat(t, "_contract_no")
                                                  ],
                                                  ne.value[
                                                    "".concat(
                                                      t,
                                                      "_pre_contract_no"
                                                    )
                                                  ],
                                                ].includes(e) &&
                                                  ((ne.value[
                                                    "".concat(
                                                      t,
                                                      "_transferred_time"
                                                    )
                                                  ] = a),
                                                  (ne.value[
                                                    "".concat(t, "_finish_time")
                                                  ] = a),
                                                  (ne.value[
                                                    "".concat(t, "_state")
                                                  ] =
                                                    l.FUNDS_RECORDS_STATUS.CANCEL));
                                              }),
                                                (Ce.value =
                                                  Je(ne.value.second_value) &&
                                                  Je(ne.value.third_value)),
                                                Ce.value &&
                                                  (ne.value.transfer_total_state =
                                                    l.FUNDS_RECORDS_STATUS.CANCEL),
                                                Ve(ne.value);
                                            })(a, r);
                                          case 16:
                                            e.next = 21;
                                            break;
                                          case 18:
                                            (e.prev = 18),
                                              (e.t0 = e.catch(1)),
                                              f.Dialog({
                                                context: K,
                                                message:
                                                  (null == e.t0
                                                    ? void 0
                                                    : e.t0.retmsg) ||
                                                  "网络繁忙 请稍后再试",
                                              });
                                          case 21:
                                            return (
                                              (e.prev = 21),
                                              (Z.value = !1),
                                              e.finish(21)
                                            );
                                          case 24:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    t,
                                    null,
                                    [[1, 18, 21, 24]]
                                  );
                                })
                              );
                              return function () {
                                return r.apply(this, arguments);
                              };
                            })(),
                          });
                    case 1:
                    case "end":
                      return r.stop();
                  }
              }, r);
            })
          )),
          function (e) {
            return O.apply(this, arguments);
          }),
        contactCustomer: function (e) {
          at("trade.transfer_fund_records_detail.customer_btn_click"),
            e && K.$sdk.makePhoneCall("".concat(e).replace(/-/g, ""));
        },
        bottomBtnText: Se,
        handleBottomBtnClick:
          ((I = t(
            e().mark(function t() {
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!Re.value) {
                          e.next = 9;
                          break;
                        }
                        return (
                          (e.prev = 1), at(Re.value), (e.next = 5), v.sleep(200)
                        );
                      case 5:
                        e.next = 9;
                        break;
                      case 7:
                        (e.prev = 7), (e.t0 = e.catch(1));
                      case 9:
                        (e.t1 = Se.value),
                          (e.next =
                            e.t1 === M
                              ? 12
                              : e.t1 === j
                              ? 14
                              : e.t1 === w
                              ? 16
                              : e.t1 === q
                              ? 18
                              : e.t1 === P || e.t1 === L
                              ? 20
                              : e.t1 === Y
                              ? 22
                              : e.t1 === H || e.t1 === B
                              ? 24
                              : 25);
                        break;
                      case 12:
                        return et(), e.abrupt("break", 25);
                      case 14:
                        return (
                          K.$router.push({ name: "GuideCommon" }),
                          e.abrupt("break", 25)
                        );
                      case 16:
                        return (
                          K.$router.push({ name: "BizIdUpdate" }),
                          e.abrupt("break", 25)
                        );
                      case 18:
                        return (
                          at("trade.transfer.act_btn_click"),
                          p.toActPage(),
                          e.abrupt("break", 25)
                        );
                      case 20:
                        return (
                          (function () {
                            var e;
                            at("trade.transfer.debt_btn_click", {
                              fchannel_id_fm_i: "Itw00p000t014",
                              issa: De.value,
                            });
                            var t = De.value ? R.MARKET.SA : R.MARKET.HA,
                              r =
                                (null == (e = Ae.value) ? void 0 : e.code) ||
                                (De.value ? "131810" : "204001"),
                              a = n.__CJS__export_mul__(
                                Math.floor(
                                  n.__CJS__export_div__(+ge.value, 1e3, 3)
                                ),
                                1e3
                              );
                            K.$router.push({
                              name: "TradeDebt",
                              query: { code: r, market: t, amount: a },
                            });
                          })(),
                          e.abrupt("break", 25)
                        );
                      case 22:
                        return (
                          (function () {
                            var e,
                              t,
                              a,
                              o = "pages/transfer/fund",
                              s = _.findPage(o),
                              u = s.index,
                              l = s.detail,
                              i = s.length,
                              f = c.getPlatform().isMiniProgram,
                              v = {
                                type: ie.value ? "in" : "out",
                                money: ge.value,
                              };
                            u >= 0
                              ? ((null == (e = null == l ? void 0 : l.$page)
                                  ? void 0
                                  : e.fullPath) &&
                                  (l.$page.fullPath = "/"
                                    .concat(o, "?")
                                    .concat(n.lib.stringify(v))),
                                (null ==
                                (a =
                                  null == (t = null == l ? void 0 : l.$vm)
                                    ? void 0
                                    : t.__page__)
                                  ? void 0
                                  : a.options) && (l.$vm.__page__.options = v),
                                f &&
                                  ((null == l ? void 0 : l.options)
                                    ? (l.options = r(r({}, l.options), v))
                                    : (l.options = v)),
                                K.$router.back({ delta: i - u - 1 }))
                              : K.$router.replace({
                                  name: "TransferFund",
                                  query: v,
                                });
                          })(),
                          e.abrupt("break", 25)
                        );
                      case 24:
                        $e(), at("trade.transfer.backAsset");
                      case 25:
                      case "end":
                        return e.stop();
                    }
                },
                t,
                null,
                [[1, 7]]
              );
            })
          )),
          function () {
            return I.apply(this, arguments);
          }),
        init:
          ((F = t(
            e().mark(function t() {
              var r, a, n, o, s, u, l, i;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (r = K.$route.query),
                        (a = r.dealNo),
                        (n = void 0 === a ? "" : a),
                        (o = r.transfer_type),
                        (s = void 0 === o ? "" : o),
                        (u = r.transfer_info),
                        (l = void 0 === u ? "" : u),
                        We(s),
                        (Ye.value = -1);
                      try {
                        nt();
                      } catch (e) {}
                      if (!n) {
                        e.next = 9;
                        break;
                      }
                      return (ee.value = n), (e.next = 7), ze();
                    case 7:
                      e.next = 10;
                      break;
                    case 9:
                      l &&
                        ((i = JSON.parse(decodeURIComponent(l))),
                        (ne.value = i),
                        Ve(i));
                    case 10:
                      at("trade.transfer.data"), (X.value = !0);
                    case 11:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          )),
          function () {
            return F.apply(this, arguments);
          }),
        externalNavBar4Mp: je,
        milestoneAllowTypes: qe,
        milestoneDialogRef: we,
        enableProgressAnimation: Le,
        onProgressNodeComplete: function (e) {
          var t, r;
          (Ye.value = e.nodeIndex - 1),
            e.isLast &&
              ie.value &&
              Ce.value &&
              String(
                null == (t = z.value) ? void 0 : t.transfer_total_state
              ) === l.FUNDS_RECORDS_STATUS.SUC &&
              (null == (r = we.value) || r.fetchExciteInfo());
        },
        completedResultIndex: Ye,
        isFromTransferFlow: Pe,
        isOem: !1,
      };
    },
    onShow: function () {
      this.init();
    },
  };
Array ||
  (
    n.resolveComponent("TransferProgress") +
    n.resolveComponent("Empty") +
    n.resolveComponent("Loading") +
    n.resolveComponent("mp-dialog") +
    n.resolveComponent("MilestoneDialog") +
    n.resolveComponent("GlobalWrap")
  )(),
  Math ||
    (
      function () {
        return "../../../components/TransferProgress/TransferProgress.js";
      } +
      function () {
        return "../../../components/Empty/Empty.js";
      } +
      function () {
        return "../../../components/GlobalWrap/GlobalWrap.js";
      }
    )();
var F = n._export_sfc(y, [
  [
    "render",
    function (e, t, r, a, o, s) {
      return n.e(
        { a: e.rootFontSize, b: a.hasLoaded },
        a.hasLoaded
          ? n.e(
              { c: void 0 !== a.transferData.feTransferMoney },
              void 0 !== a.transferData.feTransferMoney
                ? n.e(
                    { d: a.isShowFeTransferOutTips },
                    a.isShowFeTransferOutTips
                      ? {
                          e: n.t(a.feTransferList.length),
                          f: n.t(a.recentlyPendingTransferInfo.serialNumber),
                          g: n.t(a.recentlyPendingTransferInfo.feTransferTime),
                        }
                      : {},
                    {
                      h: n.t(a.transferText),
                      i: n.t(a.transferData.feTransferMoney),
                      j: n.o(a.onProgressNodeComplete),
                      k: n.p({
                        scene: "detail",
                        "current-progress": a.currentProgress,
                        "state-list": a.progressState,
                        "show-progress-text": a.showProgressText,
                        "enable-animation": a.enableProgressAnimation,
                      }),
                      l: n.f(a.transferData.viewList, function (e, t, r) {
                        return {
                          a: n.t(e.title),
                          b: n.f(e.items, function (t, r, o) {
                            return n.e(
                              { a: n.t(t.leftText) },
                              !a.enableProgressAnimation ||
                                e.resultIndex < 0 ||
                                a.completedResultIndex >= e.resultIndex
                                ? n.e(
                                    {
                                      b: n.t(t.rightText),
                                      c: t.contactCustomer,
                                    },
                                    t.contactCustomer
                                      ? {
                                          d: n.t(t.tel),
                                          e: n.o(function (e) {
                                            return a.contactCustomer(t.tel);
                                          }, r),
                                        }
                                      : {},
                                    {
                                      f: n.n(t.rightClass),
                                      g: n.n({
                                        "animate-fade-in":
                                          a.enableProgressAnimation &&
                                          e.resultIndex >= 0 &&
                                          a.completedResultIndex >=
                                            e.resultIndex,
                                      }),
                                      h: n.o(function (e) {
                                        return t.isShowCancelTransfer
                                          ? a.cancelTransfer(t.pre_contract_no)
                                          : function () {};
                                      }, r),
                                    }
                                  )
                                : {},
                              { i: r, j: n.n(t.rightClass) }
                            );
                          }),
                          c:
                            !a.enableProgressAnimation ||
                            e.resultIndex < 0 ||
                            a.completedResultIndex >= e.resultIndex,
                          d: t,
                        };
                      }),
                      m: a.bottomBtnText ? 1 : "",
                      n: a.bottomBtnText,
                    },
                    a.bottomBtnText
                      ? {
                          o: n.t(a.bottomBtnText),
                          p: n.o(function () {
                            return (
                              a.handleBottomBtnClick &&
                              a.handleBottomBtnClick.apply(a, arguments)
                            );
                          }),
                          q: a.externalNavBar4Mp ? 1 : "",
                        }
                      : {}
                  )
                : {
                    r: n.p({
                      text: "当前无".concat(a.transferText, "资金信息"),
                    }),
                  }
            )
          : { s: n.p({ size: "28px" }) },
        {
          t: n.p({ id: "mp-dialog" }),
          v: n.sr("milestoneDialogRef", "5399c9cc-5,5399c9cc-0"),
          w: n.p({ "allow-types": a.milestoneAllowTypes, disabled: a.isOem }),
          x: n.sr("#global-wrap", "5399c9cc-0"),
          y: n.p({
            id: "global-wrap",
            filePath: "/transfer/fund/recordsdetail",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-5399c9cc"],
]);
wx.createPage(F);
