var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, r) {
    return new Promise(function (n, i) {
      var o = function (e) {
          try {
            u(r.next(e));
          } catch (e) {
            i(e);
          }
        },
        s = function (e) {
          try {
            u(r.throw(e));
          } catch (e) {
            i(e);
          }
        },
        u = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(o, s);
        };
      u((r = r.apply(e, t)).next());
    });
  },
  r = require("../../../../../../common/vendor.js"),
  n = require("../../../stock-community-base/utils/knife.js"),
  i = require("../../../stock-community-ui/utils/service/index.js"),
  o = require("../../../stock-community-ui/utils/mixins/securityCheck/index.js"),
  s = require("../../../stock-community-base/utils/constant.js"),
  u = n.sdk.showToast,
  a = {
    data: function () {
      return {
        hasRedDot: !1,
        friendsId: "",
        hasRender: !1,
        wzqPrivacyAgreed: !0,
      };
    },
    inject: {
      didAgreeUserAgreement: {
        default: function () {
          return { value: !0 };
        },
      },
      onCheckUserAgreementStatus: {
        default: function () {
          return function () {};
        },
      },
      stockBridge: { default: {} },
    },
    mixins: [o.securityCheck],
    props: {
      type: { default: "" },
      pageType: { type: String, default: "" },
      reportPrefix: { type: String, default: "" },
      forbidComment: { type: Boolean, default: !1 },
      userinfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      replyCustomText: { type: String, default: "谈谈我的想法..." },
      enablePyq: { type: Boolean, default: !0 },
    },
    computed: {
      replyText: function () {
        return {
          detail: "暂不支持评论和转发",
          topic: "本话题暂不支持发帖互动",
          stock: "本评论区暂不支持发帖互动",
        }[this.pageType];
      },
      privacyAgreed: function () {
        var e;
        return (
          this.wzqPrivacyAgreed &&
          (null == (e = this.didAgreeUserAgreement) ? void 0 : e.value)
        );
      },
      avatar: function () {
        var e, t;
        return (
          (this.privacyAgreed &&
            this.userinfo &&
            ((null == (e = this.userinfo) ? void 0 : e.user_image) ||
              (null == (t = this.userinfo) ? void 0 : t.headimgurl))) ||
          s.defaultAvatar
        );
      },
      isTl: function () {
        return !this.type || "timeline" === this.type;
      },
    },
    created: function () {
      var e = r.wx$1.getStorageSync("friend_lastedId_key");
      n.isObject(e) ||
        this.type ||
        ((this.friendsId = e || ""), this.getRssList());
    },
    mounted: function () {
      var e = this;
      setTimeout(function () {
        e.hasRender = !0;
      }, 2e3);
    },
    methods: {
      checkWzqUserAgreement: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            var n, i;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = "sqWzqPrivacyAgreed"),
                        (i = r.StockBridge.getStorage(n)),
                        (this.wzqPrivacyAgreed = i || !1),
                        (e.prev = 2),
                        (e.next = 5),
                        this.customActionShowProtocal()
                      );
                    case 5:
                      (this.wzqPrivacyAgreed = !0),
                        r.StockBridge.setStorage(n, !0),
                        (e.next = 12);
                      break;
                    case 9:
                      (e.prev = 9),
                        (e.t0 = e.catch(2)),
                        r.StockBridge.setStorage(n, !1);
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[2, 9]]
            );
          })
        );
      },
      showProfilePop: function (e) {
        this.$emit("showProfilePop", e);
      },
      getRssList: function () {
        var e = this;
        i.getFriendsList({ begin: this.friendsId, unReadNum: 1 }).then(
          function (t) {
            var r = (t || {}).unReadNum;
            e.hasRedDot = r;
          }
        );
      },
      goToFriends: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            var n;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        !(null == (n = this.didAgreeUserAgreement)
                          ? void 0
                          : n.value) &&
                        "function" == typeof this.onCheckUserAgreementStatus
                      ) {
                        e.next = 4;
                        break;
                      }
                      return (
                        (this.hasRedDot = !1),
                        this.stockBridge.report(
                          "".concat(
                            this.reportPrefix,
                            ".bottombar_go_communityfriends"
                          )
                        ),
                        "/pages/square/index?communityIndexTab=1",
                        e.abrupt(
                          "return",
                          void r.wx$1.navigateTo({
                            url: "/pages/square/index?communityIndexTab=1",
                          })
                        )
                      );
                    case 4:
                      this.onCheckUserAgreementStatus();
                    case 5:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      goHotSubject: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            var n;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        !(null == (n = this.didAgreeUserAgreement)
                          ? void 0
                          : n.value) &&
                        "function" == typeof this.onCheckUserAgreementStatus
                      ) {
                        e.next = 4;
                        break;
                      }
                      return (
                        this.stockBridge.report(
                          "hq_shequ_gegu" === this.reportPrefix
                            ? "".concat(
                                this.reportPrefix,
                                "_bottombar_go_communitysquare"
                              )
                            : "bottombar_go_communitysquare"
                        ),
                        "/pages/square/index?communityIndexTab=0",
                        e.abrupt(
                          "return",
                          void r.wx$1.navigateTo({
                            url: "/pages/square/index?communityIndexTab=0",
                          })
                        )
                      );
                    case 4:
                      this.onCheckUserAgreementStatus();
                    case 5:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      bindTapInput: function () {
        var e,
          t = this;
        (null == (e = this.didAgreeUserAgreement) ? void 0 : e.value) ||
        "function" != typeof this.onCheckUserAgreementStatus
          ? this.forbidComment
            ? this.replyText && u(this.replyText)
            : this.userCheck({
                eventName: "putSubject",
                fakeInput: this.$refs.myInput,
              }).then(function () {
                t.$emit("goEdit");
              })
          : this.onCheckUserAgreementStatus();
      },
      tapAvatar: function () {
        this.$emit("tapAvatar");
      },
      focus: function () {
        this.$refs.myInput.focus();
      },
    },
  },
  c = r._export_sfc(a, [
    [
      "render",
      function (e, t, n, i, o, s) {
        return r.e(
          {
            a: s.avatar,
            b: r.o(function () {
              return s.tapAvatar && s.tapAvatar.apply(s, arguments);
            }, 3091),
            c: !n.forbidComment,
          },
          (n.forbidComment, {}),
          { d: o.hasRender },
          o.hasRender
            ? r.e(
                { e: n.forbidComment && s.replyText },
                n.forbidComment && s.replyText
                  ? { f: r.t(s.replyText) }
                  : { g: r.t(n.replyCustomText) }
              )
            : {},
          {
            h: r.o(function () {
              return s.bindTapInput && s.bindTapInput.apply(s, arguments);
            }, 3092),
            i: r.n(!n.enablePyq && "forbid-gyq-padding"),
            j: r.o(function () {
              return s.goHotSubject && s.goHotSubject.apply(s, arguments);
            }, 3093),
            k: n.enablePyq,
          },
          n.enablePyq
            ? r.e(
                { l: o.hasRedDot && "0" !== o.hasRedDot },
                (o.hasRedDot && o.hasRedDot, {}),
                {
                  m: r.o(function () {
                    return s.goToFriends && s.goToFriends.apply(s, arguments);
                  }, 3094),
                }
              )
            : {},
          { n: s.isTl ? 1 : "" }
        );
      },
    ],
    ["__scopeId", "data-v-01f1e91f"],
  ]);
wx.createComponent(c);
