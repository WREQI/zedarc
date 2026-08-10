require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js"),
  t = require("../hooks/useDiscoverConfig.js"),
  i = require("../node-modules/@tencent/st-tools/dist/index.js"),
  n = { hot: "选行业", index: "买指数" },
  r = {
    components: {
      DiscoverCard: function () {
        return "./DiscoverCard.js";
      },
      Navigation: function () {
        return "./Navigation.js";
      },
      TrustFooter: function () {
        return "../../../../detailSbg/@tencent/stock-markets-base/components/TrustFooter/index.js";
      },
    },
    props: { type: { type: String, default: "hot" } },
    setup: function (r) {
      var s = e.inject("hqBridge"),
        o = ["mpwzq", "wzqlight"].includes("mpweapp"),
        a = !1;
      navigator && (a = i.dist.detect(navigator.userAgent).env.IS_ZXG);
      var c = t.useDiscoverConfig(s),
        u = c.getDiscoverDetailData,
        p = c.discoverDetailData;
      u(r.type);
      var d = e.computed(function () {
        return Object.keys(p.value);
      });
      return (
        s.report("hq.etf.etf_".concat(r.type, "_discover_detail_page_show")),
        {
          isMp: !1,
          isZxg: a,
          isMpZxg: !0,
          isLite: o,
          title: n[r.type] || "",
          discoverDetailData: p,
          dateList: d,
        }
      );
    },
  };
Array ||
  (
    e.resolveComponent("navigation") +
    e.resolveComponent("discover-card") +
    e.resolveComponent("TrustFooter")
  )();
var s = e._export_sfc(r, [
  [
    "render",
    function (t, i, n, r, s, o) {
      return e.e(
        { a: r.isZxg },
        r.isZxg ? { b: e.p({ title: r.title }) } : {},
        {
          c: e.n(n.type),
          d: e.n(r.isZxg || r.isMpZxg ? "zxg" : ""),
          e: e.f(r.dateList, function (t, i, s) {
            return {
              a: e.t(t),
              b: e.f(r.discoverDetailData[t], function (t, i, o) {
                return {
                  a: i,
                  b: "498820be-1-" + s + "-" + o,
                  c: e.p({
                    "is-zxg": r.isZxg,
                    type: n.type,
                    icon: t.news_icon,
                    "news-text": t.news_text,
                    "news-link": t.news_link,
                    "stock-list": t.stockList,
                    "in-detail-page": !0,
                  }),
                };
              }),
              c: i,
            };
          }),
          f: r.isLite,
        },
        (r.isLite, {}),
        { g: r.isLite ? 1 : "", h: r.isMp ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-498820be"],
]);
wx.createComponent(s);
