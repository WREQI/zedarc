var e = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var t = require("../../vendor.js"),
  r = {
    name: "StLetterKeyboard",
    components: {
      FullKeyboard: function () {
        return "./FullKeyboard.js";
      },
    },
    props: {
      show: { type: Boolean, default: !1 },
      embedded: { type: Boolean, default: !1 },
    },
    setup: function (r, s) {
      var n = s.emit,
        a = t.ref(!0);
      return (
        t.watch(
          function () {
            return r.show;
          },
          function (e) {
            e && (a.value = !0);
          }
        ),
        {
          keys: t.computed(function () {
            var t = [
              { keys: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"] },
              {
                keys: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
                paddingLeft: !0,
                paddingRight: !0,
              },
              { keys: ["z", "x", "c", "v", "b", "n", "m"] },
            ].map(function (t) {
              return e(
                e({}, t),
                {},
                {
                  keys: t.keys.map(function (e) {
                    return {
                      text: a.value ? e : e.toUpperCase(),
                      type: "normal",
                    };
                  }),
                }
              );
            });
            return (
              t[2].keys.unshift({
                text: "shift",
                type: a.value ? "shift-uppercase" : "shift-lowercase",
              }),
              t[2].keys.push({ text: "delete", type: "delete" }),
              t.push({
                keys: [
                  { text: "123", type: "switch-keyboard" },
                  { text: "符号", type: "switch-keyboard" },
                  { text: "空格", type: "space" },
                  { text: "确认", type: "confirm" },
                ],
              }),
              t
            );
          }),
          handlePress: function (e, t) {
            "shift-lowercase" !== t
              ? "shift-uppercase" !== t
                ? "switch-keyboard" !== t
                  ? "space" !== t
                    ? "delete" !== t
                      ? "confirm" !== t
                        ? e && n("input", e)
                        : n("confirm")
                      : n("delete")
                    : n("input", " ")
                  : n("switch-keyboard", e)
                : (a.value = !1)
              : (a.value = !0);
          },
        }
      );
    },
  };
Array || t.resolveComponent("full-keyboard")();
var s = t._export_sfc(r, [
  [
    "render",
    function (e, r, s, n, a, o) {
      return {
        a: t.o(n.handlePress),
        b: t.p({ keys: n.keys, embedded: s.embedded }),
        c: s.show,
      };
    },
  ],
  ["__scopeId", "data-v-6a6fffbc"],
]);
wx.createComponent(s);
