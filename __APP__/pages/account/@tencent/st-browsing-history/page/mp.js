require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js"),
  o = [
    { name: "个股", key: "stock" },
    { name: "股单", key: "basket" },
    { name: "资讯", key: "news" },
  ],
  r = [
    { name: "个股", key: "stock" },
    { name: "资讯", key: "news" },
  ],
  t = {
    components: {
      HistoryTab: function () {
        return "../components/historyTab.js";
      },
      StockHistoryList: function () {
        return "../components/stockHistoryList.js";
      },
      BasketHistoryList: function () {
        return "../components/basketHistoryList.js";
      },
      NewsHistoryList: function () {
        return "../components/newsHistoryList.js";
      },
    },
    data: function () {
      return {
        curTabIndex: 0,
        refreshTriggered: { stock: !1, basket: !1, news: !1 },
        enableLoadMore: { stock: !0, basket: !0, news: !0 },
        swiperHeight: 0,
      };
    },
    computed: {
      isSimpleMode: function () {
        return ["mpwzq", "wzqlight"].includes("mpweapp");
      },
      historyTab: function () {
        return this.isSimpleMode ? o : r;
      },
      showBasketTab: function () {
        return this.isSimpleMode;
      },
    },
    methods: {
      clickTab: function (e) {
        this.curTabIndex = e;
      },
      changeSwiperIndex: function (e) {
        var o;
        this.curTabIndex =
          null == (o = null == e ? void 0 : e.detail) ? void 0 : o.current;
      },
      pullRefresh: function (e) {
        var o = this;
        (this.refreshTriggered[e] = !0),
          (this.enableLoadMore[e] = !0),
          this.$refs[e].loadMore(!0),
          setTimeout(function () {
            o.refreshTriggered[e] = !1;
          }, 300);
      },
      loadMore: function (e) {
        this.enableLoadMore[e] && this.$refs[e].loadMore();
      },
      loadAll: function (e, o) {
        this.enableLoadMore[e] = !1;
      },
    },
  };
Array ||
  (
    e.resolveComponent("history-tab") +
    e.resolveComponent("StockHistoryList") +
    e.resolveComponent("BasketHistoryList") +
    e.resolveComponent("NewsHistoryList")
  )();
var n = e._export_sfc(t, [
  [
    "render",
    function (o, r, t, n, s, i) {
      return e.e(
        {
          a: e.o(i.clickTab, 673),
          b: e.p({ "cur-index": s.curTabIndex, tabs: i.historyTab }),
          c: e.sr("stock", "16192adc-1"),
          d: e.o(i.loadAll, 674),
          e: i.isSimpleMode ? "" : 1,
          f: s.refreshTriggered.stock,
          g: e.o(function (e) {
            return i.pullRefresh("stock");
          }, 675),
          h: e.o(function (e) {
            return i.loadMore("stock");
          }, 676),
          i: i.showBasketTab,
        },
        i.showBasketTab
          ? {
              j: e.sr("basket", "16192adc-2"),
              k: e.o(i.loadAll, 677),
              l: i.isSimpleMode ? "" : 1,
              m: s.refreshTriggered.basket,
              n: e.o(function (e) {
                return i.pullRefresh("basket");
              }, 678),
              o: e.o(function (e) {
                return i.loadMore("basket");
              }, 679),
            }
          : {},
        {
          p: e.sr("news", "16192adc-3"),
          q: e.o(i.loadAll, 680),
          r: i.isSimpleMode ? "" : 1,
          s: s.refreshTriggered.news,
          t: e.o(function (e) {
            return i.pullRefresh("news");
          }, 681),
          v: e.o(function (e) {
            return i.loadMore("news");
          }, 682),
          w: s.curTabIndex,
          x: e.o(function () {
            return (
              i.changeSwiperIndex && i.changeSwiperIndex.apply(i, arguments)
            );
          }, 683),
        }
      );
    },
  ],
  ["__scopeId", "data-v-16192adc"],
]);
wx.createComponent(n);
