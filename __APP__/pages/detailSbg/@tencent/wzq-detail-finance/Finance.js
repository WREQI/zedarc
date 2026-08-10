require("../../../../@babel/runtime/helpers/Objectentries"),
  require("../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = Object.defineProperty,
  n = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  c = function (t, e, n) {
    return e in t
      ? a(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  l = function (t, e, a) {
    return new Promise(function (n, r) {
      var i = function (t) {
          try {
            o(a.next(t));
          } catch (t) {
            r(t);
          }
        },
        s = function (t) {
          try {
            o(a.throw(t));
          } catch (t) {
            r(t);
          }
        },
        o = function (t) {
          return t.done ? n(t.value) : Promise.resolve(t.value).then(i, s);
        };
      o((a = a.apply(t, e)).next());
    });
  },
  u = require("../../../../common/vendor.js"),
  d = require("../stock-hq-data/index.js"),
  h = require("../stock-base/service/common/sign.js"),
  p = u.StockBridge.ENV === u.EnvTypeEnum.MP ? "mpweapp" : "mini_h5",
  y = function (t, a) {
    var l,
      d,
      y =
        ((l = (function (t, a) {
          for (var n in a || (a = {})) s.call(a, n) && c(t, n, a[n]);
          if (i) {
            var r,
              l = e(i(a));
            try {
              for (l.s(); !(r = l.n()).done; ) {
                n = r.value;
                o.call(a, n) && c(t, n, a[n]);
              }
            } catch (t) {
              l.e(t);
            } finally {
              l.f();
            }
          }
          return t;
        })({}, a)),
        (d = { scenes: 6, come_from: "3", app: p, t: new Date().getTime() }),
        n(l, r(d)));
    if ("mp" === u.StockBridge.ENV) {
      var m = (getApp().globalData.systemInfo || {}).platform,
        f = void 0 === m ? "" : m;
      (y.scenes = "ios" === f ? 5 : 6),
        (y.xcxname = p),
        "mpweapp" === p
          ? (delete y.xcxname, (y.app = "mini_h5"))
          : "mpwzq" === p && ((y.app = "wzqxcx"), (y.xcxname = "wzqxcx"));
    }
    var b = h.getSignV3({ data: y, origin: y.app }),
      g =
        "https://proxy.finance.qq.com/cgi/cgi-bin/zxgstockcgi/miniapp/financetab?".concat(
          Object.keys(b)
            .map(function (t) {
              return "".concat(t, "=").concat(b[t]);
            })
            .join("&")
        );
    return u.StockBridge.request(
      g,
      "GET",
      {},
      { forceCallback: !0, header: { "skip-sign": "true" } }
    );
  },
  m = "error",
  f = {
    props: {
      scode: String,
      market: String,
      stockName: String,
      stockType: String,
      skin: String,
      hidden: Boolean,
    },
    components: {
      NoData: function () {
        return "./components/NoData.js";
      },
      ProfitForcast: function () {
        return "./components/ProfitForcast.js";
      },
      PerformanceTrends: function () {
        return "./components/PerformanceTrends.js";
      },
      Announcement: function () {
        return "./components/Announcement.js";
      },
      Status: function () {
        return "../../../../node-modules/@tencent/st-status/mp/index.js";
      },
    },
    data: function () {
      var t = [];
      return (
        +this.market <= 1
          ? (t = [
              "534,535,824,548,536,517",
              "464,537,538,497,539,825,826,558",
              "540,823,541,542,543",
            ])
          : 2 == +this.market
          ? (t = [
              "828,487,494,825,826,558",
              "548,544,545,824,534,535",
              "541,542,543,828",
            ])
          : 3 == +this.market &&
            (t = [
              "548,544,530,824,534,535",
              "826,497,828,832,537,538",
              "541,543,830,542",
            ]),
        {
          list: [],
          loading: !1,
          firstLoaded: !1,
          teach: t,
          isShowEarnTips: !1,
          briefZb: {},
          pageStatus: "",
          zbKeyList: {
            营业总收入: ["yyzsr", "yysr"],
            营收同比: ["zsrzzl", "srzzl", "yysrTb"],
            净利润: ["jlr"],
            净利润同比: ["jlrzzl", "jlrTb"],
            净资产收益率: ["jzcsyl"],
            毛利率: ["mll"],
            资产负债率: ["zcfzl"],
            资产周转率: ["zczzl"],
          },
          profitForcast: null,
          recentCwbb: null,
          announcementList: null,
          hyTrendData: null,
          summaryData: null,
          financeSummary: null,
        }
      );
    },
    mounted: function () {
      this.getData();
    },
    computed: {
      isHS: function () {
        return d.utils.isHSMarket(this.market);
      },
      isLite: function () {
        return ["mpwzq", "wzqlight"].includes("mpweapp");
      },
      isMP: function () {
        return ["mpwzq", "mpweapp"].includes("mpweapp");
      },
      pLayoutShow: function () {
        var t = {};
        return (
          Object.keys(this.zbKeyList).forEach(function (e, a) {
            t[e] = a % 2 == 0 ? "layout-left" : "layout-right";
          }),
          t
        );
      },
      isShowNoData: function () {
        var t,
          e =
            this.hyTrendData ||
            (null == (t = this.briefZb) ? void 0 : t.date) ||
            this.list.length ||
            this.profitForcast ||
            this.announcementList;
        return this.firstLoaded && !e;
      },
    },
    methods: {
      onShow: function () {
        var t;
        null == (t = this.$refs.performanceTrends) || t.reset();
      },
      showModal: function (t) {
        this.$emit("showModal", t);
      },
      retryTab: function () {
        this.$emit("refreshTab"),
          (this.loading = !1),
          (this.firstLoaded = !1),
          this.getData();
      },
      getData: function () {
        return l(
          this,
          null,
          t().mark(function e() {
            var a,
              n = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (this.loading) {
                        t.next = 24;
                        break;
                      }
                      if (
                        ((this.loading = !0),
                        (this.pageStatus = "loading"),
                        (t.prev = 2),
                        !d.utils.isHSMarket(this.market))
                      ) {
                        t.next = 7;
                        break;
                      }
                      return (
                        (a = d.utils.getSymbol(this.market, this.scode)),
                        (t.next = 7),
                        this.getAllDataForHS({
                          stockCode: a,
                          subReq: [
                            "jiankuang",
                            "cwbbSearch",
                            "getRecentCwbb",
                            "zgGeneral",
                            "financeBasic",
                            "financeMain",
                            "financeSummary",
                          ].join(),
                          "cwbbSearch.type": "sum",
                          "cwbbSearch.num": 10,
                          "cwbbSearch.jianjie": 1,
                          "zgGeneral.modules": "opinion",
                          "zgGeneral.source": "wzq",
                          "financeSummary.symbol": a,
                        })
                      );
                    case 7:
                      if (
                        ((t.t0 =
                          d.utils.isBJMarket(this.market) ||
                          d.utils.isNQMarket(this.market)),
                        !t.t0)
                      ) {
                        t.next = 11;
                        break;
                      }
                      return (t.next = 11), this.getHSData();
                    case 11:
                      if (((t.t1 = d.utils.isHKMarket(this.market)), !t.t1)) {
                        t.next = 15;
                        break;
                      }
                      return (t.next = 15), this.getHKData();
                    case 15:
                      if (((t.t2 = d.utils.isUSMarket(this.market)), !t.t2)) {
                        t.next = 19;
                        break;
                      }
                      return (t.next = 19), this.getUSData();
                    case 19:
                      t.next = 24;
                      break;
                    case 21:
                      (t.prev = 21),
                        (t.t3 = t.catch(2)),
                        (this.pageStatus = m),
                        this.$nextTick(function () {
                          n.$emit("loaded");
                        });
                    case 24:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[2, 21]]
            );
          })
        );
      },
      getAllDataForHS: function (e) {
        return l(
          this,
          null,
          t().mark(function a() {
            var n,
              r,
              i,
              s,
              o,
              c,
              l,
              h,
              f,
              b,
              g,
              k,
              S,
              v,
              j,
              w,
              O,
              x,
              z,
              T,
              L,
              q,
              D,
              A,
              B,
              N = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), y(u.StockBridge, e);
                    case 2:
                      if (((n = t.sent), !e.subReq.includes("financeBasic"))) {
                        t.next = 9;
                        break;
                      }
                      return (
                        (t.next = 6),
                        (function (t, e) {
                          var a =
                            "https://proxy.finance.qq.com/ifzqgtimg/stock/corp/finance/basic?symbol="
                              .concat(e, "&all=1&app=")
                              .concat(p);
                          return u.StockBridge.request(a, "GET");
                        })(
                          u.StockBridge,
                          d.utils.getSymbol(this.market, this.scode)
                        )
                      );
                    case 6:
                      (t.t0 = t.sent), (t.next = 10);
                      break;
                    case 9:
                      t.t0 = {};
                    case 10:
                      if (((r = t.t0), !e.subReq.includes("financeMain"))) {
                        t.next = 17;
                        break;
                      }
                      return (
                        (t.next = 14),
                        (function (t, e) {
                          var a =
                            "https://proxy.finance.qq.com/ifzqgtimg/stock/corp/finance/main?symbol="
                              .concat(e, "&all=1&app=")
                              .concat(p);
                          return u.StockBridge.request(a, "GET");
                        })(
                          u.StockBridge,
                          d.utils.getSymbol(this.market, this.scode)
                        )
                      );
                    case 14:
                      (t.t1 = t.sent), (t.next = 18);
                      break;
                    case 17:
                      t.t1 = {};
                    case 18:
                      (i = t.t1),
                        0 == +n.code && n.data
                          ? ((this.pageStatus = ""),
                            (s = n.data.subOrgRspData || {}),
                            (o = s.cwbbSearch),
                            (c = void 0 === o ? {} : o),
                            (l = s.getRecentCwbb),
                            (h = void 0 === l ? {} : l),
                            (f = s.jiankuang),
                            (b = void 0 === f ? {} : f),
                            (g = s.zgGeneral),
                            (k = void 0 === g ? {} : g),
                            (S = s.financeSummary),
                            (v = void 0 === S ? {} : S),
                            0 == +b.code &&
                              b.data &&
                              ((j = b.data.zyzb || {}),
                              (w = j.detail),
                              (O = void 0 === w ? {} : w),
                              (this.zbKeyList = Object.fromEntries(
                                Object.entries(this.zbKeyList).filter(function (
                                  t
                                ) {
                                  var e = t[1];
                                  if (Array.isArray(e) && e.length)
                                    return e.length > 1
                                      ? (Object.prototype.hasOwnProperty.call(
                                          O,
                                          e[0]
                                        ) &&
                                          !["--", ""].includes(O[e[0]])) ||
                                          (Object.prototype.hasOwnProperty.call(
                                            O,
                                            e[1]
                                          ) &&
                                            !["--", ""].includes(O[e[1]]))
                                      : Object.prototype.hasOwnProperty.call(
                                          O,
                                          e[0]
                                        ) && !["--", ""].includes(O[e[0]]);
                                })
                              )),
                              (this.briefZb = b.data.zyzb || {})),
                            0 == +k.code &&
                              k.data &&
                              (this.profitForcast = k.data.opinion || {}),
                            0 == +r.code &&
                              0 == +i.code &&
                              ((x = r.data.lrb || {}),
                              (z = x.NPParentCompanyOwners),
                              (T = x.NPFromParentCompanyOwners),
                              (L = x.OperatingRevenue),
                              (q = {
                                yysr: L,
                                jlr: T || z,
                                eps: i.data.data.ylnl.EPS,
                              }),
                              (D = { latest: r.data.latest }),
                              Object.keys(q).map(function (t) {
                                if (["yysr", "jlr", "eps"].includes(t)) {
                                  var e = {};
                                  Object.keys(q[t]).map(function (a) {
                                    var n = q[t][a];
                                    if (Array.isArray(n)) {
                                      var r = n.filter(function (t) {
                                        return +t.value && !isNaN(t.value);
                                      });
                                      r.length && (e[a] = r);
                                    }
                                  }),
                                    Object.keys(e).length && (D[t] = e);
                                }
                              }),
                              Object.keys(D).length && (this.hyTrendData = D)),
                            0 == +c.code &&
                              c.data &&
                              c.data.cwbb.length > 0 &&
                              ((A = c.data.cwbb.every(function (t) {
                                return !Array.isArray(t) || !t.length;
                              })),
                              (this.list = A ? [] : c.data.cwbb)),
                            0 == +h.code &&
                              h.data &&
                              (B = Object.entries(h.data)
                                .sort(function (t, e) {
                                  return e[0].localeCompare(t[0]);
                                })
                                .filter(function (t) {
                                  var e = !1;
                                  return (
                                    Object.keys(t[1]).map(function (a) {
                                      t[1][a] && (e = !0);
                                    }),
                                    e
                                  );
                                })).length &&
                              (this.announcementList = B),
                            v && 0 === v.code && (this.financeSummary = v.data),
                            (this.loading = !1),
                            this.firstLoaded ||
                              ((this.firstLoaded = !0),
                              this.$nextTick(function () {
                                N.$emit("loaded");
                              })))
                          : ((this.pageStatus = m),
                            this.$nextTick(function () {
                              N.$emit("loaded");
                            }));
                    case 20:
                    case "end":
                      return t.stop();
                  }
              },
              a,
              this
            );
          })
        );
      },
      getHSData: function () {
        return l(
          this,
          null,
          t().mark(function e() {
            var a,
              n,
              r = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        (function (t) {
                          var e =
                            "https://proxy.finance.qq.com/ifzqgtimg/stock/corp/cwbb/search?_h5ver=2.0.1&symbol="
                              .concat(t, "&type=sum&app=")
                              .concat(p);
                          return u.StockBridge.request(e, "GET");
                        })(d.utils.getSymbol(this.market, this.scode))
                      );
                    case 2:
                      0 === (a = t.sent).code && a.data
                        ? ((this.pageStatus = ""),
                          a.data.length > 0 &&
                            ((n = a.data.every(function (t) {
                              return !Array.isArray(t) || !t.length;
                            })),
                            (this.list = n
                              ? []
                              : a.data.filter(function (t) {
                                  return (
                                    !t[0][1] ||
                                    !Array.isArray(t[0][1]) ||
                                    "--" !== t[0][1][0]
                                  );
                                }))))
                        : (this.pageStatus = m),
                        (this.loading = !1),
                        this.firstLoaded ||
                          ((this.firstLoaded = !0),
                          this.$nextTick(function () {
                            r.$emit("loaded");
                          }));
                    case 5:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      getHKData: function () {
        return l(
          this,
          null,
          t().mark(function e() {
            var a,
              n,
              r,
              i,
              s,
              o,
              c,
              l,
              h,
              p,
              f,
              b,
              g,
              k,
              S,
              v,
              j,
              w,
              O,
              x = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        y(u.StockBridge, {
                          stockCode: d.utils.getSymbol(this.market, this.scode),
                          subReq: [
                            "ylyc",
                            "hkmoneySummary",
                            "noticeListSearchByType",
                            "hkmoneyZyzb",
                            "hkcwbbYjqs",
                          ].join(),
                          "ylyc.symbol": d.utils.getSymbol(
                            this.market,
                            this.scode
                          ),
                          "hkcwbbYjqs.symbol": d.utils.getSymbol(
                            this.market,
                            this.scode
                          ),
                          "hkmoneyZyzb.symbol": d.utils.getSymbol(
                            this.market,
                            this.scode
                          ),
                          "hkmoneySummary.symbol": d.utils.getSymbol(
                            this.market,
                            this.scode
                          ),
                          "hkmoneySummary.type": "sum",
                          "hkmoneySummary.app":
                            "mp" === u.StockBridge.ENV ? "wzqxcx" : "mini_h5",
                          "noticeListSearchByType.symbol": d.utils.getSymbol(
                            this.market,
                            this.scode
                          ),
                          "noticeListSearchByType.page": 1,
                          "noticeListSearchByType.n": 10,
                          "noticeListSearchByType.noticeType": 1,
                        })
                      );
                    case 2:
                      0 == +(n = t.sent).code && n.data
                        ? ((this.pageStatus = ""),
                          (r = n.data.subOrgRspData || {}),
                          (i = r.ylyc),
                          (s = void 0 === i ? {} : i),
                          (o = r.noticeListSearchByType),
                          (c = void 0 === o ? {} : o),
                          (l = r.hkmoneySummary),
                          (h = void 0 === l ? {} : l),
                          (p = r.hkcwbbYjqs),
                          (f = void 0 === p ? {} : p),
                          (b = r.hkmoneyZyzb),
                          (g = void 0 === b ? {} : b),
                          0 == +s.code &&
                            s.data &&
                            Object.keys(s.data).length &&
                            (Object.keys(s.data).map(function (t) {
                              s.data[t].value &&
                                Array.isArray(s.data[t].value) &&
                                (s.data[t].value.filter(function (t) {
                                  return "" !== t.real || "" !== t.estimate;
                                }).length ||
                                  delete s.data[t]);
                            }),
                            Object.keys(s.data).length &&
                              (this.profitForcast = s.data)),
                          0 == +f.code &&
                            f.data &&
                            Object.keys(f.data).length &&
                            ((k = { latest: f.data.latest }),
                            Object.keys(f.data).map(function (t) {
                              if (["yysr", "jlr", "eps"].includes(t)) {
                                var e = {};
                                Object.keys(f.data[t]).map(function (a) {
                                  var n = f.data[t][a];
                                  if (Array.isArray(n)) {
                                    var r = n.filter(function (t) {
                                      return +t.value && !isNaN(t.value);
                                    });
                                    r.length && (e[a] = r);
                                  }
                                }),
                                  Object.keys(e).length && (k[t] = e);
                              }
                            }),
                            Object.keys(k).length && (this.hyTrendData = k)),
                          0 == +g.code &&
                            g.data &&
                            ((S = g.data || {}),
                            (v = S.detail),
                            (j = void 0 === v ? {} : v),
                            (this.zbKeyList = Object.fromEntries(
                              Object.entries(this.zbKeyList).filter(function (
                                t
                              ) {
                                var e = t[1];
                                if (Array.isArray(e) && e.length) {
                                  if (e.length > 1) {
                                    var a = !1;
                                    return (
                                      e.map(function (t) {
                                        a ||
                                          (a =
                                            Object.prototype.hasOwnProperty.call(
                                              j,
                                              t
                                            ) && "--" != j[t]);
                                      }),
                                      a
                                    );
                                  }
                                  return (
                                    Object.prototype.hasOwnProperty.call(
                                      j,
                                      e[0]
                                    ) && "--" != j[e[0]]
                                  );
                                }
                              })
                            )),
                            Object.keys(this.zbKeyList).length &&
                              (this.briefZb = g.data || {})),
                          0 == +h.code &&
                            Array.isArray(h.data) &&
                            h.data.length &&
                            ((w = h.data.every(function (t) {
                              return !Array.isArray(t) || !t.length;
                            })
                              ? []
                              : h.data.filter(function (t) {
                                  return (
                                    !!t &&
                                    (t[0] && t[0][1] && Array.isArray(t[0][1])
                                      ? "--" !== t[0][1][0]
                                      : !!t[0])
                                  );
                                })),
                            (this.list = w.map(function (t) {
                              return t.map(function (t, e) {
                                if (
                                  0 !== e &&
                                  t[0] &&
                                  t[0][0] &&
                                  ((t[0][0] = t[0][0]
                                    .replace(/（/g, "(")
                                    .replace(/）/g, ")")),
                                  t[0][0] && t[0][0].includes("("))
                                ) {
                                  var a = t[0][0].split("(");
                                  (t[0][0] = a[0]),
                                    t[0].push(" (".concat(a[1]));
                                }
                                return t;
                              });
                            }))),
                          0 == +c.code &&
                            Array.isArray(
                              null == (a = c.data) ? void 0 : a.data
                            ) &&
                            c.data.data.length &&
                            ((O = new Date().getFullYear()),
                            c.data.data.map(function (t) {
                              var e = new Date(t.time.replace(/-/g, "/")),
                                a = [];
                              e.getFullYear() != O && a.push(e.getFullYear()),
                                a.push(
                                  e.getMonth() < 9
                                    ? "0".concat(e.getMonth() + 1)
                                    : e.getMonth() + 1
                                ),
                                a.push(
                                  e.getDate() < 9
                                    ? "0".concat(e.getDate())
                                    : e.getDate()
                                ),
                                (t.timeStr = a.join("-"));
                            }),
                            (this.announcementList = c.data.data.slice(0, 3))))
                        : (this.pageStatus = m),
                        (this.loading = !1),
                        this.firstLoaded ||
                          ((this.firstLoaded = !0),
                          this.$nextTick(function () {
                            x.$emit("loaded");
                          }));
                    case 5:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      getUSData: function () {
        return l(
          this,
          null,
          t().mark(function e() {
            var a,
              n,
              r,
              i,
              s,
              o,
              c,
              l,
              h,
              p,
              f,
              b,
              g,
              k,
              S,
              v,
              j,
              w,
              O,
              x = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        y(u.StockBridge, {
                          stockCode: d.utils.getSymbol(this.market, this.scode),
                          subReq: [
                            "ylyc",
                            "usfinSearch",
                            "noticeListSearchByType",
                            "usfinZyzb",
                            "finDetailYjqs",
                          ].join(),
                          "ylyc.symbol": d.utils.getSymbol(
                            this.market,
                            this.scode
                          ),
                          "usfinZyzb.symbol": this.scode,
                          "finDetailYjqs.symbol": this.scode,
                          "usfinSearch.symbol": this.scode,
                          "usfinSearch.app":
                            "mp" === u.StockBridge.ENV ? "wzqxcx" : "mini_h5",
                          "noticeListSearchByType.symbol": d.utils.getSymbol(
                            this.market,
                            d.utils.trimScode(this.scode)
                          ),
                          "noticeListSearchByType.page": 1,
                          "noticeListSearchByType.n": 10,
                          "noticeListSearchByType.noticeType": 1,
                        })
                      );
                    case 2:
                      0 == +(n = t.sent).code && n.data
                        ? ((this.pageStatus = ""),
                          (r = n.data.subOrgRspData),
                          (i = r.noticeListSearchByType),
                          (s = void 0 === i ? {} : i),
                          (o = r.ylyc),
                          (c = void 0 === o ? {} : o),
                          (l = r.usfinSearch),
                          (h = void 0 === l ? {} : l),
                          (p = r.finDetailYjqs),
                          (f = void 0 === p ? {} : p),
                          (b = r.usfinZyzb),
                          (g = void 0 === b ? {} : b),
                          0 == +c.code &&
                            c.data &&
                            Object.keys(c.data).length &&
                            (Object.keys(c.data).map(function (t) {
                              c.data[t].value &&
                                Array.isArray(c.data[t].value) &&
                                (c.data[t].value.filter(function (t) {
                                  return "" !== t.real || "" !== t.estimate;
                                }).length ||
                                  delete c.data[t]);
                            }),
                            Object.keys(c.data).length &&
                              (this.profitForcast = c.data)),
                          0 == +f.code &&
                            f.data &&
                            Object.keys(f.data).length &&
                            ((k = { latest: f.data.latest }),
                            Object.keys(f.data).map(function (t) {
                              if (["yysr", "jlr", "eps"].includes(t)) {
                                var e = {};
                                Object.keys(f.data[t]).map(function (a) {
                                  var n = f.data[t][a];
                                  if (Array.isArray(n)) {
                                    var r = n.filter(function (t) {
                                      return +t.value && !isNaN(t.value);
                                    });
                                    r.length && (e[a] = r);
                                  }
                                }),
                                  Object.keys(e).length && (k[t] = e);
                              }
                            }),
                            Object.keys(k).length && (this.hyTrendData = k)),
                          0 == +g.code &&
                            g.data &&
                            ((S = g.data || {}),
                            (v = S.detail),
                            (j = void 0 === v ? {} : v),
                            (this.zbKeyList = Object.fromEntries(
                              Object.entries(this.zbKeyList).filter(function (
                                t
                              ) {
                                var e = t[1];
                                if (Array.isArray(e) && e.length) {
                                  if (e.length > 1) {
                                    var a = !1;
                                    return (
                                      e.map(function (t) {
                                        a ||
                                          (a =
                                            Object.prototype.hasOwnProperty.call(
                                              j,
                                              t
                                            ) && "--" !== j[t]);
                                      }),
                                      a
                                    );
                                  }
                                  return (
                                    Object.prototype.hasOwnProperty.call(
                                      j,
                                      e[0]
                                    ) && "--" !== j[e[0]]
                                  );
                                }
                              })
                            )),
                            Object.keys(this.zbKeyList).length &&
                              (this.briefZb = g.data || {})),
                          0 == +h.code &&
                            Array.isArray(h.data) &&
                            h.data.length &&
                            ((w = h.data.every(function (t) {
                              return !Array.isArray(t) || !t.length;
                            })
                              ? []
                              : h.data.filter(function (t) {
                                  return !(
                                    !t ||
                                    (t[0] &&
                                      t[0][1] &&
                                      Array.isArray(t[0][1]) &&
                                      "--" === t[0][1][0])
                                  );
                                })),
                            (this.list = w.map(function (t) {
                              return t.map(function (t, e) {
                                if (
                                  0 !== e &&
                                  t[0] &&
                                  t[0][0] &&
                                  ((t[0][0] = t[0][0]
                                    .replace(/（/g, "(")
                                    .replace(/）/g, ")")),
                                  t[0][0] && t[0][0].includes("("))
                                ) {
                                  var a = t[0][0].split("(");
                                  (t[0][0] = a[0]),
                                    t[0].push(" (".concat(a[1]));
                                }
                                return t;
                              });
                            }))),
                          0 == +s.code &&
                            Array.isArray(
                              null == (a = s.data) ? void 0 : a.data
                            ) &&
                            s.data.data.length &&
                            ((O = new Date().getFullYear()),
                            s.data.data.map(function (t) {
                              var e = new Date(t.time.replace(/-/g, "/"));
                              (t.subTitle = t.title),
                                (t.title = t.chineseTitle);
                              var a = [];
                              e.getFullYear() != O && a.push(e.getFullYear()),
                                a.push(
                                  e.getMonth() < 9
                                    ? "0".concat(e.getMonth() + 1)
                                    : e.getMonth() + 1
                                ),
                                a.push(
                                  e.getDate() < 9
                                    ? "0".concat(e.getDate())
                                    : e.getDate()
                                ),
                                (t.timeStr = a.join("-"));
                            }),
                            (this.announcementList = s.data.data.slice(0, 3))))
                        : (this.pageStatus = m),
                        (this.loading = !1),
                        this.firstLoaded ||
                          ((this.firstLoaded = !0),
                          this.$nextTick(function () {
                            x.$emit("loaded");
                          }));
                    case 5:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      buildSafeUrl: function (t, e) {
        return "".concat(t, "?").concat(
          Object.keys(e)
            .map(function (t) {
              return "".concat(t, "=").concat(encodeURIComponent(e[t]));
            })
            .join("&")
        );
      },
      openDetail: function (t) {
        var e = d.utils.getSymbol(this.market, this.scode);
        "wzq" === u.StockBridge.ENV
          ? (d.utils.isHKMarket(this.market) &&
              (4 == +t ? (t = 5) : 5 == +t && (t = 4)),
            u.StockBridge.routeTo({
              path: "/trade/financial_report.shtml",
              query: {
                type: t,
                code: this.scode,
                market: this.market,
                name: this.stockName,
                mtype: this.stockType,
              },
            }))
          : (this.isLite || this.isMP) &&
            (u.StockBridge.report("hq.stock_detail.finance.link_click", {
              stockid: e,
            }),
            d.utils.isHKMarket(this.market) &&
              (4 == +t ? (t = 5) : 5 == +t && (t = 4)),
            u.StockBridge.openExtraWebview(
              "https://wzq.tenpay.com/mp/v2/index.html#/trade/financial_report.shtml?type="
                .concat(t, "&code=")
                .concat(this.scode, "&market=")
                .concat(this.market, "&name=")
                .concat(this.stockName, "&mtype=")
                .concat(this.stockType)
            )),
          4 == +t
            ? u.StockBridge.report("stocklist.stock_report_benifit_hk", {
                stockid: e,
              })
            : 5 == +t
            ? u.StockBridge.report("stocklist.stock_report_debt_hk", {
                stockid: e,
              })
            : 6 == +t &&
              u.StockBridge.report("stocklist.stock_report_cash_hk", {
                stockid: e,
              });
      },
    },
  };
Array ||
  (
    u.resolveComponent("profit-forcast") +
    u.resolveComponent("performance-trends") +
    u.resolveComponent("Announcement") +
    u.resolveComponent("NoData") +
    u.resolveComponent("status")
  )();
var b = u._export_sfc(f, [
  [
    "render",
    function (t, e, a, n, r, i) {
      return u.e(
        { a: r.profitForcast },
        r.profitForcast
          ? {
              b: u.o(i.showModal, 1767),
              c: u.p({
                skin: a.skin,
                market: a.market,
                scode: a.scode,
                stockType: a.stockType,
                profitForcast: r.profitForcast,
              }),
            }
          : {},
        { d: r.hyTrendData },
        r.hyTrendData
          ? {
              e: u.sr("performanceTrends", "a0304d74-1"),
              f: u.p({
                chartId: "finance-hytrendChart",
                skin: a.skin,
                market: a.market,
                scode: a.scode,
                stockType: a.stockType,
                data: r.hyTrendData,
              }),
            }
          : {},
        { g: r.briefZb && r.briefZb.date },
        r.briefZb && r.briefZb.date
          ? {
              h: u.t(
                r.briefZb.currency ? "(".concat(r.briefZb.currency, ")") : ""
              ),
              i: u.t(r.briefZb.date),
              j: u.f(r.zbKeyList, function (t, e, a) {
                return u.e({ a: u.t(e), b: "syl" === t[0] }, (t[0], {}), {
                  c: u.t(
                    r.briefZb.detail[t[0]] ||
                      r.briefZb.detail[t[1]] ||
                      r.briefZb.detail[t[2]] ||
                      "--"
                  ),
                  d: u.n(i.pLayoutShow[e]),
                  e: e,
                });
              }),
            }
          : {},
        { k: r.list.length > 0 },
        r.list.length > 0
          ? {
              l: u.f(r.list, function (t, e, a) {
                return {
                  a: u.f(t, function (e, a, n) {
                    return u.e(
                      { a: 0 == a },
                      0 == a
                        ? {
                            b: u.t(e[0][0]),
                            c: u.t(e[1][0]),
                            d: u.n(t.length <= 1 ? "nomargin" : ""),
                          }
                        : u.e(
                            { e: u.t(e[0][0]), f: e[0][2] },
                            e[0][2] ? { g: u.t(e[0][2]) } : {},
                            {
                              h: u.t(e[1][0]),
                              i: u.n(a === t.length - 1 ? "list-last" : ""),
                            }
                          ),
                      { j: a }
                    );
                  }),
                  b: e,
                  c: i.isHS || 0 !== e ? "" : 1,
                  d: r.announcementList || e != r.list.length - 1 ? "" : 1,
                  e: u.o(
                    function (t) {
                      return i.openDetail(e + 4);
                    },
                    1768,
                    e
                  ),
                };
              }),
            }
          : {},
        { m: r.announcementList },
        r.announcementList
          ? {
              n: u.p({
                scode: a.scode,
                market: a.market,
                "stock-name": a.stockName,
                announcementList: r.announcementList,
                financeSummary: r.financeSummary,
              }),
            }
          : {},
        { o: i.isShowNoData },
        i.isShowNoData
          ? {}
          : r.pageStatus
          ? {
              q: u.o(i.retryTab, 1769),
              r: u.p({ isSimpleMode: !0, type: r.pageStatus }),
            }
          : {},
        {
          p: r.pageStatus,
          s: r.list.length > 0 ? 1 : "",
          t: "black" === a.skin ? 1 : "",
          v: i.isLite ? "" : 1,
        }
      );
    },
  ],
  ["__scopeId", "data-v-a0304d74"],
]);
wx.createComponent(b);
var g = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3d6cS1kZXRhaWwtZmluYW5jZS9GaW5hbmNlLnZ1ZQ =
  g),
  (exports.getPDFcontent = function (t) {
    var e =
      "https://proxy.finance.qq.com/ifzqgtimg/appstock/news/content/content?id="
        .concat(t, "&app=")
        .concat(p);
    return u.StockBridge.request(e, "GET");
  });
