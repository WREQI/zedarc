var e = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var t = require("../../vendor.js"),
  r = {
    name: "SymbolKeyboard",
    components: {
      FullKeyboard: function () {
        return "./FullKeyboard.js";
      },
    },
    props: {
      show: { type: Boolean, default: !1 },
      embedded: { type: Boolean, default: !1 },
      validSymbols: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    setup: function (r, n) {
      var o = n.emit;
      return {
        keys: t.computed(function () {
          return (function () {
            var t = [
                { keys: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"] },
                { keys: ["'", '"', "=", "_", "`", ":", ";", "?", "~", "|"] },
                {
                  keys: ["+", "-", "\\", "/", "[", "]", "{", "}"],
                  paddingLeft: !0,
                },
                { keys: [",", ".", "<", ">"] },
              ].map(function (t) {
                return e(
                  e({}, t),
                  {},
                  {
                    keys: t.keys
                      .filter(function (e) {
                        return (
                          !(r.validSymbols.length > 0) ||
                          r.validSymbols.includes(e)
                        );
                      })
                      .map(function (e) {
                        return { text: e, type: "normal" };
                      }),
                  }
                );
              }),
              n = t
                .map(function (e) {
                  return e.keys.map(function (e) {
                    return e.text;
                  });
                })
                .flat();
            return (
              o("set-symbols", n),
              t[2].keys.push({ text: "delete", type: "delete" }),
              t[3].keys.unshift(
                { text: "123", type: "switch-keyboard" },
                { text: "ABC", type: "switch-keyboard" }
              ),
              t[3].keys.push({ text: "确认", type: "confirm" }),
              t
            );
          })();
        }),
        handlePress: function (e, t) {
          "switch-keyboard" !== t
            ? "delete" !== t
              ? "confirm" !== t
                ? e && o("input", e)
                : o("confirm")
              : o("delete")
            : o("switch-keyboard", e);
        },
      };
    },
  };
Array || t.resolveComponent("full-keyboard")();
var n = t._export_sfc(r, [
  [
    "render",
    function (e, r, n, o, s, u) {
      return {
        a: t.o(o.handlePress),
        b: t.p({ keys: o.keys, embedded: n.embedded }),
        c: n.show,
      };
    },
  ],
  ["__scopeId", "data-v-163f2578"],
]);
wx.createComponent(n);
