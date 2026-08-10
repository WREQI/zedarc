var e = require("../../../../../../common/vendor.js"),
  t = {
    data: function () {
      return {
        fields: [
          { fieldName: "growth_ability", title: "成长能力" },
          { fieldName: "earn_ability", title: "盈利能力" },
          { fieldName: "operation_ability", title: "运营能力" },
          { fieldName: "debt_ability", title: "偿债能力" },
          { fieldName: "cash_flow", title: "现金流" },
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
          i = t.tag_name_eng,
          n =
            "https://wzq.tenpay.com/resources/diagnoseStock/#/teachMineSweeperWzqV2?part="
              .concat(a, "&pos=")
              .concat(i);
        e.StockBridge.report("hq.stock_detail.ms_teach", {
          moduleId: i,
          tab: a,
        }),
          e.StockBridge.openExtraWebview(n);
      },
    },
  },
  a = e._export_sfc(t, [
    [
      "render",
      function (t, a, i, n, o, r) {
        return {
          a: e.f(o.fields, function (t, a, n) {
            return e.e(
              {
                a: e.t(t.title),
                b: t.fieldName + "title",
                c: e.t(i.data[t.fieldName]),
                d: a === o.fields.length - 1,
              },
              a === o.fields.length - 1
                ? {
                    e: e.o(
                      function () {
                        return r.setGoTeach && r.setGoTeach.apply(r, arguments);
                      },
                      3756,
                      a
                    ),
                  }
                : {},
              { f: t.fieldName + "content", g: a }
            );
          }),
        };
      },
    ],
    ["__scopeId", "data-v-cf8e6df6"],
  ]);
wx.createComponent(a);
