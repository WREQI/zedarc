var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = function (t, e, n) {
    return new Promise(function (i, r) {
      var o = function (t) {
          try {
            s(n.next(t));
          } catch (t) {
            r(t);
          }
        },
        a = function (t) {
          try {
            s(n.throw(t));
          } catch (t) {
            r(t);
          }
        },
        s = function (t) {
          return t.done ? i(t.value) : Promise.resolve(t.value).then(o, a);
        };
      s((n = n.apply(t, e)).next());
    });
  },
  n = require("../../../../../common/vendor.js"),
  i = {
    data: function () {
      return { startX: 10, endX: 200, isWidthUpdated: !1 };
    },
    computed: {
      barWidth: function () {
        return Math.abs(this.endX - this.startX);
      },
      isLite: function () {
        return ["mpwzq", "wzqlight"].includes("mpweapp");
      },
    },
    mounted: function () {
      var n = this;
      this.setDefaultDimensionsForMP(),
        (this.debounceTouchChange = (function (t, e) {
          var n,
            i = {},
            r = i.noTrailing,
            o = void 0 !== r && r,
            a = i.noLeading,
            s = void 0 !== a && a,
            c = i.debounceMode,
            h = void 0 === c ? void 0 : c,
            u = !1,
            d = 0;
          function f() {
            n && clearTimeout(n);
          }
          function l() {
            for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++)
              r[a] = arguments[a];
            var c = this,
              l = Date.now() - d;
            function p() {
              (d = Date.now()), e.apply(c, r);
            }
            function m() {
              n = void 0;
            }
            u ||
              (s || !h || n || p(),
              f(),
              void 0 === h && l > t
                ? s
                  ? ((d = Date.now()), o || (n = setTimeout(h ? m : p, t)))
                  : p()
                : !0 !== o &&
                  (n = setTimeout(h ? m : p, void 0 === h ? t - l : t)));
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
          return e(
            n,
            null,
            t().mark(function e() {
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        this.measureSliderDimensions();
                      case 1:
                      case "end":
                        return t.stop();
                    }
                },
                e,
                this
              );
            })
          );
        });
    },
    methods: {
      setDefaultDimensionsForMP: function () {
        if ("mp" === n.StockBridge.ENV) {
          var t = getApp().globalData;
          (this.marginLeft = t.rpxToPx(72)),
            (this.contentWidth = t.rpxToPx(606)),
            (this.blockWidth = t.rpxToPx(40));
        }
      },
      getRectForMP: function (t) {
        var e = this;
        return new Promise(function (i) {
          n.wx$1
            .createSelectorQuery()
            .in(e)
            .select(t)
            .boundingClientRect(function (t) {
              i(t);
            })
            .exec();
        });
      },
      measureSliderDimensions: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var i, r, o, a;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.prev = 0), "mp" !== n.StockBridge.ENV)) {
                        t.next = 12;
                        break;
                      }
                      return (
                        (t.next = 4), this.getRectForMP(".range-slider-content")
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
                      (r = t.sent), (this.blockWidth = r.width), (t.next = 16);
                      break;
                    case 12:
                      (o = this.$refs.sliderContent.getBoundingClientRect()),
                        (this.marginLeft = o.left),
                        (this.contentWidth = o.width),
                        (a = this.$refs.sliderBlock.getBoundingClientRect()),
                        (this.blockWidth = a.width);
                    case 16:
                      (this.isWidthUpdated = !0), (t.next = 22);
                      break;
                    case 19:
                      (t.prev = 19),
                        (t.t0 = t.catch(0)),
                        this.setDefaultDimensionsForMP(),
                        (this.isWidthUpdated = !0);
                    case 22:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[0, 19]]
            );
          })
        );
      },
      setDefaultRange: function (n) {
        return e(this, arguments, function (e) {
          var n = this,
            i = e.start,
            r = e.end;
          return t().mark(function e() {
            var o;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (!isNaN(i) && !isNaN(r)) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    if (((t.t0 = n.isWidthUpdated), t.t0)) {
                      t.next = 6;
                      break;
                    }
                    return (t.next = 6), n.measureSliderDimensions();
                  case 6:
                    (o = n.contentWidth - n.blockWidth) &&
                      ((n.startX = parseFloat(i) * o),
                      (n.endX = parseFloat(r) * o));
                  case 8:
                  case "end":
                    return t.stop();
                }
            }, e);
          })();
        });
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
  r = n._export_sfc(i, [
    [
      "render",
      function (t, e, i, r, o, a) {
        return {
          a: n.o(function () {}, 4715),
          b: n.o(function () {
            return a.touchStartMove && a.touchStartMove.apply(a, arguments);
          }, 4716),
          c: o.startX + "px",
          d: o.startX + "px",
          e: a.barWidth + "px",
          f: n.o(function () {}, 4717),
          g: n.o(function () {
            return a.touchEndMove && a.touchEndMove.apply(a, arguments);
          }, 4718),
          h: o.endX + "px",
          i: n.n(a.isLite ? "lite" : "pro"),
          j: n.o(function () {}, 4719),
        };
      },
    ],
    ["__scopeId", "data-v-2d7a7893"],
  ]);
wx.createComponent(r);
