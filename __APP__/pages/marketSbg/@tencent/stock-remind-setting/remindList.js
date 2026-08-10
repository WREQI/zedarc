require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = function (e, n, o) {
    return new Promise(function (t, r) {
      var i = function (e) {
          try {
            c(o.next(e));
          } catch (e) {
            r(e);
          }
        },
        a = function (e) {
          try {
            c(o.throw(e));
          } catch (e) {
            r(e);
          }
        },
        c = function (e) {
          return e.done ? t(e.value) : Promise.resolve(e.value).then(i, a);
        };
      c((o = o.apply(e, n)).next());
    });
  },
  o = require("../../../../common/vendor.js"),
  t = require("api/index.js"),
  r = require("../stock-hq-data/api/remind.js"),
  i = require("../stock-monitoring-remind/hooks/useMonitoringRemindSwitch.js"),
  a = "monitoring_remind_guide_popup_shown";
function c(t) {
  var r = this,
    c = i.useMonitoringRemindSwitch(),
    u = c.getSwitchState,
    l = c.updateSwitchState,
    s = o.ref(!1),
    d = o.ref(!1),
    m = o.ref(!1),
    p = o.ref(!1),
    h = o.ref(!1),
    f = null;
  o.watchEffect(function () {
    d.value && o.StockBridge.report("hq.remindlist.remind_brow");
  }),
    o.watchEffect(function () {
      m.value && o.StockBridge.report("hq.remindlist.monitoring_pop_brow");
    });
  var v = function (e) {
      s.value = e;
    },
    g = function (e) {
      d.value = e;
    },
    k = function (e) {
      o.StockBridge.ENV === o.EnvTypeEnum.MP
        ? o.wx$1.showToast({ title: e, icon: "none" })
        : o.StockBridge.toast(e, "none");
    },
    M = function (o) {
      return n(
        r,
        null,
        e().mark(function n() {
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.prev = 0), (e.next = 3), l(o);
                  case 3:
                    if (((e.t0 = !!e.sent), !e.t0)) {
                      e.next = 6;
                      break;
                    }
                    e.t0 = (v(o), !0);
                  case 6:
                    return e.abrupt("return", e.t0);
                  case 9:
                    return (
                      (e.prev = 9), (e.t1 = e.catch(0)), e.abrupt("return", !1)
                    );
                  case 12:
                  case "end":
                    return e.stop();
                }
            },
            n,
            null,
            [[0, 9]]
          );
        })
      );
    },
    R = function () {
      o.StockBridge.report("hq.remindlist.remind_click"),
        m.value ||
          p.value ||
          h.value ||
          (s.value ? (p.value = !0) : (m.value = !0));
    };
  return (
    o.onUnmounted(function () {
      null !== f && (clearTimeout(f), (f = null));
    }),
    {
      isMonitoringRemindOpen: s,
      isMonitorRemindGrayUser: d,
      getMonitoringRemindOpen: function () {
        return n(
          r,
          null,
          e().mark(function n() {
            var t;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), u();
                    case 3:
                      return (
                        (t = e.sent),
                        e.abrupt(
                          "return",
                          t
                            ? (g(t.isGrayUser),
                              v(t.isOpen),
                              !t.isGrayUser ||
                                t.isOpen ||
                                (function () {
                                  try {
                                    return (
                                      "true" === o.StockBridge.getStorage(a)
                                    );
                                  } catch (e) {
                                    return !1;
                                  }
                                })() ||
                                (R(),
                                (function () {
                                  try {
                                    o.StockBridge.setStorage(a, "true");
                                  } catch (e) {}
                                })()),
                              t.isOpen)
                            : (g(!1), v(!1), !1)
                        )
                      );
                    case 7:
                      return (
                        (e.prev = 7),
                        (e.t0 = e.catch(0)),
                        e.abrupt("return", (g(!1), v(!1), !1))
                      );
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              null,
              [[0, 7]]
            );
          })
        );
      },
      changeMonitoringRemindOpen: M,
      isShowMonitorRemindPop: m,
      isShowCloseMonitoringPop: p,
      handleMonitorRemindConfirm: function () {
        return n(
          r,
          null,
          e().mark(function n() {
            var r;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (h.value) {
                        e.next = 21;
                        break;
                      }
                      return (
                        (e.prev = 1),
                        (h.value = !0),
                        (r = !s.value),
                        !1,
                        m.value &&
                          o.StockBridge.report(
                            "hq.remindlist.monitoring_pop_open_click"
                          ),
                        (e.next = 8),
                        M(r)
                      );
                    case 8:
                      if (!e.sent) {
                        e.next = 12;
                        break;
                      }
                      r &&
                        t &&
                        t("checkUserSubscribe", function (e) {
                          (h.value = !1), e && k("自选智能盯盘已开启");
                        }),
                        r || ((h.value = !1), k("自选智能盯盘已关闭")),
                        (m.value = !1),
                        (p.value = !1),
                        (e.next = 13);
                      break;
                    case 12:
                      (m.value = !1), (p.value = !1), (h.value = !1);
                    case 13:
                      e.next = 18;
                      break;
                    case 15:
                      (e.prev = 15),
                        (e.t0 = e.catch(1)),
                        (m.value = !1),
                        (p.value = !1),
                        (h.value = !1);
                    case 18:
                      return (
                        (e.prev = 18),
                        null !== f && (clearTimeout(f), (f = null)),
                        (f = setTimeout(function () {
                          (h.value = !1), (f = null);
                        }, 5e3)),
                        e.finish(18)
                      );
                    case 21:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              null,
              [[1, 15, 18, 21]]
            );
          })
        );
      },
      handleMonitoringRemindClick: R,
      handleMonitorRemindPopClose: function () {
        o.StockBridge.report("hq.remindlist.monitoring_pop_close_click"),
          (m.value = !1),
          null !== f && (clearTimeout(f), (f = null)),
          (h.value = !1);
      },
      handleCloseMonitoringPopCancel: function () {
        (p.value = !1),
          null !== f && (clearTimeout(f), (f = null)),
          (h.value = !1);
      },
    }
  );
}
var u = o.defineComponent({
  name: "RemindList",
  components: {
    remindItem: function () {
      return "./components/remindItem.js";
    },
    MonitoringRemindPop: function () {
      return "../../../asyncCom/@tencent/stock-monitoring-remind/components/MonitoringRemindPop.js";
    },
    CloseMonitoringPop: function () {
      return "../../../asyncCom/@tencent/stock-monitoring-remind/components/CloseMonitoringPop.js";
    },
  },
  props: { symbol: { type: String, default: "" } },
  setup: function (i, a) {
    var u,
      l = this,
      s = a.emit,
      d = o.inject("hqBridge"),
      m = o.getCurrentInstance(),
      p = null == (u = null == m ? void 0 : m.proxy) ? void 0 : u.$router,
      h = o.ref([]),
      f = o.ref(!1),
      v = o.ref(!1),
      g = o.computed(function () {
        return ["mpwzq", "wzqlight"].includes("mpweapp")
          ? "lite"
          : "profession";
      }),
      k = c(s),
      M = k.isMonitoringRemindOpen,
      R = k.isMonitorRemindGrayUser,
      w = k.getMonitoringRemindOpen,
      C = k.isShowMonitorRemindPop,
      S = k.isShowCloseMonitoringPop,
      y = k.handleMonitorRemindConfirm,
      P = k.handleMonitoringRemindClick,
      b = k.handleMonitorRemindPopClose,
      _ = k.handleCloseMonitoringPopCancel,
      q = new r.RemindApi(),
      x = function () {
        return n(
          l,
          null,
          e().mark(function n() {
            var r, i, a;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        t.StockAPiService.QueryStockAlert(
                          { t: Date.now(), source: 3 },
                          d.request
                        )
                      );
                    case 3:
                      (i = e.sent),
                        (
                          null == (r = null == i ? void 0 : i.stocks)
                            ? void 0
                            : r.length
                        )
                          ? ((a = q.mergeListData(
                              null == i ? void 0 : i.smart,
                              null == i ? void 0 : i.stocks,
                              { isLite: "lite" === g.value }
                            )),
                            (h.value = a.filter(function (e) {
                              return q.checkHasRemindedAuto(e);
                            })),
                            (f.value = 0 === h.value.length),
                            "mp" !== d.ENV &&
                              o.nextTick$1(function () {
                                window.scrollTo(
                                  0,
                                  sessionStorage.getItem(
                                    "remindList_scrollTop"
                                  ) || 0
                                ),
                                  sessionStorage.removeItem(
                                    "remindList_scrollTop"
                                  );
                              }))
                          : ((h.value = []), (f.value = !0)),
                        (e.next = 10);
                      break;
                    case 7:
                      (e.prev = 7),
                        (e.t0 = e.catch(0)),
                        (h.value = []),
                        (f.value = !0);
                    case 10:
                      (v.value = !0), s("ready");
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              null,
              [[0, 7]]
            );
          })
        );
      },
      T = function () {
        if ("mp" !== d.ENV) {
          var e = document.documentElement.scrollTop || document.body.scrollTop;
          e > 0 && sessionStorage.setItem("remindList_scrollTop", e);
        }
      };
    return (
      n(
        l,
        null,
        e().mark(function n() {
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return w().catch(function (e) {}), (e.next = 3), x();
                case 3:
                  d.report("hq.remindlist.page_brow", {
                    stockid: i.symbol,
                    count: h.value.length,
                  });
                case 4:
                case "end":
                  return e.stop();
              }
          }, n);
        })
      ),
      {
        list: h,
        noData: f,
        dataReady: v,
        isMonitoringRemindOpen: M,
        isMonitorRemindGrayUser: R,
        isShowMonitorRemindPop: C,
        isShowCloseMonitoringPop: S,
        theme: g,
        queryRemindList: x,
        handleAddStockClick: function () {
          "mp" === d.ENV
            ? d.routeTo({
                path: "/pages/additional/search/main",
                query: { searchType: "remind" },
              })
            : "wzq_light" === d.ENV
            ? (T(),
              d.routeTo({ path: "/search", query: { searchType: "remind" } }))
            : (T(),
              p.push({
                path: "/search",
                query: { scene: 1, source: "remind" },
              })),
            d.report("hq.remindlist.add_new_remind_click");
        },
        handleMonitorRemindConfirm: y,
        handleMonitoringRemindClick: P,
        handleActivated: function () {
          w().catch(function (e) {});
        },
        handleMonitorRemindPopClose: b,
        handleCloseMonitoringPopCancel: _,
      }
    );
  },
});
Array ||
  (
    o.resolveComponent("remind-item") +
    o.resolveComponent("MonitoringRemindPop") +
    o.resolveComponent("CloseMonitoringPop")
  )();
var l = o._export_sfc(u, [
  [
    "render",
    function (e, n, t, r, i, a) {
      return o.e(
        { a: e.dataReady },
        e.dataReady
          ? o.e(
              { b: e.isMonitorRemindGrayUser },
              (e.isMonitorRemindGrayUser, {}),
              { c: e.isMonitorRemindGrayUser },
              e.isMonitorRemindGrayUser
                ? {
                    d: o.n(e.isMonitoringRemindOpen ? "on" : ""),
                    e: o.o(function () {
                      return (
                        e.handleMonitoringRemindClick &&
                        e.handleMonitoringRemindClick.apply(e, arguments)
                      );
                    }, 1327),
                  }
                : {},
              { f: !e.noData },
              e.noData
                ? {
                    j: o.o(function () {
                      return (
                        e.handleAddStockClick &&
                        e.handleAddStockClick.apply(e, arguments)
                      );
                    }, 1330),
                    k: o.n(e.noData ? "nodata" : ""),
                  }
                : o.e(
                    { g: e.list.length },
                    e.list.length
                      ? {
                          h: o.f(e.list, function (n, t, r) {
                            return {
                              a: n.code + t,
                              b: o.o(e.queryRemindList, 1328, n.code + t),
                              c: "b1e0903c-0-" + r,
                              d: o.p({ "item-data": n }),
                            };
                          }),
                        }
                      : {},
                    {
                      i: o.o(function () {
                        return (
                          e.handleAddStockClick &&
                          e.handleAddStockClick.apply(e, arguments)
                        );
                      }, 1329),
                    }
                  ),
              { l: e.isShowMonitorRemindPop },
              e.isShowMonitorRemindPop
                ? {
                    m: o.o(e.handleMonitorRemindPopClose, 1331),
                    n: o.o(e.handleMonitorRemindConfirm, 1332),
                  }
                : {},
              { o: e.isShowCloseMonitoringPop },
              e.isShowCloseMonitoringPop
                ? {
                    p: o.sr("closeMonitoringPop", "b1e0903c-2"),
                    q: o.o(e.handleMonitorRemindConfirm, 1333),
                    r: o.o(e.handleCloseMonitoringPopCancel, 1334),
                  }
                : {},
              { s: o.n(e.theme) }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-b1e0903c"],
]);
wx.createComponent(l);
