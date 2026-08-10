var t = require("../../../../../../../../common/vendor.js"),
  e = {
    name: "WzqInfoModal",
    props: {
      skin: { type: String, default: "white" },
      config: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isMP: { type: Boolean, default: !1 },
      isLite: { type: Boolean, default: !1 },
    },
    methods: {
      contentTouchStart: function (t) {
        this.isMP || (this.startY = t.touches[0].pageY);
      },
      contentTouchMove: function (t) {
        if (!this.isMP) {
          var e = this.$refs.scrollView;
          if (!e) return;
          var n = e.offsetHeight,
            o = e.scrollHeight,
            i = e.scrollTop;
          o === n
            ? t.preventDefault()
            : 0 === i
            ? t.touches[0].pageY > this.startY && t.preventDefault()
            : Math.ceil(n + i) >= o &&
              t.touches[0].pageY < this.startY &&
              t.preventDefault();
        }
      },
      onConfirm: function () {
        this.$emit("confirm");
      },
      onClose: function () {
        this.$emit("close");
      },
    },
  },
  n = t._export_sfc(e, [
    [
      "render",
      function (e, n, o, i, c, r) {
        return t.e(
          { a: o.config.showTitle || o.config.title },
          o.config.showTitle || o.config.title
            ? { b: t.t(o.config.title || "提示信息") }
            : {},
          {
            c: t.f(o.config.content, function (e, n, o) {
              return t.e(
                { a: "title" === e.type },
                "title" === e.type ? { b: t.t(e.text), c: "title_" + n } : {},
                { d: "text" === e.type },
                "text" === e.type ? { e: t.t(e.text), f: "text_" + n } : {},
                { g: "subText" === e.type },
                "subText" === e.type
                  ? { h: t.t(e.text), i: "subText_" + n }
                  : {},
                { j: n }
              );
            }),
            d: t.o(function () {
              return (
                r.contentTouchStart && r.contentTouchStart.apply(r, arguments)
              );
            }, 4068),
            e: t.o(function () {
              return (
                r.contentTouchMove && r.contentTouchMove.apply(r, arguments)
              );
            }, 4069),
            f: o.config.confirmBtn,
          },
          o.config.confirmBtn
            ? {
                g: t.t(o.config.confirmBtn || "查看详情"),
                h: t.o(function () {
                  return r.onConfirm && r.onConfirm.apply(r, arguments);
                }, 4070),
              }
            : {},
          {
            i: t.t(o.config.cancelBtn || "我知道了"),
            j: t.o(function () {
              return r.onClose && r.onClose.apply(r, arguments);
            }, 4071),
            k: t.n(o.skin),
            l: t.n(o.isLite ? "lite" : ""),
            m: t.n(o.skin),
            n: t.o(function () {}, 4072),
          }
        );
      },
    ],
    ["__scopeId", "data-v-a87b39d8"],
  ]);
wx.createComponent(n);
