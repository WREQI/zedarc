var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var r = require("../../common/vendor.js"),
  t = require("../../utils/getPlatform.js"),
  o = require("../../service/connect/maps.js"),
  a = require("../../service/connect/index.js");
require("../../service/aegis/platform/not-wujie.js");
var l = t.getPlatform(),
  u = l.isZxg,
  i =
    (l.bizPlatform,
    {
      components: {
        Index: function () {
          return "../../bizs/asset/index.js";
        },
      },
      behaviors: ["wx://component-export"],
      export: function () {
        return {};
      },
      sharedComponents: !0,
      props: { scrollHeight: { type: Number, default: 0 } },
      setup: function (t, l) {
        var i = l.emit,
          s = r.getCurrentInstance().proxy,
          c = r.ref(0),
          d = r.ref(!1),
          p = r.ref(null);
        r.provide("pageAssetIndexContext", s);
        var h,
          f = r.toRefs(t).scrollHeight;
        function v() {
          var e, n;
          null == (n = null == (e = p.value) ? void 0 : e.handleHide) ||
            n.call(e);
        }
        function m() {
          var e, n;
          a.updateExpectScheme(["5", "6", "10"]),
            (d.value = !0),
            null == (n = null == (e = p.value) ? void 0 : e.handleShow) ||
              n.call(e),
            o.handleMapsBeforeConnect("AssetIndex"),
            u ||
              (c.value > 0 &&
                (p.value.fetchData(), p.value.shouldShowTradeBackButton()),
              (c.value += 1));
        }
        function x() {
          return w.apply(this, arguments);
        }
        function w() {
          return (w = n(
            e().mark(function n() {
              var t, o, a, l;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        try {
                          null ==
                            (o =
                              null == (t = p.value)
                                ? void 0
                                : t.checkAndReportStaleRevokingItems) ||
                            o.call(t, "asset_pulldown_refresh");
                        } catch (e) {}
                        return (
                          (e.prev = 1),
                          null ==
                            (l =
                              null == (a = p.value)
                                ? void 0
                                : a.disconnectWss) || l.call(a),
                          (e.next = 5),
                          p.value.fetchData({ firstReq: !0, reload: !0 })
                        );
                      case 5:
                        r.index.stopPullDownRefresh(), (e.next = 11);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(1)),
                          r.index.stopPullDownRefresh();
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                n,
                null,
                [[1, 8]]
              );
            })
          )).apply(this, arguments);
        }
        return (
          r.provide("scrollHeight", f),
          r.onPageShow(function () {
            m();
          }),
          r.onPageHide(function () {
            v();
          }),
          r.onMounted(function () {
            d.value || m(), i("mounted");
          }),
          r.onUnmounted(function () {
            v();
          }),
          {
            indexRef: p,
            showTime: c,
            hasPageShow: d,
            handleReportTime: function (e) {
              i("reportTime", e);
            },
            handleHide: v,
            handleShow: m,
            handlePullDownRefresh: x,
            onPullDownRefresh:
              ((h = n(
                e().mark(function n() {
                  return e().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), x();
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, n);
                })
              )),
              function () {
                return h.apply(this, arguments);
              }),
            handleJumpQuote: function (e) {
              i("jumpQuote", e);
            },
          }
        );
      },
      onShow: function () {
        this.handleShow();
      },
      onHide: function () {
        this.handleHide();
      },
    });
Array || (r.resolveComponent("Index") + r.resolveComponent("GlobalWrap"))(),
  Math;
var s = r._export_sfc(i, [
  [
    "render",
    function (e, n, t, o, a, l) {
      return {
        a: r.sr("indexRef", "3ecd70b0-1,3ecd70b0-0"),
        b: r.o(o.handleReportTime),
        c: r.o(o.handleJumpQuote),
        d: r.sr("#global-wrap", "3ecd70b0-0"),
        e: r.p({
          id: "global-wrap",
          filePath: "/asset/index",
          defaultTheme: "",
        }),
      };
    },
  ],
]);
wx.createPage(s);
