var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var n = require("../../common/vendor.js"),
  a = require("../../utils/index.js"),
  u = require("./enum.js"),
  i = {
    expose: ["changeStatus"],
    props: {
      ribbon: { type: Boolean, default: !1 },
      hideCloseIcon: { type: Boolean, default: !1 },
    },
    setup: function (i, r) {
      var o,
        s,
        l,
        c,
        p = r.emit,
        f = n.ref({}),
        m = n.ref({}),
        d = n.ref({}),
        v = n.ref({}),
        b = n.ref(!1),
        S = n.ref(!1),
        h = n.ref(""),
        x = n.ref(!0),
        g = n.ref(u.ActionStyle.BuyStyle),
        y = n.ref(""),
        A = n.ref(""),
        T = n.ref(""),
        w = n.computed(function () {
          return "simple-result--body__".concat(h.value);
        }),
        C = n.computed(function () {
          return x.value
            ? "default-circle-bg"
            : h.value === u.SimpleAnimStatus.Success
            ? "success-circle-bg"
            : h.value === u.SimpleAnimStatus.Fail
            ? "fail-circle-bg"
            : "default-circle-bg";
        }),
        k = n.computed(function () {
          return h.value !== u.SimpleAnimStatus.Success
            ? "simple-result-fail-icon"
            : "simple-result-succ-icon";
        }),
        B = n.computed(function () {
          if (y.value) return y.value;
        }),
        D = n.computed(function () {
          if (T.value) return T.value;
        });
      function F() {
        (S.value = !1),
          (f.value = {}),
          (m.value = {}),
          (d.value = {}),
          (v.value = {}),
          (x.value = !0),
          clearTimeout(o),
          clearTimeout(s),
          (h.value = u.SimpleAnimStatus.Loading);
      }
      function q() {
        (b.value = !0),
          clearTimeout(o),
          (s = setTimeout(function () {
            clearTimeout(s), (b.value = !1);
          }, 2200));
      }
      function I(e) {
        return j.apply(this, arguments);
      }
      function j() {
        return (j = t(
          e().mark(function t(i) {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (function (e) {
                        var t =
                          h.value === u.SimpleAnimStatus.Success
                            ? "rgba(28, 170, 60, 0.05)"
                            : "rgba(230, 53, 53, 0.05)";
                        e.backgroundColor(t).step({ duration: 100 }),
                          (f.value = e.export());
                      })(i),
                      (function () {
                        var e = n.index.createAnimation({
                          timingFunction: "ease",
                        });
                        "succ" === h.value
                          ? e.width("100%").step({ duration: 1e3 })
                          : e.height("100%").step({ duration: 1e3 }),
                          (m.value = e.export());
                      })(),
                      (e.next = 4),
                      a.sleep(500)
                    );
                  case 4:
                    !(function (e) {
                      e.translateY("-91rpx").step({ duration: 600 }),
                        (f.value = e.export());
                    })(i),
                      (function () {
                        var e = n.index.createAnimation({
                          transformOrigin: "0",
                          duration: 600,
                          timingFunction: "ease",
                        });
                        e.translateX("-50%").translateY("-91rpx").step(),
                          (d.value = e.export());
                      })(),
                      (function () {
                        var e = n.index.createAnimation({
                          duration: 600,
                          timingFunction: "ease",
                        });
                        e.opacity(1).translateY(0).step(),
                          (v.value = e.export());
                      })();
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function R(e) {
        (y.value = e.statusTitle || ""),
          (T.value = e.buttonText || ""),
          e.actionStyle && (g.value = e.actionStyle),
          (S.value = !0),
          (l = (function () {
            var e = n.index.createAnimation({
              timingFunction: "ease",
              transformOrigin: "0",
            });
            return (
              e.scale(1).opacity(1).translateX("-50%").step({ duration: 200 }),
              e.scale(1).translateX("-50%").step({ duration: 60 }),
              (f.value = e.export()),
              e
            );
          })()),
          (c = a.sleep(1e3));
      }
      function L(e) {
        return _.apply(this, arguments);
      }
      function _() {
        return (_ = t(
          e().mark(function t(n) {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (y.value = n.statusTitle || ""),
                      (T.value = n.buttonText || ""),
                      (h.value = u.SimpleAnimStatus.Success),
                      (A.value = ""),
                      (e.next = 6),
                      c
                    );
                  case 6:
                    return (x.value = !1), (e.next = 9), I(l);
                  case 9:
                    i.ribbon && (o = setTimeout(q, 150));
                  case 10:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function X(e) {
        return Y.apply(this, arguments);
      }
      function Y() {
        return (Y = t(
          e().mark(function t(n) {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (y.value = n.statusTitle || ""),
                      (T.value = n.buttonText || ""),
                      (h.value = u.SimpleAnimStatus.Fail),
                      (e.next = 5),
                      c
                    );
                  case 5:
                    (A.value = n.tips), (x.value = !1), I(l);
                  case 8:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      return (
        n.watch(
          function () {
            return S.value;
          },
          function () {
            p("tradeResultVisibleChange", S.value);
          }
        ),
        {
          show: S,
          status: h,
          tips: A,
          back: F,
          loading: x,
          iconAnimationData: f,
          iconLogoAnimationData: m,
          textAnimationData: d,
          orderInfoWrapperAnimationData: v,
          showColouredRibbon: b,
          statusText: B,
          btnTxt: D,
          bodyClass: w,
          circleBg: C,
          statusIcon: k,
          buttonText: T,
          actionStyle: g,
          handleStart: R,
          handleSuccess: L,
          handleFail: X,
          handleButtonClick: function () {
            p("buttonClick", { status: h.value }), F();
          },
          changeStatus: function (e) {
            e.status &&
              (e.status !== u.SimpleAnimStatus.Loading
                ? e.status !== u.SimpleAnimStatus.Success
                  ? e.status !== u.SimpleAnimStatus.Fail || X(e)
                  : L(e)
                : R(e));
          },
        }
      );
    },
  },
  r = n._export_sfc(i, [
    [
      "render",
      function (e, t, a, u, i, r) {
        return n.e(
          { a: u.show },
          u.show
            ? n.e(
                { b: !a.hideCloseIcon },
                a.hideCloseIcon
                  ? {}
                  : {
                      c: n.o(function () {
                        return u.back && u.back.apply(u, arguments);
                      }),
                    },
                { d: u.loading },
                (u.loading, {}),
                {
                  e: u.iconLogoAnimationData,
                  f: n.n(u.statusIcon),
                  g: u.iconAnimationData,
                  h: n.n(u.circleBg),
                  i: n.t(u.statusText),
                  j: u.textAnimationData,
                  k: u.loading,
                },
                (u.loading, {}),
                {
                  l: n.t(u.tips),
                  m: n.t(u.buttonText),
                  n: n.n(u.actionStyle),
                  o: n.o(function () {
                    return (
                      u.handleButtonClick &&
                      u.handleButtonClick.apply(u, arguments)
                    );
                  }),
                  p: u.orderInfoWrapperAnimationData,
                  q: u.showColouredRibbon,
                },
                (u.showColouredRibbon, {}),
                { r: n.n(u.bodyClass) }
              )
            : {}
        );
      },
    ],
  ]);
wx.createComponent(r);
