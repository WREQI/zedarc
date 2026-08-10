var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  r = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  o = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  s = function (e, n) {
    for (var r in n || (n = {})) a.call(n, r) && o(e, r, n[r]);
    if (u) {
      var i,
        s = t(u(n));
      try {
        for (s.s(); !(i = s.n()).done; ) {
          r = i.value;
          c.call(n, r) && o(e, r, n[r]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  p = function (e, t) {
    return r(e, i(t));
  },
  f = function (e, t, n) {
    return new Promise(function (r, i) {
      var u = function (e) {
          try {
            c(n.next(e));
          } catch (e) {
            i(e);
          }
        },
        a = function (e) {
          try {
            c(n.throw(e));
          } catch (e) {
            i(e);
          }
        },
        c = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(u, a);
        };
      c((n = n.apply(e, t)).next());
    });
  },
  l = require("../../../../../common/vendor.js"),
  g = require("../../stock-base/service/common/utils.js"),
  m = require("../node-modules/@tencent/st-tools/dist/index.js"),
  d = require("../../stock-news-base/service/news/gray.js"),
  h = require("../../stock-news-base/service/news/apis/queryThemeInfo.js");
function q() {
  return f(
    this,
    null,
    e().mark(function t() {
      var n, r;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if ("mpweapp" !== l.ShellTypeEnum.SHY) {
                e.next = 2;
                break;
              }
              return e.abrupt("return", "");
            case 2:
              return (e.next = 4), l.StockBridge.getLoginInfoUnion();
            case 4:
              return (n = e.sent), (r = n.qluin), e.abrupt("return", r || "");
            case 7:
            case "end":
              return e.stop();
          }
      }, t);
    })
  );
}
function v() {
  return f(
    this,
    null,
    e().mark(function t() {
      var n, r, i, u;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if ("mpweapp" !== l.ShellTypeEnum.SHY) {
                e.next = 2;
                break;
              }
              return e.abrupt("return", {});
            case 2:
              return (e.next = 4), l.StockBridge.getLoginInfoUnion();
            case 4:
              if (((e.t0 = e.sent), e.t0)) {
                e.next = 7;
                break;
              }
              e.t0 = {};
            case 7:
              return (
                (n = e.t0),
                (r = n.qluin),
                (i = n.qlskey),
                (u = {}),
                e.abrupt(
                  "return",
                  (r && (u.openid = r), i && (u._devId = i), u)
                )
              );
            case 12:
            case "end":
              return e.stop();
          }
      }, t);
    })
  );
}
var x = {
  getAdInfo: function () {
    var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wzq",
      t = {
        appid: "hq",
        schemaid: "etf_page_banner",
        datetime: "datetime",
        filter: encodeURIComponent('platform="'.concat(e, '"')),
      };
    return l.Wuji.get(t);
  },
  getETFInfo: function (e) {
    var t = g.getApiFullUrl(
      "cgi/cgi-bin/market/etf/index",
      g.API_HOST_ENUM.PROXY_QQ
    );
    return e.request(t);
  },
  getETFHqData: function (e, t) {
    return e.request(
      "https://proxy.finance.qq.com/ifzqgtimg/appstock/fund/etf/recommend",
      "GET",
      t
    );
  },
  getETFListData: function (t, n) {
    return f(
      this,
      null,
      e().mark(function r() {
        var i, u;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), q();
              case 2:
                return (
                  (i = e.sent),
                  (u = i ? p(s({}, n), { openid: i }) : n),
                  e.abrupt(
                    "return",
                    t.request(
                      "https://proxy.finance.qq.com/cgi/cgi-bin/rank/fund/getList",
                      "GET",
                      u
                    )
                  )
                );
              case 5:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
  },
  getKlineData: function (e, t) {
    return e.request(
      "https://proxy.finance.qq.com/cgi/cgi-bin/stockinfoquery/kline/app/get",
      "GET",
      t
    );
  },
  getMinsData: function (e, t) {
    return e.request(
      "https://proxy.finance.qq.com/cgi/cgi-bin/generalminute/mini/minute",
      "GET",
      t,
      { forceCallback: !0 }
    );
  },
  getSubjectInfo: function (t, n) {
    return f(
      this,
      null,
      e().mark(function r() {
        var i, u, a;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), d.isNewsGrayUser("queryThemeInfo");
              case 2:
                if (!e.sent) {
                  e.next = 4;
                  break;
                }
                return e.abrupt(
                  "return",
                  h.queryThemeInfo({
                    news_id: (null == n ? void 0 : n.news_id) || "",
                    module:
                      null != (i = null == n ? void 0 : n.module) ? i : "0,2,3",
                  })
                );
              case 4:
                return (
                  (u = p(s({}, n), { reserve: 1075843072, module: "0,2,3" })),
                  (e.next = 7),
                  t.request(
                    "https://snp.tenpay.com/cgi-bin/snpgw_specialnews_zxg.fcgi",
                    "GET",
                    u
                  )
                );
              case 7:
                return (
                  (a = e.sent), e.abrupt("return", h.adaptQueryThemeInfoResp(a))
                );
              case 9:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
  },
  getSummary: function (e) {
    var t = g.getApiFullUrl(
      "ifzqfinance/stock/notice/EtfIpo/getSummary",
      g.API_HOST_ENUM.PROXY_QQ
    );
    return e
      .request(t)
      .then(function (e) {
        return e || {};
      })
      .catch(function (e) {
        return e;
      });
  },
  getUnderRateList: function (t, n) {
    return f(
      this,
      null,
      e().mark(function r() {
        var i, u;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), q();
              case 2:
                return (
                  (i = e.sent),
                  (u = i ? p(s({}, n), { openid: i }) : n),
                  e.abrupt(
                    "return",
                    t.request(
                      "https://proxy.finance.qq.com/cgi/cgi-bin/rank/idx/getList",
                      "GET",
                      u,
                      { timeout: 5e3 }
                    )
                  )
                );
              case 5:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
  },
  getDigHotList: function (t, n) {
    return f(
      this,
      null,
      e().mark(function r() {
        var i, u, a, c, o, p;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), v();
              case 2:
                return (
                  (i = e.sent),
                  (u = s(s({}, n || {}), i)),
                  (a =
                    "https://proxy.finance.qq.com/cgi/cgi-bin/operation/etf/hot_point_list"),
                  "undefined" != typeof navigator &&
                    ((c = m.dist.detect(navigator.userAgent)),
                    (o = c.env),
                    (p = c.os),
                    o.IS_ZXG &&
                      (a += "?app=" + (p.android ? "android" : "ios"))),
                  e.abrupt("return", t.request(a, "GET", u))
                );
              case 7:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
  },
  getEtfFirstPageAggregate: function (t, n) {
    return f(
      this,
      null,
      e().mark(function r() {
        var i, u;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), v();
              case 2:
                return (
                  (i = e.sent),
                  (u = s(s({}, n || {}), i)),
                  e.abrupt(
                    "return",
                    t.request(
                      "https://proxy.finance.qq.com/cgi/cgi-bin/operation/etf/first_page_aggregate",
                      "GET",
                      u
                    )
                  )
                );
              case 5:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
  },
  getEtfIndexZone: function (t, n) {
    return f(
      this,
      null,
      e().mark(function r() {
        var i, u;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), v();
              case 2:
                return (
                  (i = e.sent),
                  (u = s(s({}, n || {}), i)),
                  e.abrupt(
                    "return",
                    t.request(
                      "https://proxy.finance.qq.com/cgi/cgi-bin/operation/etf/index_zone",
                      "GET",
                      u
                    )
                  )
                );
              case 5:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
  },
  getScaleIndexETFRankList: function (t, n) {
    return f(
      this,
      null,
      e().mark(function r() {
        var i, u;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), v();
              case 2:
                return (
                  (i = e.sent),
                  (u = s(s({}, n || {}), i)),
                  e.abrupt(
                    "return",
                    t.request(
                      "https://proxy.finance.qq.com/cgi/cgi-bin/operation/etf/scale_index_etf_rank_list",
                      "GET",
                      u
                    )
                  )
                );
              case 5:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
  },
  getEtfT0Zone: function (t, n) {
    return f(
      this,
      null,
      e().mark(function r() {
        var i, u;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), v();
              case 2:
                return (
                  (i = e.sent),
                  (u = s(s({}, n || {}), i)),
                  e.abrupt(
                    "return",
                    t.request(
                      "https://proxy.finance.qq.com/cgi/cgi-bin/operation/etf/t0_zone",
                      "GET",
                      u
                    )
                  )
                );
              case 5:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
  },
  getEtfOverseaHotPoint: function (t, n) {
    return f(
      this,
      null,
      e().mark(function r() {
        var i, u;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), v();
              case 2:
                return (
                  (i = e.sent),
                  (u = s(s({}, n || {}), i)),
                  e.abrupt(
                    "return",
                    t.request(
                      "https://proxy.finance.qq.com/cgi/cgi-bin/operation/etf/oversea_hot_point",
                      "GET",
                      u
                    )
                  )
                );
              case 5:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
  },
  getEtfOverseaLongTermSelection: function (t, n) {
    return f(
      this,
      null,
      e().mark(function r() {
        var i, u;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), v();
              case 2:
                return (
                  (i = e.sent),
                  (u = s(s({}, n || {}), i)),
                  e.abrupt(
                    "return",
                    t.request(
                      "https://proxy.finance.qq.com/cgi/cgi-bin/operation/etf/oversea_long_term_selection",
                      "GET",
                      u
                    )
                  )
                );
              case 5:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
  },
  getEtfOverseaMarketList: function (t, n) {
    return f(
      this,
      null,
      e().mark(function r() {
        var i;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (i = p(s({}, n || {}), { with_ai: !0, with_label: !0 })),
                  e.abrupt(
                    "return",
                    t.request(
                      "https://proxy.finance.qq.com/cgi/cgi-bin/market/etf/overseas",
                      "GET",
                      i
                    )
                  )
                );
              case 2:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
  },
  getHotTopicDetail: function (t, n) {
    return f(
      this,
      null,
      e().mark(function r() {
        var i, u;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), v();
              case 2:
                return (
                  (i = e.sent),
                  (u = s(s({}, n || {}), i)),
                  e.abrupt(
                    "return",
                    t.request(
                      "https://proxy.finance.qq.com/cgi/cgi-bin/operation/etf/hot_point_detail",
                      "GET",
                      u
                    )
                  )
                );
              case 5:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
  },
  getDividendZone: function (t, n) {
    return f(
      this,
      null,
      e().mark(function r() {
        var i, u;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), v();
              case 2:
                return (
                  (i = e.sent),
                  (u = s(s({}, n || {}), i)),
                  e.abrupt(
                    "return",
                    t.request(
                      "https://proxy.finance.qq.com/cgi/cgi-bin/operation/etf/dividend_zone",
                      "GET",
                      u
                    )
                  )
                );
              case 5:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
  },
  getDividendRankList: function (t, n) {
    return f(
      this,
      null,
      e().mark(function r() {
        var i, u;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), v();
              case 2:
                return (
                  (i = e.sent),
                  (u = s(s({}, n || {}), i)),
                  e.abrupt(
                    "return",
                    t.request(
                      "https://proxy.finance.qq.com/cgi/cgi-bin/operation/etf/dividend_rank_list",
                      "GET",
                      u
                    )
                  )
                );
              case 5:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
  },
};
exports.api = x;
