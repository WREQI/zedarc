var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../../common/vendor.js");
require("../../hooks/useScroll.js");
var n = require("../../utils/api.js"),
  t = {
    components: {
      platContent: function () {
        return "../../components/platmessage/platContent.js";
      },
    },
    setup: function () {
      var t = this,
        o = r.getCurrentInstance().proxy || r.getCurrentInstance(),
        u = r.ref(!1);
      return {
        loadMore: function () {
          o.$refs.contentRef.loadMore();
        },
        pullRefresh: function () {
          return (
            (r = t),
            null,
            (s = e().mark(function r() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (u.value = !0),
                        o.$refs.contentRef.refresh(),
                        setTimeout(function () {
                          u.value = !1;
                        }, 300),
                        (e.next = 5),
                        n.readMessage({ msg_box_type: "platform_notify" })
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, r);
            })),
            new Promise(function (e, n) {
              var t = function (e) {
                  try {
                    u(s.next(e));
                  } catch (e) {
                    n(e);
                  }
                },
                o = function (e) {
                  try {
                    u(s.throw(e));
                  } catch (e) {
                    n(e);
                  }
                },
                u = function (r) {
                  return r.done
                    ? e(r.value)
                    : Promise.resolve(r.value).then(t, o);
                };
              u((s = s.apply(r, null)).next());
            })
          );
          var r, s;
        },
        refreshTriggered: u,
      };
    },
  };
Array || r.resolveComponent("platContent")();
var o = r._export_sfc(t, [
  [
    "render",
    function (e, n, t, o, u, s) {
      return {
        a: r.sr("contentRef", "ed205379-0"),
        b: o.refreshTriggered,
        c: r.o(function (e) {
          return o.pullRefresh();
        }, 1250),
        d: r.o(function (e) {
          return o.loadMore();
        }, 1251),
      };
    },
  ],
  ["__scopeId", "data-v-ed205379"],
]);
wx.createComponent(o);
