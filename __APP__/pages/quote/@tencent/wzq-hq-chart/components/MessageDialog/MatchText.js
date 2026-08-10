var t = require("../../../../../../common/vendor.js"),
  e = {
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
        var t = this.textData.desc,
          e = t.indexOf("“"),
          a = t.indexOf("”");
        (this.preText = t.slice(0, e)),
          e < 0 ||
            ((this.endText = t.slice(a + 1)),
            (this.centerText = t.slice(e + 1, a)));
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
Array || t.resolveComponent("SkipDeatil")();
var a = t._export_sfc(e, [
  [
    "render",
    function (e, a, i, n, r, o) {
      return t.e(
        { a: i.textData.detail },
        i.textData.detail
          ? t.e(
              { b: t.t(r.preText), c: r.centerText },
              r.centerText
                ? {
                    d: t.t("“".concat(r.centerText, "”")),
                    e: t.o(function () {
                      return (
                        o.goStoreDetail && o.goStoreDetail.apply(o, arguments)
                      );
                    }, 3540),
                  }
                : {},
              {
                f: t.t(r.endText),
                g: t.p({
                  sType: i.textData.type,
                  noticeId: i.textData.notice_id,
                  researchId: i.textData.research_id,
                  symbol: i.textData.symbol,
                }),
              }
            )
          : {
              h: t.t(i.textData.desc),
              i: t.p({
                sType: i.textData.type,
                noticeId: i.textData.notice_id,
                researchId: i.textData.research_id,
                symbol: i.textData.symbol,
              }),
            }
      );
    },
  ],
  ["__scopeId", "data-v-235c2539"],
]);
wx.createComponent(a);
