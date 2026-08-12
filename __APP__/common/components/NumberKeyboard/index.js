require("../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../app.js");
var e = require("../../../utils/getPlatform.js"),
  t = require("../../vendor.js"),
  n = {
    name: "StNumberKeyboard",
    components: {
      Key: function () {
        return "./Key.js";
      },
    },
    props: {
      show: Boolean,
      title: { type: String, default: "" },
      closeButton: Boolean,
      closeDone: Boolean,
      extraKey: { type: String, default: "" },
      transition: { type: Boolean, default: !0 },
      hideOnClickOutside: { type: Boolean, default: !0 },
      theme: { type: String, default: "default" },
      embedded: { type: Boolean, default: !1 },
      confirmType: { type: String, default: "done" },
      listenKeydown: { type: Boolean, default: !0 },
    },
    data: function () {
      var n = !1,
        s = e.getPlatform(),
        o = s.isZxg,
        i = s.platform,
        r = s.platformVer;
      return (
        s.isPCWeixin && (n = !0),
        o && "ios" !== i && t.lte(r, "6.0.0") && (n = !0),
        "ios" === i && t.gte(r, "13.4.0") && t.lt(r, "13.5.0") && (n = !0),
        { ispc: n, isListenerAdd: !1 }
      );
    },
    computed: {
      keys: function () {
        for (var e = [], t = 1; t <= 9; t++) e.push({ text: t });
        return (
          "custom" === this.theme
            ? e.push(
                { text: "collapse", type: "collapse" },
                { text: 0 },
                { text: this.extraKey }
              )
            : "complex-password" === this.theme
            ? e.push(
                { text: "ABC", type: "switch-keyboard" },
                { text: 0 },
                { text: "符号", type: "switch-keyboard" }
              )
            : e.push(
                { text: this.extraKey, type: ["gray"] },
                { text: 0 },
                { text: "delete", type: ["gray", "delete"] }
              ),
          e
        );
      },
      confirmTypeText: function () {
        return "done" === this.confirmType
          ? "确定"
          : "next" === this.confirmType
          ? "下一项"
          : "buy" === this.confirmType
          ? "买入"
          : "sell" === this.confirmType
          ? "卖出"
          : "confirm" === this.confirmType
          ? "确认"
          : "";
      },
      themeClass: function () {
        return "custom" === this.theme
          ? "st-number-keyboard__custom"
          : "complex-password" === this.theme
          ? "st-number-keyboard__complex-password"
          : "";
      },
      showSidebar: function () {
        return ["custom", "complex-password"].includes(this.theme);
      },
    },
    activated: function () {
      this.addListener();
    },
    deactivated: function () {
      this.removeListener();
    },
    mounted: function () {
      this.addListener();
    },
    beforeUnmount: function () {
      this.removeListener();
    },
    methods: {
      handlePressKey: function (e) {
        "" !== e &&
          ("delete" === e ? this.$emit("delete") : this.$emit("input", e));
      },
      handlePress: function (e, t) {
        var n = !1;
        if ("delete" === t) this.$emit("delete"), (n = !0);
        else if ("clear" === t) this.$emit("clear"), (n = !0);
        else if ("close" === t || "collapse" === t || "done" === t)
          this.handleClose(), (n = !0);
        else if ("next" === t) this.$emit("next"), (n = !0);
        else if ("buy" === t) this.handleClose(), this.$emit("buy"), (n = !1);
        else if ("sell" === t) this.handleClose(), this.$emit("sell"), (n = !1);
        else if ("confirm" === t) this.$emit("confirm"), (n = !0);
        else if ("switch-keyboard" === t)
          this.$emit("switch-keyboard", e), (n = !0);
        else {
          if ("" === e) return;
          this.$emit("input", e);
        }
        n &&
          this.$stat.click("trade.number-keyboard.press", void 0, void 0, {
            key: t || e,
          });
      },
      handleClose: function () {
        this.$emit("close");
      },
      ontouchstart: function (e, t) {
        var n = e.touches[0];
        (this.startX = n.clientX),
          (this.startY = n.clientY),
          (this.sTime = +new Date());
      },
      ontouchend: function (e, t) {
        var n = e.changedTouches[0];
        (this.endX = n.clientX),
          (this.endY = n.clientY),
          this.handlePressKey(t);
      },
      listener: function (e) {
        var t = e.key;
        this.show &&
          " " !== t &&
          ((t >= 0 && t <= 9) || "." === t
            ? this.handlePressKey(t)
            : "Backspace" === t && this.handlePressKey("delete"));
      },
      addListener: function () {},
      removeListener: function () {},
    },
  };
Array || t.resolveComponent("Key")();
var s = t._export_sfc(n, [
  [
    "render",
    function (e, n, s, o, i, r) {
      return t.e(
        { a: s.title || s.closeButton || s.closeDone },
        s.title || s.closeButton || s.closeDone
          ? t.e(
              { b: s.closeButton },
              s.closeButton
                ? {
                    c: t.o(function () {
                      return r.handleClose && r.handleClose.apply(r, arguments);
                    }),
                  }
                : {},
              { d: t.t(s.title), e: s.closeDone },
              s.closeDone
                ? {
                    f: t.o(function () {
                      return r.handleClose && r.handleClose.apply(r, arguments);
                    }),
                  }
                : {}
            )
          : {},
        { g: !s.theme || "default" === s.theme },
        s.theme && "default" !== s.theme
          ? {
              j: t.f(r.keys, function (e, n, s) {
                return {
                  a: e.text,
                  b: t.o(r.handlePress, e.text),
                  c: "40efdf50-0-" + s,
                  d: t.p({ text: e.text, type: e.type, color: e.color }),
                };
              }),
            }
          : {
              h: t.f(r.keys, function (e, n, s) {
                return t.e(
                  i.ispc
                    ? {
                        g: t.t(e.text),
                        h: t.n(
                          e.type && e.type.includes("delete")
                            ? "st-number-key--delete"
                            : ""
                        ),
                        i: t.n(
                          e.type && e.type.includes("gray")
                            ? "st-number-key--gray ^st-number-key--gray"
                            : ""
                        ),
                        j: t.o(function (t) {
                          return r.handlePressKey(e.text);
                        }, e.text),
                      }
                    : {
                        a: t.t(e.text),
                        b: t.n(
                          e.type && e.type.includes("delete")
                            ? "st-number-key--delete"
                            : ""
                        ),
                        c: t.n(
                          e.type && e.type.includes("gray")
                            ? "st-number-key--gray ^st-number-key--gray"
                            : ""
                        ),
                        d: t.o(function () {}, e.text),
                        e: t.o(function (t) {
                          return r.ontouchstart(t, e.text);
                        }, e.text),
                        f: t.o(function (t) {
                          return r.ontouchend(t, e.text);
                        }, e.text),
                      },
                  { k: e.text }
                );
              }),
              i: !i.ispc,
            },
        { k: r.showSidebar },
        r.showSidebar
          ? {
              l: t.o(r.handlePress),
              m: t.p({ type: "delete" }),
              n: t.o(r.handlePress),
              o: t.p({ type: "clear", text: "清空" }),
              p: t.o(r.handlePress),
              q: t.p({
                large: !0,
                color: "blue",
                "bottom-lite": "complex-password" === s.theme,
                type: s.confirmType,
                text: r.confirmTypeText,
              }),
            }
          : {},
        {
          r: t.n(r.themeClass),
          s: t.o(function () {}),
          t: s.show,
          v: t.n(s.embedded ? "st-number-keyboard--embedded" : ""),
        }
      );
    },
  ],
]);
wx.createComponent(s);
