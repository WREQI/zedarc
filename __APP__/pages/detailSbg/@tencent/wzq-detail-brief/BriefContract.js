var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../common/vendor.js"),
  r = require("api/index.js"),
  n = require("utils/const.js"),
  a = t.defineComponent({
    inject: ["hqBridge"],
    props: ["symbol"],
    setup: function (a, o) {
      var u = this,
        c = o.emit,
        i = t.ref(null),
        s = t.ref(""),
        l = ["mpwzq", "wzqlight"].includes("mpweapp"),
        d = function () {
          return (
            (o = u),
            null,
            (l = e().mark(function o() {
              var u;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          r
                            .getContractDetail(t.StockBridge, a.symbol)
                            .catch(function () {
                              t.nextTick$1(function () {
                                c("loaded");
                              }),
                                (s.value = n.COMMON_PAGE_STATUS.ERROR);
                            })
                        );
                      case 3:
                        (u = e.sent),
                          (i.value = u && u.data),
                          c("loaded"),
                          (e.next = 10);
                        break;
                      case 7:
                        (e.prev = 7), (e.t0 = e.catch(0)), c("loaded");
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                o,
                null,
                [[0, 7]]
              );
            })),
            new Promise(function (e, t) {
              var r = function e(r) {
                  try {
                    a(l.next(r));
                  } catch (e) {
                    t(e);
                  }
                },
                n = function (e) {
                  try {
                    a(l.throw(e));
                  } catch (e) {
                    t(e);
                  }
                },
                a = function (t) {
                  return t.done
                    ? e(t.value)
                    : Promise.resolve(t.value).then(r, n);
                };
              a((l = l.apply(o, null)).next());
            })
          );
          var o, l;
        };
      return (
        t.onMounted(function () {
          d();
        }),
        t.onBeforeUnmount(function () {
          i.value = null;
        }),
        {
          isLite: l,
          isStock: !1,
          data: i,
          error: s,
          openUrl: function () {
            t.StockBridge.openExtraWebview(i.value.url);
          },
          retryTab: function () {
            c("refreshTab"), (s.value = ""), d();
          },
          getData: d,
        }
      );
    },
  });
Array || t.resolveComponent("st-status")();
var o = t._export_sfc(a, [
  [
    "render",
    function (e, r, n, a, o, u) {
      return t.e(
        { a: e.data },
        e.data
          ? t.e(
              {
                b: t.t(e.data.name),
                c: t.t(e.data.code),
                d: t.t(e.data.subject),
                e: t.t(e.data.location),
                f: t.t(e.data.type),
                g: t.t(e.data.scope),
                h: t.t(e.data.currency),
                i: t.t(e.data.unit),
                j: t.t(e.data.value),
                k: t.t(e.data.trade_time),
                l: t.t(e.data.time_zone),
                m: e.isStock,
              },
              e.isStock
                ? {
                    n: t.o(function (t) {
                      return e.openUrl();
                    }, 1782),
                  }
                : {},
              {
                o: t.n(
                  e.isLite ? "futures-contract-light" : "futures-contract-pro"
                ),
              }
            )
          : {},
        { p: e.error },
        e.error
          ? {
              q: t.o(function (t) {
                return e.retryTab();
              }, 1783),
              r: t.p({ type: e.error }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-edc56652"],
]);
wx.createComponent(o);
