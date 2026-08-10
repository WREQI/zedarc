var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../common/vendor.js"),
  n = require("@tencent/stock-hq-data/index.js"),
  r = {
    components: {
      ColumnList: function () {
        return "./@tencent/wzq-lite-basket-contents/components/column-list/mp/index.js";
      },
    },
    onShareAppMessage: function (e) {
      return {
        path: "pages/stockBasket/stock-basket-list?type=hot&stat_data=O9v00p000h128",
      };
    },
    onShow: function () {
      this.isOnShow = !0;
    },
    onHide: function () {
      this.isOnShow = !1;
    },
    setup: function (r, o) {
      var i = this,
        u = (o.emit, t.getCurrentInstance().proxy || t.getCurrentInstance()),
        a = t.StockBridge;
      t.provide("stockBridge", a);
      var s = new t.HQBridge();
      t.provide("hqBridge", s);
      var c,
        l = new n.DetailApi(function (e) {
          return s.request(e);
        }),
        p = t.ref(!1);
      t.onMounted(function () {
        c = setInterval(function () {
          return (
            (t = i),
            (n = e().mark(function () {
              var t, n, r, o, i, u, a, s;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          l.getMarketState({ market: 0 }, { needProcess: !0 })
                        );
                      case 3:
                        if (((e.t0 = e.sent.split("|")), e.t0)) {
                          e.next = 6;
                          break;
                        }
                        e.t0 = [];
                      case 6:
                        (o = e.t0.map(function (e) {
                          return e.split("_");
                        })),
                          (i = o.filter(function (e) {
                            return "NEWSH" === e[0];
                          })),
                          (u = o.filter(function (e) {
                            return "NEWHK" === e[0];
                          })),
                          (a = o.filter(function (e) {
                            return "NEWUS" === e[0];
                          })),
                          (s =
                            "open" ===
                              (null == (t = null == i ? void 0 : i[0])
                                ? void 0
                                : t[1]) ||
                            "open" ===
                              (null == (n = null == u ? void 0 : u[0])
                                ? void 0
                                : n[1]) ||
                            "open" ===
                              (null == (r = null == a ? void 0 : a[0])
                                ? void 0
                                : r[1])),
                          p.value && s && f(!1),
                          (e.next = 16);
                        break;
                      case 14:
                        (e.prev = 14), (e.t1 = e.catch(0));
                      case 16:
                      case "end":
                        return e.stop();
                    }
                },
                r,
                null,
                [[0, 14]]
              );
            })),
            new Promise(function (e, r) {
              var o = function (e) {
                  try {
                    u(n.next(e));
                  } catch (e) {
                    r(e);
                  }
                },
                i = function (e) {
                  try {
                    u(n.throw(e));
                  } catch (e) {
                    r(e);
                  }
                },
                u = function (t) {
                  return t.done
                    ? e(t.value)
                    : Promise.resolve(t.value).then(o, i);
                };
              u((n = n.apply(t, null)).next());
            })
          );
          var t, n;
        }, 3e4);
      }),
        t.onUnmounted(function () {
          clearInterval(c);
        });
      var v = t.ref(null),
        f = function (e) {
          u.$refs.columnListRef.update(e);
        };
      return (
        t.onMounted(function () {
          var e;
          try {
            var n = getCurrentPages() || [],
              r = n[n.length - 1] || {},
              o =
                (null == (e = null == r ? void 0 : r.$page)
                  ? void 0
                  : e.fullPath) || "",
              i = t.queryParse(o.replace(/^[^\\?]+/, "")),
              u = i.type,
              a = i.title;
            (v.value = u),
              t.wx$1.setNavigationBarTitle({
                title: decodeURIComponent(a || "全部股单"),
              });
          } catch (e) {}
        }),
        { listType: v, isOnShow: p }
      );
    },
  };
Array ||
  (
    t.resolveComponent("mp-privacy-dialog") +
    t.resolveComponent("stock-privacy-dialog") +
    t.resolveComponent("ColumnList")
  )();
var o = t._export_sfc(r, [
  [
    "render",
    function (e, n, r, o, i, u) {
      return t.e(
        { a: e.rootFontSize, b: t.p({ "no-auto": !0 }), c: o.listType },
        o.listType
          ? {
              d: t.sr("columnListRef", "23486a20-2"),
              e: t.p({ "list-type": o.listType }),
            }
          : {}
      );
    },
  ],
]);
(r.__runtimeHooks = 2), wx.createPage(o);
