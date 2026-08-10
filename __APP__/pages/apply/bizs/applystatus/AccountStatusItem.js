require("../../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../../app.js");
var e = require("../../../../model/apply/useApply.js"),
  t = require("../../../../config/enum.js"),
  n = require("../../../../common/vendor.js");
require("../../../../service/broker.js");
var r = require("../../../../utils/getPlatform.js"),
  o = require("../../../../model/apply/useApplyStatus.js"),
  u = require("../../../../config/broker/11100/index.js"),
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
    setup: function () {
      var r = n.getCurrentInstance().proxy,
        a = e.useApply(),
        s = a.applyInfo,
        f = a.getFormatFailedReason,
        p = a.isRecoverMode,
        T = o.useApplyStatus().isRejectButtonShown,
        m = n.computed(function () {
          if (!p.value) return "";
          if ("1" === s.value.has_account) return t.FAIL_TYPE.BIND;
          switch (s.value.reject_type) {
            case "2":
              return t.FAIL_TYPE.BAN;
            case "1":
              return t.FAIL_TYPE.REOPEN;
            default:
              return t.FAIL_TYPE.RECOVER;
          }
        }),
        d = n.computed(function () {
          return (
            s.value.acct_active === t.ACCT_ACTIVE_STATE.FAILED ||
            [t.FAIL_TYPE.BAN, t.FAIL_TYPE.BIND].includes(m.value)
          );
        }),
        A = n.computed(function () {
          return (
            s.value.acct_active === t.ACCT_ACTIVE_STATE.SUCCEED && !d.value
          );
        }),
        v = n.computed(function () {
          return s.value.fail_reasons
            ? f(s.value.fail_reasons, t.FAIL_REASON_TYPE.ACCOUNT)
            : [];
        }),
        _ = n.computed(function () {
          return A.value
            ? "证券账户开立成功"
            : m.value === t.FAIL_TYPE.BIND
            ? "证券账户开立异常"
            : d.value
            ? "证券账户开立失败"
            : "证券账户开立";
        }),
        E = n.computed(function () {
          return !d.value ||
            [t.FAIL_TYPE.BAN, t.FAIL_TYPE.REOPEN].includes(m.value)
            ? ""
            : m.value === t.FAIL_TYPE.BIND
            ? "立即绑户交易"
            : "快速完善资料";
        }),
        I = n.computed(function () {
          var e = u.brokerConfig.base.tel || "";
          return String(e).replace(/-/g, "");
        }),
        C = !(c && "android" === i && n.lt(l || "0.0.0", "9.2.0"));
      return (
        n.watch(
          function () {
            return E.value;
          },
          function (e) {
            e && (T.value = !0);
          },
          { immediate: !0 }
        ),
        {
          failed: d,
          done: A,
          failReasons: v,
          itemTitle: _,
          buttonText: E,
          onRecoverClick: function () {
            r.$emit("onRecoverClick");
          },
          FAIL_TYPE: t.FAIL_TYPE,
          failType: m,
          tel: I,
          onTelClick: function () {
            if (C)
              try {
                r.$sdk.makePhoneCall(I.value);
              } catch (e) {}
          },
        }
      );
    },
  };
Array || n.resolveComponent("common-status-item")();
var f = n._export_sfc(s, [
  [
    "render",
    function (e, t, r, o, u, a) {
      return n.e(
        { a: !o.done },
        o.done
          ? {}
          : n.e(
              { b: o.failed },
              o.failed
                ? n.e(
                    { c: o.failReasons.length > 0 },
                    o.failReasons.length > 0
                      ? {
                          d: n.f(o.failReasons, function (e, t, r) {
                            return {
                              a: n.t(e.num),
                              b: n.t(e.title),
                              c: n.t(e.text),
                            };
                          }),
                          e: o.failReasons.length > 1 ? 1 : "",
                        }
                      : o.failType === o.FAIL_TYPE.BIND
                      ? {}
                      : o.failType === o.FAIL_TYPE.BAN
                      ? {
                          h: n.t(o.tel),
                          i: n.o(function () {
                            return (
                              o.onTelClick && o.onTelClick.apply(o, arguments)
                            );
                          }),
                        }
                      : {},
                    {
                      f: o.failType === o.FAIL_TYPE.BIND,
                      g: o.failType === o.FAIL_TYPE.BAN,
                    }
                  )
                : {},
              { j: o.failed && o.buttonText },
              o.failed && o.buttonText
                ? {
                    k: n.t(o.buttonText),
                    l: n.o(function () {
                      return (
                        o.onRecoverClick && o.onRecoverClick.apply(o, arguments)
                      );
                    }),
                  }
                : {}
            ),
        {
          m: n.p({
            title: o.itemTitle,
            warning: o.failed,
            done: o.done,
            noBottom: !0,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-b9cad993"],
]);
wx.createComponent(f);
