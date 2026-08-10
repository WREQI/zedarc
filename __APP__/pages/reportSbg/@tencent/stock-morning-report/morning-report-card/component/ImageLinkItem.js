var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../common/vendor.js"),
  t = require("../../../stock-base/visibilityObserver/index.js"),
  r = require("../../../stock-news-sdk/index.js");
require("../../utils/apiMapping.js");
var i = require("../../../stock-news-core/utils/force2https.js"),
  o = null,
  c = !1,
  u = {
    props: {
      item: { type: Object, default: {} },
      moduleName: { type: String, default: "" },
      newsId: { type: String, default: "" },
    },
    setup: function (u, s) {
      var a = this,
        l = (s.emit, n.getCurrentInstance().proxy || n.getCurrentInstance()),
        d = n.ref(!0),
        m = n.computed(function () {
          return (
            u.item &&
            u.item.link &&
            u.item.link.includes("/mp/v2/index.html#/apply/index")
          );
        }),
        p = n.computed(function () {
          return u.item && u.item.link && (!m.value || !d.value);
        });
      return (
        n.onMounted(function () {
          return (
            (i = a),
            null,
            (s = e().mark(function i() {
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), r.sdk.hasBindBrokerAccount(this);
                      case 2:
                        (d.value = e.sent),
                          p.value &&
                            (o = new t.VisibilityObserver(
                              "#imgLink",
                              {
                                once: !0,
                                callback: function (e, t) {
                                  e &&
                                    !c &&
                                    (n.StockBridge.report(
                                      "news.morningreport.image_link_visited",
                                      { module: u.moduleName, newsid: u.newsId }
                                    ),
                                    (c = !0));
                                },
                                intersection: { threshold: 0 },
                              },
                              { context: l }
                            ));
                      case 4:
                      case "end":
                        return e.stop();
                    }
                },
                i,
                this
              );
            })),
            new Promise(function (e, n) {
              var t = function e(t) {
                  try {
                    o(s.next(t));
                  } catch (e) {
                    n(e);
                  }
                },
                r = function (e) {
                  try {
                    o(s.throw(e));
                  } catch (e) {
                    n(e);
                  }
                },
                o = function (n) {
                  return n.done
                    ? e(n.value)
                    : Promise.resolve(n.value).then(t, r);
                };
              o((s = s.apply(i, null)).next());
            })
          );
          var i, s;
        }),
        n.onUnmounted(function () {
          var e, n;
          p.value &&
            (null ==
              (n =
                null == (e = null == o ? void 0 : o.observer)
                  ? void 0
                  : e.disconnect) ||
              n.call(e));
        }),
        {
          showImageLink: p,
          imageLinkOpenAccountClick: function (e) {
            n.StockBridge.report("news.morningreport.image_link_click", {
              module: u.moduleName,
              newsid: u.newsId,
            }),
              n.wx$1.switchTab({ url: "/pages/index/trade" });
          },
          forceHttpsAdvanced: i.forceHttpsAdvanced,
        }
      );
    },
  },
  s = n._export_sfc(u, [
    [
      "render",
      function (e, t, r, i, o, c) {
        return n.e(
          { a: i.showImageLink },
          i.showImageLink
            ? n.e(
                { b: i.forceHttpsAdvanced(r.item.url), c: r.item.desc },
                r.item.desc ? { d: n.t(r.item.desc) } : {},
                {
                  e: n.o(function (e) {
                    return i.imageLinkOpenAccountClick(r.item.link);
                  }, 4884),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-cb15c38f"],
  ]);
wx.createComponent(s);
