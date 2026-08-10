var e = require("../../../../../common/vendor.js"),
  t = require("../../stock-markets-base/utils/lct.js"),
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
    },
    methods: {
      jumpManagerDetail: function () {
        t.openLctManagerPage(this.item.id, "FMlctW282010003"),
          e.StockBridge.report("base.search.result_item_click", {
            contentId: this.item.id,
            searchText: this.keyword,
            search_listType: "manager",
            module: "searchModuleFundManager",
            search_scene: "fund",
            clickSerialNumber: this.index,
            totalSerialNumber: this.renderSerialNumber,
            searchSource: "0",
            report_info: this.reportInfo || {},
          });
      },
    },
  };
Array || e.resolveComponent("highlight-text")();
var n = e._export_sfc(r, [
  [
    "render",
    function (t, r, n, i, a, o) {
      return e.e(
        {
          a: "url(".concat(n.item.avatar, ")"),
          b: e.p({ keyword: n.keyword, text: n.item.name || "" }),
          c: n.item.ljcysj,
        },
        n.item.ljcysj ? { d: e.t(n.item.ljcysj) } : {},
        { e: n.item.fund && n.item.fund.length },
        n.item.fund && n.item.fund.length
          ? {
              f: e.f(n.item.fund.slice(0, 2), function (t, r, n) {
                return { a: e.t(t.jjjc), b: t.jjdm };
              }),
            }
          : {},
        {
          g: e.n(o.theme),
          h: e.n(n.index < n.renderSerialNumber - 1 && "item-border-bottom"),
          i: e.o(function () {
            return (
              o.jumpManagerDetail && o.jumpManagerDetail.apply(o, arguments)
            );
          }, 4735),
        }
      );
    },
  ],
  ["__scopeId", "data-v-9cd969d9"],
]);
wx.createComponent(n);
