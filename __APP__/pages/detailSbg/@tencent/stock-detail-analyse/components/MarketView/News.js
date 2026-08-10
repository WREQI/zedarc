var n = require("../../Diagnose.js"),
  i = require("../../../../../../common/vendor.js"),
  t = {
    props: ["opinion"],
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
      extraInfo: function () {
        var n,
          i = {
            0: ["乐观", this.opinion.positive_ratio, "red"],
            1: ["中性", this.opinion.neutral_ratio, "grey"],
            2: ["谨慎", this.opinion.negative_ratio, "green"],
          },
          t = Math.max(
            this.opinion.positive_ratio,
            this.opinion.neutral_ratio,
            this.opinion.negative_ratio
          );
        for (var e in i)
          i[e][1] === t &&
            ((n = i[e]),
            0 == e
              ? (n[1] = i[0][1] / 2)
              : 1 == e
              ? (n[1] = i[1][1] / 2 + i[0][1])
              : 2 == e && (n[1] = i[2][1] / 2 + i[0][1] + i[1][1]));
        return n;
      },
    },
    created: function () {},
    mounted: function () {},
    methods: {
      timeFilter: function (n) {
        var i = new Date(+new Date() + 288e5).toISOString().substr(0, 10);
        return n.indexOf(i) > -1 ? n.substring(11, 16) : n.substring(5, 10);
      },
      goNewsDetail: function (n) {
        var t =
          "mp" === i.StockBridge.ENV
            ? "/pages/newsCon/newsDetail/main"
            : "/information/detail";
        "mp" === i.StockBridge.ENV
          ? i.StockBridge.routeTo({ url: "".concat(t, "?id=").concat(n) })
          : i.StockBridge.routeTo({ path: t, query: { id: n } });
      },
      openExtra: function (t) {
        n.IS_PCWEIXIN ? (location.href = t) : i.StockBridge.openExtraWebview(t);
      },
    },
  },
  e = i._export_sfc(t, [
    [
      "render",
      function (n, t, e, o, r, s) {
        return i.e(
          { a: e.opinion },
          e.opinion
            ? i.e(
                {
                  b: i.f(e.opinion.news_top3, function (n, t, e) {
                    return {
                      a: i.t(s.timeFilter(n.publish_time)),
                      b: i.t(n.title),
                      c: t,
                      d: i.o(
                        function (i) {
                          return s.goNewsDetail(n.news_id);
                        },
                        4064,
                        t
                      ),
                    };
                  }),
                  c: 0 == e.opinion.inst_empty,
                },
                0 == e.opinion.inst_empty
                  ? i.e(
                      {
                        d: i.t(e.opinion.inst_cycle),
                        e: i.t(e.opinion.inst_invst_cnt),
                        f: i.t(e.opinion.industry_rank),
                        g: i.t(e.opinion.industry_num),
                        h:
                          e.opinion.key_inst_list &&
                          e.opinion.key_inst_list.length > 0,
                      },
                      e.opinion.key_inst_list &&
                        e.opinion.key_inst_list.length > 0
                        ? { i: i.t(e.opinion.key_inst_list.join("、")) }
                        : {}
                    )
                  : {}
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-5ae7fb82"],
  ]);
wx.createComponent(e);
