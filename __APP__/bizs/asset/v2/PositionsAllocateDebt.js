var e = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var t = require("../../../common/vendor.js"),
  n = require("../../../model/index/useHideFund.js"),
  r = require("../../../config/key.js"),
  o = require("../../../stores/app/useMode.js"),
  i = require("../../../components/ValueColor/utils.js"),
  a = function () {
    return "../ListHeader.js";
  },
  s = [
    { text: "配债权益", explain: !0 },
    {
      text: "配债价格",
      align: "right",
      sort: 1,
      key: "sell_price",
      highlight: !0,
    },
    {
      text: "可配数量",
      align: "right",
      sort: 1,
      key: "can_use",
      highlight: !0,
    },
    { text: "可配金额", align: "right", sort: 1, key: "amount", highlight: !0 },
  ],
  u = {
    options: { styleIsolation: "shared" },
    components: {
      ListHeader: function () {
        return "../ListHeader.js";
      },
    },
    props: {
      lists: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    setup: function () {
      var e = t.getCurrentInstance().proxy,
        u = n.useHideFund().hidefund,
        d = t.ref([]),
        l = r.ALLOCATE_DEBT_SORT_TYPE,
        c = o.useModeStore(),
        p = t.storeToRefs(c).simpleMode,
        f = t.index.getStorageSync(r.ALLOCATE_DEBT_SORT_TYPE) || {
          key: "sell_price",
          value: a.DES,
        },
        m = t.computed(function () {
          var e = S.value,
            t = h.value;
          return d.value.sort(function (n, r) {
            return t === a.DES ? r[e] - n[e] : n[e] - r[e];
          });
        }),
        h = t.ref(f.value),
        S = t.ref(f.key);
      return {
        hidefund: u,
        fields: s,
        onStockClick: function (t) {
          e.$stat.click("trade.asset.allocatedebt.click"),
            e.$router.push({
              name: "AllocateDebtTrade",
              query: {
                name: encodeURIComponent(t.name),
                code: t.code,
                sell_price: t.sell_price,
                can_use: t.can_use,
                market: t.market,
              },
            });
        },
        onSort: function (t, n) {
          (h.value = n),
            (S.value = t),
            e.$stat.click(
              "trade.asset."
                .concat(t, ".")
                .concat({ 0: "RESET", 1: "DES", 2: "ASC" }[n])
            );
        },
        onExplain: function () {
          e.$router.push({ name: "AllocateDebtIntroduce" });
        },
        formattedLists: d,
        sortList: m,
        sortOrder: h,
        sortField: S,
        cacheSortTypeKey: l,
        simpleMode: p,
        adaptFontSize: i.adaptFontSize,
      };
    },
    watch: {
      lists: {
        handler: function (t) {
          this.formattedLists = t.map(function (t) {
            return e(
              e({}, t),
              {},
              { amount: Number(t.can_use) * Number(t.sell_price) }
            );
          });
        },
        immediate: !0,
      },
    },
  };
Array ||
  (t.resolveComponent("ListHeader") + t.resolveComponent("MarketLabel"))(),
  Math;
var d = t._export_sfc(u, [
  [
    "render",
    function (e, n, r, o, i, a) {
      return {
        a: t.o(o.onSort),
        b: t.o(o.onExplain),
        c: t.p({
          fields: o.fields,
          "sort-field": o.sortField,
          "sort-order": o.sortOrder,
          "header-marker": !0,
          "storage-sort-key": o.cacheSortTypeKey,
          border: !1,
        }),
        d: t.f(o.sortList, function (n, r, i) {
          return t.e(
            { a: t.n(o.simpleMode || 0 == r ? "" : "border--top-c1") },
            o.hidefund
              ? {}
              : {
                  b: t.t(n.name),
                  c: t.n(o.adaptFontSize(n.name.length, 4, "28")),
                  d: t.n(n.name.length >= 6 ? "no-line-height" : ""),
                  e: "f0d0e206-1-" + i,
                  f: t.p({ market: n.market }),
                  g: t.t(n.code),
                },
            o.hidefund
              ? {}
              : { h: t.t(e.$filters.money.formatNoUnit(n.sell_price, !1, 2)) },
            o.hidefund
              ? {}
              : {
                  i: t.t(e.$filters.money.formatNoUnit(n.can_use, !1, 0)),
                  j: t.n(o.adaptFontSize(n.can_use, 1e5, "28")),
                  k: t.n(o.adaptFontSize(n.can_use, 1e6, "24")),
                },
            o.hidefund
              ? {}
              : {
                  l: t.t(e.$filters.money.formatNoUnit(n.amount, !1)),
                  m: t.n(o.adaptFontSize(n.amount, 1e5, "28")),
                  n: t.n(o.adaptFontSize(n.amount, 1e6, "24")),
                },
            {
              o: r,
              p: t.o(function (e) {
                return o.onStockClick(n);
              }, r),
            }
          );
        }),
        e: !o.hidefund,
        f: !o.hidefund,
        g: !o.hidefund,
        h: !o.hidefund,
        i: o.simpleMode ? 1 : "",
      };
    },
  ],
]);
wx.createComponent(d);
