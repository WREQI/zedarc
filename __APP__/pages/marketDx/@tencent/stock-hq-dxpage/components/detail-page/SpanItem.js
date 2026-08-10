var e = require("../../../stock-hq-data/index.js"),
  t = require("../../utils/common.js"),
  i = require("../../../../../../common/vendor.js"),
  r = {
    name: "SpanItem",
    inject: { hqBridge: {}, isZxgMiniApp: { default: !1 } },
    props: {
      item: { type: Object, required: !1, default: function () {} },
      direction: { type: String, required: !1 },
      valueClass: { type: String, required: !1 },
      type: { type: String, default: "" },
    },
    data: function () {
      return { env: this.hqBridge.ENV };
    },
    computed: {
      leftwidth: function () {
        return this.item.space;
      },
    },
    methods: {
      showTip: function (e) {
        this.$emit("showTeachPop");
      },
      transText: function (e) {
        return /^--.*%$/.test(e) ? e.slice(0, -1) : e;
      },
      clickAction: function () {
        var i = this.item || {},
          r = i.isclick,
          o = i.code,
          n = i.value;
        if (r) {
          if (!o) return;
          var s = o.slice(0, 2);
          ("sh" !== s && "sz" !== s) ||
            this.hqBridge.report("hq.xingurili.hs_detail_goto_zhenggu");
          var c = e.utils.splitSymbol(o),
            a = c.market,
            u = c.scode;
          if (this.isZxgMiniApp) return void t.goToMiniAppQuote(a, u);
          if (
            ("oem" === this.hqBridge.ENV &&
              this.hqBridge.routeTo({
                path: "/detail",
                query: { market: a, scode: u },
              }),
            "mini" === this.hqBridge.ENV &&
              this.hqBridge.routeTo({
                path: "/detail",
                query: { type: a, scode: u },
              }),
            "wzq" === this.hqBridge.ENV)
          ) {
            var h = e.utils.splitSymbol(o),
              d = h.market,
              p = h.scode;
            this.hqBridge.routeTo({
              path: "/hq/stock/".concat(d, "/").concat(p),
            });
          }
          if ("app" === this.hqBridge.ENV) {
            var l = "qqstock://StockDetail?info=".concat(
              encodeURIComponent(JSON.stringify({ code: o, name: n }))
            );
            this.hqBridge.routeTo({ url: l });
          }
          if ("mp" === this.hqBridge.ENV) {
            if (!a || !u) return;
            this.hqBridge.routeTo({
              path: "/pages/quote/quote",
              query: { market: a, scode: u },
            });
          }
        }
      },
    },
  },
  o = i._export_sfc(r, [
    [
      "render",
      function (e, t, r, o, n, s) {
        return i.e(
          { a: i.t(r.item.name), b: r.item.isShowTip },
          (r.item.isShowTip, {}),
          {
            c: i.n("left-span-".concat(n.env)),
            d: i.o(function (e) {
              return s.showTip(r.item.tipType);
            }, 4557),
            e: i.t(s.transText(r.item.value)),
            f: i.n("right-span-".concat(n.env)),
            g: i.n(r.valueClass),
            h: i.n(r.item.isclick ? "is-click" : ""),
            i: i.n("doubleColumn" === r.type ? "double-column-right-span" : ""),
            j: i.o(function () {
              return s.clickAction && s.clickAction.apply(s, arguments);
            }, 4558),
            k: i.n(r.direction),
          }
        );
      },
    ],
    ["__scopeId", "data-v-85c1ceb9"],
  ]);
wx.createComponent(o);
