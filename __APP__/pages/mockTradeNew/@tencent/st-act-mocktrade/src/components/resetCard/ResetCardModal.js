var e = require("../../../../../../../common/vendor.js"),
  t = {
    name: "ResetCardModal",
    props: {
      visible: { type: Boolean, default: !1 },
      canReset: { type: Boolean, default: !1 },
      expireTimeText: { type: String, default: "" },
      skin: { type: String, default: "light" },
      isLight: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        rules: [
          "重置当前模拟账户资金、持仓及交易记录，即刻生效",
          "重置后不可参与当前周周赛排行",
        ],
      };
    },
    watch: {
      visible: function (e) {
        e && this.$emit("brow");
      },
    },
    methods: {
      handleClose: function () {
        this.$emit("close");
      },
      handleUse: function () {
        this.canReset && this.$emit("use");
      },
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, a, s, r, i) {
        return e.e(
          { a: a.visible },
          a.visible
            ? e.e(
                {
                  b: e.o(function () {
                    return i.handleClose && i.handleClose.apply(i, arguments);
                  }, 4520),
                  c: e.o(function () {
                    return i.handleClose && i.handleClose.apply(i, arguments);
                  }, 4521),
                  d: e.t(a.expireTimeText),
                  e: a.canReset,
                },
                a.canReset
                  ? {
                      f: e.n(
                        a.isLight
                          ? "reset-card-modal__use-btn--light"
                          : "reset-card-modal__use-btn--classic"
                      ),
                      g: e.o(function () {
                        return i.handleUse && i.handleUse.apply(i, arguments);
                      }, 4522),
                    }
                  : {},
                {
                  h: e.f(r.rules, function (t, n, a) {
                    return { a: e.t(t), b: n };
                  }),
                  i: e.n(
                    a.isLight
                      ? "reset-card-modal__card--light"
                      : "reset-card-modal__card--classic"
                  ),
                  j: e.n(a.canReset ? "" : "reset-card-modal__card--used"),
                  k: e.n("dark" === a.skin ? "reset-card-modal--dark" : ""),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-91478b37"],
  ]);
wx.createComponent(n);
