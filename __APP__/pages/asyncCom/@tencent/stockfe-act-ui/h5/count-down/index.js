var e = require("../../../../../../common/vendor.js"),
  t = {
    name: "yy-count-down",
    props: {
      logo: {
        type: String,
        required: !1,
        default: "https://wzq.gtimg.com/image/activity/icon-count.png",
      },
      duration: { type: Number, required: !0, default: 8 },
      paused: { type: Boolean, required: !1, default: !1 },
    },
    data: function () {
      return { remaining: +this.duration, timer: null };
    },
    watch: {
      paused: function (e) {
        e ? this.pause() : this.resume();
      },
    },
    mounted: function () {
      this.paused || this.resume();
    },
    methods: {
      pause: function () {
        this.timer && (clearInterval(this.timer), (this.timer = null));
      },
      resume: function () {
        var e = this;
        this.timer = setInterval(function () {
          if (1 === e.remaining)
            return e.$emit("timeend"), void clearInterval(e.timer);
          e.$emit("remain", e.remaining), (e.remaining = e.remaining - 1);
        }, 1e3);
      },
      handleClick: function () {
        this.$emit("clik");
      },
    },
    destroyed: function () {
      this.timer && clearInterval(this.timer);
    },
  },
  i = e._export_sfc(t, [
    [
      "render",
      function (t, i, n, r, a, u) {
        return {
          a: n.logo,
          b: "".concat(n.duration, "s"),
          c: n.paused ? "paused" : "running",
          d: e.r("slot-text", { remaining: a.remaining }),
          e: e.o(function () {
            return u.handleClick && u.handleClick.apply(u, arguments);
          }, 3244),
        };
      },
    ],
  ]);
wx.createComponent(i);
