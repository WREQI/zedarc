var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  m = function (e, n, i) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[n] = i);
  },
  s = function (t, n) {
    for (var i in n || (n = {})) a.call(n, i) && m(t, i, n[i]);
    if (o) {
      var s,
        u = e(o(n));
      try {
        for (u.s(); !(s = u.n()).done; ) {
          i = s.value;
          r.call(n, i) && m(t, i, n[i]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return t;
  },
  u = require("../../../stock-community-base/utils/knife.js"),
  c = require("../../../stock-community-base/utils/mixins/checkComStatus.js"),
  l = require("../../../../../../common/vendor.js"),
  f = {
    mixins: [c.CheckStatusMixin],
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
    },
    data: function () {
      return { isMP: !0 };
    },
    computed: {
      operAreaClass: function () {
        return [
          "oper-area",
          this.itemBottomHandle.length > 2 && this.hideMoreIcon
            ? "average"
            : "",
          this.hideMoreIcon ? "" : "hasMore",
          4 === this.itemBottomHandle.length ? "four" : "",
        ];
      },
      commentTxt: function () {
        return (
          (this.itemData.commentsTail && +this.itemData.commentsTail.cnt) ||
          "评论"
        );
      },
      isShowShare: function () {
        return ["topic", "stock", "detail"].indexOf(this.pageType) > -1;
      },
      retweetCount: function () {
        var e = this.itemData.retweet_count;
        return this.isShowShare
          ? 0 == +e
            ? "zxg" === u.platform
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
            "newbie",
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
    },
    methods: {
      formatView: function (e) {
        return u.formatView(e);
      },
      onHandleOper: function (e) {
        var t,
          o,
          a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.checkSubjectStatus(this.itemData, e) &&
          this.$emit("onHandleOper", {
            eventName: e,
            eventData:
              ((t = s({}, a)),
              (o = { fakeInput: this.$refs.fakeInput }),
              n(t, i(o))),
          });
      },
    },
    mounted: function () {},
    created: function () {},
  },
  h = l._export_sfc(f, [
    [
      "render",
      function (e, t, n, i, o, a) {
        return l.e(
          { a: n.itemBottomHandle.length },
          n.itemBottomHandle.length
            ? l.e(
                { b: a.showViewNum },
                a.showViewNum
                  ? { c: l.t(a.formatView(n.itemData.view_num)) }
                  : {},
                { d: -1 !== n.itemBottomHandle.indexOf("comment") },
                -1 !== n.itemBottomHandle.indexOf("comment")
                  ? l.e(
                      { e: n.itemData.commentsTail },
                      n.itemData.commentsTail
                        ? { f: l.t(a.commentTxt) }
                        : { g: l.t("评论") },
                      {
                        h: l.o(function (e) {
                          return a.onHandleOper("putComment");
                        }, 5675),
                      }
                    )
                  : {},
                {
                  i:
                    0 !== n.itemData.allow_like &&
                    -1 !== n.itemBottomHandle.indexOf("like"),
                },
                0 !== n.itemData.allow_like &&
                  -1 !== n.itemBottomHandle.indexOf("like")
                  ? l.e(
                      {
                        j: !!n.itemData.like_id,
                        k: parseInt(n.itemData.like_num, 10) > 0,
                      },
                      parseInt(n.itemData.like_num, 10) > 0
                        ? { l: l.t(parseInt(n.itemData.like_num, 10)) }
                        : { m: l.t("点赞") },
                      {
                        n: l.o(function (e) {
                          return a.onHandleOper("putLike");
                        }, 5676),
                      }
                    )
                  : {},
                { o: l.n(a.operAreaClass) }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-d2ac66da"],
  ]);
wx.createComponent(h);
