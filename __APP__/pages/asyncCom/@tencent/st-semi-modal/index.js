var e = require("../../../../common/vendor.js"),
  n = {
    props: { skin: { type: String, default: "white" } },
    setup: function (n, t) {
      var o = t.emit,
        s = e.ref(!0);
      return {
        showContent: s,
        closeSemimask: function () {
          s.value = !1;
          var e = setTimeout(function () {
            o("closeSemimask"), clearTimeout(e);
          }, 300);
        },
      };
    },
  },
  t = e._export_sfc(n, [
    [
      "render",
      function (n, t, o, s, r, i) {
        return {
          a: e.n(
            "dark" === o.skin || "black" === o.skin
              ? "semi-mask-content-dark"
              : ""
          ),
          b: e.n(s.showContent ? "up" : "down"),
          c: e.o(function () {}, 2429),
          d: e.n(s.showContent ? "in" : "out"),
          e: e.o(function () {
            return s.closeSemimask && s.closeSemimask.apply(s, arguments);
          }, 2430),
        };
      },
    ],
    ["__scopeId", "data-v-816252c7"],
  ]);
wx.createComponent(t);
