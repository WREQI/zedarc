var t = {
    components: {},
    props: ["time", "stockid", "comid", "type"],
    data: function () {
      return {
        chartUrl: "",
        stockDate: "",
        stockMarket: "",
        stockCode: "",
        width: 0,
        height: 0,
      };
    },
    mounted: function () {
      var t = this,
        e = new Date(this.time);
      this.stockDate = ""
        .concat(e.getFullYear())
        .concat(this.repair0(e.getMonth() + 1))
        .concat(this.repair0(e.getDate()));
      var c = this.splitSymbol(this.stockid),
        o = c.market,
        i = c.scode;
      (this.stockMarket = o), (this.stockCode = i);
      var r = window.innerWidth / 375,
        a = parseInt(224 * r, 10),
        n = parseInt(203 * r, 10);
      setTimeout(function () {
        var e, c;
        (t.width =
          (null == (e = t.$refs.hqiframe) ? void 0 : e.clientWidth) || a),
          (t.height =
            (null == (c = t.$refs.hqiframe) ? void 0 : c.clientHeight) || n);
        var o = new Date().getTime();
        t.chartUrl =
          "https://wzq.tenpay.com/resources/hq-chart/?chartType=historyMins&market="
            .concat(t.stockMarket, "&scode=")
            .concat(t.stockCode, "&date=")
            .concat(t.stockDate, "&width=")
            .concat(t.width, "&height=")
            .concat(t.height, "&comid=")
            .concat(t.comid, "&time=")
            .concat(o);
      }, 0);
    },
    methods: {
      repair0: function (t) {
        return t < 10 ? "0".concat(t) : t;
      },
      splitSymbol: function (t) {
        var e = t.slice(0, 2),
          c = ["sz", "sh", "hk", "us"].indexOf(e);
        return { market: -1 === c ? e : "".concat(c), scode: t.slice(2) };
      },
    },
  },
  e = require("../../../../../../../common/vendor.js")._export_sfc(t, [
    [
      "render",
      function (t, e, c, o, i, r) {
        return { a: i.chartUrl };
      },
    ],
    ["__scopeId", "data-v-e16a65a4"],
  ]);
wx.createComponent(e);
