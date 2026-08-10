var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  l = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  t = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  s = function (e, l, t) {
    return l in e
      ? n(e, l, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[l] = t);
  },
  a = function (e, n) {
    for (var t in n || (n = {})) i.call(n, t) && s(e, t, n[t]);
    if (u) {
      var r,
        a = l(u(n));
      try {
        for (a.s(); !(r = a.n()).done; ) {
          t = r.value;
          o.call(n, t) && s(e, t, n[t]);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
    return e;
  },
  d = function (e, l) {
    return t(e, r(l));
  },
  c = require("../stock-news-base/service/news/gray.js"),
  m = require("../../../../common/vendor.js"),
  p = function (e) {
    var l, n;
    return d(a({}, e), {
      id: String(null != (l = null == e ? void 0 : e.id) ? l : ""),
      news_type: Number(null != (n = null == e ? void 0 : e.news_type) ? n : 0),
    });
  },
  _ = function (e) {
    var l, n, t, r, u;
    return d(a({}, e), {
      stock_code: String(
        null !=
          (n =
            null != (l = null == e ? void 0 : e.stock_code)
              ? l
              : null == e
              ? void 0
              : e.symbol)
          ? n
          : ""
      ),
      stock_name: String(
        null !=
          (r =
            null != (t = null == e ? void 0 : e.stock_name)
              ? t
              : null == e
              ? void 0
              : e.name)
          ? r
          : ""
      ),
      logo: String(null != (u = null == e ? void 0 : e.logo) ? u : ""),
    });
  },
  v = function e(l) {
    var n,
      t,
      r,
      u,
      i,
      o,
      s,
      c,
      m,
      _,
      v,
      f,
      y,
      g,
      b,
      h,
      S,
      w,
      N,
      x,
      k,
      O,
      j,
      R,
      T,
      q,
      P,
      E,
      A = String(
        null !=
          (t =
            null != (n = null == l ? void 0 : l.media_name)
              ? n
              : null == l
              ? void 0
              : l.src)
          ? t
          : ""
      );
    return d(a({}, l), {
      news_id: String(
        null !=
          (u =
            null != (r = null == l ? void 0 : l.news_id)
              ? r
              : null == l
              ? void 0
              : l.id)
          ? u
          : ""
      ),
      title: String(null != (i = null == l ? void 0 : l.title) ? i : ""),
      chinese_title: String(
        null !=
          (s =
            null != (o = null == l ? void 0 : l.chinese_title)
              ? o
              : null == l
              ? void 0
              : l.chineseTitle)
          ? s
          : ""
      ),
      summary: String(null != (c = null == l ? void 0 : l.summary) ? c : ""),
      media_name: A,
      news_type: Number(null != (m = null == l ? void 0 : l.news_type) ? m : 0),
      importance: Number(
        null != (_ = null == l ? void 0 : l.importance) ? _ : 0
      ),
      has_translation: Number(
        null != (v = null == l ? void 0 : l.has_translation) ? v : 0
      ),
      publish_time:
        null !=
        (y =
          null != (f = null == l ? void 0 : l.publish_time)
            ? f
            : null == l
            ? void 0
            : l.predictTimestamp)
          ? y
          : 0,
      app_detail_link: String(
        null != (g = null == l ? void 0 : l.app_detail_link) ? g : ""
      ),
      floded_tip: String(
        null !=
          (h =
            null != (b = null == l ? void 0 : l.floded_tip)
              ? b
              : null == l
              ? void 0
              : l.flodedTip)
          ? h
          : ""
      ),
      time: String(null != (S = null == l ? void 0 : l.time) ? S : ""),
      article_type: String(
        null !=
          (N =
            null != (w = null == l ? void 0 : l.article_type)
              ? w
              : null == l
              ? void 0
              : l.articletype)
          ? N
          : ""
      ),
      special_type: Number(
        null != (x = null == l ? void 0 : l.special_type) ? x : 0
      ),
      top_stock: Number(null != (k = null == l ? void 0 : l.top_stock) ? k : 0),
      item_type: Number(
        null !=
          (j =
            null != (O = null == l ? void 0 : l.item_type)
              ? O
              : null == l
              ? void 0
              : l.type)
          ? j
          : 0
      ),
      item_type_tag: String(
        null !=
          (T =
            null != (R = null == l ? void 0 : l.item_type_tag)
              ? R
              : null == l
              ? void 0
              : l.typeStr)
          ? T
          : ""
      ),
      next_floded_num: Number(
        null !=
          (P =
            null != (q = null == l ? void 0 : l.next_floded_num)
              ? q
              : null == l
              ? void 0
              : l.nextFlodedNum)
          ? P
          : 0
      ),
      related_info: p(
        null != (E = null == l ? void 0 : l.related_info) ? E : {}
      ),
      folded_items: Array.isArray(null == l ? void 0 : l.folded_items)
        ? l.folded_items.map(e)
        : [],
      llm_tag: "微证券热点速递" === A ? 1 : 0,
    });
  };
(exports.adaptQueryStockNewsListResp = function (e) {
  var l, n, t, r, u, i, o, s, c, m, p, f, y;
  if (!e) return e;
  var g = null != (l = e.data) ? l : {},
    b = a({}, e),
    h = null != (n = e.code) ? n : e.retcode,
    S = "0" === String(h) || 0 === h,
    w = (function (e) {
      for (var l, n, t = [], r = 0; r < e.length; ) {
        var u = e[r],
          i = Number(
            null !=
              (n =
                null != (l = null == u ? void 0 : u.nextFlodedNum)
                  ? l
                  : null == u
                  ? void 0
                  : u.next_floded_num)
              ? n
              : 0
          );
        if (i > 0) {
          var o = e.slice(r + 1, r + 1 + i).map(v);
          t.push(d(a({}, v(u)), { folded_items: o })), (r += i + 1);
        } else t.push(v(u)), (r += 1);
      }
      return t;
    })(null != (t = g.data) ? t : []),
    N = (
      null != (u = null != (r = e.symbolsName) ? r : g.symbolsName) ? u : []
    ).map(_);
  return d(a({}, b), {
    code: S ? 0 : Number(null != h ? h : -1),
    msg: String(null != (i = e.msg) ? i : ""),
    news_list: w,
    has_next: Number(
      null != (s = null != (o = g.has_next) ? o : e.has_next) ? s : 0
    ),
    next_page_cursor: String(
      null != (m = null != (c = g.last_score) ? c : g.next_page_cursor) ? m : ""
    ),
    importance_num: Number(null != (p = g.importance_num) ? p : 0),
    stock_infos: N,
    offset: Number(null != (y = null != (f = g.offset) ? f : e.offset) ? y : 0),
  });
}),
  (exports.filterEmptyTitleNews = function (e) {
    var l = !1,
      n = (function e(n) {
        return (n || []).reduce(function (n, t) {
          if (!t || !String(t.title || "").trim()) return (l = !0), n;
          var r = t.folded_items;
          return (
            n.push(
              Array.isArray(r) && r.length > 0
                ? d(a({}, t), { folded_items: e(r) })
                : t
            ),
            n
          );
        }, []);
      })(e);
    return (
      l && m.StockBridge.aegisReportEvent("MONITOR-STOCKNEWS_TITLE_ERROR"), n
    );
  }),
  (exports.queryStockNewsList = function (l) {
    return (
      (n = this),
      null,
      (t = e().mark(function n() {
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  "return",
                  c.newsRequest("/zxg/news/news_feed/query_stock_news_list", l)
                );
              case 1:
              case "end":
                return e.stop();
            }
        }, n);
      })),
      new Promise(function (e, l) {
        var r = function (e) {
            try {
              i(t.next(e));
            } catch (e) {
              l(e);
            }
          },
          u = function (e) {
            try {
              i(t.throw(e));
            } catch (e) {
              l(e);
            }
          },
          i = function (l) {
            return l.done ? e(l.value) : Promise.resolve(l.value).then(r, u);
          };
        i((t = t.apply(n, null)).next());
      })
    );
    var n, t;
  });
