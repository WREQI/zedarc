require("../../../app.js");
var e = require("../../../common/vendor.js"),
  n = {
    sharedComponents: !0,
    components: {
      BoxComponent: function () {
        return "../newbox.js";
      },
    },
    props: { containerHeight: { type: String, default: "100vh" } },
    methods: {
      handleLoaded: function () {
        this.$emit("loaded");
      },
      handleStyleChange: function (e) {
        this.$emit("styleChange", e);
      },
      handlePullRefresh: function () {
        this.$emit("pullRefresh");
      },
    },
  };
Array || e.resolveComponent("box-component")();
var o = e._export_sfc(n, [
  [
    "render",
    function (n, o, t, r, a, h) {
      return {
        a: e.o(h.handleLoaded),
        b: e.o(h.handleStyleChange),
        c: e.o(h.handlePullRefresh),
        d: e.p({ "container-height": t.containerHeight }),
      };
    },
  ],
]);
wx.createComponent(o);
