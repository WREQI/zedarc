var e = require("../../../../../common/vendor.js"),
  t = e.defineComponent({
    props: { status: { type: String, default: "" } },
    setup: function (t) {
      return {
        tipText: e.computed(function () {
          var e = "暂时无法获取数据";
          switch (t.status) {
            case "D":
              e = "已退市";
              break;
            case "U":
              e = "待上市";
              break;
            case "N":
              e = "待发售";
              break;
            case "I":
              e = "发售中";
          }
          return e;
        }),
      };
    },
  }),
  r = e._export_sfc(t, [
    [
      "render",
      function (t, r, n, a, c, s) {
        return { a: e.t(t.tipText) };
      },
    ],
    ["__scopeId", "data-v-12ac41bc"],
  ]);
wx.createComponent(r);
