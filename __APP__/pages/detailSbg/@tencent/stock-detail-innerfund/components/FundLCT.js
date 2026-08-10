var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../api/index.js"),
  i = require("../../stock-hq-data/index.js"),
  n = require("../../../../../common/vendor.js"),
  s = {
    components: {
      NoData: function () {
        return "./NoData.js";
      },
    },
    inject: ["hqBridge"],
    props: {
      scode: { type: String, default: "" },
      market: { type: String, default: "" },
      isPage: { type: Boolean, default: !1 },
      listData: {
        type: Array,
        default: function () {
          return [];
        },
      },
      lct: { type: Boolean, default: !1 },
    },
    data: function () {
      return { symbol: "", list: [], loading: !1, firstLoaded: !1 };
    },
    computed: {
      dateFilter: function () {
        return function (t) {
          return ""
            .concat(t.slice(0, 4), "-")
            .concat(t.slice(4, 6), "-")
            .concat(t.slice(6));
        };
      },
      rateFilter: function () {
        return function (t) {
          return (t > 0 ? "+" : "") + (t / 1e4).toFixed(2) + "%";
        };
      },
      colorFilter: function () {
        return function (t) {
          return t > 0
            ? this.lct
              ? "rise-lct"
              : "rise"
            : t < 0
            ? this.lct
              ? "drop-lct"
              : "drop"
            : this.lct
            ? "gray-lct"
            : "gray";
        };
      },
    },
    watch: {
      listData: function (t) {
        this.list = t;
      },
    },
    mounted: function () {
      this.isPage
        ? (this.getData(),
          (this.symbol = i.utils.getSymbol(this.market, this.scode)),
          this.hqBridge.report("hq.stock_fund_outer.page_brow_from_zs", {
            stockid: this.symbol,
            yy_public_str1: "zs",
          }))
        : ((this.list = this.listData), (this.firstLoaded = !0));
    },
    methods: {
      getData: function () {
        return (
          (i = this),
          null,
          (n = t().mark(function i() {
            var n;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        e.FundAPI.queryLCTFundList(this.hqBridge, {
                          scode: this.scode,
                        })
                      );
                    case 2:
                      0 == +(n = t.sent).retcode &&
                        ((this.list =
                          this.dealLctData(n.index_related_funds) || []),
                        this.isPage || (this.list = this.list.slice(0, 5))),
                        this.firstLoaded ||
                          ((this.firstLoaded = !0),
                          this.$emit("loaded", this.list));
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              i,
              this
            );
          })),
          new Promise(function (t, e) {
            var s = function (t) {
                try {
                  o(n.next(t));
                } catch (t) {
                  e(t);
                }
              },
              r = function (t) {
                try {
                  o(n.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              o = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(s, r);
              };
            o((n = n.apply(i, null)).next());
          })
        );
        var i, n;
      },
      dealLctData: function (t) {
        return t.map(function (t) {
          return {
            sFundName: t.fund_name,
            sFundCode: t.fund_code,
            l1YearRiseRate: t.rate_key_val,
            lNetValue: t.net_value,
          };
        });
      },
      goDetail: function (t, e) {
        if (!this.hqBridge.IS_ZXG_XCX_ALLH5)
          if (
            (!this.isPage && this.$emit("clickStockDetail", t.sFundCode, e),
            this.hqBridge.report(
              "hq.stock_fund_outer.stockdetail_click_from_zs",
              {
                stockid: this.symbol,
                related_stockid: t.sFundCode,
                position: e + 1,
                yy_public_str1: "zs_".concat(t.sFundCode),
              }
            ),
            this.hqBridge.ENV !== n.EnvTypeEnum.MP)
          )
            setTimeout(function () {
              location &&
                (location.href =
                  "https://www.txfund.com/h5/v6/pages/product/detail/index?fund_code=".concat(
                    t.sFundCode,
                    "&spid=1800007030&lctfrom=tx_stock&stat_data=Oki66p009c001"
                  ));
            }, 500);
          else {
            var i =
              "https://www.txfund.com/h5/v6/pages/product/detail/index?fund_code=".concat(
                t.sFundCode,
                "&spid=1800007030&lctfrom=tx_stock&stat_data=Oki66p009c001"
              );
            this.hqBridge.openExtraWebview(i);
          }
      },
    },
  };
Array || n.resolveComponent("NoData")();
var r = n._export_sfc(s, [
  [
    "render",
    function (t, e, i, s, r, o) {
      return n.e(
        { a: r.list.length > 0 },
        r.list.length > 0
          ? {
              b: n.n(i.isPage ? "caption-ceiling" : "top-mar"),
              c: n.f(r.list, function (t, e, i) {
                return {
                  a: n.t(t.sFundName),
                  b: n.t(t.sFundCode),
                  c: n.t(t.lNetValue),
                  d: n.t(t.l1YearRiseRate ? t.l1YearRiseRate + "%" : "--"),
                  e: n.n(o.colorFilter(t.l1YearRiseRate)),
                  f: e,
                  g: n.o(
                    function (i) {
                      return o.goDetail(t, e);
                    },
                    3766,
                    e
                  ),
                };
              }),
              d: n.n(i.isPage ? "list-container" : ""),
            }
          : (r.firstLoaded, {}),
        { e: r.firstLoaded }
      );
    },
  ],
  ["__scopeId", "data-v-74a06ddb"],
]);
wx.createComponent(r);
