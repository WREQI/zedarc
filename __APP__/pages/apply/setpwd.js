var e = require("../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var a = require("../../common/vendor.js"),
  o = require("../../model/apply/useApply.js"),
  u = require("../../utils/crypt/index.js"),
  i = require("../../cgi/apply.js"),
  s = require("../../model/apply/profile/utils/pwdValid.js");
require("../../utils/index.js");
var l = require("../../common/components/Dialog/index.js"),
  p = require("../../service/aegis/platform/not-wujie.js"),
  c = require("../../stores/apply/useDigitalHuman.js"),
  d = require("./composables/useDigitalHuman.js"),
  f = require("../../mixin/platforms/index.js");
Array || (a.resolveComponent("ApplyWrap") + a.resolveComponent("GlobalWrap"))();
Math ||
  (
    x +
    a.unref(m) +
    a.unref(g) +
    a.unref(v) +
    a.unref(y) +
    a.unref(b) +
    function () {
      return "../../components/ApplyWrap/ApplyWrap.js";
    } +
    function () {
      return "../../components/GlobalWrap/GlobalWrap.js";
    }
  )();
var m = function () {
    return "../../bizs/apply/ProgressBar.js";
  },
  v = function () {
    return "./components/StepButtons/StepButtons.js";
  },
  g = function () {
    return "../../common/components/PasswordInput.js";
  },
  y = function () {
    return "../../common/components/NumberKeyboard/index.js";
  },
  b = function () {
    return "../../common/components/Dialog/Dialog.js";
  },
  x = function () {
    return "./components/DigitalHuman/index.js";
  },
  h = { mixins: [f.pluginMixins] },
  w = a.defineComponent(
    r(
      r({}, h),
      {},
      {
        __name: "setpwd",
        setup: function (r) {
          var f = a.getCurrentInstance().proxy,
            m = o.useApply(),
            v = m.applyInfo,
            g = m.isRecoverMode,
            y = m.commitApplyData,
            b = m.curStepInfo,
            x = m.curStepConf,
            h = m.navigateNextStep,
            w = c.useDigitalHuman(),
            j = a.storeToRefs(w).isSupportDigitalHuman,
            k = w.routeToVideoIdMap,
            q = d.useDigitalHuman(),
            P = q.digitalHumanRef,
            S = q.videoId,
            D = q.updateVideoId,
            A = a.ref(""),
            I = a.ref(""),
            T = a.ref(!1),
            _ = a.reactive({ keyboard: !1 }),
            W = function (e) {
              T.value
                ? (null == f ||
                    f.$stat.click("trade.apply.setpasswd_2.keyboard"),
                  (I.value = (I.value + e).slice(0, 6)))
                : (null == f || f.$stat.click("trade.apply.setpasswd.keyboard"),
                  (A.value = (A.value + e).slice(0, 6)));
            },
            C = function () {
              T.value
                ? (I.value = I.value.slice(0, I.value.length - 1))
                : (A.value = A.value.slice(0, A.value.length - 1));
            },
            H = function () {
              (A.value = ""), (I.value = ""), (T.value = !1), (_.keyboard = !0);
            },
            R = function (e) {
              var n = {
                confirmBtn: "我知道了",
                onConfirm: function () {
                  return H();
                },
              };
              Object.assign(n, "string" == typeof e ? { message: e } : e),
                l.Dialog(n);
            },
            M = function () {
              if (T.value)
                (_.keyboard = !1),
                  A.value !== I.value
                    ? R({ message: "两次输入的密码不一致" })
                    : (a.index.showLoading({ mask: !0, title: "提交中" }),
                      u
                        .cryptPasswd(A.value)
                        .then(
                          (function () {
                            var e = t(
                              n().mark(function e(t) {
                                var r;
                                return n().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (r = { passwd: t.encodePwd }),
                                            (e.prev = 1),
                                            (e.next = 4),
                                            y(i.ACTION.PASSWD_SET, r)
                                          );
                                        case 4:
                                          h(), (e.next = 10);
                                          break;
                                        case 7:
                                          (e.prev = 7),
                                            (e.t0 = e.catch(1)),
                                            R({ message: e.t0.retmsg });
                                        case 10:
                                          return (
                                            (e.prev = 10),
                                            a.index.hideLoading(),
                                            e.finish(10)
                                          );
                                        case 13:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  null,
                                  [[1, 7, 10, 13]]
                                );
                              })
                            );
                            return function (n) {
                              return e.apply(this, arguments);
                            };
                          })()
                        )
                        .catch(function (e) {
                          a.index.hideLoading(),
                            R("加密失败 请稍后再试"),
                            p.aegisReporter.reportEvent(
                              "MONITOR-APPLY-SETPWD-CRYPTPASSWD-FAIL",
                              { ext2: JSON.stringify(e || {}) }
                            );
                        }));
              else
                try {
                  s.PwdValid.checkWeakPwd(
                    A.value,
                    e((null == x ? void 0 : x.strategies) || []),
                    { credid: v.value.cred_id, tel: v.value.tel }
                  ),
                    setTimeout(function () {
                      (T.value = !T.value),
                        g.value ||
                          null == f ||
                          f.$stat.click("trade.apply.setpasswd_2.first");
                    }, 300);
                } catch (e) {
                  l.Dialog({ message: e.reason }), (A.value = "");
                }
            };
          return (
            a.provide("onPageInit", function () {
              H();
            }),
            a.onMounted(function () {
              D(k.ApplySetPwd);
            }),
            function (e, n) {
              return a.e(
                { a: e.rootFontSize, b: a.unref(j) },
                a.unref(j)
                  ? {
                      c: a.sr(P, "a949230c-2,a949230c-1", {
                        k: "digitalHumanRef",
                      }),
                      d: a.p({ videoId: a.unref(S) }),
                    }
                  : {},
                {
                  e: a.p({ "step-name": a.unref(b).name }),
                  f: a.t(a.unref(x).descText || "交易及资金密码"),
                  g: a.o(function (e) {
                    return M();
                  }),
                  h: a.o(function (n) {
                    return e.$stat.click("trade.apply.setpasswd.box");
                  }),
                  i: a.p({ value: A.value }),
                  j: a.t(a.unref(x).descText || "交易及资金密码"),
                  k: a.o(function (e) {
                    return M();
                  }),
                  l: a.o(function (n) {
                    return e.$stat.click("trade.apply.setpasswd_2.box");
                  }),
                  m: a.p({ value: I.value }),
                  n: T.value ? 1 : "",
                  o: a.p({
                    "pure-mode": !0,
                    stat: "setpwd",
                    "hide-next-button": !0,
                    "transparent-bg": !0,
                  }),
                  p: a.n(a.unref(j) ? "section-content" : ""),
                  q: a.n(a.unref(j) ? "keyboard-layout-digital-human" : ""),
                  r: a.o(W),
                  s: a.o(C),
                  t: a.p({ show: _.keyboard, "hide-on-click-outside": !1 }),
                  v: a.p({ id: "mp-dialog" }),
                  w: a.o(function () {}),
                  x: a.sr("#global-wrap", "a949230c-0"),
                  y: a.p({
                    id: "global-wrap",
                    filePath: "/apply/setpwd",
                    defaultTheme: "",
                  }),
                }
              );
            }
          );
        },
      }
    )
  ),
  j = a._export_sfc(w, [["__scopeId", "data-v-a949230c"]]);
wx.createPage(j);
