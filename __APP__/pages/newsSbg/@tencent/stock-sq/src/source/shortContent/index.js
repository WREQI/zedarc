var t = require("../../../../../../../@babel/runtime/helpers/slicedToArray"),
  e = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  n = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  h = function (t, e, n) {
    return e in t
      ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  p = require("../../../../../../../common/vendor.js"),
  u = require("../../../../stock-community-base/utils/commentFilter.js"),
  l = require("../../../../stock-community-base/utils/knife.js"),
  m = require("../../../../stock-community-base/utils/constant.js"),
  c = {
    name: "shortContent",
    options: { styleIsolation: "shared" },
    components: {
      itemCmp: function () {
        return "../itemCmp/index.js";
      },
      showMore: function () {
        return "../showMore/index.js";
      },
    },
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
        isAndroid: m.isAndroid,
        isShow: !1,
        isFolded: !0,
        hasShowMore: !1,
        spanHeight: 0,
        foldH: 0,
        eleH: 0,
      };
    },
    mounted: function () {
      this.checkHasShowMore();
    },
    computed: {
      canShowLive: function () {
        return !1;
      },
      showContentClass: function () {
        var t,
          e = 1 === (null == (t = this.itemData) ? void 0 : t.is_yb_answer);
        return [
          "mod-show-content",
          this.disabled ? "disabled" : "",
          this.itemData && "reply" === this.itemData.showType
            ? "isComment"
            : "",
          "detail" === this.pageType ? "isDetail" : "",
          this.showType,
          "square" !== this.pageType || e ? "" : "is-mp-square",
          "comment" !== this.itemType || e ? "" : "is-mp-comment",
          "zxg" === l.platform && "messageBox" === this.pageType
            ? "short-content-additional"
            : "",
        ];
      },
      showContentStyle: function () {
        if (this.hasShowMore)
          return this.isShow
            ? ((this.isFolded = !1), { "max-height": "none" })
            : ((this.isFolded = !0), {});
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
      isMP: function () {
        return !0;
      },
      showText: function () {
        return (
          {
            short: "全文",
            turn: "全文",
            turnNews: "全文",
            turnShort: "全文",
            turnLog: "展开更多",
          }[this.showType] || "展开"
        );
      },
      hideText: function () {
        return { turn: "收起更多" }[this.showType] || "收起";
      },
      onlyFolded: function () {
        return (
          -1 !==
          ["short", "turn", "turnNews", "turnShort"].indexOf(this.showType)
        );
      },
      showLine: function () {
        return (
          {
            long: 3,
            turn: 6,
            turnNews: 6,
            turnShort: 6,
            short: 6,
            reply: 4,
            comment: 2,
            turnLog: 1,
            desc: 3,
          }[this.showType] || 0
        );
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
      commentItemEmojiClass: function (t) {
        return [
          "comment_item_emoji",
          "epage-".concat(u.getEmojiId(t.emojiName).page),
          "eid-".concat(u.getEmojiId(t.emojiName).id),
          this.showType || "",
          m.isAndroid ? "isAndroid" : "",
        ];
      },
      commentItemZhiboClass: function (t) {
        return ["link", t.type, , "wzq" === l.platform ? "disabled" : ""];
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
          s = [],
          r = [];
        o
          ? o.split(",").forEach(function (t) {
              s.push(t);
            })
          : i[0].origin
          ? i.forEach(function (t) {
              s.push(t.url || t.origin);
            })
          : Array.isArray(i) && i.length > 0
          ? i.forEach(function (t) {
              s.push(t);
            })
          : i.split(",").forEach(function (t) {
              s.push(t);
            }),
          s.forEach(function (t) {
            r.push({ large: t, small: t });
          });
        var a = {
          currentIndex: n,
          urls: s,
          images: r,
          type: "".concat(this.showType, ".text"),
        };
        this.$emit("tapImage", a);
      },
      getEmojiId: function (t) {
        return u.getEmojiId(t);
      },
      tapDetail: function (t) {
        "comment" !== this.itemType && t.stopPropagation(),
          this.$emit("tapDetail");
      },
      tapContent: function (t, i) {
        var p,
          u,
          m = "";
        "stockdetail" === t &&
          "wzq" === l.platform &&
          "jj" === (null == i ? void 0 : i.symbol.substr(0, 2)) &&
          (m = "stockjj"),
          "CMP" === i.type &&
            i.link &&
            "user" === i.link.type &&
            i.link.data &&
            i.link.data.user_id &&
            ((m = "person"),
            (p = (function (t, i) {
              for (var n in i || (i = {})) r.call(i, n) && h(t, n, i[n]);
              if (s) {
                var o,
                  p = e(s(i));
                try {
                  for (p.s(); !(o = p.n()).done; ) {
                    n = o.value;
                    a.call(i, n) && h(t, n, i[n]);
                  }
                } catch (t) {
                  p.e(t);
                } finally {
                  p.f();
                }
              }
              return t;
            })({}, i)),
            (u = { personId: i.link.data.user_id || "" }),
            (i = n(p, o(u)))),
          this.$emit("tapContent", { eventName: m || t, eventData: i });
      },
      initShowMore: function () {
        var t;
        this.$emit("initShowMore"),
          null == (t = this.itemData) || t.is_yb_answer;
      },
      toggleShow: function (t) {
        this.$emit("toggleShow", t);
      },
      toggleShowMp: function (t) {
        this.onlyFolded
          ? this.$emit("toggleShow", { isShow: t, showType: this.showType })
          : ("desc" === this.showType && this.$emit("toggleShow", t),
            (this.isShow = t));
      },
      checkHasShowMore: function () {
        var e,
          i = this;
        1 === (null == (e = this.itemData) ? void 0 : e.is_yb_answer)
          ? (this.hasShowMore = !1)
          : this.$nextTick(function () {
              var e = p.index.createSelectorQuery().in(i);
              e.select(".mod-show-content").fields({ size: !0 }),
                e.select(".mod-real-content").fields({ size: !0 }),
                e.exec(function (e) {
                  if (e[0] && e[1]) {
                    var n = t(e, 2),
                      o = n[0],
                      s = n[1];
                    i.hasShowMore = s.height > o.height;
                  }
                });
            });
      },
    },
    watch: {
      iPResult: {
        deep: !0,
        immediate: !0,
        handler: function () {
          var t = this;
          this.$nextTick(function () {
            "detail" !== t.pageType && t.initShowMore();
          });
        },
      },
    },
  };
Array || (p.resolveComponent("itemCmp") + p.resolveComponent("showMore"))();
var d = p._export_sfc(c, [
  [
    "render",
    function (t, e, i, n, o, s) {
      return p.e(
        {
          a: p.f(s.iPResult, function (t, e, n) {
            return {
              a: p.f(t.content_array, function (t, e, o) {
                return p.e(
                  { a: t && "stock" === t.type && t.symbol },
                  t && "stock" === t.type && t.symbol
                    ? p.e({ b: !t.iconHide }, (t.iconHide, {}), {
                        c: p.t(
                          t.iconHide ? t.text : t.text + "." + t.symbolShow
                        ),
                        d: p.o(function (e) {
                          return s.tapContent("stockdetail", t);
                        }, 3294),
                        e: p.n(t.type),
                      })
                    : "emoji" == t.type
                    ? { g: p.n(s.commentItemEmojiClass(t)), h: t.emojiName }
                    : "topic" === t.type
                    ? {
                        j: p.t(t.text),
                        k: p.n(t.type),
                        l: p.o(function (e) {
                          return s.tapContent("topic", t);
                        }, 3295),
                      }
                    : "strategy" === t.type
                    ? {
                        n: p.t(t.text),
                        o: p.n(t.type),
                        p: p.o(function (e) {
                          return s.tapContent("strategy", t);
                        }, 3296),
                      }
                    : "atPerson" === t.type
                    ? {
                        r: p.t(t.text),
                        s: p.n(t.type),
                        t: p.o(function (e) {
                          return s.tapContent("person", t);
                        }, 3297),
                      }
                    : "live" === t.type && s.canShowLive
                    ? {
                        w: p.t(t.text),
                        x: p.n(s.commentItemZhiboClass(t)),
                        y: p.o(function (e) {
                          return s.tapContent("live", t);
                        }, 3298),
                      }
                    : "CMP" === t.type
                    ? {
                        A: p.o(function (e) {
                          return s.tapContent("chaolian", t);
                        }, 3299),
                        B: "7acbd3a7-0-" + n + "-" + o,
                        C: p.p({
                          disabled: i.disabled,
                          iContent: t,
                          iContentIndex: e,
                        }),
                      }
                    : "plain-br" === t.type
                    ? {}
                    : "live" !== t.type
                    ? { F: p.t(t.text), G: p.n(s.contentPlainClass(t)) }
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
          b: -1 === ["detail", "fatieqi"].indexOf(i.pageType) && !s.isMP,
        },
        -1 !== ["detail", "fatieqi"].indexOf(i.pageType) || s.isMP
          ? {}
          : {
              c: p.sr("showMore", "7acbd3a7-1"),
              d: p.o(s.initShowMore, 3300),
              e: p.o(function (t) {
                return s.toggleShow(t);
              }, 3301),
              f: p.p({ showType: s.showType }),
            },
        {
          g:
            -1 === ["detail", "fatieqi"].indexOf(i.pageType) &&
            s.isMP &&
            o.hasShowMore,
        },
        -1 === ["detail", "fatieqi"].indexOf(i.pageType) &&
          s.isMP &&
          o.hasShowMore
          ? p.e(
              { h: o.isFolded },
              (o.isFolded, {}),
              { i: o.isFolded },
              o.isFolded
                ? {
                    j: p.t(s.showText),
                    k: p.o(function (t) {
                      return s.toggleShowMp(!0);
                    }, 3302),
                  }
                : {
                    l: p.t(s.hideText),
                    m: p.o(function (t) {
                      return s.toggleShowMp(!1);
                    }, 3303),
                  },
              { n: p.n(s.showType), o: p.n(o.isFolded ? "isFolded" : "") }
            )
          : {},
        {
          p:
            i.itemData.image_list &&
            i.itemData.image_list.length &&
            (-1 !== ["comment", "turn"].indexOf(s.showType) || i.showImg) &&
            -1 === ["detail", "fatieqi"].indexOf(i.pageType),
        },
        i.itemData.image_list &&
          i.itemData.image_list.length &&
          (-1 !== ["comment", "turn"].indexOf(s.showType) || i.showImg) &&
          -1 === ["detail", "fatieqi"].indexOf(i.pageType)
          ? {
              q: p.t(s.isDynamic ? "动态表情" : "查看图片"),
              r: p.n(s.commentHideImage()),
              s: i.itemData.imageList,
              t: i.itemData.image_urls,
              v: p.o(function () {
                return s.previewImage && s.previewImage.apply(s, arguments);
              }, 3304),
            }
          : {},
        {
          w: p.o(function () {
            return s.tapDetail && s.tapDetail.apply(s, arguments);
          }, 3305),
          x: p.n(s.showContentClass),
          y: p.s(s.showContentStyle),
        }
      );
    },
  ],
  ["__scopeId", "data-v-7acbd3a7"],
]);
wx.createComponent(d);
