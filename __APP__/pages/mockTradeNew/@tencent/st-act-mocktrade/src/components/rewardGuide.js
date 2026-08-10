var e = require("../../../../../../common/vendor.js"),
  t = {
    components: {
      reward: function () {
        return "../../../../../asyncCom/@tencent/st-reward-core/components/reward.js";
      },
    },
    props: {
      rewardData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isRewardCoin: { type: Boolean, default: !1 },
      isRewardCash: { type: Boolean, default: !1 },
      srcsite: { type: String, default: "" },
      h5userinfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      rankHome: {
        type: Object,
        default: function () {
          return {};
        },
      },
      assetInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    options: { styleIsolation: "shared" },
    setup: function (t, r) {
      var a = r.emit,
        n = e.computed(function () {
          return t.rankHome
            ? (t.rankHome.last_week_score / 1e4).toFixed(2)
            : "";
        });
      return {
        rankText: e.computed(function () {
          return t.rankHome.last_week_rank < 999
            ? "第".concat(t.rankHome.last_week_rank, "名")
            : "礼包";
        }),
        lastWeekRatio: n,
        close: function () {
          return a("close");
        },
        goTrade: function () {
          return a("goTrade");
        },
      };
    },
  };
Array || e.resolveComponent("reward")();
var r = e._export_sfc(t, [
  [
    "render",
    function (t, r, a, n, o, s) {
      return e.e(
        { a: e.t(n.rankText), b: a.rewardData.reward_desc },
        a.rewardData.reward_desc
          ? e.e(
              { c: a.isRewardCash },
              (a.isRewardCash, {}),
              { d: a.isRewardCoin },
              (a.isRewardCoin, {}),
              { e: a.isRewardCash },
              (a.isRewardCash, {}),
              { f: e.p({ rewardDesc: a.rewardData.reward_desc }) }
            )
          : {},
        {
          g: e.t(n.lastWeekRatio),
          h: e.t(a.assetInfo.bestStockLastWeek),
          i: e.t(a.assetInfo.bestStockRatioLastWekk),
          j: e.o(function () {
            return n.goTrade && n.goTrade.apply(n, arguments);
          }, 5161),
          k: e.o(function () {
            return n.close && n.close.apply(n, arguments);
          }, 5162),
          l: e.o(function () {}, 5163),
        }
      );
    },
  ],
  ["__scopeId", "data-v-5e11111c"],
]);
wx.createComponent(r);
