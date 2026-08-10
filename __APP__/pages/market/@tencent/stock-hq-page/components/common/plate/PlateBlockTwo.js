var t = require("../../../../../../../common/vendor.js"),
  e = {
    props: {
      data: { type: Object, default: function () {} },
      type: { type: String, default: "" },
      plateId: { type: String, default: "" },
      position: { type: Number, default: 1 },
    },
    methods: {
      getFontSize: function (t) {
        return t.length <= 7
          ? "14px"
          : t.length <= 12
          ? 14 - 1.125 * (t.length - 7) + "px"
          : "8px";
      },
      gotoDetail: function () {
        this.$emit("gotoDetail", this.data, this.position, this.plateId);
      },
      getQuoteClass: function (t) {
        return t > 0 ? "color-rise" : t < 0 ? "color-drop" : "color-equal";
      },
    },
  },
  o = t._export_sfc(e, [
    [
      "render",
      function (e, o, a, n, i, r) {
        return {
          a: t.t(a.data.name),
          b: r.getFontSize(a.data.name),
          c: t.f(a.data.list, function (e, o, n) {
            return t.e(
              { a: t.t(e.key), b: "volratio" === a.type && 0 === o },
              "volratio" === a.type && 0 === o
                ? { c: t.t(e.val) }
                : "exchange" === a.type && 0 === o
                ? { e: t.t(e.val) }
                : { f: t.t(e.val), g: t.n(r.getQuoteClass(e.val)) },
              { d: "exchange" === a.type && 0 === o, h: e.key }
            );
          }),
          d: t.o(function () {
            return r.gotoDetail && r.gotoDetail.apply(r, arguments);
          }, 5170),
        };
      },
    ],
    ["__scopeId", "data-v-e74676c6"],
  ]);
wx.createComponent(o);
