var n = require("../../../../../../../common/vendor.js"),
  e = {
    props: {
      content: { type: Object, default: function () {} },
      isWZQinMP: { type: Boolean, default: !1 },
    },
    data: function () {
      return {};
    },
    methods: {
      handleChooseIndex: function () {
        var e, t;
        if (
          (this.$emit("statReport", "zxdt_stock_list_click"), this.isWZQinMP)
        ) {
          var o = { url: "/pages/index/index" };
          n.wx$1 && n.wx$1.navigateTo
            ? n.wx$1.reLaunch(o)
            : null ==
                (t =
                  null == (e = null == window ? void 0 : window.wx)
                    ? void 0
                    : e.miniProgram) || t.reLaunch(o);
        } else n.StockRouter.routeTo({ name: "ChooseIndex" });
      },
    },
  },
  t = n._export_sfc(e, [
    [
      "render",
      function (e, t, o, r, a, c) {
        return n.e(
          { a: o.content.rank },
          o.content.rank
            ? n.e(
                {
                  b: n.t(o.content.rank),
                  c: n.o(function () {
                    return (
                      c.handleChooseIndex &&
                      c.handleChooseIndex.apply(c, arguments)
                    );
                  }, 4472),
                  d: o.content.total_number,
                },
                o.content.total_number
                  ? n.e(
                      { e: o.content.rise_number },
                      o.content.rise_number
                        ? {
                            f:
                              (o.content.rise_number / o.content.total_number) *
                                100 +
                              "%",
                          }
                        : {},
                      { g: o.content.fall_number },
                      o.content.fall_number
                        ? {
                            h:
                              (o.content.fall_number / o.content.total_number) *
                                100 +
                              "%",
                          }
                        : {}
                    )
                  : {},
                { i: n.t(o.content.rise_number), j: n.t(o.content.fall_number) }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-6a5e5d98"],
  ]);
wx.createComponent(t);
