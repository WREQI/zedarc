require("../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../common/vendor.js");
function e() {
  var n = "__hq_type_map__";
  if (void 0 !== t.wx$1 && "function" == typeof t.wx$1.getSystemInfo) {
    var r = getApp({ allowDefault: !0 });
    if (r)
      return r.globalData[n] || (r.globalData[n] = new Map()), r.globalData[n];
  }
  return "undefined" != typeof window
    ? (window[n] || (window[n] = new Map()), window[n])
    : (e._fallback || (e._fallback = new Map()), e._fallback);
}
var n = {
  get: function (t) {
    return e().get(t);
  },
  set: function (t, n) {
    return e().set(t, n);
  },
  has: function (t) {
    return e().has(t);
  },
};
function r(t, e) {
  return l(t)
    ? "pt".concat(e)
    : c(t)
    ? "bj".concat(e)
    : a(t)
    ? "nq".concat(e)
    : p(t)
    ? "uk".concat(e)
    : Y(t)
    ? "cs".concat(e)
    : k(t)
    ? "ft".concat(e)
    : H(t)
    ? "".concat(t).concat(e)
    : w(t)
    ? "jj".concat(e)
    : I(t)
    ? "fx".concat(e)
    : x(t)
    ? "sp".concat(e)
    : N(t)
    ? "bc".concat(e)
    : ["sz", "sh", "hk", "us"][t] + e;
}
function o(t) {
  var e = t.slice(0, 2),
    n = ["sz", "sh", "hk", "us"].indexOf(e);
  return { market: -1 === n ? e : "".concat(n), scode: t.slice(2) };
}
function i(t) {
  return ["usDJI", "usINX", "usIXIC", "usNDX", "usHXC", "usNBI"].includes(t)
    ? "us.".concat(t.slice(2))
    : t;
}
function c(t) {
  return "bj" === t;
}
function a(t) {
  return "nq" === t;
}
function u(t) {
  return 0 == +t || 1 == +t;
}
function s(t) {
  return 2 == +t || 14 == +t;
}
function f(t) {
  return 3 == +t;
}
function p(t) {
  return "uk" === t;
}
function x(t) {
  return "sp" === t;
}
function l(t) {
  return "p" === t || "pt" === t;
}
function S(t) {
  return /^ZS/.test(t) || "INDEX" === t || /^FT/.test(t);
}
function d(t) {
  return "ZS-ZQ" === t;
}
function g(t) {
  return "ZS-JW" === t;
}
function m(t) {
  return "GP-A-CYB" === t;
}
function F(t) {
  return "GP-A-KCB" === t;
}
function D(t) {
  return ["FJ", "FJ-CX", "KJ", "LOF", "ETF", "QDII-LOF", "QDII-ETF"].includes(
    t
  );
}
function M(t) {
  return "ZQ-NHG" === t;
}
function C(t) {
  return "ZQ-GZ" === t;
}
function b(t) {
  return "ZQ-KZZ" === t;
}
var T = function (t, e) {
  return s(t) && /^GP-FUND/.test(e);
};
function Y(t) {
  return "cs" === t;
}
function k(t) {
  return "ft" === t;
}
function h(t) {
  return "ZS-FT_DE" === t || "FT_DE" === t;
}
function H(t) {
  return "fu" === t || "hd" === t;
}
function v(t) {
  return "hd" === t;
}
function y(t) {
  return "FU_SGXS" === t;
}
function U(t) {
  return "FU_CMEL" === t;
}
function w(t) {
  return "jj" === t;
}
function I(t) {
  return "fx" === t;
}
function N(t) {
  return "bc" === t;
}
function _(t) {
  return (t || "").replace(/(\.N|\.OQ|\.AM|\.PS|\.OTC)/g, "");
}
function K(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
  if (isNaN(t) || "" === t) return "" === t ? "--" : t;
  var i = parseFloat(t || 0),
    c = i >= 0 ? "" : "-";
  return (
    (i =
      (i = Math.abs(i)) < 1e4 * o
        ? i.toFixed(r)
        : i >= 1e4 * o && i < 1e8
        ? "".concat((i / 1e4).toFixed(n), "万")
        : i >= 1e8 && i < 1e11
        ? "".concat((i / 1e8).toFixed(n), "亿")
        : i >= 1e11 && i < 1e12
        ? "".concat((i / 1e11).toFixed(n), "千亿")
        : i >= 1e12 && i < 1e16
        ? "".concat((i / 1e12).toFixed(n), "万亿")
        : "".concat((i / 1e16).toFixed(n), "兆")),
    "".concat(c).concat(i).concat(e)
  );
}
function G(t) {
  return Number(t / 1e3).toFixed(3);
}
function P(t) {
  return t >= 1e7
    ? "".concat((t / 1e4).toFixed(0), "万")
    : t >= 1e6
    ? "".concat((t / 1e4).toFixed(1), "万")
    : t >= 1e4
    ? "".concat((t / 1e4).toFixed(2), "万")
    : t;
}
function Z() {
  var t =
      arguments.length > 0 && void 0 !== arguments[0]
        ? arguments[0]
        : "YYYYMMDDHHmmss",
    e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (e) return B();
  var n = new Date(),
    r = n.getFullYear(),
    o = String(n.getMonth() + 1).padStart(2, "0"),
    i = String(n.getDate()).padStart(2, "0"),
    c = String(n.getHours()).padStart(2, "0"),
    a = String(n.getMinutes()).padStart(2, "0"),
    u = String(n.getSeconds()).padStart(2, "0");
  switch (t) {
    case "YYYYMMDDHHmmss":
    default:
      return "".concat(r).concat(o).concat(i).concat(c).concat(a).concat(u);
    case "YYYYMMDDHHmm":
      return "".concat(r).concat(o).concat(i).concat(c).concat(a);
    case "YYYYMMDDHH":
      return "".concat(r).concat(o).concat(i).concat(c);
    case "YYYYMMDD":
      return "".concat(r).concat(o).concat(i);
    case "YYYYMM":
      return "".concat(r).concat(o);
    case "YYYY":
      return "".concat(r);
  }
}
function B() {
  var t = new Date(),
    e = (function (t) {
      var e = t.getUTCFullYear(),
        n = 14 - new Date(Date.UTC(e, 2, 1)).getUTCDay(),
        r = Date.UTC(e, 2, n, 7),
        o = new Date(Date.UTC(e, 10, 1)),
        i = 0 === o.getUTCDay() ? 1 : 8 - o.getUTCDay(),
        c = Date.UTC(e, 10, i, 6),
        a = t.getTime();
      return a >= r && a < c;
    })(t)
      ? -4
      : -5,
    n = new Date(t.getTime() + 60 * e * 60 * 1e3);
  return ""
    .concat(String(n.getUTCFullYear()))
    .concat(String(n.getUTCMonth() + 1).padStart(2, "0"))
    .concat(String(n.getUTCDate()).padStart(2, "0"))
    .concat(String(n.getUTCHours()).padStart(2, "0"))
    .concat(String(n.getUTCMinutes()).padStart(2, "0"))
    .concat(String(n.getUTCSeconds()).padStart(2, "0"));
}
var E = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      bigNumberToText: K,
      formatCurrency: function (t) {
        var e = t < 10 ? 4 : void 0;
        try {
          return new Intl.NumberFormat(void 0, {
            style: "currency",
            currency: "HKD",
            currencyDisplay: "narrowSymbol",
            minimumSignificantDigits: e,
            maximumSignificantDigits: e,
          }).format(t);
        } catch (n) {
          return "$".concat(
            e
              ? Number(t).toPrecision(e)
              : Number(t).toLocaleString("en", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
          );
        }
      },
      formatCurrentTime: Z,
      formatHKPrice: G,
      formatHKValue: P,
      formatStock: function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return t.split(",").map(function (t) {
          var n = t.substr(0, t.indexOf(":"));
          if (!isNaN(n) || l(n)) {
            var o = r(n, t.substr(t.indexOf(":") + 1));
            return e ? i(o) : o;
          }
          return t.replace(/:/g, "");
        });
      },
      getEasternTimeYYYYMMDDhhmmss: B,
      getSymbol: r,
      hackUSSymbol: i,
      isAMarket: function (t) {
        return "GP-A" === t;
      },
      isBCCurrency: N,
      isBJMarket: c,
      isBMarket: function (t) {
        return "GP-B" === t;
      },
      isCBTGFutures: function (t) {
        return "FU_CBTG" === t;
      },
      isCBTRFutures: function (t) {
        return "FU_CBTR" === t;
      },
      isCMEFutures: function (t) {
        return "FU_CMEF" === t;
      },
      isCMELFutures: U,
      isCMESFutures: function (t) {
        return "FU_CMES" === t;
      },
      isCSIndex: Y,
      isChuangYeStock: m,
      isDebt: M,
      isDebtIndex: d,
      isFTIndex: k,
      isForex: I,
      isFund: D,
      isFutures: H,
      isGermanFTIndex: h,
      isGuoZhengHK: g,
      isHDFutures: v,
      isHKFund: T,
      isHKMarket: s,
      isHSMarket: u,
      isHSPlate: l,
      isIndex: S,
      isJJMarket: w,
      isKeChuangStock: F,
      isNQMarket: a,
      isNationalDebt: C,
      isSGFutures: y,
      isSHMarket: function (t) {
        return 1 == +t;
      },
      isSPMarket: x,
      isSZMarket: function (t) {
        return 0 == +t;
      },
      isTransferableDebt: b,
      isUKMarket: p,
      isUSMarket: f,
      isWarrants: function (t) {
        return /^QZ/.test(t);
      },
      splitSymbol: o,
      trimScode: _,
      typeMap: n,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
(exports.bigNumberToText = K),
  (exports.formatCurrentTime = Z),
  (exports.formatHKPrice = G),
  (exports.formatHKValue = P),
  (exports.getSymbol = r),
  (exports.hackUSSymbol = i),
  (exports.isBCCurrency = N),
  (exports.isBJMarket = c),
  (exports.isCMELFutures = U),
  (exports.isCSIndex = Y),
  (exports.isChuangYeStock = m),
  (exports.isDebt = M),
  (exports.isDebtIndex = d),
  (exports.isFTIndex = k),
  (exports.isForex = I),
  (exports.isFund = D),
  (exports.isFutures = H),
  (exports.isGermanFTIndex = h),
  (exports.isGuoZhengHK = g),
  (exports.isHDFutures = v),
  (exports.isHKFund = T),
  (exports.isHKMarket = s),
  (exports.isHSMarket = u),
  (exports.isHSPlate = l),
  (exports.isIndex = S),
  (exports.isKeChuangStock = F),
  (exports.isNQMarket = a),
  (exports.isNationalDebt = C),
  (exports.isSGFutures = y),
  (exports.isSPMarket = x),
  (exports.isTransferableDebt = b),
  (exports.isUKMarket = p),
  (exports.isUSMarket = f),
  (exports.splitSymbol = o),
  (exports.trimScode = _),
  (exports.typeMap = n),
  (exports.utilsPack = E);
