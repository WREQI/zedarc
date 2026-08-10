var e = require("../../../../common/vendor.js"),
  r = {
    props: { query: { type: Object, default: function () {} } },
    data: function () {
      return { curTab: 0 };
    },
    watch: {
      query: {
        handler: function (e) {
          if (e) {
            var r = e.tag;
            this.curTab = "zhai" === r ? 1 : 0;
          }
        },
        immediate: !0,
        deep: !0,
      },
    },
    methods: {
      selectTab: function (e) {
        this.curTab = e;
      },
    },
  },
  c = e._export_sfc(r, [
    [
      "render",
      function (r, c, a, t, u, n) {
        return e.e(
          { a: 0 === u.curTab },
          (u.curTab, {}),
          {
            b: e.n(0 === u.curTab ? "active" : ""),
            c: e.o(function (e) {
              return n.selectTab(0);
            }, 1275),
            d: 1 === u.curTab,
          },
          (u.curTab, {}),
          {
            e: e.n(1 === u.curTab ? "active" : ""),
            f: e.o(function (e) {
              return n.selectTab(1);
            }, 1276),
            g: 0 === u.curTab,
          },
          (u.curTab, {}),
          { h: 1 === u.curTab },
          (u.curTab, {})
        );
      },
    ],
    ["__scopeId", "data-v-c971b1d6"],
  ]);
wx.createComponent(c);
