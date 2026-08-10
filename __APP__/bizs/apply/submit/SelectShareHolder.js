var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/toConsumableArray"),
  a = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var t = require("../../../common/vendor.js"),
  n = require("../../../common/components/Dialog/index.js"),
  u = require("../../../cgi/apply.js"),
  o = require("../../../model/apply/useApply.js"),
  l = require("../../../utils/market.js");
Math || (t.unref(c) + t.unref(s) + t.unref(i))();
var c = function () {
    return "../FootPrint.js";
  },
  s = function () {
    return "../../../pages/apply/components/StepButtons/StepButtons.js";
  },
  i = function () {
    return "../../../common/components/Dialog/Dialog.js";
  },
  d = t.defineComponent({
    __name: "SelectShareHolder",
    props: {
      szShareholdercard: { default: [] },
      shShareholdercard: { default: [] },
    },
    setup: function (c) {
      var s,
        i = c,
        d = (null == (s = t.getCurrentInstance()) ? void 0 : s.proxy) || {},
        h = o.useApply(),
        p = h.commitApplyData,
        v = h.navigateNextStep,
        f = h.curStepConf,
        m = (void 0 === f ? {} : f).selectShareHolder,
        k = void 0 === m ? {} : m,
        b = t.computed(function () {
          return (null == k ? void 0 : k.noticeTips) || "";
        }),
        y = t.computed(function () {
          return k.defaultShowTwoMarkets || !!i.shShareholdercard.length;
        }),
        _ = t.computed(function () {
          return k.defaultShowTwoMarkets || !!i.szShareholdercard.length;
        }),
        g = t.ref(!1),
        S = t.ref(!1);
      t.onMounted(function () {
        d.$sdk &&
          d.$sdk.setPageTitle &&
          d.$sdk.setPageTitle({ title: "从其他券商转户" }),
          d.$stat.click("trade.apply.apply.select_shareholdercard.brow"),
          k.defaultSelectMarket && ((g.value = y.value), (S.value = _.value));
      });
      var x = t.ref(""),
        j = t.ref("");
      function C(e) {
        "sh" === e
          ? ((g.value = !g.value),
            (j.value = ""),
            d.$stat.click(
              "trade.apply.apply.sh_market_" + (g.value ? "select" : "hide")
            ))
          : ((S.value = !S.value),
            (x.value = ""),
            d.$stat.click(
              "trade.apply.apply.sz_market_" + (S.value ? "select" : "hide")
            ));
      }
      function T(e) {
        var r = e.market,
          a = e.shareholderCard,
          t = e.index;
        "sh" === r
          ? ((g.value = !0),
            (j.value = a),
            d.$stat.click(
              "trade.apply.apply.sh_sharehodercard_select",
              void 0,
              void 0,
              { card_no: t + 1 }
            ))
          : ((S.value = !0),
            (x.value = a),
            d.$stat.click(
              "trade.apply.apply.sz_sharehodercard_select",
              void 0,
              void 0,
              { card_no: t + 1 }
            ));
      }
      var q = t.computed(function () {
          return !(
            (!g.value && !S.value) ||
            (g.value && i.shShareholdercard.length && !j.value) ||
            (S.value && i.szShareholdercard.length && !x.value)
          );
        }),
        z = !1;
      function w() {
        return A.apply(this, arguments);
      }
      function A() {
        return (A = a(
          e().mark(function a() {
            var t;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (z) {
                        e.next = 15;
                        break;
                      }
                      return (
                        (z = !0),
                        (e.prev = 2),
                        (t = []
                          .concat(
                            r(S.value ? [l.MARKET_CODE_SZ] : []),
                            r(g.value ? [l.MARKET_CODE_SH] : [])
                          )
                          .join(",")),
                        (e.next = 6),
                        p(u.ACTION.MARKET, {
                          markets: t,
                          select_sz_shareholdercard: x.value,
                          select_sh_shareholdercard: j.value,
                        })
                      );
                    case 6:
                      v(), (e.next = 12);
                      break;
                    case 9:
                      (e.prev = 9),
                        (e.t0 = e.catch(2)),
                        n.Dialog({
                          message:
                            e.t0.retmsg || "提交开户申请失败，请稍后再试",
                        });
                    case 12:
                      return (e.prev = 12), (z = !1), e.finish(12);
                    case 15:
                    case "end":
                      return e.stop();
                  }
              },
              a,
              null,
              [[2, 9, 12, 15]]
            );
          })
        )).apply(this, arguments);
      }
      return function (e, r) {
        return t.e(
          { a: _.value },
          _.value
            ? {
                b: t.n(S.value ? "icon-checked-rect" : "icon-checkbox-rect"),
                c: t.o(function (e) {
                  return C("sz");
                }),
                d: t.f(e.szShareholdercard, function (e, r, a) {
                  return {
                    a: t.n(x.value !== e ? "icon-check-box" : "icon-checked"),
                    b: t.t(e),
                    c: e,
                    d: t.o(function (a) {
                      return T({ market: "sz", shareholderCard: e, index: r });
                    }, e),
                  };
                }),
              }
            : {},
          { e: y.value },
          y.value
            ? {
                f: t.n(g.value ? "icon-checked-rect" : "icon-checkbox-rect"),
                g: t.o(function (e) {
                  return C("sh");
                }),
                h: t.f(e.shShareholdercard, function (e, r, a) {
                  return {
                    a: t.n(j.value !== e ? "icon-check-box" : "icon-checked"),
                    b: t.t(e),
                    c: e,
                    d: t.o(function (a) {
                      return T({ market: "sh", shareholderCard: e, index: r });
                    }, e),
                  };
                }),
              }
            : {},
          { i: b.value },
          b.value ? { j: b.value } : {},
          {
            k: t.o(w),
            l: t.p({
              fixed: !0,
              "hide-prev-button": !0,
              "transparent-bg": !0,
              "disable-next-button": !q.value,
              "next-button-text": "提交开户申请",
            }),
            m: t.p({ id: "mp-dialog" }),
          }
        );
      };
    },
  });
wx.createComponent(d);
