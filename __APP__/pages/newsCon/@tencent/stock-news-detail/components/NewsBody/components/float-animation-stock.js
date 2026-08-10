var t = require("../../../../../../../common/vendor.js"),
  e = {
    name: "FloatAnimationStock",
    props: {
      stock: { type: Object, default: null },
      symbol: { type: Object, default: null },
      stocksAddedStatusInObgect: { type: Object, default: null },
      theme: { type: String, default: "blue" },
    },
    data: function () {
      var t = null == navigator ? void 0 : navigator.userAgent;
      return {
        YTJ: "https://st.gtimg.com/design/d786539723cc94dc60596ceb3b6f6dc2.png",
        TJ: "https://st.gtimg.com/design/c062545d74c76a4a820b2d95c167a8d7.png",
        isAndroidApp: /\bAndroid([^;]+)/.test(t) && !1,
      };
    },
    watch: {
      stock: { immediate: !0, handler: function (t) {} },
      stocksAddedStatusInObgect: { immediate: !0, handler: function (t) {} },
    },
    methods: {
      onClickStock: function () {
        this.$emit("clickStock");
      },
      onClickAdd: function () {
        this.$emit("clickAdd");
      },
    },
    computed: {
      added: function () {
        if (!this.stock) return !1;
        var t = this.stock.symbol;
        return 1 === this.stocksAddedStatusInObgect[t];
      },
    },
  },
  o = t._export_sfc(e, [
    [
      "render",
      function (e, o, n, c, d, s) {
        return t.e(
          { a: n.stock && n.stocksAddedStatusInObgect },
          n.stock && n.stocksAddedStatusInObgect
            ? t.e(
                {
                  b: "url(".concat(
                    require("./NewsCompContent/assets/plate/".concat(
                      n.stock.marketTag,
                      ".png"
                    )),
                    ")"
                  ),
                  c: t.t(n.stock.name),
                  d: n.symbol.bk_title && n.symbol.bk_title.length > 0,
                },
                n.symbol.bk_title && n.symbol.bk_title.length > 0
                  ? { e: t.t(n.symbol.bk_title) }
                  : {},
                {
                  f: t.o(function () {
                    return s.onClickStock && s.onClickStock.apply(s, arguments);
                  }, 4984),
                  g: !n.symbol.bk_title || 0 == n.symbol.bk_title.length,
                },
                n.symbol.bk_title && 0 != n.symbol.bk_title.length
                  ? {}
                  : { h: t.t(n.stock.price) },
                {
                  i: t.t(
                    ""
                      .concat(n.stock.updown > 0 ? "+" : "")
                      .concat(n.stock.updown, "%")
                  ),
                  j: t.n(n.stock.stColor),
                  k: "".concat(s.added ? d.YTJ : d.TJ),
                  l: t.o(function () {
                    return s.onClickAdd && s.onClickAdd.apply(s, arguments);
                  }, 4985),
                  m: t.n(n.theme),
                  n: t.n(d.isAndroidApp ? "android" : ""),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-0d1b6df3"],
  ]);
wx.createComponent(o);
