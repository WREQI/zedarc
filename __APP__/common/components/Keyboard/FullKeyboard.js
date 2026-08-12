require("../../../app.js");
var e = require("../../vendor.js"),
  t = {
    name: "StLetterKeyboard",
    props: {
      keys: {
        type: Array,
        default: function () {
          return [];
        },
      },
      embedded: { type: Boolean, default: !1 },
    },
    setup: function (e, t) {
      var r = t.emit;
      return {
        handlePressKey: function (e, t) {
          r("press", e, t);
        },
        formatDisplayText: function (e) {
          return e;
        },
      };
    },
  },
  r = e._export_sfc(t, [
    [
      "render",
      function (t, r, n, a, s, d) {
        return {
          a: e.f(n.keys, function (t, r, n) {
            return {
              a: e.f(t.keys, function (t, r, n) {
                var s = t.type,
                  d = t.text;
                return e.e(
                  { a: "delete" === s },
                  "delete" === s ||
                    "shift-lowercase" === s ||
                    "shift-uppercase" === s
                    ? {}
                    : { d: e.t(a.formatDisplayText(d)) },
                  {
                    b: "shift-lowercase" === s,
                    c: "shift-uppercase" === s,
                    e: d,
                    f: "st-key__".concat(s),
                    g: s ? 1 : "",
                    h: e.o(function (e) {
                      return a.handlePressKey(d, s);
                    }, d),
                  }
                );
              }),
              b: t.paddingLeft ? 1 : "",
              c: t.paddingRight ? 1 : "",
              d: r,
            };
          }),
          b: n.embedded ? 1 : "",
        };
      },
    ],
    ["__scopeId", "data-v-66bbd1d3"],
  ]);
wx.createComponent(r);
