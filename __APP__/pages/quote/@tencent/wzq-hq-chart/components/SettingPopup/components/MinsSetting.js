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
      market: String | Number,
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
    setup: function (n, a) {
      var i = a.emit;
      return {
        auctionTimeText: e.computed(function () {
          return t.utils.isHKMarket(n.market)
            ? "(9:00～9:30显示)"
            : "(9:15～9:30显示)";
        }),
        changeSwitchSet: function (e) {
          i("input", { type: e }), i("change", { type: e });
        },
      };
    },
  });
Array || e.resolveComponent("SwitchCom")();
var a = e._export_sfc(n, [
  [
    "render",
    function (t, n, a, i, o, r) {
      return e.e(
        {
          a: e.o(function (e) {
            return t.changeSwitchSet("indicate");
          }, 6078),
          b: e.p({ value: t.minsSetData.cjlChecked }),
          c: t.showTradeDetail,
        },
        t.showTradeDetail
          ? {
              d: e.t(t.hkVIP ? "十档" : "五档"),
              e: e.o(function (e) {
                return t.changeSwitchSet("five");
              }, 6079),
              f: e.p({ value: t.minsSetData.fiveChecked }),
            }
          : {},
        { g: t.hasAuctionMarket },
        t.hasAuctionMarket
          ? {
              h: e.t(t.auctionTimeText),
              i: e.o(function (e) {
                return t.changeSwitchSet("price");
              }, 6080),
              j: e.p({ value: t.minsSetData.auctionChecked }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-8082549d"],
]);
wx.createComponent(a);
