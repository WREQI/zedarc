var e = require("../../../common/vendor.js"),
  t = {
    props: { show: { type: Boolean, default: !1 } },
    data: function () {
      return {};
    },
    methods: {
      close: function () {
        this.$emit("close");
      },
      goSetting: function () {
        this.$emit("close"), e.wx$1.openSetting();
      },
    },
  },
  o = e._export_sfc(t, [
    [
      "render",
      function (t, o, n, r, c, i) {
        return e.e(
          { a: n.show },
          n.show
            ? {
                b: e.o(function () {
                  return i.close && i.close.apply(i, arguments);
                }, 2018),
                c: e.o(function () {
                  return i.goSetting && i.goSetting.apply(i, arguments);
                }, 2019),
              }
            : {}
        );
      },
    ],
  ]);
wx.createComponent(o);
