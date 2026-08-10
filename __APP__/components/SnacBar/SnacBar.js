var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var n,
  r = require("../../common/vendor.js"),
  a = require("../../model/debt/useDebtAutoOrderEntry.js"),
  o = require("../../stores/app/useMode.js"),
  i = require("../../utils/getPlatform.js").getPlatform().isZxg,
  s = {
    name: "SnacBar",
    setup: function () {
      var s = r.getCurrentInstance().proxy,
        c = r.storeToRefs(o.useModeStore()).simpleMode,
        u = a.useDebtAutoOrderEntry(),
        l = u.isDebtAutoOrderSetted,
        d = u.isDebtAutoOrderEntry,
        f = {
          1: {
            title: "通用回购借出本息今日到账！",
            subtitle: "再买一笔赚收益",
            btnText: "再买一笔",
          },
          2: {
            title: "通用回购借出本息到账！开通自动下单，",
            subtitle: "日日有收益",
            btnText: "去开通",
          },
        },
        g = {
          isWzqH5: { 1: "IcI00p000t006", 2: "Iu500p000t006" },
          isLiteH5: { 1: "Imd00p000t009", 2: "IGX00p000t009" },
          isWzqxcx: { 1: "IlV00p000t007", 2: "I5W00p000t007" },
          isZxgxcx: { 1: "IWs00p000t008", 2: "IcL00p000t008" },
        };
      function p() {
        n && clearTimeout(n), (n = null);
      }
      var v,
        _ = r.ref(!1),
        b = r.ref(!1),
        x = r.ref({});
      return (
        r.watch(
          function () {
            return d.value;
          },
          (function () {
            var a = t(
              e().mark(function t(a) {
                var o, c, u;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (i || !a) {
                            e.next = 12;
                            break;
                          }
                          if (
                            ((e.prev = 1),
                            (null == (u = getCurrentPages())
                              ? void 0
                              : u.length) > 0 &&
                              (v =
                                null ==
                                (c =
                                  null ==
                                  (o =
                                    null == u
                                      ? void 0
                                      : u[(null == u ? void 0 : u.length) - 1])
                                    ? void 0
                                    : o.options)
                                  ? void 0
                                  : c.showgznhgbar),
                            !v || "1" !== v)
                          ) {
                            e.next = 8;
                            break;
                          }
                          return (e.next = 6), l();
                        case 6:
                          (b.value = e.sent),
                            (function () {
                              var e = r.index.getStorageSync(
                                "SHOW_GNHG_BAR_LAST_TIME"
                              );
                              return e
                                ? Date.now() - e > 864e5 &&
                                    (r.index.setStorageSync(
                                      "SHOW_GNHG_BAR_LAST_TIME",
                                      Date.now()
                                    ),
                                    !0)
                                : (r.index.setStorageSync(
                                    "SHOW_GNHG_BAR_LAST_TIME",
                                    Date.now()
                                  ),
                                  !0);
                            })() &&
                              (s.$stat.click("trade.asset.gznhg_snacbar.brow"),
                              (_.value = !0),
                              (x.value = b.value ? f[1] : f[2]),
                              p(),
                              (n = setTimeout(function () {
                                _.value = !1;
                              }, 1e4)));
                        case 8:
                          e.next = 12;
                          break;
                        case 10:
                          (e.prev = 10), (e.t0 = e.catch(1));
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 10]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          { immediate: !0 }
        ),
        r.onPageHide(function () {
          (_.value = !1), p();
        }),
        r.onBeforeUnmount(function () {
          (_.value = !1), p();
        }),
        {
          isShow: _,
          contentConfig: x,
          clickBtn: function () {
            (_.value = !1), s.$stat.click("trade.asset.gznhg_snacbar.click");
            var e = (function () {
              var e = b.value ? 1 : 2;
              return (c.value ? g.isWzqxcx : g.isZxgxcx)[e];
            })();
            b.value
              ? (s.$stat.click(
                  "trade.asset.gznhg_snacbar_is_setted.click",
                  void 0,
                  void 0,
                  { stat_data: e }
                ),
                s.$router.push({
                  path: "/trade/debt",
                  query: {
                    market: "0",
                    code: "131810",
                    holder: s.$route.query.holder,
                    stat_data: e,
                  },
                }))
              : (s.$stat.click(
                  "trade.asset.gznhg_snacbar_is_not_setted.click",
                  void 0,
                  void 0,
                  { stat_data: e }
                ),
                s.$router.push({
                  name: "DebtAutoOrder",
                  query: { stat_data: e },
                }));
          },
          clickCloseBtn: function () {
            (_.value = !1), s.$stat.click("trade.asset.gznhg_snacbar.close");
          },
          clearTime: p,
          simpleMode: c,
        }
      );
    },
  },
  c = r._export_sfc(s, [
    [
      "render",
      function (e, t, n, a, o, i) {
        return r.e(
          { a: a.isShow && a.contentConfig && a.contentConfig.title },
          a.isShow && a.contentConfig && a.contentConfig.title
            ? {
                b: r.t(a.contentConfig.title),
                c: r.t(a.contentConfig.subtitle),
                d: r.t(a.contentConfig.btnText),
                e: r.o(function () {
                  return a.clickBtn && a.clickBtn.apply(a, arguments);
                }),
                f: r.o(function () {
                  return a.clickCloseBtn && a.clickCloseBtn.apply(a, arguments);
                }),
                g: a.simpleMode ? 1 : "",
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-a2747001"],
  ]);
wx.createComponent(c);
