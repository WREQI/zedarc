var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js"),
  p = {
    props: ["data", "curTabIndex", "skin", "tabType"],
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
      isLite: function () {
        return ["mpwzq", "wzqlight"].includes("mpweapp");
      },
      isDark: function () {
        return "dark" === this.skin || "black" === this.skin;
      },
      arrowImage: function () {
        return "https://st.gtimg.com/image/kline/arrow".concat(
          this.isDark ? "-dark" : "",
          ".png"
        );
      },
    },
    methods: {
      getRectForMP: function (t, p) {
        return new Promise(function (n) {
          e.wx$1
            .createSelectorQuery()
            .in(t)
            .select(p)
            .boundingClientRect(function (t) {
              n(t);
            })
            .exec();
        });
      },
      onPopupMore: function () {
        var e = this;
        (this.popup.optionMaxHeight = ""),
          (this.popup.show = !0),
          (this.popup.ready = !1);
        var p = this.data.length;
        this.$nextTick(function () {
          return (
            (n = e),
            null,
            (i = t().mark(function () {
              var e, n, i, o, r, a, u, s, c, h, l, f, d;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          this.getRectForMP(
                            this.$parent,
                            "#".concat(this.tabType, "Selectbtn")
                          )
                        );
                      case 2:
                        return (
                          (n = t.sent),
                          (i = n.top),
                          (o = n.bottom),
                          (r = n.left),
                          (a = n.width),
                          (t.next = 9),
                          this.getRectForMP(this, "#popup")
                        );
                      case 9:
                        (u = t.sent),
                          (s = u.width),
                          (c =
                            (null == (e = getApp().globalData)
                              ? void 0
                              : e.systemInfo) || {}),
                          (h = c.windowHeight),
                          (l = c.statusBarHeight),
                          (f = c.pixelRatio),
                          i - l - (d = 38 * f) > h - o - 40 * f
                            ? ((this.popup.flip = !1),
                              (this.popup.height = Math.min(
                                i - l - d - 3 * f,
                                50 * p
                              )),
                              (this.popup.top = Math.max(
                                i - this.popup.height - 3 * f,
                                5 * f
                              )),
                              (this.popup.left = r + a - s),
                              (this.popup.optionMaxHeight = i - 5 * f + "px"))
                            : ((this.popup.flip = !0),
                              (this.popup.top = o + 3 * f),
                              (this.popup.left = r + a - s),
                              (this.popup.height = Math.min(
                                h - o - 40 * f,
                                50 * p
                              ))),
                          (this.popup.ready = !0);
                      case 17:
                      case "end":
                        return t.stop();
                    }
                },
                o,
                this
              );
            })),
            new Promise(function (t, e) {
              var p = function (t) {
                  try {
                    r(i.next(t));
                  } catch (t) {
                    e(t);
                  }
                },
                o = function (t) {
                  try {
                    r(i.throw(t));
                  } catch (t) {
                    e(t);
                  }
                },
                r = function (e) {
                  return e.done
                    ? t(e.value)
                    : Promise.resolve(e.value).then(p, o);
                };
              r((i = i.apply(n, null)).next());
            })
          );
          var n, i;
        });
      },
      changeTab: function (t, e, p) {
        (this.popup.show = !1), this.$emit("changeTab", t, e, p);
      },
    },
  },
  n = e._export_sfc(p, [
    [
      "render",
      function (t, p, n, i, o, r) {
        return {
          a: o.popup.flip,
          b: r.arrowImage,
          c: e.f(n.data, function (t, p, i) {
            return {
              a: e.t(t.name),
              b: t.id,
              c: n.curTabIndex === t.id ? 1 : "",
              d: e.o(
                function (e) {
                  return o.popup.canClick && r.changeTab(t.id, t.name, t.type);
                },
                2237,
                t.id
              ),
              e: p !== n.data.length - 1,
              f: t.id + "line",
              g: t.id,
            };
          }),
          d: e.n(o.popup.flip ? "flip" : ""),
          e: o.popup.height + "px",
          f: e.o(function () {}, 2238),
          g: !o.popup.flip,
          h: r.arrowImage,
          i: o.popup.top + "px",
          j: o.popup.left + "px",
          k: e.o(function () {}, 2239),
          l: o.popup.show,
          m: r.isDark ? 1 : "",
          n: r.isLite ? 1 : "",
          o: o.popup.ready ? 1 : 0,
          p: e.o(function () {}, 2240),
          q: e.o(function (t) {
            return (o.popup.show = !1);
          }, 2241),
        };
      },
    ],
    ["__scopeId", "data-v-ac7f28e9"],
  ]);
wx.createComponent(n);
