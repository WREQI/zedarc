var t = require("../../../../../common/vendor.js"),
  e = {
    props: ["start", "end", "delta", "count"],
    data: function () {
      return { counter: { day: "--", hour: "--", minute: "--", second: "--" } };
    },
    created: function () {
      var t = this;
      !1 !== this.count &&
        (this.timer = setInterval(function () {
          t.countdown();
        }, 1e3)),
        this.countdown();
    },
    destroyed: function () {
      this.timer && clearInterval(this.timer);
    },
    updated: function () {},
    methods: {
      countdown: function () {
        var t = this.start,
          e = this.end,
          n = this.delta,
          r = void 0 === n ? 0 : n;
        e || (e = Date.now());
        var o = Math.abs(t - e + r) / 1e3,
          a = parseInt(o / 86400),
          c = parseInt(o / 3600),
          d = parseInt((o / 60) % 60),
          u = parseInt(o % 60);
        a > 0 && (c %= 24),
          (this.counter = {
            day: this.padZero(a),
            hour: this.padZero(c),
            minute: this.padZero(d),
            second: this.padZero(u),
          }),
          t < e && 0 == o && clearInterval(this.timer);
      },
      padZero: function (t) {
        return t < 10 ? "0".concat(t) : t;
      },
    },
  },
  n = t._export_sfc(e, [
    [
      "render",
      function (e, n, r, o, a, c) {
        return t.e(
          { a: a.counter.day > 0 },
          a.counter.day > 0 ? { b: t.t(a.counter.day) } : {},
          {
            c: t.t(a.counter.hour),
            d: t.t(a.counter.minute),
            e: a.counter.day <= 0,
          },
          a.counter.day <= 0 ? { f: t.t(a.counter.second) } : {}
        );
      },
    ],
    ["__scopeId", "data-v-cf9cd42a"],
  ]);
wx.createComponent(n);
