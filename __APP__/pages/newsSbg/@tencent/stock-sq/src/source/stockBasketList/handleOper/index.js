var e = require("../../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  m = function (e, n, i) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[n] = i);
  },
  s = function (t, n) {
    for (var i in n || (n = {})) o.call(n, i) && m(t, i, n[i]);
    if (a) {
      var s,
        l = e(a(n));
      try {
        for (l.s(); !(s = l.n()).done; ) {
          i = s.value;
          r.call(n, i) && m(t, i, n[i]);
        }
      } catch (e) {
        l.e(e);
      } finally {
        l.f();
      }
    }
    return t;
  },
  l = require("../../../../../stock-community-base/utils/knife.js"),
  u = require("../../../../../stock-community-base/utils/mixins/checkComStatus.js"),
  p = require("../../../../../../../../common/vendor.js"),
  c = {
    components: {
      niuAnimationMP: function () {
        return "../niuAnimationMP/index.js";
      },
      handleMore: function () {
        return "../../handleMore/index.js";
      },
    },
    mixins: [u.CheckStatusMixin],
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
      BUS: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    data: function () {
      return { isTapLike: !1, isMP: !0 };
    },
    computed: {
      platformClass: function () {
        return this.platformType;
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
      retweetCount: function () {
        var e = this.itemData.retweet_count;
        return this.isShowShare
          ? 0 == +e
            ? "zxg" === l.platform
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
    },
    methods: {
      formatView: function (e) {
        return l.formatView(e);
      },
      onHandleOper: function (e) {
        var t,
          a,
          o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.checkSubjectStatus(this.itemData) &&
          ("putLike" === e && this.handlePutLike(),
          this.$emit("onHandleOper", {
            eventName: e,
            eventData:
              ((t = s({}, o)),
              (a = { fakeInput: this.$refs.fakeInput }),
              n(t, i(a))),
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
      onHandleShowShare: function () {
        var e;
        this.isShowShare && "zxg" === l.platform
          ? null == (e = this.$refs.handleMore) ||
            e.handleShowMore({ isShowChannel: !0, isShowFunctions: !1 })
          : this.onHandleOper("turn");
      },
    },
    mounted: function () {},
    created: function () {},
  };
Array ||
  (p.resolveComponent("niuAnimationMP") + p.resolveComponent("handleMore"))();
var d = p._export_sfc(c, [
  [
    "render",
    function (e, t, n, i, a, o) {
      return p.e(
        {
          a:
            ("wzqmp" === o.platformClass || "wzq" === o.platformClass) &&
            ("stockbasket" === n.pageType || "stockmpdetail" === n.pageType) &&
            n.itemBottomHandle.length,
        },
        ("wzqmp" !== o.platformClass && "wzq" !== o.platformClass) ||
          ("stockbasket" !== n.pageType && "stockmpdetail" !== n.pageType) ||
          !n.itemBottomHandle.length
          ? n.itemBottomHandle.length
            ? p.e(
                { s: o.showViewNum },
                o.showViewNum
                  ? { t: p.t(o.formatView(n.itemData.view_num)) }
                  : {},
                { v: -1 !== n.itemBottomHandle.indexOf("turn") },
                -1 !== n.itemBottomHandle.indexOf("turn")
                  ? {
                      w: p.t(o.retweetCount),
                      x: p.o(function () {
                        return (
                          o.onHandleShowShare &&
                          o.onHandleShowShare.apply(o, arguments)
                        );
                      }, 4252),
                    }
                  : {},
                { y: -1 !== n.itemBottomHandle.indexOf("comment") },
                -1 !== n.itemBottomHandle.indexOf("comment")
                  ? p.e(
                      { z: n.itemData.commentsTail },
                      n.itemData.commentsTail
                        ? { A: p.t(o.commentTxt) }
                        : { B: p.t("抢沙发") },
                      {
                        C: p.o(function (e) {
                          return o.onHandleOper("putComment");
                        }, 4253),
                      }
                    )
                  : {},
                {
                  D:
                    0 !== n.itemData.allow_like &&
                    -1 !== n.itemBottomHandle.indexOf("like"),
                },
                0 !== n.itemData.allow_like &&
                  -1 !== n.itemBottomHandle.indexOf("like")
                  ? p.e(
                      { E: a.isMP },
                      a.isMP
                        ? {
                            F: p.sr("niu", "43149120-0"),
                            G: p.p({
                              isTap: a.isTapLike,
                              selected: !!n.itemData.like_id,
                              num: parseInt(n.itemData.like_num, 10),
                              pageType: n.pageType,
                            }),
                          }
                        : {},
                      {
                        H: p.o(function (e) {
                          return o.onHandleOper("putLike");
                        }, 4254),
                      }
                    )
                  : {},
                { I: p.n(o.operAreaClass), J: o.hasHandleMore },
                o.hasHandleMore
                  ? {
                      K: p.sr("handleMore", "43149120-1"),
                      L: p.o(function (e) {
                        return o.onHandleOper("tapIllegal", e);
                      }, 4255),
                      M: p.o(function (e) {
                        return o.onHandleOper("tapDeleteItem", e);
                      }, 4256),
                      N: p.o(function (e) {
                        return o.onHandleOper("tapMore", e);
                      }, 4257),
                      O: p.o(function (e) {
                        return o.onHandleOper("turn");
                      }, 4258),
                      P: p.p({
                        pageType: n.pageType,
                        BUS: n.BUS,
                        hideSangedianIcon: o.hideMoreIcon,
                        itemData: n.itemData,
                      }),
                    }
                  : {}
              )
            : {}
          : p.e(
              { b: o.showViewNum },
              o.showViewNum
                ? { c: p.t(o.formatView(n.itemData.view_num)) }
                : {},
              { d: -1 !== n.itemBottomHandle.indexOf("comment") },
              -1 !== n.itemBottomHandle.indexOf("comment")
                ? p.e(
                    { e: n.itemData.commentsTail },
                    n.itemData.commentsTail
                      ? { f: p.t(o.commentTxt) }
                      : { g: p.t("抢沙发") },
                    {
                      h: p.o(function (e) {
                        return o.onHandleOper("putComment");
                      }, 4250),
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
                ? p.e(
                    { j: !!n.itemData.like_id },
                    (n.itemData.like_id, {}),
                    { k: parseInt(n.itemData.like_num, 10) > 0 },
                    parseInt(n.itemData.like_num, 10) > 0
                      ? { l: p.t(parseInt(n.itemData.like_num, 10)) }
                      : { m: p.t("赞") },
                    {
                      n: p.o(function (e) {
                        return o.onHandleOper("putLike");
                      }, 4251),
                    }
                  )
                : {},
              {
                o: p.n(o.operAreaClass),
                p: p.n(o.platformClass),
                q: p.n(n.pageType),
              }
            ),
        { r: n.itemBottomHandle.length }
      );
    },
  ],
  ["__scopeId", "data-v-43149120"],
]);
wx.createComponent(d);
