var e = require("../../../../@babel/runtime/helpers/objectSpread2");
require("../../../../app.js");
var r = require("../../../../common/vendor.js");
require("../../../../service/broker.js"),
  require("../../../../service/sdk/lib/api.js");
var n = require("../../../../service/sdk/platform/mp-weixin.js"),
  o = require("../../../../common/components/Dialog/index.js");
require("../../../../service/stat/mp-weixin.js");
var t = require("../../../../config/broker/10900/index.js"),
  i = r.defineComponent({
    __name: "BottomNav",
    props: {
      type: { type: String, default: "bind" },
      accountCalled: { type: String, default: "资金账号" },
      currentAccount: { type: String, required: !0 },
      accountMode: { type: String, required: !0 },
    },
    emits: ["find-account"],
    setup: function (i, c) {
      var u,
        a = c.emit,
        d = i,
        s = a,
        l = null == (u = r.getCurrentInstance()) ? void 0 : u.proxy;
      function f(e) {
        l.$stat.click("trade.".concat(d.type, ".nav_").concat(e.toLowerCase()));
      }
      var p = t.brokerConfig.bind.findAccount;
      function m() {
        f("find_account_click");
        var r = (null == l ? void 0 : l.$route.query.phone) ? "1" : "";
        s("find-account"),
          l.$router.push({
            name: "FindAccount",
            query: e({ mode: d.accountMode, smscheck: r }, l.$route.query),
          });
      }
      function v() {
        var e, r, i;
        if (
          (f("forgot_passwd_click"), Boolean(t.brokerConfig.bind.forgetPwd))
        ) {
          var c =
            (null ==
            (i =
              null == (r = null == (e = t.brokerConfig.hall) ? void 0 : e.third)
                ? void 0
                : r.entry)
              ? void 0
              : i.resetpwd) || "";
          if (!d.currentAccount && !c)
            return void o.Dialog({
              message: "请先设置".concat(d.accountCalled),
            });
          l.$router.push({
            name: "BizPwdReset",
            query: { fundaccount: d.currentAccount },
          });
        } else {
          var u = t.brokerConfig.base || {},
            a = u.name,
            s = void 0 === a ? "" : a,
            p = u.tel,
            m = void 0 === p ? "" : p,
            v = "请您携带本人有效身份证前往".concat(
              s,
              "营业部办理重置密码业务"
            );
          o.Dialog({
            message: v,
            showCancelButton: !!m,
            confirmButtonText: m ? "致电券商" : "确认",
            cancelButtonText: "确认",
            onConfirm: function () {
              m && n.sdk.makePhoneCall(String(m).replace(/-/g, ""));
            },
          });
        }
      }
      return function (e, n) {
        return r.e(
          { a: r.unref(p) },
          r.unref(p) ? { b: r.t(i.accountCalled), c: r.o(m) } : {},
          { d: r.o(v) }
        );
      };
    },
  });
wx.createComponent(i);
