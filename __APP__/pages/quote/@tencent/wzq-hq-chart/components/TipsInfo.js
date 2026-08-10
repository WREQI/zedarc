var e = require("../../../../../@babel/runtime/helpers/typeof"),
  t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var n = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  r = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  u = function (e, t, n) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  l = function (e, t) {
    for (var i in t || (t = {})) a.call(t, i) && u(e, i, t[i]);
    if (s) {
      var r,
        o = n(s(t));
      try {
        for (o.s(); !(r = o.n()).done; ) {
          i = r.value;
          c.call(t, i) && u(e, i, t[i]);
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
    }
    return e;
  },
  d = function (e, t) {
    return r(e, o(t));
  },
  h = function (e, t) {
    var i = {};
    for (var r in e) a.call(e, r) && t.indexOf(r) < 0 && (i[r] = e[r]);
    if (null != e && s) {
      var o,
        u = n(s(e));
      try {
        for (u.s(); !(o = u.n()).done; ) {
          r = o.value;
          t.indexOf(r) < 0 && c.call(e, r) && (i[r] = e[r]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return i;
  },
  p = function (e, t, n) {
    return new Promise(function (i, r) {
      var o = function (e) {
          try {
            a(n.next(e));
          } catch (e) {
            r(e);
          }
        },
        s = function (e) {
          try {
            a(n.throw(e));
          } catch (e) {
            r(e);
          }
        },
        a = function (e) {
          return e.done ? i(e.value) : Promise.resolve(e.value).then(o, s);
        };
      a((n = n.apply(e, t)).next());
    });
  },
  f = require("../../../../../common/vendor.js"),
  m = require("../../stock-hq-data/index.js"),
  b = "Ogm88p00qb368",
  k = { OCHANNEL: /\bO\w+\b/i, ICHANNEL: /\bI\w+\b/i },
  v = ["mpwzq", "mpweapp"].includes("mpweapp"),
  S = new Map(),
  y = new Map();
function g(e) {
  var n = this,
    i = e;
  if (y.has(i)) return y.get(i);
  var r = p(
    n,
    null,
    t().mark(function n() {
      var r, o;
      return t().wrap(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (t.prev = 0),
                  (t.next = 3),
                  f.Wuji.get({
                    appid: "act",
                    schemaid: "fix_channel_qrcode",
                    filter: encodeURIComponent(
                      'stat="'.concat(e, '"|stat="').concat(b, '"')
                    ),
                  })
                );
              case 3:
                return (
                  (r = t.sent),
                  (o = (null == r ? void 0 : r.data) || []),
                  t.abrupt(
                    "return",
                    (o.forEach(function (e) {
                      (null == e ? void 0 : e.stat) && S.set(e.stat, e);
                    }),
                    o)
                  )
                );
              case 8:
                return (
                  (t.prev = 8),
                  (t.t0 = t.catch(0)),
                  t.abrupt(
                    "return",
                    (f.StockBridge.aegisReportEvent(
                      "MONITOR-ACT-JUMPCHANNELQRCODE-WUJI-ERR",
                      { ext1: String(t.t0) }
                    ),
                    [])
                  )
                );
              case 11:
                return (t.prev = 11), y.delete(i), t.finish(11);
              case 14:
              case "end":
                return t.stop();
            }
        },
        n,
        null,
        [[0, 8, 11, 14]]
      );
    })
  );
  return y.set(i, r), r;
}
function w(e) {
  return p(
    this,
    null,
    t().mark(function n() {
      var i, r, o, s, a, c, u;
      return t().wrap(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (s = (o = "string" == typeof e ? { channel: e } : e).channel),
                  (a = h(o, ["channel"])),
                  (c =
                    (null == (i = k.ICHANNEL.exec(s)) ? void 0 : i[0]) || ""),
                  (u =
                    (null == (r = k.OCHANNEL.exec(s)) ? void 0 : r[0]) || ""),
                  (t.prev = 1),
                  (t.next = 4),
                  f.StockBridge.request(
                    "https://wzq.tenpay.com/cgi-bin/report.fcgi",
                    f.RequestTypeEnum.GET,
                    d(l({}, a), {
                      subs_channel_i: c,
                      subs_channel_o: u,
                      action: "report_subs_channel",
                    })
                  )
                );
              case 4:
                t.next = 9;
                break;
              case 6:
                (t.prev = 6),
                  (t.t0 = t.catch(1)),
                  f.StockBridge.aegisReportEvent(
                    "MONITOR-ACT-CHANNELQUANYI-BINDCHANNEL-FAIL",
                    { ext2: t.t0 ? JSON.stringify(t.t0) : "" }
                  );
              case 9:
              case "end":
                return t.stop();
            }
        },
        n,
        null,
        [[1, 6]]
      );
    })
  );
}
function _(e) {
  e &&
    (v
      ? f.wx$1.navigateTo({
          url: "/pages/additional/webview/index?url=".concat(
            encodeURIComponent(e)
          ),
        })
      : f.StockBridge.locationTo(e, "replace"));
}
var x = "ams_price_subs",
  R = "wzq_hq_chart_follow_unlock_pending",
  C = "__default__",
  T = new m.BasketApi(),
  U = f.defineComponent({
    components: {
      RemindLockLayer: function () {
        return "./RemindLockLayer.js";
      },
      RemindModalBody: function () {
        return "./RemindModalBody.js";
      },
    },
    inject: ["hqBridge"],
    props: {
      type: { type: String, default: "baseInfo" },
      skin: { type: String, default: "white" },
      landscape: { type: Boolean, default: !1 },
      event: {
        type: Object,
        default: function () {
          return { event_id: "", event_date: "" };
        },
      },
      symbol: { type: String, default: "" },
      stockName: { type: String, default: "" },
      subscribeStatus: { type: [Boolean, Number, String], default: "" },
      unlockCount: { type: [Number, String], default: "" },
      unlockText: { type: String, default: "" },
    },
    setup: function (e, n) {
      var i = n.emit,
        r = f.ref({ title: "", items: [], eventTime: "" }),
        o = f.ref(!1),
        s = function () {},
        a = null,
        c = null;
      return (
        f.onMounted(function () {
          if ("remind" === e.type) {
            var n = (function (e, n) {
              var i = f.ref({ title: "", items: [], eventTime: "" }),
                r = f.ref(!0),
                o = null,
                s = 0,
                a = f.ref("");
              function c() {
                return p(
                  this,
                  null,
                  t().mark(function o() {
                    var c;
                    return t().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                "https://wzq.tenpay.com/svr/user/user_service/get_stock_price_alert_event_analysis",
                                (t.next = 4),
                                f.StockBridge.request(
                                  "https://wzq.tenpay.com/svr/user/user_service/get_stock_price_alert_event_analysis",
                                  f.RequestTypeEnum.POST,
                                  {
                                    event_id: e.event_id,
                                    event_date: e.event_date,
                                  },
                                  {
                                    header: {
                                      "Content-Type": "application/json",
                                    },
                                    forceCallback: !0,
                                    timeout: 3e3,
                                  }
                                )
                              );
                            case 4:
                              if (
                                0 ===
                                (null == (c = t.sent) ? void 0 : c.retcode)
                              ) {
                                t.next = 7;
                                break;
                              }
                              return t.abrupt(
                                "return",
                                void ((s += 1) >= 3 && ((r.value = !1), u()))
                              );
                            case 7:
                              (s = 0),
                                (null == c ? void 0 : c.analysis_item_list) &&
                                c.analysis_item_list.length > 0
                                  ? ((i.value = {
                                      title: c.title || "",
                                      items: c.analysis_item_list.map(function (
                                        e
                                      ) {
                                        return {
                                          strategy: e.category,
                                          msg: e.analyse_msg,
                                        };
                                      }),
                                      eventTime: c.event_time || "",
                                    }),
                                    (a.value = c.event_time || ""),
                                    (r.value = !1),
                                    u())
                                  : ((i.value = {
                                      title: c.title || "",
                                      eventTime: c.event_time || "",
                                      items: [],
                                    }),
                                    (r.value = !0)),
                                (null == n ? void 0 : n.onLoaded) &&
                                  n.onLoaded(),
                                (t.next = 13);
                              break;
                            case 10:
                              (t.prev = 10),
                                (t.t0 = t.catch(0)),
                                (s += 1) >= 3 && ((r.value = !1), u());
                            case 13:
                            case "end":
                              return t.stop();
                          }
                      },
                      o,
                      null,
                      [[0, 10]]
                    );
                  })
                );
              }
              function u() {
                o && (clearInterval(o), (o = null));
              }
              return (
                o ||
                  (c(),
                  (o = setInterval(function () {
                    c();
                  }, 3e3))),
                f.onBeforeUnmount(function () {
                  u();
                }),
                { remindData: i, loading: r, eventTime: a, stopPolling: u }
              );
            })(e.event, {
              onLoaded: function () {
                i("loaded");
              },
            });
            (a = n.remindData),
              (c = n.loading),
              (s = n.stopPolling),
              f.watch(
                a,
                function (e) {
                  r.value = e;
                },
                { immediate: !0 }
              ),
              f.watch(
                c,
                function (e) {
                  o.value = e;
                },
                { immediate: !0 }
              );
          } else i("loaded");
        }),
        {
          remindData: r,
          loading: o,
          stopPolling: function () {
            return s();
          },
        }
      );
    },
    data: function () {
      return {
        isShowTips: !0,
        enableScroll: !1,
        scrollHeight: 0,
        showTime: 0,
        hasReportedBrow: !1,
        hasReportedLockContentExpose: !1,
        subscribeStatusResolved: !1,
        subscribeStatusLoading: !1,
        isCheckingPendingFollowUnlock: !1,
        isSubscribedUser: !0,
        isAmsSubscribedUser: !1,
        unlockCountText: "",
        followStat: "IeI00p000q009",
      };
    },
    computed: {
      title: function () {
        return { iopv: "参考净值 (IOPV)", remind: "股票异动分析" }[this.type];
      },
      isIOS: function () {
        var e;
        return (
          f.StockBridge.ENV === f.EnvTypeEnum.MP &&
          "ios" ===
            (null == (e = f.wx$1) ? void 0 : e.getSystemInfoSync().platform)
        );
      },
      isRemindLocked: function () {
        return (
          "remind" === this.type &&
          this.subscribeStatusResolved &&
          this.isAmsSubscribedUser &&
          !this.isSubscribedUser &&
          !this.isCheckingPendingFollowUnlock &&
          !this.loading
        );
      },
      isRemindModalReady: function () {
        return (
          "remind" !== this.type ||
          (this.subscribeStatusResolved && !this.isCheckingPendingFollowUnlock)
        );
      },
      unlockFootnoteText: function () {
        return this.unlockCountText
          ? "".concat(this.unlockCountText, "关注该股票的用户已解锁")
          : "";
      },
      routeQuery: function () {
        var e;
        return (null == (e = this.$route) ? void 0 : e.query) || {};
      },
      symbolInfo: function () {
        return this.symbol ? m.utils.splitSymbol(this.symbol) : {};
      },
      resolvedStockName: function () {
        return (
          this.stockName ||
          this.routeQuery.stockName ||
          this.routeQuery.stock_name ||
          this.routeQuery.name ||
          ""
        );
      },
      resolvedMarket: function () {
        return (
          this.symbolInfo.market ||
          this.routeQuery.market ||
          this.routeQuery.type ||
          ""
        );
      },
      resolvedScode: function () {
        return this.symbolInfo.scode || this.routeQuery.scode || "";
      },
    },
    watch: {
      subscribeStatus: {
        handler: function (e) {
          if ("remind" === this.type && this.hasExternalSubscribeStatus(e))
            return (
              (this.isSubscribedUser = this.parseSubscribeStatus(e)),
              (this.subscribeStatusResolved = !0),
              void this.consumePendingFollowUnlockMarker()
            );
          this.initSubscribeStatus();
        },
      },
      unlockCount: {
        handler: function (e) {
          this.setUnlockCountText(e);
        },
        immediate: !0,
      },
      loading: {
        handler: function (e) {
          "remind" !== this.type ||
            !this.isRemindModalReady ||
            e ||
            this.isRemindLocked ||
            this.scheduleRemindContentCheck();
        },
      },
      isRemindModalReady: {
        handler: function (e) {
          e &&
            "remind" === this.type &&
            (this.showTime || (this.showTime = Date.now()),
            this.loading ||
              this.isRemindLocked ||
              this.scheduleRemindContentCheck());
        },
        immediate: !0,
      },
      isRemindLocked: {
        handler: function (e) {
          e && this.reportLockContentExpose();
        },
        immediate: !0,
      },
    },
    mounted: function () {
      "remind" === this.type &&
        ((function (e) {
          p(
            this,
            null,
            t().mark(function n() {
              var i;
              return t().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (i = e || b), (t.next = 3), g(i);
                    case 3:
                    case "end":
                      return t.stop();
                  }
              }, n);
            })
          );
        })({ channel: this.followStat }),
        this.initPendingFollowUnlockState());
    },
    beforeDestroy: function () {
      "remind" === this.type && this.stopPolling && this.stopPolling(),
        "remind" === this.type && this.showTime && this.reportRemindTimestay();
    },
    methods: {
      scheduleRemindContentCheck: function () {
        var e = this;
        this.$nextTick(function () {
          setTimeout(function () {
            e.checkContentHeight(), e.reportRemindBrow();
          }, 100);
        });
      },
      handleClose: function () {
        var e = this;
        (this.isShowTips = !1),
          "remind" === this.type &&
            this.showTime &&
            this.reportRemindTimestay(),
          setTimeout(function () {
            e.$emit("close");
          }, 300);
      },
      handleCloseButtonClick: function () {
        this.reportRemindClose("button"), this.handleClose();
      },
      handleMaskClick: function () {
        this.reportRemindClose("mask"), this.handleClose();
      },
      parseSubscribeStatus: function (e) {
        return "boolean" == typeof e
          ? e
          : "1" == "".concat(e) || "true" === "".concat(e).toLowerCase();
      },
      hasExternalSubscribeStatus: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : this.subscribeStatus;
        return "" !== e && null != e;
      },
      normalizeUserInfoResponse: function (e) {
        if ("string" == typeof e)
          try {
            return JSON.parse(e);
          } catch (e) {
            return {};
          }
        return e || {};
      },
      initSubscribeStatus: function () {
        "remind" === this.type &&
          (this.subscribeStatusResolved ||
            this.subscribeStatusLoading ||
            this.fetchSubscribeStatus());
      },
      initPendingFollowUnlockState: function () {
        return p(
          this,
          null,
          t().mark(function e() {
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), this.hasPendingFollowUnlockMarker();
                    case 2:
                      if (!e.sent) {
                        e.next = 6;
                        break;
                      }
                      this.refreshSubscribeStatusFromPendingFollow(),
                        (e.next = 7);
                      break;
                    case 6:
                      this.initSubscribeStatus();
                    case 7:
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
      fetchSubscribeStatus: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return p(
          this,
          null,
          t().mark(function n() {
            var i, r, o, s, a;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        "remind" !== this.type ||
                        this.subscribeStatusLoading ||
                        (!e && this.subscribeStatusResolved)
                      ) {
                        t.next = 28;
                        break;
                      }
                      return (
                        e && (this.subscribeStatusResolved = !1),
                        (this.subscribeStatusLoading = !0),
                        (t.prev = 2),
                        (t.next = 5),
                        T.QueryUserLabel(f.StockBridge, { label: x })
                      );
                    case 5:
                      if (
                        ((i = t.sent),
                        (r = this.normalizeUserInfoResponse(i).label || {}),
                        (this.isAmsSubscribedUser =
                          r.name === x && 1 == +r.status),
                        (o = this.subscribeStatus),
                        !this.hasExternalSubscribeStatus(o) || e)
                      ) {
                        t.next = 13;
                        break;
                      }
                      (this.isSubscribedUser = this.parseSubscribeStatus(o)),
                        (t.next = 18);
                      break;
                    case 13:
                      return (
                        (t.next = 15),
                        f.StockBridge.request(
                          "https://wzq.tenpay.com/cgi-bin/userinfo.fcgi?".concat(
                            Date.now()
                          ),
                          f.RequestTypeEnum.POST,
                          { detail: 1 }
                        )
                      );
                    case 15:
                      (s = t.sent),
                        (a = this.normalizeUserInfoResponse(s)),
                        (this.isSubscribedUser = this.parseSubscribeStatus(
                          a.subscribe
                        ));
                    case 18:
                      return (
                        (t.next = 20), this.consumePendingFollowUnlockMarker()
                      );
                    case 20:
                      t.next = 25;
                      break;
                    case 22:
                      (t.prev = 22),
                        (t.t0 = t.catch(2)),
                        (this.isAmsSubscribedUser = !1),
                        (this.isSubscribedUser = !0);
                    case 25:
                      return (
                        (t.prev = 25),
                        (this.subscribeStatusResolved = !0),
                        (this.subscribeStatusLoading = !1),
                        t.finish(25)
                      );
                    case 28:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this,
              [[2, 22, 25, 28]]
            );
          })
        );
      },
      hasPendingFollowUnlockMarker: function () {
        return p(
          this,
          null,
          t().mark(function e() {
            var n;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        p(
                          exports,
                          null,
                          t().mark(function e() {
                            return t().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        f.StockBridge.getStorage(R)
                                      );
                                    case 3:
                                      if (((e.t0 = e.sent), e.t0)) {
                                        e.next = 6;
                                        break;
                                      }
                                      e.t0 = "";
                                    case 6:
                                      return e.abrupt("return", e.t0);
                                    case 9:
                                      return (
                                        (e.prev = 9),
                                        (e.t1 = e.catch(0)),
                                        e.abrupt("return", "")
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
                        )
                      );
                    case 2:
                      if ((n = e.sent)) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt("return", !1);
                    case 5:
                      return e.abrupt("return", n === (this.symbol || C));
                    case 6:
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
      consumePendingFollowUnlockMarker: function () {
        return p(
          this,
          null,
          t().mark(function e() {
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), this.hasPendingFollowUnlockMarker();
                    case 2:
                      if (((e.t0 = e.sent), !e.t0)) {
                        e.next = 5;
                        break;
                      }
                      e.t0 = this.isSubscribedUser;
                    case 5:
                      if (((e.t1 = e.t0), !e.t1)) {
                        e.next = 8;
                        break;
                      }
                      f.StockBridge.setStorage(R, ""),
                        this.reportReminderInterpretationBrow(),
                        f.StockBridge.toast(
                          "已关注公众号\r\n并为你开启异动解读",
                          "none"
                        );
                    case 8:
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
      refreshSubscribeStatusFromPendingFollow: function () {
        var e = this;
        (this.isCheckingPendingFollowUnlock = !0),
          this.hasPendingFollowUnlockMarker()
            .then(function (t) {
              if (t) return e.fetchSubscribeStatus(!0);
              e.isCheckingPendingFollowUnlock = !1;
            })
            .finally(function () {
              e.isCheckingPendingFollowUnlock = !1;
            });
      },
      handleFollowUnlock: function () {
        var n, i, r;
        this.followStat &&
          (this.reportFollowCtaClick(),
          (r = this.symbol),
          f.StockBridge.setStorage(R, r || C),
          (function (n, i) {
            p(
              this,
              null,
              t().mark(function r() {
                var o, s, a, c, u, p, m, k, v, y, x, R, C, T;
                return t().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((s =
                            null !== n && "object" == e(n)
                              ? n
                              : { channel: n, followUrl: i }),
                          (a = s.channel),
                          (c = s.followUrl),
                          (u = h(s, ["channel", "followUrl"])),
                          (m = c),
                          (k = (p = a) || b),
                          (v = d(l({}, u), { channel: k })),
                          !p || !m)
                        ) {
                          t.next = 5;
                          break;
                        }
                        return (t.next = 4), w(v);
                      case 4:
                        return t.abrupt("return", void _(m));
                      case 5:
                        if (
                          ((y = (function (e) {
                            var t = S.get(e),
                              n = S.get(b);
                            if (!t && !n) return null;
                            var i = [];
                            return t && i.push(t), n && n !== t && i.push(n), i;
                          })(k)),
                          (t.t0 = y),
                          t.t0)
                        ) {
                          t.next = 11;
                          break;
                        }
                        return (t.next = 10), g(k);
                      case 10:
                        y = t.sent;
                      case 11:
                        if (
                          ((x =
                            y.find(function (e) {
                              return e.stat === k;
                            }) || {}),
                          (R =
                            y.find(function (e) {
                              return e.stat === b;
                            }) || {}),
                          (C = x.url ? x : R),
                          !x.url)
                        )
                          try {
                            (
                              (null == (o = null == R ? void 0 : R.remark)
                                ? void 0
                                : o.ignores) || []
                            ).includes(k) ||
                              f.StockBridge.aegisReportEvent(
                                "MONITOR-WX-DEFAULT-TUWEN-ERR",
                                { ext2: p || "" }
                              );
                          } catch (e) {
                            f.StockBridge.aegisReportEvent(
                              "MONITOR-WX-DEFAULT-TUWEN-SYNTA-ERR",
                              { ext2: p || "" }
                            );
                          }
                        return (T = C.url || ""), (t.next = 16), w(v);
                      case 16:
                        T
                          ? _(T)
                          : f.StockBridge.aegisReportEvent(
                              "MONITOR-ACT-JUMPCHANNELQRCODE-EMPTY-JUMPURL",
                              { ext1: p || "" }
                            );
                      case 17:
                      case "end":
                        return t.stop();
                    }
                }, r);
              })
            );
          })({
            channel: this.followStat,
            followUrl: "https://mp.weixin.qq.com/s/Gzeg0acyzqBcaHgvbuFN-A",
            name: this.resolvedStockName,
            market: this.resolvedMarket,
            scode: this.resolvedScode,
            event_id: (null == (n = this.event) ? void 0 : n.event_id) || "",
            event_date:
              (null == (i = this.event) ? void 0 : i.event_date) || "",
          }));
      },
      formatUnlockCount: function (e) {
        var t = Math.floor(0.8 * (parseInt(e, 10) || 0));
        return t <= 1e4
          ? "".concat(t)
          : t > 1e5
          ? "10万+"
          : "".concat((t / 1e4).toFixed(1), "万");
      },
      setUnlockCountText: function (e) {
        if ("" !== e && null != e) {
          var t = parseInt(e, 10);
          if (Number.isNaN(t)) this.unlockCountText = "";
          else {
            var n = this.formatUnlockCount(t);
            this.unlockCountText = "0" === n ? "" : n;
          }
        } else this.unlockCountText = "";
      },
      reportRemindBrow: function () {
        this.hasReportedBrow ||
          ((this.hasReportedBrow = !0),
          f.StockBridge.report("hq.stock_detail.remind_panel_brow", {
            stockid: this.symbol,
          }));
      },
      reportRemindClose: function (e) {
        "mask" === e
          ? f.StockBridge.report("hq.stock_detail.remind_panel_mask_click", {
              stockid: this.symbol,
            })
          : f.StockBridge.report("hq.stock_detail.remind_panel_close_click", {
              stockid: this.symbol,
            });
      },
      reportRemindTimestay: function () {
        if (this.showTime) {
          var e = Math.floor(Date.now() - this.showTime);
          f.StockBridge.report("hq.stock_detail.remind_panel_timestay", {
            ftime: e,
            stockid: this.symbol,
          }),
            (this.showTime = 0);
        }
      },
      reportFollowCtaClick: function () {
        f.StockBridge.report("hq.stockdetail.remind_interpret_btn_click", {
          stockid: this.symbol,
        });
      },
      reportReminderInterpretationBrow: function () {
        f.StockBridge.report("hq.stockdetail.reminder_interpretation_brow", {
          stockid: this.symbol,
        });
      },
      reportLockContentExpose: function () {
        this.hasReportedLockContentExpose ||
          ((this.hasReportedLockContentExpose = !0),
          f.StockBridge.report(
            "hq.stockdetail.remind_interpret_popup_lock_area_brow",
            { stockid: this.symbol }
          ),
          f.StockBridge.report(
            "hq.stockdetail.reminder_interpretation_guide_card_brow",
            { stockid: this.symbol }
          ));
      },
      checkContentHeight: function () {
        var e = this,
          t = f.wx$1.createSelectorQuery().in(this);
        t.select(".remind-modal__body").boundingClientRect(),
          t.select(".remind-modal__container").boundingClientRect(),
          t.exec(function (t) {
            var n = t[0],
              i = t[1];
            n && i && n.height > i.height && (e.enableScroll = !0);
          });
      },
    },
  });
Array ||
  (
    f.resolveComponent("RemindModalBody") +
    f.resolveComponent("RemindLockLayer")
  )();
var B = f._export_sfc(U, [
  [
    "render",
    function (e, t, n, i, r, o) {
      return f.e(
        { a: "remind" === e.type && e.isRemindModalReady },
        "remind" === e.type && e.isRemindModalReady
          ? f.e(
              {
                b: f.o(function () {
                  return (
                    e.handleCloseButtonClick &&
                    e.handleCloseButtonClick.apply(e, arguments)
                  );
                }, 1751),
                c: f.t(e.title),
                d: f.o(function () {
                  return (
                    e.handleCloseButtonClick &&
                    e.handleCloseButtonClick.apply(e, arguments)
                  );
                }, 1752),
                e: e.enableScroll,
              },
              e.enableScroll
                ? f.e(
                    {
                      f: f.p({
                        "remind-data": e.remindData,
                        "is-i-o-s": e.isIOS,
                      }),
                      g: e.isRemindLocked,
                    },
                    e.isRemindLocked
                      ? {
                          h: f.o(e.handleFollowUnlock, 1753),
                          i: f.p({
                            "lock-desc-text":
                              e.unlockText || "解锁不限次数完整异动解读",
                            "footnote-text": e.unlockFootnoteText,
                          }),
                        }
                      : {},
                    {
                      j: f.n({
                        "remind-modal__body-wrap--locked": e.isRemindLocked,
                      }),
                      k: !e.isRemindLocked,
                    }
                  )
                : f.e(
                    {
                      l: f.p({
                        "remind-data": e.remindData,
                        "is-i-o-s": e.isIOS,
                      }),
                      m: e.isRemindLocked,
                    },
                    e.isRemindLocked
                      ? {
                          n: f.o(e.handleFollowUnlock, 1754),
                          o: f.p({
                            "lock-desc-text":
                              e.unlockText || "解锁不限次数完整异动解读",
                            "footnote-text": e.unlockFootnoteText,
                          }),
                        }
                      : {},
                    {
                      p: f.n({
                        "remind-modal__body-wrap--locked": e.isRemindLocked,
                      }),
                    }
                  ),
              {
                q: f.n(e.isShowTips ? "fade-up" : "fade-down"),
                r: f.o(function () {}, 1755),
                s: f.n(e.isShowTips ? "fade-in" : "fade-out"),
                t: f.n(e.skin + "-theme"),
                v: f.o(function () {}, 1756),
                w: f.o(function () {
                  return (
                    e.handleMaskClick && e.handleMaskClick.apply(e, arguments)
                  );
                }, 1757),
              }
            )
          : "remind" !== e.type
          ? f.e(
              {
                y: f.t(e.title),
                z: f.o(function () {
                  return e.handleClose && e.handleClose.apply(e, arguments);
                }, 1758),
                A: e.landscape ? 1 : "",
                B: e.isIOS && e.landscape ? 1 : "",
                C: "iopv" === e.type,
              },
              "iopv" === e.type
                ? {
                    D: e.isIOS && e.landscape ? 1 : "",
                    E: e.isIOS && e.landscape ? 1 : "",
                    F: e.landscape ? 1 : "",
                  }
                : {},
              {
                G: f.n(e.isShowTips ? "fade-up" : "fade-down"),
                H: f.o(function () {}, 1759),
                I: f.n(e.isShowTips ? "fade-in" : "fade-out"),
                J: f.n(e.skin + "-theme"),
                K: f.o(function () {}, 1760),
                L: f.o(function () {
                  return e.handleClose && e.handleClose.apply(e, arguments);
                }, 1761),
              }
            )
          : {},
        { x: "remind" !== e.type }
      );
    },
  ],
  ["__scopeId", "data-v-f281303a"],
]);
wx.createComponent(B);
