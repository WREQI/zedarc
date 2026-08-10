require("../../../../app.js");
var e = require("../../../../model/apply/useApply.js"),
  r = require("../../../../model/apply/useProgressBar.js"),
  s = require("../../../../common/vendor.js"),
  o = require("../../../../config/enum.js"),
  t = require("../../../../utils/index.js"),
  a = {
    components: {
      ProgressBar: function () {
        return "../../../../bizs/apply/ProgressBar.js";
      },
      StSteps: function () {
        return "../../../../common/components/Steps/index.js";
      },
    },
    setup: function () {
      var a = r.showNewProgressBar(),
        n = e.useApply(),
        i = n.applyInfo,
        u = n.curStepInfo,
        p = n.isRecoverMode,
        c = s.computed(function () {
          return !(
            a ||
            (p.value && i.value.account_state === o.ACCOUNT_STATE.HASACCOUNT)
          );
        }),
        d = s.computed(function () {
          return (
            c.value &&
            !p.value &&
            i.value.visit_status !== o.VISIT_STATUS.NOTNEED
          );
        }),
        l = s.computed(function () {
          return [
            {
              text: "申请提交成功",
              desc: s.dayjs(i.value.apply_time).format("YYYY-MM-DD HH:mm"),
              done: !0,
              active: !1,
            },
            {
              text: "开户审核中",
              done: !1,
              active: !0,
              desc: "",
              descHighlight: !1,
            },
            {
              text: "开户成功",
              done: !1,
              active: !1,
              desc: "",
              descHighlight: !1,
            },
          ];
        }),
        g = s.computed(function () {
          return [
            {
              text: "申请提交成功",
              desc: s.dayjs(i.value.apply_time).format("YYYY-MM-DD HH:mm"),
              icon: "check",
            },
            {
              text: p.value ? "审核未通过" : "开户审核中",
              desc: p.value
                ? t.isTradeTime()
                  ? "请联系客服"
                  : "请重新提交"
                : i.value.audit_progress,
              icon: p.value ? "more" : "clock-l",
            },
            { text: "开户成功", desc: "消息提醒", icon: "_" },
          ];
        });
      return {
        isShowNewProgressBar: a,
        isShowOldProgressBar: c,
        isShowOldProgressBarTips: d,
        isRecoverMode: p,
        curStepInfo: u,
        newProgressBarSteps: l,
        oldProgressBarSteps: g,
      };
    },
  };
Array ||
  (s.resolveComponent("progress-bar") + s.resolveComponent("st-steps"))();
var n = s._export_sfc(a, [
  [
    "render",
    function (e, r, o, t, a, n) {
      return s.e(
        { a: t.isShowNewProgressBar || t.isShowOldProgressBar },
        t.isShowNewProgressBar || t.isShowOldProgressBar
          ? s.e(
              { b: t.isShowNewProgressBar },
              t.isShowNewProgressBar
                ? {
                    c: s.p({
                      titles: t.newProgressBarSteps,
                      "step-name": t.curStepInfo.name,
                      "status-page": !0,
                    }),
                  }
                : t.isShowOldProgressBar
                ? s.e(
                    { e: t.isShowOldProgressBarTips },
                    (t.isShowOldProgressBarTips, {}),
                    { f: s.p({ current: 1, steps: t.oldProgressBarSteps }) }
                  )
                : {},
              { d: t.isShowOldProgressBar }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-91d3e751"],
]);
wx.createComponent(n);
