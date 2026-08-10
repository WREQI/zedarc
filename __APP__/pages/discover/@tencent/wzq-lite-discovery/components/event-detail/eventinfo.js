var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../common/vendor.js"),
  n = require("../../../../hooks/shareProtocol.js"),
  o = t.defineComponent({
    components: {},
    props: { eventData: { type: Object, default: null } },
    setup: function (o, r) {
      var a = this,
        c = r.emit,
        u = t.getCurrentInstance().proxy || t.getCurrentInstance();
      t.inject("stockBridge");
      var i = t.computed(function () {
          var e;
          try {
            return "热度".concat(
              n.tophotFormat(null == (e = o.eventData) ? void 0 : e.event_heat)
            );
          } catch (e) {}
          return "";
        }),
        s = t.ref(null),
        l = function () {
          return (
            (n = a),
            null,
            (o = e().mark(function n() {
              var o, r, a, c, i, s;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (o = 0),
                          (r = 0),
                          (e.next = 4),
                          new Promise(function (e, n) {
                            t.wx$1
                              .createSelectorQuery()
                              .in(u)
                              .select(".inner-tooltip-logo")
                              .boundingClientRect()
                              .exec(function (t) {
                                e(t);
                              });
                          })
                        );
                      case 4:
                        return (
                          (a = e.sent) &&
                            a.length > 0 &&
                            a[0] &&
                            ((c = a[0].bottom), (o = c)),
                          (e.next = 8),
                          new Promise(function (e, n) {
                            t.wx$1
                              .createSelectorQuery()
                              .in(u)
                              .select(".info-bar-content")
                              .boundingClientRect()
                              .exec(function (t) {
                                e(t);
                              });
                          })
                        );
                      case 8:
                        (i = e.sent) &&
                          i.length > 0 &&
                          ((s = i[0].bottom), (r = s)),
                          (p.value = o > r),
                          (e.next = 15);
                        break;
                      case 13:
                        (e.prev = 13), (e.t0 = e.catch(0));
                      case 15:
                      case "end":
                        return e.stop();
                    }
                },
                n,
                null,
                [[0, 13]]
              );
            })),
            new Promise(function (e, t) {
              var r = function (e) {
                  try {
                    c(o.next(e));
                  } catch (e) {
                    t(e);
                  }
                },
                a = function (e) {
                  try {
                    c(o.throw(e));
                  } catch (e) {
                    t(e);
                  }
                },
                c = function (t) {
                  return t.done
                    ? e(t.value)
                    : Promise.resolve(t.value).then(r, a);
                };
              c((o = o.apply(n, null)).next());
            })
          );
          var n, o;
        };
      t.watch(
        function () {
          return o.eventData;
        },
        function (e, n) {
          var r = o.eventData.event_summary;
          (s.value = r),
            t.nextTick$1(function () {
              (null == e ? void 0 : e.event_summary) !==
                (null == n ? void 0 : n.event_summary) &&
                setTimeout(function () {
                  l();
                }, 300);
            });
        },
        { immediate: !0, deep: !0 }
      );
      var p = t.ref(!1);
      return {
        hot: i,
        titleDesc: s,
        showWxTopTips: function () {
          c("showWxTopTips");
        },
        hasMore: p,
      };
    },
  }),
  r = t._export_sfc(o, [
    [
      "render",
      function (e, n, o, r, a, c) {
        return t.e(
          { a: e.eventData },
          e.eventData
            ? t.e(
                {
                  b: t.t(e.eventData.event_title),
                  c: t.n(
                    e.eventData.event_label_type &&
                      "tag-".concat(e.eventData.event_label_type)
                  ),
                  d: e.hasMore,
                },
                e.hasMore
                  ? {
                      e: t.o(function () {
                        return (
                          e.showWxTopTips && e.showWxTopTips.apply(e, arguments)
                        );
                      }, 4088),
                    }
                  : {},
                { f: t.t(e.titleDesc), g: !e.hasMore },
                e.hasMore
                  ? {}
                  : {
                      h: t.o(function () {
                        return (
                          e.showWxTopTips && e.showWxTopTips.apply(e, arguments)
                        );
                      }, 4089),
                    },
                { i: e.hot },
                e.hot ? { j: t.t(e.hot) } : {}
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-f02a72d4"],
  ]);
wx.createComponent(r);
