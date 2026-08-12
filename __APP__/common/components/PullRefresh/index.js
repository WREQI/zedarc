var t = require("../../../@babel/runtime/helpers/slicedToArray");
require("../../../app.js");
var i,
  s = require("../mixins/touch.js"),
  e = require("../../../utils/dom.js"),
  n = require("../../../stores/app/useMode.js"),
  o = require("../../vendor.js"),
  u = {
    name: "StPullRefresh",
    expose: ["stopPullDownRefresh"],
    components: {},
    mixins: [s.TouchMixin],
    props: {
      disabled: Boolean,
      successText: { type: String, default: "最后刷新" },
      pullingText: { type: String, default: "最后刷新" },
      loosingText: { type: String, default: "继续下拉查看更多" },
      loadingText: { type: String, default: "正在刷新" },
      successDuration: { type: Number, default: 500 },
      transitionDuration: { type: Number, default: 800 },
      pullDownAreaHeight: { type: Number, default: 70 },
      classPrefix: { type: String, default: "st-icon" },
    },
    setup: function () {
      return { simpleMode: o.storeToRefs(n.useModeStore()).simpleMode };
    },
    data: function () {
      return {
        status: "initial",
        width: 0,
        height: 0,
        duration: 0,
        latestUpdatedTime: Date.now(),
        isInIframe: null == window ? void 0 : window.__isInIframe,
      };
    },
    computed: {
      untouchable: function () {
        return (
          "loading" === this.status ||
          "success" === this.status ||
          this.disabled
        );
      },
      style: function () {
        return {
          "transition-timing-function": "cubic-bezier(0.165, 0.84, 0.44, 1)",
          "transition-duration": "".concat(this.duration, "ms"),
          transform: this.height
            ? "translate3d(0,".concat(this.height, "px, 0)")
            : "",
        };
      },
      statusText: function () {
        var i = this.status;
        "initial" === i && (i = "success");
        var s = this["".concat(i, "Text")] || "";
        if ("loosing" !== i) {
          var e = new Date(this.latestUpdatedTime).toTimeString().split(" "),
            n = t(e, 1)[0];
          s += " ".concat(n);
        }
        return s;
      },
    },
    mounted: function () {
      (this.scrollEl = e.getScrollEventTarget(this.$el)),
        (null == window ? void 0 : window.__POWERED_BY_WUJIE__) &&
          this.scrollEl === window &&
          (this.scrollEl = window.parent);
    },
    methods: {
      onTouchStart: function (t) {
        !this.untouchable &&
          this.getCeiling() &&
          ((this.duration = 0), this.touchStart(t));
      },
      onTouchMove: function (t) {
        var s = this;
        this.untouchable ||
          (i && clearTimeout(i),
          this.isInIframe &&
            (i = setTimeout(function () {
              s.onTouchEnd();
            }, 1e3)),
          this.touchMove(t),
          !this.ceiling &&
            this.getCeiling() &&
            ((this.duration = 0),
            (this.startY = t.touches[0].clientY),
            (this.deltaY = 0)),
          this.ceiling &&
            this.deltaY >= 0 &&
            "vertical" === this.direction &&
            (this.setStatus(this.deltaY / 3), t.preventDefault()));
      },
      onTouchEnd: function () {
        i && clearTimeout(i),
          !this.untouchable && this.ceiling && this.deltaY
            ? ((this.duration = this.transitionDuration),
              "loosing" === this.status
                ? (this.setStatus(this.pullDownAreaHeight, !0),
                  this.$emit("pullDownRefresh"))
                : this.setStatus(0))
            : this.setStatus(0);
      },
      getCeiling: function () {
        return (
          (this.ceiling = 0 === e.getScrollTop(this.scrollEl)), this.ceiling
        );
      },
      setStatus: function (t, i) {
        this.height = t;
        var s = 0.6 * Math.max(t - this.pullDownAreaHeight / 2, 0);
        this.width = Math.min(s, 20);
        var e = i
          ? "loading"
          : 0 === t
          ? "initial"
          : t < this.pullDownAreaHeight
          ? "pulling"
          : "loosing";
        e !== this.status && (this.status = e);
      },
      startPullDownRefresh: function () {
        (this.duration = this.transitionDuration),
          this.setStatus(this.pullDownAreaHeight, !0),
          this.$emit("pullDownRefresh");
      },
      stopPullDownRefresh: function () {
        var t = this;
        (this.duration = this.transitionDuration),
          (this.status = "success"),
          (this.latestUpdatedTime = Date.now()),
          setTimeout(function () {
            t.setStatus(0);
          }, this.successDuration);
      },
    },
  },
  a = o._export_sfc(u, [
    [
      "render",
      function (t, i, s, e, n, u) {
        return o.e(
          { a: "loading" === n.status },
          "loading" === n.status
            ? { b: o.n(s.classPrefix) }
            : "success" === n.status || "loosing" === n.status
            ? {}
            : { e: n.width + "px" },
          {
            c: "success" === n.status,
            d: "loosing" === n.status,
            f: o.t(u.statusText),
            g: o.r("pull-refresh", {
              status: n.status,
              height: n.height,
              width: n.width,
              statusText: u.statusText,
            }),
            h: o.s(u.style),
            i: o.o(function () {
              return u.onTouchStart && u.onTouchStart.apply(u, arguments);
            }),
            j: o.o(function () {
              return u.onTouchMove && u.onTouchMove.apply(u, arguments);
            }),
            k: o.o(function () {
              return u.onTouchEnd && u.onTouchEnd.apply(u, arguments);
            }),
            l: o.o(function () {
              return u.onTouchEnd && u.onTouchEnd.apply(u, arguments);
            }),
            m: o.n(e.simpleMode ? "st-pull-refresh__simple-mode" : ""),
          }
        );
      },
    ],
  ]);
wx.createComponent(a);
