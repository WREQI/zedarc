var e = require("../../../stock-community-base/utils/constant.js"),
  t = require("../../utils/service/index.js"),
  n = require("../../../stock-community-base/utils/knife.js"),
  i = require("../../../../../../common/vendor.js"),
  a = n.sdk,
  o = a.navigateTo,
  u = a.showToast,
  r = {
    name: "ProfilePop",
    data: function () {
      return { platform: n.platform, isShow: !1, noteDoc: "" };
    },
    props: {
      pageType: { type: String, default: "" },
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
      defaultHeadImage: { type: String, default: e.defaultAvatarColorful },
      defaultNickname: { type: String, default: "社区股友" },
      positionConfig: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    computed: {
      banFlag: function () {
        return 1 == +this.userStateData.ban_flag;
      },
      isLite: function () {
        return n.IS_LITE_MODE;
      },
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
        var e = "/pages/additional/webview/index?url=".concat(
          encodeURIComponent(
            "https://wzq.tenpay.com/mp/v2/index.html#/personal/profile?noProfilePop=1"
          )
        );
        o({ url: e, path: e, instance: this.instance }), this.hide();
      },
      handleDefault: function () {
        var e = this;
        if ("profile" === this.pageType)
          return (
            i.StockBridge.busEmit("community-refreshPersonalProfile"),
            void this.hide()
          );
        var n = {
          change_head_image: this.defaultHeadImage,
          change_nickname: this.defaultNickname,
          use_default: 1,
        };
        t.changeProfile(n).then(
          function (t) {
            0 == +t.code
              ? (u("恭喜您已完善个人资料~", e.instance),
                e.hide(),
                i.StockBridge.busEmit("community-updateProfileDefault"))
              : u("修改失败", e.instance);
          },
          function () {
            u("修改失败", e.instance);
          }
        );
      },
    },
  };
Array || i.resolveComponent("transition")();
var f = i._export_sfc(r, [
  [
    "render",
    function (e, t, n, a, o, u) {
      return i.e(
        { a: o.isShow },
        o.isShow
          ? {
              b: i.o(function () {
                return u.hide && u.hide.apply(u, arguments);
              }, 3039),
            }
          : {},
        { c: i.p({ name: "fade" }), d: o.isShow },
        o.isShow
          ? i.e(
              {
                e: i.o(function () {
                  return u.hide && u.hide.apply(u, arguments);
                }, 3040),
                f: i.t(n.content),
                g: n.defaultHeadImage,
                h: i.t(n.defaultNickname),
                i: o.noteDoc,
              },
              o.noteDoc ? { j: i.t(o.noteDoc) } : {},
              { k: u.banFlag },
              u.banFlag
                ? {
                    l: i.n({ "default-lite": u.isLite }),
                    m: i.o(function () {
                      return (
                        u.handleDefault && u.handleDefault.apply(u, arguments)
                      );
                    }, 3041),
                  }
                : {
                    n: i.n({ "modify-lite": u.isLite }),
                    o: i.o(function () {
                      return (
                        u.handleModify && u.handleModify.apply(u, arguments)
                      );
                    }, 3042),
                    p: i.n({ "default-lite": u.isLite }),
                    q: i.o(function () {
                      return (
                        u.handleDefault && u.handleDefault.apply(u, arguments)
                      );
                    }, 3043),
                  }
            )
          : {},
        { r: i.p({ name: "animation" }) }
      );
    },
  ],
  ["__scopeId", "data-v-511fa13f"],
]);
wx.createComponent(f);
