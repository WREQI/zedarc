var e = require("../../../@babel/runtime/helpers/slicedToArray");
require("../../../app.js");
var t = require("../../../common/vendor.js"),
  n = require("../../../model/debt/useDebtAutoOrder.js"),
  o = require("../../../model/trade/useTrade.js"),
  r = require("../../../service/stat/mp-weixin.js"),
  a = {
    components: {
      ActionSheet: function () {
        return "../../../common/components/ActionSheet/index.js";
      },
      CustomInput: function () {
        return "../../../common/components/CustomInput/index.js";
      },
    },
    props: {
      visible: { type: Boolean, default: !1 },
      sheetTitle: { type: String, default: "" },
      sheetKey: { type: String, default: "" },
      sheetCfg: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (a, l) {
      var i = l.emit,
        u = t.getCurrentInstance().proxy,
        s = t.inject("debtAutoOrderHook"),
        c = s.selectedData,
        d = s.setSelectedData,
        T = s.preciseCtrl,
        E = s.selectedValToCfg,
        p = t.inject("simpleMode");
      if (p.value) {
        var v = o.useTrade();
        t.provide("trade", v);
      }
      var _ = t.ref(!1),
        h = t.ref(""),
        f = t.ref(""),
        m = t.ref(!1),
        C = t.ref(""),
        S = t.computed(function () {
          return (
            !!C.value ||
            (((a.sheetKey === n.FORM_KEY_LIST.RATE &&
              h.value === n.DEBT_RATE_TYPE.LEAST) ||
              (a.sheetKey === n.FORM_KEY_LIST.PRICE &&
                h.value === n.DEBT_PRICE_TYPE.SAVE)) &&
              !f.value)
          );
        });
      function R() {
        _.value = !1;
      }
      function y(e) {
        var t = e.type;
        (h.value = t),
          ((a.sheetKey === n.FORM_KEY_LIST.RATE &&
            h.value === n.DEBT_RATE_TYPE.REAL) ||
            (a.sheetKey === n.FORM_KEY_LIST.PRICE &&
              h.value === n.DEBT_PRICE_TYPE.ALL)) &&
            C.value &&
            ((f.value = ""), (C.value = ""));
      }
      function I(e) {
        var t,
          n = e;
        n = String(e).replace(/[^0-9.]/g, "");
        var o = (null == (t = T[a.sheetKey]) ? void 0 : t.decimal) || 2;
        if (o && -1 !== (null == e ? void 0 : e.indexOf("."))) {
          var r = n.split(".");
          n = "".concat(r[0], ".").concat(r[1].slice(0, o));
        }
        return n;
      }
      function P(e) {
        var n,
          o = I(e);
        o = "" === o ? o : +o;
        var r = (null == (n = T[a.sheetKey]) ? void 0 : n.decimal) || 2;
        return r && "" !== o && !t.isNil(o) && (o = o.toFixed(r)), o;
      }
      return (
        t.watch(
          function () {
            return a.visible;
          },
          function (e) {
            var t, n, o, r;
            !!e !== _.value &&
              ((_.value = !!e),
              e &&
                ((m.value = !1),
                (C.value = ""),
                (h.value =
                  null == (n = null == (t = c.value) ? void 0 : t[a.sheetKey])
                    ? void 0
                    : n.type),
                (f.value =
                  (null == (r = null == (o = c.value) ? void 0 : o[a.sheetKey])
                    ? void 0
                    : r.value) || "")));
          },
          { immediate: !0 }
        ),
        t.watch(
          function () {
            return _.value;
          },
          function (e) {
            i("changeVisble", !!e);
          },
          { immediate: !0 }
        ),
        {
          FORM_KEY_LIST: n.FORM_KEY_LIST,
          DEBT_PRODUCT_TYPE: n.DEBT_PRODUCT_TYPE,
          DEBT_RATE_TYPE: n.DEBT_RATE_TYPE,
          DEBT_PRICE_TYPE: n.DEBT_PRICE_TYPE,
          isShow: _,
          isShowKeyboard: m,
          currentInputVal: f,
          currentSelectedType: h,
          simpleMode: p,
          errorTips: C,
          isConfirmBtnDisable: S,
          onRadioChanged: function (e) {
            var t;
            y({
              type:
                null == (t = null == e ? void 0 : e.detail) ? void 0 : t.value,
            });
          },
          onSheetClose: R,
          onSheetItemClick: y,
          onSheetConfirm: function () {
            var e,
              t,
              n = E({ key: a.sheetKey, type: h.value });
            d([
              {
                key: a.sheetKey,
                type: h.value,
                value: (null == n ? void 0 : n.hasValue) ? P(f.value) : "",
              },
            ]),
              R(),
              r.stat.click(
                "trade.debt.auto_order.confirm_click."
                  .concat(
                    null ==
                      (t = null == (e = a.sheetKey) ? void 0 : e.toLowerCase)
                      ? void 0
                      : t.call(e),
                    "."
                  )
                  .concat(null == n ? void 0 : n.typeName)
              );
          },
          onRateInput: function (t) {
            var n,
              o,
              r,
              l =
                null == (n = null == t ? void 0 : t.detail) ? void 0 : n.value;
            parseFloat(l) < 1.5
              ? (C.value = "为保证收益，请设置≥1.5%的利率")
              : (C.value = l ? "" : "请输入保底利率");
            var i = l.split("."),
              s = e(i, 2),
              c = s[0],
              d = s[1],
              E = null == (o = T[a.sheetKey]) ? void 0 : o.integer;
            (l = I(
              (l = ""
                .concat(c.slice(0, E))
                .concat(l.indexOf(".") > -1 ? "." : "")
                .concat(d || ""))
            )),
              (null == (r = u.$refs) ? void 0 : r.rateInput) &&
                (u.$refs.rateInput.innerValue = l),
              (f.value = l);
          },
          onPriceInput: function (t) {
            var n,
              o,
              r,
              l =
                null == (n = null == t ? void 0 : t.detail) ? void 0 : n.value;
            C.value = l ? "" : "请输入保留金额";
            var i = l.split("."),
              s = e(i, 2),
              c = s[0],
              d = s[1],
              E = null == (o = T[a.sheetKey]) ? void 0 : o.integer;
            (l = I(
              (l = ""
                .concat(c.slice(0, E))
                .concat(l.indexOf(".") > -1 ? "." : "")
                .concat(d || ""))
            )),
              (null == (r = u.$refs) ? void 0 : r.priceInput) &&
                (u.$refs.priceInput.innerValue = l),
              (f.value = l);
          },
          onFocus: function () {
            m.value = !0;
          },
          onBlur: function (e) {
            var t,
              o,
              r,
              l =
                null == (t = null == e ? void 0 : e.detail) ? void 0 : t.value;
            (l = P(l)),
              a.sheetKey === n.FORM_KEY_LIST.RATE
                ? (null == (o = u.$refs) ? void 0 : o.rateInput) &&
                  (u.$refs.rateInput.innerValue = l)
                : a.sheetKey === n.FORM_KEY_LIST.PRICE &&
                  (null == (r = u.$refs) ? void 0 : r.priceInput) &&
                  (u.$refs.priceInput.innerValue = l),
              (f.value = l),
              (m.value = !1);
          },
        }
      );
    },
  };
Array ||
  (t.resolveComponent("custom-input") + t.resolveComponent("action-sheet"))();
var l = t._export_sfc(a, [
  [
    "render",
    function (e, n, o, r, a, l) {
      return t.e(
        { a: o.sheetKey === r.FORM_KEY_LIST.PRODUCT },
        o.sheetKey === r.FORM_KEY_LIST.PRODUCT
          ? {
              b: r.simpleMode ? "#e63535" : "#3077ec",
              c: r.DEBT_PRODUCT_TYPE.SH,
              d: r.currentSelectedType === r.DEBT_PRODUCT_TYPE.SH,
              e: t.t(o.sheetCfg.SH.name || "--"),
              f: t.t(o.sheetCfg.SH.scode),
              g: t.t(o.sheetCfg.SH.desc || "--"),
              h: t.o(function (e) {
                return r.onSheetItemClick({ type: r.DEBT_PRODUCT_TYPE.SH });
              }),
              i: r.simpleMode ? "#e63535" : "#3077ec",
              j: r.DEBT_PRODUCT_TYPE.SZ,
              k: r.currentSelectedType === r.DEBT_PRODUCT_TYPE.SZ,
              l: t.t(o.sheetCfg.SZ.name || "--"),
              m: t.t(o.sheetCfg.SZ.scode),
              n: t.t(o.sheetCfg.SZ.desc || "--"),
              o: t.o(function (e) {
                return r.onSheetItemClick({ type: r.DEBT_PRODUCT_TYPE.SZ });
              }),
              p: t.o(function () {
                return r.onRadioChanged && r.onRadioChanged.apply(r, arguments);
              }),
              q: t.n(o.sheetKey.toLowerCase()),
            }
          : {},
        { r: o.sheetKey === r.FORM_KEY_LIST.RATE },
        o.sheetKey === r.FORM_KEY_LIST.RATE
          ? t.e(
              {
                s: r.simpleMode ? "#e63535" : "#3077ec",
                t: r.DEBT_RATE_TYPE.REAL,
                v: r.currentSelectedType === r.DEBT_RATE_TYPE.REAL,
                w: t.t(o.sheetCfg.REAL.name || "--"),
                x: t.t(o.sheetCfg.REAL.desc),
                y: t.o(function (e) {
                  return r.onSheetItemClick({ type: r.DEBT_RATE_TYPE.REAL });
                }),
                z: r.simpleMode ? "#e63535" : "#3077ec",
                A: r.DEBT_RATE_TYPE.LEAST,
                B: r.currentSelectedType === r.DEBT_RATE_TYPE.LEAST,
                C: t.t(o.sheetCfg.LEAST.name || "--"),
                D: t.sr("rateInput", "30df4188-1,30df4188-0"),
                E: r.simpleMode ? 1 : "",
                F: r.errorTips ? 1 : "",
                G: t.o(r.onFocus),
                H: t.o(r.onRateInput),
                I: t.o(r.onBlur),
                J: t.p({
                  "text-align": "center",
                  "key-board-theme": "custom",
                  placeholder: "请输入",
                  value: r.currentInputVal,
                  integer: !1,
                  "simple-mode": r.simpleMode,
                  "show-glass": !0,
                  "max-length": 6,
                }),
                K: r.errorTips,
              },
              r.errorTips
                ? { L: t.t(r.errorTips), M: r.simpleMode ? 1 : "" }
                : {},
              {
                N: t.t(o.sheetCfg.LEAST.desc),
                O: t.o(function (e) {
                  return r.onSheetItemClick({ type: r.DEBT_RATE_TYPE.LEAST });
                }),
                P: t.o(function () {
                  return (
                    r.onRadioChanged && r.onRadioChanged.apply(r, arguments)
                  );
                }),
                Q: t.n(o.sheetKey.toLowerCase()),
              }
            )
          : {},
        { R: o.sheetKey === r.FORM_KEY_LIST.PRICE },
        o.sheetKey === r.FORM_KEY_LIST.PRICE
          ? t.e(
              {
                S: r.simpleMode ? "#e63535" : "#3077ec",
                T: r.DEBT_PRICE_TYPE.ALL,
                U: r.currentSelectedType === r.DEBT_PRICE_TYPE.ALL,
                V: t.t(o.sheetCfg.ALL.name || "--"),
                W: t.o(function (e) {
                  return r.onSheetItemClick({ type: r.DEBT_PRICE_TYPE.ALL });
                }),
                X: r.simpleMode ? "#e63535" : "#3077ec",
                Y: r.DEBT_PRICE_TYPE.SAVE,
                Z: r.currentSelectedType === r.DEBT_PRICE_TYPE.SAVE,
                aa: t.t(o.sheetCfg.SAVE.name || "--"),
                ab: t.sr("priceInput", "30df4188-2,30df4188-0"),
                ac: r.simpleMode ? 1 : "",
                ad: r.errorTips ? 1 : "",
                ae: t.o(r.onFocus),
                af: t.o(r.onPriceInput),
                ag: t.o(r.onBlur),
                ah: t.p({
                  "text-align": "center",
                  "key-board-theme": "custom",
                  placeholder: "请输入",
                  value: r.currentInputVal,
                  integer: !1,
                  "simple-mode": r.simpleMode,
                  "show-glass": !0,
                  "max-length": 12,
                }),
                ai: r.errorTips,
              },
              r.errorTips
                ? { aj: t.t(r.errorTips), ak: r.simpleMode ? 1 : "" }
                : {},
              {
                al: t.t(o.sheetCfg.SAVE.desc),
                am: t.o(function (e) {
                  return r.onSheetItemClick({ type: r.DEBT_PRICE_TYPE.SAVE });
                }),
                an: t.o(function () {
                  return (
                    r.onRadioChanged && r.onRadioChanged.apply(r, arguments)
                  );
                }),
                ao: t.n(o.sheetKey.toLowerCase()),
              }
            )
          : {},
        { ap: !r.isShowKeyboard },
        r.isShowKeyboard
          ? {}
          : {
              aq: r.isConfirmBtnDisable,
              ar: t.o(function () {
                return r.onSheetConfirm && r.onSheetConfirm.apply(r, arguments);
              }),
            },
        {
          as: t.o(function (e) {
            return (r.isShow = e);
          }),
          at: t.n(r.isShowKeyboard ? "kb-show" : ""),
          av: t.o(r.onSheetClose),
          aw: t.p({
            value: r.isShow,
            title: o.sheetTitle,
            "mask-closable": !1,
            "close-button": !0,
            "picker-style": !0,
            "confirm-button": !1,
            "show-title-border-bottom": !1,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-30df4188"],
]);
wx.createComponent(l);
