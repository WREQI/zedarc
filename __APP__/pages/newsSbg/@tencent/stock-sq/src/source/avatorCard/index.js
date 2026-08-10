var e = require("../../../../../../../common/vendor.js"),
  t = require("../../../../stock-community-base/utils/knife.js"),
  a = require("../../../../stock-community-base/utils/constant.js"),
  i = {
    name: "avatorCard",
    options: { styleIsolation: "shared" },
    inject: { communityComCanOpt: { default: !1 } },
    props: {
      disabled: { type: Boolean, default: !1 },
      pageType: { type: String, default: "" },
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isShowTime: { default: !0 },
      isShowTag: { default: "" },
      isShowMark: { type: Boolean, default: !1 },
      subjectUserId: { type: String, default: "" },
      isShowAction: { type: Boolean, default: !1 },
      showType: { type: String, default: "" },
      imageRefreshFlag: { default: 0 },
      subjectData: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    components: {
      userModel: function () {
        return "../userModel/index.js";
      },
      BaseImage: function () {
        return "../baseImage/index.js";
      },
    },
    data: function () {
      return { platform: t.platform, nameMaxWidth: "175px", userTagCls: "" };
    },
    mounted: function () {
      var e =
        ((null == screen ? void 0 : screen.width) ||
          (null == window ? void 0 : window.innerWidth)) > 400;
      (this.userTagCls = a.isAndroid ? "move-down" : e ? "move-up" : ""),
        (this.nameMaxWidth = "".concat(this.getNameWidth() || 175, "px"));
    },
    methods: {
      tapPerson: function (e) {
        var t = {
          userid: e,
          stockid: this.itemData.stock_id || "",
          postid: this.itemData.id || "",
        };
        this.$emit("tapPerson", t);
      },
      tapStock: function (e) {
        var t = { action: e.stock_id ? "tapStock" : "tapTopic", itemData: e };
        this.$emit("tapStock", t);
      },
      getNameWidth: function () {
        try {
          var t;
          return (
            (t = (
              (e.wx$1.getWindowInfo && e.wx$1.getWindowInfo()) ||
              e.wx$1.getSystemInfoSync()
            ).windowWidth),
            isNaN(t) ? 175 : (t / 3) * 2
          );
        } catch (e) {
          return 175;
        }
      },
    },
    computed: {
      roundCornerShape: function () {
        return this.communityComCanOpt && t.IsMINAPP;
      },
      labels: function () {
        var e = this.itemData,
          t = e.showType,
          a = e.isLoaclComment,
          i = [];
        return (
          "stock" === this.pageType
            ? i.push({ text: "发表帖子" })
            : "messageBox" === this.pageType &&
              "comment_like" !== this.itemData.comment_type &&
              ("at" === this.itemData.comment_type && a
                ? i.push({ text: "发表" })
                : "turn" === t
                ? i.push({ icon: "sq-icon-zhuanfa", text: "转发" })
                : "reply" === t &&
                  i.push({ icon: "sq-icon-pinglun", text: "回复" })),
          i
        );
      },
      showTagName: function () {
        var e = "";
        return (
          this.isShowTag &&
            (e =
              -1 !== this.isShowTag.indexOf("http") ? "精选" : this.isShowTag),
          e
        );
      },
      userImage: function () {
        return this.itemData.user_image || this.itemData.from_user_image;
      },
      userType: function () {
        var e, t;
        return (
          (null == (e = this.itemData) ? void 0 : e.vip_type) ||
          (null == (t = this.itemData) ? void 0 : t.from_vip_type) ||
          ""
        );
      },
      userModals: function () {
        return (this.itemData && this.itemData.user_medal) || [];
      },
      isShowUserModals: function () {
        var e = this.itemData.user_name || this.itemData.from_user_name || "";
        return (
          "messageBox" !== this.pageType ||
          "comment_like" !== this.itemData.comment_type ||
          e.length <= 6
        );
      },
      userId: function () {
        return (
          this.itemData &&
          (this.itemData.user_id || this.itemData.from_user || "")
        );
      },
      showActionText: function () {
        return (
          {
            short: "发表帖子",
            long: "发表文章",
            turn: "转发",
            turnNews: "转发",
            reply: "评论",
          }[this.itemData.showType] || ""
        );
      },
      userMark: function () {
        return "long" === this.showType
          ? "zuozhe"
          : ("reply" !== this.showType && "reply" !== this.itemData.showType) ||
            !this.subjectData ||
            "long" !== this.subjectData.showType
          ? "louzhu"
          : "zuozhe";
      },
      isShowUsertag: function () {
        return (
          -1 !== ["stock", "hqStock", "dailyStock"].indexOf(this.pageType) &&
          this.itemData &&
          this.itemData.user_tags &&
          this.itemData.user_tags[0]
        );
      },
      userTag: function () {
        return (
          (this.itemData &&
            this.itemData.user_tags &&
            this.itemData.user_tags[0]) ||
          ""
        );
      },
    },
  };
Array || (e.resolveComponent("BaseImage") + e.resolveComponent("userModel"))();
var s = e._export_sfc(i, [
  [
    "render",
    function (t, a, i, s, o, n) {
      return e.e(
        { a: i.isShowAction && "reply" === i.itemData.showType },
        i.isShowAction && "reply" === i.itemData.showType
          ? e.e(
              {
                b: e.t(i.itemData.user_name || i.itemData.from_user_name),
                c: e.n(2 === n.userType ? "vip" : ""),
                d: e.n(1001 === n.userType ? "personal vip" : ""),
                e: e.n(1002 === n.userType ? "enterprise vip" : ""),
                f: n.userId,
                g: i.isShowAction,
              },
              i.isShowAction
                ? { h: e.t(n.showActionText), i: e.n(i.itemData.showType) }
                : {},
              { j: i.isShowTime },
              i.isShowTime ? { k: e.t(i.itemData.formatTime) } : {}
            )
          : {},
        { l: !i.isShowAction || "reply" !== i.itemData.showType },
        i.isShowAction && "reply" === i.itemData.showType
          ? {}
          : e.e(
              {
                m: e.p({
                  shape: n.roundCornerShape ? "roundCorner" : "circular",
                  src: n.userImage,
                  backgrounColor: "DCDFE6",
                  defaultImg:
                    "https://st.gtimg.com/design/10525daa2d7765232c6ef9580c98c364.png",
                  imageRefreshFlag: i.imageRefreshFlag,
                }),
                n: e.n(2 === n.userType ? "vip" : ""),
                o: e.n(1001 === n.userType ? "personal vip" : ""),
                p: e.n(1002 === n.userType ? "enterprise vip" : ""),
                q: n.userId,
                r: e.t(i.itemData.user_name || i.itemData.from_user_name),
                s: e.n(2 === n.userType ? "vip" : ""),
                t: e.n(1001 === n.userType ? "personal vip" : ""),
                v: e.n(1002 === n.userType ? "enterprise vip" : ""),
                w: e.s(
                  "news" === i.pageType && "zxg" === o.platform
                    ? { maxWidth: o.nameMaxWidth }
                    : ""
                ),
                x: n.userId,
                y: i.isShowMark && i.subjectUserId === i.itemData.from_user,
              },
              i.isShowMark && i.subjectUserId === i.itemData.from_user
                ? {
                    z: e.n(
                      i.subjectUserId === i.itemData.from_user
                        ? "author"
                        : "friend"
                    ),
                    A: e.n(n.userMark),
                  }
                : {},
              { B: n.isShowUsertag },
              n.isShowUsertag
                ? { C: e.n(n.userTag), D: e.n(o.userTagCls) }
                : n.isShowUserModals
                ? { F: e.p({ modelData: n.userModals }) }
                : {},
              { E: n.isShowUserModals, G: i.isShowTime || i.isShowAction },
              i.isShowTime || i.isShowAction
                ? e.e(
                    { H: i.isShowTag },
                    i.isShowTag ? { I: e.t(n.showTagName) } : {},
                    { J: i.isShowTime && !i.isShowTag },
                    i.isShowTime && !i.isShowTag
                      ? e.e(
                          { K: !!i.itemData.operateTime },
                          i.itemData.operateTime
                            ? e.e(
                                {
                                  L: e.t(i.itemData.operateTime),
                                  M:
                                    -1 !==
                                    [
                                      "stock",
                                      "topic",
                                      "share",
                                      "hqStock",
                                      "dailyStock",
                                    ].indexOf(i.pageType),
                                },
                                -1 !==
                                  [
                                    "stock",
                                    "topic",
                                    "share",
                                    "hqStock",
                                    "dailyStock",
                                  ].indexOf(i.pageType)
                                  ? {
                                      N: e.t(
                                        i.itemData.commentsTail.cnt
                                          ? "有新评论"
                                          : "发表帖子"
                                      ),
                                    }
                                  : {}
                              )
                            : e.e(
                                {
                                  O: e.t(i.itemData.formatTime),
                                  P: e.f(n.labels, function (t, a, i) {
                                    return e.e(
                                      { a: t.icon },
                                      t.icon ? { b: e.n(t.icon) } : {},
                                      { c: e.t(t.text), d: "span" + a }
                                    );
                                  }),
                                  Q: !(
                                    "messageBox" !== i.pageType ||
                                    (!i.itemData.stock_name &&
                                      !i.itemData.topic_name)
                                  ),
                                },
                                "messageBox" === i.pageType &&
                                  (i.itemData.stock_name ||
                                    i.itemData.topic_name)
                                  ? {
                                      R: e.t(
                                        i.itemData.stock_name
                                          ? i.itemData.stock_name + "讨论区"
                                          : "#" + i.itemData.topic_name
                                      ),
                                      S: e.o(function (e) {
                                        return n.tapStock(i.itemData);
                                      }, 4935),
                                    }
                                  : {}
                              )
                        )
                      : {},
                    { T: i.isShowAction },
                    i.isShowAction
                      ? {
                          U: e.t(n.showActionText),
                          V: e.n(i.itemData.showType),
                        }
                      : {},
                    {
                      W:
                        (1 === i.itemData.check_label &&
                          "messageBox" !== i.pageType) ||
                        (2 === i.itemData.check_label &&
                          "detail" === i.pageType),
                    },
                    (1 === i.itemData.check_label &&
                      "messageBox" !== i.pageType) ||
                      (2 === i.itemData.check_label && "detail" === i.pageType)
                      ? {
                          X: e.n(2 === i.itemData.check_label ? "notpass" : ""),
                        }
                      : {},
                    { Y: i.itemData.user_desc && "personal" !== i.pageType },
                    i.itemData.user_desc && "personal" !== i.pageType
                      ? { Z: e.t(i.itemData.user_desc) }
                      : {}
                  )
                : {}
            ),
        {
          aa: i.isShowTime ? "" : 1,
          ab: i.disabled ? 1 : "",
          ac: n.userId,
          ad: e.o(function (e) {
            return n.tapPerson(n.userId);
          }, 4936),
        }
      );
    },
  ],
  ["__scopeId", "data-v-afe7d198"],
]);
wx.createComponent(s);
