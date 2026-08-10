var t = require("../stock-hq-data/index.js"),
  e = require("../../../../common/vendor.js"),
  s = {
    components: {
      News: function () {
        return "./MergeNewsZxg.js";
      },
      Notice: function () {
        return "./Notice.js";
      },
      Report: function () {
        return "./Report.js";
      },
    },
    inject: ["hqBridge"],
    props: {
      scode: { type: String, require: !0, default: "" },
      market: { type: String, require: !0, default: "" },
      skin: { type: String, require: !1, default: "" },
      app: { type: String, require: !1, default: "" },
      stockName: { type: String, default: "" },
    },
    data: function () {
      return {
        tabs: {
          news: { name: "新闻", show: !0, visited: !0, stat: "stockinfo.news" },
          notice: {
            name: "公告",
            show: !0,
            visited: !1,
            stat: "stockinfo.notice",
          },
          report: {
            name: "研报",
            show: !0,
            visited: !1,
            stat: "stockinfo.report",
          },
        },
        selectTab: "news",
        tabLoading: !0,
      };
    },
    computed: {
      symbol: function () {
        return t.utils.getSymbol(this.market, this.scode);
      },
    },
    created: function () {
      (this.selectTab =
        this.hqBridge.getSession("stock_detail_info_tab_default") || "news"),
        "news" !== this.selectTab &&
          ((this.tabs.news.visited = !1),
          (this.tabs[this.selectTab].visited = !0)),
        this.hqBridge.report("hq.gegu_xiangqingye.newsGroup.info_brow");
    },
    methods: {
      getTabsInfo: function () {
        var t = this,
          e = this.$refs.tabs,
          s = [];
        return (
          Object.keys(this.tabs).forEach(function (e) {
            t.tabs[e].show && s.push(e);
          }),
          { $tabWrap: e, selectTab: this.selectTab, tablist: s }
        );
      },
      recordScroollTop: function (t, e) {
        this.$emit("recordScroollTop", t, e);
      },
      getData: function () {
        return (
          "news" === this.selectTab &&
            this.hqBridge.report("hq.stock_detail.news.morenews_click"),
          this.$refs[this.selectTab] && this.$refs[this.selectTab].getData()
        );
      },
      changeTabs: function (t) {
        (this.selectTab = t),
          this.tabs[t].visited
            ? this.$emit("loaded")
            : ((this.tabLoading = !0), (this.tabs[t].visited = !0)),
          this.$emit("resetStatus"),
          this.hqBridge.report(this.tabs[t].stat, { stockid: this.symbol }),
          this.hqBridge.setSession("stock_detail_info_tab_default", t);
      },
      tabLoaded: function () {
        (this.tabLoading = !1), this.$emit("loaded");
      },
      checkPullUp: function () {
        return this.$refs[this.selectTab].list.length > 0;
      },
    },
  };
Array ||
  (
    e.resolveComponent("News") +
    e.resolveComponent("Notice") +
    e.resolveComponent("Report")
  )();
var i = e._export_sfc(s, [
  [
    "render",
    function (t, s, i, o, a, n) {
      return e.e(
        {
          a: e.f(a.tabs, function (t, s, i) {
            return e.e(
              { a: t.show },
              t.show
                ? {
                    b: e.t(t.name),
                    c: e.n(a.selectTab === s && "active"),
                    d: e.o(
                      function (t) {
                        return n.changeTabs(s);
                      },
                      1971,
                      s
                    ),
                  }
                : {},
              { e: s }
            );
          }),
          b: a.tabLoading,
        },
        (a.tabLoading, {}),
        { c: a.tabs.news.visited },
        a.tabs.news.visited
          ? {
              d: e.sr("news", "83f94b2b-0"),
              e: "news" === a.selectTab,
              f: e.o(n.tabLoaded, 1972),
              g: e.o(n.recordScroollTop, 1973),
              h: e.p({
                scode: i.scode,
                market: i.market,
                "stock-name": i.stockName,
                app: i.app,
                skin: i.skin,
              }),
            }
          : {},
        { i: a.tabs.notice.visited },
        a.tabs.notice.visited
          ? {
              j: e.sr("notice", "83f94b2b-1"),
              k: "notice" === a.selectTab,
              l: e.o(n.tabLoaded, 1974),
              m: e.p({
                scode: i.scode,
                market: i.market,
                app: i.app,
                skin: i.skin,
              }),
            }
          : {},
        { n: a.tabs.report.visited },
        a.tabs.report.visited
          ? {
              o: e.sr("report", "83f94b2b-2"),
              p: "report" === a.selectTab,
              q: e.o(n.tabLoaded, 1975),
              r: e.p({
                scode: i.scode,
                market: i.market,
                app: i.app,
                skin: i.skin,
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-83f94b2b"],
]);
wx.createComponent(i);
