var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  l = Object.defineProperty,
  t = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  a = function (e, n, t) {
    return n in e
      ? l(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[n] = t);
  },
  s = function (e, l) {
    for (var t in l || (l = {})) i.call(l, t) && a(e, t, l[t]);
    if (u) {
      var r,
        s = n(u(l));
      try {
        for (s.s(); !(r = s.n()).done; ) {
          t = r.value;
          o.call(l, t) && a(e, t, l[t]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  m = function (e, n) {
    return t(e, r(n));
  },
  _ = require("../gray.js"),
  c = function (e) {
    var n, l, t, r, u, i, o, a, _, c, d, v, p, b;
    if (e)
      return m(s({}, e), {
        chg_percent: String(null != (n = e.chg_percent) ? n : ""),
        live_status: Number(null != (l = e.live_status) ? l : 0),
        media_icon_url: String(
          null != (r = null != (t = e.media_icon_url) ? t : e.media_icon)
            ? r
            : ""
        ),
        media_name: String(null != (u = e.media_name) ? u : ""),
        estimate_start_time: Number(
          null != (i = e.estimate_start_time) ? i : 0
        ),
        estimate_end_time: Number(null != (o = e.estimate_end_time) ? o : 0),
        viewer_icons_url: String(null != (a = e.viewer_icons_url) ? a : ""),
        reserve_flag: Number(null != (_ = e.reserve_flag) ? _ : 0),
        participate_num: Number(null != (c = e.participate_num) ? c : 0),
        live_count: Number(null != (d = e.live_count) ? d : 0),
        stock_code: String(null != (v = e.stock_code) ? v : ""),
        stock_name: String(null != (p = e.stock_name) ? p : ""),
        media_id: Number(null != (b = e.media_id) ? b : 0),
      });
  },
  d = function (e) {
    var n, l, t;
    return Number(null != (n = null == e ? void 0 : e.has_next) ? n : 0)
      ? JSON.stringify({
          offset: Number(
            null != (l = null == e ? void 0 : e.next_offset) ? l : 0
          ),
          req_session: Number(
            null != (t = null == e ? void 0 : e.req_session) ? t : 0
          ),
        })
      : "";
  };
(exports.adaptQueryColumnNewsListResp = function (e) {
  var n, l, t, r;
  if (!e) return e;
  var u = s({}, e),
    i = (Array.isArray(null == e ? void 0 : e.data) ? e.data : []).map(
      function (e) {
        return (function (e) {
          var n, l, t, r, u, i, o, a, _, d, v, p, b, f, g, y, N, w, h, S, x, O;
          return m(s({}, e), {
            news_id: String(
              null !=
                (l =
                  null != (n = null == e ? void 0 : e.id)
                    ? n
                    : null == e
                    ? void 0
                    : e.news_id)
                ? l
                : ""
            ),
            title: String(null != (t = null == e ? void 0 : e.title) ? t : ""),
            cont_type: Number(
              null != (r = null == e ? void 0 : e.cont_type) ? r : 0
            ),
            news_type: Number(
              null !=
                (i =
                  null != (u = null == e ? void 0 : e.news_type)
                    ? u
                    : null == e
                    ? void 0
                    : e.type)
                ? i
                : 0
            ),
            property: Number(
              null !=
                (a =
                  null != (o = null == e ? void 0 : e.property)
                    ? o
                    : null == e
                    ? void 0
                    : e.propety)
                ? a
                : 0
            ),
            source: String(
              null != (_ = null == e ? void 0 : e.source) ? _ : ""
            ),
            special_type: Number(
              null != (d = null == e ? void 0 : e.special_type) ? d : 0
            ),
            focus_image: String(
              null !=
                (p =
                  null != (v = null == e ? void 0 : e.focus_img)
                    ? v
                    : null == e
                    ? void 0
                    : e.focus_image)
                ? p
                : ""
            ),
            thumb_image: String(
              null !=
                (f =
                  null != (b = null == e ? void 0 : e.thumb_img)
                    ? b
                    : null == e
                    ? void 0
                    : e.thumb_image)
                ? f
                : ""
            ),
            summary: String(
              null != (g = null == e ? void 0 : e.summary) ? g : ""
            ),
            publish_time: Number(
              null != (y = null == e ? void 0 : e.publish_time) ? y : 0
            ),
            comment_num: Number(
              null != (N = null == e ? void 0 : e.comment_num) ? N : 0
            ),
            comment_id: String(
              null !=
                (h =
                  null != (w = null == e ? void 0 : e.commentid)
                    ? w
                    : null == e
                    ? void 0
                    : e.comment_id)
                ? h
                : ""
            ),
            ext_image_list: String(
              null != (S = null == e ? void 0 : e.ext_image_list) ? S : ""
            ),
            is_top: Number(null != (x = null == e ? void 0 : e.is_top) ? x : 0),
            label: String(null != (O = null == e ? void 0 : e.label) ? O : ""),
            extra_info: c(null == e ? void 0 : e.extra_info),
          });
        })(e);
      }
    ),
    o = null != (n = e.retcode) ? n : e.code,
    a = "0" === String(o) || 0 === o;
  return m(s({}, u), {
    code: a ? 0 : Number(null != o ? o : -1),
    msg: String(
      null !=
        (t =
          null != (l = null == e ? void 0 : e.retmsg)
            ? l
            : null == e
            ? void 0
            : e.msg)
        ? t
        : ""
    ),
    news_list: i,
    has_next: Number(null != (r = null == e ? void 0 : e.has_next) ? r : 0)
      ? 1
      : 0,
    next_page_cursor: d(e),
  });
}),
  (exports.queryColumnNewsList = function (n) {
    return (
      (l = this),
      null,
      (t = e().mark(function l() {
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  "return",
                  _.newsRequest("/zxg/news/news_feed/query_column_news_list", n)
                );
              case 1:
              case "end":
                return e.stop();
            }
        }, l);
      })),
      new Promise(function (e, n) {
        var r = function (e) {
            try {
              i(t.next(e));
            } catch (e) {
              n(e);
            }
          },
          u = function (e) {
            try {
              i(t.throw(e));
            } catch (e) {
              n(e);
            }
          },
          i = function (n) {
            return n.done ? e(n.value) : Promise.resolve(n.value).then(r, u);
          };
        i((t = t.apply(l, null)).next());
      })
    );
    var l, t;
  });
