var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../common/vendor.js"),
  r = require("../utils/StockBridgeWrapper.js"),
  t = require("../hooks/useDrawerHooks.js"),
  o = n.defineComponent({
    name: "WxClawUnbindDialog",
    props: {
      visible: { type: Boolean, default: !1 },
      userInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    emits: ["close", "confirm"],
    setup: function (o, i) {
      var u = this,
        s = i.emit,
        a = n.ref(!1);
      return {
        emitClose: function () {
          s("close");
        },
        emitConfirm: function () {
          return (
            (n = u),
            null,
            (i = e().mark(function n() {
              var i;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!a.value) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (
                        (a.value = !0),
                        (e.next = 5),
                        t.requestUnbindClawBot(o.userInfo || {})
                      );
                    case 5:
                      (i = e.sent),
                        (a.value = !1),
                        i && "success" === i.retmsg
                          ? s("confirm")
                          : r.StockBridge.toast(
                              "解除绑定失败，请稍后重试",
                              "none"
                            );
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, n);
            })),
            new Promise(function (e, r) {
              var t = function (e) {
                  try {
                    u(i.next(e));
                  } catch (e) {
                    r(e);
                  }
                },
                o = function (e) {
                  try {
                    u(i.throw(e));
                  } catch (e) {
                    r(e);
                  }
                },
                u = function (n) {
                  return n.done
                    ? e(n.value)
                    : Promise.resolve(n.value).then(t, o);
                };
              u((i = i.apply(n, null)).next());
            })
          );
          var n, i;
        },
      };
    },
  }),
  i = n._export_sfc(o, [
    [
      "render",
      function (e, r, t, o, i, u) {
        return n.e(
          { a: e.visible },
          e.visible
            ? {
                b: n.o(function () {
                  return e.emitClose && e.emitClose.apply(e, arguments);
                }, 4870),
                c: n.o(function () {
                  return e.emitConfirm && e.emitConfirm.apply(e, arguments);
                }, 4871),
                d: n.o(function () {}, 4872),
                e: n.o(function () {
                  return e.emitClose && e.emitClose.apply(e, arguments);
                }, 4873),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-aff87c03"],
  ]);
wx.createComponent(i);
