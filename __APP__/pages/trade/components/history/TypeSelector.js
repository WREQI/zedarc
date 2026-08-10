require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../@babel/runtime/helpers/defineProperty");
require("../../../../app.js");
var s = require("../../../../common/vendor.js"),
  n = require("../../../../stores/app/useMode.js"),
  a = require("../../../../config/enum/trade-history.js");
require("../../../../service/broker.js");
var r = require("../../../../stores/user/useUserinfo.js"),
  u = require("../../../../config/broker/11100/index.js"),
  T = {
    components: {
      ActionSheet: function () {
        return "../../../../common/components/ActionSheet/index.js";
      },
    },
    props: {
      value: { type: Boolean, default: !1 },
      selectedVal: { required: !0, type: Object },
      recordType: { required: !0, type: String },
    },
    setup: function (T) {
      var l,
        t,
        i,
        d = s.getCurrentInstance().proxy,
        o = r.useUserinfoStore(),
        p = s.storeToRefs(o).userinfo,
        y =
          (e((l = {}), a.TradeType.all, [
            a.BusinessType.all,
            a.BusinessType.stockFund,
            a.BusinessType.debt,
            a.BusinessType.balance,
            a.BusinessType.stock,
            a.BusinessType.fund,
            a.BusinessType.bond,
          ]),
          e(l, a.TradeType.buy, [
            a.BusinessType.all,
            a.BusinessType.stockFund,
            a.BusinessType.stock,
            a.BusinessType.fund,
            a.BusinessType.bond,
          ]),
          e(l, a.TradeType.sell, [
            a.BusinessType.all,
            a.BusinessType.stockFund,
            a.BusinessType.stock,
            a.BusinessType.fund,
            a.BusinessType.bond,
          ]),
          e(l, a.TradeType.finance, [
            a.BusinessType.all,
            a.BusinessType.debt,
            a.BusinessType.balance,
          ]),
          e(l, a.TradeType.playNew, [
            a.BusinessType.all,
            a.BusinessType.stockFund,
            a.BusinessType.stock,
            a.BusinessType.bond,
          ]),
          e(l, a.TradeType.etfPurchase, [
            a.BusinessType.all,
            a.BusinessType.stockFund,
            a.BusinessType.fund,
          ]),
          l),
        c =
          (e((t = {}), a.BusinessType.all, [
            a.TradeType.all,
            a.TradeType.buy,
            a.TradeType.sell,
            a.TradeType.finance,
            a.TradeType.playNew,
            a.TradeType.etfPurchase,
          ]),
          e(t, a.BusinessType.stockFund, [
            a.TradeType.all,
            a.TradeType.buy,
            a.TradeType.sell,
            a.TradeType.playNew,
            a.TradeType.etfPurchase,
          ]),
          e(t, a.BusinessType.debt, [a.TradeType.all, a.TradeType.finance]),
          e(t, a.BusinessType.balance, [a.TradeType.all, a.TradeType.finance]),
          e(t, a.BusinessType.stock, [
            a.TradeType.all,
            a.TradeType.buy,
            a.TradeType.sell,
            a.TradeType.playNew,
          ]),
          e(t, a.BusinessType.fund, [
            a.TradeType.all,
            a.TradeType.buy,
            a.TradeType.sell,
            a.TradeType.etfPurchase,
          ]),
          e(t, a.BusinessType.bond, [
            a.TradeType.all,
            a.TradeType.buy,
            a.TradeType.sell,
            a.TradeType.playNew,
          ]),
          t),
        E = s.computed(function () {
          return "1" === p.value.split_sfz_control
            ? s.get(u.brokerConfig, "trade.history.newSelectorOptions", {})
            : s.get(u.brokerConfig, "trade.history.selectorOptions", {});
        }),
        f = s.computed(function () {
          var e = (E.value[a.ETYPE.TRADE] || []).filter(function (e) {
            return (
              "0" === T.recordType || ![a.TradeType.etfPurchase].includes(e)
            );
          });
          return B({ type: a.ETYPE.TRADE, list: e });
        }),
        v = s.ref(
          B({ type: a.ETYPE.BUSINESS, list: E.value[a.ETYPE.BUSINESS] || [] })
        );
      function B(e) {
        var s = e.type;
        return e.list.map(function (e) {
          return { text: a.TypeTextMap[s][e], val: e, disabled: !1 };
        });
      }
      var S = s.ref(
        (e((i = {}), a.ETYPE.TRADE, 0), e(i, a.ETYPE.BUSINESS, 0), i)
      );
      function b(e) {
        var s;
        if (S.value[a.ETYPE.BUSINESS] !== e) {
          S.value[a.ETYPE.BUSINESS] = e;
          var n = v.value[e].val,
            r = c[n] || [];
          f.value.forEach(function (e, s) {
            f.value[s].disabled = !r.includes(e.val);
          }),
            (null == (s = f.value[S.value[a.ETYPE.TRADE]])
              ? void 0
              : s.disabled) && (S.value[a.ETYPE.TRADE] = 0);
        }
      }
      function P(e) {
        var s;
        if (S.value[a.ETYPE.TRADE] !== e) {
          S.value[a.ETYPE.TRADE] = e;
          var n = f.value[e].val,
            r = y[n] || [];
          v.value.forEach(function (e, s) {
            v.value[s].disabled = !r.includes(e.val);
          }),
            (null == (s = v.value[S.value[a.ETYPE.BUSINESS]])
              ? void 0
              : s.disabled) && (S.value[a.ETYPE.BUSINESS] = 0);
        }
      }
      function h(s) {
        var n,
          r = f.value.findIndex(function (e) {
            return e.val === s[a.ETYPE.TRADE];
          }),
          u = v.value.findIndex(function (e) {
            return e.val === s[a.ETYPE.BUSINESS];
          });
        return (
          e((n = {}), a.ETYPE.TRADE, -1 === r ? a.TradeType.all : r),
          e(n, a.ETYPE.BUSINESS, -1 === u ? a.BusinessType.all : u),
          n
        );
      }
      s.watch(
        function () {
          return T.selectedVal;
        },
        function (e) {
          var s = h(e);
          P(s[a.ETYPE.TRADE]), b(s[a.ETYPE.BUSINESS]);
        },
        { immediate: !0 }
      ),
        s.watch(
          function () {
            return T.value;
          },
          function (e) {
            if (e) {
              var s = h(T.selectedVal);
              P(s[a.ETYPE.TRADE]), b(s[a.ETYPE.BUSINESS]);
            }
          },
          { immediate: !0 }
        );
      var m = n.useModeStore(),
        Y = s.storeToRefs(m).simpleMode;
      return {
        ETYPE: a.ETYPE,
        simpleMode: Y,
        tradeTypeList: f,
        businessTypeList: v,
        curSelectedIndex: S,
        handleCancel: function () {
          d.$emit("close");
        },
        handleConfirm: function () {
          var s;
          d.$emit(
            "confirm",
            (e((s = {}), a.ETYPE.TRADE, f.value[S.value[a.ETYPE.TRADE]].val),
            e(s, a.ETYPE.BUSINESS, v.value[S.value[a.ETYPE.BUSINESS]].val),
            s)
          );
        },
        onTradeTypeChange: P,
        onBusinessTypeChange: b,
      };
    },
  };
Array || s.resolveComponent("action-sheet")();
var l = s._export_sfc(T, [
  [
    "render",
    function (e, n, a, r, u, T) {
      return {
        a: s.f(r.tradeTypeList, function (e, n, a) {
          return {
            a: s.t(e.text),
            b: n,
            c: s.n(n === r.curSelectedIndex[r.ETYPE.TRADE] ? "selected" : ""),
            d: s.n(e.disabled ? "disabled" : ""),
            e: s.o(function (s) {
              return !e.disabled && r.onTradeTypeChange(n);
            }, n),
          };
        }),
        b: s.f(r.businessTypeList, function (e, n, a) {
          return {
            a: s.t(e.text),
            b: n,
            c: s.n(
              n === r.curSelectedIndex[r.ETYPE.BUSINESS] ? "selected" : ""
            ),
            d: s.n(e.disabled ? "disabled" : ""),
            e: s.o(function (s) {
              return !e.disabled && r.onBusinessTypeChange(n);
            }, n),
          };
        }),
        c: s.o(function () {
          return r.handleCancel && r.handleCancel.apply(r, arguments);
        }),
        d: s.o(function () {
          return r.handleConfirm && r.handleConfirm.apply(r, arguments);
        }),
        e: r.simpleMode ? 1 : "",
        f: s.o(r.handleCancel),
        g: s.p({
          value: a.value,
          title: "选择类型",
          "show-title-border-bottom": !1,
          "confirm-button": !1,
          "picker-style": !0,
          "hide-close-icon": !0,
          "mask-closable": !0,
        }),
      };
    },
  ],
  ["__scopeId", "data-v-8d9ed1bb"],
]);
wx.createComponent(l);
