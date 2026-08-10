var t = require("../../../../../../common/vendor.js"),
  n = {
    props: ["instituteRating"],
    components: {},
    data: function () {
      return {};
    },
    created: function () {},
    mounted: function () {},
    computed: {
      extraInfo: function () {
        if (this.instituteRating) {
          var t = this.instituteRating.sell_num,
            n = this.instituteRating.reduce_num,
            i = this.instituteRating.even_num,
            e = this.instituteRating.increase_num,
            u = this.instituteRating.buy_num;
          return {
            total: t + n + i + e + u,
            max: Math.max(t, n, i, e, u),
            tips: ["卖出", "减持", "持平", "增持", "买入"],
          };
        }
      },
    },
    methods: {},
  },
  i = t._export_sfc(n, [
    [
      "render",
      function (n, i, e, u, a, s) {
        return t.e(
          { a: e.instituteRating && e.instituteRating.cycle },
          e.instituteRating && e.instituteRating.cycle
            ? t.e(
                {
                  b: t.t(e.instituteRating.cycle),
                  c: e.instituteRating.sell_num > 0,
                },
                e.instituteRating.sell_num > 0
                  ? {
                      d: t.t(
                        s.extraInfo.max === e.instituteRating.sell_num
                          ? "卖出"
                          : ""
                      ),
                      e: t.t(e.instituteRating.sell_num),
                      f:
                        s.extraInfo.max === e.instituteRating.sell_num ? 1 : "",
                      g:
                        (e.instituteRating.sell_num / s.extraInfo.total) * 100 +
                        "%",
                      h:
                        s.extraInfo.max === e.instituteRating.sell_num ? 1 : "",
                    }
                  : {},
                { i: e.instituteRating.reduce_num > 0 },
                e.instituteRating.reduce_num > 0
                  ? {
                      j: t.t(
                        s.extraInfo.max === e.instituteRating.reduce_num
                          ? "减持"
                          : ""
                      ),
                      k: t.t(e.instituteRating.reduce_num),
                      l:
                        s.extraInfo.max === e.instituteRating.reduce_num
                          ? 1
                          : "",
                      m:
                        (e.instituteRating.reduce_num / s.extraInfo.total) *
                          100 +
                        "%",
                      n:
                        s.extraInfo.max === e.instituteRating.reduce_num
                          ? 1
                          : "",
                    }
                  : {},
                { o: e.instituteRating.even_num > 0 },
                e.instituteRating.even_num > 0
                  ? {
                      p: t.t(
                        s.extraInfo.max === e.instituteRating.even_num
                          ? "持平"
                          : ""
                      ),
                      q: t.t(e.instituteRating.even_num),
                      r:
                        s.extraInfo.max === e.instituteRating.even_num ? 1 : "",
                      s:
                        (e.instituteRating.even_num / s.extraInfo.total) * 100 +
                        "%",
                      t:
                        s.extraInfo.max === e.instituteRating.even_num ? 1 : "",
                    }
                  : {},
                { v: e.instituteRating.increase_num > 0 },
                e.instituteRating.increase_num > 0
                  ? {
                      w: t.t(
                        s.extraInfo.max === e.instituteRating.increase_num
                          ? "增持"
                          : ""
                      ),
                      x: t.t(e.instituteRating.increase_num),
                      y:
                        s.extraInfo.max === e.instituteRating.increase_num
                          ? 1
                          : "",
                      z:
                        (e.instituteRating.increase_num / s.extraInfo.total) *
                          100 +
                        "%",
                      A:
                        s.extraInfo.max === e.instituteRating.increase_num
                          ? 1
                          : "",
                    }
                  : {},
                { B: e.instituteRating.buy_num > 0 },
                e.instituteRating.buy_num > 0
                  ? {
                      C: t.t(
                        s.extraInfo.max === e.instituteRating.buy_num
                          ? "买入"
                          : ""
                      ),
                      D: t.t(e.instituteRating.buy_num),
                      E: s.extraInfo.max === e.instituteRating.buy_num ? 1 : "",
                      F:
                        (e.instituteRating.buy_num / s.extraInfo.total) * 100 +
                        "%",
                      G: s.extraInfo.max === e.instituteRating.buy_num ? 1 : "",
                    }
                  : {}
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-34c62401"],
  ]);
wx.createComponent(i);
