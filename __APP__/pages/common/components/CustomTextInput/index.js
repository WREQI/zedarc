require("../../../app.js");
var e = require("../../vendor.js");
e.index.__keyboard_instance = null;
var n = {
  name: "CustomTextInput",
  components: {
    StKeyboard: function () {
      return "../Keyboard/index.js";
    },
  },
  props: {
    value: [String, Number],
    placeholder: String,
    disabled: Boolean,
    readonly: Boolean,
    textAlign: { type: String, default: "left" },
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
    keepFocus: { type: Boolean, default: !1 },
    passwordMode: { type: Boolean, default: !1 },
    validSymbols: {
      type: Array,
      default: function () {
        return [];
      },
    },
    embedded: { type: Boolean, default: !1 },
  },
  emits: ["input", "focus", "blur", "next", "buy", "sell", "confirm"],
  setup: function (n, o) {
    var t = o.emit,
      a = e.ref(n.value),
      u = e.ref(!1),
      l = e.ref(0),
      i = e.ref(!1),
      r = e.ref(!1),
      s = e.ref(null),
      c = e.ref(-1),
      d = null;
    n.keepFocus && (u.value = !0);
    var f = e.computed(function () {
      return [u.value ? "focus" : "", n.disabled ? "fake-input-disabled" : ""];
    });
    function v() {
      n.keepFocus ||
        (t("blur", { detail: { value: a.value } }), (u.value = !1));
    }
    function p(n) {
      n
        ? e.index
            .createSelectorQuery()
            .in(this)
            .select(".js-value")
            .boundingClientRect(function (e) {
              if (n.detail.x - e.left <= 0) l.value = 0;
              else if (n.detail.x - e.left >= e.width) l.value = a.value.length;
              else {
                var o = e.width / a.value.length;
                l.value = Math.floor((n.detail.x - e.left) / o);
              }
            })
            .exec()
        : (l.value = a.value.length);
    }
    function y() {
      d && (clearTimeout(d), (d = null));
    }
    return (
      e.watch(
        function () {
          return n.value;
        },
        function (e) {
          a.value = e;
        }
      ),
      e.watch(u, function (e) {
        e && n.lazyLoad && !r.value && (r.value = !0);
      }),
      e.onBeforeUnmount(function () {
        (e.index.__keyboard_instance = null), y();
      }),
      {
        innerValue: a,
        showKeyboard: u,
        cursorPosition: l,
        isTouchMoving: i,
        hasFirstLazyLoaded: r,
        inputRef: s,
        inputCls: f,
        tempUnmaskIndex: c,
        focus: function (o) {
          e.index.__keyboard_instance &&
            e.index.__keyboard_instance !== this &&
            e.index.__keyboard_instance.onClose(),
            (e.index.__keyboard_instance = this),
            n.disabled ||
              n.readonly ||
              ((u.value = !0),
              t("focus"),
              e.nextTick$1(function () {
                p(o);
              }));
        },
        onInput: function (e) {
          var o,
            u = a.value.slice(0, l.value) + e + a.value.slice(l.value);
          u.length > n.maxLength ||
            ((a.value = u),
            (l.value = l.value + String(e).length),
            l.value > a.value.length && (l.value = a.value.length),
            (o = l.value - 1),
            y(),
            (c.value = o),
            (d = setTimeout(function () {
              (c.value = -1), y();
            }, 500)),
            t("input", { detail: { value: a.value } }));
        },
        onArrow: function (e) {
          "left" === e && l.value > 0 && (l.value = l.value - 1),
            "right" === e &&
              l.value < a.value.length &&
              (l.value = l.value + 1);
        },
        onDelete: function () {
          l.value <= 0 ||
            ((a.value = a.value.slice(0, l.value - 1) + a.value.slice(l.value)),
            (l.value = l.value - 1),
            (c.value = -1),
            t("input", { detail: { value: a.value } }));
        },
        onClear: function () {
          (a.value = ""),
            (l.value = 0),
            t("input", { detail: { value: a.value } });
        },
        onClose: v,
        blur: function () {
          v();
        },
        onNext: function () {
          t("next");
        },
        onBuy: function () {
          t("buy");
        },
        onSell: function () {
          t("sell");
        },
        onConfirm: function () {
          t("confirm");
        },
        ontouchmove: function (e) {
          u.value &&
            ((i.value = !0), (e.detail.x = e.touches[0].clientX), p(e));
        },
        ontouchend: function (e) {
          i.value = !1;
        },
        getCursorPosition: p,
        formatDisplayText: function (e) {
          return e;
        },
      }
    );
  },
};
Array || e.resolveComponent("StKeyboard")();
var o = e._export_sfc(n, [
  [
    "render",
    function (n, o, t, a, u, l) {
      return e.e(
        { a: "" === a.innerValue },
        "" === a.innerValue ? { b: e.t(t.placeholder) } : {},
        { c: t.preventTouch },
        t.preventTouch
          ? {
              d: a.showKeyboard,
              e: e.o(function () {
                return a.onClose && a.onClose.apply(a, arguments);
              }),
              f: e.o(function () {}),
            }
          : {
              g: a.showKeyboard,
              h: e.o(function () {
                return a.onClose && a.onClose.apply(a, arguments);
              }),
            },
        { i: t.showGlass && a.isTouchMoving && !t.passwordMode },
        t.showGlass && a.isTouchMoving && !t.passwordMode
          ? e.e({ j: !a.innerValue }, (a.innerValue, {}), {
              k: e.f(a.innerValue, function (n, o, t) {
                return e.e(
                  { a: 0 === a.cursorPosition && a.cursorPosition === o },
                  0 === a.cursorPosition && a.cursorPosition === o
                    ? { b: e.n(a.isTouchMoving ? "no-animation" : "") }
                    : {},
                  {
                    c: e.t(a.formatDisplayText(n)),
                    d: o,
                    e: a.cursorPosition === o + 1,
                  },
                  a.cursorPosition === o + 1
                    ? { f: e.n(a.isTouchMoving ? "no-animation" : "") }
                    : {},
                  { g: o }
                );
              }),
            })
          : {},
        { l: t.valuePrefix },
        t.valuePrefix ? { m: e.t(t.valuePrefix) } : {},
        { n: !a.innerValue },
        (a.innerValue, {}),
        {
          o: e.f(a.innerValue, function (n, o, u) {
            return e.e(
              { a: 0 === a.cursorPosition && a.cursorPosition === o },
              0 === a.cursorPosition && a.cursorPosition === o
                ? { b: e.n(a.isTouchMoving ? "no-animation" : "") }
                : {},
              { c: !t.passwordMode || o === a.tempUnmaskIndex },
              t.passwordMode && o !== a.tempUnmaskIndex
                ? {}
                : { d: e.t(a.formatDisplayText(n)), e: o },
              { f: a.cursorPosition === o + 1 },
              a.cursorPosition === o + 1
                ? { g: e.n(a.isTouchMoving ? "no-animation" : "") }
                : {},
              { h: o }
            );
          }),
          p: t.valueAfter,
        },
        t.valueAfter ? { q: e.t(t.valueAfter) } : {},
        {
          r: e.n(a.inputCls),
          s: e.o(function () {
            return a.focus && a.focus.apply(a, arguments);
          }),
          t: e.o(function () {
            return a.ontouchmove && a.ontouchmove.apply(a, arguments);
          }),
          v: e.o(function () {
            return a.ontouchend && a.ontouchend.apply(a, arguments);
          }),
          w: !t.lazyLoad || a.hasFirstLazyLoaded || a.showKeyboard,
        },
        !t.lazyLoad || a.hasFirstLazyLoaded || a.showKeyboard
          ? {
              x: e.o(a.onInput),
              y: e.o(a.onArrow),
              z: e.o(a.onDelete),
              A: e.o(a.onClear),
              B: e.o(a.onClose),
              C: e.o(a.onConfirm),
              D: e.p({
                show: a.showKeyboard,
                "valid-symbols": t.validSymbols,
                embedded: t.embedded,
              }),
            }
          : {},
        {
          E: e.n("fake-input-container-".concat(t.textAlign)),
          F: e.n(t.simpleMode ? "fake-input-container--simple" : ""),
        }
      );
    },
  ],
]);
wx.createComponent(o);
