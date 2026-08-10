var t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = require("../../../../../../common/vendor.js"),
  o = {
    inject: { stockBridge: { default: {} } },
    props: {
      config: {
        type: Object,
        default: function () {
          return {
            bubblelocal: "up",
            arrowforel: "right",
            arrowforbubble: "right",
            text: "文案内容",
            selector: "目标元素",
            otherheight: 12,
          };
        },
      },
    },
    setup: function (o, n) {
      var i = n.emit;
      e.getCurrentInstance().proxy || e.getCurrentInstance();
      var r = e.ref({ opacity: 0 }),
        c = e.ref({}),
        l = e.ref({});
      function f() {
        i("hideNewbubble");
      }
      return (
        e.onMounted(function () {
          window.addEventListener("touchstart", f, !1),
            setTimeout(function () {
              e.nextTick$1(function () {
                var e, n;
                try {
                  var f = (function (e) {
                    var o,
                      n = t(e);
                    try {
                      for (n.s(); !(o = n.n()).done; ) {
                        var i = o.value,
                          r = i.getBoundingClientRect();
                        if (r.x >= 0 && r.width > 0) return i;
                      }
                    } catch (t) {
                      n.e(t);
                    } finally {
                      n.f();
                    }
                    return null;
                  })(
                    document.querySelectorAll(
                      null == (e = o.config) ? void 0 : e.selector
                    )
                  );
                  if (!f) return;
                  var u = f.getBoundingClientRect(),
                    a = document
                      .querySelector(".coin-task-bubble-text")
                      .getBoundingClientRect(),
                    d = document
                      .querySelector(".coin-task-bubble-arrow")
                      .getBoundingClientRect(),
                    h = o.config.bubblelocal,
                    b = o.config.arrowforel,
                    g = o.config.arrowforbubble,
                    w = "",
                    p = "",
                    s = "";
                  "up" === h
                    ? ((w =
                        u.top -
                        a.height -
                        d.height -
                        (+o.config.otherheight || 0) +
                        "px"),
                      "left" === b
                        ? (p = "".concat(
                            u.left + (+o.config.otherleft || 0),
                            "px"
                          ))
                        : "mid" === b
                        ? (p = "".concat(
                            u.left +
                              u.width / 2 -
                              d.width / 2 +
                              (+o.config.otherleft || 0),
                            "px"
                          ))
                        : "right" === b &&
                          (p = "".concat(
                            u.left +
                              u.width -
                              d.width +
                              (+o.config.otherleft || 0),
                            "px"
                          )),
                      "left" === g ||
                        ("mid" === g
                          ? (s = -a.width / 2 + d.width / 2 + "px")
                          : "right" === g &&
                            (s = "".concat(-a.width + d.width, "px"))))
                    : "down" === h &&
                      ((w = "".concat(
                        u.top + u.height + (+o.config.otherheight || 0),
                        "px"
                      )),
                      "left" === b
                        ? (p = "".concat(
                            u.left + (+o.config.otherleft || 0),
                            "px"
                          ))
                        : "mid" === b
                        ? (p = "".concat(
                            u.left +
                              u.width / 2 -
                              d.width / 2 +
                              (+o.config.otherleft || 0),
                            "px"
                          ))
                        : "right" === b &&
                          (p = "".concat(
                            u.left +
                              u.width -
                              d.width +
                              (+o.config.otherleft || 0),
                            "px"
                          )),
                      "left" === g ||
                        ("mid" === g
                          ? (s = -a.width / 2 + d.width / 2 + "px")
                          : "right" === g &&
                            (s = "".concat(-a.width + d.width, "px")))),
                    (r.value = {
                      top: w,
                      left: p,
                      opacity: 1,
                      position:
                        (null == (n = o.config) ? void 0 : n.position) ||
                        "fixed",
                    }),
                    (c.value = { top: "" }),
                    (l.value = { left: s, top: "" }),
                    i("taskRealShow"),
                    setTimeout(function () {
                      i("hideNewbubble");
                    }, 2e3);
                } catch (f) {}
              });
            }, 800);
        }),
        e.onBeforeUnmount(function () {
          window && window.removeEventListener("touchstart", f);
        }),
        { bubbleStyle: r, arrowStyle: c, textStyle: l }
      );
    },
  },
  n = e._export_sfc(o, [
    [
      "render",
      function (t, o, n, i, r, c) {
        return e.e(
          { a: "down" === n.config.bubblelocal },
          "down" === n.config.bubblelocal ? { b: e.s(i.arrowStyle) } : {},
          {
            c: e.t(n.config.text),
            d: e.s(i.textStyle),
            e: "up" === n.config.bubblelocal,
          },
          "up" === n.config.bubblelocal ? { f: e.s(i.arrowStyle) } : {},
          { g: e.s(i.bubbleStyle) }
        );
      },
    ],
    ["__scopeId", "data-v-50d83708"],
  ]);
wx.createComponent(n);
