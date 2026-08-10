var e = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../../../common/vendor.js"),
  n = require("../../../stock-markets-base/utils/market.js"),
  r = require("../../utils/common.js");
function a(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = t.noSign;
  if (null == e || "" === e || "--" === e) return "--";
  var r = parseFloat(e);
  return Number.isNaN(r)
    ? "--"
    : "".concat(n ? "" : r > 0 ? "+" : "").concat(e, "%");
}
var i = t.defineComponent({
  name: "T0FundCard",
  components: {
    StMiniMins: function () {
      return "../../../../../asyncCom/@tencent/st-mini-mins/src/index.js";
    },
    FundTags: function () {
      return "../../components/FundTags.js";
    },
  },
  props: {
    fund: {
      type: Object,
      default: function () {
        return {};
      },
    },
    strategy: { type: String, default: "riseFast" },
    showPremiumExplain: { type: Boolean, default: !1 },
    channelId: { type: String, default: "" },
    isChannelIdReady: { type: Boolean, default: !1 },
  },
  emits: ["fund:buy", "premium:explain"],
  setup: function (i, o) {
    var u = o.emit,
      m = t.computed(function () {
        var t = (i.fund.holdingTopList || [])
            .map(function (e) {
              return "string" == typeof e ? e : e && e.name;
            })
            .filter(Boolean),
          n = (i.fund.labels || [])
            .map(function (e) {
              return "string" == typeof e ? e : e && e.name;
            })
            .filter(Boolean);
        return ["T+0"].concat(e(new Set([].concat(e(n), e(t))))).slice(0, 3);
      }),
      s = t.ref(null),
      l = t.ref(m.value.length),
      c = t.computed(function () {
        return m.value.slice(0, l.value);
      });
    function d() {
      var e = s.value;
      e &&
        (e.scrollWidth <= e.clientWidth + 1 ||
          l.value <= 1 ||
          ((l.value -= 1), t.nextTick$1(d)));
    }
    function p() {
      (l.value = m.value.length), t.nextTick$1(d);
    }
    t.onMounted(p),
      t.watch(m, function () {
        return p();
      }),
      t.onMounted(function () {
        try {
          if (!i.isChannelIdReady) return;
          var e = { fchannel_id_fm_i: i.channelId || "" };
          "riseFast" === i.strategy
            ? t.StockBridge.mtaReport({
                busi: "hq",
                eventName: "fast_rise_module_buy_btn_brow",
                params: e,
              })
            : "volatile" === i.strategy &&
              t.StockBridge.mtaReport({
                busi: "hq",
                eventName: "volatility_module_buy_btn_brow",
                params: e,
              });
        } catch (e) {}
      }),
      t.watch(
        function () {
          return i.isChannelIdReady;
        },
        function (e) {
          if (e)
            try {
              var n = { fchannel_id_fm_i: i.channelId || "" };
              "riseFast" === i.strategy
                ? t.StockBridge.mtaReport({
                    busi: "hq",
                    eventName: "fast_rise_module_buy_btn_brow",
                    params: n,
                  })
                : "volatile" === i.strategy &&
                  t.StockBridge.mtaReport({
                    busi: "hq",
                    eventName: "volatility_module_buy_btn_brow",
                    params: n,
                  });
            } catch (e) {}
        }
      );
    var f = t.computed(function () {
        return i.fund.symbol || i.fund.code || "";
      }),
      y = t.computed(function () {
        return a(i.fund.zdf);
      }),
      g = t.computed(function () {
        return r.getRatioClass(parseFloat(i.fund.zdf));
      }),
      v = t.computed(function () {
        var e = (function (e) {
          var t = parseFloat(e);
          if (Number.isNaN(t) || 0 === t) return "equal";
          var n =
            "greenup" ===
            (("undefined" != typeof document &&
              document.body.getAttribute("data-zdf")) ||
              "redup");
          return t > 0 ? (n ? "drop" : "rise") : n ? "rise" : "drop";
        })(parseFloat(i.fund.zdf));
        return "rise" === e ? "bg-rise" : "drop" === e ? "bg-drop" : "bg-peace";
      }),
      _ = t.computed(function () {
        return "volatile" === i.strategy
          ? "振幅"
          : "premium" === i.strategy
          ? "溢折率水平"
          : "5分钟涨速";
      }),
      b = t.computed(function () {
        var e;
        return "premium" === i.strategy
          ? null != (e = i.fund.premiumLevel)
            ? e
            : "--"
          : "volatile" === i.strategy
          ? a(i.fund.amplitude, { noSign: !0 })
          : a(i.fund.speed5m);
      }),
      h = t.computed(function () {
        return "volatile" === i.strategy
          ? "metric__value--dark"
          : "premium" === i.strategy
          ? "metric__value--premium"
          : r.getRatioClass(parseFloat(b.value));
      });
    return {
      tags: m,
      visibleTags: c,
      headRef: s,
      chooseSymbol: f,
      zdfText: y,
      zdfClass: g,
      zdfStyle: v,
      metricLabel: _,
      metricValueText: b,
      metricValueClass: h,
      onBuy: function () {
        try {
          var e = { fchannel_id_fm_i: i.channelId || "" };
          "riseFast" === i.strategy
            ? t.StockBridge.mtaReport({
                busi: "hq",
                eventName: "fast_rise_module_buy_btn_click",
                params: e,
              })
            : "volatile" === i.strategy &&
              t.StockBridge.mtaReport({
                busi: "hq",
                eventName: "volatility_module_buy_btn_click",
                params: e,
              });
        } catch (e) {}
        u("fund:buy", { fund: i.fund });
      },
      onNavigate: function () {
        "riseFast" === i.strategy
          ? t.StockBridge.mtaReport({
              busi: "hq",
              eventName: "fast_rise_module_click",
            })
          : "volatile" === i.strategy
          ? t.StockBridge.mtaReport({
              busi: "hq",
              eventName: "volatility_large_module_click",
            })
          : "premium" === i.strategy &&
            t.StockBridge.mtaReport({
              busi: "hq",
              eventName: "yield_spread_regression_module_click",
            });
        var e = String(i.fund.symbol || i.fund.code || "").trim();
        if (e) {
          var r = n.splitSymbol(e),
            a = r.market,
            o = r.scode;
          t.StockRouter.routeTo({
            name: "stockdetail",
            query: { market: a, scode: o },
          });
        }
      },
      onPremiumExplain: function () {
        u("premium:explain", {
          fundName: i.fund.name,
          code: i.fund.code,
          premiumRate: i.fund.premiumRate,
          avgPremium1m: i.fund.avgPremium1m,
        });
      },
    };
  },
});
Array ||
  (t.resolveComponent("fund-tags") + t.resolveComponent("st-mini-mins"))();
var o = t._export_sfc(i, [
  [
    "render",
    function (e, n, r, a, i, o) {
      return t.e(
        {
          a: t.t(e.fund.name),
          b: "premium" === e.strategy ? 1 : "",
          c: t.o(function () {
            return e.onNavigate && e.onNavigate.apply(e, arguments);
          }, 4419),
          d: t.p({ tags: e.visibleTags }),
          e: "premium" !== e.strategy,
        },
        "premium" !== e.strategy
          ? {
              f: t.o(function () {
                return e.onBuy && e.onBuy.apply(e, arguments);
              }, 4420),
            }
          : {},
        { g: e.chooseSymbol },
        e.chooseSymbol
          ? {
              h: t.p({
                "choose-symbol": e.chooseSymbol,
                "rise-drop-val": e.fund.zdf,
                "rise-drop-style": e.zdfStyle,
                width: 48,
                height: 48,
              }),
            }
          : {},
        {
          i: t.o(function () {
            return e.onNavigate && e.onNavigate.apply(e, arguments);
          }, 4421),
          j: t.t(e.zdfText),
          k: t.n(e.zdfClass),
          l: t.o(function () {
            return e.onNavigate && e.onNavigate.apply(e, arguments);
          }, 4422),
          m: t.t(e.metricValueText),
          n: t.n(e.metricValueClass),
          o: t.t(e.metricLabel),
          p: "premium" === e.strategy ? 1 : "",
          q: "premium" === e.strategy ? 1 : "",
          r: t.o(function () {
            return e.onNavigate && e.onNavigate.apply(e, arguments);
          }, 4423),
          s: e.showPremiumExplain,
        },
        e.showPremiumExplain
          ? {
              t: t.o(function () {
                return (
                  e.onPremiumExplain && e.onPremiumExplain.apply(e, arguments)
                );
              }, 4424),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-7d41ecae"],
]);
wx.createComponent(o);
