var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../utils/HangqingDataFormat.js"),
  o = require("../../utils/common.js"),
  n = require("../../../../../../common/vendor.js"),
  a = {
    inject: ["hqBridge"],
    components: {
      TitleBlock: function () {
        return "../common/TitleBlock.js";
      },
      UsStockItem: function () {
        return "../common/purchase/PurchaseStockItem.js";
      },
      NoDataBlock: function () {
        return "../common/no-data-block/index.js";
      },
    },
    props: { accoutOpened: { type: Boolean, default: !1 } },
    data: function () {
      return {
        market: "us",
        type: "stock",
        subTitle: "",
        itemData: null,
        isEmptyPage: !0,
        showNoblock: !1,
      };
    },
    computed: {
      isMp: function () {
        return "mp" === this.hqBridge.ENV;
      },
    },
    created: function () {
      this.getData();
    },
    methods: {
      getData: function () {
        return (
          (n = this),
          null,
          (a = t().mark(function () {
            var n, a, r, i;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        e.getUSNewStock(this.hqBridge, { period: 90 })
                      );
                    case 3:
                      (i = t.sent),
                        (this.subTitle = o.getSubTitle(i)),
                        (this.itemData = e.formatUSStockData(i)),
                        (this.showNoblock = !0),
                        (null ==
                        (r =
                          null ==
                          (a = null == (n = this.itemData) ? void 0 : n.key)
                            ? void 0
                            : a.data)
                          ? void 0
                          : r.length) > 0 && (this.isEmptyPage = !1),
                        this.$emit(
                          "getPerformData",
                          this.subTitle && this.subTitle
                        ),
                        (t.next = 10);
                      break;
                    case 7:
                      (t.prev = 7),
                        (t.t0 = t.catch(0)),
                        (this.isEmptyPage = !0),
                        (this.showNoblock = !0);
                    case 10:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              this,
              [[0, 7]]
            );
          })),
          new Promise(function (t, e) {
            var o = function (t) {
                try {
                  i(a.next(t));
                } catch (t) {
                  e(t);
                }
              },
              r = function (t) {
                try {
                  i(a.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              i = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(o, r);
              };
            i((a = a.apply(n, null)).next());
          })
        );
        var n, a;
      },
    },
  };
Array ||
  (
    n.resolveComponent("title-block") +
    n.resolveComponent("us-stock-item") +
    n.resolveComponent("no-data-block")
  )();
var r = n._export_sfc(a, [
  [
    "render",
    function (t, e, o, a, r, i) {
      return n.e(
        { a: !r.isEmptyPage },
        r.isEmptyPage
          ? r.showNoblock
            ? { f: n.p({ market: "us", accoutOpened: o.accoutOpened }) }
            : {}
          : {
              b: n.p({ name: "未上市" }),
              c: n.p({
                market: r.market,
                type: r.type,
                itemData: r.itemData.key,
              }),
              d: n.n(i.isMp ? "us-block-mp" : ""),
            },
        {
          e: r.showNoblock,
          g: n.n(i.isMp ? "us-page-wrapper-mp" : ""),
          h: n.n(r.showNoblock && r.isEmptyPage ? "nodata-wrapper" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-3bd7e1ac"],
]);
wx.createComponent(r);
