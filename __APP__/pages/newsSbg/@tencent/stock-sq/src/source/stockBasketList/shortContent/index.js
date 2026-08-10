var t = require("../../../../../stock-community-base/utils/commentFilter.js"),
  e = require("../../../../../stock-community-base/utils/knife.js"),
  i = require("../../../../../stock-community-base/utils/constant.js"),
  n = require("../../../../../../../../common/vendor.js"),
  o = {
    name: "shortContent",
    components: {
      itemCmp: function () {
        return "../../itemCmp/index.js";
      },
      showMore: function () {
        return "../../showMore/index.js";
      },
    },
    inject: { platformType: { default: "" } },
    props: {
      pageType: { type: String, default: "" },
      disabled: { type: Boolean, default: !1 },
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      itemType: { type: String, default: "" },
      fromType: { type: String, default: "" },
      showImg: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        platform: e.platform,
        isAndroid: i.isAndroid,
        showMoreConfig: [
          "detail",
          "fatieqi",
          "stockbasket",
          "stockmpdetail",
          "basketcolumn",
        ],
      };
    },
    computed: {
      canShowLive: function () {
        return !1;
      },
      platformClass: function () {
        return this.platformType;
      },
      showContentClass: function () {
        return [
          "mod-show-content",
          this.disabled ? "disabled" : "",
          this.itemData && "reply" === this.itemData.showType
            ? "isComment"
            : "",
          "detail" === this.pageType ? "isDetail" : "",
          this.platformClass,
          this.platformClass ? this.pageType : "",
          this.platformClass ? this.fromType : "",
        ];
      },
      isDynamic: function () {
        var t, e;
        return (
          -1 !==
          (null == (e = null == (t = this.itemData) ? void 0 : t.image_list[0])
            ? void 0
            : e.origin.indexOf("gif123"))
        );
      },
      showType: function () {
        return this.fromType || this.itemType || this.itemData.showType;
      },
      turnLog: function () {
        return this.itemData.turnLog;
      },
      pResult: function () {
        return this.itemData.comment_type
          ? this.itemData.pResult
          : this.itemData.detailInfo && this.itemData.detailInfo.pResult
          ? this.itemData.detailInfo.pResult
          : this.itemData.pResult;
      },
      iPResult: function () {
        if (this.showType && "turn" === this.showType) {
          if ("messageBox" !== this.pageType)
            return (
              this.turnLog && this.turnLog.length && this.turnLog[0].pResult
            );
          if (this.turnLog && this.turnLog.length)
            return this.turnLog[0].pResult;
        }
        return this.pResult;
      },
    },
    methods: {
      contentPlainClass: function (t) {
        var e = t.extClass;
        return [
          "plain",
          "comment" === this.itemType ? "plain-comment-mp" : "",
          e || "",
        ];
      },
      commentItemEmojiClass: function (e) {
        return [
          "comment_item_emoji",
          "epage-".concat(t.getEmojiId(e.emojiName).page),
          "eid-".concat(t.getEmojiId(e.emojiName).id),
          this.showType || "",
          i.isAndroid ? "isAndroid" : "",
        ];
      },
      commentItemZhiboClass: function (t) {
        return ["link", t.type, , "wzq" === e.platform ? "disabled" : ""];
      },
      commentHideImage: function () {
        return [
          "comment-hide-image",
          this.showType || "",
          this.isDynamic ? "isDynamic" : "",
        ];
      },
      previewImage: function (t) {
        var e = t.currentTarget.dataset,
          i = e.images,
          n = e.index,
          o = e.urls,
          a = [],
          s = [];
        o
          ? o.split(",").forEach(function (t) {
              a.push(t);
            })
          : i[0].origin
          ? i.forEach(function (t) {
              a.push(t.url || t.origin);
            })
          : i.split(",").forEach(function (t) {
              a.push(t);
            }),
          a.forEach(function (t) {
            s.push({ large: t, small: t });
          });
        var r = {
          currentIndex: n,
          urls: a,
          images: s,
          type: "".concat(this.showType, ".text"),
        };
        this.$emit("tapImage", r);
      },
      getEmojiId: function (e) {
        return t.getEmojiId(e);
      },
      tapDetail: function (t) {
        "comment" !== this.itemType && t.stopPropagation(),
          this.$emit("tapDetail");
      },
      tapContent: function (t, i) {
        var n = "";
        "stockdetail" === t &&
          "wzq" === e.platform &&
          "jj" === (null == i ? void 0 : i.symbol.substr(0, 2)) &&
          (n = "stockjj"),
          this.$emit("tapContent", { eventName: n || t, eventData: i });
      },
      initShowMore: function () {
        this.$emit("initShowMore");
      },
      toggleShow: function (t) {
        this.$emit("toggleShow", t);
      },
    },
    watch: {
      iPResult: {
        deep: !0,
        handler: function () {
          var t = this;
          this.$nextTick(function () {
            "detail" !== t.pageType && t.initShowMore();
          });
        },
      },
    },
  };
Array || (n.resolveComponent("itemCmp") + n.resolveComponent("showMore"))();
var a = n._export_sfc(o, [
  [
    "render",
    function (t, e, i, o, a, s) {
      return n.e(
        {
          a: n.f(s.iPResult, function (t, e, o) {
            return {
              a: n.f(t.content_array, function (t, e, a) {
                return n.e(
                  { a: t && "stock" === t.type && t.symbol },
                  t && "stock" === t.type && t.symbol
                    ? n.e({ b: !t.iconHide }, (t.iconHide, {}), {
                        c: n.t(
                          t.iconHide ? t.text : t.text + "." + t.symbolShow
                        ),
                        d: n.o(function (e) {
                          return s.tapContent("stockdetail", t);
                        }, 4273),
                        e: n.n(t.type),
                      })
                    : "emoji" == t.type
                    ? { g: n.n(s.commentItemEmojiClass(t)), h: t.emojiName }
                    : "topic" === t.type
                    ? {
                        j: n.t(t.text),
                        k: n.n(t.type),
                        l: n.o(function (e) {
                          return s.tapContent("topic", t);
                        }, 4274),
                      }
                    : "strategy" === t.type
                    ? {
                        n: n.t(t.text),
                        o: n.n(t.type),
                        p: n.o(function (e) {
                          return s.tapContent("strategy", t);
                        }, 4275),
                      }
                    : "atPerson" === t.type
                    ? {
                        r: n.t(t.text),
                        s: n.n(t.type),
                        t: n.o(function (e) {
                          return s.tapContent("person", t);
                        }, 4276),
                      }
                    : "live" === t.type && s.canShowLive
                    ? {
                        w: n.t(t.text),
                        x: n.n(s.commentItemZhiboClass(t)),
                        y: n.o(function (e) {
                          return s.tapContent("live", t);
                        }, 4277),
                      }
                    : "CMP" === t.type
                    ? {
                        A: n.o(function (e) {
                          return s.tapContent("chaolian", t);
                        }, 4278),
                        B: "d9d28be4-0-" + o + "-" + a,
                        C: n.p({
                          disabled: i.disabled,
                          iContent: t,
                          iContentIndex: e,
                        }),
                      }
                    : "plain-br" === t.type
                    ? {}
                    : "live" !== t.type
                    ? { F: n.t(t.text), G: n.n(s.contentPlainClass(t)) }
                    : {},
                  {
                    f: "emoji" == t.type,
                    i: "topic" === t.type,
                    m: "strategy" === t.type,
                    q: "atPerson" === t.type,
                    v: "live" === t.type && s.canShowLive,
                    z: "CMP" === t.type,
                    D: "plain-br" === t.type,
                    E: "live" !== t.type,
                  }
                );
              }),
            };
          }),
          b: n.sr("showMore", "d9d28be4-1"),
          c: -1 === a.showMoreConfig.indexOf(i.pageType),
          d: n.o(s.initShowMore, 4279),
          e: n.o(function (t) {
            return s.toggleShow(t);
          }, 4280),
          f: n.p({ showType: s.showType }),
          g:
            i.itemData.image_list &&
            i.itemData.image_list.length &&
            (-1 !== ["comment", "turn"].indexOf(s.showType) || i.showImg) &&
            -1 === a.showMoreConfig.indexOf(i.pageType),
        },
        i.itemData.image_list &&
          i.itemData.image_list.length &&
          (-1 !== ["comment", "turn"].indexOf(s.showType) || i.showImg) &&
          -1 === a.showMoreConfig.indexOf(i.pageType)
          ? {
              h: n.t(s.isDynamic ? "动态表情" : "查看图片"),
              i: n.n(s.commentHideImage()),
              j: i.itemData.imageList,
              k: i.itemData.image_urls,
              l: n.o(function () {
                return s.previewImage && s.previewImage.apply(s, arguments);
              }, 4281),
            }
          : {},
        {
          m: n.o(function () {
            return s.tapDetail && s.tapDetail.apply(s, arguments);
          }, 4282),
          n: n.n(s.showContentClass),
        }
      );
    },
  ],
  ["__scopeId", "data-v-d9d28be4"],
]);
wx.createComponent(a);
