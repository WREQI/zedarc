var t = require("../../../util/setColor.js"),
  o = require("../../../../../../../common/vendor.js"),
  e = {
    inject: ["hqBridge"],
    props: {
      data: { type: Object, default: function () {} },
      position: { type: Number, default: 1 },
      isShowShortDivider: { type: Boolean, default: !1 },
    },
    computed: {
      nameFontSize: function () {
        var t, o;
        return (null == (o = null == (t = this.data) ? void 0 : t.name)
          ? void 0
          : o.length) > 8
          ? "small-font"
          : "";
      },
      zdfFontColor: function () {
        return t.setFontColor(this.data.zdf);
      },
    },
    methods: {
      gotoDetail: function () {
        this.$emit("gotoDetail", this.data, this.position);
      },
    },
  },
  n = o._export_sfc(e, [
    [
      "render",
      function (t, e, n, i, a, r) {
        return o.e(
          { a: o.t(n.data.name), b: o.n(r.nameFontSize), c: n.data.zdf },
          n.data.zdf ? { d: o.t(n.data.zdf), e: o.n(r.zdfFontColor) } : {},
          {
            f: o.n(n.isShowShortDivider ? "short-divider" : ""),
            g: o.o(function () {
              return r.gotoDetail && r.gotoDetail.apply(r, arguments);
            }, 5339),
          }
        );
      },
    ],
    ["__scopeId", "data-v-7dc3a6e7"],
  ]);
wx.createComponent(n);
