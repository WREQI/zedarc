var t = require("api.js"),
  e = require("../../../../common/vendor.js"),
  n = {
    props: ["symbol"],
    inject: ["hqBridge"],
    components: {
      NoData: function () {
        return "./common/NoData.js";
      },
      InverseRate: function () {
        return "./components/InverseRate.js";
      },
    },
    data: function () {
      return { chartData: [], jgList: [] };
    },
    computed: {},
    mounted: function () {
      var t = this;
      this.symbol
        ? this.getInvestRateData(this.symbol)
        : this.$watch(
            function () {
              return t.$route.query;
            },
            function () {
              var e = t.$route.query.symbol;
              t.getInvestRateData(e);
            },
            { immediate: !0 }
          );
    },
    methods: {
      getInvestRateData: function (e) {
        var n = this;
        t.getInvestRate(this.hqBridge, e)
          .then(function (t) {
            var e = t || {},
              a = e.pjtj,
              r = void 0 === a ? {} : a,
              o = e.jgpj,
              s = (void 0 === o ? {} : o).info,
              i = void 0 === s ? [] : s;
            n.jgList = i;
            var c = [];
            (c[0] = r.mc || { name: "卖出", num: 0 }),
              (c[1] = r.jc || { name: "减持", num: 0 }),
              (c[2] = r.zx || { name: "中性", num: 0 }),
              (c[3] = r.zc || { name: "增持", num: 0 }),
              (c[4] = r.mr || { name: "买入", num: 0 }),
              (n.chartData = [].concat(c));
          })
          .catch(function (t) {});
      },
    },
  };
Array || (e.resolveComponent("InverseRate") + e.resolveComponent("NoData"))();
var a = e._export_sfc(n, [
  [
    "render",
    function (t, n, a, r, o, s) {
      return e.e(
        { a: o.chartData.length > 0 },
        o.chartData.length > 0
          ? { b: e.p({ isRep: !1, chartData: o.chartData, jgList: o.jgList }) }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-e660b986"],
]);
wx.createComponent(a);
