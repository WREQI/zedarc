var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, r) {
    return new Promise(function (a, i) {
      var s = function (t) {
          try {
            o(r.next(t));
          } catch (t) {
            i(t);
          }
        },
        n = function (t) {
          try {
            o(r.throw(t));
          } catch (t) {
            i(t);
          }
        },
        o = function (t) {
          return t.done ? a(t.value) : Promise.resolve(t.value).then(s, n);
        };
      o((r = r.apply(t, e)).next());
    });
  },
  r = require("../../../../common/vendor.js"),
  a = require("../stock-hq-data/index.js"),
  i = require("../stock-crypto-modules-config/dist/index.js"),
  s = require("utils/chartTheme.js"),
  n = require("api/index.js"),
  o = require("../stock-hq-core/config/css-token.js"),
  c = {
    name: "BriefHS",
    props: {
      scode: String,
      market: String,
      stockName: String,
      stockType: String,
      isWindows: Boolean,
      titleHeight: Number,
      mpscrollTop: Number,
      isTrading: Boolean,
      skin: { type: String, default: "white" },
      rank: String,
      isQutationFold: Boolean,
      extraInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    inject: ["fontSkin", "hqBridge"],
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
      StockFund: function () {
        return "./components/StockFund.js";
      },
      BriefPlate: function () {
        return "./components/BriefPlate.js";
      },
      MpTabs: function () {
        return "./components/briefSubTabs/mp-tabs.js";
      },
      Gshg: function () {
        return "./components/gshg-card.js";
      },
      BubbleTip: function () {
        return "./components/BubbleTip.js";
      },
    },
    data: function () {
      return {
        market_type: ["sz", "sh"][+this.market],
        themeColor: {},
        stockBridge: r.StockBridge,
        chart: {},
        briefData: {},
        blockItem: {
          overview: {
            市盈: ["syl"],
            市净率: ["sjl"],
            每股收益: ["mgsy"],
            每股净资产: ["mgjzc"],
            营业总收入: ["yyzsr", "yysr"],
            营收同比: ["zsrzzl", "srzzl"],
            净利润: ["jlr"],
            净利润同比: ["jlrzzl"],
          },
          gsjj: {
            行业: "plate",
            概念: "concept",
            地域: "area",
            公司名称: "gsmz",
            发行价格: "jg",
            主营业务: "yw",
          },
          gdgb: {
            总股本: "zgb",
            流通股本: "ltgb",
            股东人数: "gdrs",
            人均持股: "rjcg",
            前十大股东占比: "gdzb",
            前十大流通股东占比: "ltgdzb",
          },
          px: {
            px: ["派现", "#ED8A20"],
            fx: ["发行", "#489CFC"],
            zf: ["增发", "#A3CDFD"],
            pg: ["配股", "#DAEBFE"],
          },
        },
        extra: {
          zysr: {
            labelColor: [
              "#FF891E",
              "#48AFFB",
              "#2881CD",
              "#9D9D9D",
              "#8543E0",
              "#3436C7",
              "#223273",
            ],
            err: !1,
            order: 0,
            subed: "product",
            sub: { sector: "行业", product: "产品", region: "地区" },
            years: !1,
            list: [],
            list2: null,
            fold: !0,
          },
          jgcc: {
            labelColor: [
              "#FF891E",
              "#FCBA71",
              "#FDD39C",
              "#7ECAFF",
              "#43AEFA",
              "#2381CD",
              "#9C9D9E",
            ],
            years: !1,
            err: !1,
            list: [],
            ratio: 0,
            order: 0,
          },
          hytrend: {
            date: "",
            curr: "",
            rise: "",
            err: !1,
            subed: "yyzsr",
            sub: { yyzsr: "营业总收入", jlr: "净利润", mgsy: "每股收益" },
            data: "",
          },
          hydb: {
            selected: "mgsy",
            tabs: [
              { type: "mgsy", name: "每股收益" },
              { type: "yysr", name: "营业收入" },
              { type: "jlr", name: "净利润" },
              { type: "mgjzc", name: "每股净资产" },
              { type: "jzcsyl", name: "净资产收益率" },
            ],
            count: 0,
          },
        },
        folded: !0,
        listTips: "点击显示更多",
        stockTips: "展开",
        listOverShow: !1,
        introStockInfo: {},
        introShow: !1,
        px: {},
        loading: !0,
        firstLoaded: !1,
        chartW: 375,
        showFHSP: {
          title: "关于分红和派现募资比",
          content:
            "上市公司一般通过发行、增发、配股进行股权募资，利用获得的利润向股东派发现金，累计派现募资比在一定程度上反映了普通股股东在长期投资中所获得的累计投资收益水平。",
        },
        organData: [],
        reportDate: "",
        isOrganBriefShow: !1,
        organBriefText: "",
        ceiling: !1,
        tabOffsetTop: {
          gsgk: Number.MAX_SAFE_INTEGER,
          ssbk: Number.MAX_SAFE_INTEGER,
          jyfx: Number.MAX_SAFE_INTEGER,
          gdgb: Number.MAX_SAFE_INTEGER,
          fhps: Number.MAX_SAFE_INTEGER,
        },
        tabList: ["gsgk", "ssbk", "jyfx", "gdgb", "fhps"],
        tabs: {
          gsgk: { name: "公司概况", show: !0, stat: "brief_gsgk_tab_click" },
          ssbk: { name: "所属板块", show: !0, stat: "brief_ssbk_tab_click" },
          jyfx: { name: "经营分析", show: !0, stat: "brief_jyfx_tab_click" },
          gdgb: { name: "股东股本", show: !0, stat: "brief_gdgb_tab_click" },
          gshg: { name: "公司回购", show: !0, stat: "brief_gshg_tab_click" },
          fhps: { name: "分红送配", show: !0, stat: "brief_fhps_tab_click" },
        },
        selectTab: "",
        defaultTab: "",
        ceilingPart: {
          offsetTop: Number.MAX_SAFE_INTEGER,
          clientHeight: Number.MAX_SAFE_INTEGER,
        },
        tabLastItemInd: -1,
        gsgkLastItemInd: -1,
        jyfxLastItemInd: -1,
        gdgbLastItemInd: -1,
        fhpsLastItemInd: -1,
        zygcReportDate: "",
        clickTabFlag: !1,
        labelNum: 0,
        showHytrend: !1,
        showHydb: !1,
        showZysr: !1,
        showJgcc: !1,
        hytrendChartData: [],
        hydbChartData: [],
        zysrChartData: {},
        jgccChartData: [],
        zysrHash: "",
        hytrendHash: "",
        hydhHash: "",
        jgccHash: "",
        showFund: !0,
        wikiZygcHS:
          (location && -1 !== location.href.indexOf("wikiType=brief")) || !1,
        hytrendChart: null,
        isWiki: !1,
        zysrConfig: { padding: [30, 0, "auto", 0], animate: !1 },
        hytrendConfig: { padding: [30, 0, "auto", 56], animate: !1 },
        hydbConfig: { padding: [10, 55, 5, 80] },
        jgccConfig: { padding: [30, 0, "auto", 0], animate: !1 },
        showExtraBubble: !1,
      };
    },
    options: { styleIsolation: "shared" },
    watch: {
      isQutationFold: function () {
        this.ceilingHandle();
      },
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
        return a.utils.getSymbol(this.market, this.scode);
      },
      isMp: function () {
        return r.StockBridge.ENV === r.EnvTypeEnum.MP;
      },
      rateFilter: function () {
        return function (t) {
          return "".concat(+t > 0 ? "+" : "").concat((+t).toFixed(2), "%");
        };
      },
      textFilter: function () {
        return function (t) {
          return "".concat(+t > 0 ? "+" : "").concat(t);
        };
      },
      rateClassFilter: function () {
        return function (t) {
          return t > 0 ? "red" : t < 0 ? "green" : "gray";
        };
      },
      pLayoutShow: function () {
        var t = {};
        return (
          Object.keys(this.blockItem.overview).forEach(function (e, r) {
            t[e] = r % 2 == 0 ? "pr7" : "pl7";
          }),
          t
        );
      },
      showRatioChg: function () {
        return function (t) {
          var e = "";
          return t > 0 && (e = "+"), "（".concat(e).concat(t.toFixed(2), "%）");
        };
      },
      showHolding: function () {
        return function (t) {
          return t > 9999
            ? "".concat((t /= 1e4).toFixed(2), "亿")
            : t >= 0 && t < 1
            ? "".concat((t *= 1e4).toFixed(2))
            : "".concat(t.toFixed(2), "万");
        };
      },
      changeRatio: function () {
        return function (t) {
          return "".concat(t.toFixed(2), "%");
        };
      },
      organRatio: function () {
        return this.extra.jgcc.ratio;
      },
      circulGuben: function () {
        return 100 - this.extra.jgcc.ratio;
      },
    },
    activated: function () {
      var t, e;
      "mp" !== r.StockBridge.ENV &&
        (document.addEventListener("scroll", this.listenCardScroll),
        this.listenCardScroll()),
        null == (t = this.$refs.stockfund) || t.judgeTime(),
        null == (e = this.$refs.briefplate) || e.judgeTime(),
        (this.zysrHash = String(Math.random())),
        (this.hytrendHash = String(Math.random())),
        (this.hydhHash = String(Math.random())),
        (this.jgccHash = String(Math.random()));
    },
    deactivated: function () {
      var t, e;
      "mp" !== r.StockBridge.ENV &&
        document.removeEventListener("scroll", this.listenCardScroll),
        null == (t = this.$refs.stockfund) || t.clearRefresh(),
        null == (e = this.$refs.briefplate) || e.clearRefresh();
    },
    mounted: function () {
      (this.themeColor = this.initThemeColor()),
        "mp" !== r.StockBridge.ENV &&
          document.addEventListener("scroll", this.listenCardScroll),
        this.getData();
    },
    methods: {
      initThemeColor: function () {
        var t = o.CSSTOKEN[r.isBroker] || o.CSSTOKEN.DEFAULT,
          e = !this.isMp && getComputedStyle(document.documentElement),
          a = t.midBlue3 || "#48AFFB",
          i = t.midBlue4 || "#489CFC",
          s = t.midBlue5 || "#43AEFA",
          n = t.midBlue6 || "#A3CDFD",
          c = t.midRed || "#c92a1d",
          h = this.isMp
            ? "#ff891e"
            : e.getPropertyValue("--color-orange").trim() || "#ff891e",
          l = t.midOrange || "#ED8A20";
        return (
          (this.extra.zysr.labelColor = [
            h,
            a,
            "#2881CD",
            "#9D9D9D",
            "#8543E0",
            "#3436C7",
            "#223273",
          ]),
          (this.blockItem.px = {
            px: ["派现", l],
            fx: ["发行", i],
            zf: ["增发", n],
            pg: ["配股", "#DAEBFE"],
          }),
          { midRed: c, bigOrange: h, midBlue3: a, midOrange: l, midBlue5: s }
        );
      },
      ceilingHandle: function () {
        var t = this;
        "mp" !== r.StockBridge.ENV
          ? setTimeout(function () {
              (t.ceilingPart.offsetTop =
                t.$refs.ceilingPart && t.$refs.ceilingPart.offsetTop),
                (t.ceilingPart.clientHeight =
                  t.$refs.ceilingPart && t.$refs.ceilingPart.clientHeight),
                t.getTabOffsetTop(),
                t.wikiFixedZyyw();
            }, 500)
          : setTimeout(function () {
              r.wx$1
                .createSelectorQuery()
                .in(t)
                .select("#ceilingPartMP")
                .boundingClientRect(function (e) {
                  (t.ceilingPart.offsetTop = e && e.top + t.mpscrollTop),
                    (t.ceilingPart.clientHeight = e && e.height),
                    t.getTabOffsetTopMP();
                })
                .exec();
            }, 500);
      },
      hideStockFund: function () {
        this.showFund = !1;
      },
      showStockFund: function () {
        this.showFund = !0;
      },
      clearFundRefresh: function () {
        var t, e;
        null == (t = this.$refs.stockfund) || t.clearRefresh(),
          null == (e = this.$refs.briefplate) || e.clearRefresh();
      },
      refreshFund: function () {
        var t, e;
        null == (t = this.$refs.stockfund) || t.judgeTime(),
          null == (e = this.$refs.briefplate) || e.judgeTime();
      },
      showTeachTips: function (t, e) {
        r.StockBridge.report("hq.stock_detail.brief_".concat(e, "_i_click")),
          r.StockRouter.routeTo({
            name: "informationDetail",
            query: {
              id: "SN20220727070218845f5161",
              articleStyle: "fullTeach",
              anchorTitle: t,
              time: new Date().getTime(),
            },
          });
      },
      getTabsInfo: function () {
        var t = this;
        if ("wzq" === r.StockBridge.ENV) {
          var e = this.$refs.tabs,
            a = this.$refs.ceilingTabs,
            i = [];
          return (
            Object.keys(this.tabs).forEach(function (e) {
              t.tabs[e].show && i.push(e);
            }),
            {
              $tabWrap: this.ceiling ? a : e,
              selectTab: this.selectTab,
              tablist: i,
            }
          );
        }
      },
      getData: function () {
        var a = this;
        n.getHSData(r.StockBridge, this.market_type + this.scode)
          .then(function (r) {
            return e(
              a,
              null,
              t().mark(function e() {
                var a = this;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!r || 0 != +r.code || !r.data.gsjj) {
                            t.next = 10;
                            break;
                          }
                          return (
                            (this.briefData = r.data),
                            this.setPx(),
                            this.processBriefData(),
                            (t.prev = 2),
                            (t.next = 5),
                            this.getOrganBrief()
                          );
                        case 5:
                          t.next = 9;
                          break;
                        case 7:
                          (t.prev = 7), (t.t0 = t.catch(2));
                        case 9:
                          this.$nextTick(function () {
                            if (
                              a.briefData.zysr &&
                              a.briefData.zysr.length > 0
                            ) {
                              a.zysrChartData = a.briefData.zysr[0];
                              var t,
                                e,
                                r,
                                i = ["product", "sector", "region"];
                              for (e = 0; e < a.briefData.zysr.length; e++) {
                                for (
                                  t = a.briefData.zysr[e].detail.map(function (
                                    t
                                  ) {
                                    return t.type;
                                  }),
                                    r = 0;
                                  r < 3 && -1 === t.indexOf(i[r]);
                                  r++
                                );
                                if (r < 3) break;
                              }
                              (a.extra.zysr.order = e),
                                (a.extra.zysr.subed = i[r]),
                                (a.showZysr = !0);
                            }
                            if (a.briefData.hytrend) {
                              var s = a.briefData.hytrend[0];
                              (a.extra.hytrend.date = s.date),
                                (a.extra.hytrend.curr = s.yyzsr || s.yysr),
                                (a.extra.hytrend.rise = s.t_yyzsr || s.t_yysr),
                                (a.extra.hytrend.subed = "yyzsr"),
                                (a.hytrendChartData =
                                  a.briefData.hytrend.reverse()),
                                (a.showHytrend = !0);
                            }
                            a.briefData.hydb &&
                              ((a.extra.hydb.selected = "mgsy"),
                              a.getHydbData()),
                              a.ceilingHandle();
                          });
                        case 10:
                          (this.loading = !1),
                            this.firstLoaded ||
                              ((this.firstLoaded = !0), this.$emit("loaded"));
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  },
                  e,
                  this,
                  [[2, 7]]
                );
              })
            );
          })
          .catch(function () {
            a.$emit("loaded");
          });
      },
      wikiFixedZyyw: function () {
        if ("wzq" === r.StockBridge.ENV && this.wikiZygcHS) {
          var t = this.$refs.ceilingPart
              ? this.$refs.ceilingPart.clientHeight
              : 0,
            e = this.titleHeight || 0;
          this.$refs.jyfx &&
            window.scrollTo(0, this.$refs.jyfx.offsetTop - t - e);
        }
      },
      drawZysrChart: function (t) {
        var e = this,
          a = this.zysrChartData.detail,
          i = this.extra.zysr.subed,
          n = t.chart;
        this.zysrConfig.animate = !this.isMp;
        try {
          n && n.clear();
        } catch (t) {}
        var o = null;
        if (
          (a.map(function (t) {
            t.type === i &&
              (t.detail.map(function (t) {
                (t.const = "const"), (t.fzb = +t.zb < 0 ? 0 : +t.zb);
              }),
              (o = t));
          }),
          !o)
        )
          return (this.extra.zysr.err = !0), !1;
        n.source(o.detail),
          n.coord("polar", { transposed: !0, innerRadius: 0.6, radius: 0.7 }),
          n.axis(!1).legend(!1).tooltip(!1),
          n
            .guide()
            .text({
              position: ["50%", "50%"],
              content: "主营构成",
              style: {
                textBaseline: "middle",
                textAlign: "center",
                fill: s.getCSSVariable("--color-midgray", "", this.skin),
                fontSize: 12,
              },
            }),
          n.pieLabel({
            sidePadding: 20,
            anchorOffset: 3,
            adjustOffset: 23,
            lineHeight: 38,
            label1: function (t) {
              return {
                text:
                  t.name.length > 9
                    ? "".concat(t.name.substr(0, 7), "..")
                    : t.name,
                fill: s.getCSSVariable("--color-heavygray", "", e.skin),
              };
            },
            label2: function (t) {
              return {
                text: "".concat(t.zb, "%"),
                fill: s.getCSSVariable("--color-heavygray", "", e.skin),
                fontFamily: "west" === e.fontSkin ? "stockFont" : "",
              };
            },
          });
        var c;
        (c =
          "mp" === r.StockBridge.ENV
            ? this.extra.zysr.labelColor
            : [
                this.themeColor.bigOrange,
                this.themeColor.midBlue3,
                "#2881CD",
                "#9D9D9D",
                "#8543E0",
                "#3436C7",
                "#223273",
              ]),
          n
            .interval()
            .position("const*fzb")
            .color("name", c)
            .adjust("stack")
            .style({
              lineWidth: 1,
              stroke: s.getCSSVariable("--fill-content-layer", "", this.skin),
            }),
          n.render(),
          (this.extra.zysr.list = o.detail),
          (this.extra.zysr.list2 = o.others);
      },
      touchstart: function (t) {
        var e = this;
        if (this.hytrendChartMp && "mp" === r.StockBridge.ENV) {
          var a = t.touches;
          if (a.length) {
            var i = a[0],
              s = i.x,
              n = i.y,
              o = this.hytrendChartMp && this.hytrendChartMp.get("height"),
              c = this.extra.hytrend.subed,
              h = this.extra.hytrend;
            "yyzsr" === c &&
              ((c = this.hytrendChartData[0][c] ? "yyzsr" : "yysr"),
              (h.subed = c));
            var l = this.hytrendChartData.map(function (t) {
              return {
                label: t.date,
                value: +("mgsy" === c
                  ? t.f_mgsy
                  : parseFloat(t["f_".concat(c)] / 1e8).toFixed(2)),
                key: c,
              };
            });
            (this.clickIndex = this.hytrendChartData.findIndex(function (t) {
              var r = +("mgsy" === c
                  ? t.f_mgsy
                  : parseFloat(t["f_".concat(c)] / 1e8).toFixed(2)),
                a = t.date,
                i =
                  e.hytrendChartMp &&
                  e.hytrendChartMp.getPosition({ value: r, label: a }),
                h = s > i.x - 26,
                l = s < i.x + 26,
                d = n > i.y - 30,
                g = n < i.y + o + 30;
              return h && l && d && g;
            })),
              this.clickIndex > -1 &&
                ((this.extra.hytrend.date =
                  this.hytrendChartData[this.clickIndex].date),
                (this.extra.hytrend.curr =
                  this.hytrendChartData[this.clickIndex][c]),
                (this.extra.hytrend.rise =
                  this.hytrendChartData[this.clickIndex]["t_".concat(c)]),
                this.hytrendChartMp &&
                  this.hytrendChartMp
                    .interval()
                    .position("label*value")
                    .color("label", function (t) {
                      return t === e.hytrendChartData[e.clickIndex].date
                        ? "#c92a1d"
                        : "#951f17";
                    })
                    .size(26),
                l.forEach(function (t, r) {
                  var a = r === e.clickIndex ? "#c92a1d" : "#951f17";
                  e.hytrendChartMp &&
                    e.hytrendChartMp
                      .guide()
                      .text({
                        position: [t.label, t.value],
                        content: t.value,
                        style: {
                          textAlign: "center",
                          textBaseline: "bottom",
                          fill: a,
                          fontSize: 12,
                          fontFamily: "west" === e.fontSkin ? "stockFont" : "",
                        },
                        offsetY: -5,
                      });
                }),
                this.hytrendChartMp && this.hytrendChartMp.repaint());
          }
        }
      },
      drawHytrendChart: function (t) {
        var e = this,
          a = this.hytrendChartData,
          i = this.extra.hytrend.subed,
          n = t.chart;
        this.hytrendConfig.animate = !this.isMp;
        var o = this.extra.hytrend;
        "yyzsr" === i && ((i = a[0][i] ? "yyzsr" : "yysr"), (o.subed = i));
        var c,
          h = a.map(function (t) {
            return {
              label: t.date,
              value: +("mgsy" === i
                ? t.f_mgsy
                : parseFloat(t["f_".concat(i)] / 1e8).toFixed(2)),
              key: i,
            };
          });
        a.map(function (t, e) {
          o.date &&
            t.date === o.date &&
            ((o.date = t.date),
            (o.curr = t[i]),
            (o.rise = t["t_".concat(i)]),
            (c = e));
        });
        var l = {
          value: {
            ticks: [
              0,
              Math.max.apply(
                null,
                h.map(function (t) {
                  return t.value;
                })
              ),
            ],
            formatter: function (t) {
              return t > 0
                ? "".concat(t).concat("mgsy" === h[0].key ? "元" : "亿")
                : t;
            },
          },
        };
        if (
          (s.getCSSVariable("--color-heavygray", "", this.skin),
          h[c],
          this.themeColor.midRed,
          !h)
        )
          return (o.err = !0), !1;
        n.axis("label", {
          label: {
            fontFamily: "west" === this.fontSkin ? "stockFont" : "",
            fill: s.getCSSVariable("--color-lightgray-2", "", this.skin),
          },
          line: {
            lineDash: null,
            stroke: s.getCSSVariable("--border-light-divider", "", this.skin),
            lineWidth: 1,
          },
          grid: {
            lineDash: null,
            stroke: s.getCSSVariable("--border-light-divider", "", this.skin),
            lineWidth: 1,
          },
        }),
          n.axis("value", {
            label: {
              fontFamily: "west" === this.fontSkin ? "stockFont" : "",
              fill: s.getCSSVariable("--color-lightgray-2", "", this.skin),
            },
            line: null,
            grid: {
              lineDash: null,
              stroke: s.getCSSVariable("--border-light-divider", "", this.skin),
              lineWidth: 1,
            },
          }),
          n.source(h, l).tooltip(!1),
          this.isMp
            ? (n
                .interval()
                .position("label*value")
                .color("label", function (t) {
                  return t === h[h.length - 1].label ? "#c92a1d" : "#951f17";
                })
                .size(26),
              n.legend(!1),
              h.map(function (t, r) {
                var a = r === h.length - 1 ? "#c92a1d" : "#951f17";
                n.guide().text({
                  position: [t.label, t.value],
                  content: t.value,
                  style: {
                    textAlign: "center",
                    textBaseline: "bottom",
                    fill: a,
                    fontSize: 12,
                    fontFamily: "west" === e.fontSkin ? "stockFont" : "",
                  },
                  offsetY: -5,
                });
              }))
            : (n.interval().position("label*value").color("#951f17"),
              h.map(function (t) {
                n.guide().text({
                  position: [t.label, t.value],
                  content: t.value,
                  style: {
                    textAlign: "center",
                    textBaseline: "bottom",
                    fill: "#e63535",
                    fontSize: 12,
                    fontFamily: "west" === e.fontSkin ? "stockFont" : "",
                  },
                  offsetY: -5,
                });
              })),
          n.render(),
          "mp" === r.StockBridge.ENV && (this.hytrendChartMp = n);
      },
      drawHydbChart: function (t) {
        var e = this,
          r = this.hydbChartData,
          a = this.extra.hydb.selected,
          i = t.chart;
        try {
          i && i.clear();
        } catch (t) {}
        i.axis("action", {
          grid: null,
          label: {
            fill: s.getCSSVariable("--color-heavygray", "", this.skin),
            fillOpacity: 1,
            fontSize: 12,
            fontFamily: "west" === this.fontSkin ? "stockFont" : "",
            style: { textAlign: "left" },
          },
        }),
          i.axis("value", !1),
          i.source(r.reverse()).coord({ transposed: !0 }),
          i.legend(!1),
          i.tooltip(!1),
          i
            .interval()
            .position("action*value")
            .color("action", function (t) {
              return "行业均值" === t
                ? "#ccc"
                : -1 !== t.indexOf(e.stockName)
                ? "#A3CDFD"
                : "#489CFC";
            }),
          r.map(function (t) {
            i.guide().text({
              position: [t.action, "max"],
              content:
                t.value +
                ("jzcsyl" === a
                  ? "%"
                  : "yysr" === a || "jlr" === a
                  ? "亿"
                  : "元"),
              style: {
                textAlign: "right",
                fill: s.getCSSVariable("--color-heavygray", "", e.skin),
                fontSize: 12,
                fontFamily: "west" === e.fontSkin ? "stockFont" : "",
              },
              offsetX: 50,
            });
          }),
          i.render();
      },
      drawJgccChart: function (t) {
        var e = this.jgccChartData,
          r = t.chart;
        this.jgccConfig.animate = !this.isMp;
        try {
          r && r.clear();
        } catch (t) {}
        if (
          (e.map(function (t) {
            (t.const = "const"),
              (t.fzb = +t.holding_ratio < 0 ? 0 : +t.holding_ratio);
          }),
          !(e && e.length > 0))
        )
          return (this.extra.jgcc.err = !0), !1;
        r.source(e),
          r.coord("polar", { transposed: !0, innerRadius: 0.6, radius: 0.8 }),
          r.axis(!1).legend(!1).tooltip(!1),
          r.pieLabel({
            sidePadding: 60,
            anchorOffset: 3,
            adjustOffset: 23,
            lineHeight: 38,
            label1: function (t) {
              return {
                text:
                  t.desc.length > 9
                    ? "".concat(t.desc.substr(0, 7), "..")
                    : t.desc,
                fill: "#262E40",
              };
            },
          }),
          e.length <= 4
            ? (this.extra.jgcc.labelColor = [
                "#FF891E",
                "#43AEFA",
                "#2381CD",
                "#9C9D9E",
              ])
            : (this.extra.jgcc.labelColor = [
                "#FF891E",
                "#FCBA71",
                "#FDD39C",
                "#7ECAFF",
                "#43AEFA",
                "#2381CD",
                "#9C9D9E",
              ]),
          r
            .interval()
            .position("const*fzb")
            .color("desc", this.extra.jgcc.labelColor)
            .adjust("stack")
            .style({ lineWidth: 1, stroke: "transparent" }),
          r.render();
      },
      changeJgccChart: function (t) {
        (this.jgccChartData = this.organData[t].quarter_holdings),
          (this.extra.jgcc.err = !1),
          (this.jgccHash = String(Math.random())),
          (this.extra.jgcc.years = !1),
          (this.extra.jgcc.list = this.organData[t].quarter_holdings),
          (this.extra.jgcc.ratio = this.organData[t].institution_holding_ratio),
          (this.reportDate = this.organData[t].report_date),
          this.isMp ||
            (this.$refs.jgccYears.innerHTML = this.changeReport(
              this.organData[t].report_date
            ));
      },
      changeZysrChart: function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        (this.extra.zysr.subed = t),
          (this.extra.zysr.err = !1),
          (this.extra.zysr.order = e),
          (this.zysrChartData = this.briefData.zysr[e]),
          (this.zysrHash = String(Math.random())),
          (this.extra.zysr.years = !1),
          (this.zygcReportDate = this.briefData.zysr[e].date);
      },
      changeHytrendChart: function (t) {
        (this.extra.hytrend.subed = t),
          (this.extra.hytrend.err = !1),
          (this.hytrendHash = String(Math.random())),
          r.StockBridge.report("hq.stock_detail.trend_tab_click", {
            tabtype: this.extra.hytrend.subed,
          });
      },
      changeHydbChart: function (r) {
        return e(
          this,
          null,
          t().mark(function e() {
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (this.extra.hydb.selected = r), this.getHydbData();
                    case 1:
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
      getHydbData: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var a,
              i,
              s,
              o,
              c,
              h = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (i = this.extra.hydb.selected),
                        (t.next = 3),
                        n.getHydetail(
                          r.StockBridge,
                          this.market_type + this.scode,
                          i
                        )
                      );
                    case 3:
                      (s = t.sent) &&
                        0 == +s.code &&
                        ((o = "mgsy" === i || "mgjzc" === i ? 4 : 2),
                        (c = [
                          {
                            action: "行业均值",
                            value: +parseFloat(
                              "jlr" === i || "yysr" === i
                                ? s.data.hy[i] / 1e8
                                : s.data.hy["f_".concat(i)]
                            ).toFixed(o),
                          },
                        ]),
                        (null == (a = null == s ? void 0 : s.data)
                          ? void 0
                          : a.hylist) &&
                          (s.data.hylist.map(function (t, e) {
                            (e < 3 || t.stockcode === h.scode) &&
                              c.push({
                                action: ""
                                  .concat(++e < 10 ? "0".concat(e) : e, " ")
                                  .concat(t.stockName),
                                value: +parseFloat(
                                  "jlr" === i || "yysr" === i
                                    ? t[i] / 1e8
                                    : t["f_".concat(i)]
                                ).toFixed(o),
                              });
                          }),
                          (this.extra.hydb.count = s.data.hylist.length)),
                        c &&
                          c.length > 0 &&
                          ((this.hydbChartData = c),
                          (this.showHydb = !0),
                          (this.hydhHash = String(Math.random()))));
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
      toggleMore: function () {
        (this.extra.zysr.fold = !this.extra.zysr.fold),
          r.StockBridge.report(
            "hq.stock_detail.zhuying_" +
              (this.extra.zysr.fold ? "fold" : "unfold")
          );
      },
      showList: function () {
        var t = this;
        (this.listOverShow = !this.listOverShow),
          (this.listTips = this.listOverShow ? "全部收起" : "点击显示更多"),
          r.StockBridge.report("hq.stock_detail.fh_checkmore_click"),
          setTimeout(function () {
            t.$emit("loaded");
          }, 0);
      },
      setPx: function () {
        if (this.briefData.pxmzb && this.briefData.pxmzb.pxmzb) {
          var t = 1e8,
            e = 0;
          if ("mp" === r.StockBridge.ENV)
            e =
              (
                (r.wx$1.getWindowInfo && r.wx$1.getWindowInfo()) ||
                r.wx$1.getSystemInfoSync()
              ).windowWidth - 160;
          else e = document.body.clientWidth - 160;
          var a = this.briefData.pxmzb,
            i = [
              parseInt(a.px, 10),
              parseInt(a.fx, 10),
              parseInt(a.zf, 10),
              parseInt(a.pg, 10),
            ],
            s = i[0],
            n = i[1],
            o = i[2],
            c = i[3];
          (a.pxe = (s / t).toFixed(2)),
            (a.mze = ((n + o + c) / t).toFixed(2)),
            (a.pxp = (
              (+a.pxmzb / 100) * e > e ? e : (+a.pxmzb / 100) * e
            ).toFixed(2)),
            s > n + o + c
              ? ((a.fxp = (n / t / (+a.pxe / 100)).toFixed(2)),
                (a.zfp = (o / t / (+a.pxe / 100)).toFixed(2)),
                (a.pgp = (c / t / (+a.pxe / 100)).toFixed(2)))
              : ((a.fxp = ((n / t / +a.mze) * e).toFixed(2)),
                (a.zfp = ((o / t / +a.mze) * e).toFixed(2)),
                (a.pgp = ((c / t / +a.mze) * e).toFixed(2))),
            (a.info = {
              px: 0 == +s ? 0 : "".concat((s / t).toFixed(2), "亿元"),
              fx: 0 == +n ? 0 : "".concat((n / t).toFixed(2), "亿元"),
              zf: 0 == +o ? 0 : "".concat((o / t).toFixed(2), "亿元"),
              pg: 0 == +c ? 0 : "".concat((c / t).toFixed(2), "亿元"),
            }),
            (this.px = a);
        }
      },
      goPage: function (t) {
        var e,
          a,
          i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (
          ("gudong" === t &&
            (r.StockBridge.report("stocklist.stock_shareholder"),
            i && r.StockBridge.report("hq.stock_detail.goto_shareholder_page")),
          "hydb?type=pxmzb" === t &&
            r.StockBridge.report("hq.stock_detail.goto_pxmz_page"),
          "gsjj" !== t)
        ) {
          if ("wzq" === r.StockBridge.ENV) {
            if ("gshuigou" === t)
              return void r.StockBridge.routeTo({
                path: "/stockDetail/hs/".concat(t),
                query: {
                  code: this.scode,
                  market: this.market,
                  name: this.stockName,
                },
              });
            r.StockBridge.routeTo({
              path: "/stockDetail/hs/".concat(t),
              query: {
                scode: this.market_type + this.scode,
                market: this.market,
                stockType: this.stockType,
                from: i ? "fund" : "",
              },
            });
          }
          if (
            ("oem" === r.StockBridge.ENV &&
              r.StockBridge.routeTo({
                path: r.isBroker
                  ? "/wj_hq/detail/".concat(t)
                  : "/detail/".concat(t),
                query: {
                  scode: this.market_type + this.scode,
                  market: this.market,
                  stockType: this.stockType,
                },
              }),
            "mp" === r.StockBridge.ENV)
          ) {
            var s = "https://wzq.tenpay.com/mp/v2/index.html#/stockDetail/hs/",
              n = "",
              o = "scode="
                .concat(this.market_type + this.scode, "&market=")
                .concat(this.market, "&stockType=")
                .concat(this.stockType, "&from=")
                .concat(i ? "fund" : "");
            (n =
              "hydb?type=pxmzb" === t || "hydb?type=mgsy" === t
                ? "".concat(s).concat(t, "&").concat(o)
                : "".concat(s).concat(t, "?").concat(o)),
              r.StockBridge.openExtraWebview(n);
          }
        } else
          null == (a = null == (e = this.$refs) ? void 0 : e.wiki) ||
            a.gotoDetail();
      },
      goPlate: function (t, e) {
        var a = this.briefData.gsjj[e][t],
          i = a.id,
          s = a.name,
          n = a.level,
          o = e;
        "plate" === o
          ? ((o = 200), r.StockBridge.report("hq.stock_detail.belong_plate"))
          : "concept" === o
          ? ((o = 201), r.StockBridge.report("hq.stock_detail.belong_concept"))
          : "area" === o &&
            ((o = 202), r.StockBridge.report("hq.stock_detail.belong_area")),
          1 == +n &&
            r.StockBridge.report(
              "hq.stock_detail.brief_primary_industry_click",
              { stockid: this.market_type + this.scode }
            ),
          "wzq" === r.StockBridge.ENV &&
            r.StockBridge.routeTo({
              path: "/plate/".concat(o, "/detail"),
              query: { plateId: "pt".concat(i), title: s },
            }),
          "mini" === r.StockBridge.ENV &&
            r.StockBridge.routeTo({
              path: "/detail/plate",
              query: { type: "p", plateId: i },
            }),
          "oem" === r.StockBridge.ENV &&
            r.StockBridge.routeTo({
              path: "/detail",
              query: { market: "p", scode: i },
            }),
          "mp" === r.StockBridge.ENV &&
            r.StockBridge.routeTo({
              url: "/pages/quote/quote_bk?market=p&scode=".concat(i),
            });
      },
      toggleStock: function () {
        this.folded
          ? r.StockBridge.report(
              "hq.stock_detail.brief_tab.click_concept_show_all"
            )
          : r.StockBridge.report(
              "hq.stock_detail.brief_tab.click_concept_collapse"
            ),
          (this.folded = !this.folded),
          (this.stockTips = this.folded ? "展开" : "收起");
      },
      toggleYear: function () {
        this.extra.zysr.years = !this.extra.zysr.years;
      },
      goIAsk: function () {
        "wzq" === r.StockBridge.ENV
          ? r.StockBridge.routeTo({
              path: "/iask/index?scode="
                .concat(this.scode, "&market=")
                .concat(this.market, "&sname=")
                .concat(this.stockName),
            })
          : r.StockBridge.openExtraWebview(
              "https://wzq.tenpay.com/mp/v2/index.html?#/iask/index?scode="
                .concat(this.scode, "&market=")
                .concat(this.market, "&sname=")
                .concat(this.stockName)
            ),
          r.StockBridge.report("STOCK_DETAIL.IASK");
      },
      handleClickExtraIcon: function (t) {
        this.showExtraBubble = t;
      },
      getPlateLevel: function (t) {
        switch (t) {
          case 1:
          case "1":
            return "申万一级";
          case 2:
          case "2":
            return "申万二级";
          default:
            return "";
        }
      },
      showTipRatio: function () {
        "mp" === r.StockBridge.ENV
          ? r.wx$1.showModal({
              title: "机构持股占比",
              content:
                "根据截止最新季度数据，统计公募基金（主动偏股型）、国家队、社保机构、养老金、保险资金、券商自营、QFII这七类机构持股数占流通股本的比例，来反映机构投资者对于个股的偏好情况。其中公募基金采用四个定期季报，其他六类机构采用个股的一季报、中报、三季报、年报中披露的股东数据",
              showCancel: !1,
              confirmText: "我知道了",
            })
          : this.$modal.alert({
              title: "机构持股占比",
              content:
                '<div class="st-modal-brief">\n                      <div class="content">根据截止最新季度数据，统计公募基金（主动偏股型）、国家队、社保机构、养老金、保险资金、券商自营、QFII这七类机构持股数占流通股本的比例，来反映机构投资者对于个股的偏好情况。其中公募基金采用四个定期季报，其他六类机构采用个股的一季报、中报、三季报、年报中披露的股东数据</div>\n                    </div>',
              confirmBtn: "我知道了",
            });
      },
      showTipName: function (t) {
        var e = {
          公募基金:
            "本模块的公募基金特指主动偏股型公募基金，即由基金经理主动管理、且大部分资金投资于股票的公募基金，主要包含公募基金中的普通股票型基金、偏股混合型基金、灵活配置型基金、平衡混合型基金这四种类型，并去除其中的被动指数类产品",
          国家队:
            "包括中央汇金、证金公司、证金资管计划、外管局旗下投资平台以及“国家队”基金（如有）五大主体",
          社保: "社保基金，含直接投资和委托投资",
          养老金: "基本养老保险基金",
          保险: "包括保险公司和保险产品的资金",
          保险资金: "包括保险公司和保险产品的资金",
          券商自营:
            "是证券公司使用自有资金或者合法筹集的资金以自己的名义买卖证券获取利润的证券业务",
          QFII: "境外机构投资者",
        };
        if ("mp" === r.StockBridge.ENV) {
          if (t.length > 0) {
            var a = "";
            a = ""
              .concat(a, "\r\n")
              .concat(t[0].desc, "\r\n")
              .concat(e[t[0].desc], "\r\n");
            for (var i = 1; i < t.length; i++)
              a = ""
                .concat(a, "\r\n")
                .concat(t[i].desc, "\r\n")
                .concat(e[t[i].desc], "\r\n");
            r.wx$1.showModal({
              title: "持股机构/增持比例",
              content: a,
              showCancel: !1,
              confirmText: "我知道了",
            });
          }
        } else if (((this.isOrganBriefShow = !0), t.length > 0)) {
          var s = "";
          s = ""
            .concat(
              s,
              '<div class="title1" style="font-size: 0.43rem;font-weight: 500;margin-top: 0.27rem;">'
            )
            .concat(
              t[0].desc,
              '</div>\n              <div class="content" style="margin-top: 0.21rem;font-size: 0.37rem;line-height: 0.56rem;">'
            )
            .concat(e[t[0].desc], "</div>");
          for (var n = 1; n < t.length; n++)
            s = ""
              .concat(
                s,
                '<div class="title" style="font-size: 0.43rem;font-weight: 500;margin-top: 0.52rem;">'
              )
              .concat(
                t[n].desc,
                '</div>\n              <div class="content" style="margin-top: 0.21rem;font-size: 0.37rem;line-height: 0.56rem;">'
              )
              .concat(e[t[n].desc], "</div>");
          this.organBriefText = "<div>".concat(s, "</div>");
        }
      },
      getOrganBrief: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var a,
              s,
              o,
              c = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (a = {
                          exchange: 12,
                          source: "wzq",
                          stock_code: this.market_type + this.scode,
                          t: new Date().getTime(),
                          time: new Date().getTime(),
                        }),
                        "mp" !== r.StockBridge.ENV &&
                          (function (t) {
                            var e = [];
                            for (var a in t)
                              a && e.push("".concat(a, "=").concat(t[a]));
                            e.push("key=".concat(i.dist.SIGN_KEY.wzq_analyse)),
                              (t.sign = r.md5Module(e.join("&")).toLowerCase());
                          })(a),
                        (s = ""),
                        Object.keys(a).forEach(function (t) {
                          s = "".concat(s).concat(t, "=").concat(a[t], "&");
                        }),
                        (t.next = 6),
                        n.getOrganData(this.hqBridge, s)
                      );
                    case 6:
                      (o = t.sent) &&
                        0 == +o.retcode &&
                        ((this.organData = o.holdings),
                        this.organData &&
                          this.organData.length > 0 &&
                          ((this.reportDate = this.organData[0].report_date),
                          (this.extra.jgcc.list =
                            this.organData[0].quarter_holdings),
                          (this.extra.jgcc.ratio =
                            this.organData[0].institution_holding_ratio),
                          this.$nextTick(function () {
                            (c.jgccChartData = c.organData[0].quarter_holdings),
                              (c.showJgcc = !0);
                          })));
                    case 8:
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
      changeReport: function (t) {
        if ((t = JSON.stringify(t))) {
          var e = t.slice(0, 4),
            r = t.slice(4, 6),
            a = "";
          return (
            "03" === r && (a = "一季报"),
            "06" === r && (a = "二季报"),
            "09" === r && (a = "三季报"),
            "12" === r && (a = "四季报"),
            "".concat(e, "年").concat(a)
          );
        }
      },
      toggleOrganYear: function () {
        this.extra.jgcc.years = !this.extra.jgcc.years;
      },
      processBriefData: function () {
        var t, e;
        (this.tabs.gsgk.show = this.briefData.zyzb || this.briefData.gsjj),
          (this.tabs.ssbk.show = this.briefData.gsjj),
          (this.tabs.jyfx.show =
            (this.briefData.zysr && this.briefData.zysr.length > 0) ||
            this.briefData.hytrend ||
            this.briefData.hydb),
          (this.tabs.gdgb.show = this.briefData.gdgb || this.briefData.ggjj),
          (this.tabs.gshg.show =
            (null == (t = this.briefData.huigou) ? void 0 : t.length) > 0),
          (this.tabs.fhps.show =
            (this.briefData.fhsp && this.briefData.fhsp.length > 0) ||
            (this.briefData.pxmzb && this.briefData.pxmzb.pxmzb)),
          (this.tabLastItemInd = this.findLastItemInd([
            this.tabs.gsgk.show,
            this.tabs.ssbk.show,
            this.tabs.jyfx.show,
            this.tabs.gdgb.show,
            this.tabs.fhps.show,
          ])),
          this.findDefaultTab([
            this.tabs.gsgk.show,
            this.tabs.ssbk.show,
            this.tabs.jyfx.show,
            this.tabs.gdgb.show,
            this.tabs.fhps.show,
          ]),
          (this.gsgkLastItemInd = this.findLastItemInd([
            this.briefData.zyzb,
            this.briefData.gsjj,
          ])),
          (this.jyfxLastItemInd = this.findLastItemInd([
            this.briefData.zysr && this.briefData.zysr.length > 0,
            this.briefData.hytrend,
            this.briefData.hydb,
          ])),
          (this.gdgbLastItemInd = this.findLastItemInd([
            this.briefData.gdgb,
            this.briefData.ggjj,
          ])),
          (this.fhpsLastItemInd = this.findLastItemInd([
            this.briefData.zysr && this.briefData.zysr.length > 0,
            this.briefData.pxmzb && this.briefData.pxmzb.pxmzb,
          ])),
          (this.zygcReportDate =
            (null == (e = this.briefData.zysr[0]) ? void 0 : e.date) || ""),
          this.wikiZygcHS &&
            "wzq" === r.StockBridge.ENV &&
            ((this.defaultTab = "jyfx"), (this.selectTab = "jyfx"));
      },
      findLastItemInd: function (t) {
        var e = -1;
        return (
          t.forEach(function (t, r) {
            t && (e = r);
          }),
          e
        );
      },
      findDefaultTab: function (t) {
        for (var e = 0; e < t.length; e++)
          if (t[e]) {
            (this.selectTab = this.tabList[e]),
              (this.defaultTab = this.tabList[e]);
            break;
          }
      },
      getTabOffsetTop: function () {
        (this.tabOffsetTop.gsgk = this.$refs.gsgk && this.$refs.gsgk.offsetTop),
          (this.tabOffsetTop.ssbk =
            this.$refs.ssbk && this.$refs.ssbk.offsetTop),
          (this.tabOffsetTop.jyfx =
            this.$refs.jyfx && this.$refs.jyfx.offsetTop),
          (this.tabOffsetTop.gdgb =
            this.$refs.gdgb && this.$refs.gdgb.offsetTop),
          (this.tabOffsetTop.gshg =
            this.$refs.gshg && this.$refs.gshg.offsetTop),
          (this.tabOffsetTop.fhps =
            this.$refs.fhps && this.$refs.fhps.offsetTop);
      },
      getTabOffsetTopMP: function () {
        var t = this;
        r.wx$1
          .createSelectorQuery()
          .in(this)
          .select("#gsgk")
          .boundingClientRect()
          .select("#ssbk")
          .boundingClientRect()
          .select("#jyfx")
          .boundingClientRect()
          .select("#gdgb")
          .boundingClientRect()
          .select("#gshg")
          .boundingClientRect()
          .select("#fhps")
          .boundingClientRect()
          .exec(function (e) {
            (t.tabOffsetTop.gsgk = e && e[0] && e[0].top + t.mpscrollTop),
              (t.tabOffsetTop.ssbk = e && e[1] && e[1].top + t.mpscrollTop),
              (t.tabOffsetTop.jyfx = e && e[2] && e[2].top + t.mpscrollTop),
              (t.tabOffsetTop.gdgb = e && e[3] && e[3].top + t.mpscrollTop),
              (t.tabOffsetTop.gshg = e && e[4] && e[4].top + t.mpscrollTop),
              (t.tabOffsetTop.fhps = e && e[5] && e[5].top + t.mpscrollTop);
          });
      },
      getScrollInfo: function () {
        return {
          scrollTop:
            document.documentElement.scrollTop || document.body.scrollTop,
          scrollHeight:
            document.documentElement.scrollHeight || document.body.scrollHeight,
          clientHeight:
            document.documentElement.clientHeight || document.body.clientHeight,
        };
      },
      gotoTab: function (t) {
        var e = this;
        this.setTabHighLight(t),
          this.clickTabHighLight(t),
          this.resetLabelPos(t),
          r.StockBridge.report(
            "hq.stock_detail.brief_".concat(t, "_tab_click")
          ),
          setTimeout(function () {
            e.clickTabFlag = !1;
          }, 200);
      },
      listenCardScroll: function () {
        var t;
        (t =
          "mp" !== r.StockBridge.ENV
            ? this.getScrollInfo()
            : { scrollTop: this.mpscrollTop }),
          this.clickTabFlag
            ? this.judgeCeiling(t)
            : ("mp" !== r.StockBridge.ENV && this.getTabOffsetTop(),
              this.judgeCeiling(t),
              this.scrollTabHighLight(t));
      },
      judgeCeiling: function (t) {
        var e = t.scrollTop;
        "mini" === r.StockBridge.ENV && (e += 56),
          this.ceilingPart.offsetTop <= e && this.ceilingPart.offsetTop > 0
            ? (this.ceiling = !0)
            : (this.ceiling = !1);
      },
      clickTabHighLight: function (t) {
        var e = this;
        if (
          ("mp" !== r.StockBridge.ENV && this.getTabOffsetTop(),
          (this.clickTabFlag = !0),
          this.tabOffsetTop[t])
        ) {
          var a = this.tabOffsetTop[t] - this.ceilingPart.clientHeight;
          "mini" === r.StockBridge.ENV
            ? window.scrollTo(0, a - 88)
            : "mp" === r.StockBridge.ENV
            ? (r.wx$1.pageScrollTo({ scrollTop: a - 110, duration: 0 }),
              setTimeout(function () {
                var t = { scrollTop: e.mpscrollTop };
                e.judgeCeiling(t);
              }, 200))
            : window.scrollTo(0, a);
        }
      },
      scrollTabHighLight: function (t) {
        if (0 !== t.scrollTop) {
          var e;
          for (var a in this.tabOffsetTop) {
            var i = this.tabOffsetTop[a] - this.ceilingPart.clientHeight;
            "mini" === r.StockBridge.ENV && (i -= 88),
              t.scrollTop >= i && i > 0 && (e = a);
          }
          e && (this.setTabHighLight(e), this.resetLabelPos(e));
        } else this.setTabHighLight(this.defaultTab);
      },
      setTabHighLight: function (t) {
        this.selectTab = t;
      },
      resetLabelPos: function (t) {
        if ("mp" !== r.StockBridge.ENV && this.$refs.ceilingPart)
          if (this.defaultTab === t) this.$refs.ceilingPart.scrollLeft = 0;
          else if (this.tabList[this.tabLastItemInd] === t) {
            var e = this.$refs.ceilingPart.scrollWidth - screen.width;
            this.$refs.ceilingPart.scrollLeft = e;
          }
      },
      handleLockSwiper: function () {
        this.hqBridge.busEmit("lockSwiper", !0);
      },
      handleUnlockSwiper: function () {
        this.hqBridge.busEmit("lockSwiper", !1);
      },
      handleWikiData: function (t) {
        this.isWiki = (null == t ? void 0 : t.title) || !1;
      },
    },
  };
Array ||
  (
    r.resolveComponent("st-modal") +
    r.resolveComponent("mp-tabs") +
    r.resolveComponent("Wiki") +
    r.resolveComponent("BubbleTip") +
    r.resolveComponent("BriefPlate") +
    r.resolveComponent("f2") +
    r.resolveComponent("NoData") +
    r.resolveComponent("StockFund") +
    r.resolveComponent("Gshg")
  )();
var h = r._export_sfc(c, [
  [
    "render",
    function (t, e, a, i, s, n) {
      return r.e(
        { a: s.isOrganBriefShow },
        s.isOrganBriefShow
          ? {
              b: s.organBriefText,
              c: r.o(function (t) {
                return (s.isOrganBriefShow = !1);
              }, 1851),
              d: r.p({
                visible: s.isOrganBriefShow,
                "confirm-btn": "我知道了",
              }),
            }
          : {},
        { e: n.isMp && (s.briefData.gsjj || s.loading) },
        n.isMp && (s.briefData.gsjj || s.loading)
          ? {
              f: r.o(n.gotoTab, 1852),
              g: r.p({ tabs: s.tabs, "select-tab": s.selectTab }),
            }
          : {},
        { h: (s.briefData.gsjj || s.loading) && !n.isMp },
        (!s.briefData.gsjj && !s.loading) || n.isMp
          ? {}
          : {
              i: r.f(s.tabs, function (t, e, a) {
                return {
                  a: r.t(t.name),
                  b: t.show,
                  c: s.selectTab === e ? 1 : "",
                  d: e,
                  e: r.o(
                    function (t) {
                      return n.gotoTab(e);
                    },
                    1853,
                    e
                  ),
                };
              }),
              j: r.n(s.ceiling ? (n.isMp ? "" : "ceiling") : ""),
            },
        { k: (s.briefData.gsjj || s.loading) && !n.isMp },
        (!s.briefData.gsjj && !s.loading) || n.isMp
          ? {}
          : {
              l: r.f(s.tabs, function (t, e, a) {
                return {
                  a: r.t(t.name),
                  b: t.show,
                  c: s.selectTab === e ? 1 : "",
                  d: e,
                  e: r.o(
                    function (t) {
                      return n.gotoTab(e);
                    },
                    1854,
                    e
                  ),
                };
              }),
              m: s.ceiling ? "" : 1,
            },
        { n: s.briefData.gsjj },
        s.briefData.gsjj
          ? r.e(
              { o: s.extra.zysr.years },
              s.extra.zysr.years
                ? {
                    p: r.o(function () {
                      return n.toggleYear && n.toggleYear.apply(n, arguments);
                    }, 1855),
                  }
                : {},
              { q: s.extra.jgcc.years },
              s.extra.jgcc.years
                ? {
                    r: r.o(function () {
                      return (
                        n.toggleOrganYear &&
                        n.toggleOrganYear.apply(n, arguments)
                      );
                    }, 1856),
                  }
                : {},
              { s: s.tabs.gsgk.show },
              s.tabs.gsgk.show
                ? r.e(
                    { t: s.briefData.zyzb },
                    s.briefData.zyzb
                      ? {
                          v: r.o(function (t) {
                            return n.showTeachTips("一、公司概况", "profile");
                          }, 1857),
                          w: r.t(s.briefData.zyzb.date),
                          x: r.f(s.blockItem.overview, function (t, e, a) {
                            return r.e(
                              { a: r.t(e), b: "syl" === t[0] },
                              (t[0], {}),
                              s.briefData.zyzb.detail
                                ? {
                                    c: r.t(
                                      s.briefData.zyzb.detail[t[0]] ||
                                        s.briefData.zyzb.detail[t[1]]
                                    ),
                                  }
                                : {},
                              { d: r.n(n.pLayoutShow[e]), e: e }
                            );
                          }),
                          y: s.briefData.zyzb.detail,
                          z: 0 !== s.gsgkLastItemInd ? 1 : "",
                        }
                      : {},
                    { A: s.briefData.gsjj },
                    s.briefData.gsjj
                      ? r.e({ B: s.isWiki }, (s.isWiki, {}), {
                          C: r.o(function (t) {
                            return s.isWiki && n.goPage("gsjj");
                          }, 1858),
                          D: r.sr("wiki", "d7384544-2"),
                          E: r.o(n.handleWikiData, 1859),
                          F: r.p({ wikiInfo: n.wikiInfo, skin: a.skin }),
                          G: r.f(s.blockItem.gsjj, function (t, e, i) {
                            return r.e(
                              {
                                a:
                                  s.briefData.gsjj[t] &&
                                  s.briefData.gsjj[t].length > 0,
                              },
                              s.briefData.gsjj[t] &&
                                s.briefData.gsjj[t].length > 0
                                ? r.e(
                                    {
                                      b: r.t(e),
                                      c: r.t(s.briefData.gsjj[t]),
                                      d:
                                        !n.isMp &&
                                        "公司名称" === e &&
                                        a.extraInfo &&
                                        ("G1" === a.extraInfo.GrowLayer ||
                                          "G" === a.extraInfo.GrowLayer),
                                    },
                                    n.isMp ||
                                      "公司名称" !== e ||
                                      !a.extraInfo ||
                                      ("G1" !== a.extraInfo.GrowLayer &&
                                        "G" !== a.extraInfo.GrowLayer)
                                      ? {}
                                      : {
                                          e:
                                            a.extraInfo &&
                                            "G1" === a.extraInfo.GrowLayer
                                              ? "https://st.gtimg.com/design/3df7da7a21795ba7e6827cf07a21b89f.png"
                                              : "https://st.gtimg.com/design/8d8e288b542c670b4d37bf93e5e8ddf5.png",
                                          f: r.o(
                                            function (t) {
                                              return n.handleClickExtraIcon(!0);
                                            },
                                            1860,
                                            e
                                          ),
                                          g: r.t(
                                            a.extraInfo &&
                                              "G1" === a.extraInfo.GrowLayer
                                              ? "存量科创成长层股票"
                                              : "新注册科创成长层股票"
                                          ),
                                          h: r.o(
                                            function (t) {
                                              return n.handleClickExtraIcon(!1);
                                            },
                                            1861,
                                            e
                                          ),
                                          i: "d7384544-3-" + i,
                                          j: r.p({
                                            autoClose: !1,
                                            arrowPosition: "bottom-right",
                                            isShow: s.showExtraBubble,
                                          }),
                                        }
                                  )
                                : {},
                              {
                                k:
                                  "plate" !== t &&
                                  "concept" !== t &&
                                  "area" !== t,
                                l: e,
                              }
                            );
                          }),
                        })
                      : {},
                    { H: 0 !== s.tabLastItemInd ? 1 : "" }
                  )
                : {},
              { I: s.tabs.ssbk.show },
              s.tabs.ssbk.show
                ? r.e(
                    { J: s.briefData.gsjj },
                    s.briefData.gsjj
                      ? {
                          K: r.sr("briefplate", "d7384544-4"),
                          L: r.p({
                            fromPage: "brief",
                            symbol: s.market_type + a.scode,
                            isTrading: a.isTrading,
                            skin: a.skin,
                          }),
                        }
                      : {},
                    { M: 1 !== s.tabLastItemInd ? 1 : "" }
                  )
                : {},
              { N: s.tabs.jyfx.show },
              s.tabs.jyfx.show
                ? r.e(
                    { O: s.briefData.zysr && s.briefData.zysr.length > 0 },
                    s.briefData.zysr && s.briefData.zysr.length > 0
                      ? r.e(
                          {
                            P: r.o(function (t) {
                              return n.showTeachTips(
                                "三、经营分析",
                                "analysis"
                              );
                            }, 1862),
                            Q: r.t(s.zygcReportDate),
                            R: r.o(function () {
                              return (
                                n.toggleYear && n.toggleYear.apply(n, arguments)
                              );
                            }, 1863),
                            S: s.briefData.zysr.length > 0,
                          },
                          (s.briefData.zysr.length, {}),
                          {
                            T: r.f(s.briefData.zysr, function (t, e, a) {
                              return {
                                a: r.t(t.date),
                                b: e,
                                c: r.n(
                                  s.zygcReportDate === t.date
                                    ? "active-year"
                                    : ""
                                ),
                                d: r.o(
                                  function (t) {
                                    return n.changeZysrChart(
                                      s.extra.zysr.subed,
                                      e
                                    );
                                  },
                                  1864,
                                  e
                                ),
                              };
                            }),
                            U: s.extra.zysr.years,
                            V: r.f(s.extra.zysr.sub, function (t, e, a) {
                              return {
                                a: r.t(t),
                                b: s.extra.zysr.subed === e ? 1 : "",
                                c: e,
                                d: r.o(
                                  function (t) {
                                    return n.changeZysrChart(
                                      e,
                                      s.extra.zysr.order
                                    );
                                  },
                                  1865,
                                  e
                                ),
                              };
                            }),
                            W: s.showZysr && !s.extra.zysr.err,
                          },
                          s.showZysr && !s.extra.zysr.err
                            ? {
                                X: r.sr("zysrChart", "d7384544-5"),
                                Y: r.o(n.drawZysrChart, 1866),
                                Z: r.p({
                                  chartId: "zysrChart",
                                  cClass: "zysrChartClass",
                                  cStyle: "width: 100%; height: 420rpx",
                                  config: s.zysrConfig,
                                  refreshHash: s.zysrHash,
                                }),
                              }
                            : {},
                          {
                            aa: s.extra.zysr.err,
                            ab: r.t(s.extra.zysr.sub[s.extra.zysr.subed]),
                            ac: r.f(s.extra.zysr.list, function (t, e, a) {
                              return r.e(
                                {
                                  a: s.extra.zysr.labelColor[e],
                                  b: r.t(t.name),
                                  c: s.extra.zysr.list2 && 3 === e,
                                },
                                s.extra.zysr.list2 && 3 === e
                                  ? {
                                      d: r.n(
                                        s.extra.zysr.fold ? "bottom" : "top"
                                      ),
                                    }
                                  : {},
                                {
                                  e: r.o(
                                    function (t) {
                                      return s.extra.zysr.list2 && 3 === e
                                        ? n.toggleMore()
                                        : null;
                                    },
                                    1867,
                                    e
                                  ),
                                  f: r.t(t.income),
                                  g: r.t(t.zb),
                                  h: e,
                                }
                              );
                            }),
                            ad: s.extra.zysr.list2,
                          },
                          s.extra.zysr.list2
                            ? {
                                ae: r.f(s.extra.zysr.list2, function (t, e, a) {
                                  return {
                                    a: r.t(t.name),
                                    b: r.t(t.income),
                                    c: r.t(t.zb),
                                    d: e,
                                  };
                                }),
                                af: !s.extra.zysr.fold,
                              }
                            : {},
                          {
                            ag: !s.extra.zysr.err,
                            ah: 0 !== s.jyfxLastItemInd ? 1 : "",
                          }
                        )
                      : {},
                    { ai: s.briefData.hytrend },
                    s.briefData.hytrend
                      ? r.e(
                          {
                            aj: r.f(s.extra.hytrend.sub, function (t, e, a) {
                              return {
                                a: r.t(t),
                                b:
                                  s.extra.hytrend.subed === e ||
                                  ("yyzsr" === e &&
                                    "yysr" === s.extra.hytrend.subed)
                                    ? 1
                                    : "",
                                c: e,
                                d: r.o(
                                  function (t) {
                                    return n.changeHytrendChart(e);
                                  },
                                  1868,
                                  e
                                ),
                              };
                            }),
                            ak: r.t(s.extra.hytrend.date),
                            al: r.t(s.extra.hytrend.curr),
                            am: r.t(n.rateFilter(s.extra.hytrend.rise)),
                            an: r.n(
                              /^-/.test(s.extra.hytrend.rise) ? "green" : "red"
                            ),
                            ao: s.showHytrend,
                          },
                          s.showHytrend
                            ? {
                                ap: r.sr("hytrendChart", "d7384544-6"),
                                aq: r.o(n.drawHytrendChart, 1869),
                                ar: r.o(n.touchstart, 1870),
                                as: r.p({
                                  chartId: "hytrendChart",
                                  cClass: "hytrendChartClass",
                                  cStyle: "width: 100%; height: 420rpx",
                                  config: s.hytrendConfig,
                                  refreshHash: s.hytrendHash,
                                }),
                              }
                            : {},
                          { at: 1 !== s.jyfxLastItemInd ? 1 : "" }
                        )
                      : {},
                    { av: s.briefData.hydb },
                    s.briefData.hydb
                      ? r.e(
                          {
                            aw: r.t(s.briefData.hydb.hyname),
                            ax: r.t(s.briefData.hydb.date),
                            ay: r.o(function (t) {
                              return n.goPage("hydb?type=mgsy");
                            }, 1871),
                            az: r.f(s.extra.hydb.tabs, function (t, e, a) {
                              return {
                                a: r.t(t.name),
                                b: t.type,
                                c: t.type === s.extra.hydb.selected ? 1 : "",
                                d: r.o(
                                  function (e) {
                                    return n.changeHydbChart(t.type);
                                  },
                                  1872,
                                  t.type
                                ),
                              };
                            }),
                            aA: s.showHydb,
                          },
                          s.showHydb
                            ? {
                                aB: r.sr("hydbChart", "d7384544-7"),
                                aC: r.o(n.drawHydbChart, 1873),
                                aD: r.p({
                                  chartId: "hydbChart",
                                  cClass: "hydbChartClass",
                                  cStyle: "width: 100%; height: 345rpx",
                                  config: s.hydbConfig,
                                  refreshHash: s.hydhHash,
                                }),
                              }
                            : {},
                          { aE: r.t(s.extra.hydb.count) }
                        )
                      : {},
                    { aF: 2 !== s.tabLastItemInd ? 1 : "" }
                  )
                : {},
              { aG: s.tabs.gdgb.show },
              s.tabs.gdgb.show
                ? r.e(
                    { aH: s.briefData.gdgb },
                    s.briefData.gdgb
                      ? r.e(
                          {
                            aI: r.o(function (t) {
                              return n.showTeachTips(
                                "四、股东股本",
                                "shareholder"
                              );
                            }, 1874),
                            aJ: r.o(function (t) {
                              return n.goPage("gudong");
                            }, 1875),
                            aK: r.f(s.blockItem.gdgb, function (t, e, a) {
                              return r.e(
                                { a: r.t(e), b: s.briefData.gdgb[t] },
                                s.briefData.gdgb[t]
                                  ? {
                                      c: r.t(s.briefData.gdgb[t]),
                                      d: r.t(
                                        "gdzb" === t || "ltgdzb" === t
                                          ? "%"
                                          : ""
                                      ),
                                    }
                                  : {},
                                { e: "gdrs" === t },
                                "gdrs" === t
                                  ? {
                                      f: r.t(
                                        n.rateFilter(s.briefData.gdgb.gdrshb)
                                      ),
                                      g: r.n(
                                        /^-/.test(s.briefData.gdgb.gdrshb)
                                          ? "green"
                                          : "red"
                                      ),
                                    }
                                  : {},
                                { h: e }
                              );
                            }),
                            aL: s.organData && s.organData.length > 0,
                          },
                          s.organData && s.organData.length > 0
                            ? r.e(
                                {
                                  aM: r.t(n.changeReport(s.reportDate)),
                                  aN: r.o(function () {
                                    return (
                                      n.toggleOrganYear &&
                                      n.toggleOrganYear.apply(n, arguments)
                                    );
                                  }, 1876),
                                  aO: s.organData.length > 0,
                                },
                                (s.organData.length, {}),
                                {
                                  aP: r.f(s.organData, function (t, e, a) {
                                    return {
                                      a: r.t(n.changeReport(t.report_date)),
                                      b: e,
                                      c: r.n(
                                        s.reportDate === t.report_date
                                          ? "active-year"
                                          : ""
                                      ),
                                      d: r.o(
                                        function (t) {
                                          return n.changeJgccChart(e);
                                        },
                                        1877,
                                        e
                                      ),
                                    };
                                  }),
                                  aQ: s.extra.jgcc.years,
                                  aR: !s.extra.jgcc.err,
                                },
                                s.extra.jgcc.err
                                  ? {}
                                  : r.e(
                                      { aS: n.organRatio > 0 },
                                      n.organRatio > 0
                                        ? { aT: n.organRatio + "%" }
                                        : {},
                                      { aU: n.circulGuben > 0 },
                                      n.circulGuben > 0
                                        ? { aV: n.circulGuben + "%" }
                                        : {}
                                    ),
                                { aW: !s.extra.jgcc.err },
                                s.extra.jgcc.err
                                  ? {}
                                  : {
                                      aX: r.t(
                                        n.changeRatio(s.extra.jgcc.ratio)
                                      ),
                                      aY: r.o(function (t) {
                                        return n.showTipRatio();
                                      }, 1878),
                                    },
                                { aZ: s.extra.jgcc.err },
                                (s.extra.jgcc.err, {}),
                                {
                                  ba:
                                    !s.extra.jgcc.err &&
                                    s.extra.jgcc.list &&
                                    s.extra.jgcc.list.length > 0,
                                },
                                !s.extra.jgcc.err &&
                                  s.extra.jgcc.list &&
                                  s.extra.jgcc.list.length > 0
                                  ? {
                                      bb: r.o(function (t) {
                                        return n.showTipName(s.extra.jgcc.list);
                                      }, 1879),
                                      bc: r.f(
                                        s.extra.jgcc.list,
                                        function (t, e, a) {
                                          return {
                                            a: s.extra.jgcc.labelColor[e],
                                            b: r.t(t.desc),
                                            c: r.t(
                                              n.showRatioChg(
                                                t.holding_ratio_chg
                                              )
                                            ),
                                            d: r.n(
                                              Math.abs(t.holding_ratio_chg) <
                                                1e-5
                                                ? "grey"
                                                : t.holding_ratio_chg > 0
                                                ? "red"
                                                : "green"
                                            ),
                                            e: r.t(n.showHolding(t.holding)),
                                            f: r.t(t.holding_ratio.toFixed(2)),
                                            g: e,
                                          };
                                        }
                                      ),
                                    }
                                  : {}
                              )
                            : {},
                          { bd: 0 !== s.gdgbLastItemInd ? 1 : "" }
                        )
                      : {},
                    { be: s.showFund },
                    s.showFund
                      ? {
                          bf: r.o(function (t) {
                            return n.goPage("gudong", !0);
                          }, 1880),
                          bg: r.sr("stockfund", "d7384544-9"),
                          bh: r.o(n.showStockFund, 1881),
                          bi: r.o(n.hideStockFund, 1882),
                          bj: r.p({
                            scode: a.scode,
                            market: a.market,
                            isTrading: a.isTrading,
                            skin: a.skin,
                          }),
                        }
                      : {},
                    { bk: s.briefData.ggjj },
                    s.briefData.ggjj
                      ? r.e(
                          {
                            bl: r.o(function (t) {
                              return n.goPage("gaoguan");
                            }, 1883),
                            bm: r.f(s.briefData.ggjj, function (t, e, a) {
                              return {
                                a: r.t(t.gg),
                                b: r.t(t.zw),
                                c: r.t(t.cgs),
                                d: r.t(t.xc),
                                e: e,
                              };
                            }),
                            bn: s.briefData.ggzjc.length > 0,
                          },
                          s.briefData.ggzjc.length > 0
                            ? {
                                bo: r.f(s.briefData.ggzjc, function (t, e, a) {
                                  return {
                                    a: r.t(t.gg),
                                    b: r.t(t.date),
                                    c: r.t(n.textFilter(t.bdl)),
                                    d: r.n(/^-/.test(t.bdl) ? "green" : "red"),
                                    e: r.t(t.jj),
                                    f: e,
                                  };
                                }),
                              }
                            : {}
                        )
                      : {},
                    { bp: 3 !== s.tabLastItemInd ? 1 : "" }
                  )
                : {},
              { bq: s.briefData.huigou && s.briefData.huigou.length > 0 },
              s.briefData.huigou && s.briefData.huigou.length > 0
                ? {
                    br: r.o(function (t) {
                      return n.showTeachTips("五、公司回购", "huigou");
                    }, 1884),
                    bs: r.o(function (t) {
                      return n.goPage("gshuigou");
                    }, 1885),
                    bt: r.p({ "hg-data": s.briefData.huigou, "show-tip": !0 }),
                  }
                : {},
              { bv: s.tabs.fhps.show },
              s.tabs.fhps.show
                ? r.e(
                    { bw: s.briefData.fhsp && s.briefData.fhsp.length > 0 },
                    s.briefData.fhsp && s.briefData.fhsp.length > 0
                      ? r.e(
                          {
                            bx: r.o(function (t) {
                              return n.showTeachTips(
                                "六、分红送配",
                                "dividend"
                              );
                            }, 1886),
                            by: r.f(s.briefData.fhsp, function (t, e, a) {
                              return r.e(
                                { a: e < 3 || s.listOverShow },
                                e < 3 || s.listOverShow
                                  ? {
                                      b: r.t(t.date),
                                      c: r.t(t.content),
                                      d: r.t(t.cqr),
                                    }
                                  : {},
                                { e: e }
                              );
                            }),
                            bz: s.briefData.fhsp.length > 3,
                          },
                          s.briefData.fhsp.length > 3
                            ? {
                                bA: r.t(s.listTips),
                                bB: r.o(function () {
                                  return (
                                    n.showList && n.showList.apply(n, arguments)
                                  );
                                }, 1887),
                              }
                            : {},
                          { bC: 0 !== s.fhpsLastItemInd ? 1 : "" }
                        )
                      : {},
                    { bD: s.briefData.pxmzb && s.briefData.pxmzb.pxmzb },
                    s.briefData.pxmzb && s.briefData.pxmzb.pxmzb
                      ? {
                          bE: r.t(s.briefData.pxmzb.pxmzb),
                          bF: r.t(s.briefData.pxmzb.no[0]),
                          bG: r.t(s.briefData.pxmzb.no[1]),
                          bH: r.o(function (t) {
                            return n.goPage("hydb?type=pxmzb");
                          }, 1888),
                          bI: (s.px.pxp < 1 ? 1 : s.px.pxp) + "px",
                          bJ: s.blockItem.px.px[1],
                          bK: r.t(s.px.pxe),
                          bL:
                            (0 == s.px.fxp ? 0 : s.px.fxp < 1 ? 1 : s.px.fxp) +
                            "px",
                          bM: s.blockItem.px.fx[1],
                          bN:
                            (0 == s.px.zfp ? 0 : s.px.zfp < 1 ? 1 : s.px.zfp) +
                            "px",
                          bO: s.blockItem.px.zf[1],
                          bP:
                            (0 == s.px.pgp ? 0 : s.px.pgp < 1 ? 1 : s.px.pgp) +
                            "px",
                          bQ: s.blockItem.px.pg[1],
                          bR: r.t(s.px.mze),
                          bS: r.f(s.px.info, function (t, e, a) {
                            return {
                              a: s.blockItem.px[e][1],
                              b: r.t(s.blockItem.px[e][0]),
                              c: r.t(t),
                              d: a % 2 == 0 ? "56%" : "44%",
                              e: e,
                            };
                          }),
                        }
                      : {}
                  )
                : {},
              {
                bT: r.o(function (t) {
                  return n.showTeachTips("", "teaching");
                }, 1889),
              }
            )
          : (s.firstLoaded, {}),
        { bU: s.firstLoaded, bV: "black" === a.skin ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-d7384544"],
]);
wx.createComponent(h);
