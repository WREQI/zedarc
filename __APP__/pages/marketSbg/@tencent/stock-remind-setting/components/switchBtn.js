var e = require("../../../../../common/vendor.js"),
  o = {
    props: {
      chooseOn: { type: Boolean, default: !1 },
      theme: { type: String, default: "" },
    },
    methods: {
      toggleChooseSync: function () {
        this.$emit("toggleChoose");
      },
    },
  },
  t = e._export_sfc(o, [
    [
      "render",
      function (o, t, n, c, r, s) {
        return {
          a: e.n(n.chooseOn ? "on" : ""),
          b: e.n(n.theme),
          c: e.o(function () {
            return s.toggleChooseSync && s.toggleChooseSync.apply(s, arguments);
          }, 2266),
        };
      },
    ],
    ["__scopeId", "data-v-c85b613b"],
  ]);
wx.createComponent(t);
