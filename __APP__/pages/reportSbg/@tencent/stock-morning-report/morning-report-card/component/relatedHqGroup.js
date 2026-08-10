var t = require("../../../../../../common/vendor.js"),
  e = {
    name: "RelatedHqGroup",
    props: {
      relateStockList: { type: Array, default: function () {} },
      newsId: { type: String, default: "" },
      wzqConfig: {
        type: Object,
        default: function () {
          return {
            Helper: {
              navigateTo: function () {},
              navigateWithSDK: function () {},
            },
            stat: { click: function () {} },
            openStock: function () {},
            $toast: function () {},
          };
        },
      },
    },
    components: {
      relatedStock: function () {
        return "../../../../../newsSbg/@tencent/stock-news-base/components/relatedStock.js";
      },
    },
    data: function () {
      return {
        dataRow1: [],
        dataRow2: [],
        reportData: {
          prefix: "yy.morningnotice",
          fchannel_id_fm_i: "IE800p000l042",
        },
      };
    },
    created: function () {
      this.init();
    },
    methods: {
      init: function () {
        this.initRelateStocks();
      },
      initRelateStocks: function () {
        for (var t = 0; t < this.relateStockList.length; t++) {
          var e = this.relateStockList[t],
            n = {
              stock_code: e.stock_code,
              stock_name: e.stock_name,
              chg_percent: e.zdf,
            };
          t < 2 ? this.dataRow1.push(n) : t < 4 && this.dataRow2.push(n);
        }
      },
    },
  };
Array || t.resolveComponent("relatedStock")();
var n = t._export_sfc(e, [
  [
    "render",
    function (e, n, a, o, c, r) {
      return t.e(
        {
          a: t.f(c.dataRow1, function (e, n, o) {
            return {
              a: "0eca72ac-0-" + o,
              b: t.p({
                extra_info: e,
                newsId: a.newsId,
                wzqConfig: a.wzqConfig,
                reportData: c.reportData,
                enableSkinChange: !0,
              }),
              c: n,
            };
          }),
          b: c.dataRow2.length,
        },
        c.dataRow2.length
          ? {
              c: t.f(c.dataRow2, function (e, n, o) {
                return {
                  a: "0eca72ac-1-" + o,
                  b: t.p({
                    extra_info: e,
                    newsId: a.newsId,
                    wzqConfig: a.wzqConfig,
                    reportData: c.reportData,
                    enableSkinChange: !0,
                  }),
                  c: n,
                };
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-0eca72ac"],
]);
wx.createComponent(n);
