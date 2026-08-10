var e = require("../../../../../../common/vendor.js"),
  o = {
    name: "LoadMore",
    inject: ["stockBridge"],
    props: {
      noMore: { type: Boolean, default: !1 },
      withTencentFlag: { type: Boolean, default: !0 },
      currentType: { type: String, default: "" },
    },
    computed: {
      logoClass: function () {
        return "zxg-logo";
      },
    },
  },
  n = e._export_sfc(o, [
    [
      "render",
      function (o, n, t, r, a, c) {
        return e.e(
          { a: t.noMore && t.withTencentFlag },
          t.noMore && t.withTencentFlag
            ? { b: e.n(c.logoClass) }
            : t.noMore
            ? {}
            : {
                d: e.n(
                  t.currentType && t.currentType.length > 0
                    ? "mod-loadText-".concat(t.currentType)
                    : ""
                ),
              },
          { c: !t.noMore }
        );
      },
    ],
    ["__scopeId", "data-v-af6514bb"],
  ]);
wx.createComponent(n);
