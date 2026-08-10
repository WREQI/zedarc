require("../../../app.js");
var e = require("../../../common/vendor.js"),
  r = {
    components: {
      RichTextComp: function () {
        return "./rich-text-mp.js";
      },
    },
    props: { content: { required: !0, type: String } },
  };
Array || e.resolveComponent("rich-text-comp")();
var t = e._export_sfc(r, [
  [
    "render",
    function (r, t, n, o, c, p) {
      return { a: e.p({ content: n.content }) };
    },
  ],
]);
wx.createComponent(t);
