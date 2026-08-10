var e = require("../../../../../@babel/runtime/helpers/slicedToArray");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t,
  i,
  n = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = Object.defineProperty,
  a = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  d = function (e, t, i) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[t] = i);
  },
  p = require("../../../../../common/vendor.js"),
  h = require("../../../@ungap/url-search-params/esm/index.js"),
  m = require("../../../vue-observe-visibility/dist/vue-observe-visibility.esm.js"),
  f = require("../utils/report.js"),
  g = require("../utils/newsParser.js"),
  b = require("../utils/mpBrow.js"),
  _ = require("../utils/request/index.js"),
  v = {
    0: "sz",
    1: "sh",
    2: "hk",
    3: "us",
    fu: "fu",
    bj: "bj",
    fx: "fx",
    p: "p",
  },
  k = {
    name: "ViewportModule",
    options: { styleIsolation: "shared" },
    directives: { "observe-visibility": m.ObserveVisibility },
    components: {
      Module: function () {
        return "../../../../stock-widget/@tencent/stock-widget/Module.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLXdpZGdldC9Nb2R1bGUudnVl;
          }
        );
      },
      ModuleHel: function () {
        return (
          (e = exports),
          null,
          (t = o().mark(function e() {
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                  case "end":
                    return e.stop();
                }
            }, e);
          })),
          new Promise(function (i, n) {
            var o = function (e) {
                try {
                  a(t.next(e));
                } catch (e) {
                  n(e);
                }
              },
              r = function (e) {
                try {
                  a(t.throw(e));
                } catch (e) {
                  n(e);
                }
              },
              a = function (e) {
                return e.done
                  ? i(e.value)
                  : Promise.resolve(e.value).then(o, r);
              };
            a((t = t.apply(e, null)).next());
          })
        );
        var e, t;
      },
    },
    provide: function () {
      return {
        helper: {
          request: _.request,
          env: {
            __WZQ__: !1,
            __MP__: !0,
            __APP__: !1,
            IS_WZQ_XCX: !1,
            __WZQMP__: !1,
          },
          wx: this.getWxRef(),
        },
      };
    },
    props: {
      item: {
        type: Object,
        default: function () {
          return {};
        },
      },
      clickable: {
        type: Boolean,
        default: function () {
          return !0;
        },
      },
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
      reportPrefix: { type: String, require: !0 },
      reportPrefixWZQ: { type: String, require: !0 },
      reportRrefixMP: { type: String, require: !0 },
      newsId: {
        type: String,
        default: function () {
          return "";
        },
      },
      pageType: { type: String, default: "newsDetail" },
      stockInitailAdded: { type: Number, defalt: 0 },
      theme: { type: String, default: "blue" },
      accountOpenFlag: {
        type: Boolean,
        default: function () {
          return !1;
        },
      },
      stocksAddStatusFinish: { type: Boolean, default: !1 },
      showNationDebtHeader: { type: Boolean, default: !0 },
      showNationDebtBorder: { type: Boolean, default: !0 },
      showNationDebtExpandBtn: { type: Boolean, default: !1 },
      nationDebtStatData: { type: String, default: "" },
      publishTime: { type: Number, default: 0 },
    },
    data: function () {
      return {
        market: "",
        scode: "",
        transPlateId: "",
        plateSortType: 0,
        viewPortType: "",
        isVisibleFinish: !1,
        isMP: !0,
        isWZQinMP: !1,
        userinfo: {},
      };
    },
    computed: {
      reportPageName: function () {
        return this.reportRrefixMP || "news.mini.detail";
      },
      flag: function () {
        var e,
          t = this.item;
        if (t && t.moduleInfo) {
          var i = t.moduleInfo[2];
          if (((e = !0), t.moduleInfo.length <= 3)) {
            var n = g.MODULE_TYPE_ENUM;
            e =
              -1 ===
              [
                n.INDUSTRY_RANK,
                n.FUND_FLOW_NORTH_MINS,
                n.FUND_FLOW_NORTH_KLINE,
                n.FUND_FLOW_SOUTH_MINS,
                n.FUND_FLOW_SOUTH_KLINE,
                n.MARKET_OVERVIEW_HS,
              ].indexOf(i);
          }
        }
        return e;
      },
      showAddFav: function () {
        var e = this.item;
        if ("fx" === this.market) return !1;
        var t = e && e.moduleInfo && e.moduleInfo[2];
        if (t) {
          var i = g.MODULE_TYPE_ENUM;
          return -1 !== [i.MINS_CHART, i.KLINE_CHART, i.PLATE_TABLE].indexOf(t);
        }
        return !1;
      },
      isMorningReport: function () {
        return (
          !(!this.$route || !this.$route.query) &&
          "morningreport" === this.$route.query.subtype
        );
      },
    },
    watch: {
      stocksAddStatusFinish: {
        immediate: !0,
        handler: function (e) {
          e && this.checkBrowReport();
        },
      },
    },
    created: function () {
      this.init();
    },
    mounted: function () {
      this.mpObserveVisibility("#mpMobule", this.visibilityChanged);
    },
    beforeDestroy: function () {
      this.mpDisobserveVisibility();
    },
    methods:
      ((t = (function (e, t) {
        for (var i in t || (t = {})) c.call(t, i) && d(e, i, t[i]);
        if (u) {
          var o,
            r = n(u(t));
          try {
            for (r.s(); !(o = r.n()).done; ) {
              i = o.value;
              l.call(t, i) && d(e, i, t[i]);
            }
          } catch (e) {
            r.e(e);
          } finally {
            r.f();
          }
        }
        return e;
      })({}, b.mutations)),
      (i = {
        getWxRef: function () {
          try {
            return p.wx$1;
          } catch (e) {}
          return {};
        },
        init: function () {
          var t = this.item,
            i = t && t.moduleInfo && t.moduleInfo[3];
          if (i) {
            var n = t.moduleInfo[2];
            this.viewPortType = n;
            var o = new h.URLSearchParams(i);
            if (
              (n === g.MODULE_TYPE_ENUM.MINS_CHART ||
                n === g.MODULE_TYPE_ENUM.KLINE_CHART) &&
              ((this.market = v[o.get("market")]),
              (this.scode = o.get("scode")),
              "p" === o.get("market") || "pt" === o.get("market"))
            ) {
              var r = this.getPlateInfo(o.get("scode")),
                a = r.stockCode,
                s = r.plateMarket;
              (this.market = s), (this.scode = a);
            }
            if (n === g.MODULE_TYPE_ENUM.PLATE_TABLE) {
              var u = o.get("plateId"),
                c = u,
                l = 0;
              if (u.includes("-")) {
                var d = u.split("-"),
                  p = e(d, 2);
                (c = p[0]), (l = p[1]);
              }
              (this.transPlateId = c), (this.plateSortType = l);
              var m = this.getPlateInfo(c),
                f = m.stockCode,
                b = m.plateMarket;
              (this.market = b), (this.scode = f);
            }
          }
        },
        getPlateInfo: function (e) {
          var t = e.replace("pt", ""),
            i = "200",
            n = "pt",
            o = "hs";
          return (
            e.startsWith("ph") &&
              ((i = "400"), (n = "ph"), (o = "hk"), (t = t.replace("ph", ""))),
            e.startsWith("pu") &&
              ((i = "601"), (n = "pu"), (o = "us"), (t = t.replace("pu", ""))),
            { stockCode: t, appPlate: i, plateMarket: n, market: o }
          );
        },
        getVisibleSetting: function (e) {
          var t = this;
          return {
            callback: function (i, n) {
              return t.visibilityChanged(i, n, e);
            },
            once: !0,
            intersection: { threshold: 0.5 },
          };
        },
        checkBrowReport: function () {
          if (this.item && this.item.moduleInfo) {
            this.market, this.scode;
            var e = this.item.moduleInfo;
            if (!e) return;
            e[2];
          }
        },
        visibilityChanged: function (e, t, i) {
          e && ((this.isVisibleFinish = !0), this.checkBrowReport());
        },
        reportChannelId: function () {
          return this.pageType, this.pageType, "";
        },
        goModule: function (t) {
          var i;
          if (t && t.moduleInfo) {
            var n,
              o,
              r = t.moduleInfo[2],
              a = this.market,
              s = this.scode,
              u = this.transPlateId,
              c = this.plateSortType,
              l = s || "";
            switch ((l.startsWith(".") && (l = l.substring(1)), r)) {
              case g.MODULE_TYPE_ENUM.MINS_CHART:
              case g.MODULE_TYPE_ENUM.KLINE_CHART:
                this.market,
                  this.scode,
                  this.goToStock({
                    market: a,
                    stockId: a + s,
                    stockCode: l,
                    name: "",
                  });
                break;
              case g.MODULE_TYPE_ENUM.PLATE_TABLE:
                this.transPlateId,
                  this.goToPlate({
                    transPlateId: u,
                    plateSortType: c,
                    name: "",
                  });
                break;
              case g.MODULE_TYPE_ENUM.INDUSTRY_RANK:
              case g.MODULE_TYPE_ENUM.FUND_FLOW_NORTH_MINS:
              case g.MODULE_TYPE_ENUM.FUND_FLOW_NORTH_KLINE:
              case g.MODULE_TYPE_ENUM.FUND_FLOW_SOUTH_MINS:
              case g.MODULE_TYPE_ENUM.FUND_FLOW_SOUTH_KLINE:
              case g.MODULE_TYPE_ENUM.MARKET_OVERVIEW_HS:
                break;
              case g.MODULE_TYPE_ENUM.BANG_DAN_LIST:
                (o = (i = e(t.moduleInfo, 5))[3]),
                  (n = i[4]),
                  this.goToPlate({ transPlateId: o, name: n });
            }
          }
        },
        xcxNavigate: function (e) {
          var t, i;
          p.wx$1 && p.wx$1.navigateTo
            ? p.wx$1.navigateTo(e)
            : null ==
                (i =
                  null == (t = null == window ? void 0 : window.wx)
                    ? void 0
                    : t.miniProgram) || i.navigateTo(e);
        },
        goToStock: function (e) {
          var t;
          if (this.clickable && (e && (t = e), t)) {
            var i = t,
              n = i.stockId,
              o = i.stockCode,
              r = i.market,
              a =
                (i.isUSIndex,
                i.name,
                {
                  sz: 0,
                  sh: 1,
                  hk: 2,
                  us: 3,
                  bj: "bj",
                  pt: "p",
                  ph: "ph",
                  pu: "pu",
                  fu: "fu",
                  p: "p",
                }),
              s = "",
              u = "";
            if (t.market)
              switch (t.market) {
                case "p":
                case "pt":
                  (s = "hs"), (u = "200");
                  break;
                case "ph":
                  (s = "hk"), (u = "400");
                  break;
                case "pu":
                  (s = "us"), (u = "601");
              }
            if (this.isMP || this.isWZQinMP) {
              var c = {};
              if (u)
                c =
                  "hs" === s
                    ? { url: "/pages/quote/quote?market=p&scode=".concat(o) }
                    : {
                        url: "/pages/hq/detail/main?plate="
                          .concat(u, "&code=")
                          .concat(o),
                      };
              else {
                if ("bj" === r || "fx" === r) return;
                c = {
                  url: "/pages/quote/quote?market="
                    .concat(a[r], "&scode=")
                    .concat(o),
                };
              }
              this.xcxNavigate(c),
                f.report("news.mini.detail.stockClick", {
                  newsid: this.newsId,
                  stockid: n,
                });
            } else {
              var l,
                d = null == navigator ? void 0 : navigator.userAgent;
              (l = t.market
                ? /MicroMessenger/.test(d)
                  ? "https://wzq.tenpay.com/mp/v2/index.html#/hq/stock/"
                      .concat(a[r], "/")
                      .concat(o)
                  : "https://dlied5.qq.com/zixuangu/pkg/zixuangu/jumpPage_browser.html?url=qqstock://detailstock/".concat(
                      n,
                      "/"
                    )
                : /MicroMessenger/.test(d)
                ? "https://wzq.tenpay.com/mp/v2/index.html#/hq/stock/"
                    .concat(this.getMarket(n), "/")
                    .concat(n.substr(2))
                : "https://dlied5.qq.com/zixuangu/pkg/zixuangu/jumpPage_browser.html?url=qqstock://detailstock/".concat(
                    n,
                    "/"
                  )),
                shy.navigateTo({ url: l });
            }
          }
        },
        goToPlate: function (e) {
          var t = e.transPlateId,
            i = e.name,
            n = this.getPlateInfo(t),
            o = n.stockCode,
            r = n.appPlate,
            a = n.plateMarket;
          n.market;
          if (this.isMP || this.isWZQinMP) {
            var s;
            (s = { url: "/pages/quote/quote?market=p&scode=".concat(o) }),
              this.xcxNavigate(s);
          } else {
            var u,
              c = null == navigator ? void 0 : navigator.userAgent;
            (u = /MicroMessenger/.test(c)
              ? "https://wzq.tenpay.com/mp/v2/index.html#/plate/"
                  .concat(r, "/detail/?plateId=")
                  .concat(o)
              : "https://dlied5.qq.com/zixuangu/pkg/zixuangu/jumpPage_browser.html?url=qqstock://plateList/"
                  .concat(a.toUpperCase(), "/")
                  .concat(o, "/")
                  .concat(i || "")),
              shy.navigateTo({ url: u });
          }
        },
        imageClick: function (e, t) {
          t.stopPropagation(),
            p.wx$1 &&
              p.wx$1.previewImage &&
              p.wx$1.previewImage({ current: e, urls: [e] });
        },
        gotoDetail: function (e) {
          var t = e.item;
          this.goModule(t);
        },
      }),
      a(t, s(i))),
  };
Array || (p.resolveComponent("ModuleHel") + p.resolveComponent("Module"))();
var M = p._export_sfc(k, [
  [
    "render",
    function (e, t, i, n, o, r) {
      return p.e(
        { a: i.item.moduleInfo && i.item.moduleInfo.length > 0 },
        i.item.moduleInfo && i.item.moduleInfo.length > 0
          ? p.e(
              { b: !o.isMP },
              o.isMP
                ? {
                    e: p.o(r.gotoDetail, 5257),
                    f: p.p({
                      id: "mpMobule",
                      item: i.item,
                      "show-add-fav": r.showAddFav,
                      "stock-initail-added": !!i.stockInitailAdded,
                      market: o.market,
                      scode: o.scode,
                      theme: i.theme,
                      "user-info": o.userinfo,
                      "news-id": i.newsId,
                      "show-nation-debt-header": i.showNationDebtHeader,
                      "show-nation-debt-border": i.showNationDebtBorder,
                      "show-nation-debt-expand-btn": i.showNationDebtExpandBtn,
                      "report-page-name": r.reportPageName,
                      "publish-time": i.publishTime,
                      "none-margin": r.isMorningReport,
                      "account-open-flag": i.accountOpenFlag,
                      "nation-debt-stat-data": i.nationDebtStatData,
                    }),
                  }
                : {
                    c: p.o(r.gotoDetail, 5256),
                    d: p.p({
                      item: i.item,
                      "show-add-fav": r.showAddFav,
                      "stock-initail-added": !!i.stockInitailAdded,
                      market: o.market,
                      scode: o.scode,
                      theme: i.theme,
                      "user-info": o.userinfo,
                      "news-id": i.newsId,
                      "show-nation-debt-header": i.showNationDebtHeader,
                      "show-nation-debt-border": i.showNationDebtBorder,
                      "show-nation-debt-expand-btn": i.showNationDebtExpandBtn,
                      "report-page-name": r.reportPageName,
                      "publish-time": i.publishTime,
                      "none-margin": r.isMorningReport,
                      "account-open-flag": i.accountOpenFlag,
                      "nation-debt-stat-data": i.nationDebtStatData,
                    }),
                  }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-60197759"],
]);
wx.createComponent(M);
