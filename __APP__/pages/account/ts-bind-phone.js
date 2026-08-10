var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var o = require("../../cgi/bind.js"),
  i = require("../../common/vendor.js"),
  t = require("../../common/components/Dialog/index.js"),
  s = require("../../model/bind/usePhone.js"),
  a = require("../../model/common/useSms.js"),
  u = require("../../model/common/useBuildVersion.js"),
  c = require("../../service/stat/mp-weixin.js");
require("../../service/broker.js");
var l = require("../../mixin/platforms/index.js"),
  d = require("../../config/broker/10900/index.js"),
  m = {
    mixins: [l.pluginMixins],
    components: {
      StCellGroup: function () {
        return "../../common/components/CellGroup/index.js";
      },
      StCell: function () {
        return "../../common/components/Cell/index.js";
      },
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
      ServerBroker: function () {
        return "../../components/ServerBroker/ServerBroker.js";
      },
    },
    setup: function () {
      var l,
        m,
        p = null == (l = i.getCurrentInstance()) ? void 0 : l.proxy,
        b = s.usePhone(),
        h = b.bindData,
        f = b.isPhoneValid,
        g = b.captchaLen,
        v = b.checkData,
        x = b.sendCodeCheck,
        k = a.useSms(),
        C = k.countTimeText,
        S = k.countTimmer,
        D = k.sendSms,
        j = u.useBuildVersion(),
        q = j.buildVersion,
        B = j.isBuildVersionShow,
        T = j.incrementTriggerCount,
        V = i.computed(function () {
          return !!C.value;
        });
      return (
        i.onBeforeUnmount(function () {
          null !== S && S.clear();
        }),
        {
          bindData: h,
          isPhoneValid: f,
          captchaLen: g,
          countTimeText: C,
          smsDisabled: V,
          onSmsSend: function () {
            return (
              c.stat.click("trade.ts_bind.phone_smscode_click"),
              h.phone
                ? f.value
                  ? void D({ action: o.SMS_ACTION.BIND, phone: h.phone })
                  : (t.Dialog({ message: "手机号码不合法" }), !1)
                : (t.Dialog({ message: "请输入手机号码" }), !1)
            );
          },
          onNextClick:
            ((m = r(
              e().mark(function r() {
                var o, s, a, u, l, d, m, b, f, g;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (c.stat.click("trade.ts_bind.phone_next_click"),
                          (s = v()),
                          (a = n(s, 2)),
                          (u = a[0]),
                          (l = a[1]),
                          (d = void 0 === l ? {} : l),
                          u)
                        ) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          (t.Dialog({
                            message:
                              null !== (o = d.retmsg) && void 0 !== o
                                ? o
                                : "填写信息有误 请确认",
                          }),
                          !1)
                        );
                      case 4:
                        return (e.next = 6), i.to(x());
                      case 6:
                        if (
                          ((m = e.sent),
                          (b = n(m, 2)),
                          (f = b[0]),
                          (g = b[1]),
                          !f)
                        ) {
                          e.next = 12;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          (t.Dialog({
                            message: f.retmsg || "系统繁忙 请稍后再试",
                          }),
                          !1)
                        );
                      case 12:
                        p.$router.push({
                          name: "AccountTsBindAccount",
                          query: {
                            phone: h.phone,
                            xid_session: g.xid_session || "",
                          },
                        });
                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, r);
              })
            )),
            function () {
              return m.apply(this, arguments);
            }),
          buildVersion: q,
          isBuildVersionShow: B,
          onBuildVersionClick: T,
          brokerName: d.brokerConfig.base.name,
        }
      );
    },
  };
Array ||
  (
    i.resolveComponent("st-cell") +
    i.resolveComponent("st-cell-group") +
    i.resolveComponent("server-broker") +
    i.resolveComponent("mp-dialog") +
    i.resolveComponent("GlobalWrap")
  )(),
  Math;
var p = i._export_sfc(m, [
  [
    "render",
    function (e, n, r, o, t, s) {
      return i.e(
        {
          a: e.rootFontSize,
          b: i.t(o.brokerName),
          c: i.o(function () {
            return (
              o.onBuildVersionClick && o.onBuildVersionClick.apply(o, arguments)
            );
          }),
          d: o.bindData.phone,
          e: i.o(function (e) {
            return (o.bindData.phone = e.detail.value);
          }),
          f: i.p({ title: "手机号码" }),
          g: "请输入短信验证码",
          h: o.captchaLen,
          i: !o.isPhoneValid,
          j: o.bindData.code,
          k: i.o(function (e) {
            return (o.bindData.code = e.detail.value);
          }),
          l: i.t(o.countTimeText ? o.countTimeText + "秒" : "获取验证码"),
          m: o.smsDisabled,
          n: i.o(function () {
            return o.onSmsSend && o.onSmsSend.apply(o, arguments);
          }),
          o: i.p({ title: "验证码", border: !1 }),
          p: i.p({ "border-top": !1 }),
          q: i.o(function () {
            return o.onNextClick && o.onNextClick.apply(o, arguments);
          }),
          r: o.isBuildVersionShow,
        },
        o.isBuildVersionShow ? { s: i.t(o.buildVersion) } : {},
        {
          t: i.p({ fixed: !0 }),
          v: i.p({ id: "mp-dialog" }),
          w: i.sr("#global-wrap", "0a82c0e3-0"),
          x: i.p({
            id: "global-wrap",
            filePath: "/account/ts-bind-phone",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-0a82c0e3"],
]);
wx.createPage(p);
