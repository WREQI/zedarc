var t = {
  data: function () {
    return { direction: "" };
  },
  methods: {
    touchStart: function (t) {
      this.resetTouchStatus(),
        (this.startX = t.touches[0].clientX),
        (this.startY = t.touches[0].clientY);
    },
    touchMove: function (t) {
      var s,
        i,
        e = t.touches[0];
      (this.deltaX = e.clientX - this.startX),
        (this.deltaY = e.clientY - this.startY),
        (this.offsetX = Math.abs(this.deltaX)),
        (this.offsetY = Math.abs(this.deltaY)),
        (this.direction =
          this.direction ||
          ((s = this.offsetX) > (i = this.offsetY) && s > 10
            ? "horizontal"
            : i > s && i > 10
            ? "vertical"
            : ""));
    },
    resetTouchStatus: function () {
      (this.direction = ""),
        (this.deltaX = 0),
        (this.deltaY = 0),
        (this.offsetX = 0),
        (this.offsetY = 0);
    },
  },
};
exports.TouchMixin = t;
