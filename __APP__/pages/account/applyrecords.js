var e = require("../../@babel/runtime/helpers/regeneratorRuntime");
require("../../@babel/runtime/helpers/Arrayincludes");
var n = require("../../common/vendor.js"),
  t = getApp().globalData.stat,
  r = {
    components: {
      TabBar: function () {
        return "./components/Tabbar.js";
      },
      BrokerLogo: function () {
        return "./components/BrokerLogo.js";
      },
    },
    setup: function () {
      var e = (function () {
          var e = n.useBrokerInfo(),
            t = e.fetchData,
            r = e.dealerList,
            o = e.navigateToTrade,
            a = e.getBrokerMaintain;
          function i(e) {
            return (
              (n.USERSTATE_PID.HASACCOUNT |
                n.USERSTATE_PID.UNBIND |
                n.USERSTATE_PID.BIND_ACTIVE |
                n.USERSTATE_PID.BIND_UNACTIVE) &
              e
            );
          }
          var c = n.computed(function () {
              return r.value.filter(function (e) {
                return "1" === String(e.can_apply) && !i(e.userstateFront);
              });
            }),
            u = n.computed(function () {
              return r.value.filter(function (e) {
                return i(e.userstateFront);
              });
            });
          function l(e, t) {
            return a({
              bulletinType:
                n.BULLETIN_TYPE["IN_PROGRESS" === t ? "APPLY" : "TRADE"],
              brokerCode: null == e ? void 0 : e.code,
            }).isMaintain;
          }
          return {
            list: n.computed(function () {
              return { IN_PROGRESS: c.value || [], FINISHED: u.value || [] };
            }),
            isMaintain: l,
            onItemClick: function (e, t) {
              var r = e.code,
                a = e.name,
                i = void 0 === a ? "" : a,
                c = e.maintainText,
                u = l(e, t);
              if (
                (getApp().globalData.stat.click(
                  "trade.multibroker.applyrecords.".concat(
                    "IN_PROGRESS" === t ? "inprogress" : "finished",
                    ".main.clickbroker"
                  ),
                  { dealercode: r }
                ),
                !u)
              )
                return "IN_PROGRESS" === t
                  ? o({ dealercode: r, name: "ApplyGuide" })
                  : "FINISHED" === t
                  ? o({ dealercode: r, name: "AssetIndex" })
                  : void 0;
              n.wx$1.showModal({
                title: "",
                content: c || "".concat(i, "维护中，请稍后再试或切换其他券商"),
                showCancel: !1,
                confirmText: "我知道了",
              });
            },
            goToApply: function () {
              getApp().globalData.stat.click(
                "trade.multibroker.applyrecords.finished.clickapply"
              ),
                n.wx$1.switchTab({ url: "/pages/index/trade" });
            },
            fetchData: t,
          };
        })(),
        r = e.list,
        o = e.isMaintain,
        a = e.onItemClick,
        i = e.goToApply,
        c = e.fetchData,
        u = ["black", "dark"].includes(n.StockBridge.getStorage("user/skin"))
          ? "dark"
          : "light",
        l = [
          { key: "IN_PROGRESS", name: "待完成" },
          { key: "FINISHED", name: "已完成" },
        ],
        s = n.ref(0);
      function p(e) {
        var n;
        s.value = e;
        var r = null == (n = l[e]) ? void 0 : n.id;
        r &&
          t.click(
            "trade.multibroker.applyrecords.".concat(
              "IN_PROGRESS" === r ? "inprogress" : "finished",
              ".tab"
            )
          );
      }
      return {
        tabs: l,
        curTab: s,
        list: r,
        isMaintain: o,
        switchTab: p,
        onSwiperChange: function (e) {
          var n = ((null == e ? void 0 : e.detail) || {}).current;
          p(void 0 === n ? 0 : n);
        },
        onItemClick: a,
        goToApply: i,
        fetchData: c,
        skin: u,
      };
    },
    onShow: function () {
      return (
        (t = this),
        null,
        (r = e().mark(function t() {
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return n.wx$1.showLoading(), (e.next = 3), this.fetchData();
                  case 3:
                    n.wx$1.hideLoading();
                  case 4:
                  case "end":
                    return e.stop();
                }
            },
            t,
            this
          );
        })),
        new Promise(function (e, n) {
          var o = function (e) {
              try {
                i(r.next(e));
              } catch (e) {
                n(e);
              }
            },
            a = function (e) {
              try {
                i(r.throw(e));
              } catch (e) {
                n(e);
              }
            },
            i = function (n) {
              return n.done ? e(n.value) : Promise.resolve(n.value).then(o, a);
            };
          i((r = r.apply(t, null)).next());
        })
      );
      var t, r;
    },
  };
Array ||
  (
    n.resolveComponent("mp-privacy-dialog") +
    n.resolveComponent("stock-privacy-dialog") +
    n.resolveComponent("TabBar") +
    n.resolveComponent("broker-logo")
  )(),
  Math;
var o = n._export_sfc(r, [
  [
    "render",
    function (e, t, r, o, a, i) {
      return {
        a: e.rootFontSize,
        b: n.p({ "no-auto": !0 }),
        c: n.o(o.switchTab, 260),
        d: n.p({ current: o.curTab, tabs: o.tabs }),
        e: n.f(o.tabs, function (e, t, r) {
          return n.e(
            { a: o.list[e.key].length > 0 },
            o.list[e.key].length > 0
              ? {
                  b: n.f(o.list[e.key], function (t, a, i) {
                    return n.e(
                      {
                        a: "062ea3de-3-" + r + "-" + i,
                        b: n.p({ "broker-code": t.code }),
                        c: n.t(t.name),
                        d: o.isMaintain(t, e.key),
                      },
                      (o.isMaintain(t, e.key), {}),
                      {
                        e: n.t(
                          "IN_PROGRESS" === e.key
                            ? t.modify_time
                              ? "继续开户"
                              : "立即开户"
                            : "前往交易"
                        ),
                        f: n.o(
                          function (n) {
                            return o.onItemClick(t, e.key);
                          },
                          261,
                          t.code
                        ),
                        g: t.code,
                        h: a > 0 ? 1 : "",
                      }
                    );
                  }),
                }
              : n.e(
                  { c: "FINISHED" === e.key },
                  "FINISHED" === e.key
                    ? {
                        d: n.o(
                          function (e) {
                            return o.goToApply();
                          },
                          262,
                          e.key
                        ),
                      }
                    : {}
                ),
            { e: e.key }
          );
        }),
        f: o.curTab,
        g: n.o(function () {
          return o.onSwiperChange && o.onSwiperChange.apply(o, arguments);
        }, 263),
        h: o.skin,
      };
    },
  ],
]);
wx.createPage(o);
