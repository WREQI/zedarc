require("../../app.js");
var t = require("../../config/enum.js"),
  e = require("../../common/vendor.js"),
  o = "bg-quote-drop",
  i = "bg-quote-equal",
  n = "bg-quote-rise",
  a = {
    props: {
      value: { type: [String, Number], default: 0 },
      animate: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
      reserveColor: { type: Boolean, default: !1 },
    },
    data: function () {
      return { color: t.Quotes.EQUAL };
    },
    watch: {
      value: {
        handler: function (t, e) {
          var o = this;
          this.animate
            ? (this.updateAnimation(t, e),
              (this.transitionEndFlag = !1),
              clearTimeout(this.updateAnimationTimer),
              (this.updateAnimationTimer = setTimeout(function () {
                o.transitionEndFlag || o.onTransitionEnd();
              }, 350)))
            : this.updateQuote(t);
        },
        immediate: !0,
      },
    },
    methods: {
      updateQuote: function (e) {
        (e = +e) < 0
          ? (this.color = t.Quotes.DROP)
          : 0 === e || Number.isNaN(e)
          ? (this.color = t.Quotes.EQUAL)
          : (this.color = t.Quotes.RISE);
      },
      updateAnimation: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        (t = Number(t)),
          (a = Number(a)),
          !0 !== this.disabled &&
            (!this.animate ||
              Number.isNaN(+t) ||
              Number.isNaN(+a) ||
              (e.__CJS__export_lt__(t, a)
                ? (this.color = o)
                : e.__CJS__export_eq__(t, a)
                ? (this.color = i)
                : (this.color = n)));
      },
      onTransitionEnd: function () {
        (this.transitionEndFlag = !0), this.reserveColor || (this.color = "");
      },
    },
  },
  r = e._export_sfc(a, [
    [
      "render",
      function (t, o, i, n, a, r) {
        return {
          a: e.n(a.color),
          b: e.n(i.animate ? "quote-animate" : ""),
          c: e.o(function () {
            return r.onTransitionEnd && r.onTransitionEnd.apply(r, arguments);
          }),
        };
      },
    ],
    ["__scopeId", "data-v-427e7b49"],
  ]);
wx.createComponent(r);
