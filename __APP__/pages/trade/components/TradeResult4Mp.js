var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var a = require("../../../common/vendor.js"),
  r = require("../../../model/trade/utils.js"),
  u = require("../../../model/common/useBack.js"),
  i = require("../../../utils/index.js");
require("../../../service/broker.js");
var o = require("../../../utils/getPlatform.js"),
  c = require("../../../service/stat/mp-weixin.js"),
  l = require("../../../config/broker/11100/index.js"),
  s = {
    props: { fundaccount: { type: String, default: "****" } },
    setup: function (s, d) {
      var v = d.emit,
        f = u.usePersonal().toAsset,
        p = a.inject("trade").stock,
        m = a.ref({}),
        x = a.ref({}),
        b = a.ref({}),
        h = a.ref({}),
        g = a.ref(!1),
        y = a.ref(!1),
        w = a.ref(""),
        k = a.ref(""),
        T = a.ref(""),
        q = a.ref(""),
        A = a.ref(""),
        j = a.ref(!0),
        R = a.inject("simpleMode"),
        C = a.inject("embeddedMode"),
        D = a.inject("trade"),
        B = a.computed(function () {
          return r.isBuyAction(T.value);
        }),
        P = a.computed(function () {
          return r.isBuyAction(T.value) ? "买入" : "卖出";
        }),
        H = a.computed(function () {
          return p.value.quantityUnit;
        }),
        F = a.ref(""),
        L = a.ref(""),
        M = a.computed(function () {
          return "succ" !== w.value && F.value
            ? F.value
            : ""
                .concat(B.value ? "买入" : "卖出", "委托")
                .concat(
                  j.value
                    ? "提交中"
                    : "succ" === w.value
                    ? "已提交"
                    : "提交失败"
                );
        }),
        S = a.computed(function () {
          return ""
            .concat(P.value)
            .concat(A.value)
            .concat(H.value, "「")
            .concat(q.value, "」的委托已提交，交易结果稍后将微信通知您");
        });
      function _() {
        z(!1, { auto: !0 });
      }
      var O,
        E,
        W,
        X,
        Y,
        I = {
          jumpTodayOrder: {
            text: "查询今日委托",
            handler: function () {
              v("refreshToday"),
                z(!1, { auto: !0 }),
                c.stat.click("trade.trade.query_today");
            },
          },
        },
        U = a.computed(function () {
          return L.value &&
            "object" == n(L.value) &&
            L.value.text &&
            L.value.handler &&
            "function" == typeof L.value.handler
            ? L.value
            : L.value && I[L.value]
            ? I[L.value]
            : { text: "返回下单", handler: _ };
        }),
        G = a.ref(!0);
      function V() {
        O && (clearTimeout(O), (O = null)),
          E && (clearTimeout(E), (E = null)),
          W && (clearTimeout(W), (W = null));
      }
      function z(e, t) {
        (y.value = !1),
          (g.value = !1),
          Z(),
          e && v("close"),
          v("showConfirmDialog", !1),
          (j.value = !0),
          V(),
          (null == t ? void 0 : t.auto) ||
            c.stat.click("trade.trade.result.close");
      }
      function J() {
        f({ query: { tab: "history" } }), (a.index.xxx = "trade"), V();
      }
      function K() {
        (g.value = !0),
          clearTimeout(O),
          (E = setTimeout(function () {
            clearTimeout(E), (g.value = !1), z(!1, { auto: !0 });
          }, 2200));
      }
      function N(e) {
        return Q.apply(this, arguments);
      }
      function Q() {
        return (Q = t(
          e().mark(function t(n) {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (function (e) {
                        var t =
                          "succ" === w.value
                            ? "rgba(28, 170, 60, 0.06)"
                            : "rgba(255, 137, 30, 0.05)";
                        e.backgroundColor(t).step({ duration: 100 }),
                          (m.value = e.export());
                      })(n),
                      (function () {
                        var e = a.index.createAnimation({
                          timingFunction: "ease",
                        });
                        "succ" === w.value
                          ? e.width("100%").step({ duration: 1e3 })
                          : e.height("100%").step({ duration: 1e3 }),
                          (x.value = e.export());
                      })(),
                      (e.next = 4),
                      i.sleep(500)
                    );
                  case 4:
                    !(function (e) {
                      e.translateY("-91rpx").step({ duration: 600 }),
                        (m.value = e.export());
                    })(n),
                      (function () {
                        var e = a.index.createAnimation({
                          transformOrigin: "0",
                          duration: 600,
                          timingFunction: "ease",
                        });
                        e.translateX("-50%").translateY("-91rpx").step(),
                          (b.value = e.export());
                      })(),
                      (function () {
                        var e = a.index.createAnimation({
                          duration: 600,
                          timingFunction: "ease",
                        });
                        e.opacity(1).translateY(0).step(),
                          (h.value = e.export());
                      })();
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function Z() {
        (m.value = {}), (x.value = {}), (b.value = {}), (h.value = {});
      }
      var $,
        ee,
        te,
        ne = o.getPlatform(),
        ae = ne.isPCWeixin,
        re = ne.isMpPlugin,
        ue = ae && re;
      return (
        a.watch(
          function () {
            return y.value;
          },
          function () {
            v("tradeResultVisibleChange", y.value);
          }
        ),
        a.onPageHide(function () {
          G.value = !1;
        }),
        a.onPageShow(function () {
          G.value = !0;
        }),
        {
          show: y,
          status: w,
          tips: k,
          succTips: S,
          isBuy: B,
          actionText: P,
          simpleMode: R,
          backTrade: z,
          toAssetOrderTab: J,
          toAssetTab: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "unknow";
            c.stat.click("trade.trade.result.".concat(e)), J();
          },
          quantity: A,
          quantityUnit: H,
          loading: j,
          iconAnimationData: m,
          iconLogoAnimationData: x,
          textAnimationData: b,
          orderInfoWrapperAnimationData: h,
          showColouredRibbon: g,
          handleTransitionEnd: function () {},
          pageShow: G,
          statusText: M,
          broker: l.brokerConfig,
          embeddedMode: C,
          buttonHandlerRender: U,
          tradeSubmit:
            ((te = t(
              e().mark(function t(n) {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((e.t0 = G.value || ue), !e.t0)) {
                          e.next = 22;
                          break;
                        }
                        if (((e.t1 = y.value), !e.t1)) {
                          e.next = 18;
                          break;
                        }
                        return (
                          (y.value = !1),
                          (g.value = !1),
                          (w.value = ""),
                          (k.value = ""),
                          (T.value = ""),
                          (q.value = ""),
                          (A.value = ""),
                          (F.value = ""),
                          (L.value = ""),
                          Z(),
                          (j.value = !0),
                          V(),
                          (e.next = 18),
                          i.sleep(10)
                        );
                      case 18:
                        (y.value = !0),
                          (T.value = n.action),
                          (X = (function () {
                            var e = a.index.createAnimation({
                              timingFunction: "ease",
                              transformOrigin: "0",
                            });
                            return (
                              e
                                .scale(1)
                                .opacity(1)
                                .translateX("-50%")
                                .step({ duration: 200 }),
                              e
                                .scale(1)
                                .translateX("-50%")
                                .step({ duration: 60 }),
                              (m.value = e.export()),
                              e
                            );
                          })()),
                          (Y = i.sleep(1e3));
                      case 22:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            )),
            function (e) {
              return te.apply(this, arguments);
            }),
          tradeSuccess:
            ((ee = t(
              e().mark(function t(n) {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((e.t0 = G.value || ue), !e.t0)) {
                          e.next = 12;
                          break;
                        }
                        return (
                          (w.value = "succ"),
                          (A.value = n.quantity),
                          (q.value = n.name),
                          (e.next = 7),
                          Y
                        );
                      case 7:
                        return (j.value = !1), (e.next = 10), N(X);
                      case 10:
                        B.value
                          ? (O = setTimeout(K, 150))
                          : (W = setTimeout(function () {
                              z(!1, { auto: !0 });
                            }, 1300)),
                          c.stat.click("trade.trade.result.succbrow");
                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            )),
            function (e) {
              return ee.apply(this, arguments);
            }),
          tradeFail:
            (($ = t(
              e().mark(function t(n) {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((e.t0 = G.value || ue), !e.t0)) {
                          e.next = 11;
                          break;
                        }
                        return (
                          (w.value = "fail"),
                          (k.value = n.retmsg),
                          (F.value = n.errorTitle || ""),
                          (L.value = n.buttonHandler || ""),
                          (e.next = 8),
                          Y
                        );
                      case 8:
                        (j.value = !1),
                          N(X),
                          c.stat.click("trade.trade.result.failbrow");
                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            )),
            function (e) {
              return $.apply(this, arguments);
            }),
          tradeResultBtnLoading: D.tradeResultBtnLoading,
        }
      );
    },
  },
  d = a._export_sfc(s, [
    [
      "render",
      function (e, t, n, r, u, i) {
        return a.e(
          { a: r.show },
          r.show
            ? a.e(
                { b: r.loading },
                (r.loading, {}),
                {
                  c: r.iconLogoAnimationData,
                  d: a.n("succ" === r.status ? "success" : "warning"),
                  e: a.o(function () {
                    return (
                      r.handleTransitionEnd &&
                      r.handleTransitionEnd.apply(r, arguments)
                    );
                  }),
                  f: r.iconAnimationData,
                  g: a.t(r.statusText),
                  h: r.textAnimationData,
                  i: r.loading,
                },
                r.loading
                  ? {}
                  : "succ" === r.status
                  ? { k: a.t(r.succTips) }
                  : { l: a.t(r.tips) },
                {
                  j: "succ" === r.status,
                  m: "fail" === r.status && !r.loading,
                },
                "fail" !== r.status || r.loading
                  ? {}
                  : {
                      n: a.t(r.buttonHandlerRender.text),
                      o: a.n(r.isBuy ? "buy" : "sell"),
                      p: r.tradeResultBtnLoading,
                      q: a.o(function () {
                        var e;
                        return (
                          r.buttonHandlerRender.handler &&
                          (e = r.buttonHandlerRender).handler.apply(
                            e,
                            arguments
                          )
                        );
                      }),
                    },
                { r: r.orderInfoWrapperAnimationData, s: r.showColouredRibbon },
                (r.showColouredRibbon, {}),
                { t: a.n("trade-result--body__".concat(r.status)) }
              )
            : {}
        );
      },
    ],
  ]);
wx.createComponent(d);
