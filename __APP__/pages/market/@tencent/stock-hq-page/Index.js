var e = require("../../../../@babel/runtime/helpers/typeof");
require("../../../../@babel/runtime/helpers/Objectvalues"),
  require("../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  i = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  u = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  l = function (e, t) {
    for (var r in t || (t = {})) s.call(t, r) && u(e, r, t[r]);
    if (o) {
      var i,
        a = n(o(t));
      try {
        for (a.s(); !(i = a.n()).done; ) {
          r = i.value;
          c.call(t, r) && u(e, r, t[r]);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
    return e;
  },
  h = function (e, t) {
    return i(e, a(t));
  },
  d = function (e, t, n) {
    return new Promise(function (r, i) {
      var a = function (e) {
          try {
            s(n.next(e));
          } catch (e) {
            i(e);
          }
        },
        o = function (e) {
          try {
            s(n.throw(e));
          } catch (e) {
            i(e);
          }
        },
        s = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(a, o);
        };
      s((n = n.apply(e, t)).next());
    });
  },
  p = require("../../../../common/vendor.js"),
  f = require("../stock-hq-core/utils/storage/local.js"),
  g = require("../../js-cookie/src/js.cookie.js"),
  b = require("../stock-hq-data/index.js"),
  k = require("../stock-crypto-modules-hq/src/config.js");
require("../stock-hq-data/api/hostConfig.js");
var m = require("../stock-hq-core/utils/market.js"),
  T = {};
!(function (e) {
  e.__esModule = !0;
  var t = /^(-|\+)?[\d.]+$/;
  (e.yuan2fen = function (e) {
    return (
      (e = String(e)), t.test(e) ? (100 * parseFloat(e)).toFixed(2) : "0.00"
    );
  }),
    (e.fen2yuan = function (e) {
      return (
        (e = String(e)), t.test(e) ? (parseFloat(e) / 100).toFixed(2) : "0.00"
      );
    }),
    (e.toText = function (e, t, n, r) {
      var i = +e;
      if (isNaN(i)) return e;
      var a = Math.abs(i);
      return (
        (r = r || 1e4),
        (t = void 0 === t ? 2 : t),
        (n = n || ""),
        a < Math.pow(10, 4) || a < r
          ? (i = i.toFixed(t))
          : a >= Math.pow(10, 4) && a < Math.pow(10, 8)
          ? (i = (i / 1e4).toFixed(t) + "万")
          : a >= Math.pow(10, 8) &&
            a < Math.pow(10, 11) &&
            (i = (i / 1e8).toFixed(t) + "亿"),
        i + n
      );
    }),
    (e.toCurrency = function (e, t) {
      (e = String(e) || ""), (t = void 0 === t ? 2 : t);
      var n = /^(\-?)(\d+)(\.\d+)?$/.exec(e);
      if (null === n) return e;
      var r = (null != n && RegExp.$1) || "",
        i = (null != n && RegExp.$2) || "0",
        a = (null != n && RegExp.$3) || ".00",
        o = i.length,
        s = o > 3 ? o % 3 : 0,
        c = "",
        u = 0 == s ? "" : i.substr(0, s) + ",",
        l = 0;
      a =
        0 == t
          ? ""
          : a.length >= t + 1
          ? a.substr(0, t + 1)
          : (a + new Array(t + 1 - a.length + 1).join("0")).substr(0, t + 1);
      for (var h = s; h < o; h++)
        (c += i.charAt(h)), ++l % 3 == 0 && h < o - 1 && ((c += ","), (l = 0));
      return r + u + c + a;
    }),
    (e.default = {
      fen2yuan: e.fen2yuan,
      yuan2fen: e.yuan2fen,
      toText: e.toText,
      toCurrency: e.toCurrency,
    });
})(T);
var v = p.getDefaultExportFromCjs(T),
  w = "hq/us/autoswitch";
p.map(
  [
    ["1", "000001"],
    ["0", "399001"],
    ["0", "399006"],
    ["1", "000688"],
    ["1", "000016"],
    ["1", "000300"],
    ["0", "399905"],
    ["1", "000852"],
    ["0", "399005"],
    ["2", "HSI"],
    ["2", "HSCEI"],
    ["2", "HSCCI"],
    ["2", "HSTECH"],
    ["3", "DJI"],
    ["3", "IXIC"],
    ["3", "INX"],
    ["3", "NDX"],
  ],
  function (e) {
    return e.join("");
  }
);
var y = {
    HS: {
      list: [
        {
          name: "涨幅榜",
          rank: "1",
          board: "RankingTagMain",
          ranking: "advance",
          title: "涨幅",
          columnType: "1",
          column: "zdf",
          pe: "%",
          zxjcolor: !0,
        },
        {
          name: "跌幅榜",
          rank: "2",
          board: "RankingTagMain",
          ranking: "decline",
          title: "跌幅",
          columnType: "1",
          column: "zdf",
          pe: "%",
          zxjcolor: !0,
        },
        {
          name: "换手榜",
          rank: "3",
          board: "RankingTagMain",
          ranking: "exchange",
          title: "换手率",
          columnType: "2",
          column: "hsl",
          pe: "%",
          zxjcolor: !0,
        },
        {
          name: "成交额",
          rank: "cje",
          board: "RankingTagMain",
          ranking: "amount",
          title: "成交额",
          columnType: "2",
          column: "cjje",
          pe: "",
          format: v.toText,
          zxjcolor: !0,
        },
        {
          name: "涨速榜",
          rank: "13",
          board: "RankingTagMain",
          ranking: "speed",
          title: "5分钟涨速",
          columnType: "2",
          column: "zs",
          pe: "%",
          zxjcolor: !0,
        },
        {
          name: "净流入",
          rank: "jlr",
          board: "RankingTagMain",
          ranking: "netmainin",
          title: "主力净流入",
          columnType: "2",
          column: "netmainin",
          pe: "",
          format: v.toText,
          zxjcolor: !0,
          valuecolor: !0,
        },
        {
          name: "振幅榜",
          rank: "zf",
          board: "RankingTagMain",
          ranking: "amplitude",
          title: "振幅",
          columnType: "2",
          column: "zf",
          pe: "%",
          zxjcolor: !0,
        },
        {
          name: "量比榜",
          rank: "11",
          board: "RankingTagMain",
          ranking: "volratio",
          title: "量比",
          columnType: "2",
          column: "lb",
          pe: "",
          zxjcolor: !0,
        },
      ],
      market: "HS",
      industry: "200",
      concept: "201",
      region: "202",
      hotPlate: "203",
      hs_etf: "hs_etf",
    },
    HK: {
      market: "HK",
      industry: "400",
      concept: "401",
      list: [
        {
          name: "主板涨幅榜",
          rank: "11",
          board: "RankingTagMain",
          ranking: "advance",
          title: "涨幅",
          columnType: "1",
          column: "zdf",
          pe: "%",
        },
        {
          name: "主板跌幅榜",
          rank: "12",
          board: "RankingTagMain",
          ranking: "decline",
          title: "跌幅",
          columnType: "1",
          column: "zdf",
          pe: "%",
        },
        {
          name: "主板成交额榜",
          rank: "15",
          board: "RankingTagMain",
          ranking: "amount",
          title: "成交额",
          columnType: "2",
          column: "cjje",
          pe: "",
          format: v.toText,
        },
        {
          name: "创业板涨幅榜",
          rank: "21",
          board: "RankingTagGEM",
          ranking: "advance",
          title: "涨幅",
          columnType: "1",
          column: "zdf",
          pe: "%",
        },
        {
          name: "创业板跌幅榜",
          rank: "22",
          board: "RankingTagGEM",
          ranking: "decline",
          title: "跌幅",
          columnType: "1",
          column: "zdf",
          pe: "%",
        },
        {
          name: "创业板成交额榜",
          rank: "25",
          board: "RankingTagGEM",
          ranking: "amount",
          title: "成交额",
          columnType: "2",
          column: "cjje",
          pe: "",
          format: v.toText,
        },
      ],
    },
    US: {
      market: "US",
      industry: "601",
      etf: "600",
      list: [
        {
          name: "中概股",
          rank: "51",
          board: "RankingTagChina",
          ranking: "advance",
          title: "涨幅",
          columnType: "1",
          column: "zdf",
          pe: "%",
        },
        {
          name: "美股科技股",
          rank: "71",
          board: "RankingTagTech",
          ranking: "advance",
          title: "涨幅",
          columnType: "1",
          column: "zdf",
          pe: "%",
        },
      ],
    },
  },
  q = {
    tabs: [
      { name: "A股" },
      { name: "板块" },
      { name: "ETF" },
      { name: "可转债" },
      { name: "创业板" },
      { name: "科创板" },
      { name: "港股" },
      { name: "美股" },
    ],
    tabsRef: [
      "hsMarket",
      "plate",
      "etfMarket",
      "bondMarket",
      "chyBoard",
      "kchBoard",
      "hkMarket",
      "usMarket",
    ],
    tabsVisited: [!0, !1, !1, !1, !1, !1, !1, !1],
    routeQuery: ["a", "plate", "etf", "bond", "chy", "kch", "hk", "us"],
  },
  S = function (e) {
    var t = "",
      n = Object.keys(e).length;
    return (
      Object.keys(e).forEach(function (r, i) {
        t =
          i !== n - 1
            ? "".concat(t).concat(r, "=").concat(e[r], "&")
            : "".concat(t).concat(r, "=").concat(e[r]);
      }),
      t
    );
  };
function _(e) {
  var t = ["fund_inner_reits", "treasury_bond"],
    n = ["今年", "年化"];
  if (!Array.isArray(e)) return [];
  e.map(function (e, r) {
    var i,
      a = (function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
          r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          a = parseFloat(e),
          o = "";
        if (isNaN(a)) a = "--";
        else {
          if (i) {
            var s = Math.pow(10, t);
            a = parseInt(a * s, 10) / s;
          }
          t && (a = a.toFixed(t)), r && a > 0 && (o = "+");
        }
        return "".concat(o).concat(a).concat(n);
      })(e[t[r]], 1, "", !1, !0);
    a > 0 &&
      ((e.tag = "".concat(n[r]).concat(a, "%")),
      "treasury_bond" === t[r] &&
        (null == (i = e.sc) ? void 0 : i.length) &&
        (e.query = { market: e.sc }));
  });
}
var E,
  x = {};
(E = x),
  Object.defineProperty(E, "__esModule", { value: !0 }),
  (E.SIGN_KEY = void 0),
  (E.SIGN_KEY = {
    stock: "EE530E7508AB5831978E6006381898E9",
    mpweapp: "B833418A24C7EC2E5A534348665B9B0C",
    mpwzq: "98FA47ACCCEC0A3C5A4768991E1D9113",
    h5: "98FA47ACCCEC0A3C5A4768991E1D9113",
    df: "34C0A93DF3AD73D4307E468317380146",
    zxgh5: "9c8e247b438b7d0ae845f9931810a387",
    wzq_snp: "15b3a7844a6d44115f4b52c8aa3cc36e",
    wzqxcx: "68cae00479351606086e78d754042961",
    mini_h5: "cedc068249f7041d474b638038b13b8f",
    light_h5: "5b566bb10c9999cf25c8e53127c075f4",
    i_ask: "E3164D66F12E3A29A8C08530215B4FD8",
    xuanji: "cf1f3fd583d54b656f67bf2ee4e939fa",
    wzq_analyse: "01d16d0a381fbda39775faa1dff16446",
    GUOSEN: "15c752a9e8b7d04d638ad229cbe084e2",
    ZHONGXINJIANTOU: "c65bb114387a9315e9ec0cf2764884d9",
    DAFENG: "9fbf6158eca46d1fe6eeb487abf9ce6b",
  }),
  (E.default = E.SIGN_KEY);
var I = function () {
    var e = "wzq",
      t = x.SIGN_KEY.wzq_snp,
      n = Math.floor(Math.random() * Math.floor(1e4)),
      r = e + t + n;
    return (
      new p.md5Module().update(r).digest("hex").toLowerCase(),
      {
        zappid: e,
        sign: r,
        nonce: n,
        queryStr: "zappid=".concat(e, "&sign=").concat(r, "&nonce=").concat(n),
      }
    );
  },
  z = null,
  A = {
    oem: p.API_HOST_ENUM.PROXY_QQ,
    mini: p.API_HOST_ENUM.PROXY_QQ,
    wzq: p.API_HOST_ENUM.PROXY_QQ,
    mp: p.API_HOST_ENUM.PROXY_QQ,
  },
  M = { headers: { "Content-Type": "application/json" } };
function N(e) {
  return p.getApiFullUrl("cgi/cgi-bin/rank/fund/getList", e);
}
var R = {
    getMarketData: function (e, t, n) {
      if (
        (z ||
          (z = new b.MarketApi(function (e) {
            return n.request(e, "GET");
          })),
        t)
      ) {
        var r = t.offset,
          i = t.count,
          a = t.rank_type,
          o = t.level2,
          s = g.cookie.get("wzq_qluin"),
          c = g.cookie.get("wzq_qlskey");
        return z.getMarketData({
          market: e,
          offset: r,
          count: i,
          rank_type: a,
          level2: o,
          openid: s,
          fskey: c,
        });
      }
      return z.getMarketData({ market: e });
    },
    getStockRank: function (e, t, n) {
      if (
        (z ||
          (z = new b.MarketApi(function (e) {
            return n.request(e, "GET");
          })),
        t)
      ) {
        var r = t.offset,
          i = t.count,
          a = t.rank_type,
          o = t.rankOnly;
        return z.getMarketData({
          market: e,
          rankOnly: o,
          offset: r,
          count: i,
          rank_type: a,
        });
      }
      return z.getMarketData({ market: e, rankOnly: !0 });
    },
    getMarketInfo: function (e, t) {
      var n = p.getApiFullUrl(
          "snp/news/promotionBySymbol",
          p.API_HOST_ENUM.SNP
        ),
        r = {
          symbol: { HS: "sh000001", HK: "hkHSI", US: "us.IXIC" }[t],
          appid: "wzq",
          openid: g.cookie.get("wzq_qluin"),
          fskey: g.cookie.get("wzq_qlskey"),
          access_token: g.cookie.get("wzq_qlskey"),
          check: 12,
        };
      return e.request(n, "POST", r);
    },
    getDailyRead: function (e) {
      var t = p.getApiFullUrl(
        "ifzqgtimg/appstock/news/newsInfo/getNewsIndex",
        A[e.ENV]
      );
      return e.request(t, "GET", {
        column_id: "tzbd",
        filter: 0,
        reserve: 135,
      });
    },
    getOperationCard: function (e, t) {
      var n = I(),
        r = {
          openid: e.getCookie("wzq_qluin"),
          appid: "wzq",
          check: 11,
          _appver: "10.7",
          zappid: n.zappid,
          sign: n.sign,
          nonce: n.nonce,
          column: "qt",
          account_status: t,
        },
        i = p.getApiFullUrl("snp/news/qtPromotion", p.API_HOST_ENUM.SNP);
      return e.request(i, "GET", r);
    },
    getBondInfo: function () {
      var e =
        "https://proxy.finance.qq.com/cgi/cgi-bin/market/kzz/index?app=".concat(
          k.ORIGIN.mpweapp
        );
      return p.StockBridge.request(e, p.RequestTypeEnum.GET);
    },
    getHSNewStock: function (e) {
      var t = p.getApiFullUrl(
        "ifzq/stock/notice/ipo/search?".concat(
          S({ market: "hs", detail: 1, sgrq: 1 })
        ),
        A[e.ENV]
      );
      return e.request(t);
    },
    getHSNewBond: function () {
      var e = { market: "hs", app: k.ORIGIN.mpweapp },
        t =
          "https://proxy.finance.qq.com/ifzq/stock/notice/NewConvertibleBond/getCalendarList?".concat(
            S(e)
          );
      return p.StockBridge.request(t, p.RequestTypeEnum.GET);
    },
    getHSNewStockPurchase: function (e) {
      var t = p.getApiFullUrl(
        "ifzqfinance/appstock/app/subNewStock/periodRank?".concat(
          S({
            market: "hs",
            limit: 1,
            page: 1,
            order: "ssrq",
            desc: "desc",
            period: 180,
          })
        ),
        p.API_HOST_ENUM.PROXY_QQ
      );
      return e.request(t, "GET");
    },
    getMarketHSIndex: function () {
      var e =
        "https://proxy.finance.qq.com/cgi/cgi-bin/market/hs/index?app=".concat(
          k.ORIGIN.mpweapp
        );
      return p.StockBridge.request(e, p.RequestTypeEnum.GET);
    },
    getRealTimeHSDapan: function (e) {
      var t = p.getApiFullUrl("cgi/cgi-bin/dapan/index", A[e.ENV]);
      return e.request(t);
    },
    getAgspInfo: function (e) {
      var t = p.getApiFullUrl("ifzqgtimg/appstock/app/dapan/index", A[e.ENV]);
      return e.request(t);
    },
    getHotPlate: function () {
      return d(
        this,
        null,
        t().mark(function e() {
          var n, r, i, a, o, s, c, u, l;
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n =
                        "https://proxy.finance.qq.com/ifzqgtimg/appstock/app/board/index?app=".concat(
                          k.ORIGIN.mpweapp
                        )),
                      (e.prev = 1),
                      (e.next = 4),
                      p.StockBridge.request(n, p.RequestTypeEnum.GET)
                    );
                  case 4:
                    return (
                      (r = e.sent),
                      (i = (null == r ? void 0 : r.data) || {}),
                      (a = i.fundflow),
                      (o = void 0 === a ? {} : a),
                      (s = i.north_hot_plate),
                      (c = void 0 === s ? {} : s),
                      (u = i.rank),
                      (l = (function (e) {
                        var t = { industry: {}, concept: {}, region: {} },
                          n = ["plate", "concept", "area"];
                        return (
                          Object.keys(t).map(function (r, i) {
                            var a = n[i];
                            [
                              { field: "zdfToday", mappingField: "zdf" },
                              { field: "zdfFiveDay", mappingField: "zdf5" },
                              { field: "zdfTwentyDay", mappingField: "zdf20" },
                              { field: "zdfSixtyDay", mappingField: "zdf60" },
                              {
                                field: "zdfFiftyTwoWeek",
                                mappingField: "zdfW52",
                              },
                              { field: "zdfYear", mappingField: "zdfY" },
                              { field: "speed", mappingField: "zs" },
                              { field: "volratio", mappingField: "lb" },
                              { field: "exchange", mappingField: "hsl" },
                            ].map(function (n, i) {
                              var o = n.field,
                                s = n.mappingField,
                                c = ""
                                  .concat(a)
                                  .concat(0 === i ? "" : "_".concat(s));
                              t[r][o] = (function () {
                                var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                      ? arguments[0]
                                      : [],
                                  t =
                                    arguments.length > 1
                                      ? arguments[1]
                                      : void 0,
                                  n = [];
                                if (["zs", "lb", "hsl"].includes(t)) {
                                  var r = {
                                    zs: "涨速",
                                    lb: "量比",
                                    hsl: "换手",
                                  };
                                  e.map(function (e) {
                                    var i = e.bd_name,
                                      a = e.bd_code,
                                      o = e.bd_zdf,
                                      s = e["bd_".concat(t)];
                                    n.push({
                                      name: i,
                                      code: a,
                                      list: [
                                        {
                                          key: r[t],
                                          val:
                                            "zs" === t && s > 0
                                              ? "+".concat(s)
                                              : s,
                                        },
                                        {
                                          key: "涨幅",
                                          val: o > 0 ? "+".concat(o) : o,
                                        },
                                      ],
                                    });
                                  });
                                } else
                                  e.map(function (e) {
                                    var r = e.bd_name,
                                      i = e.bd_code,
                                      a = e.nzg_name,
                                      o = e.nzg_zxj,
                                      s = e.nzg_zdf,
                                      c = e["bd_".concat(t)];
                                    n.push({
                                      name: r,
                                      code: i,
                                      zdf: c > 0 ? "+".concat(c) : c,
                                      fn: a,
                                      fzjcj: o,
                                      fzdf: s > 0 ? "+".concat(s) : s,
                                    });
                                  });
                                return n;
                              })(e[c], s);
                            });
                          }),
                          t
                        );
                      })(void 0 === u ? {} : u)),
                      e.abrupt("return", {
                        fundflow: o,
                        northHotPlate: c,
                        rank: l,
                      })
                    );
                  case 16:
                    return (
                      (e.prev = 16), (e.t0 = e.catch(1)), e.abrupt("return", {})
                    );
                  case 19:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[1, 16]]
          );
        })
      );
    },
    getHotETF: function (e) {
      var t = p.getApiFullUrl("cgi/cgi-bin/market/wzq/etf", A[e.ENV]);
      return e.request(t);
    },
    getPopularETF: function (e, t) {
      return e.request(N(A[e.ENV]), "POST", t);
    },
    getETFRank: function (e) {
      return d(
        this,
        null,
        t().mark(function n() {
          var r, i, a, o, s, c, u, l, h, d, f, g;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (a = p.getApiFullUrl(
                        "xj_hot_etf_list.fcgi",
                        p.API_HOST_ENUM.BISHENG
                      )),
                      (t.prev = 1),
                      (t.next = 4),
                      e.request(a, "POST", {
                        source: "xj",
                        sign: "8350931eacba7d302ac1dc3a4d650d1c",
                      })
                    );
                  case 4:
                    return (
                      (o = t.sent),
                      (s =
                        (null == (r = o.hot_etf_list) ? void 0 : r.zdf_list) ||
                        {}),
                      (c = s.plate_list),
                      (u = void 0 === c ? [] : c),
                      (l = s.index_list),
                      (h = void 0 === l ? [] : l),
                      (d =
                        (null == (i = o.hot_etf_list)
                          ? void 0
                          : i.zljlr_list) || {}),
                      (f = d.plate_list),
                      (g = void 0 === f ? [] : f),
                      t.abrupt(
                        "return",
                        (g.forEach(function (e) {
                          var t;
                          null == (t = null == e ? void 0 : e.relevant_funds) ||
                            t.splice(1);
                        }),
                        { indexRankList: h, themeRankList: u, fundFlowList: g })
                      )
                    );
                  case 16:
                    return (
                      (t.prev = 16),
                      (t.t0 = t.catch(1)),
                      t.abrupt("return", {
                        indexRankList: [],
                        themeRankList: [],
                        fundFlowList: [],
                      })
                    );
                  case 19:
                  case "end":
                    return t.stop();
                }
            },
            n,
            null,
            [[1, 16]]
          );
        })
      );
    },
    getMarketStatus: function (e, n) {
      return d(
        this,
        null,
        t().mark(function r() {
          var i;
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (i = p.getApiFullUrl("?q=marketStat", p.API_HOST_ENUM.SQT)),
                    t.abrupt(
                      "return",
                      new Promise(function (t) {
                        e.request(i, p.RequestTypeEnum.GET).then(function (e) {
                          /^v_marketStat/.test(e) && (e = e.split('"')[1]);
                          var r = e.split("|"),
                            i = r[0];
                          i = i.replace(/-/g, "/");
                          var a = {};
                          r.forEach(function (e, t) {
                            if (t > 0) {
                              var n = e.split("_");
                              3 === n.length &&
                                (a[n[0]] = { status: n[1], text: n[2] });
                            }
                          });
                          var o = "";
                          try {
                            (n = n
                              .replace(/^us\.?/, "us")
                              .replace(/(\.[^.]+)$/gi, "")
                              .replace(/\./g, "__")),
                              /^[a-zA-Z]+/.test(n) && (o = n.substring(0, 2));
                          } catch (e) {
                            return void t({ isTradingTime: !1, serverTime: i });
                          }
                          var s = a[o.toUpperCase()];
                          s && s.status && "open" === s.status
                            ? t({ isTradingTime: !0, serverTime: i })
                            : t({ isTradingTime: !1, serverTime: i });
                        });
                      })
                    )
                  );
                case 2:
                case "end":
                  return t.stop();
              }
          }, r);
        })
      );
    },
    getFunctionArea: function (e) {
      return d(
        this,
        null,
        t().mark(function n() {
          var r, i, a;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.prev = 0),
                      (i = p.getApiFullUrl(
                        "ifzqgtimg/appstock/app/focus/get",
                        A[e.ENV]
                      )),
                      (t.next = 4),
                      e.request(i)
                    );
                  case 4:
                    (a = t.sent),
                      _((r = null == a ? void 0 : a.data)),
                      (t.next = 11);
                    break;
                  case 8:
                    (t.prev = 8), (t.t0 = t.catch(0)), (r = []);
                  case 11:
                    return t.abrupt("return", r);
                  case 12:
                  case "end":
                    return t.stop();
                }
            },
            n,
            null,
            [[0, 8]]
          );
        })
      );
    },
    getChyRank: function (e, t) {
      var n = p.getApiFullUrl("ifzq/appstock/app/MktCyb/index", A[e.ENV]);
      return e.request(n, "GET", t);
    },
    getKchRank: function (e, t) {
      var n = p.getApiFullUrl("ifzq/appstock/app/MktKcb/index", A[e.ENV]);
      return e.request(n, "GET", t);
    },
    getFundList: function (e, t) {
      return e.request("".concat(N(A[e.ENV]), "?").concat(S(t)));
    },
    getPlateList: function (e, t, n, r) {
      var i = p.getApiFullUrl("stockquotation.fcgi", p.API_HOST_ENUM.TENPAY),
        a = {
          plate: t,
          limit: n,
          rank: r,
          _h5ver: "2.0.1",
          action: 1,
          appver: "2.0.1",
          scenes: 15,
        };
      return e.request(i, "post", a);
    },
    getPlateListDetail: function (e, n, r) {
      return d(
        this,
        null,
        t().mark(function i() {
          var a, o;
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (a = p.getApiFullUrl(
                      "stockquotation.fcgi",
                      p.API_HOST_ENUM.TENPAY
                    )),
                    (o = {
                      code: n,
                      plate: r,
                      _h5ver: "2.0.1",
                      action: 2,
                      appver: "2.0.1",
                      scenes: 15,
                    }),
                    t.abrupt("return", e.request(a, "post", o))
                  );
                case 2:
                case "end":
                  return t.stop();
              }
          }, i);
        })
      );
    },
    getHKNewStock: function (e) {
      var t = p.getApiFullUrl(
        "ifzqgtimg/stock/notice/ipo/search?".concat(
          S({ market: "hk", detail: 1, sgrq: 1 })
        ),
        A[e.ENV]
      );
      return e.request(t);
    },
    getUSNewStock: function (e) {
      var t = p.getApiFullUrl("ifzqgtimg/appstock/us/ipo/getIpoNum", A[e.ENV]);
      return e.request(t);
    },
    getBondRankList: function (e) {
      var t = h(l({}, e || {}), { app: k.ORIGIN.mpweapp }),
        n =
          "https://proxy.finance.qq.com/cgi/cgi-bin/rank/hs/getBondRankList?".concat(
            S(t)
          );
      return p.StockBridge.request(n, p.RequestTypeEnum.GET);
    },
    getQqData: function () {
      var e =
        "https://proxy.finance.qq.com/ifzqfinance/stock/notice/NewConvertibleBond/getBidderList?app=".concat(
          k.ORIGIN.mpweapp
        );
      return p.StockBridge.request(e, p.RequestTypeEnum.GET);
    },
    getETFInfo: function (e) {
      var t = p.getApiFullUrl("cgi/cgi-bin/market/etf/index", A[e.ENV]);
      return e.request(t);
    },
    getETFRankList: function (e, t) {
      var n = p.getApiFullUrl("cgi/cgi-bin/rank/fund/getList", A[e.ENV]);
      return e.request("".concat(n, "?").concat(S(t)), "GET");
    },
    getAdInfo: function () {},
    closeAd: function (e, t) {
      var n = { action: 2, ad_type: "hq_etf", channel: 0, adid: t && t.adid },
        r = p.getApiFullUrl("activity/ad.fcgi", p.API_HOST_ENUM.TENPAY);
      return e.request(r, "POST", n);
    },
    getQuestionnaireData: function (e) {
      var t = { questionnaire_id: 1, check: 11 };
      t =
        "mp" === e.ENV
          ? h(l({}, t), {
              appid: "wx4ffb369b6881ee5e",
              openid: f.sls.getItem("_qluin"),
              fskey: f.sls.getItem("_qlskey"),
            })
          : h(l({}, t), {
              appid: g.cookie.get("wzq_qlappid"),
              openid: g.cookie.get("wzq_qluin"),
              fskey: g.cookie.get("wzq_qlskey"),
              access_token: g.cookie.get("wzq_qlskey"),
            });
      var n = p.getApiFullUrl(
        "cgi/cgi-bin/zxgapi/questionnaires/get",
        A[e.ENV]
      );
      return e.request("".concat(n, "?").concat(S(t)));
    },
    getWjQualification: function (e) {
      var t = { questionnaire_id: 1, check: 11 };
      t =
        "mp" === e.ENV
          ? h(l({}, t), {
              appid: "wx4ffb369b6881ee5e",
              openid: f.sls.getItem("_qluin"),
              fskey: f.sls.getItem("_qlskey"),
              access_token: f.sls.getItem("_qlskey"),
            })
          : h(l({}, t), {
              appid: g.cookie.get("wzq_qlappid"),
              openid: g.cookie.get("wzq_qluin"),
              fskey: g.cookie.get("wzq_qlskey"),
              access_token: g.cookie.get("wzq_qlskey"),
            });
      var n = p.getApiFullUrl(
        "cgi/cgi-bin/zxgapi/questionnaires/qualification/get",
        A[e.ENV]
      );
      return e.request(n, "get", l({}, t));
    },
    commitQuestionnaireData: function (e, t) {
      var n = { check: 11 };
      n =
        "mp" === e.ENV
          ? h(l({}, n), {
              appid: "wx4ffb369b6881ee5e",
              openid: f.sls.getItem("_qluin"),
              fskey: f.sls.getItem("_qlskey"),
              access_token: f.sls.getItem("_qlskey"),
            })
          : h(l({}, n), {
              appid: g.cookie.get("wzq_qlappid"),
              openid: g.cookie.get("wzq_qluin"),
              fskey: g.cookie.get("wzq_qlskey"),
              access_token: g.cookie.get("wzq_qlskey"),
            });
      var r = p.getApiFullUrl(
        "cgi/cgi-bin/zxgapi/questionnaires/commit?".concat(S(n)),
        p.API_HOST_ENUM.PROXY_QQ
      );
      return e.request(r, "POST", t, M);
    },
    getBjRankList: function (e, t) {
      var n = "".concat(
          p.getApiFullUrl(
            "cgi/cgi-bin/rank/hs/getBoardRankList",
            p.API_HOST_ENUM.PROXY_QQ
          )
        ),
        r = t.boardCode,
        i = void 0 === r ? "" : r,
        a = t.sort_type,
        o = void 0 === a ? "" : a,
        s = t.direct,
        c = void 0 === s ? "" : s,
        u = t.count,
        l = void 0 === u ? 40 : u,
        h = t.offset,
        d = void 0 === h ? 0 : h,
        f = ""
          .concat(n, "?board_code=")
          .concat(i, "&sort_type=")
          .concat(o, "&direct=")
          .concat(c, "&count=")
          .concat(l, "&offset=")
          .concat(d, "&_appver=11.11");
      return e.request(f);
    },
    getETFAbtInfo: function (e, t) {
      var n = p.getApiFullUrl("abt_info.fcgi", p.API_HOST_ENUM.TENPAY);
      return e.request(n, "POST", t);
    },
  },
  F = function () {
    var e = p.wx$1.getSystemInfoSync(),
      t = e.platform,
      n = e.version,
      r = e.system;
    return {
      env: { IS_PCWEIXIN: /(windows|mac)/i.test(t) },
      platformVersion: n,
      os: r,
    };
  },
  H = F().os,
  P = null,
  C = "pages/index/market",
  j = {
    name: "HqCard",
    components: {
      Tabbar: function () {
        return "./components/tabs/mp.js";
      },
      MarketCard: function () {
        return "./components/marketcard/index.js".then(function (e) {
          return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWhxLXBhZ2UvY29tcG9uZW50cy9tYXJrZXRjYXJkL2luZGV4LnZ1ZQ;
        });
      },
      Plate: function () {
        return "./components/plate/index.js";
      },
      ChyKch: function () {
        return "./components/chykch/index.js";
      },
      BondRank: function () {
        return "./pages/BondRankPage.js";
      },
      ETFUnionPage: function () {
        return "./pages/ETFUnionPage.js";
      },
      EtfPopCom: function () {
        return "../../../marketSbg/@tencent/stock-hq-etf/components/EtfPopCom.js";
      },
      WzqInfoModal: function () {
        return "./node-modules/@tencent/st-wzqinfo-modal/src/WzqInfoModal.js";
      },
    },
    inject: {
      hqBridge: { default: function () {} },
      hqWSHelper: { default: function () {} },
      isHqShow: {
        default: function () {
          return function () {
            return !1;
          };
        },
      },
      theme: {
        default: function () {
          return "light";
        },
      },
    },
    props: {
      userInfo: { type: Object, default: function () {} },
      helper: { type: Object, default: function () {} },
      wzqTabVer: { type: String, default: "" },
      lct: { type: Boolean, default: !1 },
      isZhonJing: { type: Boolean, default: !1 },
      hkVIP: { type: Boolean, default: !1 },
      queryData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      barHeight: { type: Number, default: 0 },
      titleHeight: { type: Number, default: 44 },
    },
    data: function () {
      return {
        currTab: 0,
        tabs: [],
        tabsRef: [],
        tabsVisited: [],
        tabLoading: !1,
        swiperHeight: 700,
        bodyHeight: "",
        showNum: 0,
        rankLength: 0,
        showCounter: !1,
        isBondTabShow: !1,
        halfClientWidth: 0,
        timer: null,
        tabIntersectionObserver: null,
        isBubbleShow: !1,
        animationUpFlag: !1,
        animationDownFlag: !1,
        showWj: !1,
        wjFirst: !1,
        wjentryShow: !1,
        etfQuery: {},
        env: p.StockBridge.ENV,
        isFirst: !0,
        isSpecifyTab: !1,
        initialWebsocket: !1,
        currIndex: null,
        needPushMarket: "",
        indexRefreshType: "",
        resizeObserver: null,
        routeQuery: null,
        transHeight: 0,
        initETFbanner: "0",
        etfRankTab: "",
        etfRankSubTab: "",
        HS_INDEX: [],
        HK_INDEX: [],
        US_INDEX: [],
        showETFPop: !1,
        etfAnimationUpFlag: !1,
        etfAnimationDownFlag: !1,
        etfAbtReport: {},
        rankFoldArr: [],
        showNumArr: [],
        isSwitchByClick: !1,
        isClickMoreSwitchTab: !1,
        showTipModal: !1,
        tipModalConfig: {},
      };
    },
    computed: {
      isPc: function () {
        var e, t;
        return (
          ("mp" === this.hqBridge.ENV &&
            (null ==
            (t =
              null == (e = null == getApp ? void 0 : getApp().globalData.detect)
                ? void 0
                : e.env)
              ? void 0
              : t.IS_PCWEIXIN)) ||
          !1
        );
      },
      swiper: function () {
        var e, t;
        return null == (t = null == (e = this.$refs.hqSwiper) ? void 0 : e.$el)
          ? void 0
          : t.swiper;
      },
      isWzq: function () {
        return "wzq" === p.StockBridge.ENV;
      },
      currentTab: function () {
        var e;
        return null == (e = this.getQueryData) ? void 0 : e.currentTab;
      },
      hqShowStatus: function () {
        var e;
        return null == (e = this.isHqShow) ? void 0 : e.call(this);
      },
      getQueryData: function () {
        var e;
        return this.isWzq
          ? null == (e = this.$route)
            ? void 0
            : e.query
          : this.queryData;
      },
    },
    watch: {
      hqShowStatus: function (e) {
        e
          ? (this.handleActivated(), this.getWjEntry())
          : (this.handleDeactivated(), (this.showETFPop = !1));
      },
    },
    created: function () {
      var e = this;
      this.detailApi ||
        (this.detailApi = new b.DetailApi(function (e) {
          return p.StockBridge.request(e, "GET");
        })),
        this.init(),
        this.$nextTick(function () {
          "etf" === e.currentTab && e.showETFBoard();
        }),
        this.$emit("pageInit");
    },
    mounted: function () {
      var e;
      this.isWzq || f.sessionStorage.removeItem(w),
        !this.isSpecifyTab && this.checkUSStatus(),
        this.getWjEntry(),
        this.isWzq
          ? this.handleActivated()
          : p.StockBridge.report(
              "hq.market.".concat(
                null == (e = this.tabsRef[this.currTab])
                  ? void 0
                  : e.toLowerCase(),
                "_top_tab_brow"
              )
            );
    },
    activated: function () {
      return d(
        this,
        null,
        t().mark(function e() {
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    this.handleActivated(), this.getWjEntry();
                  case 1:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this
          );
        })
      );
    },
    deactivated: function () {
      this.handleDeactivated(),
        this.tabIntersectionObserver &&
          this.tabIntersectionObserver.disconnect(),
        (this.showETFPop = !1);
    },
    destroyed: function () {
      this.timer && clearTimeout(this.timer),
        (this.timer = null),
        this.destoryResource(),
        this.eliminateResource(),
        (this.detailApi = null);
    },
    methods: {
      scroll: function (e) {
        this.$emit("scroll", e);
      },
      toggleRank: function () {
        var e = this,
          t = this.currTab,
          n = !this.rankFoldArr[t];
        this.$set(this.rankFoldArr, this.currTab, n),
          this.debounceStorage ||
            (this.debounceStorage = setTimeout(function () {
              p.StockBridge.setStorage("rank-fold-status", e.rankFoldArr),
                (e.debounceStorage = null);
            }, 200));
        var r = n ? "fold" : "open",
          i = this.tabsRef[t].toLowerCase();
        p.StockBridge.report("hq.market.".concat(i, "_").concat(r, "_click"));
      },
      onPullingDown: function (e) {
        this.$emit("onPullingDown", e);
      },
      constructResource: function () {
        this.observeSwiperHeight();
      },
      eliminateResource: function () {
        var e, t;
        null ==
          (t = null == (e = this.resizeObserver) ? void 0 : e.disconnect) ||
          t.call(e),
          (this.resizeObserver = null);
      },
      toggleShowTeachPop: function () {
        (this.showTipModal = !0),
          (this.tipModalConfig = {
            title: "指数过滤",
            content: [
              {
                type: "text",
                text: "市场上存在多只ETF跟踪同一指数，这些ETF的走势相近。勾选“指数过滤”后，榜单内跟踪相同指数的ETF仅展示一只。",
              },
            ],
            cancelBtn: "我知道了",
          });
      },
      showETFBoard: function () {
        return d(
          this,
          null,
          t().mark(function e() {
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (this.etfAnimationUpFlag = !0),
                        (this.etfAnimationDownFlag = !1),
                        (e.next = 3),
                        f.sls.getItem("etf-teach-ispoped")
                      );
                    case 3:
                      if (!e.sent) {
                        e.next = 7;
                        break;
                      }
                      (this.showETFPop = !1), (e.next = 8);
                      break;
                    case 7:
                      (this.showETFPop = !0),
                        f.sls.setItem("etf-teach-ispoped", !0),
                        p.StockBridge.report("hq.etfpage.teach_guide_show");
                    case 8:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      closeETFBoard: function () {
        var e = this;
        (this.etfAnimationUpFlag = !0),
          (this.etfAnimationUpFlag = !1),
          p.StockBridge.report("hq.etfpage.teach_guide_close"),
          setTimeout(function () {
            e.showETFPop = !1;
          }, 250);
      },
      getWjEntry: function () {
        return d(
          this,
          null,
          t().mark(function e() {
            var n, r, i;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((e.prev = 0),
                        !(r =
                          +(null == (n = this.userInfo)
                            ? void 0
                            : n.user_new_days) <= 14))
                      ) {
                        e.next = 7;
                        break;
                      }
                      return (e.next = 5), R.getWjQualification(p.StockBridge);
                    case 5:
                      (i = e.sent) &&
                        0 == +i.code &&
                        ((this.wjentryShow = r && i.hasQualification),
                        this.wjentryShow &&
                          p.StockBridge.report(
                            "hq.choose_hq.hsjtab.wj_entry_show"
                          ));
                    case 7:
                      e.next = 11;
                      break;
                    case 9:
                      (e.prev = 9), (e.t0 = e.catch(0));
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[0, 9]]
            );
          })
        );
      },
      init: function () {
        var e,
          t = this;
        (this.halfClientWidth =
          (null == (e = null == document ? void 0 : document.documentElement)
            ? void 0
            : e.clientWidth) / 2),
          p.StockBridge.busOn("wzq-yijiandaxin", function (e) {
            t.$emit("yijiandaxin", e);
          }),
          this.setTabs(),
          this.getCurrTab();
      },
      getCurrTab: function () {
        this.handleRouteTab(), this.setTabVisitState();
      },
      handleRouteTab: function () {
        var e = this.getQueryData || {},
          t = e.currentTab,
          n = e.initETFbanner,
          r = e.etfRankTab,
          i = e.etfRankSubTab;
        if (t) {
          this.isSpecifyTab = !0;
          var a = this.routeQuery.findIndex(function (e) {
            return e === t;
          });
          (this.currTab = -1 !== a ? a : 0),
            (this.initETFbanner = n || ""),
            (this.etfRankTab = r || ""),
            (this.etfRankSubTab = i || "");
        }
      },
      setTabVisitState: function () {
        var e = this;
        this.tabsVisited = this.tabsVisited.map(function (t, n) {
          return n === e.currTab;
        });
      },
      stopSwiperScroll: function () {
        this.swiper.allowTouchMove = !1;
      },
      startSwiperScroll: function () {
        this.swiper.allowTouchMove = !0;
      },
      onTabScroll: function (e) {
        this.$emit("onTabScroll", e);
      },
      changeCounterNum: function (e, t, n) {
        var r = this.getTabIndex(e);
        this.getTabsVisited(e) &&
          r === this.currTab &&
          (t && this.$set(this.showNumArr, this.currTab, t),
          (this.rankLength = n));
      },
      setTabs: function () {
        var e = q.tabs,
          t = q.tabsRef,
          n = q.tabsVisited,
          r = q.routeQuery;
        (this.tabs = e),
          (this.tabsRef = t),
          (this.tabsVisited = n),
          (this.routeQuery = r);
        var i = p.StockBridge.getStorage("rank-fold-status");
        (this.rankFoldArr = i || new Array(e.length).fill(!0)),
          (this.showNumArr = new Array(e.length).fill(0));
      },
      getTabIndex: function (e) {
        var t = this.tabsRef.findIndex(function (t) {
          return t === e;
        });
        return (t = -1 !== t ? t : 0);
      },
      getTabsRef: function (e) {
        return this.tabsRef[this.getTabIndex(e)];
      },
      getTabsVisited: function (e) {
        return this.tabsVisited[this.getTabIndex(e)];
      },
      handleActivated: function () {
        var e = this;
        this.$nextTick(function () {
          e.setSwiperHeight(e.transHeight);
        }),
          this.isWzq && this.constructResource(),
          this.isTabOrLabelChange() ||
            (this.tabActivated(),
            this.initNewWebsocket(),
            this.scrollIntoView());
      },
      isTabOrLabelChange: function () {
        var e = (this.getQueryData || {}).currentTab;
        if (!e) return !1;
        var t = this.routeQuery.findIndex(function (t) {
            return t === e;
          }),
          n = -1 !== t && this.currTab !== t;
        return n && this.switchTab(t), n;
      },
      handleDeactivated: function () {
        this.tabDeactivated(), this.destoryResource(), this.eliminateResource();
      },
      destoryResource: function () {
        var e;
        (this.initialWebsocket = !1),
          (this.indexRefreshType = ""),
          null == (e = null == P ? void 0 : P.close) || e.call(P),
          this.pcReleasePush();
      },
      pcReleasePush: function () {
        this.isPc &&
          P &&
          (this.hqWSHelper.addToGlobalWS(C, P),
          this.hqWSHelper.delayToClearWSByPageId(C),
          (P = null));
      },
      initNewWebsocket: function () {
        return d(
          this,
          null,
          t().mark(function e() {
            var n,
              r,
              i,
              a = this;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (0 === this.currTab
                          ? ((this.needPushMarket = "hsMarket"),
                            (this.currIndex = this.HS_INDEX))
                          : 6 === this.currTab
                          ? ((this.needPushMarket = "hkMarket"),
                            (this.currIndex = this.HK_INDEX))
                          : 7 === this.currTab
                          ? ((this.needPushMarket = "usMarket"),
                            (this.currIndex = this.US_INDEX))
                          : ((this.needPushMarket = ""),
                            (this.currIndex = null)),
                        this.destoryResource(),
                        !this.currIndex ||
                          !(null == (n = this.currIndex) ? void 0 : n.length))
                      ) {
                        e.next = 21;
                        break;
                      }
                      if (!this.initialWebsocket) {
                        e.next = 5;
                        break;
                      }
                      P.changeStockList(this.currIndex), (e.next = 21);
                      break;
                    case 5:
                      if (
                        ((this.initialWebsocket = !0),
                        (i = {
                          topic: "quote_qt",
                          tag: ["0", "1", "2", "3", "31", "32"],
                          stockList: this.currIndex,
                          ensure: !0,
                          StockBridge: p.StockBridge,
                          enableFallbackPolling: !0,
                        }),
                        P &&
                          this.isPc &&
                          !this.isWzq &&
                          (this.hqWSHelper.addToGlobalWS(C, P), (P = null)),
                        !this.isWzq)
                      ) {
                        e.next = 12;
                        break;
                      }
                      (e.t0 = new b.HQWebSocket(
                        l(
                          {
                            auth: {
                              appName: "wzq",
                              openId: p.StockBridge.getCookie("wzq_qluin"),
                              token: p.StockBridge.getCookie("wzq_qlskey"),
                            },
                          },
                          i
                        )
                      )),
                        (e.next = 18);
                      break;
                    case 12:
                      return (
                        (e.next = 14),
                        null == (r = this.hqWSHelper)
                          ? void 0
                          : r.getInstance(i, !this.isPc)
                      );
                    case 14:
                      if (((e.t1 = e.sent), e.t1)) {
                        e.next = 17;
                        break;
                      }
                      e.t1 = {};
                    case 17:
                      e.t0 = e.t1;
                    case 18:
                      ((P = e.t0).handleData = function () {
                        var e,
                          t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : [];
                        if (
                          ((a.indexRefreshType =
                            "hsMarket" === a.tabsRef[a.currTab] ? "hs" : "us"),
                          Array.isArray(t))
                        ) {
                          var n = a.formatPushData(t);
                          null == (e = a.$refs[a.needPushMarket]) ||
                            e.pushIndex(n);
                        }
                      }),
                        (P.pull = function () {
                          var e, t, n, r;
                          (a.indexRefreshType =
                            "hsMarket" === a.tabsRef[a.currTab] ? "hs" : "us"),
                            "hkMarket" === a.tabsRef[a.currTab] &&
                              (null ==
                                (t =
                                  null == (e = a.$refs.hkMarket)
                                    ? void 0
                                    : e.pullIndex) ||
                                t.call(e)),
                            "usMarket" === a.tabsRef[a.currTab] &&
                              (null ==
                                (r =
                                  null == (n = a.$refs.usMarket)
                                    ? void 0
                                    : n.pullIndex) ||
                                r.call(n));
                        });
                    case 21:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      formatPushData: function (e) {
        var t = { 3: "price", 31: "zde", 32: "zdf" };
        return (
          e.map(function (e) {
            var n = e.data,
              r = e.topic;
            if (["quote_qt", "quote_lv2_qt_detail"].includes(r)) {
              var i = {};
              Object.keys(n).map(function (e) {
                var r,
                  a = t[e];
                a &&
                  ((i[a] = n[e]),
                  ["zde", "zdf"].includes(a) &&
                    (i[a] = ""
                      .concat(
                        1 !==
                          (function (e) {
                            return "0.00" == (e = "".concat(e)) ||
                              "0" === e ||
                              "" === e ||
                              "--" === e
                              ? 0
                              : e.startsWith("-")
                              ? -1
                              : 1;
                          })((r = "".concat((r = i[a])))) || r.startsWith("+")
                          ? ""
                          : "+"
                      )
                      .concat(r)));
              }),
                (e.data = i);
            }
          }),
          e
        );
      },
      observeSwiperHeight: function () {
        var e = this,
          t = window.ResizeObserver,
          n = document.body;
        !this.resizeObserver &&
          t &&
          n &&
          ((this.resizeObserver = new t(function () {
            var t;
            null == (t = e.setSwiperHeight) || t.call(e, e.transHeight);
          })),
          this.resizeObserver.observe(n));
      },
      mpSetSwiperHeight: function (e) {
        var t = this,
          n = 0;
        if (!n) {
          var r =
            (p.wx$1.getWindowInfo && p.wx$1.getWindowInfo()) ||
            p.wx$1.getSystemInfoSync();
          n = r.windowHeight;
        }
        e && (n = e);
        try {
          p.wx$1
            .createSelectorQuery()
            .in(this)
            .select(".slide-header")
            .boundingClientRect()
            .exec(function (e) {
              var r = 0;
              (null == e ? void 0 : e[0]) && (r = e[0].bottom);
              var i = n - r + t.titleHeight;
              t.swiperHeight = i;
            });
        } catch (e) {}
      },
      setSwiperHeight: function () {
        var e,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        if (
          (p.StockBridge.ENV === p.EnvTypeEnum.MP && this.mpSetSwiperHeight(t),
          this.isWzq)
        ) {
          this.transHeight = t || 0;
          var n = document.querySelectorAll("#app-nav"),
            r = document.querySelectorAll("#search-bar"),
            i = document.querySelectorAll(".main-tab-area"),
            a = (n[1] && n[1].offsetHeight) || (n[0] && n[0].offsetHeight) || 0,
            o = (r[0] && r[0].offsetHeight) || 0,
            s = (i[1] && i[1].offsetHeight) || (i[0] && i[0].offsetHeight) || 0,
            c = null == (e = this.$refs) ? void 0 : e.hqHeader;
          c &&
            ((this.bodyHeight && !H.ios) ||
              (this.bodyHeight = document.documentElement.clientHeight),
            (this.swiperHeight = this.bodyHeight - s - c.offsetHeight - a - o));
        }
      },
      switchTab: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (this.isSwitchByClick = !0),
          (this.isClickMoreSwitchTab = t),
          this.tabDeactivated(!0),
          (this.currTab = e),
          this.setSwiperHeight(),
          this.isWzq && this.forceH5HqSwiperToIndex(e);
      },
      forceH5HqSwiperToIndex: function (e) {
        var t = this,
          n = function () {
            var n,
              r,
              i = t.$refs.hqSwiper,
              a =
                (null == (n = null == i ? void 0 : i.getSwiperInstance)
                  ? void 0
                  : n.call(i)) ||
                (null == (r = null == i ? void 0 : i.$el) ? void 0 : r.swiper);
            return !(
              !a ||
              a.destroyed ||
              ((a.allowTouchMove = !0), a.slideTo(e, 250), 0)
            );
          };
        this.$nextTick(function () {
          n() || t.$nextTick(n);
        });
      },
      afterSwitchTab: function (e) {
        var t,
          n = (null == e ? void 0 : e.detail) || {},
          r = n.current,
          i = n.source;
        (this.currTab = +r),
          ("touch" === i || this.isSwitchByClick) &&
            (this.tabsVisited[r] ||
              ((this.tabLoading = !0), (this.tabsVisited[r] = !0)),
            this.tabActivated(),
            this.scrollIntoView(),
            this.initNewWebsocket(),
            2 !== r || this.showETFPop || this.showETFBoard(),
            this.isClickMoreSwitchTab ||
              ("touch" !== i && !this.isSwitchByClick) ||
              p.StockBridge.report(
                "hq.market.".concat(
                  null == (t = this.tabsRef[r]) ? void 0 : t.toLowerCase(),
                  "_top_tab_click"
                )
              ),
            (this.isSwitchByClick = !1),
            (this.isClickMoreSwitchTab = !1));
      },
      scrollIntoView: function () {
        var e,
          t,
          n = this;
        if ("undefined" != typeof requestAnimationFrame)
          requestAnimationFrame(function () {
            var e, t;
            try {
              null == (t = null == (e = n.$refs) ? void 0 : e.tabBar) ||
                t.scrollIntoView(n.currTab);
            } catch (e) {}
          });
        else
          try {
            null == (t = null == (e = this.$refs) ? void 0 : e.tabBar) ||
              t.scrollIntoView(this.currTab);
          } catch (e) {}
      },
      tabActivated: function () {
        var e,
          t = this.getCurrTabRef(),
          n = this.$refs[t];
        n && n.tabActivated && n.tabActivated(),
          p.StockBridge.report(
            "hq.market.".concat(
              null == (e = this.tabsRef[this.currTab])
                ? void 0
                : e.toLowerCase(),
              "_top_tab_brow"
            )
          );
      },
      tabDeactivated: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = this.getCurrTabRef(),
          n = this.$refs[t];
        n && n.tabDeactivated && n.tabDeactivated(e);
      },
      getCurrTabRef: function () {
        return this.tabsRef[this.currTab];
      },
      tabLoaded: function (e) {
        var t = this;
        this.tabLoading = !1;
        var n = {
          HS_INDEX: 0 === this.currTab,
          HK_INDEX: 6 === this.currTab,
          US_INDEX: 7 === this.currTab,
        };
        Object.values(n).map(function (r, i) {
          var a;
          r &&
            (null == (a = null == e ? void 0 : e.mlist) ||
              a.map(function (e) {
                var r = m.getSymbol(e.m, e.c);
                t[Object.keys(n)[i]].includes(r) ||
                  t[Object.keys(n)[i]].push(
                    b.utils.isUSMarket(e.m) ? "us.".concat(e.c) : r
                  );
              }),
            t.initNewWebsocket());
        });
      },
      checkUSStatus: function () {
        return d(
          this,
          null,
          t().mark(function e() {
            var n, r, i, a, o, s, c, u, l, h;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((i = f.sessionStorage.getItem(w)),
                        (a = new Date()),
                        (o = ""
                          .concat(a.getFullYear(), "-")
                          .concat(a.getMonth() + 1, "-")
                          .concat(a.getDate())),
                        !i || i !== o)
                      ) {
                        e.next = 6;
                        break;
                      }
                      if (!i || i !== o) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return");
                    case 4:
                      e.next = 14;
                      break;
                    case 6:
                      if (
                        ((s = f.sls.getItem("choose/userStock") || []),
                        (c = !1),
                        p.forEach(s, function (e) {
                          var t = e.list;
                          p.forEach(t, function (e) {
                            "3" === e.type && (c = !0);
                          });
                        }),
                        !c)
                      ) {
                        e.next = 14;
                        break;
                      }
                      return (
                        (e.next = 11),
                        this.detailApi.getMarketState(
                          { market: 0 },
                          { needProcess: !0 }
                        )
                      );
                    case 11:
                      (u = e.sent),
                        (l = (
                          (null == (n = null == u ? void 0 : u.split)
                            ? void 0
                            : n.call(u, "|")) || []
                        )
                          .map(function (e) {
                            return e.split("_");
                          })
                          .filter(function (e) {
                            return "NEWUS" === e[0];
                          })),
                        "open" ===
                          (null == (r = null == l ? void 0 : l[0])
                            ? void 0
                            : r[1]) &&
                          ((h =
                            this.tabs.findIndex(function (e) {
                              return "美股" === e.name;
                            }) || 0),
                          this.switchTab(h),
                          p.StockBridge.report(
                            "hq.market.ontradetime_change_us"
                          ),
                          f.sessionStorage.setItem(w, o));
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      switchToPlate: function () {
        this.switchTab(1, !0);
      },
      switchToETF: function (t) {
        var n = this;
        setTimeout(function () {
          var r = "object" == e(t) && null !== t ? t.curActiveTab : t;
          n.etfQuery = { curActiveTab: r };
          var i = n.getTabIndex("etfMarket");
          n.switchTab(i, !0);
        }, 50);
      },
    },
  };
Array ||
  (
    p.resolveComponent("EtfPopCom") +
    p.resolveComponent("portal") +
    p.resolveComponent("Tabbar") +
    p.resolveComponent("market-card") +
    p.resolveComponent("plate") +
    p.resolveComponent("ETFUnionPage") +
    p.resolveComponent("bond-rank") +
    p.resolveComponent("chy-kch") +
    p.resolveComponent("st-loading") +
    p.resolveComponent("WzqInfoModal")
  )();
var O = p._export_sfc(j, [
  [
    "render",
    function (e, t, n, r, i, a) {
      return p.e(
        { a: 2 === i.currTab },
        2 === i.currTab
          ? p.e(
              { b: i.showETFPop },
              i.showETFPop
                ? {
                    c: p.sr("etfBoard", "474a8fae-1,474a8fae-0"),
                    d: p.o(function (e) {
                      return a.closeETFBoard();
                    }, 1509),
                    e: p.n(a.isPc ? "is-pc" : ""),
                    f: p.o(function () {}, 1510),
                    g: p.o(function (e) {
                      return a.closeETFBoard();
                    }, 1511),
                  }
                : {},
              { h: p.p({ to: "etf-teach-pop" }) }
            )
          : {},
        {
          i: p.sr("tabBar", "474a8fae-2"),
          j: p.o(a.switchTab, 1512),
          k: p.p({
            "cur-index": i.currTab,
            "tab-config": i.tabs,
            "show-more": !1,
            typeid: "hqtabs",
          }),
          l: a.getTabsVisited("hsMarket"),
        },
        a.getTabsVisited("hsMarket")
          ? {
              m: p.sr("hsMarket", "474a8fae-3"),
              n: p.o(a.stopSwiperScroll, 1513),
              o: p.o(a.startSwiperScroll, 1514),
              p: p.o(a.toggleRank, 1515),
              q: p.o(a.switchToPlate, 1516),
              r: p.o(a.switchToETF, 1517),
              s: p.o(a.changeCounterNum, 1518),
              t: p.o(a.tabLoaded, 1519),
              v: p.o(a.onTabScroll, 1520),
              w: p.p({
                market: "HS",
                "index-refresh-type": i.indexRefreshType,
                "user-info": n.userInfo,
                helper: n.helper,
                "tab-on-show": i.currTab === a.getTabIndex("hsMarket"),
                "rank-fold": i.rankFoldArr[i.currTab],
                "bar-height": n.barHeight,
                "outer-swiper-height": i.swiperHeight,
              }),
            }
          : {},
        { x: a.getTabsVisited("plate") },
        a.getTabsVisited("plate")
          ? {
              y: p.sr(a.getTabsRef("plate"), "474a8fae-4"),
              z: a.getTabsRef("plate"),
              A: p.o(a.tabLoaded, 1521),
              B: p.o(a.onPullingDown, 1522),
              C: p.o(a.onTabScroll, 1523),
              D: p.p({
                "tab-on-show": i.currTab === a.getTabIndex("plate"),
                "bar-height": n.barHeight,
                "outer-swiper-height": i.swiperHeight,
              }),
            }
          : {},
        { E: a.getTabsVisited("etfMarket") },
        a.getTabsVisited("etfMarket")
          ? {
              F: p.sr(a.getTabsRef("etfMarket"), "474a8fae-5"),
              G: a.getTabsRef("etfMarket"),
              H: p.o(a.tabLoaded, 1524),
              I: p.o(a.onTabScroll, 1525),
              J: p.o(a.toggleShowTeachPop, 1526),
              K: p.p({
                "bar-height": n.barHeight,
                "outer-swiper-height": i.swiperHeight,
                lct: n.lct,
              }),
            }
          : {},
        { L: a.getTabsVisited("bondMarket") },
        a.getTabsVisited("bondMarket")
          ? {
              M: p.sr(a.getTabsRef("bondMarket"), "474a8fae-6"),
              N: a.getTabsRef("bondMarket"),
              O: p.o(a.tabLoaded, 1527),
              P: p.o(a.toggleRank, 1528),
              Q: p.o(a.changeCounterNum, 1529),
              R: p.o(a.stopSwiperScroll, 1530),
              S: p.o(a.startSwiperScroll, 1531),
              T: p.o(a.onPullingDown, 1532),
              U: p.o(a.onTabScroll, 1533),
              V: p.p({
                "user-info": n.userInfo,
                "rank-fold": i.rankFoldArr[i.currTab],
                "bar-height": n.barHeight,
                "outer-swiper-height": i.swiperHeight,
              }),
            }
          : {},
        { W: a.getTabsVisited("chyBoard") },
        a.getTabsVisited("chyBoard")
          ? {
              X: p.sr("chyBoard", "474a8fae-7"),
              Y: p.o(a.stopSwiperScroll, 1534),
              Z: p.o(a.startSwiperScroll, 1535),
              aa: p.o(a.tabLoaded, 1536),
              ab: p.o(a.onPullingDown, 1537),
              ac: p.o(a.onTabScroll, 1538),
              ad: p.p({
                type: "chy",
                "user-info": n.userInfo,
                "bar-height": n.barHeight,
                "outer-swiper-height": i.swiperHeight,
              }),
            }
          : {},
        { ae: a.getTabsVisited("kchBoard") },
        a.getTabsVisited("kchBoard")
          ? {
              af: p.sr("kchBoard", "474a8fae-8"),
              ag: p.o(a.stopSwiperScroll, 1539),
              ah: p.o(a.startSwiperScroll, 1540),
              ai: p.o(a.tabLoaded, 1541),
              aj: p.o(a.onPullingDown, 1542),
              ak: p.o(a.onTabScroll, 1543),
              al: p.p({
                type: "kch",
                "user-info": n.userInfo,
                "bar-height": n.barHeight,
                "outer-swiper-height": i.swiperHeight,
              }),
            }
          : {},
        { am: a.getTabsVisited("hkMarket") },
        a.getTabsVisited("hkMarket")
          ? {
              an: p.sr(a.getTabsRef("hkMarket"), "474a8fae-9"),
              ao: a.getTabsRef("hkMarket"),
              ap: p.o(a.stopSwiperScroll, 1544),
              aq: p.o(a.startSwiperScroll, 1545),
              ar: p.o(a.tabLoaded, 1546),
              as: p.o(a.switchToETF, 1547),
              at: p.o(a.onPullingDown, 1548),
              av: p.o(a.onTabScroll, 1549),
              aw: p.o(a.changeCounterNum, 1550),
              ax: p.p({
                "user-info": n.userInfo,
                "bar-height": n.barHeight,
                "outer-swiper-height": i.swiperHeight,
                market: "HK",
                "hk-v-i-p": n.hkVIP,
              }),
            }
          : {},
        { ay: a.getTabsVisited("usMarket") },
        a.getTabsVisited("usMarket")
          ? {
              az: p.sr(a.getTabsRef("usMarket"), "474a8fae-10"),
              aA: a.getTabsRef("usMarket"),
              aB: p.o(a.tabLoaded, 1551),
              aC: p.o(a.switchToETF, 1552),
              aD: p.o(a.onPullingDown, 1553),
              aE: p.o(a.onTabScroll, 1554),
              aF: p.o(a.changeCounterNum, 1555),
              aG: p.p({
                "user-info": n.userInfo,
                "bar-height": n.barHeight,
                "outer-swiper-height": i.swiperHeight,
                market: "US",
                "index-refresh-type": i.indexRefreshType,
              }),
            }
          : {},
        {
          aH: i.currTab,
          aI: "".concat(i.swiperHeight, "px"),
          aJ: p.o(function () {
            return a.afterSwitchTab && a.afterSwitchTab.apply(a, arguments);
          }, 1556),
          aK: !i.rankFoldArr[i.currTab] && i.showNumArr[i.currTab] >= 3,
        },
        !i.rankFoldArr[i.currTab] && i.showNumArr[i.currTab] >= 3
          ? {
              aL: p.t(i.showNumArr[i.currTab]),
              aM: p.t(" "),
              aN: p.t(i.rankLength),
              aO: p.o(function () {
                return a.toggleRank && a.toggleRank.apply(a, arguments);
              }, 1557),
            }
          : {},
        { aP: i.tabLoading },
        i.tabLoading
          ? { aQ: p.n(0 === i.currTab ? "loading-wrapper-label" : "") }
          : {},
        { aR: "mp" === i.env },
        "mp" === i.env
          ? p.e(
              { aS: i.showTipModal },
              i.showTipModal
                ? {
                    aT: p.o(function (e) {
                      return (i.showTipModal = !1);
                    }, 1558),
                    aU: p.p({ skin: a.theme, config: i.tipModalConfig }),
                  }
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-474a8fae"],
]);
wx.createComponent(O);
var B = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.HqAPI = R),
  (exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWhxLXBhZ2UvSW5kZXgudnVl =
    B),
  (exports.RANK_META_INFO = y),
  (exports.concatParam = S),
  (exports.detect = F),
  (exports.isNumber = function (e) {
    return /^([0-9]+\.?[0-9]*|-[0-9]+\.?[0-9]*)$/.test(e);
  }),
  (exports.navigateTo = function (e, t, n, r) {
    r
      ? setTimeout(function () {
          e.routeTo({ path: t, query: n });
        }, r)
      : e.routeTo({ path: t, query: n });
  });
