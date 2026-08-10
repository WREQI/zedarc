var e = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = Object.defineProperty,
  r = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  u = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  c = function (e, t, n) {
    return new Promise(function (r, o) {
      var i = function (e) {
          try {
            s(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          try {
            s(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        s = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(i, a);
        };
      s((n = n.apply(e, t)).next());
    });
  },
  l = require("../../../../../../../common/vendor.js"),
  h = require("../../../../stock-community-base/utils/constant.js"),
  f = require("../../../../stock-community-base/utils/knife.js"),
  p = require("../../service/index.js"),
  d = require("../../../../stock-community-base/utils/message/report.js"),
  m = f.sdk,
  v = m.showToast,
  g = m.navigateTo,
  b = m.showKnowModal,
  P = (m.onShowAlert, m.reportAnalytics),
  w = {
    privilege_to_wzq: "handleAuth",
    user_exist: "handleSign",
    account_status: "handleSuspendAccount",
    profile_status: "handleProfileViolation",
    error_msg: "handleErrorMsg",
  },
  _ = {
    data: function () {
      return {
        userStateData: {},
        defaultName: "社区股友",
        defaultAvatar: h.defaultAvatarColorful,
        noteDoc: "自选股官方设计师",
        isNormal: !0,
        needProcess: "",
        reportFun: null,
      };
    },
    computed: {
      descDoc: function () {
        var e = (this.userStateData || {}).mod_times_left;
        return "因头像昵称违规，已为您生成系统默认头像昵称。您也可以自主修改（今日可修改".concat(
          e || 5,
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
      isWriteOperate: function (e) {
        return h.writeOperate.indexOf(e) > -1;
      },
      isPostCheckOperate: function (e) {
        return !!this.isWriteOperate(e) && h.postOperate.indexOf(e) > -1;
      },
      securityCheck: function () {
        var e = this,
          n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = arguments.length > 1 ? arguments[1] : void 0;
        return new Promise(function (o, i) {
          return c(
            e,
            null,
            t().mark(function e() {
              return t().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), this.userCheck(n, r);
                      case 3:
                        e.next = 8;
                        break;
                      case 5:
                        return (
                          (e.prev = 5),
                          (e.t0 = e.catch(0)),
                          e.abrupt("return", void i(!1))
                        );
                      case 8:
                        this.postCheck(n)
                          ? o(!0)
                          : ("wzq" === f.platform &&
                              (n.fakeInput && n.fakeInput.blur(),
                              window.scrollTo(0, this.savePosition)),
                            i(!1));
                      case 9:
                      case "end":
                        return e.stop();
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
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = !0,
          n = e.eventName || "";
        if (!this.isPostCheckOperate(n)) return t;
        var r = e.postData,
          o = void 0 === r ? {} : r,
          i = o.status,
          a = h.opeAuditCommentTextMap;
        return (
          a[+i] &&
            (b({
              content: a[+i],
              confirmText: "我知道了",
              confirmColor: "#E63535",
            }),
            (t = !1)),
          t
        );
      },
      userCheck: function (e, n) {
        var r,
          o,
          i = this,
          a = {};
        f.isObject(e)
          ? ((r = e.eventName || ""),
            (o = e.fakeInput),
            (a = e.rootData || e.postData || {}),
            (this.reportFun = e.reportFun))
          : ((r = e), (this.reportFun = n));
        var s = !1;
        return (
          "wzq" === f.platform &&
            h.isIOS &&
            o &&
            h.fatieqiOperate.indexOf(r) > -1 &&
            (null == o || o.focus(), (s = !0)),
          "wzq" === f.platform && (this.savePosition = window.scrollY),
          new Promise(function (n, u) {
            return c(
              i,
              null,
              t().mark(function i() {
                var c,
                  l,
                  d = this;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (this.isWriteOperate(r)) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt("return", void n(!0));
                        case 2:
                          if (
                            ((t.t0 = "zxg" === f.platform && this.R), !t.t0)
                          ) {
                            t.next = 6;
                            break;
                          }
                          return (
                            (t.next = 6),
                            this.R.auth(
                              !0,
                              "turn" === r || "turnNews" === r ? 500 : 0
                            )
                          );
                        case 6:
                          (l = {
                            write_scene: h.operateMap[r],
                            subject_id: a.id || "",
                          }),
                            ["putTurn", "putPeply"].indexOf(r) &&
                              Object.assign(l, {
                                comment_id:
                                  null == (c = e.postData)
                                    ? void 0
                                    : c.comment_id,
                              }),
                            p.getUserState(l, this.busiPageType).then(
                              function (e) {
                                var t = e.code,
                                  i = e.data;
                                0 == +t
                                  ? ((d.userStateData = i),
                                    d.setNeedProcess(),
                                    (d.isNormal = !d.needProcess),
                                    d.isNormal
                                      ? n(!0)
                                      : (s &&
                                          (null == o || o.blur(),
                                          window.scrollTo(0, d.savePosition)),
                                        d.handleAbnormal(d.needProcess, r),
                                        u && u(!1)))
                                  : n(!0);
                              },
                              function () {
                                n(!0);
                              }
                            );
                        case 8:
                        case "end":
                          return t.stop();
                      }
                  },
                  i,
                  this
                );
              })
            );
          })
        );
      },
      setNeedProcess: function () {
        this.needProcess = "";
        var e = (this.userStateData || {}).need_process;
        e && w[e] && (this.needProcess = e);
      },
      handleAbnormal: function (e, t) {
        w[e] && this[w[e]](t);
      },
      checkUserProfile: function () {
        "profile_status" === this.needProcess && this.handleProfileViolation();
      },
      handleModifyProfileCheck: function () {
        return "account_status" === this.needProcess
          ? (this.handleSuspendAccount(), !0)
          : this.banFlag
          ? (v("因系统维护升级，暂不支持修改头像昵称", this), !0)
          : 0 === this.modifyTimesLeft
          ? (v("今日5次修改机会已用完，请明日再修改吧", this), !0)
          : void 0;
      },
      handleAuth: function () {},
      handleSign: function () {
        "wzq" === f.platform && v("正在为您注册账号，请稍等", this);
      },
      handleSuspendAccount: function () {
        var e =
          "profile" === this.busiPageType
            ? "因账号触发社区规则，处于封号状态，暂时不支持修改个人资料"
            : "因账号触发了《社区规则》的禁止行为，已被暂时取消发帖及互动权限。";
        l.wx$1.showModal({
          title: "",
          content: e,
          confirmText: "profile" === this.busiPageType ? "我知道了" : "关闭",
          confirmColor: "#262E40",
          cancelText: "去申诉",
          cancelColor: "#3077ec",
          success: function (e) {
            if (e.cancel) {
              var t = "/pages/additional/webview/index?url=".concat(
                encodeURIComponent(
                  "https://wzq.tenpay.com/mp/v2/index.html#/comedit/appeal"
                )
              );
              g({ url: t, path: t });
            }
          },
          fail: function () {},
        }),
          this.doReport("shequ_anshen_account_suspend");
      },
      gotoAppeal: function () {},
      handleProfileViolation: function (t) {
        var n,
          c,
          l = this.userStateData || {},
          h = l.ban_flag,
          f = l.mod_times_left,
          p = l.default || {},
          d = p.default_head_image,
          m = p.default_nickname,
          v = {
            content: +h
              ? "因头像昵称疑似违规，暂不支持发帖和互动，您可修改头像昵称来恢复权限，但系统维护期间不支持自主修改，建议使用系统默认头像昵称"
              : "因头像昵称疑似违规，暂不支持发帖和互动，您可修改头像昵称来恢复权限，也可使用系统默认头像和昵称（剩余".concat(
                  f,
                  "/5次）"
                ),
            defaultHeadImage: d,
            defaultNickname: m,
          };
        this.showProfilePop(
          ((n = (function (t, n) {
            for (var r in n || (n = {})) a.call(n, r) && u(t, r, n[r]);
            if (i) {
              var o,
                c = e(i(n));
              try {
                for (c.s(); !(o = c.n()).done; ) {
                  r = o.value;
                  s.call(n, r) && u(t, r, n[r]);
                }
              } catch (e) {
                c.e(e);
              } finally {
                c.f();
              }
            }
            return t;
          })({}, v)),
          (c = { userStateData: this.userStateData }),
          r(n, o(c)))
        ),
          this.doReport("shequ_anshen_profile_illegal");
      },
      handleMpUseDefault: function (e, t) {
        var n = this,
          r = { change_head_image: e, change_nickname: t, use_default: 1 };
        p.changeProfile(r)
          .then(
            function (e) {
              var t = e.code;
              v(0 == +t ? "恭喜您已完善个人资料~" : "修改失败", n);
            },
            function () {
              v("修改失败", n);
            }
          )
          .catch(function () {
            v("修改失败", n);
          });
      },
      handleErrorMsg: function () {
        var e = (this.userStateData || {}).error_msg;
        v(e || "", this);
      },
      doReport: function (e) {
        this.busiPageType &&
        -1 !== ["hotFans", "messageBox"].indexOf(this.busiPageType)
          ? d.report(e, {}, this)
          : (this.$emit("commentReport", e), P({ eventName: e })),
          this.reportFun && this.reportFun(e);
      },
    },
  };
exports.securityCheck = _;
