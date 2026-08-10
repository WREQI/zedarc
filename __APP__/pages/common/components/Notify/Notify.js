var t = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var i = require("./index.js"),
  e = require("../../vendor.js"),
  s = {
    name: "StNotify",
    components: {
      StPopup: function () {
        return "../Popup/index.js";
      },
    },
    emits: ["click"],
    props: {
      message: { type: String, default: "" },
      title: { type: String, default: "" },
      duration: { type: Number, default: 2e3 },
      zIndex: { type: Number, default: 900 },
      transition: { type: String, default: "st-notify-fade" },
      status: { type: String, default: "success" },
      customIconClass: { type: String, default: "" },
      customStyle: { type: [String, Object], default: "" },
    },
    data: function () {
      var e = {};
      for (var s in i.defaultOptions) e["i_".concat(s)] = i.defaultOptions[s];
      return t(t({}, e), {}, { isVisible: !1 });
    },
    created: function () {
      var t = this;
      (this._dataWatchers = []),
        Object.keys(i.defaultOptions).forEach(function (i) {
          t._dataWatchers.push(
            t.$watch(
              i,
              function (e) {
                t["i_".concat(i)] = e;
              },
              { immediate: !0 }
            )
          );
        });
    },
    unmounted: function () {
      this._dataWatchers.forEach(function (t) {
        t();
      });
    },
    methods: {
      show: function () {
        var t = this,
          i =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (this.isVisible = !0),
          (this.i_message = i.message),
          (this.i_title = i.title),
          (this.i_duration = i.duration),
          (this.i_status = i.status),
          (this.i_customIconClass = i.customIconClass),
          (this.onClick = i.onClick),
          this.clearTimer(),
          0 !== this.i_duration &&
            (this.timer = setTimeout(function () {
              t.hide(), t.$emit("timeout");
            }, this.i_duration));
      },
      hide: function () {
        (this.isVisible = !1), this.clearTimer();
      },
      clearTimer: function () {
        clearTimeout(this.timer), (this.timer = null);
      },
      handleClick: function () {
        this.hide(), this.$emit("click"), this.onClick();
      },
      handleTouchMove: function () {
        this.hide();
      },
    },
  };
Array || e.resolveComponent("st-popup")();
var n = e._export_sfc(s, [
  [
    "render",
    function (t, i, s, n, o, a) {
      return e.e(
        { a: t.i_title },
        t.i_title
          ? e.e(
              { b: "success" === t.i_status },
              "success" === t.i_status
                ? { c: e.n(t.i_customIconClass) }
                : { d: e.n(t.i_customIconClass) },
              { e: e.t(t.i_title) }
            )
          : {},
        {
          f: e.t(t.i_message),
          g: e.o(function () {
            return a.handleClick && a.handleClick.apply(a, arguments);
          }),
          h: e.o(function () {
            return a.handleTouchMove && a.handleTouchMove.apply(a, arguments);
          }),
          i: e.p({
            show: o.isVisible,
            "z-index": s.zIndex,
            mask: !1,
            position: "top",
            "custom-style": s.customStyle,
          }),
        }
      );
    },
  ],
]);
wx.createComponent(n);
