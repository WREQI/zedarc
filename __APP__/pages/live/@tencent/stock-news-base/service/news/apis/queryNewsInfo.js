var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  i = Object.defineProperties,
  l = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  u = function (e, t, i) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[t] = i);
  },
  s = function (e, n) {
    for (var i in n || (n = {})) o.call(n, i) && u(e, i, n[i]);
    if (r) {
      var l,
        s = t(r(n));
      try {
        for (s.s(); !(l = s.n()).done; ) {
          i = l.value;
          a.call(n, i) && u(e, i, n[i]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  _ = function (e, t) {
    return i(e, l(t));
  },
  c = require("../gray.js"),
  d = function (e) {
    var t, n, i, l, r, o, a, u;
    return e
      ? _(s({}, e), {
          video_id: null != (t = e.video_id) ? t : e.vid,
          video_time: null != (n = e.video_time) ? n : e.vtime,
          video_stand_img: null != (i = e.video_stand_img) ? i : e.vstand_img,
          aspect: e.aspect,
          media_icon_url: null != (l = e.media_icon_url) ? l : e.mediaIconUrl,
          media_id:
            void 0 !== e.media_id && null !== e.media_id
              ? String(e.media_id)
              : void 0 !== e.mediaId
              ? String(e.mediaId)
              : void 0,
          course_id: null != (r = e.course_id) ? r : e.courseId,
          course_title: null != (o = e.course_title) ? o : e.courseTitle,
          course_subtitle:
            null != (a = e.course_subtitle) ? a : e.courseSubtitle,
          course_type: null != (u = e.course_type) ? u : e.courseType,
        })
      : e;
  },
  m = function (e) {
    var t, n;
    return _(s({}, e), {
      stock_code: e.stock_code,
      stock_name: e.stock_name,
      bk_title: e.bk_title,
      bk_type:
        null != (n = null != (t = e.bk_type) ? t : e["data-bktype"]) ? n : "",
    });
  };
(exports.adaptQueryNewsInfoResp = function (e) {
  var n, i, l, u, c, p, f, v, y, g, b, h, w, x, k, O, I, j, S, q;
  if (!e) return e;
  var P =
      e.news_info || e.media_info || e.media_info_all
        ? e
        : null != (n = e.data)
        ? n
        : e,
    N = null != (i = P.news_info) ? i : {},
    R = N,
    z =
      (R.is_tzbd,
      (function (e, n) {
        var i = {};
        for (var l in e) o.call(e, l) && n.indexOf(l) < 0 && (i[l] = e[l]);
        if (null != e && r) {
          var u,
            s = t(r(e));
          try {
            for (s.s(); !(u = s.n()).done; ) {
              l = u.value;
              n.indexOf(l) < 0 && a.call(e, l) && (i[l] = e[l]);
            }
          } catch (e) {
            s.e(e);
          } finally {
            s.f();
          }
        }
        return i;
      })(R, ["is_tzbd"])),
    H = "0" === String(null != (l = e.retcode) ? l : e.code) || 0 === e.code,
    Q = s({}, e),
    T = s({}, z),
    D = _(s({}, T), {
      news_id: null != (u = N.news_id) ? u : N.id,
      title: N.title,
      source: N.source,
      publish_time: N.publish_time,
      news_type: N.news_type,
      cont_type: N.cont_type,
      data_source: N.data_source,
      publish_status: N.publish_status,
      summary: N.summary,
      has_translation: N.has_translation,
      copyright_flag: N.copyright_flag,
      comment_status: N.comment_status,
      comment_id: String(
        null != (p = null != (c = N.comment_id) ? c : N.commentid) ? p : ""
      ),
      url: N.url,
      english_news: N.english_news,
      forward_status: N.forward_status,
      special_type: N.special_type,
      focus_image: null != (f = N.focus_image) ? f : N.focus_img,
      thumb_image: null != (v = N.thumb_image) ? v : N.thumb_img,
      ext_image_list: N.ext_image_list,
      img_display_mode: N.img_display_mode,
      relate_stocks: (null != (y = N.relate_stocks) ? y : []).map(m),
      mention_stocks: (null != (g = N.mention_stocks) ? g : []).map(m),
      relate_news: (null != (b = N.relate_news) ? b : []).map(function (e) {
        var t;
        return _(s({}, e), {
          news_id: e.news_id,
          title: null != (t = e.title) ? t : e.news_title,
          publish_time: e.publish_time,
          source: e.source,
        });
      }),
      relate_plates: (null != (h = N.relate_plates) ? h : []).map(function (e) {
        var t,
          n,
          i,
          l = null != (t = e.plate_type) ? t : e.type;
        return _(s({}, e), {
          plate_code: null != (n = e.plate_code) ? n : e.id,
          plate_name: null != (i = e.plate_name) ? i : e.name,
          plate_type: null == l ? l : String(l),
        });
      }),
      content: N.content,
      footernote: N.footernote,
      video_info: d(N.video_info),
      activity_info: N.activity_info,
      jump_page: N.jump_page,
      multi_title: null != (w = N.multi_title) ? w : N.mulit_title,
      short_titles: N.short_titles,
      wx_heat: N.wx_heat,
      wx_tag: N.wx_tag,
      nlp_content: N.nlp_content,
    });
  return _(s({}, Q), {
    code: H
      ? 0
      : Number(null != (k = null != (x = e.code) ? x : e.retcode) ? k : -1),
    msg: String(null != (O = e.msg) ? O : "ok"),
    news_info: D,
    media_info: null != (I = P.media_info_all) ? I : P.media_info,
    ad_info: null != (j = P.ad_info) ? j : P.adinfo,
    audio_info: null != (S = P.audio_info) ? S : P.speech_info,
    xg_info: P.xg_info,
    watch_list: null != (q = P.watch_list) ? q : P.watchList,
  });
}),
  (exports.queryNewsInfo = function (t) {
    return (
      (n = this),
      null,
      (i = e().mark(function () {
        var n, i, l;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (i = {
                    input: s(
                      { newsId: t.news_id },
                      void 0 !== t.reserve && null !== t.reserve
                        ? { reserve: t.reserve }
                        : {}
                    ),
                  }),
                  (e.next = 3),
                  c.graphqlRequest("QueryNewsInfo", i, {
                    version: 1,
                    sha256Hash:
                      "207391e4b0ec552d8f199c428a7a1e9a604ab6c9e820c82671d465a0923031aa",
                  })
                );
              case 3:
                return (
                  (l = e.sent),
                  e.abrupt(
                    "return",
                    null == (n = null == l ? void 0 : l.data)
                      ? void 0
                      : n.queryNewsInfo
                  )
                );
              case 5:
              case "end":
                return e.stop();
            }
        }, l);
      })),
      new Promise(function (e, t) {
        var l = function (e) {
            try {
              o(i.next(e));
            } catch (e) {
              t(e);
            }
          },
          r = function (e) {
            try {
              o(i.throw(e));
            } catch (e) {
              t(e);
            }
          },
          o = function (t) {
            return t.done ? e(t.value) : Promise.resolve(t.value).then(l, r);
          };
        o((i = i.apply(n, null)).next());
      })
    );
    var n, i;
  });
