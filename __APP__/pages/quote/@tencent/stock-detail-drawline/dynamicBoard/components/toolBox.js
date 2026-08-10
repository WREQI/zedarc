var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, o) {
    return new Promise(function (i, n) {
      var s = function (t) {
          try {
            c(o.next(t));
          } catch (t) {
            n(t);
          }
        },
        r = function (t) {
          try {
            c(o.throw(t));
          } catch (t) {
            n(t);
          }
        },
        c = function (t) {
          return t.done ? i(t.value) : Promise.resolve(t.value).then(s, r);
        };
      c((o = o.apply(t, e)).next());
    });
  },
  o = require("../../../../../../common/vendor.js"),
  i = require("../../utils/utils.js"),
  n = require("../index.js"),
  s = "drawBoard-toolbar-flag",
  r = {
    inject: ["skin"],
    props: {
      currValue: {
        type: Object,
        default: function () {
          return {};
        },
      },
      windowSize: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    data: function () {
      var t = !o.StockBridge.getStorage(s);
      return {
        left: "40%",
        top: "75%",
        toolBoxSize: { height: 0, width: 0 },
        colors: i.COLORSMAP,
        activedColor: i.DEFAULT_COLOR,
        weights: i.WEIGHTS,
        activedWeight: i.DEFAULT_WEIGHT,
        fonts: i.FONTS,
        activedFont: i.DEFAULT_FONTSIZE,
        isShow: !0,
        isLock: !1,
        isFlag: !1,
        isShowTips: t,
        pos: {},
        popupTools: "",
        isShowFont: !1,
      };
    },
    watch: {
      currValue: {
        handler: function (t) {
          this.updated(t);
        },
        deep: !0,
      },
    },
    mounted: function () {
      var t = this;
      setTimeout(function () {
        (t.isShowTips = !1), o.StockBridge.setStorage(s, "true");
      }, 5e3);
    },
    methods: {
      updatePosition: function (i) {
        return e(
          this,
          null,
          t().mark(function e() {
            var n = this;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return t.abrupt(
                      "return",
                      o.StockBridge.ENV === o.EnvTypeEnum.MP
                        ? new Promise(function (t) {
                            o.wx$1
                              .createSelectorQuery()
                              .in(n)
                              .select(".".concat(i))
                              .fields({ size: !0, rect: !0 })
                              .exec(function (e) {
                                t((e && e[0]) || {});
                              });
                          })
                        : new Promise(function (t) {
                            n.$nextTick(function () {
                              var e = n.$refs[i];
                              t(e ? e.getBoundingClientRect() : {});
                            });
                          })
                    );
                  case 1:
                  case "end":
                    return t.stop();
                }
            }, e);
          })
        );
      },
      handleCloseTips: function () {
        (this.isShowTips = !1), o.StockBridge.setStorage(s, "true");
      },
      showPopup: function (t) {
        this.popupTools !== t ? (this.popupTools = t) : (this.popupTools = "");
      },
      handleSelect: function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        switch (t) {
          case "color":
            (this.activedColor = e),
              this.$emit("select", "color", e && { action: e });
            break;
          case "weight":
            (this.activedWeight = e),
              this.$emit("select", "weight", e && { action: e });
            break;
          case "fontSize":
            (this.activedFont = e),
              this.$emit("select", "fontSize", e && { action: e });
            break;
          case "show":
            (this.isShow = !e),
              this.showPopup(""),
              this.$emit("select", "show", !e);
            break;
          case "lock":
            (this.isLock = !e),
              this.showPopup(""),
              this.$emit("select", "lock", !e);
            break;
          case "delete":
            this.showPopup(""), this.$emit("select", "delete");
        }
      },
      touchstart: function (o) {
        return e(
          this,
          null,
          t().mark(function e() {
            var i, n, s, r, c, u, h, a;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (i = o.changedTouches[0]),
                        (n = i.pageX),
                        (s = i.pageY),
                        this.showPopup(""),
                        (t.next = 4),
                        this.updatePosition("tool-bar-container")
                      );
                    case 4:
                      (r = t.sent),
                        (c = r.left),
                        (u = r.top),
                        (h = r.width),
                        (a = r.height),
                        (this.toolBoxSize = { height: a, width: h }),
                        (this.temp = {
                          touchStartPointX: n,
                          touchStartPointY: s,
                          offsetLeft: c,
                          offsetTop: u,
                        }),
                        (this.isFlag = !0);
                    case 10:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      touchmove: n.throttle(0, function (o) {
        return e(
          this,
          null,
          t().mark(function e() {
            var i, n, s, r, c, u, h, a, l, p, f, d, w, S, v, g, T, m, k, P;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!(o.changedTouches.length > 1) && this.isFlag) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return");
                    case 2:
                      (i = o.changedTouches[0]),
                        (n = i.pageX),
                        (s = i.pageY),
                        (r = this.toolBoxSize),
                        (c = r.width),
                        (u = r.height),
                        (h = this.windowSize),
                        (a = h.windowWidth),
                        (l = h.windowHeight),
                        (p = this.temp),
                        (f = p.touchStartPointX),
                        (d = p.touchStartPointY),
                        (w = p.offsetLeft),
                        (S = p.offsetTop),
                        (T = a - c - 20),
                        (m = l - u - 20),
                        (k = (v = w + n - f) < 20 ? 20 : v > T ? T : v),
                        (P = (g = S + s - d) < 20 ? 20 : g > m ? m : g),
                        (this.left = (k / a) * 100 + "%"),
                        (this.top = (P / l) * 100 + "%");
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      }),
      touchend: function () {
        (this.temp.touchStartPointX = 0),
          (this.temp.touchStartPointY = 0),
          (this.isFlag = !1);
      },
      updated: function (t) {
        var e = t.color,
          o = t.weight,
          n = t.fontSize,
          s = t.shapeType,
          r = t.isShow,
          c = void 0 === r || r,
          u = t.isLock,
          h = void 0 !== u && u;
        (this.activedColor = e.toLowerCase() || i.COLORSMAP[0].value),
          (this.activedWeight = o || i.WEIGHTS[1].value),
          (this.activedFont = n || i.FONTS[1].value),
          (this.isShowFont = "text" === s),
          (this.isShow = c),
          (this.isLock = h),
          this.isShowFont &&
            "fontSize" !== this.popupTools &&
            this.showPopup("");
      },
    },
  },
  c = o._export_sfc(r, [
    [
      "render",
      function (t, e, i, n, s, r) {
        return o.e(
          {
            a: o.o(function () {
              return r.touchstart && r.touchstart.apply(r, arguments);
            }, 5230),
            b: o.o(function () {
              return r.touchmove && r.touchmove.apply(r, arguments);
            }, 5231),
            c: o.o(function () {
              return r.touchend && r.touchend.apply(r, arguments);
            }, 5232),
            d: s.activedColor,
            e: o.o(function (t) {
              return r.showPopup("color");
            }, 5233),
            f: "color" === s.popupTools,
          },
          "color" === s.popupTools
            ? {
                g: o.f(s.colors, function (t, e, i) {
                  return {
                    a: t.value,
                    b: t.value === s.activedColor ? 1 : "",
                    c: t.value,
                    d: o.o(
                      function (e) {
                        return r.handleSelect("color", t.value);
                      },
                      5234,
                      t.value
                    ),
                  };
                }),
              }
            : {},
          { h: "weight" === s.popupTools },
          "weight" === s.popupTools
            ? {
                i: o.f(s.weights, function (t, e, i) {
                  return {
                    a: o.n("tool-icon-line-" + t.value),
                    b: t.value === s.activedWeight ? 1 : "",
                    c: t.value,
                    d: o.o(
                      function (e) {
                        return r.handleSelect("weight", t.value);
                      },
                      5235,
                      t.value
                    ),
                  };
                }),
                j: o.o(function () {}, 5236),
              }
            : {},
          {
            k: o.o(function (t) {
              return r.showPopup("weight");
            }, 5237),
            l: s.isShowFont,
          },
          s.isShowFont
            ? o.e(
                { m: "fontSize" === s.popupTools },
                "fontSize" === s.popupTools
                  ? {
                      n: o.f(s.fonts, function (t, e, i) {
                        return {
                          a: o.t(t.text),
                          b: t.value === s.activedFont ? 1 : "",
                          c: t.value,
                          d: o.o(
                            function (e) {
                              return r.handleSelect("fontSize", t.value);
                            },
                            5238,
                            t.value
                          ),
                        };
                      }),
                      o: o.o(function () {}, 5239),
                    }
                  : {},
                {
                  p: o.o(function (t) {
                    return r.showPopup("fontSize");
                  }, 5240),
                }
              )
            : {},
          {
            q: o.n(s.isShow ? "tool-icon-show" : "tool-icon-hide"),
            r: o.o(function (t) {
              return r.handleSelect("show", s.isShow);
            }, 5241),
            s: o.n(s.isLock ? "tool-icon-locked" : "tool-icon-lock"),
            t: o.o(function (t) {
              return r.handleSelect("lock", s.isLock);
            }, 5242),
            v: o.o(function (t) {
              return r.handleSelect("delete");
            }, 5243),
            w: s.isShowTips,
          },
          s.isShowTips
            ? {
                x: o.o(function () {
                  return (
                    r.handleCloseTips && r.handleCloseTips.apply(r, arguments)
                  );
                }, 5244),
              }
            : {},
          { y: o.n("white" !== r.skin && "is-black"), z: s.left, A: s.top }
        );
      },
    ],
    ["__scopeId", "data-v-83437a9c"],
  ]);
wx.createComponent(c);
