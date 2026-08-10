require("../../../app.js"), require("../../../service/broker.js");
var e = require("../../../common/vendor.js"),
  n = require("../../../config/broker/11100/index.js"),
  o = {
    name: "CommissionExplainDialog",
    components: {
      MpDialog: function () {
        return "../../../common/components/Dialog/Dialog.js";
      },
    },
    setup: function (e, o) {
      var i = o.emit,
        t = n.brokerConfig.apply.commissionExplainConfig;
      return {
        commissionExplainConfig: void 0 === t ? [] : t,
        handleClose: function () {
          i("close");
        },
      };
    },
  };
Array || e.resolveComponent("mp-dialog")();
var i = e._export_sfc(o, [
  [
    "render",
    function (n, o, i, t, r, s) {
      return {
        a: e.f(t.commissionExplainConfig, function (n, o, i) {
          return e.e({ a: n.title }, n.title ? { b: e.t(n.title) } : {}, {
            c: e.f(n.content, function (n, o, i) {
              return e.e(
                { a: n.subTitle },
                n.subTitle ? { b: e.t(n.subTitle) } : {},
                {
                  c: e.f(n.content, function (n, o, i) {
                    return { a: e.t(n), b: o };
                  }),
                  d: e.t(n.note),
                  e: o,
                }
              );
            }),
            d: o,
          });
        }),
        b: e.o(t.handleClose),
        c: e.p({ visible: !0 }),
      };
    },
  ],
  ["__scopeId", "data-v-f1bd2443"],
]);
wx.createComponent(i);
