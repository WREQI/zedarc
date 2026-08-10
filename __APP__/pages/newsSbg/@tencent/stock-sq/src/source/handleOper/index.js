var e = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  s = function (e, n, i) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[n] = i);
  },
  u = function (t, n) {
    for (var i in n || (n = {})) r.call(n, i) && s(t, i, n[i]);
    if (o) {
      var u,
        m = e(o(n));
      try {
        for (m.s(); !(u = m.n()).done; ) {
          i = u.value;
          a.call(n, i) && s(t, i, n[i]);
        }
      } catch (e) {
        m.e(e);
      } finally {
        m.f();
      }
    }
    return t;
  },
  m = function (e, t) {
    return n(e, i(t));
  },
  l = require("../../../../stock-community-base/utils/knife.js"),
  c = require("../../../../stock-community-base/utils/mixins/checkComStatus.js"),
  h = require("../../utils/mixins/securityCheck/index.js"),
  d = require("../../../../../../../common/vendor.js"),
  p = {
    options: { styleIsolation: "shared" },
    components: {
      niuAnimationMP: function () {
        return "../niuAnimationMP/index.js";
      },
      handleMore: function () {
        return "../handleMore/index.js";
      },
    },
    mixins: [c.CheckStatusMixin, h.securityCheck],
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
      from: { type: String, default: "" },
    },
    data: function () {
      return { isTapLike: !1, isMP: !0 };
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
        var t = this,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.checkSubjectStatus(this.itemData, e) &&
          ("putLike" === e
            ? this.securityCheck({ eventName: "putLike" }).then(function () {
                t.handlePutLike(),
                  t.$emit("onHandleOper", {
                    eventName: e,
                    eventData: m(u({}, n), { fakeInput: t.$refs.fakeInput }),
                  });
              })
            : this.$emit("onHandleOper", {
                eventName: e,
                eventData: m(u({}, n), { fakeInput: this.$refs.fakeInput }),
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
  (d.resolveComponent("niuAnimationMP") + d.resolveComponent("handleMore"))();
var f = d._export_sfc(p, [
  [
    "render",
    function (e, t, n, i, o, r) {
      return d.e(
        { a: n.itemBottomHandle.length },
        n.itemBottomHandle.length
          ? d.e(
              { b: r.showViewNum },
              r.showViewNum
                ? { c: d.t(r.formatView(n.itemData.view_num)) }
                : {},
              { d: -1 !== n.itemBottomHandle.indexOf("turn") },
              -1 !== n.itemBottomHandle.indexOf("turn")
                ? {
                    e: d.t(r.retweetCount),
                    f: d.o(function () {
                      return (
                        r.onHandleShowShare &&
                        r.onHandleShowShare.apply(r, arguments)
                      );
                    }, 4311),
                  }
                : {},
              { g: -1 !== n.itemBottomHandle.indexOf("comment") },
              -1 !== n.itemBottomHandle.indexOf("comment")
                ? d.e(
                    { h: n.itemData.commentsTail },
                    n.itemData.commentsTail
                      ? { i: d.t(r.commentTxt) }
                      : { j: d.t("抢沙发") },
                    {
                      k: d.o(function (e) {
                        return r.onHandleOper("putComment");
                      }, 4312),
                    }
                  )
                : {},
              {
                l:
                  0 !== n.itemData.allow_like &&
                  -1 !== n.itemBottomHandle.indexOf("like"),
              },
              0 !== n.itemData.allow_like &&
                -1 !== n.itemBottomHandle.indexOf("like")
                ? d.e(
                    { m: o.isMP },
                    o.isMP
                      ? {
                          n: d.sr("niu", "08dc37e0-0"),
                          o: d.p({
                            isTap: o.isTapLike,
                            selected: !!n.itemData.like_id,
                            num: parseInt(n.itemData.like_num, 10),
                          }),
                        }
                      : {},
                    {
                      p: d.o(function (e) {
                        return r.onHandleOper("putLike");
                      }, 4313),
                    }
                  )
                : {},
              { q: d.n(r.operAreaClass), r: r.hasHandleMore },
              r.hasHandleMore
                ? {
                    s: d.sr("handleMore", "08dc37e0-1"),
                    t: d.o(function (e) {
                      return r.onHandleOper("tapIllegal", e);
                    }, 4314),
                    v: d.o(function (e) {
                      return r.onHandleOper("tapDeleteItem", e);
                    }, 4315),
                    w: d.o(function (e) {
                      return r.onHandleOper("tapMore", e);
                    }, 4316),
                    x: d.o(function (e) {
                      return r.onHandleOper("turn");
                    }, 4317),
                    y: d.p({
                      pageType: n.pageType,
                      BUS: n.BUS,
                      hideSangedianIcon: r.hideMoreIcon,
                      itemData: n.itemData,
                    }),
                  }
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-08dc37e0"],
]);
wx.createComponent(f);
