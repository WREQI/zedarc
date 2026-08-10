require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../indexSbg/@tencent/stock-hq-data/index.js"),
  e = require("../../../../../common/vendor.js"),
  n = [
    ["1", "000001"],
    ["0", "399001"],
    ["0", "399006"],
    ["0", "399005"],
    ["1", "000300"],
    ["0", "399905"],
    ["2", "HSI"],
    ["2", "HSCEI"],
    ["2", "HSCCI"],
    ["2", "HSTECH"],
    ["3", "DJI"],
    ["3", "INX"],
    ["3", "IXIC"],
    ["3", "NDX"],
    ["ft", "DAX30"],
  ],
  r = ["DAX30"],
  s = function (t) {
    return { 0: "sz", 1: "sh", 2: "hk", 3: "us", p: "pt" }[t] || t;
  },
  o = function (t, r) {
    var s = e.join([r, t], "");
    return (
      e.indexOf(
        n.map(function (t) {
          return e.join(t, "");
        }),
        s
      ) >= 0 ||
      e.indexOf(
        [
          ["2", "CES300"],
          ["2", "CES100"],
        ].map(function (t) {
          return e.join(t, "");
        }),
        s
      ) >= 0
    );
  },
  i = function (t, e) {
    return "GP-A-KCB" === t;
  },
  u = function (t, e) {
    return "GP-A-CYB" === t;
  },
  c = function (t) {
    return "p" === t || "pt" === t;
  },
  a = function (e, n, r, o) {
    if (void 0 !== e) {
      var c = s(e);
      if (!c)
        try {
          +e > 600 ? (c = "us") : +e > 300 && (c = "hk"),
            ("uk" !== e &&
              "cnjj" !== e &&
              "cwjj" !== e &&
              "jj" !== e &&
              "nq" !== e &&
              "zhai" !== e) ||
              (c = e);
        } catch (t) {
          return;
        }
      return (
        o &&
          t.utils.isIndex(o) &&
          ("hk" === c
            ? (c = "hkzhi")
            : "us" === c
            ? (c = "uszhi")
            : "nq" === c
            ? (c = "xsbzhi")
            : "uk" === c
            ? (c = "ukzhi")
            : "ft" === e
            ? (c = "hqzhi")
            : ("sh" !== c && "sz" !== c && "cs" !== e && "bj" !== e) ||
              (c = "hszhi")),
        "hd" === e && (c = "fu"),
        i(n) ? (c = "ke") : u(n) && (c = "chuang"),
        o &&
          (t.utils.isTransferableDebt(o) ||
            t.utils.isDebt(o) ||
            t.utils.isNationalDebt(o)) &&
          (c = "zhai"),
        "jj" === c
          ? (c = "cwjj")
          : o &&
            (function (t) {
              var e =
                -1 !==
                [
                  "FJ",
                  "FJ-CX",
                  "KJ",
                  "LOF",
                  "ETF",
                  "QDII-LOF",
                  "QDII-ETF",
                ].findIndex(function (e) {
                  return t === e;
                });
              return 5 == +t || e;
            })(o) &&
            (c = "cnjj"),
        "sh" === c && r && /^68/.test(r) && (c = "ke"),
        "sz" === c && r && /^30/.test(r) && (c = "chuang"),
        c
      );
    }
  };
(exports.IPO_STATE_LISTED = "U"),
  (exports.IPO_STATE_PENDING = "N"),
  (exports.IPO_STATE_PUBLISH = "I"),
  (exports.IPO_STATE_PURCHASE = "P"),
  (exports.STOCK_STATE_DELIST = "D"),
  (exports.STOCK_STATE_PAUSE = "Z"),
  (exports.STOCK_STATE_REPLACE = "C"),
  (exports.STOCK_STATE_SUSPEND = "S"),
  (exports.formatBigToText = function (t, e, n, r, s) {
    return (
      (t = parseFloat(t || 0)),
      (e = parseInt(e || 1, 10)),
      (n = parseInt(n || 0, 10)),
      (r = parseInt(r || 2, 10)),
      (s = s || ""),
      (t =
        t < 1e4 * e
          ? t.toFixed(n)
          : t >= 1e4 * e && t < 1e8
          ? "".concat((t / 1e4).toFixed(r), "万")
          : "".concat((t / 1e8).toFixed(r), "亿")) + s
    );
  }),
  (exports.getMarketPYName = s),
  (exports.getSymbol = function (t, e) {
    return c(t)
      ? "pt".concat(e)
      : (function (t) {
          return "bj" === t || "nq" === t;
        })(t)
      ? t + e
      : s(t) + e || "";
  }),
  (exports.hackUSSymbol = function (t) {
    return ["usDJI", "usINX", "usIXIC", "usNDX", "usHXC", "usNBI"].includes(t)
      ? "us.".concat(t.slice(2))
      : t;
  }),
  (exports.isChuangYeStock = u),
  (exports.isHKMarket = function (t) {
    return 2 == +t;
  }),
  (exports.isHSPlate = c),
  (exports.isIndex = function (t) {
    var e =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    return e
      ? 0 == +e
        ? /^39/.test(t) || /^98/.test(t)
        : (function (t) {
            return 1 == +t;
          })(e)
        ? /^000/.test(t)
        : o(t, e)
      : /^ZS/.test(t) || "INDEX" === t;
  }),
  (exports.isIndexByCode = o),
  (exports.isKeChuangStock = i),
  (exports.isSPMarket = function (t) {
    return "sp" === t;
  }),
  (exports.isUKMarket = function (t) {
    return "uk" === t;
  }),
  (exports.isUSHQTime = function (t) {
    return (t >= "2130" && t <= "2359") || (t >= "0000" && t <= "0400");
  }),
  (exports.isUSMarket = function (t) {
    return 3 == +t;
  }),
  (exports.splitSymbol = function (t) {
    if (r.includes(t)) return { market: "ft", scode: t };
    var e = t.slice(0, 2),
      n = ["sz", "sh", "hk", "us"].indexOf(e);
    return { market: -1 === n ? e : "".concat(n), scode: t.slice(2) };
  }),
  (exports.transMarket = a),
  (exports.transMarketIcon = function (t, e, n) {
    return "https://wzq.tenpay.com/resources/mp-files/portfolio/icon/".concat(
      a(t, e, n),
      ".svg"
    );
  }),
  (exports.trimScode = function (t) {
    return (t || "").replace(/(\.N|\.OQ|\.AM|\.PS|\.OTC)/g, "");
  });
