var t = require("../../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, n) {
    return new Promise(function (o, i) {
      var r = function (t) {
          try {
            a(n.next(t));
          } catch (t) {
            i(t);
          }
        },
        s = function (t) {
          try {
            a(n.throw(t));
          } catch (t) {
            i(t);
          }
        },
        a = function (t) {
          return t.done ? o(t.value) : Promise.resolve(t.value).then(r, s);
        };
      a((n = n.apply(t, e)).next());
    });
  },
  n = require("../../../../../../../../common/vendor.js"),
  o = require("../../service/index.js"),
  i = require("../../../../../stock-community-base/utils/knife.js"),
  r = require("../../../../../stock-community-base/utils/constant.js"),
  s = require("../../../../../stock-community-base/utils/message/report.js"),
  a = i.sdk,
  c = a.navigateTo,
  u = a.showToast,
  l = {
    data: function () {
      return {
        protocolList: [
          { title: "《腾讯自选股软件许可协议》", key: "copyright" },
          { title: "《腾讯自选股隐私政策》", key: "privacy" },
        ],
      };
    },
    methods: {
      authShow: function () {
        var t = this,
          e = this;
        return new Promise(function (n) {
          t.$modal.confirm({
            contentColor: "#676d79",
            confirmBtn: "已阅读并同意",
            maskClosable: !1,
            content:
              '<div style="text-align:center">\n            <div style="color:#0A1428;font-size:16px;line-height:22px;">社区中发帖、评论等服务由腾讯自选股社区提供，请先阅读并同意：</div>\n            <div style="margin-top:17px;color:#3077ec;font-size:16px;line-height:22px;">\n              <div class="mod-anshen-auth-copyright" style="margin-top:8px;">《腾讯自选股软件许可协议》</div>\n              <div class="mod-anshen-auth-privacy" style="margin-top:8px;">《腾讯自选股隐私政策》</div>\n            </div>\n          </div>',
            onConfirm: function () {
              e.doReport("wzq.community_protocol_confirm");
            },
            onCancel: function () {
              e.doReport("wzq.community_protocol_cancel");
            },
            beforeClose: function (t, o) {
              "confirm" === t
                ? e
                    .submitAuth()
                    .then(function () {
                      o(), n();
                    })
                    .catch(function () {
                      o(), u("网络异常请重试", e);
                    })
                : o();
            },
          }),
            setTimeout(function () {
              (document.querySelector(".mod-anshen-auth-copyright").onclick =
                function () {
                  return e.handleClickProtocols("copyright");
                }),
                (document.querySelector(".mod-anshen-auth-privacy").onclick =
                  function () {
                    return e.handleClickProtocols("privacy");
                  });
            }, 300);
        });
      },
      submitAuth: function () {
        return o.updateUserPrivilege().then(function (t) {
          return t;
        });
      },
      handleClickProtocols: function (t) {
        c({ path: "/community/protocol/".concat(t), instance: this });
      },
    },
  },
  h = {
    data: function () {
      return { savePosition: 0 };
    },
    methods: {
      clearProfileVm: function () {},
      resetPosition: function () {
        var t = this;
        setTimeout(function () {
          window.scrollTo(0, t.savePosition);
        }, 0);
      },
      openProfilePop: function (t) {
        t.content, t.defaultHeadImage, t.defaultNickname;
      },
    },
  },
  f = i.sdk,
  p = f.showToast,
  d = f.navigateTo,
  m = f.showKnowModal,
  v = f.onShowAlert,
  g = f.reportAnalytics,
  P = {
    privilege_to_wzq: "handleAuth",
    user_exist: "handleSign",
    account_status: "handleSuspendAccount",
    profile_status: "handleProfileViolation",
    error_msg: "handleErrorMsg",
  },
  y = {
    mixins: [l, h],
    data: function () {
      return {
        userStateData: {},
        defaultName: "社区股友",
        defaultAvatar: r.defaultAvatarColorful,
        noteDoc: "自选股官方设计师",
        isNormal: !0,
        needProcess: "",
        reportFun: null,
      };
    },
    computed: {
      descDoc: function () {
        var t = (this.userStateData || {}).mod_times_left;
        return "因头像昵称违规，已为您生成系统默认头像昵称。您也可以自主修改（今日可修改".concat(
          t || 5,
          "次）"
        );
      },
      banFlag: function () {
        return 1 == +this.userStateData.ban_flag;
      },
      isAccountSuspend: function () {
        return "account_status" === this.needProcess;
      },
      isProfileIllegal: function () {
        return "profile_status" === this.needProcess;
      },
      busiPageType: function () {
        return this.mergeType || this.pageType || "";
      },
    },
    methods: {
      isWriteOperate: function (t) {
        return (
          ("tapCommentItem" !== t || "wzq" !== i.platform) &&
          r.writeOperate.indexOf(t) > -1
        );
      },
      isPostCheckOperate: function (t) {
        return !!this.isWriteOperate(t) && r.postOperate.indexOf(t) > -1;
      },
      securityCheck: function () {
        var n = this,
          o =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = arguments.length > 1 ? arguments[1] : void 0;
        return new Promise(function (s, a) {
          return e(
            n,
            null,
            t().mark(function e() {
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.prev = 0), (t.next = 3), this.userCheck(o, r);
                      case 3:
                        t.next = 8;
                        break;
                      case 5:
                        return (
                          (t.prev = 5),
                          (t.t0 = t.catch(0)),
                          t.abrupt("return", void a(!1))
                        );
                      case 8:
                        this.postCheck(o)
                          ? s(!0)
                          : ("wzq" === i.platform &&
                              (o.fakeInput && o.fakeInput.blur(),
                              window.scrollTo(0, this.savePosition)),
                            a(!1));
                      case 9:
                      case "end":
                        return t.stop();
                    }
                },
                e,
                this,
                [[0, 5]]
              );
            })
          );
        });
      },
      postCheck: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = !0,
          n = t.eventName || "";
        if (!this.isPostCheckOperate(n)) return e;
        var o = t.postData,
          i = void 0 === o ? {} : o,
          s = i.status,
          a = r.opeAuditCommentTextMap;
        return (
          a[+s] && (m({ content: a[+s], confirmText: "我知道了" }), (e = !1)), e
        );
      },
      userCheck: function (n, s) {
        var a,
          c,
          u = this,
          l = {};
        i.isObject(n)
          ? ((a = n.eventName || ""),
            (c = n.fakeInput),
            (l = n.rootData || n.postData || {}),
            (this.reportFun = n.reportFun))
          : ((a = n), (this.reportFun = s));
        var h = !1;
        return (
          "wzq" === i.platform &&
            r.isIOS &&
            c &&
            r.fatieqiOperate.indexOf(a) > -1 &&
            (null == c || c.focus(), (h = !0)),
          "wzq" === i.platform && (this.savePosition = window.scrollY),
          new Promise(function (s, f) {
            return e(
              u,
              null,
              t().mark(function e() {
                var u,
                  p,
                  d = this;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (this.isWriteOperate(a)) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt("return", void s(!0));
                        case 2:
                          if (
                            ((t.t0 = "zxg" === i.platform && this.R), !t.t0)
                          ) {
                            t.next = 6;
                            break;
                          }
                          return (
                            (t.next = 6),
                            this.R.auth(
                              !0,
                              "turn" === a || "turnNews" === a ? 500 : 0
                            )
                          );
                        case 6:
                          (p = {
                            write_scene: r.operateMap[a],
                            subject_id: l.id || "",
                          }),
                            ["putTurn", "putPeply"].indexOf(a) &&
                              Object.assign(p, {
                                comment_id:
                                  null == (u = n.postData)
                                    ? void 0
                                    : u.comment_id,
                              }),
                            o.getUserState(p, this.busiPageType).then(
                              function (t) {
                                var e = t.code,
                                  n = t.data;
                                0 == +e
                                  ? ((d.userStateData = n),
                                    d.setNeedProcess(),
                                    (d.isNormal = !d.needProcess),
                                    d.isNormal
                                      ? s(!0)
                                      : (h &&
                                          (null == c || c.blur(),
                                          window.scrollTo(0, d.savePosition)),
                                        d.handleAbnormal(d.needProcess, a),
                                        f && f(!1)))
                                  : s(!0);
                              },
                              function () {
                                s(!0);
                              }
                            );
                        case 8:
                        case "end":
                          return t.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
          })
        );
      },
      setNeedProcess: function () {
        this.needProcess = "";
        var t = (this.userStateData || {}).need_process;
        t && P[t] && (this.needProcess = t);
      },
      handleAbnormal: function (t, e) {
        P[t] && this[P[t]](e);
      },
      checkUserProfile: function () {
        "profile_status" === this.needProcess && this.handleProfileViolation();
      },
      handleModifyProfileCheck: function () {
        return "account_status" === this.needProcess
          ? (this.handleSuspendAccount(), !0)
          : this.banFlag
          ? (p("因系统维护升级，暂不支持修改头像昵称", this), !0)
          : 0 === this.modifyTimesLeft
          ? (p("今日5次修改机会已用完，请明日再修改吧", this), !0)
          : void 0;
      },
      handleAuth: function () {
        "wzq" === i.platform && this.authShow();
      },
      handleSign: function () {
        "wzq" === i.platform && p("正在为您注册账号，请稍等", this);
      },
      handleSuspendAccount: function () {
        var t = this,
          e =
            "profile" === this.busiPageType
              ? "因账号触发社区规则，处于封号状态，暂时不支持修改个人资料"
              : "因账号触发了《社区规则》的禁止行为，已被暂时取消发帖及互动权限。";
        if ("zxg" === i.platform && "fund" !== this.busiPageType)
          ["stgy", "earn", "news"].indexOf(this.busiPageType) > -1 &&
            v(function (e) {
              var n = e.status,
                o = e.result;
              "success" === n && "left" === o && t.gotoAppeal();
            }),
            m({ content: e, confirmText: "关闭", cancelText: "去申诉" });
        else if ("wzq" !== i.platform && i.IsMINAPP && !i.IS_LCT_XCX)
          n.wx$1.showModal({
            title: "",
            content: e,
            confirmText: "profile" === this.busiPageType ? "我知道了" : "关闭",
            confirmColor: "#262E40",
            cancelText: "去申诉",
            cancelColor: "#3077ec",
            success: function (t) {
              if (t.cancel) {
                var e = "/pages/additional/webview/index?url=".concat(
                  encodeURIComponent(
                    "https://wzq.tenpay.com/mp/v2/index.html#/comedit/appeal"
                  )
                );
                d({ url: e, path: e });
              }
            },
            fail: function (t) {},
          });
        else {
          var o = this.$modal.confirm({
            content: e,
            confirmBtn: {
              text: "profile" === this.busiPageType ? "我知道了" : "关闭",
              active: !1,
            },
            cancelBtn: "去申诉",
            onCancel: this.gotoAppeal,
          });
          setTimeout(function () {
            var t,
              e =
                null == (t = null == o ? void 0 : o.component) ? void 0 : t.$el;
            if (e) {
              var n = e.querySelectorAll(".st-popup .st-modal-btn"),
                i = n && n[0],
                r = n && n[1];
              i && i.setAttribute("style", "color: #3077ec !important;"),
                r && r.classList.remove("st-modal-btn_dull");
            }
          }, 200);
        }
        this.doReport("shequ_anshen_account_suspend");
      },
      gotoAppeal: function () {
        d({ url: r.toApeal(), path: "/comedit/appeal", instance: this });
      },
      handleProfileViolation: function (t) {
        var e = this.userStateData || {},
          n = e.ban_flag,
          o = e.mod_times_left,
          s = e.default || {},
          a = s.default_head_image,
          c = s.default_nickname,
          u = +n
            ? "因头像昵称疑似违规，暂不支持发帖和互动，您可修改头像昵称来恢复权限，但系统维护期间不支持自主修改，建议使用系统默认头像昵称"
            : "因头像昵称疑似违规，暂不支持发帖和互动，您可修改头像昵称来恢复权限，也可使用系统默认头像和昵称（剩余".concat(
                o,
                "/5次）"
              );
        "zxg" === i.platform
          ? setTimeout(
              function () {
                d({
                  url: r.toProfilePop({
                    title: u,
                    avatar: a,
                    name: c,
                    ban_flag: n,
                  }),
                });
              },
              "turn" === t || "turnNews" === t ? 500 : 0
            )
          : "miniapp" === this.from || i.IS_ZXG_XCX_ALLH5
          ? this.openProfilePop({
              content: u,
              defaultHeadImage: a,
              defaultNickname: c,
            })
          : this.$emit("showProfilePop", {
              content: u,
              defaultHeadImage: a,
              defaultNickname: c,
            }),
          this.doReport("shequ_anshen_profile_illegal");
      },
      handleErrorMsg: function () {
        var t = (this.userStateData || {}).error_msg;
        p(t || "", this);
      },
      doReport: function (t) {
        this.busiPageType &&
        -1 !== ["hotFans", "messageBox"].indexOf(this.busiPageType)
          ? s.report(t, {}, this)
          : (this.$emit("commentReport", t), g({ eventName: t })),
          this.reportFun && this.reportFun(t);
      },
    },
  };
exports.securityCheck = y;
