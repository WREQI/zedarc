var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  i = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  s = function (e, i, n) {
    return i in e
      ? t(e, i, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[i] = n);
  },
  u = function (t, i) {
    for (var n in i || (i = {})) a.call(i, n) && s(t, n, i[n]);
    if (r) {
      var u,
        m = e(r(i));
      try {
        for (m.s(); !(u = m.n()).done; ) {
          n = u.value;
          o.call(i, n) && s(t, n, i[n]);
        }
      } catch (e) {
        m.e(e);
      } finally {
        m.f();
      }
    }
    return t;
  },
  m = require("../../../stock-community-base/utils/knife.js"),
  l = require("../../../stock-community-base/utils/mixins/checkComStatus.js"),
  p = require("../../../../../../common/vendor.js"),
  c = {
    components: {},
    mixins: [l.CheckStatusMixin],
    inject: { platformType: { default: "" } },
    props: {
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      itemBottomHandle: {
        type: Array,
        default: function () {
          return ["turn", "comment", "like"];
        },
      },
      pageType: { type: String, default: "" },
      showOper: { type: Boolean, default: !0 },
      showReply: { type: Boolean, default: !0 },
      replyType: { type: String, default: "putComment" },
    },
    data: function () {
      return { isTapLike: !1, isMP: !0 };
    },
    computed: {
      platformClass: function () {
        return "wzq" === m.platform ? "wzq" : this.platformType;
      },
      operAreaClass: function () {
        return [
          "oper-area",
          this.itemBottomHandle.length > 2 && this.hideMoreIcon
            ? "average"
            : "",
          this.hideMoreIcon ? "" : "hasMore",
          4 === this.itemBottomHandle.length ? "four" : "",
          this.platformClass ? "" : "devide-op",
        ];
      },
      commentTxt: function () {
        return (
          (this.itemData.commentsTail && +this.itemData.commentsTail.cnt) ||
          "抢沙发"
        );
      },
      isShowShare: function () {
        return ["topic", "stock", "detail"].indexOf(this.pageType) > -1;
      },
      isOwner: function () {
        return 1 === this.itemData.owner;
      },
      retweetCount: function () {
        var e = this.itemData.retweet_count;
        return this.isShowShare
          ? 0 == +e
            ? "zxg" === m.platform
              ? "分享"
              : "转发"
            : isNaN(e) || (parseInt(e) && parseInt(e) < 1e4)
            ? e
            : "".concat(parseInt(parseInt(e) / 1e4), "w+")
          : e || "转发";
      },
      showViewNum: function () {
        return (
          +this.itemData.view_num > 0 &&
          [
            "topic",
            "stock",
            "personal",
            "square",
            "friends",
            "share",
            "dailyStock",
            "stockbasket",
            "stockmpdetail",
          ].indexOf(this.pageType) > -1
        );
      },
      hasHandleMore: function () {
        return -1 !== this.itemBottomHandle.indexOf("more") || this.isShowShare;
      },
      hideMoreIcon: function () {
        return (
          this.showViewNum ||
          (-1 === this.itemBottomHandle.indexOf("more") && this.isShowShare)
        );
      },
      isCommentAudit: function () {
        return (
          this.itemData &&
          (2 === this.itemData.status ||
            3 === this.itemData.status ||
            1e3 === this.itemData.status)
        );
      },
    },
    methods: {
      formatView: function (e) {
        return m.formatView(e);
      },
      onHandleOper: function (e) {
        var t,
          r,
          a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.checkSubjectStatus(this.itemData, e) &&
          ("putLike" === e && this.handlePutLike(),
          this.$emit("onHandleOper", {
            eventName: e,
            eventData:
              ((t = u({}, a)),
              (r = { fakeInput: this.$refs.fakeInput }),
              i(t, n(r))),
          }));
      },
      handlePutLike: function () {
        var e = this;
        (this.isTapLike = !0),
          this.$nextTick(function () {
            var t;
            setTimeout(
              function () {
                e.isTapLike = !1;
              },
              null == (t = e.$refs.niu) ? void 0 : t.interval
            );
          }),
          this.isTapLike;
      },
    },
    mounted: function () {},
    created: function () {},
  },
  f = p._export_sfc(c, [
    [
      "render",
      function (e, t, i, n, r, a) {
        return p.e(
          {
            a: i.showReply && (!a.isOwner || (a.isOwner && !a.isCommentAudit)),
          },
          i.showReply && (!a.isOwner || (a.isOwner && !a.isCommentAudit))
            ? {
                b: p.t("回复"),
                c: p.o(function (e) {
                  return a.onHandleOper(
                    i.replyType || "putComment",
                    i.itemData
                  );
                }, 5733),
              }
            : {},
          { d: -1 !== i.itemBottomHandle.indexOf("delete") && a.isOwner },
          -1 !== i.itemBottomHandle.indexOf("delete") && a.isOwner
            ? {
                e: p.o(function (e) {
                  return a.onHandleOper("tapDelete", i.itemData);
                }, 5734),
              }
            : {},
          {
            f:
              i.showOper &&
              0 !== i.itemData.allow_like &&
              -1 !== i.itemBottomHandle.indexOf("like") &&
              (!a.isOwner || (a.isOwner && !a.isCommentAudit)),
          },
          i.showOper &&
            0 !== i.itemData.allow_like &&
            -1 !== i.itemBottomHandle.indexOf("like") &&
            (!a.isOwner || (a.isOwner && !a.isCommentAudit))
            ? p.e(
                { g: !!i.itemData.like_id },
                (i.itemData.like_id, {}),
                { h: parseInt(i.itemData.like_num, 10) > 0 },
                parseInt(i.itemData.like_num, 10) > 0
                  ? {
                      i: p.t(parseInt(i.itemData.like_num, 10)),
                      j: p.n(i.itemData.like_id ? "selected" : ""),
                    }
                  : {},
                {
                  k: p.o(function (e) {
                    return a.onHandleOper("putLike");
                  }, 5735),
                }
              )
            : {},
          { l: a.isOwner && a.isCommentAudit },
          a.isOwner && a.isCommentAudit
            ? {
                m: p.o(function (e) {
                  return a.onHandleOper("tapSelfVisible");
                }, 5736),
              }
            : {},
          {
            n: p.n(a.operAreaClass),
            o: p.n(a.platformClass),
            p: p.n(i.pageType),
          }
        );
      },
    ],
    ["__scopeId", "data-v-c4905f5e"],
  ]);
wx.createComponent(f);
