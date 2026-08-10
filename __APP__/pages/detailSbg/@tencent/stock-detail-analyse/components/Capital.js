var a = require("../../../../../common/vendor.js"),
  t = a._export_sfc(
    {
      props: ["capitalData"],
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
          capClass: ["cap-rise", "cap-down", "cap-equal"],
        };
      },
      methods: {
        valueFilter: function (a) {
          return a > 0 ? "+".concat(a) : a;
        },
      },
    },
    [
      [
        "render",
        function (t, i, n, c, r, e) {
          return a.e(
            { a: n.capitalData },
            n.capitalData
              ? {
                  b: a.t(n.capitalData.capital_tag.name),
                  c: a.n(r.trendColor[n.capitalData.capital_tag.trend]),
                  d: a.t(n.capitalData.current_capital.current_date),
                  e: a.t(
                    e.valueFilter(n.capitalData.current_capital.main_inflow)
                  ),
                  f: a.n(
                    0 == n.capitalData.current_capital.main_inflow
                      ? r.capClass[2]
                      : n.capitalData.current_capital.main_inflow > 0
                      ? r.capClass[0]
                      : r.capClass[1]
                  ),
                  g: a.t(
                    n.capitalData.current_capital.main_inflow_industry_rank +
                      "/" +
                      n.capitalData.industry_stock_count
                  ),
                  h: a.t(
                    e.valueFilter(n.capitalData.five_days_capital.main_inflow)
                  ),
                  i: a.n(
                    0 == n.capitalData.five_days_capital.main_inflow
                      ? r.capClass[2]
                      : n.capitalData.five_days_capital.main_inflow > 0
                      ? r.capClass[0]
                      : r.capClass[1]
                  ),
                  j: a.t(
                    n.capitalData.five_days_capital.main_inflow_industry_rank +
                      "/" +
                      n.capitalData.industry_stock_count
                  ),
                }
              : {}
          );
        },
      ],
      ["__scopeId", "data-v-c630f590"],
    ]
  );
wx.createComponent(t);
