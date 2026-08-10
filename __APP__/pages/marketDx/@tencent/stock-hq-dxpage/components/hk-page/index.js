var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../utils/HangqingDataFormat.js"),
  r = require("../../utils/common.js"),
  o = require("../../../../../../common/vendor.js"),
  a = {
    inject: ["hqBridge"],
    components: {
      HkStockItem: function () {
        return "../common/purchase/PurchaseStockItem.js";
      },
      NoDataBlock: function () {
        return "../common/no-data-block/index.js";
      },
    },
    props: { accoutOpened: { type: Boolean, default: !1 } },
    data: function () {
      return {
        market: "hk",
        type: "stock",
        subTitle: "",
        itemData: {},
        categoryNum: -1,
        showNoblock: !1,
      };
    },
    created: function () {
      this.getData();
    },
    computed: {
      isMp: function () {
        return "mp" === this.hqBridge.ENV;
      },
    },
    methods: {
      getData: function () {
        return (
          (o = this),
          null,
          (a = t().mark(function o() {
            var a, n, c;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (a = { market: "hk", detail: 1, sgrq: 1, period: 90 }),
                        (t.prev = 1),
                        (t.next = 4),
                        e.getHSNewStock(this.hqBridge, a)
                      );
                    case 4:
                      (n = t.sent),
                        (this.showNoblock = !0),
                        (this.subTitle = r.getSubTitle(n)),
                        (c = e.formatHKStockData(n)),
                        (this.itemData = this.filterData(c)),
                        (this.categoryNum = Object.keys(this.itemData).length),
                        this.$emit(
                          "getPerformData",
                          this.subTitle && this.subTitle
                        ),
                        (t.next = 13);
                      break;
                    case 10:
                      (t.prev = 10),
                        (t.t0 = t.catch(1)),
                        (this.categoryNum = 0),
                        (this.showNoblock = !0);
                    case 13:
                    case "end":
                      return t.stop();
                  }
              },
              o,
              this,
              [[1, 10]]
            );
          })),
          new Promise(function (t, e) {
            var r = function (t) {
                try {
                  c(a.next(t));
                } catch (t) {
                  e(t);
                }
              },
              n = function (t) {
                try {
                  c(a.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              c = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(r, n);
              };
            c((a = a.apply(o, null)).next());
          })
        );
        var o, a;
      },
      filterData: function (t) {
        var e,
          r = {};
        return (
          null == (e = Object.keys(t)) ||
            e.forEach(function (e) {
              t[e] && (r[e] = t[e]);
            }),
          r
        );
      },
    },
  };
Array ||
  (o.resolveComponent("hk-stock-item") + o.resolveComponent("no-data-block"))();
var n = o._export_sfc(a, [
  [
    "render",
    function (t, e, r, a, n, c) {
      return o.e(
        { a: n.categoryNum > 0 },
        n.categoryNum > 0
          ? {
              b: o.f(n.itemData, function (t, e, r) {
                return o.e(
                  {
                    a: "dc466dd1-0-" + r,
                    b: o.p({ market: n.market, type: n.type, itemData: t }),
                    c: r !== n.categoryNum - 1,
                  },
                  r !== n.categoryNum - 1
                    ? { d: o.n(c.isMp ? "separator-strip-mp" : "") }
                    : {},
                  { e: e }
                );
              }),
              c: o.n(c.isMp ? "hk-item-mp" : ""),
            }
          : n.showNoblock
          ? { e: o.p({ market: "hk", accoutOpened: r.accoutOpened }) }
          : {},
        {
          d: n.showNoblock,
          f: o.n(c.isMp ? "hk-page-wrapper-mp" : ""),
          g: o.n(n.showNoblock && n.categoryNum <= 0 ? "nodata-wrapper" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-dc466dd1"],
]);
wx.createComponent(n);
