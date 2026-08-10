var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../common/vendor.js"),
  t = require("../utils/util.js"),
  o = n.defineComponent({
    name: "MonitoringRemindPop",
    props: {
      hasBottom: { type: Boolean, default: !1 },
      enableTheme: { type: Boolean, default: !1 },
    },
    setup: function (o, r) {
      var a = this,
        i = r.emit,
        u = n.ref(!0),
        c = n.inject("isSubscribed", !1),
        l = n.computed(function () {
          var e;
          return "boolean" == typeof c
            ? c
            : null != (e = null == c ? void 0 : c.value) && e;
        }),
        s = t.getTheme(),
        d = n.computed(function () {
          return o.enableTheme ? s : "white";
        }),
        f = n.reactive([
          { id: 1, text: "股价新高/新低", delay: 1883, show: !1 },
          { id: 2, text: "公司大事提醒", delay: 425, show: !1 },
          { id: 3, text: "涨跌停提醒", delay: 1258, show: !1 },
        ]),
        h = n.ref(null),
        p = [],
        m = function () {
          for (; p.length; ) {
            var e = p.pop();
            clearTimeout(e);
          }
        },
        v = function () {
          u.value = !1;
        };
      return (
        n.onMounted(function () {
          m(),
            f.forEach(function (e) {
              e.show = !1;
            }),
            f.forEach(function (e) {
              var n = setTimeout(function () {
                e.show = !0;
              }, e.delay);
              p.push(n);
            });
        }),
        n.onBeforeUnmount(function () {
          m();
        }),
        {
          showPop: u,
          lite: !1,
          currentTheme: d,
          radarSweepIcon:
            "https://st.gtimg.com/design/36c5f1f683fee0cdd6e9d3891b4a8fc3.png",
          radarDots: f,
          radarContainerRef: h,
          open: function () {
            u.value = !0;
          },
          close: v,
          handleClose: function () {
            v(), m(), i("close");
          },
          handleConfirm: function () {
            return (
              (n = a),
              null,
              (t = e().mark(function n() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        i("confirm"), v();
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, n);
              })),
              new Promise(function (e, o) {
                var r = function (e) {
                    try {
                      i(t.next(e));
                    } catch (e) {
                      o(e);
                    }
                  },
                  a = function (e) {
                    try {
                      i(t.throw(e));
                    } catch (e) {
                      o(e);
                    }
                  },
                  i = function (n) {
                    return n.done
                      ? e(n.value)
                      : Promise.resolve(n.value).then(r, a);
                  };
                i((t = t.apply(n, null)).next());
              })
            );
            var n, t;
          },
          isSubscribed: l,
        }
      );
    },
  }),
  r = n._export_sfc(o, [
    [
      "render",
      function (e, t, o, r, a, i) {
        return n.e(
          { a: e.showPop },
          e.showPop
            ? {
                b: n.o(function () {
                  return e.handleClose && e.handleClose.apply(e, arguments);
                }, 2360),
                c: n.o(function () {
                  return e.handleClose && e.handleClose.apply(e, arguments);
                }, 2361),
                d: e.radarSweepIcon,
                e: n.f(e.radarDots, function (e, t, o) {
                  return {
                    a: n.t(e.text),
                    b: e.id,
                    c: n.n("radar-dot--".concat(e.id)),
                    d: n.n({ "radar-dot--show": e.show }),
                  };
                }),
                f: n.t(e.isSubscribed ? "立即开启" : "关注公众号，立即开启"),
                g: n.n(e.lite ? "lite-style" : ""),
                h: n.o(function () {
                  return e.handleConfirm && e.handleConfirm.apply(e, arguments);
                }, 2362),
                i: n.n({ "bottom-style": e.hasBottom }),
                j: n.n("theme-".concat(e.currentTheme)),
                k: n.n({ lite: e.lite }),
                l: n.o(function () {}, 2363),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-71da7849"],
  ]);
wx.createComponent(r);
