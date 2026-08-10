var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../../common/vendor.js"),
  n = {
    components: {
      feedbackContent: function () {
        return "../../components/feedback/feedbackContent.js";
      },
    },
    setup: function () {
      var n = this,
        t = r.getCurrentInstance().proxy || r.getCurrentInstance();
      r.inject("stockBridge").report("yy.message_box.feedbacklist_page_brow");
      var o = r.ref(!1);
      return {
        loadMore: function () {
          t.$refs.contentRef.loadMore();
        },
        pullRefresh: function () {
          return (
            (r = n),
            null,
            (c = e().mark(function r() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (o.value = !0),
                        t.$refs.contentRef.refresh(),
                        setTimeout(function () {
                          o.value = !1;
                        }, 300);
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, r);
            })),
            new Promise(function (e, n) {
              var t = function (e) {
                  try {
                    u(c.next(e));
                  } catch (e) {
                    n(e);
                  }
                },
                o = function (e) {
                  try {
                    u(c.throw(e));
                  } catch (e) {
                    n(e);
                  }
                },
                u = function (r) {
                  return r.done
                    ? e(r.value)
                    : Promise.resolve(r.value).then(t, o);
                };
              u((c = c.apply(r, null)).next());
            })
          );
          var r, c;
        },
        refreshTriggered: o,
      };
    },
  };
Array || r.resolveComponent("feedbackContent")();
var t = r._export_sfc(n, [
  [
    "render",
    function (e, n, t, o, c, u) {
      return {
        a: r.sr("contentRef", "02380cca-0"),
        b: o.refreshTriggered,
        c: r.o(function (e) {
          return o.pullRefresh();
        }, 1252),
        d: r.o(function (e) {
          return o.loadMore();
        }, 1253),
      };
    },
  ],
  ["__scopeId", "data-v-02380cca"],
]);
wx.createComponent(t);
