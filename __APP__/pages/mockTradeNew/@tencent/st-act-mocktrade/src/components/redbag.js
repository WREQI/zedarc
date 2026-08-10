var t = require("../../../../../../common/vendor.js"),
  n = {
    imgtop: {
      transform: {
        translateY: {
          startValue: 0,
          toValue: -200,
          duration: 500,
          timingFunction: "linear",
        },
        scale: {
          startValue: 1,
          toValue: 1.5,
          duration: 500,
          timingFunction: "linear",
        },
      },
      opacity: [
        {
          startValue: 1,
          toValue: 0.8,
          duration: 400,
          timingFunction: "linear",
        },
        {
          startValue: 0.8,
          toValue: 0,
          duration: 100,
          timingFunction: "linear",
        },
      ],
    },
    imgbottom: {
      transform: {
        translateY: {
          startValue: 0,
          toValue: 200,
          duration: 500,
          timingFunction: "linear",
        },
        scale: {
          startValue: 1,
          toValue: 1.5,
          duration: 500,
          timingFunction: "linear",
        },
      },
      opacity: [
        {
          startValue: 1,
          toValue: 0.8,
          duration: 400,
          timingFunction: "linear",
        },
        {
          startValue: 0.8,
          toValue: 0,
          duration: 100,
          timingFunction: "linear",
        },
      ],
    },
    imginner: {
      opacity: {
        startValue: 0,
        toValue: 1,
        duration: 1e3,
        timingFunction: "linear",
      },
    },
  },
  a = {
    components: {
      animation: function () {
        return "../cp-component/animation.js";
      },
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
      platform: { type: String, default: "zxg" },
    },
    options: { styleIsolation: "shared" },
    setup: function (a, r) {
      var o = r.emit;
      return {
        animations: t.markRaw(n),
        share: function () {
          return o("share");
        },
        close: function () {
          return o("close");
        },
      };
    },
  };
Array || (t.resolveComponent("animation") + t.resolveComponent("reward"))();
var r = t._export_sfc(a, [
  [
    "render",
    function (n, a, r, o, e, i) {
      return t.e(
        { a: "mp" !== r.platform },
        "mp" !== r.platform
          ? { b: t.p({ playing: !0, actions: o.animations.imgtop }) }
          : {},
        { c: "mp" !== r.platform },
        "mp" !== r.platform
          ? { d: t.p({ playing: !0, actions: o.animations.imgbottom }) }
          : {},
        {
          e: t.p({ rewardDesc: r.rewardData.reward_desc }),
          f: t.t(
            "zxg" === r.platform
              ? "去微信/QQ-钱包中查看"
              : "去微信-支付-钱包中查看"
          ),
          g: t.o(function () {
            return o.share && o.share.apply(o, arguments);
          }, 5158),
          h: t.p({ playing: !0, actions: o.animations.imginner }),
          i: t.o(function () {
            return o.close && o.close.apply(o, arguments);
          }, 5159),
          j: t.o(function () {}, 5160),
        }
      );
    },
  ],
  ["__scopeId", "data-v-497ca22c"],
]);
wx.createComponent(r);
