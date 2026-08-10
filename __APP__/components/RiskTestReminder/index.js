var e = require("../../@babel/runtime/helpers/defineProperty");
require("../../app.js");
var t = require("../../common/vendor.js"),
  n = require("../../config/key.js");
require("../../service/broker.js");
var o = require("../../utils/getPlatform.js");
require("../../service/sdk/lib/api.js");
var i = require("../../service/sdk/platform/mp-weixin.js"),
  r = require("../../service/aegis/platform/not-wujie.js"),
  a = require("../../stores/user/useUserinfo.js"),
  u = require("../../config/broker/11100/index.js"),
  s = o.getPlatform().isZxg,
  c = {
    name: "RiskTestReminder",
    components: {
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
    },
    options: { styleIsolation: "shared" },
    emits: ["skip", "close"],
    setup: function (o, c) {
      var l,
        f = c.emit,
        m =
          (e(
            (l = {}),
            "3",
            '<p>尊敬的客户，<span style="font-weight:500">您尚未进行风险承受能力评估，请及时完成风险测评，测评后你可继续登录使用证券账户。<span></p>'
          ),
          e(
            l,
            "4",
            '<p>尊敬的客户：根据适当性管理规定，投资者风险承受能力测评的结果有效期为两年，<span style="font-weight:500">您的风险承受能力测评结果即将过期，请您更新风险测评信息以免影响后续使用证券账户。<span></p>'
          ),
          e(
            l,
            "1",
            '<p>尊敬的客户：根据适当性管理规定，投资者风险承受能力测评的结果有效期为两年，<span style="font-weight:500">您的风险承受能力测评结果已经过期，请及时完成风险测评，测评后你可继续登录使用证券账户。<span></p>'
          ),
          l),
        v = t.getCurrentInstance().proxy,
        p = t.ref(!1),
        g = t.ref(!1),
        d = u.brokerConfig.common.RISK_REMIND || {},
        E = d.remind,
        I = void 0 !== E && E,
        R = a.useUserinfoStore(),
        D = t.storeToRefs(R).userinfo,
        x = R.forceGetUserInfo,
        M = t.computed(function () {
          return D.value.riskflag;
        }),
        S = t.computed(function () {
          return d[M.value] || {};
        }),
        y = t.computed(function () {
          return S.value.customDialog || !1;
        }),
        _ = t.computed(function () {
          return S.value.message || m[M.value];
        }),
        h = t.computed(function () {
          return S.value.title || "";
        }),
        T = t.computed(function () {
          return S.value.confirmButtonText || "立即测评";
        }),
        b = t.computed(function () {
          return (
            void 0 === S.value.showCancelButton || S.value.showCancelButton
          );
        }),
        C = t.computed(function () {
          var e = (d[M.value] || {}).strict;
          return void 0 !== e && e;
        }),
        B = t.computed(function () {
          return C.value ? "退出登录" : "暂不测评";
        }),
        j = null,
        k = !1;
      function w() {
        var e;
        t.index.getStorageSync(n.BIZ_REMINDER_COMPLETETIME) &&
          !P(n.BIZ_REMINDER_COMPLETETIME) &&
          "0" !== D.value.riskflag &&
          r.aegisReporter.reportEvent("RISK_FLAG_RETURN_ERR", {
            ext2: t
              .dayjs(t.index.getStorageSync(n.BIZ_REMINDER_COMPLETETIME))
              .format("YY年MM月DD日HH时mm分"),
            ext3: D.value.riskflag,
          }),
          (e = (function () {
            if (!M.value) return !1;
            var e = d[M.value] || {},
              t = e.enable,
              o = void 0 !== t && t,
              i = e.strict;
            return (
              o &&
              ((void 0 !== i && i) || !P(n.BIZ_RISKREMINDER_SHOWTIME)) &&
              !P(n.BIZ_REMINDER_COMPLETETIME)
            );
          })()),
          (p.value = e),
          e || ((g.value = !1), j && t.isFunction(j) && j(), f("skip"));
      }
      function q() {
        k ||
          (t.index.getStorageSync(n.BIZ_RISKREMINDER_UPADTED)
            ? ((k = !0),
              x({ action: "1" })
                .then(function () {
                  t.index.removeStorageSync(n.BIZ_RISKREMINDER_UPADTED), w();
                })
                .finally(function () {
                  k = !1;
                }))
            : w());
      }
      function P(e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          o = t.index.getStorageSync(e);
        if (!o) return !1;
        var i = t.dayjs().format("YYYY-MM-DD"),
          r = t.dayjs(o).format("YYYY-MM-DD");
        return t.dayjs(i).diff(r, "days") < n;
      }
      return (
        I
          ? ((j = t.watch(
              function () {
                return D.value;
              },
              w,
              { immediate: !0 }
            )),
            s &&
              ("AssetIndex" === v.$route.name || d.third) &&
              (i.sdk.pageWillAppear(q),
              i.sdk.pageWillDisAppear(function () {
                (p.value = !1), (g.value = !1);
              })),
            t.onActivated(q),
            t.onPageShow(q),
            t.onPageHide(function () {
              (p.value = !1), (g.value = !1);
            }))
          : t.nextTick$1(function () {
              f("skip");
            }),
        t.onBeforeUnmount(function () {
          j && t.isFunction(j) && j();
        }),
        {
          visible: p,
          confirmDialogShow: g,
          expire_type: M,
          isStrictMode: C,
          isCustomDialog: y,
          message: _,
          dialogTitle: h,
          confirmButtonText: T,
          showCancelButton: b,
          cacenlButtonText: B,
          stopWatch: j,
          onCancel: function () {
            (p.value = !1),
              C.value
                ? (g.value = !0)
                : (t.index.setStorageSync(
                    n.BIZ_RISKREMINDER_SHOWTIME,
                    Date.now()
                  ),
                  f("close"));
          },
          onConfirm: function () {
            (p.value = !1),
              (g.value = !1),
              t.index.setStorageSync(n.BIZ_RISKREMINDER_UPADTED, 1);
            var e = { from: "reminder" };
            "AssetIndex" === v.$route.name && (e.no_extra = "1"),
              v.$router.push({ name: "BizRiskUpdate", query: e });
          },
          reminderHandler: w,
          logout: function () {
            (g.value = !1), t.index.$host.clearCookie2Verify();
          },
        }
      );
    },
  };
Array || t.resolveComponent("mp-dialog")();
var l = t._export_sfc(c, [
  [
    "render",
    function (e, n, o, i, r, a) {
      return t.e(
        { a: i.isCustomDialog },
        i.isCustomDialog
          ? {
              b: t.o(i.onConfirm),
              c: t.p({
                visible: i.visible,
                title: i.dialogTitle,
                message: i.message,
                "message-align": "justify",
                "show-cancel-button": i.showCancelButton,
                "confirm-button-text": i.confirmButtonText,
              }),
            }
          : {
              d: t.o(i.onCancel),
              e: t.o(i.onConfirm),
              f: t.p({
                visible: i.visible,
                message: i.message,
                "message-align": "justify",
                "message-type": "html",
                "show-cancel-button": !0,
                "confirm-button-text": "立即测评",
                "cancel-button-text": i.cacenlButtonText,
              }),
            },
        {
          g: t.o(i.onConfirm),
          h: t.o(i.logout),
          i: t.p({
            visible: i.confirmDialogShow,
            message:
              "更新风险测评后可以正常登录使用证券账户，您确认要退出登录吗。",
            "show-cancel-button": !0,
            "cancel-button-text": "退出登录",
            "confirm-button-text": "立即测评",
          }),
        }
      );
    },
  ],
]);
wx.createComponent(l);
