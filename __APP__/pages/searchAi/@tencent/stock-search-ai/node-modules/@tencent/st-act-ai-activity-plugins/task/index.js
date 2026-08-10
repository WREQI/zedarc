require("../../../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../../../@babel/runtime/helpers/typeof");
require("../../../../../../../../@babel/runtime/helpers/Objectvalues");
var r = require("../../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  s = Object.defineProperty,
  i = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  h = function (e, t, n) {
    return t in e
      ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  l = function (e, t) {
    for (var n in t || (t = {})) c.call(t, n) && h(e, n, t[n]);
    if (o) {
      var s,
        i = r(o(t));
      try {
        for (i.s(); !(s = i.n()).done; ) {
          n = s.value;
          u.call(t, n) && h(e, n, t[n]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  f = function (e, t) {
    return i(e, a(t));
  },
  d = function (e, t, n) {
    return new Promise(function (r, s) {
      var i = function (e) {
          try {
            o(n.next(e));
          } catch (e) {
            s(e);
          }
        },
        a = function (e) {
          try {
            o(n.throw(e));
          } catch (e) {
            s(e);
          }
        },
        o = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(i, a);
        };
      o((n = n.apply(e, t)).next());
    });
  },
  m = require("../../../../../../../../common/vendor.js"),
  p = require("../service/platform/index.js"),
  k = require("../service/api/index.js"),
  v =
    "mp" === m.StockBridge.ENV
      ? { IS_MINA: !0, IS_LCT_XCX: !1 }
      : p.detect().env,
  g = v.IS_ZXG,
  b = (v.IS_LITE_MODE, { AUTO: "auto", GUIDE: "guide", COMPLETE: "complete" }),
  _ = {
    components: {
      Guide: function () {
        return "../components/taskGuide/index.js";
      },
      SnackBar: function () {
        return "../components/taskSnackbar/index.js";
      },
      BackPop: function () {
        return "../components/backPop/index.js";
      },
    },
    props: {
      mode: {
        type: String,
        default: b.AUTO,
        validator: function (e) {
          return Object.values(b).includes(e);
        },
      },
      customEvents: {
        type: Array,
        default: function () {
          return [];
        },
        validator: function (e) {
          return (
            Array.isArray(e) &&
            e.every(function (e) {
              return (
                "string" == typeof e ||
                ("object" == n(e) &&
                  e.eventName &&
                  "string" == typeof e.eventName)
              );
            })
          );
        },
      },
    },
    data: function () {
      return {
        showTask: !1,
        currentTaskConfig: null,
        snackbar: null,
        guide: null,
        showBackPop: !1,
        taskConfig: {},
        shareConfig: {},
        wujiinit: !1,
        curPage: "",
        onAnswerFinishCallback: null,
        customEventCallbacks: [],
        currentInviteCode: null,
      };
    },
    mounted: function () {
      this.mode === b.GUIDE
        ? this.setupCustomEventListeners()
        : this.setupEventListeners();
    },
    beforeDestroy: function () {
      this.mode === b.GUIDE
        ? this.removeCustomEventListeners()
        : this.removeEventListeners();
    },
    watch: {
      $route: {
        immediate: !0,
        deep: !0,
        handler: function (e) {
          return d(
            this,
            null,
            t().mark(function n() {
              var r, s, i, a, o, c, u, h, d, m, k, v;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((this.curPage = null == e ? void 0 : e.path),
                          g &&
                            !this.curPage &&
                            ("undefined" != typeof window &&
                            window.__moduleName__
                              ? (this.curPage = window.__moduleName__)
                              : "undefined" != typeof window &&
                                (null == (r = window.location)
                                  ? void 0
                                  : r.hash)
                              ? (s = window.location.hash.replace(
                                  /^#\/?/,
                                  ""
                                )) &&
                                "/" !== s &&
                                (this.curPage = "/".concat(s.split("?")[0]))
                              : (this.curPage = "/default")),
                          "/" === this.curPage)
                        ) {
                          t.next = 16;
                          break;
                        }
                        return (t.next = 4), this.initWujiConfig();
                      case 4:
                        if (g) {
                          t.next = 15;
                          break;
                        }
                        if (
                          ((i = this.checkUsedFlag()),
                          (a = this.getUrlParam("tid")),
                          (o = getCurrentPages()),
                          (c = o[o.length - 1] || {}),
                          (this.curPage = c.route),
                          !a)
                        ) {
                          t.next = 15;
                          break;
                        }
                        return (
                          (u = this.getTaskItem(a)),
                          (h = this.getUrlParam("invite_code")),
                          (t.next = 13),
                          p.platform.getSession("yy_act_ai_task_complete")
                        );
                      case 13:
                        (d = t.sent) && d.tid === a
                          ? ((m = f(l({}, d), {
                              completed: !1,
                              invite_code: h || d.invite_code,
                            })),
                            p.platform.setSession("yy_act_ai_task_complete", m))
                          : (i ||
                              ((k = l(
                                { tid: a },
                                (null == u ? void 0 : u.task_router) || {}
                              )),
                              p.platform.setSession("yy_act_ai_task", k)),
                            (v = {
                              tid: a,
                              searchfrom:
                                (null == u ? void 0 : u.searchfrom) || null,
                              invite_code: h || null,
                              completed: !1,
                            }),
                            p.platform.setSession(
                              "yy_act_ai_task_complete",
                              v
                            ));
                      case 15:
                        this.handleTaskCache();
                      case 16:
                      case "end":
                        return t.stop();
                    }
                },
                n,
                this
              );
            })
          );
        },
      },
    },
    methods: {
      getUrlParam: function (e) {
        var t = getCurrentPages();
        return ((t[t.length - 1] || {}).options || {})[e];
      },
      checkUsedFlag: function () {
        return "1" === this.getUrlParam("used_flag");
      },
      notifyTaskShow: function (e) {
        (this.showTask = e),
          this.$emit("growth-ai-task-show", { show: e }),
          m.StockBridge.busEmit("growth-ai-task-show", { show: e });
      },
      initWujiConfig: function () {
        return d(
          this,
          null,
          t().mark(function e() {
            var n, r, s, i, a, o, c;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!this.wujiinit) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (
                        (e.next = 4),
                        m.Wuji.get({
                          appid: "act",
                          schemaid: "yy_activity_page_config",
                          filter: encodeURIComponent("act_id=thirteen_year"),
                        })
                      );
                    case 4:
                      if (((n = e.sent), (r = n.data), 200 == +n.code)) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt("return");
                    case 9:
                      (this.wujiinit = !0),
                        (s = (r && r[0]) || {}),
                        (i = s.task_conf),
                        (a = void 0 === i ? "{}" : i),
                        (o = s.share_conf),
                        (c = void 0 === o ? "{}" : o),
                        (this.taskConfig = JSON.parse(a) || {}),
                        (this.shareConfig = JSON.parse(c) || {});
                    case 12:
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
      handleTaskCache: function () {
        return d(
          this,
          null,
          t().mark(function n() {
            var r, s, i, a, o, c, u, h, f, d, m, k, v, g, _, w;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2), p.platform.getSession("yy_act_ai_task")
                      );
                    case 2:
                      return (
                        (r = t.sent),
                        (t.next = 5),
                        p.platform.getSession("yy_act_ai_task_complete")
                      );
                    case 5:
                      (s = t.sent),
                        (i = null),
                        (a = null),
                        r && r.tid
                          ? ((i = r), (a = "main"))
                          : s && s.tid && ((i = s), (a = "complete")),
                        i && i.tid
                          ? ((c = (o = i || {}).tid),
                            (u = o.searchfrom),
                            (h = o.shownPaths),
                            (f = void 0 === h ? [] : h),
                            (d = {}),
                            Object.keys(o).forEach(function (e) {
                              "tid" !== e &&
                                "searchfrom" !== e &&
                                "shownPaths" !== e &&
                                (d[e] = o[e]);
                            }),
                            (this.currentTaskConfig = d),
                            (m = this.curPage),
                            (k = d[m]),
                            (v = f.includes(m)),
                            (this.showTask = k && !v),
                            this.mode !== b.COMPLETE && this.render(),
                            this.showTask &&
                              ((g = [].concat(e(f), [m])),
                              (_ = Object.keys(d)),
                              (w = l(
                                { tid: c, searchfrom: u, shownPaths: g },
                                d
                              )),
                              "main" === a
                                ? p.platform.setSession("yy_act_ai_task", w)
                                : "complete" === a &&
                                  p.platform.setSession(
                                    "yy_act_ai_task_complete",
                                    w
                                  ),
                              g.length >= _.length &&
                                "main" === a &&
                                p.platform.removeSession("yy_act_ai_task")))
                          : ((this.showTask = !1),
                            (this.currentTaskConfig = null)),
                        this.notifyTaskShow(this.showTask);
                    case 9:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this
            );
          })
        );
      },
      setupEventListeners: function () {
        var e = this;
        (this.onAnswerFinishCallback = function (n) {
          return d(
            e,
            null,
            t().mark(function e() {
              return t().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        this.currentTaskConfig && this.completeTheTask(n);
                      case 1:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          );
        }),
          m.StockBridge.busOn(
            "common-ai-answer-finish",
            this.onAnswerFinishCallback
          );
      },
      removeEventListeners: function () {
        this.onAnswerFinishCallback &&
          (m.StockBridge.busOff(
            "common-ai-answer-finish",
            this.onAnswerFinishCallback
          ),
          (this.onAnswerFinishCallback = null));
      },
      setupCustomEventListeners: function () {
        var e = this;
        this.customEvents.forEach(function (t, r) {
          var s, i;
          "string" == typeof t
            ? ((s = t),
              (i = function (t) {
                e.$emit("custom-event-triggered", {
                  eventName: s,
                  data: t,
                  index: r,
                }),
                  e.currentTaskConfig && e.completeTheTask(t);
              }))
            : "object" == n(t) &&
              t.eventName &&
              ((s = t.eventName),
              (i = function (n) {
                e.$emit("custom-event-triggered", {
                  eventName: s,
                  data: n,
                  index: r,
                  config: t,
                }),
                  t.callback && "function" == typeof t.callback
                    ? t.callback(n)
                    : e.currentTaskConfig && e.completeTheTask(n);
              })),
            s &&
              i &&
              (e.customEventCallbacks.push({ eventName: s, callback: i }),
              m.StockBridge.busOn(s, i));
        });
      },
      removeCustomEventListeners: function () {
        this.customEventCallbacks.forEach(function (e) {
          var t = e.eventName,
            n = e.callback;
          m.StockBridge.busOff(t, n);
        }),
          (this.customEventCallbacks = []);
      },
      getTaskItem: function (e) {
        var t = this.taskConfig.task_h5;
        return (
          ((t = this.taskConfig.task_mp) &&
            t.find(function (t) {
              return t.tid == e;
            })) ||
          null
        );
      },
      render: function () {
        if (this.showTask) {
          var e = this.curPage,
            t = this.currentTaskConfig && this.currentTaskConfig[e];
          if (t)
            switch (t.type) {
              case "guide":
                this.guide = t;
                break;
              case "snackbar":
                this.snackbar = t;
            }
        }
      },
      completeTheTask: function (e) {
        return d(
          this,
          null,
          t().mark(function n() {
            var r, s, i, a, o, c, u, h, d, v, g, _, w;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        p.platform.getSession("yy_act_ai_task_complete")
                      );
                    case 2:
                      if (
                        ((r = t.sent),
                        (i = (s = r || {}).tid),
                        (a = s.searchfrom),
                        (o = s.completed),
                        (c = s.invite_code),
                        (this.currentInviteCode = c),
                        (u = !1),
                        a &&
                          (null == e ? void 0 : e.searchfrom) &&
                          (u = a
                            .split(",")
                            .map(function (e) {
                              return e.trim();
                            })
                            .includes(e.searchfrom)),
                        i &&
                          0 === (null == e ? void 0 : e.index) &&
                          a &&
                          (!a || u) &&
                          !o)
                      ) {
                        t.next = 13;
                        break;
                      }
                      return t.abrupt("return");
                    case 13:
                      return (
                        this.notifyTaskShow(!0),
                        (h = 0),
                        (t.prev = 15),
                        (t.next = 18),
                        k.aiqTaskAward(i)
                      );
                    case 18:
                      if (
                        ((d = t.sent),
                        (g = (v = d || {}).retcode),
                        (_ = v.reward_desc),
                        (h = _),
                        0 == +g)
                      ) {
                        t.next = 24;
                        break;
                      }
                      return t.abrupt("return", void this.notifyTaskShow(!1));
                    case 24:
                      t.next = 29;
                      break;
                    case 26:
                      return (
                        (t.prev = 26),
                        (t.t0 = t.catch(15)),
                        t.abrupt("return", void this.notifyTaskShow(!1))
                      );
                    case 29:
                      this.$emit("growth-ai-task-done"),
                        m.StockBridge.busEmit("growth-ai-task-done"),
                        (this.snackbar = l(
                          {
                            type: "snackbar",
                            text: h
                              ? "恭喜你完成今日任务，获得红包!"
                              : "恭喜你完成任务体验!",
                            subText: "分享活动给好友一起来领红包",
                          },
                          this.mode === b.GUIDE ? { fixed: !0 } : {}
                        )),
                        this.mode === b.GUIDE && (this.showBackPop = !0),
                        p.platform.removeSession("yy_act_ai_task"),
                        (w = f(l({}, r), { completed: !0 })),
                        p.platform.setSession("yy_act_ai_task_complete", w),
                        (this.currentTaskConfig = null);
                    case 32:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this,
              [[15, 26]]
            );
          })
        );
      },
    },
  };
Array ||
  (
    m.resolveComponent("Guide") +
    m.resolveComponent("SnackBar") +
    m.resolveComponent("BackPop")
  )();
var w = m._export_sfc(_, [
  [
    "render",
    function (e, t, n, r, s, i) {
      return m.e(
        { a: s.showTask },
        s.showTask
          ? m.e(
              { b: s.guide },
              s.guide ? { c: m.p({ guide: s.guide }) } : {},
              { d: s.snackbar },
              s.snackbar
                ? {
                    e: m.p({
                      snackbar: s.snackbar,
                      shareConfig: s.shareConfig,
                      inviteCode: s.currentInviteCode,
                    }),
                  }
                : {},
              { f: s.showBackPop },
              s.showBackPop
                ? {
                    g: m.p({
                      sourceFrom: "guide-task",
                      showBackpop: s.showBackPop,
                    }),
                  }
                : {}
            )
          : {}
      );
    },
  ],
]);
wx.createComponent(w);
