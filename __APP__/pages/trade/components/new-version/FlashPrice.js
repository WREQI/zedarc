require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  t = {
    props: {
      type: { type: String, required: !0 },
      level: { type: Number, required: !0 },
      quote: {
        type: Object,
        required: !0,
        default: function () {
          return {};
        },
      },
      maxAmount: { type: Number, required: !0 },
    },
    setup: function (t, r) {
      var o,
        n = r.emit,
        u = e.ref(!1),
        c = e.ref(!1),
        i = e.computed(function () {
          return t.quote.fiveTrans
            ? t.quote.fiveTrans["".concat(t.type, "jg").concat(t.level)]
            : 0;
        }),
        a = e.computed(function () {
          return t.quote.fiveTrans
            ? t.quote.fiveTrans["".concat(t.type, "sl").concat(t.level)]
            : 0;
        }),
        l = e.computed(function () {
          var e = t.quote.yestodayPrice;
          return isNaN(i.value) || isNaN(e)
            ? ""
            : +i.value == +e
            ? "color-equal"
            : +i.value > +e
            ? "color-rise"
            : "color-drop";
        }),
        p = e.computed(function () {
          return isNaN(parseFloat(a.value)) || !t.maxAmount
            ? "0%"
            : ((function (e) {
                var t = parseFloat(e);
                return isNaN(t)
                  ? 0
                  : /万/.test(e)
                  ? 1e4 * t
                  : /亿/.test(e)
                  ? 1e8 * t
                  : t;
              })(a.value) /
                t.maxAmount) *
                100 +
                "%";
        }),
        v = "",
        s = "";
      return (
        e.watch(
          function () {
            return a.value;
          },
          function (e, r) {
            o && t.level !== o
              ? (o = t.level)
              : ((o = t.level),
                (u.value = !1),
                (c.value = !1),
                e > r
                  ? ((u.value = !0),
                    (v = setTimeout(function () {
                      u.value = !1;
                    }, 300)))
                  : e < r &&
                    ((c.value = !0),
                    (s = setTimeout(function () {
                      c.value = !1;
                    }, 300))));
          }
        ),
        e.onBeforeUnmount(function () {
          v && clearTimeout(v), s && clearTimeout(s);
        }),
        {
          bgColorRise: u,
          bgColorDrop: c,
          price: i,
          amount: a,
          priceColor: l,
          percentWidth: p,
          handleClick: function (e, t) {
            n("onClickPrice", { type: e, price: t });
          },
        }
      );
    },
  },
  r = e._export_sfc(t, [
    [
      "render",
      function (t, r, o, n, u, c) {
        return {
          a: e.t("mr" === o.type ? "买" : "卖"),
          b: e.t(o.level),
          c: e.t(n.price),
          d: e.n(n.priceColor),
          e: e.o(function (e) {
            return n.handleClick(o.type + o.level, n.price);
          }),
          f: e.t(n.amount),
          g: e.n("mr" === o.type ? "color-rise" : "color-drop"),
          h: n.percentWidth,
          i: n.bgColorRise ? 1 : "",
          j: n.bgColorDrop ? 1 : "",
        };
      },
    ],
    ["__scopeId", "data-v-ddada241"],
  ]);
wx.createComponent(r);
