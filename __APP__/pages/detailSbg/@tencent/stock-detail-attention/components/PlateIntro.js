var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../common/vendor.js");
function n(e, n) {
  return new Promise(function (r) {
    t.wx$1
      .createSelectorQuery()
      .in(n)
      .select(e)
      .boundingClientRect()
      .exec(function (e) {
        r(e[0]);
      });
  });
}
var r = t.defineComponent({
    props: ["intro"],
    setup: function () {
      var r = this,
        o = t.getCurrentInstance().proxy || t.getCurrentInstance(),
        u = t.ref(!1),
        i = t.ref(!1);
      return (
        t.onMounted(function () {
          if ("mp" === t.StockBridge.ENV)
            setTimeout(function () {
              !(function () {
                return (
                  (t = r),
                  null,
                  (i = e().mark(function () {
                    var t, r, i, c;
                    return e().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), n(".wrapper", o);
                          case 2:
                            return (
                              (t = e.sent),
                              (r = null == t ? void 0 : t.width),
                              (e.next = 6),
                              n(".text", o)
                            );
                          case 6:
                            (i = e.sent),
                              (c = null == i ? void 0 : i.width),
                              (u.value = r < c);
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, i);
                  })),
                  new Promise(function (e, n) {
                    var r = function (e) {
                        try {
                          u(i.next(e));
                        } catch (e) {
                          n(e);
                        }
                      },
                      o = function (e) {
                        try {
                          u(i.throw(e));
                        } catch (e) {
                          n(e);
                        }
                      },
                      u = function (t) {
                        return t.done
                          ? e(t.value)
                          : Promise.resolve(t.value).then(r, o);
                      };
                    u((i = i.apply(t, null)).next());
                  })
                );
                var t, i;
              })();
            }, 200);
          else {
            var i = o.$refs.wrapper;
            u.value = i.offsetWidth < i.scrollWidth;
          }
        }),
        {
          overflow: u,
          extend: i,
          toggle: function () {
            u.value &&
              ((i.value = !i.value),
              i.value
                ? t.StockBridge.report("hq.plate_detail.brief_expand")
                : t.StockBridge.report("hq.plate_detail.brief_collapse"));
          },
        }
      );
    },
  }),
  o = t._export_sfc(r, [
    [
      "render",
      function (e, n, r, o, u, i) {
        return t.e(
          { a: t.t(e.intro), b: e.overflow },
          e.overflow ? { c: t.t(e.extend ? "收起" : "展开") } : {},
          {
            d: e.extend ? 1 : "",
            e: t.o(function (t) {
              return e.toggle();
            }, 3201),
          }
        );
      },
    ],
    ["__scopeId", "data-v-28785e02"],
  ]);
wx.createComponent(o);
