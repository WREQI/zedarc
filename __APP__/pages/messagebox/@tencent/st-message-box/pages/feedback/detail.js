var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../common/vendor.js"),
  n = require("../../utils/api.js"),
  s = require("../../utils/dealData.js"),
  r = {
    setup: function () {
      var r = t.ref({}),
        a = t.inject("stockBridge");
      function i() {
        return (
          (t = this),
          null,
          (i = e().mark(function () {
            var t, i, o, c;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (i =
                        (null == (t = a.getCurRouteInfo())
                          ? void 0
                          : t.query) || {}),
                      (o = i.id),
                      (e.next = 4),
                      n.queryFeedbackDetailMessage(o)
                    );
                  case 4:
                    (c = e.sent), (r.value = s.dealFeedbackDetailMessage(c));
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, c);
          })),
          new Promise(function (e, n) {
            var s = function (e) {
                try {
                  a(i.next(e));
                } catch (e) {
                  n(e);
                }
              },
              r = function (e) {
                try {
                  a(i.throw(e));
                } catch (e) {
                  n(e);
                }
              },
              a = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(s, r);
              };
            a((i = i.apply(t, null)).next());
          })
        );
        var t, i;
      }
      return (
        a.report("yy.message_box.feedbackdetail_page_brow"),
        t.onMounted(function () {
          i();
        }),
        t.onActivated(function () {
          i();
        }),
        { messageDetail: r, getDetail: i }
      );
    },
  },
  a = t._export_sfc(r, [
    [
      "render",
      function (e, n, s, r, a, i) {
        return t.e(
          {
            a: t.t(r.messageDetail.user_feedback_content),
            b: t.t(r.messageDetail.createdtime),
            c: t.t(r.messageDetail.record_type),
            d:
              r.messageDetail &&
              r.messageDetail.process_nodes &&
              r.messageDetail.process_nodes.length > 0,
          },
          r.messageDetail &&
            r.messageDetail.process_nodes &&
            r.messageDetail.process_nodes.length > 0
            ? {
                e: t.f(r.messageDetail.process_nodes, function (e, n, s) {
                  return t.e(
                    {
                      a: t.n(
                        n > 0 ? "f-d-list-item-l-dot-s" : "f-d-list-item-l-dot"
                      ),
                      b: t.t(e.title),
                      c: t.n(
                        n > 0
                          ? "f-d-list-item-r-content-g"
                          : "f-d-list-item-r-content"
                      ),
                      d: t.t(e.subtitle),
                      e: e.content,
                    },
                    e.content ? { f: t.t(e.content) } : {},
                    { g: t.t(e.processtime), h: n }
                  );
                }),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-37feddb2"],
  ]);
wx.createComponent(a);
