var t = require("../../../common/vendor.js"),
  e = {
    name: "Editor",
    components: {
      mainElement: function () {
        return "./mainElement.js";
      },
    },
    props: {
      showEditor: {
        type: Boolean,
        default: function () {
          return !1;
        },
      },
      editorPlaceholder: { type: String, default: "" },
    },
    data: function () {
      return { editorAnimClass: "", canShow: !1, triggerBlur: !1 };
    },
    computed: {
      fullScreenStyle: function () {
        var e =
            (t.wx$1.getWindowInfo && t.wx$1.getWindowInfo()) ||
            t.wx$1.getSystemInfoSync(),
          o = e.screenHeight,
          n = void 0 === o ? 0 : o,
          i = e.screenWidth;
        return n / (void 0 === i ? 0 : i) < 2;
      },
      topPosition: function () {
        return this.fullScreenStyle
          ? 0
          : t.wx$1.getSystemInfoSync().screenWidth / 1.78;
      },
      paddingTop: function () {
        return this.fullScreenStyle ? 60 : 0;
      },
    },
    methods: {
      closeKeyboard: function () {
        this.triggerBlur ? this.closeEditor() : (this.triggerBlur = !0);
      },
      hasSlideIn: function () {
        return (
          "fade-enter-active" === this.editorAnimClass &&
          this.canShow &&
          this.showEditor
        );
      },
      slideIn: function () {
        var t = this;
        (this.canShow = !1),
          (this.editorAnimClass = "fade-enter-active"),
          this.$nextTick(function () {
            t.canShow = !0;
          });
      },
      closeEditor: function () {
        var t = this;
        (this.editorAnimClass = "fade-leave-active"),
          setTimeout(function () {
            (t.canShow = !1), t.$emit("closeEditor");
          }, 400);
      },
      editorFocus: function () {
        this.triggerBlur = !1;
      },
      commitComment: function (t) {
        this.closeEditor(), this.$emit("commitComment", t);
      },
    },
  };
Array || t.resolveComponent("main-element")();
var o = t._export_sfc(e, [
  [
    "render",
    function (e, o, n, i, r, s) {
      return t.e(
        { a: n.showEditor && r.canShow },
        n.showEditor && r.canShow
          ? {
              b: t.o(function () {
                return s.closeEditor && s.closeEditor.apply(s, arguments);
              }, 703),
              c: t.o(s.closeEditor, 704),
              d: t.o(s.commitComment, 705),
              e: t.o(s.editorFocus, 706),
              f: t.p({ "editor-placeholder": n.editorPlaceholder }),
              g: t.n(r.editorAnimClass),
              h: s.topPosition + "px",
              i: s.paddingTop + "px",
              j: t.o(function () {
                return s.closeKeyboard && s.closeKeyboard.apply(s, arguments);
              }, 707),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-8638400b"],
]);
wx.createComponent(o);
