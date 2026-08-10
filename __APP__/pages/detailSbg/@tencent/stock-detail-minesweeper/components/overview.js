require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../common/vendor.js"),
  e = {
    name: "MineSweeping-Overview",
    inject: ["skin", "themeColor"],
    props: ["symbol", "data", "zixuan", "flash"],
    components: {
      f2: function () {
        return "../../stock-union-f2/f2MP.js";
      },
    },
    computed: {
      isZXG: function () {
        return !0;
      },
      maskStyle: function () {
        return this.isPC
          ? {
              width: 0.77 * this.canvasWidth + "px",
              marginLeft: "-".concat(0.78 * this.canvasHeight - 15, "px"),
              height: "138%",
            }
          : {};
      },
      env: function () {
        return t.StockBridge.ENV;
      },
      isPC: function () {
        if ("mp" !== t.StockBridge.ENV) return !1;
        try {
          var e = t.wx$1.getSystemInfoSync();
          return ["mac", "windows"].includes(e.platform);
        } catch (t) {
          return !1;
        }
      },
      isMP: function () {
        return "mp" === t.StockBridge.ENV && !this.isPC;
      },
      didAgreeAgreement: function () {
        var e;
        return (
          "agree" ===
          (null == (e = t.StockBridge.store) ? void 0 : e.protocolStatus)
        );
      },
    },
    data: function () {
      return {
        canvasHeight: 158.976,
        canvasWidth: 270.48,
        riskData: null,
        riskTags: { news: "消息面", basic: "基本面", trade: "交易面" },
        riskTagValue: -1,
        riskTagAnimated: {},
        foldedStatus: "unfoldedall",
        chartConfig: { animate: !0, padding: [0, 0, 0, 0] },
        overViewHash: "",
      };
    },
    destroyed: function () {
      this.destoryChart();
    },
    methods: {
      foldAll: function () {
        t.StockBridge.report("hq.stock_detail.ms_".concat(this.foldedStatus));
        var e = "unfoldedall" === this.foldedStatus;
        (this.foldedStatus = e ? "foldedall" : "unfoldedall"),
          t.StockBridge.busEmit("market-detail-act-fold", { foldedAll: !e }),
          this.$emit("foldChange", { foldedAll: !e });
      },
      destoryChart: function () {
        try {
          this.chart && this.chart.destroy(), (this.chart = null);
        } catch (t) {}
      },
      calcTags: function (t) {
        var e = this.data["".concat(t, "_tag_list")];
        if (0 === e.length) return !1;
        var a = !1;
        return (
          e.map(function (t) {
            a = a || t.tag_value > 1;
          }),
          a
        );
      },
      calcRiskPre: function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          a = this.data.total_risk_num,
          i = this.data.total_risk_num - this.data.self_risk_num;
        if ("safe" === t) return e ? i : parseFloat((i / a).toFixed(2));
        var r = this.data["".concat(t, "_risk_num")];
        return e ? r : parseFloat((r / a).toFixed(2));
      },
      getCSSVar: function (t) {
        return getComputedStyle(document.body || "div").getPropertyValue(t);
      },
      createChart: function (e) {
        var a = e.chart,
          i = e.config;
        (this.chart = a),
          (this.canvasHeight = i.height),
          (this.canvasWidth = i.width),
          this.data.total_risk_num && 0 !== this.data.total_risk_num
            ? ((this.riskData = [
                {
                  name: "暂未发现风险",
                  percent: this.calcRiskPre("safe"),
                  num: this.calcRiskPre("safe", 1),
                  type: "risk",
                },
                {
                  name: "低风险",
                  percent: this.calcRiskPre("low"),
                  num: this.calcRiskPre("low", 1),
                  type: "risk",
                },
                {
                  name: "中风险",
                  percent: this.calcRiskPre("mid"),
                  num: this.calcRiskPre("mid", 1),
                  type: "risk",
                },
                {
                  name: "高风险",
                  percent: this.calcRiskPre("high"),
                  num: this.calcRiskPre("high", 1),
                  type: "risk",
                },
              ]),
              this.chart.source(this.riskData, {
                percent: {
                  formatter: function (t) {
                    return 100 * t + "%";
                  },
                },
              }),
              this.chart.tooltip(!1).legend(!1),
              this.chart.coord("polar", {
                transposed: !0,
                startAngle: -Math.PI,
                endAngle: 0,
                radius: 0.85,
              }),
              this.chart.axis(!1),
              this.chart
                .interval()
                .position("type*percent")
                .color("name", ["#6498E1", "#52A7CC", "#41A39C", "#56AC6A"])
                .adjust("stack")
                .style({
                  lineWidth: 1,
                  stroke:
                    "mp" !== t.StockBridge.ENV
                      ? this.getCSSVar("--fill-content-layer")
                      : this.themeColor.defaultStroke,
                  lineJoin: "round",
                  lineCap: "round",
                })
                .animate({ appear: { duration: 1e3, easing: "cubicOut" } }),
              this.chart.render())
            : this.destoryChart();
      },
      goRiskBlock: function (e, a) {
        if (
          (this.$emit("showGoTop", { tag: e, key: a }),
          "mp" !== t.StockBridge.ENV)
        ) {
          var i = document.getElementById(e);
          i &&
            (t.StockBridge.report("hq.stock_detail.ms_risk_tag"),
            i.classList.remove("folded"),
            window.scrollTo(0, i.offsetTop));
        }
      },
      goTeachIndex: function () {
        t.StockBridge.report("hq.stock_detail.ms_overview"),
          this.jumpPage(
            "https://wzq.tenpay.com/resources/diagnoseStock/#/teachMineSweeperWzqV2?part=1"
          );
      },
      goRiskList: function () {
        if (
          (t.StockBridge.report("hq.stock_detail.ms_market", {
            stockid: this.symbol,
          }),
          "mp" !== t.StockBridge.ENV)
        )
          this.$router.push({
            name: "strategyRiskIndex",
            query: { board_code: this.data.board_code },
          });
        else {
          var e =
            "https://wzq.tenpay.com/mp/v2/index.html#/strategy/risk/index?board_code=".concat(
              this.data.board_code
            );
          t.StockBridge.openExtraWebview(e);
        }
      },
      jumpPage: function (e) {
        t.StockBridge.openExtraWebview(e);
      },
      flashRiskTag: function (e) {
        var a = this;
        if (
          ((this.riskTagValue = e + 1),
          !this.riskTagAnimated[this.riskTagValue])
        )
          switch (
            ((this.riskTagAnimated[this.riskTagValue] = !0),
            setTimeout(function () {
              (a.riskTagValue = -1), (a.riskTagAnimated[a.riskTagValue] = !1);
            }, 1200),
            this.riskTagValue)
          ) {
            case 2:
              t.StockBridge.report(
                "hq.stock_detail.minesweeper_overview_low_click"
              );
              break;
            case 3:
              t.StockBridge.report(
                "hq.stock_detail.minesweeper_overview_medium_click"
              );
              break;
            case 4:
              t.StockBridge.report(
                "hq.stock_detail.minesweeper_overview_high_click"
              );
          }
      },
    },
  };
Array || t.resolveComponent("f2")();
var a = t._export_sfc(e, [
  [
    "render",
    function (e, a, i, r, n, s) {
      return t.e(
        { a: t.t(i.data.update_time), b: s.didAgreeAgreement },
        s.didAgreeAgreement
          ? t.e(
              { c: i.zixuan.zixuan_high_medium_risk_num > 0 },
              i.zixuan.zixuan_high_medium_risk_num > 0
                ? { d: t.t(i.zixuan.zixuan_high_medium_risk_num) }
                : {},
              {
                e: t.o(function () {
                  return s.goRiskList && s.goRiskList.apply(s, arguments);
                }, 2882),
              }
            )
          : {},
        {
          f: t.n("wzq" !== s.env ? "special" : ""),
          g: t.t(i.data.self_risk_num),
          h: t.n("risk-t-".concat(i.data.risk_trend)),
          i: t.o(function () {
            return s.goTeachIndex && s.goTeachIndex.apply(s, arguments);
          }, 2883),
          j: t.n("wzq" !== s.env ? "special" : ""),
          k: t.n(s.isPC ? "pc-fit" : s.isMP ? "mp-fit" : ""),
          l: t.s(s.maskStyle),
          m: t.o(s.createChart, 2884),
          n: t.p({
            "chart-id": "overViewChart",
            "c-class": "ovChart",
            "c-style": s.isZXG
              ? "width: 6.53rem; height: 3.84rem"
              : "width: 490rpx; height: 288rpx",
            "disable-touch-move": !0,
            config: n.chartConfig,
            "refresh-hash": n.overViewHash,
          }),
          o: n.riskData && i.data.self_risk_num > 0,
        },
        n.riskData && i.data.self_risk_num > 0
          ? {
              p: t.f(n.riskData.slice(1), function (e, a, i) {
                return {
                  a: t.t(e.num),
                  b: t.t(e.name),
                  c: a,
                  d: t.n("risk-".concat(a + 1)),
                  e: t.o(
                    function (t) {
                      return s.flashRiskTag(a + 1);
                    },
                    2885,
                    a
                  ),
                };
              }),
              q: t.n("wzq" !== s.env ? "special" : ""),
            }
          : {},
        { r: 0 === i.data.self_risk_num },
        0 === i.data.self_risk_num
          ? {}
          : {
              s: t.f(n.riskTags, function (e, a, r) {
                return {
                  a: t.t(e),
                  b: t.f(i.data["".concat(a, "_tag_list")], function (e, r, o) {
                    return {
                      a: t.t(i.data["".concat(a, "_tag_list")][r].tag_name),
                      b: t.n(
                        "risk-".concat(
                          i.data["".concat(a, "_tag_list")][r].tag_value
                        )
                      ),
                      c: t.n(
                        "new-tag-".concat(
                          i.data["".concat(a, "_tag_list")][r].is_new_tag
                        )
                      ),
                      d: t.n(
                        "rise-tag-".concat(
                          i.data["".concat(a, "_tag_list")][r].is_level_rise
                        )
                      ),
                      e: t.n(
                        n.riskTagValue ===
                          i.data["".concat(a, "_tag_list")][r].tag_value
                          ? "flash"
                          : ""
                      ),
                      f: r,
                      g: 1 !== i.data["".concat(a, "_tag_list")][r].tag_value,
                      h: t.o(
                        function (t) {
                          return s.goRiskBlock(
                            i.data["".concat(a, "_tag_list")][r].tag_name_eng,
                            a
                          );
                        },
                        2886,
                        r
                      ),
                    };
                  }),
                  c: s.calcTags(a) ? "" : 1,
                  d: a,
                };
              }),
              t: i.flash ? 1 : "",
            },
        { v: t.t(i.data.total_risk_num), w: i.data.total_index_num },
        i.data.total_index_num ? { x: t.t(i.data.total_index_num) } : {},
        {
          y: t.t("foldedall" === n.foldedStatus ? "收起" : "展开"),
          z: t.n(n.foldedStatus),
          A: t.o(function () {
            return s.foldAll && s.foldAll.apply(s, arguments);
          }, 2887),
        }
      );
    },
  ],
  ["__scopeId", "data-v-d3762352"],
]);
wx.createComponent(a);
