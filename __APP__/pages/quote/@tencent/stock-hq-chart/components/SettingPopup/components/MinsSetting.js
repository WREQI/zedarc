var e = require("../../../../../../../common/vendor.js"),
  t = require("../../../../stock-hq-data/index.js"),
  n = e.defineComponent({
    name: "MinsSetting",
    components: {
      SwitchCom: function () {
        return "./Switch.js";
      },
    },
    props: {
      skin: String,
      market: [String, Number],
      showTradeDetail: Boolean,
      hasAuctionMarket: Boolean,
      hkVIP: Boolean,
      minsSetData: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    emits: ["input", "change"],
    setup: function (n, i) {
      var a = i.emit;
      return {
        auctionTimeText: e.computed(function () {
          return t.utils.isHKMarket(n.market)
            ? "(9:00～9:30显示)"
            : "(9:15～9:30显示)";
        }),
        changeSwitchSet: function (e) {
          a("change", { type: e });
        },
      };
    },
  });
Array || e.resolveComponent("SwitchCom")();
var i = e._export_sfc(n, [
  [
    "render",
    function (t, n, i, a, o, r) {
      return e.e(
        {
          a: e.o(function (e) {
            return t.changeSwitchSet("indicate");
          }, 4389),
          b: e.p({ size: "25px", value: t.minsSetData.cjlChecked }),
          c: t.showTradeDetail,
        },
        t.showTradeDetail
          ? {
              d: e.t(t.hkVIP ? "十档" : "五档"),
              e: e.o(function (e) {
                return t.changeSwitchSet("five");
              }, 4390),
              f: e.p({ size: "25px", value: t.minsSetData.fiveChecked }),
            }
          : {},
        { g: t.hasAuctionMarket },
        t.hasAuctionMarket
          ? {
              h: e.t(t.auctionTimeText),
              i: e.o(function (e) {
                return t.changeSwitchSet("price");
              }, 4391),
              j: e.p({ size: "25px", value: t.minsSetData.auctionChecked }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-7254f5b6"],
]);
wx.createComponent(i);
