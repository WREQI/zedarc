require("../../../../../../@babel/runtime/helpers/Objectentries"),
  require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../@babel/runtime/helpers/inherits"),
  t = require("../../../../../../@babel/runtime/helpers/createSuper"),
  n = require("../../../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../../../@babel/runtime/helpers/createClass"),
  i = require("../../../../../../@babel/runtime/helpers/typeof"),
  o = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../../../../../@babel/runtime/helpers/defineProperty"),
  s = require("../../../../../../@babel/runtime/helpers/toConsumableArray");
require("../../../../../../@babel/runtime/helpers/Objectvalues");
var c,
  u,
  l,
  d,
  f = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
  h = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  p = Object.defineProperty,
  v = Object.defineProperties,
  m = Object.getOwnPropertyDescriptors,
  g = Object.getOwnPropertySymbols,
  x = Object.prototype.hasOwnProperty,
  y = Object.prototype.propertyIsEnumerable,
  w = function (e, t, n) {
    return t in e
      ? p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  _ = function (e, t) {
    for (var n in t || (t = {})) x.call(t, n) && w(e, n, t[n]);
    if (g) {
      var r,
        i = h(g(t));
      try {
        for (i.s(); !(r = i.n()).done; ) {
          n = r.value;
          y.call(t, n) && w(e, n, t[n]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  b = function (e, t) {
    return v(e, m(t));
  },
  T = function (e, t, n) {
    return new Promise(function (r, i) {
      var o = function (e) {
          try {
            s(n.next(e));
          } catch (e) {
            i(e);
          }
        },
        a = function (e) {
          try {
            s(n.throw(e));
          } catch (e) {
            i(e);
          }
        },
        s = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(o, a);
        };
      s((n = n.apply(e, t)).next());
    });
  },
  k = require("../../../../../../common/vendor.js"),
  S = require("../../../stock-base/service/common/sign.js"),
  I =
    ((u = (c = k.wx$1.getSystemInfoSync()).platform),
    (l = c.version),
    (d = c.system),
    {
      env: { IS_PCWEIXIN: /(windows|mac|linux)/i.test(u) },
      platformVersion: l,
      os: d,
    } || {}),
  R = I.os,
  D = void 0 === R ? {} : R;
k.ShellTypeEnum.ACT;
var E = !!D.android;
D.ios;
var q = { SECONDARY: E ? 300 : 250 },
  j = 36e5,
  O = 864e5,
  P = [
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
  A = [
    "【全民猜涨跌】我正在玩猜涨跌，跟我一起猜还能领红包",
    "【全民猜涨跌】股市小白怎么涨姿势? 不妨先来猜猜涨跌",
  ],
  C = {
    0: { type: "notJoin", text: "未猜" },
    1: { type: "done", text: "猜对" },
    2: { type: "done", text: "未中" },
    3: { type: "processing", text: "进行中" },
    4: { type: "notAvailable", text: "休市" },
    5: { type: "notBegin", text: "待猜" },
    6: { type: "redbag", text: "周冠军" },
  },
  M = function (e) {
    return e < 10 ? "0".concat(e) : String(e);
  },
  z = /[\ud83c\udf00-\udfff]|[\ud83d\udc00-\ude4f]|[\ud83d\ude80-\udeff]/g,
  F = { riseRate: 50, fallRate: 50 },
  L = {
    TResultDateString: function () {
      var e = this.tpInfoTime || this.tInfoTime;
      if (!e) return "";
      try {
        return k.dayjs(1e3 * e).format("M月DD日");
      } catch (e) {
        return "";
      }
    },
    getRandomShareXcx: function () {
      var e = A[0];
      try {
        var t = this.TResultDateString(),
          n = [].concat(A);
        return (
          t &&
            n.push(
              "【全民猜涨跌】大盘猜猜猜：".concat(t, "涨还是跌？来参与竞猜")
            ),
          { title: n[Math.floor(Math.random() * n.length)] || e }
        );
      } catch (t) {
        return { title: e };
      }
    },
    createDataStructure: function (e, t, n, r, i, o, a, s, c, u, l, d) {
      var f = new Date(1e3 * e),
        h = "".concat(M(f.getMonth() + 1), "月").concat(M(f.getDate()), "日");
      return {
        json: {
          titleTime: h,
          maskShow: t,
          inflow: n,
          preText: r,
          nextText: i,
          kLine: o,
          ratio: a,
          result: s,
          isFollow: c,
          id: u,
          once: l,
          prizeTime: d,
        },
        MD: h,
        date: f,
      };
    },
    getRiseFall: function (e, t) {
      var n,
        r,
        i = new Date(1e3 * t),
        o = ""
          .concat(i.getFullYear())
          .concat(M(i.getMonth() + 1))
          .concat(M(i.getDate())),
        a = e.filter(function (e) {
          return +e.date == +o;
        });
      if (2 !== a.length) return F;
      var s =
          +(null ==
          (n = a.find(function (e) {
            return 1 == +e.data;
          }))
            ? void 0
            : n.ratio) || 0,
        c =
          +(null ==
          (r = a.find(function (e) {
            return 2 == +e.data;
          }))
            ? void 0
            : r.ratio) || 0;
      return s && c ? { riseRate: s, fallRate: c } : F;
    },
    predictionTime: function (e) {
      var t = new Date(1e3 * e);
      return ""
        .concat(M(t.getMonth() + 1), "月")
        .concat(M(t.getDate()), "日")
        .concat(M(t.getHours()), ":")
        .concat(M(t.getMinutes()), "公布结果");
    },
  },
  N = function (e) {
    return "[object Object]" === Object.prototype.toString.call(e);
  },
  B = function (e) {
    return Array.isArray(e);
  },
  G = function (e) {
    return "string" == typeof e;
  },
  U = { "&amp;": "&", "&gt;": ">", "&lt;": "<", "&quot;": '"', "&#39;": "'" },
  H = /&(?:amp|gt|lt|quot|#39);/g,
  W = function (e) {
    return e.replace(H, function (e) {
      return U[e] || e;
    });
  },
  $ = function (e) {
    try {
      return decodeURIComponent(e);
    } catch (t) {
      return e;
    }
  },
  Y = function (e) {
    if (!e) return "";
    var t = (function (e) {
      if ("string" != typeof e) return e;
      var t;
      try {
        (t = e.trim()), (t = JSON.parse(t));
      } catch (n) {
        try {
          t = new Function("return " + e)();
        } catch (e) {}
      }
      return (t && "Object" === t.constructor.name) || (t = e), t;
    })(e);
    return t === e ? e : t;
  },
  X = function (e) {
    return e
      ? e >= 1e10
        ? "".concat(Math.round(e / 1e8), "亿")
        : e >= 1e8
        ? "".concat((e / 1e8).toFixed(1), "亿")
        : e >= 1e6
        ? "".concat(Math.round(e / 1e4), "万")
        : e >= 1e4
        ? "".concat((e / 1e4).toFixed(1), "万")
        : String(e)
      : "0";
  },
  J = function e(t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (G(t)) return $(t);
    if (B(t))
      return t.map(function (t) {
        return e(t, n);
      });
    if (N(t)) {
      var r = _({}, t);
      return (
        Object.entries(r).forEach(function (t) {
          var i = f(t, 2),
            o = i[0],
            a = i[1];
          r[o] = n && (N(a) || B(a)) ? e(a, n) : $(a);
        }),
        r
      );
    }
    return t;
  },
  V = {
    live: /(\u001c<\d{1},[^>\u001c]+>\u001c)/,
    stock: /(\u001e\[\S+\s\S.*?\]\u001e)/,
    turn: /(\u001f<\d{1},[.\s\S\u4e00-\u9fa5]+?>\u001f)/,
    cmp: /(\u0001[^\u0001]*\u0001)/,
  },
  Z = new RegExp(
    Object.values(V)
      .map(function (e) {
        return e.source;
      })
      .join("|")
  ),
  K = { text: " ", type: "plain-br" },
  Q = /(\[\S{1,3}\])/,
  ee = /\[\S{1,3}\]/,
  te = function (e) {
    var t = [];
    return (
      e.split(Q).forEach(function (e) {
        var n = e.match(ee);
        if (n) {
          var r = n[0].slice(1, -1),
            i = (function (e) {
              var t = P.indexOf(e);
              return t < 0 ? null : { page: Math.floor(t / 20), id: t % 20 };
            })(r);
          if (i)
            return void t.push({
              type: "emoji",
              emojiName: r,
              emojiPage: i.page,
              emojiId: i.id,
              content: "emoji".concat(r),
            });
        }
        t.push({ text: e, type: "plain" });
      }),
      t
    );
  },
  ne = function (e) {
    if (G(e)) return e.replace(/<\/?[\w]+>/g, "");
  },
  re = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      n = [],
      r = [];
    return (
      e.forEach(function (e) {
        var i;
        e.type && "plain" !== e.type
          ? "CMP" === e.type && (null == t ? void 0 : t.length)
            ? (null == (i = e.text)
                ? void 0
                : i.replace("猜涨跌活动", "").length) && (r.push(e), n.push(e))
            : n.push(e)
          : e.text &&
            ((e.text = W(e.text)
              .replace(/^\ /, "")
              .replace(/&nbsp;/gi, "")),
            n.push(e));
      }),
      r.length === t.length &&
        r.forEach(function (e, n) {
          var r;
          e.text === (null == (r = t[n]) ? void 0 : r.title) && (e.link = t[n]);
        }),
      n
    );
  },
  ie = function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    t = ne(t);
    var r = "";
    if (n && !n.startsWith("http")) {
      var i = Y(n);
      i !== n && (r = J(i, !0));
    }
    var o = { stocks: [], topics: [] };
    if (!t)
      return {
        pResult: [{ content_array: [], content_reply: [] }],
        replyTo: null,
        stocks: [],
        turnLog: [],
      };
    var a = 0,
      c = null,
      u = [],
      l = [],
      d = null,
      h = [],
      p = [];
    return (
      t
        .split(Z)
        .filter(Boolean)
        .forEach(function (t, n) {
          if (V.turn.test(t)) {
            var r = t.match(V.turn)[1],
              i = r.indexOf("<1,") + 3,
              v = r.indexOf(":", 0),
              m = r.indexOf(":", v + 1),
              g = {
                user_id: r.slice(i, v),
                user_name: r.slice(v + 1, m),
                content: r.slice(m + 1, -2),
              };
            return Object.assign(g, e($(g.content))), void l.push(g);
          }
          if (V.cmp.test(t)) {
            var x = t.match(V.cmp)[0].slice(1, -1);
            h.push({ type: "CMP", text: x });
          } else if (V.live.test(t)) {
            var y = t.match(V.live)[0].slice(2, -2).split(":"),
              w = f(y, 2),
              _ = w[0],
              b = w[1],
              T = _.split(","),
              k = f(T, 2),
              S = k[0],
              I = k[1],
              R = +S;
            if (1 === R)
              return (
                (c = n), void ((a += 1) < 2 && (d = { text: $(b), type: "at" }))
              );
            var D = {
              2: { type: "atPerson", text: b, personId: I },
              3: { type: "live", text: b, id: I },
              4: { type: "topic", text: b, topicId: I },
              5: { type: "strategy", text: b, strategyId: I },
            }[R];
            D &&
              (4 === R && o.topics.push(D),
              a < 2 && (null !== c && n > c ? p : h).push(D));
          } else {
            if (V.stock.test(t)) {
              var E = t.match(V.stock)[0].slice(2, -2),
                q = E.indexOf(" "),
                j = E.slice(0, q),
                O = {
                  text: E.slice(q + 1),
                  symbol: j,
                  symbolShow:
                    (function (e) {
                      var t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                      if (!G(e)) return { symbol: "", market: "", code: "" };
                      var n = e
                        .replace(/^us\.?/, "us")
                        .replace(/(\.[^.]+)$/gi, "");
                      t || (n = n.replace(/\./g, "__"));
                      var r = n.slice(0, 2),
                        i = /^[a-zA-Z]+$/.test(r);
                      return {
                        symbol: n,
                        market: i ? r : "",
                        code: i ? n.slice(2) : n,
                      };
                    })(j).market.toUpperCase() || j,
                  type: "stock",
                };
              return (
                o.stocks.push(O),
                u.push(j),
                void (a < 2 && (null !== c && n > c ? p : h).push(O))
              );
            }
            if (a < 2) {
              var P = t.split(/\r\n|\n|\r/),
                A = null !== c && n > c ? p : h;
              P.forEach(function (e, t) {
                A.push.apply(A, s(te(e))), t < P.length - 1 && A.push(K);
              });
            }
          }
        }),
      {
        pResult: [{ content_array: re(h, r), content_reply: re(p, r) }],
        extraInfo: o,
        replyTo: d,
        stocks: u,
        turnLog: l,
        hasAtStruct: !!a,
      }
    );
  },
  oe = function (e) {
    if (!e) return {};
    var t = new Date(),
      n = new Date(e),
      r = n.getFullYear();
    if (isNaN(r)) return { formatTime: e };
    var i = [
        M(n.getMinutes()),
        M(n.getHours()),
        M(n.getDate()),
        M(n.getMonth() + 1),
      ],
      o = i[0],
      a = i[1],
      s = i[2],
      c = i[3],
      u = ""
        .concat(r, "-")
        .concat(c, "-")
        .concat(s, " ")
        .concat(a, ":")
        .concat(o);
    if (t.getFullYear() !== r) return { formatTime: u, time: u };
    var l = t.getTime() - n.getTime(),
      d = new Date(t).setHours(0, 0, 0, 0) - n.getTime();
    return {
      formatTime:
        l > 2592e6
          ? "".concat(c, "-").concat(s, " ").concat(a, ":").concat(o)
          : l > O
          ? d < O
            ? "昨天 ".concat(a, ":").concat(o)
            : d < 1728e5
            ? "前天 ".concat(a, ":").concat(o)
            : "".concat(c, "-").concat(s, " ").concat(a, ":").concat(o)
          : l > j
          ? "".concat(Math.floor(l / j), "小时前")
          : l > 6e4
          ? "".concat(Math.floor(l / 6e4), "分钟前")
          : "刚刚",
      time: u,
    };
  };
function ae(e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = null,
    i = null;
  e.rss_list || e.data
    ? ((r = e.rss_list || e.data), (i = e.subject_dict))
    : e.content
    ? ((r = e.content), (i = a({}, e.content.subject_id, e.content)))
    : e.comment &&
      ((r = e.comment),
      (i = Object.fromEntries(
        r.map(function (e) {
          return [e.commentid, e];
        })
      )));
  var o = e.subject_comment_dict || null,
    s = e.follow || {},
    c = {
      1: "short",
      4: "short",
      11: "long",
      13: "long",
      12: "turn",
      14: "turn",
      3: "turnNews",
      15: "share",
    },
    u = { 8: "新闻", 9: "公告", 10: "研报" },
    l = function (n) {
      var a, l, d;
      if ("removed" === n)
        return {
          content: "很抱歉，原贴已被删除",
          showType: "removed",
          commentsTail: { cnt: "0" },
        };
      var h = +n.type || 1,
        p = !(!n.comment_id && !n.commentid),
        v = n.commentid || n.comment_id || n.subject_id,
        m = n.commentid || n.comment_id,
        g = !(!t || !t[v]);
      (null == i ? void 0 : i[v]) && Object.assign(n, i[v]),
        Object.keys(n).forEach(function (e) {
          G(n[e]) && (n[e] = $(n[e]));
        }),
        (n.user_name = n.user_name || n.from_user_name || "");
      var x = !!s[n.user_id] || e.is_followed,
        y = oe(n.created_at),
        w = oe(n.operate_time),
        T = n.image_list || [],
        k = [],
        S = [];
      T.forEach(function (e) {
        n.from_news && (e.origin = "".concat(e.origin, "/0")),
          (e.styleValue = "background-image:url(".concat(e.origin, ")")),
          k.push(e.origin),
          S.push(e.origin_prop);
      }),
        (11 !== h && 13 !== h) ||
          ((n.newsTitle = n.title), (n.newsContent = W(ne(n.sub_content))));
      var I = n.news_id,
        R = +n.news_type;
      if ([1, 3, 4].includes(h) && I)
        if (((n.title = n.title || $(n.sub_content)), R)) {
          var D = [2, 18].includes(R) ? "om" : "news";
          (n.newsFrom = D),
            (n.resourceText = (function (e, t) {
              if (!e) return "";
              if ("om" === t) return "爱看";
              if (/^kuaibao-/.test(e.slice(3))) return "快报";
              for (
                var n = 0,
                  r = [
                    [/^(YJY|ZMT)/, "研究院文章"],
                    [/^kuaibao-/, "快报"],
                    [/^no[sukjn]/, "公告"],
                    [/^re[sukjn]/, "研报"],
                    [/^201607/, "异动"],
                  ];
                n < r.length;
                n++
              ) {
                var i = f(r[n], 2),
                  o = i[0],
                  a = i[1];
                if (o.test(e)) return a;
              }
              return "新闻";
            })(I, D));
        } else {
          var E = I.split("_"),
            q = f(E, 2)[1];
          18 == +q && (n.newsFrom = "om"),
            (n.resourceType = q || null),
            (n.resourceText = u[q] || "新闻");
        }
      var j = n.showType;
      j ||
        ((j = c[h] || "short"),
        [1, 3, 4].includes(h) && n.news_id && n.title && (j = "turnNews"),
        p && (j = "reply")),
        (null == (a = n.image_list) ? void 0 : a.length) &&
          !n.content &&
          (n.content = "分享图片"),
        Object.assign(n, ie(n.content, n.link)),
        "turn" === j &&
          (null == (l = n.turnLog) ? void 0 : l.length) &&
          ((n.user_id = n.user_id || n.turnLog[0].user_id),
          (n.user_name = n.user_name || n.turnLog[0].user_name));
      var O = [];
      if (
        (11 === h || 13 === h) &&
        ((n.newsTitle = n.title),
        (n.newsContent = ne(n.sub_content)),
        11 === h && "" !== n.content)
      )
        try {
          (O = Y(r.content)).forEach(function (e) {
            var t;
            (null == (t = e.image_list) ? void 0 : t.length) &&
              !e.content &&
              (e.content = "分享图片"),
              (e.detailInfo = "text" === e.tag ? ie(e.value, e.link) : e.value);
          });
        } catch (e) {}
      var P = (null == o ? void 0 : o[v]) || { cnt: n.comment_num || "0" };
      null == (d = P.list) ||
        d.forEach(function (e) {
          var t;
          (e.user_name = e.user_name || e.from_user_name || ""),
            (null == (t = e.image_list) ? void 0 : t.length) &&
              !e.content &&
              (e.content = "分享图片"),
            Object.assign(e, ie(e.content, e.link)),
            e.to_user &&
              e.to_user_name &&
              !e.replyTo &&
              (e.replyTo = { text: $(e.to_user_name), type: "at" });
        });
      var A = n.stock_prop ? Y(n.stock_prop) : "";
      return b(
        _(
          b(_({}, n), {
            id: v,
            comment_id: m,
            isIllegalReport: g,
            isReply: p,
            isFollow: x,
            showType: j,
            time: y.time,
            formatTime: y.formatTime,
            operateTime: w.formatTime,
            image_list: T,
            imageList: k,
            imageListInfo: S,
            commentsTail: P,
            litype: h,
            owner: 0,
            detailLongContent: O,
            likeNum: X(n.like_num),
            commentNum: X(n.comment_num),
            retweetNum: X(n.retweet_count),
            stockProp: A,
          }),
          n.submitFalseData && n.image_urls ? { image_urls: n.image_urls } : {}
        ),
        {
          comment_cnt: n.comment_cnt ? Number(n.comment_cnt) : n.comment_cnt,
          comment_num: n.comment_num ? Number(n.comment_num) : n.comment_num,
        }
      );
    },
    d = B(r) ? r : [r],
    h = [];
  return (
    r &&
      d.forEach(function (e) {
        var t = !(!e.comment_id && !e.commentid);
        if (!n || !t) {
          var r = t ? e.root_id : e.subject_id,
            o = e.comment_id,
            a = (null == i ? void 0 : i[r]) ? _(_({}, e), i[r]) : e,
            s = l(a);
          if (
            ((s.detailInfo = l(a)),
            (12 != +a.type && 14 != +a.type) ||
              (12 == +a.type && (s.content = s.title),
              (s.detailInfo = l(
                (null == i ? void 0 : i[a.news_id]) || "removed"
              ))),
            t)
          ) {
            var c = (null == i ? void 0 : i[o]) ? _(_({}, e), i[o]) : e;
            s.replyInfo = l(c);
          }
          s.isIllegalReport || h.push(s);
        }
      }),
    b(_({}, e), { commentsData: h })
  );
}
var se = function (e) {
    return "https://wzq.tenpay.com/cgi-bin/".concat(e);
  },
  ce = se("guess_op.fcgi"),
  ue = se("guess_home.fcgi"),
  le = se("msg_subscribe.fcgi"),
  de = se("open_stockinfo.fcgi"),
  fe = se("query_ranklist.fcgi"),
  he = se("activity/activity.fcgi"),
  pe = se("userinfo.fcgi"),
  ve = se("zxg/commentPlat/activity/longShort"),
  me = null;
function ge() {
  return T(
    this,
    null,
    o().mark(function e() {
      var t, n;
      return o().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (!me) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return", me);
              case 2:
                return (
                  (e.prev = 2),
                  (e.next = 5),
                  k.StockBridge.request(pe, k.RequestTypeEnum.POST, {
                    detail: 1,
                    dealer: 1,
                  })
                );
              case 5:
                return (
                  (t = e.sent),
                  (n = _(
                    {
                      nickName: t.nickname || "",
                      headUrl: t.headimgurl || "",
                      uid: t.uid || "",
                      subscribe: t.subscribe,
                    },
                    t
                  )),
                  e.abrupt("return", ((me = n), n))
                );
              case 10:
                return (
                  (e.prev = 10),
                  (e.t0 = e.catch(2)),
                  e.abrupt("return", {
                    nickName: "",
                    headUrl: "",
                    uid: "",
                    subscribe: 0,
                  })
                );
              case 13:
                return e.abrupt("return", {
                  nickName: "",
                  headUrl: "",
                  uid: "",
                  subscribe: 0,
                });
              case 14:
              case "end":
                return e.stop();
            }
        },
        e,
        null,
        [[2, 10]]
      );
    })
  );
}
var xe,
  ye = {
    waitForJSBridge: function () {
      return Promise.resolve();
    },
    setbounce: function (e, t) {},
    setTitle: function (e, t, n) {
      (document.title = e), k.StockBridge.setTitle(e);
    },
    getUserinfo: ge,
    clientinfo: function () {
      return Promise.resolve(null);
    },
    closeWindow: function () {},
    goPostComponent: function (e) {},
  },
  we = function () {
    return (we =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var i in (t = arguments[n]))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }).apply(this, arguments);
  },
  _e = function (e, t, n) {
    return (
      void 0 === e && (e = {}),
      void 0 === t && (t = !0),
      void 0 === n && (n = !1),
      (e = (function e(t, n, r) {
        if (
          (void 0 === n && (n = !1), void 0 === r && (r = !1), "object" == i(t))
        )
          for (var o in t)
            t.hasOwnProperty(o) &&
              ((null !== t[o] && void 0 !== t[o]) ||
                (n ? delete t[o] : (t[o] = "")),
              r && "" === t[o] && delete t[o],
              "object" == i(t[o]) && (t[o] = e(t[o])));
        return t;
      })(e, n)),
      Object.keys(e)
        .map(function (n) {
          return "".concat(n, "=").concat(
            (t
              ? encodeURIComponent
              : function (e) {
                  return e;
                })(e[n])
          );
        })
        .join("&")
    );
  },
  be = function (e, t) {
    void 0 === t && (t = { searchSep: "?" });
    var n,
      r = t.searchSep,
      i = void 0 === r ? "?" : r,
      o = (function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        }
        return n;
      })(t, ["searchSep"]);
    if (e) n = null === i ? e : e.split(i)[1] || "";
    else {
      if (0 !== arguments.length) return {};
      n =
        location.search ||
        (location.href.split("?") && location.href.split("?")[1]) ||
        "";
    }
    return k.parse_1(n, we({ ignoreQueryPrefix: !0 }, o));
  },
  Te = function (e, t, n) {
    void 0 === t && (t = {}), void 0 === n && (n = {});
    var r = n.encode,
      i = void 0 === r || r,
      o = n.remove,
      a = void 0 !== o && o,
      s = n.overwrite,
      c = void 0 === s || s,
      u = e.split("?"),
      l = u
        .splice(
          0,
          1 === u.length || u[u.length - 1].indexOf("#") > -1
            ? u.length
            : u.length - 1
        )
        .join("?"),
      d = u[0];
    return [
      l,
      c
        ? _e(we(we({}, be(d, { searchSep: null })), t), i, a)
        : [d, _e(t, i, a)].filter(Boolean).join("&"),
    ]
      .filter(Boolean)
      .join("?");
  };
xe = "zxg_xcx";
var ke = function () {
    return T(
      exports,
      null,
      o().mark(function e() {
        return o().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt("return", {
                  check: 11,
                  app: "wzqxcx",
                  appid: "wx4ffb369b6881ee5e",
                  openid: k.StockBridge.getStorage("_qluin") || "",
                  fskey: k.StockBridge.getStorage("_qlskey") || "",
                });
              case 1:
              case "end":
                return e.stop();
            }
        }, e);
      })
    );
  },
  Se = {
    zxg_protocol_tip:
      "同意授权您的微信头像、昵称、最高/连续/累计猜对/胜率次数用于排行榜展示并签署",
    wzq_commu_tip: "社区中发帖、评论等服务由腾讯自选股社区提供,请先阅读并同意:",
    wzq_protocol_tip:
      "同意授权您的微信头像、昵称、最高/连续/累计猜对次数、胜率用于排行榜展示并签署",
    rule1: "《猜涨跌活动规则》",
    rule2: "《腾讯微证券软件许可协议》",
    rule3: "《腾讯微证券隐私条款》",
    rule4: "《腾讯自选股软件许可协议》",
    rule5: "《腾讯自选股隐私条款》",
    rule1route: "rule1",
    rule2route: "wzq_protocol",
    rule3route: "wzq_yinsi_protocol",
    rule4route: "zxg_protocol",
    rule5route: "zxg_yinsi_protocol",
    zxg_enter_protocols: "rule1;rule2;rule3",
    wzq_commu_protocols: "rule4;rule5",
    index_page_subtitle: "每日赢红包/金币,{{month}}月份冠军赢888元现金",
    index_page_subtitle_wzq: "每日赢红包/金币,{{month}}月份冠军赢888元现金",
    rewardtip: "周期内连续猜对获得周红包",
    commentSwitch: "on",
  },
  Ie = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return T(exports, [].concat(t), function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return o().mark(function t() {
        var n;
        return o().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (n = {
                    channel: 0,
                    source: 2,
                    expose_flag: "2",
                    new_version: 3,
                  }),
                  t.abrupt(
                    "return",
                    k.StockBridge.request(
                      ue,
                      k.RequestTypeEnum.POST,
                      _(_({}, n), e)
                    )
                  )
                );
              case 2:
              case "end":
                return t.stop();
            }
        }, t);
      })();
    });
  },
  Re = 480,
  De = 384,
  Ee = "2d",
  qe = (function (e) {
    return (
      (e.text = "text"),
      (e.image = "image"),
      (e.line = "line"),
      (e.rect = "rect"),
      (e.table = "table"),
      (e.barcharts = "barcharts"),
      (e.card = "card"),
      e
    );
  })(qe || {}),
  je = (function (e) {
    return (
      (e.left = "left"),
      (e.center = "center"),
      (e.right = "right"),
      (e.top = "top"),
      (e.middle = "middle"),
      (e.bottom = "bottom"),
      e
    );
  })(je || {}),
  Oe = 0,
  Pe = 30,
  Ae = "png",
  Ce = 1,
  Me = 30,
  ze = "#000",
  Fe = "normal",
  Le = "stockFont",
  Ne = 4,
  Be = 1.4,
  Ge = "测试",
  Ue = 0,
  He = 0.04,
  We = function (e) {
    return "function" == typeof e;
  },
  $e = (function () {
    function e() {
      n(this, e);
    }
    return (
      r(e, [
        {
          key: "draw",
          value: function (e) {
            return T(this, arguments, function (e) {
              var t = this,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return o().mark(function r() {
                var i, a, s, c;
                return o().wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          t.clear(),
                            t.initCanvas(n),
                            (i = h(e)),
                            (r.prev = 2),
                            i.s();
                        case 4:
                          if ((a = i.n()).done) {
                            r.next = 37;
                            break;
                          }
                          if ((s = a.value).type !== qe.image) {
                            r.next = 11;
                            break;
                          }
                          return (r.next = 9), t.drawImage(s);
                        case 9:
                          r.next = 35;
                          break;
                        case 11:
                          if (s.type !== qe.text) {
                            r.next = 16;
                            break;
                          }
                          return (r.next = 14), t.drawText(s);
                        case 14:
                          r.next = 35;
                          break;
                        case 16:
                          if (s.type !== qe.rect) {
                            r.next = 21;
                            break;
                          }
                          return (r.next = 19), t.drawRect(s);
                        case 19:
                          r.next = 35;
                          break;
                        case 21:
                          if (s.type !== qe.table) {
                            r.next = 26;
                            break;
                          }
                          return (r.next = 24), t.drawTable(s);
                        case 24:
                          r.next = 35;
                          break;
                        case 26:
                          if (s.type !== qe.barcharts) {
                            r.next = 31;
                            break;
                          }
                          return (r.next = 29), t.drawBarCharts(s);
                        case 29:
                          r.next = 35;
                          break;
                        case 31:
                          if (((r.t0 = s.type === qe.card), !r.t0)) {
                            r.next = 35;
                            break;
                          }
                          return (r.next = 35), t.drawCard(s);
                        case 35:
                          r.next = 4;
                          break;
                        case 37:
                          r.next = 42;
                          break;
                        case 39:
                          (r.prev = 39), (r.t1 = r.catch(2)), i.e(r.t1);
                        case 42:
                          return (r.prev = 42), i.f(), r.finish(42);
                        case 45:
                          return (r.next = 47), t.toImage();
                        case 47:
                          return (
                            (c = r.sent), r.abrupt("return", (t.clear(), c))
                          );
                        case 49:
                        case "end":
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[2, 39, 42, 45]]
                );
              })();
            });
          },
        },
      ]),
      e
    );
  })(),
  Ye = [
    [
      { width: 0.55, height: 0.5, x: 0, y: 0, index: 0, round: [10, 0, 0, 0] },
      { width: 0.3, height: 0.5, x: 0, y: 0.5, index: 1, round: [0, 0, 0, 10] },
      { width: 0.25, height: 0.5, x: 0.3, y: 0.5, index: 3 },
    ],
    [
      { width: 0.225, height: 0.6, x: 0.55, y: 0, index: 3 },
      {
        width: 0.225,
        height: 0.6,
        x: 0.775,
        y: 0,
        index: 4,
        round: [0, 10, 0, 0],
      },
      {
        width: 0.45,
        height: 0.4,
        x: 0.55,
        y: 0.6,
        index: 5,
        round: [0, 0, 10, 0],
      },
    ],
  ],
  Xe = [
    [
      { width: 0.4, height: 0.6, x: 0, y: 0, index: 0, round: [10, 0, 0, 0] },
      { width: 0.4, height: 0.4, x: 0, y: 0.6, index: 2, round: [0, 0, 0, 10] },
    ],
    [
      { width: 0.3, height: 0.7, x: 0.4, y: 0, index: 1 },
      { width: 0.3, height: 0.7, x: 0.7, y: 0, index: 5, round: [0, 10, 0, 0] },
      { width: 0.4, height: 0.3, x: 0.4, y: 0.7, index: 3 },
      {
        width: 0.2,
        height: 0.3,
        x: 0.8,
        y: 0.7,
        index: 4,
        round: [0, 0, 10, 0],
      },
    ],
  ],
  Je = [
    [{ width: 0.25, height: 1, x: 0, y: 0, index: 0, round: [10, 0, 0, 10] }],
    [
      { width: 0.3, height: 0.7, x: 0.25, y: 0, index: 1 },
      { width: 0.2, height: 0.7, x: 0.55, y: 0, index: 2 },
      {
        width: 0.25,
        height: 0.7,
        x: 0.75,
        y: 0,
        index: 5,
        round: [0, 10, 0, 0],
      },
      { width: 0.375, height: 0.3, x: 0.25, y: 0.7, index: 3 },
      {
        width: 0.375,
        height: 0.3,
        x: 0.625,
        y: 0.7,
        index: 4,
        round: [0, 0, 10, 0],
      },
    ],
  ],
  Ve = [
    [
      { width: 0.3, height: 0.6, x: 0, y: 0, index: 0, round: [10, 0, 0, 0] },
      { width: 0.3, height: 0.4, x: 0, y: 0.6, index: 3, round: [0, 0, 0, 10] },
    ],
    [
      { width: 0.47, height: 0.4, x: 0.3, y: 0, index: 1 },
      { width: 0.235, height: 0.6, x: 0.3, y: 0.4, index: 2 },
      { width: 0.235, height: 0.6, x: 0.535, y: 0.4, index: 4 },
    ],
    [
      {
        width: 0.23,
        height: 1,
        x: 0.77,
        y: 0,
        index: 5,
        round: [0, 10, 10, 0],
      },
    ],
  ],
  Ze = function (e) {
    var t = e;
    return (
      e.width && (t.width = e.width - 4),
      e.height && (t.height = e.height - 4),
      t
    );
  },
  Ke = new ((function (i) {
    e(a, $e);
    var o = t(a);
    function a() {
      return n(this, a), o.apply(this, arguments);
    }
    return (
      r(a, [
        {
          key: "initCanvas",
          value: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            if (!this.canvas) {
              var t = k.wx$1.getWindowInfo(),
                n = t.pixelRatio,
                r = void 0 === n ? 1 : n;
              this.canvas = k.wx$1.createOffscreenCanvas({
                type: Ee,
                width: (e.width || Re) * r,
                height: (e.height || De) * r,
              });
              var i = this.canvas && this.canvas.getContext(Ee);
              i.canvas &&
                !i.canvas.toDataURL &&
                (i.canvas.toDataURL = this.canvas.toDataURL),
                i.scale(r, r);
            }
            return this.canvas;
          },
        },
        {
          key: "toImage",
          value: function () {
            return this.canvasToTempFilePath(this.canvas);
          },
        },
        {
          key: "canvasToTempFilePath",
          value: function (e) {
            var t = getApp(),
              n = t.globalData,
              r = void 0 === n ? {} : n,
              i = r.detect,
              o = void 0 === i ? {} : i,
              a = o.env,
              s = void 0 === a ? {} : a,
              c = s.IS_PCWEIXIN,
              u = void 0 !== c && c;
            return u
              ? this.canvasToTempFilePathForPc(e)
              : new Promise(function (t, n) {
                  k.wx$1.canvasToTempFilePath({
                    canvas: e,
                    width: e.width,
                    height: e.height,
                    destWidth: e.width,
                    destHeight: e.height,
                    fileType: Ae,
                    quality: Ce,
                    success: t,
                    fail: n,
                  });
                });
          },
        },
        {
          key: "canvasToTempFilePathForPc",
          value: function (e) {
            var t = e.toDataURL("image/png"),
              n = Date.now(),
              r = ""
                .concat(k.wx$1.env.USER_DATA_PATH, "/temp_image_")
                .concat(n, ".png");
            return new Promise(function (e, n) {
              k.wx$1.getFileSystemManager().writeFile({
                filePath: r,
                data: t.replace("data:image/png;base64,", ""),
                encoding: "base64",
                success: function () {
                  return e({ tempFilePath: r });
                },
                fail: n,
              });
            });
          },
        },
        {
          key: "drawText",
          value: function (e) {
            if (this.canvas) {
              var t = this.canvas.getContext(Ee),
                n = e.text,
                r = void 0 === n ? "" : n,
                i = e.x,
                o = void 0 === i ? Oe : i,
                a = e.y,
                s = void 0 === a ? Oe : a,
                c = e.style || {},
                u = c.fontSize,
                l = void 0 === u ? Me : u,
                d = c.color,
                f = void 0 === d ? ze : d,
                h = c.fontWeight,
                p = void 0 === h ? Fe : h,
                v = c.textAlign,
                m = void 0 === v ? je.left : v,
                g = c.fontFamily,
                x = void 0 === g ? Le : g;
              (t.font = "".concat(p, " ").concat(l, "px ").concat(x)),
                (t.textAlign = m),
                (t.fillStyle = f),
                t.fillText(r, o, s);
            }
          },
        },
        {
          key: "drawImage",
          value: function (e) {
            var t = this;
            if (!this.canvas)
              return Promise.reject(new Error("Canvas is not initialized"));
            var n = this.canvas.getContext(Ee),
              r = e.url,
              i = e.x,
              o = e.y,
              a = e.width,
              s = void 0 === a ? Re : a,
              c = e.height,
              u = void 0 === c ? De : c,
              l = e.round;
            return new Promise(function (e, a) {
              var c = t.canvas.createImage();
              (c.onload = function () {
                if (l && l.length > 0) {
                  if ((n.save(), n.beginPath(), n.roundRect))
                    n.roundRect(i, o, s, u, l);
                  else {
                    var t = f(l, 4),
                      r = t[0],
                      a = void 0 === r ? Oe : r,
                      d = t[1],
                      h = void 0 === d ? Oe : d,
                      p = t[2],
                      v = void 0 === p ? Oe : p,
                      m = t[3],
                      g = void 0 === m ? Oe : m;
                    n.moveTo(i + a, o),
                      n.arcTo(i + s, o, i + s, o + u, h),
                      n.arcTo(i + s, o + u, i, o + u, v),
                      n.arcTo(i, o + u, i, o, g),
                      n.arcTo(i, o, i + s, o, a);
                  }
                  n.closePath(),
                    n.clip(),
                    n.drawImage(c, i, o, s, u),
                    n.restore();
                } else n.drawImage(c, i, o, s, u), n.restore();
                e(c), (c = null);
              }),
                (c.onerror = function (e) {
                  a(e), (c = null);
                }),
                (c.src = r);
            });
          },
        },
        {
          key: "drawRect",
          value: function (e) {
            if (this.canvas) {
              var t = this.canvas.getContext(Ee),
                n = e.x,
                r = void 0 === n ? Oe : n,
                i = e.y,
                o = void 0 === i ? Oe : i,
                a = e.width,
                s = void 0 === a ? Re : a,
                c = e.height,
                u = void 0 === c ? De : c,
                l = e.fill,
                d = e.stroke,
                h = e.round;
              if ((d && (t.strokeStyle = d), l && (t.fillStyle = l), h))
                if (t.roundRect)
                  t.beginPath(),
                    t.roundRect(r, o, s, u, h),
                    t.fill(),
                    t.closePath();
                else {
                  var p = f(h, 4),
                    v = p[0],
                    m = void 0 === v ? Oe : v,
                    g = p[1],
                    x = void 0 === g ? Oe : g,
                    y = p[2],
                    w = void 0 === y ? Oe : y,
                    _ = p[3],
                    b = void 0 === _ ? Oe : _;
                  t.beginPath(),
                    t.moveTo(r + m, o),
                    t.arcTo(r + s, o, r + s, o + u, x),
                    t.arcTo(r + s, o + u, r, o + u, w),
                    t.arcTo(r, o + u, r, o, b),
                    t.arcTo(r, o, r + s, o, m),
                    t.closePath(),
                    t.fill();
                }
              else l ? t.fillRect(r, o, s, u) : t.strokeRect(r, o, s, u);
            }
          },
        },
        {
          key: "clear",
          value: function () {
            if (this.canvas) {
              var e = this.canvas.getContext(Ee);
              e.clearRect(Oe, Oe, this.canvas.width, this.canvas.height),
                (this.canvas = null),
                (e = null);
            }
          },
        },
        {
          key: "measureText",
          value: function (e) {
            if (!this.canvas) return 0;
            var t = this.canvas.getContext(Ee),
              n = e.text,
              r = void 0 === n ? Ge : n,
              i = (e.style || {}).fontSize,
              o = void 0 === i ? Me : i;
            (t.textBaseline = je.middle),
              (t.font = "".concat(o, "px ").concat(Le));
            var a = t.measureText(r);
            return (
              (a.actualBoundingBoxAscent + a.actualBoundingBoxDescent) / Ne
            );
          },
        },
        {
          key: "drawTable",
          value: function (e) {
            var t = e.x,
              n = e.y,
              r = e.width,
              i = e.height;
            e.log &&
              this.drawRect({ x: t, y: n, width: r, height: i, type: qe.rect });
            for (
              var o = e.data,
                a = o.rows,
                s = o.columns,
                c = s.reduce(function (e, t) {
                  return e + t.width;
                }, 0),
                u = n,
                l = 0;
              u < n + i && a.data[l];
              u += a.height, l++
            )
              for (var d = 0, f = 0; f < s.length; f++) {
                var h = s[f].width,
                  p = t + d;
                s[f].textAlign === je.right
                  ? (p += r * (h / c))
                  : s[f].textAlign === je.center && (p += (r * (h / c)) / 2);
                a.valign === je.middle
                  ? a.height / 2
                  : a.valign === je.bottom && a.height,
                  this.drawText({
                    type: qe.text,
                    text: String(a.data[l][f]),
                    x: p,
                    y: u + a.height / 2,
                    style: _({}, s[f]),
                  }),
                  (d += r * (h / c));
              }
          },
        },
        {
          key: "drawBarCharts",
          value: function (e) {
            var t = e.x,
              n = void 0 === t ? Oe : t,
              r = e.y,
              i = void 0 === r ? Oe : r,
              o = e.width,
              a = void 0 === o ? Re : o,
              c = e.height,
              u = void 0 === c ? De : c,
              l = e.log,
              d = void 0 !== l && l,
              f = e.style,
              h = e.data,
              p = h.field,
              v = h.label,
              m = h.data,
              g = m.map(function (e) {
                return e[p];
              }),
              x = m.map(function (e) {
                return e[v];
              }),
              y = g.length,
              w = Math.max.apply(Math, s(g)),
              T = a / (y - 0.3),
              k = 0.7 * T,
              S = 0.7 * u;
            d &&
              this.drawRect({ x: n, y: i, width: a, height: u, type: qe.rect });
            for (var I = 0; I < g.length; I++)
              this.drawRect({
                x: n + I * T,
                y: i + 0.85 * u,
                width: k,
                height: (-g[I] / w) * S,
                fill: We(f.fill) ? f.fill(I) : f.fill,
                type: qe.rect,
              }),
                this.drawText({
                  type: qe.text,
                  text: g[I],
                  x: n + I * T + k / 2,
                  y: i - (g[I] / w) * S + 0.82 * u,
                  style: b(_({}, f), {
                    fontSize: f.fontSize,
                    textAlign: f.textAlign || je.center,
                    color: We(f.color) ? f.color(I) : f.color,
                  }),
                });
            for (var R = 0; R < x.length; R++)
              this.drawText({
                type: qe.text,
                text: x[R],
                x: n + R * T + k / 2,
                y: i + u * (1 - He),
                style: b(_({}, f), {
                  fontSize: f.fontSize,
                  textAlign: f.textAlign || je.center,
                  color: f.color(R),
                }),
              });
          },
        },
        {
          key: "resetZeroPoint",
          value: function (e) {
            var t = e.x,
              n = e.y;
            this.canvas && this.canvas.getContext(Ee).translate(t, n);
          },
        },
        {
          key: "drawCard",
          value: function (e) {
            var t = e.x,
              n = void 0 === t ? Pe : t,
              r = e.y,
              i = void 0 === r ? Pe : r,
              o = e.width,
              a = e.height,
              s = e.log,
              c = void 0 === s || s,
              u = e.style,
              l = e.data,
              d = l.field,
              f = l.label,
              h = l.data;
            c &&
              this.drawRect({
                x: n,
                y: i,
                width: o,
                height: a,
                round: [Ue, Ue, Ue, Ue],
                fill: ze,
                type: qe.rect,
              });
            var p,
              v = null;
            h &&
              (v = (function (e) {
                var t,
                  n,
                  r = null == (t = e[0]) ? void 0 : t.zdf,
                  i = null == (n = e[5]) ? void 0 : n.zdf;
                return r < 2 && i >= -4
                  ? Ye
                  : r > 4 && Math.abs(i) <= r
                  ? Je
                  : i < -4 && Math.abs(i) > r
                  ? Ve
                  : Xe;
              })(h)),
              this.resetZeroPoint({ x: n + 2, y: i + 2 });
            for (var m = 0; m < v.length; m++)
              for (var g = v[m], x = 0; x < g.length; x++)
                this.drawRect(
                  Ze({
                    x: g[x].x * o,
                    y: g[x].y * a,
                    width: g[x].width * o,
                    height: g[x].height * a,
                    round: g[x].round,
                    fill:
                      ((p = h[g[x].index][d]), p >= 0 ? "#fceded" : "#f0f9f2"),
                  })
                ),
                  this.drawText({
                    type: qe.text,
                    x: g[x].x * o + (g[x].width * o) / 2,
                    y: g[x].y * a + (g[x].height * a) / 2,
                    width: g[x].width * o,
                    height: g[x].height * a,
                    text: String(h[g[x].index][f]),
                    style: _({}, u),
                  }),
                  this.drawText({
                    type: qe.text,
                    x: g[x].x * o + (g[x].width * o) / 2,
                    y: g[x].y * a + (g[x].height * a) / 2 + u.fontSize * Be,
                    width: g[x].width * o,
                    height: g[x].height * a,
                    text: "".concat(h[g[x].index][d], "%"),
                    style: _({}, u),
                  });
          },
        },
      ]),
      a
    );
  })())(),
  Qe = function (e, t) {
    (e = String(e) || ""), (t = void 0 === t ? 2 : t);
    var n = /^(\-?)(\d+)(\.\d+)?$/.exec(e);
    if (null === n) return e;
    var r = (null != n && RegExp.$1) || "",
      i = (null != n && RegExp.$2) || "0",
      o = (null != n && RegExp.$3) || ".00",
      a = i.length,
      s = a > 3 ? a % 3 : 0,
      c = "",
      u = 0 == s ? "" : i.substr(0, s) + ",",
      l = 0;
    o =
      0 == t
        ? ""
        : o.length >= t + 1
        ? o.substr(0, t + 1)
        : (o + new Array(t + 1 - o.length + 1).join("0")).substr(0, t + 1);
    for (var d = s; d < a; d++)
      (c += i.charAt(d)), ++l % 3 == 0 && d < a - 1 && ((c += ","), (l = 0));
    return r + u + c + o;
  };
(exports.CommentParser = function (e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return Promise.resolve({}).then(function (t) {
    var r = {},
      i = {},
      o = ae(
        (e = Y(
          (function (e) {
            var t = "";
            try {
              t = JSON.stringify(e);
            } catch (n) {
              t = e;
            }
            return t;
          })(e)
        )),
        t,
        n
      );
    return (
      r && (o.hotData = ae(r, t, n)),
      i &&
        ((o.topData = ae(i, t, n)),
        o.topData.commentsData.forEach(function (e) {
          e.top_tag = 1;
        })),
      (o.commentsData = []
        .concat(s(o.topData.commentsData), s(o.commentsData))
        .map(function (e) {
          var t,
            n,
            r = e.stock_name,
            i = e.topic_name,
            o = e.stock_id,
            a = e.topic_id,
            s = _(
              _({}, e.extraInfo),
              "turn" === e.showType &&
                (null == (n = null == (t = e.turnLog) ? void 0 : t[0])
                  ? void 0
                  : n.extraInfo)
            ),
            c = s.stocks,
            u = void 0 === c ? [] : c,
            l = s.topics,
            d = void 0 === l ? [] : l;
          return (
            u[0] && ((o = o || u[0].symbol), (r = r || u[0].text)),
            d[0] && ((a = a || d[0].topicId), (i = i || d[0].text)),
            b(_({}, e), {
              stock_id: o,
              topic_id: a,
              stock_name: r,
              topic_name: i,
            })
          );
        })),
      o
    );
  });
}),
  (exports.DEFAULT_SHARE_IMG =
    "https://st.gtimg.com/design/5190cd22002b9660dbc73cda74f72289.png"),
  (exports.DELAY_CONFIG = q),
  (exports.GUESS_ETF_RECOMMEND_URL =
    "https://zqact.tenpay.com/activity/page/etfRecommend/#/home?etfKey=2ouf8wgtwe&lite=1"),
  (exports.HELP_MODAL_TEXT = {
    1: { content: ["这是你的助力邀请页", "你无法对自己进行助力"] },
    2: { content: ["好友的助力已过期", "你可自行前往参加活动哟"] },
    3: { content: ["你已为他人完成助力", "无法为好友助力"] },
    4: { content: ["你已为他完成助力", "无法再次参与"] },
    5: { content: ["你的好友助力值已满", "无法再接受你的助力"] },
    6: { content: ["无法为好友助力", "你可自行前往参与活动哟"] },
    7: { content: ["无法为好友助力", "你可自行前往参与活动哟"] },
  }),
  (exports.IS_MINA = !1),
  (exports.IS_MINIPROGRAM = !0),
  (exports.IS_WEIXIN = !1),
  (exports.IS_XCX = !0),
  (exports.IS_ZXG = !1),
  (exports.MODAL_TYPE = { SENTIMENT: 1, EQUITY: 2, INVEST: 3, HELP: 4 }),
  (exports.MSG_SUBSCRIBE_TMPL_ID =
    "ye1pTlF-svIBTaq9X2FP-qFUMZr7KgYJGIHCcDjPwSY"),
  (exports.OUTER_SRC = { inner: 0, outer: 1 }),
  (exports.OUTER_SRC_EXPOSURE = { never: 0, already: 1 }),
  (exports.OffscreenCanvasImage = Ke),
  (exports.REWARD_CONFIG = {
    3: { typeName: "dapan", name: "上证指数" },
    7: { typeName: "gegu", name: "个股" },
    5: { typeName: "weekChampion", name: "周冠军" },
    6: { typeName: "monthChampion", name: "月冠军" },
  }),
  (exports.REWARD_TYPE = { new: "20001", old: "300058" }),
  (exports.SHARE_TITLES = A),
  (exports.createGuessPageMixin = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = e.isGuest,
      n = void 0 !== t && t,
      r = e.isH5,
      i = void 0 !== r && r;
    return {
      methods: {
        formatMoneyOne: function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 2,
            r = Math.abs(+e),
            i = n,
            o = "";
          return isNaN(+e)
            ? "--"
            : ((o =
                r > 999999.99 && r < 1e8
                  ? "".concat(Qe(r / 1e4, i), "万")
                  : r > 1e8
                  ? "".concat(Qe(r / 1e8, i), "亿")
                  : Qe(r, i)),
              +e < 0
                ? (o = "-".concat(o))
                : t && /^[^+]/.test(o) && (o = "+".concat(o)),
              o);
        },
        scrollToAIModule: function () {
          i
            ? window.scrollTo({ top: 0, behavior: "smooth" })
            : k.wx$1.pageScrollTo({ scrollTop: 0, duration: 0 }),
            (this.showAiGuideTips = !0);
        },
        handleAiDialogClick: function (e, t) {
          if ("btn" !== t) {
            if (e && e.title) return e;
          } else this.scrollToAIModule();
        },
        processDateList: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          if ("0" === t) {
            var o = !1;
            return e.slice(0, 5).map(function (e) {
              var t = e.status;
              return "3" === t
                ? ((o = !0), { type: "processing", text: "进行中" })
                : o || "5" !== t
                ? _({}, C[t])
                : { type: "notJoin", text: n ? "已结束" : "待猜" };
            });
          }
          var a = e.findIndex(function (e) {
              return "3" === e.status;
            }),
            s =
              a > 0 &&
              e.slice(0, a).some(function (e) {
                return ["0", "2"].includes(e.status);
              }),
            c = e.slice(0, 5).map(function (e) {
              return s || "1" !== e.status
                ? _(_({}, e), C[e.status])
                : b(_({}, e), { type: "done", text: "猜对" });
            });
          if (n) {
            var u = c.find(function (e) {
                return "3" === e.status;
              }),
              l = (null == i ? void 0 : i.user_answer) ? i : r;
            u &&
              "0" !== (null == l ? void 0 : l.user_answer) &&
              ((u.type = "done"), (u.text = "已猜"));
          }
          return c;
        },
        processStockInfo: function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return e && e[0]
            ? b(_({}, e[0]), {
                symbol: ""
                  .concat("0" === e[0].type ? "sz" : "sh")
                  .concat(e[0].code),
                zdf: (e[0].zdf || "").replace("+", ""),
              })
            : {};
        },
        processRateInfo: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = e.find(function (e) {
              return "1" === e.data;
            }),
            n = e.find(function (e) {
              return "2" === e.data;
            });
          return {
            riseRate: +((null == t ? void 0 : t.ratio) || 50),
            fallRate: +((null == n ? void 0 : n.ratio) || 50),
          };
        },
        applyHomeDataCommon: function (e) {
          var t,
            n,
            r,
            i = e.date_list,
            o = void 0 === i ? [] : i,
            a = e.T_info,
            s = void 0 === a ? [] : a,
            c = e.T1_info,
            u = void 0 === c ? [] : c,
            l = e.activity_info,
            d = void 0 === l ? [] : l,
            h = e.global_ratio_list,
            p = void 0 === h ? [] : h,
            v = e.stockinfo,
            m = void 0 === v ? [] : v,
            g = e.sign_agreement,
            x = e.login_status,
            y = e.global_ratio_new,
            w = void 0 === y ? [] : y,
            b = e.shop_asset,
            T = e.report_info,
            k = e.vip_info,
            S = void 0 === k ? {} : k;
          this.dateList = this.processDateList(o, x, s[0], u[0]);
          var I = this.processStockInfo(m);
          if (I.symbol) {
            var R = Object.fromEntries(
              Object.entries(I).filter(function (e) {
                var t = f(e, 2)[1];
                return "" !== t && null != t;
              })
            );
            (this.stockInfo = _(_({}, this.stockInfo), R)),
              this.stockInfo1 &&
                (this.stockInfo1 = _(_({}, this.stockInfo1), R));
          }
          (this.rateInfo = this.processRateInfo(p)),
            (this.TInfo = s[0] || {}),
            (this.TpInfo = u[0] || {}),
            (null == (t = this.TpInfo) ? void 0 : t.user_answer) &&
            (null == (n = this.TInfo) ? void 0 : n.user_answer)
              ? (this.FTInfo = this.TpInfo)
              : (this.FTInfo = (
                  null == (r = this.TpInfo) ? void 0 : r.user_answer
                )
                  ? this.TpInfo
                  : this.TInfo),
            (this.TDate = (
              this.dateList.find(function (e) {
                return "3" === e.status;
              }) || {}
            ).date),
            (this.global_ratio_new = w),
            (this.signStatus = g),
            (this.activityInfo = d[0] || {}),
            (this.shop_asset = b || {}),
            (this.report_info = T),
            (this.vip_info = S || {}),
            (this.loaded = !0);
        },
        applyStockInfoCommon: function (e) {
          if (e) {
            var t = e.secu_quote,
              n = e.servertime;
            if (t) {
              var r = {
                zdf: t.zdf,
                dqj: t.dqj,
                price: t.dqj,
                nowServeTime: k.dayjs(1e3 * n).format("MM月DD日 HH:mm:ss"),
                tradeDateString: k.dayjs(1e3 * t.utime).format("MM月DD日"),
                dateString: k.dayjs(1e3 * n).format("MM月DD日"),
              };
              (this.stockInfo = _(_({}, this.stockInfo), r)),
                this.stockInfo1 &&
                  (this.stockInfo1 = _(_({}, this.stockInfo1), r)),
                void 0 !== this.tradeDateString &&
                  (this.tradeDateString = r.tradeDateString);
            }
          }
        },
        getFixedStockData: function () {
          var e,
            t = _({}, this.stockInfo1);
          return (
            !t.price && t.dqj && (t.price = t.dqj),
            !t.zdf &&
              (null == (e = this.stockInfo) ? void 0 : e.zdf) &&
              (t.zdf = this.stockInfo.zdf),
            t
          );
        },
        swiperDataDivisionCommon: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
          return T(
            this,
            null,
            o().mark(function r() {
              var i,
                a,
                s,
                c,
                u,
                l,
                d,
                f,
                h,
                p,
                v,
                m,
                g,
                x,
                y,
                w,
                _,
                b,
                T,
                k,
                S,
                I,
                R,
                D,
                E;
              return o().wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (
                          ((this.guessLocalData = []),
                          void 0 !== this.GuessLocalData &&
                            (this.GuessLocalData = []),
                          (i = this.TInfo),
                          (a = this.TpInfo),
                          (s = this.global_ratio_new),
                          (r.t0 = !this.isGuess),
                          r.t0)
                        ) {
                          r.next = 9;
                          break;
                        }
                        return (r.next = 8), this.isGuess(i);
                      case 8:
                        r.t0 = r.sent;
                      case 9:
                        if (((c = r.t0), (r.t1 = !this.isGuess), r.t1)) {
                          r.next = 15;
                          break;
                        }
                        return (r.next = 14), this.isGuess(a);
                      case 14:
                        r.t1 = r.sent;
                      case 15:
                        (u = r.t1),
                          (null == a ? void 0 : a.user_answer) &&
                          (null == i ? void 0 : i.user_answer)
                            ? ((l = null !== n ? n : 1),
                              (d = +i.user_answer),
                              (f = +a.user_answer),
                              (h = L.getRiseFall(s, i.T_endts)),
                              (p = L.getRiseFall(s, a.T_endts)),
                              (v = L.createDataStructure(a.T_endts).MD),
                              (m = L.predictionTime(i.T_resultts)),
                              (g = L.predictionTime(a.T_resultts)),
                              (x = L.createDataStructure(
                                i.T_endts,
                                !1,
                                e,
                                "",
                                "",
                                1,
                                h,
                                d,
                                c,
                                1,
                                l,
                                m
                              ).json),
                              (y = L.createDataStructure(
                                a.T_endts,
                                !1,
                                "",
                                "",
                                v,
                                2,
                                p,
                                f,
                                u,
                                2,
                                l,
                                g
                              ).json),
                              this.guessLocalData.push(x, y),
                              t &&
                                this.guessedInvite &&
                                this.guessedInvite(
                                  i.user_answer,
                                  a.user_answer
                                ))
                            : (null == a ? void 0 : a.user_answer)
                            ? ((w = +a.user_answer),
                              (_ = L.getRiseFall(s, a.T_endts)),
                              (b = L.createDataStructure(a.T_endts).MD),
                              (T = L.predictionTime(a.T_resultts)),
                              (k = L.createDataStructure(
                                a.T_endts,
                                !1,
                                "",
                                "",
                                b,
                                2,
                                _,
                                w,
                                u,
                                2,
                                null,
                                T
                              ).json),
                              this.guessLocalData.push(k),
                              t &&
                                this.guessedInvite &&
                                this.guessedInvite(void 0, a.user_answer))
                            : (null == i ? void 0 : i.user_answer) &&
                              ((S = +i.user_answer),
                              (I = L.predictionTime(i.T_resultts)),
                              (R = L.getRiseFall(s, i.T_endts)),
                              (D = +i.T_endts - +i.servertime),
                              (E =
                                D > 0 && D < 13800
                                  ? L.createDataStructure(
                                      i.T_endts,
                                      !1,
                                      e,
                                      "",
                                      "",
                                      1,
                                      R,
                                      S,
                                      c,
                                      1,
                                      null,
                                      I
                                    ).json
                                  : L.createDataStructure(
                                      i.T_endts,
                                      !0,
                                      "",
                                      "本场尚未开盘可参考昨日大盘哦",
                                      "",
                                      1,
                                      R,
                                      S,
                                      c,
                                      1,
                                      null,
                                      I
                                    ).json),
                              this.guessLocalData.push(E),
                              t &&
                                this.guessedInvite &&
                                this.guessedInvite(i.user_answer, void 0)),
                          void 0 !== this.GuessLocalData &&
                            (this.GuessLocalData = this.guessLocalData);
                      case 18:
                      case "end":
                        return r.stop();
                    }
                },
                r,
                this
              );
            })
          );
        },
        applyOpinionData: function (e) {
          var t = e.commentsData,
            n = void 0 === t ? [] : t,
            r = e.rss_list_1,
            i = void 0 === r ? [] : r,
            o = e.activity_topics_1,
            a = e.activity_topics_2,
            s = e.check_result;
          (this.riseTopic = o), (this.fallTopic = a), (this.checkResult = s);
          var c = [],
            u = [];
          n.forEach(function (e) {
            var t = {
              contents: e.detailInfo.pResult[0].content_array,
              id: e.detailInfo.id,
              userId: e.detailInfo.user_id,
              likeId: e.detailInfo.like_id,
              likeNum: e.detailInfo.like_num,
              likeUsers: e.detailInfo.like_users || [],
              userImage: e.detailInfo.user_image,
              userName: e.detailInfo.user_name,
              formatTime: e.detailInfo.formatTime,
              postImage: e.imageList[0],
            };
            (i.some(function (t) {
              return t.subject_id === e.id;
            })
              ? c
              : u
            ).push(t);
          }),
            (this.riseResults = c),
            (this.fallResults = u);
        },
        getShareSnapshotDrawArr: function (e, t) {
          var n = [
            {
              type: "image",
              url: "".concat(t, "?t=").concat(Date.now()),
              x: 0,
              y: 0,
            },
          ];
          if (
            ((null == e ? void 0 : e.nowServeTime) &&
              n.push({
                type: "text",
                text: e.nowServeTime || "",
                x: 136,
                y: 104,
                style: { color: "#262E40", fontSize: 24, fontWeight: "400" },
              }),
            (null == e ? void 0 : e.price) &&
              n.push({
                type: "text",
                text: e.price || "-.--",
                x: 68,
                y: 200,
                style: { color: "#475166", fontSize: 40, fontWeight: "500" },
              }),
            void 0 !== (null == e ? void 0 : e.zdf))
          ) {
            var r = parseFloat(e.zdf),
              i = isNaN(r) || r >= 0 ? "#E63535" : "#6ECB72";
            n.push({
              type: "text",
              text: "".concat(e.zdf || "--", "%"),
              x: 268,
              y: 200,
              style: { color: i, fontSize: 40, fontWeight: "500" },
            });
          }
          return n;
        },
      },
    };
  }),
  (exports.fetchAdConfig = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return T(exports, [].concat(t), function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return o().mark(function t() {
        return o().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return t.abrupt(
                  "return",
                  k.StockBridge.request(
                    "https://wzq.tenpay.com/svr/ads/ad_comm_service/query_by_typename",
                    k.RequestTypeEnum.GET,
                    _(
                      _(
                        {},
                        {
                          channel: 8,
                          typename: "market_guess_tips",
                          stock_code: "000001",
                          market: 1,
                          stock_name: "上证指数",
                        }
                      ),
                      e
                    )
                  )
                );
              case 1:
              case "end":
                return t.stop();
            }
        }, t);
      })();
    });
  }),
  (exports.fetchAssistPageData = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return T(exports, [].concat(t), function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return o().mark(function t() {
        return o().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return t.abrupt("return", Ie(_({ source: 4 }, e)));
              case 1:
              case "end":
                return t.stop();
            }
        }, t);
      })();
    });
  }),
  (exports.fetchGuessHomeData = Ie),
  (exports.fetchGuessRecommend = function () {
    return T(
      exports,
      null,
      o().mark(function e() {
        var t;
        return o().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  k.StockBridge.request(
                    "https://wzq.tenpay.com/svr/ads/ad_comm_service/get_guess_recommend",
                    k.RequestTypeEnum.GET
                  )
                );
              case 2:
                return (t = e.sent), e.abrupt("return", t.data || t);
              case 4:
              case "end":
                return e.stop();
            }
        }, e);
      })
    );
  }),
  (exports.fetchLongShortOpinions = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return T(exports, [].concat(t), function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return o().mark(function t() {
        var n, r, i, a;
        return o().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (n = e.check),
                  (r = e.openid),
                  (i = ""
                    .concat(ve, "?check=")
                    .concat(encodeURIComponent(n), "&app=wzq&openid=")
                    .concat(encodeURIComponent(r))),
                  (a = {
                    limit: e.limit || 20,
                    date: e.date,
                    activity_id: e.activity_id,
                    stock_id: e.stock_id,
                  }),
                  t.abrupt(
                    "return",
                    k.StockBridge.request(i, k.RequestTypeEnum.POST, a)
                  )
                );
              case 2:
              case "end":
                return t.stop();
            }
        }, t);
      })();
    });
  }),
  (exports.fetchMainFunds = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return T(exports, [].concat(t), function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return o().mark(function t() {
        return o().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return t.abrupt(
                  "return",
                  k.StockBridge.request(
                    "https://proxy.finance.qq.com/cgi/cgi-bin/fundflow/hsfundtab",
                    k.RequestTypeEnum.GET,
                    e
                  )
                );
              case 1:
              case "end":
                return t.stop();
            }
        }, t);
      })();
    });
  }),
  (exports.fetchMarketAnalysisQuestion = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return T(exports, [].concat(t), function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return o().mark(function t() {
        var n, r;
        return o().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (t.next = 2), ke();
              case 2:
                return (
                  (n = t.sent),
                  (r = S.getSignV3({
                    data: b(_(_({}, e), n), { t: new Date().getTime() }),
                    method: k.RequestTypeEnum.GET,
                    origin: n.app,
                  })),
                  t.abrupt(
                    "return",
                    k.StockBridge.request(
                      Te(
                        "https://snp.tenpay.com/cgi-bin/openai/aiask/query",
                        r
                      ),
                      k.RequestTypeEnum.GET,
                      {},
                      { forceCallback: !0 }
                    )
                  )
                );
              case 5:
              case "end":
                return t.stop();
            }
        }, t);
      })();
    });
  }),
  (exports.fetchRankList = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return T(exports, [].concat(t), function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return o().mark(function t() {
        var n;
        return o().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (n = { page_num: 0, ranklist: "GuessMonth", channel: 0 }),
                  t.abrupt(
                    "return",
                    k.StockBridge.request(
                      fe,
                      k.RequestTypeEnum.POST,
                      _(_({}, n), e)
                    )
                  )
                );
              case 2:
              case "end":
                return t.stop();
            }
        }, t);
      })();
    });
  }),
  (exports.fetchRewardPointList = function () {
    return T(
      exports,
      null,
      o().mark(function e() {
        var t;
        return o().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (t = { channel: 0, source: 6, new_version: 3 }),
                  e.abrupt(
                    "return",
                    k.StockBridge.request(ue, k.RequestTypeEnum.GET, t)
                  )
                );
              case 2:
              case "end":
                return e.stop();
            }
        }, e);
      })
    );
  }),
  (exports.fetchStockInfo = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return T(exports, [].concat(t), function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return o().mark(function t() {
        var n;
        return o().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (n = {
                    scode: "000001",
                    markets: 1,
                    needfive: 0,
                    needquote: 1,
                    needfollow: 0,
                    type: 0,
                    channel: 0,
                  }),
                  t.abrupt(
                    "return",
                    k.StockBridge.request(
                      de,
                      k.RequestTypeEnum.POST,
                      _(_({}, n), e)
                    )
                  )
                );
              case 2:
              case "end":
                return t.stop();
            }
        }, t);
      })();
    });
  }),
  (exports.fetchVToolsConfig = function () {
    return T(
      exports,
      null,
      o().mark(function e() {
        var t, n, r;
        return o().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.prev = 0),
                    (t =
                      "https://wzq.gtimg.com/resources/vtools/guess_game_act_config_utf8.json?_=".concat(
                        Date.now()
                      )),
                    (e.next = 4),
                    k.StockBridge.request(t, k.RequestTypeEnum.GET)
                  );
                case 4:
                  return (
                    (n = e.sent),
                    (r = {}),
                    e.abrupt(
                      "return",
                      (n &&
                        n.guess_game_config &&
                        Array.isArray(n.guess_game_config) &&
                        n.guess_game_config.forEach(function (e) {
                          r[e.guess_game_key] = e.guess_game_value;
                        }),
                      r)
                    )
                  );
                case 9:
                  return (
                    (e.prev = 9), (e.t0 = e.catch(0)), e.abrupt("return", Se)
                  );
                case 12:
                case "end":
                  return e.stop();
              }
          },
          e,
          null,
          [[0, 9]]
        );
      })
    );
  }),
  (exports.getUserinfo = ge),
  (exports.guessHelpers = L),
  (exports.handleMessageSubscription = function (e) {
    return T(
      exports,
      null,
      o().mark(function t() {
        var n;
        return o().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (n = b(_({}, e), { channel: 0 })),
                  t.abrupt(
                    "return",
                    k.StockBridge.request(le, k.RequestTypeEnum.GET, n)
                  )
                );
              case 2:
              case "end":
                return t.stop();
            }
        }, t);
      })
    );
  }),
  (exports.removeEmoji = function (e) {
    return (e || "").replace(z, "");
  }),
  (exports.reportPopupViewed = function () {
    var e = { channel: 0, action: 6, bid: 1001, new_version: 3, app: xe };
    return k.StockBridge.request(ce, k.RequestTypeEnum.GET, e);
  }),
  (exports.saveUserProfile = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return T(exports, [].concat(t), function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return o().mark(function t() {
        var n;
        return o().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (n = { func: "save_userext", channel: 0 }),
                  t.abrupt(
                    "return",
                    k.StockBridge.request(
                      he,
                      k.RequestTypeEnum.POST,
                      _(_({}, n), e)
                    )
                  )
                );
              case 2:
              case "end":
                return t.stop();
            }
        }, t);
      })();
    });
  }),
  (exports.sdkService = ye),
  (exports.submitGuessAnswer = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return T(exports, [].concat(t), function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return o().mark(function t() {
        var n;
        return o().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (n = { app: xe }),
                  t.abrupt(
                    "return",
                    k.StockBridge.request(
                      ce,
                      k.RequestTypeEnum.POST,
                      _(_({}, n), e)
                    )
                  )
                );
              case 2:
              case "end":
                return t.stop();
            }
        }, t);
      })();
    });
  }),
  (exports.truncateByByteLength = function (e, t) {
    if (e.replace(/[\u4e00-\u9fa5]/g, "**").length <= t) return e;
    var n,
      r = 0,
      i = "",
      o = h(e);
    try {
      for (o.s(); !(n = o.n()).done; ) {
        var a = n.value,
          s = /[\u4e00-\u9fa5]/.test(a) ? 2 : 1;
        if (r + s > t) break;
        (r += s), (i += a);
      }
    } catch (e) {
      o.e(e);
    } finally {
      o.f();
    }
    return "".concat(i, "...");
  }),
  (exports.withdrawRewardCash = function () {
    return T(
      exports,
      null,
      o().mark(function e() {
        var t;
        return o().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (t = { channel: 0, source: 7, new_version: 3 }),
                  e.abrupt(
                    "return",
                    k.StockBridge.request(ue, k.RequestTypeEnum.GET, t)
                  )
                );
              case 2:
              case "end":
                return e.stop();
            }
        }, e);
      })
    );
  });
