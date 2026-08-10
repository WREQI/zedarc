var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js"),
  n = {
    inject: ["hqBridge"],
    data: function () {
      return { startX: 10, endX: 200 };
    },
    computed: {
      barWidth: function () {
        return Math.abs(this.endX - this.startX);
      },
      isClassic: function () {
        return ["mpweapp", "stock"].includes("mpweapp");
      },
    },
    mounted: function () {
      var e = this;
      if ("mp" === this.hqBridge.ENV) {
        var n = getApp().globalData;
        (this.marginLeft = n.rpxToPx(72)),
          (this.contentWidth = n.rpxToPx(606)),
          (this.blockWidth = n.rpxToPx(40));
      }
      (this.debounceTouchChange = (function (t, e) {
        var n,
          i = {},
          o = i.noTrailing,
          r = void 0 !== o && o,
          a = i.noLeading,
          h = void 0 !== a && a,
          c = i.debounceMode,
          s = void 0 === c ? void 0 : c,
          u = !1,
          d = 0;
        function l() {
          n && clearTimeout(n);
        }
        function f() {
          for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
            o[a] = arguments[a];
          var c = this,
            f = Date.now() - d;
          function p() {
            (d = Date.now()), e.apply(c, o);
          }
          function g() {
            n = void 0;
          }
          u ||
            (h || !s || n || p(),
            l(),
            void 0 === s && f > t
              ? h
                ? ((d = Date.now()), r || (n = setTimeout(s ? g : p, t)))
                : p()
              : !0 !== r &&
                (n = setTimeout(s ? g : p, void 0 === s ? t - f : t)));
        }
        return (
          (f.cancel = function (t) {
            var e = (t || {}).upcomingOnly,
              n = void 0 !== e && e;
            l(), (u = !n);
          }),
          f
        );
      })(200, this.touchChange)),
        this.$nextTick(function () {
          return (
            (n = e),
            null,
            (i = t().mark(function e() {
              var n, i, o, r;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if ("mp" !== this.hqBridge.ENV) {
                          t.next = 11;
                          break;
                        }
                        return (
                          (t.next = 3),
                          this.getRectForMP(".range-slider-content")
                        );
                      case 3:
                        return (
                          (n = t.sent),
                          (this.marginLeft = n.left),
                          (this.contentWidth = n.width),
                          (t.next = 7),
                          this.getRectForMP(".range-slider-block")
                        );
                      case 7:
                        (i = t.sent),
                          (this.blockWidth = i.width),
                          this.$emit("init"),
                          (t.next = 15);
                        break;
                      case 11:
                        (o = this.$refs.sliderContent.getBoundingClientRect()),
                          (this.marginLeft = o.left),
                          (this.contentWidth = o.width),
                          (r = this.$refs.sliderBlock.getBoundingClientRect()),
                          (this.blockWidth = r.width),
                          this.$emit("init");
                      case 15:
                      case "end":
                        return t.stop();
                    }
                },
                e,
                this
              );
            })),
            new Promise(function (t, e) {
              var o = function (t) {
                  try {
                    a(i.next(t));
                  } catch (t) {
                    e(t);
                  }
                },
                r = function (t) {
                  try {
                    a(i.throw(t));
                  } catch (t) {
                    e(t);
                  }
                },
                a = function (e) {
                  return e.done
                    ? t(e.value)
                    : Promise.resolve(e.value).then(o, r);
                };
              a((i = i.apply(n, null)).next());
            })
          );
          var n, i;
        });
    },
    methods: {
      getRectForMP: function (t) {
        var n = this;
        return new Promise(function (i) {
          e.wx$1
            .createSelectorQuery()
            .in(n)
            .select(t)
            .boundingClientRect(function (t) {
              i(t);
            })
            .exec();
        });
      },
      setDefaultRange: function (t) {
        var e = t.start,
          n = t.end;
        if (!isNaN(e) && !isNaN(n)) {
          var i = this.contentWidth - this.blockWidth;
          i &&
            ((this.startX = parseFloat(e) * i),
            (this.endX = parseFloat(n) * i));
        }
      },
      touchStartMove: function (t) {
        var e = t.changedTouches[0].pageX,
          n = Math.max(0, e - this.marginLeft);
        (this.startX = Math.min(n, this.endX - this.blockWidth)),
          this.debounceTouchChange();
      },
      touchEndMove: function (t) {
        var e = t.changedTouches[0].pageX,
          n = Math.max(
            Math.max(0, e - this.marginLeft),
            this.startX + this.blockWidth
          );
        (this.endX = Math.min(n, this.contentWidth - this.blockWidth)),
          this.debounceTouchChange();
      },
      touchChange: function () {
        var t = this.contentWidth - this.blockWidth,
          e = {
            start: +(this.startX / t).toFixed(2),
            end: +(this.endX / t).toFixed(2),
          };
        this.$emit("rangeChange", e);
      },
    },
  },
  i = e._export_sfc(n, [
    [
      "render",
      function (t, n, i, o, r, a) {
        return {
          a: e.o(function () {}, 2404),
          b: e.o(function () {
            return a.touchStartMove && a.touchStartMove.apply(a, arguments);
          }, 2405),
          c: r.startX + "px",
          d: a.isClassic ? 1 : "",
          e: r.startX + "px",
          f: a.barWidth + "px",
          g: e.o(function () {}, 2406),
          h: e.o(function () {
            return a.touchEndMove && a.touchEndMove.apply(a, arguments);
          }, 2407),
          i: r.endX + "px",
          j: e.o(function () {}, 2408),
        };
      },
    ],
    ["__scopeId", "data-v-420d60e2"],
  ]);
wx.createComponent(i);
