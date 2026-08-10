var e = require("../../../../../stock-community-base/utils/knife.js"),
  t = require("../../../../../stock-community-base/utils/constant.js"),
  a = require("../../../../../../../../common/vendor.js"),
  i = {
    name: "avatorCard",
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
      showImage: { type: Boolean, default: !0 },
    },
    components: {
      userModel: function () {
        return "../../userModel/index.js";
      },
      BaseImage: function () {
        return "../../baseImage/index.js";
      },
    },
    data: function () {
      return { platform: e.platform, nameMaxWidth: "175px", userTagCls: "" };
    },
    mounted: function () {
      var e =
        ((null == screen ? void 0 : screen.width) ||
          (null == window ? void 0 : window.innerWidth)) > 400;
      (this.userTagCls = t.isAndroid ? "move-down" : e ? "move-up" : ""),
        (this.nameMaxWidth = "".concat(this.getNameWidth() || 175, "px"));
    },
    methods: {
      tapPerson: function (e) {
        this.$emit("tapPerson", e);
      },
      tapStock: function (e) {
        var t = { action: e.stock_id ? "tapStock" : "tapTopic", itemData: e };
        this.$emit("tapStock", t);
      },
      getNameWidth: function () {
        try {
          var e = Math.min(
            document.documentElement.clientWidth,
            window.innerWidth
          );
          return isNaN(e) ? 175 : (e / 3) * 2;
        } catch (e) {
          return 175;
        }
      },
    },
    computed: {
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
Array || (a.resolveComponent("BaseImage") + a.resolveComponent("userModel"))();
var s = a._export_sfc(i, [
  [
    "render",
    function (e, t, i, s, o, n) {
      return a.e(
        { a: i.isShowAction && "reply" === i.itemData.showType },
        i.isShowAction && "reply" === i.itemData.showType
          ? a.e(
              {
                b: a.t(i.itemData.user_name || i.itemData.from_user_name),
                c: a.n(2 === n.userType ? "vip" : ""),
                d: a.n(1001 === n.userType ? "personal vip" : ""),
                e: a.n(1002 === n.userType ? "enterprise vip" : ""),
                f: n.userId,
                g: i.isShowAction,
              },
              i.isShowAction
                ? { h: a.t(n.showActionText), i: a.n(i.itemData.showType) }
                : {},
              { j: i.isShowTime && i.itemData.formatTime },
              i.isShowTime && i.itemData.formatTime
                ? { k: a.t(i.itemData.formatTime) }
                : {}
            )
          : {},
        { l: !i.isShowAction || "reply" !== i.itemData.showType },
        i.isShowAction && "reply" === i.itemData.showType
          ? {}
          : a.e(
              {
                m: a.p({
                  shape: "circular",
                  src: n.userImage,
                  backgrounColor: "DCDFE6",
                  defaultImg:
                    "https://st.gtimg.com/design/10525daa2d7765232c6ef9580c98c364.png",
                  imageRefreshFlag: i.imageRefreshFlag,
                }),
                n: a.n(2 === n.userType ? "vip" : ""),
                o: a.n(1001 === n.userType ? "personal vip" : ""),
                p: a.n(1002 === n.userType ? "enterprise vip" : ""),
                q: n.userId,
                r: i.showImage,
                s: a.t(i.itemData.user_name || i.itemData.from_user_name),
                t: a.n(2 === n.userType ? "vip" : ""),
                v: a.n(1001 === n.userType ? "personal vip" : ""),
                w: a.n(1002 === n.userType ? "enterprise vip" : ""),
                x: a.s(
                  "news" === i.pageType && "zxg" === o.platform
                    ? { maxWidth: o.nameMaxWidth }
                    : ""
                ),
                y: n.userId,
                z: i.isShowMark && i.subjectUserId === i.itemData.from_user,
              },
              i.isShowMark && i.subjectUserId === i.itemData.from_user
                ? {
                    A: a.n(
                      i.subjectUserId === i.itemData.from_user
                        ? "author"
                        : "friend"
                    ),
                    B: a.n(n.userMark),
                  }
                : {},
              { C: n.isShowUsertag },
              n.isShowUsertag
                ? { D: a.n(n.userTag), E: a.n(o.userTagCls) }
                : n.isShowUserModals
                ? { G: a.p({ modelData: n.userModals }) }
                : {},
              { F: n.isShowUserModals, H: i.isShowTime || i.isShowAction },
              i.isShowTime || i.isShowAction
                ? a.e(
                    { I: i.isShowTag },
                    i.isShowTag ? { J: a.t(n.showTagName) } : {},
                    { K: i.isShowTime && !i.isShowTag },
                    i.isShowTime && !i.isShowTag
                      ? a.e(
                          { L: !!i.itemData.operateTime },
                          i.itemData.operateTime
                            ? a.e(
                                {
                                  M: a.t(i.itemData.operateTime),
                                  N:
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
                                      O: a.t(
                                        i.itemData.commentsTail.cnt
                                          ? "有新评论"
                                          : "发表帖子"
                                      ),
                                    }
                                  : {}
                              )
                            : a.e(
                                { P: !!i.itemData.formatTime },
                                i.itemData.formatTime
                                  ? { Q: a.t(i.itemData.formatTime) }
                                  : {},
                                {
                                  R: a.f(n.labels, function (e, t, i) {
                                    return a.e(
                                      { a: e.icon },
                                      e.icon ? { b: a.n(e.icon) } : {},
                                      { c: a.t(e.text), d: "span" + t }
                                    );
                                  }),
                                  S: !(
                                    "messageBox" !== i.pageType ||
                                    (!i.itemData.stock_name &&
                                      !i.itemData.topic_name)
                                  ),
                                },
                                "messageBox" === i.pageType &&
                                  (i.itemData.stock_name ||
                                    i.itemData.topic_name)
                                  ? {
                                      T: a.t(
                                        i.itemData.stock_name
                                          ? i.itemData.stock_name + "讨论区"
                                          : "#" + i.itemData.topic_name
                                      ),
                                      U: a.o(function (e) {
                                        return n.tapStock(i.itemData);
                                      }, 5167),
                                    }
                                  : {}
                              )
                        )
                      : {},
                    { V: i.isShowAction },
                    i.isShowAction
                      ? {
                          W: a.t(n.showActionText),
                          X: a.n(i.itemData.showType),
                        }
                      : {},
                    {
                      Y:
                        (1 === i.itemData.check_label &&
                          "messageBox" !== i.pageType) ||
                        (2 === i.itemData.check_label &&
                          "detail" === i.pageType),
                    },
                    (1 === i.itemData.check_label &&
                      "messageBox" !== i.pageType) ||
                      (2 === i.itemData.check_label && "detail" === i.pageType)
                      ? {
                          Z: a.n(2 === i.itemData.check_label ? "notpass" : ""),
                        }
                      : {},
                    { aa: i.itemData.user_desc && "personal" !== i.pageType },
                    i.itemData.user_desc && "personal" !== i.pageType
                      ? a.e(
                          {
                            ab: i.itemData.operateTime || i.itemData.formatTime,
                          },
                          (i.itemData.operateTime || i.itemData.formatTime, {}),
                          { ac: a.t(i.itemData.user_desc) }
                        )
                      : {}
                  )
                : {}
            ),
        {
          ad: i.isShowTime ? "" : 1,
          ae: i.disabled ? 1 : "",
          af: n.userId,
          ag: a.o(function (e) {
            return n.tapPerson(n.userId);
          }, 5168),
        }
      );
    },
  ],
  ["__scopeId", "data-v-7e84da4d"],
]);
wx.createComponent(s);
