var e = require("../../../../../../../common/vendor.js"),
  n = {
    setup: function (n, o) {
      var t = o.emit,
        r = e.ref(!0);
      return {
        showContent: r,
        closeSemimask: function () {
          r.value = !1;
          var e = setTimeout(function () {
            t("closeSemimask"), clearTimeout(e);
          }, 300);
        },
      };
    },
  },
  o = e._export_sfc(n, [
    [
      "render",
      function (n, o, t, r, s, c) {
        return {
          a: e.n(r.showContent ? "up" : "down"),
          b: e.o(function () {}, 2479),
          c: e.n(r.showContent ? "in" : "out"),
          d: e.o(function () {
            return r.closeSemimask && r.closeSemimask.apply(r, arguments);
          }, 2480),
        };
      },
    ],
    ["__scopeId", "data-v-3217d037"],
  ]);
wx.createComponent(o);
