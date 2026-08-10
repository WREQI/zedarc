var e = require("../../../../../../../common/vendor.js"),
  t = {
    name: "HistoryModal",
    components: {
      rewardCore: function () {
        return "../../../../../../asyncCom/@tencent/st-reward-core/components/reward.js";
      },
    },
    props: {
      visible: { type: Boolean, default: !1 },
      rewardList: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    data: function () {
      return { showContent: !1, timer: null };
    },
    watch: {
      visible: function (e) {
        var t = this;
        this.clearTimer(),
          (this.timer = setTimeout(function () {
            t.showContent = e;
          }, 100));
      },
    },
    beforeDestroy: function () {
      this.clearTimer();
    },
    methods: {
      clearTimer: function () {
        this.timer && (clearTimeout(this.timer), (this.timer = null));
      },
      formatDate: function (t) {
        return e.dayjs(1e3 * t).format("YYYY-MM-DD");
      },
      handleClose: function () {
        this.$emit("update:visible", !1), this.$emit("close");
      },
    },
  };
Array || e.resolveComponent("reward-core")();
var r = e._export_sfc(t, [
  [
    "render",
    function (t, r, n, o, i, a) {
      return e.e(
        { a: n.visible },
        n.visible
          ? {
              b: e.o(function () {}, 4463),
              c: e.o(function () {
                return a.handleClose && a.handleClose.apply(a, arguments);
              }, 4464),
            }
          : {},
        { d: n.visible },
        n.visible
          ? e.e(
              {
                e: e.o(function () {
                  return a.handleClose && a.handleClose.apply(a, arguments);
                }, 4465),
                f: n.rewardList.length,
              },
              n.rewardList.length
                ? {
                    g: e.f(n.rewardList, function (t, r, n) {
                      return {
                        a: e.t(t.from),
                        b: "b8e00ca8-0-" + n,
                        c: e.p({ "reward-desc": t.reward_desc }),
                        d: e.t(a.formatDate(t.reward_time)),
                        e: "".concat(r, "-").concat(t.reward_time),
                      };
                    }),
                  }
                : {},
              { h: i.showContent ? 1 : "" }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-b8e00ca8"],
]);
wx.createComponent(r);
