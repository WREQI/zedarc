require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = ["DAX30"],
  t = function (e) {
    return { 0: "sz", 1: "sh", 2: "hk", 3: "us", p: "pt" }[e] || e;
  },
  r = function (e, t) {
    return "GP-A-KCB" === e;
  },
  n = function (e, t) {
    return "GP-A-CYB" === e;
  };
(exports.CODE_FUND = "5"),
  (exports.IPO_STATE_LISTED = "U"),
  (exports.IPO_STATE_PUBLISH = "I"),
  (exports.IPO_STATE_PURCHASE = "P"),
  (exports.MARKET_CODE_HK = "2"),
  (exports.MARKET_CODE_SH = "1"),
  (exports.MARKET_CODE_SZ = "0"),
  (exports.MARKET_CODE_US = "3"),
  (exports.MARKET_HK = "hk"),
  (exports.MARKET_HS = "hs"),
  (exports.MARKET_US = "us"),
  (exports.STOCK_STATE_DELIST = "D"),
  (exports.STOCK_STATE_PAUSE = "Z"),
  (exports.STOCK_STATE_REPLACE = "C"),
  (exports.STOCK_STATE_SUSPEND = "S"),
  (exports.bigNumberToTextForFinance = function (e, t, r, n) {
    var o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
      i = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
      s = +e;
    if (isNaN(s)) return e;
    var u = "";
    o && (u = s > 0 ? "+" : "");
    var c = Math.abs(s);
    (n = n || 1e4), (t = void 0 === t ? 2 : t), (r = r || "");
    var a = "";
    return (
      c < 1e4 || c < n
        ? (s = s.toFixed(t))
        : c >= 1e4 && c < 1e8
        ? ((s = "".concat((s / 1e4).toFixed(t))), (a = "万"))
        : c >= 1e8 && c < 1e11
        ? ((s = "".concat((s / 1e8).toFixed(t))), (a = "亿"))
        : c >= 1e11 && c < 1e12
        ? ((s = "".concat((c / 1e11).toFixed(t))), (a = "千亿"))
        : c >= 1e12 && c < 1e16
        ? ((s = "".concat((c / 1e12).toFixed(t))), (a = "万亿"))
        : ((s = "".concat((c / 1e16).toFixed(t))), (a = "兆")),
      u + s + (i ? a + r : "")
    );
  }),
  (exports.getBigNumberTextUnit = function (e, t) {
    var r = +e;
    if (isNaN(r)) return e;
    var n = Math.abs(r);
    t = t || 1e4;
    return n < 1e4 || n < t
      ? ""
      : n >= 1e4 && n < 1e8
      ? "万"
      : n >= 1e8 && n < 1e11
      ? "亿"
      : n >= 1e11 && n < 1e12
      ? "千亿"
      : n >= 1e12 && n < 1e16
      ? "万亿"
      : "兆";
  }),
  (exports.getMarketNumberByName = function (e) {
    return { sz: "0", sh: "1", hk: "2", us: "3", pt: "p" }[e] || e;
  }),
  (exports.getMarketPYName = t),
  (exports.getNumberToUnit = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
      n = +e;
    if (isNaN(n)) return e;
    return "万" === t
      ? (n / 1e4).toFixed(r)
      : "亿" === t
      ? (n / 1e8).toFixed(r)
      : "千亿" === t
      ? (n / 1e11).toFixed(r)
      : "兆" === t
      ? (n / 1e12).toFixed(r)
      : n.toFixed(r);
  }),
  (exports.getSymbol = function (e, r) {
    return (function (e) {
      return "p" === e || "pt" === e;
    })(e)
      ? "pt".concat(r)
      : (function (e) {
          return "bj" === e || "nq" === e;
        })(e)
      ? e + r
      : t(e) + r || "";
  }),
  (exports.isChuangYeStock = n),
  (exports.isFund = function (e) {
    var t =
      -1 !==
      ["FJ", "FJ-CX", "LOF", "ETF", "QDII-LOF/ETF"].findIndex(function (t) {
        return e === t;
      });
    return 5 == +e || t;
  }),
  (exports.isHKMarket = function (e) {
    return 2 == +e;
  }),
  (exports.isHKTradeTime = function (e) {
    return (e >= "0930" && e <= "1200") || (e >= "1300" && e <= "1600");
  }),
  (exports.isHSTradeTime = function (e) {
    return (e >= "0930" && e <= "1130") || (e >= "1300" && e <= "1500");
  }),
  (exports.isKeChuangStock = r),
  (exports.isUSMarket = function (e) {
    return 3 == +e;
  }),
  (exports.isUSTradeTime = function (e) {
    return (e >= "2130" && e <= "2359") || (e >= "0000" && e <= "0400");
  }),
  (exports.splitSymbol = function (t) {
    if (e.includes(t)) return { market: "ft", scode: t };
    var r = t.slice(0, 2),
      n = ["sz", "sh", "hk", "us"].indexOf(r);
    return { market: -1 === n ? r : "".concat(n), scode: t.slice(2) };
  }),
  (exports.transMarketIcon = function (e, o, i) {
    if (void 0 !== e) {
      var s = t(e);
      if (!s)
        try {
          +e > 600 ? (s = "us") : +e > 300 && (s = "hk"),
            ("uk" !== e &&
              "cnjj" !== e &&
              "cwjj" !== e &&
              "jj" !== e &&
              "nq" !== e &&
              "zhai" !== e) ||
              (s = e);
        } catch (e) {
          return;
        }
      return (
        ("ft" !== e && "cs" !== e) || (s = "hqzhi"),
        "hd" === e && (s = "fu"),
        r(o) ? (s = "ke") : n(o) && (s = "chuang"),
        "sh" === s && i && /^68/.test(i) && (s = "ke"),
        "sz" === s && i && /^30/.test(i) && (s = "chuang"),
        "https://wzq.tenpay.com/resources/mp-files/portfolio/icon/".concat(
          s,
          ".svg"
        )
      );
    }
  }),
  (exports.trimScode = function (e) {
    return (e || "").replace(/(\.N|\.OQ|\.AM|\.PS|\.OTC)/g, "");
  });
