var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  a = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  i = require("../../../../../../common/vendor.js"),
  s = require("../../../../Base64/base64.js"),
  u = require("../../lib/report.js"),
  d = {
    components: {
      StockList: function () {
        return "../../components/DetailStockList.js";
      },
      BottomBrand: function () {
        return "../../components/BottomBrand.js";
      },
    },
    props: { filter: { type: String }, context: { type: Object } },
    setup: function (r, d) {
      var l = d.emit,
        f = i.ref(!1),
        p = i.ref(""),
        m = i.ref([]),
        h = i.ref([]),
        v = i.ref(""),
        b = i.ref(
          "undefined" != typeof shy && "function" == typeof shy.request
        );
      function _(e) {
        var i =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        u.report(
          e,
          (function (e, r) {
            for (var i in r || (r = {})) o.call(r, i) && a(e, i, r[i]);
            if (n) {
              var s,
                u = t(n(r));
              try {
                for (u.s(); !(s = u.n()).done; ) {
                  i = s.value;
                  c.call(r, i) && a(e, i, r[i]);
                }
              } catch (e) {
                u.e(e);
              } finally {
                u.f();
              }
            }
            return e;
          })(
            {
              requestid: r.context.requestId,
              session: r.context.sessionId,
              xgfactor: r.filter,
            },
            i
          )
        );
      }
      return (
        i.watch(
          function () {
            return r.filter;
          },
          function (t) {
            t &&
              (function (t) {
                return (
                  (r = this),
                  null,
                  (n = e().mark(function r() {
                    var n, o, c, a, i, s, d;
                    return e().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (n = { condition_id: t }),
                                (e.next = 4),
                                u.queryCustomStrategyStocksV2(n)
                              );
                            case 4:
                              if (1620893026 != (o = e.sent).retcode) {
                                e.next = 7;
                                break;
                              }
                              throw (
                                (_(
                                  "jichu.ai_search.xuangu_detail_condition_expire",
                                  n
                                ),
                                "数据已过期 重新问问吧")
                              );
                            case 7:
                              if (0 == o.retcode) {
                                e.next = 9;
                                break;
                              }
                              throw o.retmsg;
                            case 9:
                              (c = o.data),
                                (a = o.update_time),
                                (i = o.selection_desc),
                                (s = c.stocks),
                                (d = c.columns),
                                (m.value = s),
                                (h.value = d),
                                (p.value = u.formatDate(a, "MM-dd hh:mm")),
                                (v.value = i),
                                (e.next = 16);
                              break;
                            case 13:
                              (e.prev = 13),
                                (e.t0 = e.catch(0)),
                                l("error", e.t0);
                            case 16:
                              f.value = !0;
                            case 17:
                            case "end":
                              return e.stop();
                          }
                      },
                      r,
                      null,
                      [[0, 13]]
                    );
                  })),
                  new Promise(function (e, t) {
                    var o = function (e) {
                        try {
                          a(n.next(e));
                        } catch (e) {
                          t(e);
                        }
                      },
                      c = function (e) {
                        try {
                          a(n.throw(e));
                        } catch (e) {
                          t(e);
                        }
                      },
                      a = function (t) {
                        return t.done
                          ? e(t.value)
                          : Promise.resolve(t.value).then(o, c);
                      };
                    a((n = n.apply(r, null)).next());
                  })
                );
                var r, n;
              })(
                JSON.parse(decodeURIComponent(s.base64Exports.atob(t)))
                  .condition_id
              );
          },
          { immediate: !0 }
        ),
        i.onMounted(function () {
          _("jichu.ai_search.xuangu_detail_page_brow");
        }),
        {
          IS_ZXG: b,
          dataFetched: f,
          updateTime: p,
          conditionsText: v,
          stockList: m,
          columnsList: h,
          onItemClick: function (e) {
            _("jichu.ai_search.xuangu_detail_stock_click", { stockid: e.code }),
              l("click", e);
          },
        }
      );
    },
  };
Array ||
  (i.resolveComponent("StockList") + i.resolveComponent("BottomBrand"))();
var l = i._export_sfc(d, [
  [
    "render",
    function (e, t, r, n, o, c) {
      return i.e(
        { a: n.dataFetched },
        n.dataFetched
          ? i.e(
              { b: i.t(n.stockList.length), c: n.updateTime },
              n.updateTime ? { d: i.t(n.updateTime) } : {},
              {
                e: i.t(n.conditionsText),
                f: i.o(n.onItemClick, 1678),
                g: i.p({
                  version: "v2",
                  stocks: n.stockList,
                  columnsList: n.columnsList,
                }),
                h: !n.IS_ZXG && n.dataFetched,
              },
              (!n.IS_ZXG && n.dataFetched, {})
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-fc4952e7"],
]);
wx.createComponent(l);
