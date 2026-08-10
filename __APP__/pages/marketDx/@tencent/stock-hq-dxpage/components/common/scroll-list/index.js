var e = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  t = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  n = function (e, t, o) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o);
  },
  s = function (r, s) {
    for (var a in s || (s = {})) o.call(s, a) && n(r, a, s[a]);
    if (t) {
      var c,
        u = e(t(s));
      try {
        for (u.s(); !(c = u.n()).done; ) {
          a = c.value;
          i.call(s, a) && n(r, a, s[a]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return r;
  },
  a = require("../../../utils/common.js"),
  c = require("../../../../stock-hq-data/index.js"),
  u = require("../../../../../../../common/vendor.js");
function l(e, r) {
  var t = r || {},
    o = t.type,
    i = t.franctionalDigit,
    n = t.isCut,
    s = t.isSign,
    c = t.unit,
    u = void 0 === c ? "" : c,
    l = parseFloat(e);
  if (!a.isNumber(l)) return "--";
  if (
    (o &&
      (l = (function (e, r) {
        if ("dgzql" === e) return 1e3 * r;
      })(o, l)),
    i)
  )
    if (n) {
      var f = Math.pow(10, i);
      l = parseInt(l * f, 10) / f;
    } else l = l.toFixed(i);
  var h = "";
  return s && l > 0 && (h = "+"), "".concat(h).concat(l).concat(u);
}
var f = {
  inject: ["hqBridge"],
  props: {
    rows: {
      type: Array,
      default: function () {
        return [];
      },
    },
    columnConfig: {
      type: Array,
      default: function () {
        return [];
      },
    },
    firstSort: { type: String, default: "" },
    widType: { type: String, default: "" },
  },
  components: {
    ListTitle: function () {
      return "./components/Title.js";
    },
    ListContent: function () {
      return "./components/Content.js";
    },
  },
  data: function () {
    return {
      hasFreeze: !1,
      freezeIndex: -1,
      columns: [],
      freezeGrid: {},
      grid: {},
      formattedRows: [],
      noDataText: "暂无此类新股",
      oldClientX: 0,
      isReported: !1,
    };
  },
  watch: {
    rows: function () {
      this.initRows();
    },
  },
  computed: {
    isMp: function () {
      return "mp" === this.hqBridge.ENV;
    },
  },
  created: function () {
    this.init();
  },
  methods: {
    init: function () {
      (this.freezeGrid = { columns: [], rows: [] }),
        (this.grid = { columns: [], rows: [] }),
        this.initColumns(),
        this.initRows();
    },
    initColumns: function () {
      var e = this,
        r = this;
      this.columns = this.columnConfig;
      var t = this.getFreezeIndex();
      t > -1
        ? ((this.freezeIndex = t), (this.hasFreeze = !0))
        : (this.hasFreeze = !1),
        this.columns.forEach(function (o, i) {
          r.hasFreeze && i <= t
            ? e.freezeGrid.columns.push(o)
            : e.grid.columns.push(o);
        });
    },
    getFreezeIndex: function () {
      return this.columns.findIndex(function (e) {
        return e.isFreeze;
      });
    },
    initRows: function () {
      if (this.rows.length) {
        var e = this.getRowsData(this.rows),
          r = e.freezeGridRows,
          t = e.gridRows;
        (this.freezeGrid.rows = r), (this.grid.rows = t);
      }
    },
    loadMoreRowsData: function (e) {
      var r = this.getRowsData(e),
        t = r.freezeGridRows,
        o = r.gridRows;
      (this.freezeGrid.rows = this.freezeGrid.rows.concat(t)),
        (this.grid.rows = this.grid.rows.concat(o));
    },
    refreshRowsData: function (e) {
      if (null == e ? void 0 : e.length) {
        var r = this.getRowsData(e),
          t = r.freezeGridRows,
          o = r.gridRows;
        (this.freezeGrid.rows = t), (this.grid.rows = o);
      }
    },
    getRowsData: function (e) {
      var r = this,
        t = (function (e, r) {
          var t = [];
          return (
            e.forEach(function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                o = [],
                i = {};
              r.forEach(function (r) {
                var t,
                  n = r || {},
                  a = n.rank,
                  u = n.isRetain,
                  f = n.isShowCode,
                  h = n.format,
                  d = void 0 === h ? [] : h;
                Array.isArray(a)
                  ? ((t = []),
                    a.forEach(function (r, o) {
                      t[o] = (function (e, r) {
                        return (r || {}).isRetain ? e : l(e, r);
                      })(e[r], d[o]);
                    }))
                  : (t = u ? e[a] || "--" : l(e[a], r));
                var p = e.code,
                  m = void 0 === p ? "" : p,
                  w = e.symbol,
                  v = void 0 === w ? "" : w,
                  g = e.stock_type;
                if (f) {
                  var z = c.utils.splitSymbol(m || v),
                    y = z.market,
                    R = z.scode;
                  (i.market = y), (i.scode = R);
                }
                o.push(s(s({ value: t, code: m || v, stockType: g }, i), r));
              }),
                t.push(o);
            }),
            t
          );
        })(e, this.columns),
        o = [],
        i = [],
        n = this;
      return (
        t.forEach(function (e) {
          if (Array.isArray(e)) {
            var t = [],
              s = [];
            e.forEach(function (e, o) {
              n.hasFreeze && o <= r.freezeIndex ? s.push(e) : t.push(e);
            }),
              o.push(s),
              i.push(t);
          }
        }),
        { freezeGridRows: o, gridRows: i }
      );
    },
    handleColumnClick: function (e) {
      this.grid.columns.forEach(function (r) {
        r.sortBy = r.rank === e.rank ? e.sortBy : "";
      }),
        this.$emit("columnClick", e);
    },
    handleRowClick: function (e) {
      this.$emit("rowClick", e);
    },
    handlketouchmove: function (e) {
      if (this.isMp) {
        var r = e.touches,
          t = (void 0 === r ? {} : r)[0].clientX,
          o = void 0 === t ? 0 : t;
        Math.abs(o - this.oldClientX) > 50 &&
          (this.isReported ||
            (this.$emit("reportHorizontalScroll"), (this.isReported = !0)));
      }
    },
    reportHorizontalScroll: function () {
      this.$emit("reportHorizontalScroll");
    },
  },
};
Array ||
  (u.resolveComponent("ListTitle") + u.resolveComponent("ListContent"))();
var h = u._export_sfc(f, [
  [
    "render",
    function (e, r, t, o, i, n) {
      return u.e(
        { a: i.freezeGrid.rows.length > 0 },
        i.freezeGrid.rows.length > 0
          ? u.e(
              { b: i.hasFreeze },
              i.hasFreeze
                ? {
                    c: u.p({ columns: i.freezeGrid.columns }),
                    d: u.o(n.handleRowClick, 3887),
                    e: u.p({ rows: i.freezeGrid.rows }),
                    f: u.n("freeze-content-".concat(t.widType)),
                  }
                : {},
              {
                g: u.o(n.handleColumnClick, 3888),
                h: u.p({ columns: i.grid.columns, firstSort: t.firstSort }),
                i: u.o(n.handleRowClick, 3889),
                j: u.p({ rows: i.grid.rows }),
                k: u.o(function () {
                  return (
                    n.reportHorizontalScroll &&
                    n.reportHorizontalScroll.apply(n, arguments)
                  );
                }, 3890),
                l: u.o(function () {
                  return (
                    n.handlketouchmove && n.handlketouchmove.apply(n, arguments)
                  );
                }, 3891),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-5b8e658d"],
]);
wx.createComponent(h);
