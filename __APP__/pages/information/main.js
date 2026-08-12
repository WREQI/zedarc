var e = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  o = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  c = function (e, o, n) {
    return o in e
      ? t(e, o, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[o] = n);
  },
  s = function (t, o) {
    for (var n in o || (o = {})) r.call(o, n) && c(t, n, o[n]);
    if (i) {
      var s,
        l = e(i(o));
      try {
        for (l.s(); !(s = l.n()).done; ) {
          n = s.value;
          a.call(o, n) && c(t, n, o[n]);
        }
      } catch (e) {
        l.e(e);
      } finally {
        l.f();
      }
    }
    return t;
  },
  l = require("../../common/vendor.js"),
  u = require("../../utils/mixins/privacy.js"),
  m = require("@tencent/stock-halfscreen-editor/hooks/outter/useHalfEditor.js"),
  f = {
    components: {
      information: {
        methods: {
          onMpPageShow: function () {},
          onMpPageHide: function () {},
        },
      },
      CommentPanel: function () {
        return "./@tencent/stock-information-page/components/commentPanel.js";
      },
      PrivacyPolicyModal: function () {
        return "../indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyPolicyModal.js";
      },
      HalfEditor: function () {
        return "../halfScreenEditor/@tencent/stock-halfscreen-editor/components/halfscreen-editor.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWhhbGZzY3JlZW4tZWRpdG9yL2NvbXBvbmVudHMvaGFsZnNjcmVlbi1lZGl0b3IudnVl;
          }
        );
      },
    },
    mixins: [u.privacy],
    provide: function () {
      var e, t, o, n, i, r;
      return {
        newScene:
          +(
            (null ==
            (o =
              null ==
              (t = null == (e = l.wx$1) ? void 0 : e.getEnterOptionsSync)
                ? void 0
                : t.call(e))
              ? void 0
              : o.scene) ||
            (null ==
            (r =
              null ==
              (i = null == (n = l.wx$1) ? void 0 : n.getLaunchOptionsSync)
                ? void 0
                : i.call(n))
              ? void 0
              : r.scene) ||
            ""
          ) || 0,
      };
    },
    props: {
      tabIndex: { type: Number, default: 0 },
      userinfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      fromBrief: { type: Boolean, default: !1 },
      mpRealTopBarHeight: { type: Number, default: 0 },
      topBarHeight: { type: Number, default: 0 },
      scrollHeight: { type: Number, default: 0 },
      isPageShow: { type: Boolean, default: !1 },
    },
    setup: function (e, t) {
      var o = l.getCurrentInstance().proxy || l.getCurrentInstance(),
        n = "information",
        i = m.useHalfEditor(o, e, t, n, {
          postSuccessFunc: function (e) {
            o.$refs.commentPanel && o.$refs.commentPanel.updateComList(e);
          },
        });
      return s({ pageType: n }, i);
    },
    onPageShow: function () {
      this.skin = l.wx$1.getStorageSync("user/skin") || "white";
    },
    data: function () {
      return {
        currentVideo: null,
        isShowComment: !1,
        skin: l.wx$1.getStorageSync("user/skin") || "white",
      };
    },
    computed: {
      containerStyle: function () {
        return "top: "
          .concat(this.topBarHeight, "px; width: 100%; height: ")
          .concat(this.scrollHeight, "px;");
      },
    },
    methods: {
      makeUrl: function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          o = Object.keys(t);
        return o.length > 0
          ? "".concat(e, "?").concat(
              o
                .map(function (e) {
                  return "".concat(e, "=").concat(decodeURIComponent(t[e]));
                })
                .join("&")
            )
          : e;
      },
      pageInit: function () {
        this.$emit("pageInit");
      },
      videoShareClick: function (e) {
        this.$emit("videoShareClick", e);
      },
      videoCommentClick: function (e) {
        var t = e.currentVideo,
          o = e.isShowComment;
        (this.currentVideo = t), (this.isShowComment = o);
      },
      handleCloseComment: function () {
        this.isShowComment = !1;
      },
      updateComCount: function (e) {
        this.$refs.information && this.$refs.information.updateComCount(e);
      },
      onPutComment: function (e) {
        var t;
        this.openEditor(((t = s({}, e)), o(t, n({ type: "detail" }))));
      },
      goEdit: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = this.makeUrl("/pages/comment/edit/edit", e);
        l.wx$1.navigateTo({ url: t });
      },
      onMpReachBottom: function () {
        this.$refs.information && this.$refs.information.onMpReachBottom();
      },
      onMpScroll: function (e) {
        this.$emit("onMpScroll", e);
      },
      onMpPageShow: function () {
        this.$refs.information && this.$refs.information.onMpPageShow(),
          this.onShowHalfEditor(this);
      },
      onMpPageHide: function () {
        this.$refs.information && this.$refs.information.onMpPageHide(),
          this.onHideHalfEditor(this);
      },
      gotoColumnEditPage: function () {
        l.wx$1.navigateTo({ url: "/pages/information/NewsColumnEdit" });
      },
      getLogin: function (e) {
        e(l.login.isLogin());
      },
    },
  };
Array ||
  (
    l.resolveComponent("information") +
    l.resolveComponent("CommentPanel") +
    l.resolveComponent("HalfEditor") +
    l.resolveComponent("PrivacyPolicyModal")
  )();
var p = l._export_sfc(f, [
  [
    "render",
    function (e, t, o, n, i, r) {
      return l.e(
        { a: o.topBarHeight > 0 },
        o.topBarHeight > 0
          ? {
              b: l.sr("information", "0a24f597-0"),
              c: l.o(r.goEdit, 431),
              d: l.o(r.onPutComment, 432),
              e: l.o(r.videoShareClick, 433),
              f: l.o(r.videoCommentClick, 434),
              g: l.o(r.onMpScroll, 435),
              h: l.o(r.pageInit, 436),
              i: l.o(r.gotoColumnEditPage, 437),
              j: l.o(r.getLogin, 438),
              k: l.p({
                "tab-index": o.tabIndex,
                "user-info": o.userinfo,
                "from-brief": o.fromBrief,
                "mp-top-bar-height":
                  0 === o.mpRealTopBarHeight
                    ? o.topBarHeight
                    : o.mpRealTopBarHeight,
                "scroll-height": o.scrollHeight,
                "is-page-show": o.isPageShow,
                theme: i.skin,
              }),
              l: l.s(r.containerStyle),
            }
          : {},
        { m: i.currentVideo && i.isShowComment },
        i.currentVideo && i.isShowComment
          ? {
              n: l.sr("commentPanel", "0a24f597-1"),
              o: l.o(r.handleCloseComment, 439),
              p: l.o(r.updateComCount, 440),
              q: l.o(r.goEdit, 441),
              r: l.o(r.onPutComment, 442),
              s: l.p({
                "item-data": i.currentVideo,
                "is-show-comment": i.isShowComment,
                "report-prefix": "information.video.tab",
                "user-info": o.userinfo,
              }),
            }
          : {},
        { t: e.isShowHalfEditor },
        e.isShowHalfEditor
          ? {
              v: l.sr("halfEditor", "0a24f597-2"),
              w: l.o(e.hideHalfEditor, 443),
              x: l.p({ "query-editor": e.queryHalfEditor }),
            }
          : {},
        {
          y: l.o(function (t) {
            return (e.showPrivacyPolicy = t);
          }, 444),
          z: l.p({ value: e.showPrivacyPolicy }),
        }
      );
    },
  ],
]);
wx.createComponent(p);
