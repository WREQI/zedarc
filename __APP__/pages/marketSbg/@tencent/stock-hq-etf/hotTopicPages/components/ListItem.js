var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  r = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  p = function (e, r, i) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[r] = i);
  },
  c = require("../../../../../../common/vendor.js"),
  l = require("../../utils/common.js"),
  s = {
    rise: { redup: "bg-rise", greenup: "bg-drop" },
    drop: { redup: "bg-drop", greenup: "bg-rise" },
    equal: { redup: "bg-peace", greenup: "bg-peace" },
  },
  u = c.defineComponent({
    name: "ListItem",
    components: {
      EtfRollingBar: function () {
        return "./EtfRollingBar.js";
      },
      StMiniMins: function () {
        return "../../../../../asyncCom/@tencent/st-mini-mins/src/index.js";
      },
    },
    props: {
      item: { type: Object, required: !0 },
      scene: { type: String, default: "list" },
      rank: { type: Number, default: 0 },
    },
    setup: function (t) {
      var u = c.computed(function () {
          return (
            (c = (function (t, r) {
              for (var i in r || (r = {})) n.call(r, i) && p(t, i, r[i]);
              if (o) {
                var c,
                  l = e(o(r));
                try {
                  for (l.s(); !(c = l.n()).done; ) {
                    i = c.value;
                    a.call(r, i) && p(t, i, r[i]);
                  }
                } catch (e) {
                  l.e(e);
                } finally {
                  l.f();
                }
              }
              return t;
            })({}, t.item)),
            (l = {
              rank: t.item.rank || t.rank,
              symbol: t.item.symbol || "",
              point: t.item.point || "",
              etf: Array.isArray(t.item.etf) ? t.item.etf : [],
              name: t.item.name,
              price_ratio: t.item.price_ratio,
            }),
            r(c, i(l))
          );
          var c, l;
        }),
        d = c.computed(function () {
          return l.setZdpClass(u.value.price_ratio);
        }),
        m = c.computed(function () {
          var e = l.getLimitUpCount(t.item.limit_up_count);
          return e > 0 ? "".concat(e, "家涨停") : "";
        }),
        y = c.computed(function () {
          return !!(u.value.point && u.value.etf.length > 0);
        }),
        f = c.computed(function () {
          var e =
              ("undefined" != typeof document &&
                document.body.getAttribute("data-zdf")) ||
              "redup",
            t = s[d.value] || s.equal;
          return t[e] || t.redup;
        });
      return {
        displayTopic: u,
        setZdpClass: l.setZdpClass,
        limitUpLabel: m,
        miniRiseDropStyle: f,
        hasCardBody: y,
        formatZdf: function (e) {
          var t = Number(e);
          return Number.isNaN(t)
            ? "--"
            : "".concat(t > 0 ? "+" : "").concat(t.toFixed(2), "%");
        },
        handleItemClick: function () {
          var e = t.item.symbol || "";
          if (e) {
            var r = "search" === t.scene;
            c.StockBridge.mtaReport({
              busi: "hq",
              eventName: r ? "search_result_click" : "hotspot_card_click",
              params: { plateid: e },
            }),
              c.StockRouter.routeTo({
                name: "etfhotspotdetail",
                query: r ? { code: e, from: "hot_topic_search" } : { code: e },
              });
          }
        },
      };
    },
  });
Array ||
  (c.resolveComponent("StMiniMins") + c.resolveComponent("EtfRollingBar"))();
var d = c._export_sfc(u, [
  [
    "render",
    function (e, t, r, i, o, n) {
      return c.e(
        {
          a:
            Number(e.displayTopic.rank) >= 1 &&
            Number(e.displayTopic.rank) <= 3,
        },
        Number(e.displayTopic.rank) >= 1 && Number(e.displayTopic.rank) <= 3
          ? {
              b: c.t(e.displayTopic.rank),
              c: c.n("rank-badge--rank-".concat(e.displayTopic.rank)),
            }
          : { d: c.t(e.displayTopic.rank) },
        {
          e: c.t(e.displayTopic.name),
          f: c.t(e.formatZdf(e.displayTopic.price_ratio)),
          g: c.n(e.setZdpClass(e.displayTopic.price_ratio)),
          h: e.limitUpLabel,
        },
        e.limitUpLabel ? { i: c.t(e.limitUpLabel) } : {},
        { j: e.displayTopic.symbol },
        e.displayTopic.symbol
          ? {
              k: c.p({
                "choose-symbol": e.displayTopic.symbol,
                "rise-drop-style": e.miniRiseDropStyle,
                width: 40,
                height: 20,
                "render-points": 40,
                "fill-chart": !0,
              }),
            }
          : {},
        { l: e.hasCardBody },
        e.hasCardBody
          ? c.e(
              { m: e.displayTopic.point },
              e.displayTopic.point ? { n: c.t(e.displayTopic.point) } : {},
              { o: e.displayTopic.etf.length > 0 },
              e.displayTopic.etf.length > 0
                ? { p: c.p({ topic: e.displayTopic, scene: e.scene }) }
                : {}
            )
          : {},
        {
          q: c.o(function () {
            return e.handleItemClick && e.handleItemClick.apply(e, arguments);
          }, 2693),
        }
      );
    },
  ],
  ["__scopeId", "data-v-8103b6a9"],
]);
wx.createComponent(d);
