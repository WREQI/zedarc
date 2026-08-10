var e = require("../../../../../../common/vendor.js");
global.__number_keyboard_instance = null;
var n = {
  components: {
    NumberKeyboard: function () {
      return "../number-keyboard/index.js";
    },
  },
  props: {
    value: [String, Number],
    placeholder: String,
    disabled: Boolean,
    readonly: Boolean,
    textAlign: { type: String, default: "left" },
    integer: Boolean,
    keyBoardTheme: { type: String, default: "default" },
    extraKey: String,
    showNext: Boolean,
    maxLength: { type: Number, default: Number.MAX_SAFE_INTEGER },
    confirmType: { type: String, default: "done" },
    simpleMode: Boolean,
    stepper: { type: Boolean, default: !1 },
    theme: { type: String, default: "lite" },
    fontColor: { type: String, default: "#262e40" },
  },
  data: function () {
    return {
      innerValue: this.value,
      showKeyboard: !1,
      cursorPosition: 0,
      isTouchMoving: !1,
    };
  },
  computed: {
    inputCls: function () {
      return [
        this.showKeyboard ? "focus" : "",
        this.disabled ? "fake-input-disabled" : "",
      ];
    },
    showGlass: function () {
      return !global.__embedded__mode && this.isTouchMoving;
    },
  },
  watch: {
    value: function (e) {
      this.innerValue = e;
    },
  },
  methods: {
    focus: function (e) {
      var n = this;
      global.__number_keyboard_instance &&
        global.__number_keyboard_instance !== this &&
        global.__number_keyboard_instance.onClose(),
        (global.__number_keyboard_instance = this),
        this.disabled ||
          this.readonly ||
          ((this.showKeyboard = !0),
          this.$emit("focus"),
          this.$nextTick(function () {
            n.getCursorPosition();
          }));
    },
    onInput: function (e) {
      if ("." === e && (!this.innerValue || this.innerValue.indexOf(".") > -1))
        return !1;
      var n =
        this.innerValue.slice(0, this.cursorPosition) +
        e +
        this.innerValue.slice(this.cursorPosition);
      n.length > this.maxLength ||
        ((this.innerValue = n),
        (this.cursorPosition = this.cursorPosition + String(e).length),
        "." !== e &&
          this.cursorPosition > this.innerValue.length &&
          (this.cursorPosition = this.innerValue.length - 1),
        this.$emit("input", { detail: { value: this.innerValue } }));
    },
    onDelete: function () {
      this.cursorPosition <= 0 ||
        ((this.innerValue =
          this.innerValue.slice(0, this.cursorPosition - 1) +
          this.innerValue.slice(this.cursorPosition)),
        (this.cursorPosition = this.cursorPosition - 1),
        this.$emit("input", { detail: { value: this.innerValue } }));
    },
    onClear: function () {
      (this.innerValue = ""),
        (this.cursorPosition = 0),
        this.$emit("input", { detail: { value: this.innerValue } });
    },
    onClose: function () {
      this.$emit("blur", { detail: { value: this.innerValue } }),
        (this.showKeyboard = !1);
    },
    blur: function () {
      this.onClose();
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
    ontouchmove: function (e) {
      this.showKeyboard &&
        ((this.isTouchMoving = !0),
        (e.target.x = e.touches[0].clientX),
        this.getCursorPosition(e));
    },
    ontouchend: function (e) {
      this.isTouchMoving = !1;
    },
    getCursorPosition: function (n) {
      var o = this;
      n
        ? e.index
            .createSelectorQuery()
            .in(this)
            .select(".js-value")
            .boundingClientRect(function (e) {
              if (n.target.x - e.left <= 0) o.cursorPosition = 0;
              else if (n.target.x - e.left >= e.width)
                o.cursorPosition = o.innerValue.length;
              else {
                var i = e.width / o.innerValue.length;
                o.cursorPosition = Math.floor((n.target.x - e.left) / i);
              }
            })
            .exec()
        : (this.cursorPosition = this.innerValue.length);
    },
    handleMinus: function () {
      this.$emit("minus");
    },
    handlePlus: function () {
      this.$emit("plus");
    },
    handleSave: function () {
      this.$emit("save");
    },
  },
};
Array || e.resolveComponent("NumberKeyboard")();
var o = e._export_sfc(n, [
  [
    "render",
    function (n, o, i, t, s, r) {
      return e.e(
        { a: "" === s.innerValue },
        "" === s.innerValue ? { b: e.t(i.placeholder) } : {},
        {
          c: s.showKeyboard,
          d: e.o(function () {
            return r.onClose && r.onClose.apply(r, arguments);
          }, 3424),
          e: e.o(function () {}, 3425),
          f: r.showGlass,
        },
        r.showGlass
          ? e.e({ g: !s.innerValue }, (s.innerValue, {}), {
              h: e.f(s.innerValue, function (n, o, i) {
                return e.e(
                  { a: s.cursorPosition === o },
                  s.cursorPosition === o
                    ? { b: e.n(s.isTouchMoving ? "no-animation" : "") }
                    : {},
                  { c: e.t(n), d: o, e: s.cursorPosition === o + 1 },
                  s.cursorPosition === o + 1
                    ? { f: e.n(s.isTouchMoving ? "no-animation" : "") }
                    : {},
                  { g: o }
                );
              }),
            })
          : {},
        { i: !s.innerValue },
        (s.innerValue, {}),
        {
          j: e.f(s.innerValue, function (n, o, i) {
            return e.e(
              { a: s.cursorPosition === o },
              s.cursorPosition === o
                ? { b: e.n(s.isTouchMoving ? "no-animation" : "") }
                : {},
              { c: e.t(n), d: o, e: s.cursorPosition === o + 1 },
              s.cursorPosition === o + 1
                ? { f: e.n(s.isTouchMoving ? "no-animation" : "") }
                : {},
              { g: o }
            );
          }),
          k: i.fontColor,
          l: e.n(r.inputCls),
          m: e.o(function () {
            return r.focus && r.focus.apply(r, arguments);
          }, 3426),
          n: e.o(function () {
            return r.ontouchmove && r.ontouchmove.apply(r, arguments);
          }, 3427),
          o: e.o(function () {
            return r.ontouchend && r.ontouchend.apply(r, arguments);
          }, 3428),
          p: e.o(r.onInput, 3429),
          q: e.o(r.onDelete, 3430),
          r: e.o(r.onClear, 3431),
          s: e.o(r.onClose, 3432),
          t: e.o(r.onNext, 3433),
          v: e.o(r.onBuy, 3434),
          w: e.o(r.onSell, 3435),
          x: e.o(r.handleMinus, 3436),
          y: e.o(r.handlePlus, 3437),
          z: e.o(r.handleSave, 3438),
          A: e.p({
            show: s.showKeyboard,
            theme: i.keyBoardTheme,
            "extra-key": i.integer ? (i.extraKey ? i.extraKey : "") : ".",
            "confirm-type": i.confirmType,
            stepper: i.stepper,
            "simple-mode": i.simpleMode,
          }),
          B: e.n("fake-input-container-".concat(i.textAlign)),
          C: e.n(i.simpleMode ? "fake-input-container--simple" : ""),
          D: e.n("fake-input-container-".concat(i.theme)),
        }
      );
    },
  ],
]);
wx.createComponent(o);
