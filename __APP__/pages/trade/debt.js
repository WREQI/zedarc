var e = require("../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var n = require("../../common/vendor.js"),
  r = require("../../model/trade/useTradeDebt.js"),
  i = require("../../model/trade/useStockInfo.js"),
  a = require("../../config/enum.js"),
  s = require("../../service/connect/index.js"),
  c = require("../../utils/getPlatform.js"),
  u = require("../../model/debt/useDebt.js");
require("../../service/broker.js");
var l = require("../../utils/market.js"),
  d = require("../../common/components/Dialog/index.js"),
  m = require("../../stores/user/useUserinfo.js"),
  f = require("../../cgi/signProtocol.js"),
  h = require("../../mixin/platforms/index.js"),
  p = require("../../config/broker/11100/index.js"),
  g = {
    name: "TradeDebt",
    mixins: [h.pluginMixins],
    components: {
      StStepper: function () {
        return "../../common/components/Stepper/index.js";
      },
      StCellGroup: function () {
        return "../../common/components/CellGroup/index.js";
      },
      StCell: function () {
        return "../../common/components/Cell/index.js";
      },
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
      RiskTestReminder: function () {
        return "../../components/RiskTestReminder/index.js";
      },
      ProtocolDialog: function () {
        return "../../components/ProtocolDialog/ProtocolDialog.js";
      },
    },
    setup: function () {
      var e,
        t,
        o,
        i,
        s = r.useTradeDebt(),
        l = s.amount,
        d = s.code,
        f = s.connect,
        h = s.expectedIncome,
        g = s.fetchStockInfo,
        b = s.initTrade,
        k = s.isTrading,
        T = s.market,
        v = s.metaData,
        _ = s.onConfirmLend,
        C = s.rate,
        x = s.stockInfo,
        D = s.stockName,
        R = s.tradeTips,
        y = s.transInfo,
        I = s.unit,
        S = u.useDebt(),
        w = S.queryRepoPermission,
        A = S.debtPermission,
        j = S.szShareHolderCode,
        M = S.shShareHolderCode,
        P =
          (null == (e = p.brokerConfig.trade) ? void 0 : e.repoPermission) ||
          {},
        q = P.checkPermission,
        H = P.permissionTips,
        $ = P.permissionConfirm,
        N = P.bindStockHolderCardOnline,
        B = P.openRepoPermissionOnline,
        E = (null == (t = p.brokerConfig.trade) ? void 0 : t.debt) || {},
        F = E.protocols,
        O = void 0 === F ? [] : F,
        K = E.showRiskTips,
        U = void 0 !== K && K,
        V = c.getPlatform(),
        L = V.isMiniProgram,
        Z = V.isLctXcx,
        G = n.ref(
          (!L || Z) &&
            !(null == (i = null == (o = p.brokerConfig.trade) ? void 0 : o.debt)
              ? void 0
              : i.hideDetail)
        ),
        z = n.ref(!0),
        J = m.useUserinfoStore(),
        X = n.storeToRefs(J),
        W = X.userinfo,
        Q = X.accountMode,
        Y = n.ref(!1),
        ee = "204001",
        te = "131810",
        oe = n.computed(function () {
          return C.value && parseFloat(C.value) < 0.4
            ? (T.value === a.MARKET.HA && d.value === ee) ||
              (T.value === a.MARKET.SA && d.value === te)
              ? "利率过低收益无法覆盖成本，建议上调"
              : "下单利率过低，建议上调"
            : "";
        }),
        ne = n.computed(function () {
          return C.value && parseFloat(C.value) < 0.4
            ? (T.value === a.MARKET.HA && d.value === ee) ||
              (T.value === a.MARKET.SA && d.value === te)
              ? "利率过低收益无法覆盖成本"
              : "下单利率过低，建议上调"
            : "";
        });
      return {
        accountName: p.brokerConfig.bind.accountCalled || "资金账号",
        userinfo: W,
        accountMode: Q,
        initing: z,
        showDetailEntry: G,
        amount: l,
        code: d,
        connect: f,
        expectedIncome: h,
        fetchStockInfo: g,
        initTrade: b,
        isTrading: k,
        market: T,
        metaData: v,
        onConfirmLend: _,
        rate: C,
        stockInfo: x,
        stockName: D,
        tradeTips: R,
        transInfo: y,
        debtPermission: A,
        checkPermission: q,
        permissionTips: H,
        permissionConfirm: $,
        bindStockHolderCardOnline: N,
        openRepoPermissionOnline: B,
        queryRepoPermission: w,
        unit: I,
        szShareHolderCode: j,
        shShareHolderCode: M,
        showRiskTipsProtocolDialogFlag: Y,
        protocols: O,
        showRiskTips: U,
        MAX_AMOUNT: 9999999999,
        rateTip: oe,
        dialogRateTip: ne,
      };
    },
    data: function () {
      return { spread: 0.001, showConfirmDialog: !1, isFirst: !0 };
    },
    computed: {
      dqj: function () {
        return n.get(this.stockInfo, "secu_quote.dqj", "0");
      },
      infoNumArr: function () {
        return Array.from({ length: 5 }, function (e, t) {
          return t + 1;
        });
      },
    },
    beforeUnmount: function () {
      this.handleHide();
    },
    methods: {
      handleHide: function () {
        s.unsubscribe();
      },
      initData: function () {
        var e = this;
        return o(
          t().mark(function o() {
            var n, r, s, c, u, l, d, m;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (e.initing = !0),
                      (s = e.$route.query),
                      (c = s.code),
                      (u = s.market),
                      (l = s.amount),
                      (d = void 0 === l ? "" : l),
                      (e.code = c),
                      (e.market = "".concat(u)),
                      (m = [
                        e.initTrade(),
                        e.fetchStockInfo({
                          market: u,
                          code: c,
                          needquote: 1,
                          needfive: 1,
                        }),
                      ]),
                      e.checkPermission && m.push(e.queryRepoPermission()),
                      (t.next = 7),
                      Promise.all(m)
                    );
                  case 7:
                    (e.initing = !1),
                      e.isFirst &&
                        (i.isZeroValue(
                          null ==
                            (r =
                              null == (n = e.stockInfo) ? void 0 : n.five_trans)
                            ? void 0
                            : r.mrjg1
                        )
                          ? e.stockInfo.secu_quote &&
                            (e.rate = e.stockInfo.secu_quote.dqj)
                          : (e.rate = e.stockInfo.five_trans.mrjg1),
                        (e.amount = e.calMaxBuyAmount(d)),
                        (e.isFirst = !1)),
                      (e.spread = (e.market, a.MARKET.HA, 0.005)),
                      e.connect();
                  case 11:
                  case "end":
                    return t.stop();
                }
            }, o);
          })
        )();
      },
      showHasNotShareHolderCardTips: function () {
        var e = this;
        d.Dialog({
          message: "您的"
            .concat(
              this.accountName,
              "未绑定当前交易市场的股东卡，请先绑定后再进行交易。如有疑问可联系券商客服办理业务，电话:"
            )
            .concat(p.brokerConfig.base.tel),
          messageAlign: "left",
          confirmButtonText: this.bindStockHolderCardOnline
            ? "添加股东卡"
            : "我知道了",
          showCancelButton: this.bindStockHolderCardOnline,
          cancelButtonText: "我知道了",
          context: this,
          onConfirm: function () {
            e.bindStockHolderCardOnline &&
              e.$router.push({ name: "BizShareHolderBind" });
          },
        });
      },
      hasShareholderCardsFromUserinfo: function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          o = t.shareholdercards,
          n = void 0 === o ? [] : o;
        if (0 === n.length) return !0;
        var r =
            n.findIndex(function (e) {
              return e.market === l.MARKET_CODE_SH;
            }) > -1,
          i =
            n.findIndex(function (e) {
              return e.market === l.MARKET_CODE_SZ;
            }) > -1;
        return (
          !((e === a.MARKET.HA && !r) || (e === a.MARKET.SA && !i)) ||
          (this.showHasNotShareHolderCardTips(), !1)
        );
      },
      onRateInput: function (e) {
        var t = this;
        if (
          (e - this.rate > 0
            ? this.$stat.click("trade.tradedebt.rate.add")
            : this.$stat.click("trade.tradedebt.rate.cut"),
          e < this.spread && !this.rateKeyboardShow)
        )
          return (
            n.index.showToast({
              title: "年化收益率不可以小于".concat(this.spread),
              icon: "none",
            }),
            (this.rate = e),
            this.$nextTick(function () {
              return (t.rate = t.dqj);
            }),
            !1
          );
        this.rate = e;
      },
      onAmountInput: function (e) {
        if (
          (e - this.amount > 0
            ? this.$stat.click("trade.tradedebt.number.add")
            : this.$stat.click("trade.tradedebt.number.cut"),
          e < this.unit)
        )
          return (
            n.index.showToast({
              title: "下单金额必须为".concat(this.unit, "或者其整数倍"),
              icon: "none",
              duration: 1e3,
            }),
            !1
          );
        this.amount = e;
      },
      onLend: function () {
        var e = this;
        if (this.accountMode !== a.E_ACCOUNT_MODE.MARGIN) {
          if (
            (this.$stat.click("trade.tradedebt.lend.click"),
            this.checkPermission)
          ) {
            if (
              (!this.shShareHolderCode && this.market === a.MARKET.HA) ||
              (!this.szShareHolderCode && this.market === a.MARKET.SA)
            )
              return void this.showHasNotShareHolderCardTips();
            if (!this.debtPermission[this.market])
              return void d.Dialog({
                message: this.permissionTips,
                showCancelButton: this.openRepoPermissionOnline,
                cancelButtonText: "我知道了",
                confirmButtonText: this.openRepoPermissionOnline
                  ? this.permissionConfirm
                  : "我知道了",
                context: this,
                onConfirm: function () {
                  e.openRepoPermissionOnline &&
                    e.$router.push({ name: "BizDebtIndex" });
                },
              });
          } else if (
            !this.hasShareholderCardsFromUserinfo(this.market, this.userinfo)
          )
            return;
          var t = n.__CJS__export_reduce__(
            n.__CJS__export_mul__(
              n.__CJS__export_add__(1, this.metaData.commision_rate / 1e4),
              this.amount
            ),
            this.metaData.max_buy_money
          );
          t > 0
            ? d.Dialog({
                message: "资金账户余额不足，需转账".concat(t, "元"),
                context: this,
                showCancelButton: !0,
                confirmButtonText: "转入资金",
                onConfirm: function () {
                  e.$router.push({
                    name: "TransferFund",
                    query: {
                      money: t,
                      code: e.code,
                      market: e.market,
                      name: e.stockName,
                      from: "debt",
                    },
                  }),
                    e.$stat.click(
                      "trade.tradedebt.purchase_money_not_enough.confirm"
                    );
                },
                onCancel: function () {
                  e.$stat.click(
                    "trade.tradedebt.purchase_money_not_enough.cancel"
                  );
                },
              })
            : setTimeout(function () {
                e.showRiskTips && e.metaData.needRepoTradeRiskTip
                  ? (e.showRiskTipsProtocolDialogFlag = !0)
                  : (e.$stat.click("trade.tradedebt.buyconfirmdialog.show"),
                    (e.showConfirmDialog = !0));
              }, 10);
        } else
          d.Dialog({
            context: this,
            message:
              "信用账户不支持通用回购交易，如需交易通用回购，请使用普通账户内的资金。",
          });
      },
      onConfirm: function () {
        var t;
        (this.showConfirmDialog = !1),
          this.onConfirmLend(),
          this.$stat.click(
            "trade.tradedebt.buyconfirmdialog.confirm",
            void 0,
            void 0,
            {
              stock_cls: n.get(this.stockInfo, "stock_cls", ""),
              stockid:
                null ==
                (t = l.getStatStockId(
                  e(
                    e({}, this.stockInfo),
                    {},
                    {
                      quote: e(
                        e({}, this.stockInfo.quote),
                        {},
                        { info: this.stockInfo.info }
                      ),
                    }
                  )
                ))
                  ? void 0
                  : t.stockid,
            }
          );
      },
      onDetail: function () {
        this.$stat.click("trade.tradedebt.detail.click"),
          n.index.navToQuote({
            code: this.code,
            market: this.market,
            name: this.stockName,
          });
      },
      setMaxBuyAmount: function () {
        if (/^[\d.]+$/.test(this.metaData.max_buy_money)) {
          var e = Math.min(this.metaData.max_buy_money, this.MAX_AMOUNT),
            t = parseInt(e / this.unit, 10) * this.unit;
          t < this.unit &&
            (n.index.showToast({
              title: "下单金额必须为".concat(this.unit, "或者其整数倍"),
              icon: "none",
              duration: 1e3,
            }),
            (t = this.unit)),
            (this.amount = this.calMaxBuyAmount());
        }
      },
      setRate: function (e, t) {
        (this.rate = e), this.$stat.click("trade.tradedebt.".concat(t));
      },
      isZeroValue: i.isZeroValue,
      onRateFocus: function () {
        this.rateKeyboardShow = !0;
      },
      onRateBlur: function (e) {
        var t = e.value;
        (this.rateKeyboardShow = !1), this.onRateInput(t);
      },
      onNextInput: function () {
        var e = this;
        this.$refs.rateStepperRef.$refs.input.onClose(),
          this.$nextTick(function () {
            e.$refs.amountStepperRef.$refs.input.focus();
          });
      },
      signRiskProtocol: function () {
        var e = this;
        return o(
          t().mark(function o() {
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e.showRiskTipsProtocolDialogFlag = !1),
                        (t.prev = 1),
                        (t.next = 4),
                        f.signProtocol.signRepoTradeRiskTips()
                      );
                    case 4:
                      (e.metaData.needRepoTradeRiskTip = !1),
                        e.onLend(),
                        (t.next = 11);
                      break;
                    case 8:
                      (t.prev = 8),
                        (t.t0 = t.catch(1)),
                        d.Dialog({ context: e, message: t.t0.retmsg || {} });
                    case 11:
                    case "end":
                      return t.stop();
                  }
              },
              o,
              null,
              [[1, 8]]
            );
          })
        )();
      },
      calMaxBuyAmount: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = e
            ? parseFloat(e || "0")
            : parseFloat(this.metaData.max_buy_money || "0"),
          o = isNaN(t) ? this.unit : Math.min(t, this.MAX_AMOUNT),
          r = n.__CJS__export_div__(
            o,
            n.__CJS__export_add__(1, this.metaData.commision_rate / 1e4)
          );
        return (
          (r = parseInt(r / this.unit, 10) * this.unit),
          (r = Math.max(r, this.unit))
        );
      },
    },
    onShow: function () {
      var e = this;
      return o(
        t().mark(function o() {
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  e.initData();
                case 1:
                case "end":
                  return t.stop();
              }
          }, o);
        })
      )();
    },
    onHide: function () {
      this.handleHide();
    },
  };
Array ||
  (
    n.resolveComponent("st-stepper") +
    n.resolveComponent("st-cell") +
    n.resolveComponent("st-cell-group") +
    n.resolveComponent("ValueColor") +
    n.resolveComponent("mp-dialog") +
    n.resolveComponent("RiskTestReminder") +
    n.resolveComponent("ProtocolDialog") +
    n.resolveComponent("GlobalWrap")
  )(),
  Math ||
    (
      function () {
        return "../../components/ValueColor/ValueColor.js";
      } +
      function () {
        return "../../components/ProtocolDialog/ProtocolDialog.js";
      } +
      function () {
        return "../../components/GlobalWrap/GlobalWrap.js";
      }
    )();
var b = n._export_sfc(g, [
  [
    "render",
    function (e, t, o, r, i, a) {
      return n.e(
        {
          a: e.rootFontSize,
          b: n.t(r.stockName || ""),
          c: n.t(r.code || ""),
          d: r.showDetailEntry,
        },
        r.showDetailEntry
          ? {
              e: n.o(function () {
                return a.onDetail && a.onDetail.apply(a, arguments);
              }),
            }
          : {},
        {
          f: n.t(a.dqj),
          g: n.o(function (e) {
            return a.setRate(a.dqj, "dqj");
          }),
          h: n.t(r.metaData.earn_days || "-"),
          i: n.t(r.metaData.today_date || "-"),
          j: n.t(r.metaData.endlock_date || "-"),
          k: n.t(r.metaData.cashout_date || "-"),
          l: n.sr("rateStepperRef", "1dfbfab1-3,1dfbfab1-2"),
          m: n.o(a.onRateInput),
          n: n.o(a.onRateFocus),
          o: n.o(a.onRateBlur),
          p: n.o(a.onNextInput),
          q: n.p({
            value: r.rate,
            step: i.spread,
            "decimal-length": 3,
            "max-length": 8,
            max: 99999999,
            placeholder: "请输入收益率",
            "confirm-type": "next",
          }),
          r: n.n(
            r.rateTip && !i.showConfirmDialog ? "show-rate-tip-container" : ""
          ),
          s: r.rateTip && !i.showConfirmDialog,
        },
        r.rateTip && !i.showConfirmDialog ? { t: n.t(r.rateTip) } : {},
        {
          v: n.sr("amountStepperRef", "1dfbfab1-5,1dfbfab1-4"),
          w: n.o(a.onAmountInput),
          x: n.p({
            value: r.amount,
            integer: !0,
            step: r.unit,
            min: r.unit,
            "max-length": 10,
            max: r.MAX_AMOUNT,
            "extra-key": "00",
            placeholder: "请输入金额",
          }),
          y: n.t(
            e.$filters.postfix(
              e.$filters.format.toCurrency(
                e.$filters.defaults(r.metaData.max_buy_money)
              ),
              "元"
            )
          ),
          z: n.o(function () {
            return a.setMaxBuyAmount && a.setMaxBuyAmount.apply(a, arguments);
          }),
          A: n.t(
            e.$filters.postfix(
              e.$filters.format.toCurrency(
                e.$filters.defaults(r.expectedIncome)
              ),
              "元"
            )
          ),
          B: r.isTrading || r.initing,
          C: n.o(function () {
            return a.onLend && a.onLend.apply(a, arguments);
          }),
          D: !r.tradeTips,
        },
        r.tradeTips
          ? {}
          : {
              E: n.t(r.transInfo.percent.buy),
              F: n.t(r.transInfo.percent.sell),
              G: n.f(a.infoNumArr, function (e, t, o) {
                return n.e(
                  {
                    a: n.t(e),
                    b: n.t(r.transInfo.fiveTrans["mrjg" + e] || "--"),
                    c: "1dfbfab1-7-" + o + ",1dfbfab1-6-" + o,
                    d: n.p({ value: r.transInfo.fiveTrans["mrjg" + e] }),
                    e: a.isZeroValue(r.transInfo.fiveTrans["mrsl" + e]),
                  },
                  a.isZeroValue(r.transInfo.fiveTrans["mrsl" + e])
                    ? {}
                    : { f: n.t(r.transInfo.fiveTrans["mrsl" + e]) },
                  {
                    g: n.o(function (t) {
                      return a.setRate(
                        r.transInfo.fiveTrans["mrjg" + e],
                        "mr-".concat(e)
                      );
                    }, e),
                    h: e,
                    i: "1dfbfab1-6-" + o + ",1dfbfab1-0",
                    j: n.p({
                      animate: !0,
                      value: r.transInfo.fiveTrans["mrsl" + e] || 0,
                    }),
                  }
                );
              }),
              H: n.f(a.infoNumArr, function (e, t, o) {
                return n.e(
                  {
                    a: n.t(e),
                    b: n.t(r.transInfo.fiveTrans["mcjg" + e] || "--"),
                    c: "1dfbfab1-9-" + o + ",1dfbfab1-8-" + o,
                    d: n.p({ value: r.transInfo.fiveTrans["mcjg" + e] }),
                    e: a.isZeroValue(r.transInfo.fiveTrans["mcsl" + e]),
                  },
                  a.isZeroValue(r.transInfo.fiveTrans["mcsl" + e])
                    ? {}
                    : { f: n.t(r.transInfo.fiveTrans["mcsl" + e]) },
                  {
                    g: n.o(function (t) {
                      return a.setRate(
                        r.transInfo.fiveTrans["mcjg" + e],
                        "mc-".concat(e)
                      );
                    }, e),
                    h: e,
                    i: "1dfbfab1-8-" + o + ",1dfbfab1-0",
                    j: n.p({
                      animate: !0,
                      value: r.transInfo.fiveTrans["mcsl" + e] || 0,
                    }),
                  }
                );
              }),
            },
        { I: r.tradeTips },
        r.tradeTips ? { J: n.t(r.tradeTips) } : {},
        { K: n.t(r.stockName), L: n.t(r.rate), M: r.dialogRateTip },
        r.dialogRateTip ? { N: n.t(r.dialogRateTip) } : {},
        { O: n.t(r.amount), P: r.metaData.earn_days >= 28 },
        (r.metaData.earn_days, {}),
        { Q: r.metaData.earn_days >= 28 },
        r.metaData.earn_days >= 28 ? { R: n.t(r.metaData.earn_days) } : {},
        {
          S: n.o(a.onConfirm),
          T: n.o(function (e) {
            return (i.showConfirmDialog = !1);
          }),
          U: n.p({
            visible: i.showConfirmDialog,
            "confirm-button-text": "下单",
            "show-cancel-button": !0,
          }),
          V: n.p({ id: "mp-dialog" }),
          W: n.o(a.signRiskProtocol),
          X: n.o(function (e) {
            return (r.showRiskTipsProtocolDialogFlag = !1);
          }),
          Y: n.p({
            visible: r.showRiskTipsProtocolDialogFlag,
            protocols: r.protocols,
            "prefix-content":
              "为了更好的使用通用回购功能，请了解相关业务/产品的规则和风险，且同意并签署",
          }),
          Z: n.sr("#global-wrap", "1dfbfab1-0"),
          aa: n.p({
            id: "global-wrap",
            filePath: "/trade/debt",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
]);
wx.createPage(b);
