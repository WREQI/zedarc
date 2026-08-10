var e = require("../../../../../common/vendor.js"),
  o = {
    name: "MoreDialog",
    props: { visible: { type: Boolean, default: !1 } },
    methods: {
      toggleAdded: function () {
        this.$emit("toggleAdded"), this.$emit("close");
      },
      goChooseManage: function () {
        this.$emit("tapChooseManage"), this.$emit("close");
      },
      setTop: function () {
        this.$emit("setTop"), this.$emit("close");
      },
      close: function () {
        this.$emit("close");
      },
    },
  },
  t = e._export_sfc(o, [
    [
      "render",
      function (o, t, n, i, s, c) {
        return e.e(
          { a: n.visible },
          n.visible
            ? {
                b: e.o(function () {
                  return (
                    c.goChooseManage && c.goChooseManage.apply(c, arguments)
                  );
                }, 2468),
                c: e.o(function () {
                  return c.toggleAdded && c.toggleAdded.apply(c, arguments);
                }, 2469),
                d: e.o(function () {
                  return c.setTop && c.setTop.apply(c, arguments);
                }, 2470),
                e: e.o(function () {
                  return c.close && c.close.apply(c, arguments);
                }, 2471),
                f: e.o(function () {}, 2472),
                g: e.o(function () {
                  return c.close && c.close.apply(c, arguments);
                }, 2473),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-058fb03a"],
  ]);
wx.createComponent(t);
