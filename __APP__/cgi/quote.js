var e = require("../@babel/runtime/helpers/objectSpread2"),
  t = require("../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../@babel/runtime/helpers/classCallCheck"),
  n = require("../@babel/runtime/helpers/createClass"),
  u = require("../@babel/runtime/helpers/inherits"),
  s = require("../@babel/runtime/helpers/createSuper"),
  i = require("./base.js"),
  o = require("../utils/market.js"),
  c = require("../bizs/hq/constants.js"),
  p = require("../service/aegis/platform/not-wujie.js"),
  l = require("../common/vendor.js"),
  h = (function (i) {
    u(C, i);
    var o,
      c,
      l,
      h,
      f,
      k,
      v,
      g,
      b,
      S,
      w,
      x = s(C);
    function C() {
      return a(this, C), x.apply(this, arguments);
    }
    return (
      n(C, [
        {
          key: "queryMarketData",
          value: function (e, t) {
            var r = "0";
            return (
              ("HK" !== e && "US" !== e) ||
                ((r = t.substr(0, 1)), (t = t.substr(1))),
              this.request("stockquotation.fcgi", {
                action: 0,
                market: e,
                boardtype: r,
                limit: "HS" === e ? 0 : 50,
                rank: t,
              })
            );
          },
        },
        {
          key: "queryMinusChartData",
          value:
            ((w = r(
              t().mark(function e(r) {
                var a, n;
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = r.scode),
                            (n = r.market),
                            e.abrupt(
                              "return",
                              this.request("stockquotation.fcgi", {
                                action: 2,
                                markets: n,
                                scode: a,
                                type: 1,
                                cyb: 1,
                              }).then(function (e) {
                                return m(e, r);
                              })
                            )
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function (e) {
              return w.apply(this, arguments);
            }),
        },
        {
          key: "queryFminusChartData",
          value:
            ((S = r(
              t().mark(function e(r) {
                var a, n;
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = r.scode),
                            (n = r.market),
                            e.abrupt(
                              "return",
                              this.request("stockquotation.fcgi", {
                                action: 3,
                                markets: n,
                                scode: a,
                                maxage: 600,
                                type: 2,
                              }).then(function (e) {
                                return q(e, r);
                              })
                            )
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function (e) {
              return S.apply(this, arguments);
            }),
        },
        {
          key: "queryDayChartData",
          value:
            ((b = r(
              t().mark(function r(a) {
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return t.abrupt(
                            "return",
                            (a.scode ||
                              p.aegisReporter.reportEvent(
                                "common_stockquotation_miss_scode"
                              ),
                            this.queryKlineData(e(e({}, a), {}, { kline: 1 })))
                          );
                        case 1:
                        case "end":
                          return t.stop();
                      }
                  },
                  r,
                  this
                );
              })
            )),
            function (e) {
              return b.apply(this, arguments);
            }),
        },
        {
          key: "queryWeekChartData",
          value:
            ((g = r(
              t().mark(function r(a) {
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return t.abrupt(
                            "return",
                            this.queryKlineData(e(e({}, a), {}, { kline: 2 }))
                          );
                        case 1:
                        case "end":
                          return t.stop();
                      }
                  },
                  r,
                  this
                );
              })
            )),
            function (e) {
              return g.apply(this, arguments);
            }),
        },
        {
          key: "queryMonthChartData",
          value:
            ((v = r(
              t().mark(function r(a) {
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return t.abrupt(
                            "return",
                            this.queryKlineData(e(e({}, a), {}, { kline: 3 }))
                          );
                        case 1:
                        case "end":
                          return t.stop();
                      }
                  },
                  r,
                  this
                );
              })
            )),
            function (e) {
              return v.apply(this, arguments);
            }),
        },
        {
          key: "queryKlineData",
          value:
            ((k = r(
              t().mark(function e(r) {
                var a, n, u, s, i, o;
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = r.market),
                            (n = r.scode),
                            (u = r.fq),
                            (s = r.kline),
                            (i = r.end),
                            (o = r.added),
                            e.abrupt(
                              "return",
                              this.request("stockquotation.fcgi", {
                                action: 4,
                                markets: a,
                                scode: n,
                                fq: u,
                                kline: s,
                                count: 320,
                                maxage: 36e3,
                                end: i,
                                added: o,
                                type: 3,
                              }).then(function (e) {
                                return y(e, r);
                              })
                            )
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function (e) {
              return k.apply(this, arguments);
            }),
        },
        {
          key: "queryTradeDetail",
          value:
            ((f = r(
              t().mark(function e(r) {
                var a, n, u;
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = r.scode),
                            (n = r.market),
                            (u = r.id),
                            e.abrupt(
                              "return",
                              this.request("stockquotation.fcgi", {
                                action: 5,
                                markets: n,
                                scode: a,
                                id: u,
                                type: 6,
                              }).then(function (e) {
                                return e.data;
                              })
                            )
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function (e) {
              return f.apply(this, arguments);
            }),
        },
        {
          key: "queryBigDeal",
          value:
            ((h = r(
              t().mark(function e(r) {
                var a, n;
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = r.scode),
                            (n = r.market),
                            e.abrupt(
                              "return",
                              this.request(
                                "openapi_zxgplat.fcgi?action=getDadan",
                                { code: ["sz", "sh", "hk"][n] + a }
                              ).then(function (e) {
                                return e.data;
                              })
                            )
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function (e) {
              return h.apply(this, arguments);
            }),
        },
        {
          key: "queryQTMarketState",
          value:
            ((l = r(
              t().mark(function e(r) {
                var a, n;
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            this.request(
                              "https://sqt.gtimg.cn/?q=marketStat&fmt=json",
                              null,
                              { method: "get" }
                            )
                          );
                        case 3:
                          (n = e.sent),
                            d(
                              r,
                              null == (a = JSON.parse(n))
                                ? void 0
                                : a.marketStat[0]
                            ),
                            (e.next = 9);
                          break;
                        case 7:
                          (e.prev = 7), (e.t0 = e.catch(0));
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[0, 7]]
                );
              })
            )),
            function (e) {
              return l.apply(this, arguments);
            }),
        },
        {
          key: "queryHSFundsIncome",
          value:
            ((c = r(
              t().mark(function e(r) {
                var a, n;
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = r.scode),
                            (n = r.market),
                            e.abrupt(
                              "return",
                              this.request(
                                "openapi_zxgplat.fcgi?action=hsfundtab",
                                { code: ["sz", "sh", "hk"][n] + a }
                              ).then(function (e) {
                                return e.data;
                              })
                            )
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function (e) {
              return c.apply(this, arguments);
            }),
        },
        {
          key: "getHsPublicData",
          value:
            ((o = r(
              t().mark(function e(r) {
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            "return",
                            this.request(
                              "openapi_zxgplat.fcgi?action=hspublic",
                              r
                            ).then(function (e) {
                              return e.data;
                            })
                          );
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function (e) {
              return o.apply(this, arguments);
            }),
        },
      ]),
      C
    );
  })(i.BaseAPI),
  f = { 0: 100, 1: 100, 2: 1, 3: 1, p: 1 },
  k = function (e, t) {
    return o.isKeChuangStock(t) ? 1 : f[e];
  },
  m = function (e, t) {
    var r,
      a = t._this,
      n = t.scode,
      u = t.market,
      s = t.stockType,
      i = [],
      c = 0,
      p = 0;
    try {
      var l = e.data["".concat(o.getMarketPYName(u)).concat(n)],
        h = l.data,
        f = l.pandata,
        m = l.attribute,
        v = l.introduce,
        q = l.qt;
      for (
        d(t, null == q ? void 0 : q.market[0]),
          r = h.data,
          o.isUSMarket(u) && a.$emit("getUSPanData", f),
          a.$emit("getZhiShuZDP", null == q ? void 0 : q.zhishu),
          (o.isKeChuangStock(s) || o.isChuangYeStock(s)) &&
            a.$emit("getExtraInfo", m),
          o.isHSPlate(u) && a.$emit("getIntroduce", v);
        p < r.length;
        p++
      )
        if (r[p].indexOf(" ") > 0) {
          var y = r[p].split(" "),
            g = parseInt(y[2], 10);
          0 == g && (g = c),
            i.push({
              time: y[0],
              price: y[1],
              volume: (g - c) * k(u, s),
              amount: y[1] * (g - c) * k(u, s),
            }),
            (c = y[2]);
        }
    } catch (h) {
      i = null;
    }
    return i;
  },
  d = function (e, t) {
    var r = e._this,
      a = e.market,
      n = e.stockType,
      u = (t.split("|") || [])
        .map(function (e, t) {
          return e.split("_");
        })
        .filter(function (e) {
          return o.isKeChuangStock(n)
            ? "KCB" === e[0]
            : o.isChuangYeStock(n)
            ? "CYB" === e[0]
            : o.isHSPlate(a)
            ? "NEWSH" === e[0]
            : o.isUSMarket(a)
            ? ("USB" === e[0] && r.updateUSPanState(e), "NEWUS" === e[0])
            : e[0] === "NEW".concat(o.getMarketPYName(a).toUpperCase());
        });
    u.length && r.$emit("qtMarketState", u);
  },
  v = function (e, t, r) {
    return o.isHSMarket(e) || o.isHSPlate(e)
      ? (r <= 120 && r % 4 == 0) || (r > 123 && r % 4 == 0) || 241 == r
      : o.isHKMarket(e)
      ? (r <= 150 && r % 4 == 0) || (r >= 151 && (r + 1) % 4 == 0) || 330 == r
      : o.isUSMarket(e)
      ? r % 4 == 0 || 389 == r
      : void 0;
  },
  q = function (e, t) {
    var r = t._this,
      a = t.scode,
      n = t.market,
      u = t.stockType,
      s = { items: [], labels: [], preClose: 0 };
    try {
      var i = e.data["".concat(o.getMarketPYName(n)).concat(a)],
        c = i.data,
        p = i.pandata,
        h = i.qt;
      d(t, null == h ? void 0 : h.market[0]),
        o.isUSMarket(n) && r.$emit("getUSPanData", p),
        r.$emit("getZhiShuZDP", null == h ? void 0 : h.zhishu);
      var f = c.slice(0).reverse();
      l.forEach(f, function (e, t) {
        var r = 0,
          a = e.data;
        if (
          (t !== f.length - 1 ||
            "" === a[a.length - 1] ||
            o.isHSMarket(n) ||
            a.splice(150, 1),
          0 === t && (s.preClose = e.prec),
          s.labels.push(e.date.substr(4, 4).replace(/(.{2})/, "$1/")),
          o.isKeChuangStock(u) && t != f.length - 1)
        ) {
          for (var i = parseInt(a[a.length - 1].split(" "), 10); i < 1130; )
            i % 100 >= 60 ? i++ : a.push(i++ + " 0 0");
          for (; i >= 1300 && i < 1500; )
            i % 100 >= 60 ? i++ : a.push(i++ + " 0 0");
        }
        for (var c = 0; c < a.length; c++)
          if (a[c].indexOf(" ") > 0) {
            var p = a[c].split(" "),
              l = c > 0 && a[c - 1].split(" ");
            v(n, 0, c) &&
              (l && (r = parseInt(l[2], 10)),
              o.isKeChuangStock(u)
                ? s.items.push({
                    time: p[0],
                    price: p[1],
                    volume: Math.max((p[2] - r) * k(n, u), 0),
                    amount: Math.max(p[1] * (p[2] - r) * k(n, u), 0),
                  })
                : s.items.push({
                    time: p[0],
                    price: p[1],
                    volume: (p[2] - r) * k(n, u),
                    amount: p[1] * (p[2] - r) * k(n, u),
                  }));
          }
      });
    } catch (e) {
      s = null;
    }
    if (s.labels) for (var m = 0; m < 5; m++) s.labels[m] || (s.labels[m] = "");
    return s;
  },
  y = function (e, t) {
    var r = [],
      a = t._this,
      n = t.scode,
      u = t.market,
      s = t.fq,
      i = t.kline,
      p = "".concat(o.getMarketPYName(u)).concat(n),
      l = ["", "day", "week", "month"][i],
      h = c.fqPY[s];
    try {
      var f = e.data[p],
        k = f.pandata,
        m = f.qt;
      d(t, null == m ? void 0 : m.market[0]),
        o.isUSMarket(u) && a.$emit("getUSPanData", k),
        a.$emit("getZhiShuZDP", null == m ? void 0 : m.zhishu);
      for (
        var v = e.data[p]["".concat(h).concat(l)] || e.data[p][l], q = 0;
        q < v.length;
        q++
      ) {
        var y = v[q - 1],
          g = v[q],
          b = {
            quoteTime: g[0],
            time: g[0],
            open: parseFloat(g[1], 10),
            close: parseFloat(g[2], 10),
            high: parseFloat(g[3], 10),
            low: parseFloat(g[4], 10),
            volume: parseInt(g[5], 10),
            preClose: parseFloat(y ? y[2] : g[1], 10),
            fh: g[6] || {},
            cje: parseFloat(g[8], 10),
            hsl: parseFloat(g[7], 10),
            rawClose: g[2],
            rawPreClose: y ? y[2] : g[1],
          };
        r.push(b);
      }
    } catch (e) {
      r = null;
    }
    return r;
  };
exports.QuoteAPI = h;
