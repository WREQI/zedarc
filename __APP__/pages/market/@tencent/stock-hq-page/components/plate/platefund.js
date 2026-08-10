var e = require("../../../../../../common/vendor.js"),
  t = require("../../../stock-hq-data/index.js"),
  o = {
    components: {
      platefund: function () {
        return "../platefund/index.js";
      },
    },
    props: { fundData: { type: Object, default: function () {} } },
    data: function () {
      return { selectedIndex: 0 };
    },
    computed: {
      isWzq: function () {
        return "wzq" === e.StockBridge.ENV;
      },
    },
    methods: {
      showTip: function () {
        e.StockRouter.routeTo({
          name: "informationDetail",
          query: {
            id: "SN20220629170316804d2480",
            articleStyle: "fullTeach",
            anchorTitle: "板块资金",
          },
        }),
          e.StockBridge.report("hq.choose_hq.plate.fundflow_i");
      },
      goToDetail: function (t) {
        var o = t.type;
        if (o) {
          var n;
          1 === this.selectedIndex
            ? (n = "zljlr_d5")
            : 2 === this.selectedIndex && (n = "zljlr_d20");
          var r = "https://wzq.tenpay.com/mp/v2/index.html#/moneyflow/"
            .concat(o, "?currVal=")
            .concat(n);
          e.StockBridge.ENV === e.EnvTypeEnum.MP
            ? e.wx$1.navigateTo({
                url: "/pages/additional/webview/index?url=".concat(
                  encodeURIComponent(r),
                  "&hideShareMenu=1"
                ),
              })
            : this.$router.push({
                path: "/moneyflow/".concat(o),
                query: { currVal: n },
              }),
            e.StockBridge.report(
              "hq.choose_hq.plate.north_hot_plate_2nd_clicked",
              { type: o }
            );
        }
      },
      goToStockDetail: function () {
        var o =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = o.code,
          r = t.utils.splitSymbol(n),
          c = r.market,
          a = r.scode;
        this.isWzq
          ? e.StockRouter.routeTo({
              name: "HqStock",
              params: { market: c, code: a },
            })
          : e.StockRouter.routeTo({
              name: "stockdetail",
              query: { market: c, scode: a },
            }),
          e.StockBridge.report("hq.choose_hq.plate.fund_block_volume_click", {
            stockid: n,
          });
      },
      gotoNorthPlate: function () {
        var t = 1;
        1 === this.selectedIndex
          ? (t = 5)
          : 2 === this.selectedIndex && (t = 20),
          this.$emit("gotoNorthPlate", { dateNum: t }),
          e.StockBridge.report(
            "hq.choose_hq.plate.enter_north_hot_plate_2nd_page"
          );
      },
      changeIndex: function (t) {
        (this.selectedIndex = t),
          e.StockBridge.report("hq.choose_hq.plate.fundflow_switch_day");
      },
    },
  };
Array || e.resolveComponent("platefund")();
var n = e._export_sfc(o, [
  [
    "render",
    function (t, o, n, r, c, a) {
      return {
        a: e.o(function (e) {
          return a.showTip();
        }, 4582),
        b: e.n(0 === c.selectedIndex ? "actived" : ""),
        c: e.o(function (e) {
          return a.changeIndex(0);
        }, 4583),
        d: e.n(1 === c.selectedIndex ? "actived" : ""),
        e: e.o(function (e) {
          return a.changeIndex(1);
        }, 4584),
        f: e.n(2 === c.selectedIndex ? "actived" : ""),
        g: e.o(function (e) {
          return a.changeIndex(2);
        }, 4585),
        h: e.o(a.goToDetail, 4586),
        i: e.o(a.goToStockDetail, 4587),
        j: e.o(a.gotoNorthPlate, 4588),
        k: e.p({ range: c.selectedIndex, "fund-data": n.fundData }),
      };
    },
  ],
  ["__scopeId", "data-v-a602f571"],
]);
wx.createComponent(n);
