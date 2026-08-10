require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../@babel/runtime/helpers/typeof"),
  r = require("../../../../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../../../../@babel/runtime/helpers/createClass"),
  o = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = Object.defineProperty,
  l = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  d = Object.prototype.propertyIsEnumerable,
  _ = function (e, t, n) {
    return t in e
      ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  m = function (e, t) {
    for (var n in t || (t = {})) c.call(t, n) && _(e, n, t[n]);
    if (u) {
      var r,
        i = o(u(t));
      try {
        for (i.s(); !(r = i.n()).done; ) {
          n = r.value;
          d.call(t, n) && _(e, n, t[n]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  p = function (e, t) {
    return l(e, s(t));
  },
  g = function (e, t, n) {
    return new Promise(function (r, i) {
      var o = function (e) {
          try {
            l(n.next(e));
          } catch (e) {
            i(e);
          }
        },
        a = function (e) {
          try {
            l(n.throw(e));
          } catch (e) {
            i(e);
          }
        },
        l = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(o, a);
        };
      l((n = n.apply(e, t)).next());
    });
  },
  f = require("../../../../../../common/vendor.js"),
  v = require("../../../stock-news-core/utils/request/index.js"),
  b = require("../../../stock-news-core/utils/loginHelper.js"),
  h = require("../../../stock-news-core/utils/tools.js"),
  w = require("../../../stock-community-base/utils/privacyCheck.js"),
  y = require("../../../stock-news-base/service/news/gray.js"),
  k = require("../../../stock-news-base/service/news/apis/queryColumnNewsList.js"),
  S = require("../../../stock-news-base/service/news/apis/queryMultiStockNewsList.js"),
  x = require("../../../../@ungap/url-search-params/esm/index.js"),
  C = function (e) {
    var t, n;
    return p(m({}, e), {
      url: String(
        null !=
          (n =
            null != (t = null == e ? void 0 : e.url)
              ? t
              : null == e
              ? void 0
              : e.imgurl)
          ? n
          : ""
      ),
    });
  },
  N = function (e) {
    var t, n, r, i, o, a, l, s, u, c, d, _, g, f, v;
    return p(m({}, e), {
      video_id: String(null != (t = null == e ? void 0 : e.video_id) ? t : ""),
      video_time: String(
        null != (n = null == e ? void 0 : e.video_time) ? n : ""
      ),
      video_stand_img: String(
        null != (r = null == e ? void 0 : e.video_stand_img) ? r : ""
      ),
      aspect: String(null != (i = null == e ? void 0 : e.aspect) ? i : ""),
      hd_vid: String(null != (o = null == e ? void 0 : e.hd_vid) ? o : ""),
      cover_pic: String(
        null != (a = null == e ? void 0 : e.cover_pic) ? a : ""
      ),
      duration: Number(null != (l = null == e ? void 0 : e.duration) ? l : 0),
      format: String(null != (s = null == e ? void 0 : e.format) ? s : ""),
      media: String(null != (u = null == e ? void 0 : e.media) ? u : ""),
      media_icon_url: String(
        null != (c = null == e ? void 0 : e.media_icon_url) ? c : ""
      ),
      media_id: String(null != (d = null == e ? void 0 : e.media_id) ? d : ""),
      course_id: String(
        null != (_ = null == e ? void 0 : e.course_id) ? _ : ""
      ),
      course_title: String(
        null != (g = null == e ? void 0 : e.course_title) ? g : ""
      ),
      course_subtitle: String(
        null != (f = null == e ? void 0 : e.course_subtitle) ? f : ""
      ),
      course_type: Number(
        null != (v = null == e ? void 0 : e.course_type) ? v : 0
      ),
    });
  },
  T = function (e) {
    var t, n, r, i, o, a, l, s;
    if (e)
      return p(m({}, e), {
        report_id: String(
          null != (n = null != (t = e.report_id) ? t : e.feed_id) ? n : ""
        ),
        title: String(null != (r = e.title) ? r : ""),
        summary: String(null != (i = e.summary) ? i : ""),
        label: String(null != (o = e.label) ? o : ""),
        label_colour: String(null != (a = e.label_colour) ? a : ""),
        img_url: String(null != (l = e.img_url) ? l : ""),
        pub_time:
          null != e.pub_time && "" !== e.pub_time
            ? String(
                null != e.feed_id
                  ? 1e3 * Number(e.pub_time)
                  : Number(e.pub_time)
              )
            : "",
        feed_type: Number(null != (s = e.feed_type) ? s : 0),
      });
  },
  D = function (e) {
    var t, n, r, i, o, a, l, s, u;
    return p(m({}, e), {
      news_id: String(
        null !=
          (n =
            null != (t = null == e ? void 0 : e.news_id)
              ? t
              : null == e
              ? void 0
              : e.id)
          ? n
          : ""
      ),
      title: String(null != (r = null == e ? void 0 : e.title) ? r : ""),
      source: String(null != (i = null == e ? void 0 : e.source) ? i : ""),
      publish_time: Number(
        null != (o = null == e ? void 0 : e.publish_time) ? o : 0
      ),
      thumb_image: String(
        null !=
          (l =
            null != (a = null == e ? void 0 : e.thumb_image)
              ? a
              : null == e
              ? void 0
              : e.thumb_img)
          ? l
          : ""
      ),
      news_type: Number(
        null !=
          (u =
            null != (s = null == e ? void 0 : e.news_type)
              ? s
              : null == e
              ? void 0
              : e.type)
          ? u
          : 0
      ),
    });
  },
  O = function (e) {
    var t,
      n,
      r,
      i,
      o,
      a,
      l,
      s,
      u,
      c,
      d,
      _,
      g,
      f,
      v,
      b,
      h,
      w,
      y,
      k,
      S,
      x,
      D,
      O,
      I,
      L,
      q,
      A,
      E,
      R,
      P,
      B,
      M,
      z,
      j,
      F,
      Y,
      H,
      U,
      W,
      G,
      X,
      $,
      V,
      Z,
      Q,
      J,
      K,
      ee,
      te,
      ne,
      re,
      ie,
      oe,
      ae,
      le = e.extra_info || {},
      se = e.video_info,
      ue = p(m({}, le), {
        if_feedback: Number(null != (t = le.if_feedback) ? t : 0),
        ab_test_report_info: String(
          null != (n = le.ab_test_report_info) ? n : ""
        ),
        play_num: Number(null != (r = le.play_num) ? r : 0),
        live_id: String(null != (i = le.live_id) ? i : ""),
        live_status: String(null != (o = le.live_status) ? o : ""),
        live_type: String(null != (a = le.live_type) ? a : ""),
        media_id: Number(null != (l = le.media_id) ? l : 0),
        media_name: String(null != (s = le.media_name) ? s : ""),
        media_icon: String(
          null != (c = null != (u = le.media_icon_url) ? u : le.media_icon)
            ? c
            : ""
        ),
        live_count: Number(null != (d = le.live_count) ? d : 0),
        participate_num: Number(null != (_ = le.participate_num) ? _ : 0),
        reserve_flag: Number(null != (g = le.reserve_flag) ? g : 0),
        viewer_icons_url: String(null != (f = le.viewer_icons_url) ? f : ""),
        live: le.live
          ? p(m({}, le.live), {
              rtmp: String(null != (v = le.live.rtmp) ? v : ""),
              flv: String(null != (b = le.live.flv) ? b : ""),
              m3u8: String(null != (h = le.live.m3u8) ? h : ""),
            })
          : void 0,
        vod: Array.isArray(le.vod)
          ? le.vod.map(function (e) {
              var t, n, r;
              return p(m({}, e), {
                video_url: String(
                  null != (t = null == e ? void 0 : e.video_url) ? t : ""
                ),
                start_time: Number(
                  null != (n = null == e ? void 0 : e.start_time) ? n : 0
                ),
                end_time: Number(
                  null != (r = null == e ? void 0 : e.end_time) ? r : 0
                ),
              });
            })
          : [],
        stock_name: String(null != (w = le.stock_name) ? w : ""),
        chg_percent: String(null != (y = le.chg_percent) ? y : ""),
        stock_code: String(null != (k = le.stock_code) ? k : ""),
      }),
      ce = null;
    if (se)
      if ("string" == typeof se)
        try {
          ce = N(JSON.parse(se));
        } catch (e) {
          ce = null;
        }
      else ce = N(se);
    var de = Number(
      null != (x = null != (S = e.news_type) ? S : e.type) ? x : 0
    );
    return p(m({}, e), {
      news_id: String(
        null != (O = null != (D = e.id) ? D : e.news_id) ? O : ""
      ),
      origin_id: String(null != (I = e.origin_id) ? I : ""),
      url: String(null != (L = e.url) ? L : ""),
      type: de,
      cont_type: Number(null != (q = e.cont_type) ? q : 0),
      title: String(null != (A = e.title) ? A : ""),
      source: String(null != (E = e.source) ? E : ""),
      focus_image: String(
        null != (P = null != (R = e.focus_img) ? R : e.focus_image) ? P : ""
      ),
      thumb_image: String(
        null != (M = null != (B = e.thumb_img) ? B : e.thumb_image) ? M : ""
      ),
      publish_time: Number(null != (z = e.publish_time) ? z : 0),
      is_top: Number(null != (j = e.is_top) ? j : 0),
      special_type: Number(null != (F = e.special_type) ? F : 0),
      label: String(null != (Y = e.label) ? Y : ""),
      label_colour: String(null != (H = e.label_colour) ? H : ""),
      comment_num: Number(null != (U = e.comment_num) ? U : 0),
      comment_status: Number(null != (W = e.comment_status) ? W : 0),
      comment_id: String(
        null != (X = null != (G = e.commentid) ? G : e.comment_id) ? X : ""
      ),
      charge_type: Number(
        null !=
          (Z =
            null != (V = e.charge_type)
              ? V
              : null == ($ = e.ganhuo_report)
              ? void 0
              : $.free_symbol)
          ? Z
          : 0
      ),
      img_display_mode: Number(null != (Q = e.img_display_mode) ? Q : 0),
      img_num: Number(null != (J = e.img_num) ? J : 0),
      video_info: ce,
      ext_image_list: String(null != (K = e.ext_image_list) ? K : ""),
      has_live: Number(null != (ee = e.has_live) ? ee : 0),
      flow_id: String(null != (te = e.flow_id) ? te : ""),
      recall_type: String(null != (ne = e.recall_type) ? ne : ""),
      thumbnails: Array.isArray(e.thumbnails) ? e.thumbnails.map(C) : [],
      thumbnails_qqnews: Array.isArray(e.thumbnails_qqnews)
        ? e.thumbnails_qqnews.map(C)
        : [],
      extra_info: ue,
      view_num: String(null != (re = e.view_num) ? re : ""),
      news_type: de,
      articletype: String(null != (ie = e.articletype) ? ie : ""),
      time: String(null != (oe = e.time) ? oe : ""),
      report_card: T(null != (ae = e.report_card) ? ae : e.ganhuo_report),
    });
  },
  I = function (e) {
    var t, n, r, i;
    if (e) {
      var o = Array.isArray(e.news_list) ? e.news_list : [];
      return p(m({}, e), {
        cursor: String(null != (t = e.cursor) ? t : ""),
        index: Number(null != (n = e.index) ? n : 0),
        total_num: Number(null != (r = e.total_num) ? r : 0),
        has_next: Number(null != (i = e.has_next) ? i : 0),
        news_list: o.map(O),
      });
    }
  },
  L = function (e, t, n) {
    var r = e.getFullYear(),
      i = e.getMonth() + 1,
      o = e.getDate(),
      a = e.getHours(),
      l = e.getMinutes(),
      s = e.getSeconds();
    return (
      (i = i < 10 ? "0".concat(i) : i),
      (o = o < 10 ? "0".concat(o) : o),
      (a = a < 10 ? "0".concat(a) : a),
      (l = l < 10 ? "0".concat(l) : l),
      (s = s < 10 ? "0".concat(s) : s),
      (t = t || "%Y-%M-%d %h:%m:%s")
        .replace(/%Y/g, r)
        .replace(/%M/g, i)
        .replace(/%d/g, o)
        .replace(/%h/g, a)
        .replace(/%m/g, l)
        .replace(/%s/g, s)
    );
  },
  q = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    if (null == e) return "";
    var n = new Date().getTime(),
      r = new Date().setHours(0, 0, 0, 0),
      i = 1e3 * e,
      o = new Date(i),
      a = parseInt(n, 10) - parseInt(i, 10);
    return 0 < a && a < 36e5
      ? parseInt(a / 6e4, 10) > t - 1
        ? "".concat(parseInt(a / 6e4, 10), "分钟前")
        : "刚刚"
      : 36e5 < a && a < 72e5
      ? "1小时前"
      : 72e5 < a && i > r
      ? L(o, "%h:%m")
      : o.getFullYear() === new Date().getFullYear()
      ? L(o, "%M月%d日")
      : L(o, "%Y年%M月%d日");
  };
function A(e) {
  var t = new Date(),
    n = t.getTime() - e,
    r = new Date(e);
  return n < 6e4 && n > 0
    ? "刚刚"
    : n < 36e5 && n > 0
    ? "".concat(Math.floor(n / 6e4), "分钟前")
    : n < 72e5 && n > 0
    ? "1小时前"
    : new Date(e).toDateString() === t.toDateString()
    ? new Date(e).toTimeString().substr(0, 5)
    : ""
        .concat(
          r.getMonth() + 1 < 10
            ? "0".concat(r.getMonth() + 1)
            : r.getMonth() + 1,
          "月"
        )
        .concat(r.getDate(), "日");
}
function E(e) {
  var t = new Date(e),
    n = t.getHours(),
    r = t.getMinutes();
  return (r = r < 10 ? "0".concat(r) : r), "".concat(n, ":").concat(r);
}
function R(e) {
  var t = new Date(e),
    n = t.toDateString();
  return ""
    .concat(t.getFullYear(), "年")
    .concat(
      (t.getMonth() + 1).toString().replace(/^[0-9]$/, function (e) {
        return "0".concat(e);
      }),
      "月"
    )
    .concat(
      t
        .getDate()
        .toString()
        .replace(/^[0-9]$/, function (e) {
          return "0".concat(e);
        }),
      "日 周"
    )
    .concat(
      {
        Sun: "日",
        Mon: "一",
        Tue: "二",
        Wed: "三",
        Thu: "四",
        Fri: "五",
        Sat: "六",
      }[n.split(" ")[0]]
    );
}
var P = "FEED_RECOM_SETTING_VAL",
  B = "FEED_RECOM_IS_RM_LOCAL_DATA",
  M = "news-yaowen-cache",
  z = "news-tzbd-cache",
  j = "information.feed.click";
function F(e, t, n) {
  var r = m(m({}, b.getLoginParamsObject(t)), n || {});
  return v.request("".concat(e).concat(t), r, { method: "GET" });
}
var Y = new ((function () {
    function o() {
      var e;
      r(this, o),
        _(this, "symbol" != n((e = "listShowReported")) ? e + "" : e, !1);
    }
    return (
      i(o, [
        {
          key: "getYaowenList",
          value: function () {
            return g(this, arguments, function () {
              var e = this,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                r = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 ? arguments[2] : void 0;
              return t().mark(function o() {
                var a, l, s, u, c, d, _, v, b, w, k, S, x, C;
                return t().wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (l = n.refresh),
                          (s = n.limit),
                          (c = 0),
                          r.list &&
                            r.list.length &&
                            r.list.findIndex(function (e) {
                              return e && e.cont_type && 13 === e.cont_type;
                            }) &&
                            (c = 1),
                          (o.next = 5),
                          y.isNewsGrayUser("queryColumnYaowenNewsList")
                        );
                      case 5:
                        if (!o.sent) {
                          o.next = 15;
                          break;
                        }
                        return (
                          (d = {
                            limit: s,
                            refresh: l ? 1 : 0,
                            feed_recom: e.getFeedRecom(),
                            total_news_num: l
                              ? 0
                              : r.list.length + r.importantBanners.length + c,
                            top_num: l ? 0 : r.importantBanners.length,
                          }),
                          (o.next = 9),
                          (function (e) {
                            return g(
                              this,
                              null,
                              t().mark(function n() {
                                return t().wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return t.abrupt(
                                          "return",
                                          y.newsRequest(
                                            "/zxg/news/news_feed/query_column_yaowen_news_list",
                                            e
                                          )
                                        );
                                      case 1:
                                      case "end":
                                        return t.stop();
                                    }
                                }, n);
                              })
                            );
                          })(d)
                        );
                      case 9:
                        if ((_ = o.sent) && 0 === _.code) {
                          o.next = 12;
                          break;
                        }
                        return o.abrupt("return", { yaowen: r, tzbd: [] });
                      case 12:
                        (u = _), (o.next = 23);
                        break;
                      case 15:
                        return (
                          (v = h.md5()),
                          (b = p(
                            m(
                              p(m({}, n), {
                                reserve: 2921863317,
                                tzbd_reserve: 2102407,
                              }),
                              v
                            ),
                            {
                              total_news_num: l
                                ? 0
                                : r.list.length + r.importantBanners.length + c,
                              top_num: l ? 0 : r.importantBanners.length,
                            }
                          )),
                          l ||
                            (b = p(m({}, b), {
                              stock_pos: r.yaowen_stock_pos,
                            })),
                          (o.t0 = function (e) {
                            var t, n, r, i, o, a, l;
                            if (!e) return e;
                            var s = null != (t = e.retcode) ? t : e.code,
                              u = "0" === String(s) || 0 === s,
                              c = Array.isArray(e.recom_data)
                                ? e.recom_data
                                : [],
                              d = m({}, e),
                              _ = c.map(O),
                              g = Array.isArray(e.tzbd) ? e.tzbd : [];
                            return p(m({}, d), {
                              code: u ? 0 : Number(null != s ? s : -1),
                              msg: String(
                                null != (r = null != (n = e.retmsg) ? n : e.msg)
                                  ? r
                                  : ""
                              ),
                              news_list: _,
                              servertime: Number(
                                null != (i = e.servertime) ? i : 0
                              ),
                              trace_info: String(
                                null != (o = e.trace_info) ? o : ""
                              ),
                              stock_pos: Number(
                                null != (a = e.stock_pos) ? a : 0
                              ),
                              top_type: Number(
                                null != (l = e.top_type) ? l : 1
                              ),
                              tzbd: g.map(D),
                              user_related_news: I(e.user_related_news),
                            });
                          }),
                          (o.next = 21),
                          e.getYaowen(b)
                        );
                      case 21:
                        (o.t1 = o.sent), (u = (0, o.t0)(o.t1));
                      case 23:
                        return (
                          (w = u.tzbd || []),
                          ((k = { yaowen: {}, tzbd: [] }).yaowen =
                            Object.assign({}, r)),
                          (S = u.news_list || []),
                          (x = []),
                          S &&
                            S.forEach(function (t, n) {
                              if (
                                ((t.id = t.id || t.news_id),
                                (t.read = i.indexOf(t.news_id || t.id) >= 0),
                                (t.formatedTime = q(t.publish_time, 15)),
                                !t.time && t.publish_time)
                              ) {
                                var o = new Date(1e3 * t.publish_time),
                                  a = function (e) {
                                    return String(e).padStart(2, "0");
                                  };
                                t.time = ""
                                  .concat(o.getFullYear(), "-")
                                  .concat(a(o.getMonth() + 1), "-")
                                  .concat(a(o.getDate()), " ")
                                  .concat(a(o.getHours()), ":")
                                  .concat(a(o.getMinutes()), ":")
                                  .concat(a(o.getSeconds()));
                              }
                              try {
                                t.label_style = t.label_colour
                                  .split(",")[0]
                                  .split("|");
                              } catch (e) {
                                t.label_style = [];
                              }
                              t.ext_image_list &&
                                (t.imgList = t.ext_image_list
                                  .split(",")
                                  .slice(0, 3)),
                                (t.focus_img =
                                  t.focus_img || t.focus_image || ""),
                                (t.thumb_img =
                                  t.thumb_img || t.thumb_image || ""),
                                0 === t.img_display_mode &&
                                  r.list.length + n > 48 &&
                                  (5 === t.type && t.focus_img
                                    ? (t.img_display_mode = 2)
                                    : t.imgList && t.imgList.length >= 3
                                    ? (t.img_display_mode = 3)
                                    : t.thumb_img && (t.img_display_mode = 1)),
                                e.handleTuoShuiYanBao(t);
                            }),
                          l
                            ? ((k.yaowen.showHeadline = S.some(function (e) {
                                return 1 === e.is_top || "1" === e.is_top;
                              })),
                              w.length &&
                                (w.forEach(function (e) {
                                  e.formatedTime = q(e.publish_time, 15);
                                }),
                                (k.tzbd = w.slice(0, 2)),
                                setTimeout(function () {
                                  (k.tzbd = w), f.StockBridge.setStorage(z, w);
                                }, 500)),
                              (S = S.filter(function (e) {
                                return (
                                  (1 !== e.is_top && "1" !== e.is_top) ||
                                  ((e.pos = x.length), x.push(e), !1)
                                );
                              })),
                              0 === x.length &&
                                S &&
                                S.length > 0 &&
                                ((S[0].pos = 0), (x = S.splice(0, 1))),
                              (k.yaowen.list = S),
                              (k.yaowen.importantBanners = x),
                              setTimeout(function () {
                                f.StockBridge.setStorage(M, k.yaowen);
                              }, 0))
                            : (k.yaowen.list = r.list.concat(S)),
                          (null == (a = f.StockBridge.getStorage(P))
                            ? void 0
                            : a.indexOf("confirm")) > -1 &&
                            k.yaowen.list.length &&
                            (C = k.yaowen.list.findIndex(function (e) {
                              var t;
                              return (
                                (null == (t = e.flow_id) ? void 0 : t.length) >
                                5
                              );
                            })) >= 0 &&
                            k.yaowen.list.splice(
                              C,
                              1,
                              p(m({}, k.yaowen.list[C]), { showSpliter: !0 })
                            ),
                          o.abrupt(
                            "return",
                            ((k.yaowen.firstRequestDone = !0),
                            (k.yaowen.has_next = S && S.length > 0),
                            r.yaowenShow &&
                              !e.listShowReported &&
                              e.reportListShowData(k),
                            k)
                          )
                        );
                      case 29:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })();
            });
          },
        },
        {
          key: "handleTuoShuiYanBao",
          value: function (e) {
            if (19 === e.type) {
              e.formatedTime = "";
              var t = e.report_card;
              t &&
                ((e.title = t.title || e.title),
                (e.id = t.report_id || e.id || e.news_id),
                (e.img_display_mode = e.img_display_mode || 1),
                (e.thumb_img = e.thumb_img || e.thumb_image || t.img_url || ""),
                !e.time &&
                  t.pub_time &&
                  (e.time = new Date(Number(t.pub_time)).toString()));
            }
          },
        },
        {
          key: "getYaowen",
          value: function (e) {
            return (
              (e.feedRecom = this.getFeedRecom()),
              v.request(
                "https://snp.tenpay.com/cgi-bin/snpgw_yaowen_recom.fcgi",
                e,
                { method: "post" }
              )
            );
          },
        },
        {
          key: "getFeedRecom",
          value: function () {
            this.clearRecomLocalData();
            var e = 1,
              t = f.StockBridge.getStorage(P);
            return (
              t && (e = +("confirm" === t)),
              w.isPrivacyAgreementAgreed() || (e = 0),
              e
            );
          },
        },
        {
          key: "getYaowenFeedbackDataList",
          value: function () {
            return g(this, arguments, function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = arguments.length > 1 ? arguments[1] : void 0,
                r = arguments.length > 2 ? arguments[2] : void 0;
              return t().mark(function i() {
                var o, a, l, s, u, c, d, _, f, w, k, S, x;
                return t().wrap(function (i) {
                  for (;;)
                    switch ((i.prev = i.next)) {
                      case 0:
                        if (
                          ((o = e.feedbackCountDown),
                          (a = e.extra_info) && a.if_feedback)
                        ) {
                          i.next = 3;
                          break;
                        }
                        return i.abrupt("return");
                      case 3:
                        if (!((o && 2 === o) || 0 === o)) {
                          i.next = 5;
                          break;
                        }
                        return i.abrupt("return");
                      case 5:
                        return (
                          (l = e.id),
                          (i.next = 8),
                          y.isNewsGrayUser("queryYaowenFeedback")
                        );
                      case 8:
                        if (!i.sent) {
                          i.next = 17;
                          break;
                        }
                        return (
                          (i.next = 11),
                          (function (e) {
                            return g(
                              this,
                              null,
                              t().mark(function n() {
                                return t().wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return t.abrupt(
                                          "return",
                                          y.newsRequest(
                                            "/zxg/news/news_feed/query_yaowen_feedback",
                                            e
                                          )
                                        );
                                      case 1:
                                      case "end":
                                        return t.stop();
                                    }
                                }, n);
                              })
                            );
                          })({ news_id: l })
                        );
                      case 11:
                        if ((u = i.sent) && 0 === u.code) {
                          i.next = 14;
                          break;
                        }
                        return i.abrupt("return", {});
                      case 14:
                        (s = u), (i.next = 23);
                        break;
                      case 17:
                        return (
                          (c =
                            "https://snp.tenpay.com/cgi-bin/snpgw_yaowenfeedback_news.fcgi"),
                          (d = h.md5()),
                          (_ = m(
                            p(m({}, d), { news_id: l }),
                            b.getLoginParamsObject(c)
                          )),
                          (i.t0 = function (e) {
                            var t,
                              n,
                              r,
                              i,
                              o,
                              a,
                              l,
                              s,
                              u,
                              c,
                              d,
                              _,
                              g,
                              f,
                              v,
                              b,
                              h,
                              w,
                              y,
                              k,
                              S,
                              x,
                              C,
                              N,
                              T,
                              D,
                              O,
                              I,
                              L,
                              q,
                              A,
                              E,
                              R,
                              P,
                              B,
                              M,
                              z,
                              j,
                              F,
                              Y,
                              H,
                              U,
                              W,
                              G,
                              X,
                              $,
                              V,
                              Z,
                              Q,
                              J,
                              K,
                              ee,
                              te,
                              ne,
                              re;
                            if (!e) return e;
                            var ie,
                              oe = null != (t = e.retcode) ? t : e.code,
                              ae = "0" === String(oe) || 0 === oe,
                              le =
                                (Array.isArray(e.data) ? e.data[0] : e.data) ||
                                null;
                            if (le) {
                              var se = le.extra_info || {},
                                ue = le.video_info,
                                ce = p(m({}, se), {
                                  if_feedback: Number(
                                    null !=
                                      (r =
                                        null != (n = se.if_feedback)
                                          ? n
                                          : le.if_feedback)
                                      ? r
                                      : 0
                                  ),
                                  ab_test_report_info: String(
                                    null !=
                                      (o =
                                        null != (i = se.ab_test_report_info)
                                          ? i
                                          : le.ab_test_report_info)
                                      ? o
                                      : ""
                                  ),
                                  play_num: Number(
                                    null != (a = se.play_num) ? a : 0
                                  ),
                                  live_id: String(
                                    null != (l = se.live_id) ? l : ""
                                  ),
                                  live_status: String(
                                    null != (s = se.live_status) ? s : ""
                                  ),
                                  live_type: String(
                                    null != (u = se.live_type) ? u : ""
                                  ),
                                  media_id: Number(
                                    null != (c = se.media_id) ? c : 0
                                  ),
                                  media_name: String(
                                    null != (d = se.media_name) ? d : ""
                                  ),
                                  media_icon: String(
                                    null != (_ = se.media_icon) ? _ : ""
                                  ),
                                  live_count: Number(
                                    null != (g = se.live_count) ? g : 0
                                  ),
                                  participate_num: Number(
                                    null != (f = se.participate_num) ? f : 0
                                  ),
                                  reserve_flag: Number(
                                    null != (v = se.reserve_flag) ? v : 0
                                  ),
                                  viewer_icons_url: String(
                                    null != (b = se.viewer_icons_url) ? b : ""
                                  ),
                                  live: null != (h = se.live) ? h : {},
                                  vod: Array.isArray(se.vod) ? se.vod : [],
                                  stock_name: String(
                                    null != (w = se.stock_name) ? w : ""
                                  ),
                                  chg_percent: String(
                                    null != (y = se.chg_percent) ? y : ""
                                  ),
                                  stock_code: String(
                                    null != (k = se.stock_code) ? k : ""
                                  ),
                                }),
                                de = null;
                              if (ue)
                                if ("string" == typeof ue)
                                  try {
                                    var _e = JSON.parse(ue);
                                    de = {
                                      video_id: String(
                                        null != (S = _e.video_id) ? S : ""
                                      ),
                                      video_time: String(
                                        null != (x = _e.video_time) ? x : ""
                                      ),
                                      video_stand_img: String(
                                        null != (C = _e.video_stand_img)
                                          ? C
                                          : ""
                                      ),
                                      aspect: String(
                                        null != (N = _e.aspect) ? N : ""
                                      ),
                                    };
                                  } catch (e) {
                                    de = null;
                                  }
                                else
                                  de = {
                                    video_id: String(
                                      null != (T = ue.video_id) ? T : ""
                                    ),
                                    video_time: String(
                                      null != (D = ue.video_time) ? D : ""
                                    ),
                                    video_stand_img: String(
                                      null != (O = ue.video_stand_img) ? O : ""
                                    ),
                                    aspect: String(
                                      null != (I = ue.aspect) ? I : ""
                                    ),
                                  };
                              var me = m({}, le);
                              ie = p(m({}, me), {
                                news_id: String(
                                  null !=
                                    (q = null != (L = le.id) ? L : le.news_id)
                                    ? q
                                    : ""
                                ),
                                origin_id: String(
                                  null != (A = le.origin_id) ? A : ""
                                ),
                                title: String(null != (E = le.title) ? E : ""),
                                source: String(
                                  null != (R = le.source) ? R : ""
                                ),
                                url: String(null != (P = le.url) ? P : ""),
                                type: Number(null != (B = le.type) ? B : 0),
                                cont_type: Number(
                                  null != (M = le.cont_type) ? M : 0
                                ),
                                focus_image: String(
                                  null !=
                                    (j =
                                      null != (z = le.focus_img)
                                        ? z
                                        : le.focus_image)
                                    ? j
                                    : ""
                                ),
                                thumb_image: String(
                                  null !=
                                    (Y =
                                      null != (F = le.thumb_img)
                                        ? F
                                        : le.thumb_image)
                                    ? Y
                                    : ""
                                ),
                                ext_image_list: String(
                                  null != (H = le.ext_image_list) ? H : ""
                                ),
                                thumbnails: Array.isArray(le.thumbnails)
                                  ? le.thumbnails
                                  : [],
                                thumbnails_qqnews: Array.isArray(
                                  le.thumbnails_qqnews
                                )
                                  ? le.thumbnails_qqnews
                                  : [],
                                img_display_mode: Number(
                                  null != (U = le.img_display_mode) ? U : 0
                                ),
                                img_num: Number(
                                  null != (W = le.img_num) ? W : 0
                                ),
                                publish_time: Number(
                                  null != (G = le.publish_time) ? G : 0
                                ),
                                time: String(null != (X = le.time) ? X : ""),
                                comment_id: String(
                                  null !=
                                    (V =
                                      null != ($ = le.commentid)
                                        ? $
                                        : le.comment_id)
                                    ? V
                                    : ""
                                ),
                                comment_num: Number(
                                  null != (Z = le.comment_num) ? Z : 0
                                ),
                                comment_status: Number(
                                  null != (Q = le.comment_status) ? Q : 0
                                ),
                                charge_type: Number(
                                  null != (J = le.charge_type) ? J : 0
                                ),
                                has_live: Number(
                                  null != (K = le.has_live) ? K : 0
                                ),
                                if_feedback: Number(
                                  null != (ee = le.if_feedback) ? ee : 0
                                ),
                                ab_test_report_info: String(
                                  null != (te = le.ab_test_report_info)
                                    ? te
                                    : ""
                                ),
                                video_info: de,
                                extra_info: ce,
                              });
                            }
                            var pe = m({}, e);
                            return p(m({}, pe), {
                              code: ae ? 0 : Number(null != oe ? oe : -1),
                              msg: String(
                                null !=
                                  (re = null != (ne = e.retmsg) ? ne : e.msg)
                                  ? re
                                  : ""
                              ),
                              news_info: ie,
                            });
                          }),
                          (i.next = 21),
                          v.request(c, _, {})
                        );
                      case 21:
                        (i.t1 = i.sent), (s = (0, i.t0)(i.t1));
                      case 23:
                        if (!(f = s.news_info) || !f.news_id) {
                          i.next = 38;
                          break;
                        }
                        (w = Object.assign({}, n)),
                          (k = w.list),
                          (f.id = f.id || f.news_id),
                          (f.thumb_img = f.thumb_img || f.thumb_image || ""),
                          (f.focus_img = f.focus_img || f.focus_image || ""),
                          (f.formatedTime =
                            f.formatedTime || q(f.publish_time, 15)),
                          (f.isFeedback = 1),
                          (S = -1),
                          (x = 0);
                      case 29:
                        if (!(x < k.length)) {
                          i.next = 36;
                          break;
                        }
                        if (k[x].id !== l) {
                          i.next = 33;
                          break;
                        }
                        return (S = x), i.abrupt("break", 36);
                      case 33:
                        x++, (i.next = 29);
                        break;
                      case 36:
                        if (!(S >= 0)) {
                          i.next = 38;
                          break;
                        }
                        return i.abrupt(
                          "return",
                          (k[S].feedbackCountDown ||
                            (k[S].feedbackCountDown = 2),
                          (f.feedbackCountDown = k[S].feedbackCountDown - 1),
                          (f.read = r && r.indexOf(f.id) >= 0),
                          1 === k[S].feedbackCountDown &&
                            (k[S].feedbackCountDown = 0),
                          k.splice(S + 1, 0, f),
                          w)
                        );
                      case 38:
                        return i.abrupt("return", {});
                      case 39:
                      case "end":
                        return i.stop();
                    }
                }, i);
              })();
            });
          },
        },
        {
          key: "clearRecomLocalData",
          value: function () {
            f.StockBridge.getStorage(B) ||
              (f.StockBridge.setStorage(P, "confirm"),
              f.StockBridge.setStorage(B, !0));
          },
        },
        {
          key: "getChooseList",
          value: function () {
            return g(this, arguments, function () {
              var n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                r = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 ? arguments[2] : void 0;
              return t().mark(function o() {
                var a, l, s, u, c, d, _, p, f, v, b, h, w, k, x, C, N, T, D;
                return t().wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        if (
                          ((n = m({ num: 20 }, n)),
                          (c = r.groupId) && 0 != c.length)
                        ) {
                          o.next = 16;
                          break;
                        }
                        return (
                          (o.next = 5),
                          (function (e) {
                            return g(
                              this,
                              null,
                              t().mark(function e() {
                                return t().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return e.abrupt(
                                          "return",
                                          F(
                                            "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/",
                                            "groupInfos",
                                            void 0
                                          )
                                        );
                                      case 1:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            );
                          })()
                        );
                      case 5:
                        if (((o.t0 = a = o.sent), null == o.t0)) {
                          o.next = 10;
                          break;
                        }
                        (o.t1 = a), (o.next = 11);
                        break;
                      case 10:
                        o.t1 = {};
                      case 11:
                        if (
                          ((d = o.t1),
                          (_ =
                            null == (l = null == d ? void 0 : d.data)
                              ? void 0
                              : l.groupInfos) && 0 != _.length)
                        ) {
                          o.next = 15;
                          break;
                        }
                        return o.abrupt("return");
                      case 15:
                        (c = _[0].id),
                          _ &&
                            (_ = _.filter(function (e) {
                              return 1 == e.type && "全部" == e.name;
                            })),
                          _.length > 0 && (c = _[0].id);
                      case 16:
                        return (
                          (f = (p = n).refresh),
                          (v = p.num),
                          (h = r.page || 1),
                          f ? (h = 1) : (h += 1),
                          (o.next = 21),
                          y.isNewsGrayUser("queryMultiStockNewsList")
                        );
                      case 21:
                        if (!o.sent) {
                          o.next = 30;
                          break;
                        }
                        return (
                          (o.next = 24),
                          S.queryMultiStockNewsList({
                            type: 2,
                            limit: v,
                            last_page_cursor: f ? "" : r.nextPageCursor || "",
                            group_id: String(c),
                          })
                        );
                      case 24:
                        if ((w = o.sent) && 0 === w.code) {
                          o.next = 27;
                          break;
                        }
                        return o.abrupt("return");
                      case 27:
                        (b = w), (o.next = 35);
                        break;
                      case 30:
                        return (
                          (k = { grpId: c, type: "2", page: h, n: v }),
                          (o.next = 33),
                          (function (e) {
                            return g(
                              this,
                              null,
                              t().mark(function n() {
                                return t().wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return t.abrupt(
                                          "return",
                                          F(
                                            "https://proxy.finance.qq.com/cgi/cgi-bin/",
                                            "news/info/search",
                                            e
                                          )
                                        );
                                      case 1:
                                      case "end":
                                        return t.stop();
                                    }
                                }, n);
                              })
                            );
                          })(k)
                        );
                      case 33:
                        (x = o.sent),
                          (b = S.adaptQueryMultiStockNewsListResp(x));
                      case 35:
                        return (
                          (C =
                            null != (s = null == b ? void 0 : b.news_list)
                              ? s
                              : []),
                          (N = (
                            null != (u = null == b ? void 0 : b.stock_infos)
                              ? u
                              : []
                          ).reduce(function (e, t) {
                            return (e[t.stock_code] = t), e;
                          }, {})),
                          (T = C.map(function (e) {
                            var t,
                              n,
                              r,
                              o,
                              a,
                              l,
                              s = null != (t = e.news_id) ? t : "",
                              u = {
                                id: s,
                                type: e.news_type,
                                title: e.title,
                                source: e.src,
                                time: e.time
                                  ? A(
                                      new Date(
                                        e.time.replace(/-/g, "/")
                                      ).getTime()
                                    )
                                  : "",
                                stock: {},
                                read: i && i.indexOf(s) >= 0,
                              };
                            if (e.symbols && e.symbols.length > 0) {
                              var c = null != (n = e.symbols[0]) ? n : "";
                              u.stock = {
                                symbol: c,
                                name:
                                  null !=
                                  (o =
                                    null == (r = N[c]) ? void 0 : r.stock_name)
                                    ? o
                                    : "",
                                logo:
                                  null !=
                                  (l = null == (a = N[c]) ? void 0 : a.logo)
                                    ? l
                                    : "",
                              };
                            }
                            return u;
                          })),
                          (D = Object.assign({}, r)),
                          o.abrupt(
                            "return",
                            ((D.list = f ? T : [].concat(e(D.list), e(T))),
                            (D.page = h),
                            (D.hasNext =
                              1 === (null == b ? void 0 : b.has_next)),
                            (D.nextPageCursor =
                              (null == b ? void 0 : b.next_page_cursor) || ""),
                            (D.refresh = f),
                            (D.groupId = c),
                            D)
                          )
                        );
                      case 37:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })();
            });
          },
        },
        {
          key: "getCurrentList",
          value: function () {
            return g(this, arguments, function () {
              var n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                r = arguments.length > 1 ? arguments[1] : void 0;
              return t().mark(function i() {
                var o, a, l, s, u, c, d, _, f, b, w, k, S, x, C, N, T, D, O;
                return t().wrap(function (i) {
                  for (;;)
                    switch ((i.prev = i.next)) {
                      case 0:
                        return (
                          (s = n.refresh),
                          (u = n.limit),
                          (c = void 0 === u ? 10 : u),
                          (d = s ? 0 : r.offset + c),
                          (i.next = 3),
                          y.isNewsGrayUser("queryFlashnewsList")
                        );
                      case 3:
                        if (!i.sent) {
                          i.next = 12;
                          break;
                        }
                        return (
                          (i.next = 6),
                          (function (e) {
                            return g(
                              this,
                              null,
                              t().mark(function n() {
                                return t().wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return t.abrupt(
                                          "return",
                                          y.newsRequest(
                                            "/zxg/news/simple_text/query_flashnews_list",
                                            e
                                          )
                                        );
                                      case 1:
                                      case "end":
                                        return t.stop();
                                    }
                                }, n);
                              })
                            );
                          })({
                            hot_label: 0,
                            limit: c,
                            last_page_cursor: s
                              ? ""
                              : String(
                                  null !=
                                    (a =
                                      null != (o = r.last_page_cursor)
                                        ? o
                                        : r.req_session)
                                    ? a
                                    : ""
                                ),
                          })
                        );
                      case 6:
                        if ((f = i.sent) && 0 === f.code) {
                          i.next = 9;
                          break;
                        }
                        return i.abrupt("return");
                      case 9:
                        (_ = f), (i.next = 21);
                        break;
                      case 12:
                        return (
                          "https://snp.tenpay.com/cgi-bin/snpgw_724_newslist.fcgi",
                          (b = h.md5()),
                          (w = p(m({}, b), {
                            appid: "wzq",
                            offset: d,
                            limit: c,
                            req_session: s ? 0 : r.req_session,
                            hot_label: 0,
                            filter: 0,
                          })),
                          (i.next = 17),
                          v.request(
                            "https://snp.tenpay.com/cgi-bin/snpgw_724_newslist.fcgi",
                            w,
                            { method: "post" }
                          )
                        );
                      case 17:
                        if ((k = i.sent) && 0 == +k.retcode) {
                          i.next = 20;
                          break;
                        }
                        return i.abrupt("return");
                      case 20:
                        _ = (function (e) {
                          var t, n, r, i, o, a;
                          if (!e) return e;
                          var l = null != (t = e.retcode) ? t : e.code,
                            s = "0" === String(l) || 0 === l,
                            u = Array.isArray(e.data) ? e.data : [],
                            c = m({}, e),
                            d = u.map(function (e) {
                              var t, n, r, i, o, a, l, s, u, c, d, _;
                              return p(m({}, e), {
                                comment_num: Number(
                                  null != (t = e.comment_num) ? t : 0
                                ),
                                news_id: String(
                                  null !=
                                    (r = null != (n = e.id) ? n : e.news_id)
                                    ? r
                                    : ""
                                ),
                                content: String(
                                  null !=
                                    (o =
                                      null != (i = e.new_content)
                                        ? i
                                        : e.content)
                                    ? o
                                    : ""
                                ),
                                source_media: String(
                                  null !=
                                    (l =
                                      null != (a = e.source_media)
                                        ? a
                                        : e.source)
                                    ? l
                                    : ""
                                ),
                                title: String(
                                  null !=
                                    (u =
                                      null != (s = e.new_title) ? s : e.title)
                                    ? u
                                    : ""
                                ),
                                publish_time: Number(
                                  null != (c = e.publish_time) ? c : 0
                                ),
                                relate_stocks: Array.isArray(e.relate_stocks)
                                  ? e.relate_stocks.map(function (e) {
                                      var t, n, r, i, o, a;
                                      return p(m({}, e), {
                                        stock_code: String(
                                          null !=
                                            (n =
                                              null != (t = e.symbol)
                                                ? t
                                                : e.stock_code)
                                            ? n
                                            : ""
                                        ),
                                        stock_name: String(
                                          null !=
                                            (i =
                                              null != (r = e.name)
                                                ? r
                                                : e.stock_name)
                                            ? i
                                            : ""
                                        ),
                                        bk_type: String(
                                          null !=
                                            (a =
                                              null != (o = e["data-bktype"])
                                                ? o
                                                : e.bk_type)
                                            ? a
                                            : ""
                                        ),
                                      });
                                    })
                                  : [],
                                is_red: Number(null != (d = e.is_red) ? d : 0),
                                is_top: Number(null != (_ = e.is_top) ? _ : 0),
                                label_list: Array.isArray(e.label_list)
                                  ? e.label_list.map(function (e) {
                                      var t, n, r, i, o, a;
                                      return {
                                        label_id: String(
                                          null !=
                                            (n =
                                              null != (t = e.id)
                                                ? t
                                                : e.label_id)
                                            ? n
                                            : ""
                                        ),
                                        label_name: String(
                                          null !=
                                            (i =
                                              null != (r = e.name)
                                                ? r
                                                : e.label_name)
                                            ? i
                                            : ""
                                        ),
                                        label_type: Number(
                                          null !=
                                            (a =
                                              null != (o = e.label_type)
                                                ? o
                                                : e.type)
                                            ? a
                                            : 0
                                        ),
                                      };
                                    })
                                  : [],
                              });
                            });
                          return p(m({}, c), {
                            code: s ? 0 : Number(null != l ? l : -1),
                            msg: String(null != (n = e.msg) ? n : ""),
                            news_list: d,
                            hot_label: Array.isArray(e.hot_label)
                              ? e.hot_label.map(function (e) {
                                  var t, n, r, i, o, a;
                                  return {
                                    label_id: String(
                                      null !=
                                        (n =
                                          null != (t = e.id) ? t : e.label_id)
                                        ? n
                                        : ""
                                    ),
                                    label_name: String(
                                      null !=
                                        (i =
                                          null != (r = e.name)
                                            ? r
                                            : e.label_name)
                                        ? i
                                        : ""
                                    ),
                                    label_type: Number(
                                      null !=
                                        (a =
                                          null != (o = e.label_type)
                                            ? o
                                            : e.type)
                                        ? a
                                        : 0
                                    ),
                                  };
                                })
                              : [],
                            has_next: Number(null != (r = e.has_next) ? r : 0)
                              ? 1
                              : 0,
                            next_page_cursor: String(
                              null !=
                                (a =
                                  null !=
                                  (o =
                                    null != (i = e.req_session)
                                      ? i
                                      : e.next_page_cursor)
                                    ? o
                                    : e.last_page_cursor)
                                ? a
                                : "0"
                            ),
                          });
                        })(k);
                      case 21:
                        return (
                          (x = (S = _).news_list),
                          (C = void 0 === x ? [] : x),
                          (N = S.has_next),
                          (T = S.next_page_cursor),
                          (D = C.map(function (e) {
                            return p(m({}, e), {
                              formatedTime: E(1e3 * e.publish_time),
                              time: e.publish_time,
                              currentTime: R(1e3 * e.publish_time),
                              stocks: e.relate_stocks || [],
                              source: e.source_media || e.source || "",
                            });
                          })),
                          (O = Object.assign({}, r)),
                          i.abrupt(
                            "return",
                            (s
                              ? ((O.list = D), (O.offset = d))
                              : ((O.list = [].concat(e(O.list), e(D))),
                                (O.offset = d)),
                            (O.hasNext = N),
                            (O.last_page_cursor = T),
                            (O.req_session = T),
                            (O.currentTime = R(
                              1e3 *
                                (null == (l = C[0]) ? void 0 : l.publish_time)
                            )),
                            O)
                          )
                        );
                      case 23:
                      case "end":
                        return i.stop();
                    }
                }, i);
              })();
            });
          },
        },
        {
          key: "reportListShowData",
          value: function (e) {
            e.importantBanners &&
              e.importantBanners.length &&
              (this.listShowReported = !0);
          },
        },
        {
          key: "changeYaowenShow",
          value: function (e, t) {
            var n = e.state,
              r = e.dispatch;
            (n.yaowenShow = t),
              t && n.firstRequestDone && r("reportListShowData");
          },
        },
        {
          key: "getReadRecord",
          value: function () {
            return f.StockBridge.getStorage("information_read_record") || [];
          },
        },
        {
          key: "getHkstockList",
          value: function () {
            return g(this, arguments, function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = arguments.length > 1 ? arguments[1] : void 0;
              return t().mark(function r() {
                var i, o, a, l, s, u, c, d, _, g, f, b, w, S, x, C, N, T;
                return t().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (i = e.refresh),
                          (o = e.limit),
                          (a = void 0 === o ? 10 : o),
                          (t.next = 3),
                          y.isNewsGrayUser("queryColumnNewsList")
                        );
                      case 3:
                        if (!t.sent) {
                          t.next = 12;
                          break;
                        }
                        return (
                          (t.next = 6),
                          k.queryColumnNewsList({
                            column_id: "ggsc",
                            limit: a,
                            last_page_cursor: i ? "" : n.last_page_cursor || "",
                          })
                        );
                      case 6:
                        if ((s = t.sent) && 0 === s.code) {
                          t.next = 9;
                          break;
                        }
                        return t.abrupt("return");
                      case 9:
                        (l = s), (t.next = 22);
                        break;
                      case 12:
                        if (
                          ("https://snp.tenpay.com/cgi-bin/snpgw_columnnews_comm.fcgi",
                          (u = 0),
                          (c = 0),
                          !i && n.last_page_cursor)
                        )
                          try {
                            (d = JSON.parse(n.last_page_cursor)),
                              (u = d.offset || 0),
                              (c = d.req_session || 0);
                          } catch (e) {}
                        return (
                          "dc159beb36d57474863b850f1fe8045a",
                          (_ = h.md5()),
                          (g = p(m({}, _), {
                            zappid: "zxg_h5",
                            sign: "dc159beb36d57474863b850f1fe8045a",
                            nonce: 8762,
                            column_id: "ggsc",
                            offset: u,
                            limit: a,
                            req_session: c,
                          })),
                          (t.next = 20),
                          v.request(
                            "https://snp.tenpay.com/cgi-bin/snpgw_columnnews_comm.fcgi",
                            g,
                            { method: "post" }
                          )
                        );
                      case 20:
                        (f = t.sent), (l = k.adaptQueryColumnNewsListResp(f));
                      case 22:
                        return (
                          (w = (b = l).news_list),
                          (S = void 0 === w ? [] : w),
                          (x = b.next_page_cursor),
                          (C = b.has_next),
                          (N = S.map(function (e) {
                            return p(m({}, e), {
                              formatedTime: q(e.publish_time, 15),
                              id: e.id || e.news_id,
                              type: e.type || e.news_type,
                              thumb_img: e.thumb_img || e.thumb_image || "",
                            });
                          })),
                          (T = Object.assign({}, n)),
                          t.abrupt(
                            "return",
                            ((T.list = i ? N : n.list.concat(N)),
                            (T.last_page_cursor = x),
                            (T.hasNext = C),
                            T)
                          )
                        );
                      case 24:
                      case "end":
                        return t.stop();
                    }
                }, r);
              })();
            });
          },
        },
      ]),
      o
    );
  })())(),
  H = [
    {
      id: "stock_guanzhu_v2",
      isSelected: 1,
      version: 1,
      isConst: 1,
      reportid: "guanzhu_click",
      name: "自选",
      desc: "用户自选",
    },
    {
      id: "stock_yaowen_v2",
      isSelected: 1,
      version: 1,
      isConst: 1,
      reportid: "yaowen_click",
      name: "要闻",
      desc: "7X24小时国内和世界财经新闻播报",
    },
    {
      id: "stock_yd",
      isSelected: 1,
      version: 3,
      isConst: 1,
      reportid: "twentyfour_click",
      name: "快讯",
      desc: "国内外财经新闻播报",
    },
    {
      id: "stock_shequ_v2",
      isSelected: 1,
      version: 1,
      isConst: 1,
      reportid: "shequ_click",
      name: "社区",
      desc: "社区消息",
    },
    {
      id: "stock_video_v2",
      isSelected: 1,
      version: 2,
      isConst: 0,
      reportid: "news.lanmu.video.tab_click",
      name: "视频",
      desc: "视频资讯",
    },
    {
      id: "stock_ggsc_v2",
      isSelected: 0,
      version: 1,
      isConst: 0,
      reportid: "ganggu_click",
      name: "港股",
      desc: "港股及时资讯、大行研报、轮证资讯",
    },
  ],
  U = "information/tabs-config",
  W = "https://snp.tenpay.com/cgi/cgi-bin/snp/usercol/update",
  G = "https://snp.tenpay.com/cgi/cgi-bin/snp/usercol/query",
  X = function (e, n) {
    var r = e.buildVersion,
      i = void 0 === r ? 0 : r;
    e.loginType;
    function o() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : { message: "", name: "", stack: "", code: "", statusCode: "" };
      return m(
        m(
          { message: e.message, name: e.name, stack: e.stack },
          e.code && { code: e.code }
        ),
        e.statusCode && { statusCode: e.statusCode }
      );
    }
    function a() {
      var e = h.md5(),
        t = e.zappid;
      return m({ app: t, zappid: t }, e);
    }
    function l() {
      var e = { tabConfigs: [], tabConfigVersion: 0 };
      try {
        var t = f.StockBridge.getStorage(U);
        if (t) return JSON.parse(t);
      } catch (e) {
        f.StockBridge.aegisReportEvent(
          "INFORMATION_TABCONFIG_LOAD_STORAGE_ERROR",
          { ext4: JSON.stringify(o(e)) }
        );
      }
      return e;
    }
    function s() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = arguments.length > 1 ? arguments[1] : void 0;
      try {
        f.StockBridge.setStorage(
          U,
          JSON.stringify({ tabConfigs: e, tabConfigVersion: t || i })
        );
      } catch (e) {
        f.StockBridge.aegisReportEvent("INFORMATION_TABCONFIG_STORAGE_ERROR", {
          ext4: JSON.stringify(o(e)),
        });
      }
    }
    function u() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : { col_list: [], col_ver: 0 };
      if (e) {
        var t = e.col_list,
          n = e.col_ver,
          r = void 0 === n ? 0 : n;
        if (t && Array.isArray(t) && t.length > 0)
          return (
            s(t, i),
            f.StockBridge.busEmit("onInformationTabsUpdate", {
              col_list: t,
              col_ver: r,
            }),
            t
          );
      }
      return [];
    }
    function c() {
      return g(this, arguments, function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return t().mark(function r() {
          var i, s, c, d, _, g;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.prev = 0),
                      (i = e.map(function (e) {
                        return p(m({}, e || {}), {
                          isSelected: isNaN(+e.isSelected) ? 0 : +e.isSelected,
                          isConst: isNaN(+e.isConst) ? 0 : +e.isConst,
                          version: isNaN(+e.version) ? 0 : +e.version,
                        });
                      })),
                      (t.next = 4),
                      f.StockBridge.request(
                        W,
                        f.RequestTypeEnum.POST,
                        m(
                          m(
                            {
                              col_data: JSON.stringify({ col_list: i }),
                              user_chg: n,
                            },
                            b.getLoginParamsObject(W)
                          ),
                          a()
                        ),
                        {}
                      )
                    );
                  case 4:
                    if (
                      ((s = t.sent), (d = (c = s || {}).data), 0 === c.code)
                    ) {
                      t.next = 10;
                      break;
                    }
                    return t.abrupt(
                      "return",
                      void f.StockBridge.aegisReportEvent(
                        "INFORMATION_TABCONFIG_UPDATE_CODE_ERROR",
                        {}
                      )
                    );
                  case 10:
                    d && u(d), (t.next = 17);
                    break;
                  case 13:
                    (t.prev = 13),
                      (t.t0 = t.catch(0)),
                      (_ = l()),
                      (g = (_ || {}).tabConfigs) &&
                        Array.isArray(g) &&
                        g.length > 0 &&
                        f.StockBridge.busEmit("onInformationTabsUpdate", {
                          col_list: g,
                        }),
                      f.StockBridge.aegisReportEvent(
                        "INFORMATION_TABCONFIG_UPDATE_ERROR",
                        { ext4: JSON.stringify(o(t.t0)) }
                      );
                  case 17:
                  case "end":
                    return t.stop();
                }
            },
            r,
            null,
            [[0, 13]]
          );
        })();
      });
    }
    return {
      loadTabConfigs: function () {
        return g(
          this,
          null,
          t().mark(function e() {
            var r, d, _, p, v;
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    r = null;
                    try {
                      (d = l()),
                        (p = (_ = d || {}).tabConfigs),
                        (v = _.tabConfigVersion),
                        p &&
                          Array.isArray(p) &&
                          p.length > 0 &&
                          ((r = p), v && v !== i && s(p, i));
                      try {
                        !1,
                          n.$emit("getLogin", function (e) {
                            e &&
                              (function () {
                                g(
                                  this,
                                  null,
                                  t().mark(function e() {
                                    var n, r, i, l;
                                    return t().wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (e.prev = 0),
                                                (e.next = 3),
                                                f.StockBridge.request(
                                                  G,
                                                  f.RequestTypeEnum.GET,
                                                  m(
                                                    m(
                                                      {},
                                                      b.getLoginParamsObject(G)
                                                    ),
                                                    a()
                                                  ),
                                                  {}
                                                )
                                              );
                                            case 3:
                                              if (
                                                ((n = e.sent),
                                                (i = (r = n || {}).data),
                                                0 === r.code)
                                              ) {
                                                e.next = 9;
                                                break;
                                              }
                                              return e.abrupt("return");
                                            case 9:
                                              (l = i && u(i)) &&
                                                Array.isArray(l) &&
                                                0 === l.length &&
                                                H.length > 0 &&
                                                c(H),
                                                (e.next = 16);
                                              break;
                                            case 13:
                                              (e.prev = 13),
                                                (e.t0 = e.catch(0)),
                                                f.StockBridge.aegisReportEvent(
                                                  "INFORMATION_TABCONFIG_REQUEST_ERROR",
                                                  {
                                                    ext4: JSON.stringify(
                                                      o(e.t0)
                                                    ),
                                                  }
                                                );
                                            case 16:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      null,
                                      [[0, 13]]
                                    );
                                  })
                                );
                              })();
                          });
                      } catch (e) {}
                    } catch (e) {}
                    return e.abrupt("return", (r || (r = H), r));
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
      },
      getDefaultTabs: function () {
        return H && Array.isArray(H) && H.length > 0 ? H : [];
      },
      updateUserTabs: c,
      getStorageTabConfigs: l,
    };
  },
  $ = f.defineComponent({
    components: {
      YaowenFeedbackDialog: function () {
        return "../../components/yaoWen/yaowenFeedbackDialog.js";
      },
      tab: function () {
        return "../../components/Tab/mp/index.js";
      },
      MyChooseList: function () {
        return "../../components/choose/MyChooseList.js";
      },
      VideoList: function () {
        return "../../components/video/index.js";
      },
      YaoWenList: function () {
        return "../../components/yaoWen/YaoWenList.js".then(function (e) {
          return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWluZm9ybWF0aW9uLXBhZ2UvY29tcG9uZW50cy95YW9XZW4vWWFvV2VuTGlzdC52dWU;
        });
      },
      CurrentDayList: function () {
        return "../../components/currentDay/CurrentDayList.js";
      },
      RecomSpliter: function () {
        return "../../components/RecomSpliter.js";
      },
      CommunityList: function () {
        return "../../components/CommunityList.js".then(function (e) {
          return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWluZm9ybWF0aW9uLXBhZ2UvY29tcG9uZW50cy9Db21tdW5pdHlMaXN0LnZ1ZQ;
        });
      },
      HKStocksList: function () {
        return "../../components/HKStocksList.js";
      },
      profilePop: function () {
        return "../../../../../newsSbg/@tencent/stock-sq/src/source/profilePop/index.js";
      },
      navButton: function () {
        return "../../../stock-news-community-list/components/comment/navButton.js";
      },
    },
    props: {
      tabIndex: { type: Number, default: 1 },
      userInfo: { default: {} },
      fromBrief: { type: Boolean, default: !1 },
      scrollHeight: { default: 0 },
      isPageShow: { type: Boolean, default: !1 },
      theme: { type: String, default: "white" },
    },
    setup: function (n) {
      var r = this,
        i = f.getCurrentInstance().proxy || f.getCurrentInstance(),
        o = (function (n, r) {
          var i,
            o = f.ref([]),
            a = "stock_yaowen_v2",
            l = {
              stock_guanzhu_v2: "guanzhu",
              stock_yaowen_v2: "yaowen",
              stock_yd: "twentyfour",
              stock_shequ_v2: "shequ",
              stock_video_v2: "news.lanmu.video.tab",
              stock_ggsc_v2: "ganggu",
            },
            s = f.inject("stockBridge"),
            u = f.ref(1),
            c = f.ref(a),
            d = a,
            _ = f.ref(["自选", "要闻", "视频", "7x24"]),
            v = f.ref(["choose", "yaowen", "video", "current"]),
            h = f.ref({
              stock_guanzhu_v2: !1,
              stock_yaowen_v2: !1,
              stock_yd: !1,
              stock_shequ_v2: !1,
              stock_video_v2: !1,
              stock_ggsc_v2: !1,
            }),
            w = f.ref(2e3),
            y = f.ref("auto"),
            k = !0,
            S = f.ref(!1),
            C = f.ref(""),
            N = f.ref(!1),
            T = f.ref(!1),
            D = f.ref({
              list: [],
              importantBanners: [],
              showHeadline: !1,
              firstRequestDone: !1,
              yaowenShow: !1,
            }),
            O = f.ref([]),
            I = Y.getReadRecord(),
            L = f.ref({ list: [], groupId: "", nextPageCursor: "" }),
            q = f.ref({ list: [], req_session: 0, currentTime: "" }),
            A = f.ref({ list: [], req_session: 0, offset: 0 }),
            E = f.ref({});
          f.computed(function () {
            return "mp" === s.ENV ? { IS_MINA: !0 } : detect().env;
          });
          var R = f.computed(function () {
              var e;
              return (
                (null == (e = null == q ? void 0 : q.value)
                  ? void 0
                  : e.currentTime) || ""
              );
            }),
            P = f.computed(function () {
              var e;
              return (null == (e = E.value) ? void 0 : e.length) > 0
                ? E.value.filter(function (e) {
                    return e.isSelected;
                  })
                : [];
            });
          f.watch(
            function () {
              return u.value;
            },
            function (e) {
              return g(
                exports,
                null,
                t().mark(function n() {
                  var r;
                  return t().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (h.value[c.value]) {
                            t.next = 22;
                            break;
                          }
                          if (1 != +e) {
                            t.next = 5;
                            break;
                          }
                          W(), (t.next = 21);
                          break;
                        case 5:
                          if ("stock_guanzhu_v2" !== (r = c.value)) {
                            t.next = 11;
                            break;
                          }
                          return (t.next = 9), Z();
                        case 9:
                          t.next = 20;
                          break;
                        case 11:
                          if ("stock_yd" !== r) {
                            t.next = 16;
                            break;
                          }
                          return (t.next = 14), Q();
                        case 14:
                          t.next = 20;
                          break;
                        case 16:
                          if (((t.t0 = "stock_ggsc_v2" === r), !t.t0)) {
                            t.next = 20;
                            break;
                          }
                          return (t.next = 20), J();
                        case 20:
                          ne(e, 0);
                        case 21:
                          h.value[c.value] = !0;
                        case 22:
                          ie();
                        case 23:
                        case "end":
                          return t.stop();
                      }
                  }, n);
                })
              );
            }
          );
          var B = function (e) {
              r.$emit("handleCommunityEdit", e);
            },
            F = function (e) {
              var t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              (u.value = e),
                (c.value = P.value[e].id),
                H(d, c.value),
                ne(e),
                l[c.value] &&
                  t &&
                  s.report("news.index.".concat(l[c.value], "_click"));
            },
            H = function (e, t) {
              i && clearTimeout(i),
                (i = setTimeout(function () {
                  var n = r.$refs[t],
                    i = r.$refs[e];
                  n && n[0] && n[0].onShow(),
                    i && i[0] && e !== t && i[0].onHide(),
                    (d = t);
                }, 100));
            },
            U = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
              (h.value[c.value] = !0),
                ie(),
                t &&
                  f.wx$1.showToast({
                    title: e.data ? e.data.retmsg : "数据请求失败",
                    icon: "none",
                  });
            },
            W = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 20,
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1;
              V(e, t, G, $);
            },
            G = function (e) {
              U(),
                k &&
                  (null == n ? void 0 : n.fromBrief) &&
                  D.value.list &&
                  (k = !1);
            },
            $ = function (e) {
              U(e, !0);
            },
            V = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 20,
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1,
                n = arguments.length > 2 ? arguments[2] : void 0,
                r = arguments.length > 3 ? arguments[3] : void 0;
              0 === D.value.list.length &&
                ((D.value = s.getStorage(M) || D.value),
                (O.value = s.getStorage(z) || []));
              var i = m(
                { limit: e, refresh: t, tzbd_num: 0 },
                b.getLoginParamsObject()
              );
              return Y.getYaowenList(i, D.value, I)
                .then(function (e) {
                  t && (O.value = e.tzbd),
                    (D.value = e.yaowen),
                    n && n({ hasNext: e.yaowen.has_next });
                })
                .catch(function (e) {
                  r && r(e);
                });
            },
            Z = function () {
              var e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              return g(
                exports,
                null,
                t().mark(function n() {
                  var r;
                  return t().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              Y.getChooseList({ refresh: e }, L.value, I)
                            );
                          case 3:
                            return (
                              (r = t.sent),
                              t.abrupt(
                                "return",
                                r && Array.isArray(r.list)
                                  ? ((L.value = r), r)
                                  : L.value
                              )
                            );
                          case 7:
                            return (
                              (t.prev = 7),
                              (t.t0 = t.catch(0)),
                              t.abrupt(
                                "return",
                                ((L.value = p(m({}, L.value), { list: [] })),
                                L.value)
                              )
                            );
                          case 10:
                          case "end":
                            return t.stop();
                        }
                    },
                    n,
                    null,
                    [[0, 7]]
                  );
                })
              );
            },
            Q = function () {
              var e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              return g(
                exports,
                null,
                t().mark(function n() {
                  var r;
                  return t().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              Y.getCurrentList({ refresh: e }, q.value)
                            );
                          case 3:
                            return (
                              (r = t.sent),
                              t.abrupt(
                                "return",
                                (r && Array.isArray(r.list) && (q.value = r),
                                q.value)
                              )
                            );
                          case 7:
                            return (
                              (t.prev = 7),
                              (t.t0 = t.catch(0)),
                              t.abrupt(
                                "return",
                                ((q.value = p(m({}, q.value), { list: [] })),
                                q.value)
                              )
                            );
                          case 10:
                          case "end":
                            return t.stop();
                        }
                    },
                    n,
                    null,
                    [[0, 7]]
                  );
                })
              );
            },
            J = function () {
              var e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              return g(
                exports,
                null,
                t().mark(function n() {
                  var r;
                  return t().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              Y.getHkstockList({ refresh: e }, A.value)
                            );
                          case 3:
                            return (
                              (r = t.sent),
                              t.abrupt(
                                "return",
                                (r && Array.isArray(r.list) && (A.value = r),
                                A.value)
                              )
                            );
                          case 7:
                            return (
                              (t.prev = 7),
                              (t.t0 = t.catch(0)),
                              t.abrupt(
                                "return",
                                ((A.value = p(m({}, A.value), { list: [] })),
                                A.value)
                              )
                            );
                          case 10:
                          case "end":
                            return t.stop();
                        }
                    },
                    n,
                    null,
                    [[0, 7]]
                  );
                })
              );
            },
            K = function (e, t) {
              var n = e.id,
                r = e.url;
              if (21 == +e.type && r)
                return (
                  t
                    ? s.report(
                        "information.yaowen.videoCard.big.channels.click",
                        { newsid: n }
                      )
                    : s.report(
                        "information.yaowen.videoCard.small.channels.click",
                        { newsid: n }
                      ),
                  void f.wx$1.navigateTo({
                    url: "/pages/additional/webview/index?url=".concat(
                      encodeURIComponent(r)
                    ),
                  })
                );
              var i = !!e.video_info.course_id,
                o = (e.extra_info && e.extra_info.ab_test_report_info) || "";
              if ((s.report(j, { newsid: n, report_info: o }), i)) {
                var a =
                  "https://wzq.tenpay.com/mp/v2/index.html#/information/courseDetail?id="
                    .concat(e.video_info.course_id, "&cid=")
                    .concat(n);
                f.wx$1.navigateTo({
                  url: "/pages/additional/webview/index?url=".concat(
                    encodeURIComponent(a)
                  ),
                });
              } else {
                var l = "/pages/newsCon/video/videoDetail?id="
                  .concat(n, "&t=")
                  .concat(Date.now());
                s.routeTo({ url: l, path: l });
              }
            },
            ee = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = s.getStorage("information_read_record") || [],
                n = e.item.id || e.item.news_id,
                r = e.columnId;
              t.indexOf(n) < 0 &&
                (t.push(n),
                t.length > 500 && (t = t.slice(-500)),
                (I = t),
                s.setStorage("information_read_record", t),
                "yaowen" === r
                  ? te(D.value, n)
                  : "choose" === r
                  ? te(L.value, n)
                  : "current" === r && te(q.value, n));
            },
            te = function (t, n) {
              if (t && t.list && 0 !== t.list.length && n) {
                var r = [];
                t &&
                  t.importantBanners &&
                  r.push.apply(r, e(t.importantBanners)),
                  t && t.list && r.push.apply(r, e(t.list)),
                  r.forEach(function (e) {
                    (e.id || e.news_id) === n && (e.read = !0);
                  }),
                  (t.refresh = !1);
              }
            },
            ne = function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 300;
              f.nextTick$1(function () {
                var n, i;
                null ==
                  (i = null == (n = r.$refs.mySwiper) ? void 0 : n.swiper) ||
                  i.slideTo(e, t);
              });
            },
            re = !0;
          f.onActivated(function () {
            (re = !0), ie();
          }),
            f.onDeactivated(function () {
              re = !1;
            });
          var ie = function (e) {
              if (re)
                var t = setTimeout(function () {
                  clearTimeout(t);
                }, e || 100);
            },
            oe = function (e) {
              f.StockRouter.routeTo({
                name: "tsybTransfer",
                query: { path: "detail", id: e.id || e.news_id },
              });
            };
          return {
            currentTab: u,
            currentTabId: c,
            tabs: _,
            tabsDataReady: h,
            current724Time: R,
            isWntjCeiling: N,
            tabsId: v,
            choose: L,
            yaowen: D,
            hkstock: A,
            tzbd: O,
            current: q,
            currentVideo: C,
            currSwiperHeight: w,
            minHeight: y,
            isShowComment: S,
            yaowenFeedbackDialogShow: T,
            scrollTop: o,
            tabsConfigs: E,
            tabsSelectedConfigs: P,
            stockBridge: s,
            getData: W,
            getChooseData: Z,
            isCurrTab: function (e) {
              return u.value === e;
            },
            open: function (e) {
              var n = e.type;
              if ("stock" === n)
                !(function (e) {
                  var t = e.item,
                    n = "/pages/quote/quote?market="
                      .concat(t.m, "&scode=")
                      .concat(t.c);
                  s.routeTo({ url: n, path: n });
                })(e);
              else if ("tzbd" === n) {
                s.routeTo({ path: "/information/tzbd" });
              } else
                "video_card" === n
                  ? K(e.item, !0)
                  : (function (e) {
                      g(
                        exports,
                        null,
                        t().mark(function n() {
                          var r, i, o, a, l, u, c, d, _, m, p;
                          return t().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    ((r = e.columnId),
                                    (i = e.item),
                                    (o = i.id || i.news_id),
                                    21 != +i.type &&
                                      7 != +i.type &&
                                      8 != +i.type)
                                  ) {
                                    t.next = 3;
                                    break;
                                  }
                                  return t.abrupt("return", void K(i, !1));
                                case 3:
                                  if (19 != +i.type) {
                                    t.next = 5;
                                    break;
                                  }
                                  return t.abrupt("return", void oe(i));
                                case 5:
                                  if (
                                    ((a = "/pages/newsCon/newsDetail/main"),
                                    (l = {
                                      id: o,
                                      zxtype: 1,
                                      title: encodeURIComponent(i.title),
                                      date: i.time,
                                      source: i.source || e.source,
                                      flowId: i.flow_id,
                                      recallType: i.recall_type,
                                      charge_type: i.charge_type,
                                    }),
                                    "tzbd" === e.source &&
                                      (l.__source__ = "tzbd"),
                                    "yaowen" !== r)
                                  ) {
                                    t.next = 36;
                                    break;
                                  }
                                  if (
                                    ("1" == e.item.is_top
                                      ? ((u = {
                                          newsid: o,
                                          report_info:
                                            (i.extra_info &&
                                              i.extra_info
                                                .ab_test_report_info) ||
                                            "",
                                          position: i.pos,
                                        }),
                                        s.report("information.banner.click", u))
                                      : ((c =
                                          (i.extra_info &&
                                            i.extra_info.ab_test_report_info) ||
                                          ""),
                                        s.report(j, {
                                          newsid: o,
                                          report_info: c,
                                        })),
                                    3 != i.type)
                                  ) {
                                    t.next = 13;
                                    break;
                                  }
                                  (a = i.url), (t.next = 33);
                                  break;
                                case 13:
                                  if (4 != i.type) {
                                    t.next = 24;
                                    break;
                                  }
                                  if (1 != +i.special_type) {
                                    t.next = 18;
                                    break;
                                  }
                                  return (
                                    (l.date = i.publish_time),
                                    (d =
                                      "https://wzq.tenpay.com/mp/v2/index.html#/information/liveCombine?id="
                                        .concat(o, "&date=")
                                        .concat(i.publish_time)),
                                    t.abrupt(
                                      "return",
                                      void f.wx$1.navigateTo({
                                        url: "/pages/additional/webview/index?url=".concat(
                                          encodeURIComponent(d)
                                        ),
                                      })
                                    )
                                  );
                                case 18:
                                  if (5 != i.cont_type) {
                                    t.next = 21;
                                    break;
                                  }
                                  return (
                                    (_ =
                                      "https://wzq.tenpay.com/mp/v2/index.html#/information/livesubject?id=".concat(
                                        o
                                      )),
                                    t.abrupt(
                                      "return",
                                      void f.wx$1.navigateTo({
                                        url: "/pages/additional/webview/index?url=".concat(
                                          encodeURIComponent(_)
                                        ),
                                      })
                                    )
                                  );
                                case 21:
                                  (a = "/pages/newsCon/topic/main"),
                                    s.report("report.click_subject", {
                                      newsid: o,
                                    }),
                                    (t.next = 33);
                                  break;
                                case 24:
                                  if (5 != i.type) {
                                    t.next = 28;
                                    break;
                                  }
                                  (l.zxtype = 4), (t.next = 33);
                                  break;
                                case 28:
                                  if (10 != i.type) {
                                    t.next = 32;
                                    break;
                                  }
                                  return (
                                    (l.id = o),
                                    (m =
                                      "https://wzq.tenpay.com/mp/v2/index.html#/information/eventDetail?id=".concat(
                                        o
                                      )),
                                    t.abrupt(
                                      "return",
                                      void f.wx$1.navigateTo({
                                        url: "/pages/additional/webview/index?url=".concat(
                                          encodeURIComponent(m)
                                        ),
                                      })
                                    )
                                  );
                                case 32:
                                  14 == i.type
                                    ? ((a = "/pages/live/liveDetail"),
                                      (l.id = o))
                                    : 2 == +i.special_type &&
                                      ((l.type = 4),
                                      (l.articleStyle = "card"),
                                      (l.subtype = "morningreportcard"),
                                      (a = "/pages/report/morning/main"));
                                case 33:
                                  (l.columnfrom = r), (t.next = 37);
                                  break;
                                case 36:
                                  "choose" === r &&
                                    ((l.zxtype = 1), (l.columnfrom = "choose"));
                                case 37:
                                  ee(e),
                                    3 == i.type
                                      ? f.wx$1.navigateTo({
                                          url: "/pages/additional/webview/index?url=".concat(
                                            encodeURIComponent(a)
                                          ),
                                        })
                                      : ((p = ""
                                          .concat(a, "?")
                                          .concat(
                                            new x.URLSearchParams(l).toString()
                                          )),
                                        s.routeTo({ url: p, path: p }));
                                case 38:
                                case "end":
                                  return t.stop();
                              }
                          }, n);
                        })
                      );
                    })(e);
            },
            switchNav: F,
            requestYaowenList: V,
            showYaowenCeiling: function (e) {
              "stock_yaowen_v2" === c.value && (N.value = e);
            },
            showYaowenFeedbackDialog: function () {
              s.report("news.zixuntab_yaowentab.feedback_tag_click"),
                (T.value = !0);
            },
            getYaowenFeedbackDataList: function (e) {
              Y.getYaowenFeedbackDataList(e, D.value, I).then(function (e) {
                e && e.list && e.list.length > 0 && (D.value = e);
              });
            },
            changeYaowenShow: function (e) {
              (D.value.yaowenShow = e),
                e && D.value.firstRequestDone && Y.reportListShowData(D.value);
            },
            handleVideoClick: function (e) {
              var t = e.action,
                n = e.data;
              switch (t) {
                case "share":
                  r.$emit("videoShareClick", n);
                  break;
                case "comment":
                  (S.value = !0),
                    (C.value = n),
                    r.$emit("videoCommentClick", {
                      isShowComment: !0,
                      currentVideo: n,
                    });
              }
            },
            showVideoCeiling: function (e) {
              "stock_video_v2" === c.value && (N.value = e);
            },
            getCurrentData: Q,
            updateCurrentTime: function (e) {
              q.value && (q.value.currentTime = e);
            },
            handleCloseComment: function () {
              S.value = !1;
            },
            updateComCount: function (e) {
              var t,
                n,
                i,
                o = C.value.news_id;
              null ==
                (i =
                  null == (n = null == (t = r.$refs.stock_yd) ? void 0 : t[0])
                    ? void 0
                    : n.updateComCount) || i.call(n, e, o);
            },
            handleGoEdit: function (e) {
              r.$emit("goEdit", e);
            },
            handleCommentTurn: function (e) {
              r.$emit("handleCommentTurn", e);
            },
            handleComment: function (e) {
              r.$emit("handleComment", e);
            },
            onFeedbackDialogHide: function () {
              T.value = !1;
            },
            onFeedbackDialogConfirm: function (e) {
              var t;
              (T.value = !1),
                (null == (t = r.$refs.stock_yaowen_v2)
                  ? void 0
                  : t[0]
                ).onFeedbackConfirm(e);
            },
            controlCurrentTabShow: function (e) {
              var t = r.$refs[c.value];
              t && t[0] && (e ? t[0].onShow() : t[0].onHide());
            },
            init: function (e) {},
            changetab: function (e) {
              if (e !== u.value) {
                var t = u.value !== e;
                (u.value = e),
                  (c.value = P.value[e].id),
                  H(d, u.value),
                  setTimeout(function () {}, 10),
                  s.report("information.".concat(l[c.value])),
                  s.report("information.".concat(l[c.value], ".visited")),
                  t &&
                    l[e] &&
                    s.report("news.index.".concat(l[c.value], "_scroll"));
              }
            },
            setCurrSwiperHeight: ie,
            onMpScroll: function (e) {
              r.$emit("onMpScroll", e);
            },
            onInformationTabsUpdate: function (e) {
              var t = e.col_list;
              E.value = t;
              var n = P.value.findIndex(function (e) {
                return e.id === c.value;
              });
              P.value.length && F(n > -1 ? n : 1, !1);
            },
            handleCommunityEdit: B,
            gotoColumnEditPage: function () {
              r.$emit("gotoColumnEditPage");
            },
            onColumnEditTabsChange: function (e) {
              return g(
                exports,
                null,
                t().mark(function n() {
                  return t().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              X({}, void 0).updateUserTabs(e)
                            );
                          case 3:
                            t.next = 7;
                            break;
                          case 5:
                            (t.prev = 5), (t.t0 = t.catch(0));
                          case 7:
                          case "end":
                            return t.stop();
                        }
                    },
                    n,
                    null,
                    [[0, 5]]
                  );
                })
              );
            },
            getHkstockList: J,
            refreshListSuccess: function () {
              ie();
            },
            navButtonToEdit: function () {
              B({ post_scene: "square", symbol: "sh000001", action: "fatie" });
            },
          };
        })(n, i),
        a = o.currentTab,
        l = o.currentTabId,
        s = o.tabsConfigs,
        u = o.tabsDataReady,
        c = o.tabsSelectedConfigs,
        d = o.tabs,
        _ = o.scrollTop,
        v = o.getData,
        h = o.init,
        w = o.changetab,
        y = o.isWntjCeiling,
        k = o.controlCurrentTabShow,
        S = o.onColumnEditTabsChange,
        C = o.onInformationTabsUpdate,
        N = f.computed(function () {
          return {};
        });
      f.StockBridge.busOn("news-tabs-change", S);
      var T = f.ref(null),
        D = f.computed(function () {
          return y.value ? { top: "".concat(I.value, "px") } : {};
        }),
        O = f.computed(function () {
          var e, t;
          return (
            (null ==
            (t = null == (e = getApp().globalData.detect) ? void 0 : e.env)
              ? void 0
              : t.IS_PCWEIXIN) || !1
          );
        });
      f.onBeforeMount(function () {
        return g(
          r,
          null,
          t().mark(function e() {
            var r, o, _, m;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        i.$emit("pageInit"),
                        (o = +n.tabIndex),
                        (_ = X({}, i)),
                        (e.prev = 2),
                        (e.next = 5),
                        _.loadTabConfigs()
                      );
                    case 5:
                      (m = e.sent),
                        Array.isArray(m) && m.length > 0
                          ? (s.value = m)
                          : (s.value = _.getDefaultTabs()),
                        (e.next = 12);
                      break;
                    case 9:
                      (e.prev = 9),
                        (e.t0 = e.catch(2)),
                        (s.value = _.getDefaultTabs());
                    case 12:
                      o >= 0 && o < d.value.length
                        ? ((a.value = o),
                          (l.value = null == (r = c.value) ? void 0 : r[o].id))
                        : ((a.value = 1), (l.value = "stock_yaowen_v2")),
                        1 === a.value && (v(), (u.value[l.value] = !0)),
                        f.StockBridge.busOn("onInformationTabsUpdate", C);
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 9]]
            );
          })
        );
      });
      var I = f.ref(0);
      return (
        f.onMounted(function () {
          h({ getOmHistory: !0 }),
            setTimeout(function () {
              _.value = [];
            }, 0),
            f.wx$1
              .createSelectorQuery()
              .in(i)
              .select(".fixed-nav")
              .boundingClientRect()
              .exec(function (e) {
                e && e[0] && e[0].height && (I.value = e[0].height);
              });
        }),
        f.onUnmounted(function () {
          f.StockBridge.busOff("onInformationTabsUpdate", C),
            f.StockBridge.busOff("news-tabs-change", S);
        }),
        p(m({}, o), {
          pageStyle: N,
          navBarHeight: I,
          ceilingStyle: D,
          isPcWeiXin: O,
          onMpReachBottom: function () {
            var e = i.$refs[l.value];
            e && e[0] && e[0].onPullingUp && e[0].onPullingUp();
          },
          swiperScrollChange: function (e) {
            var t = (e = e.mp || e).detail.current;
            w(t);
          },
          onMpPageShow: function () {
            k(!0);
          },
          onMpPageHide: function () {
            k(!1);
          },
          refreshPage: function () {
            var e = i.$refs[l.value];
            e && e[0] && e[0].onPullingDown && e[0].onPullingDown();
          },
          profilePopParams: T,
          showProfilePop: function (e) {
            T.value = e;
          },
          hideProfilePop: function () {
            T.value = null;
          },
        })
      );
    },
  });
Array ||
  (
    f.resolveComponent("tab") +
    f.resolveComponent("recom-spliter") +
    f.resolveComponent("MyChooseList") +
    f.resolveComponent("YaoWenList") +
    f.resolveComponent("CurrentDayList") +
    f.resolveComponent("CommunityList") +
    f.resolveComponent("VideoList") +
    f.resolveComponent("HKStocksList") +
    f.resolveComponent("YaowenFeedbackDialog") +
    f.resolveComponent("profilePop") +
    f.resolveComponent("navButton")
  )();
var V = f._export_sfc($, [
  [
    "render",
    function (e, t, n, r, i, o) {
      return f.e(
        {
          a: f.sr("tab-bar", "6895b61a-0"),
          b: f.o(e.switchNav, 1571),
          c: f.p({
            "cur-index": e.currentTab,
            "tab-config": e.tabsSelectedConfigs,
          }),
          d: f.o(function () {
            return (
              e.gotoColumnEditPage && e.gotoColumnEditPage.apply(e, arguments)
            );
          }, 1572),
          e: e.isPcWeiXin,
        },
        e.isPcWeiXin
          ? {
              f: f.o(function () {
                return e.refreshPage && e.refreshPage.apply(e, arguments);
              }, 1573),
            }
          : {},
        {
          g: f.s(e.pageStyle),
          h: "stock_yd" === e.currentTabId && e.tabsDataReady.stock_yd,
        },
        "stock_yd" === e.currentTabId && e.tabsDataReady.stock_yd
          ? { i: f.t(e.current724Time) }
          : {},
        { j: ["stock_yaowen_v2", "stock_video_v2"].includes(e.currentTabId) },
        ["stock_yaowen_v2", "stock_video_v2"].includes(e.currentTabId)
          ? {
              k: e.isWntjCeiling ? 1 : "",
              l: e.isWntjCeiling ? "" : 1,
              m: f.s(e.ceilingStyle),
            }
          : {},
        {
          n: f.f(e.tabsSelectedConfigs, function (t, n, r) {
            return f.e(
              { a: "stock_guanzhu_v2" == t.id },
              "stock_guanzhu_v2" == t.id
                ? {
                    b: f.sr("stock_guanzhu_v2", "6895b61a-2-" + r, { f: 1 }),
                    c: e.tabsDataReady[t.id],
                    d: f.o(e.open, 1574, "slide_".concat(n)),
                    e: f.o(e.onMpScroll, 1575, "slide_".concat(n)),
                    f: "6895b61a-2-" + r,
                    g: f.p({
                      "choose-list": e.choose.list,
                      "list-id": t.id,
                      "is-curr-slide": e.isCurrTab(n),
                      "refresh-choose-list": e.getChooseData,
                      "mp-scroll-height": e.scrollHeight,
                    }),
                  }
                : {},
              { h: "stock_yaowen_v2" == t.id },
              "stock_yaowen_v2" == t.id
                ? {
                    i: f.sr("stock_yaowen_v2", "6895b61a-3-" + r, { f: 1 }),
                    j: e.tabsDataReady[t.id],
                    k: f.o(e.open, 1576, "slide_".concat(n)),
                    l: f.o(e.showYaowenCeiling, 1577, "slide_".concat(n)),
                    m: f.o(
                      e.showYaowenFeedbackDialog,
                      1578,
                      "slide_".concat(n)
                    ),
                    n: f.o(
                      e.getYaowenFeedbackDataList,
                      1579,
                      "slide_".concat(n)
                    ),
                    o: f.o(e.changeYaowenShow, 1580, "slide_".concat(n)),
                    p: f.o(e.onMpScroll, 1581, "slide_".concat(n)),
                    q: "6895b61a-3-" + r,
                    r: f.p({
                      list: e.yaowen.list,
                      "important-banners": e.yaowen.importantBanners,
                      "show-headline": e.yaowen.showHeadline,
                      tzbd: e.tzbd,
                      "list-id": t.id,
                      "is-curr-slide": e.isCurrTab(n),
                      "active-index": e.currentTab,
                      "refresh-yaowen-list": e.requestYaowenList,
                      "is-mp-page-show": e.isPageShow,
                      "mp-scroll-height": e.scrollHeight,
                    }),
                  }
                : {},
              { s: "stock_yd" == t.id },
              "stock_yd" == t.id
                ? {
                    t: f.sr("stock_yd", "6895b61a-4-" + r, { f: 1 }),
                    v: e.tabsDataReady[t.id],
                    w: f.o(e.open, 1582, "slide_".concat(n)),
                    x: f.o(e.updateCurrentTime, 1583, "slide_".concat(n)),
                    y: f.o(e.onMpScroll, 1584, "slide_".concat(n)),
                    z: "6895b61a-4-" + r,
                    A: f.p({
                      "flash-list": e.current.list,
                      "list-id": t.id,
                      "is-curr-slide": e.isCurrTab(n),
                      "refresh-current-list": e.getCurrentData,
                      "mp-scroll-height": e.scrollHeight,
                    }),
                  }
                : {},
              { B: "stock_shequ_v2" == t.id },
              "stock_shequ_v2" == t.id
                ? {
                    C: f.sr("stock_shequ_v2", "6895b61a-5-" + r, { f: 1 }),
                    D: f.o(e.handleCommunityEdit, 1585, "slide_".concat(n)),
                    E: f.o(e.handleComment, 1586, "slide_".concat(n)),
                    F: f.o(e.onMpScroll, 1587, "slide_".concat(n)),
                    G: f.o(e.showProfilePop, 1588, "slide_".concat(n)),
                    H: "6895b61a-5-" + r,
                    I: f.p({
                      "is-curr-slide": e.isCurrTab(n),
                      "user-info": e.userInfo,
                      "mp-scroll-height": e.scrollHeight,
                      "is-mini-app": !0,
                      theme: e.theme,
                    }),
                  }
                : {},
              { J: "stock_video_v2" == t.id },
              "stock_video_v2" == t.id
                ? {
                    K: f.sr("stock_video_v2", "6895b61a-6-" + r, { f: 1 }),
                    L: f.o(e.handleVideoClick, 1589, "slide_".concat(n)),
                    M: f.o(e.showVideoCeiling, 1590, "slide_".concat(n)),
                    N: f.o(e.onMpScroll, 1591, "slide_".concat(n)),
                    O: f.o(e.showProfilePop, 1592, "slide_".concat(n)),
                    P: "6895b61a-6-" + r,
                    Q: f.p({
                      "is-active": e.isCurrTab(n),
                      "mp-scroll-height": e.scrollHeight,
                    }),
                  }
                : {},
              { R: "stock_ggsc_v2" == t.id },
              "stock_ggsc_v2" == t.id
                ? {
                    S: f.sr("stock_ggsc_v2", "6895b61a-7-" + r, { f: 1 }),
                    T: e.tabsDataReady[t.id],
                    U: f.o(e.open, 1593, "slide_".concat(n)),
                    V: f.o(e.onMpScroll, 1594, "slide_".concat(n)),
                    W: "6895b61a-7-" + r,
                    X: f.p({
                      "hkstock-list": e.hkstock.list,
                      "list-id": t.id,
                      "is-curr-slide": e.isCurrTab(n),
                      "refresh-hkstock-list": e.getHkstockList,
                      "mp-scroll-height": e.scrollHeight,
                    }),
                  }
                : {},
              { Y: "slide_".concat(n) }
            );
          }),
          o: e.currentTab,
          p: e.scrollHeight + "px",
          q: f.o(function () {
            return (
              e.swiperScrollChange && e.swiperScrollChange.apply(e, arguments)
            );
          }, 1595),
          r: e.yaowenFeedbackDialogShow,
        },
        e.yaowenFeedbackDialogShow
          ? {
              s: f.o(e.onFeedbackDialogHide, 1596),
              t: f.o(e.onFeedbackDialogConfirm, 1597),
              v: f.o(function () {
                return (
                  e.onFeedbackDialogHide &&
                  e.onFeedbackDialogHide.apply(e, arguments)
                );
              }, 1598),
            }
          : {},
        { w: e.profilePopParams },
        e.profilePopParams
          ? {
              x: f.o(e.hideProfilePop, 1599),
              y: f.p({
                userStateData: e.profilePopParams.userStateData,
                content: e.profilePopParams.content,
                defaultHeadImage: e.profilePopParams.defaultHeadImage,
                defaultNickname: e.profilePopParams.defaultNickname,
              }),
            }
          : {},
        {
          z:
            "stock_shequ_v2" === e.currentTabId &&
            e.tabsDataReady.stock_shequ_v2,
        },
        "stock_shequ_v2" === e.currentTabId && e.tabsDataReady.stock_shequ_v2
          ? {
              A: f.sr("navBtn", "6895b61a-10"),
              B: f.o(e.navButtonToEdit, 1600),
              C: f.o(e.showProfilePop, 1601),
              D: f.p({ "show-guide": !0 }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-6895b61a"],
]);
wx.createComponent(V);
var Z = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.FEED_RECOM_SETTING_VAL = P),
  (exports.FRESH_TEXT_CONFIG = "fresh_text_config_wzq_utf8.json"),
  (exports.INDEX_CHOOSE_PULLDOWN = "choose.pulldown"),
  (exports.INDEX_CHOOSE_PULLUP = "choose.pullup"),
  (exports.INDEX_CHOOSE_VISITED = "choose.visited"),
  (exports.INDEX_FLASH_PULLDOWN = "flash.pulldown"),
  (exports.INDEX_FLASH_PULLUP = "flash.pullup"),
  (exports.INDEX_FLASH_STAY_TIME = "flash.stay_time"),
  (exports.INDEX_FLASH_VISITED = "flash.visited"),
  (exports.INDEX_GANGGU_BROW = "news.index.ganggu_brow"),
  (exports.INDEX_GANGGU_STAY_TIME = "news.index.ganggu_stay_time"),
  (exports.INDEX_INFORMATION_CHOOSE_STOCK = "information.choose_stock"),
  (exports.INDEX_INFORMATION_FLASH_STOCK = "information.flash_stock"),
  (exports.INDEX_YAOWEN_PULLDOWN = "yaowen.pulldown"),
  (exports.INDEX_YAOWEN_PULLUP = "yaowen.pullup"),
  (exports.INDEX_YAOWEN_STAY_TIME = "yaowen.stay_time"),
  (exports.INDEX_YAOWEN_VISITED = "yaowen.visited"),
  (exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWluZm9ybWF0aW9uLXBhZ2UvcGFnZXMvaW5mb3JtYXRpb24vbXAudnVl =
    Z),
  (exports.LCTAPP_JUMPTO_MPZXG = 1168),
  (exports.formatImageHttps = function (e) {
    return "string" != typeof (t = e) || t.length <= 0
      ? ""
      : t.trim().replace(/^http:\/\//, "https://");
    var t;
  }),
  (exports.formateTime = q),
  (exports.initReachBottomCompStatus = function (e) {
    e.status = "initial";
  });
