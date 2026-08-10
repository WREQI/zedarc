var e = require("../../../../../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  o = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  a = function (e, t, o) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o);
  },
  u = function (e, n) {
    for (var u in n || (n = {})) r.call(n, u) && a(e, u, n[u]);
    if (o) {
      var i,
        c = t(o(n));
      try {
        for (c.s(); !(i = c.n()).done; ) {
          u = i.value;
          l.call(n, u) && a(e, u, n[u]);
        }
      } catch (e) {
        c.e(e);
      } finally {
        c.f();
      }
    }
    return e;
  },
  i = require("../../../../../../../../../common/vendor.js"),
  c = require("../../lib/report.js"),
  s = {
    props: {
      selectAble: { type: Boolean, default: !1 },
      scrollAble: { type: Boolean, default: !1 },
      sortAble: { type: Boolean, default: !1 },
      customSort: { type: Boolean, default: !1 },
      headerBorder: { type: Boolean, default: !1 },
      listBorder: { type: Boolean, default: !1 },
      columns: Array,
      list: Array,
    },
    components: {
      MarketIconSprite: function () {
        return "../../../../../../../../detailSbg/@tencent/stock-markets-base/components/MarketIconSprite.js";
      },
    },
    setup: function (t, n) {
      var o = n.emit,
        r = function (n) {
          return n.map(function (n, o) {
            var r,
              l,
              a = n.label,
              u = n.subLabel,
              i = n.align,
              c = n.field,
              s = n.slot,
              f = void 0 === s ? "" : s,
              d = n.active,
              v = void 0 !== d && d,
              m = n.tip,
              p = void 0 !== m && m,
              b = n.key,
              y = void 0 === b ? "" : b,
              k = n.sort,
              S = void 0 !== k && k,
              R = n.fluc,
              _ = void 0 !== R && R,
              O = n.formatter,
              E = n.adjust,
              h = n.useNewField,
              C = void 0 === h ? 0 : h,
              T = [];
            Array.isArray(c) ? T.push.apply(T, e(c)) : T.push(c);
            var g = T.map(function (e) {
                var t;
                return {
                  key: (t =
                    "string" == typeof e
                      ? { key: e, fluc: _, formatter: O, adjust: E }
                      : e).key,
                  fluc: t.fluc || _,
                  formatter: t.formatter || O,
                  adjust: t.adjust || E,
                  useNewField: C,
                };
              }),
              L = !1 === S ? "" : (null == (r = g[0]) ? void 0 : r.key) || "";
            return (
              "boolean" != typeof S &&
                (L =
                  (null ==
                  (l = g.find(function (e) {
                    return e.key === S;
                  }))
                    ? void 0
                    : l.key) || L),
              {
                label: a,
                subLabel: u,
                slot: f || "",
                align: i || (0 === o ? "left" : "right"),
                fields: g,
                sort: !!t.sortAble && L,
                active: v,
                tip: p,
                key: y,
              }
            );
          });
        },
        l = i.ref(r(t.columns)),
        a = i.ref([]);
      i.watch(
        function () {
          return t.columns;
        },
        function (e) {
          l.value = r(e);
        }
      ),
        i.watch(
          function () {
            return t.list;
          },
          function () {
            a.value = [];
          }
        );
      var s = i.ref(),
        f = i.ref(),
        d = i.computed(function () {
          var e;
          if (s.value) return { key: s.value, value: f.value };
          var t =
            null ==
            (e = l.value.find(function (e) {
              return e.sort && e.active;
            }))
              ? void 0
              : e.sort;
          return t
            ? { key: t, value: c.E_SORT_ORDER.DES }
            : { key: "", value: c.E_SORT_ORDER.RESET };
        }),
        v = i.computed(function () {
          return (
            !d.value.key ||
            d.value.value === c.E_SORT_ORDER.RESET ||
            t.customSort
              ? t.list
              : c.sortList(e(t.list), d.value.key, d.value.value)
          ).map(function (e) {
            var t = c.parseStock(e);
            return u(u({}, e), t);
          });
        });
      return {
        formattedColumns: l,
        sortField: s,
        sortOrder: f,
        sorter: d,
        activeIndexes: a,
        formatColumns: r,
        formatLabelSize: function (e, t) {
          var n = c.getStrcharLen(e);
          return n >= 16 ? "small" : n >= 12 ? (t ? "small" : "medium") : "";
        },
        handledList: v,
        onHeaderClick: function (e) {
          var t = e.sort;
          if (t) {
            var n =
              d.value.key === t && d.value.value === c.E_SORT_ORDER.DES
                ? c.E_SORT_ORDER.ASC
                : c.E_SORT_ORDER.DES;
            (s.value = t), (f.value = n), o("sort", t, n);
          }
        },
        onLabelTipClick: function (e) {
          o("tip", e);
        },
        onItemClick: function (n, r) {
          t.selectAble
            ? (t.multiSelect
                ? a.value.includes(r)
                  ? (a.value = a.value.filter(function (e) {
                      return e !== r;
                    }))
                  : a.value.push(r)
                : (a.value = [r]),
              o("select", n, e(a.value), v.value))
            : o("click", n, r);
        },
        onItemTouch: function (e) {
          t.scrollAble && t.onListItemTouch && t.onListItemTouch(e);
        },
        onStatusClick: function (e) {
          o("check", e);
        },
        redOrGreen: c.redOrGreen,
        adaptFontSize: c.adaptFontSize,
        E_SORT_ORDER: c.E_SORT_ORDER,
      };
    },
  };
Array ||
  (i.resolveComponent("market-icon-sprite") + i.resolveComponent("template"))();
var f = i._export_sfc(s, [
  [
    "render",
    function (e, t, n, o, r, l) {
      return {
        a: i.f(o.formattedColumns, function (e, t, r) {
          return i.e(
            {
              a: i.t(e.label),
              b: i.n(o.formatLabelSize(e.label, e.subLabel)),
              c: e.subLabel,
            },
            e.subLabel ? { d: i.t(e.subLabel) } : {},
            {
              e: i.n(
                o.sorter.key === e.sort &&
                  o.sorter.value !== o.E_SORT_ORDER.RESET
                  ? "active"
                  : ""
              ),
              f: i.n(e.subLabel ? "col-label-multiline" : ""),
              g: e.sort,
            },
            e.sort
              ? {
                  h: i.n(
                    o.sorter.key === e.sort &&
                      o.sorter.value === o.E_SORT_ORDER.ASC
                      ? "active"
                      : ""
                  ),
                  i: i.n(
                    o.sorter.key === e.sort &&
                      o.sorter.value === o.E_SORT_ORDER.DES
                      ? "active"
                      : ""
                  ),
                }
              : {},
            { j: e.tip },
            e.tip
              ? {
                  k: i.o(
                    function (t) {
                      return o.onLabelTipClick(e);
                    },
                    5848,
                    t
                  ),
                }
              : {},
            {
              l: t,
              m: i.n("col-".concat(t + 1)),
              n: i.n("left" === e.align ? "col-align-start" : "col-align-end"),
              o: i.n(0 === t && n.scrollAble ? "col-sticky" : ""),
              p: i.n(t === o.formattedColumns.length - 1 ? "col-last" : ""),
              q: i.o(
                function (t) {
                  return o.onHeaderClick(e);
                },
                5849,
                t
              ),
            }
          );
        }),
        b: i.n(n.headerBorder ? "border--bottom" : ""),
        c: i.f(o.handledList, function (e, t, r) {
          return {
            a: i.f(o.formattedColumns, function (t, l, a) {
              return i.e(
                { a: "name" === t.slot },
                "name" === t.slot
                  ? {
                      b: i.t(e.name),
                      c: i.n(e.name.length >= 8 ? "fs-28" : ""),
                      d: "43c86cff-0-" + r + "-" + a,
                      e: i.p({
                        market: e.market,
                        scode: e.scode,
                        type: e.type,
                      }),
                      f: i.t(e.scode),
                    }
                  : "status" === t.slot
                  ? {
                      h: i.n(e.starred ? "checked" : ""),
                      i: i.o(
                        function (t) {
                          return o.onStatusClick(e);
                        },
                        5850,
                        l
                      ),
                    }
                  : {
                      j: i.f(t.fields, function (t, n, r) {
                        return {
                          a: i.t(
                            1 == t.useNewField
                              ? e.condition_values &&
                                  e.condition_values[t.key] &&
                                  e.condition_values[t.key].disp
                              : t.formatter
                              ? t.formatter(e[t.key], e)
                              : e[t.key]
                          ),
                          b: t.key,
                          c: i.n("col-text-".concat(n + 1)),
                          d: i.n(
                            1 == t.useNewField
                              ? t.fluc &&
                                e.condition_values &&
                                e.condition_values[t.key]
                                ? o.redOrGreen(e.condition_values[t.key].raw)
                                : ""
                              : t.fluc
                              ? o.redOrGreen(e[t.key])
                              : ""
                          ),
                          e: i.n(
                            1 == t.useNewField
                              ? t.adjust &&
                                e.condition_values &&
                                e.condition_values[t.key]
                                ? o.adaptFontSize(
                                    e.condition_values[t.key].raw,
                                    28
                                  )
                                : ""
                              : t.adjust
                              ? o.adaptFontSize(e[t.key], 28)
                              : ""
                          ),
                        };
                      }),
                      k: i.n("left" === t.align ? "align-l" : "align-r"),
                    },
                {
                  g: "status" === t.slot,
                  l: l,
                  m: i.n("col-".concat(l + 1)),
                  n: i.n(0 === l && n.scrollAble ? "col-sticky" : ""),
                  o: i.n(l === o.formattedColumns.length - 1 ? "col-last" : ""),
                }
              );
            }),
            b: i.n(o.activeIndexes.includes(t) ? "active" : ""),
            c: t,
            d: i.o(
              function (n) {
                return o.onItemClick(e, t);
              },
              5851,
              t
            ),
            e: i.o(
              function (e) {
                return o.onItemTouch(!0);
              },
              5852,
              t
            ),
            f: i.o(
              function (e) {
                return o.onItemTouch(!1);
              },
              5853,
              t
            ),
          };
        }),
        d: i.n(n.listBorder ? "border--bottom" : ""),
        e: i.n("columns-" + o.formattedColumns.length),
      };
    },
  ],
  ["__scopeId", "data-v-43c86cff"],
]);
wx.createComponent(f);
