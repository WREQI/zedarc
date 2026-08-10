var e = require("../../../../../common/vendor.js"),
  n = {
    props: {
      show: { type: Boolean, default: !1 },
      type: { type: String, default: "btn" },
    },
    data: function () {
      return { channel: "", animation: "fade-enter-active" };
    },
    mounted: function () {},
    methods: {
      close: function () {
        this.$emit("close");
      },
      onTouchMove: function (e) {
        e.preventDefault();
      },
    },
  },
  o = e._export_sfc(n, [
    [
      "render",
      function (n, o, t, c, r, a) {
        return e.e(
          { a: t.show },
          t.show
            ? {
                b: e.t("btn" === t.type ? "及时收取直播提醒" : "参与聊天互动"),
                c: e.o(function () {
                  return a.close && a.close.apply(a, arguments);
                }, 4615),
                d: e.n(r.animation),
                e: e.o(function () {
                  return a.onTouchMove && a.onTouchMove.apply(a, arguments);
                }, 4616),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-6f78b3ed"],
  ]);
wx.createComponent(o);
