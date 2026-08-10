var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js"),
  p = {
    inject: ["hqBridge"],
    props: ["data", "curTabIndex", "skin", "targetRef"],
    data: function () {
      return {
        isLite: ["mpwzq", "wzqlight"].includes("mpweapp"),
        isMP: e.StockBridge.ENV === e.EnvTypeEnum.MP,
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
    methods: {
      onPopupMore: function () {
        var p = this;
        (this.popup.optionMaxHeight = ""),
          (this.popup.show = !0),
          (this.popup.ready = !1),
          this.$nextTick(function () {
            return (
              (o = p),
              null,
              (n = t().mark(function () {
                var p, o, n, i, u, r, a, c, s, l, h, d, f, g, m, v, y;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            this.hqBridge.getEleInfo(
                              "#".concat(this.targetRef),
                              this.$parent
                            )
                          );
                        case 2:
                          return (
                            (u = t.sent),
                            (r = u.top),
                            (a = u.bottom),
                            (c = u.left),
                            (s = u.width),
                            (t.next = 9),
                            this.hqBridge.getEleInfo("#popup", this)
                          );
                        case 9:
                          (l = t.sent),
                            (h = l.width),
                            (d = l.height),
                            (f = 0),
                            (g = 0),
                            (m = 1),
                            e.StockBridge.ENV === e.EnvTypeEnum.MP
                              ? ((v =
                                  (null == (o = (p = e.wx$1).getWindowInfo)
                                    ? void 0
                                    : o.call(p)) ||
                                  (null == (i = (n = e.wx$1).getSystemInfoSync)
                                    ? void 0
                                    : i.call(n))),
                                (y = getApp().globalData.systemInfo),
                                (f = v.windowHeight),
                                (g = v.statusBarHeight),
                                (m = y.pixelRatio))
                              : ((f = document.body.clientHeight),
                                (m = window.devicePixelRatio)),
                            r - g - 38 * m > f - a - 40 * m
                              ? ((this.popup.flip = !1),
                                (this.popup.top = Math.max(
                                  r - d - 3 * m,
                                  5 * m
                                )),
                                (this.popup.left = c + s - h),
                                (this.popup.optionMaxHeight = r - 5 * m + "px"))
                              : ((this.popup.flip = !0),
                                (this.popup.top = a + 3 * m),
                                (this.popup.left = c + s - h)),
                            (this.popup.ready = !0),
                            e.StockBridge.ENV !== e.EnvTypeEnum.MP &&
                              document.body.appendChild(this.$el);
                        case 15:
                        case "end":
                          return t.stop();
                      }
                  },
                  n,
                  this
                );
              })),
              new Promise(function (t, e) {
                var p = function (t) {
                    try {
                      u(n.next(t));
                    } catch (t) {
                      e(t);
                    }
                  },
                  i = function (t) {
                    try {
                      u(n.throw(t));
                    } catch (t) {
                      e(t);
                    }
                  },
                  u = function (e) {
                    return e.done
                      ? t(e.value)
                      : Promise.resolve(e.value).then(p, i);
                  };
                u((n = n.apply(o, null)).next());
              })
            );
            var o, n;
          });
      },
      popupTouchStart: function (t) {
        e.StockBridge.ENV !== e.EnvTypeEnum.MP &&
          ((this.popup.startY = t.touches[0].pageY),
          (this.popup.canClick = !0));
      },
      popupTouchMove: function (t) {
        if (e.StockBridge.ENV !== e.EnvTypeEnum.MP) {
          this.popup.canClick = !1;
          var p = this.$refs.popupScroll,
            o = this.$refs.popupScrollInner;
          0 === p.scrollTop &&
            t.touches[0].pageY > this.popup.startY &&
            t.cancelable &&
            t.preventDefault(),
            p.offsetHeight + p.scrollTop + 2 * window.devicePixelRatio >=
              o.scrollHeight &&
              t.touches[0].pageY < this.popup.startY &&
              t.cancelable &&
              t.preventDefault();
        }
      },
      changeTab: function (t, p, o) {
        (this.popup.show = !1),
          this.$emit("changeTab", t, p, o),
          e.StockBridge.ENV !== e.EnvTypeEnum.MP &&
            document.body.removeChild(this.$el);
      },
    },
  },
  o = e._export_sfc(p, [
    [
      "render",
      function (t, p, o, n, i, u) {
        return e.e(
          { a: i.popup.flip, b: i.isMP },
          i.isMP
            ? {
                c: e.f(o.data, function (t, p, n) {
                  return {
                    a: e.t(t.name),
                    b: t.id,
                    c: e.n(o.curTabIndex === t.id ? "item-selected" : ""),
                    d: e.o(
                      function (e) {
                        return (
                          i.popup.canClick && u.changeTab(t.id, t.name, t.type)
                        );
                      },
                      2449,
                      t.id
                    ),
                    e: p !== o.data.length - 1,
                    f: t.id + "line",
                    g: t.id,
                  };
                }),
                d: e.n(i.isLite ? "lite" : "pro"),
                e: e.n(i.popup.flip ? "flip" : ""),
                f: e.o(function () {
                  return (
                    u.popupTouchStart && u.popupTouchStart.apply(u, arguments)
                  );
                }, 2450),
                g: e.o(function () {
                  return (
                    u.popupTouchMove && u.popupTouchMove.apply(u, arguments)
                  );
                }, 2451),
              }
            : {
                h: e.f(o.data, function (t, p, n) {
                  return {
                    a: e.t(t.name),
                    b: t.id,
                    c: e.n(o.curTabIndex === t.id ? "item-selected" : ""),
                    d: e.o(
                      function (e) {
                        return (
                          i.popup.canClick && u.changeTab(t.id, t.name, t.type)
                        );
                      },
                      2452,
                      t.id
                    ),
                    e: p !== o.data.length - 1,
                    f: t.id + "line",
                    g: t.id,
                  };
                }),
                i: e.n(i.isLite ? "lite" : "pro"),
                j: e.n(i.popup.flip ? "flip" : ""),
                k: e.o(function () {
                  return (
                    u.popupTouchStart && u.popupTouchStart.apply(u, arguments)
                  );
                }, 2453),
                l: e.o(function () {
                  return (
                    u.popupTouchMove && u.popupTouchMove.apply(u, arguments)
                  );
                }, 2454),
              },
          {
            m: !i.popup.flip,
            n: i.popup.top + "px",
            o: i.popup.left + "px",
            p: e.o(function () {}, 2455),
            q: i.popup.show,
            r: e.n("dark" === o.skin ? "skin-dark" : ""),
            s: e.n(i.isLite ? "lite" : "pro"),
            t: i.popup.ready ? 1 : 0,
            v: e.o(function () {}, 2456),
            w: e.o(function (t) {
              return (i.popup.show = !1);
            }, 2457),
            x: e.n(o.skin),
            y: e.n(i.isLite ? "lite" : "pro"),
          }
        );
      },
    ],
    ["__scopeId", "data-v-ccadeeaa"],
  ]);
wx.createComponent(o);
