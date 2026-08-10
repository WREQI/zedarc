var n = require("../../../../../../common/vendor.js");
Array ||
  (
    n.resolveComponent("JgRate") +
    n.resolveComponent("TargetPrice") +
    n.resolveComponent("ProfitForcecast") +
    n.resolveComponent("MiainFundChange") +
    n.resolveComponent("News")
  )();
var i = n._export_sfc(
  {
    props: ["summary", "skin", "marketViewData"],
    components: {
      JgRate: function () {
        return "./JgRate.js";
      },
      TargetPrice: function () {
        return "./TargetPrice.js";
      },
      ProfitForcecast: function () {
        return "./ProfitForcecast/mp.js";
      },
      MiainFundChange: function () {
        return "./MainFundChange.js";
      },
      News: function () {
        return "./News.js";
      },
    },
    data: function () {
      return {
        trendColor: [
          "",
          "trend-red",
          "trend-green",
          "trend-grey",
          "trend-orange",
          "trend-safe",
          "trend-low",
          "trend-mid",
          "trend-high",
        ],
      };
    },
    computed: {
      opinion: function () {
        return this.marketViewData.opinion || {};
      },
      summaryAll: function () {
        return this.marketViewData.summary || {};
      },
      aimPrice: function () {
        return (
          this.marketViewData.opinion && this.marketViewData.opinion.aim_price
        );
      },
      profitForcast: function () {
        return (
          this.marketViewData.opinion &&
          this.marketViewData.opinion.profit_forcast
        );
      },
      fundPosition: function () {
        return (
          this.marketViewData.opinion &&
          this.marketViewData.opinion.fund_position
        );
      },
    },
    created: function () {},
    mounted: function () {},
    methods: {},
  },
  [
    [
      "render",
      function (i, t, o, e, r, a) {
        return n.e(
          {
            a: n.t(a.opinion.opinion_tag.name),
            b: n.n(r.trendColor[a.opinion.opinion_tag.trend]),
            c: n.p({
              summary: a.summaryAll,
              instituteRating: a.summaryAll.institute_rating,
            }),
            d: a.aimPrice,
          },
          a.aimPrice ? { e: n.p({ skin: o.skin, aimPrice: a.aimPrice }) } : {},
          { f: a.profitForcast },
          a.profitForcast
            ? { g: n.p({ skin: o.skin, profitForcast: a.profitForcast }) }
            : {},
          { h: a.fundPosition },
          a.fundPosition
            ? { i: n.p({ skin: o.skin, fundPosition: a.fundPosition }) }
            : {},
          { j: a.opinion },
          a.opinion ? { k: n.p({ opinion: a.opinion }) } : {}
        );
      },
    ],
    ["__scopeId", "data-v-795fe512"],
  ]
);
wx.createComponent(i);
