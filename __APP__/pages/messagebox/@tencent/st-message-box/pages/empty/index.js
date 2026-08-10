require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../common/vendor.js"),
  r = {
    props: { reason: { type: String, default: "暂无新消息" } },
    setup: function () {
      var r = e.computed(function () {
          return ["mpwzq", "wzqlight"].includes("mpweapp");
        }),
        i = e.inject("skin");
      return (
        e.inject("stockBridge").report("yy.message_box.empty_page_brow"),
        { isSimpleMode: r, skin: i }
      );
    },
  },
  i = e._export_sfc(r, [
    [
      "render",
      function (r, i, n, t, s, o) {
        return e.e(
          { a: e.t(n.reason), b: t.isSimpleMode },
          (t.isSimpleMode || t.isSimpleMode || t.skin, {}),
          { c: !t.isSimpleMode && "dark" === t.skin }
        );
      },
    ],
    ["__scopeId", "data-v-a7f5f46c"],
  ]);
wx.createComponent(i);
