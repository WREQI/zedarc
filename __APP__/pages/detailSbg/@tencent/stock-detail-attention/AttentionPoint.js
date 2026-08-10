require("../../../../@babel/runtime/helpers/Objectentries");
var t = require("../../../../common/vendor.js"),
  e = require("../stock-hq-data/index.js"),
  a = require("../stock-crypto-modules-config/dist/index.js");
function o(e) {
  var o = [];
  for (var n in e) n && o.push("".concat(n, "=").concat(e[n]));
  o.push("key=".concat(a.dist.SIGN_KEY.wzq_analyse)),
    (e.sign = t.md5Module(o.join("&")).toLowerCase());
}
function n(t) {
  var e = "",
    a = Object.keys(t).length;
  return (
    Object.keys(t).forEach(function (o, n) {
      e =
        n !== a - 1
          ? "".concat(e).concat(o, "=").concat(t[o], "&")
          : "".concat(e).concat(o, "=").concat(t[o]);
    }),
    e
  );
}
var r = {
  components: {
    PlateIntro: function () {
      return "./components/PlateIntro.js";
    },
    SpotList: function () {
      return "./components/spotList.js";
    },
    StockCard: function () {
      return "./components/stockCard.js";
    },
    ConceptHeat: function () {
      return "./components/conceptHeat.js";
    },
    PlateCard: function () {
      return "./components/plateCard.js";
    },
    f2: function () {
      return "../stock-union-f2/f2MP.js";
    },
    NoData: function () {
      return "./components/NoData.js";
    },
  },
  props: {
    skin: String,
    intro: String,
    plateId: String,
    plateStockType: String,
  },
  options: { styleIsolation: "shared" },
  data: function () {
    return {
      currHeat: "",
      teachData: {},
      marketTemperData: [],
      hotStockData: [],
      hotFundData: [],
      hotSpotData: [],
      plateOneLevelData: [],
      plateTwoLevelData: [],
      valueBasicData: { PE: {}, PB: {} },
      valueHistseqDataPB: [],
      valueHistseqDataPE: [],
      valueHistseqData: [],
      interval: null,
      currentTab: "PE",
      valueHash: "",
      graphExtra: {
        showTooltip: !1,
        time: "",
        value: 0,
        left: !1,
        percent: "",
      },
      showValueGraph: { PE: !1, PB: !1 },
      touchTimeOut: null,
      longPress: !1,
      valueChart: null,
      plateWhiteList: [
        "01801782",
        "01801783",
        "01801784",
        "01801785",
        "01801193",
        "01801194",
        "01801191",
        "01801181",
        "01801183",
        "01801780",
        "01801790",
        "01801180",
      ],
      teachLoaded: !1,
      hotLoaded: !1,
      stockLoaded: !1,
      valuationLoaded: !1,
      plateLoaded: !1,
      chartConfig: { padding: [0, 5, 23, 0] },
    };
  },
  computed: {
    isMP: function () {
      return "mp" === t.StockBridge.ENV;
    },
    isDark: function () {
      return "dark" === this.skin || "black" === this.skin;
    },
    valueColorFilter: function () {
      return function (t) {
        return t
          ? 1 == +t
            ? "green"
            : 2 == +t
            ? "orange"
            : 3 == +t
            ? "red"
            : void 0
          : "";
      };
    },
    valueTextFilter: function () {
      return function (t) {
        return t
          ? 1 == +t
            ? "低估值区"
            : 2 == +t
            ? "正常估值区"
            : 3 == +t
            ? "高估值区"
            : void 0
          : "--";
      };
    },
    dateFilter: function () {
      return function (t) {
        if (t) return t.split("-").join(".");
      };
    },
    heatTextFormat: function () {
      return function (t) {
        if (t) {
          var e = [];
          return (
            e.push(t.change_desc1),
            e.push(t.change_desc2),
            e.push(t.change_desc3),
            e.push(t.change_desc4),
            (e = e.filter(function (t) {
              return "" !== t;
            })).join(",")
          );
        }
      };
    },
  },
  created: function () {
    var t = this;
    -1 !==
      this.plateWhiteList.findIndex(function (e) {
        return e === t.plateId;
      }) && (this.currentTab = "PB"),
      Promise.all([
        this.getPlateTeach(),
        this.getHotList(),
        this.getHotStockList(),
        this.getValuationList("pe"),
        this.getValuationList("pb"),
        this.getPlateList(),
      ])
        .then(function () {
          t.checkAllLoaded();
        })
        .catch(function (t) {}),
      this.judgeTime();
  },
  beforeDestroy: function () {
    this.clearRefresh();
  },
  methods: {
    checkAllLoaded: function () {
      this.teachLoaded &&
        this.hotLoaded &&
        this.stockLoaded &&
        this.valuationLoaded &&
        this.plateLoaded &&
        this.$emit("loaded");
    },
    chartTouchStart: function (e) {
      var a = this;
      this.touchTimeOut &&
        (clearTimeout(this.touchTimeOut), (this.touchTimeOut = null)),
        (this.touchTimeOut = setTimeout(function () {
          var o;
          (a.longPress = !0),
            null == (o = a.$refs.lineChart.$el.querySelector("#valueChart")) ||
              o.dispatchEvent(e),
            t.StockBridge.report("hq.plate_detail.valuation_graph_touch");
        }, 500));
    },
    chartTouchMove: function (t) {
      var e = this;
      this.longPress
        ? (t.preventDefault(),
          setTimeout(function () {
            var a;
            null == (a = e.$refs.lineChart.$el.querySelector("#valueChart")) ||
              a.dispatchEvent(t);
          }, 0))
        : clearTimeout(this.touchTimeOut);
    },
    chartTouchEnd: function () {
      var t = this;
      this.longPress &&
        setTimeout(function () {
          t.chartValue.hideTooltip(),
            clearTimeout(t.touchTimeOut),
            (t.touchTimeOut = null);
        }, 1e3),
        (this.longPress = !1),
        clearTimeout(this.touchTimeOut);
    },
    clearRefresh: function () {
      this.interval && clearInterval(this.interval);
    },
    judgeTime: function () {
      var t = this,
        a = new Date().toTimeString().slice(0, 5).replace(":", "");
      e.utils.isHSPlate("p") &&
        (function (t) {
          return (t >= "0930" && t <= "1130") || (t >= "1300" && t <= "1500");
        })(a) &&
        (this.interval = setInterval(function () {
          t.getPlateList();
        }, 5e3));
    },
    gotoCourseTeach: function (e) {
      var a = "",
        o = {};
      if (e.course_id)
        (a = "/information/courseDetail"),
          (o = { id: e.course_id, cid: e.snp_id || "" });
      else {
        if (!e.video_id) return;
        (a = "/information/videoDetail"), (o = { id: e.video_id });
      }
      if (
        (t.StockBridge.report("hq.plate_detail.course_teach_click"), this.isMP)
      ) {
        var n = Object.keys(o)
          .map(function (t) {
            return "".concat(t, "=").concat(o[t]);
          })
          .join("&");
        t.StockBridge.openExtraWebview(
          "https://wzq.tenpay.com/mp/v2/index.html#".concat(a, "?").concat(n)
        );
      } else t.StockBridge.routeTo({ path: a, query: o });
    },
    getCurrentHeat: function (t) {
      this.currHeat = t;
    },
    showTeachTips: function () {
      t.StockRouter.routeTo({
        name: "informationDetail",
        query: {
          id: "SN20220629170316804d2480",
          articleStyle: "fullTeach",
          anchorTitle: "板块分析",
        },
      }),
        t.StockBridge.report("hq.plate_detail.plate_analysis_i_click");
    },
    gotoHotAllList: function () {
      this.isMP
        ? t.StockBridge.openExtraWebview(
            "https://wzq.tenpay.com/mp/v2/index.html#/plate/hotSpot?plateId=".concat(
              this.plateId
            )
          )
        : t.StockBridge.routeTo({
            path: "/plate/hotSpot",
            query: { plateId: this.plateId },
          }),
        t.StockBridge.report("hq.plate_detail.checkmore_hotspot");
    },
    gotoCfgTab: function () {
      this.$emit("changeplatetab", "constituent"),
        t.StockBridge.report("hq.plate_detail.checkmore_hotstock");
    },
    gotoEtfTab: function () {
      this.$emit("changeplatetab", "innerfund"),
        t.StockBridge.report("hq.plate_detail.checkmore_hotfund");
    },
    getPlateTeach: function () {
      var e = this;
      (function (e) {
        var a = {
          board_code: e.board_code || "",
          source: "wzq",
          user_type: 5,
          "x-sa-sign": !0,
        };
        o(a);
        var r =
          "https://bisheng.tenpay.com/fcgi-bin/xg_board_toujiao.fcgi?".concat(
            n(a)
          );
        return t.StockBridge.request(r, "GET", { "x-sa-sign": !0 });
      })({ board_code: this.plateId })
        .then(function (t) {
          0 == +t.retcode && t.data && (e.teachData = t.data),
            e.$nextTick(function () {
              (e.teachLoaded = !0), e.checkAllLoaded();
            });
        })
        .catch(function (t) {
          e.$nextTick(function () {
            (e.teachLoaded = !0), e.checkAllLoaded();
          });
        });
    },
    getHotList: function () {
      var e = this;
      (function (e) {
        var a = {
          exchange: 12,
          plate_code: e.plate_code || "",
          qry_type: "kandian",
          source: "wzq",
          user_type: 5,
          "x-sa-sign": !0,
        };
        o(a);
        var r =
          "https://bisheng.tenpay.com/fcgi-bin/xg_plate_news_hotspot.fcgi?".concat(
            n(a)
          );
        return t.StockBridge.request(r, "GET", { "x-sa-sign": !0 });
      })({ plate_code: this.plateId })
        .then(function (t) {
          0 == +t.retcode &&
            t.hot_spot &&
            ((e.hotSpotData = t.hot_spot.history_hot_spot || []),
            e.hotSpotData &&
              e.hotSpotData.length > 0 &&
              (e.hotSpotData = e.hotSpotData.slice(0, 2))),
            e.$nextTick(function () {
              (e.hotLoaded = !0), e.checkAllLoaded();
            });
        })
        .catch(function (t) {
          e.$nextTick(function () {
            (e.hotLoaded = !0), e.checkAllLoaded();
          });
        });
    },
    getHotStockList: function () {
      var e = this;
      (function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          a = {
            concept_code: e.concept_code || "",
            exchange: 12,
            qry_type: "kandian",
            source: "wzq",
            type: 1,
            user_type: 5,
            "x-sa-sign": !0,
          };
        o(a);
        var r =
          "https://bisheng.tenpay.com/fcgi-bin/xg_get_concept_detail.fcgi?".concat(
            n(a)
          );
        return t.StockBridge.request(r, "GET", { "x-sa-sign": !0 });
      })({ concept_code: this.plateId })
        .then(function (t) {
          0 == +t.retcode &&
            t.data &&
            ((e.hotStockData =
              t.data.tab_summary && t.data.tab_summary.top5_stocks),
            (e.hotFundData =
              t.data.tab_summary && t.data.tab_summary.top_funds),
            (e.marketTemperData =
              t.data.tab_top && t.data.tab_top.market_temperature)),
            e.$nextTick(function () {
              (e.stockLoaded = !0), e.checkAllLoaded();
            });
        })
        .catch(function (t) {
          e.$nextTick(function () {
            (e.stockLoaded = !0), e.checkAllLoaded();
          });
        });
    },
    formatTags: function (t) {
      return (
        Array.isArray(t) &&
          t.map(function (t) {
            if (
              t.plate_basic &&
              Array.isArray(t.plate_basic.tags) &&
              t.plate_basic.tags.length > 0
            ) {
              var e = [];
              t.plate_basic.tags.map(function (t) {
                e.push(
                  (function (t) {
                    var e = [],
                      a = t.match(/\d+天/g);
                    a && e.push(a);
                    var o = t.match(/\d+次/g);
                    o && e.push(o);
                    var n = t.match(/主力/g);
                    return (
                      n && e.push(n),
                      (function (t) {
                        var e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : [];
                        if (!t) return [];
                        if (0 === e.length)
                          return [{ type: "text", value: t, position: 0 }];
                        for (
                          var a,
                            o = new RegExp("(".concat(e.join("|"), ")"), "g"),
                            n = [],
                            r = 0;
                          null !== (a = o.exec(t));

                        )
                          a.index > r &&
                            n.push({
                              type: "text",
                              value: t.slice(r, a.index),
                              position: r,
                            }),
                            n.push({
                              type: "keyword",
                              value: a[0],
                              position: a.index,
                            }),
                            (r = a.index + a[0].length);
                        return (
                          r < t.length &&
                            n.push({
                              type: "text",
                              value: t.slice(r),
                              position: r,
                            }),
                          n
                        );
                      })(t, e)
                    );
                  })(t)
                );
              }),
                (t.plate_basic.tags = e);
            }
          }),
        t
      );
    },
    getPlateList: function () {
      var e = this,
        a = "BK-HY-1" === this.plateStockType ? 1 : 2;
      (function (e) {
        var a = {
          exchange: 12,
          plate_code: e.plate_code,
          plate_level: e.plate_level,
          source: "wzq",
          time: new Date().getTime(),
          user_type: 5,
          "x-sa-sign": !0,
        };
        o(a);
        var r =
          "https://bisheng.tenpay.com/fcgi-bin/xg_related_plates.fcgi?".concat(
            n(a)
          );
        return t.StockBridge.request(r, "GET", { "x-sa-sign": !0 });
      })({ plate_code: this.plateId, plate_level: a })
        .then(function (t) {
          0 == +t.retcode &&
            t.data &&
            t.data.length > 0 &&
            ((t.data = e.formatTags(t.data)),
            2 === a
              ? ((e.plateOneLevelData = t.data.slice(0, 1) || []),
                (e.plateTwoLevelData = t.data.slice(1) || []))
              : ((e.plateOneLevelData = []),
                (e.plateTwoLevelData = t.data || []))),
            e.$nextTick(function () {
              (e.plateLoaded = !0), e.checkAllLoaded();
            });
        })
        .catch(function (t) {
          e.$nextTick(function () {
            (e.plateLoaded = !0), e.checkAllLoaded();
          });
        });
    },
    getValuationList: function (e) {
      var a = this;
      (function (e) {
        var a = {
          board_code: e.board_code,
          source: "wzq",
          type: e.type,
          user_type: 5,
          years: 5,
        };
        o(a);
        var r =
          "https://bisheng.tenpay.com/fcgi-bin/xg_board_pb_pe.fcgi?".concat(
            n(a)
          );
        return t.StockBridge.request(
          r,
          "GET",
          {},
          { header: { "x-sa-sign": !0 } }
        );
      })({ board_code: this.plateId, type: e })
        .then(function (t) {
          0 == +t.retcode &&
            ("pb" === e
              ? ((a.valueBasicData.PB = t.board_stat || {}),
                (a.valueHistseqDataPB = t.hist_seq || []),
                a.valueHistseqDataPB &&
                  a.valueHistseqDataPB.length > 0 &&
                  ((a.valueHistseqDataPB = a.valueHistseqDataPB.reverse()),
                  "PB" === a.currentTab &&
                    (a.valueHistseqData = a.valueHistseqDataPB),
                  (a.showValueGraph.PB = !0)))
              : ((a.valueBasicData.PE = t.board_stat || {}),
                (a.valueHistseqDataPE = t.hist_seq || []),
                a.valueHistseqDataPE &&
                  a.valueHistseqDataPE.length > 0 &&
                  ((a.valueHistseqDataPE = a.valueHistseqDataPE.reverse()),
                  "PE" === a.currentTab &&
                    (a.valueHistseqData = a.valueHistseqDataPE),
                  (a.showValueGraph.PE = !0)))),
            a.$nextTick(function () {
              (a.valuationLoaded = !0), a.checkAllLoaded();
            });
        })
        .catch(function (t) {
          a.$nextTick(function () {
            (a.valuationLoaded = !0), a.checkAllLoaded();
          });
        });
    },
    changeTab: function (e) {
      (this.currentTab = e),
        "PB" === this.currentTab
          ? (this.valueHistseqData = this.valueHistseqDataPB)
          : (this.valueHistseqData = this.valueHistseqDataPE),
        (this.valueHash = String(Math.random())),
        t.StockBridge.report("hq.plate_detail.pe_pb_tab_click");
    },
    drawValueChart: function (t) {
      var e = this,
        a = t.chart,
        o = t.config;
      this.valueChart && this.valueChart.clear && this.valueChart.clear(),
        (this.chartValue = a);
      var n = [],
        r =
          (n = (n = (n = this.valueHistseqData).map(function (t, e) {
            var a = t && Object.entries(t) && Object.entries(t)[0],
              o = [];
            if ("" === a[1] && 0 === e)
              return { time: a[0], value: "", percent: +a[1][1], tag: !0 };
            if ("" === a[1] && e >= 1) {
              for (
                var r = e - 1;
                r >= 0 &&
                "" ===
                  (o =
                    n[r] && Object.entries(n[r]) && Object.entries(n[r])[0])[1];
                r--
              );
              return -1 === r
                ? { time: a[0], value: "", percent: +a[1][1], tag: !0 }
                : { time: a[0], value: +o[1][0], percent: +o[1][1], tag: !0 };
            }
            return { time: a[0], value: +a[1][0], percent: +a[1][1], tag: !1 };
          })).filter(function (t) {
            return 0 != +t.value;
          })).length - 1;
      n && 0 === n.length && (this.showValueGraph[this.currentTab] = !1),
        a.axis("date", !1),
        a.legend(!1),
        a.tooltip(!1);
      var i =
          this.valueBasicData &&
          this.valueBasicData[this.currentTab] &&
          this.valueBasicData[this.currentTab].inteval &&
          +this.valueBasicData[this.currentTab].inteval[0],
        c =
          this.valueBasicData &&
          this.valueBasicData[this.currentTab] &&
          this.valueBasicData[this.currentTab].inteval &&
          +this.valueBasicData[this.currentTab].inteval[3],
        s = [],
        l = {};
      if (c && i) {
        for (var u = (c - i) / 4, h = 0; h < 5; h++) s.push(i + u * h);
        l = { ticks: s };
      } else l = { tickCount: 5 };
      if (
        (a.source(n, { value: l }),
        a.axis("time", {
          line: !1,
          label: function (t, e, a) {
            var o = { textAlign: "center", fontSize: 12, fill: "#A7B0C4" };
            return (
              0 === e && (o.textAlign = "start"),
              e > 0 && e === a - 1 && (o.textAlign = "end"),
              (o.text =
                0 === e || e === a - 1
                  ? ""
                      .concat(t.slice(0, 4), "-")
                      .concat(t.slice(4, 6), "-")
                      .concat(t.slice(6))
                  : ""),
              o
            );
          },
        }),
        a.axis("value", {
          line: !1,
          grid: null,
          labelOffset: -2,
          label: function (t, e, a) {
            var o = {
              textAlign: "start",
              fontSize: 12,
              fill: "#A7B0C4",
              top: !0,
            };
            return (
              (o.text = (+t).toFixed(2)),
              0 === e
                ? (o.textBaseline = "bottom")
                : e === a - 1 && (o.textBaseline = "top"),
              o
            );
          },
        }),
        this.valueBasicData[this.currentTab] &&
          this.valueBasicData[this.currentTab].inteval &&
          this.valueBasicData[this.currentTab].inteval.length > 0)
      ) {
        var p = +this.valueBasicData[this.currentTab].inteval[1],
          d = +this.valueBasicData[this.currentTab].inteval[2];
        a
          .guide()
          .rect({
            top: !1,
            start: ["min", p],
            end: ["max", "min"],
            style: { fill: this.isDark ? "#143324" : "#EDFCF8" },
          }),
          a
            .guide()
            .rect({
              top: !1,
              start: ["min", d],
              end: ["max", p],
              style: { fill: this.isDark ? "#402D1F" : "#FDF9E9" },
            }),
          a
            .guide()
            .rect({
              top: !1,
              start: ["min", "max"],
              end: ["max", d],
              style: { fill: this.isDark ? "#3B1C22" : "#FFF1F4" },
            });
      }
      var g = n[r];
      a
        .guide()
        .point({
          top: !0,
          limitInPlot: !1,
          position: [g.time, g.value],
          style: { fill: "#3077ec", stroke: "#3077ec", lineWidth: 1 },
        }),
        a.line().position("time*value").color("#3077ec").size(1),
        a.tooltip({
          custom: !0,
          showTooltipMarker: !0,
          showCrosshairs: !0,
          triggerOn: ["touchstart", "touchmove"],
          triggerOff: ["touchend"],
          crosshairsType: "xy",
          snap: !0,
          crosshairsStyle: { stroke: "#3077EC", lineWidth: 0.5 },
          tooltipMarkerStyle: { fill: "#3077EC", lineWidth: 0.7 },
          onChange: function (t) {
            (e.graphExtra.time = t.items[0].origin && t.items[0].origin.time),
              (e.graphExtra.time = ""
                .concat(e.graphExtra.time.slice(0, 4), "-")
                .concat(e.graphExtra.time.slice(4, 6), "-")
                .concat(e.graphExtra.time.slice(6))),
              (e.graphExtra.value =
                t.items[0].origin && t.items[0].origin.value),
              (e.graphExtra.value = (+e.graphExtra.value).toFixed(2)),
              t.items[0].origin &&
                t.items[0].origin.tag &&
                (e.graphExtra.value = "--"),
              (e.graphExtra.percent =
                t.items[0].origin && t.items[0].origin.percent),
              (e.graphExtra.percent = (+e.graphExtra.percent).toFixed(2)),
              (e.graphExtra.left = t.x >= o.width / 2),
              (e.graphExtra.showTooltip = !0);
          },
          onHide: function () {
            e.graphExtra.showTooltip = !1;
          },
        }),
        a.render(),
        (this.valueChart = a);
    },
  },
};
Array ||
  (
    t.resolveComponent("plate-intro") +
    t.resolveComponent("spot-list") +
    t.resolveComponent("concept-heat") +
    t.resolveComponent("f2") +
    t.resolveComponent("NoData") +
    t.resolveComponent("stock-card") +
    t.resolveComponent("plate-card")
  )();
var i = t._export_sfc(r, [
  [
    "render",
    function (e, a, o, n, r, i) {
      return t.e(
        { a: t.p({ intro: o.intro }), b: r.teachData },
        (r.teachData, {}),
        { c: r.hotSpotData && r.hotSpotData.length > 0 },
        r.hotSpotData && r.hotSpotData.length > 0
          ? {
              d: t.o(function () {
                return i.gotoHotAllList && i.gotoHotAllList.apply(i, arguments);
              }, 1840),
              e: t.sr("spotlist", "87f60f8f-1"),
              f: t.p({ spots: r.hotSpotData, "page-type": "nopage" }),
            }
          : {},
        { g: r.hotSpotData && r.hotSpotData.length > 0 },
        (r.hotSpotData && r.hotSpotData.length, {}),
        {
          h:
            (r.marketTemperData && r.marketTemperData.total_temp) ||
            r.valueBasicData,
        },
        (r.marketTemperData && r.marketTemperData.total_temp) ||
          r.valueBasicData
          ? t.e(
              {
                i: t.o(function (t) {
                  return i.showTeachTips();
                }, 1841),
                j: r.marketTemperData && r.marketTemperData.total_temp,
              },
              r.marketTemperData && r.marketTemperData.total_temp
                ? {
                    k: t.t(i.heatTextFormat(r.marketTemperData)),
                    l: t.t(r.marketTemperData.update_date),
                    m: t.sr("heatchart", "87f60f8f-2"),
                    n: t.o(i.getCurrentHeat, 1842),
                    o: t.p({
                      score: r.marketTemperData.total_temp,
                      trend: r.marketTemperData.trend,
                    }),
                  }
                : {},
              {
                p:
                  r.marketTemperData &&
                  r.marketTemperData.total_temp &&
                  r.showValueGraph.PE &&
                  r.showValueGraph.PB,
              },
              (r.marketTemperData &&
                r.marketTemperData.total_temp &&
                r.showValueGraph.PE &&
                r.showValueGraph.PB,
              {}),
              { q: r.showValueGraph.PE && r.showValueGraph.PB },
              r.showValueGraph.PE && r.showValueGraph.PB
                ? t.e(
                    {
                      r: t.n("PE" === r.currentTab ? "active-tab" : ""),
                      s: t.o(function (t) {
                        return i.changeTab("PE");
                      }, 1843),
                      t: t.n("PB" === r.currentTab ? "active-tab" : ""),
                      v: t.o(function (t) {
                        return i.changeTab("PB");
                      }, 1844),
                      w: r.valueBasicData[r.currentTab],
                    },
                    r.valueBasicData[r.currentTab]
                      ? {
                          x: t.t(
                            i.valueTextFilter(
                              r.valueBasicData[r.currentTab].state
                            )
                          ),
                          y: t.n(
                            i.valueColorFilter(
                              r.valueBasicData[r.currentTab].state
                            )
                          ),
                          z: t.t(r.currentTab),
                          A: t.t(r.valueBasicData[r.currentTab].value || "--"),
                          B: t.t(r.currentTab),
                          C: t.t(
                            r.valueBasicData[r.currentTab].value_pct
                              ? r.valueBasicData[r.currentTab].value_pct + "%"
                              : "--"
                          ),
                        }
                      : {},
                    { D: r.showValueGraph[r.currentTab] },
                    r.showValueGraph[r.currentTab]
                      ? t.e(
                          {
                            E: t.o(function () {
                              return (
                                i.chartTouchStart &&
                                i.chartTouchStart.apply(i, arguments)
                              );
                            }, 1845),
                            F: t.o(function () {
                              return (
                                i.chartTouchMove &&
                                i.chartTouchMove.apply(i, arguments)
                              );
                            }, 1846),
                            G: t.o(function () {
                              return (
                                i.chartTouchEnd &&
                                i.chartTouchEnd.apply(i, arguments)
                              );
                            }, 1847),
                            H: t.sr("lineChart", "87f60f8f-3"),
                            I: t.o(i.drawValueChart, 1848),
                            J: t.p({
                              "chart-id": "valueChart",
                              "c-class": "valueChartClass",
                              "c-style": "width: 690rpx; height: 380rpx",
                              config: r.chartConfig,
                              "refresh-hash": r.valueHash,
                            }),
                            K: r.graphExtra.showTooltip,
                          },
                          r.graphExtra.showTooltip
                            ? {
                                L: t.t(r.graphExtra.time),
                                M: t.t(r.currentTab),
                                N: t.t(r.graphExtra.value),
                                O: t.t(r.currentTab),
                                P: t.t(r.graphExtra.percent),
                                Q: t.n(
                                  r.graphExtra.left
                                    ? "canvas-toolTip-left"
                                    : "canvas-toolTip-right"
                                ),
                              }
                            : {}
                        )
                      : {}
                  )
                : {}
            )
          : {},
        {
          R:
            (r.marketTemperData && r.marketTemperData.total_temp) ||
            (r.showValueGraph.PE && r.showValueGraph.PB),
        },
        ((r.marketTemperData && r.marketTemperData.total_temp) ||
          (r.showValueGraph.PE && r.showValueGraph.PB),
        {}),
        { S: r.hotStockData && r.hotStockData.length > 0 },
        r.hotStockData && r.hotStockData.length > 0
          ? {
              T: t.o(function () {
                return i.gotoCfgTab && i.gotoCfgTab.apply(i, arguments);
              }, 1849),
              U: t.p({
                "card-type": "stock",
                "list-data": r.hotStockData,
                "plate-id": o.plateId,
              }),
            }
          : {},
        { V: r.hotStockData && r.hotStockData.length > 0 },
        (r.hotStockData && r.hotStockData.length, {}),
        { W: r.hotFundData && r.hotFundData.length > 0 },
        r.hotFundData && r.hotFundData.length > 0
          ? {
              X: t.o(function () {
                return i.gotoEtfTab && i.gotoEtfTab.apply(i, arguments);
              }, 1850),
              Y: t.p({
                "card-type": "fund",
                "list-data": r.hotFundData,
                "plate-id": o.plateId,
              }),
            }
          : {},
        { Z: r.hotFundData && r.hotFundData.length > 0 },
        (r.hotFundData && r.hotFundData.length, {}),
        { aa: r.plateTwoLevelData && r.plateTwoLevelData.length > 0 },
        r.plateTwoLevelData && r.plateTwoLevelData.length > 0
          ? t.e(
              { ab: r.plateOneLevelData && r.plateOneLevelData.length > 0 },
              r.plateOneLevelData && r.plateOneLevelData.length > 0
                ? {
                    ac: t.p({
                      "plate-data": r.plateOneLevelData,
                      type: "level1",
                    }),
                  }
                : {},
              { ad: r.plateOneLevelData && r.plateOneLevelData.length > 0 },
              (r.plateOneLevelData && r.plateOneLevelData.length, {}),
              { ae: r.plateTwoLevelData && r.plateTwoLevelData.length > 0 },
              r.plateTwoLevelData && r.plateTwoLevelData.length > 0
                ? t.e(
                    { af: "BK-HY-1" === o.plateStockType },
                    "BK-HY-1" === o.plateStockType
                      ? { ag: t.t(r.plateTwoLevelData.length) }
                      : {},
                    {
                      ah: t.p({
                        "plate-data": r.plateTwoLevelData,
                        type: "level2",
                      }),
                    }
                  )
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-87f60f8f"],
]);
wx.createComponent(i);
var c = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWRldGFpbC1hdHRlbnRpb24vQXR0ZW50aW9uUG9pbnQudnVl =
  c),
  (exports.closeAd = function (e) {
    var a = {
      action: 2,
      ad_type: "bankuai_hotstock",
      channel: 0,
      adid: e && e.adid,
    };
    return t.StockBridge.request(
      "https://wzq.tenpay.com/cgi-bin/activity/ad.fcgi",
      "POST",
      a
    );
  }),
  (exports.getAdInfo = function () {
    return t.StockBridge.request(
      "https://wzq.tenpay.com/cgi-bin/activity/ad.fcgi",
      "POST",
      { action: 1, ad_type: "bankuai_hotstock", channel: 0 }
    );
  }),
  (exports.getConceptNewsSummary = function (e) {
    var a = { news_ids: e || "", source: "wzq", user_type: 5, "x-sa-sign": !0 };
    o(a);
    var r =
      "https://bisheng.tenpay.com/fcgi-bin/xg_get_news_summary.fcgi?".concat(
        n(a)
      );
    return t.StockBridge.request(r, "GET", { "x-sa-sign": !0 });
  });
