require("../../../../app.js");
var e = require("../../../../model/apply/useApply.js");
require("../../../../service/broker.js");
var r = require("../../../../common/vendor.js"),
  c = {
    setup: function () {
      var c = r.getCurrentInstance().proxy,
        n = e.useApply(),
        i = n.applyInfo,
        t = n.curStepConf;
      r.computed(function () {
        var e, r;
        return (
          "1" ===
            (null == (r = null == (e = i.value) ? void 0 : e.activity_info)
              ? void 0
              : r.bank_activity) &&
          !(null == t ? void 0 : t.hideThirdBankActSubscribe)
        );
      });
      var u = r.computed(function () {
          return "";
        }),
        o = r.computed(function () {
          return " 及时了解开户进度";
        });
      return {
        applyInfo: i,
        officialAccount: u,
        subscribeText: o,
        onSubscribeClick: function () {
          c.$emit("onSubscribeClick");
        },
      };
    },
  },
  n = r._export_sfc(c, [
    [
      "render",
      function (e, c, n, i, t, u) {
        return r.e(
          { a: i.officialAccount },
          i.officialAccount ? { b: r.t(i.officialAccount) } : {},
          {
            c: r.o(function () {
              return (
                i.onSubscribeClick && i.onSubscribeClick.apply(i, arguments)
              );
            }),
            d: r.t(i.subscribeText),
          }
        );
      },
    ],
    ["__scopeId", "data-v-6647ee95"],
  ]);
wx.createComponent(n);
