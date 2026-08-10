var t = require("../../../common/vendor.js"),
  e = {
    components: {},
    props: { editorPlaceholder: { type: String, default: "" } },
    data: function () {
      return {
        placeholder: "晒持仓，秀操作...",
        btnActive: !1,
        replyText: "",
        focus: !1,
        textareaHeight: "100%",
      };
    },
    mounted: function () {
      var t = this;
      setTimeout(function () {
        t.autoFocus();
      }, 200);
    },
    methods: {
      onTouchMove: function (t) {
        t && t.preventDefault(), this.bindblur();
      },
      calcInputContentHeight: function (e) {
        var n = this;
        if (this.cacheInputContentHeight)
          this.textareaHeight = this.cacheInputContentHeight - e + "px";
        else {
          var i = t.wx$1.createSelectorQuery().in(this);
          i.select(".full-editor-main").boundingClientRect(),
            i.select(".top-operate").boundingClientRect(),
            i.exec(function (i) {
              var o = i[0].height,
                c = i[1].height,
                r = "ios" === t.wx$1.getSystemInfoSync().platform ? 16 : 24;
              (n.cacheInputContentHeight = o - c - r),
                (n.textareaHeight = n.cacheInputContentHeight - e + "px");
            });
        }
      },
      delayCalcInputContentHeight: function (t) {
        var e = this;
        (this.keyboardHeight = t),
          this.isCalc ||
            ((this.isCalc = !0),
            setTimeout(function () {
              e.isCalc && e.calcInputContentHeight(e.keyboardHeight),
                (e.isCalc = !1);
            }, 200));
      },
      keyboardheightchange: function (t) {
        var e = t.detail.height;
        e
          ? this.delayCalcInputContentHeight(e)
          : ((this.textareaHeight = "100%"), (this.isCalc = !1));
      },
      bindblur: function () {
        var t;
        null == (t = this.$refs.myTextarea) || t.blur();
      },
      topSubmit: function () {
        this.$emit("commitComment", this.replyText);
      },
      bindfocus: function () {
        var t;
        null == (t = this.$refs.myTextarea) || t.focus(),
          this.$emit("editorFocus");
      },
      bindinput: function (t) {
        var e = t.detail.value;
        (this.btnActive = e.trim().length > 0), (this.replyText = e);
      },
      autoFocus: function () {
        var t, e;
        null == (t = this.$refs.myTextarea) || t.focus(),
          (this.focus = !0),
          this.$emit("editorFocus");
        var n = this.replyText.length + 1;
        null == (e = this.$refs.myTextarea) || e.setSelectionRange(n, n);
      },
      onClick: function (t) {
        t.stopPropagation();
      },
      closeEditor: function () {
        this.$emit("closeEditor");
      },
    },
  },
  n = t._export_sfc(e, [
    [
      "render",
      function (e, n, i, o, c, r) {
        return {
          a: t.o(function () {
            return r.closeEditor && r.closeEditor.apply(r, arguments);
          }, 1646),
          b: t.n(c.btnActive ? "active" : ""),
          c: t.o(function () {
            return r.topSubmit && r.topSubmit.apply(r, arguments);
          }, 1647),
          d: c.textareaHeight,
          e: c.replyText,
          f: c.focus,
          g: i.editorPlaceholder || c.placeholder,
          h: t.o(function () {
            return r.bindfocus && r.bindfocus.apply(r, arguments);
          }, 1648),
          i: t.o(function () {
            return r.bindblur && r.bindblur.apply(r, arguments);
          }, 1649),
          j: t.o(function () {
            return r.bindinput && r.bindinput.apply(r, arguments);
          }, 1650),
          k: t.o(function () {
            return (
              r.keyboardheightchange &&
              r.keyboardheightchange.apply(r, arguments)
            );
          }, 1651),
          l: t.o(function () {
            return r.onTouchMove && r.onTouchMove.apply(r, arguments);
          }, 1652),
          m: t.o(function () {
            return r.onClick && r.onClick.apply(r, arguments);
          }, 1653),
        };
      },
    ],
    ["__scopeId", "data-v-662bdf7c"],
  ]);
wx.createComponent(n);
