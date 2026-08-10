var e = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = function (e, t, n) {
    return new Promise(function (r, a) {
      var c = function (e) {
          try {
            u(n.next(e));
          } catch (e) {
            a(e);
          }
        },
        o = function (e) {
          try {
            u(n.throw(e));
          } catch (e) {
            a(e);
          }
        },
        u = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(c, o);
        };
      u((n = n.apply(e, t)).next());
    });
  },
  r = require("../../../../../../common/vendor.js"),
  a = require("../../../stock-news-core/utils/knife.js"),
  c = require("../../api/request.js"),
  o = require("../../../../hooks/shareProtocol.js"),
  u = require("../../../stock-news-core/utils/force2https.js"),
  i = {
    props: {
      speed: { type: Number, default: 12 },
      eventId: { type: String, default: "" },
    },
    setup: function (i) {
      var s = this,
        l = r.getCurrentInstance().proxy || r.getCurrentInstance();
      r.inject("stockBridge");
      var d = r.ref(0),
        f = function () {
          return n(
            s,
            null,
            t().mark(function e() {
              var n, a;
              return t().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          new Promise(function (e, t) {
                            r.wx$1
                              .createSelectorQuery()
                              .in(l)
                              .selectAll(".danmaku-item")
                              .boundingClientRect()
                              .exec(function (t) {
                                var n = t[0].reduce(function (e, t) {
                                    return Math.min(e, t.left);
                                  }, t[0][0].left),
                                  r = t[0].reduce(function (e, t) {
                                    return Math.max(e, t.right);
                                  }, t[0][0].right);
                                e(r - n);
                              });
                          })
                        );
                      case 3:
                        return (
                          (n = e.sent),
                          (e.next = 6),
                          new Promise(function (e, t) {
                            r.wx$1
                              .createSelectorQuery()
                              .in(l)
                              .select(".danmaku-container")
                              .boundingClientRect()
                              .exec(function (t) {
                                t.length > 0 && t[0] && e(t[0].width);
                              });
                          })
                        );
                      case 6:
                        (a = e.sent),
                          (d.value = (n / a) * i.speed),
                          x(n, a),
                          (e.next = 12);
                        break;
                      case 10:
                        (e.prev = 10), (e.t0 = e.catch(0));
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 10]]
              );
            })
          );
        },
        m = r.ref([]);
      n(
        s,
        null,
        t().mark(function n() {
          var a, o, u, s, l, d;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (!i.eventId) {
                      t.next = 10;
                      break;
                    }
                    return (
                      (t.prev = 1),
                      (t.next = 4),
                      c.requestDanmaku({ event_id: i.eventId })
                    );
                  case 4:
                    if (
                      (o = t.sent) &&
                      0 == +o.code &&
                      (null == (a = null == o ? void 0 : o.data)
                        ? void 0
                        : a.length) > 0
                    ) {
                      for (
                        u = null == o ? void 0 : o.data, s = [[], []], l = 0;
                        l < u.length;
                        l++
                      )
                        (d = u[l]),
                          (s[(l + 1) % 2] = [].concat(e(s[(l + 1) % 2]), [d]));
                      (m.value = s),
                        r.nextTick$1(function () {
                          f();
                        });
                    }
                    t.next = 10;
                    break;
                  case 8:
                    (t.prev = 8), (t.t0 = t.catch(1));
                  case 10:
                  case "end":
                    return t.stop();
                }
            },
            n,
            null,
            [[1, 8]]
          );
        })
      );
      var p,
        v = function (e) {
          return (
            a.timeFormat(
              null == e ? void 0 : e.publish_time,
              a.timeFormatType.combination
            ) || ""
          );
        },
        h = r.ref(null),
        k = r.ref(null),
        x = function (e, a) {
          return n(
            s,
            null,
            t().mark(function n() {
              var c;
              return t().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (null == (c = r.wx$1) ? void 0 : c.createAnimation) &&
                        ((p = r.wx$1.createAnimation({
                          duration: 1e3 * d.value,
                          timingFunction: "linear",
                          delay: 0,
                        }))
                          .translateX("-".concat(e, "px"))
                          .step(),
                        p.translateX("".concat(a, "px")).step({ duration: 0 }),
                        (k.value = p.export()),
                        clearInterval(h.value),
                        (h.value = setInterval(function () {
                          p
                            .translateX("".concat(a, "px"))
                            .step({ duration: 0 }),
                            (k.value = p.export()),
                            setTimeout(function () {
                              p.translateX("-".concat(e, "px")).step(),
                                (k.value = p.export());
                            }, 100);
                        }, 1e3 * d.value + 100)));
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, n);
            })
          );
        };
      return (
        r.onUnmounted(function () {
          clearInterval(h.value);
        }),
        {
          animationDuration: d,
          danmakuList: m,
          danmakuContent: function (e) {
            return "share" === e.type
              ? "".concat(
                  e.created_at && v({ publish_time: e.created_at }),
                  " 分享这个事件"
                )
              : "post" === e.type
              ? e.content && e.content.length > 20
                ? "".concat(e.content.slice(0, 20), "...")
                : e.content || ""
              : null;
          },
          formatTime: v,
          animationData: k,
          createAnimation: x,
          likeFormat: function (e) {
            return o.tophotFormat(e);
          },
          forceHttpsAdvanced: u.forceHttpsAdvanced,
        }
      );
    },
  },
  s = r._export_sfc(i, [
    [
      "render",
      function (e, t, n, a, c, o) {
        return r.e(
          { a: a.danmakuList && a.danmakuList.length > 0 },
          a.danmakuList && a.danmakuList.length > 0
            ? {
                b: r.f(a.danmakuList, function (e, t, n) {
                  return r.e(
                    { a: 0 === t },
                    {},
                    {
                      b: r.f(e, function (e, t, n) {
                        return r.e(
                          {
                            a: a.forceHttpsAdvanced(e.user_image),
                            b: r.t(a.danmakuContent(e)),
                            c: e.like_cnt > 0,
                          },
                          e.like_cnt > 0
                            ? {
                                d: r.t(
                                  "".concat(a.likeFormat(e.like_cnt), "人点赞")
                                ),
                              }
                            : {},
                          { e: t }
                        );
                      }),
                      c: "danmaku-".concat(t),
                      d: r.n("line-".concat(t)),
                    }
                  );
                }),
                c: "".concat(a.animationDuration, "s"),
                d: a.animationData,
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-4fe1995c"],
  ]);
wx.createComponent(s);
