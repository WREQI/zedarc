var e = require("../../../../../../common/vendor.js"),
  n = e.defineComponent({
    name: "BuyIndexRecommendBlock",
    components: {
      BuyIndexRecommendCard: function () {
        return "./BuyIndexRecommendCard.js";
      },
    },
    props: {
      recommendPools: { type: Object, default: null },
      loading: { type: Boolean, default: !1 },
      error: { type: Boolean, default: !1 },
    },
    emits: {
      buy: function (e) {
        return Boolean(e && e.etfCode);
      },
      autoinvest: function (e) {
        return Boolean(e && e.etfCode);
      },
      "card-click": function (e) {
        return Boolean(e && e.etfCode);
      },
    },
    setup: function (n, o) {
      var t = o.emit,
        r = e.ref(null),
        a = e.ref(null);
      return {
        conservativeData: e.computed(function () {
          var e;
          return (
            (null == (e = n.recommendPools) ? void 0 : e.conservative) || null
          );
        }),
        growthData: e.computed(function () {
          var e;
          return (null == (e = n.recommendPools) ? void 0 : e.growth) || null;
        }),
        conservativeCardRef: r,
        growthCardRef: a,
        handleBuy: function (e) {
          t("buy", e);
        },
        handleAutoInvest: function (e) {
          t("autoinvest", e);
        },
        handleCardClick: function (e) {
          t("card-click", e);
        },
        syncAllWatchlist: function () {
          var e = r.value;
          e &&
            "function" == typeof e.syncWatchlistStatus &&
            e.syncWatchlistStatus();
          var n = a.value;
          n &&
            "function" == typeof n.syncWatchlistStatus &&
            n.syncWatchlistStatus();
        },
      };
    },
  });
Array || e.resolveComponent("BuyIndexRecommendCard")();
var o = e._export_sfc(n, [
  [
    "render",
    function (n, o, t, r, a, c) {
      return e.e(
        { a: n.loading },
        n.loading || n.error
          ? {}
          : e.e(
              { c: n.conservativeData },
              n.conservativeData
                ? {
                    d: e.sr("conservativeCardRef", "fc8ccec8-0"),
                    e: e.o(n.handleBuy, 2703),
                    f: e.o(n.handleAutoInvest, 2704),
                    g: e.o(n.handleCardClick, 2705),
                    h: e.p({
                      "pool-type": "conservative",
                      "recommend-data": n.conservativeData,
                      loading: n.loading,
                      error: n.error,
                    }),
                  }
                : {},
              { i: n.growthData },
              n.growthData
                ? {
                    j: e.sr("growthCardRef", "fc8ccec8-1"),
                    k: e.o(n.handleBuy, 2706),
                    l: e.o(n.handleAutoInvest, 2707),
                    m: e.o(n.handleCardClick, 2708),
                    n: e.p({
                      "pool-type": "growth",
                      "recommend-data": n.growthData,
                      loading: n.loading,
                      error: n.error,
                    }),
                  }
                : {}
            ),
        { b: n.error }
      );
    },
  ],
  ["__scopeId", "data-v-fc8ccec8"],
]);
wx.createComponent(o);
