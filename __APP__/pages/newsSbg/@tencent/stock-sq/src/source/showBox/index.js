var t = require("../../../../../../../common/vendor.js"),
  e = {
    options: { styleIsolation: "shared" },
    components: {
      showRank: function () {
        return "../showRank/index.js";
      },
    },
    data: function () {
      return {};
    },
    props: {
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      showTags: { type: Boolean, default: !0 },
      pageType: { default: "topic" },
      belong: { default: "" },
      hotRank: { type: Number, default: 0 },
      pageId: { type: String, default: "" },
      stockName: { type: String, default: "" },
      topic: { type: String, default: "" },
    },
    created: function () {},
    computed: {
      showUrl: function () {
        return (
          1 == +this.itemData.top_tag &&
          this.itemData.url &&
          this.itemData.url_title
        );
      },
      enableshowBox: function () {
        return !!(
          this.hotRank ||
          (this.showTags && this.showUrl) ||
          (this.showTags &&
            "stock" !== this.pageType &&
            this.itemData.stock_name) ||
          (this.showTags &&
            "topic" !== this.pageType &&
            this.itemData.topic_name)
        );
      },
    },
    methods: {
      onCommentReport: function (t) {
        this.$emit(t);
      },
      tapShowBox: function (t, e) {
        this.$emit("tapShowBox", { eventName: t, eventData: e });
      },
    },
  };
Array || t.resolveComponent("showRank")();
var a = t._export_sfc(e, [
  [
    "render",
    function (e, a, o, n, s, i) {
      return t.e(
        { a: i.enableshowBox },
        i.enableshowBox
          ? t.e(
              { b: o.hotRank },
              o.hotRank
                ? {
                    c: t.o(i.onCommentReport, 4305),
                    d: t.p({
                      hotRank: o.hotRank,
                      pageType: o.pageType,
                      pageId: o.pageId,
                      topic: o.topic,
                      stockName: o.stockName,
                    }),
                  }
                : {},
              { e: o.showTags && i.showUrl },
              o.showTags && i.showUrl
                ? {
                    f: t.t(o.itemData.url_title),
                    g: t.o(function (t) {
                      return i.tapShowBox("url", o.itemData);
                    }, 4306),
                  }
                : {},
              {
                h:
                  o.showTags && "stock" !== o.pageType && o.itemData.stock_name,
              },
              o.showTags && "stock" !== o.pageType && o.itemData.stock_name
                ? {
                    i: t.t(o.itemData.stock_name),
                    j: t.o(function (t) {
                      return i.tapShowBox("stock", o.itemData);
                    }, 4307),
                  }
                : {},
              {
                k:
                  o.showTags && "topic" !== o.pageType && o.itemData.topic_name,
              },
              o.showTags && "topic" !== o.pageType && o.itemData.topic_name
                ? {
                    l: t.t(o.itemData.topic_name),
                    m: t.o(function (t) {
                      return i.tapShowBox("topic", o.itemData);
                    }, 4308),
                  }
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-1d92856b"],
]);
wx.createComponent(a);
