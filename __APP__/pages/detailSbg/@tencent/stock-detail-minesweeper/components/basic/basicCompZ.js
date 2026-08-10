var t = require("../../../../../../common/vendor.js"),
  e = {
    props: ["type", "data"],
    data: function () {
      return { left: "", label: 0.24, offset: "" };
    },
    computed: {
      isWZQ: function () {
        return "wzq" === t.StockBridge.ENV;
      },
    },
    created: function () {
      var t = this;
      this.$nextTick(function () {
        t.$refs.zlabel &&
          (t.label = (t.$refs.zlabel.offsetWidth / 2 + 3.5) / 100);
        var e = t.data.value,
          a = t.data.thres_right / 0.66;
        (t.left = (t.data.thres_left / a) * 100),
          (t.offset =
            e > a
              ? "right:0"
              : e / a < 0.05
              ? "left:0"
              : "left:".concat(
                  Number(100 * (e / a - t.label / a)).toFixed(2),
                  "%"
                ));
      });
    },
  },
  a = t._export_sfc(e, [
    [
      "render",
      function (e, a, r, f, o, n) {
        return {
          a: t.t(r.data.index),
          b: t.n(n.isWZQ ? "" : "special"),
          c: t.s(o.offset),
          d: t.t(Number(r.data.thres_left).toFixed(2)),
          e: "".concat(o.left, "%"),
          f: t.t(Number(r.data.thres_right).toFixed(2)),
        };
      },
    ],
    ["__scopeId", "data-v-6144f919"],
  ]);
wx.createComponent(a);
