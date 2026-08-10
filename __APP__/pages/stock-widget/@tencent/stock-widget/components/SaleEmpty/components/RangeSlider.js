var t = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../../common/vendor.js"),
  n = {
    inject: { hqBridge: { default: null } },
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
      var e,
        n = this;
      if ("mp" === (null == (e = this.hqBridge) ? void 0 : e.ENV)) {
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
          function v() {
            (d = Date.now()), e.apply(c, o);
          }
          function g() {
            n = void 0;
          }
          u ||
            (h || !s || n || v(),
            l(),
            void 0 === s && f > t
              ? h
                ? ((d = Date.now()), r || (n = setTimeout(s ? g : v, t)))
                : v()
              : !0 !== r &&
                (n = setTimeout(s ? g : v, void 0 === s ? t - f : t)));
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
            (e = n),
            null,
            (i = t().mark(function e() {
              var n, i, o;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          "mp" !==
                          (null == (n = this.hqBridge) ? void 0 : n.ENV)
                        ) {
                          t.next = 11;
                          break;
                        }
                        return (
                          (t.next = 3),
                          this.getRectForMP(".range-slider-content")
                        );
                      case 3:
                        return (
                          (i = t.sent),
                          (this.marginLeft = i.left),
                          (this.contentWidth = i.width),
                          (t.next = 7),
                          this.getRectForMP(".range-slider-block")
                        );
                      case 7:
                        (o = t.sent),
                          (this.blockWidth = o.width),
                          (t.next = 12);
                        break;
                      case 11:
                        this.h5Init();
                      case 12:
                        this.$emit("hadInit");
                      case 13:
                      case "end":
                        return t.stop();
                    }
                },
                e,
                this
              );
            })),
            new Promise(function (t, n) {
              var o = function (t) {
                  try {
                    a(i.next(t));
                  } catch (t) {
                    n(t);
                  }
                },
                r = function (t) {
                  try {
                    a(i.throw(t));
                  } catch (t) {
                    n(t);
                  }
                },
                a = function (e) {
                  return e.done
                    ? t(e.value)
                    : Promise.resolve(e.value).then(o, r);
                };
              a((i = i.apply(e, null)).next());
            })
          );
          var e, i;
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
          b: e.o(function () {}, 5814),
          c: e.o(function () {
            return a.touchStartMove && a.touchStartMove.apply(a, arguments);
          }, 5815),
          d: r.startX + "px",
          e: a.barWidth + "px",
          f: r.endX + "px",
          g: e.o(function () {}, 5816),
          h: e.o(function () {
            return a.touchEndMove && a.touchEndMove.apply(a, arguments);
          }, 5817),
          i: e.o(function () {}, 5818),
        };
      },
    ],
    ["__scopeId", "data-v-432034dc"],
  ]);
wx.createComponent(i);
