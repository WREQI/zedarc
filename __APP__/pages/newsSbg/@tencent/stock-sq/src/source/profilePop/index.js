var e = require("../../../../../../../common/vendor.js"),
  t = require("../../../../stock-community-base/utils/constant.js"),
  n = require("../../utils/service/index.js"),
  a = require("../../../../stock-community-base/utils/knife.js"),
  i = a.sdk,
  o = (i.navigateTo, i.showToast),
  u = {
    name: "profilePop",
    data: function () {
      return {
        platform: a.platform,
        isShow: !1,
        noteDoc: "",
        wxNavBarIsShow: !1,
      };
    },
    props: {
      pageType: { type: String, default: "" },
      BUS: { type: Object, default: {} },
      userStateData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      instance: {
        type: Object,
        default: function () {
          return {};
        },
      },
      content: { type: String, default: "" },
      defaultHeadImage: { type: String, default: t.defaultAvatarColorful },
      defaultNickname: { type: String, default: "社区股友" },
      positionConfig: {
        type: Object,
        default: function () {
          return {};
        },
      },
      needBottomInset: { type: Boolean, default: !1 },
    },
    computed: {
      banFlag: function () {
        return 1 == +this.userStateData.ban_flag;
      },
      isLite: function () {
        return a.IS_LITE_MODE;
      },
    },
    created: function () {
      var e = this.userStateData.default || {},
        t = e.default_nickname,
        n = e.default_head_image;
      (this.defaultName = t), (this.defaultAvatar = n);
    },
    mounted: function () {
      var e = this;
      setTimeout(function () {
        e.show();
      }, 350);
    },
    methods: {
      show: function () {
        this.isShow = !0;
      },
      hide: function () {
        this.$emit("hideProfilePop");
      },
      handleModify: function () {
        var t = "/pages/additional/webview/index?url=".concat(
          encodeURIComponent(
            "https://wzq.tenpay.com/mp/v2/index.html#/personal/profile?noProfilePop=1"
          )
        );
        e.wx$1.navigateTo({ url: t }), this.hide();
      },
      handleDefault: function () {
        var e = this;
        if ("profile" === this.pageType)
          return (
            this.BUS &&
              this.BUS.$emit &&
              this.BUS.$emit("sq_profile_use_default"),
            void this.hide()
          );
        var t = {
          change_head_image: this.defaultHeadImage,
          change_nickname: this.defaultNickname,
          use_default: 1,
        };
        n.changeProfile(t).then(
          function (t) {
            0 == +t.code
              ? (o("恭喜您已完善个人资料~", e.instance),
                e.hide(),
                e.BUS &&
                  e.BUS.$emit &&
                  e.BUS.$emit("sq_update_profile_default"))
              : o("修改失败", e.instance);
          },
          function () {
            o("修改失败", e.instance);
          }
        );
      },
    },
  };
Array || e.resolveComponent("transition")();
var r = e._export_sfc(u, [
  [
    "render",
    function (t, n, a, i, o, u) {
      return e.e(
        { a: o.isShow },
        o.isShow
          ? {
              b: e.o(function () {
                return u.hide && u.hide.apply(u, arguments);
              }, 698),
            }
          : {},
        { c: e.p({ name: "fade" }), d: o.isShow },
        o.isShow
          ? e.e(
              {
                e: e.o(function () {
                  return u.hide && u.hide.apply(u, arguments);
                }, 699),
                f: e.t(a.content),
                g: a.defaultHeadImage,
                h: e.t(a.defaultNickname),
                i: o.noteDoc,
              },
              o.noteDoc ? { j: e.t(o.noteDoc) } : {},
              { k: u.banFlag },
              u.banFlag
                ? {
                    l: e.n({ "default-lite": u.isLite }),
                    m: e.o(function () {
                      return (
                        u.handleDefault && u.handleDefault.apply(u, arguments)
                      );
                    }, 700),
                  }
                : {
                    n: e.n({ "modify-lite": u.isLite }),
                    o: e.o(function () {
                      return (
                        u.handleModify && u.handleModify.apply(u, arguments)
                      );
                    }, 701),
                    p: e.n({ "default-lite": u.isLite }),
                    q: e.o(function () {
                      return (
                        u.handleDefault && u.handleDefault.apply(u, arguments)
                      );
                    }, 702),
                  },
              {
                r: o.wxNavBarIsShow && "wzq" === o.platform ? 1 : "",
                s: a.needBottomInset ? 1 : "",
              }
            )
          : {},
        { t: e.p({ name: "animation" }) }
      );
    },
  ],
  ["__scopeId", "data-v-884f45de"],
]);
wx.createComponent(r);
