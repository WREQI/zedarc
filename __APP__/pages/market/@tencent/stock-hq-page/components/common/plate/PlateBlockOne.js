var t = require("../../../../../../../common/vendor.js"),
  e = {
    props: {
      data: { type: Object, default: function () {} },
      plateId: { type: String, default: "" },
      isSimpleVer: { type: Boolean, default: !1 },
      position: { type: Number, default: 1 },
      isShowShortDivider: { type: Boolean, default: !1 },
      source: { type: String, default: "" },
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
  a = t._export_sfc(e, [
    [
      "render",
      function (e, a, o, i, d, n) {
        return t.e(
          { a: t.t(o.data.name), b: n.getFontSize(o.data.name), c: o.data.zdf },
          o.data.zdf
            ? { d: t.t(o.data.zdf), e: t.n(n.getQuoteClass(o.data.zdf)) }
            : {},
          { f: !o.isSimpleVer },
          o.isSimpleVer
            ? {}
            : t.e(
                { g: "203" === o.plateId },
                "203" === o.plateId
                  ? { h: t.t(o.data.desc) }
                  : {
                      i: t.t(o.data.fn),
                      j: t.t(o.data.fzjcj),
                      k: t.t(o.data.fzdf),
                      l: t.n(n.getQuoteClass(o.data.fzdf)),
                    }
              ),
          {
            m: t.n(o.isShowShortDivider ? "plate-item-with-short-divider" : ""),
            n: t.n("plate-item-".concat(o.source)),
            o: t.o(function () {
              return n.gotoDetail && n.gotoDetail.apply(n, arguments);
            }, 5169),
          }
        );
      },
    ],
    ["__scopeId", "data-v-590d2bd0"],
  ]);
wx.createComponent(a);
