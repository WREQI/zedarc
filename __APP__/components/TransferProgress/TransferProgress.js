require("../../app.js");
var e = require("../../common/vendor.js"),
  t = require("../../utils/getPlatform.js"),
  n = 0.67,
  o = e.defineComponent({
    name: "TransferProgress",
    components: {
      SuccessIcon: function () {
        return "./SuccessIcon.js";
      },
    },
    props: {
      scene: { type: String, required: !0 },
      stateList: { type: Array, required: !0 },
      currentProgress: { type: Number, required: !0 },
      showProgressText: { type: Boolean, default: !1 },
      enableAnimation: { type: Boolean, default: !1 },
    },
    emits: {
      "node-animation-complete": function (e) {
        return null !== e;
      },
    },
    setup: function () {
      return {
        isMpPlugin: t.getPlatform().isMpPlugin,
        successNodeAnimationComplete: e.ref(!1),
      };
    },
    methods: {
      getItemStyle: function (e, t) {
        var o = {};
        return (
          this.enableAnimation &&
            t > 0 &&
            t <= this.currentProgress &&
            (o["--line-delay"] = (t - 1) * n + "s"),
          o
        );
      },
      getNodeInfoClass: function (e, t) {
        var n = this.hasNodeIconAnimation(e, t),
          o = this.enableAnimation && t > 0 && t <= this.currentProgress;
        return n
          ? {
              "animate-fade-in-event": o,
              "show-node": this.successNodeAnimationComplete,
            }
          : { "animate-fade-in": o };
      },
      getNodeInfoStyle: function (e, t) {
        return this.enableAnimation && 0 !== t
          ? this.hasNodeIconAnimation(e, t)
            ? {}
            : { "--info-delay": "".concat(this.getNodeInfoDelay(t), "s") }
          : {};
      },
      getIconDelay: function (e) {
        return e * n;
      },
      getNodeInfoDelay: function (e) {
        var t = this.stateList[e],
          o = e * n;
        return this.hasNodeIconAnimation(t, e) ? o + 0.33 + 0.33 : o;
      },
      getLineAnimationEndTime: function (e) {
        return (e - 1) * n + n;
      },
      onLineAnimationEnd: function (e) {
        var t = this.stateList[e];
        this.hasNodeIconAnimation(t, e) || this.emitNodeComplete(e);
      },
      hasNodeIconAnimation: function (e, t) {
        return "success" === e.state && t === this.currentProgress;
      },
      emitNodeComplete: function (e) {
        var t = this.stateList[e];
        this.$emit("node-animation-complete", {
          nodeIndex: e,
          node: t,
          isLast: e === this.currentProgress,
        });
      },
      onSuccessIconComplete: function (e) {
        (this.successNodeAnimationComplete = !0), this.emitNodeComplete(e);
      },
    },
  });
Array || e.resolveComponent("SuccessIcon")();
var s = e._export_sfc(o, [
  [
    "render",
    function (t, n, o, s, i, r) {
      return {
        a: e.f(t.stateList, function (n, o, s) {
          return e.e(
            {
              a:
                t.enableAnimation &&
                "success" === n.state &&
                o === t.currentProgress,
            },
            t.enableAnimation &&
              "success" === n.state &&
              o === t.currentProgress
              ? {
                  b: "".concat(t.getIconDelay(o), "s"),
                  c: e.o(function (e) {
                    return t.onSuccessIconComplete(o);
                  }, o),
                  d: "985d6255-0-" + s,
                  e: e.p({ animate: !0, delay: t.getIconDelay(o) }),
                }
              : { f: e.n(n.state) },
            { g: e.t(n.text), h: e.n(n.state), i: n.money },
            n.money ? { j: e.t(t.$filters.format.toCurrency(n.money, 2)) } : {},
            { k: n.date },
            n.date ? { l: e.t(n.date) } : {},
            { m: n.time },
            n.time ? { n: e.t(n.time) } : {},
            {
              o: e.n(t.getNodeInfoClass(t.stateList[o], o)),
              p: e.s(t.getNodeInfoStyle(t.stateList[o], o)),
              q: t.enableAnimation && o > 0 && o <= t.currentProgress,
            },
            t.enableAnimation && o > 0 && o <= t.currentProgress
              ? {
                  r: "".concat(t.getLineAnimationEndTime(o), "s"),
                  s: e.o(function () {
                    return t.onLineAnimationEnd(o);
                  }, o),
                }
              : {},
            {
              t: o,
              v:
                o === t.currentProgress || "pending-enhance" === n.state
                  ? 1
                  : "",
              w: o < t.currentProgress ? 1 : "",
              x:
                o <= t.currentProgress &&
                "detail" === t.scene &&
                "pending" !== n.state
                  ? 1
                  : "",
              y: o === t.currentProgress && t.showProgressText ? 1 : "",
              z: t.enableAnimation && o > 0 && o <= t.currentProgress ? 1 : "",
              A: e.s(t.getItemStyle(n, o)),
            }
          );
        }),
        b: t.isMpPlugin ? 1 : "",
        c: e.n(t.scene),
        d: e.n({ animated: t.enableAnimation }),
      };
    },
  ],
  ["__scopeId", "data-v-985d6255"],
]);
wx.createComponent(s);
