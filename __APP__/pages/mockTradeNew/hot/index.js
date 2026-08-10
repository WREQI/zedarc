var e = require("../../../common/vendor.js"),
  o = {
    options: { styleIsolation: "shared" },
    components: {
      mocktrade: function () {
        return "../@tencent/st-act-mocktrade/src/pages/hot/index.js";
      },
    },
    onShareAppMessage: function () {
      return {
        title: "我在腾讯模拟炒股周赛赚大了",
        path: "/pages/mockTradeNew/home/index",
        imageUrl:
          "https://st.gtimg.com/design/f92bacaa3643f6c2a49f056daa1b9478.png",
      };
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("mocktrade")
  )();
var t = e._export_sfc(o, [
  [
    "render",
    function (e, o, t, r, a, n) {
      return { a: e.rootFontSize };
    },
  ],
  ["__scopeId", "data-v-62a07b92"],
]);
(o.__runtimeHooks = 2), wx.createPage(t);
