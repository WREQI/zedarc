var t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = require("../../../../../../common/vendor.js"),
  n = {
    inject: { helper: { default: {} } },
    options: { styleIsolation: "shared" },
    provide: function () {
      return { parent: this };
    },
    props: {
      index: [String, Number],
      indicator: { type: Boolean, default: !0 },
      isScroll: { type: Boolean, default: !1 },
      stat: { type: String, default: "" },
    },
    data: function () {
      return {
        indicatorStyle: { width: 0, left: 0 },
        touched: !1,
        firstTime: !0,
      };
    },
    watch: {
      index: {
        handler: function (t) {
          var e = this;
          this.$emit("change", t),
            this.$nextTick(function () {
              return e.update();
            });
        },
      },
    },
    mounted: function () {
      this.update();
    },
    activated: function () {
      this.firstTime = !1;
    },
    methods: {
      update: function () {
        var n = (this.helper.env || {}).__MP__;
        if (this.indicator && !n) {
          var o,
            i = { left: 0, width: 0 },
            r = t(this.$slots.default);
          try {
            for (r.s(); !(o = r.n()).done; ) {
              var a = o.value.componentInstance;
              if (a) {
                var c = a.$el.scrollWidth;
                if (a.name === this.index) {
                  i.width = c;
                  break;
                }
                i.left += c;
              }
            }
          } catch (t) {
            r.e(t);
          } finally {
            r.f();
          }
          this.indicatorStyle = e.mapValues(i, function (t) {
            return "".concat(t, "px");
          });
        }
      },
      onTouchStart: function () {
        var t = this;
        (this.touched = !0),
          setTimeout(function () {
            return (t.touched = !1);
          }, 1e3);
      },
      onTouchMove: function (t) {
        this.isScroll && t.stopPropagation();
      },
    },
  },
  o = e._export_sfc(n, [
    [
      "render",
      function (t, n, o, i, r, a) {
        return e.e(
          { a: r.touched },
          (r.touched, {}),
          { b: o.indicator },
          o.indicator ? { c: e.s(r.indicatorStyle) } : {},
          {
            d: e.o(function () {
              return a.onTouchStart && a.onTouchStart.apply(a, arguments);
            }, 5806),
            e: e.o(function () {
              return a.onTouchMove && a.onTouchMove.apply(a, arguments);
            }, 5807),
          }
        );
      },
    ],
    ["__scopeId", "data-v-3176e1d1"],
  ]);
wx.createComponent(o);
