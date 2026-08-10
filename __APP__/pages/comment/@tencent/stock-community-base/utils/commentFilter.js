require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  i = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  u = function (t, e, n) {
    return e in t
      ? o(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  p = function (t, e) {
    for (var o in e || (e = {})) s.call(e, o) && u(t, o, e[o]);
    if (r) {
      var i,
        a = n(r(e));
      try {
        for (a.s(); !(i = a.n()).done; ) {
          o = i.value;
          c.call(e, o) && u(t, o, e[o]);
        }
      } catch (t) {
        a.e(t);
      } finally {
        a.f();
      }
    }
    return t;
  },
  l = function (t, e) {
    return i(t, a(e));
  },
  m = require("./knife.js");
require("./constant.js"),
  require("../../../../../common/vendor.js"),
  require("../../stock-hq-data/api/hostConfig.js");
var f = require("../../../compare-versions/lib/esm/index.js"),
  h = function (t, e) {
    return (function (t, e) {
      var n = {};
      return (
        t &&
          (e && "news" !== e
            ? "om" === e && (n = { newsType: "爱看" })
            : (n = (function (t) {
                var e = "";
                return (
                  t.id &&
                    (e =
                      /^YJY/.test(t.id) || /^ZMT/.test(t.id)
                        ? "研究院文章"
                        : /^kuaibao\-/.test(t.id.substr(3)) ||
                          /^kuaibao\-/.test(t.id)
                        ? "快报"
                        : /^(no|re)[s,u,k,j,n]/.test(t.id)
                        ? /^(no)[s,u,k,j,n]/.test(t.id)
                          ? "公告"
                          : "研报"
                        : /^201607/.test(t.id)
                        ? "异动"
                        : (/^SN/.test(t.id) ||
                            /^ne[s,u,k,j,n,w]SN/.test(t.id) ||
                            "FIN20150722ZHIBO" === t.id ||
                            /^ne[s,u,k,j,n,w]/.test(t.id) ||
                            /^http:\/\//.test(t.id),
                          "新闻")),
                  { newsType: e }
                );
              })({ id: t }))),
        { newsType: n.newsType || "" }
      );
    })(t, e).newsType;
  },
  g = {};
"wzq" === m.platform &&
  ((g = {
    4: "/hangqingxinzhai",
    19: "/choose/hq",
    28: "/plateall/201",
    29: "/earn/season",
  }),
  Object.keys(g).map(function (t) {
    g[t] = "https://wzq.tenpay.com/mp/v2/index.html?#".concat(g[t]);
  })),
  "zxg" === m.platform &&
    (g = {
      1: "qqstock://SHY?info=%7B%22p_key%22%3A%22com.tencent.shy.market_overview%22%2C%22p_url%22%3A%22index%22%7D",
      2: "qqstock://GotoAppLocation?info=%7B%22path%22%3A%22markeths%2Ffundflow%22%7D",
      3: "qqstock://SHY?info=%7B%22p_key%22%3A%22com.tencent.shy.lhb_combine%22%2C%22p_url%22%3A%22lhb-index%22%2C%22p_showNav%22%3Afalse%7D",
      4: "qqstock://hippy?info=%7B%22p_key%22%3A%22hangqingxinzhai%22%2C%22type%22%3A%22stock%22%2C%22p_showNav%22%3Atrue%7D",
      5: "qqstock://GotoAppLocation?info=%7B%22path%22%3A%22hangqing%2Fhs%22%7D%20",
      6: "qqstock://GotoAppLocation?info=%7B%22path%22%3A%22hangqing%2Fhk%22%7D",
      7: "qqstock://GotoAppLocation?info=%7B%22path%22%3A%22hangqing%2Fus%22%7D",
      8: "qqstock://GotoAppLocation?info=%7B%22path%22%3A%22hangqing%2Fhq%22%7D%20",
      9: "qqstock://GotoAppLocation?info=%7B%22path%22%3A%22hangqing%2Fggt%22%7D",
      10: "qqstock://GotoAppLocation?info=%7B%22path%22%3A%22hangqing%2Fhskcb%22%7D%20",
      11: "qqstock://GotoAppLocation?info=%7B%22path%22%3A%22hangqing%2Fblock%22%7D%20",
      12: "qqstock://GotoAppLocation?info=%7B%22path%22%3A%22hangqing%2Ffund%22%7D%20",
      13: "qqstock://GotoAppLocation?info=%7B%22path%22%3A%22hangqing%2Fuk%22%7D",
      14: "qqstock://GotoAppLocation?info=%7B%22path%22%3A%22hangqing%2Fwh%22%7D",
      15: "qqstock://GotoAppLocation?info=%7B%22path%22%3A%22hangqing%2Fsp%22%7D%20",
      16: "qqstock://GotoAppLocation?info=%7B%22path%22%3A%22hangqing%2Fcyb%22%7D%20",
      17: "qqstock://GotoAppLocation?info=%7B%22path%22%3A%22hangqing%2Fqh%22%7D%200",
      18: "https://gu.qq.com/app-h5/ZtAnalysis/index.html?skin=1#/DailyList",
      19: "qqstock://GotoAppLocation?info=%7B%22path%22%3A%22hangqing%2Fhs%22%2C%22transmitInfo%22%3A%7B%22jump_positon%22%3A%22hs_remen_rankinglist%22%7D%7D",
      20: "qqstock://SHY?info=%7B%22p_key%22%3A%22com.tencent.shy.market_change%22%2C%22p_url%22%3A%22change-index%22%7D",
      21: "qqstock://GoBondRank?info=%7B%22type%22%3A%22nhg%22%7D",
      22: "qqstock://GoBondRank?info=%7B%22type%22%3A%22kzz%22%7D",
      23: "qqstock://SHY?info=%7B%22p_key%22%3A%22com.tencent.shy.rights%22%2C%22p_url%22%3A%22index%22%7D",
      24: "qqstock://SHY?info=%7B%22p_key%22%3A%22com.tencent.shy.stockcard_risk%22%2C%22p_url%22%3A%22index%22%2C%22p_needLogin%22%3Atrue%7D",
      25: "qqstock://FinancialCalendar",
      26: "qqstock://SHY?info=%7B%22p_key%22%3A%22com.tencent.shy.largeExange%22%2C%22p_url%22%3A%22index%22%7D",
      27: "qqstock://SHY?info=%7B%22p_key%22%3A%22com.tencent.shy.rzrq%22%2C%22p_url%22%3A%22index%22%7D",
      28: "qqstock://GotoAppLocation?info=%7B%22path%22%3A%22hangqing%2Fblock%22%7D%20",
      29: "qqstock://SHY?info=%7B%22p_showNav%22%3Atrue%2C%22p_key%22%3A%22com.tencent.shy.hq_earn_season%22%2C%22p_url%22%3A%22earnSeason-index%22%2C%22p_title%22%3A%22%E8%B4%A2%E6%8A%A5%E5%AD%A3%22%7D",
    });
var _ = g;
function d(t) {
  var e = t.split(/<[^>]+>|&[^>]+;/g),
    n = t.match(/\"stock:\/\/(\S+)\/(\S+)\"/g);
  n &&
    n.length &&
    n.forEach(function (n) {
      var o,
        i,
        a = n.match(/\"stock:\/\/(\S+)\/(\S+)\"/);
      if (a && a.length) {
        var r = a[1],
          s = a[2];
        if (r.toLocaleLowerCase().includes("gnhqgn")) {
          var c = +r.toLocaleLowerCase().replace("gnhqgn-", ""),
            u = !1;
          try {
            (i =
              (null == (o = null == window ? void 0 : window.__SystemInfo__)
                ? void 0
                : o.appVersion) || "0.0.0"),
              "10.6.0",
              (u = f.compare(i, "10.6.0", "<"));
          } catch (t) {}
          e[e.indexOf(s)] = {
            type: _[c] ? "CMP" : "plain",
            text: s,
            iconHide: !0,
            link: {
              type: "hyper",
              data: {
                hyperHybirdUrl:
                  3 == +c && u
                    ? "qqstock://Hippy?info=%7B%22p_title%22%3A%22%E9%BE%99%E8%99%8E%E6%A6%9C%22%2C%22p_showNav%22%3Atrue%2C%22p_debug%22%3Afalse%2C%22p_key%22%3A%22winnerslistmainpage%22%2C%22p_isKeyEncode%22%3Atrue%7D"
                    : _[c],
                hyperH5Url: _[c],
              },
            },
          };
        } else {
          var p = r.replace(/[.*+?^${}()|[\]\\\/]/g, "\\$&"),
            l = new RegExp(
              "<a[^>]*href\\s*=\\s*[\"']stock:\\/\\/".concat(
                p,
                "\\/[^\"']*[\"'][^>]*>([^<]+)<\\/a>"
              ),
              "i"
            ),
            m = t.match(l),
            h = m ? m[1] : s,
            g = e.findIndex(function (t) {
              return t === h;
            });
          -1 !== g &&
            "string" == typeof e[g] &&
            (e[g] = { type: "stock", symbol: r, text: h, iconHide: !0 });
        }
      }
    });
  var o = t.match(/<[^>]+>|&[^>]+;/g);
  return (e = e.map(function (t, e) {
    if ("string" == typeof t) {
      var n = { type: "plain", text: t.replace(/<[^>]+>|&[^>]+;/g, "") },
        i = (function (t) {
          if (!t || "string" != typeof t) return "";
          var e = new RegExp('<span\\b[^>]*class="([^"]*)"[^>]*>'),
            n = t.match(e);
          return n && n[1] ? n[1] : "";
        })(o && o[e - 1]);
      return i && (n.extClass = i), n;
    }
    return t;
  }));
}
var y,
  v = {};
function b(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    o = arguments.length > 3 ? arguments[3] : void 0,
    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
    a = null,
    r = null;
  t.rss_list || t.data
    ? ((a = t.rss_list || t.data), (r = t.subject_dict))
    : t.content
    ? ((a = t.content),
      ((r = {})[t.content.subject_id] = t.content),
      t.content.origin &&
        t.content.origin.subject_id &&
        (r[t.content.origin.subject_id] = t.content.origin))
    : t.comment &&
      ((a = t.comment),
      (r = {}),
      a.forEach(function (t) {
        r[t.commentid || t.comment_id] = t;
      }));
  var s = t.subject_comment_dict || null;
  "list" === i && (y = t.follow || {});
  var c = (o && o.openid) || "",
    u = function (n) {
      var o = (n.type && +n.type) || 1,
        i = !!n.comment_id || !!n.commentid,
        u = n.commentid || n.comment_id || n.subject_id,
        p = n.commentid || n.comment_id;
      "removed" === n &&
        (n = {
          content: "很抱歉，原贴已被删除",
          showType: "removed",
          commentsTail: { cnt: 0 },
        });
      var l = !1;
      for (var f in (e && e[u] && (l = !0),
      r && r[u] && Object.assign(n, r[u]),
      n))
        m.isString(n[f]) && (n[f] = m.doDecodeURI(n[f]));
      n.user_name || (n.user_name = n.from_user_name || "");
      var g = !!y[n.user_id] || t.is_followed,
        _ = S(n.created_at),
        d = S(n.operate_time),
        v = m.formatView(n.like_num),
        b = m.formatView(n.comment_num || n.comment_cnt),
        q = m.formatView(n.retweet_count),
        w = n.owner || 0;
      c ? (c !== n.user_id && c !== n.from_user) || (w = 1) : (w = 0);
      var A = n.image_list || n.image_list || [],
        j = [],
        D = [];
      A.length &&
        A.forEach(function (t) {
          (t.styleValue = "background-image:url(".concat(t.origin, ")")),
            j.push(t.origin),
            D.push(t.origin_prop);
        }),
        (11 !== o && 13 !== o) ||
          ((n.newsTitle = n.title),
          (n.newsContent = m.doHTMLDecode(x(n.sub_content))));
      var E = n.news_id,
        L = +n.news_type;
      if ((1 === o || 3 === o || 4 === o) && E)
        if (((n.title = n.title ? n.title : m.doDecodeURI(n.sub_content)), L)) {
          var O = "news";
          (2 !== L && 18 !== L) || (O = "om");
          var T = h(E, O);
          (n.newsFrom = O), (n.resourceText = T);
        } else {
          var C = E.split("_")[1] || null;
          18 == +C && (n.newsFrom = "om"),
            (n.resourceType = C),
            (n.resourceText =
              { 8: "新闻", 9: "公告", 10: "研报" }[C] || "新闻");
        }
      var I = n.showType;
      if (!n.showType) {
        switch (o) {
          case 1:
          case 4:
          default:
            I = "short";
            break;
          case 11:
          case 13:
            I = "long";
            break;
          case 12:
          case 14:
            I = "turn";
            break;
          case 3:
            I = "turnNews";
            break;
          case 15:
            I = "share";
        }
        (1 === o || 3 === o || 4 === o) &&
          n.news_id &&
          n.title &&
          (I = "turnNews"),
          i && (I = "reply");
      }
      if (n.image_list && n.image_list.length && !n.content && "reply" !== I) {
        var B =
          n.image_list[0] &&
          n.image_list[0].origin &&
          -1 !== n.image_list[0].origin.indexOf("gif123");
        n.content = B ? "分享表情" : "分享图片";
      }
      Object.assign(n, k(n.content, n.link)),
        "turn" === I &&
          n.turnLog.length &&
          (!n.user_id &&
            n.turnLog[0].user_id &&
            (n.user_id = n.turnLog[0].user_id),
          !n.user_name &&
            n.turnLog[0].user_name &&
            (n.user_name = n.turnLog[0].user_name));
      var R = [];
      if (
        (11 === o || 13 === o) &&
        ((n.newsTitle = n.title),
        (n.newsContent = x(n.sub_content)),
        11 === o && "" !== n.content)
      )
        try {
          (R = m.doJSONparse(a.content)).forEach(function (t) {
            if (t.image_list && t.image_list.length && !t.content) {
              var e =
                t.image_list[0] &&
                t.image_list[0].origin &&
                -1 !== t.image_list[0].origin.indexOf("gif123");
              t.content = e ? "分享表情" : "分享图片";
            }
            "text" === t.tag
              ? ("" === t.value && (t.value = "\n"),
                (t.detailInfo = k(t.value, t.link)))
              : (t.detailInfo = t.value);
          });
        } catch (t) {}
      var N = {};
      (N = s && s[u] ? s[u] : { cnt: (n.comment_num && +n.comment_num) || 0 })
        .list &&
        N.list.forEach(function (e) {
          if (
            (e.user_name || (e.user_name = e.from_user_name || ""),
            e.image_list &&
              e.image_list.length &&
              e.image_list.constructor === Array)
          ) {
            var n = e.image_list || [],
              o = [];
            n.forEach(function (t) {
              o.push(t.origin);
            }),
              (e.imageList = o),
              e.content || o.length || (e.content = "分享图片");
          }
          if (e.created_at) {
            var i = S(e.created_at);
            (e.time = i.time), (e.formatTime = i.formatTime);
          }
          Object.assign(e, k(e.content, e.link)),
            e.to_user &&
              e.to_user_name &&
              !e.replyTo &&
              (e.replyTo = {
                text: "".concat(m.doDecodeURI(e.to_user_name)),
                type: "at",
              }),
            t.yb_disclaimer &&
              t.yb_disclaimer.length > 0 &&
              (e.yb_disclaimer = t.yb_disclaimer);
        });
      var F = "";
      try {
        F = n.stock_prop ? m.doJSONparse(n.stock_prop) : "";
      } catch (t) {}
      var z = n.status;
      (2 != +z && 3 != +z) ||
        0 !== w ||
        (n = {
          status: z,
          owner: w,
          content: "很抱歉，该帖目前不支持浏览哦",
          showType: (I = "removed"),
          commentsTail: { cnt: 0 },
        });
      var H = Object.assign({}, n, {
        id: u,
        comment_id: p,
        isIllegalReport: l,
        isReply: i,
        isFollow: g,
        showType: I,
        time: _.time,
        formatTime: _.formatTime,
        operateTime: d.formatTime,
        image_list: A,
        imageList: j,
        imageListInfo: D,
        commentsTail: N,
        litype: o,
        owner: w,
        detailLongContent: R,
        likeNum: v,
        commentNum: b,
        retweetNum: q,
        stockProp: F,
      });
      return (
        n.submitFalseData && n.image_urls && (H.image_urls = n.image_urls),
        H.comment_cnt && (H.comment_cnt = Number(H.comment_cnt)),
        H.comment_num && (H.comment_num = Number(H.comment_num)),
        H
      );
    },
    p = [];
  Array.isArray(a) ? (p = a) : p.push(a);
  var l = [];
  return (
    a &&
      m.isArray(p) &&
      p.forEach(function (t) {
        var e = !!t.comment_id || !!t.commentid,
          o = e ? t.root_id : t.subject_id,
          i = t.comment_id;
        if (!n || !e) {
          var a = r && r[o] ? Object.assign({}, t, r[o]) : t,
            s = u(a);
          if (((s.detailInfo = u(a)), 12 == +a.type || 14 == +a.type)) {
            12 == +a.type ? (s.content = s.title) : a.type;
            var c = m.isObject(r && r[a.news_id])
              ? r && r[a.news_id]
              : "removed";
            s.detailInfo = u(c);
          }
          if (e) {
            var p = r && r[i] ? Object.assign({}, t, r[i]) : t;
            (s.replyInfo = u(p)),
              a.to_user &&
                a.to_user_name &&
                !a.replyTo &&
                (s.replyTo = {
                  text: "".concat(m.doDecodeURI(a.to_user_name)),
                  type: "at",
                });
          }
          s.isIllegalReport || l.push(s);
        }
      }),
    Object.assign({}, t, { commentsData: l })
  );
}
function k() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  t = x(t);
  var o = "";
  if (n && 0 !== n.indexOf("http"))
    try {
      o = m.doJSONparse(n);
    } catch (t) {}
  var i = { stocks: [], topics: [] },
    a = {};
  if (t) {
    var r = "(\\u001c\\<\\d{1},[^\\>\\u001c]+\\>\\u001c)",
      s = "(\\u001e\\[\\S+\\s\\S.*?\\]\\u001e)",
      c = "(\\u001f\\<\\d{1},([.\\s\\S\\u4e00-\\u9fa5]+?)\\>\\u001f)",
      u = "(\\u0001[^\\u0001]*\\u0001)",
      f = new RegExp("".concat(r)),
      h = new RegExp("".concat(s)),
      g = new RegExp("".concat(c)),
      _ = new RegExp("".concat(u)),
      y = new RegExp("".concat(r, "|").concat(s, "|").concat(c, "|").concat(u)),
      v = 0,
      b = null,
      w = [],
      A = [],
      j = null,
      D = [];
    [t].forEach(function (t) {
      if (m.isString(t)) {
        var n = [],
          a = [];
        t.split(y).forEach(function (t, o) {
          if (t)
            if (t.match(g)) {
              var r = t.match(g)[1],
                s = r.indexOf("<1,") + 3,
                c = r.indexOf(":", 0),
                u = r.indexOf(":", c + 1),
                y = {
                  user_id: r.substring(s, c),
                  user_name: r.substring(c + 1, u),
                  content: r.substring(u + 1, r.length - 2),
                };
              Object.assign(y, k(m.doDecodeURI(y.content))), D.push(y);
            } else if (t.match(_)) {
              var q = t.match(_)[0],
                x = { type: "CMP", text: q.substring(1, q.length - 1) };
              null !== b && o > b ? a.push(x) : n.push(x);
            } else if (t.match(f)) {
              var A = t.match(f)[0],
                S = A.substr(2, A.length - 4),
                E = S.split(":")[0].split(","),
                L = +E[0],
                T = E[1],
                C = S.match(/\d{1},[^:]*:{1}(.*)/)[1];
              if (1 === L)
                (b = o),
                  (v += 1) < 2 &&
                    (j = { text: "".concat(m.doDecodeURI(C)), type: "at" });
              else {
                var I = {};
                2 === L
                  ? (I = { type: "atPerson", text: "".concat(C), personId: T })
                  : 4 === L
                  ? ((I = { type: "topic", text: C, topicId: T }),
                    i.topics.push(I))
                  : 3 === L
                  ? (I = { type: "live", text: C, id: T })
                  : 5 === L &&
                    (I = { type: "strategy", text: C, strategyId: T }),
                  v < 2 && (null !== b && o > b ? a.push(I) : n.push(I));
              }
            } else if (t.match(h)) {
              var B = t.match(h)[0],
                R = B.substr(2, B.length - 4),
                N = R.split(" ")[0],
                F = R.substring(R.indexOf(" ") + 1),
                z = (function (t) {
                  if (m.isString(t)) {
                    var e = (t = (t = t
                        .replace(/^us\.?/, "us")
                        .replace(/(\.[^.]+)$/gi, "")).replace(/\./g, "__")),
                      n = t.substring(0, 2),
                      o = "";
                    return (
                      /^[a-zA-Z]+$/.test(n) && ((o = n), (e = e.substring(2))),
                      { symbol: t, market: o, code: e }
                    );
                  }
                })(N).market.toUpperCase();
              if (["GN"].includes(z)) {
                var H = { text: F, type: "plain" };
                v < 2 && (null !== b && o > b ? a.push(H) : n.push(H));
              } else {
                var G = {
                  text: F,
                  symbol: N,
                  symbolShow: z || N,
                  type: "stock",
                };
                i.stocks.push(G),
                  w.push(N),
                  v < 2 && (null !== b && o > b ? a.push(G) : n.push(G));
              }
            } else if (v < 2) {
              var M = t.split(/\r\n|\n|\r/),
                P = { text: " ", type: "plain-br" };
              M.forEach(function (t, i) {
                var r = d(t);
                null !== b && o > b
                  ? (r.forEach(function (t) {
                      "plain" === t.type
                        ? a.push.apply(a, e(O(t.text)))
                        : a.push(t);
                    }),
                    i < M.length - 1 && a.push(P))
                  : (r.forEach(function (t) {
                      if ("plain" === t.type) {
                        var o = t.extClass;
                        o
                          ? n.push.apply(
                              n,
                              e(
                                O(t.text).map(function (t) {
                                  return l(p({}, t), { extClass: o });
                                })
                              )
                            )
                          : n.push.apply(n, e(O(t.text)));
                      } else n.push(t);
                    }),
                    i < M.length - 1 && n.push(P));
              });
            }
        }),
          A.push({ content_array: q(n, o), content_reply: q(a, o) });
      }
    }),
      (a = {
        pResult: A,
        extraInfo: i,
        replyTo: j,
        stocks: w,
        turnLog: D,
        hasAtStruct: !!v,
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
function q(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
    n = [],
    o = [];
  return (
    t.forEach(function (t) {
      t.type && "plain" !== t.type
        ? "CMP" === t.type && e && e.length
          ? (((e[0] && "user" === e[0].type) ||
              (t.text && t.text.startsWith("@"))) &&
              (t.iconHide = !0),
            o.push(t),
            n.push(t))
          : ("CMP" === t.type &&
              t.text &&
              t.text.startsWith("@") &&
              (t.iconHide = !0),
            n.push(t))
        : t.text &&
          ((t.text = m.doHTMLDecode(t.text)),
          (t.text = t.text.replace(/^ /, "")),
          (t.text = t.text.replace(/&nbsp;/gi, "")),
          n.push(t));
    }),
    o.length === e.length &&
      o.forEach(function (t, n) {
        t.text === e[n].title && (t.link = e[n]);
      }),
    n
  );
}
function x(t) {
  if ("[object String]" === Object.prototype.toString.call(t)) return t;
}
var w = 6e4,
  A = 60 * w,
  j = 24 * A;
function D(t) {
  return +t < 10 ? "0".concat(t) : t;
}
function S(t) {
  if (!t) return {};
  var e = new Date(),
    n = new Date(t),
    o = [
      D(n.getMinutes()),
      D(n.getHours()),
      D(n.getDate()),
      D(n.getMonth() + 1),
      n.getFullYear(),
    ],
    i = o[0],
    a = o[1],
    r = o[2],
    s = o[3],
    c = o[4];
  if (isNaN(c)) return { formatTime: t };
  var u,
    p = ""
      .concat(c, "-")
      .concat(s, "-")
      .concat(r, " ")
      .concat(a, ":")
      .concat(i);
  if (e.getFullYear() === c) {
    var l = e.getTime() - n.getTime(),
      m = e.setHours(0, 0, 0, 0) - n.getTime();
    u =
      l > 2592e6
        ? "".concat(s, "-").concat(r, " ").concat(a, ":").concat(i)
        : l > j
        ? m < j
          ? "昨天 ".concat(a, ":").concat(i)
          : m < 2 * j
          ? "前天 ".concat(a, ":").concat(i)
          : "".concat(s, "-").concat(r, " ").concat(a, ":").concat(i)
        : l > A
        ? "".concat(Math.floor(l / A), "小时前")
        : l > w
        ? "".concat(Math.floor(l / w), "分钟前")
        : "刚刚";
  } else
    u = ""
      .concat(c, "-")
      .concat(s, "-")
      .concat(r, " ")
      .concat(a, ":")
      .concat(i);
  return { formatTime: u, time: p };
}
var E = [
    {
      version: "",
      page: 20,
      content: [
        "微笑",
        "撇嘴",
        "色",
        "发呆",
        "得意",
        "流泪",
        "害羞",
        "闭嘴",
        "睡",
        "大哭",
        "尴尬",
        "发怒",
        "调皮",
        "呲牙",
        "惊讶",
        "难过",
        "酷",
        "冷汗",
        "抓狂",
        "吐",
        "偷笑",
        "愉快",
        "白眼",
        "傲慢",
        "饥饿",
        "困",
        "惊恐",
        "流汗",
        "憨笑",
        "悠闲",
        "奋斗",
        "咒骂",
        "疑问",
        "嘘",
        "晕",
        "疯了",
        "衰",
        "骷髅",
        "敲打",
        "再见",
        "擦汗",
        "抠鼻",
        "鼓掌",
        "糗大了",
        "坏笑",
        "左哼哼",
        "右哼哼",
        "哈欠",
        "鄙视",
        "委屈",
        "快哭了",
        "阴险",
        "亲亲",
        "吓",
        "可怜",
        "菜刀",
        "西瓜",
        "啤酒",
        "篮球",
        "乒乓",
        "咖啡",
        "饭",
        "猪头",
        "玫瑰",
        "凋谢",
        "嘴唇",
        "爱心",
        "心碎",
        "蛋糕",
        "闪电",
        "炸弹",
        "刀",
        "足球",
        "瓢虫",
        "便便",
        "月亮",
        "太阳",
        "礼物",
        "拥抱",
        "强",
        "弱",
        "握手",
        "胜利",
        "抱拳",
        "勾引",
        "拳头",
        "差劲",
        "爱你",
        "NO",
        "OK",
        "爱情",
        "飞吻",
        "跳跳",
        "发抖",
        "怄火",
        "转圈",
        "磕头",
        "回头",
        "跳绳",
        "投降",
      ],
    },
    {
      version: "s",
      page: 40,
      content: [
        "呲牙",
        "流泪",
        "微笑",
        "得意",
        "撇嘴",
        "尴尬",
        "吃瓜",
        "发呆",
        "色",
        "大哭",
        "调皮",
        "强",
        "流汗",
        "抠鼻",
        "憨笑",
        "难过",
        "闭嘴",
        "害羞",
        "抱拳",
        "惊讶",
        "奋斗",
        "疑问",
        "抓狂",
        "白眼",
        "衰",
        "再见",
        "666",
        "愉快",
        "鄙视",
        "晕",
        "惊恐",
        "OK",
        "睡",
        "傲慢",
        "可怜",
        "鼓掌",
        "胜利",
        "爱心",
        "叹气",
        "困",
      ],
    },
  ],
  L = function (t) {
    return E.map(function (e) {
      var n = e.version,
        o = e.page,
        i = e.content;
      n &&
        (i = i.map(function (t) {
          return "".concat(n, "/").concat(t);
        }));
      var a = i.indexOf(t);
      if (a < 0) return !1;
      var r = Math.floor(a / o);
      return { page: n ? "".concat(n).concat(r) : r, id: a - r * o };
    }).filter(function (t) {
      return t;
    })[0];
  };
function O(t) {
  var e = [],
    n = /(\[\S{1,3}\])|(\[s\/\S{1,3}\])/;
  return (
    t.split(/(\[\S{1,3}\])|(\[s\/\S{1,3}\])/).forEach(function (t) {
      try {
        var o = t.match(n)[0].substr(1, t.length - 2),
          i = L(o);
        if (!i) throw new Error("not emoji");
        var a = {
          type: "emoji",
          emojiName: o,
          emojiPage: i.page,
          emojiId: i.id,
          content: "emoji".concat(o),
        };
        e.push(a);
      } catch (n) {
        e.push({ text: t, type: "plain" });
      }
    }),
    e
  );
}
(exports.CommentFilter = function (o, i) {
  var a,
    r,
    s,
    c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    u = arguments.length > 3 ? arguments[3] : void 0;
  return (
    (a = this),
    (r = null),
    (s = t().mark(function () {
      var a, r, s, h, g, _, d, y;
      return t().wrap(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (t.next = 2), m.getStorage("illegalReport");
              case 2:
                if (((t.t0 = t.sent), t.t0)) {
                  t.next = 5;
                  break;
                }
                t.t0 = {};
              case 5:
                if (
                  ((a = t.t0),
                  (a = m.doJSONparse(a)),
                  (o = m.doJSONparse(JSON.stringify(o))),
                  (r = {}),
                  (s = {}),
                  i &&
                    ((h = {}),
                    o.topic_info &&
                      !m.isNull(o.topic_info) &&
                      ((g = o.topic_info.rss_list || []),
                      o.topic_info.subject && g.push(o.topic_info.subject),
                      g.forEach(function (t) {
                        (t.topicAd = 1),
                          (t.topic_info = o.topic_info),
                          (h[o.topic_info.position] = t);
                      })),
                    o.hot_posts &&
                      !m.isNull(o.hot_posts) &&
                      (o.hot_posts.rss_list || []).forEach(function (t) {
                        t &&
                          !m.isString(t) &&
                          ((t.squareAd = 1), (h[o.hot_posts.position] = t));
                      }),
                    o.hot &&
                      m.isObject(o.hot) &&
                      (((r = o.hot).subject_dict = o.subject_dict),
                      (r.subject_comment_dict = o.subject_comment_dict)),
                    o.top &&
                      m.isObject(o.top) &&
                      ((s = o.top),
                      s.rss_list &&
                        s.rss_list.length > 3 &&
                        (s.rss_list = s.rss_list.slice(0, 3)),
                      (s.subject_dict = o.subject_dict),
                      (s.subject_comment_dict = o.subject_comment_dict)),
                    Object.keys(h).forEach(function (t) {
                      var e = h[t];
                      o.rss_list.splice(t - 1, 0, e);
                    })),
                  (_ = b(o, a, c, u, "list")),
                  r && (_.hotData = b(r, a, c, u)),
                  s &&
                    ((_.topData = b(s, a, c, u)),
                    _.topData.commentsData.forEach(function (t) {
                      t.top_tag = 1;
                    })),
                  (d = ""),
                  "zxg" !== m.platform)
                ) {
                  t.next = 22;
                  break;
                }
                return (t.prev = 13), (t.next = 16), m.sdk.getZxgSystemInfo();
              case 16:
                (y = t.sent), (d = y.appVersion), (t.next = 22);
                break;
              case 20:
                (t.prev = 20), (t.t1 = t.catch(13));
              case 22:
                return t.abrupt(
                  "return",
                  ((_.commentsData = []
                    .concat(e(_.topData.commentsData), e(_.commentsData))
                    .map(function (t) {
                      var e,
                        o = t.stock_name,
                        i = t.topic_name,
                        a = t.stock_id,
                        r = t.topic_id,
                        s = p(
                          p({}, t.extraInfo),
                          "turn" === t.showType &&
                            t.turnLog &&
                            t.turnLog[0] &&
                            t.turnLog[0].extraInfo
                        ),
                        c = s.stocks,
                        u = void 0 === c ? [] : c,
                        h = s.topics,
                        g = void 0 === h ? [] : h;
                      u[0] &&
                        ((a = a || u[0].symbol),
                        (o =
                          o ||
                          (null ==
                          (e = u.find(function (t) {
                            return t.symbol === a;
                          }))
                            ? void 0
                            : e.text) ||
                          u[0].text));
                      var _ = (function (t, e, o) {
                        var i, a, r;
                        if ("string" != typeof t) return [];
                        var s,
                          c = [],
                          u =
                            null !=
                            (i =
                              t &&
                              t.match(
                                /(\\u001e|\u001e)\[(\S+)\s(\S.*?)\](\\u001e|\u001e)/g
                              ))
                              ? i
                              : [],
                          p = n(u);
                        try {
                          for (p.s(); !(s = p.n()).done; ) {
                            var l = s.value;
                            if ("string" == typeof l) {
                              var h = l.match(/\[(\S+)\s(\S.*?)\]/);
                              h &&
                                c.push({
                                  symbol: null != (a = h[1]) ? a : "",
                                  name: null != (r = h[2]) ? r : "",
                                });
                            }
                          }
                        } catch (t) {
                          p.e(t);
                        } finally {
                          p.f();
                        }
                        var g = new Set(),
                          _ = [],
                          d = [],
                          y = [];
                        "zxg" === m.platform
                          ? ((d = [
                              "sh",
                              "sz",
                              "bj",
                              "hk",
                              "us",
                              "uk",
                              "jj",
                              "nq",
                              "ft",
                              "fu",
                              "hd",
                              "pt",
                            ]),
                            o && f.compare(o, "11.14.0", ">=") && d.push("cs"))
                          : "wzq" !== m.platform || v.IS_MINA || v.IS_LITE_MODE
                          ? ("mini" === m.platform ||
                              v.IS_MINA ||
                              v.IS_LITE_MODE) &&
                            ((d = [
                              "sh",
                              "sz",
                              "bj",
                              "hk",
                              "us",
                              "nq",
                              "pt",
                              "cs",
                            ]),
                            (y = ["fuCN", "ftDAX30"]))
                          : ((d = [
                              "sh",
                              "sz",
                              "bj",
                              "hk",
                              "us",
                              "nq",
                              "pt",
                              "cs",
                              "hd",
                            ]),
                            (y = ["fuCN", "ftDAX30"])),
                          e &&
                            e.symbol &&
                            e.symbol.length > 0 &&
                            e.name &&
                            e.name.length > 0 &&
                            (d.includes(e.symbol.slice(0, 2)) ||
                              y.includes(e.symbol)) &&
                            (g.add(e.symbol), _.push(e));
                        for (var b = 0, k = c; b < k.length; b++) {
                          var q = k[b];
                          q.symbol &&
                            (d.includes(q.symbol.slice(0, 2)) ||
                              y.includes(q.symbol)) &&
                            (q.symbol && !g.has(q.symbol)
                              ? (g.add(q.symbol), _.push(q))
                              : q.symbol === e.symbol &&
                                (e.name = e.name || q.name));
                        }
                        return _;
                      })(t.content, { symbol: a, name: o }, d);
                      if ((!r || !i) && g[0]) {
                        var y = g[0],
                          b = y.topicId,
                          k = y.text;
                        b && k && ((r = b), (i = k));
                      }
                      return l(p({}, t), {
                        stock_id: a,
                        topic_id: r,
                        stock_name: o,
                        topic_name: i,
                        relatedStocks: _,
                      });
                    })),
                  _.commentsData.forEach(function (t) {
                    (t.allow_like = o.allow_like),
                      (t.yb_disclaimer = o.yb_disclaimer);
                  }),
                  _)
                );
              case 23:
              case "end":
                return t.stop();
            }
        },
        s,
        null,
        [[13, 20]]
      );
    })),
    new Promise(function (t, e) {
      var n = function t(n) {
          try {
            i(s.next(n));
          } catch (t) {
            e(t);
          }
        },
        o = function (t) {
          try {
            i(s.throw(t));
          } catch (t) {
            e(t);
          }
        },
        i = function (e) {
          return e.done ? t(e.value) : Promise.resolve(e.value).then(n, o);
        };
      i((s = s.apply(a, r)).next());
    })
  );
}),
  (exports.FormatContent = k),
  (exports.formatContentData = function (t, e) {
    var n = [];
    return (
      t.forEach(function (t) {
        var e,
          o = [];
        if ((12 != +t.type && 14 != +t.type) || !t.turnLog)
          if (t.detailInfo) {
            var i = t.detailInfo;
            e = i.pResult && i.pResult.length && i.pResult[0];
          } else
            t.pResult && (e = t.pResult && t.pResult.length && t.pResult[0]);
        else {
          var a = t.turnLog;
          e =
            a.length &&
            a[0] &&
            a[0].pResult &&
            a[0].pResult.length &&
            a[0].pResult[0];
        }
        if (
          (e &&
            e.content_array.forEach(function (t) {
              switch (t.type) {
                case "stock":
                case "topic":
                  o.push("#".concat(t.text, "#"));
                  break;
                case "emoji":
                  o.push("[".concat(t.emojiName, "]"));
                  break;
                case "atPerson":
                  o.push("@".concat(t.text));
                  break;
                case "CMP":
                  o.push("".concat(t.text && t.text.replace("猜涨跌活动", "")));
                  break;
                default:
                  o.push("".concat(t.text));
              }
            }),
          o.length || "long" === t.showType)
        ) {
          var r = "long" === t.showType ? t.title : o.join(""),
            s = new RegExp("(\\u0002[^\\u0002]*\\u0002)");
          (r = (r = (r = r.replace(s, "")).replace(
            /<span[^>]*>/gi,
            ""
          )).replace(/<a[^>]*>/gi, "")),
            n.push({
              content: t.turnLog && t.turnLog.length ? t.turnLog[0].content : r,
              id: t.id,
              user: t.user_image || t.from_user_image,
              name: t.user_name || t.from_user_name,
            });
        }
      }),
      n
    );
  }),
  (exports.getEmojiId = L),
  (exports.gif2png = {
    gif123y3suytaeil1626751389: "dqc375tuuh1626778500",
    gif123hti418abig1626751420: "e1kzgu6e621626778748",
    gif123hflontjiob1626751435: "r9pw4r4q5u1626778811",
    gif1234duwi1l8of1626751450: "9nmqt0ig951626778766",
    gif123tbg0stkcc21626751469: "hhsaxgpqtg1626778782",
    gif123yycxxs9t6m1626751484: "vm3wh4zebp1626778914",
    gif123hzng5pvql51626751499: "zmwk43adun1626778826",
    gif123npt3xveea51626751531: "1yniiqxf341626778841",
    gif123l0xwtcb9sn1626751560: "hgwbs9mviw1626778855",
    gif123l0cfdto1nn1626751598: "lncktsioff1626778870",
    gif12307gp98rekr1626751616: "i3bbz23x9q1626778883",
    gif123zkoq2txl8o1626751632: "vcsyyi54fg1626778898",
    gif123omrlvoc3rv1626751646: "ryzfii2y551626778928",
    gif123kqrcz4n6i31626751660: "u5gj2mit0y1626778943",
    gif123gztuzd5c2s1626751671: "rqcrxg27uf1626778956",
    gif1238mbxxp45th1626751684: "9rb4spgcrq1626778969",
  }),
  (exports.replaceEmoji = O);
