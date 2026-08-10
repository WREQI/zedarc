var t = require("../@babel/runtime/helpers/defineProperty");
require("../@babel/runtime/helpers/Arrayincludes");
var e = function (t) {
    return {
      0: "sz",
      1: "sh",
      3: "us",
      p: "pt",
      zhai: "zhai",
      fu: "fu",
      12: "nq",
      13: "bj",
      14: "hk",
    }[t];
  },
  r = function (t) {
    return 1 == +t;
  },
  n = function (t) {
    return 0 == +t;
  },
  o = function (t, e) {
    return (
      "4" === t ||
      "c" === (null == t ? void 0 : t.toLowerCase()) ||
      "GP-A-CYB" === t
    );
  },
  i = {
    isTransferableApplyDebt: function (t) {
      return "s" === t;
    },
    isTransferableDebt: function (t) {
      return "z" === t;
    },
    isSpecialGovernmentDebt: function (t) {
      return "G" === t;
    },
    isIpoStock: function (t) {
      return "I" === t || "P" === t || "U" === t;
    },
    isNormalStock: function (t, e) {
      return !this.isSTStock(t) && !o(e);
    },
    isSTStock: function (t) {
      return /^\*?ST/i.test(t);
    },
    isKcbDebt: function (t) {
      return String(t).startsWith("718");
    },
  };
(exports.MARKET_CLASS = {
  A: "A",
  S: "S",
  NG: "NG",
  G: "G",
  C: "C",
  B: "B",
  F: "F",
  R: "R",
  O: "O",
}),
  (exports.MARKET_CODE_HK = "14"),
  (exports.MARKET_CODE_SH = "1"),
  (exports.MARKET_CODE_SZ = "0"),
  (exports.defaultMarketUtils = i),
  (exports.getMarketPYName = e),
  (exports.getStatStockId = function (t) {
    return t && t.quote && t.quote.info
      ? {
          stockid: ""
            .concat(e(+t.quote.info.market))
            .concat(t.quote.info.secu_code),
        }
      : {};
  }),
  (exports.isAMarketByHQStockType = function (t) {
    return "GP-A" === t;
  }),
  (exports.isBJMarket = function (t) {
    return 13 == +t;
  }),
  (exports.isChuangYeStock = o),
  (exports.isFundByHQStockType = function (t) {
    return ["FJ", "FJ-CX", "KJ", "LOF", "ETF", "QDII-LOF/ETF"].includes(t);
  }),
  (exports.isHKMarket = function (t) {
    return 14 == +t;
  }),
  (exports.isHSMarket = function (t) {
    return r(t) || n(t);
  }),
  (exports.isHSPlate = function (t) {
    return "p" === t || "pt" === t;
  }),
  (exports.isKeChuangStock = function (t, e) {
    return "k" === (null == t ? void 0 : t.toLowerCase()) || "GP-A-KCB" === t;
  }),
  (exports.isNQMarket = function (t) {
    return 12 == +t;
  }),
  (exports.isSHMarket = r),
  (exports.isSZMarket = n),
  (exports.isUSMarket = function (t) {
    return 3 == +t;
  }),
  (exports.stockDetailMarketMapWx = function (t) {
    var e;
    return null !== (e = { 0: 0, 1: 1, 12: "nq", 13: "bj", 14: "2" }[t]) &&
      void 0 !== e
      ? e
      : t;
  }),
  (exports.stockTypeMap = function (e) {
    var r,
      n,
      o = e.cls,
      i = e.market,
      s = {
        0: ((r = {}), t(r, "0", "sh"), t(r, "13", "bj"), r),
        1: "zhai",
        2: "sz",
        3: "sz",
        4: "chuang",
        5: "jj",
        6: "sz",
        7: "sh",
        14: "hk",
        c: "chuang",
        g: "zhai",
        k: "ke",
        s: "zhai",
        z: "zhai",
        n: "nq",
        h: "hk",
        "GP-A-KCB": "ke",
        "GP-A-CYB": "chuang",
      };
    return "0" === String(o) ? (null == (n = s[o]) ? void 0 : n[i]) : s[o];
  }),
  (exports.transferMarketToTrade = function (t) {
    var e;
    return null !== (e = { nq: "12", bj: "13", hk: "14", 2: "14" }[t]) &&
      void 0 !== e
      ? e
      : t;
  }),
  (exports.validateMarkets = ["0", "1", "12", "13", "14"]);
