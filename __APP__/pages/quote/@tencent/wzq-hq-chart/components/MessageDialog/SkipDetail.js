var e = require("../../../../../../common/vendor.js"),
  t = {
    inject: ["hqBridge"],
    props: {
      sType: { type: String, require: !1, default: "" },
      noticeId: { type: String, require: !1, default: "" },
      researchId: { type: String, require: !1, default: "" },
      symbol: { type: String, require: !1, default: "" },
    },
    data: function () {
      return { detail: ["32", "15"], report: ["38"] };
    },
    computed: {},
    created: function () {},
    mounted: function () {},
    methods: {
      checkDetail: function () {
        var t,
          i = this.symbol.replace(/\D+/, "");
        switch (this.symbol.slice(0, 2)) {
          case "sh":
            t = "1";
            break;
          case "sz":
            t = "0";
            break;
          case "hk":
            t = "2";
            break;
          case "us":
            t = "3";
            break;
          default:
            t = "";
        }
        if ("" !== t)
          switch (this.sType) {
            case "32":
              if (
                (this.hqBridge.busEmit("close-event-dialog"),
                "/trade/stock_detail.shtml" === this.$route.path)
              )
                this.hqBridge.busEmit("skip-to-mine", "mine");
              else if ("wzq" === this.hqBridge.ENV)
                this.hqBridge.routeTo({
                  path: "/trade/stock_detail.shtml",
                  query: {
                    scode: i,
                    type: t,
                    selectTab: "mine",
                    hash: new e.dayjs().valueOf(),
                  },
                });
              else {
                var s =
                  "https://wzq.tenpay.com/mp/v2/index.html?#/trade/stock_detail.shtml?scode="
                    .concat(i, "&type=")
                    .concat(t, "&selectTab=mine&hash=")
                    .concat(new e.dayjs().valueOf());
                e.StockBridge.openExtraWebview(s);
              }
              break;
            case "15":
              if ("wzq" === this.hqBridge.ENV)
                this.hqBridge.routeTo({
                  path: "/stockDetail/hs/gaoguan",
                  query: { code: this.symbol },
                });
              else {
                var r =
                  "https://wzq.tenpay.com/mp/v2/index.html?#/stockDetail/hs/gaoguan?code=".concat(
                    this.symbol
                  );
                e.StockBridge.openExtraWebview(r);
              }
          }
      },
      skipPublic: function () {
        this.hqBridge.report("hq.stock_detail.bigevent_bar_click", {
          stockid: this.symbol,
          newsid: this.noticeId,
        }),
          e.StockRouter.routeTo({
            name: "informationDetail",
            query: { id: this.noticeId },
          });
      },
      checkReport: function () {
        this.hqBridge.report("hq.stock_detail.bigevent_bar_click", {
          stockid: this.symbol,
          newsid: this.researchId,
        }),
          e.StockRouter.routeTo({
            name: "informationDetail",
            query: { id: this.researchId },
          });
      },
    },
  },
  i = e._export_sfc(t, [
    [
      "render",
      function (t, i, s, r, c, o) {
        return e.e(
          { a: c.detail.includes(s.sType) },
          c.detail.includes(s.sType)
            ? {
                b: e.o(function () {
                  return o.checkDetail && o.checkDetail.apply(o, arguments);
                }, 4357),
              }
            : {},
          { c: s.noticeId },
          s.noticeId
            ? {
                d: e.o(function () {
                  return o.skipPublic && o.skipPublic.apply(o, arguments);
                }, 4358),
              }
            : {},
          { e: c.report.includes(s.sType) || s.researchId },
          c.report.includes(s.sType) || s.researchId
            ? {
                f: e.o(function () {
                  return o.checkReport && o.checkReport.apply(o, arguments);
                }, 4359),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-8e96c067"],
  ]);
wx.createComponent(i);
