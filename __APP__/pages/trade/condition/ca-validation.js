require("../../../app.js");
var e = require("../../../common/vendor.js"),
  n = require("../../../config/enum.js"),
  o = require("../../../cgi/bind.js"),
  t = require("../../../config/key.js");
require("../../../service/broker.js");
var i = require("../../../adapter/router.js"),
  r = require("../../../model/account/usePersonal.js"),
  l = require("../../../stores/user/useUserinfo.js");
require("../../../service/sdk/lib/api.js");
var s = require("../../../service/sdk/platform/mp-weixin.js"),
  a = require("../../../mixin/platforms/index.js"),
  u = require("../../../config/broker/11100/index.js"),
  c = {
    components: {
      StCellGroup: function () {
        return "../../../common/components/CellGroup/index.js";
      },
      StCell: function () {
        return "../../../common/components/Cell/index.js";
      },
    },
    mixins: [a.pluginMixins],
    setup: function (a, c) {
      c.slots, c.emit, c.attrs, c.expose;
      var d,
        p,
        f = r.usePersonal(),
        m = l.useUserinfoStore(),
        h = e.storeToRefs(m).userinfo;
      null ==
        (p =
          null == (d = null == m ? void 0 : m.getUserInfo)
            ? void 0
            : d.call(m)) || p.then(function () {});
      var v = e.ref(""),
        x = e.ref(""),
        C = e.ref(0),
        b = null,
        g = e.computed(function () {
          return n.REGX.MOBILE.test(v.value) || k.value;
        }),
        k = e.computed(function () {
          var e;
          return !!(null == (e = h.value) ? void 0 : e.mobilephone);
        }),
        T = e.computed(function () {
          return k.value
            ? "若系统预留手机号已变更，请先联系券商"
            : "系统无法获取到预留手机号，请先联系券商";
        });
      return (
        e.watch(
          function () {
            return h.value;
          },
          function (e) {
            (null == e ? void 0 : e.mobilephone) && (v.value = e.mobilephone);
          },
          { deep: !0, immediate: !0 }
        ),
        e.onBeforeUnmount(function () {
          b && (clearInterval(b), (b = null));
        }),
        {
          phone: v,
          code: x,
          bindCountTime: C,
          isBindPhoneCorrect: g,
          hasUserPhone: k,
          promptText: T,
          userinfo: h,
          sendSms: function () {
            g.value
              ? (e.index.showLoading({ title: "发送中..." }),
                f
                  .sendSms({ type: o.SMS_ACTION.COND_SIGN, tel: v.value })
                  .then(function () {
                    e.index.hideLoading(),
                      e.index.showToast({
                        title: "验证码已发送",
                        icon: "success",
                      }),
                      (function () {
                        var e = 60;
                        (C.value = e),
                          (b = setInterval(function () {
                            e--,
                              (C.value = e),
                              0 === e && (clearInterval(b), (b = null));
                          }, 1e3));
                      })();
                  })
                  .catch(function (n) {
                    e.index.hideLoading(),
                      e.index.showToast({
                        title:
                          (null == n ? void 0 : n.retmsg) || "发送验证码失败",
                        icon: "none",
                      });
                  }))
              : e.index.showToast({
                  title: "未获取到预留手机号，请联系券商",
                  icon: "none",
                });
          },
          onNextClick: function () {
            g.value
              ? !x.value || x.value.length < u.brokerConfig.bind.captchaLen
                ? e.index.showToast({
                    title: "请输入".concat(
                      u.brokerConfig.bind.captchaLen,
                      "位验证码"
                    ),
                    icon: "none",
                  })
                : (e.index.showLoading({ title: "验证中..." }),
                  f
                    .checkSms({
                      action: o.SMS_ACTION.COND_SIGN,
                      tel: v.value,
                      sms_code: x.value,
                    })
                    .then(function (n) {
                      e.index.hideLoading(),
                        e.index.showToast({
                          title: "验证成功",
                          icon: "success",
                        }),
                        e.index.setStorageSync(t.CONDIITON_SIGN_PROTOCOL, !0),
                        e.index.$emit("condition.protocol.sign"),
                        i.router().back({ delta: 2 });
                    })
                    .catch(function (n) {
                      e.index.hideLoading(),
                        e.index.showToast({
                          title:
                            (null == n ? void 0 : n.retmsg) || "验证码校验失败",
                          icon: "none",
                        });
                    }))
              : e.index.showToast({
                  title: "未获取到预留手机号，请联系券商",
                  icon: "none",
                });
          },
          handleContactBroker: function () {
            var e = "".concat(u.brokerConfig.base.tel).replace(/-/g, "");
            s.sdk.makePhoneCall(e);
          },
          brokerTel: u.brokerConfig.base.tel,
        }
      );
    },
  };
Array ||
  (
    e.resolveComponent("st-cell") +
    e.resolveComponent("st-cell-group") +
    e.resolveComponent("GlobalWrap")
  )(),
  Math;
var d = e._export_sfc(c, [
  [
    "render",
    function (n, o, t, i, r, l) {
      return e.e(
        {
          a: n.rootFontSize,
          b: e.t(i.promptText),
          c: e.t(i.brokerTel),
          d: e.o(function () {
            return (
              i.handleContactBroker && i.handleContactBroker.apply(i, arguments)
            );
          }),
          e: i.hasUserPhone,
        },
        (i.hasUserPhone, {}),
        {
          f: i.phone,
          g: e.o(function (e) {
            return (i.phone = e.detail.value);
          }),
          h: e.p({ title: "手机号码" }),
          i: !i.isBindPhoneCorrect,
          j: i.code,
          k: e.o(function (e) {
            return (i.code = e.detail.value);
          }),
          l: e.t(i.bindCountTime ? i.bindCountTime + "秒" : "获取验证码"),
          m: !!i.bindCountTime,
          n: e.o(function () {
            return i.sendSms && i.sendSms.apply(i, arguments);
          }),
          o: e.p({ title: "验证码" }),
          p: e.o(function () {
            return i.onNextClick && i.onNextClick.apply(i, arguments);
          }),
          q: e.p({ border: !1 }),
          r: e.sr("#global-wrap", "1c0e9fc4-0"),
          s: e.p({
            id: "global-wrap",
            filePath: "/trade/condition/ca-validation",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-1c0e9fc4"],
]);
wx.createPage(d);
