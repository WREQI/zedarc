var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  t = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  n = function (e, t, r) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  c = require("../../../../../../common/vendor.js"),
  a = {
    name: "EmojiSelect",
    components: {
      Emoji: function () {
        return "../emoji/Emoji.js";
      },
      ZxgGif: function () {
        return "../emoji/ZxgGifShow.js";
      },
    },
    props: { showEmojiPanel: { type: Boolean, default: !1 } },
    setup: function (o, a) {
      return (function (o, c) {
        for (var a in c || (c = {})) r.call(c, a) && n(o, a, c[a]);
        if (t) {
          var l,
            m = e(t(c));
          try {
            for (m.s(); !(l = m.n()).done; ) {
              a = l.value;
              i.call(c, a) && n(o, a, c[a]);
            }
          } catch (e) {
            m.e(e);
          } finally {
            m.f();
          }
        }
        return o;
      })(
        {},
        (function (e, o) {
          var t = c.ref(["wemoji", "semoji", "sgif"]),
            r = c.ref(1),
            i = c.ref("wemo"),
            n = c.ref(0);
          return {
            allEmojiTab: t,
            activeTab: r,
            emojiType: i,
            emoScrollTop: n,
            changeTab: function (e) {
              (r.value = e),
                1 === e &&
                  ((i.value = "wemo"),
                  c.StockBridge.report(
                    "shequ.comedit-comedit.wemoji_tab_click"
                  )),
                2 === e &&
                  ((i.value = "semo"),
                  c.StockBridge.report(
                    "shequ.comedit-comedit.semoji_tab_click"
                  )),
                3 === e &&
                  ((i.value = ""),
                  c.StockBridge.report("shequ.comedit-comedit.gif_tab_click"));
            },
            handleScroll: function (e) {
              n.value = e.target.scrollTop;
            },
            selectEmoji: function (e) {
              o("selectEmoji", e);
            },
            selectGif: function (e, t, r, i) {
              o("selectGif", {
                showId: e,
                localId: t,
                imageInfo: r,
                hasGif: i,
              });
            },
          };
        })(0, a.emit)
      );
    },
  };
Array || (c.resolveComponent("Emoji") + c.resolveComponent("ZxgGif"))();
var l = c._export_sfc(a, [
  [
    "render",
    function (e, o, t, r, i, n) {
      return c.e(
        { a: t.showEmojiPanel },
        t.showEmojiPanel
          ? {
              b: c.f(e.allEmojiTab, function (o, t, r) {
                return {
                  a: c.n(o),
                  b: c.o(
                    function (o) {
                      return e.changeTab(t + 1);
                    },
                    2512,
                    t
                  ),
                  c: c.n(e.activeTab === t + 1 ? "emo-act" : ""),
                  d: t,
                };
              }),
            }
          : {},
        { c: t.showEmojiPanel },
        t.showEmojiPanel
          ? c.e(
              { d: 3 !== e.activeTab },
              3 !== e.activeTab
                ? {
                    e: c.sr("scrollEmoji", "92687fb1-0"),
                    f: c.o(e.selectEmoji, 2513),
                    g: c.p({ "emoji-type": e.emojiType }),
                  }
                : { h: c.sr("gif", "92687fb1-1"), i: c.o(e.selectGif, 2514) },
              {
                j: c.o(function (o) {
                  return e.handleScroll(o);
                }, 2515),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-92687fb1"],
]);
wx.createComponent(l);
