var t = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = Object.defineProperty,
  s = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  a = function (t, i, s) {
    return i in t
      ? e(t, i, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[i] = s);
  },
  n = require("../../../../common/vendor.js"),
  h = require("../stock-hq-data/index.js"),
  c = {
    components: {
      HistoryMins: function () {
        return "./components/HistoryMins.js";
      },
    },
    props: [
      "skin",
      "market",
      "scode",
      "fixNum",
      "touchMode",
      "initData",
      "stockType",
      "mpscrollTop",
      "boundaryMinsDate",
      "boundaryMinsString",
    ],
    data: function () {
      return {
        date: "",
        ready: !1,
        history: {
          width: 0,
          height: 0,
          marginTop: 0,
          show: !1,
          isTrading: !1,
          empty: !1,
          noPadding: !1,
          hasData: !0,
          preHasData: !0,
          nextHasData: !0,
          date: null,
          mins: null,
          barData: null,
          defaultBarData: null,
          preClose: 0,
        },
      };
    },
    computed: {
      isMP: function () {
        return n.StockBridge.ENV === n.EnvTypeEnum.MP;
      },
      symbol: function () {
        return h.utils.getSymbol(this.market, this.scode);
      },
    },
    mounted: function () {
      this.initData && this.showPanel(this.initData),
        n.StockBridge.busOn("common-pageScroll", this.pageScroll);
    },
    beforeUnmount: function () {
      this.scrollTimer &&
        (clearTimeout(this.scrollTimer),
        this.isMP || window.removeEventListener("scroll", this.hidePanel)),
        n.StockBridge.busOff("common-pageScroll", this.pageScroll);
    },
    methods: {
      pageScroll: function () {
        this.isAutoScroll || this.hidePanel();
      },
      getRectForMP: function (t, i) {
        return new Promise(function (e) {
          n.wx$1
            .createSelectorQuery()
            .in(t)
            .select(i)
            .boundingClientRect(function (t) {
              e(t);
            })
            .exec();
        });
      },
      showPanel: function (t) {
        var e = this;
        if (
          ((this.history.date = t.time),
          (this.history.empty = !1),
          (this.history.noPadding = !1),
          !this.history.show)
        ) {
          var s = this.isMP
            ? getApp().globalData.systemInfo.pixelRatio
            : window.devicePixelRatio;
          try {
            this.history.marginTop =
              -this.$parent.$refs.chart.view.layout.indicatorHeight / s;
          } catch (t) {
            this.history.marginTop = 0;
          }
          (this.history.show = !0),
            this.$nextTick(function () {
              return (
                (t = e),
                null,
                (s = i().mark(function t() {
                  var e,
                    s,
                    r,
                    o,
                    a,
                    h = this;
                  return i().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (!this.isMP) {
                              t.next = 6;
                              break;
                            }
                            return (
                              (t.next = 3),
                              this.getRectForMP(this, "#historyMins")
                            );
                          case 3:
                            (t.t0 = t.sent), (t.next = 7);
                            break;
                          case 6:
                            t.t0 =
                              this.$refs.historyMins.getBoundingClientRect();
                          case 7:
                            if (((e = t.t0), !this.isMP)) {
                              t.next = 14;
                              break;
                            }
                            return (
                              (t.next = 11),
                              this.getRectForMP(this.$parent, "#chart")
                            );
                          case 11:
                            (t.t1 = t.sent), (t.next = 15);
                            break;
                          case 14:
                            t.t1 =
                              this.$parent.$refs.chart.getBoundingClientRect();
                          case 15:
                            if (
                              ((s = t.t1),
                              this.isMP
                                ? ((r =
                                    s.height -
                                    (e.top - s.top) +
                                    this.history.marginTop +
                                    this.mpscrollTop),
                                  (this.isAutoScroll = !0),
                                  n.wx$1.pageScrollTo({
                                    scrollTop: r,
                                    duration: 0,
                                  }),
                                  setTimeout(function () {
                                    h.isAutoScroll = !1;
                                  }, 600))
                                : ((o = window.innerHeight - e.top - e.height),
                                  window.scrollTo(
                                    0,
                                    document.scrollingElement.scrollTop - o
                                  )),
                              0 !== this.history.width &&
                                0 !== this.history.height)
                            ) {
                              t.next = 27;
                              break;
                            }
                            if (!this.isMP) {
                              t.next = 24;
                              break;
                            }
                            return (
                              (t.next = 21),
                              this.getRectForMP(this, "#historyChartWrapper")
                            );
                          case 21:
                            (t.t2 = t.sent), (t.next = 25);
                            break;
                          case 24:
                            t.t2 = this.$refs.historyChartWrapper;
                          case 25:
                            (a = t.t2),
                              this.isMP
                                ? ((this.history.width = a.width - 8),
                                  (this.history.height = a.height))
                                : ((this.history.width = a.offsetWidth - 8),
                                  (this.history.height = a.offsetHeight));
                          case 27:
                            this.isMP ||
                              (this.scrollTimer = setTimeout(function () {
                                window.addEventListener("scroll", h.hidePanel);
                              }, 200));
                          case 28:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })),
                new Promise(function (i, e) {
                  var r = function (t) {
                      try {
                        a(s.next(t));
                      } catch (t) {
                        e(t);
                      }
                    },
                    o = function (t) {
                      try {
                        a(s.throw(t));
                      } catch (t) {
                        e(t);
                      }
                    },
                    a = function (t) {
                      return t.done
                        ? i(t.value)
                        : Promise.resolve(t.value).then(r, o);
                    };
                  a((s = s.apply(t, null)).next());
                })
              );
              var t, s;
            });
        }
        var r = this.$parent.$refs.chart.getSiblingData(t.time),
          o = r.pre,
          a = r.next;
        this.date = t.time.replace(/-/g, "");
        var h = +this.date,
          c = +(null == o ? void 0 : o.time.replace(/-/g, "")),
          l = +(null == a ? void 0 : a.time.replace(/-/g, ""));
        (this.history.hasData = h >= this.boundaryMinsDate),
          (this.history.preHasData = c >= this.boundaryMinsDate),
          (this.history.nextHasData = l >= this.boundaryMinsDate),
          (this.ready = !1),
          this.$nextTick(function () {
            e.ready = !0;
          });
      },
      hidePanel: function (t) {
        this.history.show &&
          ((this.history.show = !1),
          (this.history.barData = null),
          this.$parent.$refs.chart.toggleKlineWithHistoryMins(!1),
          this.isMP || window.removeEventListener("scroll", this.hidePanel),
          t &&
            n.StockBridge.report("hq.stock_detail.history_mins_close", {
              stockid: this.symbol,
            }),
          this.$emit("hidePanel"));
      },
      getColorClass: function (t) {
        return 0 === t ? "color-equal" : t > 0 ? "color-rise" : "color-drop";
      },
      getBarData: function (i) {
        var e = this,
          n = i || {},
          h = n.items,
          c = void 0 === h ? [] : h,
          l = n.preClose,
          d = n.avgPrice;
        if (0 !== c.length) {
          var y = +c[c.length - 1].price,
            u = y - l;
          this.history.preClose = l;
          var p = +new Date().toISOString().slice(0, 10).replace(/-/g, "");
          if (
            ((this.history.defaultBarData = {
              title:
                +this.date === p && this.history.isTrading ? "最新" : "收盘",
              avg: d.toFixed(this.fixNum),
              avgClass: this.getColorClass(d - l),
              price: y.toFixed(this.fixNum),
              zde: "".concat(u > 0 ? "+" : "").concat(u.toFixed(this.fixNum)),
              zdf: +l
                ? ""
                    .concat(u > 0 ? "+" : "")
                    .concat(((100 * u) / l).toFixed(2), "%")
                : "0.00",
              zdClass: this.getColorClass(u),
            }),
            (this.history.barData = (function (i, e) {
              for (var n in e || (e = {})) r.call(e, n) && a(i, n, e[n]);
              if (s) {
                var h,
                  c = t(s(e));
                try {
                  for (c.s(); !(h = c.n()).done; ) {
                    n = h.value;
                    o.call(e, n) && a(i, n, e[n]);
                  }
                } catch (t) {
                  c.e(t);
                } finally {
                  c.f();
                }
              }
              return i;
            })({}, this.history.defaultBarData)),
            this.isMP)
          ) {
            var f = ""
              .concat(this.history.date, "均价 ")
              .concat(this.history.barData.avg, " ")
              .concat(this.history.barData.title, " ")
              .concat(this.history.barData.price, " ")
              .concat(this.history.barData.zde, " ")
              .concat(this.history.barData.zdf);
            this.history.noPadding = f.length >= 50;
          } else
            this.$nextTick(function () {
              var t = e.$refs.historyTextArea;
              e.history.noPadding = t.offsetWidth < t.scrollWidth;
            });
        } else this.history.empty = !0;
      },
      onTouchMove: function (t) {
        var i = this.history.preClose,
          e = t.price - i;
        this.history.barData = {
          title: "数值",
          avg: (+t.avgPrice).toFixed(this.fixNum),
          avgClass: this.getColorClass(t.avgPrice - i),
          price: (+t.price).toFixed(this.fixNum),
          zde: "".concat(e > 0 ? "+" : "").concat(e.toFixed(this.fixNum)),
          zdf: +i
            ? ""
                .concat(e > 0 ? "+" : "")
                .concat(((100 * e) / i).toFixed(2), "%")
            : "0.00",
          zdClass: this.getColorClass(e),
        };
      },
      onTouchCancel: function () {
        (this.history.barData = this.history.defaultBarData),
          n.StockBridge.report("hq.stock_detail.history_mins_touch_cross", {
            stockid: this.symbol,
          });
      },
      switchByCrossLine: function (t) {
        this.history.show &&
          this.history.date !== t.time &&
          ((this.history.barData = null),
          this.showPanel(t),
          n.StockBridge.report("hq.stock_detail.history_mins_op_kline", {
            stockid: this.symbol,
            date: this.history.date,
          }));
      },
      switchByIndex: function (t) {
        if (
          this.history.show &&
          ((-1 === t && this.history.preHasData) ||
            (1 === t && this.history.nextHasData))
        ) {
          if (this.touchMode) {
            this.$parent.$refs.chart.switchCrossLine(t);
            var i = this.history.date,
              e = this.$parent.$refs.chart.getSiblingData(i),
              s = e.pre,
              r = e.next;
            (this.history.barData = null), this.showPanel(t < 0 ? s : r);
          } else {
            this.$parent.$refs.chart.switchCrossLine();
            var o = this.$parent.$refs.chart.getRightData();
            (this.history.barData = null), this.showPanel(o);
          }
          n.StockBridge.report("hq.stock_detail.history_mins_switch_day", {
            stockid: this.symbol,
          });
        }
      },
    },
  };
Array || n.resolveComponent("HistoryMins")();
var l = n._export_sfc(c, [
  [
    "render",
    function (t, i, e, s, r, o) {
      return n.e(
        { a: n.t(r.history.date), b: r.history.barData },
        r.history.barData
          ? {
              c: n.t(r.history.barData.avg),
              d: n.n(r.history.barData.avgClass),
              e: n.t(r.history.barData.title),
              f: n.t(r.history.barData.price),
              g: n.n(r.history.barData.zdClass),
              h: n.t(r.history.barData.zde),
              i: n.n(r.history.barData.zdClass),
              j: n.t(r.history.barData.zdf),
              k: n.n(r.history.barData.zdClass),
            }
          : {},
        {
          l: n.o(function (t) {
            return o.hidePanel(!0);
          }, 4701),
          m: r.history.noPadding ? 1 : "",
          n: r.history.hasData,
        },
        r.history.hasData
          ? n.e(
              { o: r.ready },
              r.ready
                ? {
                    p: n.o(o.getBarData, 4702),
                    q: n.o(o.onTouchMove, 4703),
                    r: n.o(o.onTouchCancel, 4704),
                    s: n.p({
                      skin: e.skin,
                      width: r.history.width,
                      height: r.history.height,
                      market: e.market,
                      scode: e.scode,
                      date: r.date,
                      stockType: e.stockType,
                    }),
                  }
                : {}
            )
          : n.e(
              { t: r.history.empty },
              r.history.empty
                ? { v: n.t(r.history.date) }
                : { w: n.t(e.boundaryMinsString) }
            ),
        {
          x: r.history.preHasData ? "" : 1,
          y: n.o(function (t) {
            return o.switchByIndex(-1);
          }, 4705),
          z: r.history.nextHasData ? "" : 1,
          A: n.o(function (t) {
            return o.switchByIndex(1);
          }, 4706),
          B: n.o(function () {}, 4707),
        }
      );
    },
  ],
  ["__scopeId", "data-v-fcade407"],
]);
wx.createComponent(l);
