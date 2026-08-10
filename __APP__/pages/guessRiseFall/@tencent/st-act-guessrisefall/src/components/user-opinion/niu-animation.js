var e = require("../../../../../../../common/vendor.js"),
  t = {
    name: "OpinionNiuAnimation",
    props: {
      isTap: { type: Boolean, default: !1 },
      num: { type: Number, default: 0 },
      selected: { type: Boolean, default: !1 },
      defaultIcon: {
        type: String,
        default:
          "https://st.gtimg.com/design/f23a4e989d5cd0f810478782a5bfc946.png",
      },
      selectedIcon: {
        type: String,
        default:
          "https://st.gtimg.com/design/c1e6b21ad97eeeb7e64a3662d1dc7d3c.png",
      },
    },
    data: function () {
      return {
        fillId: "opinion-niu-gradient-".concat(
          Math.random().toString(36).slice(2)
        ),
        zooming: !1,
        offset: 0,
        interval: 500,
        animId: null,
        isTimerAnim: !1,
      };
    },
    computed: {
      fillSelector: function () {
        return "url(#".concat(this.fillId, ")");
      },
    },
    watch: {
      selected: function (e, t) {
        var n = this;
        e !== t &&
          ((this.zooming = !0),
          e
            ? this.tween(0, 1, this.interval, function (e) {
                n.offset = e;
              })
            : this.tween(1, 0, this.interval / 2, function (e) {
                n.offset = e;
              }));
      },
    },
    beforeDestroy: function () {
      this.cancelTween();
    },
    methods: {
      cancelTween: function () {
        this.animId &&
          (this.isTimerAnim
            ? clearTimeout(this.animId)
            : "function" == typeof cancelAnimationFrame &&
              cancelAnimationFrame(this.animId),
          (this.animId = null));
      },
      tween: function (e, t, n, i) {
        var a = this;
        this.cancelTween();
        var o = "function" == typeof requestAnimationFrame;
        this.isTimerAnim = !o;
        var c = o
            ? requestAnimationFrame
            : function (e) {
                return setTimeout(function () {
                  return e(Date.now());
                }, 16);
              },
          s = 0;
        this.animId = c(function o(r) {
          s || (s = r);
          var d = Math.min((r - s) / n, 1);
          i(e + (t - e) * d), (a.animId = d < 1 ? c(o) : null);
        });
      },
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, i, a, o, c) {
        return e.e(
          { a: !i.isTap },
          i.isTap ? {} : { b: i.selected ? i.selectedIcon : i.defaultIcon },
          { c: i.isTap },
          i.isTap ? { d: i.selected ? i.selectedIcon : i.defaultIcon } : {},
          {
            e: e.t(i.num || "很牛"),
            f: i.selected ? 1 : "",
            g: i.selected ? 1 : "",
            h: o.zooming ? 1 : "",
          }
        );
      },
    ],
    ["__scopeId", "data-v-c4bcbe0a"],
  ]);
wx.createComponent(n);
