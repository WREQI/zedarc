var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var n = require("../../../common/vendor.js"),
  o = require("../../../cgi/apply.js"),
  i = require("../../../model/apply/count.js"),
  r = require("../../../model/apply/useApply.js"),
  a = require("../../../common/components/Dialog/index.js"),
  s = require("../../../stores/apply/useProfile.js"),
  u = { mobile: /^1\d{10}$/ },
  c = null,
  l = !1,
  p = {
    options: { styleIsolation: "shared" },
    components: {
      MpActionSheet: function () {
        return "../../../common/components/ActionSheet/index.js";
      },
      StCellGroup: function () {
        return "../../../common/components/CellGroup/index.js";
      },
      StCell: function () {
        return "../../../common/components/Cell/index.js";
      },
    },
    props: {
      value: { type: Boolean, required: !0 },
      captchaLen: { type: Number, default: 6 },
      biz: { type: String, required: !0 },
      selectKey: { type: String, required: !0 },
    },
    setup: function () {
      var e = n.getCurrentInstance().proxy,
        t = r.useApply(),
        o = t.commitApplyData,
        a = t.setLocalApplyInfo,
        u = t.applyInfo,
        l = s.useProfileStore().updateData,
        p = n.ref(0);
      return (
        (c = new i.Count(function (t) {
          e.countTime = t;
        })),
        {
          countTime: p,
          commitApplyData: o,
          setLocalApplyInfo: a,
          updateData: l,
          applyInfo: u,
        }
      );
    },
    data: function () {
      return {
        isShow: !1,
        mobileInput: "",
        code: "",
        phoneFocus: !1,
        codeFocus: !1,
      };
    },
    computed: {
      isSendCodeEnable: function () {
        return 11 === this.mobile.length && !this.countTime;
      },
      isSubmitable: function () {
        return (
          (this.isMaskPhone || u.mobile.test(this.mobile)) &&
          u.code.test(this.code)
        );
      },
      mobile: function () {
        return this.mobileInput.replace(/\s/g, "");
      },
      isMaskPhone: function () {
        return this.mobileInput && this.mobileInput.indexOf("*") >= 0;
      },
    },
    watch: {
      value: function (e) {
        this.isShow = e;
      },
      isShow: function (e) {
        this.$emit("input", e),
          !e || this.isMaskPhone || this.mobileInput
            ? (this.phoneFocus = !1)
            : ((this.mobileInput = this.applyInfo.tel || ""),
              this.phoneInputFocus());
      },
    },
    created: function () {
      (this.isShow = this.value),
        (u.code = new RegExp("^\\d{".concat(this.captchaLen, "}$")));
    },
    beforeUnmount: function () {
      null !== c && (c.clean(!0), (c = null));
    },
    methods: {
      sendCode: function () {
        var n = this;
        return t(
          e().mark(function t() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (n.countTime) {
                        e.next = 15;
                        break;
                      }
                      if (
                        (n.$stat.click(
                          "trade.".concat(
                            n.biz,
                            ".personaldate.phonenum.getcode"
                          )
                        ),
                        !n.isMaskPhone && !u.mobile.test(n.mobile))
                      ) {
                        e.next = 14;
                        break;
                      }
                      return (
                        (e.prev = 2),
                        n.codeInputHandler(!0),
                        (e.next = 6),
                        o.applyCgi.requestSmsCode(o.SEND_SMS_ACTION, n.mobile)
                      );
                    case 6:
                      c.start(), (e.next = 12);
                      break;
                    case 9:
                      (e.prev = 9),
                        (e.t0 = e.catch(2)),
                        n.codeInputHandler(!1),
                        n.showDialog(e.t0.retmsg);
                    case 12:
                      e.next = 15;
                      break;
                    case 14:
                      n.showDialog("请填写正确的手机号码");
                    case 15:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[2, 9]]
            );
          })
        )();
      },
      onClose: function (e) {
        e || (this.$nextTick(this.resetData), this.$emit("close", !1));
      },
      onBeforeClose: function (n) {
        var i = this;
        return t(
          e().mark(function t() {
            var r;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (i.isSubmitable) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        (i.showDialog("手机号码或验证码无效"),
                        void (null == n || n(!1)))
                      );
                    case 2:
                      if (l) {
                        e.next = 15;
                        break;
                      }
                      return (
                        (l = !0),
                        (e.prev = 4),
                        (e.next = 7),
                        i.commitApplyData(
                          o.ACTION.PROFILE_CHANGE_PHONE,
                          { tel: i.mobile, verify_code: i.code },
                          { encodeFields: ["tel"] }
                        )
                      );
                    case 7:
                      (r = i.mobile.replace(
                        /^(\d{3})(\d{4})(\d{4})$/,
                        "$1****$3"
                      )),
                        i.$stat.click(
                          "trade.".concat(i.biz, ".personaldate.tel.confrim")
                        ),
                        i.updateData({
                          data: { tel: r },
                          isDeep: !0,
                          ignoreLink: !0,
                        }),
                        i.updateData({
                          data: { verify_tel: r },
                          ignoreLink: !0,
                        }),
                        i.setLocalApplyInfo({ is_verify_tel: "1" }),
                        (l = !1),
                        i.showDialog("手机号码更新成功"),
                        (e.next = 14);
                      break;
                    case 11:
                      return (
                        (e.prev = 11),
                        (e.t0 = e.catch(4)),
                        e.abrupt(
                          "return",
                          ((l = !1),
                          i.showDialog(e.t0.retmsg || "网络繁忙 请稍后再试"),
                          void (null == n || n(!1)))
                        )
                      );
                    case 14:
                      i.$nextTick(i.resetData), null == n || n();
                    case 15:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[4, 11]]
            );
          })
        )();
      },
      showDialog: function (e) {
        var t, o;
        null == (o = null == (t = n.wx$1) ? void 0 : t.hideKeyboard) ||
          o.call(t),
          a.Dialog({ message: e });
      },
      resetData: function () {
        var e = this;
        ["mobileInput", "code"].forEach(function (t) {
          return (e[t] = "");
        });
      },
      onFocus: function () {
        this.$stat.click(
          "trade.".concat(this.biz, ".personaldate.phonenum.click")
        );
      },
      clearInput: function () {
        this.resetData(), this.phoneInputFocus();
      },
      phoneInputFocus: function () {
        var e = this;
        setTimeout(function () {
          e.phoneFocus = !0;
        }, 300);
      },
      codeInputHandler: function (e) {
        var t = this;
        setTimeout(function () {
          t.codeFocus = e;
        }, 300);
      },
    },
  };
Array ||
  (
    n.resolveComponent("st-cell") +
    n.resolveComponent("st-cell-group") +
    n.resolveComponent("mp-action-sheet")
  )();
var d = n._export_sfc(p, [
  [
    "render",
    function (e, t, o, i, r, a) {
      return n.e(
        { a: a.isMaskPhone },
        a.isMaskPhone
          ? {
              b: n.o(function () {
                return a.clearInput && a.clearInput.apply(a, arguments);
              }),
              c: r.mobileInput,
              d: n.o(function (e) {
                return (r.mobileInput = e.detail.value);
              }),
            }
          : {
              e: r.phoneFocus,
              f: n.o(function () {
                return a.onFocus && a.onFocus.apply(a, arguments);
              }),
              g: r.mobileInput,
              h: n.o(function (e) {
                return (r.mobileInput = e.detail.value);
              }),
            },
        { i: r.mobileInput },
        r.mobileInput
          ? {
              j: n.o(function () {
                return a.clearInput && a.clearInput.apply(a, arguments);
              }),
            }
          : {},
        {
          k: n.p({ border: !1 }),
          l: o.captchaLen,
          m: r.codeFocus,
          n: r.code,
          o: n.o(function (e) {
            return (r.code = e.detail.value);
          }),
          p: n.t(
            i.countTime ? "获取验证码(" + i.countTime + "秒)" : "获取验证码"
          ),
          q: !a.isSendCodeEnable,
          r: n.o(function () {
            return a.sendCode && a.sendCode.apply(a, arguments);
          }),
          s: n.p({ border: !1 }),
          t: n.p({ border: !1 }),
          v: a.isSubmitable ? "" : 1,
          w: n.o(a.onClose),
          x: n.p({
            pickerStyle: !0,
            "mask-closable": !0,
            value: r.isShow,
            title: "请填写手机号",
            "confirm-txt": "确定",
            "before-close": a.onBeforeClose,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-25a2396e"],
]);
wx.createComponent(d);
