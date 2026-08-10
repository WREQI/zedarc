require("../../../../@babel/runtime/helpers/Arrayincludes");
var e,
  t = require("../../../../common/vendor.js"),
  r = require("../stock-hq-data/index.js"),
  i = r.utils,
  n = i.isBJMarket,
  a = i.isNQMarket,
  s = i.isHSMarket,
  o = i.isHKMarket,
  u = i.isUSMarket,
  c = i.isUKMarket,
  d = i.isHSPlate,
  l = i.isAMarket,
  m = i.isChuangYeStock,
  p = i.isKeChuangStock,
  g = i.isDebt,
  T = i.isDebtIndex,
  S = i.isNationalDebt,
  f = i.isTransferableDebt,
  h = i.isGuoZhengHK,
  k = i.isCSIndex,
  y = i.isFTIndex,
  E = i.isGermanFTIndex,
  v = i.isFutures,
  x = i.isSPMarket,
  C = i.isForex,
  I = i.isSGFutures,
  A = i.isBCCurrency,
  M = i.isHDFutures,
  D = i.isCMEFutures,
  F = i.isCBTRFutures,
  P = i.isCBTGFutures,
  N = i.isCMELFutures,
  q =
    t.StockBridge.ENV === t.EnvTypeEnum.SHY_NATIVE ||
    "mpweapp" === t.ShellTypeEnum.SHY;
q && (e = require("axios"));
var G = null,
  H =
    (G ||
      (G = new r.DetailApi(function () {
        for (
          var r, i, n = arguments.length, a = new Array(n), s = 0;
          s < n;
          s++
        )
          a[s] = arguments[s];
        return 1 === a.length
          ? t.StockBridge.request(
              a[0],
              t.RequestTypeEnum.GET,
              {},
              { forceCallback: !0 }
            )
          : (null == (i = a[0])
              ? void 0
              : i.includes("/cgi/cgi-bin/stockinfoquery/fs/app/get")) && q
          ? e
              .request({ url: a[0], method: a[1], params: a[2] })
              .then(function (e) {
                return e.data;
              })
              .catch(function (e) {
                throw e;
              })
          : (a[3] && (a[3].forceCallback = !0),
            (r = t.StockBridge).request.apply(r, a));
      })),
    G);
(exports.CHART_SETTING = "hq-chart-setting-lite"),
  (exports.COMMON_PAGE_STATUS = { LOADING: "loading", ERROR: "error" }),
  (exports.detailApi = H),
  (exports.getChartScale = function (e, t, r) {
    return (s(t) &&
      (l(e) || p(e) || m(e) || ["ETF", "QDII-ETF"].includes(e))) ||
      g(e) ||
      T(e) ||
      S(e)
      ? ["09:30", "11:30/13:00", "15:30"]
      : o(t) || h(e)
      ? ["09:30", "12:00/13:00", "16:00"]
      : n(t) || a(t) || s(t) || d(t) || k(t)
      ? ["09:30", "11:30/13:00", "15:00"]
      : u(t)
      ? ["09:30", "12:45", "16:00"]
      : c(t)
      ? ["08:00", "12:15", "16:30"]
      : E(e)
      ? ["09:00", "13:15", "17:30"]
      : v(t)
      ? M(t)
        ? ["17:16", "3:00/9:15", "12:00/13:00", "16:30"]
        : I(e)
        ? ["17:00", "5:15/9:00", "16:30"]
        : D(e) || F(e)
        ? ["17:00", "04:30", "16:00"]
        : P(e)
        ? ["19:00", "7:45/8:30", "13:20"]
        : N(e)
        ? ["08:30", "13:05"]
        : ["18:00", "05:30", "17:00"]
      : x(t)
      ? "AG9999" === r
        ? ["19:50", "02:30/9:00", "15:30"]
        : ["20:00", "2:30/9:00", "15:30"]
      : A(t)
      ? ["00:00", "06:00", "12:00", "18:00", "24:00"]
      : C(t)
      ? "USDCNY" === r
        ? ["09:30", "03:00"]
        : ["00:00", "12:00", "24:00"]
      : void 0;
  }),
  (exports.getDefaultSetting = function () {
    return {
      fq: 1,
      trendline: !1,
      supportPressureLine: !1,
      gap: !1,
      lastestPrice: !1,
      remindPrice: !1,
      ds: !1,
      zx: !1,
      minsIndicator: "volume",
      mainIndicator: "ma",
      miMainIndicator: "ma",
      indicatorCount: 1,
      firstIndicator: "volume",
      secondIndicator: "macd",
      thirdIndicator: "kdj",
      fourthIndicator: "rsi",
      yangKStyle: { id: "solid", name: "实心阳线" },
      auctionMode: "close",
      miMaTypes: [5, 10, 20, 0, 0, 0, 0, 0, 0, 0],
      maTypes: [5, 10, 20, 30, 0, 0, 0, 0, 0, 0],
      maTemp: [],
      emaTypes: [12, 50, 0, 0, 0, 0, 0, 0, 0, 0],
      emaTemp: [],
      volumeTypes: [5, 10, 20, 0, 0],
      volumeTemp: [],
      cjeTypes: [5, 10, 20, 0, 0],
      cjeTemp: [],
      macdParams: { short: 12, long: 26, m: 9 },
      dmiParams: { n: 14, m: 6 },
      cciParams: { n: 14 },
      wrParams: { n1: 10, n2: 6 },
      bollParams: { deviation: 20, width: 2 },
      kdjParams: { n1: 9, n2: 3, n3: 3 },
      rsiParams: { n1: 6, n2: 12, n3: 24 },
      chartRatio: 100,
      foldState: !0,
      macdPattern: !1,
      magicNine: !1,
      tradeSecret: !1,
    };
  }),
  (exports.getRenderPoint = function (e, t, r) {
    return o(t) || h(e)
      ? [332, 425, 60, 86]
      : n(t) || a(t) || s(t) || d(t) || k(t)
      ? [242, 310, 60, 86, 267, 272, 345]
      : u(t)
      ? [391, 495, 60, 86]
      : c(t) || E(e)
      ? [511, 645, 60, 86]
      : v(t)
      ? M(t)
        ? [962, 1210, 60, 86]
        : I(e)
        ? [1187, 1490, 60, 86]
        : D(e) || F(e)
        ? [1381, 1730, 60, 86]
        : P(e)
        ? [1058, 1325, 60, 86]
        : N(e)
        ? [276, 1380, 60, 86]
        : [1381, 1730, 60, 86]
      : x(t)
      ? "AG9999" === r
        ? [792, 995, 60, 86]
        : [782, 990, 60, 86]
      : A(t)
      ? [1440, 1800, 60, 86]
      : C(t)
      ? "USDCNY" === r
        ? [1050, 0, 60, 86]
        : [1440, 0, 60, 86]
      : void 0;
  }),
  (exports.getStockType = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return s(e) || n(e) || a(e) || k(e)
      ? t[61]
      : d(e)
      ? t[58]
      : o(e)
      ? t[63]
      : u(e) || c(e) || y(e) || v(e) || x(e)
      ? t[56]
      : void 0;
  }),
  (exports.getTodayKey = function () {
    var e = new Date();
    return ""
      .concat(e.getFullYear())
      .concat(String(e.getMonth() + 1).padStart(2, 0))
      .concat(String(e.getDate()).padStart(2, 0));
  }),
  (exports.getTradeUnit = function (e, t) {
    return p(e)
      ? "股"
      : n(t) || a(t) || s(t) || d(t) || k(t) || x(t)
      ? "手"
      : o(t) || u(t) || c(t) || y(t)
      ? "股"
      : "";
  }),
  (exports.getUnit = function (e, t) {
    return p(e) ? 1 : f(e) ? 10 : n(t) || a(t) || s(t) || k(t) ? 100 : 1;
  }),
  (exports.judgeTrading = function (e, t, i, l) {
    if (r.utils.isBCCurrency(t)) return { isTrading: !0 };
    var f = ((i = Array.isArray(i) ? i[0] : i) ? i.split("|") : [])
      .map(function (e) {
        return e.split("_");
      })
      .filter(function (i) {
        return s(t) &&
          (r.utils.isAMarket(e) ||
            p(e) ||
            m(e) ||
            ["ETF", "QDII-ETF"].includes(e))
          ? "HSZB" === i[0]
          : g(e) || T(e) || S(e)
          ? "ZQ" === i[0]
          : h(e)
          ? "JW" === i[0]
          : o(t)
          ? "NEWHK" === i[0]
          : n(t) || a(t) || s(t) || d(t) || k(t)
          ? "NEWSH" === i[0]
          : u(t)
          ? "NEWUS" === i[0]
          : c(t)
          ? "UK" === i[0]
          : E(e)
          ? "DE" === i[0]
          : I(e)
          ? "SGXS" === i[0]
          : v(t)
          ? M(t)
            ? "HD" === i[0]
            : null == e
            ? void 0
            : e.includes("_".concat(i[0]))
          : C(t)
          ? i[0] === l
          : !!x(t) && "SGE" === i[0];
      });
    return {
      isTrading: !!f[0] && "open" === f[0][1],
      isAuctionTime: !!f[0] && "盘前竞价" === f[0][2],
      isWaitingForTrading: !!f[0] && "等待开盘" === f[0][2],
      isAfterTrading: !!f[0] && "盘后交易中" === f[0][2],
    };
  });
