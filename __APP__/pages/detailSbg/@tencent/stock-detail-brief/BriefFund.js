var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("api/index.js"),
  i = require("../../../../common/vendor.js"),
  a = require("../stock-hq-data/index.js"),
  n = {
    props: ["symbol", "skin"],
    components: {
      NoData: function () {
        return "./components/NoData.js";
      },
    },
    data: function () {
      return {
        data: null,
        firstLoaded: !1,
        infoMap: {
          establishment: "成立日期",
          type: "基金类型",
          dimensions: "最新规模",
          rate: "运作费率",
          administrator: "管理人",
          custodian: "托管人",
          index: "跟踪指数",
        },
      };
    },
    beforeDestroy: function () {
      (this.infoMap = null), (this.data = null);
    },
    computed: {
      isShow: function () {
        return (
          "wzq" === i.StockBridge.ENV ||
          "oem" === i.StockBridge.ENV ||
          "mp" === i.StockBridge.ENV
        );
      },
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
          if (t) {
            var e = (Math.round(100 * t) / 100).toFixed(2);
            return "".concat(t > 0 ? "+".concat(e) : e, "%");
          }
          return "--";
        };
      },
    },
    mounted: function () {
      this.getData();
    },
    methods: {
      getData: function () {
        return (
          (a = this),
          null,
          (n = t().mark(function a() {
            var n, o, d, r, c;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        e.getFundData(i.StockBridge, this.symbol)
                      );
                    case 3:
                      (n = t.sent) &&
                        0 == +n.code &&
                        ((this.data = n.data),
                        this.data.running_interval &&
                          ((o = this.data.running_interval),
                          (d = o.manage),
                          (r = o.service),
                          (c = o.trust),
                          (this.data.info.rate = "".concat(
                            (+d + +r + +c).toFixed(2),
                            "%"
                          ))),
                        this.firstLoaded ||
                          ((this.firstLoaded = !0), this.$emit("loaded"))),
                        (t.next = 10);
                      break;
                    case 7:
                      (t.prev = 7),
                        (t.t0 = t.catch(0)),
                        (this.firstLoaded = !0),
                        this.$emit("loaded");
                    case 10:
                    case "end":
                      return t.stop();
                  }
              },
              a,
              this,
              [[0, 7]]
            );
          })),
          new Promise(function (t, e) {
            var i = function (t) {
                try {
                  d(n.next(t));
                } catch (t) {
                  e(t);
                }
              },
              o = function (t) {
                try {
                  d(n.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              d = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(i, o);
              };
            d((n = n.apply(a, null)).next());
          })
        );
        var a, n;
      },
      canJump: function (t) {
        var e = a.utils.splitSymbol(t).market;
        return "oem" === i.StockBridge.ENV
          ? a.utils.isHSMarket(e)
          : !isNaN(+e) ||
              a.utils.isBJMarket(e) ||
              a.utils.isCSIndex(e) ||
              "ftDAX30" === t;
      },
      gotoIndex: function () {
        var t,
          e,
          n,
          o =
            null ==
            (n =
              null == (e = null == (t = this.data) ? void 0 : t.tracking_index)
                ? void 0
                : e.jump_code)
              ? void 0
              : n.replace(".", "");
        if (o) {
          var d = a.utils.splitSymbol(o),
            r = d.market,
            c = d.scode;
          if (this.canJump(o)) {
            if (
              ("wzq" === i.StockBridge.ENV &&
                i.StockBridge.routeTo({
                  name: "HqStock",
                  params: { market: r, code: c },
                }),
              "mp" === i.StockBridge.ENV)
            ) {
              var s = ["market=".concat(r), "scode=".concat(c)];
              i.StockBridge.routeTo({
                url: "/pages/quote/quote_zs?".concat(s.join("&")),
              });
            }
            "oem" === i.StockBridge.ENV &&
              i.StockBridge.routeTo({
                path: "/detail",
                query: { market: r, scode: c },
              }),
              i.StockBridge.report(
                "hq.stock_detail.changnei_index_stock_detail"
              );
          }
        }
      },
      gotoProfile: function () {
        "wzq" === i.StockBridge.ENV &&
          i.StockBridge.routeTo({
            name: "fundProfile",
            query: { symbol: this.symbol },
          }),
          "oem" === i.StockBridge.ENV &&
            i.StockBridge.routeTo({
              path: i.isBroker
                ? "/wj_hq/detail/fundprofile"
                : "/detail/fundprofile",
              query: { symbol: this.symbol },
            }),
          "mp" === i.StockBridge.ENV &&
            i.StockBridge.openExtraWebview(
              "https://wzq.tenpay.com/mp/v2/index.html#/fund/profile?symbol=".concat(
                this.symbol
              )
            ),
          i.StockBridge.report("hq.stock_detail.changnei_info_jump_to_detail");
      },
      gotoManager: function (t) {
        "wzq" === i.StockBridge.ENV &&
          i.StockBridge.routeTo({
            name: "fundManager",
            query: { symbol: this.symbol, index: t || 0 },
          }),
          "oem" === i.StockBridge.ENV &&
            i.StockBridge.routeTo({
              path: i.isBroker
                ? "/wj_hq/detail/fundmanager"
                : "/detail/fundmanager",
              query: { symbol: this.symbol, index: t || 0 },
            }),
          "mp" === i.StockBridge.ENV &&
            i.StockBridge.openExtraWebview(
              "https://wzq.tenpay.com/mp/v2/index.html#/fund/manager?symbol="
                .concat(this.symbol, "&index=")
                .concat(t || 0)
            ),
          i.StockBridge.report("hq.stock_detail.changnei_managers_details");
      },
      gotoDividendSplit: function () {
        "wzq" === i.StockBridge.ENV &&
          i.StockBridge.routeTo({
            name: "fundDividendSplit",
            query: { symbol: this.symbol },
          }),
          "oem" === i.StockBridge.ENV &&
            i.StockBridge.routeTo({
              path: i.isBroker
                ? "/wj_hq/detail/funddividend"
                : "/detail/funddividend",
              query: { symbol: this.symbol },
            }),
          "mp" === i.StockBridge.ENV &&
            i.StockBridge.openExtraWebview(
              "https://wzq.tenpay.com/mp/v2/index.html#/fund/dividendSplit?symbol=".concat(
                this.symbol
              )
            ),
          i.StockBridge.report("hq.stock_detail.changnei_fenhong_detail");
      },
    },
  };
Array || i.resolveComponent("NoData")();
var o = i._export_sfc(n, [
  [
    "render",
    function (t, e, a, n, o, d) {
      return i.e(
        { a: o.data },
        o.data
          ? i.e(
              { b: o.data.info },
              o.data.info
                ? i.e({ c: d.isShow }, (d.isShow, {}), {
                    d: i.o(function (t) {
                      return d.gotoProfile();
                    }, 1926),
                    e: i.f(o.infoMap, function (t, e, n) {
                      return i.e(
                        { a: i.t(t), b: "index" === e },
                        "index" === e
                          ? i.e(
                              { c: o.data.tracking_index },
                              o.data.tracking_index
                                ? i.e(
                                    {
                                      d: i.t(o.data.tracking_index.name),
                                      e:
                                        "black" === a.skin &&
                                        o.data.tracking_index.jump_code &&
                                        d.isShow &&
                                        d.canJump(
                                          o.data.tracking_index.jump_code
                                        ),
                                    },
                                    ("black" === a.skin &&
                                      o.data.tracking_index.jump_code &&
                                      d.isShow &&
                                      d.canJump(
                                        o.data.tracking_index.jump_code
                                      ),
                                    {}),
                                    {
                                      f:
                                        "black" !== a.skin &&
                                        o.data.tracking_index.jump_code &&
                                        d.isShow &&
                                        d.canJump(
                                          o.data.tracking_index.jump_code
                                        ),
                                    },
                                    ("black" !== a.skin &&
                                      o.data.tracking_index.jump_code &&
                                      d.isShow &&
                                      d.canJump(
                                        o.data.tracking_index.jump_code
                                      ),
                                    {})
                                  )
                                : {},
                              {
                                g: i.o(
                                  function (t) {
                                    return d.gotoIndex();
                                  },
                                  1927,
                                  e
                                ),
                              }
                            )
                          : { h: i.t(o.data.info[e] || "--") },
                        { i: e }
                      );
                    }),
                  })
                : {},
              { f: o.data.manager && o.data.manager.length > 0 },
              o.data.manager && o.data.manager.length > 0
                ? i.e({ g: d.isShow }, (d.isShow, {}), {
                    h: i.o(function (t) {
                      return d.gotoManager();
                    }, 1928),
                    i: i.f(o.data.manager, function (t, e, a) {
                      return i.e(
                        { a: "" !== t.avatar },
                        "" !== t.avatar
                          ? { b: t.avatar }
                          : { c: i.t(t.name.split("")[0]) },
                        {
                          d: i.t(t.name),
                          e: i.t(t.acc_work_time),
                          f: i.t(d.rateFilter(t.work_rate)),
                          g: i.n(
                            t.work_rate > 0
                              ? "red"
                              : t.work_rate < 0
                              ? "green"
                              : "gray"
                          ),
                          h: i.t(t.desc),
                          i: e < o.data.manager.length - 1,
                        },
                        (o.data.manager.length, {}),
                        {
                          j: e,
                          k: i.o(
                            function (t) {
                              return d.gotoManager(e);
                            },
                            1929,
                            e
                          ),
                        }
                      );
                    }),
                  })
                : {},
              {
                j:
                  o.data.dividend &&
                  o.data.dividend.dividend &&
                  o.data.dividend.dividend.length > 0,
              },
              o.data.dividend &&
                o.data.dividend.dividend &&
                o.data.dividend.dividend.length > 0
                ? i.e({ k: d.isShow }, (d.isShow, {}), {
                    l: i.o(function (t) {
                      return d.gotoDividendSplit();
                    }, 1930),
                    m: i.f(o.data.dividend.dividend, function (t, e, a) {
                      return {
                        a: i.t(d.dateFilter(t.registration_date)),
                        b: i.t((+t.money).toFixed(2)),
                        c: i.t(d.dateFilter(t.inner_payment_date)),
                        d: e,
                      };
                    }),
                  })
                : {},
              {
                n:
                  o.data.split &&
                  o.data.split.split &&
                  o.data.split.split.length > 0,
              },
              o.data.split &&
                o.data.split.split &&
                o.data.split.split.length > 0
                ? i.e({ o: d.isShow }, (d.isShow, {}), {
                    p: i.o(function (t) {
                      return d.gotoDividendSplit();
                    }, 1931),
                    q: i.f(o.data.split.split, function (t, e, a) {
                      return {
                        a: i.t(t.year),
                        b: i.t(t.ratio),
                        c: i.t(d.dateFilter(t.date)),
                        d: e,
                      };
                    }),
                  })
                : {}
            )
          : (o.firstLoaded, {}),
        { r: o.firstLoaded, s: "black" === a.skin ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-0e348ea9"],
]);
wx.createComponent(o);
