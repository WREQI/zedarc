require("../../../app.js");
var e = require("../../vendor.js"),
  o = {
    name: "StKeyboard",
    components: {
      StNumberKeyboard: function () {
        return "../NumberKeyboard/index.js";
      },
      StLetterKeyboard: function () {
        return "./LetterKeyboard.js";
      },
      StSymbolKeyboard: function () {
        return "./SymbolKeyboard.js";
      },
    },
    props: {
      show: { type: Boolean, default: !1 },
      validSymbols: {
        type: Array,
        default: function () {
          return [];
        },
      },
      embedded: { type: Boolean, default: !1 },
    },
    emits: ["input", "arrow", "delete", "clear", "confirm", "switch-keyboard"],
    setup: function (o, n) {
      var r = n.emit,
        t = e.ref(!0),
        a = e.ref(!1),
        d = e.ref(!1);
      return (
        e.onMounted(function () {}),
        e.onBeforeUnmount(function () {}),
        {
          showNumberKeyboard: t,
          showLetterKeyboard: a,
          showSymbolKeyboard: d,
          handleSwitchKeyboard: function (e) {
            switch (e) {
              case "123":
                (t.value = !0), (a.value = !1), (d.value = !1);
                break;
              case "ABC":
                (t.value = !1), (a.value = !0), (d.value = !1);
                break;
              case "符号":
                (t.value = !1), (a.value = !1), (d.value = !0);
            }
          },
          onInput: function (e) {
            r("input", e);
          },
          onDelete: function () {
            r("delete");
          },
          onClear: function () {
            r("clear");
          },
          onConfirm: function () {
            r("confirm");
          },
          setSymbolKeys: function (e) {},
        }
      );
    },
  };
Array ||
  (
    e.resolveComponent("st-number-keyboard") +
    e.resolveComponent("st-letter-keyboard") +
    e.resolveComponent("st-symbol-keyboard")
  )();
var n = e._export_sfc(o, [
  [
    "render",
    function (o, n, r, t, a, d) {
      return {
        a: e.o(t.handleSwitchKeyboard),
        b: e.o(t.onInput),
        c: e.o(t.onDelete),
        d: e.o(t.onClear),
        e: e.o(t.onConfirm),
        f: e.p({
          show: r.show && t.showNumberKeyboard,
          "listen-keydown": !1,
          embedded: r.embedded,
          theme: "complex-password",
          "confirm-type": "confirm",
        }),
        g: e.o(t.handleSwitchKeyboard),
        h: e.o(t.onInput),
        i: e.o(t.onDelete),
        j: e.o(t.onConfirm),
        k: e.p({ show: r.show && t.showLetterKeyboard, embedded: r.embedded }),
        l: e.o(t.handleSwitchKeyboard),
        m: e.o(t.onInput),
        n: e.o(t.onDelete),
        o: e.o(t.onConfirm),
        p: e.o(t.setSymbolKeys),
        q: e.p({
          show: r.show && t.showSymbolKeyboard,
          "valid-symbols": r.validSymbols,
          embedded: r.embedded,
        }),
      };
    },
  ],
  ["__scopeId", "data-v-ae6545fa"],
]);
wx.createComponent(n);
