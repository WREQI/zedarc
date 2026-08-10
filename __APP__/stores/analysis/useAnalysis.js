var e,
  t = require("../../@babel/runtime/helpers/slicedToArray"),
  n = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../@babel/runtime/helpers/asyncToGenerator"),
  i = require("../../@babel/runtime/helpers/objectSpread2"),
  o = require("../../@babel/runtime/helpers/defineProperty");
require("../../app.js");
var r = require("../../common/vendor.js"),
  s = require("../../cgi/analysisNew.js"),
  c = require("../../components/Password/index.js"),
  l = require("../../bizs/analysis/utils.js"),
  m = require("../../config/enum.js"),
  u = require("../../service/aegis/platform/not-wujie.js"),
  p = new s.AssetAnalysisAPI(),
  _ = { All: 0, GP: 1, ZQ: 2, LC: 3, QT: 4, ETF: 5, KZZ: 6 },
  f = function (e, t) {
    var n = 0,
      a = 0,
      i = 0,
      o = 0,
      r = 0,
      s = 0,
      c = 0,
      l = 0,
      m = "";
    return (
      0 === e
        ? ((s = t.month_income_info.incomeacc || "0"),
          (n = t.month_income_info.income_gp),
          (a = t.month_income_info.income_zq),
          (i = t.month_income_info.income_lc),
          (r = t.month_income_info.income_jj),
          (c = t.month_income_info.income_kzz),
          (o = t.month_income_info.income_qt),
          (l = t.month_income_info.earnings_rate || "0"),
          (m = t.month_income_info.start_date))
        : 1 === e
        ? ((s = t.year_income_info.incomeacc || "0"),
          (n = t.year_income_info.income_gp),
          (a = t.year_income_info.income_zq),
          (i = t.year_income_info.income_lc),
          (r = t.year_income_info.income_jj),
          (c = t.year_income_info.income_kzz),
          (o = t.year_income_info.income_qt),
          (l = t.year_income_info.earnings_rate || "0"),
          (m = t.year_income_info.start_date))
        : 2 === e &&
          ((s = t.income_info.incomeacc || "0"),
          (n = t.income_info.income_gp),
          (a = t.income_info.income_zq),
          (i = t.income_info.income_lc),
          (r = t.income_info.income_jj),
          (c = t.income_info.income_kzz),
          (o = t.income_info.income_qt),
          (l = t.income_info.earnings_rate || "0"),
          (m = t.income_info.start_date)),
      {
        startDate: m,
        incomeacc: s,
        incomegp: n,
        incomezq: a,
        incomelc: i,
        incomejj: r,
        incomekzz: c,
        incomeqt: o,
        earningsrate: l,
      }
    );
  },
  d = {},
  g = {
    pageNum: 0,
    pageSize: 100,
    hasMoreData: !0,
    list: [],
    beginDate: null,
    endDate: null,
  },
  y = {
    pageNum: 0,
    pageSize: 100,
    hasMoreData: !0,
    beginDate: null,
    endDate: null,
    list: [],
  },
  h =
    (o((e = {}), 1, {
      init: !1,
      pageNum: 0,
      pageSize: 20,
      hasMoreData: !0,
      list: [],
    }),
    o(e, 2, { init: !1, pageNum: 0, pageSize: 20, hasMoreData: !0, list: [] }),
    o(e, 3, { init: !1, pageNum: 0, pageSize: 20, hasMoreData: !0, list: [] }),
    o(e, 4, { init: !1, pageNum: 0, pageSize: 20, hasMoreData: !0, list: [] }),
    o(e, 5, { init: !1, pageNum: 0, pageSize: 20, hasMoreData: !0, list: [] }),
    e),
  v = {
    init: !1,
    year: 0,
    beginYear: 0,
    endYear: 0,
    totalValue: "",
    totalRate: "",
    list: [],
  },
  b = {
    init: !1,
    year: 0,
    month: 0,
    beginYear: 0,
    beginMonth: 0,
    endYear: 0,
    endMonth: 0,
    totalValue: "",
    totalRate: "",
    list: [],
  },
  D = {
    init: !1,
    timeDataType: 1,
    yearData: {},
    yearList: [],
    totalData: {},
    totalList: [],
  },
  T = r.defineStore("analysis", function () {
    var e,
      s,
      T,
      k,
      I,
      x,
      A,
      N,
      w,
      L = r.reactive({
        etfBulletinControl: "0",
        hidefund: !1,
        bnextDay: 0,
        incomeNumList: g,
        chartTradeData: d,
        incomePercentList: y,
        incomeLoading: "",
        percentLoading: "",
        income_info: {},
        month_income_info: {},
        year_income_info: {},
        timeDataType: 0,
        stockType: _.All,
        sortType: 1,
        stockList: h,
        investAbility: {
          reserveInit: !1,
          per_fk: "",
          per_yl: "",
          position_num_avg: "",
          stock_income_num: "",
          stock_total_num: "",
          trade_num_avg: "",
        },
        gpTop5ProfitInfo: { total: "--", list: [] },
        gpTop5LossInfo: { total: "--", list: [] },
        gpAllInfo: { total: 0, total_num: 0, profit_num: 0, loss_num: 0 },
        calendarFetching: !1,
        calendarTimeType: 0,
        algorithmType: m.INCOME_ALGORITHM_TYPES.FUND_WEIGHT,
        incomeYearCalendar: v,
        incomeMonthCalendar: b,
        incomeAssetData: D,
        investDaysNum: "--",
        incomeAssetsNum: "--",
        statisBeginDate: "",
        analysisTip: "",
      }),
      M = r.computed(function () {
        return f(2, L);
      }),
      Y = r.computed(function () {
        return f(0, L);
      }),
      S = r.computed(function () {
        return f(1, L);
      }),
      q = r.computed(function () {
        return {
          profit: "" === L.investAbility.per_yl ? "" : +L.investAbility.per_yl,
          chooseStock:
            0 == +L.investAbility.stock_total_num
              ? 0
              : (+L.investAbility.stock_income_num /
                  +L.investAbility.stock_total_num) *
                100,
          position:
            "" === L.investAbility.position_num_avg
              ? ""
              : +L.investAbility.position_num_avg,
          trade:
            "" === L.investAbility.trade_num_avg
              ? ""
              : +L.investAbility.trade_num_avg,
          riskControl: isNaN(+L.investAbility.per_fk)
            ? 0
            : +L.investAbility.per_fk,
          stockIncomeNum: +L.investAbility.stock_income_num,
          stockTotalNum: +L.investAbility.stock_total_num,
        };
      });
    function z(e) {
      L.incomeLoading = e;
    }
    function C(e) {
      L.percentLoading = e;
    }
    function F(e) {
      L.bnextDay = e;
    }
    function P(e) {
      L.etfBulletinControl = e;
    }
    function j(e) {
      L.investDaysNum = e;
    }
    function E(e) {
      L.incomeAssetsNum = e;
    }
    function R(e) {
      L.statisBeginDate = e;
    }
    function B(e) {
      var t = e.stockList,
        n = e.force;
      L.stockList = i(i({}, n ? h : L.stockList), t);
    }
    function G(e) {
      var t = i(i({}, e), {}, { reserveInit: !0 });
      (L.investAbility = t), (L.investAbility = e);
    }
    function O() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      L.income_info = e;
    }
    function V() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      L.month_income_info = e;
    }
    function Z() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      L.year_income_info = e;
    }
    function H() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g;
      L.incomeNumList = e;
    }
    function K() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y;
      L.incomePercentList = e;
    }
    function Q(e) {
      L.gpTop5ProfitInfo = e;
    }
    function U(e) {
      L.gpTop5LossInfo = e;
    }
    function W(e) {
      L.gpAllInfo = e;
    }
    function J() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d;
      L.chartTradeData = e;
    }
    function X(e) {
      L.calendarFetching = e;
    }
    function $(e) {
      L.incomeYearCalendar = e;
    }
    function ee(e) {
      L.incomeMonthCalendar = e;
    }
    function te() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D;
      L.incomeAssetData = e;
    }
    return {
      analysisData: L,
      accData: M,
      recentMonthData: Y,
      recentYearData: S,
      ability: q,
      setIncomeLoading: z,
      setPercentLoading: C,
      setFundStatus: function (e) {
        L.hidefund = e;
      },
      setBnextDay: F,
      setEtfBulletinControl: P,
      setInvestDaysNum: j,
      setIncomeAssetsNum: E,
      setStatisBeginDate: R,
      setTimeType: function (e) {
        (L.incomeNumList = g), (L.incomePercentList = y), (L.timeDataType = e);
      },
      setSortType: function (e) {
        L.sortType = e;
      },
      setStockType: function (e) {
        L.stockType = e;
      },
      setStockList: B,
      setInvestAbility: G,
      setIncomeInfo: O,
      setMonthIncomeInfo: V,
      setYearIncomeInfo: Z,
      setIncomeNumList: H,
      setIncomePercentList: K,
      setGpTop5ProfitInfo: Q,
      setGpTop5LossInfo: U,
      setGpAllInfo: W,
      setChartTradeData: J,
      setCalendarTimeType: function (e) {
        L.calendarTimeType = e;
      },
      setCalendarFetching: X,
      setCalendarIncomeYearMonth: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.year,
          n = e.month;
        0 === L.calendarTimeType
          ? (t && (L.incomeMonthCalendar.year = t),
            n && (L.incomeMonthCalendar.month = n))
          : t && (L.incomeYearCalendar.year = t);
      },
      setIncomeYearCalendar: $,
      setIncomeMonthCalendar: ee,
      setIncomeAssetType: function (e) {
        L.incomeAssetData.timeDataType = e;
      },
      setIncomeAssetData: te,
      setIncomeAlgorithmType: function (e) {
        L.algorithmType = e;
      },
      queryData:
        ((w = a(
          n().mark(function e() {
            var t, a, i, o, s, l, m;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (t = {
                          algorithm_type: L.algorithmType,
                          time_type: L.timeDataType + 1,
                          page_num: g.pageNum,
                          page_size: g.pageSize,
                        }),
                        (e.next = 4),
                        p.newIncomeinfo(t)
                      );
                    case 4:
                      "1" === (a = e.sent).fund_need_check &&
                        c.Password().then(function () {
                          c.Password.close();
                        }),
                        P(a.eft_bulletin_control),
                        F(parseInt(a.bnext_day, 10)),
                        j(parseInt(a.invest_days, 10)),
                        E(a.total_assets),
                        (m = a.analysis_tip),
                        (L.analysisTip = m),
                        R(
                          r.dayjs(1e3 * a.statis_begintime).format("YYYY-MM-DD")
                        ),
                        (i = r.cloneDeep(L.incomeYearCalendar)),
                        (o = r.cloneDeep(L.incomeMonthCalendar)),
                        (s = Number(
                          r.dayjs(1e3 * a.statis_begintime).format("YYYY")
                        )),
                        (l = Number(
                          r.dayjs(1e3 * a.statis_begintime).format("MM")
                        )),
                        s > 0 &&
                          l > 0 &&
                          s !== i.beginYear &&
                          ((i.beginYear = s),
                          (o.beginYear = s),
                          (o.beginMonth = l),
                          $(i),
                          ee(o)),
                        a.income_info &&
                          a.income_info[0] &&
                          2 === L.timeDataType &&
                          O(a.income_info[0]),
                        a.month_income_info &&
                          a.month_income_info[0] &&
                          0 === L.timeDataType &&
                          V(a.month_income_info[0]),
                        a.year_income_info &&
                          a.year_income_info[0] &&
                          1 === L.timeDataType &&
                          Z(a.year_income_info[0]),
                        a.invest_ability &&
                          a.invest_ability[0] &&
                          G(a.invest_ability[0]),
                        (e.next = 16);
                      break;
                    case 13:
                      (e.prev = 13),
                        (e.t0 = e.catch(0)),
                        r.index.showToast({
                          title:
                            (null == e.t0 ? void 0 : e.t0.retmsg) ||
                            "服务器繁忙 请稍后再试",
                          icon: "none",
                        });
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 13]]
            );
          })
        )),
        function () {
          return w.apply(this, arguments);
        }),
      queryShareData:
        ((N = a(
          n().mark(function e() {
            var t, a;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (t = { time_type: 1, page_num: 0, page_size: 10 }),
                        (e.next = 4),
                        p.newIncomeinfo(t)
                      );
                    case 4:
                      return (
                        (a = e.sent),
                        e.abrupt("return", (j(parseInt(a.invest_days, 10)), a))
                      );
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(0));
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 8]]
            );
          })
        )),
        function () {
          return N.apply(this, arguments);
        }),
      queryStockList:
        ((A = a(
          n().mark(function e(t) {
            var a, i, s, l, m, f, d, g, y, v, b, D, T, k, I, x, A, N, w, M, Y;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((e.prev = 0),
                        (a = t ? h : L.stockList),
                        (i = r.cloneDeep(a[L.sortType])).hasMoreData || t)
                      ) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return", i.hasMoreData);
                    case 4:
                      return (
                        (s = {}),
                        (l = {
                          stock_type: L.stockType,
                          page_num: i.pageNum,
                          page_size: i.pageSize,
                          sort_type: L.sortType,
                        }),
                        (e.next = 8),
                        p.newStockIncome(l)
                      );
                    case 8:
                      if (
                        ("1" === (s = e.sent).fund_need_check &&
                          c.Password().then(function () {
                            c.Password.close();
                          }),
                        !(
                          [_.All, _.GP, _.ETF, _.KZZ].indexOf(L.stockType) >
                            -1 && s.total_profit_income
                        ))
                      ) {
                        e.next = 15;
                        break;
                      }
                      if (
                        ((f = { total: "--", list: [] }),
                        ((m = { total: "--", list: [] }).total =
                          parseFloat(s.total_profit_income) || 0),
                        m.total > 0)
                      ) {
                        for (d = 0, g = 0; d < s.top_profit_list.length; d++)
                          (y = s.top_profit_list[d]),
                            (v = (
                              (parseFloat(y.income) / m.total) *
                              100
                            ).toFixed(2)),
                            ((b = {}).percent = parseFloat(v)),
                            (b.name = y.stock_name || ""),
                            (b.type = "1"),
                            (g += parseFloat(v)),
                            (m.list[d] = b);
                        g < 100 &&
                          d > 0 &&
                          ((D = {}),
                          (T = (100 - g).toFixed(2)),
                          (D.percent = parseFloat(T)),
                          (D.name = "其它"),
                          (D.type = "1"),
                          (m.list[d] = D));
                      }
                      if (
                        (Q(m),
                        (f.total =
                          Math.abs(parseFloat(s.total_loss_income)) || 0),
                        f.total > 0)
                      ) {
                        for (k = 0, I = 0; k < s.top_loss_list.length; k++)
                          (x = s.top_loss_list[k]),
                            (A = (
                              (Math.abs(parseFloat(x.income)) / f.total) *
                              100
                            ).toFixed(2)),
                            ((N = {}).percent = parseFloat(A)),
                            (N.name = x.stock_name || ""),
                            (N.type = "1"),
                            (I += parseFloat(A)),
                            (f.list[k] = N);
                        I < 100 &&
                          k > 0 &&
                          ((w = {}),
                          (M = (100 - I).toFixed(2)),
                          (w.percent = parseFloat(M)),
                          (w.name = "其它"),
                          (w.type = "1"),
                          (f.list[k] = w));
                      }
                      U(f);
                    case 15:
                      return (
                        s.total_income_num &&
                          ((Y = 0),
                          (Y += parseFloat(s.total_profit_income)),
                          W({
                            total: (Y += parseFloat(s.total_loss_income)),
                            total_num: parseInt(s.total_income_num, 10) || 0,
                            profit_num: parseInt(s.total_profit_num, 10) || 0,
                            loss_num: parseInt(s.total_loss_num, 10) || 0,
                          }),
                          s.total_income_num > 200 &&
                            u.aegisReporter.reportEvent(
                              "ANALYSIS-TOO-MUCH-TRADE-STOCK-LIST",
                              { ext2: s.total_income_num }
                            )),
                        e.abrupt(
                          "return",
                          (parseInt(s.page_offset, 10) === i.pageNum &&
                            (i.hasMoreData = !1),
                          s.stock_list &&
                            s.stock_list.length > 0 &&
                            ((i.list = i.list.concat(s.stock_list || [])),
                            i.list.length > 1 &&
                              i.list.sort(function (e, t) {
                                var n = parseFloat(e.income_acc),
                                  a = parseFloat(t.income_acc);
                                return 2 === L.sortType
                                  ? n > a
                                    ? 1
                                    : n < a
                                    ? -1
                                    : 0
                                  : 3 === L.sortType
                                  ? n > a
                                    ? -1
                                    : n < a
                                    ? 1
                                    : 0
                                  : void 0;
                              }),
                            (i.pageNum = parseInt(s.page_offset, 10) || 0)),
                          (i.init = !0),
                          B({ stockList: o({}, L.sortType, i), force: t }),
                          i.hasMoreData)
                        )
                      );
                    case 19:
                      (e.prev = 19),
                        (e.t0 = e.catch(0)),
                        r.index.showToast({ title: e.t0.retmsg, icon: "none" });
                    case 22:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 19]]
            );
          })
        )),
        function (e) {
          return A.apply(this, arguments);
        }),
      fetchIncomeDetail:
        ((x = a(
          n().mark(function e(t) {
            var a;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (a = {}),
                        (e.next = 4),
                        p.newStockIncomeDetail(t)
                      );
                    case 4:
                      return (
                        "1" === (a = e.sent).fund_need_check &&
                          c.Password().then(function () {
                            c.Password.close();
                          }),
                        e.abrupt("return", a)
                      );
                    case 9:
                      (e.prev = 9),
                        (e.t0 = e.catch(0)),
                        r.index.showToast({ title: e.t0.retmsg, icon: "none" });
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 9]]
            );
          })
        )),
        function (e) {
          return x.apply(this, arguments);
        }),
      queryIncomeList:
        ((I = a(
          n().mark(function e(a) {
            var i, o, s, c, m, u, _, f, d;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (L.incomeNumList.list.length && !1 === a) {
                        e.next = 20;
                        break;
                      }
                      if (
                        ((e.prev = 1),
                        (i = r.cloneDeep(L.incomeNumList)).hasMoreData)
                      ) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt("return");
                    case 5:
                      return (
                        (o = {
                          time_type: L.timeDataType + 1,
                          page_num: i.pageNum,
                          page_size: i.pageSize,
                        }),
                        z(String(L.timeDataType)),
                        (e.next = 9),
                        p.newIncomeTrade(o)
                      );
                    case 9:
                      return (
                        (s = e.sent),
                        L.incomeLoading === String(L.timeDataType) && z(""),
                        (c = s.incomelist ? s.incomelist.length : 0),
                        (i.beginDate =
                          s.begin_date || (c ? s.incomelist[c - 1].d : null)),
                        (i.endDate =
                          s.end_date || (c ? s.incomelist[0].d : null)),
                        parseInt(s.page_offset, 10) === i.pageNum &&
                          (i.hasMoreData = !1),
                        s.incomelist &&
                          s.incomelist.length > 0 &&
                          ((m = s.incomelist.reverse()).forEach(function (e) {
                            e.v = +e.v;
                          }),
                          (i.list = m.concat(i.list)),
                          (i.pageNum = parseInt(s.page_offset, 10) || 0)),
                        0 === i.pageNum && 0 === i.list.length
                          ? ((_ = r.cloneDeep(g)),
                            (f = []),
                            (d = l.calcTicks(s.begin_date, s.end_date)),
                            (u = t(d, 1)),
                            (_.beginDate = u[0]),
                            (_.endDate = d[d.length - 1]),
                            (_.list = f),
                            H(_))
                          : H(i),
                        e.abrupt("return", i.hasMoreData)
                      );
                    case 17:
                      (e.prev = 17),
                        (e.t0 = e.catch(1)),
                        e.t0 &&
                          e.t0.retmsg &&
                          r.index.showToast({
                            title: e.t0.retmsg,
                            icon: "none",
                          }),
                        L.incomeLoading === String(L.timeDataType) && z("");
                    case 20:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 17]]
            );
          })
        )),
        function (e) {
          return I.apply(this, arguments);
        }),
      queryIncomeCurve:
        ((k = a(
          n().mark(function e(a) {
            var i, o, s, m, u, _, f, d;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (L.incomePercentList.list.length && !1 === a) {
                        e.next = 26;
                        break;
                      }
                      if (
                        ((e.prev = 1),
                        (i = r.cloneDeep(L.incomePercentList)).hasMoreData)
                      ) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt("return");
                    case 5:
                      return (
                        (o = {}),
                        (s = {
                          algorithm_type: L.algorithmType,
                          time_type: L.timeDataType + 1,
                          page_num: i.pageNum,
                          page_size: i.pageSize,
                        }),
                        C(String(L.timeDataType)),
                        (e.next = 10),
                        p.newIncomeCurve(s)
                      );
                    case 10:
                      if (
                        ((o = e.sent),
                        L.percentLoading === String(L.timeDataType) && C(""),
                        "1" === o.fund_need_check &&
                          c.Password().then(function () {
                            c.Password.close();
                          }),
                        (i.beginDate =
                          o.begin_date ||
                          (o.rate_list && o.rate_list.length
                            ? o.rate_list[o.rate_list.length - 1].d
                            : null)),
                        (i.endDate =
                          o.end_date ||
                          (o.rate_list && o.rate_list.length
                            ? o.rate_list[0].d
                            : null)),
                        parseInt(o.page_offset, 10) === i.pageNum &&
                          (i.hasMoreData = !1),
                        !(o.rate_list && o.rate_list.length > 0))
                      ) {
                        e.next = 19;
                        break;
                      }
                      (m = o.rate_list.reverse()),
                        (i.list = m.concat(i.list)),
                        (i.pageNum = parseInt(o.page_offset, 10) || 0);
                    case 19:
                      return (
                        0 === i.pageNum && 0 === i.list.length
                          ? ((_ = r.cloneDeep(y)),
                            (d = l.calcTicks(o.begin_date, o.end_date)),
                            (u = t(d, 1)),
                            (_.beginDate = u[0]),
                            (_.endDate = d[d.length - 1]),
                            (f = d.map(function (e) {
                              return { d: e };
                            })),
                            (_.list = f),
                            K(_))
                          : K(i),
                        e.abrupt("return", i.hasMoreData)
                      );
                    case 23:
                      (e.prev = 23),
                        (e.t0 = e.catch(1)),
                        e.t0 &&
                          e.t0.retmsg &&
                          r.index.showToast({
                            title: e.t0.retmsg,
                            icon: "none",
                          }),
                        L.percentLoading === String(L.timeDataType) && C("");
                    case 26:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 23]]
            );
          })
        )),
        function (e) {
          return k.apply(this, arguments);
        }),
      queryPointedDateTradeData:
        ((T = a(
          n().mark(function e(t) {
            var a, o, r, s, c, l;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (a = L.chartTradeData) &&
                        a[t] &&
                        "suc" === a[t].status
                      ) {
                        e.next = 16;
                        break;
                      }
                      return (
                        a &&
                          a[t] &&
                          "fail" === a[t].status &&
                          (delete (o = i({}, a))[t], J(o)),
                        (e.prev = 3),
                        (e.next = 6),
                        p.queryPointedDateTradeData(t)
                      );
                    case 6:
                      (r = e.sent),
                        (s = ((null == r ? void 0 : r.list) || []).map(
                          function (e) {
                            var t = parseInt(e.trade_type),
                              n = {};
                            return (
                              (n.trade_type = 1 === t || 23 === t ? "B" : "S"),
                              (n.trade_data = ""
                                .concat(e.name, " ")
                                .concat(e.match_num, "@")
                                .concat(e.trade_avg_price || "")),
                              n
                            );
                          }
                        )),
                        ((c = i({}, a))[t] = { status: "suc", list: s }),
                        J(c),
                        (e.next = 16);
                      break;
                    case 12:
                      (e.prev = 12),
                        (e.t0 = e.catch(3)),
                        ((l = i({}, a))[t] = { status: "fail", list: [] }),
                        J(l);
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[3, 12]]
            );
          })
        )),
        function (e) {
          return T.apply(this, arguments);
        }),
      queryIncomeCalendarData:
        ((s = a(
          n().mark(function e() {
            var t, a, i, o, s, c, l, m, u, _, f, d, g, y, h, v, b, D, T;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = 0 === L.calendarTimeType),
                        (a = r.cloneDeep(L.incomeYearCalendar)),
                        (i = r.cloneDeep(L.incomeMonthCalendar)),
                        (o = !1),
                        (s = !1),
                        a.init ||
                          ((o = !0),
                          (c = Number(r.dayjs().format("YYYY"))),
                          (a.init = !0),
                          (a.year = c),
                          (a.endYear = c),
                          0 === a.beginYear && (a.beginYear = c)),
                        i.init ||
                          ((s = !0),
                          (l = Number(r.dayjs().format("YYYY"))),
                          (m = Number(r.dayjs().format("MM"))),
                          (i.init = !0),
                          (i.year = l),
                          (i.month = m),
                          (i.endYear = l),
                          (i.endMonth = m),
                          0 === i.beginYear &&
                            ((i.beginYear = l), (i.beginMonth = m))),
                        (u = { algorithm_type: L.algorithmType }),
                        t
                          ? ((u.time_type = 2),
                            (u.year = i.year),
                            (u.month = i.month))
                          : ((u.time_type = 1), (u.year = a.year)),
                        (e.prev = 6),
                        X(!0),
                        (e.next = 10),
                        p.incomeCalendar(u)
                      );
                    case 10:
                      if (
                        ((_ = e.sent),
                        (f = (null == _ ? void 0 : _.income_list) || []),
                        X(!1),
                        (d = 0),
                        (g = ""),
                        f.forEach(function (e) {
                          e.value &&
                            e.value.length &&
                            Number(e.value) > 0 &&
                            Number(e.value) > d &&
                            ((d = Number(e.value)), (g = e.date));
                        }),
                        f.forEach(function (e) {
                          e &&
                            e.date.length &&
                            g.length &&
                            e.date === g &&
                            (e.isTop = !0);
                        }),
                        !t)
                      ) {
                        e.next = 18;
                        break;
                      }
                      (i.totalValue = _.total_value || ""),
                        (i.totalRate = _.total_rate || ""),
                        (i.list = f),
                        (e.next = 31);
                      break;
                    case 18:
                      if (
                        ((a.totalValue = _.total_value || ""),
                        (a.totalRate = _.total_rate || ""),
                        !(f.length < 12))
                      ) {
                        e.next = 30;
                        break;
                      }
                      (y = []),
                        (h = n().mark(function e(t) {
                          var i, o, r;
                          return n().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (i = ""
                                    .concat(a.year)
                                    .concat(t < 10 ? "0" : "")
                                    .concat(t)),
                                    (o = !1),
                                    f.forEach(function (e) {
                                      e &&
                                        e.date.length &&
                                        e.date === i &&
                                        ((o = !0), (y[t - 1] = e));
                                    }),
                                    o ||
                                      (((r = {}).type = "1"),
                                      (r.date = i),
                                      (y[t - 1] = r));
                                case 3:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })),
                        (v = 1);
                    case 22:
                      if (!(v <= 12)) {
                        e.next = 27;
                        break;
                      }
                      return e.delegateYield(h(v), "t0", 24);
                    case 24:
                      v++, (e.next = 22);
                      break;
                    case 27:
                      (a.list = y), (e.next = 31);
                      break;
                    case 30:
                      a.list = f;
                    case 31:
                      e.next = 36;
                      break;
                    case 33:
                      if (((e.prev = 33), (e.t1 = e.catch(6)), X(!1), t))
                        (i.totalValue = ""), (i.totalRate = ""), (i.list = []);
                      else {
                        for (
                          a.totalValue = "", a.totalRate = "", b = [], D = 1;
                          D <= 12;
                          D++
                        )
                          ((T = {}).type = "1"),
                            (T.date = ""
                              .concat(i.year)
                              .concat(D < 10 ? "0" : "")
                              .concat(D)),
                            (b[D - 1] = T);
                        a.list = b;
                      }
                    case 36:
                      t ? (ee(i), o && $(a)) : ($(a), s && ee(i));
                    case 37:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[6, 33]]
            );
          })
        )),
        function () {
          return s.apply(this, arguments);
        }),
      queryIncomeAssetData:
        ((e = a(
          n().mark(function e() {
            var t, a, i, o, s, c, m;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = 1 === L.incomeAssetData.timeDataType),
                        (a = r.cloneDeep(L.incomeAssetData)).init ||
                          (a.init = !0),
                        ((i = {}).time_type = t ? 2 : 3),
                        (e.prev = 4),
                        (e.next = 7),
                        p.incomeAssetsList(i)
                      );
                    case 7:
                      (o = e.sent),
                        (s = (null == o ? void 0 : o.asset_list) || []),
                        (c = {
                          totalFin: (null == o ? void 0 : o.total_fin) || "",
                          totalFout: (null == o ? void 0 : o.total_fout) || "",
                          totalNetFin:
                            (null == o ? void 0 : o.total_net_fin) || "",
                          beginAsset:
                            (null == o ? void 0 : o.begin_asset) || "",
                          beginAssetDate:
                            (null == o ? void 0 : o.begin_asset_date) || "",
                          endAsset: (null == o ? void 0 : o.end_asset) || "",
                          endAssetDate:
                            (null == o ? void 0 : o.end_asset_date) || "",
                          incomeAsset:
                            (null == o ? void 0 : o.total_income) || "",
                        }),
                        (m = []),
                        s.length > 0
                          ? (m = s.reverse()).forEach(function (e) {
                              e.v = +e.v;
                            })
                          : o.begin_date &&
                            o.end_date &&
                            (m = l
                              .calcTicks(o.begin_date, o.end_date)
                              .map(function (e) {
                                return { d: e };
                              })),
                        t
                          ? ((a.yearList = m), (a.yearData = c))
                          : ((a.totalList = m), (a.totalData = c)),
                        (e.next = 18);
                      break;
                    case 15:
                      (e.prev = 15),
                        (e.t0 = e.catch(4)),
                        r.index.showToast({
                          title: e.t0.retmsg || "服务器繁忙 请稍后再试",
                          icon: "none",
                        });
                    case 18:
                      te(a);
                    case 19:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[4, 15]]
            );
          })
        )),
        function () {
          return e.apply(this, arguments);
        }),
    };
  });
exports.useAnalysisStore = T;
