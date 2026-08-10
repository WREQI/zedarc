var e = require("../../../../../../common/vendor.js"),
  t = {
    data: function () {
      return {
        fields: [
          { fieldName: "cash_comment", title: "20日日均成交" },
          { fieldName: "turnover_comment", title: "换手率变化" },
        ],
      };
    },
    created: function () {
      var e = this;
      this.fields = this.fields.filter(function (t) {
        return e.data[t.fieldName];
      });
    },
    props: { data: Object, type: String },
    methods: {
      setGoTeach: function () {
        var t = this.data.tag,
          a = t.module,
          n = t.tag_name_eng,
          o =
            "https://wzq.tenpay.com/resources/diagnoseStock/#/teachMineSweeperWzqV2?part="
              .concat(a, "&pos=")
              .concat(n);
        e.StockBridge.report("hq.stock_detail.ms_teach", {
          moduleId: n,
          tab: a,
        }),
          e.StockBridge.openExtraWebview(o);
      },
    },
  },
  a = e._export_sfc(t, [
    [
      "render",
      function (t, a, n, o, i, c) {
        return {
          a: e.f(i.fields, function (t, a, o) {
            return {
              a: e.t(t.title),
              b: t.fieldName + "title",
              c: e.t(n.data[t.fieldName]),
              d: e.o(
                function () {
                  return c.setGoTeach && c.setGoTeach.apply(c, arguments);
                },
                3765,
                t.fieldName
              ),
              e: t.fieldName + "content",
              f: t.fieldName,
            };
          }),
        };
      },
    ],
    ["__scopeId", "data-v-163cac98"],
  ]);
wx.createComponent(a);
