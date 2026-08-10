var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, i) {
    return new Promise(function (p, o) {
      var n = function (t) {
          try {
            s(i.next(t));
          } catch (t) {
            o(t);
          }
        },
        r = function (t) {
          try {
            s(i.throw(t));
          } catch (t) {
            o(t);
          }
        },
        s = function (t) {
          return t.done ? p(t.value) : Promise.resolve(t.value).then(n, r);
        };
      s((i = i.apply(t, e)).next());
    });
  },
  i = require("../../../../../common/vendor.js"),
  p = {
    props: [
      "skin",
      "type",
      "indicators",
      "indicator",
      "showAuction",
      "landscape",
    ],
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
        macdChecked: !1,
      };
    },
    computed: {
      arrowImage: function () {
        return "https://st.gtimg.com/image/kline/arrow".concat(
          "black" === this.skin ? "-dark" : "",
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
      lessontipShow: function () {
        return "more" !== this.type;
      },
    },
    methods: {
      toggleMacdChecked: function () {
        (this.macdChecked = !this.macdChecked),
          this.$emit("toggleMacdChecked", this.macdChecked);
      },
      showLesson: function () {
        this.$emit("showLesson"),
          (this.popup.show = !1),
          i.StockBridge.report(
            "hq.gegu_xiangqingye.indicator_change_pop_jiaocheng_entry_click"
          );
      },
      getRectForMP: function (t, e) {
        return new Promise(function (p) {
          i.wx$1
            .createSelectorQuery()
            .in(t)
            .select(e)
            .boundingClientRect(function (t) {
              p(t);
            })
            .exec();
        });
      },
      onPopup: function () {
        var p = this,
          o =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        (this.popup.num = o),
          (this.popup.show = !0),
          (this.popup.ready = !1),
          this.$nextTick(function () {
            return e(
              p,
              null,
              t().mark(function e() {
                var p, n, r, s, c, h, a, u, l, d, f, g, m;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (p = this.$parent.$refs.chart),
                            (n = (p.indicatorPercent || [])[o - 1]),
                            (r = 0),
                            (t.next = 4),
                            this.getRectForMP(this.$parent, "#chart")
                          );
                        case 4:
                          return (
                            (s = t.sent),
                            (c = s.top),
                            (h = s.height),
                            (r = 0 === o ? c : c + h * (n || 0.8)),
                            (t.next = 10),
                            this.getRectForMP(this, "#popup")
                          );
                        case 10:
                          (a = t.sent),
                            (u = a.height),
                            (this.popup.height = u),
                            (l = i.wx$1.getSystemInfoSync()),
                            (d = l.pixelRatio),
                            (f = d),
                            r > this.popup.height + 15 * f
                              ? ((this.popup.flip = !1),
                                (this.popup.top =
                                  r - this.popup.height - 2 * f))
                              : ((g = {
                                  mins: "mainIndicator",
                                  kline: "indicator",
                                }[this.type]),
                                (m = p.view.layout[g].bar.height / f),
                                (this.popup.flip = !0),
                                (this.popup.top = r + m)),
                            (this.popup.left = this.showAuction
                              ? this.$parent.$refs.chart.view.layout
                                  .auctionWidth /
                                  f +
                                4 * f
                              : 4 * f),
                            (this.popup.ready = !0);
                        case 16:
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
      onPopupMore: function () {
        var p = this;
        (this.popup.optionMaxHeight = ""),
          (this.popup.show = !0),
          (this.popup.ready = !1),
          this.$nextTick(function () {
            return e(
              p,
              null,
              t().mark(function e() {
                var p, o, n, r, s, c, h, a, u, l, d;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            this.getRectForMP(this.$parent, "#moreTabItem")
                          );
                        case 2:
                          return (
                            (p = t.sent),
                            (o = p.top),
                            (n = p.bottom),
                            (r = p.left),
                            (s = p.width),
                            (t.next = 9),
                            this.getRectForMP(this, "#popup")
                          );
                        case 9:
                          (c = t.sent),
                            (h = c.width),
                            (a = c.height),
                            (u = i.wx$1.getSystemInfoSync()),
                            (l = u.pixelRatio),
                            (d = u.windowHeight),
                            o > d - n - 40 * l
                              ? ((this.popup.flip = !1),
                                (this.popup.top = Math.max(o - a, 30 * l)),
                                (this.popup.left = r + s - h),
                                (this.popup.optionMaxHeight =
                                  o - 32 * l + "px"))
                              : ((this.popup.flip = !0),
                                (this.popup.top = n),
                                (this.popup.left = r + s - h),
                                this.landscape ||
                                  (this.popup.optionMaxHeight =
                                    d - this.popup.top - 40 * l + "px")),
                            (this.popup.ready = !0);
                        case 16:
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
      switchIndicator: function (t) {
        (this.popup.show = !1),
          "more" === this.type
            ? this.$parent.switchMoreChart(t)
            : this.$parent.switchIndicator(this.popup.num, t);
      },
    },
  },
  o = i._export_sfc(p, [
    [
      "render",
      function (t, e, p, o, n, r) {
        return i.e(
          {
            a: i.n("more" === p.type ? "triangle-right" : "triangle-left"),
            b: r.arrowImage,
            c: n.popup.flip,
            d: r.lessontipShow,
          },
          r.lessontipShow
            ? {
                e: i.o(function () {
                  return r.showLesson && r.showLesson.apply(r, arguments);
                }, 3659),
                f: i.n(n.popup.flip ? "isFlip" : ""),
              }
            : {},
          {
            g: i.f(p.indicators, function (t, e, o) {
              return i.e(
                { a: "macd" === t.key },
                "macd" === t.key
                  ? i.e(
                      { b: p.indicator === t.key && "kline" === p.type },
                      p.indicator === t.key && "kline" === p.type
                        ? {
                            c: n.macdChecked,
                            d: n.macdChecked ? 1 : "",
                            e: i.o(
                              function () {
                                return (
                                  r.toggleMacdChecked &&
                                  r.toggleMacdChecked.apply(r, arguments)
                                );
                              },
                              3660,
                              t.key
                            ),
                            f: i.o(
                              function () {
                                return (
                                  r.toggleMacdChecked &&
                                  r.toggleMacdChecked.apply(r, arguments)
                                );
                              },
                              3661,
                              t.key
                            ),
                            g: i.o(function () {}, 3662, t.key),
                          }
                        : {}
                    )
                  : "rally" === t.key
                  ? {}
                  : { i: i.t(t.value) },
                {
                  h: "rally" === t.key,
                  j: p.indicator === t.key ? 1 : "",
                  k: e === p.indicators.length - 1 ? 1 : "",
                  l: t.key,
                  m: i.o(
                    function (e) {
                      return n.popup.canClick && r.switchIndicator(t.key);
                    },
                    3663,
                    t.key
                  ),
                }
              );
            }),
            h: i.n(r.lessontipShow ? "item-wrapper" : ""),
            i: i.n(n.popup.flip ? "flip" : ""),
            j: i.n(r.optionClass),
            k: n.popup.optionMaxHeight,
            l: i.n("more" === p.type ? "triangle-right" : "triangle-left"),
            m: r.arrowImage,
            n: !n.popup.flip,
            o: p.landscape ? 1 : "",
            p: n.popup.top + "px",
            q: n.popup.left + "px",
            r: i.o(function () {}, 3664),
            s: "black" === p.skin ? 1 : "",
            t: n.popup.show,
            v: n.popup.ready ? 1 : 0,
            w: i.o(function () {}, 3665),
            x: i.o(function (t) {
              return (n.popup.show = !1);
            }, 3666),
          }
        );
      },
    ],
    ["__scopeId", "data-v-7c644004"],
  ]);
wx.createComponent(o);
