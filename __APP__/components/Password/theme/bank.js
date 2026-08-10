var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var r = require("../../../common/vendor.js"),
  t = require("../../../utils/getPlatform.js"),
  a = require("../../../stores/app/useNavbar.js"),
  s = require("../../../utils/crypt/state.js"),
  i = require("../../../service/aegis/platform/not-wujie.js"),
  u = require("../../../common/components/Dialog/index.js"),
  c = require("../../../stores/app/useMode.js"),
  l = require("../../../utils/crypt/index.js"),
  p = require("../../../utils/index.js"),
  m = {
    components: {
      StPasswordInput: function () {
        return "../../../common/components/PasswordInput.js";
      },
      StNumberKeyboard: function () {
        return "../../../common/components/NumberKeyboard/index.js";
      },
      Popup: function () {
        return "../../../common/components/Popup/index.js";
      },
    },
    props: {
      check: Boolean,
      needUpdateSeed: Boolean,
      passwordName: String,
      showCloseIcon: Boolean,
      showMask: Boolean,
      extraInfo: Object,
    },
    setup: function (m) {
      var d,
        v = r.getCurrentInstance().proxy,
        f = r.ref(!1),
        w = t.getPlatform(),
        b = w.isInIframe,
        h = w.bizPlatform,
        I = w.isZxg,
        g = w.isMpPlugin,
        x = a.useNavbarStore(),
        k = c.useModeStore(),
        P = r.storeToRefs(k).simpleMode,
        j = n(
          n({}, v.$route.query),
          "mp-weixin" === h ? {} : r.dist.urltools.param.parse()
        ).set_mode,
        y = r.ref("1" == j),
        q = r.computed(function () {
          return Boolean(
            (null == global ? void 0 : global.__embedded__mode) &&
              I &&
              v.showCloseIcon
          );
        }),
        S = r.ref(""),
        C = r.ref(!1);
      function M() {
        (S.value = ""), v.$emit("hide", !0), v.$emit("cancel"), s.setSeed("");
      }
      function B() {
        return N.apply(this, arguments);
      }
      function N() {
        return (N = o(
          e().mark(function o() {
            var n;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (C.value = !0),
                        r.index.showLoading({ title: "加载中", mask: !0 }),
                        (e.prev = 1),
                        (e.next = 4),
                        l.cryptPasswd(S.value, void 0, m.needUpdateSeed)
                      );
                    case 4:
                      (n = e.sent),
                        r.index.hideLoading(),
                        (C.value = !1),
                        (S.value = ""),
                        v.$emit("success", n),
                        (e.next = 11);
                      break;
                    case 8:
                      (e.prev = 8),
                        (e.t0 = e.catch(1)),
                        r.index.hideLoading(),
                        (C.value = !1),
                        u.Dialog({
                          message:
                            (null == e.t0 ? void 0 : e.t0.retmsg) ||
                            "网络繁忙 请稍后再试",
                        }),
                        (S.value = "");
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              o,
              null,
              [[1, 8]]
            );
          })
        )).apply(this, arguments);
      }
      return (
        r.onMounted(function () {
          var e,
            o,
            n,
            r = v.$route.path;
          r &&
            p.getIsMpPluginComponent() &&
            (f.value =
              null ==
              (n =
                null ==
                (o =
                  null == (e = requireMiniProgram()) ? void 0 : e.main2Plugin())
                  ? void 0
                  : o.isTabbarPage)
                ? void 0
                : n.call(o, r));
        }),
        {
          simpleMode: P,
          rawPassword: S,
          pending: C,
          navbarStore: x,
          isPluginShowTabbar: f,
          isInIframe: b,
          isSwitchAccount: y,
          showBackIcon: q,
          isMpPlugin: g,
          onclose: function () {
            m.showCloseIcon && M();
          },
          onInput: function (e) {
            S.value = (S.value + e).slice(0, 6);
          },
          onDelete: function () {
            S.value = S.value.slice(0, S.value.length - 1);
          },
          encryptPassword: B,
          complete:
            ((d = o(
              e().mark(function o() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), B();
                      case 2:
                        try {
                          i.aegisReporter.reportEvent(
                            "event-pwd-input-complete",
                            { ext2: Date.now() }
                          );
                        } catch (e) {}
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, o);
              })
            )),
            function () {
              return d.apply(this, arguments);
            }),
          cancel: M,
        }
      );
    },
  };
Array ||
  (
    r.resolveComponent("BankLogo") +
    r.resolveComponent("st-password-input") +
    r.resolveComponent("st-number-keyboard") +
    r.resolveComponent("popup")
  )(),
  Math;
var d = r._export_sfc(m, [
  [
    "render",
    function (e, o, n, t, a, s) {
      return r.e(
        {
          a: r.n(t.showBackIcon ? ["icon icon-back"] : ""),
          b: r.o(function () {
            return t.onclose && t.onclose.apply(t, arguments);
          }),
          c: n.extraInfo,
        },
        n.extraInfo
          ? {
              d: r.p({ bank: n.extraInfo.bankAbbr }),
              e: r.t(n.extraInfo.bankName || ""),
              f: r.t(
                n.extraInfo.cardTail
                  ? "**".concat(n.extraInfo.cardTail)
                  : "资金安全卡"
              ),
            }
          : {},
        { g: n.showCloseIcon && !t.showBackIcon },
        n.showCloseIcon && !t.showBackIcon
          ? {
              h: r.o(function () {
                return t.cancel && t.cancel.apply(t, arguments);
              }),
            }
          : {},
        {
          i: r.t(n.passwordName || "银行密码"),
          j: r.o(t.complete),
          k: r.p({ value: t.rawPassword }),
          l: r.o(t.onInput),
          m: r.o(t.onDelete),
          n: r.p({ show: !0, embedded: !0 }),
          o: r.n(
            t.navbarStore.shownav || t.navbarStore.externalNavBar
              ? "password-component--bank-navbar"
              : ""
          ),
          p: r.n(t.isInIframe ? "password-iniframe" : ""),
          q: r.n(t.simpleMode ? "password-simple" : ""),
          r: r.o(t.onclose),
          s: r.p({
            show: n.check,
            center: !1,
            mask: !t.isInIframe && n.showMask,
            name: "mp-slide-up",
            position: "bottom",
            "mask-closable": n.showCloseIcon,
          }),
        }
      );
    },
  ],
]);
wx.createComponent(d);
