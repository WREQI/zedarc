require("../../app.js");
var o = require("../../model/kzz/useKzz.js"),
  t = require("../../common/vendor.js"),
  e = {
    setup: function () {
      return {
        holdRiskList: o.useKzz().holdRiskList,
        kzzRiskDialogPageContext: t.inject("kzzRiskDialogPageContext"),
        formatDate: function (o) {
          return t.dayjs(o).format("YYYY年MM月DD日");
        },
      };
    },
    methods: {
      onClose: function (t) {
        o.useKzz().closeHoldKzzRisk(this, t);
      },
      onRiskClick: function (t) {
        o.useKzz().showHoldKzzRiskDialog(t, this.kzzRiskDialogPageContext);
      },
    },
  },
  s = t._export_sfc(e, [
    [
      "render",
      function (o, e, s, n, i, c) {
        return t.e(
          { a: n.holdRiskList.length > 0 },
          n.holdRiskList.length > 0
            ? {
                b: t.f(n.holdRiskList, function (o, e, s) {
                  return {
                    a: t.t(o.conv_stock_name),
                    b: t.t(n.formatDate(o.regis_date)),
                    c: t.o(function (t) {
                      return c.onRiskClick(o);
                    }, o.conv_stock_code),
                    d: t.o(function (t) {
                      return c.onClose(o);
                    }, o.conv_stock_code),
                    e: o.conv_stock_code,
                    f: t.n(
                      e != n.holdRiskList.length - 1 ? "bottom-space" : ""
                    ),
                  };
                }),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-95feddbf"],
  ]);
wx.createComponent(s);
