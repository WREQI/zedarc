require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../utils/common.js"),
  e = require("../utils/route.js"),
  i = require("../../stock-hq-data/index.js"),
  n = require("../../../../../common/vendor.js"),
  o = {
    inject: ["hqBridge"],
    props: {
      isZxg: { type: Boolean, default: !1 },
      type: { type: String, default: "hot" },
      icon: { type: String, default: "" },
      newsText: { type: String, default: "" },
      newsLink: { type: String, default: "" },
      stockList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      inDetailPage: { type: Boolean, default: !1 },
    },
    data: function () {
      return { isLite: ["mpwzq", "wzqlight"].includes("mpweapp") };
    },
    computed: {
      isMp: function () {
        return "mp" === n.StockBridge.ENV;
      },
    },
    methods: {
      transMarketIcon: t.transMarketIcon,
      handleNewsTextClick: function () {
        var t = this.inDetailPage
          ? "hq.etf.etf_".concat(this.type, "_discover_detail_page_news_click")
          : "hq.etf.etf_".concat(this.type, "_discover_news_click");
        if (
          (n.StockBridge.report(t),
          this.newsLink.includes(
            "wzq.tenpay.com/mp/v2/index.html#/information/detail"
          ))
        ) {
          var e = (this.newsLink.match(/id=(\w+|[\u4e00-\u9fa5]+)/) || [])[1];
          if (e)
            return void n.StockRouter.routeTo({
              name: "informationDetail",
              query: { id: e, title: "新闻" },
            });
        }
        this.isZxg
          ? this.$sdk.redirect(
              "WebBrowser?info=".concat(
                encodeURIComponent(JSON.stringify({ p_url: this.newsLink }))
              )
            )
          : n.StockBridge.locationTo(this.newsLink);
      },
      handleListItemClick: function (t) {
        var o = this,
          r = this.inDetailPage
            ? "hq.etf.etf_".concat(
                this.type,
                "_discover_detail_page_stock_click"
              )
            : "hq.etf.etf_".concat(this.type, "_discover_stock_click");
        n.StockBridge.report(r, { stockid: t });
        var c = i.utils.splitSymbol(t) || {},
          a = c.market,
          s = c.scode;
        this.timer = setTimeout(function () {
          e.navigateToQuote(o.hqBridge, a, s), clearTimeout(o.timer);
        }, 300);
      },
    },
  },
  r = n._export_sfc(o, [
    [
      "render",
      function (t, e, i, o, r, c) {
        return n.e(
          { a: i.icon },
          i.icon ? { b: i.icon } : {},
          { c: i.newsText },
          i.newsText
            ? {
                d: n.t(i.newsText),
                e: n.o(function () {
                  return (
                    c.handleNewsTextClick &&
                    c.handleNewsTextClick.apply(c, arguments)
                  );
                }, 2698),
              }
            : {},
          {
            f: n.f(i.stockList, function (t, e, i) {
              return n.e(
                {
                  a: n.t(t.name),
                  b: c.transMarketIcon("cnjj", "", t.id),
                  c: n.t(t.codeformat),
                  d: t.tag && t.tag.length > 0,
                },
                t.tag && t.tag.length > 0
                  ? {
                      e: n.f(t.tag, function (t, e, i) {
                        return { a: n.t(t), b: t };
                      }),
                    }
                  : {},
                {
                  f: n.t(t.zdfformat),
                  g: n.n(t.zdfclass),
                  h: n.t(t.monthzdfformat),
                  i: n.n(t.monthzdfclass),
                  j: e,
                  k: n.o(
                    function (e) {
                      return c.handleListItemClick(t.id);
                    },
                    2699,
                    e
                  ),
                }
              );
            }),
            g: n.n(r.isLite ? "lite" : "pro"),
          }
        );
      },
    ],
    ["__scopeId", "data-v-4f4e3d67"],
  ]);
wx.createComponent(r);
