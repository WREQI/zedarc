var t = require("../../../../../../common/vendor.js"),
  a = {
    props: ["type", "data"],
    methods: {
      dateFormat: function (t) {
        return t.replace(/(\d{4})(\d{2})(\d{2})/i, "$1-$2-$3");
      },
      goTeach: function () {
        var a = this.data.tag,
          e = a.module,
          d = a.tag_name_eng,
          o =
            "https://wzq.tenpay.com/resources/diagnoseStock/#/teachMineSweeperWzqV2?part="
              .concat(e, "&pos=")
              .concat(d);
        t.StockBridge.report("hq.stock_detail.ms_teach", {
          moduleId: d,
          tab: e,
        }),
          t.StockBridge.openExtraWebview(o);
      },
    },
  },
  e = t._export_sfc(a, [
    [
      "render",
      function (a, e, d, o, r, c) {
        return t.e(
          { a: d.data.disclosure_title },
          d.data.disclosure_title ? { b: t.t(d.data.disclosure_title) } : {},
          { c: d.data.disclosure },
          d.data.disclosure
            ? {
                d: t.t(d.data.disclosure),
                e: t.t(c.dateFormat(d.data.disclosure_time)),
              }
            : {},
          { f: d.data.disclosure_2nd },
          d.data.disclosure_2nd
            ? {
                g: t.t(d.data.disclosure_2nd),
                h: t.t(c.dateFormat(d.data.disclosure_time_2nd)),
              }
            : {},
          { i: d.data.forcast },
          d.data.forcast
            ? {
                j: t.t(d.data.forcast_type),
                k: t.t(d.data.forcast),
                l: t.t(c.dateFormat(d.data.forcast_time)),
              }
            : {},
          { m: d.data.chg_reason },
          d.data.chg_reason
            ? {
                n: t.t(d.data.chg_reason),
                o: t.o(function () {
                  return c.goTeach && c.goTeach.apply(c, arguments);
                }, 3740),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-72d02f31"],
  ]);
wx.createComponent(e);
