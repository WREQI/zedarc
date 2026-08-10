var t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper");
require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = Object.defineProperty,
  i = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  r = function (t, i, n) {
    return i in t
      ? e(t, i, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[i] = n);
  },
  h = require("../../../../../../common/vendor.js"),
  m = require("../../../stock-community-base/utils/commentFilter.js"),
  p = require("../../../stock-community-base/utils/knife.js"),
  c = require("../../../stock-community-base/utils/constant.js"),
  l = h._default().env.IS_ZXG,
  u = {
    name: "ShortContent",
    components: {
      itemCmp: function () {
        return "../../../../../communitySbg/@tencent/stock-community-ui/components/itemCmp/index.js";
      },
      showMore: function () {
        return "../../../../../communitySbg/@tencent/stock-community-ui/components/showMore/index.js";
      },
    },
    inject: { platformType: { default: "" }, hqBridge: { default: {} } },
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
      lineClamp: { type: Number, default: 0 },
    },
    data: function () {
      return {
        platform: p.platform,
        isAndroid: c.isAndroid,
        showMoreConfig: [
          "detail",
          "fatieqi",
          "stockbasket",
          "stockmpdetail",
          "basketcolumn",
          "news",
          "commentDetail",
          "discovery",
          "discoveryevent",
        ],
        hasMore: !1,
        hasHeight: !1,
        isCompatible: !1,
        contentLineHeight: 0,
        retryGetHeight: !0,
      };
    },
    computed: {
      canShowLive: function () {
        return l;
      },
      platformClass: function () {
        return "wzq" === p.platform ? "wzq" : this.platformType;
      },
      lineNumClass: function () {
        return "commentDetail" === this.pageType ? "" : "label-line-clamp";
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
          this.lineNumClass,
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
      needComputeMaxHeight: function () {
        return (
          1 !== this.itemData.is_yb_answer &&
          !!["discovery", "news", "stockmpdetail"].includes(this.pageType)
        );
      },
      maxHeightClass: function () {
        return this.lineClamp > 0
          ? "discovery" === this.pageType
            ? this.isCompatible
              ? "discovery-max-height-clamp-compatible"
              : "discovery-max-height-clamp"
            : this.isCompatible
            ? "sixLine-max-height-clamp-compatible"
            : "sixLine-max-height-clamp"
          : "discovery" === this.pageType
          ? this.isCompatible
            ? "discovery-max-height-compatible"
            : "discovery-max-height"
          : "news" === this.pageType || "stockmpdetail" === this.pageType
          ? 320 === window.innerWidth && "showcomment" === this.fromType
            ? "sixLine-max-height-h5-minscreen-comment"
            : "showcomment" === this.fromType
            ? "sixLine-max-height-h5-comment"
            : "sixLine-max-height-h5"
          : "";
      },
      limitLineNumber: function () {
        return this.lineClamp > 0
          ? this.lineClamp
          : "discovery" === this.pageType
          ? 5
          : 6;
      },
      spanlineHeight: function () {
        return "discovery" === this.pageType ? 22 : 21;
      },
      moreStyle: function () {
        var t,
          e = this.spanlineHeight;
        return (
          0 !== this.contentLineHeight && (e = this.contentLineHeight),
          (t =
            "discovery" === this.pageType
              ? 25 === e
                ? -3
                : 0
              : "showcomment" === this.fromType
              ? 22 === e
                ? -1
                : -2
              : e <= 20
              ? -2
              : -3),
          "height: "
            .concat(e, "px; line-height: ")
            .concat(e, "px !important; bottom: ")
            .concat(t, "px")
        );
      },
    },
    watch: {
      itemData: {
        deep: !0,
        immediate: !0,
        handler: function (t, e) {
          ((t && !e) || (t && e && t.subject_id !== e.subject_id)) &&
            this.getLines();
        },
      },
      iPResult: {
        deep: !0,
        immediate: !0,
        handler: function (t) {
          var e = this;
          this.$nextTick(function () {
            "detail" !== e.pageType && e.initShowMore();
          });
        },
      },
    },
    created: function () {
      this.hqBridge.busOn("watchHeightChange", this.heightChange);
    },
    beforeDestroy: function () {
      this.hqBridge.busOff("watchHeightChange", this.heightChange);
    },
    methods: {
      heightChange: function () {
        this.hasHeight || this.getLines();
      },
      getLines: function () {
        var t = this;
        if (this.needComputeMaxHeight) {
          var e = this.$refs.showContent;
          if (!e)
            return void setTimeout(function () {
              t.getLines();
            }, 300);
          var i = this.getCurrentStyle(e, "line-height").replace("px", ""),
            n = this.getCurrentStyle(e, "height").replace("px", "");
          if ("auto" == n)
            return (this.hasHeight = !1), void (this.hasMore = !1);
          this.hasHeight = !0;
          var o = Math.round(n / i);
          (this.hasMore = o > this.limitLineNumber),
            (this.contentLineHeight = Math.round(i)),
            390 === window.innerWidth && (this.isCompatible = !0);
        } else this.hasMore = !1;
      },
      getCurrentStyle: function (t, e) {
        return t.currentStyle ? t.currentStyle[e] : getComputedStyle(t, !1)[e];
      },
      contentPlainClass: function (t) {
        var e = t.extClass;
        return [
          "plain",
          "comment" === this.itemType ? "plain-comment-mp" : "",
          e || "",
        ];
      },
      commentItemEmojiClass: function (t) {
        return [
          "comment_item_emoji",
          "epage-".concat(m.getEmojiId(t.emojiName).page),
          "eid-".concat(m.getEmojiId(t.emojiName).id),
          this.showType || "",
          c.isAndroid ? "isAndroid" : "",
        ];
      },
      commentItemZhiboClass: function (t) {
        return ["link", t.type, "wzq" === p.platform ? "disabled" : ""];
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
      getEmojiId: function (t) {
        return m.getEmojiId(t);
      },
      tapDetail: function (t) {
        (this.pageType && "commentDetail" === this.pageType) ||
          ("comment" !== this.itemType && t.stopPropagation(),
          this.$emit("tapDetail"));
      },
      tapContent: function (e, h) {
        var m,
          c,
          l = "";
        "stockdetail" === e &&
          "wzq" === p.platform &&
          "jj" === (null == h ? void 0 : h.symbol.substr(0, 2)) &&
          (l = "stockjj"),
          "CMP" === h.type &&
            h.link &&
            "user" === h.link.type &&
            h.link.data &&
            h.link.data.user_id &&
            ((l = "person"),
            (m = (function (e, i) {
              for (var n in i || (i = {})) a.call(i, n) && r(e, n, i[n]);
              if (o) {
                var h,
                  m = t(o(i));
                try {
                  for (m.s(); !(h = m.n()).done; ) {
                    n = h.value;
                    s.call(i, n) && r(e, n, i[n]);
                  }
                } catch (t) {
                  m.e(t);
                } finally {
                  m.f();
                }
              }
              return e;
            })({}, h)),
            (c = { personId: h.link.data.user_id || "" }),
            (h = i(m, n(c)))),
          this.$emit("tapContent", { eventName: l || e, eventData: h });
      },
      initShowMore: function () {
        this.$emit("initShowMore");
      },
      toggleShow: function (t) {
        this.$emit("toggleShow", t);
      },
    },
  };
Array || (h.resolveComponent("itemCmp") + h.resolveComponent("showMore"))();
var g = h._export_sfc(u, [
  [
    "render",
    function (t, e, i, n, o, a) {
      return h.e(
        {
          a: h.f(a.iPResult, function (t, e, n) {
            return {
              a: h.f(t.content_array, function (e, s, r) {
                return h.e(
                  { a: e && "stock" === e.type && e.symbol },
                  e && "stock" === e.type && e.symbol
                    ? h.e({ b: !e.iconHide }, (e.iconHide, {}), {
                        c: h.t(
                          e.iconHide ? e.text : e.text + "." + e.symbolShow
                        ),
                        d: h.n(e.type),
                        e: h.o(function (t) {
                          return a.tapContent("stockdetail", e);
                        }, 5556),
                      })
                    : "emoji" == e.type
                    ? { g: h.n(a.commentItemEmojiClass(e)), h: e.emojiName }
                    : "topic" === e.type
                    ? {
                        j: h.t(e.text),
                        k: h.n(e.type),
                        l: h.o(function (t) {
                          return a.tapContent("topic", e);
                        }, 5557),
                      }
                    : "strategy" === e.type
                    ? {
                        n: h.t(e.text),
                        o: h.n(e.type),
                        p: h.o(function (t) {
                          return a.tapContent("strategy", e);
                        }, 5558),
                      }
                    : "atPerson" === e.type
                    ? {
                        r: h.t(e.text),
                        s: h.n(e.type),
                        t: h.o(function (t) {
                          return a.tapContent("person", e);
                        }, 5559),
                      }
                    : "live" === e.type && a.canShowLive
                    ? {
                        w: h.t(e.text),
                        x: h.n(a.commentItemZhiboClass(e)),
                        y: h.o(function (t) {
                          return a.tapContent("live", e);
                        }, 5560),
                      }
                    : "CMP" === e.type
                    ? {
                        A: h.o(function (t) {
                          return a.tapContent("chaolian", e);
                        }, 5561),
                        B: "e7926aaa-0-" + n + "-" + r,
                        C: h.p({
                          disabled: i.disabled,
                          "i-content": e,
                          "i-content-index": s,
                        }),
                      }
                    : "plain-br" === e.type
                    ? {}
                    : "live" !== e.type
                    ? { F: h.t(e.text), G: h.n(a.contentPlainClass(e)) }
                    : {},
                  {
                    f: "emoji" == e.type,
                    i: "topic" === e.type,
                    m: "strategy" === e.type,
                    q: "atPerson" === e.type,
                    v: "live" === e.type && a.canShowLive,
                    z: "CMP" === e.type,
                    D: "plain-br" === e.type,
                    E: "live" !== e.type,
                    H: s === t.content_array.length - 1 && o.hasMore,
                  },
                  s === t.content_array.length - 1 && o.hasMore
                    ? { I: h.s(a.moreStyle) }
                    : {},
                  { J: s === t.content_array.length - 1 && o.hasMore },
                  s === t.content_array.length - 1 && o.hasMore
                    ? { K: h.s(a.moreStyle) }
                    : {}
                );
              }),
            };
          }),
          b: -1 === o.showMoreConfig.indexOf(i.pageType),
        },
        -1 === o.showMoreConfig.indexOf(i.pageType)
          ? {
              c: h.sr("showMore", "e7926aaa-1"),
              d: h.o(a.initShowMore, 5562),
              e: h.o(function (t) {
                return a.toggleShow(t);
              }, 5563),
              f: h.p({ "show-type": a.showType, "page-type": i.pageType }),
            }
          : {},
        {
          g:
            i.itemData.image_list &&
            i.itemData.image_list.length &&
            (-1 !== ["comment", "turn"].indexOf(a.showType) || i.showImg) &&
            -1 === o.showMoreConfig.indexOf(i.pageType),
        },
        i.itemData.image_list &&
          i.itemData.image_list.length &&
          (-1 !== ["comment", "turn"].indexOf(a.showType) || i.showImg) &&
          -1 === o.showMoreConfig.indexOf(i.pageType)
          ? {
              h: h.t(a.isDynamic ? "动态表情" : "查看图片"),
              i: h.n(a.commentHideImage()),
              j: i.itemData.imageList,
              k: i.itemData.image_urls,
              l: h.o(function () {
                return a.previewImage && a.previewImage.apply(a, arguments);
              }, 5564),
            }
          : {},
        {
          m: h.n(a.showContentClass),
          n: h.n(o.hasMore ? a.maxHeightClass : ""),
          o: h.o(function () {
            return a.tapDetail && a.tapDetail.apply(a, arguments);
          }, 5565),
        }
      );
    },
  ],
  ["__scopeId", "data-v-e7926aaa"],
]);
wx.createComponent(g);
