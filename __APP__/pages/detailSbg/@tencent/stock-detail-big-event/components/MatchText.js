var e = require("../../../../../common/vendor.js"),
  t = {
    inject: ["hqBridge"],
    components: {
      SkipDeatil: function () {
        return "./SkipDetail.js";
      },
    },
    props: { textData: { type: Object, require: !0, default: function () {} } },
    data: function () {
      return { preText: "", centerText: "", endText: "", env: "" };
    },
    computed: {},
    created: function () {
      this.dealText(), (this.env = this.hqBridge.ENV);
    },
    mounted: function () {},
    methods: {
      dealText: function () {
        var e = this.textData.desc,
          t = e.indexOf("“"),
          a = e.indexOf("”");
        (this.preText = e.slice(0, t)),
          t < 0 ||
            ((this.endText = e.slice(a + 1)),
            (this.centerText = e.slice(t + 1, a)));
      },
      goStoreDetail: function () {
        "wzq" === this.env &&
          this.hqBridge.routeTo({
            path: "/plate/200/detail",
            query: { plateId: this.textData.detail },
          });
      },
    },
  };
Array || e.resolveComponent("SkipDeatil")();
var a = e._export_sfc(t, [
  [
    "render",
    function (t, a, n, i, r, o) {
      return e.e(
        { a: n.textData.detail },
        n.textData.detail
          ? e.e(
              { b: e.t(r.preText), c: r.centerText },
              r.centerText
                ? {
                    d: e.t("“".concat(r.centerText, "”")),
                    e: e.o(function () {
                      return (
                        o.goStoreDetail && o.goStoreDetail.apply(o, arguments)
                      );
                    }, 2541),
                  }
                : {},
              { f: e.t(r.endText), g: "wzq" === r.env },
              "wzq" === r.env
                ? {
                    h: e.p({
                      sType: n.textData.type,
                      noticeId: n.textData.notice_id,
                      researchId: n.textData.research_id,
                      symbol: n.textData.symbol,
                    }),
                  }
                : {}
            )
          : e.e(
              { i: e.t(n.textData.desc), j: "wzq" === r.env },
              "wzq" === r.env
                ? {
                    k: e.p({
                      sType: n.textData.type,
                      noticeId: n.textData.notice_id,
                      researchId: n.textData.research_id,
                      symbol: n.textData.symbol,
                    }),
                  }
                : {}
            )
      );
    },
  ],
  ["__scopeId", "data-v-89f67de2"],
]);
wx.createComponent(a);
