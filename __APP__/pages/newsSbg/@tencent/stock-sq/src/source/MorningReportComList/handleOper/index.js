var e = require("../../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
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
        c = e(r(i));
      try {
        for (c.s(); !(u = c.n()).done; ) {
          n = u.value;
          o.call(i, n) && s(t, n, i[n]);
        }
      } catch (e) {
        c.e(e);
      } finally {
        c.f();
      }
    }
    return t;
  },
  c = require("../../../../../stock-community-base/utils/knife.js"),
  m = require("../../../../../stock-community-base/utils/mixins/checkComStatus.js"),
  l = require("../../../../../../../../common/vendor.js"),
  h = {
    components: {},
    mixins: [m.CheckStatusMixin],
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
            ? "zxg" === c.platform
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
        return c.formatView(e);
      },
      onHandleOper: function (e) {
        var t,
          r,
          a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.checkSubjectStatus(this.itemData) &&
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
  p = l._export_sfc(h, [
    [
      "render",
      function (e, t, i, n, r, a) {
        return l.e(
          { a: i.itemBottomHandle.length },
          i.itemBottomHandle.length
            ? l.e(
                {
                  b:
                    0 !== i.itemData.allow_like &&
                    -1 !== i.itemBottomHandle.indexOf("like"),
                },
                0 !== i.itemData.allow_like &&
                  -1 !== i.itemBottomHandle.indexOf("like")
                  ? l.e({ c: !!i.itemData.like_id }, (i.itemData.like_id, {}), {
                      d: l.t(parseInt(i.itemData.like_num, 10) || ""),
                      e: i.itemData.like_id ? 1 : "",
                      f: l.o(function (e) {
                        return a.onHandleOper("putLike");
                      }, 4563),
                    })
                  : {},
                { g: l.n(a.operAreaClass) }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-c056d3a7"],
  ]);
wx.createComponent(p);
