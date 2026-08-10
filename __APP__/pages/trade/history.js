var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var t = require("../../stores/user/useUserinfo.js"),
  o = require("../../common/vendor.js"),
  s = require("../../utils/getPlatform.js"),
  n = {
    components: {
      HistoryNew: function () {
        return "./components/history/history-new.js";
      },
      HistoryOld: function () {
        return "./components/history/history-old.js";
      },
    },
    mixins: [require("../../mixin/platforms/index.js").pluginMixins],
    setup: function () {
      var n = s.getPlatform().isOEM,
        a = o.ref("init"),
        i = { init: "init", oldModule: "oldModule", newModule: "newModule" },
        l = t.useUserinfoStore().getUserInfo;
      return (
        r(
          e().mark(function r() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), l();
                    case 3:
                      if (
                        ((e.t1 = +e.sent.new_order_list_control),
                        (e.t0 = 1 != e.t1),
                        e.t0)
                      ) {
                        e.next = 7;
                        break;
                      }
                      e.t0 = n;
                    case 7:
                      if (!e.t0) {
                        e.next = 11;
                        break;
                      }
                      (a.value = i.oldModule), (e.next = 12);
                      break;
                    case 11:
                      a.value = i.newModule;
                    case 12:
                      e.next = 17;
                      break;
                    case 14:
                      (e.prev = 14),
                        (e.t2 = e.catch(0)),
                        (a.value = i.oldModule);
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[0, 14]]
            );
          })
        )(),
        { isFirstShow: !0, flag: a, GrayFlags: i }
      );
    },
    onShow: function () {
      var e;
      this.isFirstShow
        ? (this.isFirstShow = !1)
        : this.flag === this.GrayFlags.newModule &&
          (null == (e = this.$refs.historyNewRef) || e.handleShow());
    },
  };
Array ||
  (
    o.resolveComponent("HistoryNew") +
    o.resolveComponent("HistoryOld") +
    o.resolveComponent("GlobalWrap")
  )(),
  Math;
var a = o._export_sfc(n, [
  [
    "render",
    function (e, r, t, s, n, a) {
      return o.e(
        { a: e.rootFontSize, b: s.flag === s.GrayFlags.newModule },
        s.flag === s.GrayFlags.newModule
          ? { c: o.sr("historyNewRef", "99be0b34-1,99be0b34-0") }
          : (s.flag, s.GrayFlags.oldModule, {}),
        {
          d: s.flag === s.GrayFlags.oldModule,
          e: o.sr("#global-wrap", "99be0b34-0"),
          f: o.p({
            id: "global-wrap",
            filePath: "/trade/history",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
]);
wx.createPage(a);
