var e = require("../../../../../common/vendor.js"),
  n = {
    props: {
      currentBroker: { type: Object, default: function () {} },
      openAccountGuiding: { type: Boolean, default: !1 },
    },
    setup: function (e, n) {
      var r = n.emit;
      return {
        showDealerlist: function () {
          r("showMoreDealer");
        },
      };
    },
  },
  r = e._export_sfc(n, [
    [
      "render",
      function (n, r, t, o, c, u) {
        return e.e(
          {
            a: t.currentBroker.icon,
            b: e.t(t.currentBroker.name || ""),
            c: t.currentBroker.maintain,
          },
          (t.currentBroker.maintain, {}),
          { d: e.t(t.currentBroker.desc || ""), e: !t.openAccountGuiding },
          (t.openAccountGuiding, {}),
          { f: t.openAccountGuiding },
          (t.openAccountGuiding, {}),
          {
            g: e.o(function () {
              return o.showDealerlist && o.showDealerlist.apply(o, arguments);
            }, 2478),
          }
        );
      },
    ],
    ["__scopeId", "data-v-168b13bc"],
  ]);
wx.createComponent(r);
