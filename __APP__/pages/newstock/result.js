require("../../app.js");
var t = require("../../mixin/platforms/index.js"),
  e = require("../../common/vendor.js"),
  s = {
    name: "NewstockResult",
    mixins: [t.pluginMixins],
    data: function () {
      return {
        date: null,
        failCount: null,
        retcode: null,
        retmsg: null,
        purchase_type: "",
      };
    },
    computed: {
      status: function () {
        return "0" === this.retcode && 0 == +this.failCount
          ? "suc"
          : "0" === this.retcode && +this.failCount > 0
          ? "inf"
          : "fail";
      },
    },
    mounted: function () {
      var t = this.$route.query,
        e = t.date,
        s = t.retmsg,
        r = t.retcode,
        u = t.failCount,
        o = t.purchase_type;
      (this.retcode = String(r) || ""),
        (this.date = e || ""),
        (this.failCount = u || ""),
        (this.retmsg = decodeURIComponent(s) || ""),
        (this.purchase_type = o || "");
    },
    methods: {
      goRecord: function () {
        this.$router.push({
          name: "NewStockRecords",
          query: {
            purchase_type: this.purchase_type,
            from: this.$route.query.from,
          },
        });
      },
      onClick: function () {
        "suc" === this.status ? this.goRecord() : this.$router.back();
      },
    },
  };
Array || e.resolveComponent("GlobalWrap")(), Math;
var r = e._export_sfc(s, [
  [
    "render",
    function (t, s, r, u, o, a) {
      return e.e(
        { a: t.rootFontSize, b: "suc" === a.status },
        (a.status, {}),
        { c: "inf" === a.status },
        "inf" === a.status
          ? {
              d: e.t(o.failCount),
              e: e.t("1" !== o.purchase_type ? "新股" : "新债"),
            }
          : {},
        { f: "fail" === a.status },
        (a.status, {}),
        { g: "suc" === a.status },
        "suc" === a.status
          ? { h: e.t(t.$filters.time.format(o.date, "YYYY年MM月DD日")) }
          : { i: e.t(o.retmsg || "券商网络繁忙，请重新申购") },
        {
          j: e.t("suc" === a.status ? "查看申购记录" : "重新申购"),
          k: e.o(function () {
            return a.onClick && a.onClick.apply(a, arguments);
          }),
          l: "inf" === a.status,
        },
        "inf" === a.status
          ? {
              m: e.o(function () {
                return a.goRecord && a.goRecord.apply(a, arguments);
              }),
            }
          : {},
        {
          n: e.n("result-".concat(a.status)),
          o: null !== o.retcode,
          p: e.sr("#global-wrap", "e9bf911b-0"),
          q: e.p({
            id: "global-wrap",
            filePath: "/newstock/result",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-e9bf911b"],
]);
wx.createPage(r);
