var e = require("../../../../../../common/vendor.js"),
  t = {
    props: {
      type: { type: String, default: "" },
      text: { type: [Number, String], default: "" },
      color: { type: String, default: "" },
      large: Boolean,
      loading: Boolean,
      simpleMode: Boolean,
    },
    computed: {
      getClass: function () {
        return [
          this.color ? "st-key--".concat(this.color) : "",
          this.large ? "st-key--large" : "",
          this.active ? "st-key--active" : "",
          "delete" === this.type || "clear" === this.type
            ? "st-key--delete"
            : "",
          this.simpleMode ? "st-key--red" : "",
        ];
      },
    },
    methods: {
      handlePressKey: function (e, t) {
        this.$emit("press", e, t);
      },
    },
  },
  s = e._export_sfc(t, [
    [
      "render",
      function (t, s, l, r, o, n) {
        return e.e(
          { a: "delete" === l.type },
          "delete" === l.type
            ? e.e({ b: l.text }, l.text ? { c: e.t(l.text) } : {})
            : {},
          { d: "clear" === l.type },
          "clear" === l.type
            ? e.e({ e: l.text }, l.text ? { f: e.t(l.text) } : {})
            : "collapse" === l.type || "minus" === l.type || "plus" === l.type
            ? {}
            : { j: e.t(l.text) },
          {
            g: "collapse" === l.type,
            h: "minus" === l.type,
            i: "plus" === l.type,
            k: e.n(n.getClass),
            l: e.o(function (e) {
              return n.handlePressKey(l.text, l.type);
            }, 4887),
          }
        );
      },
    ],
  ]);
wx.createComponent(s);
