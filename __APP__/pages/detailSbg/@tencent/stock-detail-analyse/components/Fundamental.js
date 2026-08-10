var t = require("../Diagnose.js"),
  a = require("../../stock-hq-core/config/css-token.js"),
  e = require("../../../../../common/vendor.js"),
  n = {
    props: ["skin", "fundamentalData"],
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
        abilityClass: ["trend-red", "trend-grey", "trend-green"],
      };
    },
    computed: {
      env: function () {
        return e.StockBridge.ENV;
      },
      isDark: function () {
        return "dark" === this.skin || "black" === this.skin;
      },
      fundamental: function () {
        var t = (this.fundamentalData || {}).fundamental;
        return void 0 === t ? {} : t;
      },
      summary: function () {
        var t = (this.fundamentalData || {}).summary;
        return void 0 === t ? {} : t;
      },
      themeColor: function () {
        var t = a.CSSTOKEN[e.isBroker] || a.CSSTOKEN.DEFAULT;
        return {
          gridentBack: "background: linear-gradient(270deg, "
            .concat(t.midBlue, " 0%, ")
            .concat(t.primary, " 100%)"),
        };
      },
      extraInfo: function () {
        var t = this.fundamentalData.summary || {},
          a =
            (t.stock_estimate.estimate_value /
              t.stock_estimate.industry_highest) *
            100,
          e = 17.5 > a ? 17.5 : a > 75.5 ? 75.5 : a,
          n = 17.5 > a ? 17.5 : a > 75.5 ? 80 : 50,
          i = "",
          r = "";
        if (t.stock_estimate.history_score) {
          var s,
            o =
              (t.stock_estimate.history_score /
                t.stock_estimate.history_highest) *
              100,
            m = t.stock_estimate.history_tag.length,
            u = m > 6 ? 55 : 69;
          (i = s = o >= 17.5 && o <= u ? o : o < 17.5 ? 17.5 : u),
            (r = m > 6 || (o >= 17.5 && o <= u) ? 50 : s === u ? 84 : s);
        }
        return {
          summaryPercent: e,
          summaryPercent_b: n,
          summaryHis_percent_b: r,
          summaryHis_percent: i,
        };
      },
    },
    created: function () {},
    mounted: function () {},
    methods: {
      goTeaching: function (t, a, n) {
        e.StockBridge.report("stock_detail.zg_toujiao");
        var i = [
          this.summary.technical_score,
          this.summary.capital_score,
          this.summary.public_opinion_score,
          this.summary.fundamental_score,
          this.summary.risk_score,
        ].join(",");
        this.openExtra(
          "https://wzq.tenpay.com/resources/diagnoseStock/#/teachWzq?part="
            .concat(t, "&score=")
            .concat(i, "&pos=")
            .concat(a, "&title=new")
            .concat(n ? "&summary=true" : "")
        );
      },
      openExtra: function (a) {
        t.IS_PCWEIXIN ? (location.href = a) : e.StockBridge.openExtraWebview(a);
      },
    },
  },
  i = e._export_sfc(n, [
    [
      "render",
      function (t, a, n, i, r, s) {
        return e.e(
          { a: s.fundamental },
          s.fundamental
            ? e.e(
                {
                  b: e.t(s.fundamental.fundamental_tag.name),
                  c: e.n(r.trendColor[s.fundamental.fundamental_tag.trend]),
                  d: s.summary.stock_estimate.estimate_value,
                },
                s.summary.stock_estimate.estimate_value
                  ? {
                      e: e.t(s.summary.stock_estimate.indicator),
                      f: e.o(function (t) {
                        return s.goTeaching(3, "gz");
                      }, 3224),
                      g: e.t(s.summary.stock_estimate.estimate_tag),
                      h: s.extraInfo.summaryPercent_b + "%",
                      i: s.extraInfo.summaryPercent + "%",
                      j: e.s(s.themeColor.gridentBack),
                      k: e.t(s.summary.stock_estimate.history_tag),
                      l: s.extraInfo.summaryHis_percent_b + "%",
                      m: s.extraInfo.summaryHis_percent + "%",
                      n: e.s(s.themeColor.gridentBack),
                    }
                  : {},
                {
                  o: e.t(s.fundamental.profit_ability_tag),
                  p: e.n(
                    3 == s.fundamental.profit_ability
                      ? r.abilityClass[1]
                      : s.fundamental.profit_ability < 3
                      ? r.abilityClass[0]
                      : r.abilityClass[2]
                  ),
                  q: e.f([1, 2, 3, 4, 5], function (t, a, e) {
                    return { a: t };
                  }),
                  r: s.isDark ? 1 : "",
                  s: e.n("star" + (6 - s.fundamental.profit_ability)),
                  t: e.t(s.fundamental.growth_ability_tag),
                  v: e.n(
                    3 == s.fundamental.growth_ability
                      ? r.abilityClass[1]
                      : s.fundamental.growth_ability < 3
                      ? r.abilityClass[0]
                      : r.abilityClass[2]
                  ),
                  w: e.f([1, 2, 3, 4, 5], function (t, a, e) {
                    return { a: t };
                  }),
                  x: s.isDark ? 1 : "",
                  y: e.n("star" + (6 - s.fundamental.growth_ability)),
                  z: e.t(s.fundamental.operation_ability_tag),
                  A: e.n(
                    3 == s.fundamental.operation_ability
                      ? r.abilityClass[1]
                      : s.fundamental.operation_ability < 3
                      ? r.abilityClass[0]
                      : r.abilityClass[2]
                  ),
                  B: e.f([1, 2, 3, 4, 5], function (t, a, e) {
                    return { a: t };
                  }),
                  C: s.isDark ? 1 : "",
                  D: e.n("star" + (6 - s.fundamental.operation_ability)),
                  E: e.t(s.fundamental.insolvency_ability_tag),
                  F: e.n(
                    3 == s.fundamental.insolvency_ability
                      ? r.abilityClass[1]
                      : s.fundamental.insolvency_ability < 3
                      ? r.abilityClass[0]
                      : r.abilityClass[2]
                  ),
                  G: e.f([1, 2, 3, 4, 5], function (t, a, e) {
                    return { a: t };
                  }),
                  H: s.isDark ? 1 : "",
                  I: e.n("star" + (6 - s.fundamental.insolvency_ability)),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-0edc88cf"],
  ]);
wx.createComponent(i);
