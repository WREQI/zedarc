require("../../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../../app.js");
var e = require("../../../../model/apply/useApply.js"),
  t = require("../../../../config/enum.js"),
  n = require("../../../../common/vendor.js");
require("../../../../service/broker.js");
var r = require("../../../../utils/getPlatform.js"),
  u = require("../../../../model/apply/useApplyStatus.js"),
  o = require("../../../../config/broker/11100/index.js"),
  a = r.getPlatform(),
  i = a.platform,
  l = a.bizPlatformVer,
  c = a.isZxg,
  s = {
    components: {
      CommonStatusItem: function () {
        return "./CommonStatusItem.js";
      },
    },
    setup: function (r, a) {
      var s = a.emit,
        f = n.getCurrentInstance().proxy,
        p = e.useApply(),
        m = p.applyInfo,
        d = p.getFormatFailedReason,
        v = p.isRecoverMode,
        A = u.useApplyStatus().isRejectButtonShown,
        E = n.computed(function () {
          if (!v.value) return "";
          if ("1" === m.value.has_account) return t.FAIL_TYPE.BIND;
          switch (m.value.reject_type) {
            case "2":
              return t.FAIL_TYPE.BAN;
            case "1":
              return t.FAIL_TYPE.REOPEN;
            default:
              return t.FAIL_TYPE.RECOVER;
          }
        }),
        T = n.computed(function () {
          return m.value.bank_active === t.BANK_ACTIVE_STATE.FAILED;
        }),
        _ = n.computed(function () {
          return m.value.bank_active === t.BANK_ACTIVE_STATE.SUCCEED;
        }),
        C = n.computed(function () {
          return m.value.fail_reasons
            ? d(m.value.fail_reasons, t.FAIL_REASON_TYPE.BANKCARD)
            : [];
        }),
        I = n.computed(function () {
          return _.value
            ? "银行卡已激活"
            : T.value
            ? "激活银行卡失败"
            : "等待银行卡绑定";
        }),
        b = n.computed(function () {
          return !T.value ||
            [t.FAIL_TYPE.BAN, t.FAIL_TYPE.BIND, t.FAIL_TYPE.REOPEN].includes(
              E.value
            )
            ? ""
            : "重新提交";
        });
      n.watchEffect(function () {
        T.value && 1 === C.value.length && s("updateVideoId", "9-6");
      });
      var g = n.computed(function () {
          var e = o.brokerConfig.base.tel || "";
          return String(e).replace(/-/g, "");
        }),
        y = !(c && "android" === i && n.lt(l || "0.0.0", "9.2.0"));
      return (
        n.watch(
          function () {
            return b.value;
          },
          function (e) {
            e && (A.value = !0);
          },
          { immediate: !0 }
        ),
        {
          failed: T,
          done: _,
          failReasons: C,
          itemTitle: I,
          tel: g,
          onClick: function () {
            f.$emit("onConfirm");
          },
          onTelClick: function () {
            if (y)
              try {
                f.$sdk.makePhoneCall(g.value);
              } catch (e) {}
          },
          buttonText: b,
        }
      );
    },
  };
Array || n.resolveComponent("common-status-item")();
var f = n._export_sfc(s, [
  [
    "render",
    function (e, t, r, u, o, a) {
      return n.e(
        { a: !u.done },
        u.done
          ? {}
          : n.e(
              { b: u.failed },
              u.failed
                ? {
                    c: n.f(u.failReasons, function (e, t, r) {
                      return { a: n.t(e.num), b: n.t(e.title), c: n.t(e.text) };
                    }),
                    d: u.failReasons.length > 1 ? 1 : "",
                  }
                : {
                    e: n.t(u.tel),
                    f: n.o(function () {
                      return u.onTelClick && u.onTelClick.apply(u, arguments);
                    }),
                  },
              { g: u.failed && u.buttonText },
              u.failed && u.buttonText
                ? {
                    h: n.t(u.buttonText),
                    i: n.o(function () {
                      return u.onClick && u.onClick.apply(u, arguments);
                    }),
                  }
                : {}
            ),
        { j: n.p({ title: u.itemTitle, warning: u.failed, done: u.done }) }
      );
    },
  ],
  ["__scopeId", "data-v-80b3cff6"],
]);
wx.createComponent(f);
