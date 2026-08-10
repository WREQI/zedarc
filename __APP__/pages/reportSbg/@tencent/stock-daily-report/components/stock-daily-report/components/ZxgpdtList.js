var t = require("../assets/filters/stock.js"),
  e = require("../defaultWZQ.js"),
  n = require("../../../../../../../common/vendor.js");
getApp().globalData;
var a = {
    directives: {},
    props: {
      content: {
        type: Object,
        default: function () {
          return {};
        },
      },
      containerClass: { type: String, default: "" },
      dailyType: { type: String, default: "" },
      wzqConfig: {
        type: Object,
        default: function () {
          return {
            Helper: { navigateTo: function () {} },
            stat: { click: function () {} },
            openStock: function () {},
          };
        },
      },
    },
    data: function () {
      return { statKey: { zjrp: "zjrd", rdtc: "rmtc" } };
    },
    methods: {
      priceChangePercent: t.priceChangePercent,
      replaceSpecialTagZX: e.replaceSpecialTagZX,
      hgFlucColor: e.hgFlucColor,
      viewStockDetail: function (t) {
        var n = t.symbol.substr(0, 2),
          a = e.getMarket(n),
          c = t.symbol.substr(2);
        this.$emit("viewStockDetail", "zxdt", a, c);
      },
      statClick: function (t, e) {
        var a = e.type,
          c = t.target,
          r = c.dataset.plateCode,
          o = c.className;
        a &&
          this.statKey[a] &&
          n.StockBridge.report(
            "base.daily."
              .concat(this.dailyType, "_zxdt_")
              .concat(this.statKey[a], "_tap")
          );
        var i = {};
        !o &&
          a &&
          ("rdtc" === a
            ? (i = r
                ? {
                    path: "/strategy/concept/detail",
                    query: { concept_code: r },
                  }
                : { path: "/strategy/concept/index" })
            : "zjrp" === a
            ? (i = r
                ? { path: "/strategy/fund/detail", query: { code: r } }
                : { path: "/strategy/fund/index" })
            : "jrrd" === a && (i = { path: "/hot", query: { tab: 0 } }));
        try {
          var u = "";
          i.query &&
            (u =
              i.query &&
              Object.keys(i.query)
                .map(function (t) {
                  return "".concat(t, "=").concat(i.query[t]);
                })
                .join("&"));
          var s = "https://wzq.tenpay.com/mp/v2/index.html#"
            .concat(i.path, "?")
            .concat(u);
          n.StockBridge.routeTo({
            url: "/pages/additional/webview/index?url=".concat(
              encodeURIComponent(s)
            ),
          });
        } catch (t) {}
      },
    },
  },
  c = n._export_sfc(a, [
    [
      "render",
      function (t, e, a, c, r, o) {
        return n.e(
          { a: a.content.content },
          a.content.content
            ? {
                b: n.f(a.content.content, function (t, e, a) {
                  return {
                    a: n.t(t.name),
                    b: n.t(o.priceChangePercent(t.zdf)),
                    c: n.n(o.hgFlucColor(t.zdf)),
                    d: n.o(
                      function (e) {
                        return o.viewStockDetail(t);
                      },
                      4473,
                      e
                    ),
                    e: n.f(t.data, function (t, e, a) {
                      return {
                        a: n.t(t.tag),
                        b: o.replaceSpecialTagZX(t),
                        c: n.o(
                          function (e) {
                            return o.statClick(e, t);
                          },
                          4474,
                          e
                        ),
                        d: e,
                        e: t.isFolderNews ? 1 : "",
                      };
                    }),
                    f: e,
                  };
                }),
                c: n.n(a.containerClass),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-a7e9e42d"],
  ]);
wx.createComponent(c);
