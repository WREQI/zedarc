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
                }, 5214),
                e: n.o(function () {
                  return r.confirm && r.confirm.apply(r, arguments);
                }, 5215),
                f: n.o(function () {}, 5216),
                g: n.n({ "black-skin": e.isBlackSkin }),
                h: n.o(function () {}, 5217),
                i: n.o(function () {}, 5218),
              })
            : n.e({ j: e.title }, e.title ? { k: n.t(e.title) } : {}, {
                l: n.o(function () {
                  return r.cancel && r.cancel.apply(r, arguments);
                }, 5219),
                m: n.o(function () {
                  return r.confirm && r.confirm.apply(r, arguments);
                }, 5220),
                n: n.o(function () {}, 5221),
                o: n.n({ "black-skin": e.isBlackSkin }),
                p: n.o(function () {
                  return r.cancel && r.cancel.apply(r, arguments);
                }, 5222),
              })
        );
      },
    ],
    ["__scopeId", "data-v-f916ab9f"],
  ]);
wx.createComponent(c);
