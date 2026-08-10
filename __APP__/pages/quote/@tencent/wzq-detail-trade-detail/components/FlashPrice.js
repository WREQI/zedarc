var t = require("../../../../../common/vendor.js"),
  o = {
    props: ["type", "i", "quote", "maxAmount", "transCount"],
    data: function () {
      return { bgColorRise: !1, bgColorDrop: !1 };
    },
    computed: {
      price: function () {
        return this.quote.fiveTrans
          ? this.quote.fiveTrans["".concat(this.type, "jg").concat(this.i)]
          : 0;
      },
      amount: function () {
        return this.quote.fiveTrans
          ? this.quote.fiveTrans["".concat(this.type, "sl").concat(this.i)]
          : 0;
      },
      priceColor: function () {
        var t = this.quote.zsj;
        return isNaN(this.price) || isNaN(t)
          ? ""
          : +this.price == +t
          ? "color-equal"
          : +this.price > +t
          ? "color-rise"
          : "color-drop";
      },
      percentWidth: function () {
        return isNaN(parseFloat(this.amount)) || !this.maxAmount
          ? "0%"
          : (this.formatTextToNumber(this.amount) / this.maxAmount) * 100 + "%";
      },
    },
    watch: {
      amount: function (t, o) {
        var i = this;
        this.lastI && this.i !== this.lastI
          ? (this.lastI = this.i)
          : ((this.lastI = this.i),
            (this.bgColorRise = !1),
            (this.bgColorDrop = !1),
            t > o
              ? ((this.bgColorRise = !0),
                setTimeout(function () {
                  i.bgColorRise = !1;
                }, 300))
              : t < o &&
                ((this.bgColorDrop = !0),
                setTimeout(function () {
                  i.bgColorDrop = !1;
                }, 300)));
      },
    },
    methods: {
      formatTextToNumber: function (t) {
        var o = parseFloat(t);
        return isNaN(o)
          ? 0
          : /万/.test(t)
          ? 1e4 * o
          : /亿/.test(t)
          ? 1e8 * o
          : o;
      },
      handleClick: function (t, o) {
        this.$emit("onClickPrice", { type: t, price: o });
      },
    },
  },
  i = t._export_sfc(o, [
    [
      "render",
      function (o, i, r, e, s, n) {
        return {
          a: t.t("mr" === r.type ? "买" : "卖"),
          b: t.t(r.i),
          c: t.t(void 0 === n.price ? "--" : n.price),
          d: t.n(n.priceColor),
          e: t.o(function (t) {
            return n.handleClick(r.type + r.i, n.price);
          }, 4396),
          f: t.t(void 0 === n.amount ? "--" : n.amount),
          g: t.n("mr" === r.type ? "color-rise" : "color-drop"),
          h: n.percentWidth,
          i: 10 === r.transCount ? 1 : "",
          j: s.bgColorRise ? 1 : "",
          k: s.bgColorDrop ? 1 : "",
        };
      },
    ],
    ["__scopeId", "data-v-34443aac"],
  ]);
wx.createComponent(i);
