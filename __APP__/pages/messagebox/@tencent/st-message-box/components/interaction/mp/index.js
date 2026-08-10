var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = require("../../../../../../../common/vendor.js"),
  t = require("../help.js"),
  a = function () {
    var a = n.inject("hqBridge"),
      o = n.inject("stockBridge"),
      i = n.ref([
        {
          name: "评论",
          type: t.IteractionItemType.COMMENT,
          redNum: 0,
          redTime: "",
          isPageShowed: !1,
        },
        {
          name: "赞",
          type: t.IteractionItemType.LIKE,
          redNum: 0,
          redTime: "",
          isPageShowed: !1,
        },
        {
          name: "关注",
          type: t.IteractionItemType.FOLLOW,
          redNum: 0,
          redTime: "",
          isPageShowed: !1,
        },
        {
          name: "被@",
          type: t.IteractionItemType.AT,
          redNum: 0,
          redTime: "",
          isPageShowed: !1,
        },
      ]),
      u = n.ref(-1),
      s = n.ref({
        followFinger: !0,
        touchMoveStopPropagation: !1,
        notNextTick: !0,
        direction: "horizontal",
        grabCursor: !0,
        setWrapperSize: !0,
        mousewheelControl: !0,
        observeParents: !0,
        loop: !1,
        slidesPerView: 1,
        touchAngle: 30,
        resistanceRatio: 0,
      }),
      c = function () {
        for (var e = 0; e < i.value.length; e++) l(e);
      },
      d = function (e) {
        var r;
        return { msg_num: null == (r = i.value[e]) ? void 0 : r.redNum };
      },
      l = function (e) {
        var r;
        if ((null == (r = i.value[e]) ? void 0 : r.redNum) > 0) {
          var n = t.getPageType(e);
          o.report("".concat(n, ".red_show"), d(e));
        }
      };
    return {
      hqBridge: a,
      stockBridge: o,
      swiperIndex: u,
      tabConfig: i,
      swiperOptions: s,
      requestRedNumber: function () {
        return (
          (n = exports),
          null,
          (a = e().mark(function () {
            var n, a, o, u, s, d, l, p, v, f, m, h;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), t.requestMessageUnreadNum("forum");
                    case 2:
                      if (0 !== (null == (s = e.sent) ? void 0 : s.code)) {
                        e.next = 38;
                        break;
                      }
                      (d = null == (n = s.data) ? void 0 : n.boxList),
                        (l = r(d)),
                        (e.prev = 6),
                        l.s();
                    case 8:
                      if ((p = l.n()).done) {
                        e.next = 30;
                        break;
                      }
                      (v = p.value), (f = r(i.value)), (e.prev = 11), f.s();
                    case 13:
                      if ((m = f.n()).done) {
                        e.next = 20;
                        break;
                      }
                      if (
                        ((h = m.value),
                        !(
                          v.sender === h.type &&
                          v.unreadnum > 0 &&
                          (null ==
                          (o =
                            null == (a = v.latestMessage) ? void 0 : a.datetime)
                            ? void 0
                            : o.length)
                        ))
                      ) {
                        e.next = 18;
                        break;
                      }
                      return (
                        (h.redNum = v.unreadnum),
                        (h.redTime =
                          null == (u = v.latestMessage) ? void 0 : u.datetime),
                        e.abrupt("break", 20)
                      );
                    case 18:
                      e.next = 13;
                      break;
                    case 20:
                      e.next = 25;
                      break;
                    case 22:
                      (e.prev = 22), (e.t0 = e.catch(11)), f.e(e.t0);
                    case 25:
                      return (e.prev = 25), f.f(), e.finish(25);
                    case 28:
                      e.next = 8;
                      break;
                    case 30:
                      e.next = 35;
                      break;
                    case 32:
                      (e.prev = 32), (e.t1 = e.catch(6)), l.e(e.t1);
                    case 35:
                      return (e.prev = 35), l.f(), e.finish(35);
                    case 38:
                      c();
                    case 39:
                    case "end":
                      return e.stop();
                  }
              },
              o,
              null,
              [
                [6, 32, 35, 38],
                [11, 22, 25, 28],
              ]
            );
          })),
          new Promise(function (e, r) {
            var t = function (e) {
                try {
                  i(a.next(e));
                } catch (e) {
                  r(e);
                }
              },
              o = function (e) {
                try {
                  i(a.throw(e));
                } catch (e) {
                  r(e);
                }
              },
              i = function (r) {
                return r.done
                  ? e(r.value)
                  : Promise.resolve(r.value).then(t, o);
              };
            i((a = a.apply(n, null)).next());
          })
        );
        var n, a;
      },
      doSwitchIndex: function (e) {
        (u.value = e),
          (function (e) {
            var r = i.value[e];
            if (r && !1 === r.isPageShowed) {
              var n = t.getPageType(e);
              o.report("".concat(n, ".page_show")), (r.isPageShowed = !0);
            }
          })(e),
          (function (e) {
            var r = i.value[e];
            r && (r.redNum = 0);
          })(e);
      },
      reportTabClick: function (e) {
        var r;
        if ((null == (r = i.value[e]) ? void 0 : r.redNum) > 0) {
          var n = t.getPageType(e);
          o.report("".concat(n, ".red_click"), d(e));
        }
      },
      findLatestRedIndex: function () {
        for (var e, r = "", n = 0, t = 0; t < i.value.length; t++) {
          var a = i.value[t];
          a.redNum <= 0 ||
            (((null == (e = a.redTime) ? void 0 : e.length)
              ? Date.parse(a.redTime)
              : 0) > (r.length ? Date.parse(r) : 0) &&
              ((r = a.redTime), (n = t)));
        }
        return n;
      },
    };
  },
  o = n.defineComponent({
    components: {
      tabbar: function () {
        return "../../tabs/mp.js";
      },
      comment: function () {
        return "./comment.js";
      },
      like: function () {
        return "./like.js";
      },
      follow: function () {
        return "./follow.js";
      },
      at: function () {
        return "./at.js";
      },
    },
    props: {},
    setup: function (e, r) {
      r.emit;
      var t = n.ref(!1),
        o = a(),
        i = (o.stockBridge, o.swiperIndex),
        u = o.tabConfig,
        s = o.requestRedNumber,
        c = o.doSwitchIndex,
        d = o.reportTabClick,
        l = o.findLatestRedIndex;
      return (
        s().then(function () {
          var e = l();
          c(e);
        }),
        n.onMounted(function () {}),
        {
          swiperIndex: i,
          tabConfig: u,
          switchTab: function (e) {
            (t.value = !0), d(e), c(e);
          },
          swiperChange: function (e) {
            var r = (null == e ? void 0 : e.detail) || {},
              n = r.current;
            "touch" === r.source && (c(n), (t.value = !1));
          },
        }
      );
    },
  });
Array ||
  (
    n.resolveComponent("tabbar") +
    n.resolveComponent("comment") +
    n.resolveComponent("like") +
    n.resolveComponent("follow") +
    n.resolveComponent("at")
  )();
var i = n._export_sfc(o, [
  [
    "render",
    function (e, r, t, a, o, i) {
      return {
        a: n.sr("tabBar", "5755a650-0"),
        b: n.o(e.switchTab, 1240),
        c: n.p({
          "cur-index": e.swiperIndex,
          "tab-config": e.tabConfig,
          "show-more": !1,
        }),
        d: n.p({ "is-selected": 0 === e.swiperIndex }),
        e: n.p({ "is-selected": 1 === e.swiperIndex }),
        f: n.p({ "is-selected": 2 === e.swiperIndex }),
        g: n.p({ "is-selected": 3 === e.swiperIndex }),
        h: e.swiperIndex,
        i: n.o(function () {
          return e.swiperChange && e.swiperChange.apply(e, arguments);
        }, 1241),
      };
    },
  ],
  ["__scopeId", "data-v-5755a650"],
]);
wx.createComponent(i);
