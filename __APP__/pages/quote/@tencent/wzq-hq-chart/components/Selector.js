var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var i = function (t, i, e) {
    return new Promise(function (p, o) {
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
          return t.done ? p(t.value) : Promise.resolve(t.value).then(n, s);
        };
      r((e = e.apply(t, i)).next());
    });
  },
  e = require("../../../../../common/vendor.js"),
  p = {
    props: ["skin", "type", "indicators", "indicator", "landscape"],
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
          isMini: !1,
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
    },
    created: function () {
      this.isMini = ["mpwzq", "mpweapp"].includes("mpweapp");
    },
    methods: {
      getRectForMP: function (t, i) {
        return new Promise(function (p) {
          e.wx$1
            .createSelectorQuery()
            .in(t)
            .select(i)
            .boundingClientRect(function (t) {
              p(t);
            })
            .exec();
        });
      },
      onPopup: function () {
        var e = this,
          p =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        (this.popup.num = p),
          (this.popup.show = !0),
          (this.popup.ready = !1),
          this.$nextTick(function () {
            return i(
              e,
              null,
              t().mark(function i() {
                var e, o, n, s, r, a, u, h, c, l, f, d, g;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((e = this.$parent.$refs.chart),
                            (o = (e.indicatorPercent || [])[p - 1]),
                            (n = 0),
                            !this.isMini)
                          ) {
                            t.next = 8;
                            break;
                          }
                          return (
                            (t.next = 5),
                            this.getRectForMP(this.$parent, "#chart")
                          );
                        case 5:
                          (t.t0 = t.sent), (t.next = 9);
                          break;
                        case 8:
                          t.t0 = e.$el.getBoundingClientRect();
                        case 9:
                          if (
                            ((s = t.t0),
                            (r = s.top),
                            (a = s.height),
                            (u = s.left),
                            (n = 0 === p ? r : r + a * (o || 0.8)),
                            !this.isMini)
                          ) {
                            t.next = 20;
                            break;
                          }
                          return (
                            (t.next = 17), this.getRectForMP(this, "#popup")
                          );
                        case 17:
                          (t.t1 = t.sent), (t.next = 21);
                          break;
                        case 20:
                          t.t1 = { height: this.$refs.popup.offsetHeight };
                        case 21:
                          (h = t.t1),
                            (c = h.height),
                            (this.popup.height = c),
                            (l = this.isMini
                              ? getApp().globalData.systemInfo.pixelRatio
                              : window.devicePixelRatio),
                            n > this.popup.height
                              ? ((this.popup.flip = !1),
                                (this.popup.top =
                                  n - this.popup.height - 2 * l))
                              : ((f = {
                                  mins: "mainIndicator",
                                  kline: "indicator",
                                }[this.type]),
                                (d = e.view.layout[f].bar.height / l),
                                (this.popup.flip = !0),
                                (this.popup.top = n + d)),
                            (this.popup.left = u + 4 * l),
                            (g = (this.landscape ? 14 : 4) * l),
                            (this.popup.left =
                              0 === this.index && this.showAuction
                                ? e.view.layout.auctionWidth / l + g
                                : g),
                            (this.popup.ready = !0);
                        case 29:
                        case "end":
                          return t.stop();
                      }
                  },
                  i,
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
            return i(
              p,
              null,
              t().mark(function i() {
                var p, o, n, s, r, a, u, h, c, l, f, d, g, w;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!this.isMini) {
                            t.next = 6;
                            break;
                          }
                          return (
                            (t.next = 3),
                            this.getRectForMP(this.$parent, "#moreTabItem")
                          );
                        case 3:
                          (t.t0 = t.sent), (t.next = 7);
                          break;
                        case 6:
                          t.t0 = document
                            .getElementById("moreTabItem")
                            .getBoundingClientRect();
                        case 7:
                          if (
                            ((p = t.t0),
                            (o = p.top),
                            (n = p.bottom),
                            (s = p.left),
                            (r = p.width),
                            !this.isMini)
                          ) {
                            t.next = 18;
                            break;
                          }
                          return (
                            (t.next = 15), this.getRectForMP(this, "#popup")
                          );
                        case 15:
                          (t.t1 = t.sent), (t.next = 19);
                          break;
                        case 18:
                          t.t1 = this.$refs.popup.getBoundingClientRect();
                        case 19:
                          (a = t.t1),
                            (u = a.width),
                            (h = a.height),
                            (c = this.isMini
                              ? (e.wx$1.getWindowInfo &&
                                  e.wx$1.getWindowInfo()) ||
                                e.wx$1.getSystemInfoSync()
                              : {
                                  windowHeight: document.body.clientHeight,
                                  windowWidth: document.body.clientWidth,
                                }),
                            (l = c.windowHeight),
                            (f = c.windowWidth),
                            (d = c.statusBarHeight),
                            (g = void 0 === d ? 0 : d),
                            (w = this.isMini
                              ? getApp().globalData.systemInfo.pixelRatio
                              : window.devicePixelRatio),
                            o - g - (this.landscape ? 0 : 38 * w) >
                            (this.landscape ? Math.min(f, l) : Math.max(f, l)) -
                              n -
                              40 * w
                              ? this.landscape
                                ? ((this.popup.flip = !1),
                                  (this.popup.left = s + r - u),
                                  (this.popup.optionMaxHeight =
                                    o - 7 * w + "px"),
                                  (this.popup.top = 7 * w))
                                : ((this.popup.flip = !1),
                                  (this.popup.top = Math.max(o - h, 5 * w)),
                                  (this.popup.left = s + r - u),
                                  (this.popup.optionMaxHeight =
                                    o - 5 * w + "px"))
                              : ((this.popup.flip = !0),
                                (this.popup.top = n),
                                (this.popup.left = s + r - u),
                                this.landscape ||
                                  (this.popup.optionMaxHeight =
                                    l - this.popup.top - 40 * w + "px")),
                            (this.popup.ready = !0);
                        case 29:
                        case "end":
                          return t.stop();
                      }
                  },
                  i,
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
      popupTouchStart: function (t) {
        (this.popup.startY = t.touches[0].pageY), (this.popup.canClick = !0);
      },
      popupTouchMove: function (t) {
        this.popup.canClick = !1;
        var i = this.$refs.popupScroll,
          e = this.$refs.popupScrollInner;
        0 === i.scrollTop &&
          t.touches[0].pageY > this.popup.startY &&
          t.cancelable &&
          t.preventDefault(),
          i.offsetHeight + i.scrollTop + 2 * window.devicePixelRatio >=
            e.scrollHeight &&
            t.touches[0].pageY < this.popup.startY &&
            t.cancelable &&
            t.preventDefault();
      },
    },
  },
  o = e._export_sfc(p, [
    [
      "render",
      function (t, i, p, o, n, s) {
        return e.e(
          {
            a: e.n("more" === p.type ? "triangle-right" : "triangle-left"),
            b: s.arrowImage,
            c: n.popup.flip,
            d: t.isMini,
          },
          t.isMini
            ? {
                e: e.f(p.indicators, function (t, i, o) {
                  return {
                    a: e.t(t.value),
                    b: p.indicator === t.key ? 1 : "",
                    c: t.key,
                    d: e.o(
                      function (i) {
                        return n.popup.canClick && s.switchIndicator(t.key);
                      },
                      5902,
                      t.key
                    ),
                  };
                }),
                f: n.popup.flip ? 1 : "",
                g: e.n(s.optionClass),
                h: n.popup.optionMaxHeight,
              }
            : {
                i: e.f(p.indicators, function (t, i, o) {
                  return {
                    a: e.t(t.value),
                    b: p.indicator === t.key ? 1 : "",
                    c: t.key,
                    d: e.o(
                      function (i) {
                        return n.popup.canClick && s.switchIndicator(t.key);
                      },
                      5903,
                      t.key
                    ),
                  };
                }),
                j: e.n(n.popup.flip ? "flip" : ""),
                k: e.n(s.optionClass),
                l: n.popup.optionMaxHeight,
                m: e.o(function () {
                  return (
                    s.popupTouchStart && s.popupTouchStart.apply(s, arguments)
                  );
                }, 5904),
                n: e.o(function () {
                  return (
                    s.popupTouchMove && s.popupTouchMove.apply(s, arguments)
                  );
                }, 5905),
              },
          {
            o: e.n("more" === p.type ? "triangle-right" : "triangle-left"),
            p: s.arrowImage,
            q: !n.popup.flip,
            r: p.landscape ? 1 : "",
            s: n.popup.top + "px",
            t: n.popup.left + "px",
            v: n.popup.optionMaxHeight,
            w: e.o(function () {}, 5906),
            x: "dark" === p.skin ? 1 : "",
            y: n.popup.show,
            z: n.popup.ready ? 1 : 0,
            A: e.o(function () {}, 5907),
            B: e.o(function (t) {
              return (n.popup.show = !1);
            }, 5908),
          }
        );
      },
    ],
    ["__scopeId", "data-v-7596a38a"],
  ]);
wx.createComponent(o);
