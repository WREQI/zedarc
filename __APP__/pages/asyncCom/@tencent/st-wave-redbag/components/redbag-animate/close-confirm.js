var e = require("../../../../../../common/vendor.js"),
  t = {
    props: {
      visible: { type: Boolean, default: !1 },
      title: { type: String, default: "" },
      desc: { type: String, default: "" },
      btnAlways: { type: String, default: "永久关闭" },
      btnToday: { type: String, default: "仅今日关闭" },
      btnCancel: { type: String, default: "取消" },
    },
    data: function () {
      return { isLite: !1 };
    },
    methods: {
      handleHide: function () {
        this.$emit("close");
      },
      handleTodayClose: function () {
        this.$emit("closeToday");
      },
      handleCloseAlways: function () {
        this.$emit("closeAlways");
      },
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, l, a, i, o) {
        return e.e(
          { a: l.visible },
          l.visible
            ? e.e(
                { b: l.title },
                l.title ? { c: e.t(l.title) } : {},
                { d: l.desc },
                l.desc ? { e: e.t(l.desc) } : {},
                {
                  f: e.t(l.btnToday),
                  g: e.o(function () {
                    return (
                      o.handleTodayClose &&
                      o.handleTodayClose.apply(o, arguments)
                    );
                  }, 4042),
                  h: e.t(l.btnAlways),
                  i: e.o(function () {
                    return (
                      o.handleCloseAlways &&
                      o.handleCloseAlways.apply(o, arguments)
                    );
                  }, 4043),
                  j: e.t(l.btnCancel),
                  k: e.o(function () {
                    return o.handleHide && o.handleHide.apply(o, arguments);
                  }, 4044),
                  l: e.n(1 == i.isLite ? "yy-lite" : ""),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-2010deee"],
  ]);
wx.createComponent(n);
