var e,
  r = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../@babel/runtime/helpers/defineProperty"),
  a = Object.defineProperty,
  o = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  u = function (e, r, t) {
    return r in e
      ? a(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t);
  },
  i = require("../../../../../../common/vendor.js"),
  l = require("../../hooks/useHome.js"),
  _ = require("../../hooks/useBrokerLoad.js"),
  d = require("../../hooks/useScroll.js"),
  m = require("../../utils/api.js"),
  p = require("../../utils/dealData.js"),
  g =
    (n((e = {}), p.BACK_END_MESSAGE_ID.trade, "yy.message_box.trade_page_brow"),
    n(
      e,
      p.BACK_END_MESSAGE_ID.platformMessage,
      "yy.message_box.platform_notify_page_brow"
    ),
    n(
      e,
      p.BACK_END_MESSAGE_ID.chooseRemind,
      "yy.message_box.choose_remind_page_brow"
    ),
    n(
      e,
      p.BACK_END_MESSAGE_ID.interaction,
      "yy.message_box.interaction_list_page_brow"
    ),
    e),
  b = {
    components: {
      messageDingPan: function () {
        return "../dingpan/index.js";
      },
      messageCustom: function () {
        return "../custom/index.js";
      },
      messageInteraction: function () {
        return "../../components/interaction/mp/mix.js";
      },
      messageTrade: function () {
        return "../trade/index.js";
      },
      messageEntry: function () {
        return "../../components/entry/index.js";
      },
      brokerTab: function () {
        return "../../components/trade/tab.js";
      },
    },
    setup: function (e, n) {
      var a = n.emit,
        b = i.getCurrentInstance().proxy,
        y = i.inject("stockBridge"),
        f = i.ref(!1),
        v = i.ref(0),
        E = i.ref(162),
        x = l.useHome(),
        S = x.tabBrokerList,
        h = x.renderList,
        C = x.canclear,
        k = x.currentIndex,
        A = x.currentValue,
        D = x.readyReport,
        I = x.clearAllCountStatus,
        B = x.clearOneCountStatus,
        L = x.changeCurrentIndex,
        w = x.getDealerInfo,
        M = x.getMessagelist,
        j = x.judgeCurrentIndex,
        T = x.clearTabBrokerList;
      function G() {
        return (
          (e = this),
          null,
          (r = t().mark(function e() {
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (Date.now() - v.value < 5e3) {
                        e.next = 17;
                        break;
                      }
                      return (
                        (v.value = Date.now()), (e.prev = 2), (e.next = 5), w()
                      );
                    case 5:
                      return (e.next = 7), M();
                    case 7:
                      return (e.next = 9), j();
                    case 9:
                      (f.value = !0),
                        h.value.forEach(function (e) {
                          e.unread_num > 0 &&
                            y.report(
                              "yy.message_box.".concat(
                                e.msg_box_type,
                                "_red_brow"
                              ),
                              { msg_num: e.unread_num }
                            );
                        }),
                        i.nextTick$1(function () {
                          a("loaded"),
                            i.wx$1
                              .createSelectorQuery()
                              .in(b)
                              .select(".message-box-top-wrapper")
                              .boundingClientRect()
                              .exec(function (e) {
                                var r = (e && e[0]) || {};
                                r.height && (E.value = r.height);
                              });
                        }),
                        (e.next = 17);
                      break;
                    case 14:
                      (e.prev = 14),
                        (e.t0 = e.catch(2)),
                        (f.value = !0),
                        (h.value = []);
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 14]]
            );
          })),
          new Promise(function (t, n) {
            var a = function (e) {
                try {
                  s(r.next(e));
                } catch (e) {
                  n(e);
                }
              },
              o = function (e) {
                try {
                  s(r.throw(e));
                } catch (e) {
                  n(e);
                }
              },
              s = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(a, o);
              };
            s((r = r.apply(e, null)).next());
          })
        );
        var e, r;
      }
      i.watch(
        function () {
          return A;
        },
        function (e) {
          D.value && (null == g ? void 0 : g[e.value]) && y.report(g[e.value]);
        },
        { immediate: !0, deep: !0 }
      ),
        i.onActivated(function () {
          G();
        }),
        i.onBeforeUnmount(function () {
          y.setSession("LAST_MESSAGE_SELECT_CODE", ""), T();
        }),
        i.onDeactivated(function () {
          y.setSession("LAST_MESSAGE_SELECT_CODE", ""), T();
        }),
        G();
      var N = _.useCardLoad(),
        H = N.notifyCurrentRender;
      i.provide("cardLoadManager", N);
      var K = d.useTradeFunc(),
        O = K.curBrokerCode,
        R = K.setCurBrokerCode,
        q = K.setBrokerInfo,
        P = i.computed(function () {
          if (!O.value || 0 === S.value.length) return 0;
          var e = S.value.findIndex(function (e) {
            return e.code === O.value;
          });
          return e > -1 ? e : 0;
        }),
        V = d.useScroll().setTradeHover;
      return {
        curTabIndex: P,
        bridgeShell: "mpweapp",
        renderList: h,
        tabBrokerList: S,
        topWraperHeight: E,
        clickEntry: function (e) {
          var t, n;
          y.report("yy.message_box.".concat(e.msg_box_type, "_entry_click")),
            L(e),
            e.unread_num > 0 &&
              (e.msg_box_type !== p.BACK_END_MESSAGE_ID.platformMessage &&
                B(
                  (function (e, t) {
                    for (var n in t || (t = {})) s.call(t, n) && u(e, n, t[n]);
                    if (o) {
                      var a,
                        i = r(o(t));
                      try {
                        for (i.s(); !(a = i.n()).done; ) {
                          n = a.value;
                          c.call(t, n) && u(e, n, t[n]);
                        }
                      } catch (e) {
                        i.e(e);
                      } finally {
                        i.f();
                      }
                    }
                    return e;
                  })(
                    { msg_box_type: e.msg_box_type },
                    "trade" === e.msg_box_type
                      ? {
                          dealer_code:
                            null == (n = null == (t = S.value) ? void 0 : t[0])
                              ? void 0
                              : n.code,
                        }
                      : {}
                  )
                ),
              y.report("yy.message_box.".concat(e.msg_box_type, "_red_click"), {
                msg_num: e.unread_num,
              })),
            "trade" === e.msg_box_type &&
              S.value.forEach(function (e) {
                y.report("yy.message_box.trade_tab_brow", {
                  dealer_code: e.code,
                });
              });
        },
        handleTabClick: function (e) {
          H(e.code),
            R(e.code),
            q(e),
            e.unreadNum &&
              (B({ msg_box_type: e.msg_box_type, dealer_code: e.code }),
              y.report("yy.message_box.trade_red_tab_click", {
                dealer_code: e.code,
                msg_num: e.unreadNum,
              })),
            V(),
            y.report("yy.message_box.trade_tab_click", { dealer_code: e.code }),
            y.setSession("LAST_MESSAGE_SELECT_CODE", e.code);
        },
        canclear: C,
        currentIndex: k,
        currentValue: A,
        clearAll: function () {
          y.report("yy.message_box.list_clearall_click"),
            C.value
              ? y.modal({
                  content: "将全部信息标记为已读?",
                  showCancel: !0,
                  success: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : { confirm: !0 };
                    e.confirm
                      ? (I(), y.report("yy.message_box.list_clearall_confirm"))
                      : y.report("yy.message_box.list_clearall_cancel");
                  },
                  fail: function () {
                    y.report("yy.message_box.list_clearall_cancel");
                  },
                })
              : y.toast("当前无未读消息", "none");
        },
        initData: G,
        dataReady: f,
        setTradeHover: V,
        readMessage: m.readMessage,
        BACK_END_MESSAGE_ID: p.BACK_END_MESSAGE_ID,
      };
    },
  };
Array ||
  (
    i.resolveComponent("brokerTab") +
    i.resolveComponent("messageEntry") +
    i.resolveComponent("messageTrade") +
    i.resolveComponent("messageDingPan") +
    i.resolveComponent("messageCustom") +
    i.resolveComponent("messageInteraction")
  )();
var y = i._export_sfc(b, [
  [
    "render",
    function (e, r, t, n, a, o) {
      return i.e(
        { a: n.dataReady },
        n.dataReady
          ? i.e(
              { b: n.tabBrokerList.length > 1 },
              n.tabBrokerList.length > 1
                ? {
                    c: i.o(n.handleTabClick, 1245),
                    d: i.p({
                      "broker-list": n.tabBrokerList,
                      "cur-index": n.curTabIndex,
                    }),
                  }
                : {},
              {
                e: i.o(n.clickEntry, 1246),
                f: i.o(n.clearAll, 1247),
                g: i.p({
                  renderList: n.renderList,
                  currentIndex: n.currentIndex,
                  "current-value": n.currentValue,
                }),
              }
            )
          : {},
        { h: n.dataReady },
        n.dataReady
          ? {
              i: i.w(
                function (e, r, t) {
                  var a = e.curBrokerCode,
                    o = (e.brokerList, e.tabHeight),
                    s = e.contentHeight;
                  return {
                    a: i.r("plugin", {
                      curBrokerCode: a,
                      brokerList: n.tabBrokerList,
                      tabHeight: o,
                      contentHeight: s,
                    }),
                    b: t,
                    c: r,
                  };
                },
                { name: "plugin", path: "i", vueId: "1de7a322-2" }
              ),
              j: n.currentValue !== n.BACK_END_MESSAGE_ID.trade ? 1 : "",
              k: i.p({
                brokerList: n.tabBrokerList,
                topWraperHeight: n.topWraperHeight,
              }),
              l: n.currentValue === n.BACK_END_MESSAGE_ID.chooseRemind,
              m: n.currentValue === n.BACK_END_MESSAGE_ID.platformMessage,
              n: n.currentValue === n.BACK_END_MESSAGE_ID.interaction,
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-1de7a322"],
]);
wx.createComponent(y);
