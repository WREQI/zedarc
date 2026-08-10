require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("mixins/ChartMixin.js"),
  e = require("../../stock-hq-data/index.js"),
  i = require("../../../../../common/vendor.js"),
  o = {
    components: {
      f2: function () {
        return "../../stock-union-f2/f2MP.js";
      },
      ValuationIndex: function () {
        return "./valuation-index/mp.js";
      },
      WzqInfoModal: function () {
        return "../../../../quote/@tencent/st-wzqinfo-modal/src/WzqInfoModal.js";
      },
      EtfTipModal: function () {
        return "../../wzq-detail-brief/etf/TipsInfo.js";
      },
    },
    mixins: [t.ChartMixin],
    inject: ["hqBridge"],
    props: {
      market: String,
      scode: String,
      stockType: String,
      skin: String,
      profitForcast: Object,
      jumpFromAiPlugin: { type: Boolean, default: !1 },
      chartId: String,
      disableTooltips: Boolean,
    },
    data: function () {
      return {
        ylycSub: [
          { key: "mgsy", name: "每股收益", index: 2 },
          { key: "yysr", name: "营业收入", index: 0 },
          { key: "jlr", name: "净利润", index: 1 },
          { key: "mbj", name: "目标价", index: 3 },
        ],
        showYlycChart: !1,
        ylycSelectTab: "mgsy",
        ylycChartHash: "",
        showYlycContent: !0,
        disableTouchMove: !1,
        fontSkin: "west",
        legends: [],
        dataDesc: { num: 0, currency: "" },
        tipsData: null,
        showTooltips: !1,
        tooltipTimer: null,
        isTouching: !1,
        valuationIndexData: null,
        originCurrency: "",
        unit: "",
        isShowTipModal: !1,
        modalConfig: {
          title: "盈利预测功能说明",
          content: [
            {
              type: "text",
              text: "盈利预测功能和财报采用的会计准则不同，数据可能存在差异。",
            },
            {
              type: "text",
              text: "由于分析师通常采用非国际财务报告准则预测数据，为保证口径一致，盈利预测真实值也采用相同报告准则。",
            },
            {
              type: "text",
              text: "同一个季度报告期，个股盈利相关财务指标预测值与真实值的对比展示，可以了解公司盈利是否存在超预期或者低于预期的情况。其中预测值由数据商 Factset 根据分析师报告整理得出，当期预测值每日更新。",
            },
          ],
        },
      };
    },
    watch: {
      showTooltips: function (t) {
        t &&
          i.StockBridge.report(
            "hq.stock_detail.finance_profit_forcast_mbj_touch_click",
            { stockid: this.symbol }
          );
      },
      isShowYlyc: {
        handler: function (t, e) {
          t !== e && this.$emit("showModule", t);
        },
        immediate: !0,
      },
    },
    created: function () {
      (this.symbol = e.utils.getSymbol(this.market, this.scode)),
        this.isShowYlyc && this.initData();
    },
    beforeDestroy: function () {
      this.chartObj = null;
    },
    computed: {
      isLite: function () {
        return ["mpwzq", "wzqlight"].includes("mpweapp");
      },
      isWzq: function () {
        return ["stock"].includes("mpweapp");
      },
      isMpWzq: function () {
        return ["mpwzq"].includes("mpweapp");
      },
      isMpZxg: function () {
        return ["mpweapp"].includes("mpweapp");
      },
      isHSMarket: function () {
        return e.utils.isHSMarket(this.market);
      },
      isUSMarket: function () {
        return e.utils.isUSMarket(this.market);
      },
      isHKMarket: function () {
        return e.utils.isHKMarket(this.market);
      },
      chartConfig: function () {
        return { padding: [24, 3, 30, 3], animate: !1 };
      },
      cStyle: function () {
        return this.isLite
          ? "width: 604rpx; height: 348rpx;"
          : "width: 690rpx; height: 368rpx;";
      },
      isShowYlyc: function () {
        return (
          !e.utils.isFund(this.stockType) &&
          !e.utils.isKeChuangStock(this.stockType) &&
          this.showYlycContent
        );
      },
      themeColor: function () {
        var t = {},
          e = "dark" === this.skin || "black" === this.skin;
        return {
          borderLight: e ? "#262E40" : "#e9ebf0",
          orange: t.orange || "#ff891e",
          blue: t.bigBlue || "#3077ec",
          lightGray1: t.lightGray1 || "#7a8499",
          lightGray2: t.lightGray2 || "#98a0b3",
          tagBgColor: e ? "#12161f" : "#fff",
          pointFill: e ? "#12161f" : "#f5f6fa",
          crossLine: e ? "#f5f6fa" : "#000",
        };
      },
    },
    methods: {
      openDialog: function () {
        i.StockBridge.report(
          "hq.stock_detail.finance_profitforcast_small_i_click"
        ),
          this.isMpWzq || this.isMpZxg
            ? (this.isShowTipModal = !0)
            : this.isWzq
            ? this.$emit("showModal", {
                title: "盈利预测功能说明",
                content: [
                  {
                    content:
                      "盈利预测功能和财报采用的会计准则不同，数据可能存在差异。",
                  },
                  {
                    content:
                      "由于分析师通常采用非国际财务报告准则预测数据，为保证口径一致，盈利预测真实值也采用相同报告准则。",
                  },
                  {
                    content:
                      "同一个季度报告期，个股盈利相关财务指标预测值与真实值的对比展示，可以了解公司盈利是否存在超预期或者低于预期的情况。其中预测值由数据商 Factset 根据分析师报告整理得出，当期预测值每日更新。",
                  },
                ],
              })
            : this.hqBridge.busEmit("showEtfTipModal", { type: "ylyc" });
      },
      hideTipModal: function () {
        this.isShowTipModal = !1;
      },
      initData: function () {
        var t,
          e,
          i,
          o = this.profitForcast.aim_price,
          r = void 0 === o ? {} : o,
          n =
            this.isHKMarket ||
            this.isUSMarket ||
            !Array.isArray(r.aim_price_list) ||
            !r.aim_price_list.length;
        if (
          (n &&
            (this.ylycSub = this.ylycSub.filter(function (t) {
              return "mbj" !== t.key;
            })),
          this.isHSMarket)
        ) {
          if (
            0 ==
            +(null == (t = this.profitForcast.profit_forcast)
              ? void 0
              : t.show_module)
          )
            return void (this.showYlycContent = !1);
          if (
            !(null ==
            (i =
              null == (e = this.profitForcast.profit_forcast)
                ? void 0
                : e.year_profits)
              ? void 0
              : i.length)
          ) {
            if (3 === this.ylycSub.length)
              return void (this.showYlycContent = !1);
            this.ylycSelectTab = "mbj";
          }
          (this.ylycSub = this.ylycSub.sort(function (t, e) {
            return t.index - e.index;
          })),
            this.ylycSub.length && (this.ylycSelectTab = this.ylycSub[0].key),
            this.jumpFromAiPlugin && !n && (this.ylycSelectTab = "mbj");
        } else {
          var a = [];
          Object.keys(this.profitForcast).map(function (t) {
            switch (t) {
              case "EPS":
                a.push({ key: "mgsy", name: "每股收益", index: 2 });
                break;
              case "NET":
                a.push({ key: "jlr", name: "净利润", index: 1 });
                break;
              case "Sales":
                a.push({ key: "yysr", name: "营业收入", index: 0 });
            }
          }),
            a.length &&
              (a.sort(function (t, e) {
                return t.index - e.index;
              }),
              (this.ylycSub = a),
              (this.ylycSelectTab = a[0].key));
        }
        this.showYlycChart = !0;
      },
      formatValue: function (e) {
        if (isNaN(e)) return e;
        var i = 2;
        return (
          (this.isHKMarket || this.isUSMarket) && (i = 3),
          (+e > 0 ? "" : "-") + t.formatBigToText(Math.abs(e), 1, i, i)
        );
      },
      changeYlyc: function (t) {
        var e,
          o,
          r = this;
        this.ylycSelectTab !== t &&
          ((this.ylycSelectTab = t),
          "mbj" !== t
            ? (setTimeout(function () {
                r.hideTooltip();
              }, 0),
              (this.disableTouchMove = !1),
              this.isHSMarket &&
              !(null ==
              (o =
                null == (e = this.profitForcast.profit_forcast)
                  ? void 0
                  : e.year_profits)
                ? void 0
                : o.length)
                ? (this.showYlycChart = !1)
                : ((this.showYlycChart = !0),
                  (this.ylycChartHash = String(Math.random()))))
            : ((this.disableTouchMove = !0),
              (this.showYlycChart = !0),
              (this.ylycChartHash = String(Math.random()))),
          i.StockBridge.report(
            "hq.stock_detail.finance.profit_forcast.".concat(t, "_click"),
            { stockid: this.symbol }
          ));
      },
      formatData: function (t) {
        var e = [],
          i = this.ylycSelectTab;
        return (
          t.forEach(function (t) {
            switch (i) {
              case "mgsy":
                (t.upExpected = +t.eps > +t.fcst_eps),
                  e.push({
                    time: t.year,
                    value: "" !== t.eps ? +t.eps : null,
                    type: "真实值",
                    upExpected: t.upExpected,
                  }),
                  e.push({
                    time: t.year,
                    value: "" !== t.fcst_eps ? +t.fcst_eps : null,
                    type: "预测值",
                    upExpected: t.upExpected,
                  });
                break;
              case "yysr":
                (t.upExpected = +t.operating_rev > +t.fcst_rev),
                  e.push({
                    time: t.year,
                    value: "" !== t.operating_rev ? +t.operating_rev : null,
                    type: "真实值",
                    upExpected: t.upExpected,
                  }),
                  e.push({
                    time: t.year,
                    value: "" !== t.fcst_rev ? +t.fcst_rev : null,
                    type: "预测值",
                    upExpected: t.upExpected,
                  });
                break;
              case "jlr":
                (t.upExpected = +t.net_profit > +t.fcst_profit),
                  e.push({
                    time: t.year,
                    value: "" !== t.net_profit ? +t.net_profit : null,
                    type: "真实值",
                    upExpected: t.upExpected,
                  }),
                  e.push({
                    time: t.year,
                    value: "" !== t.fcst_profit ? +t.fcst_profit : null,
                    type: "预测值",
                    upExpected: t.upExpected,
                  });
                break;
              case "mbj":
                e.push({
                  time: t[0] || "",
                  value: (+t[2]).toFixed(2) || 0,
                  type: "股票收盘价",
                }),
                  e.push({
                    time: t[0] || "",
                    value: (+t[1]).toFixed(2) || 0,
                    type: "预测目标均价",
                  });
            }
          }),
          e
        );
      },
      computeStart: function (t) {
        if (!(t.length <= 0)) {
          var e = 1 / 0,
            i = 0;
          return (
            t.map(function (t) {
              +t.value < e && null !== t.value && (e = +t.value),
                +t.value > i && (i = +t.value);
            }),
            parseFloat(e - (i - e) / 3)
          );
        }
      },
      getYlycChartData: function () {
        var t = this.ylycSelectTab,
          e = { origin: [], deal: [], unit: "" };
        if (this.isHSMarket) {
          var o = this.profitForcast.profit_forcast || {},
            r = o.year_profits,
            n = void 0 === r ? [] : r,
            a = o.net_profit_unit,
            s = new Date().getFullYear();
          (e.origin = n.filter(function (t) {
            return +t.year <= s && +t.year >= s - 4;
          })),
            (e.deal = this.formatData(e.origin)),
            (e.unit = a);
        }
        if (this.isHKMarket || this.isUSMarket)
          switch (t) {
            case "mgsy":
              var l = this.profitForcast.EPS,
                c = l.currency,
                u = l.num,
                h = l.value,
                p = void 0 === h ? [] : h,
                f = l.unit;
              (this.dataDesc = { num: u, currency: "".concat(f).concat(c) }),
                (e.origin = p.map(function (t) {
                  return (
                    (t.year = t.endTimeStr),
                    (t.eps = t.real),
                    (t.fcst_eps = t.estimate),
                    t
                  );
                })),
                (e.deal = this.formatData(e.origin)),
                (e.unit = f),
                (this.originCurrency = c),
                (this.unit = f);
              break;
            case "yysr":
              var y = this.profitForcast.Sales,
                m = y.currency,
                d = y.num,
                g = y.value,
                k = void 0 === g ? [] : g,
                S = y.unit;
              (this.dataDesc = { num: d, currency: "".concat(S).concat(m) }),
                (e.origin = k.map(function (t) {
                  return (
                    (t.year = t.endTimeStr),
                    (t.operating_rev = t.real),
                    (t.fcst_rev = t.estimate),
                    t
                  );
                })),
                (e.deal = this.formatData(e.origin)),
                (e.unit = S),
                (this.originCurrency = m),
                (this.unit = S);
              break;
            case "jlr":
              var v = this.profitForcast.NET,
                b = v.currency,
                x = v.num,
                C = v.value,
                w = void 0 === C ? [] : C,
                _ = v.unit;
              (this.dataDesc = { num: x, currency: "".concat(_).concat(b) }),
                (e.origin = w.map(function (t) {
                  return (
                    (t.year = t.endTimeStr),
                    (t.net_profit = t.real),
                    (t.fcst_profit = t.estimate),
                    t
                  );
                })),
                (e.deal = this.formatData(e.origin)),
                (e.unit = _),
                (this.originCurrency = b),
                (this.unit = _);
          }
        return (
          (this.valuationIndexData = e.origin),
          this.$nextTick(function () {
            i.StockBridge.busEmit("valuationIndexData-update");
          }),
          e
        );
      },
      drawChart: function (t) {
        if ("mbj" === this.ylycSelectTab)
          return (
            (this.legends = [
              { title: "股票收盘价", color: this.themeColor.blue },
              { title: "预测目标均价", color: this.themeColor.orange },
            ]),
            this.drawTargetPriceChart(t)
          );
        (this.pureProfitData = this.getYlycChartData()),
          (this.legends = [
            { title: "真实值", color: this.themeColor.blue },
            { title: "预测值", color: this.themeColor.orange },
          ]),
          this.drawYlycCanvas(t);
      },
      drawTargetPriceChart: function (t) {
        var e = this,
          i = t.chart,
          o = t.config,
          r = (this.profitForcast.aim_price || {}).aim_price_list,
          n = void 0 === r ? [] : r,
          a = this.formatData(n);
        i.source(a, {
          time: {
            tickCount: 2,
            type: "timeCat",
            mask: "YYYY-MM-DD",
            range: [0, 1],
          },
          value: {
            tickCount: 2,
            type: "linear",
            formatter: function (t) {
              return (+t).toFixed(2);
            },
          },
        }),
          i.axis("value", !1),
          i.axis("time", {
            grid: null,
            line: {
              stroke: this.themeColor.borderLight,
              lineDash: null,
              lineWidth: 1,
              strokeOpacity: 0.5,
            },
            label: function (t, i, o) {
              var r = {
                fontFamily: "west" === e.fontSkin ? "stockFont" : "",
                textAlign: "center",
                fill: e.themeColor.lightGray1,
                fontSize: 10,
              };
              return (
                0 === i && (r.textAlign = "start"),
                i > 0 && i === o - 1 && (r.textAlign = "end"),
                r
              );
            },
          }),
          i.legend(!1),
          i.tooltip({
            custom: !0,
            crosshairsType: "y",
            showTooltipMarker: !1,
            alwaysShow: !0,
            triggerOn: [],
            crosshairsStyle: {
              stroke: this.themeColor.crossLine,
              lineWidth: 1,
            },
            onChange: function (t) {
              e.hqBridge.busEmit("lockSwiper", !0),
                (e.tipsData = {
                  layout: t.x < o.width / 2 ? "right" : "left",
                  title: t.items[0].title,
                  items: [
                    { name: t.items[0].name, value: t.items[0].value },
                    { name: "预测目标价", value: t.items[1].value },
                  ],
                });
            },
            onShow: function (t) {
              e.hqBridge.busEmit("lockSwiper", !0),
                (e.showTooltips = !0),
                (e.tipsData = {
                  layout: t.x < o.width / 2 ? "right" : "left",
                  title: t.items[0].title,
                  items: [
                    { name: t.items[0].name, value: t.items[0].value },
                    { name: "预测目标价", value: t.items[1].value },
                  ],
                });
            },
          }),
          i
            .line({ connectNulls: !0 })
            .position("time*value")
            .color("type", [this.themeColor.blue, this.themeColor.orange])
            .size(1);
        var s = {
          x: n[n.length - 1][0],
          y1: +n[n.length - 1][1],
          y2: +n[n.length - 1][2],
        };
        return (
          i
            .guide()
            .tag({
              top: !0,
              position: [s.x, s.y1],
              content: s.y1,
              limitInPlot: !0,
              direct: "tl",
              side: 0,
              offsetY: -4,
              background: {
                padding: [2, 3],
                radius: 2,
                fill: this.themeColor.tagBgColor,
                lineWidth: 0.5,
                stroke: this.themeColor.orange,
                strokeOpacity: 0.6,
              },
              textStyle: {
                fontSize: 10,
                fill: this.themeColor.orange,
                fontFamily: "west" === this.fontSkin ? "stockFont" : "",
              },
              withPoint: !0,
              pointStyle: {
                fill: this.themeColor.orange,
                r: 2.5,
                lineWidth: 1,
                stroke: this.themeColor.orange,
              },
            }),
          i
            .guide()
            .tag({
              top: !0,
              position: [s.x, s.y2],
              content: s.y2,
              limitInPlot: !0,
              direct: "tl",
              side: 0,
              offsetY: -4,
              background: {
                padding: [2, 3],
                radius: 2,
                fill: this.themeColor.tagBgColor,
                lineWidth: 1,
                stroke: this.themeColor.blue,
                strokeOpacity: 0.6,
              },
              textStyle: {
                fontSize: 10,
                fill: this.themeColor.blue,
                fontFamily: "west" === this.fontSkin ? "stockFont" : "",
              },
              withPoint: !0,
              pointStyle: {
                fill: this.themeColor.blue,
                r: 2.5,
                lineWidth: 1,
                stroke: this.themeColor.blue,
              },
            }),
          i.render(),
          (this.chartObj = i),
          i
        );
      },
      drawYlycCanvas: function (t) {
        var e = this,
          i = t.chart,
          o = this.ylycSelectTab,
          r = this.pureProfitData.origin.filter(function (t) {
            return !(t.real === t.estimate && "" === t.estimate);
          }),
          n = this.computeStart(this.pureProfitData.deal);
        i.source(this.pureProfitData.deal, {
          time: { type: "timeCat", mask: "YYYY" },
          value: { ticks: r.length > 1 ? [n] : null },
        }),
          i.axis("time", {
            line: {
              stroke: this.themeColor.borderLight,
              lineDash: null,
              lineWidth: 1,
              strokeOpacity: 0.5,
            },
            grid: null,
            label: function (t, i, o) {
              return (
                (e.isHKMarket || e.isUSMarket) &&
                  (t = e.pureProfitData.origin[i].endTime),
                {
                  fill: e.themeColor.lightGray1,
                  fontFamily: "west" === e.fontSkin ? "stockFont" : "",
                  fontSize: 10,
                  text: t,
                }
              );
            },
          }),
          i.axis("value", { line: null, grid: null }),
          i.legend(!1),
          i.tooltip(!1),
          i
            .line({ connectNulls: !0 })
            .position("time*value")
            .color("type", [this.themeColor.blue, this.themeColor.orange])
            .size(1)
            .shape("type", function (t) {
              return "真实值" === t ? "line" : "dash";
            }),
          i
            .point()
            .position("time*value")
            .size(2)
            .style("type", {
              fill: function (t) {
                return "真实值" === t
                  ? e.themeColor.blue
                  : e.themeColor.pointFill;
              },
              stroke: function (t) {
                return "真实值" === t ? e.themeColor.blue : e.themeColor.orange;
              },
              lineWidth: 1,
            }),
          this.pureProfitData.origin.forEach(function (t) {
            switch (o) {
              case "mgsy":
                t.eps &&
                  i
                    .guide()
                    .text({
                      top: !0,
                      position: [t.year, +t.eps],
                      content: ""
                        .concat(t.eps)
                        .concat(e.isHSMarket ? "元" : ""),
                      style: {
                        fill: e.themeColor.blue,
                        fontFamily: "west" === e.fontSkin ? "stockFont" : "",
                      },
                      offsetY: t.upExpected ? -15 : 15,
                    }),
                  t.fcst_eps &&
                    i
                      .guide()
                      .text({
                        top: !0,
                        position: [t.year, +t.fcst_eps],
                        content: ""
                          .concat(t.fcst_eps)
                          .concat(e.isHSMarket ? "元" : ""),
                        style: {
                          fill: e.themeColor.orange,
                          fontFamily: "west" === e.fontSkin ? "stockFont" : "",
                        },
                        offsetY: t.upExpected ? 15 : -15,
                      });
                break;
              case "yysr":
                t.operating_rev &&
                  i
                    .guide()
                    .text({
                      top: !0,
                      position: [t.year, +t.operating_rev],
                      content: e.formatValue(t.operating_rev),
                      style: {
                        fill: e.themeColor.blue,
                        fontFamily: "west" === e.fontSkin ? "stockFont" : "",
                      },
                      offsetY: t.upExpected ? -15 : 15,
                    }),
                  t.fcst_rev &&
                    i
                      .guide()
                      .text({
                        top: !0,
                        position: [t.year, +t.fcst_rev],
                        content: e.formatValue(t.fcst_rev),
                        style: {
                          fill: e.themeColor.orange,
                          fontFamily: "west" === e.fontSkin ? "stockFont" : "",
                        },
                        offsetY: t.upExpected ? 15 : -15,
                      });
                break;
              case "jlr":
                t.net_profit &&
                  i
                    .guide()
                    .text({
                      top: !0,
                      position: [t.year, +t.net_profit],
                      content: e.formatValue(t.net_profit),
                      style: {
                        fill: e.themeColor.blue,
                        fontFamily: "west" === e.fontSkin ? "stockFont" : "",
                      },
                      offsetY: t.upExpected ? -15 : 15,
                    }),
                  t.fcst_profit &&
                    i
                      .guide()
                      .text({
                        top: !0,
                        position: [t.year, +t.fcst_profit],
                        content: e.formatValue(t.fcst_profit),
                        style: {
                          fill: e.themeColor.orange,
                          fontFamily: "west" === e.fontSkin ? "stockFont" : "",
                        },
                        offsetY: t.upExpected ? 15 : -15,
                      });
            }
          }),
          i.render();
      },
      ylycTouchStart: function (t) {
        "mbj" === this.ylycSelectTab && this.chartTouchStart(t);
      },
    },
  };
Array ||
  (
    i.resolveComponent("f2") +
    i.resolveComponent("valuation-index") +
    i.resolveComponent("WzqInfoModal") +
    i.resolveComponent("etf-tip-modal")
  )();
var r = i._export_sfc(o, [
  [
    "render",
    function (t, e, o, r, n, a) {
      return i.e(
        { a: a.isShowYlyc },
        a.isShowYlyc
          ? i.e(
              { b: !o.jumpFromAiPlugin },
              o.jumpFromAiPlugin
                ? {}
                : {
                    c: i.o(function () {
                      return a.openDialog && a.openDialog.apply(a, arguments);
                    }, 2795),
                  },
              {
                d: i.f(n.ylycSub, function (t, e, o) {
                  return {
                    a: i.t(t.name),
                    b: i.n(n.ylycSelectTab === t.key ? "active" : ""),
                    c: t.key,
                    d: i.o(
                      function (e) {
                        return a.changeYlyc(t.key);
                      },
                      2796,
                      t.key
                    ),
                  };
                }),
                e: i.n("col-" + n.ylycSub.length),
                f: a.isHKMarket || a.isUSMarket,
              },
              a.isHKMarket || a.isUSMarket
                ? { g: i.t(n.dataDesc.num), h: i.t(n.dataDesc.currency) }
                : {},
              { i: n.showYlycChart },
              n.showYlycChart
                ? i.e(
                    { j: n.tipsData },
                    n.tipsData
                      ? {
                          k: i.t(n.tipsData.title),
                          l: i.f(n.tipsData.items, function (t, e, o) {
                            return { a: i.t(t.name), b: i.t(t.value), c: e };
                          }),
                          m: i.n(n.tipsData.layout),
                        }
                      : {},
                    {
                      n: i.sr("ylycCanvas", "09289865-0"),
                      o: i.o(a.drawChart, 2797),
                      p: i.o(t.chartTouchStop, 2798),
                      q: i.o(a.ylycTouchStart, 2799),
                      r: i.o(t.chartTouchMove, 2800),
                      s: i.p({
                        "chart-id": o.chartId || "ylycCanvas",
                        cClass: "ylycChartClass",
                        cStyle: a.cStyle,
                        disableTouchMove: n.disableTouchMove,
                        refreshHash: n.ylycChartHash,
                        config: a.chartConfig,
                      }),
                    }
                  )
                : {},
              { t: n.showYlycChart },
              n.showYlycChart
                ? {
                    v: i.f(n.legends, function (t, e, o) {
                      return {
                        a: i.n(t.iconType || ""),
                        b: t.color,
                        c: i.t(t.title),
                        d: e,
                      };
                    }),
                  }
                : {},
              { w: "mbj" !== n.ylycSelectTab && n.valuationIndexData },
              "mbj" !== n.ylycSelectTab && n.valuationIndexData
                ? {
                    x: i.p({
                      market: o.market,
                      "ylyc-select-tab": n.ylycSelectTab,
                      "index-data": n.valuationIndexData,
                      "origin-currency": n.originCurrency,
                      unit: n.unit,
                      jumpFromAiPlugin: o.jumpFromAiPlugin,
                    }),
                  }
                : {},
              { y: a.isMpZxg },
              a.isMpZxg
                ? i.e(
                    { z: n.isShowTipModal },
                    n.isShowTipModal
                      ? {
                          A: i.o(a.hideTipModal, 2801),
                          B: i.p({
                            skin: o.skin,
                            "is-mp": a.isMpZxg,
                            config: n.modalConfig,
                          }),
                        }
                      : {}
                  )
                : {},
              { C: a.isMpWzq },
              a.isMpWzq
                ? i.e(
                    { D: n.isShowTipModal },
                    n.isShowTipModal
                      ? {
                          E: i.o(a.hideTipModal, 2802),
                          F: i.p({ type: "ylyc" }),
                        }
                      : {}
                  )
                : {},
              {
                G: i.n(a.isLite ? "profit-forcast-lite" : "profit-forcast-pro"),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-09289865"],
]);
wx.createComponent(r);
