var e = require("../../../../../common/vendor.js"),
  o = {
    name: "RemindLockLayer",
    props: {
      lockDescText: { type: String, default: "解锁不限次数完整异动解读" },
      footnoteText: { type: String, default: "" },
    },
    methods: {
      handleFollowUnlock: function () {
        this.$emit("unlock");
      },
    },
  },
  t = e._export_sfc(o, [
    [
      "render",
      function (o, t, n, c, l, r) {
        return e.e(
          {
            a: e.t(n.lockDescText),
            b: e.o(function () {
              return (
                r.handleFollowUnlock && r.handleFollowUnlock.apply(r, arguments)
              );
            }, 2448),
            c: n.footnoteText,
          },
          n.footnoteText ? { d: e.t(n.footnoteText) } : {}
        );
      },
    ],
    ["__scopeId", "data-v-84d8f676"],
  ]);
wx.createComponent(t);
