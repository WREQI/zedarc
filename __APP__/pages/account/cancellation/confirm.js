var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = function (e, n, t) {
    return new Promise(function (o, a) {
      var c = function (e) {
          try {
            i(t.next(e));
          } catch (e) {
            a(e);
          }
        },
        r = function (e) {
          try {
            i(t.throw(e));
          } catch (e) {
            a(e);
          }
        },
        i = function (e) {
          return e.done ? o(e.value) : Promise.resolve(e.value).then(c, r);
        };
      i((t = t.apply(e, n)).next());
    });
  },
  t = require("../../../common/vendor.js"),
  o = {
    components: {
      ConfirmModal: function () {
        return "../components/confirmModal.js";
      },
    },
    data: function () {
      return {
        confirmModalOpt: {
          visible: !1,
          title: "注销账号",
          cancelText: "取消",
          confirmText: "确认注销",
        },
      };
    },
    mounted: function () {},
    methods: {
      giveUp: function () {
        t.Request.reportMTAData({
          eventName: "base.accountcancellation_confirm.abandon_btn_click",
        }),
          t.wx$1.navigateBack();
      },
      goNext: function () {
        t.Request.reportMTAData({
          eventName: "base.accountcancellation_confirm.next_btn_click",
        }),
          t.Request.reportMTAData({
            eventName: "base.accountcancellation_confirm.modal_show",
          }),
          (this.confirmModalOpt.visible = !0);
      },
      modalConfirm: function () {
        return n(
          this,
          null,
          e().mark(function n() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      this.selectComponent("#captcha").show();
                    case 1:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              this
            );
          })
        );
      },
      handlerCaptchaVerify: function (e) {
        var n = e.detail || {},
          t = n.ret,
          o = n.ticket,
          a = void 0 === o ? "" : o,
          c = n.randstr,
          r = void 0 === c ? "" : c;
        0 === t && this.handleCancelAccount(a, r);
      },
      modalCancel: function () {
        t.Request.reportMTAData({
          eventName: "base.accountcancellation_confirm.modal_cancel_click",
        }),
          (this.confirmModalOpt.visible = !1);
      },
      handleCancelAccount: function () {
        var o =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return n(
          this,
          null,
          e().mark(function n() {
            var c;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        t.AccountAPI.accountCancellationConfirm(o, a)
                      );
                    case 3:
                      (c = e.sent),
                        t.Request.reportMTAData({
                          eventName:
                            "base.accountcancellation_confirm.modal_confirm_click",
                        }),
                        0 == +c.code
                          ? (t.Request.reportMTAData({
                              eventName:
                                "base.accountcancellation_confirm.success_tips_show",
                            }),
                            t.wx$1.showModal({
                              title: "",
                              content: "注销成功",
                              showCancel: !1,
                              confirmText: "我知道了",
                              success: function () {
                                t.wx$1.exitMiniProgram();
                              },
                            }))
                          : t.wx$1.showToast({
                              title: c.msg || "注销失败",
                              icon: "none",
                              duration: 2e3,
                            }),
                        (e.next = 10);
                      break;
                    case 7:
                      (e.prev = 7),
                        (e.t0 = e.catch(0)),
                        t.wx$1.showToast({
                          title: "系统繁忙，请稍后重试",
                          icon: "none",
                          duration: 2e3,
                        });
                    case 10:
                      this.confirmModalOpt.visible = !1;
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              this,
              [[0, 7]]
            );
          })
        );
      },
    },
  };
Array ||
  (
    t.resolveComponent("mp-privacy-dialog") +
    t.resolveComponent("stock-privacy-dialog") +
    t.resolveComponent("ConfirmModal") +
    t.resolveComponent("t-captcha")
  )();
var a = t._export_sfc(o, [
  [
    "render",
    function (e, n, o, a, c, r) {
      return {
        a: e.rootFontSize,
        b: t.p({ "no-auto": !0 }),
        c: t.o(function () {
          return r.giveUp && r.giveUp.apply(r, arguments);
        }, 252),
        d: t.o(function () {
          return r.goNext && r.goNext.apply(r, arguments);
        }, 253),
        e: t.t(c.confirmModalOpt.title),
        f: t.o(r.modalConfirm, 254),
        g: t.o(r.modalCancel, 255),
        h: t.p({
          "modal-show": c.confirmModalOpt.visible,
          "confirm-text": c.confirmModalOpt.confirmText,
          "cancel-text": c.confirmModalOpt.cancelText,
        }),
        i: t.o(r.handlerCaptchaVerify, 256),
      };
    },
  ],
  ["__scopeId", "data-v-51146b7b"],
]);
wx.createPage(a);
