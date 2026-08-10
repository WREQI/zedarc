var e = require("../../../../../../common/vendor.js"),
  t = {
    name: "MarketCoditions",
    components: {
      BasketOverview: function () {
        return "../../../../../stockBasket/@tencent/wzq-lite-basket/components/basketOverview.js";
      },
      StockList: function () {
        return "../stock-tag/stock-list.js";
      },
      Plate: function () {
        return "../stock-tag/plate.js";
      },
    },
    props: {
      eventData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      reportPrefix: { type: String, default: "" },
      isHstabShow: { type: Boolean, default: !1 },
    },
    setup: function (e, t) {
      t.emit;
      return {
        headerToggleClick: function () {},
        goToStockDetail: function () {},
        goToBasketDetail: function () {},
      };
    },
  };
Array ||
  (
    e.resolveComponent("basket-overview") +
    e.resolveComponent("stock-list") +
    e.resolveComponent("Plate")
  )();
var a = e._export_sfc(t, [
  [
    "render",
    function (t, a, o, n, r, s) {
      return e.e(
        { a: o.eventData.quote_type && o.eventData.quote_type > 0 },
        o.eventData.quote_type && o.eventData.quote_type > 0
          ? e.e(
              { b: 1 === o.eventData.quote_type && o.eventData.watchlist_id },
              1 === o.eventData.quote_type && o.eventData.watchlist_id
                ? {
                    c: e.o(n.headerToggleClick, 4090),
                    d: e.o(n.goToStockDetail, 4091),
                    e: e.o(n.goToBasketDetail, 4092),
                    f: e.p({
                      "report-prefix": o.reportPrefix,
                      "basket-data": o.eventData.watchList,
                      "is-hstab-show": o.isHstabShow,
                      "is-show-footer": !0,
                      "is-big-radius": !0,
                      "is-show-desc": !1,
                      "row-num": 5,
                    }),
                  }
                : 2 === o.eventData.quote_type &&
                  o.eventData.relate_code &&
                  o.eventData.relate_code.length
                ? { h: e.p({ "relate-code": o.eventData.relate_code }) }
                : 3 === o.eventData.quote_type && o.eventData.plate_info
                ? { j: e.p({ "event-data": o.eventData }) }
                : {},
              {
                g:
                  2 === o.eventData.quote_type &&
                  o.eventData.relate_code &&
                  o.eventData.relate_code.length,
                i: 3 === o.eventData.quote_type && o.eventData.plate_info,
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-4a708e83"],
]);
wx.createComponent(a);
