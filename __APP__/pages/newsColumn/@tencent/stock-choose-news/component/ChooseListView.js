var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../stock-hq-core/utils/market.js"),
  o = require("../../stock-news-sdk/index.js"),
  n = require("../../stock-news-core/utils/market.js"),
  s = require("../../stock-hq-data/index.js"),
  i = require("../../../../../common/vendor.js"),
  r = null,
  c = {
    components: {},
    props: ["chooseList", "dataReady", "hasMore"],
    inject: { hqBridge: {} },
    data: function () {
      return { qtData: {}, showing: !0 };
    },
    created: function () {
      var t = this;
      r ||
        (r = new s.DetailApi(function (e) {
          return t.hqBridge.request(e);
        }));
    },
    watch: {
      chooseList: {
        handler: function () {
          this.startPollingQT();
        },
        immediate: !0,
      },
    },
    beforeDestroy: function () {
      this.stopPollingQT();
    },
    methods: {
      mpOnShow: function () {
        (this.showing = !0),
          (this.enterTime = Date.now()),
          this.startPollingQT();
      },
      mpOnHide: function () {
        (this.showing = !1), this.stopPollingQT();
      },
      open: function (t, e) {
        if (t)
          if ("stock" === e) {
            var n = this.splitSymbol(t.stock.symbol),
              s = n.market,
              i = n.scode;
            o.sdk.navigateToStockDetail({
              instance: this,
              symbol: t.stock.symbol,
              stockCode: i,
              stockMarket: s,
              scrollToTop: !0,
            });
          } else
            o.sdk.navigateToNewsDetail({ instance: this, id: t.id }),
              this.$emit("dataReport", "news.detail.choose_news_item_click", {
                id: t.id,
                newsid: t.id,
              });
      },
      updateUserStockQT: function () {
        return (
          (e = this),
          null,
          (o = t().mark(function e() {
            var o, n;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        0 !==
                        (o = this.chooseList
                          .map(function (t) {
                            return t.stock.symbol;
                          })
                          .filter(function (t) {
                            return void 0 !== t;
                          })).length
                      ) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt("return");
                    case 3:
                      return (
                        (o = Array.from(new Set(o))),
                        (t.next = 6),
                        r.getQTs(o, { encode: "utf8" })
                      );
                    case 6:
                      (n = t.sent) &&
                        Object.keys(n).length > 0 &&
                        (this.qtData = n);
                    case 8:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })),
          new Promise(function (t, n) {
            var s = function (t) {
                try {
                  r(o.next(t));
                } catch (t) {
                  n(t);
                }
              },
              i = function (t) {
                try {
                  r(o.throw(t));
                } catch (t) {
                  n(t);
                }
              },
              r = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(s, i);
              };
            r((o = o.apply(e, null)).next());
          })
        );
        var e, o;
      },
      startPollingQT: function () {
        var t = this;
        this.stopPollingQT(),
          this.showing &&
            (this.updateUserStockQT(),
            (this.qtTimer = setInterval(function () {
              t.updateUserStockQT();
            }, 5e3)));
      },
      stopPollingQT: function () {
        this.qtTimer && (clearInterval(this.qtTimer), (this.qtTimer = null));
      },
      symbol2qtCode: function (t) {
        return e.trimScode(null != t ? t : "").replace(".", "__");
      },
      qtZdf: function (t) {
        var e = this.qtData[this.symbol2qtCode(t)];
        return e && e[5] ? (e[5] > 0 ? "+".concat(e[5]) : e[5]) : "";
      },
      qtName: function (t, e) {
        var o = this.qtData[this.symbol2qtCode(t)];
        return o && o[1] && o[1].length > 0 ? o[1] : e;
      },
      splitSymbol: function (t) {
        var o,
          n = t.slice(0, 2);
        return {
          market: (n = null != (o = e.getMarketNumberByName(n)) ? o : n),
          scode: t.slice(2),
        };
      },
      stockMarketIcon: function (t) {
        return t && n.getMarketIcon(t);
      },
    },
  },
  a = i._export_sfc(c, [
    [
      "render",
      function (t, e, o, n, s, r) {
        return i.e(
          { a: o.chooseList && o.chooseList.length },
          o.chooseList && o.chooseList.length
            ? {
                b: i.f(o.chooseList, function (t, e, o) {
                  return i.e(
                    { a: t.stock },
                    t.stock
                      ? {
                          b: r.stockMarketIcon(t.stock.symbol),
                          c: i.t(r.qtName(t.stock.symbol, t.stock.name)),
                          d: i.t(
                            0 == r.qtZdf(t.stock.symbol).length
                              ? ""
                              : r.qtZdf(t.stock.symbol) + "%"
                          ),
                          e: i.n(
                            0 === r.qtZdf(t.stock.symbol)
                              ? "stop"
                              : r.qtZdf(t.stock.symbol) > 0
                              ? "red"
                              : "green"
                          ),
                          f: i.o(
                            function (e) {
                              return r.open(t, "stock");
                            },
                            3021,
                            e
                          ),
                        }
                      : {},
                    {
                      g: i.t(t.title),
                      h: i.o(
                        function (e) {
                          return r.open(t);
                        },
                        3022,
                        e
                      ),
                      i: t.importance,
                    },
                    (t.importance, {}),
                    { j: t.source },
                    t.source ? { k: i.t(t.source) } : {},
                    {
                      l: i.t(t.time),
                      m: i.o(
                        function (e) {
                          return r.open(t);
                        },
                        3023,
                        e
                      ),
                      n: i.n(t.read ? "read" : ""),
                      o: e,
                    }
                  );
                }),
              }
            : {},
          { c: o.chooseList.length },
          (o.chooseList.length || o.dataReady, {}),
          { d: o.dataReady }
        );
      },
    ],
    ["__scopeId", "data-v-6732a0c8"],
  ]);
wx.createComponent(a);
