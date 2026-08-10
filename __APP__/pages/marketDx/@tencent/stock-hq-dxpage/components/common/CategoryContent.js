var t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  r = function (t, n, o) {
    return n in t
      ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (t[n] = o);
  },
  i = function (e, i) {
    for (var c in i || (i = {})) o.call(i, c) && r(e, c, i[c]);
    if (n) {
      var p,
        m = t(n(i));
      try {
        for (m.s(); !(p = m.n()).done; ) {
          c = p.value;
          a.call(i, c) && r(e, c, i[c]);
        }
      } catch (t) {
        m.e(t);
      } finally {
        m.f();
      }
    }
    return e;
  },
  c = require("../../../../../../common/vendor.js"),
  p = {
    inject: ["hqBridge"],
    components: {
      PendingSubscriptionStock: function () {
        return "../hs-page/pending-subscription/NewStock.js";
      },
      StockBondCommon: function () {
        return "./purchase/PurchaseStockItem.js";
      },
      NoDataCard: function () {
        return "./NoDataCard.js";
      },
    },
    props: {
      contentType: { type: String, default: "" },
      contentData: {
        type: Array,
        default: function () {
          return [];
        },
      },
      tag: { type: String, default: "" },
    },
    data: function () {
      return {
        componentList: {
          pendingSubscription: ["PendingSubscriptionStock", "StockBondCommon"],
          common: ["StockBondCommon", "StockBondCommon"],
        },
        viewData: null,
      };
    },
    computed: {
      isMp: function () {
        return "mp" === this.hqBridge.ENV;
      },
    },
    created: function () {
      this.initViewList();
    },
    methods: {
      initViewList: function () {
        var t = this.componentList[this.contentType],
          e = this.contentData[0],
          n = this.contentData[1];
        if (e.data && n.data)
          this.viewData = [
            i({ isEmptyCard: !0, component: t[0] }, e),
            i({ isEmptyCard: !0, component: t[1] }, n),
          ];
        else if (e.data || n.data) {
          if (!e.data) {
            var o = e;
            (e = n), (n = o), t.reverse();
          }
          var a = n,
            r = a.name,
            c = a.noDataText;
          this.viewData = [
            i({ isEmptyCard: !0, component: t[0] }, e),
            { isEmptyCard: !1, component: "NoDataCard", name: r, text: c },
          ];
        } else {
          var p = e,
            m = p.name,
            s = p.noDataText,
            d = n,
            u = d.name,
            f = d.noDataText;
          this.viewData = [
            { isEmptyCard: !1, component: "NoDataCard", name: m, text: s },
            { isEmptyCard: !1, component: "NoDataCard", name: u, text: f },
          ];
        }
      },
      showTeachPop: function (t, e, n) {
        this.$emit("showTeachPop", t, e, n);
      },
    },
  };
Array ||
  (
    c.resolveComponent("PendingSubscriptionStock") +
    c.resolveComponent("StockBondCommon") +
    c.resolveComponent("no-data-card")
  )();
var m = c._export_sfc(p, [
  [
    "render",
    function (t, e, n, o, a, r) {
      return c.e(
        { a: a.viewData },
        a.viewData
          ? {
              b: c.f(a.viewData, function (t, e, n) {
                return c.e(
                  { a: t.isEmptyCard },
                  t.isEmptyCard
                    ? c.e(
                        { b: "PendingSubscriptionStock" === t.component },
                        "PendingSubscriptionStock" === t.component
                          ? {
                              c: "4b40f18f-0-" + n,
                              d: c.p({
                                market: t.market,
                                type: t.type,
                                itemData: t.data,
                              }),
                            }
                          : {},
                        { e: "StockBondCommon" === t.component },
                        "StockBondCommon" === t.component
                          ? {
                              f: c.o(r.showTeachPop, 3814, e),
                              g: "4b40f18f-1-" + n,
                              h: c.p({
                                market: t.market,
                                type: t.type,
                                itemData: t.data,
                              }),
                            }
                          : {},
                        { i: c.n(r.isMp ? "content-item-mp" : "") }
                      )
                    : {
                        j: c.n(r.isMp ? "content-nodata-mp" : ""),
                        k: "4b40f18f-2-" + n,
                        l: c.p({ name: t.name, text: t.text }),
                      },
                  { m: 0 === e },
                  0 === e ? { n: c.n(r.isMp ? "separator-strip-mp" : "") } : {},
                  { o: e }
                );
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-4b40f18f"],
]);
wx.createComponent(m);
