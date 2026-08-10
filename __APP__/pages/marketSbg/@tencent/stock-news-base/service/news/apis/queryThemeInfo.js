var l = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  u = Object.defineProperties,
  e = Object.getOwnPropertyDescriptors,
  t = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  d = function (l, n, u) {
    return n in l
      ? i(l, n, { enumerable: !0, configurable: !0, writable: !0, value: u })
      : (l[n] = u);
  },
  v = function (l, i) {
    for (var u in i || (i = {})) r.call(i, u) && d(l, u, i[u]);
    if (t) {
      var e,
        v = n(t(i));
      try {
        for (v.s(); !(e = v.n()).done; ) {
          u = e.value;
          o.call(i, u) && d(l, u, i[u]);
        }
      } catch (l) {
        v.e(l);
      } finally {
        v.f();
      }
    }
    return l;
  },
  a = function (l, n) {
    return u(l, e(n));
  },
  _ = require("../gray.js"),
  m = function (l) {
    var n, i, u;
    if (l)
      return a(v({}, l), {
        imgurl: String(null != (n = null == l ? void 0 : l.imgurl) ? n : ""),
        width: String(null != (i = null == l ? void 0 : l.width) ? i : ""),
        height: String(null != (u = null == l ? void 0 : l.height) ? u : ""),
      });
  },
  s = function (l) {
    var n, i, u, e, t, r, o, d, _, m;
    if (l)
      return a(v({}, l), {
        video_id: String(
          null != (n = null == l ? void 0 : l.video_id) ? n : ""
        ),
        video_time: String(
          null != (i = null == l ? void 0 : l.video_time) ? i : ""
        ),
        video_stand_img: String(
          null != (u = null == l ? void 0 : l.video_stand_img) ? u : ""
        ),
        aspect: String(null != (e = null == l ? void 0 : l.aspect) ? e : ""),
        media_icon_url: String(
          null != (t = null == l ? void 0 : l.media_icon_url) ? t : ""
        ),
        course_id: String(
          null != (r = null == l ? void 0 : l.course_id) ? r : ""
        ),
        course_title: String(
          null != (o = null == l ? void 0 : l.course_title) ? o : ""
        ),
        course_subtitle: String(
          null != (d = null == l ? void 0 : l.course_subtitle) ? d : ""
        ),
        course_type: Number(
          null != (_ = null == l ? void 0 : l.course_type) ? _ : 0
        ),
        course_thumb_image: String(
          null != (m = null == l ? void 0 : l.course_thumb_image) ? m : ""
        ),
      });
  },
  c = function (l) {
    var n, i, u, e, t, r, o, d, _, m, s, c, g, p, b, y;
    if (l)
      return a(v({}, l), {
        play_num: Number(null != (n = null == l ? void 0 : l.play_num) ? n : 0),
        live_id: String(null != (i = null == l ? void 0 : l.live_id) ? i : ""),
        live_type: String(
          null != (u = null == l ? void 0 : l.live_type) ? u : ""
        ),
        live_status: Number(
          null != (e = null == l ? void 0 : l.live_status) ? e : 0
        ),
        estimate_start_time: Number(
          null != (t = null == l ? void 0 : l.estimate_start_time) ? t : 0
        ),
        estimate_end_time: Number(
          null != (r = null == l ? void 0 : l.estimate_end_time) ? r : 0
        ),
        live_public_img: String(
          null != (o = null == l ? void 0 : l.live_public_img) ? o : ""
        ),
        live_public_thumbnail: String(
          null != (d = null == l ? void 0 : l.live_public_thumbnail) ? d : ""
        ),
        participate_num: Number(
          null != (_ = null == l ? void 0 : l.participate_num) ? _ : 0
        ),
        media_id: Number(null != (m = null == l ? void 0 : l.media_id) ? m : 0),
        media_name: String(
          null != (s = null == l ? void 0 : l.media_name) ? s : ""
        ),
        media_icon_url: String(
          null != (c = null == l ? void 0 : l.media_icon_url) ? c : ""
        ),
        live_flv: String(
          null != (g = null == l ? void 0 : l.live_flv) ? g : ""
        ),
        live_m3u8: String(
          null != (p = null == l ? void 0 : l.live_m3u8) ? p : ""
        ),
        reserve_num: Number(
          null != (b = null == l ? void 0 : l.reserve_num) ? b : 0
        ),
        reserve_flag: Number(
          null != (y = null == l ? void 0 : l.reserve_flag) ? y : 0
        ),
      });
  },
  g = function (l) {
    var n, i;
    if (l)
      return a(v({}, l), {
        type: Number(null != (n = null == l ? void 0 : l.type) ? n : 0),
        url: String(null != (i = null == l ? void 0 : l.url) ? i : ""),
      });
  },
  p = function (l) {
    var n,
      i,
      u,
      e,
      t,
      r,
      o,
      d,
      _,
      m,
      p,
      b,
      y,
      S,
      f,
      h,
      w,
      N,
      A,
      q,
      x,
      O,
      k,
      j,
      P,
      I,
      z,
      T,
      R,
      D,
      E,
      F,
      H,
      L,
      Q,
      B,
      C,
      G = null == l ? void 0 : l.extra_info,
      J = null == l ? void 0 : l.theme_img,
      K = null == l ? void 0 : l.video_info,
      M = Array.isArray(null == l ? void 0 : l.tag) ? l.tag : [],
      U = Array.isArray(null == l ? void 0 : l.thumbnails) ? l.thumbnails : [],
      V = Array.isArray(null == l ? void 0 : l.thumbnails_qqnews)
        ? l.thumbnails_qqnews
        : [],
      W = Array.isArray(null == l ? void 0 : l.ext_data) ? l.ext_data : [];
    return a(v({}, l), {
      abstract: String(null != (n = null == l ? void 0 : l.abstract) ? n : ""),
      comment: String(null != (i = null == l ? void 0 : l.comment) ? i : ""),
      tag: M.map(function (l) {
        return String(null != l ? l : "");
      }),
      vote_num: String(
        null !=
          (e =
            null != (u = null == l ? void 0 : l.vote_num)
              ? u
              : null == l
              ? void 0
              : l.voteNum)
          ? e
          : ""
      ),
      news_id: String(
        null !=
          (r =
            null != (t = null == l ? void 0 : l.news_id)
              ? t
              : null == l
              ? void 0
              : l.id)
          ? r
          : ""
      ),
      title: String(null != (o = null == l ? void 0 : l.title) ? o : ""),
      weibo_id: String(
        null !=
          (_ =
            null != (d = null == l ? void 0 : l.weibo_id)
              ? d
              : null == l
              ? void 0
              : l.weiboid)
          ? _
          : ""
      ),
      media_name: String(
        null !=
          (p =
            null != (m = null == l ? void 0 : l.media_name)
              ? m
              : null == l
              ? void 0
              : l.source)
          ? p
          : ""
      ),
      uin_nick: String(
        null !=
          (y =
            null != (b = null == l ? void 0 : l.uin_nick)
              ? b
              : null == l
              ? void 0
              : l.uinnick)
          ? y
          : ""
      ),
      thumbnails_qqnews: V.map(function (l) {
        return String(null != l ? l : "");
      }),
      graphic_live_id: String(
        null !=
          (f =
            null != (S = null == l ? void 0 : l.graphic_live_id)
              ? S
              : null == l
              ? void 0
              : l.graphicLiveID)
          ? f
          : ""
      ),
      publish_time: Number(
        null !=
          (w =
            null != (h = null == l ? void 0 : l.publish_time)
              ? h
              : null == l
              ? void 0
              : l.timestamp)
          ? w
          : 0
      ),
      surl: String(null != (N = null == l ? void 0 : l.surl) ? N : ""),
      qishu: String(null != (A = null == l ? void 0 : l.qishu) ? A : ""),
      video_total_time: String(
        null !=
          (x =
            null != (q = null == l ? void 0 : l.video_total_time)
              ? q
              : null == l
              ? void 0
              : l.videoTotalTime)
          ? x
          : ""
      ),
      type: Number(null != (O = null == l ? void 0 : l.type) ? O : 0),
      cont_type: Number(null != (k = null == l ? void 0 : l.cont_type) ? k : 0),
      charge_type: Number(
        null != (j = null == l ? void 0 : l.charge_type) ? j : 0
      ),
      comment_id: String(
        null !=
          (I =
            null != (P = null == l ? void 0 : l.comment_id)
              ? P
              : null == l
              ? void 0
              : l.commentid)
          ? I
          : ""
      ),
      comment_num: Number(
        null != (z = null == l ? void 0 : l.comment_num) ? z : 0
      ),
      thumbnails: U.map(function (l) {
        return String(null != l ? l : "");
      }),
      url: String(null != (T = null == l ? void 0 : l.url) ? T : ""),
      ext_data: W.map(function (l) {
        return String(null != l ? l : "");
      }),
      uin_name: String(
        null !=
          (D =
            null != (R = null == l ? void 0 : l.uin_name)
              ? R
              : null == l
              ? void 0
              : l.uinname)
          ? D
          : ""
      ),
      vote_id: String(
        null !=
          (F =
            null != (E = null == l ? void 0 : l.vote_id)
              ? E
              : null == l
              ? void 0
              : l.voteId)
          ? F
          : ""
      ),
      time: String(null != (H = null == l ? void 0 : l.time) ? H : ""),
      image_count: Number(
        null !=
          (Q =
            null != (L = null == l ? void 0 : l.image_count)
              ? L
              : null == l
              ? void 0
              : l.imagecount)
          ? Q
          : 0
      ),
      extra_info: G ? c(G) : void 0,
      theme_img: J ? g(J) : void 0,
      video_info: K ? s(K) : void 0,
      articletype: String(
        null !=
          (C =
            null != (B = null == l ? void 0 : l.articletype)
              ? B
              : null == l
              ? void 0
              : l.type)
          ? C
          : ""
      ),
    });
  },
  b = function (l) {
    var n,
      i,
      u,
      e = Array.isArray(null == l ? void 0 : l.news_ids)
        ? l.news_ids
        : Array.isArray(null == l ? void 0 : l.ids)
        ? l.ids
        : [],
      t = Array.isArray(null == l ? void 0 : l.news_list)
        ? l.news_list
        : Array.isArray(null == l ? void 0 : l.newslist)
        ? l.newslist
        : [];
    return a(v({}, l), {
      section: String(null != (n = null == l ? void 0 : l.section) ? n : ""),
      type: Number(null != (i = null == l ? void 0 : l.type) ? i : 0),
      news_ids: e.map(function (l) {
        return String(null != l ? l : "");
      }),
      news_list: t.map(p),
      module_id: String(
        null != (u = null == l ? void 0 : l.module_id) ? u : ""
      ),
    });
  },
  y = function (l) {
    var n,
      i,
      u,
      e,
      t,
      r,
      o,
      d,
      _,
      m,
      c,
      g = null == l ? void 0 : l.video_info;
    return a(v({}, l), {
      news_id: String(null != (n = null == l ? void 0 : l.news_id) ? n : ""),
      title: String(
        null !=
          (u =
            null != (i = null == l ? void 0 : l.title)
              ? i
              : null == l
              ? void 0
              : l.news_title)
          ? u
          : ""
      ),
      publish_time: Number(
        null != (e = null == l ? void 0 : l.publish_time) ? e : 0
      ),
      media_name: String(
        null !=
          (r =
            null != (t = null == l ? void 0 : l.media_name)
              ? t
              : null == l
              ? void 0
              : l.source)
          ? r
          : ""
      ),
      type: Number(
        null !=
          (d =
            null != (o = null == l ? void 0 : l.type)
              ? o
              : null == l
              ? void 0
              : l.news_type)
          ? d
          : 0
      ),
      charge_type: Number(
        null != (_ = null == l ? void 0 : l.charge_type) ? _ : 0
      ),
      cont_type: Number(null != (m = null == l ? void 0 : l.cont_type) ? m : 0),
      image: String(null != (c = null == l ? void 0 : l.image) ? c : ""),
      video_info: g ? s(g) : void 0,
    });
  },
  S = function (l) {
    var n, i;
    if (l)
      return a(v({}, l), {
        valid: Number(null != (n = null == l ? void 0 : l.valid) ? n : 0),
        activity_stage: Number(
          null != (i = null == l ? void 0 : l.activity_stage) ? i : 0
        ),
      });
  };
(exports.adaptQueryThemeInfoResp = function (l) {
  var n, i, u, e, t, r;
  if (!l) return l;
  var o = null != (n = l.retcode) ? n : l.code,
    d = "0" === String(o) || 0 === o,
    _ = null != (u = null != (i = l.news_info) ? i : l.data) ? u : {},
    s = v({}, l),
    c = (function (l) {
      var n,
        i,
        u,
        e,
        t,
        r,
        o,
        d,
        _,
        s,
        c,
        g,
        p,
        f,
        h,
        w,
        N,
        A,
        q = v({}, l),
        x = Array.isArray(null == l ? void 0 : l.id_list)
          ? l.id_list
          : Array.isArray(null == l ? void 0 : l.idlist)
          ? l.idlist
          : [],
        O = Array.isArray(null == l ? void 0 : l.relate_news)
          ? l.relate_news
          : [],
        k = null == l ? void 0 : l.thumbnails;
      return a(v({}, q), {
        news_id: String(
          null !=
            (i =
              null != (n = null == l ? void 0 : l.news_id)
                ? n
                : null == l
                ? void 0
                : l.id)
            ? i
            : ""
        ),
        title: String(
          null !=
            (e =
              null != (u = null == l ? void 0 : l.title)
                ? u
                : null == l
                ? void 0
                : l.origtitle)
            ? e
            : ""
        ),
        intro: String(null != (t = null == l ? void 0 : l.intro) ? t : ""),
        thumbnails: k ? m(k) : void 0,
        type: Number(
          null !=
            (o =
              null != (r = null == l ? void 0 : l.type)
                ? r
                : null == l
                ? void 0
                : l.news_type)
            ? o
            : 0
        ),
        cont_type: Number(
          null != (d = null == l ? void 0 : l.cont_type) ? d : 0
        ),
        show_index: Number(
          null != (_ = null == l ? void 0 : l.show_index) ? _ : 0
        ),
        focus_image: String(
          null !=
            (c =
              null != (s = null == l ? void 0 : l.focus_image)
                ? s
                : null == l
                ? void 0
                : l.focus_img)
            ? c
            : ""
        ),
        thumb_image: String(
          null !=
            (p =
              null != (g = null == l ? void 0 : l.thumb_image)
                ? g
                : null == l
                ? void 0
                : l.thumb_img)
            ? p
            : ""
        ),
        comment_status: Number(
          null != (f = null == l ? void 0 : l.comment_status) ? f : 0
        ),
        id_list: x.map(b),
        play_num: Number(null != (h = null == l ? void 0 : l.play_num) ? h : 0),
        relate_news: O.map(y),
        account_desc: String(
          null != (w = null == l ? void 0 : l.account_desc) ? w : ""
        ),
        account_zxg_link: String(
          null != (N = null == l ? void 0 : l.account_zxg_link) ? N : ""
        ),
        account_wzq_link: String(
          null != (A = null == l ? void 0 : l.account_wzq_link) ? A : ""
        ),
        news_right: (null == l ? void 0 : l.news_right)
          ? S(l.news_right)
          : void 0,
      });
    })(_);
  return a(v({}, s), {
    code: d ? 0 : Number(null != o ? o : -1),
    msg: String(
      null !=
        (r = null != (t = null != (e = l.msg) ? e : l.retmsg) ? t : l.ret_msg)
        ? r
        : ""
    ),
    news_info: c,
  });
}),
  (exports.queryThemeInfo = function (n) {
    return (
      (i = this),
      null,
      (u = l().mark(function i() {
        return l().wrap(function (l) {
          for (;;)
            switch ((l.prev = l.next)) {
              case 0:
                return l.abrupt(
                  "return",
                  _.newsRequest("/zxg/news/news_detail/query_theme_info", n)
                );
              case 1:
              case "end":
                return l.stop();
            }
        }, i);
      })),
      new Promise(function (l, n) {
        var e = function (l) {
            try {
              r(u.next(l));
            } catch (l) {
              n(l);
            }
          },
          t = function (l) {
            try {
              r(u.throw(l));
            } catch (l) {
              n(l);
            }
          },
          r = function (n) {
            return n.done ? l(n.value) : Promise.resolve(n.value).then(e, t);
          };
        r((u = u.apply(i, null)).next());
      })
    );
    var i, u;
  });
