var t = require("../../../../../../common/vendor.js"),
  e = {},
  n = {
    slidingContainerSelector: ".tab-wrapper",
    scrollWrapperSelector: ".brief-tab",
    damping: 0.4,
    enableScrollX: !0,
    enableScrollY: !1,
  },
  r = {
    props: {
      tabs: {
        type: Object,
        default: function () {
          return {};
        },
        required: !0,
      },
      selectTab: { type: String, default: "", required: !0 },
    },
    data: function () {
      return { scrollOptions: null };
    },
    mounted: function () {
      var t = this;
      setTimeout(function () {
        t.scrollOptions = n;
      }, 0);
    },
    methods: {
      gotoTab: function (t) {
        this.$emit("tab", t);
      },
    },
  };
"function" == typeof e && e(r);
var o = t._export_sfc(r, [
  [
    "render",
    function (e, n, r, o, a, c) {
      return {
        a: t.f(r.tabs, function (e, n, o) {
          return {
            a: t.t(e.name),
            b: e.show,
            c: n,
            d: r.selectTab === n ? 1 : "",
            e: t.o(
              function (t) {
                return c.gotoTab(n);
              },
              3221,
              n
            ),
          };
        }),
        b: a.scrollOptions,
      };
    },
  ],
  ["__scopeId", "data-v-dc4c0700"],
]);
wx.createComponent(o);
