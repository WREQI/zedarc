var t = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = require("../../../../../../../@babel/runtime/helpers/slicedToArray"),
  n = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = Object.defineProperty,
  s = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  p = function (t, e, n) {
    return e in t
      ? o(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  l = function (t, e, n) {
    return new Promise(function (o, s) {
      var a = function (t) {
          try {
            c(n.next(t));
          } catch (t) {
            s(t);
          }
        },
        r = function (t) {
          try {
            c(n.throw(t));
          } catch (t) {
            s(t);
          }
        },
        c = function (t) {
          return t.done ? o(t.value) : Promise.resolve(t.value).then(a, r);
        };
      c((n = n.apply(t, e)).next());
    });
  },
  d = require("../../../../../../../common/vendor.js"),
  u = require("../../../../stock-news-core/utils/request/index.js"),
  h = require("../../../../stock-news-core/utils/tools.js");
require("../../../../stock-news-core/utils/shy/index.js"),
  require("../../../../../js-cookie/src/js.cookie.js");
var f = require("../../../../stock-news-core/config/wuji.js"),
  k = require("../../../../stock-news-core/utils/report.js"),
  g = {
    name: "PlateTemplate",
    options: { styleIsolation: "shared" },
    components: {
      AddFav: function () {
        return "./addFav.js";
      },
    },
    props: {
      plateId: { type: String, default: "" },
      wzqConfig: {
        type: Object,
        default: function () {
          return {
            Helper: { navigateTo: function () {} },
            stat: { click: function () {} },
            openStock: function () {},
          };
        },
      },
      stockInitailAdded: { type: Number, default: 0 },
      name: { type: String, default: "" },
      dataWinType: { type: String, default: "" },
    },
    data: function () {
      return {
        isAPP: !1,
        isWZQ: !1,
        isMP: !0,
        stocksList: [],
        plateInfo: {},
        redUp: !0,
        reviewImage:
          "https://wzq.gtimg.com/resources/shy/news/plate/review.png",
        reviewBlackImage:
          "https://wzq.gtimg.com/resources/shy/news/plate/review_black.png",
        intersectionObserver: null,
        exposeReported: !1,
        transPlateId: this.plateId,
        plateSortType: 0,
        stockCode: "",
        plateMarket: "",
        stocksStr: "",
        stocksAddStatus: {},
      };
    },
    beforeDestroy: function () {
      this.intersectionObserver && this.intersectionObserver.disconnect();
    },
    mounted: function () {
      if (this.plateId.includes("-")) {
        var t = this.plateId.split("-");
        (this.transPlateId = t[0]), (this.plateSortType = t[1]);
        var e = this.initPlateInfo(),
          n = e.stockCode,
          o = e.plateMarket;
        (this.plateMarket = o), (this.stockCode = n);
      }
      this.transPlateId.startsWith("ph") ||
        this.transPlateId.startsWith("pu") ||
        this.getPlateInfo();
    },
    methods: {
      checkExpose: function () {},
      initPlateInfo: function () {
        var t = this.transPlateId,
          e = "200",
          n = "pt",
          o = "hs";
        return (
          this.transPlateId.startsWith("ph") &&
            ((e = "400"), (n = "ph"), (o = "hk"), (t = t.replace("ph", ""))),
          this.transPlateId.startsWith("pu") &&
            ((e = "601"), (n = "pu"), (o = "us"), (t = t.replace("pu", ""))),
          { stockCode: t, appPlate: e, plateMarket: n, market: o }
        );
      },
      goToPlate: function () {
        var t = this.initPlateInfo(),
          e = t.stockCode,
          n = t.appPlate;
        t.plateMarket;
        "hs" === t.market
          ? d.wx$1.navigateTo({
              url: "/pages/quote/quote?market=p&scode=".concat(e),
            })
          : d.wx$1.navigateTo({
              url: "/pages/hq/detail/main?plate=".concat(n, "&code=").concat(e),
            }),
          k.report("news.newsdetail.plate_click", { newsId: this.newsId });
      },
      getStyle: function (t) {
        return t > 0
          ? this.redUp
            ? "up"
            : "down"
          : t < 0
          ? this.redUp
            ? "down"
            : "up"
          : "flat";
      },
      formatNum: function (t) {
        return isNaN(t)
          ? isNaN(t) || (t / this.unit).toFixed(1)
          : Math.abs(t) > 1e8
          ? "".concat((t / 1e8).toFixed(1), "亿")
          : Math.abs(t) > 1e4
          ? "".concat((t / 1e4).toFixed(1), "万")
          : (t / 1).toFixed(1);
      },
      getPlateInfo: function () {
        return l(
          this,
          null,
          n().mark(function t() {
            var e, o, s;
            return n().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e = {
                          r: Math.random(),
                          q: "pt".concat(this.transPlateId),
                          fmt: "json",
                        }),
                        (o = null),
                        (t.prev = 2),
                        (t.next = 5),
                        u.request("https://qt.gtimg.cn/utf8", e, {
                          method: "get",
                          isShowToast: !1,
                        })
                      );
                    case 5:
                      (o = t.sent), (t.next = 10);
                      break;
                    case 8:
                      (t.prev = 8), (t.t0 = t.catch(2));
                    case 10:
                      if (!o || !o["pt".concat(this.transPlateId)]) {
                        t.next = 16;
                        break;
                      }
                      return (
                        (s = o["pt".concat(this.transPlateId)]),
                        (this.plateInfo = {
                          stockName: s[1] || "--",
                          stockCode: s[2] || "--",
                          price: s[3] || "--",
                          change: s[31]
                            ? ""
                                .concat(+s[31] >= 0 ? "+" : "")
                                .concat((+s[31]).toFixed(2))
                            : "--",
                          percent: s[32]
                            ? ""
                                .concat(+s[32] >= 0 ? "+" : "")
                                .concat((+s[32]).toFixed(2))
                            : "--",
                          color: this.getStyle(s[31] || 0) || "",
                        }),
                        this.plateSortType ||
                          (this.plateSortType = +s[31] >= 0 ? 1 : 2),
                        (t.next = 16),
                        this.getPlateStocks()
                      );
                    case 16:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[2, 8]]
            );
          })
        );
      },
      getPlateStocks: function () {
        return l(
          this,
          null,
          n().mark(function o() {
            var l,
              d,
              f,
              g,
              m = this;
            return n().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        ((l = {
                          exchange: 12,
                          need_brief: 1,
                          oem_source: "",
                          plate_code: this.transPlateId,
                          plate_level: 2,
                          sort_field: "change_percent",
                          sort_type: this.plateSortType,
                          source: "wzq",
                          stocks_type: 3,
                          time: new Date().getTime(),
                          user_type: 5,
                        }).sign = h.getXGSign(l)),
                        (d = null),
                        (n.prev = 3),
                        (n.next = 6),
                        u.request(
                          "https://bisheng.tenpay.com/fcgi-bin/xg_plate_stocks.fcgi?fmt=json",
                          l,
                          { method: "post", isShowToast: !1, dropCookie: !0 }
                        )
                      );
                    case 6:
                      (d = n.sent), (n.next = 11);
                      break;
                    case 9:
                      (n.prev = 9), (n.t0 = n.catch(3));
                    case 11:
                      d &&
                        "0" === d.retcode &&
                        d.stocks &&
                        d.stocks.stocks_list &&
                        ((f = d.stocks.stocks_list || []),
                        (g = []),
                        (this.stocksList = f.slice(0, 5).map(function (n) {
                          var o = n.stock_code,
                            l = o.split("."),
                            d = e(l, 2),
                            u = d[0],
                            h = d[1],
                            f = h.toLowerCase();
                          g.push(f + u);
                          var k,
                            w,
                            y = h.toUpperCase();
                          return (
                            "sh" === h.toLowerCase() &&
                              o &&
                              /^688/.test(o) &&
                              (y = "KE"),
                            "sz" === h.toLowerCase() &&
                              o &&
                              /^30/.test(o) &&
                              (y = "CHUANG"),
                            (k = (function (e, n) {
                              for (var o in n || (n = {}))
                                c.call(n, o) && p(e, o, n[o]);
                              if (r) {
                                var s,
                                  a = t(r(n));
                                try {
                                  for (a.s(); !(s = a.n()).done; ) {
                                    o = s.value;
                                    i.call(n, o) && p(e, o, n[o]);
                                  }
                                } catch (t) {
                                  a.e(t);
                                } finally {
                                  a.f();
                                }
                              }
                              return e;
                            })({}, n)),
                            (w = {
                              netText: m.formatNum(n.main_net_inflow),
                              chgText: ""
                                .concat(n.change_percent >= 0 ? "+" : "")
                                .concat(n.change_percent.toFixed(2), "%"),
                              stColor: m.getStyle(n.price_change),
                              netColor: m.getStyle(n.main_net_inflow),
                              chgColor: m.getStyle(n.change_percent),
                              class: "stock-icon-".concat(y),
                              codeStr: u,
                              market: f,
                              stockId: f + u,
                            }),
                            s(k, a(w))
                          );
                        })),
                        (this.stocksStr = g.join(",")),
                        this.addFavGrayShow(),
                        this.$nextTick(function () {
                          m.stocksList.length &&
                            (k.report("news.newsdetail.plate_page", {
                              newsid: m.newsId,
                            }),
                            m.checkExpose());
                        }));
                    case 12:
                    case "end":
                      return n.stop();
                  }
              },
              o,
              this,
              [[3, 9]]
            );
          })
        );
      },
      addFavGrayShow: function () {
        var t = this;
        f.getConfigGray({
          appid: "news",
          schemaid: "abtesting",
          rowid: "6380708f83fd8768c2440b08",
          key: "addFav",
        })
          .then(function (e) {
            e && t.getStocksAddStatus(t.stocksStr);
          })
          .catch(function (t) {
            k.aegisReportError(t);
          });
      },
      getStocksAddStatus: function (t) {
        return l(
          this,
          null,
          n().mark(function e() {
            var o, s, a, r, c, i, p;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = this.getParams()),
                        (s = o.app),
                        (a = o.openId),
                        (r = o.fsKey),
                        (c = o.check),
                        (i =
                          "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/stockAdd?stocks="
                            .concat(t, "&app=")
                            .concat(s, "&appid=wx9cf8c670ebd68ce4&check=")
                            .concat(c, "&openid=")
                            .concat(a, "&fskey=")
                            .concat(r)),
                        (e.prev = 1),
                        (e.next = 4),
                        u.request(i, {}, { method: "get", isShowToast: !1 })
                      );
                    case 4:
                      (p = e.sent) &&
                        0 === p.code &&
                        p.data &&
                        (this.stocksAddStatus = p.data),
                        (e.next = 10);
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(1));
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[1, 8]]
            );
          })
        );
      },
      getParams: function () {
        var t, e, n;
        return (
          d.wx$1 &&
            ((t = "wzq"),
            (e = d.wx$1.getStorageSync("_qluin")),
            (n = d.wx$1.getStorageSync("_qlskey"))),
          { app: t, openId: e, fsKey: n, check: 11 }
        );
      },
      handleStockReport: function (t) {
        this.handleReport("platestock_".concat(t));
      },
      handleReport: function (t, e) {
        k.report("news.mini.detail.".concat(t), e);
      },
    },
  };
Array || d.resolveComponent("AddFav")();
var m = d._export_sfc(g, [
  [
    "render",
    function (t, e, n, o, s, a) {
      return d.e(
        { a: s.stocksList.length },
        s.stocksList.length
          ? d.e(
              { b: s.plateInfo && s.plateInfo.stockName },
              s.plateInfo && s.plateInfo.stockName
                ? {
                    c: d.t(s.plateInfo.stockName),
                    d: d.t(s.plateInfo.stockCode),
                    e: d.t(s.plateInfo.price),
                    f: d.t(s.plateInfo.change),
                    g: d.t(s.plateInfo.percent),
                    h: d.n(s.plateInfo.color),
                  }
                : {},
              {
                i: d.f(s.stocksList, function (t, e, n) {
                  return d.e(
                    {
                      a: d.t(t.stock_name),
                      b: d.n(t.class),
                      c: d.t(t.codeStr),
                      d: d.t(t.price),
                      e: d.t(t.netText),
                      f: d.n(t.netColor),
                      g: d.t(t.chgText),
                      h: d.n(t.chgColor),
                    },
                    s.isAPP || s.isWZQ || s.isMP
                      ? {
                          i: d.o(a.handleStockReport, 5453),
                          j: "1566be0d-0-" + n,
                          k: d.p({
                            hideText: !0,
                            market: t.market,
                            scode: t.codeStr,
                            stockInitailAdded: s.stocksAddStatus[t.stockId],
                          }),
                        }
                      : {}
                  );
                }),
                j: s.isAPP || s.isWZQ || s.isMP,
                k: d.n(s.isMP ? "mp-table" : ""),
                l: s.reviewImage,
                m: s.reviewBlackImage,
                n: !s.isMP,
              },
              s.isMP
                ? {}
                : {
                    o: d.o(a.handleReport, 5454),
                    p: d.p({
                      market: s.plateMarket,
                      scode: s.stockCode,
                      type: "9",
                      stockInitailAdded: n.stockInitailAdded,
                    }),
                  },
              {
                q: d.o(function () {
                  return a.goToPlate && a.goToPlate.apply(a, arguments);
                }, 5455),
                r: n.name,
                s: n.dataWinType,
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-1566be0d"],
]);
wx.createComponent(m);
