require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../common/vendor.js"),
  r = {
    components: {},
    props: {},
    setup: function (r, n) {
      n.emit;
      return {
        isSimpleMode: e.computed(function () {
          return ["mpwzq", "wzqlight"].includes("mpweapp");
        }),
      };
    },
  },
  n = e._export_sfc(r, [
    [
      "render",
      function (e, r, n, t, o, i) {
        return { a: t.isSimpleMode ? "" : 1 };
      },
    ],
    ["__scopeId", "data-v-d87ed1a5"],
  ]);
wx.createComponent(n);
