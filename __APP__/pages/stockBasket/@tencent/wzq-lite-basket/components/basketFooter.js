require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js"),
  t = {
    props: {
      rootClass: { type: [String, Array], default: "" },
      desc: { type: String, default: "" },
      isToMockTrade: { type: Boolean, default: !1 },
      routeMockTradeParam: {
        type: Object,
        default: function () {
          return {};
        },
      },
      skin: { type: String, default: "white" },
    },
    emits: ["basketFooterClick", "goToMockTrade"],
    computed: {
      isLite: function () {
        return ["wzqlight", "mpwzq"].includes("mpweapp");
      },
      isAPP: function () {
        return "mpweapp" === e.ShellTypeEnum.SHY;
      },
    },
    methods: {
      onBasketFooterClick: function (e) {
        this.$emit("basketFooterClick", e);
      },
      goToMockTrade: function () {
        this.$emit("goToMockTrade"),
          !this.isAPP &&
            Object.keys(this.routeMockTradeParam).length > 0 &&
            e.StockRouter.routeTo({
              name: "mocktrade",
              query: this.routeMockTradeParam,
            });
      },
    },
  },
  o = e._export_sfc(t, [
    [
      "render",
      function (t, o, r, i, a, n) {
        return e.e(
          { a: n.isLite },
          n.isLite
            ? {
                b: e.t(r.desc),
                c: e.o(function () {
                  return (
                    n.onBasketFooterClick &&
                    n.onBasketFooterClick.apply(n, arguments)
                  );
                }, 4046),
              }
            : {},
          { d: r.isToMockTrade && !n.isAPP },
          r.isToMockTrade && !n.isAPP
            ? {
                e: e.n(n.isLite ? "basket-footer-item-start" : ""),
                f: e.o(function () {
                  return n.goToMockTrade && n.goToMockTrade.apply(n, arguments);
                }, 4047),
              }
            : {},
          {
            g: e.n(r.rootClass),
            h: e.n("white" !== r.skin ? "skin-black" : ""),
          }
        );
      },
    ],
    ["__scopeId", "data-v-63f35669"],
  ]);
wx.createComponent(o);
