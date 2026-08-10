require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../common/vendor.js"),
  t = {
    name: "AiMarketingComponent",
    components: {},
    props: {
      data: {
        type: Object,
        default: function () {
          return null;
        },
      },
      contexObj: {
        type: Object,
        default: function () {
          return {};
        },
      },
      theme: { required: !0, type: String },
    },
    setup: function (t) {
      var r = {
        requestid: t.contexObj.requestId || "",
        session: t.contexObj.sessionId || "",
      };
      return (
        e.StockBridge.report("base.ai_search.xuangu_marketing_brow", r),
        {
          marketList: e.computed(function () {
            var e = t.data;
            return e ? e.url_list : [];
          }),
          goToDetail: function (r) {
            var n = (r || {}).url;
            n &&
              ((function (r) {
                var n = {
                    requestid: t.contexObj.requestId || "",
                    session: t.contexObj.sessionId || "",
                  },
                  a = "";
                switch (r.name) {
                  case "open_trade":
                    (a = "base.ai_search.xuangu_marketing_item_kaihu_click"),
                      (n.fchannel_id_fm_i = "ISm00p000a236");
                    break;
                  case "etf_teach":
                    a = "base.ai_search.xuangu_marketing_item_kecheng_click";
                    break;
                  case "mock_trade":
                    a = "base.ai_search.xuangu_marketing_item_mncg_click";
                    break;
                  default:
                    return;
                }
                e.StockBridge.report(a, n);
              })(r),
              e.StockBridge.ENV === e.EnvTypeEnum.WZQ ||
              e.StockBridge.ENV === e.EnvTypeEnum.WZQ_LITE
                ? n.startsWith("https://") || n.startsWith("http://")
                  ? e.StockBridge.openExtraWebview(n)
                  : e.StockBridge.routeTo({ path: n })
                : n.includes("/pages/index/trade")
                ? e.wx$1.switchTab({ url: "/pages/index/trade" })
                : e.StockBridge.routeTo({ url: n }));
          },
          titleStr: e.computed(function () {
            var e = t.data;
            return e && e.group ? e.group : "🚢  迈出投资第一步，其实不难：";
          }),
        }
      );
    },
  },
  r = e._export_sfc(t, [
    [
      "render",
      function (t, r, n, a, i, c) {
        return e.e(
          { a: n.data },
          n.data
            ? {
                b: e.t(a.titleStr),
                c: e.f(a.marketList, function (t, r, n) {
                  return {
                    a: e.t(t.title),
                    b: r,
                    c: e.o(
                      function (e) {
                        return a.goToDetail(t);
                      },
                      5893,
                      r
                    ),
                  };
                }),
                d: e.n("skin-".concat(n.theme)),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-493cfa0a"],
  ]);
wx.createComponent(r);
