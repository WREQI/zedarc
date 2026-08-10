var e = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  a = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  s = function (e, t, r) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  u = function (e, t) {
    for (var r in t || (t = {})) c.call(t, r) && s(e, r, t[r]);
    if (a) {
      var o,
        u = n(a(t));
      try {
        for (u.s(); !(o = u.n()).done; ) {
          r = o.value;
          i.call(t, r) && s(e, r, t[r]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return e;
  },
  p = function (e, t, r) {
    return new Promise(function (n, o) {
      var a = function (e) {
          try {
            i(r.next(e));
          } catch (e) {
            o(e);
          }
        },
        c = function (e) {
          try {
            i(r.throw(e));
          } catch (e) {
            o(e);
          }
        },
        i = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(a, c);
        };
      i((r = r.apply(e, t)).next());
    });
  };
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var l = require("../../../../../common/vendor.js"),
  d = require("../../stock-base/service/common/utils.js"),
  f = require("../../stock-base/service/api/request.js"),
  g = require("../../stock-crypto-modules-hq/src/config.js"),
  m = require("../utils/util.js"),
  k = require("../../stock-markets-base/utils/market.js"),
  h = require("../../stock-markets-base/utils/hqDataUtil.js"),
  b = function (e) {
    return p(
      exports,
      null,
      r().mark(function t() {
        var n, o, a, c;
        return r().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                if (
                  (n =
                    "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq")
                ) {
                  t.next = 3;
                  break;
                }
                return t.abrupt("return");
              case 3:
                return (t.next = 5), m.getLoginInfo();
              case 5:
                return (
                  (o = t.sent),
                  (a = {
                    app: g.ORIGIN.mpweapp,
                    appid: g.APPIDENUM.mpweapp,
                    check: 11,
                    new_opt: 1,
                  }),
                  (c = u(u(u({}, a), e), o)),
                  t.abrupt(
                    "return",
                    ((n = m.buildUrl(n, c)),
                    f.request({
                      url: n,
                      method: l.RequestTypeEnum.POST,
                      data: c,
                      options: { appendParamsApp: !0, forceCallback: !0 },
                    }))
                  )
                );
              case 9:
              case "end":
                return t.stop();
            }
        }, t);
      })
    );
  };
(exports.batchDelStock = function (e, t) {
  return new Promise(function (r, n) {
    var o = [];
    e.split(",").map(function (e) {
      var r = h.formatStock(e);
      Array.isArray(r) &&
        r.length &&
        o.push({
          code: r[0],
          timestamp: new Date().getTime(),
          grpid: t,
          act: "sd",
        });
    }),
      b({ seq: "".concat(encodeURIComponent(JSON.stringify(o))) })
        .then(function (e) {
          r(e);
        })
        .catch(function (e) {
          return n(e);
        });
  });
}),
  (exports.batchUpdateStock = b),
  (exports.editGroup = function (e) {
    return new Promise(function (t, r) {
      var n = u(
          { grpid: e.id, grpname: e.name, act: "" !== e.id ? "gu" : "ga" },
          e
        ),
        o = { timestamp: new Date().getTime(), act: n.act };
      switch (n.act) {
        case "ga":
        case "gu":
          (o.grpid = n.grpid || "TEMP-".concat(new Date().getTime())),
            (o.grpname = n.grpname);
          break;
        case "gd":
          (o.grpid = n.grpid), (o.sync = n.sync ? 1 : 0);
          break;
        case "go":
          o.grplist = n.grplist;
          break;
        case "gs":
        case "gh":
          o.grpid = n.grpid;
          break;
        case "sa":
          if (!n.grpid) {
            var a = m.getLocalUserGroups().find(function (e) {
              return "全部" === e.name && 1 == +e.type;
            });
            n.grpid = a && void 0 !== a.id ? a.id : "1";
          }
          (o.grpid = n.grpid), (o.code = n.code);
          break;
        case "sd":
          if (!n.grpid) {
            var c = m.getLocalUserGroups().find(function (e) {
              return "全部" === e.name && 1 == +e.type;
            });
            n.grpid = c && void 0 !== c.id ? c.id : "1";
          }
          (o.grpid = n.grpid), (o.code = n.code);
          break;
        case "sp":
        case "st":
          (o.grpid = n.grpid), (o.code = n.code);
          break;
        case "so":
          (o.grpid = n.grpid), (o.codelist = n.codelist);
      }
      b({ seq: "".concat(encodeURIComponent(JSON.stringify([o]))) })
        .then(function (e) {
          t(e);
        })
        .catch(function (e) {
          return r(e);
        });
    });
  }),
  (exports.fetchLabelsData = function (e) {
    return p(
      exports,
      null,
      r().mark(function t() {
        var n, o, a, c, i;
        return r().wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (t.prev = 0),
                    "https://proxy.finance.qq.com/cgi/cgi-bin/stockminor/stockinfo/get",
                    (n = { symbols: e }),
                    (t.next = 5),
                    f.request({
                      url: "https://proxy.finance.qq.com/cgi/cgi-bin/stockminor/stockinfo/get",
                      method: l.RequestTypeEnum.POST,
                      data: u({}, n),
                      options: { forceCallback: !0 },
                    })
                  );
                case 5:
                  return (
                    (o = t.sent),
                    (a = o.data),
                    (c = (void 0 === a ? {} : a).list),
                    (i = void 0 === c ? [] : c),
                    t.abrupt("return", i)
                  );
                case 13:
                  return (
                    (t.prev = 13), (t.t0 = t.catch(0)), t.abrupt("return", [])
                  );
                case 16:
                case "end":
                  return t.stop();
              }
          },
          t,
          null,
          [[0, 13]]
        );
      })
    );
  }),
  (exports.fetchQTData = function (e) {
    var t = { q: e, fmt: "json" },
      r = d.getApiFullUrl("utf8/", d.API_HOST_ENUM.SQT);
    return f.request({
      url: r,
      method: l.RequestTypeEnum.GET,
      data: u({}, t),
      options: { appendParamsApp: !0, forceCallback: !0 },
    });
  }),
  (exports.followBatchStock = function (e, t) {
    var r =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sa";
    return new Promise(function (n, o) {
      var a = [],
        c = h.formatStock((e && e.join(",")) || "");
      t.split(",").map(function (e) {
        c &&
          c.map(function (t) {
            a.push({
              grpid: e,
              act: r,
              code: t,
              timestamp: new Date().getTime(),
            });
          });
      }),
        b({ seq: "".concat(encodeURIComponent(JSON.stringify(a))) })
          .then(function (e) {
            n(e);
          })
          .catch(function (e) {
            return o(e);
          });
    });
  }),
  (exports.queryBarCount = function (e) {
    return p(
      exports,
      null,
      r().mark(function t() {
        var n;
        return r().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (t.next = 2), m.getLoginInfo();
              case 2:
                return (
                  (n = t.sent),
                  t.abrupt(
                    "return",
                    f.request({
                      url: "https://proxy.finance.qq.com/cgi/cgi-bin/commentcgi/comment/stockBarCounts",
                      method: l.RequestTypeEnum.GET,
                      data: u({ stock_id: e }, n),
                    })
                  )
                );
              case 4:
              case "end":
                return t.stop();
            }
        }, t);
      })
    );
  }),
  (exports.queryExchangeRate = function () {
    var e = "".concat(
      l.API_CHOOSE_SQT,
      "utf8/?q=fxUSDCNY,fxUSDHKD,fxGBPUSD&fmt=json"
    );
    return f
      .request({ url: e, method: l.RequestTypeEnum.GET })
      .then(function (e) {
        if (e && Object.keys(e).length) {
          var t = {};
          return (
            Object.keys(e).map(function (r) {
              var n = e[r] || [],
                o = n[2];
              o && (t[o] = +n[3]);
            }),
            t
          );
        }
      });
  }),
  (exports.queryStocksQtData = function () {
    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      a = arguments.length > 2 ? arguments[2] : void 0;
    return new Promise(function (c, i) {
      return p(
        exports,
        null,
        r().mark(function s() {
          var u, p, d, f, g, m, k, h, b, q, v, y;
          return r().wrap(
            function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    return (
                      (f = n.join("|")),
                      (g = o.join("|")),
                      (m =
                        "https://proxy.finance.qq.com/cgi/cgi-bin/appstockshow/query"),
                      (r.prev = 1),
                      (r.next = 4),
                      Promise.all(
                        [
                          l.StockBridge.request(m, "POST", {
                            code: f,
                            isdelay: 0,
                            lv2: 2,
                            app: "wzqxcx",
                            openid: l.StockBridge.getStorage("_qluin"),
                            fskey: l.StockBridge.getStorage("_qlskey"),
                          }),
                        ].concat(
                          e(
                            g
                              ? [
                                  l.StockBridge.request(m, "POST", {
                                    code: g,
                                    isdelay: 1,
                                    lv2: 0,
                                    app: "wzqxcx",
                                    openid: l.StockBridge.getStorage("_qluin"),
                                    fskey: l.StockBridge.getStorage("_qlskey"),
                                  }),
                                ]
                              : []
                          )
                        )
                      )
                    );
                  case 4:
                    (b = r.sent),
                      (q = t(b, 2)),
                      (k = q[0]),
                      (h = q[1]),
                      (r.next = 13);
                    break;
                  case 10:
                    return (
                      (r.prev = 10),
                      (r.t0 = r.catch(1)),
                      r.abrupt("return", void i(r.t0))
                    );
                  case 13:
                    if (
                      !k ||
                      0 !== k.code ||
                      !(null == (u = k.data) ? void 0 : u.list)
                    ) {
                      r.next = 16;
                      break;
                    }
                    return (
                      (v = {}),
                      (y = {}),
                      r.abrupt(
                        "return",
                        (null == (p = k.data) ||
                          p.list.forEach(function (e) {
                            v[e.code] = e;
                          }),
                        g &&
                          h &&
                          (null == (d = null == h ? void 0 : h.data) ||
                            d.list.forEach(function (e) {
                              y[e.code] = e;
                            })),
                        a.grouplist.forEach(function (e) {
                          var t = e.stocklist,
                            r = 0;
                          t.forEach(function (e) {
                            "hk" === e.market && "i" !== e.wzq_cls && (r += 1),
                              (e.qt = (r > 20 && y[e.symbol]) || v[e.symbol]);
                          });
                        }),
                        void ((null == a ? void 0 : a.grouplist)
                          ? c({ code: 0, data: a, msg: "OK", retmsg: k.msg })
                          : i()))
                      )
                    );
                  case 16:
                    i();
                  case 17:
                  case "end":
                    return r.stop();
                }
            },
            s,
            null,
            [[1, 10]]
          );
        })
      );
    });
  }),
  (exports.queryUserBasket = function () {
    return p(
      exports,
      null,
      r().mark(function e() {
        var t, n;
        return r().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (t = {
                    app: g.ORIGIN.mpweapp,
                    appid: g.APPIDENUM.mpweapp,
                    check: 11,
                    new_opt: 1,
                  }),
                  (e.next = 3),
                  m.getLoginInfo()
                );
              case 3:
                return (
                  (n = e.sent),
                  e.abrupt(
                    "return",
                    f.request({
                      url: "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/watchlist",
                      method: l.RequestTypeEnum.GET,
                      data: u(u({}, t), n),
                    })
                  )
                );
              case 5:
              case "end":
                return e.stop();
            }
        }, e);
      })
    );
  }),
  (exports.queryUserStock = function (e) {
    return new Promise(function (t, n) {
      return p(
        exports,
        null,
        r().mark(function o() {
          var a, c, i, s;
          return r().wrap(
            function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    if (!(null == e ? void 0 : e.grouplist)) {
                      r.next = 4;
                      break;
                    }
                    t({ code: 0, data: e, msg: "OK" }), (r.next = 19);
                    break;
                  case 4:
                    return (
                      (r.prev = 4),
                      (a = d.getApiFullUrl(
                        "newstock/stockapp/zixuangu/stocklist",
                        d.API_HOST_ENUM.PROXY_QQ
                      )),
                      (c = {
                        range: "group",
                        followedVer: 0,
                        allInfoVer: 0,
                        all_groups: 1,
                        check: 11,
                        new_opt: 1,
                        appid: "wx4ffb369b6881ee5e",
                      }),
                      (r.next = 9),
                      m.getLoginInfo()
                    );
                  case 9:
                    return (
                      (i = r.sent),
                      (r.next = 12),
                      f.request({
                        url: a,
                        method: l.RequestTypeEnum.GET,
                        data: u(u({}, c), i),
                        options: { appendParamsApp: !0, forceCallback: !0 },
                      })
                    );
                  case 12:
                    !(s = r.sent) || (void 0 !== s.code && 0 != +s.code)
                      ? n(s)
                      : t(s),
                      (r.next = 19);
                    break;
                  case 16:
                    (r.prev = 16), (r.t0 = r.catch(4)), n(r.t0);
                  case 19:
                  case "end":
                    return r.stop();
                }
            },
            o,
            null,
            [[4, 16]]
          );
        })
      );
    });
  }),
  (exports.stickyStock = function (e, t, r, n) {
    return new Promise(function (o, a) {
      var c = k.getSymbol(t, e),
        i = {
          seq: "".concat(
            encodeURIComponent(
              JSON.stringify([
                { code: c, timestamp: new Date().getTime(), grpid: r, act: n },
              ])
            )
          ),
        };
      b(i)
        .then(function (e) {
          o(e);
        })
        .catch(function (e) {
          return a(e);
        });
    });
  });
