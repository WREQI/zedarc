var r = require("../utils/splitNumberAndUnit.js"),
  e = require("../../../../../common/vendor.js"),
  t = {
    props: { rewardDesc: { type: String, default: "" } },
    computed: {
      reward: function () {
        return r.splitNumberAndUnit(this.rewardDesc) || {};
      },
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (r, t, n, u, d, i) {
        return e.e(
          { a: i.reward.number || i.reward.unit },
          i.reward.number || i.reward.unit
            ? { b: e.t(i.reward.number), c: e.t(i.reward.unit) }
            : { d: e.t(n.rewardDesc) }
        );
      },
    ],
  ]);
wx.createComponent(n);
