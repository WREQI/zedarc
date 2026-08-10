var e = require("../../../../../common/vendor.js"),
  t = {
    components: {
      switchBtn: function () {
        return "./switchBtn.js";
      },
    },
    options: { styleIsolation: "shared" },
    props: {
      label: { type: String, default: "" },
      theme: { type: String, default: "" },
      chooseOn: { type: Boolean, default: !1 },
      deleteActive: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        touchStartTime: 0,
        touchStartX: 0,
        touchStartY: 0,
        longPressTimer: null,
      };
    },
    methods: {
      handleLongPress: function () {
        this.$emit("longpress");
      },
      handleTouchStart: function (e) {
        var t = this;
        (this.touchStartTime = Date.now()),
          (this.touchStartX = e.touches[0].clientX),
          (this.touchStartY = e.touches[0].clientY),
          (this.longPressTimer = setTimeout(function () {
            t.$emit("longpress");
          }, 350));
      },
      handleTouchEnd: function () {
        this.longPressTimer &&
          (clearTimeout(this.longPressTimer), (this.longPressTimer = null));
      },
      handleTouchMove: function (e) {
        var t = Math.abs(e.touches[0].clientX - this.touchStartX),
          n = Math.abs(e.touches[0].clientY - this.touchStartY);
        (t > 10 || n > 10) &&
          this.longPressTimer &&
          (clearTimeout(this.longPressTimer), (this.longPressTimer = null));
      },
      handleDeleteClick: function () {
        this.$emit("delete");
      },
    },
    beforeDestroy: function () {
      this.longPressTimer &&
        (clearTimeout(this.longPressTimer), (this.longPressTimer = null));
    },
  };
Array || e.resolveComponent("switch-btn")();
var n = e._export_sfc(t, [
  [
    "render",
    function (t, n, o, r, s, i) {
      return e.e(
        { a: o.deleteActive },
        o.deleteActive
          ? {
              b: e.o(function () {
                return (
                  i.handleDeleteClick && i.handleDeleteClick.apply(i, arguments)
                );
              }, 2562),
            }
          : {},
        {
          c: e.t(o.label),
          d: e.o(function (e) {
            return t.$emit("toggleChoose");
          }, 2563),
          e: e.p({
            "choose-on": o.chooseOn,
            theme: "profession" === o.theme ? "" : "lite",
          }),
          f: e.n(o.theme),
          g: e.o(function () {
            return i.handleLongPress && i.handleLongPress.apply(i, arguments);
          }, 2564),
          h: e.o(function () {
            return i.handleTouchStart && i.handleTouchStart.apply(i, arguments);
          }, 2565),
          i: e.o(function () {
            return i.handleTouchEnd && i.handleTouchEnd.apply(i, arguments);
          }, 2566),
          j: e.o(function () {
            return i.handleTouchMove && i.handleTouchMove.apply(i, arguments);
          }, 2567),
        }
      );
    },
  ],
  ["__scopeId", "data-v-c7ebbe96"],
]);
wx.createComponent(n);
