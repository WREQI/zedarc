var t = require("../../../../../../common/vendor.js"),
  e = {
    props: ["type", "data"],
    inject: ["stock_code"],
    data: function () {
      return { isWZQ: "wzq" === t.StockBridge.ENV };
    },
    methods: {
      formatStock: function (t) {
        var e;
        e =
          Math.abs(t) >= 1e8
            ? [1e8, "亿"]
            : Math.abs(t) >= 1e4
            ? [1e4, "万"]
            : [1, ""];
        var a = (Math.abs(t) / e[0]).toFixed(2);
        return (/^-/.test(t) ? "-" : "+") + a + e[1];
      },
      setStyle: function (t) {
        return 0 == +t ? "equal" : /^-/.test(t) ? "green" : "red";
      },
      goMore: function () {
        if (
          (t.StockBridge.report("hq.stock_detail.ms_gg"),
          "mp" !== t.StockBridge.ENV)
        )
          this.$router.push({
            name: "gaoguan",
            query: { code: this.stock_code },
          });
        else {
          var e =
            "https://wzq.tenpay.com/mp/v2/index.html#/stockDetail/hs/gaoguan?code=".concat(
              this.stock_code
            );
          t.StockBridge.openExtraWebview(e);
        }
      },
    },
  },
  a = t._export_sfc(e, [
    [
      "render",
      function (e, a, o, n, r, i) {
        return t.e(
          { a: "manER" === o.type && o.data.list.length > 0 },
          "manER" === o.type && o.data.list.length > 0
            ? {
                b: t.f(o.data.list, function (e, a, o) {
                  return {
                    a: t.t(e.name),
                    b: t.t(e.position),
                    c: t.t(i.formatStock(e.chg_amount)),
                    d: t.n(i.setStyle(e.chg_amount)),
                    e: t.t(e.chg_ratio),
                    f: a,
                  };
                }),
                c: t.n(r.isWZQ ? "" : "special"),
                d: t.o(function () {
                  return i.goMore && i.goMore.apply(i, arguments);
                }, 3733),
              }
            : "manEC" === o.type && o.data.list.length > 0
            ? {
                f: t.f(o.data.list, function (e, a, o) {
                  return {
                    a: t.t(e.name),
                    b: t.t(e.position),
                    c: t.t(e.ren_qi_start),
                    d: t.t(e.ren_qi_end),
                    e: t.t(e.quit_reason),
                    f: a,
                  };
                }),
              }
            : {},
          { e: "manEC" === o.type && o.data.list.length > 0 }
        );
      },
    ],
    ["__scopeId", "data-v-23474a65"],
  ]);
wx.createComponent(a);
