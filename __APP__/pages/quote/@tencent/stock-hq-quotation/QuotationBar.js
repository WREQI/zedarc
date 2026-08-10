var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../common/vendor.js"),
  r = require("../stock-hq-core/utils/f2-fit/tool.js"),
  n = t.defineComponent({
    props: {
      stockOverView: {
        type: Object,
        default: function () {
          return {};
        },
      },
      tradeState: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isGGT: { type: Boolean, default: !1 },
    },
    emits: ["onClickPrice"],
    setup: function (n, o) {
      var i = this,
        c = o.emit,
        a = t.getCurrentInstance().proxy || t.getCurrentInstance(),
        s = t.computed(function () {
          return ["mpwzq", "mpweapp"].includes("mpweapp");
        }),
        u = ["mpwzq", "wzqlight"].includes("mpweapp"),
        d = t.ref(!1),
        l = t.computed(function () {
          var e = +n.stockOverView.zde;
          return isNaN(e)
            ? ""
            : 0 === e
            ? "color-equal"
            : e > 0
            ? "color-rise"
            : "color-drop";
        }),
        p = t.computed(function () {
          var e;
          if (null == (e = n.stockOverView) ? void 0 : e.utime) {
            var t = new Date(1e3 * n.stockOverView.utime);
            return ""
              .concat(t.getHours().toString().padStart(2, 0), ":")
              .concat(t.getMinutes().toString().padStart(2, 0), ":")
              .concat(t.getSeconds().toString().padStart(2, 0));
          }
          return "";
        }),
        f = t.computed(function () {
          return (
            n.tradeState.isTrading || "午间休市" === n.tradeState.marketText
          );
        }),
        w = t.computed(function () {
          return !n.isGGT;
        }),
        m = t.computed(function () {
          return !n.isGGT;
        });
      return (
        t.onMounted(function () {
          try {
            t.nextTick$1(function () {
              return (
                (t = i),
                null,
                (n = e().mark(function t() {
                  var n, o, i, u, l, p;
                  return e().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!s.value) {
                            e.next = 12;
                            break;
                          }
                          return (
                            (e.next = 3), r.getEleInfo(".quotation-bar", a)
                          );
                        case 3:
                          (n = e.sent),
                            (i = (o = n || {}).height),
                            (u = void 0 === i ? 0 : i),
                            (l = o.top),
                            c("getBarLocation", {
                              height: u,
                              top: void 0 === l ? 0 : l,
                            }),
                            (e.next = 14);
                          break;
                        case 12:
                          (p = window
                            .getComputedStyle(a.$refs.bar)
                            .getPropertyValue("padding-left")
                            .replace("px", "")),
                            (d.value =
                              a.$refs.block1.offsetWidth +
                                a.$refs.block2.offsetWidth >=
                              a.$refs.bar.offsetWidth - 2 * p);
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  }, t);
                })),
                new Promise(function (e, r) {
                  var o = function (e) {
                      try {
                        c(n.next(e));
                      } catch (e) {
                        r(e);
                      }
                    },
                    i = function (e) {
                      try {
                        c(n.throw(e));
                      } catch (e) {
                        r(e);
                      }
                    },
                    c = function (t) {
                      return t.done
                        ? e(t.value)
                        : Promise.resolve(t.value).then(o, i);
                    };
                  c((n = n.apply(t, null)).next());
                })
              );
              var t, n;
            });
          } catch (e) {}
        }),
        {
          isLite: u,
          isMini: s,
          smallFont: d,
          zdClass: l,
          timeStr: p,
          showTimeStr: f,
          onClickPrice: function (e, r) {
            isNaN(r) || c("onClickPrice", r),
              t.StockBridge.report(
                "hq.stock_detail.quotation_bar_".concat(e, "_click")
              );
          },
          showEndPrice: w,
          showTradeOptions: m,
        }
      );
    },
  }),
  o = t._export_sfc(n, [
    [
      "render",
      function (e, r, n, o, i, c) {
        return t.e(
          {
            a: t.t(e.stockOverView.dqj),
            b: t.n(e.zdClass),
            c: t.o(function (t) {
              return e.onClickPrice("current", e.stockOverView.dqj);
            }, 1704),
            d: t.t(e.stockOverView.zde),
            e: t.n(e.zdClass),
            f: t.t(e.stockOverView.zdf),
            g: t.n(e.zdClass),
            h: e.showEndPrice,
          },
          e.showEndPrice
            ? {
                i: t.t(
                  "-1" === e.stockOverView.price_ceiling
                    ? "不限"
                    : e.stockOverView.price_ceiling
                ),
                j: t.o(function (t) {
                  return e.onClickPrice(
                    "ceiling",
                    e.stockOverView.price_ceiling
                  );
                }, 1705),
                k: t.t(
                  "-1" === e.stockOverView.price_floor
                    ? "不限"
                    : e.stockOverView.price_floor
                ),
                l: t.o(function (t) {
                  return e.onClickPrice("floor", e.stockOverView.price_floor);
                }, 1706),
              }
            : {},
          {
            m: e.smallFont ? 1 : "",
            n: e.tradeState.show && e.showTradeOptions,
          },
          e.tradeState.show && e.showTradeOptions
            ? t.e(
                { o: t.t(e.tradeState.marketText || ""), p: e.showTimeStr },
                e.showTimeStr ? { q: t.t(e.timeStr) } : {},
                { r: e.tradeState.customText },
                e.tradeState.customText
                  ? { s: t.t(e.tradeState.customText) }
                  : e.tradeState.canOrder || e.tradeState.canRevoke
                  ? {
                      v: t.t(e.tradeState.canOrder ? "可下单" : "不可下单"),
                      w: t.t(e.tradeState.canRevoke ? "可撤单" : "不可撤单"),
                    }
                  : {},
                { t: e.tradeState.canOrder || e.tradeState.canRevoke }
              )
            : {},
          {
            x: e.tradeState.show ? 1 : "",
            y: e.isLite ? 1 : "",
            z: t.o(function () {}, 1707),
          }
        );
      },
    ],
    ["__scopeId", "data-v-4398fe44"],
  ]);
wx.createComponent(o);
