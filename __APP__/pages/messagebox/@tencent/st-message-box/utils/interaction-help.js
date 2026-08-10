var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  o = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  u = function (t, e, n) {
    return e in t
      ? r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  l = function (t, e) {
    for (var r in e || (e = {})) s.call(e, r) && u(t, r, e[r]);
    if (i) {
      var o,
        a = n(i(e));
      try {
        for (a.s(); !(o = a.n()).done; ) {
          r = o.value;
          c.call(e, r) && u(t, r, e[r]);
        }
      } catch (t) {
        a.e(t);
      } finally {
        a.f();
      }
    }
    return t;
  },
  m = function (t, e) {
    return o(t, a(e));
  },
  p = function (t, e, n) {
    return new Promise(function (r, o) {
      var a = function (t) {
          try {
            s(n.next(t));
          } catch (t) {
            o(t);
          }
        },
        i = function (t) {
          try {
            s(n.throw(t));
          } catch (t) {
            o(t);
          }
        },
        s = function (t) {
          return t.done ? r(t.value) : Promise.resolve(t.value).then(a, i);
        };
      s((n = n.apply(t, e)).next());
    });
  },
  d = require("../../stock-community-base/utils/commentFilter.js"),
  f = require("../../stock-community-base/utils/knife.js"),
  g = require("../../stock-news-core/utils/knife.js");
function _(t, n) {
  var r = f.getStorage("illegalReport") || "{}";
  r = f.doJSONparse(r);
  var o = (function (t, e, n) {
    var r = null,
      o = null;
    (t.rss_list || t.data) &&
      ((r = t.rss_list || t.data), (o = t.subject_dict));
    var a = t.follow || {},
      i = (null == n ? void 0 : n.openid) || "",
      s = function (n) {
        "removed" === n &&
          (n = {
            content: "很抱歉，原贴已被删除",
            showType: "removed",
            commentsTail: { cnt: 0 },
          });
        var o = (n.type && +n.type) || 1,
          s = 0 === n.is_root || !!n.from_user,
          c = s ? n.root_id : n.commentid || n.comment_id || n.subject_id,
          u = n.commentid || n.comment_id,
          p = n.commentid || n.comment_id || n.subject_id;
        n.user_medal = n.user_medal || [];
        var d = !1;
        for (var g in (e && e[p] && (d = !0), n))
          f.isString(n[g]) && (n[g] = f.doDecodeURI(n[g]));
        n.user_name || (n.user_name = n.from_user_name || "");
        var _ = !!a[n.user_id] || t.is_followed,
          h = O(n.created_at),
          y = O(n.operate_time),
          w = f.formatView(n.like_num),
          x = f.formatView(n.comment_num || n.comment_cnt),
          k = f.formatView(n.retweet_count),
          j = n.owner;
        void 0 === j &&
          (i ? (i !== n.user_id && i !== n.from_user) || (j = 1) : (j = 0));
        var I = n.image_list || n.image_list || [],
          T = [],
          L = [];
        I.length &&
          I.forEach(function (t) {
            n.from_news && (t.origin = "".concat(t.origin, "/0")),
              (t.styleValue = "background-image:url(".concat(t.origin, ")")),
              T.push(t.origin),
              L.push(t.origin_prop);
          }),
          (11 !== o && 13 !== o) ||
            ((n.newsTitle = n.title),
            (n.newsContent = f.doHTMLDecode(b(n.sub_content))));
        var R = n.news_id,
          D = +n.news_type;
        if ((1 === o || 3 === o || 4 === o) && R)
          if (((n.title = n.title ? n.title : f.doDecodeURI(n.sub_content)), D))
            n.newsFrom = 2 === D || 18 === D ? "om" : "news";
          else {
            var S = R.split("_")[1] || null;
            18 == +S && (n.newsFrom = "om"),
              (n.resourceType = S),
              (n.resourceText =
                { 8: "新闻", 9: "公告", 10: "研报" }[S] || "新闻");
          }
        var E = n.showType;
        if (!n.showType)
          switch (o) {
            case 1:
            case 4:
            default:
              E = "short";
              break;
            case 11:
            case 13:
              E = "long";
              break;
            case 12:
            case 14:
              E = "turn";
              break;
            case 3:
              E = "turnNews";
              break;
            case 15:
              E = "share";
          }
        n.image_list &&
          n.image_list.length &&
          !n.content &&
          (n.content = "分享图片"),
          Object.assign(n, v(n.content, n.link)),
          "turn" === E &&
            n.turnLog.length &&
            (!n.user_id &&
              n.turnLog[0].user_id &&
              (n.user_id = n.turnLog[0].user_id),
            !n.user_name &&
              n.turnLog[0].user_name &&
              (n.user_name = n.turnLog[0].user_name),
            n.isMain
              ? (n.pResult = n.turnLog[0].pResult)
              : n.turnLog[1] &&
                ((n.turnLog[0] = n.turnLog[1]),
                (n.user_id = n.turnLog[1].user_id),
                (n.user_name = n.turnLog[1].user_name)));
        var P = [];
        if (
          (11 === o || 13 === o) &&
          ((n.newsTitle = n.title),
          (n.newsContent = b(n.sub_content)),
          11 === o && "" !== n.content)
        )
          try {
            (P = f.doJSONparse(r.content)).forEach(function (t) {
              t.image_list &&
                t.image_list.length &&
                !t.content &&
                (t.content = "分享图片"),
                "text" === t.tag
                  ? (t.detailInfo = v(t.value, t.link))
                  : (t.detailInfo = t.value);
            });
          } catch (t) {}
        var N = n.status;
        (2 != +N && 3 != +N) ||
          0 !== j ||
          n.mainPost ||
          ((E = "removed"),
          (n = m(l({}, n), {
            status: N,
            owner: j,
            content: "很抱歉，该帖目前不支持浏览哦",
            showType: E,
            commentsTail: { cnt: 0 },
          })));
        var C = Object.assign({}, n, {
          id: c,
          comment_id: u,
          isIllegalReport: d,
          isReply: s,
          isFollow: _,
          showType: E,
          time: h.time,
          formatTime: h.formatTime,
          operateTime: y.formatTime,
          image_list: I,
          imageList: T,
          imageListInfo: L,
          litype: o,
          owner: j,
          detailLongContent: P,
          likeNum: w,
          commentNum: x,
          retweetNum: k,
        });
        return (
          n.submitFalseData && n.image_urls && (C.image_urls = n.image_urls),
          C.comment_cnt && (C.comment_cnt = Number(C.comment_cnt)),
          C.comment_num && (C.comment_num = Number(C.comment_num)),
          C
        );
      },
      c = [];
    Array.isArray(r) ? (c = r) : c.push(r);
    var u = [];
    return (
      r &&
        f.isArray(c) &&
        c.forEach(function (t) {
          var e,
            n = "comment_like" === t.comment_type && !!t.publish_id,
            r = 0 === t.is_root && !!t.from_user,
            a = t.comment_type,
            i = {},
            c = {},
            l = {};
          switch (a) {
            case "comment_like":
              (i = Object.assign({}, o[t.publish_id], t)),
                (c = Object.assign({}, t, o[t.publish_id]));
              break;
            case "comment_at":
            case "retweet":
              (l = Object.assign({}, { status: "1" }, o[t.subject_id])),
                (i = Object.assign({}, l, t)),
                (c = Object.assign({}, t, l)),
                l.stock_prop &&
                  o[l.stock_prop] &&
                  ((o[l.stock_prop].status =
                    void 0 === o[l.stock_prop].status
                      ? "1"
                      : o[l.stock_prop].status),
                  (c = Object.assign({}, c, o[l.stock_prop])));
              break;
            case "comment":
              (i = Object.assign({}, t)),
                (l = Object.assign({}, { status: "1" }, o[t.parent_id])),
                (c = Object.assign({}, t, l));
              break;
            case "comment_to":
              (i = Object.assign({}, t)), (c = Object.assign({}, t));
          }
          (i.isMain = !0),
            (i.type = i.type || "1"),
            0 == +i.status &&
              ((i.content = "[很抱歉，该贴已删除]"), (i.showType = "short")),
            (2 != +i.status && 3 != +i.status) ||
              1 == +i.owner ||
              ((i.content = "[很抱歉，该帖目前不支持浏览哦]"),
              (i.showType = "short"),
              (i.mainPost = !0));
          var m = s(i);
          (m.isLoaclComment =
            !n && !r && -1 !== ["1", "4", "11", "13"].indexOf(m.type)),
            (m.detailInfo = s(0 == +c.status ? "removed" : c));
          var p = m.detailInfo.pResult;
          !n &&
            Array.isArray(null == (e = p[0]) ? void 0 : e.content_reply) &&
            p[0].content_reply.length &&
            (m.detailInfo.pResult[0].content_array =
              m.detailInfo.pResult[0].content_reply),
            "comment_to" === a &&
              m.detailInfo.replyTo &&
              (m.detailInfo.user_name = m.detailInfo.replyTo.text),
            m.isIllegalReport || u.push(m);
        }),
      Object.assign({}, t, { commentsData: u })
    );
  })((t = f.doJSONparse(JSON.stringify(t))), r, n);
  return (
    (o.commentsData = e(o.commentsData).map(function (t) {
      var e = t.stock_name,
        n = t.topic_name,
        r = t.stock_id,
        o = t.topic_id,
        a = l(
          l({}, t.extraInfo),
          "turn" === t.showType &&
            t.turnLog &&
            t.turnLog[0] &&
            t.turnLog[0].extraInfo
        ),
        i = a.stocks,
        s = void 0 === i ? [] : i,
        c = a.topics,
        u = void 0 === c ? [] : c;
      return (
        s[0] && ((r = r || s[0].symbol), (e = e || s[0].text)),
        u[0] && ((o = o || u[0].topicId), (n = n || u[0].text)),
        m(l({}, t), { stock_id: r, topic_id: o, stock_name: e, topic_name: n })
      );
    })),
    o
  );
}
function v() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  t = b(t);
  var r = "";
  if (n && 0 !== n.indexOf("http"))
    try {
      r = f.doJSONparse(n);
    } catch (t) {}
  var o = { stocks: [], topics: [] },
    a = {};
  if (t) {
    var i = "(\\u001c\\<\\d{1},[^\\>\\u001c]+\\>\\u001c)",
      s = "(\\u001e\\[\\S+\\s\\S.*?\\]\\u001e)",
      c = "(\\u001f\\<\\d{1},([.\\s\\S\\u4e00-\\u9fa5]+?)\\>\\u001f)",
      u = "(\\u0001[^\\u0001]*\\u0001)",
      l = new RegExp("".concat(i)),
      m = new RegExp("".concat(s)),
      p = new RegExp("".concat(c)),
      g = new RegExp("".concat(u)),
      _ = new RegExp("".concat(i, "|").concat(s, "|").concat(c, "|").concat(u)),
      y = 0,
      w = null,
      x = [],
      k = [],
      O = null,
      j = [];
    [t].forEach(function (t) {
      if (f.isString(t)) {
        var n = [],
          a = [];
        t.split(_).forEach(function (t, r) {
          if (t)
            if (t.match(p)) {
              var i = t.match(p)[1],
                s = i.indexOf("<1,") + 3,
                c = i.indexOf(":", 0),
                u = i.indexOf(":", c + 1),
                _ = {
                  user_id: i.substring(s, c),
                  user_name: i.substring(c + 1, u),
                  content: i.substring(u + 1, i.length - 2),
                };
              Object.assign(_, v(f.doDecodeURI(_.content))), j.push(_);
            } else if (t.match(g)) {
              var h = t.match(g)[0],
                b = { type: "CMP", text: h.substring(1, h.length - 1) };
              n.push(b);
            } else if (t.match(l)) {
              var k = t.match(l)[0],
                I = k.substr(2, k.length - 4),
                T = I.split(":")[0].split(","),
                L = +T[0],
                R = T[1],
                D = I.split(":")[1];
              if (1 === L)
                (w = r),
                  (y += 1) < 2 &&
                    (O = { text: "".concat(f.doDecodeURI(D)), type: "at" });
              else {
                var S = {};
                2 === L
                  ? (S = { type: "atPerson", text: "".concat(D), personId: R })
                  : 4 === L
                  ? ((S = { type: "topic", text: D, topicId: R }),
                    o.topics.push(S))
                  : 3 === L
                  ? (S = { type: "live", text: D, id: R })
                  : 5 === L &&
                    (S = { type: "strategy", text: D, strategyId: R }),
                  y < 2 && (null !== w && r > w ? a.push(S) : n.push(S));
              }
            } else if (t.match(m)) {
              var E = t.match(m)[0],
                P = E.substr(2, E.length - 4),
                N = P.split(" ")[0],
                C = {
                  text: P.substring(P.indexOf(" ") + 1),
                  symbol: N,
                  symbolShow:
                    (function (t) {
                      if (f.isString(t)) {
                        var e = (t = (t = t
                            .replace(/^us\.?/, "us")
                            .replace(/(\.[^.]+)$/gi, "")).replace(/\./g, "__")),
                          n = t.substring(0, 2),
                          r = "";
                        return (
                          /^[a-zA-Z]+$/.test(n) &&
                            ((r = n), (e = e.substring(2))),
                          { symbol: t, market: r, code: e }
                        );
                      }
                    })(N).market.toUpperCase() || N,
                  type: "stock",
                };
              o.stocks.push(C),
                x.push(N),
                y < 2 && (null !== w && r > w ? a.push(C) : n.push(C));
            } else if (y < 2) {
              var F = t.replace(/[\r\n](?=[\r\n])/g, "").split(/\r\n|\n|\r/),
                M = { text: " ", type: "plain-br" };
              F.forEach(function (t, o) {
                null !== w && r > w
                  ? (a.push.apply(a, e(d.replaceEmoji(t))),
                    o < F.length - 1 && a.push(M))
                  : (n.push.apply(n, e(d.replaceEmoji(t))),
                    o < F.length - 1 && n.push(M));
              });
            }
        }),
          k.push({ content_array: h(n, r), content_reply: h(a, r) });
      }
    }),
      (a = {
        pResult: k,
        extraInfo: o,
        replyTo: O,
        stocks: x,
        turnLog: j,
        hasAtStruct: !!y,
      });
  } else
    a = {
      pResult: [{ content_array: [], content_reply: [] }],
      replyTo: null,
      stocks: [],
      turnLog: [],
    };
  return a;
}
function h(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
    n = [],
    r = [];
  return (
    t.forEach(function (t) {
      t.type && "plain" !== t.type
        ? "CMP" === t.type && e && e.length
          ? (r.push(t), n.push(t))
          : n.push(t)
        : t.text &&
          ((t.text = f.doHTMLDecode(t.text)),
          (t.text = t.text.replace(/^ /, "")),
          (t.text = t.text.replace(/&nbsp;/gi, "")),
          n.push(t));
    }),
    r.length === e.length &&
      r.forEach(function (t, n) {
        t.text === e[n].title && (t.link = e[n]);
      }),
    n
  );
}
function b(t) {
  if ("[object String]" === Object.prototype.toString.call(t))
    return t.replace(/<[/]?[\w]+>/g, "");
}
var y = 6e4,
  w = 60 * y,
  x = 24 * w;
function k(t) {
  return +t < 10 ? "0".concat(t) : t;
}
function O(t) {
  if (!t) return {};
  var e = new Date(),
    n = new Date(t),
    r = [
      k(n.getMinutes()),
      k(n.getHours()),
      k(n.getDate()),
      k(n.getMonth() + 1),
      n.getFullYear(),
    ],
    o = r[0],
    a = r[1],
    i = r[2],
    s = r[3],
    c = r[4];
  if (isNaN(c)) return { formatTime: t };
  var u,
    l = ""
      .concat(c, "-")
      .concat(s, "-")
      .concat(i, " ")
      .concat(a, ":")
      .concat(o);
  if (e.getFullYear() === c) {
    var m = e.getTime() - n.getTime(),
      p = e.setHours(0, 0, 0, 0) - n.getTime();
    u =
      m > 2592e6
        ? "".concat(s, "-").concat(i, " ").concat(a, ":").concat(o)
        : m > x
        ? p < x
          ? "昨天 ".concat(a, ":").concat(o)
          : p < 2 * x
          ? "前天 ".concat(a, ":").concat(o)
          : "".concat(s, "-").concat(i, " ").concat(a, ":").concat(o)
        : m > w
        ? "".concat(Math.floor(m / w), "小时前")
        : m > y
        ? "".concat(Math.floor(m / y), "分钟前")
        : "刚刚";
  } else
    u = ""
      .concat(c, "-")
      .concat(s, "-")
      .concat(i, " ")
      .concat(a, ":")
      .concat(o);
  return { formatTime: u, time: l };
}
var j = f.sdk.getUserInfo,
  I = function (t) {
    var e,
      n,
      r,
      o,
      a,
      i = [];
    if (
      (((i =
        null ==
        (r =
          null ==
          (n =
            null == (e = null == t ? void 0 : t.turnLog[0])
              ? void 0
              : e.pResult)
            ? void 0
            : n[0])
          ? void 0
          : r.content_array) &&
        i.length) ||
        (i =
          null ==
          (a = null == (o = null == t ? void 0 : t.pResult) ? void 0 : o[0])
            ? void 0
            : a.content_array),
      !i || !i.length)
    )
      return "";
    var s = "";
    if (
      (i.forEach(function (t) {
        "plain" === t.type && (s += t.text);
      }),
      "turnNews" === T(t))
    ) {
      var c = "转发的文章",
        u = "".concat(c, "：");
      return s.length && "转发新闻" !== s ? s : t.title ? u + t.title : c;
    }
    if ("turn" === T(t)) {
      var l = "转发的帖子",
        m = "".concat(l, "：");
      return s.length && "转发" !== s ? s : t.title ? m + t.title : l;
    }
    return "long" === T(t) ? (t.title ? t.title : "") : (s.length, s);
  },
  T = function (t) {
    if (!t) return "";
    var e = t,
      n = (e.type && +e.type) || 1;
    e.comment_id || e.commentid,
      e.commentid || e.comment_id || e.subject_id,
      e.commentid || e.comment_id;
    var r = "";
    switch (n) {
      case 1:
      case 4:
      default:
        r = "short";
        break;
      case 11:
      case 13:
        r = "long";
        break;
      case 12:
      case 14:
        r = "turn";
        break;
      case 3:
        r = "turnNews";
        break;
      case 15:
        r = "share";
    }
    return (
      (1 === n || 3 === n || 4 === n) &&
        e.news_id &&
        e.title &&
        (r = "turnNews"),
      r
    );
  },
  L = function (t) {
    if (t) {
      var e = new Date("".concat(t)).getTime();
      return g.timeFormat(e / 1e3, g.timeFormatType.combination);
    }
    return "";
  };
(exports.getCommentContentStr = function (t) {
  var e, n;
  if (1 !== (null == t ? void 0 : t.status))
    return null == t ? void 0 : t.content;
  var r =
    null == (n = null == (e = null == t ? void 0 : t.pResult) ? void 0 : e[0])
      ? void 0
      : n.content_array;
  if (!r) return "";
  var o = "";
  return (
    r.forEach(function (t) {
      "plain" === t.type && (o += t.text);
    }),
    "turn" === T(t) ? (o.length && "转发" !== o ? o : "转发了你的帖子") : o
  );
}),
  (exports.getCommentFormatDate = function (t) {
    var e = t.created_at;
    return (null == e ? void 0 : e.length) > 0
      ? L(e)
      : (e = t.time)
      ? L(e)
      : "";
  }),
  (exports.getPostContentImg = function (t) {
    var e,
      n,
      r,
      o,
      a =
        null ==
        (n =
          null == (e = null == t ? void 0 : t.detailInfo)
            ? void 0
            : e.imageList)
          ? void 0
          : n[0];
    return (
      a ||
      (I(null == t ? void 0 : t.detailInfo) ||
        (a =
          null ==
          (o =
            null == (r = null == t ? void 0 : t.detailInfoOriginalPost)
              ? void 0
              : r.imageList)
            ? void 0
            : o[0]),
      a || "")
    );
  }),
  (exports.getPostContentStr = function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = I(null == t ? void 0 : t.detailInfo, e);
    return n || (n = I(null == t ? void 0 : t.detailInfoOriginalPost)), n;
  }),
  (exports.getUserInfoData = function () {
    return p(
      exports,
      null,
      t().mark(function e() {
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (t.next = 2), j();
              case 2:
                return t.abrupt("return", t.sent);
              case 3:
              case "end":
                return t.stop();
            }
        }, e);
      })
    );
  }),
  (exports.isMainPost = function (t) {
    var e;
    return (
      1 ===
        (null == (e = null == t ? void 0 : t.detailInfo)
          ? void 0
          : e.is_elem_subject) || !1
    );
  }),
  (exports.msgCommentFilterHelp = function (e, r) {
    var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      a = arguments.length > 3 ? arguments[3] : void 0;
    return p(
      this,
      null,
      t().mark(function i() {
        var s, c, u, l, m, p, f, g, v, h;
        return t().wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (s = _(e, a)),
                    (c = s.commentsData),
                    (t.next = 4),
                    d.CommentFilter(e, r, o, a)
                  );
                case 4:
                  (u = t.sent),
                    (l = u.commentsData),
                    (m = u.subject_dict),
                    (p = n(c)),
                    (t.prev = 8),
                    p.s();
                case 10:
                  if ((f = p.n()).done) {
                    t.next = 24;
                    break;
                  }
                  (g = f.value), (v = 0);
                case 13:
                  if (!(v < l.length)) {
                    t.next = 20;
                    break;
                  }
                  if (
                    !(
                      (g.comment_id && g.comment_id === l[v].comment_id) ||
                      (g.id && g.id === l[v].id)
                    )
                  ) {
                    t.next = 17;
                    break;
                  }
                  return (
                    (g.detailInfoOriginalPost = l[v].detailInfo),
                    t.abrupt("break", 20)
                  );
                case 17:
                  v++, (t.next = 13);
                  break;
                case 20:
                  (h = g.subject_id) &&
                    m[h] &&
                    (g.is_wx_long = m[h].is_wx_long);
                case 22:
                  t.next = 10;
                  break;
                case 24:
                  t.next = 29;
                  break;
                case 26:
                  (t.prev = 26), (t.t0 = t.catch(8)), p.e(t.t0);
                case 29:
                  return (t.prev = 29), p.f(), t.finish(29);
                case 32:
                  return t.abrupt("return", s);
                case 33:
                case "end":
                  return t.stop();
              }
          },
          i,
          null,
          [[8, 26, 29, 32]]
        );
      })
    );
  });
