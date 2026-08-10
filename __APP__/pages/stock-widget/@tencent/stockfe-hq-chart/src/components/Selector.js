var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  p = function (t, p, e) {
    return new Promise(function (i, o) {
      var n = function (t) {
          try {
            r(e.next(t));
          } catch (t) {
            o(t);
          }
        },
        s = function (t) {
          try {
            r(e.throw(t));
          } catch (t) {
            o(t);
          }
        },
        r = function (t) {
          return t.done ? i(t.value) : Promise.resolve(t.value).then(n, s);
        };
      r((e = e.apply(t, p)).next());
    });
  },
  e = require("../utils.js"),
  i = require("../../../../../../common/vendor.js"),
  o = {
    props: [
      "skin",
      "type",
      "indicators",
      "indicator",
      "showAuction",
      "landscape",
    ],
    inject: {
      hqBridge: {
        default: function () {
          return e.mockBridge;
        },
      },
    },
    data: function () {
      return {
        popup: {
          show: !1,
          ready: !1,
          flip: !1,
          num: 1,
          height: 0,
          optionMaxHeight: "",
          top: 0,
          left: 0,
          startY: 0,
          canClick: !0,
        },
      };
    },
    computed: {
      arrowImage: function () {
        return "https://st.gtimg.com/image/kline/arrow".concat(
          "dark" === this.skin ? "-dark" : "",
          ".png"
        );
      },
      optionClass: function () {
        return "mins" === this.type
          ? "option-wrapper-mins"
          : "kline" === this.type
          ? "ma" === this.indicators[0].key
            ? "option-wrapper-kline-main"
            : "option-wrapper-kline"
          : "";
      },
      isWzq: function () {
        return "wzq" === this.hqBridge.ENV;
      },
      isMP: function () {
        return "mp" === this.hqBridge.ENV;
      },
      lessontipShow: function () {
        return "more" !== this.type && this.isWzq;
      },
    },
    methods: {
      showLesson: function () {
        this.$emit("showLesson"),
          (this.popup.show = !1),
          this.hqBridge.report(
            "hq.gegu_xiangqingye.indicator_change_pop_jiaocheng_entry_click"
          );
      },
      getRectForMP: function (t, p) {
        var e = this;
        return new Promise(function (i) {
          e.hqBridge.wx
            .createSelectorQuery()
            .in(t)
            .select(p)
            .boundingClientRect(function (t) {
              i(t);
            })
            .exec();
        });
      },
      onPopup: function () {
        var e = this,
          i =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        (this.popup.num = i),
          (this.popup.show = !0),
          (this.popup.ready = !1),
          this.$nextTick(function () {
            return p(
              e,
              null,
              t().mark(function p() {
                var e, o, n, s, r, h, u, a, c, l, f, g, d, w, m, x;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((e = this.$parent.$refs.chart),
                            (o = (e.indicatorPercent || [])[i - 1]),
                            (n = 0),
                            (s = 1),
                            !this.isMP)
                          ) {
                            t.next = 18;
                            break;
                          }
                          return (
                            (t.next = 5),
                            this.getRectForMP(this.$parent, "#chart")
                          );
                        case 5:
                          return (
                            (r = t.sent),
                            (h = r.top),
                            (u = r.height),
                            (n = 0 === i ? h : h + u * (o || 0.8)),
                            (t.next = 11),
                            this.getRectForMP(this, "#popup")
                          );
                        case 11:
                          (a = t.sent),
                            (c = a.height),
                            (this.popup.height = c),
                            (l = this.hqBridge.wx.getSystemInfoSync()),
                            (f = l.pixelRatio),
                            (s = f),
                            (t.next = 20);
                          break;
                        case 18:
                          (g = e.$el.getBoundingClientRect()),
                            (d = g.top),
                            (w = g.height),
                            (n = 0 === i ? d : d + w * (o || 0.8)),
                            (this.popup.height = this.$refs.popup.offsetHeight),
                            (s = window.devicePixelRatio);
                        case 20:
                          n > this.popup.height
                            ? ((this.popup.flip = !1),
                              (this.popup.top = n - this.popup.height - 2 * s))
                            : ((m = {
                                mins: "mainIndicator",
                                kline: "indicator",
                              }[this.type]),
                              (x = e.view.layout[m].bar.height / s),
                              (this.popup.flip = !0),
                              (this.popup.top = n + x)),
                            (this.popup.left = this.showAuction
                              ? this.$parent.$refs.chart.view.layout
                                  .auctionWidth /
                                  s +
                                4 * s
                              : 4 * s),
                            (this.popup.ready = !0);
                        case 22:
                        case "end":
                          return t.stop();
                      }
                  },
                  p,
                  this
                );
              })
            );
          });
      },
      onPopupMore: function () {
        var e = this;
        (this.popup.optionMaxHeight = ""),
          (this.popup.show = !0),
          (this.popup.ready = !1),
          this.$nextTick(function () {
            return p(
              e,
              null,
              t().mark(function p() {
                var e, i, o, n, s, r, h, u, a, c, l, f, g, d, w, m, x, y, k;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!this.isMP) {
                            t.next = 19;
                            break;
                          }
                          return (
                            (t.next = 3),
                            this.getRectForMP(this.$parent, "#moreTabItem")
                          );
                        case 3:
                          return (
                            (e = t.sent),
                            (i = e.top),
                            (o = e.bottom),
                            (n = e.left),
                            (s = e.width),
                            (t.next = 10),
                            this.getRectForMP(this, "#popup")
                          );
                        case 10:
                          (r = t.sent),
                            (h = r.width),
                            (u = r.height),
                            (a = this.hqBridge.wx.getSystemInfoSync()),
                            (c = a.pixelRatio),
                            (l = a.windowHeight),
                            i > l - o - 40 * c
                              ? ((this.popup.flip = !1),
                                (this.popup.top = Math.max(i - u, 5 * c)),
                                (this.popup.left = n + s - h),
                                (this.popup.optionMaxHeight = i - 5 * c + "px"))
                              : ((this.popup.flip = !0),
                                (this.popup.top = o),
                                (this.popup.left = n + s - h),
                                this.landscape ||
                                  (this.popup.optionMaxHeight =
                                    l - this.popup.top - 40 * c + "px")),
                            (t.next = 21);
                          break;
                        case 19:
                          (f =
                            this.$parent.$refs.moreTabItem.getBoundingClientRect()),
                            (g = f.top),
                            (d = f.bottom),
                            (w = f.left),
                            (m = f.width),
                            (x = this.$refs.popup.offsetWidth),
                            (y = this.$refs.popup.offsetHeight),
                            (k = window.devicePixelRatio),
                            g > window.innerHeight - d
                              ? ((this.popup.flip = !1),
                                (this.popup.top = Math.max(g - y, 5 * k)),
                                (this.popup.left = w + m - x),
                                (this.popup.optionMaxHeight = g - 5 * k + "px"))
                              : ((this.popup.flip = !0),
                                (this.popup.top = d),
                                (this.popup.left = w + m - x),
                                this.landscape ||
                                  (this.popup.optionMaxHeight =
                                    window.innerHeight -
                                    this.popup.top -
                                    5 * k +
                                    "px"));
                        case 21:
                          this.popup.ready = !0;
                        case 22:
                        case "end":
                          return t.stop();
                      }
                  },
                  p,
                  this
                );
              })
            );
          });
      },
      popupTouchStart: function (t) {
        (this.popup.startY = t.touches[0].pageY), (this.popup.canClick = !0);
      },
      popupTouchMove: function (t) {
        this.popup.canClick = !1;
        var p = this.$refs.popupScroll;
        p.offsetHeight >= p.scrollHeight
          ? t.preventDefault()
          : 0 === p.scrollTop
          ? t.touches[0].pageY > this.popup.startY && t.preventDefault()
          : p.offsetHeight + p.scrollTop >= p.scrollHeight &&
            t.touches[0].pageY < this.popup.startY &&
            t.preventDefault();
      },
      switchIndicator: function (t) {
        (this.popup.show = !1),
          "more" === this.type
            ? this.$parent.switchMoreChart(t)
            : this.$parent.switchIndicator(this.popup.num, t);
      },
    },
  },
  n = i._export_sfc(o, [
    [
      "render",
      function (t, p, e, o, n, s) {
        return i.e(
          {
            a: i.n("more" === e.type ? "triangle-right" : "triangle-left"),
            b: s.arrowImage,
            c: n.popup.flip,
            d: s.lessontipShow,
          },
          s.lessontipShow
            ? {
                e: i.o(function () {
                  return s.showLesson && s.showLesson.apply(s, arguments);
                }, 3237),
                f: i.n(n.popup.flip ? "isFlip" : ""),
              }
            : {},
          {
            g: i.f(e.indicators, function (t, p, o) {
              return i.e(
                { a: "rally" === t.key },
                "rally" === t.key ? {} : { b: i.t(t.value) },
                {
                  c: e.indicator === t.key ? 1 : "",
                  d: p === e.indicators.length - 1 ? 1 : "",
                  e: t.key,
                  f: i.o(
                    function (p) {
                      return n.popup.canClick && s.switchIndicator(t.key);
                    },
                    3238,
                    t.key
                  ),
                }
              );
            }),
            h: i.n(s.lessontipShow ? "item-wrapper" : ""),
            i: i.n(n.popup.flip ? "flip" : ""),
            j: i.n(s.optionClass),
            k: n.popup.optionMaxHeight,
            l: i.o(function (t) {
              return !s.isMP && s.popupTouchStart;
            }, 3239),
            m: i.o(function (t) {
              return !s.isMP && s.popupTouchMove;
            }, 3240),
            n: i.n("more" === e.type ? "triangle-right" : "triangle-left"),
            o: s.arrowImage,
            p: !n.popup.flip,
            q: e.landscape ? 1 : "",
            r: n.popup.top + "px",
            s: n.popup.left + "px",
            t: i.o(function () {}, 3241),
            v: "dark" === e.skin ? 1 : "",
            w: n.popup.show,
            x: n.popup.ready ? 1 : 0,
            y: i.o(function () {}, 3242),
            z: i.o(function (t) {
              return (n.popup.show = !1);
            }, 3243),
          }
        );
      },
    ],
    ["__scopeId", "data-v-7b59611c"],
  ]);
wx.createComponent(n);
