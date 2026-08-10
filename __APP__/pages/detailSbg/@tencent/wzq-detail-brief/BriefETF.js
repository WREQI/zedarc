var t = require("../../../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var a = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  n = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  c = function (t, e, a) {
    return e in t
      ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[e] = a);
  },
  d = function (t, e) {
    for (var i in e || (e = {})) s.call(e, i) && c(t, i, e[i]);
    if (o) {
      var n,
        r = a(o(e));
      try {
        for (r.s(); !(n = r.n()).done; ) {
          i = n.value;
          l.call(e, i) && c(t, i, e[i]);
        }
      } catch (t) {
        r.e(t);
      } finally {
        r.f();
      }
    }
    return t;
  },
  h = function (t, e) {
    return n(t, r(e));
  },
  u = function (t, e, a) {
    return new Promise(function (i, n) {
      var r = function (t) {
          try {
            s(a.next(t));
          } catch (t) {
            n(t);
          }
        },
        o = function (t) {
          try {
            s(a.throw(t));
          } catch (t) {
            n(t);
          }
        },
        s = function (t) {
          return t.done ? i(t.value) : Promise.resolve(t.value).then(r, o);
        };
      s((a = a.apply(t, e)).next());
    });
  },
  p = require("../../../../common/vendor.js"),
  f = require("../stock-markets-base/utils/market.js"),
  y = require("api/index.js"),
  m = function (t, e) {
    var a =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : function () {},
      i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
      n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    try {
      e
        ? (t.intersectionObserver && t.intersectionObserver.disconnect(),
          (t.intersectionObserver = p.index.createIntersectionObserver(t, {
            observeAll: n,
          })),
          t.intersectionObserver
            .relativeToViewport({ bottom: -80 })
            .observe(e, function (e) {
              e.intersectionRatio < i ||
                0 === e.intersectionRatio ||
                (t.isHasObserved && !n) ||
                ((t.isHasObserved = !0), a && a(e));
            }))
        : t.intersectionObserver &&
          ((t.isHasObserved = !1), t.intersectionObserver.disconnect());
    } catch (t) {
      a && a(0);
    }
  },
  b = {
    light: {
      "--fill-content-layer": "#fff",
      "--color-heavygray": "#262e40",
      "--border-light-divider": "#e9ebf0",
      "--border-heavy-divider2": "#c9d0dc",
      "--color-midgray": "#475166",
      "--color-lightgray": "#7a8499",
      "--color-red": "#e63535",
      "--color-green": "#1caa3c",
      "--color-lightgray-2": "#98a0b3",
    },
    dark: {
      "--color-heavygray": "#f0f1f5",
      "--fill-content-layer": "#12161f",
      "--border-light-divider": "#191e27",
      "--border-heavy-divider2": "#69738c",
      "--color-midgray": "#a7b0c4",
      "--color-lightgray": "#a7b0c4",
      "--color-red": "#ff6b6b",
      "--color-green": "#41c96f",
      "--color-lightgray-2": "#69738c",
    },
  },
  g = {
    dark: "dark",
    black: "dark",
    panda: "dark",
    white: "light",
    blue: "light",
    light: "light",
  };
function x(t, e) {
  if ("web" == ("undefined" != typeof document ? "web" : "mp"))
    return getComputedStyle(document.body).getPropertyValue(t);
  var a = p.wx$1.getStorageSync("user/skin") || "light";
  return b[g[a] || "light"][t] || "#262e40";
}
var v = {
    baseInfo: {
      title: "基本信息",
      content: [
        { type: "title", text: "T+0" },
        {
          type: "text",
          text: "当天买入后允许当天卖出，没有次数限制。部分ETF（如跨境ETF）支持T+0交易，对比 A 股 T+1 交易制度：当天买入后次日才能卖出，交易更自由。",
        },
        { type: "title", text: "运作费率" },
        {
          type: "text",
          text: "运作费用包括基金管理费、托管费、销售服务费，从基金资产中每日计提，每个工作日公告的基金净值已扣除相应费用，无需投资者在每笔交易中另行支付。运作费用详情信息请参考基金招募说明书。",
        },
      ],
      cancelBtn: "我知道了",
    },
    yjbx: {
      title: "业绩表现",
      content: [
        { type: "title", text: "收益率" },
        {
          type: "text",
          text: "基金收益率是反映投资者在该基金上的投资回报，通过该基金收益率和沪深300进行对比，可以了解该基金的收益表现。",
        },
        { type: "title", text: "最大回撤率" },
        {
          type: "text",
          text: "最大回撤率是用来衡量基金风险的指标，帮助我们了解可能面临的最大亏损。最大回撤率越小，表明基金的风险控制能力越强，投资者可能遭受的损失也越小。",
        },
        {
          type: "subText",
          text: "举个例子：近一年 ，基金A涨幅为+25%，沪深300涨幅为-12%，该基金业绩表现比沪深300有超额收益37%。该基金同期最大回撤为13%，投资者需要能够承受最大亏损预期为13%。",
        },
      ],
      cancelBtn: "我知道了",
    },
    cyr: {
      title: "持有人结构",
      content: [
        { type: "title", text: "机构投资者" },
        {
          type: "text",
          text: "更倾向于配置宽基ETF，因为它们符合机构投资者对流动性和规模的要求。",
        },
        { type: "title", text: "个人投资者" },
        {
          type: "text",
          text: "更偏好行业主题ETF，因为它们弹性更大。个人投资者的增加有助于提升ETF的流动性，可以增加交易活跃度，从而可能对股价产生正面影响。",
        },
        {
          type: "subText",
          text: "ETF持有人结构的变化通过影响市场流动性和投资者行为，间接对股价产生影响。",
        },
      ],
      cancelBtn: "我知道了",
    },
    deal: {
      title: "交易信息",
      content: [
        { type: "title", text: "1. ETF的申购赎回机制" },
        {
          type: "text",
          text: "当ETF的市场价高于其净值时，套利者可申购ETF在场内卖出获利。相反，当ETF的市场价低于其净值时，套利者可场内购买ETF并赎回，在场内卖出获利。",
        },
        {
          type: "subText",
          text: "一般情况下，跨境ETF因基金公司外汇额度限制而限购，限购期往往会有较大的溢折率产生。我们可以通过查看ETF申购、赎回状态、限购金额来综合分析。",
        },
        { type: "title", text: "2. ETF费用问题" },
        {
          type: "text",
          text: "新发认购费：仅在ETF新发上市有认购时收取，上市后的交易过程不收取该费用。",
        },
        {
          type: "text",
          text: "管理费：用于基金管理人管理和运营，一般为0.5%左右，对比场外基金约便宜一半。",
        },
        { type: "text", text: "托管费：ETF获得托管机构提供服务支付的费用。" },
        {
          type: "text",
          text: "销售服务费：基金公司获得销售机构服务支持的费用。",
        },
        {
          type: "subText",
          text: "以上费用直接从基金资产中扣除，无需在交易中支付。ETF交易的佣金和股票交易一致，对比股票ETF免印花税 (万分之5)，可节约交易成本。",
        },
      ],
      cancelBtn: "我知道了",
    },
    realtime: {
      title: "持仓占比",
      content: [
        { type: "title", text: "实时持仓" },
        {
          type: "text",
          text: "根据交易所每日公布的申赎清单估算，结合ETF成分股和对应股票价格，推算出最新的ETF成分股市值占比数据(外币计价股票需要进行汇率转换)。申赎清单的数据不代表ETF真实持仓情况，仅供参考。",
        },
        {
          type: "text",
          text: "部分跨境ETF因为无海外市场的股票行情数据，实时持仓股票不展示海外成分股，重仓持股占比数据实时持仓会低于季度持仓。",
        },
        {
          type: "text",
          text: "实时持仓的重仓持股占比总计是指前二十大重仓股的净值占比求和。",
        },
        { type: "title", text: "季度持仓" },
        {
          type: "text",
          text: "ETF定期报告披露，显示股票公允价值占基金净值比例，一般为季度更新。",
        },
        {
          type: "text",
          text: "季度持仓的重仓持股占比总计是指前十大重仓股的净值占比求和。",
        },
      ],
      cancelBtn: "我知道了",
    },
  },
  T = {
    inject: ["hqBridge"],
    props: ["symbol", "skin", "emptyText"],
    components: {
      NoData: function () {
        return "./components/NoData.js";
      },
      f2: function () {
        return "./components/f2-fit/f2.js";
      },
      SelectPlate: function () {
        return "../wzq-detail-finance/components/SelectPlate.js";
      },
      NewSelectPlate: function () {
        return "../stock-markets-base/components/SelectPlate.js";
      },
      RangeSlider: function () {
        return "../stock-markets-base/components/RangeSlider.js";
      },
      WzqInfoModal: function () {
        return "./node-modules/@tencent/st-wzqinfo-modal/src/WzqInfoModal.js";
      },
      EtfTipModal: function () {
        return "./etf/TipsInfo.js";
      },
      Gzfx: function () {
        return "./components/Gzfx.js";
      },
      Yzlfx: function () {
        return "./components/Yzlfx.js";
      },
    },
    data: function () {
      return {
        data: null,
        firstLoaded: !1,
        infoMap: {
          type: "基金类型",
          establishment: "成立日期",
          dimensions: "最新规模",
          administrator: "管理人",
          index: "跟踪指数估值",
        },
        curYjbxTabName: "近1年",
        showTabPlate: !1,
        curYjbxTabIndex: 5,
        yjbxTabList: [
          { id: 1, type: "lastYear", name: "今年以来" },
          { id: 2, type: "oneMonth", name: "近1月" },
          { id: 3, type: "threeMonth", name: "近3月" },
          { id: 4, type: "halfYear", name: "近6月" },
          { id: 5, type: "oneYear", name: "近1年" },
          { id: 6, type: "all", name: "近3年" },
        ],
        activeSelectType: "yjbx",
        selectPlateData: [],
        selectPlateCurIndex: 0,
        selectPlateTargetRef: "hydbSelectbtn",
        legends: [
          { color: "", title: "收益率" },
          { color: "", title: "沪深300" },
        ],
        cyrHash: "",
        yjbxHash: "",
        yjbxData: {},
        chartDesc: "",
        cyrDateList: [],
        yjbxDateList: [],
        showEtfTipModal: !1,
        etfTipMode: "",
        yjbxTipsData: null,
        cyrTipsData: null,
        isShowYjbxBlock: !1,
        isShowYzlfxBlock: !1,
        hasBrow: {},
        etfTipModalConfig: {},
        jumpCode: "",
        gzfxShow: !1,
      };
    },
    computed: {
      isWeapp: function () {
        return ["mpweapp"].includes("mpweapp");
      },
      isMini: function () {
        return p.StockBridge.ENV === p.EnvTypeEnum.MP;
      },
      isWzq: function () {
        return !1;
      },
      isApp: function () {
        return "app" === this.hqBridge.ENV;
      },
      isSpecialPlatform: function () {
        return this.isClassic || this.isApp;
      },
      isClassic: function () {
        return ["mpweapp", "stock"].includes("mpweapp");
      },
      isShow: function () {
        return ["wzq", "oem", "mp", "wzq_light"].includes(this.hqBridge.ENV);
      },
      dateFilter: function () {
        return function (t) {
          return ""
            .concat(t.slice(0, 4), "-")
            .concat(t.slice(4, 6), "-")
            .concat(t.slice(6));
        };
      },
      rateFilter: function () {
        return function (t) {
          if (t) {
            var e = (Math.round(100 * t) / 100).toFixed(2);
            return "".concat(t > 0 ? "+".concat(e) : e, "%");
          }
          return "--";
        };
      },
      themeColor: function () {
        var t = {};
        return {
          borderLight: t.borderLight || "#e9ebf0",
          orange: t.orange || "#FF891E",
          red: t.bigBlue || "#E63535",
          lightRed: "#ef8080",
          lightGray1: t.lightGray1 || "#C9D0DC",
          lightGray2: t.lightGray2 || "#98a0b3",
        };
      },
    },
    watch: {
      data: function (t) {
        var e = this;
        t &&
          !this.intersectionObserver &&
          setTimeout(function () {
            e.checkExpose();
          }, 0);
      },
    },
    beforeDestroy: function () {
      (this.infoMap = null),
        (this.data = null),
        this.hqBridge.busOff(
          "commonSelectChange",
          this.handleCommonSelectChange
        ),
        this.closeObserver(this, ""),
        (this.intersectionObserver = null);
    },
    mounted: function () {
      this.getData(),
        this.hqBridge.busOn(
          "commonSelectChange",
          this.handleCommonSelectChange
        ),
        p.StockBridge.report("hq.stock_detail.etf.deepth_tab_brow");
    },
    methods: {
      getData: function () {
        return u(
          this,
          null,
          e().mark(function t() {
            var a,
              i,
              n,
              r,
              o,
              s,
              l,
              c,
              u,
              p,
              m,
              b,
              g = this;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        y.getFundEtfData(this.hqBridge, this.symbol)
                      );
                    case 3:
                      return (
                        (a = t.sent),
                        (t.next = 6),
                        y
                          .getReturnRatio(this.hqBridge, {
                            symbol: this.symbol,
                            fixedType: this.curYjbxTabIndex,
                          })
                          .catch(function (t) {
                            g.isShowYjbxBlock = !1;
                          })
                      );
                    case 6:
                      (i = t.sent),
                        0 == +a.code &&
                          ((n = a.data).info &&
                            (n.running_interval &&
                              ((r = n.running_interval),
                              (o = r.manage),
                              (s = r.service),
                              (l = r.trust),
                              (n.info.rate = "".concat(
                                (
                                  parseFloat(o) +
                                  parseFloat(s) +
                                  parseFloat(l)
                                ).toFixed(2),
                                "%"
                              ))),
                            n.trade_info &&
                              ((n.info.t_0 = !!n.trade_info.t_0),
                              (c = n.trade_info.ratio_limit) &&
                                !isNaN(c) &&
                                (n.info.ratio_limit = "±".concat(c, "%"))),
                            n.tracking_index &&
                              ((n.trackingIndex = ""
                                .concat(n.tracking_index.name)
                                .concat(
                                  n.tracking_index.peTTM
                                    ? "(市盈率".concat(
                                        n.tracking_index.peTTM,
                                        ")"
                                      )
                                    : ""
                                )),
                              (this.jumpCode = n.tracking_index.jump_code),
                              n.tracking_index.peTTM ||
                                (this.infoMap.index = "跟踪指数"))),
                          n.holder &&
                            ((n.hasHolderList =
                              Array.isArray(n.holder) && n.holder.length),
                            n.hasHolderList &&
                              (this.dataRange = {
                                start:
                                  n.holder.length <= 5
                                    ? 0
                                    : 1 - 5 / n.holder.length,
                                end: 1,
                              })),
                          n.ten_holder &&
                            ((n.hasHolder =
                              Array.isArray(n.ten_holder.holder) &&
                              n.ten_holder.holder.length),
                            n.hasHolder &&
                              (n.ten_holder.holder = n.ten_holder.holder.filter(
                                function (t, e) {
                                  return (
                                    (t.volume = f.formatBigToText(
                                      t.volume,
                                      1,
                                      2,
                                      2
                                    )),
                                    e < 5
                                  );
                                }
                              ))),
                          n.dividend &&
                            ((n.hasDividend =
                              Array.isArray(n.dividend.dividend) &&
                              n.dividend.dividend.length),
                            n.hasDividend &&
                              (n.dividend.total &&
                                ((n.dividend.desc = [
                                  "成立以来累计分红".concat(
                                    n.dividend.total,
                                    "次"
                                  ),
                                ]),
                                n.dividend.sum &&
                                  n.dividend.desc.push(
                                    "".concat(
                                      parseFloat(n.dividend.sum / 10).toFixed(
                                        4
                                      ),
                                      "元/份"
                                    )
                                  ),
                                (n.dividend.desc = n.dividend.desc.join("，"))),
                              (n.dividend.dividend = n.dividend.dividend.filter(
                                function (t, e) {
                                  return (
                                    (t.money = parseFloat(t.money / 10).toFixed(
                                      4
                                    )),
                                    t.registration_date &&
                                      (t.registration_date = ""
                                        .concat(
                                          t.registration_date.slice(0, 4),
                                          "-"
                                        )
                                        .concat(
                                          t.registration_date.slice(4, 6),
                                          "-"
                                        )
                                        .concat(t.registration_date.slice(-2))),
                                    t.inner_payment_date &&
                                      (t.inner_payment_date = ""
                                        .concat(
                                          t.inner_payment_date.slice(0, 4),
                                          "-"
                                        )
                                        .concat(
                                          t.inner_payment_date.slice(4, 6),
                                          "-"
                                        )
                                        .concat(
                                          t.inner_payment_date.slice(-2)
                                        )),
                                    e < 5
                                  );
                                }
                              )))),
                          i && 0 == +i.code
                            ? ((u = i.return_ratio_data || {}),
                              (p = u.cur_line_spec_max_draw_down),
                              (m = u.return_ratio_items),
                              (b = (void 0 === m ? [] : m).map(function (t) {
                                return (
                                  (t.ratio = t.return_ratio),
                                  (t.avg_ratio = t.reference_return_ratio),
                                  t
                                );
                              })),
                              (this.isShowYjbxBlock = b.length > 0),
                              b.length &&
                                ((this.yjbxData = h(
                                  d({}, this.yjbxData || {}),
                                  { sylData: b }
                                )),
                                (this.chartDesc = h(d({}, b[b.length - 1]), {
                                  maxRatio: +(p || 0),
                                }))))
                            : (this.isShowYjbxBlock = !1),
                          (this.data = n)),
                        setTimeout(function () {
                          g.$refs.rangeSlider &&
                            "function" ==
                              typeof g.$refs.rangeSlider.setDefaultRange &&
                            g.$refs.rangeSlider.setDefaultRange(g.dataRange);
                        }, 300),
                        this.firstLoaded ||
                          ((this.firstLoaded = !0), this.$emit("loaded")),
                        (t.next = 14);
                      break;
                    case 11:
                      (t.prev = 11),
                        (t.t0 = t.catch(0)),
                        (this.firstLoaded = !0),
                        this.$emit("loaded");
                    case 14:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[0, 11]]
            );
          })
        );
      },
      rangeChange: function (t) {
        (this.showAnimate = !1),
          (this.dataRange = t),
          (this.cyrHash = Math.random()),
          p.StockBridge.report(
            "hq.stock_detail.etf.deepth_tab_cyr.rangeChange"
          );
      },
      handleCommonSelectChange: function (t) {
        (this.showTabPlate = !1),
          "yzlfx" !== this.activeSelectType
            ? this.changeTab(t)
            : this.$refs.yzlfx && this.$refs.yzlfx.changeTab(t);
      },
      changeTab: function (t) {
        var e = this.yjbxTabList.find(function (e) {
          return e.id === t;
        });
        e &&
          this.curYjbxTabIndex !== e.id &&
          ((this.curYjbxTabIndex = e.id),
          (this.curYjbxTabName = e.name),
          this.loadChartData(),
          p.StockBridge.report(
            "hq.stock_detail.etf.deepth_tab_yjbx.changeDate"
          ));
      },
      getListByRange: function (t) {
        if (Array.isArray(t) && this.dataRange) {
          var e = this.dataRange,
            a = e.start,
            i = e.end;
          t = t.filter(function (e, n) {
            return (
              n >= Math.floor(t.length * a) && n <= Math.ceil(t.length * i)
            );
          });
        }
        return t;
      },
      getCyrChartData: function () {
        var t = this,
          e = this.getListByRange(
            this.data.holder.sort(function (t, e) {
              return t.date.replaceAll(/-/g, "") - e.date.replaceAll(/-/g, "");
            })
          ),
          a = [];
        return (
          (this.cyrDateList = []),
          e.map(function (i, n) {
            var r = new Date(i.date.replaceAll(/-/g, "/")),
              o = r.getMonth() + 1,
              s = Math.ceil(o / 3);
            (i.dateName = "".concat(r.getFullYear(), "Q").concat(s)),
              a.push({
                date: i.date,
                dateName: i.dateName,
                count: i.holder_count,
                type: "institution",
                percent: +i.institution,
              }),
              a.push({
                date: i.date,
                dateName: i.dateName,
                count: i.holder_count,
                type: "individual",
                percent: +i.individual,
              }),
              e.length <= 5 && t.cyrDateList.push(i.dateName),
              e.length > 5 &&
                (t.isClassic
                  ? n >= e.length - 5 && t.cyrDateList.push(i.dateName)
                  : (0 !== n &&
                      n !== e.length - 1 &&
                      n % Math.round(e.length / 4) != 0) ||
                    t.cyrDateList.push(i.dateName));
          }),
          a
        );
      },
      setCyrChartStyle: function (t) {
        var e = this;
        t.axis("date", {
          labelOffset: 8,
          line: null,
          grid: {
            stroke: x("--border-light-divider"),
            lineDash: null,
            lineWidth: 1,
            strokeOpacity: 0.5,
          },
          label: function (t, a) {
            return {
              top: !0,
              fill: "#7A8499",
              fontSize: 10,
              fontFamily: "stockFont",
              text: "".concat(e.cyrDateList[a]),
            };
          },
        }),
          t.axis("percent", {
            position: "right",
            grid: {
              stroke: x("--border-light-divider"),
              lineDash: null,
              strokeOpacity: 0.5,
              lineWidth: 1,
            },
            line: {
              stroke: x("--border-light-divider"),
              lineDash: null,
              strokeOpacity: 0.5,
              lineWidth: 1,
            },
            labelOffset: 0,
            label: null,
          }),
          t.axis("count", {
            position: "left",
            grid: {
              stroke: x("--border-light-divider"),
              lineDash: null,
              strokeOpacity: 0.5,
              lineWidth: 1,
            },
            line: {
              stroke: x("--border-light-divider"),
              lineDash: null,
              lineWidth: 1,
              fontFamily: "stockFont",
            },
            labelOffset: -6,
            label: function (t, e, a) {
              return {
                text: "".concat((t / 1e4).toFixed(2)),
                fill: "#7a8499",
                fontSize: 12,
                textBaseline: e === a - 1 ? "top" : "bottom",
                fontFamily: "stockFont",
              };
            },
          });
      },
      setYjbxChartStyle: function (t, e) {
        t.axis("trade_day", {
          grid: function (t, e, a) {
            return 0 === e || e === a - 1
              ? null
              : {
                  stroke: x("--border-light-divider"),
                  lineDash: null,
                  lineWidth: 1,
                  strokeOpacity: 0.5,
                };
          },
          line: null,
          labelOffset: 0,
          label: null,
        }),
          t.axis("value", {
            grid: {
              stroke: x("--border-light-divider"),
              lineDash: null,
              lineWidth: 1,
              strokeOpacity: 0.5,
            },
            line: null,
            label: null,
          });
        var a = e[e.length - 1];
        t.guide().tag({
          top: !0,
          position: [a.trade_day, a.ratio],
          content: "".concat(a.ratio, "%"),
          limitInPlot: !0,
          direct: "tl",
          side: 0,
          offsetY: -4,
          background: {
            padding: [2, 3],
            radius: 2,
            fill: x("--fill-content-layer"),
            lineWidth: 1,
            stroke: this.themeColor.orange,
            strokeOpacity: 0.6,
          },
          textStyle: { fontSize: 10, fill: this.themeColor.orange },
          withPoint: !0,
          pointStyle: {
            fill: this.themeColor.orange,
            r: 2.5,
            lineWidth: 1,
            stroke: this.themeColor.orange,
          },
        });
      },
      drawCyrChart: function (e, a) {
        var i = this,
          n = this;
        this.cyrTipsData = null;
        var r = this.getCyrChartData();
        this.isClassic &&
          (r = r.filter(function (t) {
            return i.cyrDateList.includes(t.dateName);
          }));
        for (
          var o = new e.Chart(
              h(d({}, a), {
                animate: !1,
                padding: this.isSpecialPlatform
                  ? [0, 1, 20, 0]
                  : [25, 20, 5, 15],
              })
            ),
            s = this.isSpecialPlatform
              ? { tickCount: 5, range: [0.2, 0.92] }
              : { tickCount: 5 },
            l =
              (1.1 *
                Math.max.apply(
                  Math,
                  t(
                    r.map(function (t) {
                      return t.count;
                    })
                  )
                )) /
              4,
            c = 0,
            u = [],
            f = 0;
          f < 4;
          f++
        )
          (c += l), u.push(parseInt(c));
        return (
          o.source(r, {
            date: d({}, s),
            percent: { type: "linear", min: 0, max: 100 },
            count: { tickCount: 5, ticks: [0].concat(u), type: "linear" },
          }),
          o.axis("date", {
            line: {
              stroke: this.themeColor.borderLight,
              lineDash: null,
              lineWidth: 1,
              strokeOpacity: 0.5,
              fontFamily: "stockFont",
            },
            label: null,
          }),
          o.axis("percent", {
            position: "left",
            grid: null,
            labelOffset: 0,
            label: null,
          }),
          o.axis("count", {
            position: "right",
            grid: null,
            labelOffset: 0,
            label: null,
          }),
          this.isSpecialPlatform && this.setCyrChartStyle(o),
          o.legend(!1),
          o.tooltip(!1),
          o.tooltip({
            custom: !0,
            crosshairsType: "y",
            showCrosshairs: !0,
            showTooltipMarker: !1,
            crosshairsStyle: { stroke: x("--color-heavygray"), lineWidth: 0.5 },
            onChange: function (t) {
              !Array.isArray(t.items) ||
                t.items.length < 3 ||
                (p.StockBridge.report(
                  "hq.stock_detail.etf.deepth_tab_cyr.touchchart"
                ),
                n.hqBridge.busEmit("lockSwiper", !0),
                (n.cyrTipsData = {
                  layout: t.x < a.width / 2 ? "right" : "left",
                  title: t.items[0].origin.dateName,
                  items: [
                    {
                      name:
                        "institution" === t.items[0].name
                          ? "机构持仓"
                          : "个人持仓",
                      value: "".concat(t.items[0].value, "%"),
                    },
                    {
                      name:
                        "institution" === t.items[1].name
                          ? "机构持仓"
                          : "个人持仓",
                      value: "".concat(t.items[1].value, "%"),
                    },
                    {
                      name: "持有人户数",
                      value: i.isSpecialPlatform
                        ? "".concat((t.items[2].value / 1e4).toFixed(2), "万")
                        : "".concat(t.items[2].value, "户"),
                    },
                  ],
                }));
            },
            onHide: function () {
              (n.cyrTipsData = null), n.hqBridge.busEmit("lockSwiper", !1);
            },
          }),
          o
            .interval()
            .position("date*percent")
            .color("type", function (t) {
              return "institution" === t
                ? i.isSpecialPlatform
                  ? "#3077EC"
                  : i.themeColor.red
                : i.isSpecialPlatform
                ? "#87B4FF"
                : i.themeColor.lightRed;
            })
            .size(Math.min(30, 210 / r.length))
            .adjust("stack"),
          o
            .line({ connectNulls: !0 })
            .style({ lineWidth: 1 })
            .position("date*count")
            .color(this.themeColor.orange),
          o
            .point()
            .position("date*count")
            .size(2)
            .style("type", {
              fill: function () {
                return i.themeColor.orange;
              },
              stroke: function () {
                return i.themeColor.orange;
              },
              lineWidth: 1,
            }),
          o.render(),
          o
        );
      },
      drawYjbxChart: function (t, e) {
        var a,
          i = this,
          n = null == (a = this.yjbxData) ? void 0 : a.sylData;
        if (n) {
          var r = this;
          this.yjbxDateList = [n[0].trade_day, n[n.length - 1].trade_day];
          var o = [];
          n.map(function (t) {
            o.push({
              trade_day: t.trade_day,
              type: "avg_ratio",
              value: t.avg_ratio,
            }),
              o.push({ trade_day: t.trade_day, type: "ratio", value: t.ratio });
          });
          var s = new t.Chart(
            h(d({}, e), {
              animate: !1,
              padding: this.isSpecialPlatform ? [0, 0, 0, 0] : [12, 0, 12, 0],
            })
          );
          return (
            s.source(o, {
              trade_day: { tickCount: 3 },
              value: { tickCount: 5, type: "linear" },
            }),
            s.legend(!1),
            s.axis("trade_day", !1),
            s.axis("value", {
              position: "left",
              line: null,
              grid: null,
              label: null,
            }),
            s.tooltip({
              custom: !0,
              crosshairsType: "y",
              showCrosshairs: !0,
              showTooltipMarker: !1,
              crosshairsStyle: {
                stroke: x("--color-heavygray"),
                lineWidth: 0.5,
              },
              onChange: function (t) {
                p.StockBridge.report(
                  "hq.stock_detail.etf.deepth_tab_yjbx.touchchart"
                ),
                  r.hqBridge.busEmit("lockSwiper", !0),
                  (r.yjbxTipsData = {
                    layout: t.x < e.width / 2 ? "right" : "left",
                    title: t.items[0].title,
                    items: [
                      { name: r.data.name, value: +t.items[1].value },
                      { name: "沪深300", value: +t.items[0].value },
                    ],
                  });
              },
              onHide: function () {
                (i.yjbxTipsData = null), i.hqBridge.busEmit("lockSwiper", !1);
              },
            }),
            this.isSpecialPlatform && this.setYjbxChartStyle(s, n),
            s
              .line()
              .position("trade_day*value")
              .color("type", [
                this.themeColor.lightGray1,
                this.themeColor.orange,
              ])
              .size(1),
            s.render(),
            s
          );
        }
      },
      loadChartData: function () {
        return u(
          this,
          null,
          e().mark(function t() {
            var a,
              i,
              n,
              r,
              o,
              s,
              l,
              c = this;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!this.isLoading) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return");
                    case 2:
                      return (
                        (this.isLoading = !0),
                        (a = {
                          symbol: this.symbol,
                          fixedType: this.curYjbxTabIndex,
                        }),
                        (t.next = 6),
                        y.getReturnRatio(this.hqBridge, a).catch(function (t) {
                          (c.isLoading = !1), (c.isShowYjbxBlock = !1);
                        })
                      );
                    case 6:
                      (i = t.sent),
                        (this.isLoading = !1),
                        0 == +(null == i ? void 0 : i.code)
                          ? ((n = i.return_ratio_data),
                            (o = (r = void 0 === n ? {} : n)
                              .cur_line_spec_max_draw_down),
                            (s = r.return_ratio_items),
                            (l = (void 0 === s ? [] : s).map(function (t) {
                              return (
                                (t.ratio = t.return_ratio),
                                (t.avg_ratio = t.reference_return_ratio),
                                t
                              );
                            })),
                            (this.isShowYjbxBlock = l.length > 0),
                            l.length &&
                              ((this.yjbxData = h(d({}, this.yjbxData || {}), {
                                sylData: l,
                              })),
                              (this.chartDesc = h(d({}, l[l.length - 1]), {
                                maxRatio: +(o || 0),
                              })),
                              (this.yjbxHash = Math.random())))
                          : (this.isShowYjbxBlock = !1);
                    case 8:
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
      hideEtfTipModal: function () {
        (this.showEtfTipModal = !1),
          p.StockBridge.report("hq.stock_detail.etf.deepth_tab.hidetip");
      },
      handleTipModal: function (t) {
        var e = this;
        p.StockBridge.report("hq.stock_detail.etf.deepth_tab.tip_click", {
          key: t,
        }),
          "yzlfx" !== t
            ? this.isMini || this.isSpecialPlatform
              ? ((this.etfTipMode = t),
                (this.etfTipModalConfig = v[t]),
                this.$nextTick(function () {
                  e.showEtfTipModal = !0;
                }))
              : this.hqBridge.busEmit("showEtfTipModal", { type: t })
            : p.StockBridge.busEmit("showAiDialog", {
                title: "ETF溢折率是什么",
                prompt: "ETF溢折率是什么",
                scene: "stockdetail",
                sub_channel: "manual",
                sub_scene: "premium",
              });
      },
      openSelectPlate: function (t, e) {
        var a = this,
          i = t.activeType,
          n = t.tabList,
          r = void 0 === n ? [] : n,
          o = t.curTabIndex,
          s = void 0 === o ? 0 : o,
          l = t.targetRef,
          c = void 0 === l ? "" : l,
          d = t.location;
        if (
          ((this.activeSelectType = i),
          (this.selectPlateData = r),
          (this.selectPlateCurIndex = s),
          (this.selectPlateTargetRef = c),
          (this.showTabPlate = !0),
          this.isMini)
        )
          this.$nextTick(function () {
            a.$refs.selectPlate && a.$refs.selectPlate.onPopupMore();
          });
        else {
          var h =
            d ||
            (e &&
              e.target &&
              e.target.getBoundingClientRect &&
              e.target.getBoundingClientRect());
          h &&
            this.hqBridge.busEmit("showCommonPopup", {
              data: this.selectPlateData,
              currentId: this.selectPlateCurIndex,
              location: h,
            });
        }
      },
      showYjbxPlate: function (t) {
        this.openSelectPlate(
          {
            activeType: "yjbx",
            tabList: this.yjbxTabList,
            curTabIndex: this.curYjbxTabIndex,
            targetRef: "hydbSelectbtn",
          },
          t
        );
      },
      handleYzlfxOpenSelect: function (t) {
        var e = t.tabList,
          a = t.curTabIndex,
          i = t.targetRef,
          n = t.location;
        this.openSelectPlate({
          activeType: "yzlfx",
          tabList: e || [],
          curTabIndex: a || 0,
          targetRef: i || "yzlfxSelectbtn",
          location: n,
        });
      },
      handleYzlfxVisibleChange: function (t) {
        this.isShowYzlfxBlock = !!t;
      },
      gotoDetail: function (t) {
        var e = { path: "", query: { symbol: this.symbol } };
        switch (t) {
          case "base":
            e.name =
              this.isWeapp && this.isSpecialPlatform
                ? "/fund/etfBaseDetail"
                : "etfBaseDetail";
            break;
          case "cyr":
            e.name =
              this.isWeapp && this.isSpecialPlatform
                ? "/fund/ownerListDetail"
                : "ownerListDetail";
            break;
          case "fh":
            (e.name =
              this.isWeapp && this.isSpecialPlatform
                ? "/fund/fhsp"
                : "fhspDetail"),
              (e.query.dataType = "ETF");
        }
        e.name &&
          (this.isWeapp
            ? p.StockBridge.openExtraWebview(
                "https://wzq.tenpay.com/mp/v2/index.html#"
                  .concat(e.name, "?symbol=")
                  .concat(this.symbol, "&dataType=ETF")
              )
            : (p.StockRouter.routeTo(e),
              p.StockBridge.report(
                "hq.stock_detail.etf_depth.jump_detail_click",
                { stockid: this.symbol }
              )));
      },
      checkExpose: function () {
        var t = this;
        m(
          this,
          ".list-block",
          function (e) {
            var a;
            if ("mp" === p.StockBridge.ENV) {
              if (t.hasBrow[e.id]) return;
              p.StockBridge.report(
                "hq.stock_detail.etf_depth_".concat(e.id, "_brow")
              ),
                (t.hasBrow[e.id] = !0);
            } else {
              var i = null == (a = e[0]) ? void 0 : a.target;
              if (i && i.id) {
                if (t.hasBrow[i.id]) return;
                p.StockBridge.report(
                  "hq.stock_detail.etf_depth_".concat(i.id, "_brow")
                ),
                  (t.hasBrow[i.id] = !0);
              }
            }
          },
          0,
          !0
        );
      },
      closeObserver: function () {
        m(this, "");
      },
      gzfxLoaded: function (t) {
        var e = this;
        (this.gzfxShow = t),
          setTimeout(function () {
            e.$emit("loaded");
          }, 0);
      },
    },
  };
Array ||
  (
    p.resolveComponent("f2") +
    p.resolveComponent("yzlfx") +
    p.resolveComponent("gzfx") +
    p.resolveComponent("range-slider") +
    p.resolveComponent("NewSelectPlate") +
    p.resolveComponent("WzqInfoModal") +
    p.resolveComponent("SelectPlate") +
    p.resolveComponent("etf-tip-modal") +
    p.resolveComponent("NoData")
  )();
var k = p._export_sfc(T, [
  [
    "render",
    function (t, e, a, i, n, r) {
      return p.e(
        { a: n.data },
        n.data
          ? p.e(
              { b: n.data.info },
              n.data.info
                ? p.e(
                    {
                      c: p.o(function (t) {
                        return r.gotoDetail("base");
                      }, 1936),
                      d: p.f(n.infoMap, function (t, e, a) {
                        return p.e(
                          { a: p.t(t), b: "index" === e },
                          "index" === e
                            ? p.e(
                                { c: n.data.trackingIndex },
                                n.data.trackingIndex
                                  ? { d: p.t(n.data.trackingIndex) }
                                  : {}
                              )
                            : { e: p.t(n.data.info[e] || "--") },
                          { f: e }
                        );
                      }),
                      e: p.o(function (t) {
                        return r.handleTipModal("baseInfo");
                      }, 1937),
                      f: p.t(n.data.info.t_0 ? "是" : "否"),
                      g: n.data.info.ratio_limit,
                    },
                    n.data.info.ratio_limit
                      ? { h: p.t(n.data.info.ratio_limit) }
                      : {},
                    {
                      i: p.o(function (t) {
                        return r.handleTipModal("baseInfo");
                      }, 1938),
                      j: p.t(n.data.info.rate),
                    }
                  )
                : {},
              { k: n.isShowYjbxBlock },
              n.isShowYjbxBlock
                ? p.e(
                    {
                      l: p.o(function (t) {
                        return r.handleTipModal("yjbx");
                      }, 1939),
                      m: p.t("".concat(n.curYjbxTabName, "涨幅")),
                      n: p.t(n.chartDesc.ratio > 0 ? "+" : ""),
                      o: p.t((+n.chartDesc.ratio).toFixed(2)),
                      p: n.chartDesc.ratio > 0 ? 1 : "",
                      q: n.chartDesc.ratio < 0 ? 1 : "",
                      r: 0 == n.chartDesc.ratio ? 1 : "",
                      s: n.chartDesc.maxRatio,
                    },
                    n.chartDesc.maxRatio
                      ? {
                          t: p.t(
                            "最大回撤"
                              .concat(n.chartDesc.maxRatio > 0 ? "+" : "")
                              .concat(n.chartDesc.maxRatio.toFixed(2), "%")
                          ),
                        }
                      : {},
                    {
                      v: p.t(n.curYjbxTabName),
                      w: p.o(function () {
                        return (
                          r.showYjbxPlate && r.showYjbxPlate.apply(r, arguments)
                        );
                      }, 1940),
                      x: n.chartDesc,
                    },
                    n.chartDesc
                      ? {
                          y: p.t(n.chartDesc.avg_ratio > 0 ? "+" : ""),
                          z: p.t((+n.chartDesc.avg_ratio).toFixed(2)),
                          A: n.chartDesc.avg_ratio > 0 ? 1 : "",
                          B: 0 == n.chartDesc.avg_ratio ? 1 : "",
                          C: n.chartDesc.avg_ratio < 0 ? 1 : "",
                        }
                      : {},
                    { D: n.yjbxTipsData },
                    n.yjbxTipsData
                      ? {
                          E: p.t(n.yjbxTipsData.title),
                          F: p.f(n.yjbxTipsData.items, function (t, e, a) {
                            return {
                              a: p.t(t.name),
                              b: p.t(t.value > 0 ? "+" : ""),
                              c: p.t(t.value.toFixed(2)),
                              d: t.value > 0 ? 1 : "",
                              e: t.value < 0 ? 1 : "",
                              f: 0 == t.value ? 1 : "",
                              g: e,
                            };
                          }),
                          G: p.n(n.yjbxTipsData.layout),
                        }
                      : {},
                    {
                      H: p.sr("yjbxChart", "d28649ba-0"),
                      I: p.p({
                        "chart-id": "yjbxChart",
                        "c-class": "yjbxChartClass",
                        "c-style": "width: 100%; height: 256rpx",
                        "on-init": r.drawYjbxChart,
                        "refresh-hash": n.yjbxHash,
                      }),
                      J: n.yjbxDateList.length,
                    },
                    n.yjbxDateList.length
                      ? {
                          K: p.f(n.yjbxDateList, function (t, e, a) {
                            return { a: p.t(t), b: t };
                          }),
                        }
                      : {},
                    { L: p.t("收益率" + (r.isSpecialPlatform ? "(%)" : "")) }
                  )
                : {},
              {
                M: p.o(function (t) {
                  return r.handleTipModal("yzlfx");
                }, 1941),
                N: p.sr("yzlfx", "d28649ba-1"),
                O: p.o(r.handleYzlfxOpenSelect, 1942),
                P: p.o(r.handleYzlfxVisibleChange, 1943),
                Q: p.p({
                  symbol: a.symbol,
                  "etf-name": n.data && n.data.name,
                  "theme-color": r.themeColor,
                  "is-special-platform": r.isSpecialPlatform,
                  skin: a.skin,
                }),
                R: n.isShowYzlfxBlock,
                S: n.jumpCode,
              },
              n.jumpCode
                ? {
                    T: p.o(r.gzfxLoaded, 1944),
                    U: p.p({
                      symbol: n.jumpCode,
                      "is-special-platform": r.isSpecialPlatform,
                      skin: a.skin,
                    }),
                    V: n.gzfxShow,
                  }
                : {},
              { W: n.data.hasHolderList },
              n.data.hasHolderList
                ? p.e(
                    {
                      X: p.o(function (t) {
                        return r.handleTipModal("cyr");
                      }, 1945),
                      Y: p.t(""),
                      Z: n.cyrTipsData,
                    },
                    n.cyrTipsData
                      ? {
                          aa: p.t(n.cyrTipsData.title),
                          ab: p.f(n.cyrTipsData.items, function (t, e, a) {
                            return { a: p.t(t.name), b: p.t(t.value), c: e };
                          }),
                          ac: p.n(n.cyrTipsData.layout),
                        }
                      : {},
                    {
                      ad: p.sr("gzfxChart", "d28649ba-3"),
                      ae: p.p({
                        "chart-id": "gzfxChart",
                        "c-class": "gzfxChartClass",
                        "c-style": "width: 100%; height: 350rpx",
                        "on-init": r.drawCyrChart,
                        "refresh-hash": n.cyrHash,
                      }),
                      af: n.cyrDateList.length && !r.isSpecialPlatform,
                    },
                    n.cyrDateList.length && !r.isSpecialPlatform
                      ? {
                          ag: p.f(n.cyrDateList, function (t, e, a) {
                            return { a: p.t(t), b: t };
                          }),
                        }
                      : {},
                    { ah: !r.isSpecialPlatform },
                    r.isSpecialPlatform
                      ? {}
                      : {
                          ai: p.sr("rangeSlider", "d28649ba-4"),
                          aj: p.o(r.rangeChange, 1946),
                        },
                    {
                      ak: r.isSpecialPlatform ? "#3077EC" : "#e63535",
                      al: p.t("机构持仓" + (r.isSpecialPlatform ? "(%)" : "")),
                      am: r.isSpecialPlatform ? "#87B4FF" : "#ef8080",
                      an: p.t("个人持仓" + (r.isSpecialPlatform ? "(%)" : "")),
                      ao: p.t(
                        "持有人户数" + (r.isSpecialPlatform ? "(万)" : "")
                      ),
                    }
                  )
                : {},
              { ap: n.data.hasHolder },
              n.data.hasHolder
                ? {
                    aq: p.o(function (t) {
                      return r.gotoDetail("cyr");
                    }, 1947),
                    ar: p.f(n.data.ten_holder.holder, function (t, e, a) {
                      return {
                        a: p.t(t.name),
                        b: p.t(t.volume),
                        c: p.t(t.ratio),
                        d: e,
                      };
                    }),
                  }
                : {},
              { as: n.data.hasDividend },
              n.data.hasDividend
                ? p.e(
                    {
                      at: p.o(function (t) {
                        return r.gotoDetail("fh");
                      }, 1948),
                      av: n.data.dividend.desc,
                    },
                    n.data.dividend.desc
                      ? { aw: p.t(n.data.dividend.desc) }
                      : {},
                    {
                      ax: p.f(n.data.dividend.dividend, function (t, e, a) {
                        return {
                          a: p.t(t.inner_payment_date),
                          b: p.t(t.registration_date),
                          c: p.t(t.money),
                          d: e,
                        };
                      }),
                    }
                  )
                : {},
              { ay: n.showTabPlate && r.isSpecialPlatform },
              n.showTabPlate && r.isSpecialPlatform
                ? {
                    az: p.sr("selectPlate", "d28649ba-5"),
                    aA: p.o(r.handleCommonSelectChange, 1949),
                    aB: p.p({
                      data: n.selectPlateData,
                      "cur-tab-index": n.selectPlateCurIndex,
                      "target-ref": n.selectPlateTargetRef,
                      skin: a.skin,
                    }),
                  }
                : {},
              { aC: !r.isWeapp && n.showEtfTipModal && r.isClassic },
              !r.isWeapp && n.showEtfTipModal && r.isClassic
                ? {
                    aD: p.o(r.hideEtfTipModal, 1950),
                    aE: p.p({
                      skin: a.skin,
                      isMP: r.isMini,
                      config: n.etfTipModalConfig,
                    }),
                  }
                : {},
              { aF: r.isWeapp },
              r.isWeapp
                ? p.e(
                    { aG: n.showEtfTipModal && r.isClassic },
                    n.showEtfTipModal && r.isClassic
                      ? {
                          aH: p.o(r.hideEtfTipModal, 1951),
                          aI: p.p({
                            skin: a.skin,
                            isMP: r.isMini,
                            config: n.etfTipModalConfig,
                          }),
                        }
                      : {},
                    { aJ: n.showTabPlate },
                    n.showTabPlate
                      ? {
                          aK: p.sr("selectPlate", "d28649ba-8"),
                          aL: p.o(r.handleCommonSelectChange, 1952),
                          aM: p.p({
                            data: n.selectPlateData,
                            "cur-tab-index": n.selectPlateCurIndex,
                            "tab-type": "hydb",
                            skin: a.skin,
                          }),
                        }
                      : {}
                  )
                : {},
              { aN: r.isMini },
              r.isMini
                ? p.e(
                    { aO: n.showTabPlate },
                    n.showTabPlate
                      ? {
                          aP: p.sr("selectPlate", "d28649ba-9"),
                          aQ: p.o(r.handleCommonSelectChange, 1953),
                          aR: p.p({
                            data: n.selectPlateData,
                            "cur-tab-index": n.selectPlateCurIndex,
                            "tab-type": "hydb",
                            skin: a.skin,
                          }),
                        }
                      : {},
                    { aS: n.showEtfTipModal && !r.isClassic },
                    n.showEtfTipModal && !r.isClassic
                      ? {
                          aT: p.o(r.hideEtfTipModal, 1954),
                          aU: p.p({ type: n.etfTipMode }),
                        }
                      : {}
                  )
                : {}
            )
          : n.firstLoaded
          ? { aW: p.t(a.emptyText || "暂无深度数据") }
          : {},
        {
          aV: n.firstLoaded,
          aX: p.n((r.isSpecialPlatform ? "wzq-" : "") + "wrapper"),
          aY: r.isClassic,
        },
        (r.isClassic, {}),
        { aZ: "black" === a.skin ? 1 : "", ba: r.isSpecialPlatform ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-d28649ba"],
]);
wx.createComponent(k);
var _ = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3d6cS1kZXRhaWwtYnJpZWYvQnJpZWZFVEYudnVl =
  _),
  (exports.checkIntersectionObserver = m),
  (exports.getCSSVariable = x);
