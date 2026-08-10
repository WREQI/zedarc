var e = require("../../../../../common/vendor.js"),
  t = require("../utils/tools.js"),
  r = {
    components: {
      highlightText: function () {
        return "./highlight-text.js";
      },
    },
    inject: ["hqBridge", "theme"],
    props: {
      item: { type: Object, default: function () {} },
      index: { type: Number, default: 0 },
      keyword: { type: String, default: "" },
      reportInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      renderSerialNumber: { type: Number, default: 1 },
      totalSerialNumber: { type: Number, default: 1 },
      listLimit: { type: Number, default: -1 },
      inputComfirmed: { type: Number, default: 0 },
      tabKey: { type: String, default: "" },
    },
    computed: {
      formatTime: function () {
        var e = this.item.publish_time;
        if (!e) return "";
        var r = new Date().getTime(),
          i = new Date().setHours(0, 0, 0, 0),
          n = 1e3 * e,
          a = new Date(n),
          o = parseInt(r, 10) - parseInt(n, 10);
        if (0 < o && o < 36e5)
          return parseInt(o / 6e4, 10) > 0
            ? "".concat(parseInt(o / 6e4, 10), "分钟前")
            : "刚刚";
        if (36e5 < o && o < 72e5) return "1小时前";
        if (72e5 < o && n > i) return t.date2Str(a, "%h:%m");
        if (a.getFullYear() === new Date().getFullYear()) {
          var u = t.date2Str(a, "%M月%d日");
          return a.toDateString() !== new Date().toDateString()
            ? "".concat(u, " ").concat(t.date2Str(a, "%h:%m"))
            : u;
        }
        return t.date2Str(a, "%Y年%M月%d日");
      },
      isMP: function () {
        return e.StockBridge.ENV === e.EnvTypeEnum.MP;
      },
    },
    methods: {
      jumpInfoDetail: function () {
        var t = this.item,
          r = this.keyword,
          i = this.index,
          n = this.totalSerialNumber;
        this.isMP
          ? e.wx$1.navigateTo({
              url: "/pages/newsCon/newsDetail/main?id=".concat(t.news_id),
            })
          : this.hqBridge.routeTo({
              path: "/information/detail",
              query: { id: t.news_id },
            });
        var a = n > this.listLimit ? this.listLimit : n;
        "info" === this.tabKey && (a = n),
          this.hqBridge.report(
            this.inputComfirmed
              ? "base.search.result_item_click"
              : "jichu.search.ai_search_suggest_item_click",
            {
              contentId: t.news_id,
              searchText: r,
              search_listType: "info",
              module: "info",
              search_scene: this.tabKey,
              clickSerialNumber: i + 1,
              totalSerialNumber: a,
              searchSource: "0",
              report_info: this.reportInfo || {},
            }
          ),
          this.$emit("reportSearchBrow");
      },
    },
  };
Array || e.resolveComponent("highlight-text")();
var i = e._export_sfc(r, [
  [
    "render",
    function (t, r, i, n, a, o) {
      return {
        a: e.p({ keyword: i.item.hit_search, text: i.item.news_title || "" }),
        b: e.t(i.item.source),
        c: e.t(o.formatTime),
        d: e.n(o.theme),
        e: e.n(i.index < i.renderSerialNumber - 1 && "item-border-bottom"),
        f: e.o(function () {
          return o.jumpInfoDetail && o.jumpInfoDetail.apply(o, arguments);
        }, 4732),
      };
    },
  ],
  ["__scopeId", "data-v-7fbb9728"],
]);
wx.createComponent(i);
