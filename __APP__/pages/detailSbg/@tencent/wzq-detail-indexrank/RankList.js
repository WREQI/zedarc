var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = function (t, e, r) {
    return new Promise(function (i, o) {
      var n = function (t) {
          try {
            c(r.next(t));
          } catch (t) {
            o(t);
          }
        },
        s = function (t) {
          try {
            c(r.throw(t));
          } catch (t) {
            o(t);
          }
        },
        c = function (t) {
          return t.done ? i(t.value) : Promise.resolve(t.value).then(n, s);
        };
      c((r = r.apply(t, e)).next());
    });
  },
  r = require("../../../../common/vendor.js"),
  i = require("../stock-hq-data/index.js"),
  o = require("api/temp.js"),
  n = require("api/const.js"),
  s = {
    components: {
      NoData: function () {
        return "./components/NoData.js";
      },
      MarketIcon: function () {
        return "./components/MarketIcon.js";
      },
    },
    props: {
      scode: String,
      market: String,
      type: String,
      skin: String,
      isTrading: Boolean,
      isLctApp: Boolean,
    },
    data: function () {
      return {
        showMoreText: !1,
        firstLoaded: !1,
        cols: {
          zxj: ["最新价", "price"],
          zdf: ["涨跌幅", "priceRatio"],
          hsl: ["换手率", "exchange"],
          turnover: ["成交额", "turnover"],
        },
        list: [],
        touchList: [],
        error: "",
        orderIndex: 1,
        orderDown: !0,
      };
    },
    computed: {
      isMp: function () {
        return "mp" === r.StockBridge.ENV;
      },
      isLite: function () {
        return ["mpwzq", "wzqlight"].includes("mpweapp");
      },
      symbol: function () {
        return i.utils.isUSMarket(this.market)
          ? "us.".concat(this.scode)
          : i.utils.getSymbol(this.market, this.scode);
      },
      orderTypes: function () {
        if (this.isLite) return ["zxj", "zdf"];
        var t = [];
        switch (this.type) {
          case "cfgHS":
          case "cfgCS":
            t = ["zxj", "zdf", "hsl"];
            break;
          case "cfgUS":
          case "north":
          case "south":
          case "etf":
            t = ["zxj", "zdf"];
            break;
          default:
            t = ["zxj", "zdf", "turnover"];
        }
        return t;
      },
    },
    watch: {
      isTrading: function (t) {
        t && (this.clearRefresh(), this.judgeTime());
      },
    },
    created: function () {
      (this.allList = []),
        (this.touchList = new Array(200).fill(!1)),
        (this.loading = !1),
        (this.interval = null);
    },
    mounted: function () {
      this.getData(),
        this.judgeTime(),
        r.StockBridge.report("hq.detail.cfg.tab_brow");
    },
    beforeDestroy: function () {
      this.clearRefresh(),
        (this.allList = null),
        (this.list = null),
        (this.touchList = null),
        (this.cols = null);
    },
    methods: {
      retryTab: function () {
        this.$emit("refreshTab"),
          (this.error = ""),
          (this.firstLoaded = !1),
          this.getData(),
          this.judgeTime();
      },
      clearRefresh: function () {
        this.interval && clearInterval(this.interval);
      },
      judgeTime: function () {
        var t = this,
          e = new Date().toTimeString().slice(0, 5).replace(":", "");
        (((i.utils.isHSMarket(this.market) ||
          i.utils.isBJMarket(this.market)) &&
          o.isHSTradeTime(e)) ||
          (i.utils.isHKMarket(this.market) && o.isHKTradeTime(e)) ||
          (i.utils.isUSMarket(this.market) && o.isUSTradeTime(e)) ||
          (i.utils.isCSIndex(this.market) && o.isHSTradeTime(e))) &&
          (this.interval = setInterval(function () {
            t.getData();
          }, 5e3));
      },
      checkMoreList: function () {
        r.StockBridge.report("hq.detail.cfg.more_click", {
          stockid: this.symbol,
        }),
          r.StockRouter.routeTo({
            name: "rankDetail",
            query: { symbol: this.symbol, type: this.type },
          });
      },
      getData: function () {
        return e(
          this,
          null,
          t().mark(function o() {
            var s,
              c,
              a,
              d,
              l,
              h = this;
            return t().wrap(
              function (o) {
                for (;;)
                  switch ((o.prev = o.next)) {
                    case 0:
                      if (this.loading) {
                        o.next = 16;
                        break;
                      }
                      return (
                        (this.loading = !0),
                        (o.prev = 2),
                        (s = {
                          symbol: this.symbol,
                          sortType:
                            this.cols[this.orderTypes[this.orderIndex]][1],
                          direct: this.orderDown ? "down" : "up",
                        }),
                        (c = ""),
                        "",
                        (a = "mpweapp"),
                        i.utils.isHSMarket(this.market) ||
                        i.utils.isBJMarket(this.market) ||
                        "north" === this.type ||
                        "cfgHS" === this.type
                          ? (c = ""
                              .concat(
                                "https://proxy.finance.qq.com/cgi/cgi-bin/rank/hs/getBoardRankList",
                                "?board_code="
                              )
                              .concat(s.symbol, "&sort_type=")
                              .concat(s.sortType, "&direct=")
                              .concat(s.direct, "&_appver=11.11&app=")
                              .concat(a))
                          : i.utils.isHKMarket(this.market)
                          ? (c = ""
                              .concat(
                                "https://proxy.finance.qq.com/cgi/cgi-bin/rank/hk/getList",
                                "?board_type="
                              )
                              .concat(s.symbol, "&sort_type=")
                              .concat(s.sortType, "&direct=")
                              .concat(s.direct, "&app=")
                              .concat(a))
                          : i.utils.isUSMarket(this.market) &&
                            "cfgUS" === this.type
                          ? (c = ""
                              .concat(
                                "https://proxy.finance.qq.com/cgi/cgi-bin/rank/us/getList",
                                "?board_type="
                              )
                              .concat(s.symbol, "&sort_type=")
                              .concat(s.sortType, "&direct=")
                              .concat(s.direct, "&app=")
                              .concat(a))
                          : i.utils.isUSMarket(this.market) &&
                            "etf" === this.type
                          ? (c = ""
                              .concat(
                                "https://proxy.finance.qq.com/cgi/cgi-bin/rank/us/getList",
                                "?board_type="
                              )
                              .concat(this.symbol, "_ETF&sort_type=")
                              .concat(s.sortType, "&direct=")
                              .concat(s.direct, "&app=")
                              .concat(a))
                          : i.utils.isCSIndex(this.market) &&
                            (c = ""
                              .concat(
                                "https://proxy.finance.qq.com/cgi/cgi-bin/rank/constituent_stock/getList",
                                "?code="
                              )
                              .concat(s.symbol, "&sort_type=")
                              .concat(s.sortType, "&direct=")
                              .concat(s.direct, "&app=")
                              .concat(a)),
                        (o.next = 9),
                        r.StockBridge.request(
                          c,
                          "GET",
                          {},
                          { forceCallback: !0 }
                        ).catch(function () {
                          0 === h.list.length &&
                            ((h.error = n.COMMON_PAGE_STATUS.ERROR),
                            h.clearRefresh()),
                            h.$nextTick(function () {
                              h.$emit("loaded");
                            });
                        })
                      );
                    case 9:
                      0 === (d = o.sent).code &&
                        d.data &&
                        ((this.allList =
                          d.data.rank_list && d.data.rank_list.slice(0, 200)),
                        (this.showMoreText = d.data && +d.data.total > 20),
                        (l = this.showMoreText
                          ? this.allList.slice(0, 20)
                          : this.allList),
                        (this.list = l.map(function (t) {
                          return (
                            (t.fontSize = h.getFontSize(t.name)),
                            (t.iconType = h.getMarket(t.code)),
                            (t.formatCode = i.utils.trimScode(t.code.slice(2))),
                            (t.formatZdf =
                              +t.zdf > 0 ? "+".concat(t.zdf) : t.zdf),
                            (t.formatTurnover = i.utils.bigNumberToText(
                              t.turnover
                            )),
                            t
                          );
                        }))),
                        (o.next = 15);
                      break;
                    case 13:
                      (o.prev = 13), (o.t0 = o.catch(2));
                    case 15:
                      (this.loading = !1),
                        this.firstLoaded ||
                          ((this.firstLoaded = !0),
                          this.$nextTick(function () {
                            h.$emit("loaded");
                          }),
                          setTimeout(function () {
                            h.$emit("loaded");
                          }, 500)),
                        this.$nextTick(function () {
                          return e(
                            h,
                            null,
                            t().mark(function e() {
                              var r, i, o, n, s, c;
                              return t().wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        if (
                                          !(this.list && this.list.length > 0)
                                        ) {
                                          t.next = 18;
                                          break;
                                        }
                                        return (
                                          (t.next = 3),
                                          this.getEleInfo(".list-block", this)
                                        );
                                      case 3:
                                        if (((t.t0 = t.sent), t.t0)) {
                                          t.next = 6;
                                          break;
                                        }
                                        t.t0 = {};
                                      case 6:
                                        return (
                                          (r = t.t0),
                                          (i = r.height),
                                          (o = void 0 === i ? 0 : i),
                                          (t.next = 11),
                                          this.getEleInfo(".caption", this)
                                        );
                                      case 11:
                                        if (((t.t1 = t.sent), t.t1)) {
                                          t.next = 14;
                                          break;
                                        }
                                        t.t1 = {};
                                      case 14:
                                        (n = t.t1),
                                          (s = n.height),
                                          (c = void 0 === s ? 0 : s),
                                          this.$emit(
                                            "getRankListHeight",
                                            o,
                                            2 * c
                                          );
                                      case 18:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                        });
                    case 16:
                    case "end":
                      return o.stop();
                  }
              },
              o,
              this,
              [[2, 13]]
            );
          })
        );
      },
      getEleInfo: function (t, e) {
        return new Promise(function (i, o) {
          document ||
            r.wx$1
              .createSelectorQuery()
              .in(e)
              .select(t)
              .fields({ node: !0, size: !0, rect: !0 })
              .exec(function (t) {
                if (t && t[0]) {
                  var e = (t && t[0]) || {};
                  i(e);
                } else o(new Error("Selector query returned no result"));
              });
        });
      },
      changeOrder: function (t) {
        this.orderIndex === t
          ? (this.orderDown = !this.orderDown)
          : ((this.orderIndex = t), (this.orderDown = !0)),
          this.getData(),
          0 === t
            ? r.StockBridge.report("hq.index_detail.zxj_order", {
                stockid: this.symbol,
              })
            : 1 === t
            ? r.StockBridge.report("hq.index_detail.zdf_order", {
                stockid: this.symbol,
              })
            : 2 === t &&
              r.StockBridge.report("stocklist.index_change_list", {
                stockid: this.symbol,
              });
      },
      getMarket: function (t) {
        return i.utils.splitSymbol(t).market;
      },
      getFontSize: function (t) {
        return t.length <= 7
          ? "0.4rem"
          : t.length <= 12
          ? "0.32rem"
          : t.length <= 16
          ? 0.32 - 0.03 * (t.length - 12) + "rem"
          : "0.28rem";
      },
      gotoDetail: function (t, e) {
        var o = this;
        this.touchList.splice(e, 1, !0);
        var n =
            this.list &&
            this.list.find(function (e) {
              return e.code === t.code;
            }),
          s = i.utils.splitSymbol(t.code),
          c = s.market,
          a = s.scode;
        if (
          (r.StockBridge.report("hq.index_detail.detail_click", {
            stockid: this.symbol,
          }),
          this.isLctApp)
        ) {
          var d = (this.$route && this.$route.query) || {},
            l = d.stat,
            h = void 0 === l ? "" : l,
            u = d.stat_data,
            p = h || (void 0 === u ? "" : u) || "";
          r.StockBridge.openExtraWebview(
            "https://wzq.tenpay.com/mm/detail?type="
              .concat(c, "&scode=")
              .concat(a, "&stat_data=")
              .concat(p, "&from=lctapp"),
            {}
          );
        } else {
          var f = {
            market: c,
            scode: a,
            name: t.name,
            stockType: (null == n ? void 0 : n.stock_type) || "",
          };
          "wzq" === r.StockBridge.ENV && (f.type = c),
            setTimeout(function () {
              r.StockRouter.routeTo({ name: "stockdetail", query: f }),
                (o.touchList = new Array(200).fill(!1));
            }, 500);
        }
      },
    },
  };
Array ||
  (
    r.resolveComponent("market-icon") +
    r.resolveComponent("NoData") +
    r.resolveComponent("st-status")
  )();
var c = r._export_sfc(s, [
  [
    "render",
    function (t, e, i, o, n, s) {
      return r.e(
        { a: n.list.length > 0 },
        n.list.length > 0
          ? r.e(
              {
                b: r.f(s.orderTypes, function (t, e, i) {
                  return {
                    a: r.t(n.cols[t][0]),
                    b: r.n(n.orderIndex !== e || n.orderDown ? "" : "active"),
                    c: r.n(n.orderIndex === e && n.orderDown ? "active" : ""),
                    d: e,
                    e: r.o(
                      function (t) {
                        return s.changeOrder(e);
                      },
                      1799,
                      e
                    ),
                  };
                }),
                c: r.f(n.list, function (t, e, i) {
                  return r.e(
                    { a: r.n(n.touchList[e] ? "list-block-touch" : "") },
                    s.isLite
                      ? {}
                      : {
                          b: "de1d6358-0-" + i,
                          c: r.p({
                            "icon-type": t.iconType,
                            "stock-type": t.stock_type,
                          }),
                        },
                    { d: r.t(t.name), e: t.fontSize },
                    s.isLite
                      ? {
                          f: "de1d6358-1-" + i,
                          g: r.p({
                            "icon-type": t.iconType,
                            "stock-type": t.stock_type,
                          }),
                        }
                      : {},
                    {
                      h: r.t(t.formatCode),
                      i: r.f(s.orderTypes, function (e, i, o) {
                        return r.e(
                          { a: "zxj" === e },
                          "zxj" === e ? { b: r.t(t.zxj) } : {},
                          { c: "zdf" === e },
                          "zdf" === e
                            ? {
                                d: r.t(t.formatZdf),
                                e: r.n(
                                  t.zdf > 0
                                    ? "rise"
                                    : t.zdf < 0
                                    ? "drop"
                                    : "gray"
                                ),
                              }
                            : {},
                          { f: "hsl" === e },
                          "hsl" === e ? { g: r.t(t.hsl) } : {},
                          { h: "turnover" === e },
                          "turnover" === e ? { i: r.t(t.formatTurnover) } : {},
                          { j: i }
                        );
                      }),
                      j: t.code,
                      k: r.o(
                        function (r) {
                          return s.gotoDetail(t, e);
                        },
                        1800,
                        t.code
                      ),
                    }
                  );
                }),
                d: !s.isLite,
                e: s.isLite,
                f: r.n(s.isMp ? "code-mp" : ""),
                g: 3 == i.market ? 1 : "",
                h: n.showMoreText,
              },
              n.showMoreText
                ? {
                    i: r.o(function () {
                      return (
                        s.checkMoreList && s.checkMoreList.apply(s, arguments)
                      );
                    }, 1801),
                  }
                : {}
            )
          : {},
        { j: 0 === n.list.length && n.firstLoaded && !n.error },
        (0 === n.list.length && n.firstLoaded && n.error, {}),
        { k: n.error },
        n.error
          ? {
              l: r.o(function (t) {
                return s.retryTab();
              }, 1802),
              m: r.p({ type: n.error }),
            }
          : {},
        {
          n: r.n("black" === i.skin && "skin-black"),
          o: r.n(n.error && "mod-rank-error"),
          p: r.n(s.isLite ? "" : "mod-rank-pro"),
        }
      );
    },
  ],
  ["__scopeId", "data-v-de1d6358"],
]);
wx.createComponent(c);
