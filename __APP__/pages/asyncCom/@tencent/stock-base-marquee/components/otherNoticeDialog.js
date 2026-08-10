var e = require("../../../../../common/vendor.js"),
  t = {
    name: "otherNoticeDialog",
    props: {
      title: { type: String, default: "" },
      content: { type: String, default: "" },
      value: { type: Boolean, default: !1 },
    },
    computed: {
      formatContent: function () {
        return this.content.replace("\n", "<br>");
      },
    },
    methods: {
      closePicDialog: function () {
        var e;
        this.$emit("input", !1),
          "function" == typeof (null == (e = this.$el) ? void 0 : e.remove) &&
            this.$el.remove();
      },
    },
  },
  o = e._export_sfc(t, [
    [
      "render",
      function (t, o, n, i, c, l) {
        return e.e(
          { a: n.value },
          n.value
            ? {
                b: e.t(n.title),
                c: e.o(function () {
                  return (
                    l.closePicDialog && l.closePicDialog.apply(l, arguments)
                  );
                }, 2421),
                d: n.content,
                e: e.o(function () {}, 2422),
                f: e.o(function () {
                  return (
                    l.closePicDialog && l.closePicDialog.apply(l, arguments)
                  );
                }, 2423),
                g: e.o(function () {}, 2424),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-572428a6"],
  ]);
wx.createComponent(o);
