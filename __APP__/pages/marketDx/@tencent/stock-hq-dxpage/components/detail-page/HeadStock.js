var e = require("../../../stock-hq-data/index.js"),
  t = require("../../utils/common.js"),
  i = require("../../../../../../common/vendor.js"),
  o = {
    name: "HeadStock",
    inject: { hqBridge: {}, isZxgMiniApp: { default: !1 } },
    props: {
      info: { type: Object, default: function () {} },
      type: { type: String, default: null },
    },
    data: function () {
      return { env: this.hqBridge.ENV };
    },
    methods: {
      seeMore: function () {
        var i = this.info || {},
          o = i.code,
          r = i.name,
          n = e.utils.splitSymbol(o),
          s = n.market,
          h = n.scode,
          a = { market: s, scode: h };
        if (
          (this.type && "bond" === this.type
            ? "sh" === s &&
              this.hqBridge.report("hq.xingurili.hs_detail_goto_hangqing_bond")
            : ((a.tabs = "brief"),
              "sh" === s &&
                this.hqBridge.report(
                  "hq.xingurili.hs_detail_goto_hangqing_stock"
                )),
          this.isZxgMiniApp)
        )
          t.goToMiniAppQuote(s, h);
        else {
          if (
            ("oem" === this.hqBridge.ENV &&
              this.hqBridge.routeTo({ path: "/detail", query: a }),
            "mini" === this.hqBridge.ENV &&
              this.hqBridge.routeTo({
                path: "/detail",
                query: { type: s, scode: h },
              }),
            "wzq" === this.hqBridge.ENV)
          ) {
            var c = e.utils.splitSymbol(o),
              d = c.market,
              u = c.scode;
            this.hqBridge.routeTo({
              path: "/hq/stock/".concat(d, "/").concat(u),
            });
          }
          if ("app" === this.hqBridge.ENV) {
            var p = "qqstock://StockDetail?info=".concat(
              encodeURIComponent(
                JSON.stringify({ code: o, name: r, selectedTabTitle: "简况" })
              )
            );
            this.hqBridge.routeTo({ url: p });
          }
          if ("mp" === this.hqBridge.ENV) {
            if (!s || !h) return;
            this.hqBridge.routeTo({
              path: "/pages/quote/quote",
              query: { market: s, scode: h },
            });
          }
        }
      },
    },
  },
  r = i._export_sfc(o, [
    [
      "render",
      function (e, t, o, r, n, s) {
        return {
          a: i.t(o.info.name),
          b: i.t(o.info.symbol),
          c: i.n("header-stock-left-code-".concat(n.env)),
          d: i.t(o.info.buttontitle),
          e: i.n("header-stock-right-more-".concat(n.env)),
          f: i.o(function () {
            return s.seeMore && s.seeMore.apply(s, arguments);
          }, 4562),
          g: i.n("header-stock-".concat(n.env)),
        };
      },
    ],
    ["__scopeId", "data-v-ceb1eebb"],
  ]);
wx.createComponent(r);
