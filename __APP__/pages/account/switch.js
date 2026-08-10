var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  t = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  u = function (e, r, t) {
    return r in e
      ? o(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t);
  },
  s = require("../../common/vendor.js"),
  l = {
    components: {
      BrokerLogo: function () {
        return "../apply/components/BrokerLogo.js";
      },
      BrokerActionSheet: function () {
        return "../apply/components/BrokerActionSheet.js";
      },
    },
    setup: function () {
      var o = this,
        l = getApp().globalData.stat,
        p = s.ref([]),
        f = s.ref(!1);
      return (
        s.onMounted(function () {
          return (
            (l = o),
            null,
            (f = e().mark(function o() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), s.sdkBridge.fetchBrokerInfo();
                    case 2:
                      !(function () {
                        var e,
                          o = s.sdkBridge.getHasBindList(),
                          l =
                            null == (e = s.sdkBridge.getCurrentBroker())
                              ? void 0
                              : e.code;
                        p.value = o
                          .map(function (e) {
                            return (
                              (o = (function (e, o) {
                                for (var t in o || (o = {}))
                                  a.call(o, t) && u(e, t, o[t]);
                                if (c) {
                                  var n,
                                    s = r(c(o));
                                  try {
                                    for (s.s(); !(n = s.n()).done; ) {
                                      t = n.value;
                                      i.call(o, t) && u(e, t, o[t]);
                                    }
                                  } catch (e) {
                                    s.e(e);
                                  } finally {
                                    s.f();
                                  }
                                }
                                return e;
                              })({}, e)),
                              (s = { usestatus: e.code === l }),
                              t(o, n(s))
                            );
                            var o, s;
                          })
                          .sort(function (e) {
                            return e.usestatus ? -1 : 0;
                          });
                      })();
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, o);
            })),
            new Promise(function (e, r) {
              var o = function (e) {
                  try {
                    n(f.next(e));
                  } catch (e) {
                    r(e);
                  }
                },
                t = function (e) {
                  try {
                    n(f.throw(e));
                  } catch (e) {
                    r(e);
                  }
                },
                n = function (r) {
                  return r.done
                    ? e(r.value)
                    : Promise.resolve(r.value).then(o, t);
                };
              n((f = f.apply(l, null)).next());
            })
          );
          var l, f;
        }),
        {
          dealerList: p,
          goSwitchAccount: function (e) {
            var r = e.code;
            l.click("switchbroker.main.".concat(r)),
              e.usestatus ||
                (s.sdkBridge.isMaintain({ broker: r, biz: "trade" })
                  ? s.wx$1.navigateTo({
                      url: "/pages/broker/system/error?reason=maintain&broker=".concat(
                        r
                      ),
                    })
                  : s.sdkBridge.navToBrokerPage({
                      broker: r,
                      name: "AccountSwitching",
                    }));
          },
          onBrokerSheetShow: function () {
            (f.value = !0),
              l.click("base.switch_broker.gobrokermanagement_click");
          },
          onBrokerSheetClose: function () {
            f.value = !1;
          },
          showAccountBrokerSheet: f,
        }
      );
    },
  };
Array ||
  (
    s.resolveComponent("mp-privacy-dialog") +
    s.resolveComponent("stock-privacy-dialog") +
    s.resolveComponent("broker-logo") +
    s.resolveComponent("broker-action-sheet")
  )();
var p = s._export_sfc(l, [
  [
    "render",
    function (e, r, o, t, n, c) {
      return {
        a: e.rootFontSize,
        b: s.p({ "no-auto": !0 }),
        c: s.f(t.dealerList, function (e, r, o) {
          return {
            a: "5b0853a3-2-" + o,
            b: s.p({ "broker-code": e.code }),
            c: s.t(e.name),
            d: e.usestatus ? "" : 1,
            e: e.code,
            f: e.usestatus ? 1 : "",
            g: s.o(
              function (r) {
                return t.goSwitchAccount(e);
              },
              257,
              e.code
            ),
          };
        }),
        d: s.o(function () {
          return t.onBrokerSheetShow && t.onBrokerSheetShow.apply(t, arguments);
        }, 258),
        e: t.showAccountBrokerSheet,
        f: s.o(t.onBrokerSheetClose, 259),
        g: s.p({ type: "normal" }),
      };
    },
  ],
  ["__scopeId", "data-v-5b0853a3"],
]);
wx.createPage(p);
