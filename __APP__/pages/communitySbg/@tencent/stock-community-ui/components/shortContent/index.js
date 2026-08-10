var t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = Object.defineProperty,
  n = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  r = function (t, n, i) {
    return n in t
      ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[n] = i);
  },
  m = function (e, n) {
    for (var i in n || (n = {})) a.call(n, i) && r(e, i, n[i]);
    if (o) {
      var m,
        c = t(o(n));
      try {
        for (c.s(); !(m = c.n()).done; ) {
          i = m.value;
          s.call(n, i) && r(e, i, n[i]);
        }
      } catch (t) {
        c.e(t);
      } finally {
        c.f();
      }
    }
    return e;
  },
  c = function (t, e) {
    return n(t, i(e));
  },
  p = require("../../../../../../common/vendor.js"),
  u = require("../../../stock-community-base/utils/commentFilter.js"),
  l = require("../../../stock-community-base/utils/knife.js"),
  h = require("../../../stock-community-base/utils/constant.js"),
  y = {
    name: "shortContent",
    components: {
      itemCmp: function () {
        return "../itemCmp/index.js";
      },
    },
    inject: { stockBridge: { default: {} }, isIpad: { default: !1 } },
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
        platform: l.platform,
        isAndroid: h.isAndroid,
        showMore: !1,
        showExpand: !1,
        isExpand: !1,
      };
    },
    computed: {
      spanlineHeight: function () {
        return "comment" === this.itemType
          ? this.isIpad
            ? 42
            : 21
          : this.isIpad
          ? 48
          : 24;
      },
      maxLineNumber: function () {
        return "comment" === this.itemType ? 2 : 6;
      },
      contentMoreClass: function () {
        return "comment" === this.itemType
          ? "short-content-more-nonmain"
          : "short-content-more-main";
      },
      moreMaskClass: function () {
        return "comment" === this.itemType || "turn" === this.itemType
          ? "short-content-more-mask-nonmain"
          : "short-content-more-mask-main";
      },
      moreTextClass: function () {
        return "comment" === this.itemType || "turn" === this.itemType
          ? "comment" === this.itemType && this.isExpand
            ? "short-content-more-text-nonmain-expand"
            : "short-content-more-text-nonmain"
          : "short-content-more-text-main";
      },
      maxHeightClass: function () {
        return this.isCompatible()
          ? "comment" === this.itemType
            ? "comment-max-height"
            : "subject-max-height-compatible"
          : "comment" === this.itemType
          ? "comment-max-height"
          : "subject-max-height";
      },
      canShowLive: function () {
        return !1;
      },
      showContentClass: function () {
        return [
          "mod-show-content",
          this.disabled ? "disabled" : "",
          this.itemData && "reply" === this.itemData.showType
            ? "isComment"
            : "",
          "detail" === this.pageType ? "isDetail" : this.pageType,
        ];
      },
      isDynamic: function () {
        var t;
        return (
          this.itemData &&
          this.itemData.imageList &&
          this.itemData.imageList.length > 0 &&
          -1 !==
            (null == (t = this.itemData.image_list[0])
              ? void 0
              : t.origin.indexOf("gif123"))
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
        return (this.showType && "turn" === this.showType) ||
          (this.itemType &&
            ("mainSubject" === this.itemType || "detail" === this.itemType) &&
            this.itemData.showType &&
            "turn" === this.itemData.showType)
          ? this.turnLog && this.turnLog.length
            ? this.turnLog[0].pResult
            : []
          : this.pResult;
      },
    },
    methods: {
      filterConsecutivePlainBr: function (e) {
        return Array.isArray(e)
          ? e.map(function (e) {
              if (!e.content_array || !Array.isArray(e.content_array)) return e;
              var n,
                i = [],
                o = !1,
                a = !1,
                s = t(e.content_array);
              try {
                for (s.s(); !(n = s.n()).done; ) {
                  var r = n.value;
                  "plain-br" === r.type
                    ? o
                      ? (a = !0)
                      : (i.push(r), (o = !0))
                    : (i.push(r), (o = !1));
                }
              } catch (t) {
                s.e(t);
              } finally {
                s.f();
              }
              return a ? c(m({}, e), { content_array: i }) : e;
            })
          : e;
      },
      isCompatible: function () {
        return 390 === (getApp().globalData.systemInfo || {}).windowWidth;
      },
      clickMore: function () {
        if ("comment" === this.itemType)
          return (
            (this.isExpand = !this.isExpand),
            (this.showMore = !this.isExpand),
            void this.stockBridge.busEmit("community-commentChanged")
          );
        this.$emit("tapDetail");
      },
      tapShowBox: function (t, e) {
        this.$emit("tapContent", { eventName: t, eventData: e });
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
          "epage-".concat(u.getEmojiId(t.emojiName).page),
          "eid-".concat(u.getEmojiId(t.emojiName).id),
          this.showType || "",
          h.isAndroid ? "isAndroid" : "",
        ];
      },
      commentItemZhiboClass: function (t) {
        return ["link", t.type, "wzq" === l.platform ? "disabled" : ""];
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
          n = e.images,
          i = e.index,
          o = e.urls,
          a = [],
          s = [];
        o
          ? o.split(",").forEach(function (t) {
              a.push(t);
            })
          : Array.isArray(n)
          ? n[0].origin
            ? n.forEach(function (t) {
                a.push(t.url || t.origin);
              })
            : a.push(n[0])
          : n.split(",").forEach(function (t) {
              a.push(t);
            }),
          a.forEach(function (t) {
            s.push({ large: t, small: t });
          });
        var r = {
          currentIndex: i,
          urls: a,
          images: s,
          type: "".concat(this.showType, ".text"),
        };
        this.$emit("tapImage", r);
      },
      getEmojiId: function (t) {
        return u.getEmojiId(t);
      },
      tapDetail: function (t) {
        "comment" !== this.itemType && t.stopPropagation(),
          this.$emit("tapDetail");
      },
      tapContent: function (t, e) {
        var n = "";
        "stockdetail" === t &&
          "wzq" === l.platform &&
          "jj" === (null == e ? void 0 : e.symbol.substr(0, 2)) &&
          (n = "stockjj"),
          "CMP" === e.type &&
            e.link &&
            "user" === e.link.type &&
            e.link.data &&
            e.link.data.user_id &&
            ((n = "person"),
            (e = c(m({}, e), { personId: e.link.data.user_id || "" }))),
          this.$emit("tapContent", { eventName: n || t, eventData: e });
      },
      calContentMore: function () {
        var t = this;
        1 !== this.itemData.is_yb_answer && "commentDetail" !== this.pageType
          ? p.wx$1
              .createSelectorQuery()
              .in(this)
              .select("#showContent")
              .boundingClientRect()
              .exec(function (e) {
                if (e && e.length > 0 && e[0]) {
                  var n = e[0].height;
                  if (n) {
                    var i = Math.floor(n / t.spanlineHeight);
                    (t.showMore = i > t.maxLineNumber),
                      "comment" === t.itemType && (t.showExpand = t.showMore);
                  } else t.showMore = !1;
                } else t.showMore = !1;
              })
          : (this.showMore = !1);
      },
    },
    watch: {
      iPResult: {
        deep: !0,
        handler: function () {
          var t = this;
          this.$nextTick(function () {
            t.calContentMore();
          });
        },
        immediate: !0,
      },
      showMore: {
        handler: function (t, e) {
          void 0 !== e && t && !e && (this.isExpand = !1);
        },
        immediate: !0,
      },
    },
  };
Array || p.resolveComponent("itemCmp")();
var d = p._export_sfc(y, [
  [
    "render",
    function (t, e, n, i, o, a) {
      return p.e(
        {
          a: p.f(a.iPResult, function (t, e, i) {
            return {
              a: p.f(t.content_array, function (t, e, o) {
                return p.e(
                  { a: t && "stock" === t.type && t.symbol },
                  t && "stock" === t.type && t.symbol
                    ? p.e({ b: !t.iconHide }, (t.iconHide, {}), {
                        c: p.t(
                          t.iconHide ? t.text : t.text + "." + t.symbolShow
                        ),
                        d: p.o(
                          function (e) {
                            return a.tapContent("stockdetail", t);
                          },
                          5689,
                          "".concat(n.itemData.id, "_content_").concat(e)
                        ),
                        e: p.n(t.type),
                      })
                    : "emoji" == t.type
                    ? { g: p.n(a.commentItemEmojiClass(t)), h: t.emojiName }
                    : "topic" === t.type
                    ? {
                        j: p.t(t.text),
                        k: p.n(t.type),
                        l: p.o(
                          function (e) {
                            return a.tapContent("topic", t);
                          },
                          5690,
                          "".concat(n.itemData.id, "_content_").concat(e)
                        ),
                      }
                    : "strategy" === t.type
                    ? {
                        n: p.t(t.text),
                        o: p.n(t.type),
                        p: p.o(
                          function (e) {
                            return a.tapContent("strategy", t);
                          },
                          5691,
                          "".concat(n.itemData.id, "_content_").concat(e)
                        ),
                      }
                    : "atPerson" === t.type
                    ? {
                        r: p.t(t.text),
                        s: p.n(t.type),
                        t: p.o(
                          function (e) {
                            return a.tapContent("person", t);
                          },
                          5692,
                          "".concat(n.itemData.id, "_content_").concat(e)
                        ),
                      }
                    : "live" == t.type && a.canShowLive
                    ? {
                        w: p.t(t.text),
                        x: p.n(a.commentItemZhiboClass(t)),
                        y: p.o(
                          function (e) {
                            return a.tapContent("live", t);
                          },
                          5693,
                          "".concat(n.itemData.id, "_content_").concat(e)
                        ),
                      }
                    : "CMP" === t.type
                    ? {
                        A: p.n("comment" === n.itemType ? "link-addi" : ""),
                        B: p.o(
                          function (e) {
                            return a.tapContent("chaolian", t);
                          },
                          5694,
                          "".concat(n.itemData.id, "_content_").concat(e)
                        ),
                        C: "24f9678d-0-" + i + "-" + o,
                        D: p.p({
                          disabled: n.disabled,
                          iContent: t,
                          iContentIndex: e,
                        }),
                      }
                    : "plain-br" === t.type && "comment" !== n.itemType
                    ? {}
                    : { F: p.t(t.text), G: p.n(a.contentPlainClass(t)) },
                  {
                    f: "emoji" == t.type,
                    i: "topic" === t.type,
                    m: "strategy" === t.type,
                    q: "atPerson" === t.type,
                    v: "live" == t.type && a.canShowLive,
                    z: "CMP" === t.type,
                    E: "plain-br" === t.type && "comment" !== n.itemType,
                    H: "".concat(n.itemData.id, "_content_").concat(e),
                  }
                );
              }),
              b: "".concat(n.itemData.id, "_item_").concat(e),
            };
          }),
          b:
            n.itemData.image_list &&
            n.itemData.image_list.length &&
            (-1 !== ["comment", "turn"].indexOf(a.showType) || n.showImg) &&
            -1 === ["detail", "fatieqi", "commentDetail"].indexOf(n.pageType),
        },
        n.itemData.image_list &&
          n.itemData.image_list.length &&
          (-1 !== ["comment", "turn"].indexOf(a.showType) || n.showImg) &&
          -1 === ["detail", "fatieqi", "commentDetail"].indexOf(n.pageType)
          ? {
              c: p.t(a.isDynamic ? "动态表情" : "查看图片"),
              d: p.n(a.commentHideImage()),
              e: n.itemData.imageList,
              f: n.itemData.image_urls,
              g: p.o(function () {
                return a.previewImage && a.previewImage.apply(a, arguments);
              }, 5695),
            }
          : {},
        {
          h: p.o(function () {
            return a.tapDetail && a.tapDetail.apply(a, arguments);
          }, 5696),
          i: p.n(a.showContentClass),
          j: "comment" === n.itemType && o.showExpand,
        },
        "comment" === n.itemType && o.showExpand
          ? {
              k: p.n(a.moreMaskClass),
              l: p.t(o.isExpand ? "收起" : "...展开"),
              m: p.n(a.moreTextClass),
              n: p.n(a.contentMoreClass),
              o: p.o(function () {
                return a.clickMore && a.clickMore.apply(a, arguments);
              }, 5697),
            }
          : {},
        { p: "comment" !== n.itemType && o.showMore },
        "comment" !== n.itemType && o.showMore
          ? {
              q: p.n(a.moreMaskClass),
              r: p.n(a.moreTextClass),
              s: p.n(a.contentMoreClass),
              t: p.o(function () {
                return a.clickMore && a.clickMore.apply(a, arguments);
              }, 5698),
            }
          : {},
        { v: p.n(o.showMore ? a.maxHeightClass : "") }
      );
    },
  ],
  ["__scopeId", "data-v-24f9678d"],
]);
wx.createComponent(d);
