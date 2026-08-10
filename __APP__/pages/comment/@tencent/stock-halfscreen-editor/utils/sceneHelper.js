var e = require("../../../../../@babel/runtime/helpers/typeof"),
  t = require("../../../../../@babel/runtime/helpers/toConsumableArray");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var r = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../../../@babel/runtime/helpers/createClass"),
  i = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  s = Object.defineProperty,
  o = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  f = function (e, t, r) {
    return t in e
      ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  p = function (e, t) {
    for (var r in t || (t = {})) u.call(t, r) && f(e, r, t[r]);
    if (c) {
      var n,
        s = i(c(t));
      try {
        for (s.s(); !(n = s.n()).done; ) {
          r = n.value;
          l.call(t, r) && f(e, r, t[r]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  g = function (e, t) {
    return o(e, a(t));
  },
  y = require("../../../../../common/vendor.js"),
  d = require("./logger.js"),
  h = d.createLogger(),
  m = String.fromCharCode(30),
  v = String.fromCharCode(28),
  x = String.fromCharCode(28),
  b = "text",
  T = "stock",
  k = "topic",
  S = "at",
  I = (function () {
    function e() {
      r(this, e), (this.fragments = []);
    }
    return (
      n(e, [
        {
          key: "calculateInsertPosition",
          value: function (e) {
            for (var t = 0, r = 0; r < this.fragments.length; r++) {
              var n = this.fragments[r],
                i = n.type === b ? n.text.length : n.displayText.length;
              if (e < t + i) return { index: r, splitOffset: e - t };
              t += i;
            }
            return { index: this.fragments.length, splitOffset: 0 };
          },
        },
        {
          key: "insertText",
          value: function (e, t) {
            if (!e) return t;
            var r = this.calculateInsertPosition(t).index;
            return (
              this.fragments.splice(r, 0, { type: b, text: e }), t + e.length
            );
          },
        },
        {
          key: "insertFragment",
          value: function (e, t, r) {
            var n = this.calculateInsertPosition(r),
              i = n.index,
              s = n.splitOffset;
            if (s > 0 && i < this.fragments.length) {
              var o = this.fragments[i];
              if (o.type === b) {
                var a,
                  c = o.text.substring(0, s),
                  u = o.text.substring(s),
                  l = [];
                return (
                  c && l.push({ type: b, text: c }),
                  l.push(g(p({}, e), { displayText: t })),
                  u && l.push({ type: b, text: u }),
                  (a = this.fragments).splice.apply(a, [i, 1].concat(l)),
                  r + t.length
                );
              }
            }
            return (
              this.fragments.splice(i, 0, g(p({}, e), { displayText: t })),
              r + t.length
            );
          },
        },
        {
          key: "insertStock",
          value: function (e, t, r) {
            return this.insertFragment(
              { type: T, symbol: e, name: t },
              "#".concat(t, "#"),
              r
            );
          },
        },
        {
          key: "insertTopic",
          value: function (e, t, r) {
            return this.insertFragment(
              { type: k, topicId: e, topic: t },
              "#".concat(t, "#"),
              r
            );
          },
        },
        {
          key: "insertAt",
          value: function (e, t, r) {
            return this.insertFragment(
              { type: S, userId: e, userName: t },
              "@".concat(t, " "),
              r
            );
          },
        },
        {
          key: "updateFromDisplayText",
          value: function (e) {
            var t = this;
            if (
              ("string" != typeof e && (e = ""), this.getDisplayText() !== e)
            ) {
              var r = new Map(),
                n = 0;
              this.fragments.forEach(function (e, t) {
                if (e.type !== b) {
                  var i = e.displayText;
                  r.set(i, { index: t, fragment: e, startPos: n }),
                    (n += i.length);
                } else n += e.text.length;
              });
              var i = [];
              r.forEach(function (t, r) {
                var n = t.index;
                t.fragment;
                e.includes(r) || i.push(n);
              }),
                i
                  .sort(function (e, t) {
                    return t - e;
                  })
                  .forEach(function (e) {
                    t.fragments.splice(e, 1);
                  }),
                this.updateTextFragments(e);
            }
          },
        },
        {
          key: "updateTextFragments",
          value: function (e) {
            var t = this,
              r = [],
              n = new Set();
            this.fragments.forEach(function (t, i) {
              if (t.type !== b) {
                for (
                  var s = 0, o = -1;
                  s < e.length &&
                  -1 !== (o = e.indexOf(t.displayText, s)) &&
                  n.has(o);

                )
                  s = o + 1;
                -1 === o ||
                  n.has(o) ||
                  (r.push({ pos: o, length: t.displayText.length, index: i }),
                  n.add(o));
              }
            }),
              r.sort(function (e, t) {
                return e.pos - t.pos;
              });
            var i = [],
              s = 0;
            if (
              (r.forEach(function (r) {
                var n = r.pos,
                  o = r.length,
                  a = r.index;
                if (n > s) {
                  var c = e.substring(s, n);
                  c && i.push({ type: b, text: c });
                }
                i.push(t.fragments[a]), (s = n + o);
              }),
              s < e.length)
            ) {
              var o = e.substring(s);
              o && i.push({ type: b, text: o });
            }
            this.fragments = i;
          },
        },
        {
          key: "getDisplayText",
          value: function () {
            return this.fragments
              .map(function (e) {
                return e.type === b ? e.text : e.displayText;
              })
              .join("");
          },
        },
        {
          key: "getSubmitContent",
          value: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = [];
            return {
              processedText: this.fragments
                .map(function (r) {
                  switch (r.type) {
                    case b:
                      return r.text;
                    case T:
                      return ""
                        .concat(m, "[")
                        .concat(r.symbol, " ")
                        .concat(r.name, "]")
                        .concat(m);
                    case k:
                      return ""
                        .concat(v, "<4,")
                        .concat(r.topicId, ":")
                        .concat(r.topic, ">")
                        .concat(v);
                    case S:
                      return e
                        ? (t.push({
                            type: "user",
                            title: "@".concat(r.userName),
                            data: { user_id: r.userId },
                          }),
                          "@".concat(r.userName, ""))
                        : ""
                            .concat(x, "<2,")
                            .concat(r.userId, ":")
                            .concat(r.userName, ">")
                            .concat(x);
                    default:
                      return "";
                  }
                })
                .join(""),
              atUserLinks: t,
            };
          },
        },
        {
          key: "clear",
          value: function () {
            this.fragments = [];
          },
        },
        {
          key: "isEmpty",
          value: function () {
            return (
              0 === this.fragments.length ||
              (1 === this.fragments.length &&
                this.fragments[0].type === b &&
                !this.fragments[0].text.trim())
            );
          },
        },
        {
          key: "getStocks",
          value: function () {
            return this.fragments
              .filter(function (e) {
                return e.type === T;
              })
              .map(function (e) {
                return {
                  symbol: e.symbol,
                  name: e.name,
                  displayText: e.displayText,
                };
              });
          },
        },
        {
          key: "getTopics",
          value: function () {
            return this.fragments
              .filter(function (e) {
                return e.type === k;
              })
              .map(function (e) {
                return {
                  topicId: e.topicId,
                  topic: e.topic,
                  displayText: e.displayText,
                };
              });
          },
        },
        {
          key: "getAtUsers",
          value: function () {
            return this.fragments
              .filter(function (e) {
                return e.type === S;
              })
              .map(function (e) {
                return {
                  userId: e.userId,
                  userName: e.userName,
                  displayText: e.displayText,
                };
              });
          },
        },
      ]),
      e
    );
  })(),
  _ = d.createLogger(),
  C = String.fromCharCode(28);
function E(e) {
  return "@".concat(e, " ");
}
function P(e) {
  if (!e) return [];
  var r = new RegExp("".concat(C, "<2,([^>]+)>").concat(C), "g");
  return t(e.matchAll(r))
    .map(function (e) {
      var t = e[0],
        r = e[1];
      if (!r) return null;
      var n = r.indexOf(":");
      if (-1 === n) return null;
      var i = r.substring(0, n),
        s = r.substring(n + 1);
      return i && s ? { userId: i, userName: s, protocol: t } : null;
    })
    .filter(function (e) {
      return null !== e;
    });
}
var N = {
    extractAtUsers: P,
    replaceDisplayWithProtocol: function (e, t) {
      if (!e || !t) return e;
      var r = e;
      return (
        P(t).forEach(function (e) {
          var t = e.userName,
            n = e.protocol;
          if (t) {
            var i = E(t).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
              s = new RegExp(i, "g");
            r = r.replace(s, n);
          }
        }),
        r
      );
    },
    isAtSymbolInput: function (e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      if (!e) return !1;
      if ("insertText" === e.inputType && "@" === e.data) return !0;
      if (e.detail) {
        var r = e.detail.value || "",
          n = e.detail.cursor;
        if (r.length > t.length && void 0 !== n && n > 0 && "@" === r[n - 1])
          return !0;
      }
      return !1;
    },
    removeAtSymbolBeforeCursor: function (e, t) {
      if (!e || t <= 0) return { text: e, cursor: t };
      var r = e.substring(0, t),
        n = e.substring(t);
      return r.endsWith("@")
        ? { text: r.slice(0, -1) + n, cursor: t - 1 }
        : { text: e, cursor: t };
    },
    insertAtUser: function (e) {
      var t = e.replyText,
        r = void 0 === t ? "" : t,
        n = e.replyPrefix,
        i = void 0 === n ? "" : n,
        s = e.userId,
        o = e.userName,
        a = e.cursor;
      if (!s || !o) return { replyText: r, replyPrefix: i, cursor: a };
      var c = (function (e, t) {
          return "".concat(C, "<2,").concat(e, ":").concat(t, ">").concat(C);
        })(s, o),
        u = E(o);
      if (null == a)
        return {
          replyText: "".concat(r).concat(u),
          replyPrefix: "".concat(i).concat(c),
          cursor: (r + u).length,
        };
      var l = r.substring(0, a);
      return {
        replyText: l + u + r.substring(a),
        replyPrefix: i + c,
        cursor: (l + u).length,
      };
    },
    mergeAtUserLinks: function (e) {
      var r =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      if (Array.isArray(e) && 0 !== e.length) {
        var n = [];
        if (r)
          try {
            n = JSON.parse(r);
          } catch (e) {
            n = [];
          }
        var i = [].concat(t(e), t(n));
        return JSON.stringify(i);
      }
    },
  },
  O = "news",
  A = "stock",
  w = "topic",
  F = "event",
  q = "watchlist",
  D = "normal",
  j = {
    getSceneParams: function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = "",
        r = "";
      return e.yb_scene && e.yb_scene_id
        ? { yb_scene: e.yb_scene, yb_scene_id: e.yb_scene_id }
        : ("news" === e.type
            ? ((t = O), (r = e.id || ""))
            : (function () {
                var e,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                return (
                  "stock" === t.post_scene ||
                  ("timeline" === t.type &&
                    (null == (e = t.symbol) ? void 0 : e.length) > 0)
                );
              })(e)
            ? ((t = A), (r = e.symbol || ""))
            : (function () {
                var e,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                return (
                  "topic" === t.post_scene ||
                  ("timeline" === t.type &&
                    (null == (e = t.topicId) ? void 0 : e.length) > 0)
                );
              })(e)
            ? ((t = w), (r = e.topicId || ""))
            : "eventdetail" === e.type
            ? ((t = F), (r = e.map_id || ""))
            : "stockbasket" === e.type
            ? ((t = q), (r = e.map_id || ""))
            : "square" === e.post_scene
            ? ((t = D), (r = ""))
            : "video" === e.type && ((t = O), (r = e.id || "")),
          { yb_scene: t, yb_scene_id: r });
    },
    getSceneParamsScene: function () {
      return { yb_scene: "" };
    },
  };
(exports.atUserHelper = N),
  (exports.sceneHelper = j),
  (exports.useContentManager = function (e, t, r) {
    r.emit;
    var n = new I(),
      i = y.ref("");
    y.watch(i, function (e) {
      _.log("显示文本变化:", e), n.updateFromDisplayText(e);
    });
    var s = null,
      o = null,
      a = function () {
        if (s) {
          var e = s();
          return _.log("获取光标位置:", e), e;
        }
        return _.log("无法获取光标位置，默认返回末尾"), i.value.length;
      },
      c = function (e) {
        y.nextTick$1(function () {
          o && (o(e), _.log("恢复光标位置:", e));
        });
      };
    return {
      displayText: i,
      insertStock: function (e, t) {
        _.log("插入股票:", e, t);
        var r = a(),
          s = n.insertStock(e, t, r);
        (i.value = n.getDisplayText()), c(s);
      },
      insertTopic: function (e, t) {
        _.log("插入话题:", e, t);
        var r = a(),
          s = n.insertTopic(e, t, r);
        (i.value = n.getDisplayText()), c(s);
      },
      insertAt: function (e, t, r) {
        _.log("插入@用户:", e, t, "指定光标位置:", r);
        var s = void 0 !== r ? r : a();
        _.log("使用光标位置:", s);
        var o = n.insertAt(e, t, s);
        (i.value = n.getDisplayText()), c(o);
      },
      insertText: function (e) {
        _.log("插入文本:", e);
        var t = a(),
          r = n.insertText(e, t);
        (i.value = n.getDisplayText()), c(r);
      },
      removeAtBeforeCursor: function () {
        _.log("尝试删除光标前的@符号");
        var e = a();
        if (e <= 0)
          return (
            _.log("光标位置无效，无法删除"), { success: !1, newCursorPos: e }
          );
        var t = i.value;
        if ("@" === t[e - 1]) {
          _.log("检测到@符号，位置:", e - 1);
          var r = t.slice(0, e - 1) + t.slice(e);
          (i.value = r), n.updateFromDisplayText(r);
          var s = e - 1;
          return (
            _.log("成功删除@符号，新光标位置:", s),
            { success: !0, newCursorPos: s }
          );
        }
        return (
          _.log("光标前不是@符号，无需删除"), { success: !1, newCursorPos: e }
        );
      },
      getSubmitContent: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = n.getSubmitContent(e);
        return _.log("获取提交内容:", t), t;
      },
      clear: function () {
        _.log("清空内容"), n.clear(), (i.value = "");
      },
      setCursorMethods: function (e, t) {
        (s = e), (o = t);
      },
      getFirstStockId: function () {
        var e = n.getStocks();
        return _.log("获取股票列表:", e), e.length > 0 ? e[0].symbol : null;
      },
      getFirstTopicId: function () {
        var e = n.getTopics();
        return _.log("获取话题ID:", e), e.length > 0 ? e[0].topicId : null;
      },
      contentManager: n,
    };
  }),
  (exports.useFriendsSelect = function (t, r, n, i, s) {
    n.emit;
    var o = function (e) {
      !(function (e) {
        h.log("handleSelect", e);
        try {
          e && i(e.user_id || e.openid || "", e.user_name || e.nickName || ""),
            s && s();
        } catch (e) {
          h.error("handleSelect error", e);
        }
      })(e);
    };
    return (
      y.onMounted(function () {
        y.StockBridge.ENV === y.EnvTypeEnum.SHY_NATIVE
          ? shy.subscribeNotification("community-stockfriendsPicked", "", o, !1)
          : y.StockBridge.busOn("community-stockfriendsPicked", o);
      }),
      y.onUnmounted(function () {
        y.StockBridge.ENV === y.EnvTypeEnum.SHY_NATIVE ||
          y.StockBridge.busOff("community-stockfriendsPicked", o);
      }),
      {
        onClickAt: function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = t && "object" == e(t) ? t : {};
          y.StockBridge.ENV === y.EnvTypeEnum.SHY_NATIVE
            ? shy.navigateTo({
                url: "qqstock://stockhybrid/com.tencent.shy.editor_select_pages/friend?".concat(
                  encodeURIComponent(JSON.stringify(r))
                ),
                type: "present",
              })
            : y.StockRouter.routeTo({ name: "stockFriends", query: p({}, r) });
        },
      }
    );
  });
