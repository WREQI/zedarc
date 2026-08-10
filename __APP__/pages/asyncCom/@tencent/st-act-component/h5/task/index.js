require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t,
  e = require("../../../../../../@babel/runtime/helpers/typeof"),
  n = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../../@babel/runtime/helpers/classCallCheck"),
  a = require("../../../../../../@babel/runtime/helpers/createClass"),
  s = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  o = Object.defineProperties,
  c = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  h = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  d = function (t, e, n) {
    return e in t
      ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  p = function (t, e) {
    for (var n in e || (e = {})) h.call(e, n) && d(t, n, e[n]);
    if (u) {
      var r,
        a = s(u(e));
      try {
        for (a.s(); !(r = a.n()).done; ) {
          n = r.value;
          l.call(e, n) && d(t, n, e[n]);
        }
      } catch (t) {
        a.e(t);
      } finally {
        a.f();
      }
    }
    return t;
  },
  f = function (t, e) {
    return o(t, c(e));
  },
  b = function (t, e, n) {
    return new Promise(function (r, a) {
      var s = function (t) {
          try {
            o(n.next(t));
          } catch (t) {
            a(t);
          }
        },
        i = function (t) {
          try {
            o(n.throw(t));
          } catch (t) {
            a(t);
          }
        },
        o = function (t) {
          return t.done ? r(t.value) : Promise.resolve(t.value).then(s, i);
        };
      o((n = n.apply(t, e)).next());
    });
  },
  m = require("../../../../../../common/vendor.js"),
  v = require("../../../st-adapter/src/mta/index.js"),
  k = {
    2: {
      "/choose/index": { type: "guide", text: "成功添加热股，返回拆现金红包" },
      "/hot": {
        type: "guide",
        text: function (t) {
          var e = t.rewardDesc;
          return "添加一只热搜股票到自选，得".concat(e || "奖励");
        },
        event: "add_stock",
      },
      "/trade/stock_detail.shtml": {
        type: "bubble",
        text: function (t) {
          return t.invalid
            ? "已经在你的自选啦，去看看其他股票"
            : "加自选即完成任务";
        },
        selector: ".yy-task-add",
        delay: 0.5,
        event: "add_stock",
      },
    },
    3: {
      "/account/index": {
        type: "bubble",
        text: "点击进行设置",
        selector: ".yy-task-account-bubble",
        delay: 0.8,
        direction: "left",
        left: "10px",
      },
      "/account/setting_subscribe": {
        type: "bubble",
        text: "点击开启大盘提醒",
        selector: ".yy-task-sti-subs-bubble",
        direction: "right",
        right: "20px",
        event: "open_service",
      },
    },
    4: {
      "/community/hotsubjects": {
        type: "guide",
        text: function (t) {
          var e = t.rewardDesc;
          return "点赞一条社区评论，得".concat(e || "奖励");
        },
        event: "like_post",
      },
    },
    5: {
      "/information/index": {
        type: "guide",
        text: function (t) {
          var e = t.rewardDesc;
          return "阅读一篇资讯，可获得".concat(e || "奖励");
        },
      },
      "/information/subject": {
        type: "guide",
        text: function (t) {
          var e = t.rewardDesc;
          return "阅读一篇资讯，可获得".concat(e || "奖励");
        },
      },
      "/information/detail": {
        type: "countdown",
        text: function (t) {
          var e = t.rewardDesc;
          return "" + (e ? "+".concat(e) : "得奖励");
        },
      },
    },
    11: {
      "/choose/hq": {
        type: "countdown",
        duration: 8,
        text: function (t) {
          var e = t.rewardDesc;
          return "" + (e ? "+".concat(e) : "得奖励");
        },
      },
    },
    13: {
      "/account/index": {
        type: "bubble",
        text: "点击模拟炒股",
        selector: ".yy-task-account-bubble",
        delay: 0.8,
        direction: "left",
        left: "10px",
      },
    },
    14: {
      "/strategy/index": {
        type: "guide",
        text: "查看选股卡页",
        event: "browse_page",
      },
    },
    21: {
      "/community/hotsubjects": {
        type: "bubble",
        text: "点击后成功发表一个帖子",
        selector: ".yy-task-community-tiezi",
        delay: 0.8,
        direction: "right",
        right: "20px",
        event: "add_post",
        fixed: !0,
      },
    },
    22: {
      type: "share",
      target: ["/trade/stock_detail.shtml"],
      "/search": {
        type: "bubble",
        text: "搜索或查看任意一只股票",
        direction: "left",
        left: "20px",
        selector: ".yy-task-choose-index-search",
      },
      "/trade/stock_detail.shtml": {
        type: "bubble",
        text: "分享到外部，可获得奖励",
        selector: ".yy-task-share-stock",
        delay: 0.5,
        fixed: !0,
        direction: "right",
        right: "20px",
      },
    },
    24: {
      "/strategy/index": {
        type: "bubble",
        text: "点击【股票扫雷】进入任务",
        directive: "saolei_index_task",
      },
      "/strategy/risk/index": {
        type: "bubble",
        text: "点击【开启通知】完成任务",
        directive: "saolei_risk_task",
      },
    },
    25: {
      "/community/hotsubjects": {
        type: "guide",
        text: "点击并成功发表评论",
        event: "add_comment",
      },
    },
    28: {
      type: "share",
      target: ["/information/detail"],
      "/information/index": { type: "guide", text: "分享一篇资讯，可获得奖励" },
      "/information/detail": {
        type: "bubble",
        text: "分享到外部，即可获取奖励",
        selector: ".yy-task-info-share-tip",
      },
    },
    29: {
      type: "share",
      target: ["/comment/detail/detail"],
      "/account/index": {
        type: "bubble",
        text: "点击进入社区广场页面",
        selector: ".yy-task-account-bubble",
        delay: 0.8,
        direction: "left",
        left: "10px",
      },
      "/community/index": { type: "guide", text: "分享一个帖子，可获得奖励" },
      "/comment/detail/detail": {
        type: "bubble",
        text: "点击触发分享",
        selector: ".yy-task-comment-detail",
        fixed: !0,
        direction: "right",
        right: "10px",
      },
    },
    31: {
      "/account/index": {
        type: "bubble",
        text: "点击进入社区广场页面",
        selector: ".yy-task-account-bubble",
        delay: 0.8,
        direction: "left",
        left: "10px",
      },
      "/community/index": {
        type: "countdown",
        duration: 5,
        text: function (t) {
          var e = t.rewardDesc;
          return "" + (e ? "+".concat(e) : "得奖励");
        },
      },
    },
    44: {
      "/trade/stock_detail.shtml": {
        type: "bubble",
        text: "添加到自选，即可获得奖励",
        directive: "stock-detail-added",
      },
      "/trade/index_detail.shtml": {
        type: "bubble",
        text: "添加到自选，即可获得奖励",
        directive: "stock-detail-added",
      },
    },
    50: {
      type: "share",
      target: ["/information/detail"],
      "/information/index": {
        type: "guide",
        text: function (t) {
          var e = t.rewardDesc;
          return "分享资讯给好友，阅读后得".concat(e || "奖励");
        },
      },
      "/information/detail": {
        type: "bubble",
        text: function (t) {
          var e = t.rewardDesc;
          return "分享资讯给好友，阅读后得".concat(e || "奖励");
        },
        selector: ".yy-task-information-share",
        immediate: !1,
        snackbar: { text: "被阅读后得奖励", button: { text: "更多福利" } },
        linkService: !0,
      },
    },
    51: {
      type: "share",
      target: ["/trade/stock_detail.shtml", "/trade/index_detail.shtml"],
      "/hot": {
        type: "guide",
        text: function (t) {
          var e = t.rewardDesc;
          return "分享个股给好友，阅读后得".concat(e || "奖励");
        },
      },
      "/trade/stock_detail.shtml": {
        type: "bubble",
        text: function (t) {
          var e = t.rewardDesc;
          return "分享被阅读后，得".concat(e || "奖励");
        },
        selector: ".yy-task-share-stock",
        delay: 0.5,
        snackbar: { text: "被阅读后得奖励", button: { text: "更多福利" } },
        immediate: !1,
        linkService: !0,
      },
      "/trade/index_detail.shtml": {
        type: "bubble",
        text: function (t) {
          var e = t.rewardDesc;
          return "分享被阅读后，得".concat(e || "奖励");
        },
        selector: ".yy-task-share-stock",
        delay: 0.5,
        snackbar: { text: "被阅读后得奖励", button: { text: "更多福利" } },
        immediate: !1,
        linkService: !0,
      },
    },
    55: {
      "/hangqingxinzhai": {
        type: "countdown",
        duration: 8,
        text: function (t) {
          var e = t.rewardDesc;
          return "" + (e ? "+".concat(e) : "得奖励");
        },
      },
    },
    56: {
      "/choose/hq": {
        type: "countdown",
        duration: 5,
        text: function (t) {
          var e = t.rewardDesc;
          return "" + (e ? "+".concat(e) : "得奖励");
        },
      },
    },
    57: {
      "/account/index": {
        type: "bubble",
        text: "去【社区广场】完成任务",
        selector: ".yy-task-account-bubble",
        delay: 0.8,
      },
      "/community/index": {
        type: "guide",
        text: "点「关注」即可完成任务",
        event: "follow_user",
      },
      "/comment/detail/detail": { type: "bubble", text: "点击触发分享" },
    },
    58: {
      "/strategy/concept/index": {
        type: "guide",
        text: function (t) {
          var e = t.rewardDesc;
          return "点击任意题材热点阅读，得".concat(e || "奖励");
        },
      },
      "/strategy/concept/detail": {
        type: "countdown",
        duration: 5,
        text: function (t) {
          var e = t.rewardDesc;
          return "" + (e ? "+".concat(e) : "得奖励");
        },
      },
    },
    59: {
      "/strategy/risk/index": {
        type: "countdown",
        duration: 5,
        text: function (t) {
          var e = t.rewardDesc;
          return "" + (e ? "+".concat(e) : "得奖励");
        },
      },
    },
    60: {
      "/strategy/system/index": {
        type: "guide",
        text: function (t) {
          var e = t.rewardDesc;
          return "策略个股加自选，得".concat(e || "奖励");
        },
        event: "add_stock",
      },
      "/strategy/system/detail": {
        type: "guide",
        text: function (t) {
          var e = t.rewardDesc;
          return "策略个股加自选，得".concat(e || "奖励");
        },
        event: "add_stock",
      },
      "/trade/stock_detail.shtml": {
        type: "bubble",
        text: function (t) {
          var e = t.invalid,
            n = t.rewardDesc;
          return e
            ? "已经在你的自选啦，去看看其他股票"
            : "股票加自选，得".concat(n || "奖励");
        },
        selector: ".yy-task-add",
        delay: 0.6,
        event: "add_stock",
        direction: "right",
        right: "20px",
      },
    },
    65: {
      "/account/setting_subscribe": {
        type: "bubble",
        text: function (t) {
          var e = t.rewardDesc;
          return "订阅微证券早报，得".concat(e || "奖励");
        },
        selector: ".yy-task-bubble-gszb",
        delay: 0.5,
        direction: "right",
        right: "20px",
        event: "open_service",
      },
    },
    67: {
      "/information/index": {
        type: "countdown",
        duration: 10,
        text: function (t) {
          var e = t.rewardDesc;
          return "" + (e ? "+".concat(e) : "得奖励");
        },
        paused: !0,
      },
      "/information/videoDetail": {
        type: "countdown",
        text: function (t) {
          var e = t.rewardDesc;
          return "" + (e ? "+".concat(e) : "得奖励");
        },
        paused: !0,
      },
    },
  },
  y = {
    logo: "https://wzq.gtimg.com/resource/images/66005d6da694ff953b1e2e6f084f5d4a.png",
    countdown: { logo: "https://wzq.gtimg.com/image/activity/icon-count.png" },
    snackbar: {
      button: { text: "更多福利" },
      text: function (t) {
        var e = t.reward_desc,
          n = t.rewardDesc;
        return '已获得<span style="color:#ff891e">'.concat(
          e || n || "奖励",
          "</span>"
        );
      },
      duration: 3,
    },
    guide: { duration: 1.2 },
    bubble: { duration: 3, closable: !0 },
  },
  x = {
    default: y,
    1124: f(p({}, y), {
      snackbar: {
        button: { text: "返回活动" },
        text: function (t) {
          var e = t.reward_desc;
          return '已获得<span style="color:#ff891e">'.concat(
            e || "奖励",
            "</span>"
          );
        },
        duration: 5,
      },
    }),
    1134: f(p({}, y), {
      snackbar: {
        button: { text: "返回活动" },
        text: function (t) {
          var e = t.reward_desc;
          return '已获得<span style="color:#ff891e">'.concat(
            e || "奖励",
            "</span>"
          );
        },
        duration: 5,
      },
    }),
  },
  g = "activity_share.fcgi",
  w = { method: "POST" };
t = "https://wzq.tenpay.com/cgi-bin/";
var _,
  T,
  C = function () {
    return "".concat(t, "activity_task.fcgi?t=").concat(new Date().getTime());
  },
  j = new ((function () {
    function e() {
      r(this, e);
    }
    return (
      a(e, [
        {
          key: "isTaskDone",
          value: function (t) {
            return b(this, arguments, function (t) {
              var e = t.actid,
                r = t.id,
                a = t.tid;
              return n().mark(function t() {
                return n().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          v.request(
                            C(),
                            { action: "taskstatus", actid: e, id: r, tid: a },
                            w
                          )
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })();
            });
          },
        },
        {
          key: "getTicket",
          value: function (t) {
            return b(this, arguments, function (t) {
              var e = t.actid;
              return n().mark(function t() {
                return n().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          v.request(C(), { action: "taskticket", actid: e }, w)
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })();
            });
          },
        },
        {
          key: "doTask",
          value: function (t) {
            return b(this, arguments, function (t) {
              var e = t.actid,
                r = t.tid,
                a = t.id,
                s = t.task_ticket;
              return n().mark(function t() {
                return n().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          v.request(
                            C(),
                            {
                              action: "taskdone",
                              task_ticket: s,
                              actid: e,
                              tid: r,
                              id: a,
                            },
                            w
                          )
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })();
            });
          },
        },
        {
          key: "getShareCode",
          value: function (e) {
            return b(this, arguments, function (e) {
              var r = e.tid,
                a = e.actid,
                s = e.id;
              return n().mark(function e() {
                return n().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt(
                          "return",
                          v
                            .request(
                              t + g,
                              {
                                action: "query_share_code",
                                share_type: "task_".concat(r, "_").concat(a),
                                extra_info: s || "",
                              },
                              w
                            )
                            .then(function (t) {
                              return t.data;
                            })
                        );
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })();
            });
          },
        },
        {
          key: "glanceRecord",
          value: function (e) {
            return b(this, arguments, function (e) {
              var r = e.share_code,
                a = e.share_type,
                s = e._share_source_,
                i = void 0 === s ? "" : s;
              return n().mark(function e() {
                var s;
                return n().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (s = {
                            action: "share_code_info",
                            share_type: a,
                            share_code: r,
                            task_source: "appmessage" === i ? 0 : 1,
                          }),
                          e.abrupt(
                            "return",
                            ("" === i && delete s.task_source,
                            v.request(t + g, s, w))
                          )
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })();
            });
          },
        },
      ]),
      e
    );
  })())(),
  A = {},
  O = { exports: {} };
(_ = O),
  (T = O.exports),
  (function (t) {
    var n = T && !T.nodeType && T,
      r = _ && !_.nodeType && _,
      a = "object" == e(m.commonjsGlobal) && m.commonjsGlobal;
    (a.global !== a && a.window !== a && a.self !== a) || (t = a);
    var s,
      i,
      o = 2147483647,
      c = 36,
      u = /^xn--/,
      h = /[^\x20-\x7E]/,
      l = /[\x2E\u3002\uFF0E\uFF61]/g,
      d = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input",
      },
      p = Math.floor,
      f = String.fromCharCode;
    function b(t) {
      throw RangeError(d[t]);
    }
    function v(t, e) {
      for (var n = t.length, r = []; n--; ) r[n] = e(t[n]);
      return r;
    }
    function k(t, e) {
      var n = t.split("@"),
        r = "";
      return (
        n.length > 1 && ((r = n[0] + "@"), (t = n[1])),
        r + v((t = t.replace(l, ".")).split("."), e).join(".")
      );
    }
    function y(t) {
      for (var e, n, r = [], a = 0, s = t.length; a < s; )
        (e = t.charCodeAt(a++)) >= 55296 && e <= 56319 && a < s
          ? 56320 == (64512 & (n = t.charCodeAt(a++)))
            ? r.push(((1023 & e) << 10) + (1023 & n) + 65536)
            : (r.push(e), a--)
          : r.push(e);
      return r;
    }
    function x(t) {
      return v(t, function (t) {
        var e = "";
        return (
          t > 65535 &&
            ((e += f((((t -= 65536) >>> 10) & 1023) | 55296)),
            (t = 56320 | (1023 & t))),
          e + f(t)
        );
      }).join("");
    }
    function g(t, e) {
      return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
    }
    function w(t, e, n) {
      var r = 0;
      for (t = n ? p(t / 700) : t >> 1, t += p(t / e); t > 455; r += c)
        t = p(t / 35);
      return p(r + (36 * t) / (t + 38));
    }
    function C(t) {
      var e,
        n,
        r,
        a,
        s,
        i,
        u,
        h,
        l,
        d,
        f,
        m = [],
        v = t.length,
        k = 0,
        y = 128,
        g = 72;
      for ((n = t.lastIndexOf("-")) < 0 && (n = 0), r = 0; r < n; ++r)
        t.charCodeAt(r) >= 128 && b("not-basic"), m.push(t.charCodeAt(r));
      for (a = n > 0 ? n + 1 : 0; a < v; ) {
        for (
          s = k, i = 1, u = c;
          a >= v && b("invalid-input"),
            ((h =
              (f = t.charCodeAt(a++)) - 48 < 10
                ? f - 22
                : f - 65 < 26
                ? f - 65
                : f - 97 < 26
                ? f - 97
                : c) >= c ||
              h > p((o - k) / i)) &&
              b("overflow"),
            (k += h * i),
            !(h < (l = u <= g ? 1 : u >= g + 26 ? 26 : u - g));
          u += c
        )
          i > p(o / (d = c - l)) && b("overflow"), (i *= d);
        (g = w(k - s, (e = m.length + 1), 0 == s)),
          p(k / e) > o - y && b("overflow"),
          (y += p(k / e)),
          (k %= e),
          m.splice(k++, 0, y);
      }
      return x(m);
    }
    function j(t) {
      var e,
        n,
        r,
        a,
        s,
        i,
        u,
        h,
        l,
        d,
        m,
        v,
        k,
        x,
        _,
        T = [];
      for (v = (t = y(t)).length, e = 128, n = 0, s = 72, i = 0; i < v; ++i)
        (m = t[i]) < 128 && T.push(f(m));
      for (r = a = T.length, a && T.push("-"); r < v; ) {
        for (u = o, i = 0; i < v; ++i) (m = t[i]) >= e && m < u && (u = m);
        for (
          u - e > p((o - n) / (k = r + 1)) && b("overflow"),
            n += (u - e) * k,
            e = u,
            i = 0;
          i < v;
          ++i
        )
          if (((m = t[i]) < e && ++n > o && b("overflow"), m == e)) {
            for (
              h = n, l = c;
              !(h < (d = l <= s ? 1 : l >= s + 26 ? 26 : l - s));
              l += c
            )
              (_ = h - d),
                (x = c - d),
                T.push(f(g(d + (_ % x), 0))),
                (h = p(_ / x));
            T.push(f(g(h, 0))), (s = w(n, k, r == a)), (n = 0), ++r;
          }
        ++n, ++e;
      }
      return T.join("");
    }
    if (
      ((s = {
        version: "1.3.2",
        ucs2: { decode: y, encode: x },
        decode: C,
        encode: j,
        toASCII: function (t) {
          return k(t, function (t) {
            return h.test(t) ? "xn--" + j(t) : t;
          });
        },
        toUnicode: function (t) {
          return k(t, function (t) {
            return u.test(t) ? C(t.slice(4).toLowerCase()) : t;
          });
        },
      }),
      n && r)
    )
      if (_.exports == n) r.exports = s;
      else for (i in s) s.hasOwnProperty(i) && (n[i] = s[i]);
    else t.punycode = s;
  })(m.commonjsGlobal);
var D = O.exports,
  q = {};
function S(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
var P = function (t) {
  switch (e(t)) {
    case "string":
      return t;
    case "boolean":
      return t ? "true" : "false";
    case "number":
      return isFinite(t) ? t : "";
    default:
      return "";
  }
};
(q.decode = q.parse =
  function (t, e, n, r) {
    (e = e || "&"), (n = n || "=");
    var a = {};
    if ("string" != typeof t || 0 === t.length) return a;
    var s = /\+/g;
    t = t.split(e);
    var i = 1e3;
    r && "number" == typeof r.maxKeys && (i = r.maxKeys);
    var o = t.length;
    i > 0 && o > i && (o = i);
    for (var c = 0; c < o; ++c) {
      var u,
        h,
        l,
        d,
        p = t[c].replace(s, "%20"),
        f = p.indexOf(n);
      f >= 0
        ? ((u = p.substr(0, f)), (h = p.substr(f + 1)))
        : ((u = p), (h = "")),
        (l = decodeURIComponent(u)),
        (d = decodeURIComponent(h)),
        S(a, l)
          ? Array.isArray(a[l])
            ? a[l].push(d)
            : (a[l] = [a[l], d])
          : (a[l] = d);
    }
    return a;
  }),
  (q.encode = q.stringify =
    function (t, n, r, a) {
      return (
        (n = n || "&"),
        (r = r || "="),
        null === t && (t = void 0),
        "object" == e(t)
          ? Object.keys(t)
              .map(function (e) {
                var a = encodeURIComponent(P(e)) + r;
                return Array.isArray(t[e])
                  ? t[e]
                      .map(function (t) {
                        return a + encodeURIComponent(P(t));
                      })
                      .join(n)
                  : a + encodeURIComponent(P(t[e]));
              })
              .join(n)
          : a
          ? encodeURIComponent(P(a)) + r + encodeURIComponent(P(t))
          : ""
      );
    });
var I = D,
  E = function (t) {
    return "string" == typeof t;
  },
  R = function (t) {
    return "object" == e(t) && null !== t;
  },
  $ = function (t) {
    return null === t;
  },
  B = function (t) {
    return null == t;
  };
function U() {
  (this.protocol = null),
    (this.slashes = null),
    (this.auth = null),
    (this.host = null),
    (this.port = null),
    (this.hostname = null),
    (this.hash = null),
    (this.search = null),
    (this.query = null),
    (this.pathname = null),
    (this.path = null),
    (this.href = null);
}
(A.parse = Q),
  (A.resolve = function (t, e) {
    return Q(t, !1, !0).resolve(e);
  }),
  (A.resolveObject = function (t, e) {
    return t ? Q(t, !1, !0).resolveObject(e) : e;
  }),
  (A.format = function (t) {
    return (
      E(t) && (t = Q(t)),
      t instanceof U ? t.format() : U.prototype.format.call(t)
    );
  }),
  (A.Url = U);
var z = /^([a-z0-9.+-]+:)/i,
  F = /:[0-9]*$/,
  G = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
  M = ["{", "}", "|", "\\", "^", "`"].concat([
    "<",
    ">",
    '"',
    "`",
    " ",
    "\r",
    "\n",
    "\t",
  ]),
  N = ["'"].concat(M),
  L = ["%", "/", "?", ";", "#"].concat(N),
  H = ["/", "?", "#"],
  W = /^[+a-z0-9A-Z_-]{0,63}$/,
  K = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
  X = { javascript: !0, "javascript:": !0 },
  Z = { javascript: !0, "javascript:": !0 },
  J = {
    http: !0,
    https: !0,
    ftp: !0,
    gopher: !0,
    file: !0,
    "http:": !0,
    "https:": !0,
    "ftp:": !0,
    "gopher:": !0,
    "file:": !0,
  },
  V = q;
function Q(t, e, n) {
  if (t && R(t) && t instanceof U) return t;
  var r = new U();
  return r.parse(t, e, n), r;
}
(U.prototype.parse = function (t, n, r) {
  if (!E(t))
    throw new TypeError("Parameter 'url' must be a string, not " + e(t));
  var a = t.indexOf("?"),
    s = -1 !== a && a < t.indexOf("#") ? "?" : "#",
    i = t.split(s);
  i[0] = i[0].replace(/\\/g, "/");
  var o = (t = i.join(s));
  if (((o = o.trim()), !r && 1 === t.split("#").length)) {
    var c = G.exec(o);
    if (c)
      return (
        (this.path = o),
        (this.href = o),
        (this.pathname = c[1]),
        c[2]
          ? ((this.search = c[2]),
            (this.query = n
              ? V.parse(this.search.substr(1))
              : this.search.substr(1)))
          : n && ((this.search = ""), (this.query = {})),
        this
      );
  }
  var u = z.exec(o);
  if (u) {
    var h = (u = u[0]).toLowerCase();
    (this.protocol = h), (o = o.substr(u.length));
  }
  if (r || u || o.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var l = "//" === o.substr(0, 2);
    !l || (u && Z[u]) || ((o = o.substr(2)), (this.slashes = !0));
  }
  if (!Z[u] && (l || (u && !J[u]))) {
    for (var d, p, f = -1, b = 0; b < H.length; b++)
      -1 !== (m = o.indexOf(H[b])) && (-1 === f || m < f) && (f = m);
    for (
      -1 !== (p = -1 === f ? o.lastIndexOf("@") : o.lastIndexOf("@", f)) &&
        ((d = o.slice(0, p)),
        (o = o.slice(p + 1)),
        (this.auth = decodeURIComponent(d))),
        f = -1,
        b = 0;
      b < L.length;
      b++
    ) {
      var m;
      -1 !== (m = o.indexOf(L[b])) && (-1 === f || m < f) && (f = m);
    }
    -1 === f && (f = o.length),
      (this.host = o.slice(0, f)),
      (o = o.slice(f)),
      this.parseHost(),
      (this.hostname = this.hostname || "");
    var v =
      "[" === this.hostname[0] &&
      "]" === this.hostname[this.hostname.length - 1];
    if (!v)
      for (
        var k = this.hostname.split(/\./), y = ((b = 0), k.length);
        b < y;
        b++
      ) {
        var x = k[b];
        if (x && !x.match(W)) {
          for (var g = "", w = 0, _ = x.length; w < _; w++)
            x.charCodeAt(w) > 127 ? (g += "x") : (g += x[w]);
          if (!g.match(W)) {
            var T = k.slice(0, b),
              C = k.slice(b + 1),
              j = x.match(K);
            j && (T.push(j[1]), C.unshift(j[2])),
              C.length && (o = "/" + C.join(".") + o),
              (this.hostname = T.join("."));
            break;
          }
        }
      }
    this.hostname.length > 255
      ? (this.hostname = "")
      : (this.hostname = this.hostname.toLowerCase()),
      v || (this.hostname = I.toASCII(this.hostname));
    var A = this.port ? ":" + this.port : "",
      O = this.hostname || "";
    (this.host = O + A),
      (this.href += this.host),
      v &&
        ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)),
        "/" !== o[0] && (o = "/" + o));
  }
  if (!X[h])
    for (b = 0, y = N.length; b < y; b++) {
      var D = N[b];
      if (-1 !== o.indexOf(D)) {
        var q = encodeURIComponent(D);
        q === D && (q = escape(D)), (o = o.split(D).join(q));
      }
    }
  var S = o.indexOf("#");
  -1 !== S && ((this.hash = o.substr(S)), (o = o.slice(0, S)));
  var P = o.indexOf("?");
  if (
    (-1 !== P
      ? ((this.search = o.substr(P)),
        (this.query = o.substr(P + 1)),
        n && (this.query = V.parse(this.query)),
        (o = o.slice(0, P)))
      : n && ((this.search = ""), (this.query = {})),
    o && (this.pathname = o),
    J[h] && this.hostname && !this.pathname && (this.pathname = "/"),
    this.pathname || this.search)
  ) {
    A = this.pathname || "";
    var R = this.search || "";
    this.path = A + R;
  }
  return (this.href = this.format()), this;
}),
  (U.prototype.format = function () {
    var t = this.auth || "";
    t && ((t = (t = encodeURIComponent(t)).replace(/%3A/i, ":")), (t += "@"));
    var e = this.protocol || "",
      n = this.pathname || "",
      r = this.hash || "",
      a = !1,
      s = "";
    this.host
      ? (a = t + this.host)
      : this.hostname &&
        ((a =
          t +
          (-1 === this.hostname.indexOf(":")
            ? this.hostname
            : "[" + this.hostname + "]")),
        this.port && (a += ":" + this.port)),
      this.query &&
        R(this.query) &&
        Object.keys(this.query).length &&
        (s = V.stringify(this.query));
    var i = this.search || (s && "?" + s) || "";
    return (
      e && ":" !== e.substr(-1) && (e += ":"),
      this.slashes || ((!e || J[e]) && !1 !== a)
        ? ((a = "//" + (a || "")), n && "/" !== n.charAt(0) && (n = "/" + n))
        : a || (a = ""),
      r && "#" !== r.charAt(0) && (r = "#" + r),
      i && "?" !== i.charAt(0) && (i = "?" + i),
      e +
        a +
        (n = n.replace(/[?#]/g, function (t) {
          return encodeURIComponent(t);
        })) +
        (i = i.replace("#", "%23")) +
        r
    );
  }),
  (U.prototype.resolve = function (t) {
    return this.resolveObject(Q(t, !1, !0)).format();
  }),
  (U.prototype.resolveObject = function (t) {
    if (E(t)) {
      var e = new U();
      e.parse(t, !1, !0), (t = e);
    }
    for (var n = new U(), r = Object.keys(this), a = 0; a < r.length; a++) {
      var s = r[a];
      n[s] = this[s];
    }
    if (((n.hash = t.hash), "" === t.href)) return (n.href = n.format()), n;
    if (t.slashes && !t.protocol) {
      for (var i = Object.keys(t), o = 0; o < i.length; o++) {
        var c = i[o];
        "protocol" !== c && (n[c] = t[c]);
      }
      return (
        J[n.protocol] &&
          n.hostname &&
          !n.pathname &&
          (n.path = n.pathname = "/"),
        (n.href = n.format()),
        n
      );
    }
    if (t.protocol && t.protocol !== n.protocol) {
      if (!J[t.protocol]) {
        for (var u = Object.keys(t), h = 0; h < u.length; h++) {
          var l = u[h];
          n[l] = t[l];
        }
        return (n.href = n.format()), n;
      }
      if (((n.protocol = t.protocol), t.host || Z[t.protocol]))
        n.pathname = t.pathname;
      else {
        for (
          var d = (t.pathname || "").split("/");
          d.length && !(t.host = d.shift());

        );
        t.host || (t.host = ""),
          t.hostname || (t.hostname = ""),
          "" !== d[0] && d.unshift(""),
          d.length < 2 && d.unshift(""),
          (n.pathname = d.join("/"));
      }
      if (
        ((n.search = t.search),
        (n.query = t.query),
        (n.host = t.host || ""),
        (n.auth = t.auth),
        (n.hostname = t.hostname || t.host),
        (n.port = t.port),
        n.pathname || n.search)
      ) {
        var p = n.pathname || "",
          f = n.search || "";
        n.path = p + f;
      }
      return (n.slashes = n.slashes || t.slashes), (n.href = n.format()), n;
    }
    var b = n.pathname && "/" === n.pathname.charAt(0),
      m = t.host || (t.pathname && "/" === t.pathname.charAt(0)),
      v = m || b || (n.host && t.pathname),
      k = v,
      y = (n.pathname && n.pathname.split("/")) || [],
      x =
        ((d = (t.pathname && t.pathname.split("/")) || []),
        n.protocol && !J[n.protocol]);
    if (
      (x &&
        ((n.hostname = ""),
        (n.port = null),
        n.host && ("" === y[0] ? (y[0] = n.host) : y.unshift(n.host)),
        (n.host = ""),
        t.protocol &&
          ((t.hostname = null),
          (t.port = null),
          t.host && ("" === d[0] ? (d[0] = t.host) : d.unshift(t.host)),
          (t.host = null)),
        (v = v && ("" === d[0] || "" === y[0]))),
      m)
    )
      (n.host = t.host || "" === t.host ? t.host : n.host),
        (n.hostname =
          t.hostname || "" === t.hostname ? t.hostname : n.hostname),
        (n.search = t.search),
        (n.query = t.query),
        (y = d);
    else if (d.length)
      y || (y = []),
        y.pop(),
        (y = y.concat(d)),
        (n.search = t.search),
        (n.query = t.query);
    else if (!B(t.search))
      return (
        x &&
          ((n.hostname = n.host = y.shift()),
          (C = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) &&
            ((n.auth = C.shift()), (n.host = n.hostname = C.shift()))),
        (n.search = t.search),
        (n.query = t.query),
        ($(n.pathname) && $(n.search)) ||
          (n.path =
            (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
        (n.href = n.format()),
        n
      );
    if (!y.length)
      return (
        (n.pathname = null),
        n.search ? (n.path = "/" + n.search) : (n.path = null),
        (n.href = n.format()),
        n
      );
    for (
      var g = y.slice(-1)[0],
        w =
          ((n.host || t.host || y.length > 1) && ("." === g || ".." === g)) ||
          "" === g,
        _ = 0,
        T = y.length;
      T >= 0;
      T--
    )
      "." === (g = y[T])
        ? y.splice(T, 1)
        : ".." === g
        ? (y.splice(T, 1), _++)
        : _ && (y.splice(T, 1), _--);
    if (!v && !k) for (; _--; _) y.unshift("..");
    !v || "" === y[0] || (y[0] && "/" === y[0].charAt(0)) || y.unshift(""),
      w && "/" !== y.join("/").substr(-1) && y.push("");
    var C,
      j = "" === y[0] || (y[0] && "/" === y[0].charAt(0));
    return (
      x &&
        ((n.hostname = n.host = j ? "" : y.length ? y.shift() : ""),
        (C = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) &&
          ((n.auth = C.shift()), (n.host = n.hostname = C.shift()))),
      (v = v || (n.host && y.length)) && !j && y.unshift(""),
      y.length
        ? (n.pathname = y.join("/"))
        : ((n.pathname = null), (n.path = null)),
      ($(n.pathname) && $(n.search)) ||
        (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
      (n.auth = t.auth || n.auth),
      (n.slashes = n.slashes || t.slashes),
      (n.href = n.format()),
      n
    );
  }),
  (U.prototype.parseHost = function () {
    var t = this.host,
      e = F.exec(t);
    e &&
      (":" !== (e = e[0]) && (this.port = e.substr(1)),
      (t = t.substr(0, t.length - e.length))),
      t && (this.hostname = t);
  });
var Y = function (t, e, n) {
    t.has(e) && t.delete(e), n && t.append(e, n);
  },
  tt = function (t, e) {
    var n = t.match(/(\?|#[^\?]*\?*|)(.*)/);
    if (!n) return t;
    var r = new URLSearchParams(n[2]);
    if (Array.isArray(e))
      e.forEach(function (t) {
        Y(r, t);
      });
    else {
      var a = Object.keys(e);
      Array.isArray(a) &&
        a.forEach(function (t) {
          Y(r, t, e[t]);
        });
    }
    return "".concat(n[1]).concat(r.toString());
  },
  et = function (t) {
    return b(
      exports,
      null,
      n().mark(function e() {
        var r, a, s, i, o;
        return n().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (r = t.tid),
                  (a = t.id),
                  (s =
                    (null == t ? void 0 : t.act_id) ||
                    (null == t ? void 0 : t.actid)),
                  (e.next = 4),
                  j.getShareCode({ tid: r, actid: s, id: a })
                );
              case 4:
                return (
                  (i = e.sent),
                  (o = i.share_code),
                  e.abrupt("return", function (t) {
                    var e = t.url,
                      n = t.addParams,
                      a = t.rmParams;
                    return (function (t) {
                      var e = t.url,
                        n = t.rmParams,
                        r = void 0 === n ? [] : n,
                        a = t.addParams;
                      if (e)
                        return (
                          (e = A.parse(e)),
                          r.length &&
                            (e.search && (e.search = tt(e.search, r)),
                            e.hash && (e.hash = tt(e.hash, r))),
                          a &&
                            (e.hash
                              ? (e.hash = tt(e.hash, a))
                              : (e.search = tt(e.search, a))),
                          A.format(e)
                        );
                    })({
                      url: e,
                      addParams: p(
                        {
                          share_code: o,
                          share_type: "task_".concat(r, "_").concat(s),
                        },
                        n
                      ),
                      rmParams: a,
                    });
                  })
                );
              case 7:
              case "end":
                return e.stop();
            }
        }, e);
      })
    );
  },
  nt = {};
Object.defineProperty(nt, "__esModule", { value: !0 });
var rt = (nt.default = function () {
    var t = m.wx$1.getSystemInfoSync(),
      e = t.platform,
      n = t.version,
      r = t.system;
    return {
      env: { IS_PCWEIXIN: /(windows|mac)/i.test(e) },
      platformVersion: n,
      os: r,
    };
  })().env.IS_PCWEIXIN,
  at = [
    "add_stock",
    "add_post",
    "add_comment",
    "like_post",
    "follow_user",
    "open_service",
    "browse_page",
    "guess_change",
  ],
  st = {
    components: {
      CountDown: function () {
        return "../../../stockfe-act-ui/h5/count-down/index.js";
      },
      Guide: function () {
        return "../../../stockfe-act-ui/h5/guide/index.js";
      },
      Toast: function () {
        return "../../../stockfe-act-ui/h5/toast/index.js";
      },
      Bubble: function () {
        return "../../../stockfe-act-ui/mp/bubble/index.js";
      },
      Snackbar: function () {
        return "../../../stockfe-act-ui/h5/snackbar/index.js";
      },
    },
    props: ["task", "event", "report", "request", "sdk"],
    data: function () {
      return {
        mpTask: "",
        taskAward: null,
        countdown: {},
        snackbar: {},
        guide: {},
        toast: {},
        bubble: {},
        isMina: !0,
        isPCMina: rt,
        banner: {},
        appName: "",
      };
    },
    options: { styleIsolation: "shared" },
    computed: {
      curTask: function () {
        return this.mpTask;
      },
    },
    created: function () {
      (this.options = {}),
        (this.uiConf = {}),
        (this.done = !1),
        (this.renderTimer = null),
        (this.snackbarTimer = null),
        (this.timeout = null),
        (this.loadedConfs = !1),
        (this.taskOptionsArr = null),
        (this.allConfs = k),
        (this.fristRender = !0),
        (this.act_plan = "");
    },
    mounted: function () {
      return b(
        this,
        null,
        n().mark(function t() {
          var e,
            r,
            a = this;
          return n().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      this.initPath(),
                      this.initParams(),
                      (t.next = 4),
                      this.loadConfs()
                    );
                  case 4:
                    setTimeout(function () {
                      a.initShareConfig();
                    }, 800),
                      null == (e = this.busEvent) || e.$off("user.behavior"),
                      null == (r = this.busEvent) ||
                        r.$on("user.behavior", function (t) {
                          return b(
                            a,
                            null,
                            n().mark(function e() {
                              var r,
                                a,
                                s,
                                i,
                                o,
                                c,
                                u,
                                h,
                                l,
                                d,
                                p,
                                f,
                                b,
                                m,
                                v,
                                k,
                                y,
                                x = this;
                              return n().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (t) {
                                          e.next = 2;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 2:
                                        (i = t.type),
                                          (o = t.event),
                                          (c = t.state),
                                          t.path,
                                          (u = t.paused),
                                          (h = t.data),
                                          (e.t0 = i),
                                          (e.next =
                                            "show" === e.t0
                                              ? 6
                                              : "click" === e.t0
                                              ? 8
                                              : "share" === e.t0
                                              ? 24
                                              : "browse" === e.t0
                                              ? 45
                                              : "info" === e.t0
                                              ? 59
                                              : "http" === e.t0
                                              ? 61
                                              : 75);
                                        break;
                                      case 6:
                                        return (
                                          (this.countdown = {}),
                                          (this.snackbar = {}),
                                          (this.guide = {}),
                                          (this.bubble = {}),
                                          this.initPath(),
                                          this.initParams(),
                                          e.abrupt("break", 75)
                                        );
                                      case 8:
                                        if ("watch_vedio" !== o) {
                                          e.next = 12;
                                          break;
                                        }
                                        (this.countdown.paused = u),
                                          (e.next = 23);
                                        break;
                                      case 12:
                                        if (
                                          !at.includes(o) ||
                                          !this.options ||
                                          o !== this.options.event
                                        ) {
                                          e.next = 23;
                                          break;
                                        }
                                        return (
                                          (e.prev = 13),
                                          (e.next = 16),
                                          this.taskDone(this.curTask)
                                        );
                                      case 16:
                                        (l = e.sent),
                                          this.hide(),
                                          this.$nextTick(function () {
                                            x.showSnackbar(l);
                                          }),
                                          (e.next = 23);
                                        break;
                                      case 20:
                                        (e.prev = 20),
                                          (e.t1 = e.catch(13)),
                                          this.busEvent.$emit(
                                            "yy.task.error",
                                            e.t1
                                          ),
                                          this.hide();
                                      case 23:
                                        return e.abrupt("break", 75);
                                      case 24:
                                        if (
                                          ((d = this.curTask.tid),
                                          !(
                                            (p = this.allConfs[d]) &&
                                            "share" === p.type &&
                                            p.target &&
                                            p.target.includes(this.path)
                                          ))
                                        ) {
                                          e.next = 44;
                                          break;
                                        }
                                        if (
                                          ((e.prev = 26),
                                          (f = null),
                                          !this.checkDirectAward())
                                        ) {
                                          e.next = 34;
                                          break;
                                        }
                                        return (
                                          (e.next = 31),
                                          this.taskDone(this.curTask)
                                        );
                                      case 31:
                                        (e.t2 = e.sent), (e.next = 35);
                                        break;
                                      case 34:
                                        e.t2 = {};
                                      case 35:
                                        (f = e.t2),
                                          this.hide(),
                                          this.act_plan &&
                                            this.closeBanner("taskSuccess"),
                                          (null == (r = p[this.path])
                                            ? void 0
                                            : r.snackbar) &&
                                            this.showSnackbar(f),
                                          (e.next = 44);
                                        break;
                                      case 41:
                                        (e.prev = 41),
                                          (e.t3 = e.catch(26)),
                                          this.busEvent.$emit(
                                            "yy.task.error",
                                            e.t3
                                          );
                                      case 44:
                                        return e.abrupt("break", 75);
                                      case 45:
                                        if ("timeend" !== o) {
                                          e.next = 58;
                                          break;
                                        }
                                        return (
                                          (e.prev = 46),
                                          (e.next = 49),
                                          this.taskDone(this.curTask)
                                        );
                                      case 49:
                                        (b = e.sent),
                                          (this.taskAward =
                                            b.reward_desc || ""),
                                          (m = this.curTask.tid),
                                          (v = this.allConfs[m]) &&
                                            v[this.path] &&
                                            (null == (a = v[this.path])
                                              ? void 0
                                              : a.toast_text) &&
                                            ((this.guide = {
                                              text:
                                                null == (s = v[this.path])
                                                  ? void 0
                                                  : s.toast_text,
                                              duration: 3,
                                              visible: !0,
                                              guideid: "guide--".concat(m),
                                            }),
                                            this.hideCountdown()),
                                          (e.next = 58);
                                        break;
                                      case 55:
                                        (e.prev = 55),
                                          (e.t4 = e.catch(46)),
                                          this.busEvent.$emit(
                                            "yy.task.error",
                                            e.t4
                                          );
                                      case 58:
                                        return e.abrupt("break", 75);
                                      case 59:
                                        return (
                                          "add_stock" === o &&
                                            this.options &&
                                            (this.options.invalid = c),
                                          e.abrupt("break", 75)
                                        );
                                      case 61:
                                        if (this.options) {
                                          e.next = 63;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 63:
                                        if (
                                          !(k = this.options.fn) ||
                                          "function" != typeof k ||
                                          !k(h)
                                        ) {
                                          e.next = 75;
                                          break;
                                        }
                                        return (
                                          (e.prev = 65),
                                          (e.next = 68),
                                          this.taskDone(this.curTask)
                                        );
                                      case 68:
                                        (y = e.sent),
                                          this.hide(),
                                          this.$nextTick(function () {
                                            x.showSnackbar(y);
                                          }),
                                          (e.next = 75);
                                        break;
                                      case 72:
                                        (e.prev = 72),
                                          (e.t5 = e.catch(65)),
                                          this.busEvent.$emit(
                                            "yy.task.error",
                                            e.t5
                                          );
                                      case 75:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [
                                  [13, 20],
                                  [26, 41],
                                  [46, 55],
                                  [65, 72],
                                ]
                              );
                            })
                          );
                        });
                  case 7:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this
          );
        })
      );
    },
    watch: {
      curTask: {
        immediate: !0,
        deep: !0,
        handler: function (t) {
          return b(
            this,
            null,
            n().mark(function e() {
              var r, a;
              return n().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!t) {
                          e.next = 13;
                          break;
                        }
                        return this.initPath(), (e.next = 4), this.loadConfs();
                      case 4:
                        if (
                          ((this.options = this.getOption()),
                          this.act_plan && this.updateOption(),
                          (null == (r = this.curTask) ? void 0 : r.actid) &&
                            (this.uiConf = x[this.curTask.actid] || x.default),
                          !this.options)
                        ) {
                          e.next = 12;
                          break;
                        }
                        (a = this.options.delay),
                          (this.done = !1),
                          this.updateRender(a),
                          (e.next = 13);
                        break;
                      case 12:
                        this.hide();
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          );
        },
      },
    },
    methods: {
      initPath: function () {
        var t = getCurrentPages(),
          e = t[t.length - 1] || {};
        this.path = e.route;
      },
      initParams: function () {
        var t = this;
        (this.appName = getApp().globalData.APPNAME),
          (this.busEvent = {
            $on: function (e, n) {
              getApp().globalData.Event.on(e, t, n);
            },
            $emit: function (t, e) {
              getApp().globalData.Event.emit(t, e);
            },
            $off: function (t) {
              var e = getApp().globalData.Event.events;
              e && e[t] && (e[t] = []);
            },
          });
        var e = getCurrentPages(),
          n = e[e.length - 1] || {},
          r = n.options || {},
          a = r.act_actid,
          s = r.act_id,
          i = r.act_tid,
          o = r.act_url;
        a && i
          ? ((this.mpTask = {
              actid: a,
              tid: i,
              id: s,
              url: o,
              done: !1,
              visible: !0,
            }),
            (getApp().globalData.taskConfig = this.mpTask))
          : (this.mpTask = getApp().globalData.taskConfig || "");
        var c = n.options || {},
          u = c.share_code,
          h = c.share_type;
        if (u && h && h.includes("task_")) {
          ("wzq" !== this.appName &&
            [
              "pages/newsCon/newsDetail/main",
              "pages/quote/quote",
              "pages/quote/quote_zs",
            ].includes(this.path)) ||
            j.glanceRecord(n.options);
          var l = h.split("_");
          v.reportMta("yy.activity.share_task_brow", {
            actid: l && l[2],
            tid: l && l[1],
          });
        }
      },
      initShareConfig: function () {
        var t,
          e,
          n,
          r = null == (t = this.curTask) ? void 0 : t.tid,
          a = this.allConfs[r];
        a &&
          a[this.path] &&
          (null == (e = a[this.path]) ? void 0 : e.share_title) &&
          (null == (n = a[this.path]) ? void 0 : n.immediate) &&
          this.busEvent.$emit("yy.task.shareConfig", a[this.path]);
      },
      loadConfs: function () {
        return b(
          this,
          null,
          n().mark(function t() {
            var e, r;
            return n().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        this.loadedConfs && Promise.resolve(),
                        (t.next = 3),
                        m.Wuji.get({
                          appid: "act",
                          schemaid: "yy_tasks",
                          filter: encodeURIComponent("platform='mp'"),
                          size: "total",
                        })
                      );
                    case 3:
                      (e = t.sent), (r = {});
                      try {
                        e.data.forEach(function (t) {
                          var e = JSON.parse(t.confs);
                          r[+t.task_id] = e;
                        }),
                          (this.allConfs = r);
                      } catch (t) {
                        this.allConfs = k;
                      }
                      this.loadedConfs = !0;
                    case 7:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      checkDirectAward: function () {
        return !1 !== this.options.immediate;
      },
      render: function () {
        return b(
          this,
          null,
          n().mark(function t() {
            var e,
              r,
              a,
              s,
              i,
              o,
              c,
              u,
              h,
              l,
              d,
              b,
              m,
              v,
              k,
              y,
              x,
              g,
              w,
              _,
              T,
              C,
              A = this;
            return n().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!this.curTask || !this.curTask.done) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return");
                    case 2:
                      return (
                        (e = this.options),
                        (r = e.type),
                        (a = e.duration),
                        (s = e.selector),
                        (i = e.invalid),
                        (o = e.paused),
                        (c = e.direction),
                        (u = e.linkService),
                        e.fixed,
                        (h = this.uiConf),
                        (l = h.logo),
                        (d = h.countdown),
                        (b = h.bubble),
                        (m = b.closable),
                        (v = b.duration),
                        (k = h.guide),
                        (t.next = 20),
                        j.isTaskDone(this.curTask).then(function (t) {
                          return t.data;
                        })
                      );
                    case 20:
                      if (
                        ((y = t.sent),
                        (x = y.done),
                        (g = y.reward_desc),
                        (w = this.options),
                        (_ = w.text),
                        w.bubbleTarget,
                        this.hide(r),
                        (_ = this.makeText(_, { invalid: i, rewardDesc: g })),
                        1 == +x)
                      ) {
                        t.next = 42;
                        break;
                      }
                      (t.t0 =
                        (this.options.resetData &&
                          (getApp().globalData.taskConfig = f(
                            p({}, this.mpTask),
                            { done: !0 }
                          )),
                        r)),
                        (t.next =
                          "guide" === t.t0
                            ? 28
                            : "bubble" === t.t0
                            ? 30
                            : "countdown" === t.t0
                            ? 37
                            : "banner" === t.t0
                            ? 39
                            : 41);
                      break;
                    case 28:
                      return (
                        (this.guide = {
                          text: _,
                          logo: l,
                          duration: k.duration,
                          visible: !0,
                        }),
                        t.abrupt("break", 42)
                      );
                    case 30:
                      if (
                        ((this.bubble = {
                          selector: s,
                          text: _,
                          logo: l,
                          fixed: !0,
                          direction: c,
                          allowClose: m,
                          closable: m,
                          bubbleid: "yy-bubble-task".concat(this.curTask.tid),
                          visible: !0,
                          duration: v,
                        }),
                        !u)
                      ) {
                        t.next = 36;
                        break;
                      }
                      return (t.next = 33), j.getShareCode(this.curTask);
                    case 33:
                      (T = t.sent),
                        (C = T.share_code),
                        this.busEvent.$emit("yy.task.update_share_link", {
                          type: "update_share_link",
                          scode: C,
                          taskid: this.curTask.tid,
                          actid: this.curTask.actid,
                          taskType: "task",
                        });
                    case 36:
                      return t.abrupt("break", 42);
                    case 37:
                      return (
                        (this.countdown = {
                          duration: a || 8,
                          text: _,
                          paused: o,
                          logo: d.logo,
                          visible: !0,
                        }),
                        t.abrupt("break", 42)
                      );
                    case 39:
                      return (
                        (this.banner = { text: _, duration: a, visible: !0 }),
                        u && this.updateShareLink(),
                        this.infobannerTimer &&
                          clearTimeout(this.infobannerTimer),
                        (this.infobannerTimer = setTimeout(function () {
                          A.hideBanner(), A.closeBanner();
                        }, 1e3 * a || 0)),
                        t.abrupt("break", 42)
                      );
                    case 41:
                      this.hide();
                    case 42:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      taskDone: function (t) {
        return b(this, arguments, function (t) {
          var e = this,
            r = t.actid,
            a = t.tid,
            s = t.id;
          return n().mark(function t() {
            var i, o;
            return n().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (a && r) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    if (!e.done) {
                      t.next = 4;
                      break;
                    }
                    return t.abrupt("return");
                  case 4:
                    return (t.next = 6), j.getTicket({ actid: r });
                  case 6:
                    return (
                      (i = t.sent),
                      (o = i.data.task_ticket),
                      t.abrupt(
                        "return",
                        j
                          .doTask({ actid: r, tid: a, id: s, task_ticket: o })
                          .then(function (t) {
                            var n = t.data,
                              r = n.retcode,
                              a = n.retmsg;
                            return 0 != +r
                              ? Promise.reject({ retmsg: a, retcode: r })
                              : ((e.done = !0), t.data);
                          })
                      )
                    );
                  case 9:
                  case "end":
                    return t.stop();
                }
            }, t);
          })();
        });
      },
      makeText: function (t, e) {
        e.invalid;
        var n = e.rewardDesc,
          r = void 0 === n ? "奖励" : n;
        return t.replace("${rewardDesc}", r);
      },
      getOption: function () {
        var t = this.allConfs[this.curTask.tid];
        return t ? t[this.path] : null;
      },
      handleCountdownClik: function () {
        this.curTask.url && this.locationTo();
      },
      textFormat: function (t, e) {
        try {
          var n = t.text;
          /^\//.test(e) &&
            (null == n ? void 0 : n.indexOf("return")) >= 0 &&
            (t.text = new Function("obj", t.text));
        } catch (n) {
          t.text = "得奖励";
        }
      },
      updateRender: function (t) {
        var e = this;
        this.renderTimer &&
          (clearTimeout(this.renderTimer), (this.renderTimer = null)),
          (this.renderTimer = setTimeout(function () {
            e.render(),
              v.reportMta("yy.activity.task_brow", {
                actid: e.curTask.actid,
                tid: e.curTask.tid,
                id: e.curTask.id,
              });
          }, 1e3 * t || 0));
      },
      updateOption: function () {
        (this.taskOptionsArr = this.options[this.act_plan] || []),
          this.fristRender ||
            (this.taskOptionsArr = this.taskOptionsArr.filter(function (t) {
              return !t.once;
            })),
          (this.fristRender = !1);
        var t = this.taskOptionsArr.shift();
        t && (this.options = t);
      },
      handelCountdownTimeout: function () {
        this.busEvent.$emit("user.behavior", {
          type: "browse",
          event: "timeend",
        });
      },
      handleBubbleClose: function () {
        this.hideBubble();
      },
      handleToastTimeout: function () {
        this.hideToast();
      },
      handleGuideTimeout: function () {
        this.hideGuide();
      },
      handleSnackbarClose: function () {
        this.hideSnackbar();
      },
      handleSnackbarClik: function () {
        this.curTask.url ? this.locationTo() : this.hideSnackbar();
      },
      locationTo: function () {
        m.wx$1.navigateTo({ url: decodeURIComponent(this.curTask.url) });
      },
      showSnackbar: function (t) {
        var e = this;
        if (t) {
          var n = this.options,
            r = n.snackbar,
            a = n.logo,
            s = n.invalid,
            i = this.uiConf.snackbar,
            o = (null == r ? void 0 : r.text) ? r.text : i.text,
            c = t.reward_desc;
          (this.snackbar = {
            logo: a || this.uiConf.logo,
            hideBtn: (null == r ? void 0 : r.hideBtn) || !1,
            button: i.button || (null == r ? void 0 : r.button),
            text: this.makeText(o, { invalid: s, rewardDesc: c }),
            visible: !0,
          }),
            this.snackbarTimer && clearTimeout(this.snackbarTimer),
            (this.snackbarTimer = setTimeout(function () {
              e.hideSnackbar();
            }, 1e3 * ((null == r ? void 0 : r.duration) || i.duration) || 0));
        }
      },
      hide: function (t) {
        var e = this;
        ["countdown", "toast", "guide", "bubble", "snackbar", "banner"].forEach(
          function (n) {
            (t && n === t) ||
              e[
                "hide".concat(
                  n.replace(/^\S/, function (t) {
                    return t.toUpperCase();
                  })
                )
              ]();
          }
        );
      },
      hideSnackbar: function () {
        this.snackbar.visible = !1;
      },
      hideCountdown: function () {
        this.countdown.visible = !1;
      },
      hideToast: function () {
        this.toast.visible = !1;
      },
      hideGuide: function () {
        this.guide.visible = !1;
      },
      hideBubble: function () {
        this.bubble.visible = !1;
      },
      hideBanner: function () {
        this.banner.visible = !1;
      },
      closeBanner: function (t) {
        this.infobannerTimer && clearTimeout(this.infobannerTimer),
          this.taskOptionsArr.length &&
            ((this.options = this.taskOptionsArr.shift()),
            "taskSuccess" !== t && this.updateRender(this.options.delay)),
          this.hideBanner();
      },
      updateShareLink: function () {
        return b(
          this,
          null,
          n().mark(function t() {
            var e;
            return n().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), et(this.curTask);
                    case 2:
                      (e = t.sent),
                        this.busEvent.$emit(
                          "yy.task.update_share_link",
                          f(p({}, this.options), {
                            lnkUpdateService: e,
                            type: "update_share_link",
                            path: this.path,
                            taskid: this.curTask.tid,
                            actid: this.curTask.actid,
                            taskType: "task",
                          })
                        );
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
    },
    destroyed: function () {
      var t;
      null == (t = this.busEvent) || t.$off("user.behavior");
    },
  };
Array ||
  (
    m.resolveComponent("CountDown") +
    m.resolveComponent("Bubble") +
    m.resolveComponent("Guide") +
    m.resolveComponent("Snackbar")
  )();
var it = m._export_sfc(st, [
  [
    "render",
    function (t, e, n, r, a, s) {
      return m.e(
        { a: a.countdown && a.countdown.visible },
        a.countdown && a.countdown.visible
          ? {
              b: m.w(
                function (t, e, n) {
                  return {
                    a: m.t(
                      a.taskAward
                        ? a.taskAward
                        : "浏览".concat(t.remaining, "s")
                    ),
                    b: n,
                    c: e,
                  };
                },
                { name: "slot-text", path: "b", vueId: "d6158106-0" }
              ),
              c: a.taskAward ? "" : 1,
              d: m.t(a.taskAward ? "返回查看" : a.countdown.text || "得奖励"),
              e: m.o(s.handleCountdownClik, 2132),
              f: m.o(s.handelCountdownTimeout, 2133),
              g: m.p({
                duration: a.countdown.duration,
                paused: a.countdown.paused,
                logo: a.countdown.logo,
              }),
            }
          : {},
        { h: a.bubble && a.bubble.visible },
        a.bubble && a.bubble.visible
          ? {
              i: m.t(a.bubble.text),
              j: m.o(s.handleBubbleClose, 2134),
              k: m.p({ config: a.bubble }),
            }
          : {},
        { l: a.guide && a.guide.visible },
        a.guide && a.guide.visible
          ? {
              m: m.t(a.guide.text),
              n: m.n(a.guide.guideid),
              o: m.o(s.handleGuideTimeout, 2135),
              p: m.p({ duration: a.guide.duration }),
            }
          : {},
        { q: a.snackbar && a.snackbar.visible },
        a.snackbar && a.snackbar.visible
          ? m.e(
              { r: a.snackbar.text },
              a.snackbar.text ? { s: a.snackbar.text } : {},
              {
                t: m.t(a.snackbar.button.text),
                v: m.o(s.handleSnackbarClose, 2136),
                w: m.o(s.handleSnackbarClik, 2137),
                x: m.p({
                  logo: a.snackbar.logo,
                  hideBtn: a.snackbar.hideBtn,
                  btnText: a.snackbar.button.text,
                }),
              }
            )
          : {},
        { y: a.banner && a.banner.visible },
        a.banner && a.banner.visible
          ? m.e(
              { z: a.banner.text },
              a.banner.text ? { A: a.banner.text } : {},
              { B: m.o(s.closeBanner, 2138), C: m.p({ hideBtn: !0 }) }
            )
          : {},
        {
          D: a.isMina ? 1 : "",
          E: a.isPCMina ? 1 : "",
          F: "wzq" === a.appName ? 1 : "",
        }
      );
    },
  ],
  ["__scopeId", "data-v-d6158106"],
]);
wx.createComponent(it);
