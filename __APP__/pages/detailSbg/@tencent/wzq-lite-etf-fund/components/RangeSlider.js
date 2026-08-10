var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../common/vendor.js"),
  n = {
    emits: ["hadInit"],
    data: function () {
      return { startX: 10, endX: 200 };
    },
    computed: {
      barWidth: function () {
        return Math.abs(this.endX - this.startX);
      },
    },
    mounted: function () {
      var n = this;
      if ("mp" === e.StockBridge.ENV) {
        var i = getApp().globalData;
        (this.marginLeft = i.rpxToPx(72)),
          (this.contentWidth = i.rpxToPx(606)),
          (this.blockWidth = i.rpxToPx(40));
      }
      (this.debounceTouchChange = (function (t, e) {
        var n,
          i = {},
          o = i.noTrailing,
          r = void 0 !== o && o,
          a = i.noLeading,
          c = void 0 !== a && a,
          h = i.debounceMode,
          s = void 0 === h ? void 0 : h,
          u = !1,
          d = 0;
        function f() {
          n && clearTimeout(n);
        }
        function l() {
          for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
            o[a] = arguments[a];
          var h = this,
            l = Date.now() - d;
          function v() {
            (d = Date.now()), e.apply(h, o);
          }
          function g() {
            n = void 0;
          }
          u ||
            (c || !s || n || v(),
            f(),
            void 0 === s && l > t
              ? c
                ? ((d = Date.now()), r || (n = setTimeout(s ? g : v, t)))
                : v()
              : !0 !== r &&
                (n = setTimeout(s ? g : v, void 0 === s ? t - l : t)));
        }
        return (
          (l.cancel = function (t) {
            var e = (t || {}).upcomingOnly,
              n = void 0 !== e && e;
            f(), (u = !n);
          }),
          l
        );
      })(200, this.touchChange)),
        this.$nextTick(function () {
          return (
            (i = n),
            null,
            (o = t().mark(function n() {
              var i, o;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (((t.prev = 0), "mp" !== e.StockBridge.ENV)) {
                          t.next = 12;
                          break;
                        }
                        return (
                          (t.next = 4),
                          this.getRectForMP(".range-slider-content")
                        );
                      case 4:
                        return (
                          (i = t.sent),
                          (this.marginLeft = i.left),
                          (this.contentWidth = i.width),
                          (t.next = 8),
                          this.getRectForMP(".range-slider-block")
                        );
                      case 8:
                        (o = t.sent),
                          (this.blockWidth = o.width),
                          (t.next = 13);
                        break;
                      case 12:
                        this.h5Init();
                      case 13:
                        t.next = 17;
                        break;
                      case 15:
                        (t.prev = 15), (t.t0 = t.catch(0));
                      case 17:
                        this.$emit("hadInit");
                      case 18:
                      case "end":
                        return t.stop();
                    }
                },
                n,
                this,
                [[0, 15]]
              );
            })),
            new Promise(function (t, e) {
              var n = function (t) {
                  try {
                    a(o.next(t));
                  } catch (t) {
                    e(t);
                  }
                },
                r = function (t) {
                  try {
                    a(o.throw(t));
                  } catch (t) {
                    e(t);
                  }
                },
                a = function (e) {
                  return e.done
                    ? t(e.value)
                    : Promise.resolve(e.value).then(n, r);
                };
              a((o = o.apply(i, null)).next());
            })
          );
          var i, o;
        });
    },
    methods: {
      h5Init: function () {
        var t = this.$refs.sliderContent.getBoundingClientRect();
        (this.marginLeft = t.left), (this.contentWidth = t.width);
        var e = this.$refs.sliderBlock.getBoundingClientRect();
        this.blockWidth = e.width;
      },
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
          a: r.startX + "px",
          b: e.o(function () {}, 3768),
          c: e.o(function () {
            return a.touchStartMove && a.touchStartMove.apply(a, arguments);
          }, 3769),
          d: r.startX + "px",
          e: a.barWidth + "px",
          f: r.endX + "px",
          g: e.o(function () {}, 3770),
          h: e.o(function () {
            return a.touchEndMove && a.touchEndMove.apply(a, arguments);
          }, 3771),
          i: e.o(function () {}, 3772),
        };
      },
    ],
    ["__scopeId", "data-v-183b1936"],
  ]);
wx.createComponent(i);
