var t = require("../../../../../../common/vendor.js"),
  e = {
    props: { data: Object, type: String },
    methods: {
      getColor: function (t) {
        return "未触发" === t ? "gray" : "red";
      },
      setGoTeach: function () {
        var e = this.data.tag,
          r = e.module,
          o = e.tag_name_eng,
          n =
            "https://wzq.tenpay.com/resources/diagnoseStock/#/teachMineSweeperWzqV2?part="
              .concat(r, "&pos=")
              .concat(o);
        t.StockBridge.report("hq.stock_detail.ms_teach", {
          moduleId: o,
          tab: r,
        }),
          t.StockBridge.openExtraWebview(n);
      },
    },
  },
  r = t._export_sfc(e, [
    [
      "render",
      function (e, r, o, n, a, c) {
        return {
          a: t.f(o.data.tech_detail, function (e, r, o) {
            return {
              a: t.t(e.index_type),
              b: t.f(e.index_list, function (e, r, o) {
                return {
                  a: t.t(e.name),
                  b: t.t(e.trigger),
                  c: t.n(c.getColor(e.trigger)),
                  d: r,
                };
              }),
              c: r,
            };
          }),
        };
      },
    ],
    ["__scopeId", "data-v-956b3284"],
  ]);
wx.createComponent(r);
