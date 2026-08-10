require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  t = require("../../../../model/apply/useApply.js"),
  n = require("../../../../model/apply/usePreReview.js"),
  o = require("../../../../utils/getPlatform.js"),
  a = require("../../../../service/stat/mp-weixin.js");
require("../../../../service/broker.js");
var u = require("../../../../config/broker/11100/index.js");
Math || e.unref(r)();
var r = function () {
    return "../../../../bizs/apply/video/launcher.js";
  },
  i = e.defineComponent({
    __name: "StepButtons",
    props: {
      fixed: { type: Boolean, default: !1 },
      pureMode: { type: Boolean, default: !1 },
      hidePrevButton: { type: Boolean, default: !1 },
      hideNextButton: { type: Boolean, default: !1 },
      disableNextButton: { type: Boolean, default: !1 },
      loadingNextButton: { type: Boolean, default: !1 },
      nextButtonText: {},
      prevButtonText: {},
      customPrevAction: { type: Boolean, default: !1 },
      stat: {},
      transparentBg: { type: Boolean, default: !1 },
      enableMpLauncher: { type: Boolean, default: !1 },
      mpLauncherOriginId: {},
      mpLauncherPath: {},
      customClass: {},
      showSafeIcon: { type: Boolean, default: !1 },
    },
    emits: ["clickPrev", "clickNext", "mpLaunchSuccess", "mpLaunchFail"],
    setup: function (r, i) {
      var p = i.emit,
        l = t.useApply(),
        s = l.isRecoverMode,
        c = l.navigatePrevStep,
        d = l.isFirstStep,
        v = l.isPreReviewAbt,
        B = n.usePreReview(),
        f = B.isModifyMode,
        h = B.goPrevModifyStep,
        x = r,
        m = p,
        y = !!e.useSlots().default,
        P = e.computed(function () {
          return x.customPrevAction
            ? x.hidePrevButton
            : !(!s.value && !x.hidePrevButton) ||
                !!u.brokerConfig.apply.hidePreviousStepBtn ||
                !!d.value ||
                !o.getPlatform().isWeixin;
        });
      function g() {
        m("clickPrev"),
          x.stat && a.stat.click("trade.apply.prevbutton.".concat(x.stat)),
          x.customPrevAction ||
            setTimeout(function () {
              v.value && f.value ? h() : c();
            }, 200);
      }
      function N() {
        m("clickNext");
      }
      function b() {
        m("mpLaunchSuccess");
      }
      function L(e) {
        m("mpLaunchError", e);
      }
      return function (t, n) {
        return e.e(
          { a: y || !P.value || !t.hideNextButton },
          !y && P.value && t.hideNextButton
            ? {}
            : e.e(
                { b: !t.pureMode },
                t.pureMode
                  ? e.e(
                      { r: !P.value },
                      P.value ? {} : { s: e.o(g) },
                      { t: !t.hideNextButton },
                      t.hideNextButton
                        ? {}
                        : {
                            v: e.t(t.nextButtonText || "下一步"),
                            w: t.disableNextButton,
                            x: t.loadingNextButton,
                            y: e.o(N),
                            z: e.o(b),
                            A: e.o(L),
                            B: e.p({
                              enabled: t.enableMpLauncher,
                              username: t.mpLauncherOriginId,
                              path: t.mpLauncherPath,
                            }),
                          },
                      {
                        C: P.value || t.hideNextButton ? 1 : "",
                        D: t.transparentBg ? 1 : "",
                      }
                    )
                  : e.e(
                      { c: !P.value },
                      P.value
                        ? {}
                        : { d: e.t(t.prevButtonText || "上一步"), e: e.o(g) },
                      { f: !t.hideNextButton },
                      t.hideNextButton
                        ? {}
                        : e.e({ g: t.showSafeIcon }, (t.showSafeIcon, {}), {
                            h: e.t(t.nextButtonText || "下一步"),
                            i: e.n(t.customClass),
                            j: t.disableNextButton,
                            k: t.loadingNextButton,
                            l: e.o(N),
                            m: e.o(b),
                            n: e.o(L),
                            o: e.p({
                              enabled: t.enableMpLauncher,
                              username: t.mpLauncherOriginId,
                              path: t.mpLauncherPath,
                            }),
                          }),
                      {
                        p: P.value || t.hideNextButton ? 1 : "",
                        q: t.transparentBg ? 1 : "",
                      }
                    ),
                { E: t.fixed ? 1 : "", F: t.transparentBg ? 1 : "" }
              )
        );
      };
    },
  }),
  p = e._export_sfc(i, [["__scopeId", "data-v-2c6faf13"]]);
wx.createComponent(p);
