var t = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
  e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  a = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  u = function (t, e, i) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[e] = i);
  },
  s = function (t, e) {
    for (var n in e || (e = {})) o.call(e, n) && u(t, n, e[n]);
    if (a) {
      var s,
        d = i(a(e));
      try {
        for (d.s(); !(s = d.n()).done; ) {
          n = s.value;
          r.call(e, n) && u(t, n, e[n]);
        }
      } catch (t) {
        d.e(t);
      } finally {
        d.f();
      }
    }
    return t;
  },
  d = require("../../../stock-hq-core/config/css-token.js"),
  l = require("../../../../../../common/vendor.js"),
  h = require("../../../../axios/index.js"),
  c = require("../../../stock-hq-core/utils/sign.js"),
  m = require("../../../stock-hq-data/index.js"),
  f = function (t, e) {
    var i = e.code,
      n = e.limit,
      a = e.end,
      o = l.getApiFullUrl(
        "cgi/cgi-bin/stockinfoquery/kline/app/get?code="
          .concat(i, "&toDate=")
          .concat(a, "&limit=")
          .concat(n),
        l.API_HOST_ENUM.PROXY_QQ
      );
    return t.request(o, {}, { method: "get" });
  },
  g = function (t, i) {
    return (
      (n = exports),
      (a = [t, i]),
      (o = function (t, i) {
        var n = i.code,
          a = i.limit,
          o = i.end;
        return e().mark(function i() {
          var r, u, d, m, f, g, y, p, v, w;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((d = "wzq"),
                    (m = 6),
                    (
                      null == (r = null == t ? void 0 : t.env)
                        ? void 0
                        : r.__APP__
                    )
                      ? ((f = null == navigator ? void 0 : navigator.userAgent),
                        (g =
                          null == f
                            ? void 0
                            : f.match(/(Android);?[\s/]+([\d.]+)?/)),
                        (d = g ? "android" : "ios"),
                        (m = g ? 6 : 5))
                      : l.StockBridge &&
                        l.ShellTypeEnum &&
                        ((d = l.OriginTypeEnum.mpweapp), (m = 6)),
                    (y = {
                      code: n,
                      end: o,
                      need: a,
                      scenes: m,
                      come_from: "3",
                      app: d,
                      t: new Date().getTime(),
                      xcxname: "wzqxcx",
                      check: 11,
                    }),
                    (p = c.getSignV2(y, "get", d)),
                    (y = s(s({}, y), p)),
                    (v = Object.keys(y).map(function (t) {
                      return "".concat(t, "=").concat(y[t]);
                    })),
                    (w = ""
                      .concat(
                        l.getApiFullUrl(
                          "cgi/cgi-bin/fundflow/lv2ffkline",
                          l.API_HOST_ENUM.PROXY_QQ
                        ),
                        "?"
                      )
                      .concat(v.join("&"))),
                    !(null == (u = null == t ? void 0 : t.env)
                      ? void 0
                      : u.__APP__))
                  ) {
                    e.next = 12;
                    break;
                  }
                  return (
                    (e.next = 9), h.Axios.request({ url: w, method: "GET" })
                  );
                case 9:
                  (e.t0 = e.sent.data), (e.next = 13);
                  break;
                case 12:
                  e.t0 = t.request(
                    w,
                    {},
                    { method: "get", dropConfig: !0, dropCookie: !0 }
                  );
                case 13:
                  return e.abrupt("return", e.t0);
                case 14:
                case "end":
                  return e.stop();
              }
          }, i);
        })();
      }),
      new Promise(function (t, e) {
        var i = function (t) {
            try {
              u(o.next(t));
            } catch (t) {
              e(t);
            }
          },
          r = function (t) {
            try {
              u(o.throw(t));
            } catch (t) {
              e(t);
            }
          },
          u = function (e) {
            return e.done ? t(e.value) : Promise.resolve(e.value).then(i, r);
          };
        u((o = o.apply(n, a)).next());
      })
    );
    var n, a, o;
  },
  y = function (t, e) {
    var i = e.code,
      n = e.limit,
      a = e.end,
      o = l.getApiFullUrl(
        "cgi/cgi-bin/fundflow/hkff?code="
          .concat(i, "&end=")
          .concat(a, "&num=")
          .concat(n),
        l.API_HOST_ENUM.PROXY_QQ
      );
    return t.request(o, {}, { method: "get" });
  },
  p = { mainData: [], levelData: [] },
  v = {
    components: {
      HistoryTrend: function () {
        return "./components/HistoryTrend.js";
      },
    },
    inject: { helper: { default: {} }, hqBridge: { default: null } },
    options: { styleIsolation: "shared" },
    props: {
      isWidget: { type: Boolean, default: !1 },
      data: { type: Object, default: null },
      skin: { type: String, default: "" },
      symbol: { type: String, default: "" },
      scode: { type: String, default: "" },
      type: { type: String, default: "" },
      isTrading: { type: Boolean, default: !1 },
      showPlateRadio: { type: Boolean, default: !1 },
      stockName: { type: String, default: "" },
      end: { type: String, default: "" },
      mcRatio: { type: String, default: "" },
      mainNetIn: { type: String, default: "" },
      rank: { type: String, default: "" },
      font_medium: {
        type: Object,
        default: function () {
          return null;
        },
      },
      borderWidth_1px: { type: Object, default: function () {} },
    },
    data: function () {
      return {
        unit: 1e4,
        fundTabs: ["今日", "5日", "10日", "20日"],
        activeFundTab: "今日",
        fundsminutetrendData: [],
        todayTrendShowType: "main",
        showFundsMunite: !1,
        history: {},
        borderWidth1px: {},
        fontMedium: null,
        fmuHash: "",
        today: "",
        todayFundFlow: {
          superFlow: {
            value: 0,
            showValue: "0.0",
            bgColor: "grey",
            width: "0.5%",
          },
          bigFlow: {
            value: 0,
            showValue: "0.0",
            bgColor: "grey",
            width: "0.5%",
          },
          normalFlow: {
            value: 0,
            showValue: "0.0",
            bgColor: "grey",
            width: "0.5%",
          },
          smallFlow: {
            value: 0,
            showValue: "0.0",
            bgColor: "grey",
            width: "0.5%",
          },
          summary: "",
        },
      };
    },
    computed: {
      totalNetInflowVal: function () {
        return "color: ".concat(this.getColor(this.todayFundFlow.mainNetIn));
      },
      themeColor: function () {
        var t = d.CSSTOKEN.DEFAULT;
        return {
          bigRed:
            (t =
              "black" === this.skin
                ? d.CSSTOKEN.BLACK || d.CSSTOKEN.DEFAULT
                : d.CSSTOKEN[l.isBroker] || d.CSSTOKEN.DEFAULT).bigRed ||
            "#E63535",
          bigGreen: t.bigGreen || "#1CAA3C",
          gray: t.gray || "#7a8499",
          lightRed: t.lightRed || "#DA6148",
          lightGreen: t.lightGreen || "#55B163",
          normalRed: t.bigRed || "#E63535",
          normalGreen: t.bigGreen || "#1CAA3C",
          lightGray1: t.lightGray1 || "#7a8499",
          borderLight: t.borderLight || "#e9ebf0",
        };
      },
      todayFundFlowSummaryText: function () {
        var t, e, i;
        if (!this.showPlateRadio && !this.isWidget) return "";
        var n = "";
        return (
          (null == (t = this.todayFundFlow.summary) ? void 0 : t.rank) &&
            ((n += "，净流入额市场排名"),
            (n += null == (e = this.todayFundFlow.summary) ? void 0 : e.rank)),
          (null == (i = this.todayFundFlow.summary) ? void 0 : i.mcRatio) &&
            (n += "，占流通市值比例".concat(
              this.todayFundFlow.summary.mcRatio,
              "%"
            )),
          (n += "。")
        );
      },
      unitText: function () {
        return this.unit ? (1e8 === this.unit ? "亿" : "万") : "";
      },
      dateText: function () {
        if (!this.end) return "";
        var t = new Date(this.end),
          e = t.getMonth(),
          i = t.getDate();
        return isNaN(e) || isNaN(i)
          ? ""
          : "".concat(e + 1, "月").concat(i, "日");
      },
    },
    watch: {
      data: function (t) {
        t && this.handleFundsData(t);
      },
      isWidget: function (t) {
        this.activeFundTab = t ? "20日" : "今日";
      },
    },
    created: function () {
      var t = this.data,
        e = this.isWidget;
      (this.activeFundTab = e ? "20日" : "今日"),
        t ? this.handleFundsData(t) : e && this.fetchFundsData();
    },
    methods: {
      toggleTodayTrendShow: function (t) {
        (this.todayTrendShowType = t),
          (this.fundsminutetrendData = p["".concat(t, "Data")]),
          this.refreshHash();
      },
      switchFundTab: function (t) {
        (this.activeFundTab = t),
          "今日" === t
            ? (this.toggleTodayTrendShow("main"),
              this.hqBridge &&
                this.hqBridge.report &&
                this.hqBridge.report(
                  "hq.stock_detail.fund_mainfund_today_click",
                  { stockid: this.symbol }
                ))
            : "5日" === t
            ? this.hqBridge &&
              this.hqBridge.report &&
              this.hqBridge.report(
                "hq.stock_detail.fund_mainfund_5days_click",
                { stockid: this.symbol }
              )
            : "10日" === t
            ? this.hqBridge &&
              this.hqBridge.report &&
              this.hqBridge.report(
                "hq.stock_detail.fund_mainfund_10days_click",
                { stockid: this.symbol }
              )
            : "20日" === t &&
              this.hqBridge &&
              this.hqBridge.report &&
              this.hqBridge.report(
                "hq.stock_detail.fund_mainfund_20days_click",
                { stockid: this.symbol }
              );
      },
      getTodayFundsTrendData: function (t) {
        var e = this,
          i = [],
          n = [];
        t.minList.forEach(function (t) {
          var a = t.time,
            o = e.handleTime(t.time),
            r = +t.Price,
            u = +e.getUnit(t.MainNetInflow),
            s = +e.getUnit(t.MainInflow),
            d = +e.getUnit(t.MainOutflow),
            l = +e.getUnit(t.BigNetInflow),
            h = +e.getUnit(t.SuperNetInflow),
            c = +e.getUnit(t.NormalNetInflow),
            m = +e.getUnit(t.SmallNetInflow);
          i.push(
            {
              time: o,
              price: r,
              rawTime: a,
              value: u,
              type: "mainNetInflow",
              text: "主力净流入",
            },
            {
              time: o,
              price: r,
              rawTime: a,
              value: s,
              type: "mainInflow",
              text: "主力流入",
            },
            {
              time: o,
              price: r,
              rawTime: a,
              value: d,
              type: "mainOutflow",
              text: "主力流出",
            }
          ),
            n.push(
              {
                time: o,
                price: r,
                rawTime: a,
                value: h,
                type: "superNetInflow",
                text: "超大单",
              },
              {
                time: o,
                price: r,
                rawTime: a,
                value: l,
                type: "bigNetInflow",
                text: "大单",
              },
              {
                time: o,
                price: r,
                rawTime: a,
                value: c,
                type: "normalNetInflow",
                text: "中单",
              },
              {
                time: o,
                price: r,
                rawTime: a,
                value: m,
                type: "smallNetInflow",
                text: "小单",
              }
            );
        }),
          (p = { mainData: i, levelData: n }),
          (this.fundsminutetrendData =
            "main" === this.todayTrendShowType ? i : n),
          (this.fmuHash = String(Math.random())),
          (this.showFundsMunite = !0);
      },
      getTodayFlowData: function (t) {
        var e = Object.keys(t).reduce(function (e, i) {
            return isNaN(Number(t[i])) || (e[i] = +t[i]), e;
          }, {}),
          i = e.mainIn,
          n = e.mainOut,
          a = e.retailIn,
          o = e.retailOut,
          r = e.mainNetIn,
          u = e.superFlow,
          s = e.bigFlow,
          d = e.normalFlow,
          l = e.smallFlow;
        if (0 === u && 0 === s && 0 === d && 0 === l)
          (u = { value: u, showValue: "0.0", bgColor: "grey", width: "0.5%" }),
            (s = {
              value: s,
              showValue: "0.0",
              bgColor: "grey",
              width: "0.5%",
            }),
            (d = {
              value: d,
              showValue: "0.0",
              bgColor: "grey",
              width: "0.5%",
            }),
            (l = {
              value: l,
              showValue: "0.0",
              bgColor: "grey",
              width: "0.5%",
            });
        else {
          r = this.getUnitifyNumber({ num: r, unit: this.unit, priceFixed: 1 });
          var h = Math.max(Math.abs(u), Math.abs(s), Math.abs(d), Math.abs(l));
          (u = {
            value: u,
            showValue: this.getUnitifyNumber({
              num: u,
              unit: this.unit,
              priceFixed: 1,
            }),
            bgColor: this.getColor(u),
            width: "".concat(Math.max(0.5, (Math.abs(u) / h) * 55), "%"),
          }),
            (s = {
              value: s,
              showValue: this.getUnitifyNumber({
                num: s,
                unit: this.unit,
                priceFixed: 1,
              }),
              bgColor: this.getColor(s),
              width: "".concat(Math.max(0.5, (Math.abs(s) / h) * 55), "%"),
            }),
            (d = {
              value: d,
              showValue: this.getUnitifyNumber({
                num: d,
                unit: this.unit,
                priceFixed: 1,
              }),
              bgColor: this.getColor(d),
              width: "".concat(Math.max(0.5, (Math.abs(d) / h) * 55), "%"),
            }),
            (l = {
              value: l,
              showValue: this.getUnitifyNumber({
                num: l,
                unit: this.unit,
                priceFixed: 1,
              }),
              bgColor: this.getColor(l),
              width: "".concat(Math.max(0.5, (Math.abs(l) / h) * 55), "%"),
            });
        }
        this.todayFundFlow = {
          mainIn: i,
          mainOut: n,
          retailIn: a,
          retailOut: o,
          mainNetIn: r,
          superFlow: u,
          bigFlow: s,
          normalFlow: d,
          smallFlow: l,
          summary: t.summary,
        };
      },
      handleFundsData: function (t) {
        if (t) {
          var e = t.todayFundFlow,
            i = t.todayFundTrend,
            n = t.historyFundFlow,
            a = (e || {}).mainNetIn;
          this.getTextUnit(a),
            e && this.getTodayFlowData(e),
            i && this.getTodayFundsTrendData(i),
            n &&
              ((this.history = n),
              this.$refs.historyTrend &&
                this.$refs.historyTrend.getHistoryFundsData(n));
        }
      },
      fetchFundsData: function () {
        var e = this,
          i = m.utils.splitSymbol(this.symbol).market;
        Promise.all([
          m.utils.isHKMarket(i)
            ? y(this.helper, { code: this.symbol, end: this.end, limit: 20 })
            : g(this.helper, { code: this.symbol, end: this.end, limit: 19 }),
          f(this.helper, { code: this.symbol, end: this.end, limit: 40 }),
        ])
          .then(function (n) {
            var a,
              o,
              r = t(n, 2),
              u = r[0],
              s = r[1],
              d = [],
              l = [];
            u &&
              0 === u.code &&
              u.data &&
              (d = m.utils.isHKMarket(i)
                ? (null == (a = u.data.history)
                    ? void 0
                    : a.map(function (t) {
                        if (t && t.length) return { date: t[0], netIn: t[3] };
                      })) || []
                : (null == (o = u.data.ffKline) ? void 0 : o.klineList) || []),
              s && 0 === s.code && s.data && (l = s.data.nodes || []);
            var h =
                (null == d ? void 0 : d.length) > 0
                  ? d
                  : (null == l ? void 0 : l.length) > 0
                  ? l
                  : [],
              c = {
                oneDayKlineList:
                  null == h
                    ? void 0
                    : h.slice(-20).map(function (t) {
                        var e = (t || {}).date,
                          i = (
                            (null == d
                              ? void 0
                              : d.find(function (t) {
                                  var i;
                                  return (
                                    (null == (i = t.date)
                                      ? void 0
                                      : i.slice(-5)) ===
                                    (null == e ? void 0 : e.slice(-5))
                                  );
                                })) || {}
                          ).netIn,
                          n = void 0 === i ? "0" : i,
                          a = (
                            (null == l
                              ? void 0
                              : l.find(function (t) {
                                  var i;
                                  return (
                                    (null == (i = t.date)
                                      ? void 0
                                      : i.slice(-5)) ===
                                    (null == e ? void 0 : e.slice(-5))
                                  );
                                })) || {}
                          ).last;
                        return {
                          date: e,
                          mainNetIn: n,
                          price: void 0 === a ? "0" : a,
                        };
                      }),
              };
            (e.history = c),
              e.$refs.historyTrend &&
                e.$refs.historyTrend.getHistoryFundsData(c);
          })
          .catch(function (t) {});
        var n = this.mainNetIn,
          a = void 0 === n ? "" : n,
          o = this.mcRatio,
          r = void 0 === o ? "" : o,
          u = this.rank,
          s = void 0 === u ? "" : u;
        this.todayFundFlow = { mainNetIn: a, summary: { mcRatio: r, rank: s } };
      },
      handleTime: function (t) {
        var e = 60 * (+t.slice(-4, -2) - 9) + +t.slice(-2) - 30;
        return e > 120 ? e - 89 : e;
      },
      getUnitifyNumber: function (t) {
        var e = t.num,
          i = t.unit,
          n = void 0 === i ? this.unit : i,
          a = t.priceFixed,
          o = void 0 === a ? 2 : a,
          r = t.noSymbol;
        if (null == e || isNaN(e)) return "";
        if (0 === e) return Number(e).toFixed(o);
        var u = parseFloat(e) / n;
        return (
          (u = u.toFixed(o)),
          r ||
            (u =
              u > 0
                ? "+".concat(u.replace(/^\+/, ""))
                : 0 === u
                ? u
                : "-".concat(u.replace(/^-/, ""))),
          u
        );
      },
      getTextUnit: function (t) {
        isNaN(t) ||
          ((this.unit = 1e8),
          Math.abs(t) < 1e9 && (this.unit = 1e4),
          this.$emit("updateUnit", this.unit));
      },
      getColor: function (t, e) {
        var i = parseFloat(t);
        if (i || 0 === i) {
          if (0 === i) return this.themeColor.lightGray1;
          var n =
              "sanhu" === e
                ? this.themeColor.normalRed
                : this.themeColor.bigRed,
            a =
              "sanhu" === e
                ? this.themeColor.normalGreen
                : this.themeColor.bigGreen;
          return i > 0 ? n : a;
        }
      },
      getUnit: function (t) {
        return (Number(t) / this.unit).toFixed(2);
      },
      refreshHash: function () {
        this.fmuHash = String(Math.random());
      },
      canvasInfo: function (t) {
        this.$emit("canvasInfo", t);
      },
      gotoTeachPage: function (t) {
        this.$emit("gotoTeachPage", t);
      },
      longPress: function (t, e) {
        this.$emit("longPress", t, e);
      },
    },
  };
Array || l.resolveComponent("HistoryTrend")();
var w = l._export_sfc(v, [
  [
    "render",
    function (t, e, i, n, a, o) {
      return l.e(
        { a: i.isWidget },
        i.isWidget
          ? l.e(
              {
                b: l.t(i.stockName ? "".concat(i.stockName, "-") : ""),
                c: i.end,
              },
              i.end ? { d: l.t(i.end) } : {}
            )
          : {},
        { e: o.dateText },
        o.dateText ? { f: l.t(o.dateText) } : {},
        {
          g: l.t(
            void 0 === a.todayFundFlow.mainNetIn
              ? ""
              : a.todayFundFlow.mainNetIn
          ),
          h: l.t(i.isWidget ? "" : o.unitText),
          i: l.s(o.totalNetInflowVal),
          j: o.todayFundFlowSummaryText,
        },
        o.todayFundFlowSummaryText
          ? { k: l.t(o.todayFundFlowSummaryText) }
          : {},
        { l: !i.isWidget },
        i.isWidget
          ? {}
          : {
              m: l.f(a.fundTabs, function (t, e, i) {
                return {
                  a: l.t(t),
                  b: t,
                  c: t === a.activeFundTab ? 1 : "",
                  d: l.o(
                    function (e) {
                      return o.switchFundTab(t);
                    },
                    5664,
                    t
                  ),
                };
              }),
            },
        { n: "今日" !== a.activeFundTab },
        "今日" !== a.activeFundTab
          ? {
              o: l.sr("historyTrend", "d6d18c93-0"),
              p: ["sz", "sh"][i.type] + i.scode,
              q: l.o(o.canvasInfo, 5665),
              r: l.p({
                id: ["sz", "sh"][i.type] + i.scode,
                "is-widget": i.isWidget,
                "get-color": o.getColor,
                history: a.history,
                "goto-teach-page": o.gotoTeachPage,
                "get-unitify-number": o.getUnitifyNumber,
                "get-unit": o.getUnit,
                unit: a.unit,
                "unit-text": o.unitText,
                "show-plate-radio": i.showPlateRadio,
                borderWidth_1px: i.borderWidth_1px,
                font_medium: i.font_medium,
                skin: i.skin,
                "active-fund-tab": a.activeFundTab,
              }),
            }
          : {},
        {
          s: l.n(i.isWidget ? "widget" : ""),
          t: l.n(i.skin),
          v: l.o(function (t) {
            return o.longPress("fundsmain", t);
          }, 5666),
        }
      );
    },
  ],
  ["__scopeId", "data-v-d6d18c93"],
]);
wx.createComponent(w);
