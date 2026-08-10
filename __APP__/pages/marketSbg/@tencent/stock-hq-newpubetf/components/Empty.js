var t = require("../../../../../common/vendor.js"),
  e = {
    components: {
      Empty: function () {
        return "./Empty/index.js";
      },
    },
    props: ["from"],
    data: function () {
      return {};
    },
    computed: {},
    created: function () {},
    mounted: function () {},
    methods: {
      gotoDetail: function () {
        t.StockBridge.report("hq.etfpage.newpubetf_goto_more_etf_click"),
          this.$emit("switchTab", 3);
      },
    },
  };
Array || t.resolveComponent("Empty")();
var o = t._export_sfc(e, [
  [
    "render",
    function (e, o, n, r, i, c) {
      return {
        a: t.p({ text: "暂无满足条件的ETF" }),
        b:
          "mini" === n.from
            ? "https://st.gtimg.com/design/78673e677bf0140d108015ef52f22792.webp"
            : "https://st.gtimg.com/design/35aa10550bd48509310421778288cd4e.png",
        c: t.n("mini" === n.from && "minicolor"),
        d: t.o(function () {
          return c.gotoDetail && c.gotoDetail.apply(c, arguments);
        }, 2790),
      };
    },
  ],
  ["__scopeId", "data-v-3980b765"],
]);
wx.createComponent(o);
