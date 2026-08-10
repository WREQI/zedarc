var n = require("../../../../../../common/vendor.js"),
  t = {
    props: {
      title: { type: String, default: "" },
      isBlackSkin: { type: Boolean, default: !1 },
    },
    data: function () {
      return { isMP: n.StockBridge.ENV === n.EnvTypeEnum.MP };
    },
    methods: {
      cancel: function () {
        this.$emit("cancel");
      },
      confirm: function () {
        this.$emit("confirm");
      },
    },
  },
  c = n._export_sfc(t, [
    [
      "render",
      function (t, c, e, i, o, r) {
        return n.e(
          { a: o.isMP },
          o.isMP
            ? n.e({ b: e.title }, e.title ? { c: n.t(e.title) } : {}, {
                d: n.o(function () {
                  return r.cancel && r.cancel.apply(r, arguments);
                }, 4142),
                e: n.o(function () {
                  return r.confirm && r.confirm.apply(r, arguments);
                }, 4143),
                f: n.o(function () {}, 4144),
                g: n.n({ "black-skin": e.isBlackSkin }),
                h: n.o(function () {}, 4145),
                i: n.o(function () {}, 4146),
              })
            : n.e({ j: e.title }, e.title ? { k: n.t(e.title) } : {}, {
                l: n.o(function () {
                  return r.cancel && r.cancel.apply(r, arguments);
                }, 4147),
                m: n.o(function () {
                  return r.confirm && r.confirm.apply(r, arguments);
                }, 4148),
                n: n.o(function () {}, 4149),
                o: n.n({ "black-skin": e.isBlackSkin }),
                p: n.o(function () {
                  return r.cancel && r.cancel.apply(r, arguments);
                }, 4150),
              })
        );
      },
    ],
    ["__scopeId", "data-v-d5aaf8ab"],
  ]);
wx.createComponent(c);
