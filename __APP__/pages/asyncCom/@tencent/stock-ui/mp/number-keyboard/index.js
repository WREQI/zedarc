var e = require("../../../../../../common/vendor.js"),
  t = {
    name: "st-number-keyboard",
    components: {
      Key: function () {
        return "./key.js";
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
      stepper: { type: Boolean, default: !1 },
      simpleMode: Boolean,
    },
    data: function () {
      return { ispc: !1 };
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
          : "save" === this.confirmType
          ? "保存"
          : "";
      },
    },
    mounted: function () {},
    beforeDestroy: function () {},
    methods: {
      handlePressKey: function (e) {
        "" !== e &&
          ("delete" === e ? this.$emit("delete") : this.$emit("input", e));
      },
      handlePress: function (e, t) {
        if ("delete" === t) this.$emit("delete");
        else if ("clear" === t) this.$emit("clear");
        else if ("close" === t || "collapse" === t || "done" === t)
          this.handleClose();
        else if ("next" === t) this.$emit("next");
        else if ("buy" === t) this.handleClose(), this.$emit("buy");
        else if ("sell" === t) this.handleClose(), this.$emit("sell");
        else if ("save" === t) this.handleClose(), this.$emit("save");
        else {
          if ("" === e) return;
          this.$emit("input", e);
        }
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
          ((t >= 0 && t <= 9) || "." === t
            ? this.handlePressKey(t)
            : "Backspace" === t && this.handlePressKey("delete"));
      },
      handleMinus: function () {
        this.$emit("minus");
      },
      handlePlus: function () {
        this.$emit("plus");
      },
    },
  };
Array || e.resolveComponent("Key")();
var n = e._export_sfc(t, [
  [
    "render",
    function (t, n, s, o, l, i) {
      return e.e(
        { a: s.title || s.closeButton || s.closeDone },
        s.title || s.closeButton || s.closeDone
          ? e.e(
              { b: s.closeButton },
              s.closeButton
                ? {
                    c: e.o(function () {
                      return i.handleClose && i.handleClose.apply(i, arguments);
                    }, 4205),
                  }
                : {},
              { d: e.t(s.title), e: s.closeDone },
              s.closeDone
                ? {
                    f: e.o(function () {
                      return i.handleClose && i.handleClose.apply(i, arguments);
                    }, 4206),
                  }
                : {}
            )
          : {},
        { g: "custom" !== s.theme },
        "custom" !== s.theme
          ? {
              h: e.f(i.keys, function (t, n, s) {
                return e.e(
                  l.ispc
                    ? {
                        g: e.t(t.text),
                        h: e.n(
                          t.type && t.type.includes("delete")
                            ? "st-number-key--delete"
                            : ""
                        ),
                        i: e.n(
                          t.type && t.type.includes("gray")
                            ? "st-number-key--gray ^st-number-key--gray"
                            : ""
                        ),
                        j: e.o(
                          function (e) {
                            return i.handlePressKey(t.text);
                          },
                          4210,
                          t.text
                        ),
                      }
                    : {
                        a: e.t(t.text),
                        b: e.n(
                          t.type && t.type.includes("delete")
                            ? "st-number-key--delete"
                            : ""
                        ),
                        c: e.n(
                          t.type && t.type.includes("gray")
                            ? "st-number-key--gray ^st-number-key--gray"
                            : ""
                        ),
                        d: e.o(function () {}, 4207, t.text),
                        e: e.o(
                          function (e) {
                            return i.ontouchstart(e, t.text);
                          },
                          4208,
                          t.text
                        ),
                        f: e.o(
                          function (e) {
                            return i.ontouchend(e, t.text);
                          },
                          4209,
                          t.text
                        ),
                      },
                  { k: t.text }
                );
              }),
              i: !l.ispc,
            }
          : {
              j: e.f(i.keys, function (t, n, s) {
                return {
                  a: t.text,
                  b: e.o(i.handlePress, 4211, t.text),
                  c: "05a74a28-0-" + s,
                  d: e.p({ text: t.text, type: t.type, color: t.color }),
                };
              }),
            },
        { k: "custom" == s.theme },
        "custom" == s.theme
          ? e.e(
              {
                l: e.o(i.handlePress, 4212),
                m: e.p({ type: "delete" }),
                n: e.o(i.handlePress, 4213),
                o: e.p({ type: "clear", text: "清空" }),
                p: s.stepper,
              },
              s.stepper
                ? {
                    q: e.o(i.handleMinus, 4214),
                    r: e.p({ small: !0, type: "minus" }),
                    s: e.o(i.handlePlus, 4215),
                    t: e.p({ small: !0, type: "plus" }),
                  }
                : {},
              {
                v: e.o(i.handlePress, 4216),
                w: e.p({
                  large: !s.stepper,
                  color: "blue",
                  "simple-mode": s.simpleMode,
                  type: s.confirmType,
                  text: i.confirmTypeText,
                }),
              }
            )
          : {},
        {
          x: e.n("custom" == s.theme ? "st-number-keyboard__custom" : ""),
          y: e.o(function () {}, 4217),
          z: s.show,
          A: e.n(s.embedded ? "st-number-keyboard--embedded" : ""),
        }
      );
    },
  ],
]);
wx.createComponent(n);
