var e = require("../../../../../../common/vendor.js"),
  t = {
    props: ["data"],
    data: function () {
      return {
        fields: [
          { fieldName: "financial_comment", title: "财务类退市" },
          { fieldName: "transaction_comment", title: "交易类退市" },
        ],
      };
    },
    created: function () {
      var e = this;
      this.fields = this.fields.filter(function (t) {
        return e.data[t.fieldName];
      });
    },
    methods: {
      setGoTeach: function () {
        var t,
          a = (null == (t = this.data) ? void 0 : t.tag) || {},
          n = a.module,
          i = a.tag_name_eng,
          o =
            "https://wzq.tenpay.com/resources/diagnoseStock/#/teachMineSweeperWzqV2?part="
              .concat(n, "&pos=")
              .concat(i);
        e.StockBridge.report("hq.stock_detail.ms_teach", {
          moduleId: i,
          tab: n,
        }),
          e.StockBridge.openExtraWebview(o);
      },
    },
  },
  a = e._export_sfc(t, [
    [
      "render",
      function (t, a, n, i, o, c) {
        return {
          a: e.f(o.fields, function (t, a, i) {
            return {
              a: e.t(t.title),
              b: t.fieldName + "title",
              c: e.t(n.data[t.fieldName]),
              d: e.o(
                function () {
                  return c.setGoTeach && c.setGoTeach.apply(c, arguments);
                },
                3739,
                t.fieldName
              ),
              e: t.fieldName + "content",
              f: t.fieldName,
            };
          }),
        };
      },
    ],
    ["__scopeId", "data-v-887d1636"],
  ]);
wx.createComponent(a);
