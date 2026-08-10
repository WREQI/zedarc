var t = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = require("../../../../../../../common/vendor.js"),
  n = {
    inject: ["hqBridge"],
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
      };
    },
    watch: {
      index: {
        handler: function (t) {
          var e = this;
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
        if (this.indicator) {
          var n,
            o = { left: 0, width: 0 },
            i = t(this.$slots.default);
          try {
            for (i.s(); !(n = i.n()).done; ) {
              var r = n.value.componentInstance;
              if (r) {
                var a = r.$el.scrollWidth;
                if (r.name === this.index) {
                  o.width = a;
                  break;
                }
                o.left += a;
              }
            }
          } catch (t) {
            i.e(t);
          } finally {
            i.f();
          }
          this.indicatorStyle = e.mapValues(o, function (t) {
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
          { b: o.typeid, c: o.indicator },
          o.indicator ? { d: e.s(r.indicatorStyle) } : {},
          {
            e: e.o(function () {
              return a.onTouchStart && a.onTouchStart.apply(a, arguments);
            }, 2486),
            f: e.o(function () {
              return a.onTouchMove && a.onTouchMove.apply(a, arguments);
            }, 2487),
          }
        );
      },
    ],
    ["__scopeId", "data-v-0a4670a6"],
  ]);
wx.createComponent(o);
