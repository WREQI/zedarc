var t = require("../../../../../common/vendor.js"),
  e = {
    inject: ["hqBridge"],
    components: {
      SearchAiBar: function () {
        return "../../../../searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/index.js";
      },
    },
    props: ["skin", "zgb", "xszgb", "symbol"],
    data: function () {
      var t = "https://st.gtimg.com/image/mp-weapp/stock";
      return {
        ready: !1,
        top: 0,
        triangleWhite: "".concat(t, "/triangle-white.png"),
        triangleBlack: "".concat(t, "/triangle-black.png"),
        reportInfo: {},
        material: "us_market_shares",
        popStyle: {},
        arrowStyle: {},
      };
    },
    computed: {
      isMP: function () {
        return "mp" === this.hqBridge.ENV;
      },
    },
    created: function () {
      (this.reportInfo = { stockid: this.symbol }), this.setPosition();
    },
    mounted: function () {
      this.hqBridge.report("hq.stock_detail.zgbpop_brow");
    },
    methods: {
      setPosition: function () {
        var e = this;
        if (this.isMP) {
          var o = t.wx$1.getSystemInfoSync().windowWidth;
          t.wx$1
            .createSelectorQuery()
            .in(this.$parent)
            .select("#zgbTriangle")
            .boundingClientRect(function (t) {
              if (t) {
                var i = t.top,
                  r = t.height,
                  n = t.right,
                  a = t.left;
                (e.popStyle = { top: "".concat(i + 2 * r, "px") }),
                  a > o / 2
                    ? ((e.popStyle.right = "26px"),
                      (e.arrowStyle = { right: o - n - 26 - 4 + "px" }))
                    : ((e.popStyle.left = "26px"),
                      (e.arrowStyle = { left: a - 26 - 4 + "px" })),
                  (e.ready = !0);
              }
            })
            .exec();
        } else {
          var i = window.innerWidth,
            r = this.$parent.$refs.zgbTriangle[0].getBoundingClientRect(),
            n = r.top,
            a = r.height,
            s = r.right,
            c = r.left;
          (this.popStyle = { top: "".concat(n + 2 * a, "px") }),
            c > i / 2
              ? ((this.popStyle.right = "26px"),
                (this.arrowStyle = {
                  right: "".concat(Math.min(262, i - s - 26 - 4), "px"),
                }))
              : ((this.popStyle.left = "26px"),
                (this.arrowStyle = { left: c - 26 - 4 + "px" })),
            (this.ready = !0);
        }
      },
      close: function () {
        this.$emit("close");
      },
      onShowAiDialog: function (e) {
        this.close(),
          t.StockBridge.busEmit("showAiDialog", e),
          this.hqBridge.report("hq.stock_detail.zgb_aibar_click");
      },
    },
  };
Array || t.resolveComponent("SearchAiBar")();
var o = t._export_sfc(e, [
  [
    "render",
    function (e, o, i, r, n, a) {
      return t.e(
        { a: "black" === i.skin },
        "black" === i.skin
          ? { b: n.triangleBlack, c: t.s(n.arrowStyle) }
          : { d: n.triangleWhite, e: t.s(n.arrowStyle) },
        {
          f: t.t(i.xszgb),
          g: t.t(i.zgb),
          h: t.o(a.onShowAiDialog, 2741),
          i: t.p({
            "report-prefix": "stock_detail.ai_zgb",
            "report-info": n.reportInfo,
            scene: "stockdetail",
            "content-id": i.symbol,
            material: { tag: n.material },
          }),
          j: t.s(n.popStyle),
          k: t.o(function () {}, 2742),
          l: "black" === i.skin ? 1 : "",
          m: n.ready ? "flex" : "none",
          n: t.o(function () {}, 2743),
          o: t.o(function (t) {
            return a.close();
          }, 2744),
        }
      );
    },
  ],
  ["__scopeId", "data-v-a02560ad"],
]);
wx.createComponent(o);
