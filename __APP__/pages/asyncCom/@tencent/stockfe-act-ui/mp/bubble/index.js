var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, n) {
    return new Promise(function (o, r) {
      var i = function (e) {
          try {
            l(n.next(e));
          } catch (e) {
            r(e);
          }
        },
        c = function (e) {
          try {
            l(n.throw(e));
          } catch (e) {
            r(e);
          }
        },
        l = function (e) {
          return e.done ? o(e.value) : Promise.resolve(e.value).then(i, c);
        };
      l((n = n.apply(e, t)).next());
    });
  },
  n = require("../../../../../../common/vendor.js"),
  o = {
    name: "yy-bubble",
    inject: { taskSelector: { default: "" } },
    props: ["config", "wxSelect"],
    components: {
      Icon: function () {
        return "../../h5/icon/index.js";
      },
    },
    data: function () {
      return { visible: !0, bubbleStyle: {}, arrowStyle: {} };
    },
    mounted: function () {
      var e,
        t = this;
      (null == (e = this.config) ? void 0 : e.duration) &&
        setTimeout(function () {
          t.handleClose();
        }, 1e3 * this.config.duration);
    },
    watch: {
      config: {
        handler: function (e) {
          this.calBubblePosition(e);
        },
        immediate: !0,
      },
    },
    computed: {
      logo: function () {
        return this.config.logo;
      },
      closeImg: function () {
        return this.config.closeImg || "";
      },
      fixed: function () {
        return this.config.fixed;
      },
      bubbleid: function () {
        return this.config.bubbleid;
      },
      allowClose: function () {
        return this.config.closable;
      },
    },
    methods: {
      handleClose: function () {
        this.visible = !1;
      },
      calBubblePosition: function (o) {
        var r = this,
          i = o.width,
          c = (o.height, o.left),
          l = (o.top, o.hasBottomBar, o.direction),
          u = void 0 === l ? "fix-bottom-left" : l,
          s = o.selector,
          a = 750 / this.getWindowWidth();
        (this.arrowStyle = { top: -14 / a + "px", height: -14 / a + "px" }),
          s &&
            setTimeout(function () {
              return t(
                r,
                null,
                e().mark(function t() {
                  var o, r, l, f, h, b, d, p;
                  return e().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((l = null),
                              (l = this.wxSelect
                                ? this.createSelectorQuery().select(s)
                                : (
                                    null == (o = this.taskSelector)
                                      ? void 0
                                      : o.value
                                  )
                                ? n.wx$1
                                    .createSelectorQuery()
                                    .in(
                                      null == (r = this.taskSelector)
                                        ? void 0
                                        : r.value
                                    )
                                    .select(s)
                                : n.wx$1
                                    .createSelectorQuery()
                                    .in(this.$parent.$parent)
                                    .select(s)))
                            ) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return");
                          case 3:
                            return (e.next = 5), this.getNodeWidth(l);
                          case 5:
                            if ((f = e.sent)) {
                              e.next = 8;
                              break;
                            }
                            return e.abrupt("return");
                          case 8:
                            f.width,
                              (h = f.height),
                              (b = f.top),
                              (d = {}),
                              (p = {}),
                              (e.t0 = u),
                              (e.next =
                                "fix-bottom-left" === e.t0
                                  ? 13
                                  : "fix-bottom-right" === e.t0
                                  ? 15
                                  : 16);
                            break;
                          case 13:
                            return (
                              (d = {
                                top: (b + h) * a + "rpx",
                                left: 10 * a + "rpx",
                              }),
                              (p = {
                                top: -14 / a + "px",
                                left: (c + i / 2 - 44 - 10) * a + "rpx",
                              }),
                              e.abrupt("break", 16)
                            );
                          case 15:
                            (d = {
                              top: (b + h) * a + "rpx",
                              right: 10 * a + "rpx",
                            }),
                              (p = {
                                top: -14 / a + "px",
                                left: (c + i / 2 - 44 - 10) * a + "rpx",
                              });
                          case 16:
                            (this.bubbleStyle = d), (this.arrowStyle = p);
                          case 17:
                          case "end":
                            return e.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              );
            }, 100);
      },
      getNodeWidth: function (n) {
        return t(
          this,
          null,
          e().mark(function t() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      new Promise(function (e, t) {
                        n.boundingClientRect(function (t) {
                          e(t);
                        }).exec();
                      })
                    );
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        );
      },
      getWindowWidth: function () {
        var e;
        return (
          n.index.getSystemInfo({
            success: function (t) {
              e = t.windowWidth;
            },
          }),
          e
        );
      },
    },
  };
Array || n.resolveComponent("Icon")();
var r = n._export_sfc(o, [
  [
    "render",
    function (e, t, o, r, i, c) {
      return n.e(
        { a: i.visible },
        i.visible
          ? n.e(
              { b: c.logo },
              c.logo ? { c: n.p({ icon: c.logo }) } : {},
              { d: c.allowClose },
              c.allowClose
                ? {
                    e: n.p({ type: "close", size: "small", icon: c.closeImg }),
                    f: n.o(function () {
                      return c.handleClose && c.handleClose.apply(c, arguments);
                    }, 3250),
                  }
                : {},
              {
                g: n.s(i.arrowStyle),
                h: n.s(i.bubbleStyle),
                i: n.n({ noclose: !c.allowClose, fixed: c.fixed }),
                j: n.n("bubble--".concat(c.bubbleid)),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-1e10b008"],
]);
wx.createComponent(r);
