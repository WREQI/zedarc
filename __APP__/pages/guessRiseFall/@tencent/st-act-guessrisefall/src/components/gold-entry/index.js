var e = require("../../../../../../../common/vendor.js"),
  t = require("../../../../st-money/dist/index.js"),
  o = require("../../mixins/guess-page-mixin.js"),
  a = {
    name: "GoldEntry",
    components: {
      rewardCore: function () {
        return "../../../../../../asyncCom/@tencent/st-reward-core/components/reward.js";
      },
    },
    props: {
      shop_asset: {
        type: Object,
        default: function () {
          return { amount: 0, value: 0, headimgurl: "" };
        },
      },
    },
    data: function () {
      return { isReady: !1, isDestroyed: !1, IS_XCX: o.IS_XCX };
    },
    computed: {
      headImgUrl: function () {
        var e;
        return (
          (null == (e = this.shop_asset) ? void 0 : e.headimgurl) ||
          "https://st.gtimg.com/design/1ed6257e8a6c64a522d293b8951af1fc.png"
        );
      },
      formattedGoldAmount: function () {
        var e;
        return (null == (e = this.shop_asset) ? void 0 : e.amount)
          ? "".concat(this.shop_asset.amount)
          : "0";
      },
      formattedValue: function () {
        var e;
        return (null == (e = this.shop_asset) ? void 0 : e.value)
          ? "".concat(t.dist.fen2yuan(this.shop_asset.value))
          : "0";
      },
    },
    mounted: function () {
      var e = this;
      this.$nextTick(function () {
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame(function () {
              e.isDestroyed || (e.isReady = !0);
            })
          : setTimeout(function () {
              e.isDestroyed || (e.isReady = !0);
            }, 16);
      });
    },
    beforeDestroy: function () {
      this.isDestroyed = !0;
    },
    methods: {
      goExchange: function () {
        var t, o;
        try {
          e.StockBridge.report("act.guessGame.index_go_exchange", {}, {});
          var a =
            "https://zqact03.tenpay.com/activity/page/exchangeRights/#/index?stat_data=".concat(
              (null == (t = this.$globalParam) ? void 0 : t.stat_data) ||
                (null == (o = this.$globalParam) ? void 0 : o.stat) ||
                ""
            );
          this.IS_XCX
            ? e.StockRouter.routeTo({
                name: "actWebview",
                query: { url: encodeURIComponent(a) },
              })
            : e.StockBridge.locationTo(deliveryDoJump(a), "href");
        } catch (e) {}
      },
    },
  };
Array || e.resolveComponent("rewardCore")();
var n = e._export_sfc(a, [
  [
    "render",
    function (t, o, a, n, r, s) {
      return e.e(
        { a: r.IS_XCX },
        r.IS_XCX ? { b: s.headImgUrl } : { c: s.headImgUrl },
        {
          d: e.p({ "reward-desc": s.formattedGoldAmount }),
          e: e.p({ "reward-desc": s.formattedValue }),
          f: e.o(function () {
            return s.goExchange && s.goExchange.apply(s, arguments);
          }, 3872),
          g: r.isReady ? 1 : "",
        }
      );
    },
  ],
  ["__scopeId", "data-v-a9aaeb12"],
]);
wx.createComponent(n);
