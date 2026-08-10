var e = require("../../../../../common/vendor.js"),
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
        }
        switch (this.sType) {
          case "32":
            this.hqBridge.busEmit("close-event-dialog"),
              "/trade/stock_detail.shtml" === this.$route.path
                ? this.hqBridge.busEmit("skip-to-mine", "mine")
                : this.hqBridge.routeTo({
                    path: "/trade/stock_detail.shtml",
                    query: {
                      scode: i,
                      type: t,
                      selectTab: "mine",
                      hash: new e.dayjs().valueOf(),
                    },
                  });
            break;
          case "15":
            this.hqBridge.routeTo({
              path: "/stockDetail/hs/gaoguan",
              query: { code: this.symbol },
            });
        }
      },
      skipPublic: function () {
        this.hqBridge.routeTo({
          path: "/information/detail",
          query: { id: this.noticeId },
        });
      },
      checkReport: function () {
        this.hqBridge.routeTo({
          path: "/information/detail",
          query: { id: this.researchId },
        });
      },
    },
  },
  i = e._export_sfc(t, [
    [
      "render",
      function (t, i, r, s, c, o) {
        return e.e(
          { a: c.detail.includes(r.sType) },
          c.detail.includes(r.sType)
            ? {
                b: e.o(function () {
                  return o.checkDetail && o.checkDetail.apply(o, arguments);
                }, 4427),
              }
            : {},
          { c: r.noticeId },
          r.noticeId
            ? {
                d: e.o(function () {
                  return o.skipPublic && o.skipPublic.apply(o, arguments);
                }, 4428),
              }
            : {},
          { e: c.report.includes(r.sType) || r.researchId },
          c.report.includes(r.sType) || r.researchId
            ? {
                f: e.o(function () {
                  return o.checkReport && o.checkReport.apply(o, arguments);
                }, 4429),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-331ddb68"],
  ]);
wx.createComponent(i);
