var e = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../../../common/vendor.js"),
  o = require("../../lib/report.js"),
  n = {
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
    components: {},
    setup: function (n, r) {
      var l = r.emit,
        a = function (t) {
          return t.map(function (t, o) {
            var r,
              l,
              a = t.label,
              u = t.subLabel,
              i = t.align,
              c = t.field,
              s = t.slot,
              d = void 0 === s ? "" : s,
              f = t.active,
              v = void 0 !== f && f,
              m = t.tip,
              k = void 0 !== m && m,
              b = t.key,
              p = void 0 === b ? "" : b,
              y = t.sort,
              R = void 0 !== y && y,
              S = t.fluc,
              _ = void 0 !== S && S,
              E = t.formatter,
              O = t.adjust,
              h = t.useNewField,
              T = void 0 === h ? 0 : h,
              C = [];
            Array.isArray(c) ? C.push.apply(C, e(c)) : C.push(c);
            var g = C.map(function (e) {
                var t;
                return {
                  key: (t =
                    "string" == typeof e
                      ? { key: e, fluc: _, formatter: E, adjust: O }
                      : e).key,
                  fluc: t.fluc || _,
                  formatter: t.formatter || E,
                  adjust: t.adjust || O,
                  useNewField: T,
                };
              }),
              L = !1 === R ? "" : (null == (r = g[0]) ? void 0 : r.key) || "";
            return (
              "boolean" != typeof R &&
                (L =
                  (null ==
                  (l = g.find(function (e) {
                    return e.key === R;
                  }))
                    ? void 0
                    : l.key) || L),
              {
                label: a,
                subLabel: u,
                slot: d || "",
                align: i || (0 === o ? "left" : "right"),
                fields: g,
                sort: !!n.sortAble && L,
                active: v,
                tip: k,
                key: p,
              }
            );
          });
        },
        u = t.ref(a(n.columns)),
        i = t.ref([]);
      t.watch(
        function () {
          return n.columns;
        },
        function (e) {
          u.value = a(e);
        }
      ),
        t.watch(
          function () {
            return n.list;
          },
          function () {
            i.value = [];
          }
        );
      var c = t.ref(),
        s = t.ref(),
        d = t.computed(function () {
          var e;
          if (c.value) return { key: c.value, value: s.value };
          var t =
            null ==
            (e = u.value.find(function (e) {
              return e.sort && e.active;
            }))
              ? void 0
              : e.sort;
          return t
            ? { key: t, value: o.E_SORT_ORDER.DES }
            : { key: "", value: o.E_SORT_ORDER.RESET };
        }),
        f = t.computed(function () {
          return !d.value.key ||
            d.value.value === o.E_SORT_ORDER.RESET ||
            n.customSort
            ? n.list
            : o.sortList(e(n.list), d.value.key, d.value.value);
        });
      return {
        formattedColumns: u,
        sortField: c,
        sortOrder: s,
        sorter: d,
        activeIndexes: i,
        formatColumns: a,
        formatLabelSize: function (e, t) {
          var n = o.getStrcharLen(e);
          return n >= 16 ? "small" : n >= 12 ? (t ? "small" : "medium") : "";
        },
        handledList: f,
        onHeaderClick: function (e) {
          var t = e.sort;
          if (t) {
            var n =
              d.value.key === t && d.value.value === o.E_SORT_ORDER.DES
                ? o.E_SORT_ORDER.ASC
                : o.E_SORT_ORDER.DES;
            (c.value = t), (s.value = n), l("sort", t, n);
          }
        },
        onLabelTipClick: function (e) {
          l("tip", e);
        },
        onItemClick: function (t, o) {
          n.selectAble
            ? (n.multiSelect
                ? i.value.includes(o)
                  ? (i.value = i.value.filter(function (e) {
                      return e !== o;
                    }))
                  : i.value.push(o)
                : (i.value = [o]),
              l("select", t, e(i.value), f.value))
            : l("click", t, o);
        },
        onItemTouch: function (e) {
          n.scrollAble && n.onListItemTouch && n.onListItemTouch(e);
        },
        onStatusClick: function (e) {
          l("check", e);
        },
        redOrGreen: o.redOrGreen,
        adaptFontSize: o.adaptFontSize,
        E_SORT_ORDER: o.E_SORT_ORDER,
        parseStock: o.parseStock,
      };
    },
  };
Array || t.resolveComponent("template")();
var r = t._export_sfc(n, [
  [
    "render",
    function (e, o, n, r, l, a) {
      return {
        a: t.f(r.formattedColumns, function (e, o, l) {
          return t.e(
            {
              a: t.t(e.label),
              b: t.n(r.formatLabelSize(e.label, e.subLabel)),
              c: e.subLabel,
            },
            e.subLabel ? { d: t.t(e.subLabel) } : {},
            {
              e: t.n(
                r.sorter.key === e.sort &&
                  r.sorter.value !== r.E_SORT_ORDER.RESET
                  ? "active"
                  : ""
              ),
              f: t.n(e.subLabel ? "col-label-multiline" : ""),
              g: e.sort,
            },
            e.sort
              ? {
                  h: t.n(
                    r.sorter.key === e.sort &&
                      r.sorter.value === r.E_SORT_ORDER.ASC
                      ? "active"
                      : ""
                  ),
                  i: t.n(
                    r.sorter.key === e.sort &&
                      r.sorter.value === r.E_SORT_ORDER.DES
                      ? "active"
                      : ""
                  ),
                }
              : {},
            { j: e.tip },
            e.tip
              ? {
                  k: t.o(
                    function (t) {
                      return r.onLabelTipClick(e);
                    },
                    4010,
                    o
                  ),
                }
              : {},
            {
              l: o,
              m: t.n("col-".concat(o + 1)),
              n: t.n("left" === e.align ? "col-align-start" : "col-align-end"),
              o: t.n(0 === o && n.scrollAble ? "col-sticky" : ""),
              p: t.n(o === r.formattedColumns.length - 1 ? "col-last" : ""),
              q: t.o(
                function (t) {
                  return r.onHeaderClick(e);
                },
                4011,
                o
              ),
            }
          );
        }),
        b: t.n(n.headerBorder ? "border--bottom" : ""),
        c: t.f(r.handledList, function (e, o, l) {
          return {
            a: t.f(r.formattedColumns, function (o, l, a) {
              return t.e(
                { a: "name" === o.slot },
                "name" === o.slot
                  ? {
                      b: t.t(e.name),
                      c: t.n(e.name.length >= 8 ? "fs-28" : ""),
                      d: t.n("market-" + r.parseStock(e.code).market),
                      e: t.t(r.parseStock(e.code).code),
                    }
                  : "status" === o.slot
                  ? {
                      g: t.n(e.starred ? "checked" : ""),
                      h: t.o(
                        function (t) {
                          return r.onStatusClick(e);
                        },
                        4012,
                        l
                      ),
                    }
                  : {
                      i: t.f(o.fields, function (o, n, l) {
                        return {
                          a: t.t(
                            1 == o.useNewField
                              ? e.condition_values &&
                                  e.condition_values[o.key] &&
                                  e.condition_values[o.key].disp
                              : o.formatter
                              ? o.formatter(e[o.key], e)
                              : e[o.key]
                          ),
                          b: o.key,
                          c: t.n("col-text-".concat(n + 1)),
                          d: t.n(
                            1 == o.useNewField
                              ? o.fluc &&
                                e.condition_values &&
                                e.condition_values[o.key]
                                ? r.redOrGreen(e.condition_values[o.key].raw)
                                : ""
                              : o.fluc
                              ? r.redOrGreen(e[o.key])
                              : ""
                          ),
                          e: t.n(
                            1 == o.useNewField
                              ? o.adjust &&
                                e.condition_values &&
                                e.condition_values[o.key]
                                ? r.adaptFontSize(
                                    e.condition_values[o.key].raw,
                                    28
                                  )
                                : ""
                              : o.adjust
                              ? r.adaptFontSize(e[o.key], 28)
                              : ""
                          ),
                        };
                      }),
                      j: t.n("left" === o.align ? "align-l" : "align-r"),
                    },
                {
                  f: "status" === o.slot,
                  k: l,
                  l: t.n("col-".concat(l + 1)),
                  m: t.n(0 === l && n.scrollAble ? "col-sticky" : ""),
                  n: t.n(l === r.formattedColumns.length - 1 ? "col-last" : ""),
                }
              );
            }),
            b: t.n(r.activeIndexes.includes(o) ? "active" : ""),
            c: o,
            d: t.o(
              function (t) {
                return r.onItemClick(e, o);
              },
              4013,
              o
            ),
            e: t.o(
              function (e) {
                return r.onItemTouch(!0);
              },
              4014,
              o
            ),
            f: t.o(
              function (e) {
                return r.onItemTouch(!1);
              },
              4015,
              o
            ),
          };
        }),
        d: t.n(n.listBorder ? "border--bottom" : ""),
        e: t.n("columns-" + r.formattedColumns.length),
      };
    },
  ],
  ["__scopeId", "data-v-e48dc384"],
]);
wx.createComponent(r);
