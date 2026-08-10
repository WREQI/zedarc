var e = require("../../../../../@babel/runtime/helpers/get"),
  t = require("../../../../../@babel/runtime/helpers/getPrototypeOf"),
  a = require("../../../../../@babel/runtime/helpers/inherits"),
  s = require("../../../../../@babel/runtime/helpers/createSuper");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var r = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../../../@babel/runtime/helpers/createClass"),
  c = require("../../../../../@babel/runtime/helpers/slicedToArray");
require("../../../../../@babel/runtime/helpers/Objectentries");
var o = require("../../../../../@babel/runtime/helpers/typeof"),
  l = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  u = Object.defineProperty,
  d = Object.defineProperties,
  m = Object.getOwnPropertyDescriptors,
  p = Object.getOwnPropertySymbols,
  k = Object.prototype.hasOwnProperty,
  h = Object.prototype.propertyIsEnumerable,
  g = function (e, t, a) {
    return t in e
      ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[t] = a);
  },
  f = function (e, t) {
    for (var a in t || (t = {})) k.call(t, a) && g(e, a, t[a]);
    if (p) {
      var s,
        r = l(p(t));
      try {
        for (r.s(); !(s = r.n()).done; ) {
          a = s.value;
          h.call(t, a) && g(e, a, t[a]);
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
    }
    return e;
  },
  v = function (e, t) {
    return d(e, m(t));
  },
  z = function (e, t, a) {
    return g(e, "symbol" != o(t) ? t + "" : t, a);
  },
  j = require("../utils.js"),
  b = {
    adaptBJ: function (e) {
      return e;
    },
    adaptHS: function (e) {
      return e;
    },
    adaptPT: function (e) {
      return e;
    },
    adaptHK: function (e) {
      return e;
    },
    adaptUS: function (e) {
      return e;
    },
    adaptUK: function (e) {
      return e;
    },
    adaptFT: function (e) {
      return e;
    },
    adaptFU: function (e) {
      return e;
    },
    adaptSP: function (e) {
      return e;
    },
    adaptHD: function (e) {
      return e;
    },
    adaptFX: function (e) {
      return e;
    },
    adaptBC: function (e) {
      return e;
    },
    adaptTransDebt: function (e) {
      return e;
    },
  },
  y = { retcode: "0", has_follow: "deprecated", market_state: "deprecated" };
function _(e) {
  if (!e || e.length < 12) return Date.now() / 1e3;
  var t = / /.test(e)
    ? e.replace(/-/g, "/")
    : ""
        .concat(e.slice(0, 4), "/")
        .concat(e.slice(4, 6), "/")
        .concat(e.slice(6, 8), " ")
        .concat(e.slice(8, 10), ":")
        .concat(e.slice(10, 12), ":")
        .concat(e.slice(12));
  return "" + new Date(t).getTime() / 1e3;
}
function S(e) {
  return e
    ? e.split(",").map(function (e) {
        var t = e.split("/");
        return { volume: t[0], price: t[1], order: t[2] };
      })
    : [];
}
var x = {
  adaptBJ: function (e) {
    var t = { 61: "nq", 62: "bj" }[e[0]];
    return v(f({}, y), {
      five_trans: {
        mcjg1: e[19],
        mcjg2: e[21],
        mcjg3: e[23],
        mcjg4: e[25],
        mcjg5: e[27],
        mcsl1: e[20],
        mcsl2: e[22],
        mcsl3: e[24],
        mcsl4: e[26],
        mcsl5: e[28],
        mrjg1: e[9],
        mrjg2: e[11],
        mrjg3: e[13],
        mrjg4: e[15],
        mrjg5: e[17],
        mrsl1: e[10],
        mrsl2: e[12],
        mrsl3: e[14],
        mrsl4: e[16],
        mrsl5: e[18],
      },
      secu_info: {
        attribute: e[84],
        ltgb: e[72],
        market: t,
        nczj: e[62],
        price_ceiling: e[47],
        price_floor: e[48],
        secu_code: e[2],
        secu_name: e[1],
        status: "" === e[40] ? "0" : e[40],
        stk_name: e[1],
        stocktype: e[61],
        symbol: j.getSymbol(t, e[2]),
        zdf_day60: e[71],
        zdf_day20: e[70],
        zdf_day5: e[63],
      },
      secu_quote: {
        amplitude: e[43],
        avg_price: e[51],
        cje: e[57],
        cjl: e[36],
        code: e[2],
        dqj: e[3],
        dynamic_ratio: e[52],
        hsl: e[38],
        jkj: e[5],
        jz: e[81],
        lsacle: e[49],
        ltz: e[44],
        lyr_ratio: e[53],
        market: t,
        market_maker: e[83],
        npl: e[8],
        share: e[72],
        sjl: e[46],
        syl: e[39],
        utime: _(e[30]),
        wbcale: e[74],
        week52zdj: e[68],
        week52zgj: e[67],
        wpl: e[7],
        yzl: e[77],
        zde: e[31],
        zdf: e[32],
        zdj: e[34],
        zgj: e[33],
        zsj: e[4],
        zsz: e[45],
        hblx: e[82],
      },
    });
  },
  adaptHS: function (e) {
    var t = { 51: "0", 1: "1", 65: "cs" }[e[0]];
    return v(f({}, y), {
      five_trans: {
        mcjg1: e[19],
        mcjg2: e[21],
        mcjg3: e[23],
        mcjg4: e[25],
        mcjg5: e[27],
        mcsl1: e[20],
        mcsl2: e[22],
        mcsl3: e[24],
        mcsl4: e[26],
        mcsl5: e[28],
        mrjg1: e[9],
        mrjg2: e[11],
        mrjg3: e[13],
        mrjg4: e[15],
        mrjg5: e[17],
        mrsl1: e[10],
        mrsl2: e[12],
        mrsl3: e[14],
        mrsl4: e[16],
        mrsl5: e[18],
      },
      secu_info: {
        attribute: e[84],
        beta: e[56],
        ltgb: e[72],
        ltgb_tz: e[76],
        market: t,
        nczj: e[62],
        price_ceiling: e[47],
        price_floor: e[48],
        secu_code: e[2],
        secu_name: e[1],
        status: "" === e[40] ? "0" : e[40],
        stk_name: e[1],
        stocktype: e[61],
        symbol: j.getSymbol(t, e[2]),
        zdf_day20: e[70],
        zdf_day60: e[71],
        zdf_day5: e[63],
        zgb: e[73],
      },
      secu_quote: {
        amplitude: e[43],
        avg_price: e[51],
        cje: e[57],
        cjl: e[36],
        code: e[2],
        dqj: e[3],
        dynamic_ratio: e[52],
        gxl: e[64],
        hsl: e[38],
        iopv: e[78],
        jkj: e[5],
        jz: e[81],
        lsacle: e[49],
        ltz: e[44],
        lyr_ratio: e[53],
        market: t,
        mins: e[35],
        npl: e[8],
        phcje: e[58],
        phcjl: e[59],
        share: e[72],
        sjl: e[46],
        syl: e[39],
        utime: _(e[30]),
        wbcale: e[74],
        week52zdj: e[68],
        week52zgj: e[67],
        wpl: e[7],
        yzl: e[77],
        zde: e[31],
        zdf: e[32],
        zdj: e[34],
        zgj: e[33],
        zsj: e[4],
        zsz: e[45],
        hblx: e[82],
      },
    });
  },
  adaptPT: function (e) {
    return v(f({}, y), {
      secu_info: {
        market: "p",
        nczj: e[50],
        secu_code: e[2],
        secu_name: e[1],
        status: "" === e[40] ? "0" : e[40],
        stk_name: e[1],
        stocktype: e[58],
        symbol: j.getSymbol("p", e[2]),
        zdf_day20: e[52],
        zdf_day60: e[54],
        zdf_day5: e[51],
      },
      secu_quote: {
        amplitude: e[43],
        cje: e[37],
        cjl: e[36],
        code: e[2],
        dqj: e[3],
        hsl: e[38],
        jkj: e[5],
        lsacle: e[49],
        ltz: e[44],
        market: "p",
        sjl: e[46],
        syl: e[39],
        utime: _(e[30]),
        zde: e[31],
        zdf: e[32],
        zdj: e[34],
        zgj: e[33],
        zsj: e[4],
        zsz: e[45],
      },
    });
  },
  adaptHK: function (e) {
    var t = S(e[52] && "0" !== e[52] ? e[52] : "") || [],
      a = S(e[53] && "0" !== e[53] ? e[53] : "") || [],
      s = {};
    return (
      null == t ||
        t.forEach(function (e, t) {
          (s["mrjg".concat(t + 1)] = e.price),
            (s["mrsl".concat(t + 1)] = e.volume);
        }),
      null == a ||
        a.forEach(function (e, t) {
          (s["mcjg".concat(t + 1)] = e.price),
            (s["mcsl".concat(t + 1)] = e.volume);
        }),
      f(
        v(f({}, y), {
          secu_info: {
            gx: e[72],
            ltgb: e[70],
            market: "2",
            nczj: e[61],
            secu_code: e[2],
            secu_name: e[1],
            status: "" === e[40] ? "0" : e[40],
            stk_name: e[1],
            stocktype: e[63],
            symbol: j.getSymbol("2", e[2]),
            trd_unit: e[60],
            zdf_day5: e[62],
            zdf_day20: e[67],
            zdf_day60: e[68],
            zgb: e[69],
          },
          secu_quote: {
            amplitude: e[43],
            avg_price: e[73],
            cje: e[37],
            cjl: e[6],
            code: e[2],
            dqj: e[3],
            dynamic_ratio: e[71],
            hsl: e[59],
            jkj: e[5],
            lsacle: e[50],
            ltz: e[44],
            market: "2",
            sjl: e[58],
            syl: e[39],
            ttm_ratio: e[57],
            utime: _(e[30]),
            wbcale: e[51],
            week52zdj: e[49],
            week52zgj: e[48],
            weekratio: e[47],
            zde: e[31],
            zdf: e[32],
            zdj: e[34],
            zgj: e[33],
            zsj: e[4],
            zsz: e[45],
            hblx: e[75],
          },
          lv2_broker: { buy: e[54], sell: e[55], trade: e[56] },
        }),
        s ? { five_trans: s } : {}
      )
    );
  },
  adaptUS: function (e) {
    return v(f({}, y), {
      secu_info: {
        gx: e[66],
        ltgb: e[63],
        market: "3",
        nczj: e[54],
        secu_code: e[2],
        secu_name: e[1],
        status: "" === e[40] ? "0" : e[40],
        stk_name: e[1],
        stocktype: e[56],
        symbol: j.getSymbol("3", e[2]),
        timeliness: e[0],
        zdf_day60: e[61],
        zdf_day20: e[60],
        zdf_day5: e[55],
        zgb: e[62],
      },
      secu_quote: {
        amplitude: e[43],
        avg_price: e[67],
        cje: e[37],
        cjl: e[36],
        code: e[2],
        dqj: e[3],
        dynamic_ratio: e[65],
        gxl: e[52],
        hsl: e[38],
        jkj: e[5],
        lsacle: e[64],
        ltz: e[44],
        lyr_ratio: e[41],
        market: "3",
        mgsy: e[47],
        npl: e[8],
        sjl: e[51],
        syl: e[39],
        utime: _(e[30]),
        week52zdj: e[49],
        week52zgj: e[48],
        wpl: e[7],
        xszgb: e[69],
        xszsz: e[68],
        zde: e[31],
        zdf: e[32],
        zdj: e[34],
        zgj: e[33],
        zsj: e[4],
        zsz: e[45],
        hblx: e[35],
      },
    });
  },
  adaptUK: function (e) {
    return v(f({}, y), {
      secu_info: {
        market: "uk",
        secu_code: e[2],
        secu_name: e[1],
        status: "" === e[40] ? "0" : e[40],
        stk_name: e[1],
        stocktype: e[56],
        symbol: j.getSymbol("uk", e[2]),
      },
      secu_quote: {
        amplitude: e[43],
        dqj: e[3],
        jkj: e[5],
        market: "uk",
        utime: _(e[30]),
        week52zdj: e[49],
        week52zgj: e[48],
        zde: e[31],
        zdf: e[32],
        zdj: e[34],
        zgj: e[33],
        zsj: e[4],
      },
    });
  },
  adaptFT: function (e) {
    return v(f({}, y), {
      secu_info: {
        market: "ft",
        secu_code: e[2],
        secu_name: e[1],
        status: "" === e[40] ? "0" : e[40],
        stk_name: e[1],
        stocktype: e[56],
        symbol: j.getSymbol("ft", e[2]),
        timeliness: e[0],
      },
      secu_quote: {
        amplitude: e[43],
        cje: e[37],
        dqj: e[3],
        jkj: e[5],
        market: "ft",
        utime: _(e[30]),
        week52zdj: e[49],
        week52zgj: e[48],
        zde: e[31],
        zdf: e[32],
        zdj: e[34],
        zgj: e[33],
        zsj: e[4],
      },
    });
  },
  adaptFU: function (e) {
    return v(f({}, y), {
      five_trans: {
        mcjg1: e[19],
        mcjg2: e[21],
        mcjg3: e[23],
        mcjg4: e[25],
        mcjg5: e[27],
        mcsl1: e[20],
        mcsl2: e[22],
        mcsl3: e[24],
        mcsl4: e[26],
        mcsl5: e[28],
        mrjg1: e[9],
        mrjg2: e[11],
        mrjg3: e[13],
        mrjg4: e[15],
        mrjg5: e[17],
        mrsl1: e[10],
        mrsl2: e[12],
        mrsl3: e[14],
        mrsl4: e[16],
        mrsl5: e[18],
      },
      secu_info: {
        market: "fu",
        secu_code: e[2],
        secu_name: e[1],
        status: "" === e[40] ? "0" : e[40],
        stk_name: e[1],
        stocktype: e[56],
        symbol: j.getSymbol("fu", e[2]),
        timeliness: e[0],
      },
      secu_quote: {
        avg_price: e[45],
        ccl: e[38],
        cjl: e[36],
        dqj: e[3],
        jkj: e[5],
        market: "fu",
        rzc: e[39],
        utime: _(e[30]),
        week52zdj: e[49],
        week52zgj: e[48],
        zde: e[31],
        zdf: e[32],
        zdj: e[34],
        zgj: e[33],
        zjj: e[41],
        zsj: e[4],
        hblx: e[35],
        nczj: e[54],
      },
    });
  },
  adaptSP: function (e) {
    return v(f({}, y), {
      five_trans: {
        mcjg1: e[19],
        mcjg2: e[21],
        mcjg3: e[23],
        mcjg4: e[25],
        mcjg5: e[27],
        mcsl1: e[20],
        mcsl2: e[22],
        mcsl3: e[24],
        mcsl4: e[26],
        mcsl5: e[28],
        mrjg1: e[9],
        mrjg2: e[11],
        mrjg3: e[13],
        mrjg4: e[15],
        mrjg5: e[17],
        mrsl1: e[10],
        mrsl2: e[12],
        mrsl3: e[14],
        mrsl4: e[16],
        mrsl5: e[18],
      },
      secu_info: {
        market: "sp",
        secu_code: e[2],
        secu_name: e[1],
        status: "" === e[40] ? "0" : e[40],
        stk_name: e[1],
        stocktype: e[56],
        symbol: j.getSymbol("sp", e[2]),
        timeliness: e[0],
      },
      secu_quote: {
        avg_price: e[45],
        ccl: e[38],
        cjl: e[36],
        cje: e[37],
        dqj: e[3],
        jkj: e[5],
        market: "sp",
        rzc: e[39],
        utime: _(e[30]),
        week52zdj: e[49],
        week52zgj: e[48],
        zde: e[31],
        zdf: e[32],
        zdj: e[34],
        zgj: e[33],
        zjj: e[41],
        zsj: e[4],
        hblx: e[35],
        amplitude: e[43],
        nczj: e[54],
        zdf_day5: e[55],
        zdf_day10: e[59],
        zdf_day20: e[60],
        zdf_day60: e[61],
      },
    });
  },
  adaptHD: function (e) {
    return v(f({}, y), {
      secu_info: {
        market: "hd",
        secu_code: e[2],
        secu_name: e[1],
        status: "" === e[17] ? "0" : e[40],
        stk_name: e[1],
        stocktype: e[20],
        symbol: j.getSymbol("hd", e[2]),
      },
      secu_quote: {
        ccl: e[7],
        cjl: e[15],
        dqj: e[3],
        jkj: e[5],
        market: "hd",
        rzc: e[8],
        utime: _(e[10]),
        week52zdj: e[19],
        week52zgj: e[18],
        zde: e[11],
        zdf: e[12],
        zdj: e[14],
        zgj: e[13],
        zjj: e[6],
        zsj: e[4],
        hblx: e[22],
      },
    });
  },
  adaptFX: function (e) {
    return v(f({}, y), {
      secu_info: {
        market: "fx",
        secu_code: e[2],
        secu_name: e[1],
        stk_name: e[1],
        symbol: j.getSymbol("fx", e[2]),
      },
      secu_quote: {
        buy1: e[10],
        dqj: e[3],
        jkj: e[7],
        market: "fx",
        sell1: e[11],
        utime: _(e[5]),
        zde: e[12],
        zdf: e[13],
        zdj: e[9],
        zgj: e[8],
        zsj: e[6],
      },
    });
  },
  adaptBC: function (e) {
    return v(f({}, y), {
      secu_info: {
        market: "bc",
        secu_code: e[2],
        secu_name: e[1],
        status: "" === e[40] ? "0" : e[40],
        stk_name: e[1],
        symbol: j.getSymbol("bc", e[2]),
      },
      secu_quote: {
        cje: e[37],
        cjl: e[6],
        dqj: e[3],
        jkj: e[5],
        market: "bc",
        utime: _(e[30]),
        zde: e[31],
        zdf: e[32],
        zdj: e[34],
        zgj: e[33],
        zsj: e[4],
        zsz: e[45],
        hblx: e[82],
      },
    });
  },
  adaptTransDebt: function (e) {
    return {
      callPrice: e[26],
      callTriggerPrice: e[27],
      convertible: e[21],
      convertPremium: e[5],
      convertPrice: e[3],
      convertDate: e[22],
      convertValue: e[4],
      duration: e[19],
      maturityDate: e[10],
      maturityPrice: e[11],
      maturityYield: e[24],
      putDate: e[23],
      putPrice: e[28],
      remainSize: e[12],
      remainTime: e[20],
      rate: e[7],
      scale: e[25],
      stockPB: e[29],
    };
  },
};
function T(e, t, a) {
  var s = parseInt(e || 0, 10);
  return j.isBJMarket(t) || j.isNQMarket(t)
    ? j.bigNumberToText(s, "手", 2)
    : j.isHKMarket(t) || j.isUSMarket(t)
    ? j.bigNumberToText(s, "股", 2)
    : j.isFutures(t) || j.isSPMarket(t)
    ? j.bigNumberToText(s, "", 2)
    : j.bigNumberToText(s, j.isKeChuangStock(a) ? "股" : "手", 2);
}
function H(e) {
  var t = Object.assign({}, e),
    a = Object.assign({}, e.secu_quote),
    s = Object.assign({}, e.secu_info),
    r = Object.assign({}, e.five_trans);
  (a.price_ceiling = s.price_ceiling),
    (a.price_floor = s.price_floor),
    (a.zgb = s.zgb),
    (a.ltgb = s.ltgb),
    (a.ltgb_tz = s.ltgb_tz),
    (a.gx = s.gx),
    (a.beta = s.beta),
    (a.trd_unit = s.trd_unit),
    (a.zdf_day5 = s.zdf_day5),
    (a.zdf_day20 = s.zdf_day20),
    (a.nczj = s.nczj),
    (t.status =
      {
        C: "已切换",
        D: "退市",
        S: "停牌",
        Z: "暂停上市",
        U: "待上市",
        I: "发售中",
        N: "待发售",
        P: "申购日",
      }[s.status] || ""),
    a.zde > 0 && (a.zde = "+".concat(a.zde)),
    a.zdf > 0 && (a.zdf = "+".concat(a.zdf)),
    0 == +a.zgj && (a.zgj = "--"),
    0 == +a.zdj && (a.zdj = "--"),
    0 == +a.jkj && (a.jkj = "--"),
    0 == +a.zsj && (a.zsj = "--"),
    void 0 !== a.cjl && (a.cjl = T(a.cjl, a.market, s.stocktype)),
    void 0 !== a.phcjl && (a.phcjl = T(a.phcjl, a.market, s.stocktype)),
    j.isBJMarket(s.market) ||
    j.isNQMarket(s.market) ||
    j.isHSMarket(s.market) ||
    j.isHSPlate(s.market) ||
    j.isCSIndex(s.market) ||
    (j.isHKMarket(s.market) && j.isIndex(s.stocktype))
      ? (void 0 !== a.cje &&
          (!isNaN(a.cje) && a.cje >= 1e7
            ? (a.cje = "".concat((a.cje / 1e4).toFixed(2), "亿"))
            : (a.cje = j.bigNumberToText(1e4 * a.cje))),
        void 0 !== a.phcje &&
          (!isNaN(a.phcje) && a.phcje >= 1e7
            ? (a.phcje = "".concat((a.phcje / 1e4).toFixed(2), "亿"))
            : (a.phcje = j.bigNumberToText(1e4 * a.phcje))))
      : (void 0 !== a.cje &&
          (!isNaN(a.cje) && a.cje >= 1e11
            ? (a.cje = "".concat((a.cje / 1e8).toFixed(2), "亿"))
            : !isNaN(a.cje) && a.cje < 1e4
            ? (a.cje = (a.cje / 1).toFixed(0))
            : (a.cje = j.bigNumberToText(a.cje))),
        void 0 !== a.phcje &&
          (!isNaN(a.phcje) && a.phcje >= 1e11
            ? (a.phcje = "".concat((a.phcje / 1e8).toFixed(2), "亿"))
            : !isNaN(a.phcje) && a.phcje < 1e4
            ? (a.phcje = (a.phcje / 1).toFixed(0))
            : (a.phcje = j.bigNumberToText(a.phcje, "", 2, 2, 1e-4)))),
    void 0 !== a.npl && (a.npl = j.bigNumberToText(a.npl)),
    void 0 !== a.wpl && (a.wpl = j.bigNumberToText(a.wpl)),
    void 0 !== a.amplitude &&
      ("" === a.amplitude || 0 == +a.amplitude
        ? (a.amplitude = "0.00%")
        : (a.amplitude = j.bigNumberToText(a.amplitude, "%", 2, 2))),
    void 0 !== a.hsl && (a.hsl = j.bigNumberToText(a.hsl, "%", 2, 2)),
    (a.originalZsz = a.zsz),
    void 0 !== a.zsz &&
      ("" === a.zsz || 0 == +a.zsz
        ? (a.zsz = "--")
        : !isNaN(a.zsz) && a.zsz >= 1e4
        ? (a.zsz =
            a.zsz >= 1e5
              ? "".concat((a.zsz / 1e4).toFixed(2), "万亿")
              : "".concat((1 * a.zsz).toFixed(0), "亿"))
        : !isNaN(a.zsz) && a.zsz < 1
        ? (a.zsz = "".concat((1e4 * a.zsz).toFixed(2), "万"))
        : (a.zsz = j.bigNumberToText(a.zsz, "亿", 2, 2))),
    a.xszsz &&
      (a.xszsz >= 1e4
        ? (a.xszsz =
            a.xszsz >= 1e5
              ? "".concat((a.xszsz / 1e4).toFixed(2), "万亿")
              : "".concat((1 * a.xszsz).toFixed(0), "亿"))
        : a.xszsz < 1
        ? (a.xszsz = "".concat((1e4 * a.xszsz).toFixed(2), "万"))
        : (a.xszsz = j.bigNumberToText(a.xszsz, "亿", 2, 2))),
    void 0 !== a.ltz &&
      ("" === a.ltz || 0 == +a.ltz
        ? (a.ltz = "--")
        : !isNaN(a.ltz) && a.ltz >= 1e4
        ? (a.ltz =
            a.ltz >= 1e5
              ? "".concat((a.ltz / 1e4).toFixed(2), "万亿")
              : "".concat((1 * a.ltz).toFixed(0), "亿"))
        : !isNaN(a.ltz) && a.ltz < 1
        ? (a.ltz = "".concat((1e4 * a.ltz).toFixed(2), "万"))
        : (a.ltz = j.bigNumberToText(a.ltz, "亿", 2, 2))),
    void 0 !== a.zgb &&
      ("" === a.zgb || 0 == +a.zgb
        ? (a.zgb = "--")
        : (a.zgb = j.bigNumberToText(a.zgb))),
    a.xszgb && (a.xszgb = j.bigNumberToText(a.xszgb)),
    (a.originalLtgb = a.ltgb),
    void 0 !== a.ltgb &&
      ("" === a.ltgb || 0 == +a.ltgb
        ? (a.ltgb = "--")
        : (a.ltgb = j.bigNumberToText(a.ltgb))),
    void 0 !== a.ltgb_tz &&
      ("" === a.ltgb_tz || 0 == +a.ltgb_tz
        ? (a.ltgb_tz = "--")
        : (a.ltgb_tz = j.bigNumberToText(a.ltgb_tz))),
    (a.share = a.ltgb),
    a.gx || e.websocket || (a.gx = "0.00"),
    a.gxl ? (a.gxl += "%") : e.websocket || (a.gxl = "0.00%"),
    a.weekratio ? (a.weekratio += "%") : e.websocket || (a.weekratio = "0.00%"),
    0 == +a.mgsy && (a.mgsy = "--"),
    0 == +a.syl ? (a.syl = "--") : a.syl < 0 && (a.syl = "亏损"),
    0 == +a.dynamic_ratio
      ? (a.dynamic_ratio = "--")
      : a.dynamic_ratio < 0 && (a.dynamic_ratio = "亏损"),
    0 == +a.ttm_ratio
      ? (a.ttm_ratio = "--")
      : a.ttm_ratio < 0 && (a.ttm_ratio = "亏损"),
    0 == +a.lyr_ratio
      ? (a.lyr_ratio = "--")
      : a.lyr_ratio < 0 && (a.lyr_ratio = "亏损"),
    0 == +a.sjl ? (a.sjl = "--") : a.sjl < 0 && (a.sjl = "亏损"),
    0 == +a.lsacle && (a.lsacle = "--"),
    a.wbcale && (0 == +a.wbcale ? (a.wbcale = "0.00%") : (a.wbcale += "%")),
    -1 == +a.price_ceiling && (a.price_ceiling = "不限"),
    -1 == +a.price_floor && (a.price_floor = "不限"),
    ("" !== a.avg_price && 0 != +a.avg_price) || (a.avg_price = "--"),
    0 == +a.week52zgj && (a.week52zgj = "--"),
    0 == +a.week52zdj && (a.week52zdj = "--"),
    a.zdf_day5 && (a.zdf_day5 += "%"),
    a.zdf_day10 && (a.zdf_day10 += "%"),
    a.zdf_day20 && (a.zdf_day20 += "%"),
    a.zdf_day60 && (a.zdf_day60 += "%"),
    a.nczj && (a.nczj += "%"),
    a.yzl && (a.yzl += "%"),
    a.mins && (a.mins = a.mins.split("/")),
    a.ccl && (a.ccl = j.bigNumberToText(a.ccl)),
    a.rzc && (a.rzc = j.bigNumberToText(a.rzc));
  var i = 0,
    n = 0;
  if (e.lv2_broker && e.five_trans)
    Object.entries(r).map(function (e) {
      var t = c(e, 2),
        a = t[0],
        s = t[1];
      s &&
        (a.indexOf("mcjg") > -1 || a.indexOf("mrjg") > -1) &&
        -1 === "".concat(s).indexOf(".") &&
        (r[a] = j.formatHKPrice(s)),
        s &&
          (a.indexOf("mcsl") > -1 || a.indexOf("mrsl") > -1) &&
          -1 === "".concat(s).indexOf("万") &&
          ((r[a] = j.formatHKValue(s)), (r["".concat(a, "_raw")] = s));
    });
  else
    for (var o = 1; o <= 5; o++)
      0 == +r["mcsl".concat(o)]
        ? (r["mcsl".concat(o)] = "-")
        : (n += 1 * r["mcsl".concat(o)]),
        (r["mcsl".concat(o)] = j.bigNumberToText(r["mcsl".concat(o)], "", 1)),
        0 == +r["mrsl".concat(o)]
          ? (r["mrsl".concat(o)] = "-")
          : (i += 1 * r["mrsl".concat(o)]),
        (r["mrsl".concat(o)] = j.bigNumberToText(r["mrsl".concat(o)], "", 1)),
        0 == +r["mcjg".concat(o)] && (r["mcjg".concat(o)] = "-"),
        0 == +r["mrjg".concat(o)] && (r["mrjg".concat(o)] = "-");
  var l = i + n;
  return (
    (a.wscale = l > 0 ? "".concat((((i - n) / l) * 100).toFixed(2), "%") : ""),
    (t.secu_quote = a),
    (t.secu_info = s),
    (t.five_trans = r),
    (t.processed = !0),
    t
  );
}
function w(e) {
  var t = Object.assign({}, e);
  return (
    void 0 !== t.convertible &&
      (t.convertible = "Y" === t.convertible ? "是" : "否"),
    t.convertPremium && (t.convertPremium += "%"),
    t.duration && (t.duration = "".concat(parseInt(t.duration, 10), "年")),
    t.maturityYield && (t.maturityYield += "%"),
    t.remainSize && (t.remainSize = j.bigNumberToText(1e4 * t.remainSize)),
    t.remainTime &&
      (t.remainTime = "".concat((+t.remainTime).toFixed(1), "年")),
    t.scale && (t.scale = j.bigNumberToText(1e4 * t.scale)),
    t
  );
}
var q = new Set([
    "CES100",
    "CES120",
    "CES280",
    "CES300",
    "CESA80",
    "CESG10",
    "CESHKB",
    "CESHKM",
    "CESP50",
    "CESSC",
    "H11100",
    "H11110",
    "H11120",
    "H11123",
    "H11140",
    "H11143",
    "H11144",
    "H11152",
    "H11153",
    "HKGDRER",
    "HKGDRSP",
    "HKGDRTR",
    "HKGDUER",
    "HKGDUSP",
    "HKGDUTR",
    "HSC",
    "HSCCI",
    "HSCEI",
    "HSCEIESG",
    "HSCEIGTR",
    "HSCEINTR",
    "HSCGTR",
    "HSCNTR",
    "HSF",
    "HSFGTR",
    "HSFNTR",
    "HSI",
    "HSIESG",
    "HSIGTR",
    "HSINTR",
    "HSMBI",
    "HSMOGI",
    "HSMPI",
    "HSP",
    "HSPGTR",
    "HSPNTR",
    "HSTECH",
    "HSU",
    "HSUGTR",
    "HSUNTR",
    "RXYH",
    "RXYRH",
    "RXYRY",
    "RXYY",
    "SPHKG",
    "SPHKL",
    "VHSI",
  ]),
  M = (function () {
    function e() {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      i(this, e),
        z(this, "options", {}),
        z(this, "adapter", b),
        (this.options = t);
      var a = this.options.adapterType;
      "string" == typeof a
        ? "stockinfo" === a && (this.adapter = x)
        : "object" == o(a) && (this.adapter = a);
    }
    return (
      n(e, [
        {
          key: "getTag",
          value: function () {
            var e = this.options,
              t = e.topic,
              a = e.tag,
              s = e.stockList;
            if (Array.isArray(a)) return a;
            if ("quote_qt" === t) {
              if ("simple" === a) return ["3", "31", "32", "45"];
              if ("detail" === a) {
                var r = j.splitSymbol(s[0]).market;
                if (j.isHSMarket(r) || j.isCSIndex(r) || j.isBJMarket(r))
                  return [
                    "3",
                    "4",
                    "5",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "25",
                    "26",
                    "27",
                    "28",
                    "29",
                    "30",
                    "31",
                    "32",
                    "33",
                    "34",
                    "35",
                    "36",
                    "38",
                    "39",
                    "40",
                    "43",
                    "44",
                    "45",
                    "46",
                    "47",
                    "48",
                    "49",
                    "51",
                    "52",
                    "53",
                    "56",
                    "57",
                    "58",
                    "59",
                    "62",
                    "63",
                    "64",
                    "67",
                    "68",
                    "70",
                    "72",
                    "74",
                    "77",
                    "78",
                    "83",
                    "87",
                  ];
                if (j.isHKMarket(r))
                  return [
                    "3",
                    "4",
                    "5",
                    "30",
                    "31",
                    "32",
                    "33",
                    "34",
                    "37",
                    "43",
                    "48",
                    "49",
                    "50",
                    "51",
                    "61",
                    "62",
                    "67",
                  ];
                if (j.isUSMarket(r))
                  return [
                    "3",
                    "4",
                    "5",
                    "7",
                    "8",
                    "30",
                    "31",
                    "32",
                    "33",
                    "34",
                    "36",
                    "37",
                    "38",
                    "39",
                    "40",
                    "41",
                    "43",
                    "44",
                    "45",
                    "47",
                    "48",
                    "49",
                    "51",
                    "52",
                    "54",
                    "55",
                    "60",
                    "64",
                    "65",
                    "66",
                    "67",
                    "68",
                  ];
              }
            }
            if ("quote_lv2_qt_detail" === t) {
              var i = j.splitSymbol(s[0]).market;
              if (j.isHKMarket(i))
                return [
                  "3",
                  "4",
                  "5",
                  "6",
                  "30",
                  "31",
                  "32",
                  "33",
                  "34",
                  "35",
                  "36",
                  "37",
                  "39",
                  "40",
                  "43",
                  "44",
                  "45",
                  "47",
                  "48",
                  "49",
                  "50",
                  "51",
                  "52",
                  "53",
                  "54",
                  "55",
                  "56",
                  "57",
                  "58",
                  "59",
                  "60",
                  "61",
                  "62",
                  "63",
                  "67",
                  "69",
                  "70",
                  "71",
                  "72",
                  "73",
                ];
            }
          },
        },
        {
          key: "handleData",
          value: function (e) {
            if (!e || !e.code || !e.kv) return {};
            if (/^z_/.test(e.code)) return this.handleTransDebt(e);
            var t = this.options,
              a = t.adapterType,
              s = t.needProcess,
              r = j.splitSymbol(e.code),
              i = r.market,
              n = r.scode,
              c = {};
            return (
              j.isHSMarket(i) || j.isCSIndex(i)
                ? (c = this.adapter.adaptHS(e.kv))
                : j.isBJMarket(i) || j.isNQMarket(i)
                ? (c = this.adapter.adaptBJ(e.kv))
                : j.isHSPlate(i)
                ? (c = this.adapter.adaptPT(e.kv))
                : j.isHKMarket(i)
                ? (c = this.adapter.adaptHK(e.kv))
                : j.isUSMarket(i)
                ? (c = this.adapter.adaptUS(e.kv))
                : j.isUKMarket(i)
                ? (c = this.adapter.adaptUK(e.kv))
                : j.isFTIndex(i)
                ? (c = this.adapter.adaptFT(e.kv))
                : j.isFutures(i)
                ? (c = j.isHDFutures(i)
                    ? this.adapter.adaptHD(e.kv)
                    : this.adapter.adaptFU(e.kv))
                : j.isForex(i)
                ? (c = this.adapter.adaptFX(e.kv))
                : j.isSPMarket(i)
                ? (c = this.adapter.adaptSP(e.kv))
                : j.isBCCurrency(i) && (c = this.adapter.adaptBC(e.kv)),
              (c.websocket = !0),
              "stockinfo" === a
                ? ((c.secu_info.market = i),
                  (c.secu_quote.market = i),
                  (c.secu_info.symbol = e.code),
                  (c.secu_info.stocktype = j.typeMap.get(e.code)),
                  !c.secu_info.stocktype &&
                    j.isHKMarket(i) &&
                    q.has(n) &&
                    (c.secu_info.stocktype = "ZS"),
                  s ? H(c) : c)
                : c
            );
          },
        },
        {
          key: "handleTransDebt",
          value: function (e) {
            var t = this.options,
              a = t.adapterType,
              s = t.needProcess,
              r = this.adapter.adaptTransDebt(e.kv);
            return "stockinfo" === a && s ? w(r) : r;
          },
        },
      ]),
      e
    );
  })(),
  I = new ((function () {
    function e() {
      i(this, e),
        z(this, "options", {}),
        z(this, "retryCount", 0),
        z(this, "online", !0),
        z(this, "pullTime", 5e3),
        z(this, "stockList", {}),
        (this.options = {}),
        (this.retryCount = 0),
        (this.online = !0),
        (this.pullTime = 5e3),
        (this.stockList = {}),
        (this.marketState = {}),
        (this.alwaysPullStock = []);
    }
    return (
      n(e, [
        {
          key: "changeOptions",
          value: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            "quote_lv2_qt_detail" !== e.topic &&
              ((this.options = e),
              t && (this.websocket = t),
              this.isStopEnsure() && this.destroy(),
              this.getMarketStatus(),
              this.ensureMarketStatus(),
              this.getQTs(e.stockList),
              this.ensureData());
          },
        },
        {
          key: "isStopEnsure",
          value: function () {
            var e = this.options || {},
              t = e.topic,
              a = e.tag,
              s = void 0 === a ? [] : a,
              r = e.stockList,
              i = void 0 === r ? [] : r;
            return (
              "quote_qt" === t &&
              !s.length &&
              1 === i.length &&
              "hk00700" === i[0]
            );
          },
        },
        {
          key: "changeStockList",
          value: function () {
            var e = this,
              t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
            Array.isArray(t) &&
              0 !== t.length &&
              ((this.options.stockList = t),
              Object.keys(this.stockList).map(function (a) {
                t.includes(a) || delete e.stockList[a];
              }),
              this.getMarketStatus(),
              this.getQTs(t),
              this.ensureData());
          },
        },
        {
          key: "ensureMarketStatus",
          value: function () {
            var e = this;
            clearInterval(this.ensureMarketInterval),
              (this.ensureMarketInterval = setInterval(function () {
                e.getMarketStatus();
              }, 3e4));
          },
        },
        {
          key: "updateStockByQT",
          value: function (e) {
            var t = this,
              a = e || {},
              s = a.topic,
              r = a.topicDataJson;
            if (["quote_qt"].includes(s)) {
              var i = r.qt || [];
              Array.isArray(i) &&
                i.map(function (e) {
                  var a,
                    s = e || {},
                    r = s.code,
                    i = s.kv,
                    n = void 0 === i ? {} : i,
                    c = j.splitSymbol(r).market,
                    o =
                      n[30] ||
                      j.formatCurrentTime("YYYYMMDDHHmmss", j.isUSMarket(c));
                  t.stockList[r] = {
                    code: r,
                    updateTime: o
                      .replaceAll(" ", "")
                      .replaceAll(/-/g, "")
                      .replaceAll(/:/g, "")
                      .replaceAll(/\//g, ""),
                    kv: Object.assign(
                      {},
                      null == (a = t.stockList[r]) ? void 0 : a.kv,
                      n,
                      { websocket: !1 }
                    ),
                  };
                });
            }
          },
        },
        {
          key: "ensureData",
          value: function () {
            var e = this;
            clearInterval(this.ensureInterval),
              this.options.ensure &&
                (this.ensureInterval = setInterval(function () {
                  var t = Object.keys(e.stockList).filter(function (t) {
                      var a = j.splitSymbol(t).market,
                        s = j.formatCurrentTime(
                          "YYYYMMDDHHmmss",
                          j.isUSMarket(a)
                        ),
                        r =
                          parseFloat(s) - parseFloat(e.stockList[t].updateTime);
                      return e.options.stockList.includes(t) && r > 5;
                    }),
                    a = e.filterStockByMarketStatus(t);
                  a.length && e.getQTs(a);
                }, this.pullTime));
          },
        },
        {
          key: "getMarketStatus",
          value: function () {
            return (
              (e = this),
              (t = arguments),
              (a = function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                return r().mark(function a() {
                  var s, i, n, o, l, u, d, m, p;
                  return r().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (
                              ((s = e.options),
                              (i = s.StockBridge),
                              (n = s.needMarketStatus),
                              (o = void 0 !== n && n),
                              i)
                            ) {
                              a.next = 3;
                              break;
                            }
                            return a.abrupt("return");
                          case 3:
                            return (
                              (l = t.market),
                              void 0 === l ? "" : l,
                              (u = t.encode),
                              (d = "https://sqt.gtimg.cn/".concat(
                                void 0 === u ? "utf8" : u,
                                "?q=marketStat,globalCommodityStat&fmt=json"
                              )),
                              (a.prev = 4),
                              (a.next = 7),
                              i.request(d, "GET", {}, { forceCallback: !0 })
                            );
                          case 7:
                            if (
                              ((m = a.sent),
                              (p = []),
                              m &&
                                Object.keys(m).map(function (e) {
                                  var t;
                                  (null == (t = m[e]) ? void 0 : t[0]) &&
                                    p.push(m[e][0]);
                                }),
                              p.length)
                            ) {
                              a.next = 11;
                              break;
                            }
                            return a.abrupt("return");
                          case 11:
                            (e.retryCount = 0),
                              (p.join("|").split("|") || [])
                                .map(function (e) {
                                  return e.split("_");
                                })
                                .filter(function (e) {
                                  return [
                                    "NEWHK",
                                    "NEWSH",
                                    "HSZB",
                                    "NEWSZ",
                                    "NEWUS",
                                    "KCB",
                                    "CYB",
                                    "ZQ",
                                    "JW",
                                    "UK",
                                    "DE",
                                    "SGXS",
                                    "EU",
                                    "SGE",
                                  ].includes(e[0]);
                                })
                                .map(function (t) {
                                  var a = c(t, 3),
                                    s = a[0],
                                    r = a[1],
                                    i = a[2];
                                  e.marketState[s] = { state: r, name: i };
                                }),
                              o &&
                                e.websocket &&
                                e.websocket.handleData([
                                  {
                                    topic: "quote_market_status",
                                    data: e.marketState,
                                  },
                                ]),
                              (a.next = 19);
                            break;
                          case 16:
                            (a.prev = 16),
                              (a.t0 = a.catch(4)),
                              (e.retryCount += 1),
                              e.retryCount > 3 && e.destroy(),
                              i.report("hq.base.hq_data_fetch_market_error", {
                                msg: a.t0.message,
                              });
                          case 19:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[4, 16]]
                  );
                })();
              }),
              new Promise(function (s, r) {
                var i = function (e) {
                    try {
                      c(a.next(e));
                    } catch (e) {
                      r(e);
                    }
                  },
                  n = function (e) {
                    try {
                      c(a.throw(e));
                    } catch (e) {
                      r(e);
                    }
                  },
                  c = function (e) {
                    return e.done
                      ? s(e.value)
                      : Promise.resolve(e.value).then(i, n);
                  };
                c((a = a.apply(e, t)).next());
              })
            );
            var e, t, a;
          },
        },
        {
          key: "getTags",
          value: function (e) {
            var t = j.splitSymbol(e),
              a = t.market;
            return j.isHSMarket(a) || j.isCSIndex(a) || j.isBJMarket(a)
              ? [
                  "3",
                  "4",
                  "5",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                  "13",
                  "14",
                  "15",
                  "16",
                  "17",
                  "18",
                  "19",
                  "20",
                  "21",
                  "22",
                  "23",
                  "24",
                  "25",
                  "26",
                  "27",
                  "28",
                  "29",
                  "30",
                  "31",
                  "32",
                  "33",
                  "34",
                  "35",
                  "36",
                  "38",
                  "39",
                  "40",
                  "43",
                  "44",
                  "45",
                  "46",
                  "47",
                  "48",
                  "49",
                  "51",
                  "52",
                  "53",
                  "56",
                  "57",
                  "58",
                  "59",
                  "62",
                  "63",
                  "64",
                  "67",
                  "68",
                  "70",
                  "72",
                  "74",
                  "77",
                  "78",
                  "83",
                  "87",
                ]
              : j.isHKMarket(a)
              ? [
                  "3",
                  "4",
                  "5",
                  "30",
                  "31",
                  "32",
                  "33",
                  "34",
                  "37",
                  "43",
                  "48",
                  "49",
                  "50",
                  "51",
                  "61",
                  "62",
                  "63",
                  "67",
                ]
              : j.isUSMarket(a)
              ? [
                  "3",
                  "4",
                  "5",
                  "7",
                  "8",
                  "30",
                  "31",
                  "32",
                  "33",
                  "34",
                  "36",
                  "37",
                  "38",
                  "39",
                  "40",
                  "41",
                  "43",
                  "44",
                  "45",
                  "47",
                  "48",
                  "49",
                  "51",
                  "52",
                  "54",
                  "55",
                  "60",
                  "64",
                  "65",
                  "66",
                  "67",
                  "68",
                ]
              : void 0;
          },
        },
        {
          key: "filterStockByMarketStatus",
          value: function (e) {
            var t = this;
            return 0 === Object.keys(this.marketState).length
              ? e
              : e.filter(function (e) {
                  var a, s, r, i, n, c, o, l;
                  if (t.alwaysPullStock.includes(e)) return !0;
                  var u = j.splitSymbol(e).market;
                  if (
                    j.isHSMarket(u) ||
                    j.isCSIndex(u) ||
                    j.isBJMarket(u) ||
                    j.isHSPlate(u) ||
                    j.isNQMarket(u)
                  )
                    return [
                      t.marketState.NEWSH.state,
                      t.marketState.NEWSZ.state,
                    ].includes("open");
                  if (j.isHKMarket(u)) {
                    var d =
                      (null ==
                      (s = null == (a = t.stockList[e]) ? void 0 : a.kv)
                        ? void 0
                        : s[63]) || "";
                    return (
                      "open" ===
                        (null == (r = t.marketState.NEWHK)
                          ? void 0
                          : r.state) && j.isIndex(d)
                    );
                  }
                  return j.isUSMarket(u)
                    ? "open" ===
                        (null == (i = t.marketState.NEWUS) ? void 0 : i.state)
                    : j.isUKMarket(u)
                    ? "open" ===
                      (null == (n = t.marketState.UK) ? void 0 : n.state)
                    : "ftDAX30" === e
                    ? "open" ===
                      (null == (c = t.marketState.EU) ? void 0 : c.state)
                    : j.isFutures(u)
                    ? "open" ===
                      (null == (o = t.marketState.SGXS) ? void 0 : o.state)
                    : !j.isSPMarket(u) ||
                      "open" ===
                        (null == (l = t.marketState.SGE) ? void 0 : l.state);
                });
          },
        },
        {
          key: "getQTs",
          value: function () {
            var e = this,
              t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              s = this.options.StockBridge;
            if (s && t.length) {
              var r,
                i = a.getAll,
                n = void 0 === i || i,
                c = a.encode,
                o = void 0 === c ? "utf8" : c,
                u = n ? "" : "s_",
                d = [],
                m = l(t);
              try {
                for (m.s(); !(r = m.n()).done; ) {
                  var p = r.value,
                    k = j.splitSymbol(p),
                    h = k.market,
                    g = k.scode;
                  j.isHKMarket(h)
                    ? d.push("".concat(u, "r_hk").concat(g))
                    : j.isUSMarket(h)
                    ? p.includes(".") &&
                      p === j.hackUSSymbol(p.replace(".", ""))
                      ? d.push("t_".concat(u).concat(p.replace(".", "")))
                      : d.push(
                          "t_"
                            .concat(u, "us")
                            .concat(j.trimScode(g).replace(".", "__"))
                        )
                    : j.isHDFutures(h)
                    ? d.push("r_hd".concat(g))
                    : d.push("".concat(u).concat(p));
                }
              } catch (e) {
                m.e(e);
              } finally {
                m.f();
              }
              var f = "https://sqt.gtimg.cn/"
                .concat(o, "?q=")
                .concat(d.join(","), "&fmt=json&t=")
                .concat(Date.now());
              s.request(f, "GET", {}, { forceCallback: !0 })
                .then(function (a) {
                  (e.retryCount = 0), e.handleQT(t, a);
                })
                .catch(function (t) {
                  (e.retryCount += 1),
                    e.retryCount > 3 && e.destroy(),
                    s.report("hq.base.hq_data_fetch_error", { msg: t.message });
                });
            }
          },
        },
        {
          key: "handleQT",
          value: function () {
            var e = this,
              t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            Object.keys(a).length &&
              t.length &&
              (t.map(function (t) {
                var s,
                  r = j.splitSymbol(t),
                  i = r.market,
                  n = r.scode,
                  c = t;
                if (
                  (j.isHKMarket(i)
                    ? (c = "r_hk".concat(n))
                    : j.isUSMarket(i) &&
                      (c = "t_us".concat(j.trimScode(n).replace(".", ""))),
                  a[c] && Array.isArray(a[c]))
                ) {
                  var o = a[c].reduce(function (e, t, a) {
                    return (
                      t &&
                        (e[a] =
                          a === (j.isForex(i) ? 5 : 30)
                            ? t
                                .replace(/\//g, "")
                                .replace(/-/g, "")
                                .replaceAll(" ", "")
                                .replace(/:/g, "")
                            : t),
                      e
                    );
                  }, {});
                  e.stockList[t] = {
                    code: t,
                    updateTime:
                      (j.isForex(i) ? o[5] : o[30]) ||
                      j.formatCurrentTime("YYYYMMDDHHmmss"),
                    kv: Object.assign(
                      {},
                      null == (s = e.stockList[t]) ? void 0 : s.kv,
                      o
                    ),
                  };
                }
              }),
              this.render(t));
          },
        },
        {
          key: "render",
          value: function (e) {
            var t = this;
            if (this.websocket) {
              var a = [];
              e.map(function (e) {
                var s = t.getTags(e) || [];
                if (t.stockList[e]) {
                  var r = t.stockList[e].kv,
                    i = void 0 === r ? {} : r,
                    n = {
                      topic: "quote_qt",
                      symbol: e,
                      data: Object.assign({}, i),
                    };
                  s.length &&
                    Object.keys(i).map(function (e) {
                      s.includes(e) || delete n.data[e];
                    }),
                    t.websocket &&
                      ((n.data = t.websocket.qtHelper.handleData({
                        code: e,
                        topic: "quote_qt",
                        kv: n.data,
                      })),
                      a.push(n));
                }
              }),
                this.websocket.handleData(a);
            }
          },
        },
        {
          key: "destroy",
          value: function () {
            clearInterval(this.ensureMarketInterval),
              clearInterval(this.ensureInterval),
              (this.stockList = {}),
              (this.marketState = {});
          },
        },
      ]),
      e
    );
  })())(),
  N = (function () {
    function e() {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      i(this, e),
        z(this, "options", {}),
        z(this, "retryCount", 0),
        z(this, "online", !0),
        z(this, "pullMode", !1),
        z(this, "pullTime", 5e3),
        z(this, "isClose", !1);
      var a = t.host || "proxy.finance.qq.com";
      (this.baseUrl = "wss://".concat(a, "/peasy/pgw/push/web")),
        (this.options = t),
        (this.isClose = !1),
        (this.qtHelper = new M(this.options)),
        this.options.enableFallbackPolling && I.changeOptions(t, this);
    }
    return (
      n(e, [
        {
          key: "close",
          value: function () {
            (this.isClose = !0),
              (this.retryCount = 0),
              (this.pullMode = !1),
              clearInterval(this.heartInterval),
              clearInterval(this.ensureInterval),
              clearInterval(this.pullInterval),
              this.options.enableFallbackPolling && I.destroy();
          },
        },
        { key: "send", value: function () {} },
        {
          key: "sendHeartBeat",
          value: function () {
            var e = this;
            clearInterval(this.heartInterval),
              (this.heartInterval = setInterval(function () {
                e.send(
                  JSON.stringify({ cmdId: 103, topic: "", topicDataJson: "" })
                );
              }, 55e3));
          },
        },
        {
          key: "sendMessage",
          value: function () {
            var e = this.options,
              t = e.topic,
              a = e.stockList,
              s = void 0 === a ? [] : a,
              r = this.qtHelper.getTag() || [];
            if (
              0 !== (null == s ? void 0 : s.length) &&
              0 !== (null == r ? void 0 : r.length)
            ) {
              var i = {
                cmdId: 101,
                topic: t,
                topicDataJson: JSON.stringify({
                  subList: [{ code: s || [], tag: r }],
                }),
              };
              this.send(JSON.stringify(i));
            } else this.stopMessage();
          },
        },
        {
          key: "getMessage",
          value: function (e) {
            if (
              e &&
              201 === e.cmdId &&
              (this.ensureData(),
              "quote_qt" === e.topic || "quote_lv2_qt_detail" === e.topic)
            ) {
              var t,
                a = [],
                s = e.topicDataJson.qt,
                r = l(s);
              try {
                for (r.s(); !(t = r.n()).done; ) {
                  var i = t.value;
                  a.push({
                    topic: e.topic,
                    symbol: i.code,
                    data: this.qtHelper.handleData(i),
                  });
                }
              } catch (e) {
                r.e(e);
              } finally {
                r.f();
              }
              this.handleData(a),
                this.options.enableFallbackPolling && I.updateStockByQT(e);
            }
          },
        },
        {
          key: "ensureData",
          value: function () {
            var e = this;
            clearInterval(this.ensureInterval),
              this.options.ensure &&
                (this.ensureInterval = setInterval(function () {
                  e.pull({ ensure: !0 });
                }, 2e4));
          },
        },
        {
          key: "changeOptions",
          value: function (e, t) {
            (this.isClose = !1),
              (this.retryCount = 0),
              (this.options = e),
              (this.qtHelper = new M(this.options)),
              this.options.enableFallbackPolling && I.changeOptions(e, this),
              this.ws
                ? this.sendMessage()
                : (clearInterval(this.heartInterval),
                  clearInterval(this.pullInterval),
                  this.open(t));
          },
        },
        {
          key: "changeStockList",
          value: function (e) {
            this.ws && ((this.options.stockList = e), this.sendMessage()),
              this.options.enableFallbackPolling && I.changeStockList(e);
          },
        },
        {
          key: "stopMessage",
          value: function () {
            var e = {
              cmdId: 101,
              topic: this.options.topic,
              topicDataJson: JSON.stringify({
                subList: [{ code: ["hk00700"], tag: ["99"] }],
              }),
            };
            this.send(JSON.stringify(e)), clearInterval(this.pullInterval);
          },
        },
        {
          key: "changePullTime",
          value: function (e) {
            (this.pullTime = e), this.pullMode && this.switchToPull();
          },
        },
        {
          key: "switchToPull",
          value: function () {
            var e = this;
            (this.pullMode = !0),
              clearInterval(this.pullInterval),
              (this.pullInterval = setInterval(function () {
                e.pull();
              }, this.pullTime));
          },
        },
        { key: "handleData", value: function () {} },
        { key: "pull", value: function () {} },
        { key: "handleError", value: function () {} },
      ]),
      e
    );
  })(),
  C = (function (r) {
    a(o, N);
    var c = s(o);
    function o() {
      var e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        a = arguments.length > 1 ? arguments[1] : void 0;
      return i(this, o), (e = c.call(this, t)).open(a), e;
    }
    return (
      n(o, [
        {
          key: "getUrl",
          value: function () {
            var e,
              t,
              a = this.options.auth || {},
              s = a.openId,
              r = a.token,
              i =
                (null == (t = null == (e = getApp()) ? void 0 : e.globalData)
                  ? void 0
                  : t.APPNAME) || "zxg",
              n = "";
            return (
              "zxg" === i ? (n = "zxg_xcx") : "wzq" === i && (n = "wzqxcx"),
              ""
                .concat(this.baseUrl, "?_appName=")
                .concat(n, "&appid=wx9cf8c670ebd68ce4&check=11&openid=")
                .concat(s, "&fskey=")
                .concat(r)
            );
          },
        },
        {
          key: "open",
          value: function (e) {
            var t = this;
            this.ws ||
              this.isClose ||
              ((this.responsed = !1),
              (this.ws = e({ url: this.getUrl() })),
              this.ws.onOpen(function () {
                (t.responsed = !0),
                  (t.pullMode = !1),
                  (t.retryCount = 0),
                  t.sendMessage(),
                  t.sendHeartBeat(),
                  t.ensureData();
              }),
              this.ws.onMessage(function (e) {
                var a = (null == e ? void 0 : e.data) && JSON.parse(e.data);
                a &&
                  a.topicDataJson &&
                  (a.topicDataJson = JSON.parse(a.topicDataJson)),
                  t.getMessage(a);
              }),
              this.ws.onClose(function (a) {
                (t.ws = null),
                  clearInterval(t.heartInterval),
                  t.isClose ||
                    (1e3 !== a.code &&
                      t.online &&
                      ((t.retryCount += 1),
                      t.retryCount <= 1
                        ? t.open(e)
                        : (clearInterval(t.ensureInterval),
                          t.options.enableFallbackPolling || t.switchToPull(),
                          a &&
                            t.handleError(
                              v(f({}, a), {
                                event_type: "websocket-close-event",
                              })
                            ))));
              }),
              this.ws.onError(function (e) {
                (t.responsed = !0),
                  clearInterval(t.heartInterval),
                  clearInterval(t.ensureInterval),
                  t.online && !t.isClose && t.switchToPull(),
                  t.handleError(e);
              }));
          },
        },
        {
          key: "close",
          value: function () {
            var a;
            e(t(o.prototype), "close", this).call(this),
              null == (a = this.ws) || a.close({ code: 1e3 }),
              (this.ws = null);
          },
        },
        {
          key: "send",
          value: function (e) {
            var t;
            null == (t = this.ws) || t.send({ data: e });
          },
        },
      ]),
      o
    );
  })(),
  P = Object.freeze(
    Object.defineProperty({ __proto__: null, default: C }, Symbol.toStringTag, {
      value: "Module",
    })
  );
(exports.BaseWebSocket = N),
  (exports.MPWebSocket = C),
  (exports.defaultAdapter = b),
  (exports.mp = P),
  (exports.stockInfoAdapter = x),
  (exports.stockInfoFormat = H),
  (exports.transDebtFormat = w);
