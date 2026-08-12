var t = require("../../vendor.js");
function e(t) {
  return setTimeout(function () {
    t();
  }, 1e3 / 30);
}
var n = function (t) {
    return {
      enter: ""
        .concat(t, "-enter ")
        .concat(t, "-enter-active enter-class enter-active-class"),
      "enter-to": ""
        .concat(t, "-enter-to ")
        .concat(t, "-enter-active enter-to-class enter-active-class"),
      leave: ""
        .concat(t, "-leave ")
        .concat(t, "-leave-active leave-class leave-active-class"),
      "leave-to": ""
        .concat(t, "-leave-to ")
        .concat(t, "-leave-active leave-to-class leave-active-class"),
    };
  },
  a = {
    props: {
      customStyle: String,
      customClass: String,
      show: Boolean,
      duration: { type: Number, default: 300 },
      name: { type: String, default: "mp-fade" },
    },
    data: function () {
      return {
        type: "",
        inited: !1,
        display: !1,
        currentDuration: "",
        classes: "",
      };
    },
    computed: {
      curStyle: function () {
        return "-webkit-transition-duration: "
          .concat(this.currentDuration, "ms; transition-duration: ")
          .concat(this.currentDuration, "ms; ")
          .concat(this.display ? "" : "display: none;", " ")
          .concat(this.customStyle);
      },
    },
    watch: {
      show: {
        handler: function (t, e) {
          t !== e && (t ? this.enter() : this.leave());
        },
        immediate: !0,
      },
    },
    methods: {
      enter: function () {
        var a = this,
          s = this.duration,
          i = this.name,
          r = n(i),
          c = t.isObject(s) ? s.enter : s;
        "enter" !== this.status &&
          ((this.status = "enter"),
          this.$emit("before-enter"),
          e(function () {
            "enter" === a.status &&
              (a.$emit("enter"),
              (a.inited = !0),
              (a.display = !0),
              (a.classes = r.enter),
              (a.currentDuration = c),
              e(function () {
                "enter" === a.status &&
                  ((a.transitionEnded = !1), (a.classes = r["enter-to"]));
              }));
          }));
      },
      leave: function () {
        var a = this;
        if (this.display) {
          var s = this.duration,
            i = this.name,
            r = n(i),
            c = t.isObject(s) ? s.leave : s;
          (this.status = "leave"),
            this.$emit("before-leave"),
            e(function () {
              "leave" === a.status &&
                (a.$emit("leave"),
                (a.classes = r.leave),
                (a.currentDuration = c),
                e(function () {
                  "leave" === a.status &&
                    ((a.transitionEnded = !1),
                    setTimeout(function () {
                      return a.onTransitionEnd();
                    }, c),
                    (a.classes = r["leave-to"]));
                }));
            });
        }
      },
      onTransitionEnd: function () {
        if (!this.transitionEnded) {
          (this.transitionEnded = !0), this.$emit("after-".concat(this.status));
          var t = this.show,
            e = this.display;
          !t && e && (this.display = !1);
        }
      },
    },
  };
exports.transition = a;
