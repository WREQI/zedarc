require("../../../app.js");
var t = require("../../../utils/getPlatform.js"),
  e = require("../../vendor.js"),
  n = t.getPlatform(),
  i = n.isPCWeixin,
  r = n.isMpPlugin;
function s(t, e) {
  return String(t) === String(e);
}
function u(t) {
  return null != t;
}
var o = {
  components: {
    CustomInput: function () {
      return "../CustomInput/index.js";
    },
  },
  props: {
    value: [String, Number],
    placeholder: { type: String, default: "" },
    integer: { type: Boolean, default: !1 },
    disabled: Boolean,
    supportShowZero: { type: Boolean, default: !1 },
    isFilterNegativSign: { type: Boolean, default: !1 },
    asyncChange: Boolean,
    disableInput: Boolean,
    decimalLength: { type: Number, default: 0 },
    min: { type: Number, default: 0 },
    max: { type: Number, default: Number.MAX_SAFE_INTEGER },
    step: [Number, Object],
    disablePlus: Boolean,
    disableMinus: Boolean,
    longPress: { type: Boolean, default: !0 },
    showStepTip: Boolean,
    focus: Boolean,
    maxLength: { type: Number, default: Number.MAX_SAFE_INTEGER },
    simpleMode: Boolean,
    cursorSpacing: Number,
    extraKey: String,
    confirmType: { type: String, default: "done" },
    showGlass: { type: Boolean, default: !0 },
    supportEmpty: { type: Boolean, default: !1 },
    blurSupportEmpty: { type: Boolean, default: !1 },
    valuePrefix: { type: String, default: "" },
    valueAfter: { type: String, default: "" },
    preventTouch: { type: Boolean, default: !0 },
    lazyLoadKeyBoard: { type: Boolean, default: !1 },
  },
  data: function () {
    return { currentValue: "", isPCWeixin: i, isMpPlugin: r };
  },
  computed: {
    _step: function () {
      return "number" == typeof this.step
        ? { minusStep: this.step, plusStep: this.step }
        : Object.assign({ minusStep: 1, plusStep: 1 }, this.step);
    },
    hasPrefixOrAfter: function () {
      return !(!this.valuePrefix && !this.valueAfter);
    },
    pcInputWidth: function () {
      if (this.hasPrefixOrAfter)
        return 0.65 * (String(this.currentValue).length || 1) + 0.5 + "em";
    },
  },
  watch: {
    value: function (t) {
      s(t, this.currentValue) || (this.currentValue = this.format(t));
    },
  },
  created: function () {
    var t = this;
    0 != +this.value && (this.currentValue = this.format(this.value)),
      this.supportShowZero &&
        0 == +this.value &&
        (this.currentValue = this.format(this.value)),
      (this._dataWatchers = []),
      ["integer", "decimalLength", "min", "max"].forEach(function (e) {
        t._dataWatchers.push(t.$watch(e, t.check));
      });
  },
  unmounted: function () {
    this._dataWatchers.forEach(function (t) {
      t();
    });
  },
  methods: {
    check: function () {
      if ("" !== this.currentValue) {
        var t = this.format(this.currentValue);
        s(t, this.currentValue) || (this.currentValue = t);
      }
    },
    forceSetCurrentValue: function (t) {
      this.currentValue = t;
    },
    isDisabled: function (t) {
      return "plus" === t
        ? this.disabled || this.disablePlus || this.currentValue >= this.max
        : this.disabled || this.disableMinus || this.currentValue <= this.min;
    },
    onFocus: function () {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      this.$emit("focus", t.detail);
    },
    onBlur: function (t) {
      var e = t.detail.value;
      ("" === e && this.blurSupportEmpty) || (e = this.format(t.detail.value)),
        this.emitChange(e),
        this.$emit("blur", Object.assign({}, t.detail, { value: e }));
    },
    filter: function (t) {
      var e = this.isFilterNegativSign ? /[^0-9.\-]/g : /[^0-9.]/g;
      return (
        (t = String(t).replace(e, "")),
        this.integer && -1 !== t.indexOf(".") && (t = t.split(".")[0]),
        t
      );
    },
    format: function (t) {
      return (
        (this.supportEmpty && "" === t) ||
          ((t = "" === (t = this.filter(t)) ? 0 : +t),
          (t = Math.max(Math.min(this.max, t), this.min)),
          u(this.decimalLength) && (t = t.toFixed(this.decimalLength))),
        t
      );
    },
    onInput: function (t) {
      var e = (t.detail || {}).value,
        n = void 0 === e ? "" : e;
      if (this.integer && -1 !== n.indexOf(".")) this.currentValue = n;
      else {
        var i = this.filter(n);
        if (u(this.decimalLength) && -1 !== i.indexOf(".")) {
          var r = i.split(".");
          i = r[0] + "." + r[1].slice(0, this.decimalLength);
        }
        this.emitChange(i);
      }
    },
    emitChange: function (t) {
      this.asyncChange ||
        ((this.currentValue = t),
        this.isPCWeixin
          ? (this.$refs.input.valueSync = t)
          : (this.$refs.input.innerValue = t)),
        this.$emit("change", t);
    },
    onChange: function () {
      var t = this.type;
      if (this.isDisabled(t)) this.$emit("overlimit", t);
      else {
        var e = "minus" === t ? -this._step.minusStep : +this._step.plusStep,
          n = this.format(
            (function (t, e) {
              var n = Math.pow(10, 10);
              return Math.round((t + e) * n) / n;
            })(+this.currentValue, e)
          );
        this.emitChange(n), this.$emit(t);
      }
    },
    longPressStep: function () {
      var t = this;
      this.longPressTimer = setTimeout(function () {
        t.onChange(), t.longPressStep();
      }, 200);
    },
    onTap: function (t) {
      var e = t.currentTarget.dataset.type;
      (this.type = e),
        this.onChange(),
        this.$emit("tapClick", this.type, this.isLongPress);
    },
    onTouchStart: function (t) {
      var e = this;
      if (this.longPress) {
        clearTimeout(this.longPressTimer);
        var n = t.currentTarget.dataset.type;
        (this.type = n),
          (this.isLongPress = !1),
          (this.longPressTimer = setTimeout(function () {
            (e.isLongPress = !0),
              e.onChange(),
              e.longPressStep(),
              e.$emit("longPress", e.type);
          }, 600));
      }
    },
    onTouchEnd: function () {
      this.longPress && clearTimeout(this.longPressTimer);
    },
    onNext: function () {
      this.$emit("next");
    },
    onBuy: function () {
      this.$emit("buy");
    },
    onSell: function () {
      this.$emit("sell");
    },
  },
};
Array || e.resolveComponent("custom-input")();
var a = e._export_sfc(o, [
  [
    "render",
    function (t, n, i, r, s, u) {
      return e.e(
        {
          a: e.n("st-stepper__icon"),
          b: e.n(
            "st-stepper__button st-stepper__button--minus border--surround ^st-stepper__button"
          ),
          c: e.n(i.showStepTip ? "st-stepper__button--steptip" : ""),
          d: e.n(
            i.disabled || i.disableMinus || s.currentValue <= i.min
              ? "st-stepper__button-disabled"
              : ""
          ),
          e: e.o(function () {
            return u.onTap && u.onTap.apply(u, arguments);
          }),
          f: e.o(function () {
            return u.onTouchStart && u.onTouchStart.apply(u, arguments);
          }),
          g: e.o(function () {
            return u.onTouchEnd && u.onTouchEnd.apply(u, arguments);
          }),
          h: e.o(function () {
            return u.onTouchEnd && u.onTouchEnd.apply(u, arguments);
          }),
          i: s.isPCWeixin && !s.isMpPlugin,
        },
        s.isPCWeixin && !s.isMpPlugin
          ? e.e(
              { j: i.valuePrefix },
              i.valuePrefix ? { k: e.t(i.valuePrefix) } : {},
              {
                l: i.integer ? "number" : "text",
                m: s.currentValue,
                n: i.disabled || i.disableInput,
                o: i.maxLength,
                p: u.pcInputWidth,
                q: e.o(function () {
                  return u.onInput && u.onInput.apply(u, arguments);
                }),
                r: e.o(function () {
                  return u.onFocus && u.onFocus.apply(u, arguments);
                }),
                s: e.o(function () {
                  return u.onBlur && u.onBlur.apply(u, arguments);
                }),
                t: i.valueAfter,
              },
              i.valueAfter ? { v: e.t(i.valueAfter) } : {},
              { w: e.n(i.disabled || i.disableInput ? "disabled" : "") }
            )
          : {
              x: e.sr("input", "ee763b32-0"),
              y: e.o(u.onFocus),
              z: e.o(u.onInput),
              A: e.o(u.onBlur),
              B: e.o(u.onNext),
              C: e.o(u.onBuy),
              D: e.o(u.onSell),
              E: e.p({
                "text-align": "center",
                "key-board-theme": "custom",
                value: s.currentValue,
                integer: i.integer,
                disabled: i.disabled || i.disableInput,
                "extra-key": i.extraKey,
                "confirm-type": i.confirmType,
                "simple-mode": i.simpleMode,
                "max-length": i.maxLength,
                "show-glass": i.showGlass,
                "value-prefix": i.valuePrefix,
                "value-after": i.valueAfter,
                placeholder: i.placeholder,
                "prevent-touch": i.preventTouch,
                lazyLoad: i.lazyLoadKeyBoard,
              }),
            },
        {
          F: e.n("st-stepper__icon"),
          G: e.n(
            "st-stepper__button st-stepper__button--plus border--surround ^st-stepper__button"
          ),
          H: e.n(i.showStepTip ? "st-stepper__button--steptip" : ""),
          I: e.n(
            i.disabled || i.disablePlus || s.currentValue >= i.max
              ? "st-stepper__button-disabled"
              : ""
          ),
          J: e.o(function () {
            return u.onTap && u.onTap.apply(u, arguments);
          }),
          K: e.o(function () {
            return u.onTouchStart && u.onTouchStart.apply(u, arguments);
          }),
          L: e.o(function () {
            return u.onTouchEnd && u.onTouchEnd.apply(u, arguments);
          }),
          M: e.o(function () {
            return u.onTouchEnd && u.onTouchEnd.apply(u, arguments);
          }),
          N: e.n(i.focus ? "st-stepper--focus" : ""),
          O: e.n(i.simpleMode ? "st-stepper--simple" : ""),
        }
      );
    },
  ],
]);
wx.createComponent(a);
