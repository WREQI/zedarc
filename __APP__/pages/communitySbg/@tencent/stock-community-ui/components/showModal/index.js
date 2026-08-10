var t = require("../../../../../../common/vendor.js"),
  n = {
    name: "showModel",
    components: {},
    props: {
      title: { type: String, default: null },
      content: { type: String, default: null },
      confirmBtn: { type: String, default: "确定" },
      cancelBtn: { type: String, default: "取消" },
    },
    data: function () {
      return {};
    },
    methods: {
      tapButton: function (t) {
        this.$emit(t);
      },
    },
  },
  e = t._export_sfc(n, [
    [
      "render",
      function (n, e, o, r, c, a) {
        return t.e(
          { a: o.title },
          o.title ? { b: t.t(o.title) } : {},
          { c: o.content },
          o.content ? { d: t.t(o.content) } : {},
          {
            e: t.t(o.cancelBtn),
            f: t.o(function (t) {
              return a.tapButton("tapCancelBtn");
            }, 5119),
            g: t.t(o.confirmBtn),
            h: t.o(function (t) {
              return a.tapButton("tapConfirmBtn");
            }, 5120),
          }
        );
      },
    ],
    ["__scopeId", "data-v-655587c3"],
  ]);
wx.createComponent(e);
