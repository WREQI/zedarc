var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var t = require("../../common/vendor.js"),
  n = require("../../stores/user/useUserinfo.js"),
  i = require("../../config/key.js"),
  o = require("../../utils/getPlatform.js"),
  s = {
    mixins: [require("../../mixin/platforms/index.js").pluginMixins],
    components: {
      HistoryOld: function () {
        return "./components/history/historyOld.js";
      },
      HistoryNew: function () {
        return "./components/history/historyNew.js";
      },
    },
    setup: function () {
      var i = o.getPlatform().isOEM,
        s = t.getCurrentInstance().proxy,
        a = t.ref(!0),
        u = t.ref(0),
        l = n.useUserinfoStore(),
        c = t.storeToRefs(l).userinfo,
        f = l.getUserInfo,
        h = t.ref(!1),
        p = t.ref(!0),
        d = t.computed(function () {
          var e;
          return (
            !i &&
            "1" ===
              (null == (e = null == c ? void 0 : c.value)
                ? void 0
                : e.funds_detail_control)
          );
        });
      return (
        t.onMounted(
          r(
            e().mark(function r() {
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((e.prev = 0), (e.t0 = t.isEmpty(c.value)), !e.t0)
                        ) {
                          e.next = 5;
                          break;
                        }
                        return (e.next = 5), f();
                      case 5:
                        e.next = 9;
                        break;
                      case 7:
                        (e.prev = 7), (e.t1 = e.catch(0));
                      case 9:
                        (h.value = !0),
                          t.index
                            .createSelectorQuery()
                            .in(s)
                            .select(".transfer-history-container")
                            .boundingClientRect(function (e) {
                              u.value = e.height;
                            })
                            .exec();
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                r,
                null,
                [[0, 7]]
              );
            })
          )
        ),
        {
          firstInit: p,
          hasInit: h,
          scrollWrapperHeight: u,
          initLoading: a,
          isFundDetailNewUser: d,
        }
      );
    },
    onShow: function () {
      var e, r, n;
      if (this.firstInit)
        return (
          (this.firstInit = !1),
          void t.index.setStorageSync(i.TRANSFER_DETAIL_CANCE_ORDER, "0")
        );
      null ==
        (n =
          null == (r = null == (e = this.$refs) ? void 0 : e.historyRef)
            ? void 0
            : r.handleShow) || n.call(r);
    },
  };
Array ||
  (
    t.resolveComponent("history-old") +
    t.resolveComponent("history-new") +
    t.resolveComponent("GlobalWrap")
  )(),
  Math;
var a = t._export_sfc(s, [
  [
    "render",
    function (e, r, n, i, o, s) {
      return t.e(
        { a: e.rootFontSize, b: i.hasInit },
        i.hasInit
          ? t.e(
              { c: !i.isFundDetailNewUser },
              i.isFundDetailNewUser
                ? { f: t.sr("historyRef", "27760d83-2,27760d83-0") }
                : {
                    d: t.sr("historyRef", "27760d83-1,27760d83-0"),
                    e: t.p({ "scroll-wrapper-height": i.scrollWrapperHeight }),
                  }
            )
          : {},
        {
          g: t.sr("#global-wrap", "27760d83-0"),
          h: t.p({
            id: "global-wrap",
            filePath: "/transfer/history",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
]);
wx.createPage(a);
