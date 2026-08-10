var t = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = require("../../../../@babel/runtime/helpers/toConsumableArray"),
  a = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = function (t, e, a) {
    return new Promise(function (i, r) {
      var n = function (t) {
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
          return t.done ? i(t.value) : Promise.resolve(t.value).then(n, s);
        };
      o((a = a.apply(t, e)).next());
    });
  },
  r = require("../../../../common/vendor.js"),
  n = require("../stock-hq-core/utils/market.js"),
  s = require("../stock-hq-core/utils/f2-tool/f2tag.js"),
  o = require("../stock-hq-data/index.js"),
  c = require("api/index.js"),
  l = require("utils/chartTheme.js"),
  h = {
    components: {
      NoData: function () {
        return "./components/NoData.js";
      },
      Wiki: function () {
        return "./components/Wiki.js";
      },
      f2: function () {
        return "../stock-union-f2/f2MP.js";
      },
      Gshg: function () {
        return "./components/gshg-card.js";
      },
    },
    inject: ["hqBridge", "fontSkin"],
    props: {
      scode: String,
      market: String,
      stockName: String,
      titleHeight: Number,
      skin: String,
      rank: String,
    },
    data: function () {
      return {
        plateInterval: null,
        data: {},
        stockBridge: r.StockBridge,
        firstLoaded: !1,
        blockItem: {
          gsjj: {
            所属行业: "plate",
            公司名称: "ChiName",
            上市日期: "ListedDate",
            集团主席: "Chairman",
            公司网址: "Website",
            总股本: "STOCK_SUM",
            港股股本: "HK_STOCK_SUM",
            公司简介: "Business",
          },
        },
        foldCompany: !0,
        listOverShowgg: !1,
        listOverShowfh: !1,
        listOverShowhg: !1,
        zygcReportDate: "",
        extra: {
          zysr: {
            labelColor: [
              "#FFA839",
              "#48AFFB",
              "#2881CD",
              "#9D9D9D",
              "#8543E0",
              "#3436C7",
              "#223273",
            ],
            err: !1,
            order: 0,
            subed: "sector",
            sub: { sector: "业务", product: "产品", region: "地区" },
            years: !1,
            list: [],
            list2: null,
            fold: !0,
          },
          gdtj: {
            order: 0,
            subed: "cggd",
            err: !1,
            sub: { cggd: "持股股东", gdfb: "股东分布" },
            list: [],
            updateTimeGd: "",
          },
          jgcc: { err: !1, ratioData: {}, list: [], updateTimeJg: "" },
          technical: { showTooltip: !1, origin: null, left: !1 },
        },
        chartW: 375,
        chart: {},
        hisChart: {},
        touchTimeOut: null,
        longPress: !1,
        hasJG: !1,
        hasGD: !1,
        hisKline: [],
        plateZdf: "",
        showZysr: !1,
        showJgcc: !1,
        showHisline: !1,
        zysrChartData: {},
        jgccChartData: [],
        zysrHash: "",
        hislineHash: "",
        jgccHash: "",
        chartJgcc: {},
        wikiZygcHK:
          (location && -1 !== location.href.indexOf("wikiType=brief")) || !1,
        zysrConfig: { padding: [35, 2, "auto", 2], animate: !1 },
        hislineConfig: { padding: [1, 1, 20, 1], animate: !1 },
        jgccConfig: { padding: [8, 2, "auto", 2], animate: !1 },
      };
    },
    created: function () {
      var t = this;
      this.detailApi ||
        (this.detailApi = new o.DetailApi(function (e) {
          return t.hqBridge.request(e);
        }));
    },
    mounted: function () {
      this.getData(), this.refreshPlate();
    },
    computed: {
      wikiInfo: function () {
        return {
          rank: this.rank,
          symbol: this.symbol,
          market: this.market,
          stockName: this.stockName,
        };
      },
      symbol: function () {
        return o.utils.getSymbol(this.market, this.scode);
      },
      isWzq: function () {
        return "wzq" === r.StockBridge.ENV;
      },
      isMp: function () {
        return "mp" === r.StockBridge.ENV;
      },
      organRatio: function () {
        return this.extra.jgcc.ratioData.cgbl || 0;
      },
      cgsFormat: function () {
        return 0 == +this.extra.jgcc.ratioData.cgs
          ? (+this.extra.jgcc.ratioData.cgs).toFixed(2)
          : this.extra.jgcc.ratioData.cgs;
      },
      circulGuben: function () {
        return 100 - this.extra.jgcc.ratioData.cgbl;
      },
      zdfColor: function () {
        return function (t) {
          var e = +t;
          return e > 0
            ? "red-ratio"
            : 0 === e
            ? "gray-ratio"
            : e < 0
            ? "green-ratio"
            : void 0;
        };
      },
      zdfFormat: function () {
        return function (t) {
          return "" === t
            ? ""
            : +t <= 0
            ? "".concat(t, "%")
            : "+".concat(t, "%");
        };
      },
    },
    methods: {
      showTeachTips: function (t, e) {
        r.StockBridge.report("hq.stock_detail.briefhk_".concat(e, "_i_click")),
          r.StockRouter.routeTo({
            name: "informationDetail",
            query: {
              id: "SN20221107174026846a3f52",
              articleStyle: "fullTeach",
              anchorTitle: t,
            },
          });
      },
      gotowebsite: function () {
        r.StockBridge.report("hq.stock_detail.gsjj_website_click");
      },
      clearPlateRefresh: function () {
        clearInterval(this.plateInterval);
      },
      refreshPlate: function () {
        var t = this;
        this.$nextTick(function () {
          (t.zysrHash = String(Math.random())),
            (t.hislineHash = String(Math.random())),
            (t.jgccHash = String(Math.random()));
        }),
          clearInterval(this.plateInterval),
          (this.plateInterval = setInterval(function () {
            var e = new Date().toTimeString().slice(0, 5).replace(":", "");
            n.isHKTradeTime(e) && t.getPlateZdf();
          }, 5e3));
      },
      jumpToPlate: function (t, e) {
        "--" !== t &&
          (("wzq" !== r.StockBridge.ENV && "dafeng" !== r.StockBridge.ENV) ||
            r.StockBridge.routeTo({
              path: "/plate/400/detail",
              query: { plateId: e, name: t, zdf: this.plateZdf },
            }),
          "mini" === r.StockBridge.ENV &&
            r.StockBridge.routeTo({ path: "/plate/stock/400/".concat(e) }),
          "mp" === r.StockBridge.ENV &&
            (r.StockBridge.openExtraWebview(
              "https://wzq.tenpay.com/mp/v2/index.html#/plate/400/detail?plateId="
                .concat(e, "&name=")
                .concat(t, "&zdf=")
                .concat(this.plateZdf)
            ),
            this.clearPlateRefresh()),
          r.StockBridge.report("hq.stock_detail.basic_plate_click"));
      },
      getPlateZdf: function () {
        return i(
          this,
          null,
          a().mark(function t() {
            var e, i;
            return a().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        this.detailApi.getPlate(
                          { market: this.market, scode: this.scode },
                          { needProcess: !0 }
                        )
                      );
                    case 2:
                      (e = t.sent),
                        "--" !== (i = Array.isArray(e) ? e[0] : e).name
                          ? (this.plateZdf = i.zdf || "0.00")
                          : clearInterval(this.plateInterval);
                    case 5:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      getData: function () {
        return i(
          this,
          null,
          a().mark(function t() {
            var i,
              n,
              s,
              o,
              l,
              h,
              d,
              g,
              u,
              p,
              f,
              m,
              j,
              b,
              y,
              x = this;
            return a().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        c.getHKData(r.StockBridge, this.scode)
                      );
                    case 3:
                      if ((n = t.sent) && 0 === n.code && n.data) {
                        if (
                          ((s = n.data),
                          (this.data = s),
                          (this.zygcReportDate =
                            (null == (i = this.data.zysr[0])
                              ? void 0
                              : i.date) || ""),
                          this.data.fhpx &&
                            this.data.fhpx.length > 0 &&
                            (this.data.fhpx = this.data.fhpx.slice(0, 3)),
                          this.data.huigou &&
                            this.data.huigou.length > 0 &&
                            (this.data.huigou = this.data.huigou.slice(0, 3)),
                          this.data.gudong.gdtj &&
                            2 !==
                              JSON.stringify(this.data.gudong.gdtj).length &&
                            ((o = this.data.gudong.gdtj || {}).cggd.list &&
                            o.cggd.list.length > 0
                              ? ((this.extra.gdtj.list = o.cggd.list.slice(
                                  0,
                                  6
                                )),
                                (this.extra.gdtj.updateTimeGd =
                                  o.cggd.date || ""),
                                o.gdfb.list &&
                                  o.gdfb.list.length > 0 &&
                                  (this.hasGD = !0))
                              : (this.extra.gdtj.err = !0)),
                          this.data.gudong.jgcc &&
                            2 !==
                              JSON.stringify(this.data.gudong.jgcc).length &&
                            ((l = this.data.gudong.jgcc || {}).list &&
                            l.list.length > 0
                              ? ((this.hasJG = !0),
                                (this.extra.jgcc.updateTimeJg = l.date || ""),
                                (this.extra.jgcc.ratioData = {
                                  cgbl: l.list[0].cgbl,
                                  cgs: this.changeNum(l.list[0].cgs),
                                  jgs: this.changeNum(l.list[0].jgs),
                                  cgsChange:
                                    +l.list[0].cgsChange >= 0
                                      ? "+".concat(
                                          this.changeNum(l.list[0].cgsChange)
                                        )
                                      : this.changeNum(l.list[0].cgsChange),
                                  jgsChange:
                                    +l.list[0].jgsChange >= 0
                                      ? "+".concat(
                                          this.changeNum(l.list[0].jgsChange)
                                        )
                                      : this.changeNum(l.list[0].jgsChange),
                                }),
                                (this.extra.jgcc.list = l.list))
                              : (this.extra.jgcc.err = !0)),
                          this.$nextTick(function () {
                            if (x.data.zysr && x.data.zysr.length > 0) {
                              x.zysrChartData = x.data.zysr[0];
                              var t,
                                e,
                                a,
                                i = ["sector", "product", "region"];
                              for (e = 0; e < x.data.zysr.length; e++) {
                                for (
                                  t = x.data.zysr[e].detail.map(function (t) {
                                    return t.type;
                                  }),
                                    a = 0;
                                  a < 3 && -1 === t.indexOf(i[a]);
                                  a++
                                );
                                if (a < 3) break;
                              }
                              (x.extra.zysr.order = e),
                                (x.extra.zysr.subed = i[a]),
                                (x.showZysr = !0),
                                (x.zysrHash = String(Math.random()));
                            }
                            x.extra.jgcc.list &&
                              x.extra.jgcc.list.length > 0 &&
                              ((x.jgccChartData = x.extra.jgcc.list),
                              (x.showJgcc = !0),
                              (x.jgccHash = String(Math.random())));
                          }),
                          this.data.mbjyc &&
                            2 !== JSON.stringify(this.data.mbjyc).length &&
                            ((h = this.data.mbjyc),
                            (d = h.dqj),
                            (g = h.maxmbj),
                            (u = h.minmbj),
                            (p = h.mbjj),
                            (f = Math.max(d, g, p)),
                            (this.data.mbjyc.per1 = (50 * d) / f || 0),
                            (this.data.mbjyc.per3 = (50 * u) / f || 0),
                            (this.data.mbjyc.per4 = (50 * p) / f || 0)),
                          this.data.tzpj &&
                            this.data.tzpj.jgpj &&
                            this.data.tzpj.jgpj.length > 0 &&
                            (this.data.tzpj.jgpj.forEach(function (t) {
                              var e = +t.zjc.buy + +t.zjc.hold + +t.zjc.sell;
                              (t.buyper = parseInt((t.zjc.buy / e) * 100, 10)),
                                (t.holdper = parseInt(
                                  (t.zjc.hold / e) * 100,
                                  10
                                )),
                                (t.sellper = 100 - t.buyper - t.holdper);
                            }),
                            this.data.tzpj.jgpj.length < 6))
                        )
                          for (
                            m = 6 - this.data.tzpj.jgpj.length, j = 0;
                            j < m;
                            j++
                          )
                            this.data.tzpj.jgpj.push({
                              date: j,
                              zjc: { buy: "", hold: "", sell: "", jgs: "" },
                            });
                        this.data.tzpj &&
                          this.data.tzpj.kline &&
                          this.data.tzpj.kline.length > 0 &&
                          ((b = []),
                          this.data.tzpj.kline.forEach(function (t) {
                            b.push.apply(b, e(t.gj));
                          }),
                          (this.hisKline = b),
                          this.$nextTick(function () {
                            (x.showHisline = !0),
                              (x.hisKlineHash = String(Math.random()));
                          })),
                          this.data.basic &&
                            this.data.basic.plate &&
                            this.getPlateZdf(),
                          !this.isMp &&
                            this.$route.query &&
                            "zygc" === this.$route.query.position &&
                            setTimeout(function () {
                              x.$refs.jyfx &&
                                window.scrollTo(
                                  0,
                                  x.$refs.jyfx.offsetTop - x.titleHeight
                                );
                            }, 0),
                          this.wikiZygcHK &&
                            "wzq" === r.StockBridge.ENV &&
                            ((y = this.titleHeight || 0),
                            setTimeout(function () {
                              x.$refs.jyfx &&
                                window.scrollTo(0, x.$refs.jyfx.offsetTop - y);
                            }, 0));
                      }
                      this.firstLoaded ||
                        ((this.firstLoaded = !0),
                        this.$nextTick(function () {
                          x.$emit("loaded");
                        })),
                        (t.next = 11);
                      break;
                    case 8:
                      (t.prev = 8), (t.t0 = t.catch(0)), this.$emit("loaded");
                    case 11:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[0, 8]]
            );
          })
        );
      },
      toggleFold: function () {
        this.foldCompany = !this.foldCompany;
      },
      changeNum: function (t) {
        var e = Math.abs(t);
        return e >= 0 && e < 1e4
          ? "".concat(t)
          : e >= 1e4 && e < 1e8
          ? "".concat((t / 1e4).toFixed(2), "万")
          : e >= 1e8 && e < 1e12
          ? "".concat((t / 1e8).toFixed(2), "亿")
          : "9999亿";
      },
      colorFilter: function (t) {
        var e = parseFloat(t.slice(1));
        return t
          ? "+" === t[0] && 0 !== e
            ? "color-red"
            : "-" === t[0]
            ? "color-green"
            : void 0
          : "";
      },
      showList: function (t) {
        var e = this;
        "director" === t && (this.listOverShowgg = !this.listOverShowgg),
          "fhpx" === t &&
            ((this.listOverShowfh = !this.listOverShowfh),
            r.StockBridge.report("hq.stock_detail.fh_checkmore_click_hk")),
          "huigou" === t && (this.listOverShowhg = !this.listOverShowhg),
          setTimeout(function () {
            e.$emit("loaded");
          }, 0);
      },
      noScroll: function (t) {
        t.stopPropagation(), t.preventDefault();
      },
      toggleYear: function () {
        var t,
          e,
          a,
          i = this;
        (this.extra.zysr.years = !this.extra.zysr.years),
          null == (t = this.$refs.maskBlock) ||
            t.addEventListener("click", function () {
              var t;
              null == (t = i.$refs.briefHK) ||
                t.removeEventListener("touchmove", i.noScroll, !1);
            }),
          this.extra.zysr.years
            ? null == (e = this.$refs.briefHK) ||
              e.addEventListener("touchmove", this.noScroll, !1)
            : null == (a = this.$refs.briefHK) ||
              a.removeEventListener("touchmove", this.noScroll, !1);
      },
      toggleMore: function () {
        this.extra.zysr.fold = !this.extra.zysr.fold;
      },
      chartTouchStart: function (t) {
        var e = this;
        this.touchTimeOut &&
          (clearTimeout(this.touchTimeOut), (this.touchTimeOut = null)),
          (this.touchTimeOut = setTimeout(function () {
            var a;
            (e.longPress = !0),
              null == (a = e.$refs.lineChart.$el.querySelector("#jgccChart")) ||
                a.dispatchEvent(t);
          }, 500));
      },
      chartTouchMove: function (t) {
        var e = this;
        this.longPress
          ? (t.preventDefault(),
            setTimeout(function () {
              var a;
              null == (a = e.$refs.lineChart.$el.querySelector("#jgccChart")) ||
                a.dispatchEvent(t);
            }, 0))
          : clearTimeout(this.touchTimeOut);
      },
      chartTouchEnd: function () {
        var t = this;
        this.longPress &&
          setTimeout(function () {
            t.chartJgcc.hideTooltip(),
              clearTimeout(t.touchTimeOut),
              (t.touchTimeOut = null);
          }, 1e3),
          (this.longPress = !1),
          clearTimeout(this.touchTimeOut);
      },
      drawZysrChart: function (t) {
        var e = this;
        this.zysrConfig.animate = !this.isMp;
        var a = this.zysrChartData.detail,
          i = this.extra.zysr.subed,
          r = t.chart;
        try {
          r && r.clear();
        } catch (t) {}
        var n = null;
        if (
          (a.map(function (t) {
            t.type === i &&
              (t.detail.map(function (t) {
                (t.const = "const"),
                  (t.fzb =
                    +t.SubsectionIncomeRatio < 0
                      ? 0
                      : +t.SubsectionIncomeRatio);
              }),
              (n = t));
          }),
          !n)
        )
          return (this.extra.zysr.err = !0), !1;
        r.source(n.detail),
          r.coord("polar", { transposed: !0, innerRadius: 0.6, radius: 0.7 }),
          r.axis(!1).legend(!1).tooltip(!1),
          r
            .guide()
            .text({
              position: ["50%", "50%"],
              content: "主营构成",
              style: {
                textBaseline: "middle",
                textAlign: "center",
                fill: l.getCSSVariable("--color-midgray", "", this.skin),
                fontSize: 12,
              },
            }),
          r.pieLabel({
            sidePadding: 20,
            anchorOffset: 3,
            adjustOffset: 23,
            lineHeight: 45,
            label1OffsetY: -2,
            label2OffsetY: 2,
            label1: function (t) {
              return {
                text:
                  t.ItemsName.length >= 9
                    ? "".concat(t.ItemsName.substr(0, 7), "..")
                    : t.ItemsName,
                fill: l.getCSSVariable("--color-heavygray", "", e.skin),
              };
            },
            label2: function (t) {
              return {
                text: "".concat(t.SubsectionIncomeRatio, "%"),
                fill: l.getCSSVariable("--color-heavygray", "", e.skin),
              };
            },
          }),
          r
            .interval()
            .position("const*fzb")
            .color("ItemsName", this.extra.zysr.labelColor)
            .adjust("stack")
            .style({ lineWidth: 1, stroke: "transparent" }),
          r.render(),
          (this.extra.zysr.list = n.detail),
          (this.extra.zysr.list2 = n.others);
      },
      drawJgccChart: function (t) {
        var e = this,
          a = this.jgccChartData;
        try {
          this.chartJgcc && this.chartJgcc.clear();
        } catch (t) {}
        var i = t.chart;
        (this.jgccConfig.animate = !this.isMp),
          this.isMp || (this.chartJgcc = i);
        var n = null,
          s = [],
          o = [],
          c = a.slice(0, 7);
        c.reverse();
        var h = c.map(function (t, e) {
          return (
            (t.ratio = parseFloat(+t.cgbl)),
            (t.value = parseFloat(+t.price)),
            0 === e || +t.price == +c[e - 1].price
              ? (t.priceColor = "")
              : (t.priceColor = +t.price > +c[e - 1].price ? "red" : "green"),
            s.push(t.value),
            o.push(t.ratio),
            (n = t),
            t
          );
        });
        if (!n) return (this.extra.jgcc.err = !0), !1;
        var d = Math.min.apply(null, s),
          g = Math.max.apply(null, s),
          u = Math.min.apply(null, o),
          p = Math.max.apply(null, o),
          f = u === p ? { type: "cat" } : { ticks: this.getAxisData(u, p, 5) },
          m = d === g ? { type: "cat" } : { ticks: this.getAxisData(d, g, 5) };
        i.source(h, { value: m, ratio: f }),
          i.tooltip(!1),
          i.animate(!1),
          i.axis("period", {
            labelOffset: 8,
            label: function (t) {
              return {
                fill: "#7A8499",
                fontSize: 10,
                text: t,
                textAlign: "center",
                textOffset: 10,
              };
            },
          }),
          [
            [
              ["min", "max"],
              ["max", "max"],
            ],
            [
              ["min", "min"],
              ["max", "min"],
            ],
            [
              ["min", "min"],
              ["min", "max"],
            ],
            [
              ["max", "min"],
              ["max", "max"],
            ],
            [
              ["median", "min"],
              ["median", "max"],
            ],
          ].map(function (t) {
            i.guide().line({
              start: t[0],
              end: t[1],
              top: !1,
              style: {
                stroke: l.getCSSVariable("--border-light-divider", "", e.skin),
                lineWidth: 0.5,
              },
            });
          }),
          i.line().position("period*ratio").size(1.5).color("#FF891E"),
          i.line().position("period*value").size(1.5).color("#C9D0DC"),
          i.point().position("period*value").color("#C9D0DC"),
          i.point().position("period*ratio").color("#FF891E"),
          i.axis("value", {
            grid: function (t, a, i) {
              return {
                lineDash: null,
                lineWidth: 0 === a || a === i - 1 ? 0 : 0.5,
                stroke: l.getCSSVariable("--border-light-divider", "", e.skin),
              };
            },
            labelOffset: -5,
            label: function (t, e, a) {
              return {
                fill: "#7A8499",
                fontSize: 10,
                text: "".concat((+t).toFixed(3)),
                textAlign: "end",
                textBaseline: e === a - 1 ? "top" : "bottom",
              };
            },
          }),
          i.axis("ratio", {
            grid: null,
            labelOffset: -5,
            label: function (t, e, a) {
              return {
                fill: "#7A8499",
                fontSize: 10,
                text: "".concat((+t).toFixed(2), "%"),
                textAlign: "start",
                textBaseline: e === a - 1 ? "top" : "bottom",
              };
            },
          });
        var j = 0;
        "mp" === r.StockBridge.ENV
          ? r.wx$1
              .createSelectorQuery()
              .in(this)
              .select("#chartContainer")
              .boundingClientRect(function (t) {
                j = t.width / 2;
              })
              .exec()
          : (j = this.$refs.chartContainer.clientWidth / 2),
          i.tooltip({
            custom: !0,
            showTooltipMarker: !1,
            showCrosshairs: !0,
            triggerOn: ["touchstart", "touchmove"],
            triggerOff: ["touchend"],
            crosshairsType: "xy",
            snap: !0,
            crosshairsStyle: {
              stroke: l.getCSSVariable("--color-heavygray", "", this.skin),
              lineWidth: 1,
            },
            onChange: function (t) {
              (e.extra.technical.origin = t.items[0].origin),
                (e.extra.technical.left = t.x >= j),
                (e.extra.technical.showTooltip = !0);
            },
            onHide: function () {
              e.extra.technical.showTooltip = !1;
            },
          }),
          i.render();
      },
      drawHislineChart: function (a) {
        var i,
          n = [],
          s = this.hisKline.map(function (t, e) {
            var a = t.date.slice(5, 7);
            return (
              a !== i && (n.push({ index: e, date: t.date }), (i = a)),
              { date: t.date, value: +t.last, type: "gj" }
            );
          }),
          o = n[n.length - 1].index + 20;
        n.push({ index: o, date: "first day of next month" });
        for (var c = o - this.hisKline.length; c > 0; c -= 1)
          s.push({
            date: "year-".concat(i, "-fake").concat(c),
            value: null,
            type: "gj",
          });
        for (var h = [], d = 0; d < n.length - 1; d++) {
          var g = Math.ceil((n[d].index + n[d + 1].index) / 2);
          h.push(s[g].date);
        }
        var u = [];
        if (
          this.data.tzpj &&
          this.data.tzpj.mbj &&
          this.data.tzpj.mbj.length > 0
        )
          for (
            var p = 0, f = 0;
            p < s.length && f < this.data.tzpj.mbj.length;
            p++
          ) {
            var m = null;
            s[p].date === h[f] &&
              ((m =
                "--" === this.data.tzpj.mbj[f].mbj
                  ? 0
                  : +this.data.tzpj.mbj[f].mbj),
              (f += 1)),
              u.push({ date: s[p].date, value: m, type: "mbj" });
          }
        var j = a.chart;
        this.hislineConfig.animate = !this.isMp;
        var b = [].concat(e(s), u);
        j.source(b, { value: { tickCount: 5 } }),
          j.axis("date", !1),
          j.legend(!1),
          j.tooltip(!1);
        var y,
          x = t(n.slice(1, n.length - 1));
        try {
          for (x.s(); !(y = x.n()).done; ) {
            var v = y.value;
            j.guide().line({
              start: [v.date, "min"],
              end: [v.date, "max"],
              top: !1,
              style: {
                stroke: l.getCSSVariable(
                  "--border-light-divider",
                  "",
                  this.skin
                ),
                lineWidth: 1,
              },
            });
          }
        } catch (t) {
          x.e(t);
        } finally {
          x.f();
        }
        j
          .guide()
          .line({
            start: ["min", "min"],
            end: ["min", "max"],
            top: !1,
            style: {
              stroke: l.getCSSVariable("--border-light-divider", "", this.skin),
              lineWidth: 1,
            },
          }),
          j
            .guide()
            .line({
              start: ["max", "min"],
              end: ["max", "max"],
              top: !1,
              style: {
                stroke: l.getCSSVariable(
                  "--border-light-divider",
                  "",
                  this.skin
                ),
                lineWidth: 1,
              },
            });
        for (var z = 0, k = h; z < k.length; z++) {
          var S = k[z];
          j.guide().text({
            position: [S, "min"],
            content: "".concat(S.slice(5, 7), "月"),
            style: {
              fill: "#7A8499",
              textBaseline: "top",
              textAlign: "center",
              fontSize: 10,
            },
            offsetY: 8,
          });
        }
        j.axis("value", {
          line: !1,
          grid: {
            lineDash: null,
            lineWidth: 1,
            stroke: l.getCSSVariable("--border-light-divider", "", this.skin),
          },
          labelOffset: -2,
          label: function (t, e, a) {
            var i = {
              text: (+t).toFixed(2),
              textAlign: "start",
              fill: "#98A0B3",
            };
            return (
              0 === e
                ? (i.textBaseline = "bottom")
                : e === a - 1 && (i.textBaseline = "top"),
              i
            );
          },
        }),
          j
            .line({ connectNulls: !0 })
            .position("date*value")
            .color("type", ["#3d76b8", "#9fa6b1"])
            .size(1);
        var C = s.filter(function (t) {
            return t.value;
          }),
          w = C[C.length - 1];
        j
          .guide()
          .point({
            position: [w.date, w.value],
            style: { fill: "#3d76b8", stroke: "#3d76b8", lineWidth: 0 },
          }),
          "mp" === r.StockBridge.ENV &&
            j
              .guide()
              .tag({
                position: [w.date, w.value],
                withPoint: !1,
                content: "".concat((+w.value).toFixed(2)),
                offsetX: 1,
                offsetY: -5,
                side: 0,
                fontSize: 10,
                background: {
                  fill: "black" === this.skin ? "#171d28" : "#fff",
                  fillOpacity: "0.9",
                  padding: 2,
                  radius: 2,
                  lineWidth: 1,
                  stroke: "#3077EC",
                  strokeOpacity: "0.4",
                },
                textStyle: { fontSize: 10, fill: "#3077EC" },
              }),
          j.render(),
          "mp" !== r.StockBridge.ENV &&
            ((this.hisChart = j), this.addLastPointTip(w));
      },
      changeZysrChart: function (t) {
        var e,
          a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        (this.extra.zysr.subed = t),
          (this.extra.zysr.err = !1),
          (this.extra.zysr.order = a),
          (this.zysrChartData = this.data.zysr[a]),
          (this.zysrHash = String(Math.random())),
          (this.extra.zysr.years = !1),
          (this.zygcReportDate = this.data.zysr[a].date),
          null == (e = this.$refs.briefHK) ||
            e.removeEventListener("touchmove", this.noScroll, !1);
      },
      getAxisData: function (t, e, a) {
        for (
          var i = (e - t) / (a - 1),
            r = t - i / 2,
            n = (e + i / 2 - r) / (a - 1),
            s = [],
            o = 0;
          o < a;
          o++
        )
          s.push(r + n * o);
        return s;
      },
      addLastPointTip: function (t) {
        var e = this.hisChart.get("canvas"),
          a = this.hisChart.getPosition({ date: t.date, value: t.value }),
          i = t.value;
        (a.fill = "#3d76b8"), (a.textValue = "".concat((+i).toFixed(2)));
        var r = a.y;
        r <= 30 ? (r += 10) : (r -= 10), (a.y = r);
        var n = "west" === this.fontSkin ? "stockFont" : "";
        s.createTag(
          e,
          a,
          n,
          l.getCSSVariable("--fill-content-layer", "", this.skin)
        ),
          e.draw();
      },
      changeGdTab: function (t) {
        var e, a;
        (this.extra.gdtj.subed = t),
          (this.extra.gdtj.list =
            (null == (e = this.data.gudong.gdtj[t]) ? void 0 : e.list) || []),
          (this.extra.gdtj.updateTimeGd =
            (null == (a = this.data.gudong.gdtj[t]) ? void 0 : a.date) || ""),
          this.extra.gdtj.list && this.extra.gdtj.list.length > 0
            ? (this.extra.gdtj.list =
                "cggd" === t
                  ? this.extra.gdtj.list.slice(0, 5)
                  : this.extra.gdtj.list.slice(0, 7))
            : (this.extra.gdtj.err = !0);
      },
      openDetail: function (t) {
        "wzq" === r.StockBridge.ENV &&
          r.StockBridge.routeTo({
            path: "/stockDetail/hk/".concat(t),
            query: {
              code: this.scode,
              market: this.market,
              name: this.stockName,
            },
          }),
          "mp" === r.StockBridge.ENV &&
            r.StockBridge.openExtraWebview(
              "https://wzq.tenpay.com/mp/v2/index.html#/stockDetail/hk/"
                .concat(t, "?code=")
                .concat(this.scode, "&market=")
                .concat(this.market, "&name=")
                .concat(this.stockName)
            ),
          r.StockBridge.report("hq.stock_detail.goto_".concat(t, "_page"));
      },
    },
    beforeDestroy: function () {
      clearInterval(this.plateInterval);
    },
  };
Array ||
  (
    r.resolveComponent("Wiki") +
    r.resolveComponent("f2") +
    r.resolveComponent("Gshg") +
    r.resolveComponent("NoData")
  )();
var d = r._export_sfc(h, [
  [
    "render",
    function (t, e, a, i, n, s) {
      return r.e(
        { a: n.data.basic },
        n.data.basic
          ? r.e(
              { b: n.extra.zysr.years },
              n.extra.zysr.years
                ? {
                    c: r.o(function () {
                      return s.toggleYear && s.toggleYear.apply(s, arguments);
                    }, 1890),
                  }
                : {},
              { d: n.data.basic },
              n.data.basic
                ? r.e(
                    {
                      e: r.p({ wikiInfo: s.wikiInfo, skin: a.skin }),
                      f: n.data.basic.plate && n.data.basic.plate[0].name,
                    },
                    n.data.basic.plate && n.data.basic.plate[0].name
                      ? r.e(
                          {
                            g:
                              n.data.basic.plate[0] &&
                              n.data.basic.plate[0].name,
                          },
                          n.data.basic.plate[0] && n.data.basic.plate[0].name
                            ? r.e(
                                {
                                  h: r.t(n.data.basic.plate[0].name),
                                  i: "--" !== n.data.basic.plate[0].name,
                                },
                                "--" !== n.data.basic.plate[0].name
                                  ? {
                                      j: r.t(s.zdfFormat(n.plateZdf)),
                                      k: r.n(s.zdfColor(n.plateZdf)),
                                    }
                                  : {},
                                {
                                  l: r.n(
                                    "--" === n.data.basic.plate[0].name
                                      ? "black-title"
                                      : "blue-title"
                                  ),
                                  m: r.o(function (t) {
                                    return s.jumpToPlate(
                                      n.data.basic.plate[0].name,
                                      n.data.basic.plate[0].id
                                    );
                                  }, 1891),
                                }
                              )
                            : {}
                        )
                      : {},
                    {
                      n: r.f(n.blockItem.gsjj, function (t, e, a) {
                        return r.e(
                          {
                            a:
                              "plate" !== t &&
                              n.data.basic[t] &&
                              n.data.basic[t].length > 0 &&
                              ("Website" !== t || s.isWzq),
                          },
                          "plate" !== t &&
                            n.data.basic[t] &&
                            n.data.basic[t].length > 0 &&
                            ("Website" !== t || s.isWzq)
                            ? r.e(
                                { b: r.t(e), c: "Website" === t },
                                "Website" === t
                                  ? r.e(
                                      { d: "--" !== n.data.basic[t] },
                                      "--" !== n.data.basic[t]
                                        ? {
                                            e: r.t(n.data.basic[t]),
                                            f: n.data.basic[t],
                                            g: r.o(
                                              function (t) {
                                                return s.gotowebsite();
                                              },
                                              1892,
                                              e
                                            ),
                                          }
                                        : { h: r.t(n.data.basic[t]) }
                                    )
                                  : r.e(
                                      {
                                        i: r.t(
                                          "STOCK_SUM" === t ||
                                            "HK_STOCK_SUM" === t
                                            ? s.changeNum(n.data.basic[t]) +
                                                "股"
                                            : n.data.basic[t]
                                        ),
                                        j: r.n(
                                          n.foldCompany ? "show-threeLine" : ""
                                        ),
                                        k: r.o(
                                          function (e) {
                                            return (
                                              "Business" === t && s.toggleFold()
                                            );
                                          },
                                          1893,
                                          e
                                        ),
                                        l: "Business" === t,
                                      },
                                      "Business" === t
                                        ? {
                                            m: r.t(
                                              n.foldCompany
                                                ? "查看更多"
                                                : "收起"
                                            ),
                                            n: r.n(
                                              n.foldCompany ? "bottom" : "top"
                                            ),
                                            o: r.o(
                                              function (t) {
                                                return s.toggleFold();
                                              },
                                              1894,
                                              e
                                            ),
                                          }
                                        : {}
                                    )
                              )
                            : {},
                          { p: e }
                        );
                      }),
                    }
                  )
                : {},
              { o: n.data.zysr && n.data.zysr.length > 0 },
              n.data.zysr && n.data.zysr.length > 0
                ? r.e(
                    {
                      p: r.t(n.zygcReportDate),
                      q: r.o(function () {
                        return s.toggleYear && s.toggleYear.apply(s, arguments);
                      }, 1895),
                      r: n.data.zysr.length > 0,
                    },
                    (n.data.zysr.length, {}),
                    { s: "black" === this.skin },
                    (this.skin, {}),
                    {
                      t: r.f(n.data.zysr, function (t, e, a) {
                        return {
                          a: r.t(t.date),
                          b: e,
                          c: r.n(
                            n.zygcReportDate === t.date ? "active-year" : ""
                          ),
                          d: r.o(
                            function (t) {
                              return s.changeZysrChart(n.extra.zysr.subed, e);
                            },
                            1896,
                            e
                          ),
                        };
                      }),
                      v: n.extra.zysr.years,
                      w: r.f(n.extra.zysr.sub, function (t, e, a) {
                        return {
                          a: r.t(t),
                          b: r.n(
                            n.extra.zysr.subed === e ? "active" : "noactive"
                          ),
                          c: e,
                          d: r.o(
                            function (t) {
                              return s.changeZysrChart(e, n.extra.zysr.order);
                            },
                            1897,
                            e
                          ),
                        };
                      }),
                      x: n.showZysr && !n.extra.zysr.err,
                    },
                    n.showZysr && !n.extra.zysr.err
                      ? {
                          y: r.sr("zysrChart", "2b81f406-1"),
                          z: r.o(s.drawZysrChart, 1898),
                          A: r.p({
                            chartId: "zysrChart",
                            cClass: "zysrChartClass",
                            cStyle: "width: 100%; height: 420rpx",
                            config: n.zysrConfig,
                            refreshHash: n.zysrHash,
                          }),
                        }
                      : {},
                    { B: n.extra.zysr.err },
                    n.extra.zysr.err
                      ? { C: r.t(n.extra.zysr.sub[n.extra.zysr.subed]) }
                      : {},
                    { D: !n.extra.zysr.err },
                    n.extra.zysr.err
                      ? {}
                      : r.e(
                          {
                            E: r.t(n.extra.zysr.sub[n.extra.zysr.subed]),
                            F: r.f(n.extra.zysr.list, function (t, e, a) {
                              return r.e(
                                {
                                  a: n.extra.zysr.labelColor[e],
                                  b: r.t(t.ItemsName),
                                  c: n.extra.zysr.list2 && 3 === e,
                                },
                                n.extra.zysr.list2 && 3 === e
                                  ? {
                                      d: r.n(
                                        n.extra.zysr.fold
                                          ? "arrow bottom"
                                          : "arrow top"
                                      ),
                                    }
                                  : {},
                                {
                                  e: r.o(
                                    function (t) {
                                      return n.extra.zysr.list2 && 3 === e
                                        ? s.toggleMore()
                                        : null;
                                    },
                                    1899,
                                    e
                                  ),
                                  f: r.t(t.SubsectionIncomeTPeriod),
                                  g: r.t(t.SubsectionIncomeRatio),
                                  h: e,
                                }
                              );
                            }),
                            G: n.extra.zysr.list2,
                          },
                          n.extra.zysr.list2
                            ? {
                                H: r.f(n.extra.zysr.list2, function (t, e, a) {
                                  return {
                                    a: r.t(t.ItemsName),
                                    b: r.t(t.SubsectionIncomeTPeriod),
                                    c: r.t(t.SubsectionIncomeRatio),
                                    d: e,
                                  };
                                }),
                                I: !n.extra.zysr.fold,
                              }
                            : {}
                        )
                  )
                : {},
              { J: n.data.mbjyc && n.data.mbjyc.dqj },
              n.data.mbjyc && n.data.mbjyc.dqj
                ? {
                    K: r.t(n.data.mbjyc.jgs || "0"),
                    L: r.t(n.data.mbjyc.mbjj || "0.00"),
                    M: r.t(n.data.mbjyc.minmbj || "0.00"),
                    N: r.t(n.data.mbjyc.maxmbj || "0.00"),
                    O: n.data.mbjyc.per4 + "%",
                    P: r.t(n.data.mbjyc.mbjj),
                    Q: 75 - n.data.mbjyc.per4 + "%",
                    R: n.data.mbjyc.per1 + "%",
                    S: r.t(n.data.mbjyc.dqj),
                    T: 75 - n.data.mbjyc.per1 + "%",
                    U: r.t(n.data.mbjyc.maxmbj),
                    V: n.data.mbjyc.per3 + "%",
                    W: r.t(n.data.mbjyc.minmbj),
                    X: 75 - n.data.mbjyc.per3 + "%",
                  }
                : {},
              { Y: n.data.tzpj && (n.data.tzpj.jgpj || n.data.tzpj.kline) },
              n.data.tzpj && (n.data.tzpj.jgpj || n.data.tzpj.kline)
                ? r.e(
                    { Z: n.data.tzpj.jgpj.length > 0 },
                    n.data.tzpj.jgpj.length > 0
                      ? {
                          aa: r.f(n.data.tzpj.jgpj, function (t, e, a) {
                            return r.e(
                              { a: "" !== t.zjc.jgs },
                              "" !== t.zjc.jgs
                                ? { b: r.t("--" === t.zjc.jgs ? 0 : t.zjc.jgs) }
                                : {},
                              { c: "" !== t.zjc.jgs },
                              "" !== t.zjc.jgs
                                ? {
                                    d: r.t(t.buyper >= 5 ? t.buyper + "%" : ""),
                                    e: t.buyper + "%",
                                    f: r.t(
                                      t.holdper >= 5 ? t.holdper + "%" : ""
                                    ),
                                    g: t.holdper + "%",
                                    h: r.t(
                                      t.sellper >= 5 ? t.sellper + "%" : ""
                                    ),
                                    i: t.sellper + "%",
                                  }
                                : {},
                              { j: "" !== t.zjc.jgs },
                              "" !== t.zjc.jgs
                                ? { k: r.t(t.date.substr(5, 2)) }
                                : {},
                              { l: e }
                            );
                          }),
                        }
                      : {},
                    {
                      ab:
                        n.data.tzpj.jgpj &&
                        n.data.tzpj.kline &&
                        n.data.tzpj.jgpj.length > 0 &&
                        n.data.tzpj.kline.length > 0,
                    },
                    (n.data.tzpj.jgpj &&
                      n.data.tzpj.kline &&
                      n.data.tzpj.jgpj.length > 0 &&
                      n.data.tzpj.kline.length,
                    {}),
                    { ac: n.data.tzpj.kline.length > 0 },
                    n.data.tzpj.kline.length > 0
                      ? r.e(
                          { ad: n.showHisline },
                          n.showHisline
                            ? {
                                ae: r.sr("hislineChart", "2b81f406-2"),
                                af: r.o(s.drawHislineChart, 1900),
                                ag: r.p({
                                  chartId: "brief-hk-line-chart",
                                  cClass: "hishklineChartClass",
                                  cStyle: "width: 100%; height: 420rpx",
                                  config: n.hislineConfig,
                                  refreshHash: n.hislineHash,
                                }),
                              }
                            : {}
                        )
                      : {}
                  )
                : {},
              { ah: n.hasGD || n.hasJG },
              n.hasGD || n.hasJG
                ? r.e(
                    { ai: n.hasJG },
                    n.hasJG
                      ? r.e(
                          {
                            aj: r.t(n.extra.jgcc.updateTimeJg),
                            ak: r.o(function (t) {
                              return s.openDetail("jigoucc");
                            }, 1901),
                            al:
                              !n.extra.jgcc.err &&
                              0 !== Object.keys(n.extra.jgcc.ratioData).length,
                          },
                          n.extra.jgcc.err ||
                            0 === Object.keys(n.extra.jgcc.ratioData).length
                            ? {}
                            : r.e(
                                {
                                  am: r.t(s.organRatio + "%"),
                                  an: s.organRatio > 0,
                                },
                                s.organRatio > 0
                                  ? { ao: s.organRatio + "%" }
                                  : {},
                                { ap: s.circulGuben > 0 },
                                s.circulGuben > 0
                                  ? { aq: s.circulGuben + "%" }
                                  : {},
                                {
                                  ar: r.t(n.extra.jgcc.ratioData.jgs + "家"),
                                  as: r.t(
                                    n.extra.jgcc.ratioData.jgsChange + "家"
                                  ),
                                  at: r.n(
                                    s.colorFilter(
                                      n.extra.jgcc.ratioData.jgsChange
                                    )
                                  ),
                                  av: r.t(s.cgsFormat),
                                  aw: r.t(
                                    n.extra.jgcc.ratioData.cgsChange + "股"
                                  ),
                                  ax: r.n(
                                    s.colorFilter(
                                      n.extra.jgcc.ratioData.cgsChange
                                    )
                                  ),
                                }
                              ),
                          { ay: !n.extra.jgcc.err },
                          (n.extra.jgcc.err, {}),
                          { az: !n.extra.jgcc.err },
                          n.extra.jgcc.err
                            ? {}
                            : r.e(
                                {
                                  aA:
                                    "wzq" === n.stockBridge.ENV ||
                                    "mini" === n.stockBridge.ENV ||
                                    "oem" === n.stockBridge.ENV,
                                },
                                "wzq" === n.stockBridge.ENV ||
                                  "mini" === n.stockBridge.ENV ||
                                  "oem" === n.stockBridge.ENV
                                  ? {
                                      aB: r.o(function () {
                                        return (
                                          s.chartTouchStart &&
                                          s.chartTouchStart.apply(s, arguments)
                                        );
                                      }, 1902),
                                      aC: r.o(function () {
                                        return (
                                          s.chartTouchMove &&
                                          s.chartTouchMove.apply(s, arguments)
                                        );
                                      }, 1903),
                                      aD: r.o(function () {
                                        return (
                                          s.chartTouchEnd &&
                                          s.chartTouchEnd.apply(s, arguments)
                                        );
                                      }, 1904),
                                    }
                                  : {},
                                { aE: n.showJgcc },
                                n.showJgcc
                                  ? {
                                      aF: r.sr("lineChart", "2b81f406-3"),
                                      aG: r.o(s.drawJgccChart, 1905),
                                      aH: r.p({
                                        chartId: "jgccChart",
                                        cClass: "jgccChartClass",
                                        cStyle: "width: 100%; height: 420rpx",
                                        config: n.jgccConfig,
                                        refreshHash: n.jgccHash,
                                      }),
                                    }
                                  : {},
                                { aI: n.extra.technical.showTooltip },
                                n.extra.technical.showTooltip
                                  ? {
                                      aJ: r.t(n.extra.technical.origin.period),
                                      aK: r.t(n.extra.technical.origin.jgs),
                                      aL: r.t(
                                        n.extra.technical.origin.ratio.toFixed(
                                          2
                                        ) + "%"
                                      ),
                                      aM: r.t(
                                        0 === n.extra.technical.origin.value
                                          ? "--"
                                          : n.extra.technical.origin.value.toFixed(
                                              3
                                            )
                                      ),
                                      aN: r.n(
                                        n.extra.technical.origin.priceColor
                                      ),
                                      aO: r.n(
                                        n.extra.technical.left
                                          ? "canvas-toolTip-left"
                                          : "canvas-toolTip-right"
                                      ),
                                    }
                                  : {}
                              ),
                          { aP: !n.extra.jgcc.err },
                          (n.extra.jgcc.err, {}),
                          { aQ: n.extra.jgcc.err },
                          (n.extra.jgcc.err, {})
                        )
                      : {},
                    { aR: n.hasJG && n.hasGD },
                    (n.hasJG && n.hasGD, {}),
                    { aS: n.hasGD },
                    n.hasGD
                      ? r.e(
                          {
                            aT: r.t(n.extra.gdtj.updateTimeGd),
                            aU: r.o(function (t) {
                              return s.openDetail("gudongtj");
                            }, 1906),
                            aV: r.f(n.extra.gdtj.sub, function (t, e, a) {
                              return {
                                a: r.t(t),
                                b: r.n(
                                  n.extra.gdtj.subed === e
                                    ? "activeblue"
                                    : "noactive"
                                ),
                                c: e,
                                d: r.o(
                                  function (t) {
                                    return s.changeGdTab(e);
                                  },
                                  1907,
                                  e
                                ),
                              };
                            }),
                            aW: n.extra.gdtj.err,
                          },
                          (n.extra.gdtj.err, {}),
                          { aX: !n.extra.gdtj.err },
                          n.extra.gdtj.err
                            ? {}
                            : {
                                aY: r.t(
                                  "cggd" === n.extra.gdtj.subed
                                    ? "股东名称"
                                    : "持股机构"
                                ),
                                aZ: r.f(n.extra.gdtj.list, function (t, e, a) {
                                  return {
                                    a: r.t(t.name),
                                    b: r.t(s.changeNum(t.cgs)),
                                    c: r.t(
                                      "cggd" === n.extra.gdtj.subed
                                        ? t.cgbl
                                        : t.zb
                                    ),
                                    d: e,
                                  };
                                }),
                              }
                        )
                      : {}
                  )
                : {},
              { ba: n.data.director && n.data.director.length > 0 },
              n.data.director && n.data.director.length > 0
                ? r.e(
                    {
                      bb: r.f(n.data.director, function (t, e, a) {
                        return r.e(
                          { a: e < 3 || n.listOverShowgg },
                          e < 3 || n.listOverShowgg
                            ? { b: r.t(t.dname), c: r.t(t.dposition) }
                            : {},
                          { d: e }
                        );
                      }),
                      bc: n.data.director.length > 3,
                    },
                    n.data.director.length > 3
                      ? {
                          bd: r.t(n.listOverShowgg ? "收起" : "查看更多"),
                          be: r.n(n.listOverShowgg ? "top" : "bottom"),
                          bf: r.o(function (t) {
                            return s.showList("director");
                          }, 1908),
                        }
                      : {}
                  )
                : {},
              { bg: n.data.huigou && n.data.huigou.length > 0 },
              n.data.huigou && n.data.huigou.length > 0
                ? {
                    bh: r.o(function (t) {
                      return s.showTeachTips("公司回购", "huigou");
                    }, 1909),
                    bi: r.o(function (t) {
                      return s.openDetail("gshuigou");
                    }, 1910),
                    bj: r.p({ "hg-data": n.data.huigou, "show-tip": !0 }),
                  }
                : {},
              { bk: n.data.fhpx && n.data.fhpx.length > 0 },
              n.data.fhpx && n.data.fhpx.length > 0
                ? {
                    bl: r.o(function (t) {
                      return s.showTeachTips("分红送配", "dividend");
                    }, 1911),
                    bm: r.o(function (t) {
                      return s.openDetail("fenhongsp");
                    }, 1912),
                    bn: r.f(n.data.fhpx, function (t, e, a) {
                      return r.e(
                        { a: e < 3 || n.listOverShowfh },
                        e < 3 || n.listOverShowfh
                          ? { b: r.t(t.cqr), c: r.t(t.CONTENT) }
                          : {},
                        { d: e, e: e < 3 || n.listOverShowfh }
                      );
                    }),
                  }
                : {}
            )
          : (n.firstLoaded, {}),
        { bo: n.firstLoaded, bp: n.data.basic },
        n.data.basic
          ? {
              bq: r.o(function (t) {
                return s.showTeachTips("", "teaching");
              }, 1913),
            }
          : {},
        { br: "mini" === n.stockBridge.ENV },
        (n.stockBridge.ENV, {}),
        { bs: "black" === a.skin ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-2b81f406"],
]);
wx.createComponent(d);
