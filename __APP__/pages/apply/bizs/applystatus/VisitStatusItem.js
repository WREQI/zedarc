require("../../../../@babel/runtime/helpers/Arrayincludes");
var e,
  t = require("../../../../@babel/runtime/helpers/defineProperty");
require("../../../../app.js");
var i = require("../../../../model/apply/useApply.js"),
  r = require("../../../../config/enum.js"),
  n = require("../../../../common/vendor.js");
require("../../../../service/broker.js");
var a = require("../../../../utils/getPlatform.js"),
  s = require("../../../../config/broker/11100/index.js"),
  u = a.getPlatform(),
  o = u.platform,
  T = u.bizPlatformVer,
  S = u.isZxg,
  l =
    (t((e = {}), r.VISIT_STATUS.NOTNEED, ""),
    t(e, r.VISIT_STATUS.NOTCALL, "等待电话回访"),
    t(e, r.VISIT_STATUS.NOTANSWER, "电话回访未接听"),
    t(e, r.VISIT_STATUS.PASS, "电话回访已通过"),
    t(e, r.VISIT_STATUS.NOTPASS, "电话回访未通过"),
    e),
  p = {
    components: {
      CommonStatusItem: function () {
        return "./CommonStatusItem.js";
      },
    },
    props: {},
    setup: function () {
      var e = n.getCurrentInstance().proxy,
        t = i.useApply(),
        a = t.applyInfo,
        u = t.curStepConf,
        p = n.computed(function () {
          return [r.VISIT_STATUS.NOTANSWER, r.VISIT_STATUS.NOTPASS].includes(
            a.value.visit_status
          );
        }),
        I = n.computed(function () {
          return a.value.visit_status === r.VISIT_STATUS.PASS;
        }),
        c = n.computed(function () {
          return l[a.value.visit_status];
        }),
        f = n.computed(function () {
          return (
            !!a.value.visitinfo &&
            a.value.visitinfo.query_result === r.VISIT_QUERY_RESULT.OK &&
            +a.value.visitinfo.waiting_num < 1
          );
        }),
        v = n.computed(function () {
          if (!a.value.visitinfo) return "";
          if (
            a.value.visitinfo.query_result === r.VISIT_QUERY_RESULT.OK &&
            a.value.visitinfo.waiting_num > 0
          ) {
            var e = Math.max(a.value.visitinfo.waiting_time, 60);
            return "预计等待 "
              .concat(Math.ceil(e / 60), " 分钟（前方排队")
              .concat(a.value.visitinfo.waiting_num, "人）");
          }
          return "";
        }),
        _ = n.computed(function () {
          var e = s.brokerConfig.base.tel;
          return (
            !1 === u.returnVisitTel
              ? (e = "")
              : u.returnVisitTel && (e = u.returnVisitTel),
            String(e).replace(/-/g, "")
          );
        }),
        m = n.computed(function () {
          return !(
            u.notSupportCall ||
            (S && "android" === o && n.lt(T || "0.0.0", "9.2.0"))
          );
        });
      return {
        applyInfo: a,
        failed: p,
        done: I,
        itemTitle: c,
        visitTel: _,
        broker: s.brokerConfig,
        isMyTurn: f,
        waitingTips: v,
        isSupportCall: m,
        VISIT_STATUS: r.VISIT_STATUS,
        onClick: function () {
          e.$stat.click("trade.apply.progress.receive_no_call");
          var t = _.value.replace(/-/g, "");
          try {
            e.$sdk.makePhoneCall(t);
          } catch (e) {}
        },
      };
    },
  };
Array || n.resolveComponent("common-status-item")();
var I = n._export_sfc(p, [
  [
    "render",
    function (e, t, i, r, a, s) {
      return n.e(
        { a: r.applyInfo.visit_status !== r.VISIT_STATUS.NOTNEED },
        r.applyInfo.visit_status !== r.VISIT_STATUS.NOTNEED
          ? n.e(
              { b: !r.done },
              r.done
                ? {}
                : n.e(
                    { c: r.applyInfo.visit_status === r.VISIT_STATUS.NOTCALL },
                    r.applyInfo.visit_status === r.VISIT_STATUS.NOTCALL
                      ? n.e(
                          { d: r.isMyTurn },
                          r.isMyTurn
                            ? {}
                            : n.e(
                                {
                                  e: n.t(r.broker.base.name),
                                  f: n.t(r.visitTel),
                                  g: r.waitingTips,
                                },
                                r.waitingTips ? { h: n.t(r.waitingTips) } : {}
                              )
                        )
                      : {},
                    {
                      i:
                        r.applyInfo.visit_status === r.VISIT_STATUS.NOTPASS ||
                        r.applyInfo.visit_status === r.VISIT_STATUS.NOTANSWER,
                    },
                    r.applyInfo.visit_status === r.VISIT_STATUS.NOTPASS ||
                      r.applyInfo.visit_status === r.VISIT_STATUS.NOTANSWER
                      ? { j: n.t(r.broker.base.name), k: n.t(r.visitTel) }
                      : {},
                    { l: r.failed && r.isSupportCall },
                    r.failed && r.isSupportCall
                      ? {
                          m: n.o(function () {
                            return r.onClick && r.onClick.apply(r, arguments);
                          }),
                        }
                      : {}
                  ),
              {
                n: n.p({ title: r.itemTitle, warning: r.failed, done: r.done }),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-9bcfac7f"],
]);
wx.createComponent(I);
