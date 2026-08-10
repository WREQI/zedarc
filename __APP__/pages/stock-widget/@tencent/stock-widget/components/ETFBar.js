require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, n) {
    return new Promise(function (i, r) {
      var s = function (t) {
          try {
            o(n.next(t));
          } catch (t) {
            r(t);
          }
        },
        a = function (t) {
          try {
            o(n.throw(t));
          } catch (t) {
            r(t);
          }
        },
        o = function (t) {
          return t.done ? i(t.value) : Promise.resolve(t.value).then(s, a);
        };
      o((n = n.apply(t, e)).next());
    });
  },
  n = require("../../../../../common/vendor.js"),
  i = require("../api/index.js"),
  r = require("../../stock-hq-data/index.js"),
  s = require("../util/const.js"),
  a = "Igu00p000b005",
  o = {
    sz: 0,
    sh: 1,
    hk: 2,
    us: 3,
    pt: "p",
    bj: "bj",
    nq: "nq",
    zhai: "zhai",
    fu: "fu",
  },
  c = {
    name: "ETFBar",
    inject: {
      helper: { value: "helper" },
      useBroker: { value: "useBroker", default: null },
    },
    options: { styleIsolation: "shared" },
    props: ["accountOpenFlag", "params", "type", "pageType", "newsId", "skin"],
    components: {
      ETFBarItem: function () {
        return "./ETFBarItem.js";
      },
    },
    data: function () {
      return {
        etflist: [],
        stocksAddStatus: {},
        redUp: !0,
        transPlateId: "",
        workingTimer: null,
        stockData: {},
      };
    },
    mounted: function () {
      return e(
        this,
        null,
        t().mark(function e() {
          var n,
            i = this;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      (this.env.__APP__ &&
                        this.helper.shy.getSystemInfo(function (t) {
                          i.redUp = "redup" === t.flucShowMode;
                        }),
                      this.plateId.includes("-")
                        ? ((n = this.plateId.split("-")),
                          (this.transPlateId = n[0]))
                        : (this.transPlateId = this.plateId || ""),
                      (t.t0 = [s.KLINE_CHART, s.MINS_CHART].includes(
                        this.type
                      )),
                      !t.t0)
                    ) {
                      t.next = 5;
                      break;
                    }
                    return (t.next = 5), this.getQTData();
                  case 5:
                    this.etfTitleConfig
                      ? this.requestEtfData()
                      : this.$emit("etfEmpty");
                  case 6:
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
    activated: function () {
      this.isInervalWorking = !0;
    },
    deactivated: function () {
      this.isInervalWorking = !1;
    },
    beforeDestroy: function () {
      this.workingTimer && clearTimeout(this.workingTimer);
    },
    computed: {
      curEtfItem: function () {
        return this.etflist && this.etflist.length ? this.etflist[0] : null;
      },
      plateId: function () {
        var t;
        return (null == (t = this.params) ? void 0 : t.plateId) || "";
      },
      env: function () {
        var t;
        return (null == (t = this.helper) ? void 0 : t.env) || {};
      },
      isMP: function () {
        return this.env.__MP__;
      },
      reportChanncel: function () {
        return this.env.__WZQMP__
          ? "Ieo00p000l129"
          : this.env.__APP__
          ? "IVc00p000m009"
          : "I2T00p000l020";
      },
      isLite: function () {
        return ["mpwzq", "wzqlight"].includes("mpweapp");
      },
      etfTitleConfig: function () {
        var t,
          e,
          n,
          i = null == (t = this.stockData) ? void 0 : t.stockType,
          a = Number(null == (e = this.stockData) ? void 0 : e.zsj),
          o = null == (n = this.params) ? void 0 : n.market,
          c = !this.accountOpenFlag;
        return this.type === s.PLATE_TABLE ||
          (i && (r.utils.isIndex(i) || r.utils.isCSIndex(i)))
          ? c
            ? "股票太多不好选，不如用ETF一键布局"
            : "股票难选？开户后用ETF一键布局"
          : i && r.utils.isChuangYeStock(i)
          ? c
            ? "无需开通创业板，ETF助你间接持有"
            : "想投创业板？开户后用ETF一键持有"
          : i && r.utils.isKeChuangStock(i)
          ? c
            ? "无需开通科创板，ETF助你间接持有"
            : "想投科创板？开户后用ETF一键持有"
          : Number.isFinite(a) && a >= 50
          ? c
            ? "资金不够不用怕，ETF助你间接持有"
            : "资金有限？开户后用ETF低门槛投资"
          : o && r.utils.isHKMarket(o)
          ? c
            ? "无需开通港股通，ETF带你一键投资"
            : "想投港股？开户后用ETF一键持有"
          : o && r.utils.isUSMarket(o)
          ? c
            ? "无需开通美股，ETF带你一键投资"
            : "想投美股？开户后用ETF一键持有"
          : "";
      },
    },
    methods: {
      getQTData: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var i, s, a, o;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (a = new r.DetailApi(function (t) {
                          return n.StockBridge.request(
                            t,
                            n.RequestTypeEnum.GET,
                            {}
                          );
                        })),
                        (t.prev = 1),
                        (t.next = 4),
                        a.getQT(
                          {
                            market: this.params.market,
                            scode: this.params.scode,
                            encode: "utf8",
                          },
                          {
                            adapterType: "stockinfo",
                            needProcess: !0,
                            encode: "utf8",
                          }
                        )
                      );
                    case 4:
                      (o = t.sent),
                        (this.stockData = {
                          stockType:
                            null == (i = null == o ? void 0 : o.secu_info)
                              ? void 0
                              : i.stocktype,
                          zsj:
                            null == (s = null == o ? void 0 : o.secu_quote)
                              ? void 0
                              : s.zsj,
                        }),
                        (t.next = 11);
                      break;
                    case 8:
                      (t.prev = 8), (t.t0 = t.catch(1)), this.$emit("etfEmpty");
                    case 11:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[1, 8]]
            );
          })
        );
      },
      requestEtfData: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var n,
              a,
              o,
              c,
              u,
              l,
              d,
              h,
              p,
              f,
              k,
              m,
              _,
              v,
              T = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (o = this.params),
                        (c = o.scode),
                        (u = o.market),
                        (l =
                          null == (n = this.stockData) ? void 0 : n.stockType),
                        (d = (function () {
                          if (T.type === s.PLATE_TABLE)
                            return T.transPlateId
                              ? "pt".concat(T.transPlateId)
                              : "";
                          var t = r.utils.getSymbol(u, c);
                          return r.utils.hackUSSymbol(t);
                        })()),
                        (h =
                          T.type === s.PLATE_TABLE
                            ? "board_buy"
                            : r.utils.isIndex(l) || r.utils.isCSIndex(l)
                            ? "index_buy"
                            : "stock_buy"),
                        (p = []),
                        (t.prev = 2),
                        (t.next = 5),
                        i.StockAPiService.getEtfRecommend(
                          { code: d, scenes: h },
                          this.helper
                        )
                      );
                    case 5:
                      (f = t.sent),
                        (k = Array.isArray(
                          null == (a = null == f ? void 0 : f.data)
                            ? void 0
                            : a.list
                        )
                          ? f.data.list
                          : []),
                        (m = function (t) {
                          var e = (null == t ? void 0 : t.price_ratio) || "",
                            n = Number(e);
                          return {
                            code: null == t ? void 0 : t.code,
                            name: null == t ? void 0 : t.name,
                            zdf: Number.isFinite(n) ? n : 0,
                          };
                        }),
                        (p = k
                          .slice(0, 1)
                          .map(m)
                          .filter(function (t) {
                            return t.code;
                          })),
                        (t.next = 13);
                      break;
                    case 11:
                      (t.prev = 11), (t.t0 = t.catch(2));
                    case 13:
                      if (
                        ((this.etflist = p),
                        this.etflist && this.etflist.length)
                      ) {
                        t.next = 15;
                        break;
                      }
                      return t.abrupt("return", void this.$emit("etfEmpty"));
                    case 15:
                      (_ = []),
                        (v = []),
                        this.etflist.forEach(function (t) {
                          _.push(t.code), v.push(T.stocksAddStatus[t.code]);
                        }),
                        this.$emit("dataReport", "platestock_relate_etf_brow", {
                          newsid: this.newsId,
                          fchannel_id_fm_i: this.reportChanncel,
                          foperation_purpose: "zixuan",
                          stocklist: _.join(","),
                          hasaddlist: v.join(","),
                        });
                    case 17:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[2, 11]]
            );
          })
        );
      },
      getStocksAddStatus: function (n) {
        return e(
          this,
          null,
          t().mark(function e() {
            var r,
              s,
              a,
              o,
              c,
              u,
              l = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((t.prev = 0),
                        (r = this.helper),
                        (s = r.env),
                        (a = r.shy),
                        !s.__APP__)
                      ) {
                        t.next = 6;
                        break;
                      }
                      n &&
                        n.map(function (t) {
                          return (
                            a.checkStockExist(t.code, function (e) {
                              l.$set(
                                l.stocksAddStatus,
                                t.code,
                                e && e.exist ? 1 : 0
                              );
                            }),
                            t
                          );
                        }),
                        (t.next = 13);
                      break;
                    case 6:
                      return (
                        (o = []),
                        n &&
                          n.map(function (t) {
                            return o.push(t.code), t;
                          }),
                        (c = o.join(",")),
                        (t.next = 11),
                        i.StockAPiService.queryStocksAddStatus(c, this.helper)
                      );
                    case 11:
                      (u = t.sent) &&
                        0 === u.code &&
                        u.data &&
                        (this.stocksAddStatus = u.data);
                    case 13:
                      t.next = 17;
                      break;
                    case 15:
                      (t.prev = 15), (t.t0 = t.catch(0));
                    case 17:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[0, 15]]
            );
          })
        );
      },
      toggleAdded: function (t, e) {
        var n = this;
        (this.isInervalWorking = !1),
          (this.workingTimer = setTimeout(function () {
            (n.isInervalWorking = !0),
              n.workingTimer && clearTimeout(n.workingTimer);
          }, 5e3)),
          (this.stocksAddStatus[t] = e ? 1 : 0);
        var i = "platestock_fav_etf_click_" + (e ? "add" : "cancel");
        this.$emit("dataReport", i, {
          newsid: this.newsId,
          fchannel_id_fm_i: this.reportChanncel,
          foperation_purpose: "zixuan",
          stocklist: t,
        });
      },
      checkAppLogin: function () {
        var t = this;
        return new Promise(function (e) {
          t.helper.shy.getUserInfo(function (t) {
            e(t && "none" !== t.type);
          });
        });
      },
      jumpAppTrade: function (t, e) {
        var n = "/mp/v2/index.html?stat_data="
          .concat(a, "#/trade/stock?market=")
          .concat(o[t], "&code=")
          .concat(e);
        this.helper.shy.navigateTo({
          url: "qqstock://TradeHSBrowser?info=".concat(
            encodeURIComponent(JSON.stringify({ p_url: n, p_showNav: !0 }))
          ),
        });
      },
      gotoTrade: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var n,
              i,
              r,
              s,
              a,
              c,
              u,
              l,
              d = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!this.accountOpenFlag) {
                        t.next = 4;
                        break;
                      }
                      this.gotoOpenAccount(), (t.next = 16);
                      break;
                    case 4:
                      if (
                        ((n = this.curEtfItem.code),
                        (i = n.slice(0, 2)),
                        (r = n.slice(2)),
                        (s = this.helper),
                        (a = s.env),
                        (c = s.shy),
                        (u = a.__APP__),
                        (l = a.__MP__),
                        !u)
                      ) {
                        t.next = 15;
                        break;
                      }
                      return (t.next = 8), this.checkAppLogin();
                    case 8:
                      if (!t.sent) {
                        t.next = 12;
                        break;
                      }
                      this.jumpAppTrade(i, r), (t.next = 13);
                      break;
                    case 12:
                      c.login(function (t) {
                        "success" === t.status && d.jumpAppTrade(i, r);
                      });
                    case 13:
                      t.next = 16;
                      break;
                    case 15:
                      l
                        ? this.useBroker &&
                          (0, this.useBroker.navigateToTrade)({
                            name: "TradeStock",
                            query: { market: o[i], code: r },
                          })
                        : this.$router.push({
                            path: "/trade/stock",
                            query: { market: o[i], code: r },
                          });
                    case 16:
                      this.$emit(
                        "dataReport",
                        "platestock_relate_etf_trade_click",
                        { stockCode: this.curEtfItem.code }
                      );
                    case 17:
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
      gotoOpenAccount: function () {
        var t,
          e,
          i,
          r = (null == (t = this.helper) ? void 0 : t.env) || {},
          s = r.__APP__,
          o = r.__MP__;
        if (r.IS_WZQ_XCX || o) {
          var c = { url: "/pages/index/trade" };
          n.wx$1 && n.wx$1.reLaunch
            ? n.wx$1.reLaunch(c)
            : null ==
                (i =
                  null == (e = null == window ? void 0 : window.wx)
                    ? void 0
                    : e.miniProgram) || i.reLaunch(c);
        } else
          s
            ? this.helper.shy.navigateTo({
                url: "qqstock://GotoTradeTab?info=".concat(
                  encodeURIComponent(JSON.stringify({ index: 0, stat_data: a }))
                ),
              })
            : this.$router.push({
                path: "/apply/index",
                query: { stat_data: "Ikj00p000a034" },
              });
      },
      gotoStockDetail: function (t) {
        var e,
          i,
          r,
          s = t.code,
          a = s.slice(0, 2),
          c = s.slice(2),
          u = t.name,
          l = (null == (e = this.helper) ? void 0 : e.env) || {},
          d = l.__APP__,
          h = l.__MP__;
        if (l.IS_WZQ_XCX || h) {
          var p = {
            url: "/pages/quote/quote?market=".concat(o[a], "&scode=").concat(c),
          };
          n.wx$1 && n.wx$1.navigateTo
            ? n.wx$1.navigateTo(p)
            : null ==
                (r =
                  null == (i = null == window ? void 0 : window.wx)
                    ? void 0
                    : i.miniProgram) || r.navigateTo(p);
        } else
          d
            ? this.helper.shy.navigateTo({
                url: "qqstock://StockDetail?info=".concat(
                  encodeURIComponent(JSON.stringify({ code: s, showNav: !0 }))
                ),
              })
            : n.StockBridge && n.StockBridge.ENV === n.EnvTypeEnum.WZQ_LITE
            ? this.$router.push({
                path: "/quote/detail?market=".concat(o[a], "&scode=").concat(c),
              })
            : this.$router.push({
                path: "/hq/stock/".concat(o[a], "/").concat(c),
                query: { detailTitle: "".concat(u, "(").concat(c, ")") },
              });
        this.$emit("dataReport", "platestock_relate_etf_detail_click", {
          stockCode: t.code,
        });
      },
    },
  };
Array || n.resolveComponent("ETFBarItem")();
var u = n._export_sfc(c, [
  [
    "render",
    function (t, e, i, r, s, a) {
      return n.e(
        { a: s.etflist && s.etflist.length },
        s.etflist && s.etflist.length
          ? n.e(
              { b: a.etfTitleConfig },
              a.etfTitleConfig ? { c: n.t(a.etfTitleConfig) } : {},
              { d: a.curEtfItem },
              a.curEtfItem
                ? {
                    e: n.o(function (t) {
                      return a.toggleAdded(a.curEtfItem.code, t);
                    }, 5759),
                    f: n.p({
                      item: a.curEtfItem,
                      redUp: s.redUp,
                      type: i.type,
                      pageType: i.pageType,
                      newsId: i.newsId,
                      stockInitailAdded:
                        s.stocksAddStatus[a.curEtfItem.code] || !1,
                    }),
                  }
                : {},
              { g: !a.env.IS_WZQ_XCX },
              a.env.IS_WZQ_XCX
                ? {}
                : {
                    h: n.o(function () {
                      return a.gotoTrade && a.gotoTrade.apply(a, arguments);
                    }, 5760),
                  },
              {
                i: n.n(a.isLite && "lite"),
                j: n.n("skin-".concat(i.skin)),
                k: n.o(function (t) {
                  return a.gotoStockDetail(a.curEtfItem);
                }, 5761),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-07e0349c"],
]);
wx.createComponent(u);
