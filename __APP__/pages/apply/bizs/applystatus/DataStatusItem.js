require("../../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../../app.js");
var e = require("../../../../model/apply/useApply.js"),
  t = require("../../../../model/apply/useApplyStatus.js"),
  n = require("../../../../common/vendor.js"),
  u = require("../../../../config/enum.js"),
  a = require("../../../../utils/getPlatform.js").getPlatform().isWeixin,
  o = {
    components: {
      CommonStatusItem: function () {
        return "./CommonStatusItem.js";
      },
    },
    setup: function (o, i) {
      var r = i.emit,
        l = n.getCurrentInstance().proxy,
        c = e.useApply(),
        s = c.applyInfo,
        d = c.getFormatFailedReason,
        T = c.isRecoverMode,
        f = t.useApplyStatus().isRejectButtonShown,
        A = n.computed(function () {
          if (!T.value) return "";
          if ("1" === s.value.has_account) return u.FAIL_TYPE.BIND;
          switch (s.value.reject_type) {
            case "2":
              return u.FAIL_TYPE.BAN;
            case "1":
              return u.FAIL_TYPE.REOPEN;
            default:
              return u.FAIL_TYPE.RECOVER;
          }
        }),
        p = n.computed(function () {
          return (
            [u.FAIL_TYPE.REOPEN, u.FAIL_TYPE.RECOVER].includes(A.value) &&
            s.value.data_audit === u.DATA_AUDIT_STATE.WAITTING &&
            s.value.bank_active === u.BANK_ACTIVE_STATE.WAITTING &&
            s.value.acct_active === u.ACCT_ACTIVE_STATE.WAITTING
          );
        }),
        E = n.computed(function () {
          return p.value || A.value === u.FAIL_TYPE.REOPEN;
        }),
        _ = n.computed(function () {
          return E.value || s.value.data_audit === u.DATA_AUDIT_STATE.FAILED;
        }),
        v = n.computed(function () {
          return s.value.data_audit === u.DATA_AUDIT_STATE.SUCCEED && !_.value;
        }),
        I = n.computed(function () {
          return s.value.fail_reasons
            ? d(s.value.fail_reasons, u.FAIL_REASON_TYPE.DATA)
            : [];
        }),
        m = n.computed(function () {
          return v.value
            ? "资料审核已通过"
            : _.value
            ? "资料审核未通过"
            : "资料审核中";
        }),
        R = n.computed(function () {
          return !_.value ||
            [u.FAIL_TYPE.BAN, u.FAIL_TYPE.BIND].includes(A.value)
            ? ""
            : A.value === u.FAIL_TYPE.REOPEN
            ? "重新开户"
            : "快速完善资料";
        });
      return (
        n.watch(
          function () {
            return R.value;
          },
          function (e) {
            e && (f.value = !0);
          },
          { immediate: !0 }
        ),
        n.watchEffect(function () {
          if (_.value && 1 === I.value.length) {
            var e = I.value[0];
            e.title.indexOf("身份证") > -1
              ? r("updateVideoId", "9-2")
              : e.title.indexOf("视频") > -1
              ? r("updateVideoId", "9-5")
              : e.title.indexOf("资料") > -1 && r("updateVideoId", "9-3");
          }
        }),
        {
          isWeixin: a,
          applyInfo: s,
          failed: _,
          done: v,
          failReasons: I,
          itemTitle: m,
          rejectButtonText: R,
          onRecoverClick: function () {
            l.$emit("onRecoverClick");
          },
          noRejectReason: p,
          failType: A,
          FAIL_TYPE: u.FAIL_TYPE,
        }
      );
    },
  };
Array || n.resolveComponent("common-status-item")();
var i = n._export_sfc(o, [
  [
    "render",
    function (e, t, u, a, o, i) {
      return n.e(
        { a: !a.done },
        a.done
          ? {}
          : n.e(
              { b: a.failed },
              a.failed
                ? n.e(
                    { c: a.failReasons.length > 0 },
                    a.failReasons.length > 0
                      ? {
                          d: n.f(a.failReasons, function (e, t, u) {
                            return {
                              a: n.t(e.num),
                              b: n.t(e.title),
                              c: n.t(e.text),
                            };
                          }),
                          e: a.failReasons.length > 1 ? 1 : "",
                        }
                      : (a.noRejectReason || (a.failType, a.FAIL_TYPE.REOPEN),
                        {}),
                    {
                      f: a.noRejectReason,
                      g: a.failType === a.FAIL_TYPE.REOPEN,
                      h: a.rejectButtonText,
                    },
                    a.rejectButtonText
                      ? {
                          i: n.t(a.rejectButtonText),
                          j: n.o(function () {
                            return (
                              a.onRecoverClick &&
                              a.onRecoverClick.apply(a, arguments)
                            );
                          }),
                        }
                      : {}
                  )
                : { k: n.t(a.applyInfo.audit_progress || "审核结果更新中") }
            ),
        { l: n.p({ title: a.itemTitle, warning: a.failed, done: a.done }) }
      );
    },
  ],
  ["__scopeId", "data-v-29289eeb"],
]);
wx.createComponent(i);
