var n = require("../../../../../../../common/vendor.js");
Array || (n.resolveComponent("Mins") + n.resolveComponent("Index"))();
var e = n._export_sfc(
  {
    name: "MpZxg",
    components: {
      Index: function () {
        return "./index.js";
      },
      Mins: function () {
        return "../../../../../../stock-widget/@tencent/stockfe-hq-chart/src/chart/Mins.js";
      },
    },
    data: function () {
      return { destroyMins: !0, showMins: !1 };
    },
    methods: {
      handleMinsToggle: function (n) {
        var e = n.showMins;
        n.destroyMins
          ? ((this.destroyMins = !0), (this.showMins = !1))
          : ((this.destroyMins = !1), (this.showMins = e));
      },
    },
  },
  [
    [
      "render",
      function (e, t, s, i, o, r) {
        return {
          a: n.w(
            function (e, t, s) {
              var i = e.market,
                o = e.scode,
                r = e.width,
                a = e.height,
                d = e.showMins,
                c = e.destroyMins;
              return n.e(
                { a: !c },
                c
                  ? {}
                  : {
                      b: n.sr(
                        "minsComponent",
                        "46975f98-1-" + s + ",46975f98-0"
                      ),
                      c: d,
                      d: "46975f98-1-" + s + ",46975f98-0",
                      e: n.p({
                        width: r,
                        height: a,
                        market: String(i),
                        scode: String(o),
                        skin: "plain",
                        hideIndicator: !0,
                        disableInteract: !0,
                      }),
                    },
                { f: s, g: t }
              );
            },
            { name: "mins-chart", path: "a", vueId: "46975f98-0" }
          ),
          b: n.o(r.handleMinsToggle, 1216),
        };
      },
    ],
    ["__scopeId", "data-v-46975f98"],
  ]
);
wx.createComponent(e);
