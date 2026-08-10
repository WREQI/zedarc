var e = require("../../stock-base/visibilityObserver/index.js"),
  i = {
    inject: ["hqBridge"],
    props: ["item", "index", "symbol"],
    data: function () {
      return { containerHeight: 0, titleHeight: 0, visibilityObserver: null };
    },
    mounted: function () {
      var e = this;
      this.$nextTick(function () {
        e.openObserver();
      });
    },
    destroyed: function () {
      this.closeObserver();
    },
    methods: {
      openObserver: function () {
        var i = this;
        this.visibilityObserver = new e.VisibilityObserver(
          ".news-item-zxg-observer",
          {
            once: !0,
            callback: function (e) {
              i.visibilityChanged(e, i.item);
            },
            intersection: { threshold: 0 },
          },
          this
        );
      },
      closeObserver: function () {
        var e, i;
        null ==
          (i =
            null == (e = this.visibilityObserver)
              ? void 0
              : e.destroyObserver) || i.call(e),
          (this.visibilityObserver = null);
      },
      visibilityChanged: function (e, i) {
        if (e) {
          var t = this.item || {},
            s = t.id,
            r = t.articletype,
            n = "news";
          1 === t.llm_tag
            ? (n = "ai")
            : 14 == +r
            ? (n = "live")
            : (7 != +r && 8 != +r) || (n = "video"),
            this.hqBridge.report(
              "news.stocknews.stnews.".concat(n, "_exposure"),
              { newsid: s || "", stockid: this.symbol || "" }
            );
        }
      },
    },
  },
  t = require("../../../../../common/vendor.js")._export_sfc(i, [
    [
      "render",
      function (e, i, t, s, r, n) {
        return {};
      },
    ],
    ["__scopeId", "data-v-5e03ccc4"],
  ]);
wx.createComponent(t);
