var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.defineProperties,
  l = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  a = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  o = function (e, r) {
    for (var n in r || (r = {})) u.call(r, n) && a(e, n, r[n]);
    if (i) {
      var l,
        o = t(i(r));
      try {
        for (o.s(); !(l = o.n()).done; ) {
          n = l.value;
          s.call(r, n) && a(e, n, r[n]);
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
    }
    return e;
  },
  c = function (e, t) {
    return n(e, l(t));
  },
  p = require("../gray.js"),
  m = function (e) {
    var t, r, n, l, i, u, s, a, p, m, y, _, b, f, g, d, h, w;
    return c(o({}, e), {
      news_id: String(
        null != (r = null != (t = e.id) ? t : e.news_id) ? r : ""
      ),
      title: String(null != (n = e.title) ? n : ""),
      news_type: Number(
        null != (i = null != (l = e.news_type) ? l : e.type) ? i : 0
      ),
      src: String(null != (u = e.src) ? u : ""),
      time: String(null != (s = e.time) ? s : ""),
      predict_timestamp:
        null != (p = null != (a = e.predictTimestamp) ? a : e.predict_timestamp)
          ? p
          : 0,
      publish_time:
        null != (y = null != (m = e.publish_time) ? m : e.predictTimestamp)
          ? y
          : 0,
      importance: Number(null != (_ = e.importance) ? _ : 0),
      top_stock: Number(null != (b = e.top_stock) ? b : 0),
      article_type: String(
        null != (g = null != (f = e.article_type) ? f : e.articletype) ? g : ""
      ),
      has_translation: Number(null != (d = e.has_translation) ? d : 0),
      chinese_title: String(
        null != (w = null != (h = e.chinese_title) ? h : e.chineseTitle)
          ? w
          : ""
      ),
      symbols: Array.isArray(e.symbols) ? e.symbols : [],
    });
  },
  y = function (e) {
    var t, r, n, l, i;
    return c(o({}, e), {
      stock_code: String(
        null != (r = null != (t = e.stock_code) ? t : e.symbol) ? r : ""
      ),
      stock_name: String(
        null != (l = null != (n = e.stock_name) ? n : e.name) ? l : ""
      ),
      logo: String(null != (i = e.logo) ? i : ""),
    });
  };
(exports.adaptQueryMultiStockNewsListResp = function (e) {
  var t, r, n, l, i, u;
  if (!e) return e;
  var s = null != (t = e.data) ? t : {},
    a = o({}, e),
    p = null != (r = e.code) ? r : e.retcode,
    _ = "0" === String(p) || 0 === p,
    b = s.data,
    f = (Array.isArray(b) ? b : []).map(m),
    g = s.symbolsName,
    d = (Array.isArray(g) ? g : []).map(y);
  return c(o({}, a), {
    code: _ ? 0 : Number(null != p ? p : -1),
    msg: String(null != (n = e.msg) ? n : ""),
    news_list: f,
    stock_infos: d,
    has_next: Number(null != (l = s.has_next) ? l : 0),
    next_page_cursor: String(
      null != (u = null != (i = s.last_score) ? i : s.next_page_cursor) ? u : ""
    ),
  });
}),
  (exports.queryMultiStockNewsList = function (t) {
    return (
      (r = this),
      null,
      (n = e().mark(function r() {
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  "return",
                  p.newsRequest(
                    "/zxg/news/news_feed/query_multi_stock_news_list",
                    t
                  )
                );
              case 1:
              case "end":
                return e.stop();
            }
        }, r);
      })),
      new Promise(function (e, t) {
        var l = function (e) {
            try {
              u(n.next(e));
            } catch (e) {
              t(e);
            }
          },
          i = function (e) {
            try {
              u(n.throw(e));
            } catch (e) {
              t(e);
            }
          },
          u = function (t) {
            return t.done ? e(t.value) : Promise.resolve(t.value).then(l, i);
          };
        u((n = n.apply(r, null)).next());
      })
    );
    var r, n;
  });
