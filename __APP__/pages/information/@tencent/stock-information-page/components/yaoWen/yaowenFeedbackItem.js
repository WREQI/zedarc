var e = require("../../../../../../common/vendor.js"),
  t = {
    components: {
      yaowenItem: function () {
        return "./yaowenItem.js";
      },
    },
    props: ["news", "dismiss", "exposed"],
    data: function () {
      return { avtive: !1 };
    },
    computed: {
      animClass: function () {
        return this.dismiss || !this.exposed
          ? this.dismiss
            ? "anim-out"
            : "anim-in"
          : "";
      },
    },
    watch: {
      dismiss: function (e) {
        var t = this;
        e &&
          ((this.avtive = !1),
          setTimeout(function () {
            t.$emit("dismiss");
          }, 500));
      },
    },
    mounted: function () {
      var e = this;
      this.$nextTick(function () {
        setTimeout(function () {
          (e.avtive = !0),
            e.exposed ||
              setTimeout(function () {
                e.$emit("exposed");
              }, 100);
        }, 0);
      });
    },
    methods: {
      open: function () {
        this.$emit("open");
      },
      showFeedback: function () {
        this.$emit("showFeedback");
      },
    },
  };
Array || e.resolveComponent("yaowenItem")();
var n = e._export_sfc(t, [
  [
    "render",
    function (t, n, i, s, o, a) {
      return {
        a: e.o(function (e) {
          return a.open();
        }, 5340),
        b: e.o(function (e) {
          return a.showFeedback();
        }, 5341),
        c: e.p({ news: i.news }),
        d: e.n(o.avtive ? "active" : ""),
        e: e.n(a.animClass),
      };
    },
  ],
  ["__scopeId", "data-v-deead6b7"],
]);
wx.createComponent(n);
