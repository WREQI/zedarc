require("../../../app.js");
var e = require("../../../common/vendor.js"),
  t = require("../../../config/enum.js"),
  o = {
    components: {
      Overlay: function () {
        return "../../../common/components/Overlay/index.js";
      },
    },
    emits: ["setAmount", "input"],
    props: { value: Boolean, pos: Object, isClassicTradeSplitMode: Boolean },
    setup: function (o) {
      var i = e.inject("embeddedMode"),
        n = e.inject("trade"),
        u = n.getQuickAmountValue,
        s = n.stockSetting,
        r = n.order,
        l = n.quickAmount,
        c = e.computed(function () {
          var e, n, u, s;
          if (!i.value || o.isClassicTradeSplitMode) {
            var r = { buy: {}, sell: {} };
            return (
              null ==
                (n = Object.keys(null == (e = l.value) ? void 0 : e.buy)) ||
                n.forEach(function (e) {
                  var o, i;
                  -1 === t.FIXED_POSITION.indexOf(e) &&
                    (r.buy[e] =
                      null == (i = null == (o = l.value) ? void 0 : o.buy)
                        ? void 0
                        : i[e]);
                }),
              null ==
                (s = Object.keys(null == (u = l.value) ? void 0 : u.sell)) ||
                s.forEach(function (e) {
                  var o, i;
                  -1 === t.FIXED_POSITION.indexOf(e) &&
                    (r.sell[e] =
                      null == (i = null == (o = l.value) ? void 0 : o.sell)
                        ? void 0
                        : i[e]);
                }),
              r
            );
          }
          return l.value;
        }),
        d = e.computed(function () {
          var e;
          try {
            var t = i.value ? 3 : 5;
            return (
              Object.keys((null == (e = c.value) ? void 0 : e.buy) || {})
                .length > t
            );
          } catch (e) {}
          return !1;
        });
      return {
        embeddedMode: i,
        quickAmount: l,
        stockSetting: s,
        getQuickAmountValue: u,
        order: r,
        useTransitionMask: d,
        quickAmountComputed: c,
      };
    },
    methods: {
      onClickOverlay: function () {
        this.$emit("input", !1);
      },
      onClickQuickAmountItem: function (e, t) {
        var o = this.getQuickAmountValue(e, t);
        "--" !== o && this.$emit("setAmount", o),
          this.$emit("input", !1),
          this.$stat.click("trade.trade.number.".concat(t).concat(e));
      },
      toSetPosition: function () {
        var e = this;
        this.$stat.click("trade.trade.number.set_position"),
          this.embeddedMode
            ? setTimeout(function () {
                e.goSetPosition();
              }, 100)
            : this.goSetPosition();
      },
      goSetPosition: function () {
        this.$router.push({
          name: "TradeStockSetPosition",
          query: { stockSetting: JSON.stringify(this.stockSetting) },
        });
      },
    },
  };
Array || e.resolveComponent("Overlay")();
var i = e._export_sfc(o, [
  [
    "render",
    function (t, o, i, n, u, s) {
      return e.e(
        { a: !i.isClassicTradeSplitMode || n.order.isBuyAction },
        !i.isClassicTradeSplitMode || n.order.isBuyAction
          ? {
              b: e.f(n.quickAmountComputed.buy, function (t, o, i) {
                return e.e(
                  { a: "1" === o },
                  "1" === o || "1/2" === o ? {} : { c: e.t(o) },
                  {
                    b: "1/2" === o,
                    d: e.t(n.getQuickAmountValue(o, "buy")),
                    e: o,
                    f: e.o(function (e) {
                      return s.onClickQuickAmountItem(o, "buy");
                    }, o),
                  }
                );
              }),
              c: e.n(
                !n.embeddedMode || i.isClassicTradeSplitMode
                  ? "fs-28"
                  : "border--right"
              ),
            }
          : {},
        { d: !i.isClassicTradeSplitMode || n.order.isSellAction },
        !i.isClassicTradeSplitMode || n.order.isSellAction
          ? {
              e: e.f(n.quickAmountComputed.sell, function (t, o, i) {
                return e.e(
                  { a: "1" === o },
                  "1" === o || "1/2" === o ? {} : { c: e.t(o) },
                  {
                    b: "1/2" === o,
                    d: e.t(n.getQuickAmountValue(o, "sell")),
                    e: o,
                    f: e.o(function (e) {
                      return s.onClickQuickAmountItem(o, "sell");
                    }, o),
                  }
                );
              }),
            }
          : {},
        {
          f: n.useTransitionMask ? 1 : "",
          g: n.embeddedMode ? 1 : "",
          h: !n.embeddedMode || i.isClassicTradeSplitMode,
        },
        !n.embeddedMode || i.isClassicTradeSplitMode
          ? {
              i: e.o(function () {
                return s.toSetPosition && s.toSetPosition.apply(s, arguments);
              }),
            }
          : {},
        {
          j: e.n(i.pos.left < 200 ? "left" : ""),
          k: i.pos.top + "px",
          l: e.n(i.isClassicTradeSplitMode ? "split-mode" : ""),
          m: e.o(s.onClickOverlay),
          n: e.p({ show: i.value }),
        }
      );
    },
  ],
]);
wx.createComponent(i);
