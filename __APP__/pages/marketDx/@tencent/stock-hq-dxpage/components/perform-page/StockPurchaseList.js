var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  n = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  c = function (t, e, n) {
    return e in t
      ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  u = function (t, e, i) {
    return new Promise(function (n, r) {
      var s = function (t) {
          try {
            o(i.next(t));
          } catch (t) {
            r(t);
          }
        },
        a = function (t) {
          try {
            o(i.throw(t));
          } catch (t) {
            r(t);
          }
        },
        o = function (t) {
          return t.done ? n(t.value) : Promise.resolve(t.value).then(s, a);
        };
      o((i = i.apply(t, e)).next());
    });
  },
  l = require("../../../../../../common/vendor.js"),
  h = require("../../utils/common.js"),
  p = require("../../utils/list.js");
function d(t, e, i) {
  if ("stock" === e) {
    if ("hs" === t)
      return (function (t) {
        if (t && t.data) {
          var e = t.data.summary;
          return e
            ? [
                {
                  title: "普通新股",
                  key: "normal",
                  config: ["total", "avgMaxLimit", "avgProfit"],
                  value: e.hushen,
                },
                {
                  title: "创业板新股",
                  key: "chuangyeban",
                  config: ["total", "pofaNum", "avgFirstZdf"],
                  value: e.cyb,
                },
                {
                  title: "科创板新股",
                  key: "kechuangban",
                  config: ["total", "pofaNum", "avgFirstZdf"],
                  value: e.kcb,
                },
              ]
            : [];
        }
      })(i);
    if ("hk" === t)
      return (function (t) {
        if (t.data && t.data.data) {
          var e = t.data.summary;
          return e
            ? [
                {
                  title: "",
                  config: ["total", "pofa", "avgFirstZdf"],
                  value: e,
                },
              ]
            : [];
        }
      })(i);
    if ("us" === t)
      return (function (t) {
        if (t.data && t.data.data) {
          var e = t.data.summary;
          return e
            ? [
                {
                  title: "",
                  config: ["total", "pofa", "avgFirstZdf"],
                  value: e,
                },
              ]
            : [];
        }
      })(i);
  } else if ("bond" === e)
    return (function (t) {
      if (t && t.data) {
        var e = t.data.statistic;
        return e
          ? [
              {
                title: "",
                config: ["sssl", "pfsl", "pfl"],
                value: { sssl: e.sssl, pfsl: e.pfsl, pfl: e.pfl },
              },
              {
                title: "",
                config: ["dqzdsy", "dqzdks", "dzhljsy"],
                value: {
                  dqzdsy: e.dqzdsy,
                  dqzdks: e.dqzdks,
                  dzhljsy: e.dzhljsy,
                },
              },
            ]
          : [];
      }
    })(i);
}
var f = l.getApiFullUrl("ifzqfinance", l.API_HOST_ENUM.PROXY_QQ),
  m = l.getApiFullUrl("ifzqgtimg", l.API_HOST_ENUM.PROXY_QQ),
  g = {
    name: "purchaseList",
    components: {
      ScrollList: function () {
        return "../common/scroll-list/index.js";
      },
      StockPurchaseHeader: function () {
        return "./StockPurchaseHeader.js";
      },
    },
    inject: { hqBridge: {}, isZxgMiniApp: { default: !1 } },
    props: ["querymarket", "querytype", "period", "showDailyAnimation"],
    data: function () {
      return {
        itemData: null,
        floatContainerHidden: !1,
        isScrolling: !1,
        contentWidth: 0,
        isFirst: !0,
        requestOrder: "ssrq",
        requestDesc: "desc",
        pageNumber: 1,
        marketConfigList: null,
        staticConfigList: null,
        headerDesc: null,
        purchaseDailyAnination: !1,
        newMarket: null,
        newType: null,
        newStock: null,
        newBond: null,
        stockStaticConfig: null,
        bondStaticConfig: null,
        env: this.hqBridge.ENV,
        loadTime: 0,
        pullingUpText: "加载中...",
      };
    },
    computed: {
      market: function () {
        return this.newMarket ? this.newMarket : this.querymarket;
      },
      type: function () {
        return this.newType ? this.newType : this.querytype;
      },
      columnConfig: function () {
        if ("hs" === this.market) {
          if ("stock" === this.type) return p.newPerformStock;
          if ("bond" === this.type) return p.newPerformBond;
        }
        return "hk" === this.market
          ? p.newHKPerformStock
          : "us" === this.market
          ? p.newUSPerformStock
          : p.newPerformStock;
      },
    },
    created: function () {
      this.loadData(!0);
    },
    methods: {
      updateConfig: function (t, e) {
        (this.newMarket = t),
          (this.newType = e),
          (this.requestOrder = "ssrq"),
          (this.requestDesc = "desc");
      },
      onPullingUp: function () {
        "没有更多数据" !== this.pullingUpText &&
          ((this.pullingUpText = "加载中..."), this.loadData(!1));
      },
      onPullingDown: function () {
        this.$emit("refresh"), this.loadData(!0);
      },
      menuListClick: function (t) {
        var e = t || {},
          i = e.rank,
          n = e.sortBy;
        (this.requestOrder = i),
          (this.requestDesc = n),
          this.loadData(!0),
          "mini" === this.env &&
            this.hqBridge.report(
              "hq.listing_performance.".concat(this.requestOrder, "_click")
            );
      },
      loadData: function (t) {
        var i = this;
        "hs" === this.market &&
          "stock" === this.type &&
          this.loadHSStockRequest(t)
            .then(function (e) {
              var n = e.data,
                r = n.data,
                s = n.summary;
              if (t)
                (i.staticConfigList = d(i.market, i.type, e)),
                  (i.itemData = r),
                  (i.headerDesc = null);
              else if (
                ((i.itemData = i.itemData.concat(r)), !r || 0 === r.length)
              )
                return (
                  (i.pullingUpText = "没有更多数据"),
                  void i.$emit("finishPullDown")
                );
              "mini" === i.env &&
                ((i.stockStaticConfig = i.staticConfigList),
                (i.newStock = i.itemData)),
                i.$emit("finishPullDown"),
                (i.pullingUpText =
                  s.total === i.itemData.length ? "没有更多数据" : "加载中...");
            })
            .catch(function (t) {
              i.$emit("finishPullDown"), (i.pullingUpText = "没有更多数据");
            }),
          "hs" === this.market &&
            "bond" === this.type &&
            this.loadHSBondRequest(t)
              .then(function (e) {
                var n = e.data.data;
                if (
                  (t
                    ? ((i.staticConfigList = d(i.market, i.type, e)),
                      (i.itemData = n),
                      (i.headerDesc =
                        "注：收益数据均按照全部申购，且在上市首日集合竞价卖出计算"))
                    : (i.itemData = i.itemData.concat(n)),
                  "mini" === i.env &&
                    ((i.bondStaticConfig = i.staticConfigList),
                    (i.newBond = i.itemData)),
                  !n || 0 === n.length || n.length < 20)
                )
                  return (
                    (i.pullingUpText = "没有更多数据"),
                    void i.$emit("finishPullDown")
                  );
                i.$emit("finishPullDown"), (i.pullingUpText = "加载中...");
              })
              .catch(function (t) {
                i.$emit("finishPullDown"), (i.pullingUpText = "没有更多数据");
              }),
          "hk" === this.market &&
            "stock" === this.type &&
            this.loadHKStockRequest(t)
              .then(function (u) {
                var l = u.data,
                  h = l.data,
                  p = l.summary;
                if (
                  (t
                    ? ((i.staticConfigList = d(i.market, i.type, u)),
                      (i.itemData = h),
                      (i.headerDesc = null))
                    : (i.itemData = i.itemData.concat(h)),
                  (i.itemData = i.itemData.map(function (t) {
                    return (
                      (i = (function (t, i) {
                        for (var n in i || (i = {}))
                          a.call(i, n) && c(t, n, i[n]);
                        if (s) {
                          var r,
                            u = e(s(i));
                          try {
                            for (u.s(); !(r = u.n()).done; ) {
                              n = r.value;
                              o.call(i, n) && c(t, n, i[n]);
                            }
                          } catch (t) {
                            u.e(t);
                          } finally {
                            u.f();
                          }
                        }
                        return t;
                      })({}, t)),
                      (u = {
                        code: ""
                          .concat("hk" !== t.code.slice(0, 2) ? "hk" : "")
                          .concat(t.code),
                        ssrq: t.ssrq && t.ssrq.slice(0, 10),
                      }),
                      n(i, r(u))
                    );
                    var i, u;
                  })),
                  !h || 0 === h.length)
                )
                  return (
                    (i.pullingUpText = "没有更多数据"),
                    void i.$emit("finishPullDown")
                  );
                i.$emit("finishPullDown"),
                  (i.pullingUpText =
                    p.total === i.itemData.length
                      ? "没有更多数据"
                      : "加载中...");
              })
              .catch(function (t) {
                i.$emit("finishPullDown"), (i.pullingUpText = "没有更多数据");
              }),
          "us" === this.market &&
            "stock" === this.type &&
            this.loadUSStockRequest(t)
              .then(function (e) {
                var n = e.data,
                  r = n.data,
                  s = n.summary;
                if (
                  (t
                    ? ((i.staticConfigList = d(i.market, i.type, e)),
                      (i.itemData = r),
                      (i.headerDesc = null))
                    : (i.itemData = i.itemData.concat(r)),
                  !r || 0 === r.length)
                )
                  return (
                    (i.pullingUpText = "没有更多数据"),
                    void i.$emit("finishPullDown")
                  );
                i.$emit("finishPullDown"),
                  (i.pullingUpText =
                    s.total === i.itemData.length
                      ? "没有更多数据"
                      : "加载中...");
              })
              .catch(function (t) {
                i.$emit("finishPullDown"), (i.pullingUpText = "没有更多数据");
              }),
          t &&
            this.$nextTick(function () {
              var t;
              null == (t = i.$refs.scrollView) || t.openPullUp(),
                i.showDailyAnimation &&
                  !i.purchaseDailyAnination &&
                  (setTimeout(function () {
                    i.purchaseDailyAnination = !0;
                  }, 1e3),
                  setTimeout(function () {
                    i.purchaseDailyAnination = !1;
                  }, 2e3)),
                i.$emit("didSHowDailyAnination");
            });
      },
      tabActivated: function () {
        (this.staticConfigList =
          "stock" === this.type
            ? this.stockStaticConfig
            : this.bondStaticConfig),
          (this.itemData =
            "stock" === this.type ? this.newStock : this.newBond);
      },
      loadHSStockRequest: function (e) {
        return u(
          this,
          null,
          t().mark(function i() {
            var n;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = { limit: 20, market: "hs", app: "wzq" }),
                        t.abrupt(
                          "return",
                          (e
                            ? ((this.pageNumber = 1),
                              (n.page = 1),
                              (n.order = this.requestOrder),
                              (n.desc = this.requestDesc))
                            : ((this.pageNumber += 1),
                              (n.page = this.pageNumber),
                              (n.order = this.requestOrder),
                              (n.desc = this.requestDesc)),
                          (n.period = this.period),
                          (function (t, e) {
                            var i = "".concat(
                              f,
                              "/appstock/app/subNewStock/periodRank"
                            );
                            return t.request(i, "GET", e);
                          })(this.hqBridge, n))
                        )
                      );
                    case 2:
                    case "end":
                      return t.stop();
                  }
              },
              i,
              this
            );
          })
        );
      },
      loadHSBondRequest: function (e) {
        return u(
          this,
          null,
          t().mark(function i() {
            var n;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = { limit: 20, market: "hs", app: "wzq" }),
                        t.abrupt(
                          "return",
                          (e
                            ? ((this.pageNumber = 1),
                              (n.page = 1),
                              (n.sort = this.requestOrder),
                              (n.order = this.requestDesc))
                            : ((this.pageNumber += 1),
                              (n.page = this.pageNumber),
                              (n.sort = this.requestOrder),
                              (n.order = this.requestDesc)),
                          (n.type =
                            90 === this.period
                              ? 1
                              : 180 === this.period
                              ? 2
                              : 3),
                          (function (t, e) {
                            var i = "".concat(
                              f,
                              "/stock/notice/NewConvertibleBond/getPerformanceList"
                            );
                            return t.request(i, "GET", e);
                          })(this.hqBridge, n))
                        )
                      );
                    case 2:
                    case "end":
                      return t.stop();
                  }
              },
              i,
              this
            );
          })
        );
      },
      loadHKStockRequest: function (e) {
        return u(
          this,
          null,
          t().mark(function i() {
            var n;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = { limit: 20, market: "hk" }),
                        t.abrupt(
                          "return",
                          (e
                            ? ((this.pageNumber = 1),
                              (n.page = 1),
                              (n.order = this.requestOrder),
                              (n.desc = this.requestDesc))
                            : ((this.pageNumber += 1),
                              (n.page = this.pageNumber),
                              (n.order = this.requestOrder),
                              (n.desc = this.requestDesc)),
                          (n.period = this.period),
                          (function (t, e) {
                            var i = "".concat(m, "/stock/notice/ipo/getHkNew2");
                            return t.request(i, "GET", e);
                          })(this.hqBridge, n))
                        )
                      );
                    case 2:
                    case "end":
                      return t.stop();
                  }
              },
              i,
              this
            );
          })
        );
      },
      loadUSStockRequest: function (e) {
        return u(
          this,
          null,
          t().mark(function i() {
            var n;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = { limit: 20, market: "us" }),
                        t.abrupt(
                          "return",
                          (e
                            ? ((this.pageNumber = 1),
                              (n.page = 1),
                              (n.order = this.requestOrder),
                              (n.desc = this.requestDesc))
                            : ((this.pageNumber += 1),
                              (n.page = this.pageNumber),
                              (n.order = this.requestOrder),
                              (n.desc = this.requestDesc)),
                          (n.period = this.period),
                          (function (t, e) {
                            var i = "".concat(
                              m,
                              "/appstock/us/ipo/getNewOrder2"
                            );
                            return t.request(i, "GET", e);
                          })(this.hqBridge, n))
                        )
                      );
                    case 2:
                    case "end":
                      return t.stop();
                  }
              },
              i,
              this
            );
          })
        );
      },
      navigateToStockDetail: function (t) {
        var e,
          i,
          n = t && t.item;
        switch (this.market) {
          case "hs":
            if ("stock" === this.type || "bond" === this.type) {
              var r = n.code && n.code.slice(0, 2);
              "sh" === r ? (e = "1") : "sz" === r && (e = "0"),
                (i = n.code && n.code.slice(2));
            }
            break;
          case "hk":
            (e = "2"), (i = n.code && n.code.slice(2));
            break;
          case "us":
            (e = "3"), (i = n.code && n.code.slice(2));
        }
        this.hqBridge.report(
          "hq.xingurili.goto_shengouxiangqing_"
            .concat(this.market, "_")
            .concat(this.type)
        ),
          this.isZxgMiniApp
            ? h.goToMiniAppQuote(e, i)
            : ("wzq" === this.env &&
                this.hqBridge.routeTo({
                  path: "/hq/stock/".concat(e, "/").concat(i),
                }),
              "mp" === this.env &&
                this.hqBridge.routeTo({
                  path: "/pages/quote/quote",
                  query: { market: e, scode: i },
                }),
              "oem" === this.env &&
                this.hqBridge.routeTo({
                  path: "/detail",
                  query: { market: e, scode: i, name: n.name },
                }),
              "mini" === this.env &&
                this.hqBridge.routeTo({
                  path: "/detail",
                  query: { type: e, scode: i },
                }));
      },
      itemStockCode: function (t) {
        var e,
          i,
          n,
          r,
          s = this.itemData[t];
        switch (this.market) {
          case "hs":
            "stock" === this.type
              ? (r = null == (e = s.code) ? void 0 : e.slice(2))
              : "bond" === this.type &&
                (r = null == (i = s.symbol) ? void 0 : i.slice(2));
            break;
          case "hk":
            r = s.code;
            break;
          case "us":
            r = null == (n = s.code) ? void 0 : n.slice(2);
        }
        return r;
      },
      showTips: function (t) {
        this.$emit("showTips", t);
      },
    },
    activated: function () {},
  };
Array ||
  (
    l.resolveComponent("stock-purchase-header") +
    l.resolveComponent("scroll-list")
  )();
var k = l._export_sfc(g, [
  [
    "render",
    function (t, e, i, n, r, s) {
      return l.e(
        { a: r.staticConfigList },
        r.staticConfigList
          ? {
              b: l.o(s.showTips, 2164),
              c: l.n("".concat(s.market)),
              d: l.n("".concat(s.type)),
              e: l.p({
                desc: r.headerDesc,
                staticConfigList: r.staticConfigList,
                market: s.market,
                type: s.type,
              }),
            }
          : {},
        {
          f: l.sr("scrollList", "dd3c25fb-1"),
          g: l.o(s.menuListClick, 2165),
          h: l.o(s.navigateToStockDetail, 2166),
          i: l.p({
            rows: r.itemData,
            columnConfig: s.columnConfig,
            firstSort: "ssrq",
            widType: s.market,
          }),
          j: r.pullingUpText && "没有更多数据" !== r.pullingUpText,
        },
        r.pullingUpText && "没有更多数据" !== r.pullingUpText
          ? { k: l.t(r.pullingUpText) }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-dd3c25fb"],
]);
wx.createComponent(k);
