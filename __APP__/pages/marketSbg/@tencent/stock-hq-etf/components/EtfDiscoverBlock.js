require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../config/index.js"),
  e = require("../../../../../common/vendor.js"),
  a = require("../../stock-base/visibilityObserver/index.js"),
  i = null,
  r = {
    components: {
      DiscoverCard: function () {
        return "./DiscoverCard.js";
      },
    },
    props: {
      type: { type: String, default: "hot" },
      curCardData: { type: Object, default: function () {} },
      theme: { type: String, default: "light" },
    },
    data: function () {
      return { isLite: ["mpwzq", "wzqlight"].includes("mpweapp") };
    },
    computed: {
      metaData: function () {
        return (
          t.DISCOVER_BLOCK_CONFIG[this.type] || t.DISCOVER_BLOCK_CONFIG.hot
        );
      },
      titleImg: function () {
        return "light" === this.theme
          ? this.metaData.title
          : this.metaData.titleBlack;
      },
    },
    mounted: function () {
      var t = this;
      i = new a.VisibilityObserver(
        ".".concat(this.type, "-discover-block"),
        {
          once: !0,
          callback: function (a, i) {
            a &&
              e.StockBridge.report(
                "hq.etf.etf_".concat(t.type, "_discover_brow")
              );
          },
          intersection: { threshold: 0 },
        },
        this
      );
    },
    beforeDestroy: function () {
      var t, e;
      null ==
        (e =
          null == (t = null == i ? void 0 : i.observer)
            ? void 0
            : t.disconnect) || e.call(t),
        (i = null);
    },
    methods: {
      handleDetailClick: function () {
        if (
          (e.StockBridge.report(
            "hq.etf.etf_".concat(this.type, "_discover_detail_click")
          ),
          this.metaData.useLocation)
        )
          e.StockBridge.locationTo(this.metaData.path);
        else if (this.metaData.useOpenWebview) {
          var t = this.isLite
            ? "".concat(this.metaData.path, "?lite=1")
            : this.metaData.path;
          e.StockBridge.locationTo(t, "openWebview");
        } else
          e.StockRouter.routeTo({
            path: this.metaData.path,
            name: this.metaData.name,
          });
      },
    },
  };
Array || e.resolveComponent("discover-card")();
var n = e._export_sfc(r, [
  [
    "render",
    function (t, a, i, r, n, o) {
      return e.e(
        {
          a: o.titleImg,
          b: e.t(o.metaData.subtitle),
          c: e.o(function () {
            return (
              o.handleDetailClick && o.handleDetailClick.apply(o, arguments)
            );
          }, 3544),
          d: i.curCardData,
        },
        i.curCardData
          ? {
              e: e.p({
                scene: "tab",
                type: i.type,
                icon: i.curCardData.news_icon,
                newsText: i.curCardData.news_text,
                newsLink: i.curCardData.news_link,
                stockList: i.curCardData.stockList,
              }),
            }
          : {},
        {
          f: e.n("".concat(i.type, "-discover-block")),
          g: e.n(n.isLite ? "lite" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-19ab2c3f"],
]);
wx.createComponent(n);
