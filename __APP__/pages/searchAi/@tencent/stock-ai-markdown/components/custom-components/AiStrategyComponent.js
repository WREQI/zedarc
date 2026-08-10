var e = require("../../../../../../common/vendor.js"),
  t = require("../../../stock-hq-data/index.js"),
  r = {
    name: "AiStrategyComponent",
    components: {
      AiStrategy: function () {
        return "../../node-modules/@tencent/stock-ai-strategy/modules/Card.js";
      },
    },
    props: {
      data: {
        type: Object,
        default: function () {
          return null;
        },
      },
      title: { type: String, default: "稳健型蓝筹股" },
      contexObj: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    watch: { $route: function (e, t) {} },
    created: function () {
      var t = this;
      e.wx$1.onAppRoute(function () {
        var e, r;
        (null == (r = null == (e = t.$refs) ? void 0 : e.aiStrategy)
          ? void 0
          : r.refresh) && t.$refs.aiStrategy.refresh();
      });
    },
    beforeDestroy: function () {},
    setup: function (r) {
      var o = this;
      return {
        onItemClick: function (o) {
          var n,
            i = r.contexObj || {},
            a = i.requestId,
            c = void 0 === a ? "" : a,
            s = i.sessionId,
            u = void 0 === s ? "" : s,
            d = i.subScene,
            f = void 0 === d ? "" : d;
          if (
            (e.StockBridge.report(
              "base.ai_search.xuangu_plugin_stock_item_click",
              { requestid: c, session: u, subScene: f }
            ),
            o && o.code)
          ) {
            n = o.code;
            var l = t.utils.splitSymbol(n),
              v = l.market,
              p = l.scode;
            e.StockRouter.routeTo({
              name: "stockdetail",
              query: { scode: p, market: v },
            });
          }
        },
        onItemStar: function (e) {},
        onVisibilitychange: function () {
          var e, t;
          (null == (t = null == (e = o.$refs) ? void 0 : e.aiStrategy)
            ? void 0
            : t.refresh) && o.$refs.aiStrategy.refresh();
        },
      };
    },
  };
Array || e.resolveComponent("AiStrategy")();
var o = e._export_sfc(r, [
  [
    "render",
    function (t, r, o, n, i, a) {
      return {
        a: e.sr("aiStrategy", "f541c637-0"),
        b: e.o(n.onItemClick, 5891),
        c: e.o(n.onItemStar, 5892),
        d: e.p({
          data: o.data,
          title: o.title,
          context: o.contexObj,
          type: "v2",
          version: "v2",
        }),
      };
    },
  ],
  ["__scopeId", "data-v-f541c637"],
]);
wx.createComponent(o);
