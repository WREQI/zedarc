require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../common/vendor.js"),
  i = {
    setup: function () {
      return {
        isSimpleMode: e.computed(function () {
          return ["mpwzq", "wzqlight"].includes("mpweapp");
        }),
        skin: e.inject("skin"),
      };
    },
  },
  n = e._export_sfc(i, [
    [
      "render",
      function (i, n, r, s, t, o) {
        return e.e(
          { a: s.isSimpleMode },
          (s.isSimpleMode || s.isSimpleMode || s.skin, {}),
          { b: !s.isSimpleMode && "dark" === s.skin }
        );
      },
    ],
    ["__scopeId", "data-v-a9eb006f"],
  ]);
wx.createComponent(n);
