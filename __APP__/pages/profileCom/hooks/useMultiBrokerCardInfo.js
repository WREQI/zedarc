var e = require("../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../common/vendor.js");
exports.useMultiBrokerCard = function () {
  var n = t.useApplyEntry.toApply,
    r = t.useBrokerInfo(),
    o = r.hasBind,
    u = r.dealerList,
    a = r.navigateToTrade,
    i = r.isEmbeddedMpEnable,
    l = r.isTradeEnable,
    s = r.getBrokerMaintain,
    c = function (e, t, n) {
      return e && t ? ((e[t] = n), e) : e;
    },
    d = t.computed(function () {
      return u.value
        .filter(function (e) {
          return (
            e.userstateFront & t.USERSTATE_PID.APPLYING &&
            "1" === e.can_apply &&
            e.modify_time &&
            (function (e, t, n) {
              var r = (new Date().getTime() - e) / 864e5;
              return r >= 0 && r < 7;
            })(1e3 * Number(e.modify_time))
          );
        })
        .map(function (e) {
          return c(e, "statType", "apply");
        });
    }),
    T = t.computed(function () {
      return u.value
        .filter(function (e) {
          return (
            e.userstateFront & t.USERSTATE_PID.VERIFYING && "1" === e.can_apply
          );
        })
        .map(function (e) {
          return c(e, "statType", "verify");
        });
    }),
    p = t.computed(function () {
      return u.value
        .filter(function (e) {
          return (
            e.userstateFront & t.USERSTATE_PID.FAILED && "1" === e.can_apply
          );
        })
        .map(function (e) {
          return c(e, "statType", "failed");
        });
    }),
    f = t.computed(function () {
      return []
        .concat(
          e(
            u.value.filter(function (e) {
              return (
                e.userstateFront & t.USERSTATE_PID.BIND_ACTIVE &&
                "1" === e.can_bind
              );
            })
          ),
          e(
            u.value.filter(function (e) {
              return (
                e.userstateFront & t.USERSTATE_PID.BIND_UNACTIVE &&
                "1" === e.can_bind
              );
            })
          )
        )
        .map(function (e) {
          return c(e, "statType", "bind");
        });
    }),
    E = t.computed(function () {
      return u.value.filter(function (e) {
        return (
          !(
            e.userstateFront & t.USERSTATE_PID.BIND_ACTIVE ||
            e.userstateFront & t.USERSTATE_PID.BIND_UNACTIVE
          ) && "1" === e.can_bind
        );
      });
    }),
    I = t.computed(function () {
      return u.value.filter(function (e) {
        return (
          e.userstateFront & t.USERSTATE_PID.NOACCOUNT &&
          !(e.userstateFront & t.USERSTATE_PID.UNBIND) &&
          "1" === e.can_apply
        );
      });
    }),
    A = t.computed(function () {
      return (
        l.value &&
        (o.value ||
          d.value.length > 0 ||
          T.value.length > 0 ||
          p.value.length > 0)
      );
    }),
    v = function (e, n) {
      i(n)
        ? a({ name: e, dealercode: n }).catch(function (e) {
            var n =
              "ERR_MAINTAIN" === (null == e ? void 0 : e.retcode) &&
              (null == e ? void 0 : e.retmsg)
                ? e.retmsg
                : "系统繁忙请稍后再试";
            t.wx$1.showModal({
              confirmText: "确定",
              content: n,
              showCancel: !1,
            });
          })
        : t.wx$1.showModal({
            confirmText: "确定",
            content: "小程序暂不支持该券商交易",
            showCancel: !1,
          });
    };
  return {
    applyingList: d,
    verifyingList: T,
    failedList: p,
    bindingList: f,
    canBindList: E,
    canApplyList: I,
    useSwiper: A,
    isMaintain: function (e, t) {
      var n;
      return null ==
        (n = s({ bulletinType: t, brokerCode: null == e ? void 0 : e.code }))
        ? void 0
        : n.isMaintain;
    },
    toApplyProgressPage: function (e) {
      var r, o;
      if (
        null == (o = null == (r = getApp().globalData.detect) ? void 0 : r.env)
          ? void 0
          : o.IS_PCWEIXIN
      )
        t.wx$1.navigateTo({ url: "/pages/noaccount/textImage/TextImage" });
      else if (e.userstateFront & t.USERSTATE_PID.EXTERNAL_CHANNEL_APPLY)
        t.wx$1.showModal({
          content: "已在其它渠道提交开户申请",
          confirmText: "确定",
          showCancel: !1,
        });
      else if (
        e.userstateFront & t.USERSTATE_PID.NOAPPLY ||
        e.userstateFront & t.USERSTATE_PID.APPLYING
      )
        n({ dealerCode: e.code });
      else {
        var u = e.userstateFront & t.USERSTATE_PID.VERIFYING,
          a = e.userstateFront & t.USERSTATE_PID.FAILED;
        u
          ? v("ApplyProgress", e.code)
          : a
          ? v("ApplyRecover", e.code)
          : n({ dealerCode: e.code });
      }
    },
  };
};
