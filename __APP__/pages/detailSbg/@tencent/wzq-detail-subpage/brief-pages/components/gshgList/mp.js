var t = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../api/index.js"),
  s = require("../../../../stock-hq-data/index.js"),
  r = require("../../../../../../../common/vendor.js"),
  i = {},
  o = {
    id: "stocktab",
    slidingContainerSelector: ".stock-cats",
    scrollWrapperSelector: ".stock-tab-container",
    followSelector: ".hg-title",
    damping: 0.1,
    enableScrollX: !0,
    enableScrollY: !1,
    allowReload: !1,
    bounceDuration: 200,
    momentumDuration: 400,
  },
  n = {
    components: {
      NoData: function () {
        return "../../../../stock-markets-base/components/NoData.js";
      },
    },
    props: { symbol: { type: String, default: "" } },
    data: function () {
      return {
        hgList: [],
        firstLoaded: !0,
        isLoading: !0,
        code: "",
        market: "",
        scrollOptionsTabs: null,
        errorStatus: !1,
      };
    },
    computed: {
      isHgListVisible: function () {
        return !this.isLoading && this.hgList && this.hgList.length > 0;
      },
    },
    mounted: function () {
      r.StockBridge.setTitle("公司回购");
      var t = s.utils.splitSymbol(this.symbol),
        e = t.market,
        i = t.scode;
      (this.market = e), (this.code = i), this.getData();
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
                      if (((t.prev = 0), !s.utils.isHKMarket(this.market))) {
                        t.next = 7;
                        break;
                      }
                      return (
                        (t.next = 4), e.getHKGshg(r.StockBridge, this.symbol)
                      );
                    case 4:
                      (t.t0 = t.sent), (t.next = 10);
                      break;
                    case 7:
                      return (
                        (t.next = 9), e.getHSGshg(r.StockBridge, this.symbol)
                      );
                    case 9:
                      t.t0 = t.sent;
                    case 10:
                      (n = t.t0),
                        (this.isLoading = !1),
                        n &&
                          0 == +n.code &&
                          n.data &&
                          (this.hgList = n.data.huigouComplete || []),
                        this.firstLoaded || (this.firstLoaded = !0),
                        (this.scrollOptionsTabs = o),
                        (t.next = 20);
                      break;
                    case 17:
                      (t.prev = 17),
                        (t.t1 = t.catch(0)),
                        (this.errorStatus = !0),
                        (this.firstLoaded = !0);
                    case 20:
                    case "end":
                      return t.stop();
                  }
              },
              i,
              this,
              [[0, 17]]
            );
          })),
          new Promise(function (t, e) {
            var s = function t(s) {
                try {
                  o(n.next(s));
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
      handleListScroll: function (t) {
        this.marginLeft = t.target.scrollLeft;
      },
      handlePageScroll: function (t) {
        var e = t.scrollTop;
        e > 0 && (this.listScrollTop = e);
      },
    },
  };
Array || r.resolveComponent("no-data")(), "function" == typeof i && i(n);
var a = r._export_sfc(n, [
  [
    "render",
    function (t, e, s, i, o, n) {
      return r.e(
        { a: !o.isLoading && o.hgList && o.hgList.length > 0 },
        (!o.isLoading && o.hgList && o.hgList.length, {}),
        { b: n.isHgListVisible },
        n.isHgListVisible
          ? {
              c: r.f(o.hgList, function (t, e, s) {
                return {
                  a: r.t(t.REP_DATE),
                  b: r.t(t.MARKET),
                  c: r.t(t.FUND),
                  d: r.t(t.REDEEN_AVG_PRICE),
                  e: r.t(t.REDEMPTION_QUANTITY),
                  f: r.t(t.CURRENCY),
                  g: e,
                };
              }),
            }
          : {},
        {
          d: o.scrollOptionsTabs,
          e: o.hgList && o.hgList.length,
          f: o.firstLoaded && o.errorStatus,
        },
        (o.firstLoaded && o.errorStatus, {})
      );
    },
  ],
  ["__scopeId", "data-v-c67bdaac"],
]);
wx.createComponent(a);
