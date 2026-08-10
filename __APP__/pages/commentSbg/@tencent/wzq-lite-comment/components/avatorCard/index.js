var t = require("../../../stock-community-base/utils/knife.js"),
  e = require("../../../stock-community-base/utils/constant.js"),
  i = require("../../../../../../common/vendor.js"),
  a = {
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
    components: {},
    data: function () {
      return { platform: t.platform, nameMaxWidth: "175px", userTagCls: "" };
    },
    mounted: function () {
      var t =
        ((null == screen ? void 0 : screen.width) ||
          (null == window ? void 0 : window.innerWidth)) > 400;
      (this.userTagCls = e.isAndroid ? "move-down" : t ? "move-up" : ""),
        (this.nameMaxWidth = "".concat(this.getNameWidth() || 175, "px"));
    },
    methods: {
      tapPerson: function (t) {
        this.$emit("tapPerson", t);
      },
      tapStock: function (t) {
        var e = { action: t.stock_id ? "tapStock" : "tapTopic", itemData: t };
        this.$emit("tapStock", e);
      },
      getNameWidth: function () {
        try {
          var t = Math.min(
            document.documentElement.clientWidth,
            window.innerWidth
          );
          return isNaN(t) ? 175 : (t / 3) * 2;
        } catch (t) {
          return 175;
        }
      },
    },
    computed: {
      labels: function () {
        var t = this.itemData,
          e = t.showType,
          i = t.isLoaclComment,
          a = [];
        return (
          "stock" === this.pageType
            ? a.push({ text: "发表帖子" })
            : "messageBox" === this.pageType &&
              "comment_like" !== this.itemData.comment_type &&
              ("at" === this.itemData.comment_type && i
                ? a.push({ text: "发表" })
                : "turn" === e
                ? a.push({ icon: "sq-icon-zhuanfa", text: "转发" })
                : "reply" === e &&
                  a.push({ icon: "sq-icon-pinglun", text: "回复" })),
          a
        );
      },
      showTagName: function () {
        var t = "";
        return (
          this.isShowTag &&
            (t =
              -1 !== this.isShowTag.indexOf("http") ? "精选" : this.isShowTag),
          t
        );
      },
      userImage: function () {
        return this.itemData.user_image || this.itemData.from_user_image;
      },
      userName: function () {
        return this.itemData.user_name || this.itemData.from_user_name || "";
      },
      userType: function () {
        var t, e;
        return (
          (null == (t = this.itemData) ? void 0 : t.vip_type) ||
          (null == (e = this.itemData) ? void 0 : e.from_vip_type) ||
          ""
        );
      },
      userModals: function () {
        return (this.itemData && this.itemData.user_medal) || [];
      },
      isShowUserModals: function () {
        var t = this.itemData.user_name || this.itemData.from_user_name || "";
        return (
          "messageBox" !== this.pageType ||
          "comment_like" !== this.itemData.comment_type ||
          t.length <= 6
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
  },
  s = i._export_sfc(a, [
    [
      "render",
      function (t, e, a, s, n, o) {
        return i.e(
          { a: !a.isShowAction || "reply" !== a.itemData.showType },
          a.isShowAction && "reply" === a.itemData.showType
            ? {}
            : i.e(
                {
                  b: i.t(o.userName),
                  c: i.n(2 === o.userType ? "vip" : ""),
                  d: i.n(1001 === o.userType ? "personal vip" : ""),
                  e: i.n(1002 === o.userType ? "enterprise vip" : ""),
                  f: i.s(
                    "news" === a.pageType && "zxg" === n.platform
                      ? { maxWidth: n.nameMaxWidth }
                      : ""
                  ),
                  g: o.userId,
                  h: a.isShowTime || a.isShowAction,
                },
                a.isShowTime || a.isShowAction
                  ? i.e(
                      { i: a.isShowTime && !a.isShowTag },
                      a.isShowTime && !a.isShowTag
                        ? i.e(
                            { j: !!a.itemData.formatTime },
                            a.itemData.formatTime
                              ? { k: i.t(a.itemData.formatTime) }
                              : {}
                          )
                        : {}
                    )
                  : {},
                { l: i.n(a.pageType) }
              ),
          {
            m: a.isShowTime ? "" : 1,
            n: a.disabled ? 1 : "",
            o: o.userId,
            p: i.o(function (t) {
              return o.tapPerson(o.userId);
            }, 5732),
          }
        );
      },
    ],
    ["__scopeId", "data-v-a0739b6f"],
  ]);
wx.createComponent(s);
