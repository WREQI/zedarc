var t = require("../../../../../common/vendor.js"),
  e = {
    inject: ["hqBridge", "theme"],
    props: {
      title: { type: String, default: "股票" },
      isLimit: { type: Number, default: 2 },
      noData: { type: Boolean, default: !1 },
      showTips: { type: Boolean, default: !0 },
      showUserStock: { type: Boolean, default: !1 },
    },
    data: function () {
      return {};
    },
    computed: {
      aiImg: function () {
        return this.isLite
          ? "https://st.gtimg.com/design/97dd02db1d4f20731eea95be1cfaeeaa.png"
          : "https://st.gtimg.com/design/1cc9b25f5c3189ea3cb4efc5f197d484.png";
      },
      isMP: function () {
        return t.StockBridge.ENV === t.EnvTypeEnum.MP;
      },
      isLite: function () {
        return "lite" === this.theme;
      },
    },
    methods: {
      askAi: function () {
        this.$emit("askAI", "searchemptyai");
      },
      clickMore: function () {
        this.isMP
          ? t.wx$1.switchTab({ url: "/pages/index/market" })
          : this.hqBridge.routeTo({ path: "/market/index" });
      },
    },
  },
  i = t._export_sfc(e, [
    [
      "render",
      function (e, i, o, a, s, n) {
        return t.e(
          { a: o.noData },
          (o.noData, {}),
          { b: o.noData },
          o.noData
            ? {
                c: t.o(function () {
                  return n.askAi && n.askAi.apply(n, arguments);
                }, 4124),
                d: n.aiImg,
                e: t.o(function () {
                  return n.askAi && n.askAi.apply(n, arguments);
                }, 4125),
              }
            : {},
          { f: n.isLite && o.showTips && !o.noData && 2 !== o.isLimit },
          n.isLite && o.showTips && !o.noData && 2 !== o.isLimit
            ? { g: t.t(o.isLimit ? "仅展示50条搜索结果" : "没有更多了") }
            : {},
          { h: n.isLite && o.showTips && !o.noData },
          n.isLite && o.showTips && !o.noData
            ? {
                i: t.t(o.title),
                j: t.o(function () {
                  return n.clickMore && n.clickMore.apply(n, arguments);
                }, 4126),
              }
            : {},
          { k: !o.showUserStock && n.isLite },
          (!o.showUserStock && n.isLite, {}),
          { l: t.n(o.noData && "page-bottom"), m: t.n(n.isLite && "is-lite") }
        );
      },
    ],
    ["__scopeId", "data-v-bbdd3121"],
  ]);
wx.createComponent(i);
