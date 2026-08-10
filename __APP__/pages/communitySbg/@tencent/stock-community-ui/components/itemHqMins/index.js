var t = require("../../../../../../common/vendor.js"),
  e = {
    components: {
      Mins: function () {
        return "../../../../../quote/@tencent/wzq-hq-chart/Mins.js";
      },
    },
    props: ["time", "stockid", "comid", "type"],
    data: function () {
      return {
        stockMarket: "",
        stockCode: "",
        minsWidth: 0,
        minsHeight: 0,
        skin: "plain",
      };
    },
    created: function () {
      var t = this.splitSymbol(this.stockid),
        e = t.market,
        s = t.scode;
      (this.stockMarket = e), (this.stockCode = s);
      var i;
      (i = (getApp().globalData.systemInfo || {}).windowWidth / 375),
        (this.minsWidth = parseInt(224 * i, 10)),
        (this.minsHeight = parseInt(203 * i, 10));
    },
    methods: {
      splitSymbol: function (t) {
        var e = t.slice(0, 2),
          s = ["sz", "sh", "hk", "us"].indexOf(e);
        return { market: -1 === s ? e : "".concat(s), scode: t.slice(2) };
      },
    },
  };
Array || t.resolveComponent("Mins")();
var s = t._export_sfc(e, [
  [
    "render",
    function (e, s, i, n, o, c) {
      return {
        a: t.p({
          width: o.minsWidth,
          height: o.minsHeight,
          market: o.stockMarket,
          scode: o.stockCode,
          skin: o.skin,
          hideIndicator: !0,
          disableInteract: !0,
          disableTapEvent: !0,
        }),
        b: "".concat(o.minsWidth, "px"),
        c: "".concat(o.minsHeight, "px"),
      };
    },
  ],
  ["__scopeId", "data-v-655bc96d"],
]);
wx.createComponent(s);
