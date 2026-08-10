var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = require("../../../../../../common/vendor.js"),
  n = {
    provide: function () {
      return { parent: this };
    },
    props: {
      index: [String, Number],
      indicator: { type: Boolean, default: !0 },
      isScroll: { type: Boolean, default: !1 },
      stat: { default: "", type: String },
      typeid: { default: "", type: String },
    },
    data: function () {
      return {
        indicatorStyle: { width: 0, left: 0 },
        touched: !1,
        firstTime: !0,
        dragState: { flag: !1, downX: 0, scrollLeft: 0 },
      };
    },
    watch: {
      index: {
        handler: function (e) {
          var t = this;
          this.$emit("change", e),
            this.$nextTick(function () {
              return t.update();
            });
        },
      },
    },
    mounted: function () {
      var e = this;
      this.update(),
        this.isMobile() ||
          this.$nextTick(function () {
            return e.dragScroll();
          });
    },
    activated: function () {
      this.firstTime = !1;
    },
    beforeDestroy: function () {
      this.cleanupDragScroll();
    },
    methods: {
      isMobile: function () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          null == navigator ? void 0 : navigator.userAgent
        );
      },
      handleMouseDown: function (e) {
        var t = this.$refs.tabRef;
        (this.dragState.flag = !0),
          (this.dragState.downX = e.clientX),
          (this.dragState.scrollLeft = t.scrollLeft);
      },
      handleMouseMove: function (e) {
        if (this.dragState.flag) {
          var t = this.$refs.tabRef,
            n = e.clientX - this.dragState.downX,
            o = this.dragState.scrollLeft - n;
          t.scrollLeft = o;
        }
      },
      clearDragFlag: function () {
        this.dragState.flag = !1;
      },
      dragScroll: function () {
        var e = this,
          t = this.$refs.tabRef;
        if (t) {
          var n = {
            mousedown: function (t) {
              return e.handleMouseDown(t);
            },
            mousemove: function (t) {
              return e.handleMouseMove(t);
            },
            mouseup: function () {
              return e.clearDragFlag();
            },
            mouseleave: function () {
              return e.clearDragFlag();
            },
          };
          this.cleanupDragScroll(),
            t.addEventListener("mousedown", n.mousedown),
            t.addEventListener("mousemove", n.mousemove),
            t.addEventListener("mouseup", n.mouseup),
            t.addEventListener("mouseleave", n.mouseleave),
            (this._dragScrollHandlers = { el: t, handlers: n });
        }
      },
      cleanupDragScroll: function () {
        if (this._dragScrollHandlers) {
          var e = this._dragScrollHandlers,
            t = e.el,
            n = e.handlers;
          t.removeEventListener("mousedown", n.mousedown),
            t.removeEventListener("mousemove", n.mousemove),
            t.removeEventListener("mouseup", n.mouseup),
            t.removeEventListener("mouseleave", n.mouseleave),
            delete this._dragScrollHandlers;
        }
      },
      update: function () {
        if (this.indicator) {
          var n,
            o = { left: 0, width: 0 },
            r = e(this.$slots.default);
          try {
            for (r.s(); !(n = r.n()).done; ) {
              var i = n.value.componentInstance;
              if (i) {
                var a = i.$el.scrollWidth;
                if (i.name === this.index) {
                  o.width = a;
                  break;
                }
                o.left += a;
              }
            }
          } catch (e) {
            r.e(e);
          } finally {
            r.f();
          }
          this.indicatorStyle = t.mapValues(o, function (e) {
            return "".concat(e, "px");
          });
        }
      },
      onTouchStart: function () {
        var e = this;
        (this.touched = !0),
          setTimeout(function () {
            return (e.touched = !1);
          }, 1e3);
      },
      onTouchMove: function (e) {
        this.isScroll && e.stopPropagation();
      },
    },
  },
  o = t._export_sfc(n, [
    [
      "render",
      function (e, n, o, r, i, a) {
        return t.e(
          { a: i.touched },
          (i.touched, {}),
          { b: o.typeid, c: o.indicator },
          o.indicator ? { d: t.s(i.indicatorStyle) } : {},
          {
            e: t.o(function () {
              return a.onTouchStart && a.onTouchStart.apply(a, arguments);
            }, 4709),
            f: t.o(function () {
              return a.onTouchMove && a.onTouchMove.apply(a, arguments);
            }, 4710),
          }
        );
      },
    ],
    ["__scopeId", "data-v-46ed6ca3"],
  ]);
wx.createComponent(o);
