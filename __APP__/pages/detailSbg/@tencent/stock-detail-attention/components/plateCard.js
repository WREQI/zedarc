var t = require("../../../../../common/vendor.js"),
  e = {
    props: { plateData: Array, type: String },
    components: {
      f2: function () {
        return "../../stock-union-f2/f2MP.js";
      },
      Compare: function () {
        return "./Compare.js";
      },
    },
    data: function () {
      return { plateHash: "", chartConfig: { padding: [0, 0, 0, 0] } };
    },
    computed: {
      valueFilter: function () {
        return function (t) {
          var e = +t;
          return e > 0 ? "+".concat(e.toFixed(2)) : "".concat(e.toFixed(2));
        };
      },
      colorFilter: function () {
        return function (t) {
          return +t > 0 ? "rise" : +t < 0 ? "drop" : "gray";
        };
      },
    },
    methods: {
      gotoPlateDetail: function (e, a) {
        "wzq" === t.StockBridge.ENV
          ? t.StockBridge.routeTo({
              path: "/plate/200/detail",
              query: { plateId: "pt".concat(e), title: a },
            })
          : t.StockRouter.routeTo({
              name: "stockdetail",
              query: { market: "p", scode: e },
            }),
          t.StockBridge.report("hq.plate_detail.goto_relate_plate_detail");
      },
      drawChart: function (t) {
        var e,
          a = t.chart,
          n = t.config;
        try {
          a && a.clear();
        } catch (t) {}
        var r = n.idx && n.idx.slice(-1),
          i = null == (e = this.plateData[r]) ? void 0 : e.min_kline;
        i &&
          ((i = i.map(function (t) {
            return { time: t[0], value: +t[1] };
          })),
          a.axis("date", !1),
          a.legend(!1),
          a.tooltip(!1),
          a.source(i, { time: { min: 0, max: 240 } }),
          a.axis("time", !1),
          a.axis("value", !1),
          a
            .area()
            .position("time*value")
            .color("l(90) 0:#3077ec 1:#f7f7f7")
            .shape("smooth"),
          a.line().position("time*value").color("#3077ec").size(0.5),
          a.render());
      },
    },
  };
Array || (t.resolveComponent("f2") + t.resolveComponent("compare"))();
var a = t._export_sfc(e, [
  [
    "render",
    function (e, a, n, r, i, o) {
      return t.e(
        { a: n.plateData && n.plateData.length > 0 },
        n.plateData && n.plateData.length > 0
          ? {
              b: t.f(n.plateData, function (e, a, r) {
                return t.e(
                  { a: e.plate_basic },
                  e.plate_basic
                    ? t.e(
                        {
                          b: t.t(e.plate_basic.plate_name || ""),
                          c: t.t(e.plate_basic.price || ""),
                          d: t.t(
                            o.valueFilter(e.plate_basic.change_percent) || ""
                          ),
                          e: t.n(o.colorFilter(e.plate_basic.change_percent)),
                          f:
                            e.plate_basic.tags && e.plate_basic.tags.length > 0,
                        },
                        e.plate_basic.tags && e.plate_basic.tags.length > 0
                          ? {
                              g: t.f(e.plate_basic.tags, function (a, n, r) {
                                return t.e(
                                  {
                                    a: t.f(a, function (e, a, n) {
                                      return {
                                        a: t.t(e.value),
                                        b: a,
                                        c: t.n(
                                          "keyword" === e.type ? "rise" : ""
                                        ),
                                      };
                                    }),
                                    b: n !== e.plate_basic.tags.length - 1,
                                  },
                                  (e.plate_basic.tags.length, {}),
                                  { c: n }
                                );
                              }),
                              h: t.n(
                                e.plate_basic.tags.length > 1 ? "tag-font" : ""
                              ),
                            }
                          : {},
                        {
                          i: t.o(
                            function (t) {
                              return o.gotoPlateDetail(
                                e.plate_basic.plate_code,
                                e.plate_basic.plate_name
                              );
                            },
                            3207,
                            a
                          ),
                          j: e.min_kline && e.min_kline.length > 0,
                        },
                        e.min_kline && e.min_kline.length > 0
                          ? t.e(
                              {
                                k: t.sr("plateChart", "3b11a6bf-0-" + r, {
                                  f: 1,
                                }),
                                l: t.o(o.drawChart, 3208, a),
                                m: "3b11a6bf-0-" + r,
                                n: t.p({
                                  chartId: "plateChart"
                                    .concat(n.type)
                                    .concat(a),
                                  cClass: "plateChartClass",
                                  cStyle: "width: 207rpx; height: 70rpx",
                                  config: i.chartConfig,
                                  refreshHash: i.plateHash,
                                }),
                                o: e.quote_statis,
                              },
                              e.quote_statis
                                ? {
                                    p: "3b11a6bf-1-" + r,
                                    q: t.p({
                                      red: +e.quote_statis.up_cnt,
                                      green: +e.quote_statis.down_cnt,
                                      normal: +e.quote_statis.even_cnt,
                                    }),
                                  }
                                : {}
                            )
                          : {}
                      )
                    : {},
                  { r: e.plate_basic },
                  e.plate_basic ? { s: t.t(e.plate_basic.brief || "") } : {},
                  { t: a !== n.plateData.length - 1 },
                  (n.plateData.length, {}),
                  { v: a }
                );
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-3b11a6bf"],
]);
wx.createComponent(a);
