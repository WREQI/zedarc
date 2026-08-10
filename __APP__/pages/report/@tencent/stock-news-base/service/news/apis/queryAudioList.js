var r = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  t = Object.defineProperties,
  l = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  a = function (r, e, t) {
    return e in r
      ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t);
  },
  s = function (r, n) {
    for (var t in n || (n = {})) u.call(n, t) && a(r, t, n[t]);
    if (i) {
      var l,
        s = e(i(n));
      try {
        for (s.s(); !(l = s.n()).done; ) {
          t = l.value;
          o.call(n, t) && a(r, t, n[t]);
        }
      } catch (r) {
        s.e(r);
      } finally {
        s.f();
      }
    }
    return r;
  },
  d = function (r, e) {
    return t(r, l(e));
  },
  c = require("../gray.js");
(exports.adaptQueryAudioListResp = function (r) {
  var e, n, t;
  if (!r) return r;
  var l = null != (e = r.retcode) ? e : r.code,
    i = "0" === String(l) || 0 === l,
    u = Array.isArray(r.data)
      ? r.data
      : Array.isArray(r.audio_list)
      ? r.audio_list
      : [],
    o = s({}, r),
    a = u.map(function (r) {
      var e,
        n,
        t,
        l = (
          Array.isArray(null == r ? void 0 : r.speech_info)
            ? r.speech_info
            : Array.isArray(null == r ? void 0 : r.audio_info)
            ? r.audio_info
            : []
        ).map(function (r) {
          var e, n, t, l, i;
          return d(s({}, r), {
            model: Number(null != (e = null == r ? void 0 : r.model) ? e : 0),
            model_name: String(
              null != (n = null == r ? void 0 : r.model_name) ? n : ""
            ),
            play_time: Number(
              null != (t = null == r ? void 0 : r.play_time) ? t : 0
            ),
            time_mark: String(
              null != (l = null == r ? void 0 : r.time_mark) ? l : ""
            ),
            play_url: String(
              null != (i = null == r ? void 0 : r.play_url) ? i : ""
            ),
          });
        });
      return d(s({}, r), {
        news_id: String(
          null !=
            (n =
              null != (e = null == r ? void 0 : r.id)
                ? e
                : null == r
                ? void 0
                : r.news_id)
            ? n
            : ""
        ),
        title: String(null != (t = null == r ? void 0 : r.title) ? t : ""),
        audio_info: l,
      });
    }),
    c = (Array.isArray(r.next_tip) ? r.next_tip : []).map(function (r) {
      var e, n, t;
      return d(s({}, r), {
        model: Number(null != (e = null == r ? void 0 : r.model) ? e : 0),
        play_time: Number(
          null != (n = null == r ? void 0 : r.play_time) ? n : 0
        ),
        play_url: String(
          null != (t = null == r ? void 0 : r.play_url) ? t : ""
        ),
      });
    });
  return d(s({}, o), {
    code: i ? 0 : Number(null != l ? l : -1),
    msg: String(null != (t = null != (n = r.msg) ? n : r.retmsg) ? t : ""),
    audio_list: a,
    next_tip: c,
  });
}),
  (exports.queryAudioList = function (e) {
    return (
      (n = this),
      null,
      (t = r().mark(function n() {
        return r().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return r.abrupt(
                  "return",
                  c.newsRequest("/zxg/news/news_detail/query_audio_list", e)
                );
              case 1:
              case "end":
                return r.stop();
            }
        }, n);
      })),
      new Promise(function (r, e) {
        var l = function (r) {
            try {
              u(t.next(r));
            } catch (r) {
              e(r);
            }
          },
          i = function (r) {
            try {
              u(t.throw(r));
            } catch (r) {
              e(r);
            }
          },
          u = function (e) {
            return e.done ? r(e.value) : Promise.resolve(e.value).then(l, i);
          };
        u((t = t.apply(n, null)).next());
      })
    );
    var n, t;
  });
