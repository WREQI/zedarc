var t = require("../../../../../../common/vendor.js"),
  a = {
    props: ["data"],
    data: function () {
      return { total: 0, cur: [] };
    },
    computed: {
      isWZQ: function () {
        return "wzq" === t.StockBridge.ENV;
      },
    },
    created: function () {
      this.getData();
    },
    methods: {
      change: function () {},
      setLevelClass: function () {
        var t = this,
          a = [];
        return (
          ["sell_num", "reduce_num", "even_num", "increase_num", "buy_num"].map(
            function (n) {
              return t.data.stock_rating[n] > 0 && a.push(n);
            }
          ),
          "".concat(a.slice(0, 1), "_b ").concat(a.slice(-1), "_a")
        );
      },
      getData: function () {
        if (this.data && this.data.stock_rating) {
          this.total =
            this.data.stock_rating.buy_num +
              this.data.stock_rating.even_num +
              this.data.stock_rating.increase_num +
              this.data.stock_rating.reduce_num +
              this.data.stock_rating.sell_num || 0;
          var t =
            Math.max(
              this.data.stock_rating.buy_num,
              this.data.stock_rating.even_num,
              this.data.stock_rating.increase_num,
              this.data.stock_rating.reduce_num,
              this.data.stock_rating.sell_num
            ) || -1;
          this.data.stock_rating.buy_num == t && this.cur.push(5),
            this.data.stock_rating.increase_num == t && this.cur.push(4),
            this.data.stock_rating.even_num == t && this.cur.push(3),
            this.data.stock_rating.reduce_num == t && this.cur.push(2),
            this.data.stock_rating.sell_num == t && this.cur.push(1);
        }
      },
    },
  },
  n = t._export_sfc(a, [
    [
      "render",
      function (a, n, i, c, e, s) {
        return t.e(
          { a: i.data },
          i.data
            ? t.e(
                {
                  b:
                    i.data.opinion_rating &&
                    i.data.opinion_rating.list &&
                    i.data.opinion_rating.list.length > 0,
                },
                i.data.opinion_rating &&
                  i.data.opinion_rating.list &&
                  i.data.opinion_rating.list.length > 0
                  ? {
                      c: t.f(i.data.opinion_rating.list, function (a, n, i) {
                        return {
                          a: t.t(a.institute),
                          b: t.t(a.change),
                          c: t.t(a.time.replace(/(\d{4})(\d{2})/, "$1-$2-")),
                          d: n,
                        };
                      }),
                      d: t.n(s.isWZQ ? "" : "special"),
                    }
                  : {},
                { e: e.total > 0 },
                e.total > 0
                  ? t.e(
                      { f: i.data.stock_rating.sell_num > 0 },
                      i.data.stock_rating.sell_num > 0
                        ? {
                            g: t.t(e.cur.includes(1) ? "卖出 " : ""),
                            h: t.t(i.data.stock_rating.sell_num),
                            i: t.n(e.cur.includes(1) ? "cur" : ""),
                            j:
                              (i.data.stock_rating.sell_num / e.total) * 100 +
                              "%",
                            k: t.o(function (t) {
                              return s.change(1);
                            }, 3734),
                          }
                        : {},
                      { l: i.data.stock_rating.reduce_num > 0 },
                      i.data.stock_rating.reduce_num > 0
                        ? {
                            m: t.t(e.cur.includes(2) ? "减持 " : ""),
                            n: t.t(i.data.stock_rating.reduce_num),
                            o: t.n(e.cur.includes(2) ? "cur" : ""),
                            p:
                              (i.data.stock_rating.reduce_num / e.total) * 100 +
                              "%",
                            q: t.o(function (t) {
                              return s.change(2);
                            }, 3735),
                          }
                        : {},
                      { r: i.data.stock_rating.even_num > 0 },
                      i.data.stock_rating.even_num > 0
                        ? {
                            s: t.t(e.cur.includes(3) ? "中性 " : ""),
                            t: t.t(i.data.stock_rating.even_num),
                            v: t.n(e.cur.includes(3) ? "cur" : ""),
                            w:
                              (i.data.stock_rating.even_num / e.total) * 100 +
                              "%",
                            x: t.o(function (t) {
                              return s.change(3);
                            }, 3736),
                          }
                        : {},
                      { y: i.data.stock_rating.increase_num > 0 },
                      i.data.stock_rating.increase_num > 0
                        ? {
                            z: t.t(e.cur.includes(4) ? "增持 " : ""),
                            A: t.t(i.data.stock_rating.increase_num),
                            B: t.n(e.cur.includes(4) ? "cur" : ""),
                            C:
                              (i.data.stock_rating.increase_num / e.total) *
                                100 +
                              "%",
                            D: t.o(function (t) {
                              return s.change(4);
                            }, 3737),
                          }
                        : {},
                      { E: i.data.stock_rating.buy_num > 0 },
                      i.data.stock_rating.buy_num > 0
                        ? {
                            F: t.t(e.cur.includes(5) ? "买入" : ""),
                            G: t.t(i.data.stock_rating.buy_num),
                            H: t.n(e.cur.includes(5) ? "cur" : ""),
                            I:
                              (i.data.stock_rating.buy_num / e.total) * 100 +
                              "%",
                            J: t.o(function (t) {
                              return s.change(5);
                            }, 3738),
                          }
                        : {},
                      {
                        K: t.n(s.setLevelClass()),
                        L: t.t(i.data.stock_rating.time),
                        M: t.n(s.isWZQ ? "" : "special"),
                      }
                    )
                  : {}
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-e25ab432"],
  ]);
wx.createComponent(n);
