var e = require("../../../@babel/runtime/helpers/defineProperty");
require("../../../app.js");
var t = require("../../../stores/app/useMode.js"),
  s = require("../../vendor.js"),
  r = require("../../../config/enum.js"),
  o = {
    props: {
      type: { type: String, default: "" },
      text: { type: [Number, String], default: "" },
      color: { type: String, default: "" },
      bottomLite: { type: Boolean, default: !1 },
      large: Boolean,
      loading: Boolean,
    },
    setup: function () {
      var e,
        r = t.useModeStore(),
        o = s.storeToRefs(r).simpleMode;
      return {
        action: null == (e = s.inject("trade", {})) ? void 0 : e.action,
        simpleMode: o,
      };
    },
    computed: {
      getClass: function () {
        var t,
          s,
          o = this.simpleMode
            ? (e((t = {}), r.ACTION.BUY, "st-key--red"),
              e(t, r.ACTION.SELL, "st-key--green"),
              e(t, r.ACTION.AFTER_BUY, "st-key--red"),
              e(t, r.ACTION.AFTER_SELL, "st-key--green"),
              t)
            : (e((s = {}), r.ACTION.BUY, "st-key--buy"),
              e(s, r.ACTION.SELL, "st-key--sell"),
              e(s, r.ACTION.AFTER_BUY, "st-key--buy"),
              e(s, r.ACTION.AFTER_SELL, "st-key--sell"),
              s);
        return [
          this.color ? "st-key--".concat(this.color) : "",
          this.large ? "st-key--large" : "",
          this.bottomLite ? "st-key--bottom-lite" : "",
          "delete" === this.type || "clear" === this.type
            ? "st-key--delete"
            : "",
          "switch-keyboard" === this.type ? "st-key--switch-keyboard" : "",
          o[this.action] || "",
        ];
      },
      isSimpleModeNumClass: function () {
        return [
          !this.simpleMode || ("." !== this.text && isNaN(Number(this.text)))
            ? ""
            : "st-key__num",
        ];
      },
    },
    methods: {
      handlePressKey: function (e, t) {
        this.$emit("press", e, t);
      },
    },
  },
  i = s._export_sfc(o, [
    [
      "render",
      function (e, t, r, o, i, l) {
        return s.e(
          { a: "delete" === r.type },
          "delete" === r.type
            ? s.e({ b: r.text }, r.text ? { c: s.t(r.text) } : {})
            : {},
          { d: "clear" === r.type },
          "clear" === r.type
            ? s.e({ e: r.text }, r.text ? { f: s.t(r.text) } : {})
            : "collapse" === r.type
            ? {}
            : { h: s.t(r.text), i: s.n(l.isSimpleModeNumClass) },
          {
            g: "collapse" === r.type,
            j: s.n(l.getClass),
            k: s.o(function (e) {
              return l.handlePressKey(r.text, r.type);
            }),
          }
        );
      },
    ],
  ]);
wx.createComponent(i);
