var e = require("../../../../../../common/vendor.js"),
  r = {
    components: {
      topicCircle: function () {
        return "../../components/topic-circle/index.js";
      },
    },
    setup: function (r, n) {
      n.emit;
      var t,
        o = e.getCurrentInstance().proxy || e.getCurrentInstance(),
        c = e.ref("light");
      try {
        var a = null == (t = e.wx$1) ? void 0 : t.getStorageSync("user/skin");
        a && (c.value = a);
      } catch (e) {}
      var i = e.ref(!1);
      return {
        theme: c,
        onListScroll: function (e) {},
        pullRefresh: function () {
          var e;
          (i.value = !0),
            null == (e = o.$refs.plazaContainer) || e.refresh(),
            setTimeout(function () {
              i.value = !1;
            }, 300);
        },
        loadMore: function () {
          var e;
          null == (e = o.$refs.plazaContainer) || e.loadMore();
        },
        refreshTriggered: i,
      };
    },
  };
Array || e.resolveComponent("topicCircle")();
var n = e._export_sfc(r, [
  [
    "render",
    function (r, n, t, o, c, a) {
      return {
        a: e.sr("plazaContainer", "5a1ef8cf-0"),
        b: o.theme,
        c: o.refreshTriggered,
        d: e.o(function (e) {
          return o.pullRefresh();
        }, 1305),
        e: e.o(function (e) {
          return o.loadMore();
        }, 1306),
        f: e.o(function () {
          return o.onListScroll && o.onListScroll.apply(o, arguments);
        }, 1307),
      };
    },
  ],
  ["__scopeId", "data-v-5a1ef8cf"],
]);
wx.createComponent(n);
