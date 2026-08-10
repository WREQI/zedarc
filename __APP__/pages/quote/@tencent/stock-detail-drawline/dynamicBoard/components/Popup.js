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
                }, 5525),
                e: n.o(function () {
                  return r.confirm && r.confirm.apply(r, arguments);
                }, 5526),
                f: n.o(function () {}, 5527),
                g: n.n({ "black-skin": e.isBlackSkin }),
                h: n.o(function () {}, 5528),
                i: n.o(function () {}, 5529),
              })
            : n.e({ j: e.title }, e.title ? { k: n.t(e.title) } : {}, {
                l: n.o(function () {
                  return r.cancel && r.cancel.apply(r, arguments);
                }, 5530),
                m: n.o(function () {
                  return r.confirm && r.confirm.apply(r, arguments);
                }, 5531),
                n: n.o(function () {}, 5532),
                o: n.n({ "black-skin": e.isBlackSkin }),
                p: n.o(function () {
                  return r.cancel && r.cancel.apply(r, arguments);
                }, 5533),
              })
        );
      },
    ],
    ["__scopeId", "data-v-2b145971"],
  ]);
wx.createComponent(c);
