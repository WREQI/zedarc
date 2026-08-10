var r = require("../stock-hq-data/index.js"),
  o = require("../../../../common/vendor.js"),
  i = {
    inject: ["onClickFiveTransPrice"],
    props: ["skin", "market", "price", "zde"],
    data: function () {
      return { bgColorRise: !1, bgColorDrop: !1 };
    },
    computed: {
      priceText: function () {
        return r.utils.isBCCurrency(this.market)
          ? r.utils.formatCurrency(this.price)
          : this.price;
      },
      mainColor: function () {
        return void 0 !== this.zde
          ? 0 == +this.zde
            ? "color-equal"
            : this.zde > 0
            ? "color-rise"
            : "color-drop"
          : "";
      },
    },
    watch: {
      price: function (r, o) {
        var i = this;
        (this.bgColorRise = !1),
          (this.bgColorDrop = !1),
          r > o
            ? ((this.bgColorRise = !0),
              setTimeout(function () {
                i.bgColorRise = !1;
              }, 300))
            : r < o &&
              ((this.bgColorDrop = !0),
              setTimeout(function () {
                i.bgColorDrop = !1;
              }, 300));
      },
    },
  },
  e = o._export_sfc(i, [
    [
      "render",
      function (r, i, e, t, n, c) {
        return {
          a: o.t(c.priceText),
          b: o.n(c.mainColor),
          c: o.n({
            "bg-color-rise": n.bgColorRise,
            "bg-color-drop": n.bgColorDrop,
            "skin-black": "black" === e.skin,
          }),
          d: o.o(function (r) {
            return c.onClickFiveTransPrice && c.onClickFiveTransPrice(e.price);
          }, 2726),
        };
      },
    ],
    ["__scopeId", "data-v-4f309d54"],
  ]);
wx.createComponent(e);
