var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  s = function (e, s, n) {
    return new Promise(function (o, t) {
      var r = function (e) {
          try {
            a(n.next(e));
          } catch (e) {
            t(e);
          }
        },
        i = function (e) {
          try {
            a(n.throw(e));
          } catch (e) {
            t(e);
          }
        },
        a = function (e) {
          return e.done ? o(e.value) : Promise.resolve(e.value).then(r, i);
        };
      a((n = n.apply(e, s)).next());
    });
  },
  n = require("../../../../../common/vendor.js"),
  o = require("../../../compare-versions/lib/esm/index.js"),
  t = require("../../../throttle-debounce/esm/index.js"),
  r = require("../hooks/useThemeHooks.js"),
  i = require("../hooks/useDrawerHooks.js"),
  a = require("../utils/StockBridgeWrapper.js"),
  u = {
    components: {
      SessionHistoryItem: function () {
        return "./SessionHistoryItem.js";
      },
    },
    props: {
      curSession: { type: String, default: "" },
      stickSessions: { type: Array, default: [] },
      wxClawSessions: { type: Array, default: [] },
      todaySessions: { type: Array, default: [] },
      weekSessions: { type: Array, default: [] },
      monthSessions: { type: Array, default: [] },
      otherSessions: { type: Array, default: [] },
      hasMore: { type: Boolean, default: !1 },
      clawBotStatus: { type: Number, default: 0 },
      shouldShowSubscriptContent: { type: Boolean, default: !1 },
    },
    setup: function (u, c) {
      var l = this,
        p = c.emit,
        f = n.computed(function () {
          return 1 === u.clawBotStatus;
        }),
        h = n.getCurrentInstance().proxy || n.getCurrentInstance(),
        d = r.useThemeHooks(u).drawerHistoryStickyIcon,
        S = n.ref(!1),
        w = n.ref(!1);
      n.onBeforeMount(function () {
        return s(
          l,
          null,
          e().mark(function n() {
            return e().wrap(function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (n.next = 2),
                      s(
                        l,
                        null,
                        e().mark(function s() {
                          var n, o, t;
                          return e().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      (o =
                                        (null ==
                                        (n = null == h ? void 0 : h.$parent)
                                          ? void 0
                                          : n.userInfo) || {}),
                                      (e.next = 4),
                                      i.requestClawBotStatus(o)
                                    );
                                  case 4:
                                    (t = e.sent),
                                      (S.value = (function (e) {
                                        var s =
                                          (null == e ? void 0 : e.data) ||
                                          e ||
                                          {};
                                        return (
                                          "number" == typeof s.status &&
                                          1 === s.status
                                        );
                                      })(t)),
                                      (e.next = 10);
                                    break;
                                  case 8:
                                    (e.prev = 8), (e.t0 = e.catch(0));
                                  case 10:
                                    return (
                                      (e.prev = 10),
                                      (w.value = !0),
                                      e.finish(10)
                                    );
                                  case 13:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            s,
                            null,
                            [[0, 8, 10, 13]]
                          );
                        })
                      )
                    );
                  case 2:
                  case "end":
                    return n.stop();
                }
            }, n);
          })
        );
      });
      var g = n.computed(function () {
          return u.shouldShowSubscriptContent && w.value && !S.value;
        }),
        m = n.computed(function () {
          return u.shouldShowSubscriptContent && w.value && S.value
            ? "已绑定"
            : "绑定到微信";
        }),
        v = n.ref("-1"),
        y = n.ref("-1"),
        x = function () {
          (v.value = "-1"), (y.value = "-1"), p("longPress", null, null);
        },
        k = 0,
        b = n.ref(""),
        P = n.ref(null),
        C = n.ref(null),
        I = n.ref(null),
        _ = n.ref(null),
        B = n.ref(null),
        j = n.ref(null),
        q = n.ref(null),
        W = t.throttle(50, function () {
          var e,
            s,
            o,
            t,
            r,
            i,
            a = [];
          (null == (e = u.stickSessions) ? void 0 : e.length) && a.push("置顶"),
            (null == (s = u.wxClawSessions) ? void 0 : s.length) &&
              a.push("微信对话"),
            (null == (o = u.todaySessions) ? void 0 : o.length) &&
              a.push("今天"),
            (null == (t = u.weekSessions) ? void 0 : t.length) &&
              a.push("本周"),
            (null == (r = u.monthSessions) ? void 0 : r.length) &&
              a.push("本月"),
            (null == (i = u.otherSessions) ? void 0 : i.length) &&
              a.push("更早"),
            n.wx$1
              .createSelectorQuery()
              .in(h)
              .select("#btn-news-session")
              .boundingClientRect()
              .selectAll(".sesstion-title-container")
              .boundingClientRect()
              .exec(function (e) {
                var s;
                if (e) {
                  for (
                    var n = 1.56 * (null == (s = e[0]) ? void 0 : s.height),
                      o = e[1],
                      t = "",
                      r = null,
                      i = o.length - 1;
                    i >= 0;
                    i--
                  ) {
                    var u = o[i];
                    if (r && r.top > n && r.top < n + r.height) {
                      t = "";
                      break;
                    }
                    if (u.top < n && !t) {
                      t = a[i];
                      break;
                    }
                    r = u;
                  }
                  if (t !== b.value) {
                    var c = !t && b.value && o[0].top < k,
                      l = t && !b.value && o[0].top > k,
                      f = "";
                    c ? (f = "quit") : l && (f = "enter"),
                      p("changeStickyTitle", t, f);
                  }
                  (b.value = t), (k = o[0].top);
                }
              });
        }),
        O = function () {
          try {
            var e = n.wx$1.getSystemInfoSync();
            return (null == e ? void 0 : e.version) || "";
          } catch (e) {
            return "";
          }
          return "";
        };
      return {
        isBound: f,
        pressPos: v,
        longPressPos: y,
        beforeLongPress: function (e) {
          v.value = e;
        },
        longPress: function (o, t) {
          return s(
            l,
            null,
            e().mark(function s() {
              var r;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        (function (e) {
                          try {
                            return new Promise(function (s) {
                              n.wx$1
                                .createSelectorQuery()
                                .in(h)
                                .select("#sessionItem_".concat(e))
                                .boundingClientRect(function (e) {
                                  var n = {
                                    x: e.left,
                                    y: e.top,
                                    width: e.width || e.right - e.left,
                                    height: e.height || e.bottom - e.top,
                                  };
                                  s(n);
                                })
                                .exec();
                            });
                          } catch (e) {}
                        })(t)
                      );
                    case 2:
                      (r = e.sent), p("longPress", o, r), (y.value = t);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, s);
            })
          );
        },
        drawerHistoryStickyIcon: d,
        sessionOperate: function (n, o) {
          return s(
            l,
            null,
            e().mark(function s() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      n &&
                        "tap" === o &&
                        ("-1" === y.value && p("sessionOperate", n, "tap"),
                        x());
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, s);
            })
          );
        },
        refNewSession: P,
        refStick: C,
        refWxClaw: I,
        refToday: _,
        refWeek: B,
        refMonth: j,
        refOther: q,
        handleScroll: function (e) {
          x(), W(e);
        },
        resetPress: x,
        jumpSessionCreate: function () {
          p("jumpSessionCreate"), n.wx$1.vibrateShort({ type: "medium" });
        },
        bindingWxClaw: function () {
          if (g.value) {
            var e = O();
            "" === e || o.compare(e, "8.0.70", ">=")
              ? p("bindingWxClaw")
              : a.StockBridge.toast(
                  "当前微信版本暂不支持绑定 clawbot，请升级至最新版本"
                );
          } else p("unbindingWxClaw");
        },
        getWechatVersion: O,
        shouldShowWxClawEntry: g,
        wxClawBindText: m,
      };
    },
  };
Array || n.resolveComponent("session-history-item")();
var c = n._export_sfc(u, [
  [
    "render",
    function (e, s, o, t, r, i) {
      return n.e(
        { a: o.shouldShowSubscriptContent },
        o.shouldShowSubscriptContent
          ? {
              b: n.t(t.wxClawBindText),
              c: n.o(function () {
                return t.bindingWxClaw && t.bindingWxClaw.apply(t, arguments);
              }, 5405),
            }
          : {},
        {
          d: n.o(function () {
            return (
              t.jumpSessionCreate && t.jumpSessionCreate.apply(t, arguments)
            );
          }, 5406),
          e: o.stickSessions && o.stickSessions.length,
        },
        o.stickSessions && o.stickSessions.length
          ? {
              f: t.drawerHistoryStickyIcon,
              g: n.f(o.stickSessions, function (e, s, r) {
                return {
                  a: "sessionItem_stick".concat(s),
                  b: s,
                  c: n.o(t.sessionOperate, 5407, s),
                  d: n.o(t.beforeLongPress, 5408, s),
                  e: n.o(t.longPress, 5409, s),
                  f: "0e4c868a-0-" + r,
                  g: n.p({
                    id: "sessionItem_stick".concat(s),
                    item: e,
                    active: e.sessionid == o.curSession,
                    "item-pos": "stick".concat(s),
                    "long-press-pos": t.longPressPos,
                    "press-pos": t.pressPos,
                  }),
                };
              }),
            }
          : {},
        { h: o.wxClawSessions && o.wxClawSessions.length && t.isBound },
        o.wxClawSessions && o.wxClawSessions.length && t.isBound
          ? {
              i: n.f(o.wxClawSessions, function (e, s, r) {
                return {
                  a: "sessionItem_wxclaw".concat(s),
                  b: s,
                  c: n.o(t.sessionOperate, 5410, s),
                  d: "0e4c868a-1-" + r,
                  e: n.p({
                    id: "sessionItem_wxclaw".concat(s),
                    item: e,
                    active: e.sessionid == o.curSession,
                    "item-pos": "wxclaw".concat(s),
                    "long-press-pos": t.longPressPos,
                    "press-pos": t.pressPos,
                  }),
                };
              }),
            }
          : {},
        { j: o.todaySessions && o.todaySessions.length },
        o.todaySessions && o.todaySessions.length
          ? {
              k: n.f(o.todaySessions, function (e, s, r) {
                return {
                  a: "sessionItem_today".concat(s),
                  b: s,
                  c: n.o(t.sessionOperate, 5411, s),
                  d: n.o(t.beforeLongPress, 5412, s),
                  e: n.o(t.longPress, 5413, s),
                  f: "0e4c868a-2-" + r,
                  g: n.p({
                    id: "sessionItem_today".concat(s),
                    item: e,
                    active: e.sessionid == o.curSession,
                    "item-pos": "today".concat(s),
                    "long-press-pos": t.longPressPos,
                    "press-pos": t.pressPos,
                  }),
                };
              }),
            }
          : {},
        { l: o.weekSessions && o.weekSessions.length },
        o.weekSessions && o.weekSessions.length
          ? {
              m: n.f(o.weekSessions, function (e, s, r) {
                return {
                  a: "sessionItem_week".concat(s),
                  b: s,
                  c: n.o(t.sessionOperate, 5414, s),
                  d: n.o(t.beforeLongPress, 5415, s),
                  e: n.o(t.longPress, 5416, s),
                  f: "0e4c868a-3-" + r,
                  g: n.p({
                    id: "sessionItem_week".concat(s),
                    item: e,
                    active: e.sessionid == o.curSession,
                    "item-pos": "week".concat(s),
                    "long-press-pos": t.longPressPos,
                    "press-pos": t.pressPos,
                  }),
                };
              }),
            }
          : {},
        { n: o.monthSessions && o.monthSessions.length },
        o.monthSessions && o.monthSessions.length
          ? {
              o: n.f(o.monthSessions, function (e, s, r) {
                return {
                  a: "sessionItem_month".concat(s),
                  b: s,
                  c: n.o(t.sessionOperate, 5417, s),
                  d: n.o(t.beforeLongPress, 5418, s),
                  e: n.o(t.longPress, 5419, s),
                  f: "0e4c868a-4-" + r,
                  g: n.p({
                    id: "sessionItem_month".concat(s),
                    item: e,
                    active: e.sessionid == o.curSession,
                    "item-pos": "month".concat(s),
                    "long-press-pos": t.longPressPos,
                    "press-pos": t.pressPos,
                  }),
                };
              }),
            }
          : {},
        { p: o.otherSessions && o.otherSessions.length },
        o.otherSessions && o.otherSessions.length
          ? {
              q: n.f(o.otherSessions, function (e, s, r) {
                return {
                  a: "sessionItem_other".concat(s),
                  b: s,
                  c: n.o(t.sessionOperate, 5420, s),
                  d: n.o(t.beforeLongPress, 5421, s),
                  e: n.o(t.longPress, 5422, s),
                  f: "0e4c868a-5-" + r,
                  g: n.p({
                    id: "sessionItem_other".concat(s),
                    item: e,
                    active: e.sessionid == o.curSession,
                    "item-pos": "other".concat(s),
                    "long-press-pos": t.longPressPos,
                    "press-pos": t.pressPos,
                  }),
                };
              }),
            }
          : {},
        { r: n.t(o.hasMore ? "加载中..." : "没有更多啦") }
      );
    },
  ],
  ["__scopeId", "data-v-0e4c868a"],
]);
wx.createComponent(c);
