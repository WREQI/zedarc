require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../hooks/useHome.js"),
  r = require("../../../../../../common/vendor.js"),
  l = {
    setup: function (l, c) {
      var n = c.emit,
        a = r.computed(function () {
          return ["mpwzq", "wzqlight"].includes("mpweapp");
        });
      return {
        canclear: e.useHome().canclear,
        clearAll: function () {
          n("clearAll");
        },
        isSimpleMode: a,
      };
    },
  },
  c = r._export_sfc(l, [
    [
      "render",
      function (e, l, c, n, a, t) {
        return {
          a: n.canclear ? 1 : "",
          b: n.isSimpleMode ? 1 : "",
          c: r.o(function () {
            return n.clearAll && n.clearAll.apply(n, arguments);
          }, 3057),
          d: r.n(n.canclear ? "text-clear-blue" : "text-clear-grey"),
          e: r.n(n.isSimpleMode ? "text-clear-lite" : ""),
          f: r.o(function () {
            return n.clearAll && n.clearAll.apply(n, arguments);
          }, 3058),
        };
      },
    ],
    ["__scopeId", "data-v-da573338"],
  ]);
wx.createComponent(c);
