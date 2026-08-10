var t = require("../../util/setColor.js"),
  e = require("../../../../../../common/vendor.js"),
  a = {
    inject: ["hqBridge"],
    props: {
      data: { type: Object, default: function () {} },
      market: { type: String, default: "" },
    },
    data: function () {
      return { env: this.hqBridge.ENV };
    },
    methods: { setColor: t.setColor, setFontColor: t.setFontColor },
  },
  o = e._export_sfc(a, [
    [
      "render",
      function (t, a, o, r, d, n) {
        return e.e(
          {
            a: e.n(n.setColor(o.data.zde)),
            b: o.data.c,
            c: e.t(o.data.n),
            d: +o.data.zde,
          },
          +o.data.zde
            ? { e: e.n(o.data.zde < 0 ? "down-triangle" : "up-triangle") }
            : {},
          {
            f: e.t(o.data.price),
            g: e.t(o.data.zde),
            h: e.t(o.data.zdf),
            i: e.n(n.setFontColor(o.data.zde)),
            j: e.n(
              "market-index-".concat(d.env, "-").concat(o.market.toLowerCase())
            ),
          }
        );
      },
    ],
    ["__scopeId", "data-v-dc4b752f"],
  ]);
wx.createComponent(o);
