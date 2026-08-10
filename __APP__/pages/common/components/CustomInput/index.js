require("../../../app.js");
var e = require("../../vendor.js");
e.index.__number_keyboard_instance = null;
var n = {
  components: {
    NumberKeyboard: function () {
      return "../NumberKeyboard/index.js";
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
    showGlass: { type: Boolean, default: !0 },
    valuePrefix: { type: String, default: "" },
    valueAfter: { type: String, default: "" },
    preventTouch: { type: Boolean, default: !0 },
    decimalLength: { type: Number, default: 0 },
    lazyLoad: { type: Boolean, default: !1 },
  },
  data: function () {
    return {
      innerValue: this.value,
      showKeyboard: !1,
      cursorPosition: 0,
      isTouchMoving: !1,
      hasFirstLazyLoaded: !1,
    };
  },
  computed: {
    inputCls: function () {
      return [
        this.showKeyboard ? "focus" : "",
        this.disabled ? "fake-input-disabled" : "",
      ];
    },
  },
  watch: {
    value: function (e) {
      this.innerValue = e;
    },
    showKeyboard: function (e) {
      e &&
        this.lazyLoad &&
        !this.hasFirstLazyLoaded &&
        (this.hasFirstLazyLoaded = !0);
    },
  },
  setup: function () {
    return (
      e.onBeforeUnmount(function () {
        e.index.__number_keyboard_instance = null;
      }),
      {}
    );
  },
  methods: {
    focus: function (n) {
      var i = this;
      e.index.__number_keyboard_instance &&
        e.index.__number_keyboard_instance !== this &&
        e.index.__number_keyboard_instance.onClose(),
        (e.index.__number_keyboard_instance = this),
        this.disabled ||
          this.readonly ||
          ((this.showKeyboard = !0),
          this.$emit("focus"),
          this.$nextTick(function () {
            i.getCursorPosition(n);
          }));
    },
    onInput: function (e) {
      if ("." === e && (!this.innerValue || this.innerValue.indexOf(".") > -1))
        return !1;
      var n =
        this.innerValue.slice(0, this.cursorPosition) +
        e +
        this.innerValue.slice(this.cursorPosition);
      if (!(n.length > this.maxLength)) {
        if (this.decimalLength > 0 && n.indexOf(".") > -1) {
          var i = String(n).split(".");
          i[1].length > this.decimalLength &&
            (n = i[0] + "." + i[1].slice(0, this.decimalLength));
        }
        (this.innerValue = n),
          (this.cursorPosition = this.cursorPosition + String(e).length),
          "." !== e &&
            this.cursorPosition > this.innerValue.length &&
            (this.cursorPosition = this.innerValue.length),
          this.$emit("input", { detail: { value: this.innerValue } });
      }
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
        ((this.isTouchMoving = !0), this.getCursorPosition(e));
    },
    ontouchend: function (e) {
      this.isTouchMoving = !1;
    },
    getCursorPosition: function (n) {
      var i,
        o = this;
      n
        ? ((i = this.isTouchMoving ? n.touches[0].clientX : n.detail.x),
          e.index
            .createSelectorQuery()
            .in(this)
            .select(".js-value")
            .boundingClientRect(function (e) {
              if (i - e.left <= 0) o.cursorPosition = 0;
              else if (i - e.left >= e.width)
                o.cursorPosition = o.innerValue.length;
              else {
                var n = e.width / o.innerValue.length;
                o.cursorPosition = Math.floor((i - e.left) / n);
              }
            })
            .exec())
        : (this.cursorPosition = this.innerValue.length);
    },
  },
};
Array || e.resolveComponent("NumberKeyboard")();
var i = e._export_sfc(n, [
  [
    "render",
    function (n, i, o, t, r, s) {
      return e.e(
        { a: "" === r.innerValue },
        "" === r.innerValue ? { b: e.t(o.placeholder) } : {},
        { c: o.preventTouch },
        o.preventTouch
          ? {
              d: r.showKeyboard,
              e: e.o(function () {
                return s.onClose && s.onClose.apply(s, arguments);
              }),
              f: e.o(function () {}),
            }
          : {
              g: r.showKeyboard,
              h: e.o(function () {
                return s.onClose && s.onClose.apply(s, arguments);
              }),
            },
        { i: o.showGlass && r.isTouchMoving },
        o.showGlass && r.isTouchMoving
          ? e.e({ j: !r.innerValue }, (r.innerValue, {}), {
              k: e.f(r.innerValue, function (n, i, o) {
                return e.e(
                  { a: r.cursorPosition === i },
                  r.cursorPosition === i
                    ? { b: e.n(r.isTouchMoving ? "no-animation" : "") }
                    : {},
                  { c: e.t(n), d: i, e: r.cursorPosition === i + 1 },
                  r.cursorPosition === i + 1
                    ? { f: e.n(r.isTouchMoving ? "no-animation" : "") }
                    : {},
                  { g: i }
                );
              }),
            })
          : {},
        { l: o.valuePrefix },
        o.valuePrefix ? { m: e.t(o.valuePrefix) } : {},
        { n: !r.innerValue },
        (r.innerValue, {}),
        {
          o: e.f(r.innerValue, function (n, i, o) {
            return e.e(
              { a: r.cursorPosition === i },
              r.cursorPosition === i
                ? { b: e.n(r.isTouchMoving ? "no-animation" : "") }
                : {},
              { c: e.t(n), d: i, e: r.cursorPosition === i + 1 },
              r.cursorPosition === i + 1
                ? { f: e.n(r.isTouchMoving ? "no-animation" : "") }
                : {},
              { g: i }
            );
          }),
          p: o.valueAfter,
        },
        o.valueAfter ? { q: e.t(o.valueAfter) } : {},
        {
          r: e.n(s.inputCls),
          s: e.o(function () {
            return s.focus && s.focus.apply(s, arguments);
          }),
          t: e.o(function () {
            return s.ontouchmove && s.ontouchmove.apply(s, arguments);
          }),
          v: e.o(function () {
            return s.ontouchend && s.ontouchend.apply(s, arguments);
          }),
          w: !o.lazyLoad || r.hasFirstLazyLoaded || r.showKeyboard,
        },
        !o.lazyLoad || r.hasFirstLazyLoaded || r.showKeyboard
          ? {
              x: e.o(s.onInput),
              y: e.o(s.onDelete),
              z: e.o(s.onClear),
              A: e.o(s.onClose),
              B: e.o(s.onNext),
              C: e.o(s.onBuy),
              D: e.o(s.onSell),
              E: e.p({
                show: r.showKeyboard,
                theme: o.keyBoardTheme,
                "extra-key": o.integer ? (o.extraKey ? o.extraKey : "") : ".",
                "confirm-type": o.confirmType,
              }),
            }
          : {},
        {
          F: e.n("fake-input-container-".concat(o.textAlign)),
          G: e.n(o.simpleMode ? "fake-input-container--simple" : ""),
        }
      );
    },
  ],
]);
wx.createComponent(i);
