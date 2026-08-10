require("../../../app.js");
var e = require("../../../model/newstock/useNewStock.js"),
  t = require("../../../common/vendor.js"),
  o = {
    name: "QuotaInfo",
    props: {
      lists: {
        type: Array,
        default: function () {
          return [];
        },
      },
      purchaseType: { type: String, default: "" },
      showExtra: { type: Boolean, default: !1 },
      showRecord: { type: Boolean, default: !0 },
    },
    methods: {
      goToRecord: function () {
        var t =
          this.purchaseType === e.PURCHASE_TYPE.ALL
            ? 0
            : this.purchaseType || 0;
        0 == +t
          ? this.$stat.click("trade.playnew.newstock.record")
          : 1 == +t && this.$stat.click("trade.playnew.newbond.record"),
          this.$router.push({
            name: "NewStockRecords",
            query: { purchase_type: t, from: this.$route.query.from },
          });
      },
      goToTips: function () {
        var e = this.purchaseType || 0;
        this.$stat.click("trade.newstock.newbond.information"),
          this.$router.push({ name: "NewStockTips", query: { tab: e } });
      },
    },
  };
Array || t.resolveComponent("AdaptFontSize")(), Math;
var r = t._export_sfc(o, [
  [
    "render",
    function (e, o, r, n, s, a) {
      return t.e(
        { a: r.showExtra ? 1 : "", b: r.lists },
        r.lists
          ? {
              c: t.f(r.lists, function (o, r, n) {
                return t.e(
                  { a: o.number },
                  o.number
                    ? {
                        b: t.t(
                          e.$filters.numbers.formatNoDecimal(o.number || 0)
                        ),
                        c: "0ce7fd7a-0-" + n,
                        d: t.p({
                          value: o.number,
                          breakpoint: 999999,
                          "font-size": "30",
                        }),
                      }
                    : {},
                  { e: o.text },
                  o.text
                    ? t.e(
                        { f: t.t(o.text), g: o.icon },
                        o.icon
                          ? {
                              h: t.n("icon-" + o.icon),
                              i: t.o(function () {
                                return (
                                  a.goToTips && a.goToTips.apply(a, arguments)
                                );
                              }, r),
                            }
                          : {}
                      )
                    : {},
                  { j: r }
                );
              }),
            }
          : {},
        { d: r.showRecord },
        r.showRecord
          ? {
              e: t.o(function () {
                return a.goToRecord && a.goToRecord.apply(a, arguments);
              }),
            }
          : {},
        { f: r.showExtra, g: r.showExtra ? 1 : "", h: r.purchaseType }
      );
    },
  ],
  ["__scopeId", "data-v-0ce7fd7a"],
]);
wx.createComponent(r);
