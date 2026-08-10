var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  c = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  o = function (e, r) {
    for (var o in r || (r = {})) s.call(r, o) && c(e, o, r[o]);
    if (n) {
      var i,
        a = t(n(r));
      try {
        for (a.s(); !(i = a.n()).done; ) {
          o = i.value;
          u.call(r, o) && c(e, o, r[o]);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
    return e;
  },
  i = function (e, t, r) {
    return new Promise(function (n, s) {
      var u = function (e) {
          try {
            o(r.next(e));
          } catch (e) {
            s(e);
          }
        },
        c = function (e) {
          try {
            o(r.throw(e));
          } catch (e) {
            s(e);
          }
        },
        o = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(u, c);
        };
      o((r = r.apply(e, t)).next());
    });
  },
  a = require("../../../../../common/vendor.js"),
  p = require("../../stock-news-core/utils/request/index.js"),
  l = require("../../stock-news-core/utils/tools.js"),
  m = require("../../stock-news-base/service/news/gray.js"),
  f = require("../../stock-news-base/service/news/apis/queryColumnNewsList.js");
function w() {
  return a.wx$1
    ? {
        appid: "wx4ffb369b6881ee5e",
        openid: a.wx$1.getStorageSync("_qluin"),
        fskey: a.wx$1.getStorageSync("_qlskey"),
        access_token: a.wx$1.getStorageSync("_qlskey"),
        check: 11,
        app: "wzqxcx",
      }
    : {};
}
(exports.requestDanmaku = function (t) {
  return i(this, arguments, function (t) {
    var r = t.event_id;
    return e().mark(function t() {
      var n;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (n = o(o({ target_id: r }, w()), l.md5())),
                e.abrupt(
                  "return",
                  p.request(
                    "https://wzq.tenpay.com/group/newstockgroup/rssNewsService/danmakuList",
                    n,
                    { method: "get" }
                  )
                )
              );
            case 2:
            case "end":
              return e.stop();
          }
      }, t);
    })();
  });
}),
  (exports.requestEventDetail = function (t) {
    return i(this, arguments, function (t) {
      var r = t.event_id;
      return e().mark(function t() {
        var n;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (n = o(o({ event_id: r }, w()), l.md5())),
                  e.abrupt(
                    "return",
                    p.request(
                      "https://snp.tenpay.com/cgi/cgi-bin/snp/watchlist/eventDetail",
                      n,
                      { method: "get" }
                    )
                  )
                );
              case 2:
              case "end":
                return e.stop();
            }
        }, t);
      })();
    });
  }),
  (exports.requestFastNewsData = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
    return i(
      this,
      null,
      e().mark(function s() {
        var u, c;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), m.isNewsGrayUser("queryColumnNewsList");
              case 2:
                if (!e.sent) {
                  e.next = 4;
                  break;
                }
                return e.abrupt(
                  "return",
                  f.queryColumnNewsList({
                    column_id: "sckx",
                    limit: r,
                    last_page_cursor: 0 !== t || n ? n : "",
                  })
                );
              case 4:
                return (
                  (u = o(o({ offset: t, limit: r }, w()), l.md5())),
                  "https://snp.tenpay.com/cgi-bin/snpgw_columnnews_comm.fcgi?column_id=sckx",
                  (e.next = 8),
                  p.request(
                    "https://snp.tenpay.com/cgi-bin/snpgw_columnnews_comm.fcgi?column_id=sckx",
                    u,
                    { method: "get" }
                  )
                );
              case 8:
                return (
                  (c = e.sent),
                  e.abrupt("return", f.adaptQueryColumnNewsListResp(c))
                );
              case 10:
              case "end":
                return e.stop();
            }
        }, s);
      })
    );
  }),
  (exports.requestWxNewsTopData = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return i(
      this,
      null,
      e().mark(function r() {
        var n;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (n = o(o({ limit: t }, w()), l.md5())),
                  e.abrupt(
                    "return",
                    p.request(
                      "https://snp.tenpay.com/cgi/cgi-bin/snp/watchlist/event",
                      n,
                      { method: "get" }
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
  });
