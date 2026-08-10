var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../common/vendor.js"),
  o = require("../../pages/information/mp.js"),
  i = require("../../../stock-hq-core/utils/market.js"),
  n = require("../../../stock-hq-data/index.js"),
  r = {
    props: [
      "chooseList",
      "listId",
      "isCurrSlide",
      "dataReady",
      "refreshChooseList",
      "mpScrollHeight",
    ],
    components: {
      MyChooseListContent: function () {
        return "./myChooseListContent.js";
      },
    },
    inject: { stockBridge: { default: {} } },
    data: function () {
      return {
        loadAll: !1,
        pullupText: "",
        enterTime: 0,
        qtTimer: null,
        qtData: {},
        showing: !1,
        mpRefreshTriggered: !1,
        mpPullDisabled: !1,
        specifiedScrollTop: 0,
        skin:
          (void 0 !== e.wx$1 && e.wx$1.getStorageSync
            ? e.wx$1.getStorageSync("user/skin")
            : null) || "white",
      };
    },
    computed: {
      disableReachBtm: function () {
        return !this.isCurrSlide || !this.dataReady;
      },
      isMP: function () {
        return "mp" === this.stockBridge.ENV;
      },
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
      onMpScroll: function (t) {
        this.$emit("onMpScroll", t);
      },
      onShow: function () {
        (this.showing = !0),
          (this.enterTime = Date.now()),
          this.stockBridge.report(o.INDEX_CHOOSE_VISITED),
          this.startPollingQT();
      },
      onHide: function () {
        (this.showing = !1), this.stopPollingQT();
      },
      open: function (t, e) {
        if (t)
          if ("stock" === e) {
            this.stockBridge.report(o.INDEX_INFORMATION_CHOOSE_STOCK, {
              stockid: t.stock.symbol || "",
            });
            var i = this.splitSymbol(t.stock.symbol),
              n = i.market,
              r = i.scode;
            this.$emit("open", { type: "stock", item: { m: n, c: r } });
          } else this.$emit("open", { columnId: "choose", item: t });
      },
      onMpReachBottom: function () {
        this.onPullingUp();
      },
      onPullingUp: function () {
        var t = this;
        return (
          this.stockBridge.report(o.INDEX_CHOOSE_PULLUP),
          this.loadAll
            ? Promise.resolve(!0)
            : this.refreshChooseList &&
              this.refreshChooseList(!1).then(function (e) {
                (t.loadAll = !e.hasNext), t.$emit("refreshListSuccess");
              })
        );
      },
      onPullingDown: function () {
        var t = this;
        (this.mpRefreshTriggered = !0),
          this.refreshChooseList &&
            this.refreshChooseList()
              .then(function (e) {
                (t.loadAll = !e.hasNext),
                  t.stockBridge.report(o.INDEX_CHOOSE_PULLDOWN),
                  (t.mpRefreshTriggered = !1),
                  o.initReachBottomCompStatus(t.$refs.reachBottom),
                  t.$emit("refreshListSuccess");
              })
              .catch(function () {
                t.mpRefreshTriggered = !1;
              });
      },
      updateUserStockQT: function () {
        return (
          (e = this),
          null,
          (o = t().mark(function () {
            var e,
              o,
              i,
              r = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        0 !=
                        (e = this.chooseList
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
                        (e = Array.from(new Set(e))),
                        (o = new n.DetailApi(function (t) {
                          return r.stockBridge.request(t, "GET");
                        })),
                        (t.next = 7),
                        o.getQTs(e, { encode: "utf8" })
                      );
                    case 7:
                      (i = t.sent),
                        i && Object.keys(i).length > 0 && (this.qtData = i);
                    case 9:
                    case "end":
                      return t.stop();
                  }
              },
              i,
              this
            );
          })),
          new Promise(function (t, i) {
            var n = function (t) {
                try {
                  s(o.next(t));
                } catch (t) {
                  i(t);
                }
              },
              r = function (t) {
                try {
                  s(o.throw(t));
                } catch (t) {
                  i(t);
                }
              },
              s = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(n, r);
              };
            s((o = o.apply(e, null)).next());
          })
        );
        var e, o;
      },
      startPollingQT: function () {
        var t = this;
        this.stopPollingQT(),
          this.updateUserStockQT(),
          (this.qtTimer = setInterval(function () {
            t.updateUserStockQT();
          }, 5e3));
      },
      stopPollingQT: function () {
        this.qtTimer && (clearInterval(this.qtTimer), (this.qtTimer = null));
      },
      splitSymbol: function (t) {
        var e,
          o = t.slice(0, 2);
        return {
          market: (o = null != (e = i.getMarketNumberByName(o)) ? e : o),
          scode: t.slice(2),
        };
      },
    },
  };
Array ||
  (
    e.resolveComponent("MyChooseListContent") +
    e.resolveComponent("st-reach-bottom") +
    e.resolveComponent("st-pull-refresh")
  )();
var s = e._export_sfc(r, [
  [
    "render",
    function (t, o, i, n, r, s) {
      return e.e(
        { a: !s.isMP },
        s.isMP
          ? e.e(
              { h: s.isMP },
              s.isMP
                ? {
                    i: e.o(s.open, 2571),
                    j: e.p({
                      chooseList: i.chooseList,
                      qtData: r.qtData,
                      dataReady: i.dataReady,
                      loadAll: r.loadAll,
                    }),
                    k: "".concat(i.mpScrollHeight, "px"),
                    l: !r.mpPullDisabled,
                    m: r.mpRefreshTriggered,
                    n: "black" === r.skin ? "white" : "black",
                    o: e.o(function (t) {
                      return s.onPullingDown();
                    }, 2572),
                    p: e.o(function () {
                      return s.onMpScroll && s.onMpScroll.apply(s, arguments);
                    }, 2573),
                    q: e.o(function () {
                      return (
                        s.onMpReachBottom &&
                        s.onMpReachBottom.apply(s, arguments)
                      );
                    }, 2574),
                  }
                : {}
            )
          : {
              b: e.o(s.open, 2569),
              c: e.p({
                chooseList: i.chooseList,
                qtData: r.qtData,
                dataReady: i.dataReady,
                loadAll: r.loadAll,
              }),
              d: e.sr("reachBottom", "de7f51a4-1,de7f51a4-0"),
              e: e.p({
                "on-reach-bottom": s.onPullingUp,
                finishedText: r.pullupText,
                disabled: s.disableReachBtm,
              }),
              f: e.sr("chooseScroll", "de7f51a4-0"),
              g: e.o(s.onPullingDown, 2570),
            }
      );
    },
  ],
]);
wx.createComponent(s);
