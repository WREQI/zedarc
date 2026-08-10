require("../../../app.js");
var t = require("../../../common/vendor.js"),
  e = {
    options: { styleIsolation: "apply-shared" },
    props: {
      text: { type: String, default: "" },
      playing: { type: Boolean, default: !1 },
      duration: { type: Number, default: 1e4 },
      isMPforH5: { type: Boolean, required: !0 },
      highlightAnswer: { type: Boolean, default: !0 },
    },
    setup: function () {
      return { timeout: t.ref(null) };
    },
    computed: {
      words: function () {
        return this.text.split("");
      },
    },
    watch: {
      playing: {
        handler: function (t) {
          var e = this;
          this.timeout && clearTimeout(this.timeout),
            t &&
              (this.timeout = setTimeout(function () {
                e.$emit("played");
              }, this.duration));
        },
        immediate: !0,
      },
    },
    unmounted: function () {
      clearTimeout(this.timeout);
    },
  },
  i = t._export_sfc(e, [
    [
      "render",
      function (e, i, o, n, r, u) {
        return {
          a: t.f(u.words, function (e, i, n) {
            return t.e(
              o.isMPforH5
                ? {
                    a: t.t(e),
                    b: t.n(
                      o.highlightAnswer &&
                        o.playing &&
                        u.words.length < 30 &&
                        ("不" === e || "是" === e)
                        ? "primary-color"
                        : ""
                    ),
                  }
                : { c: t.t(e) },
              { d: i }
            );
          }),
          b: o.isMPforH5,
          c: t.n(o.playing ? "active" : "deactive"),
          d: t.n(o.isMPforH5 ? "mp-for-h5" : ""),
        };
      },
    ],
    ["__scopeId", "data-v-a5f0609b"],
  ]);
wx.createComponent(i);
