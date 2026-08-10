var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var r = require("../../../common/vendor.js"),
  o = require("../../../model/debt/useDebtAutoOrderEntry.js"),
  n = require("../../../stores/app/useMode.js"),
  d = require("../../../service/stat/mp-weixin.js"),
  s = {
    props: { isOrderSetted: { type: Boolean, default: !1 } },
    setup: function (s, i) {
      i.emit;
      var u,
        a = null == (u = r.getCurrentInstance()) ? void 0 : u.proxy,
        c = n.useModeStore(),
        p = r.storeToRefs(c).simpleMode,
        l = o.useDebtAutoOrderEntry().isDebtAutoOrderEntry,
        m = r.ref(!1),
        f = r.computed(function () {
          return s.isOrderSetted
            ? { text: "已开启自动下单", action: "去查看" }
            : { text: "开启自动下单，无需每天操作", action: "自动下单" };
        });
      function O() {
        d.stat.click(
          "trade.debt.auto_order.entry_".concat(
            s.isOrderSetted ? "setted" : "unset",
            "_click"
          )
        );
        var e = {};
        s.isOrderSetted || (e.stat_data = "IDk00p000u001"),
          a.$router.push({ name: "DebtAutoOrder", query: e });
      }
      return (
        r.onMounted(
          t(
            e().mark(function t() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      d.stat.click(
                        "trade.debt.auto_order.entry_".concat(
                          s.isOrderSetted ? "setted" : "unset",
                          "_brow"
                        )
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          )
        ),
        {
          isDebtAutoOrderEntry: l,
          isReady: m,
          orderInfo: f,
          simpleMode: p,
          onEntryItemClick: function () {
            s.isOrderSetted && O();
          },
          goToAutoOrder: O,
        }
      );
    },
  },
  i = r._export_sfc(s, [
    [
      "render",
      function (e, t, o, n, d, s) {
        return r.e(
          { a: n.isDebtAutoOrderEntry },
          n.isDebtAutoOrderEntry
            ? r.e(
                {
                  b: r.n(o.isOrderSetted ? "setted" : "unset"),
                  c: r.n(n.simpleMode ? "simple" : ""),
                  d: r.t(n.orderInfo.text),
                  e: o.isOrderSetted,
                },
                o.isOrderSetted
                  ? { f: r.t(n.orderInfo.action) }
                  : {
                      g: r.t(n.orderInfo.action),
                      h: r.o(function () {
                        return (
                          n.goToAutoOrder && n.goToAutoOrder.apply(n, arguments)
                        );
                      }),
                    },
                {
                  i: r.n(n.simpleMode ? "simple" : ""),
                  j: r.o(function () {
                    return (
                      n.onEntryItemClick &&
                      n.onEntryItemClick.apply(n, arguments)
                    );
                  }),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-e78bb8a2"],
  ]);
wx.createComponent(i);
