var e = require("../../../../../../@babel/runtime/helpers/toConsumableArray");
require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../@babel/runtime/helpers/defineProperty"),
  n = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  a = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  s = function (e, t, n) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  d = function (e, t) {
    for (var n in t || (t = {})) u.call(t, n) && s(e, n, t[n]);
    if (c) {
      var o,
        a = r(c(t));
      try {
        for (a.s(); !(o = a.n()).done; ) {
          n = o.value;
          l.call(t, n) && s(e, n, t[n]);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
    return e;
  },
  f = require("../../../../../../common/vendor.js"),
  p = require("../../../../Base64/base64.js"),
  v = require("../../lib/report.js"),
  m = {
    components: {
      IndicatorPicker: function () {
        return "../../components/IndicatorPicker.js";
      },
      StockList: function () {
        return "../../components/DetailStockList.js";
      },
      BottomBrand: function () {
        return "../../components/BottomBrand.js";
      },
    },
    props: { filter: { type: String }, context: { type: Object } },
    setup: function (o, s) {
      var m = s.emit,
        b = f.ref(!1),
        h = f.ref(""),
        y = f.ref([]),
        g = f.ref([]),
        k = f.ref(0),
        x = f.ref(
          "undefined" != typeof shy && "function" == typeof shy.request
        );
      function _(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        v.report(
          e,
          d(
            {
              requestid: o.context.requestId,
              session: o.context.sessionId,
              xgfactor: JSON.stringify(j.value),
            },
            t
          )
        );
      }
      var C = f.ref([]),
        j = f.ref({}),
        I = f.ref({}),
        O = f.computed(function () {
          return C.value.some(function (e) {
            return ["range", "selectable"].includes(e.typ);
          });
        }),
        w = f.ref(!1),
        P = f.computed(function () {
          return C.value
            .map(function (e) {
              var t = j.value[e.id],
                n = t.operate,
                r = t.label;
              return ""
                .concat(["fixed", "selectable"].includes(e.typ) ? "" : e.label)
                .concat(r)
                .concat(["top", "bottom"].includes(n) ? "" : e.unit);
            })
            .join("；");
        });
      function q(e) {
        var t,
          r,
          o,
          a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          (t = this),
          (r = null),
          (o = n().mark(function t() {
            var r, o, i, c, u, l;
            return n().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (r = {
                          conditions: Object.keys(e).map(function (t) {
                            var n,
                              r,
                              o = e[t],
                              a = o.operate,
                              i = o.value;
                            return {
                              id:
                                null ==
                                (r =
                                  null == (n = null == t ? void 0 : t.slice(1))
                                    ? void 0
                                    : n.split("@"))
                                  ? void 0
                                  : r[0],
                              operate: a,
                              value: i,
                            };
                          }),
                        }),
                        a && Object.assign(r, { query_type: "cnt" }),
                        (t.next = 5),
                        v.queryCustomStrategyStocks(r)
                      );
                    case 5:
                      if (0 == (o = t.sent).retcode) {
                        t.next = 8;
                        break;
                      }
                      throw o.retmsg;
                    case 8:
                      (i = o.data),
                        (c = o.columns),
                        (u = o.update_time),
                        (l = o.total_stocks),
                        (k.value = l),
                        a ||
                          ((y.value = i),
                          (g.value = c),
                          (h.value = v.formatDate(1e3 * +u, "MM-dd hh:mm"))),
                        (t.next = 15);
                      break;
                    case 12:
                      (t.prev = 12), (t.t0 = t.catch(0)), m("error", t.t0);
                    case 15:
                      b.value = !0;
                    case 16:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 12]]
            );
          })),
          new Promise(function (e, n) {
            var a = function (e) {
                try {
                  c(o.next(e));
                } catch (e) {
                  n(e);
                }
              },
              i = function (e) {
                try {
                  c(o.throw(e));
                } catch (e) {
                  n(e);
                }
              },
              c = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(a, i);
              };
            c((o = o.apply(t, r)).next());
          })
        );
      }
      return (
        f.watch(
          function () {
            return I.value;
          },
          function (e) {
            var n = d({}, j.value);
            Object.keys(e).forEach(function (r) {
              var o,
                c = e[r],
                u = c.label,
                l = c.value;
              Object.assign(
                n,
                t({}, r, ((o = d({}, n[r])), a(o, i({ label: u, value: l }))))
              );
            }),
              (j.value = n),
              q(n);
          }
        ),
        f.watch(
          function () {
            return o.filter;
          },
          function (t) {
            var n = JSON.parse(decodeURIComponent(p.base64Exports.atob(t))),
              o = [],
              a = n.map(function (t, n) {
                var a = t,
                  i = a.category,
                  s = a.description,
                  f = a.id,
                  p = a.label,
                  v = a.opts,
                  m = (function (e, t) {
                    var n = {};
                    for (var o in e)
                      u.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                    if (null != e && c) {
                      var a,
                        i = r(c(e));
                      try {
                        for (i.s(); !(a = i.n()).done; ) {
                          o = a.value;
                          t.indexOf(o) < 0 && l.call(e, o) && (n[o] = e[o]);
                        }
                      } catch (e) {
                        i.e(e);
                      } finally {
                        i.f();
                      }
                    }
                    return n;
                  })(a, ["category", "description", "id", "label", "opts"]),
                  b = f;
                o.includes(f) &&
                  ((b = "".concat(f, "@").concat(n)), (t.id = b)),
                  o.push(f);
                var h = d(
                  { category: i, description: s, id: "_".concat(b), label: p },
                  m
                );
                if (v && v.length > 0) {
                  v.forEach(function (e) {
                    var t = e.label,
                      n = e.val;
                    e.value = n;
                    var r = t.split("").reduce(function (e, t) {
                      var n = 1;
                      return /[\u4e00-\u9fa5]/.test(t) && (n = 2), e + n;
                    }, 0);
                    e.textWidth = r;
                  });
                  var y,
                    g = Math.max.apply(
                      Math,
                      e(
                        v.map(function (e) {
                          return e.textWidth;
                        })
                      )
                    );
                  y = g <= 8 ? 4 : g <= 10 ? 3 : 2;
                  for (
                    var k = [], x = Math.ceil(v.length / y), _ = 0;
                    _ < x;
                    _++
                  ) {
                    k[_] = k[_] || [];
                    for (var C = _ * y, j = 0; j < y; j++) k[_].push(v[C + j]);
                  }
                  Object.assign(h, { rows: k });
                }
                return h;
              });
            C.value = a;
            var i = {},
              s = {};
            n.forEach(function (e) {
              var t = "_".concat(e.id),
                n = (function (e) {
                  var t = e.typ;
                  if ("fixed" === t) {
                    var n = e.fixed;
                    return { operate: n.op, value: n.val, label: n.label };
                  }
                  if ("range" === t) {
                    var r = e.range,
                      o = r.sel_max,
                      a = r.sel_min,
                      i = r.op,
                      c = void 0 === i ? "=" : i;
                    return {
                      label: "".concat(a, "~").concat(o),
                      operate: c,
                      value: "[".concat(a, ",").concat(o, "]"),
                    };
                  }
                  if ("custom_number" === t) {
                    var u = e.custom,
                      l = u.op,
                      s = u.sel,
                      d = "".concat(l).concat(s);
                    return (
                      "top" === l && 1 == +s && (d = "最大"),
                      "top" === l && +s > 1 && (d = "排名前".concat(s)),
                      "bottom" === l && 1 == +s && (d = "最小"),
                      "bottom" === l && +s > 1 && (d = "排名后".concat(s)),
                      { label: d, value: s, operate: l }
                    );
                  }
                  if ("custom_value" === t) {
                    var f = e.fixed;
                    return { operate: f.op, value: f.val, label: f.label };
                  }
                  if ("selectable" === t) {
                    var p = e.opts.find(function (e) {
                      return e.is_sel;
                    });
                    return { label: p.label, value: p.val, operate: "=" };
                  }
                })(e);
              "selectable" === e.typ && (s[t] = n), (i[t] = n);
            }),
              (j.value = i),
              (I.value = s);
          },
          { immediate: !0 }
        ),
        f.onMounted(function () {
          _("jichu.ai_search.xuangu_detail_page_brow");
        }),
        {
          IS_ZXG: x,
          dataFetched: b,
          isIndicatorChangeAble: O,
          indicatorPickerVisible: w,
          showIndicatorPicker: function () {
            w.value = !0;
          },
          hideIndicatorPicker: function () {
            w.value = !1;
          },
          conditionsText: P,
          updateTime: h,
          stockList: y,
          columnsList: g,
          matchesCount: k,
          indicatorList: C,
          selectedFactors: I,
          selectedConditions: j,
          onConditionsChange: function (e) {
            q(e, !0);
          },
          onConditionsConfirm: function (e) {
            (w.value = !1), (j.value = e), q(e);
          },
          onItemClick: function (e) {
            _("jichu.ai_search.xuangu_detail_stock_click", { stockid: e.code }),
              m("click", e);
          },
        }
      );
    },
  };
Array ||
  (
    f.resolveComponent("StockList") +
    f.resolveComponent("BottomBrand") +
    f.resolveComponent("indicator-picker")
  )();
var b = f._export_sfc(m, [
  [
    "render",
    function (e, t, n, r, o, a) {
      return f.e(
        { a: r.isIndicatorChangeAble },
        r.isIndicatorChangeAble
          ? {
              b: f.o(function () {
                return (
                  r.showIndicatorPicker &&
                  r.showIndicatorPicker.apply(r, arguments)
                );
              }, 1673),
            }
          : {},
        { c: f.t(r.conditionsText), d: r.dataFetched },
        r.dataFetched
          ? f.e(
              { e: f.t(r.stockList.length), f: r.updateTime },
              r.updateTime ? { g: f.t(r.updateTime) } : {},
              {
                h: f.o(r.onItemClick, 1674),
                i: f.p({
                  version: "v1",
                  stocks: r.stockList,
                  columnsList: r.columnsList,
                }),
              }
            )
          : {},
        { j: !r.IS_ZXG && r.dataFetched },
        (!r.IS_ZXG && r.dataFetched, {}),
        {
          k: f.o(r.onConditionsChange, 1675),
          l: f.o(r.onConditionsConfirm, 1676),
          m: f.o(r.hideIndicatorPicker, 1677),
          n: f.p({
            visible: r.indicatorPickerVisible,
            indicators: r.indicatorList,
            factors: r.selectedFactors,
            conditions: r.selectedConditions,
            matches: r.matchesCount,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-d2e64340"],
]);
wx.createComponent(b);
