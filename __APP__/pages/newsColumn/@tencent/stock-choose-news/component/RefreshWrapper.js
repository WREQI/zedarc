var e = require("../../../../../common/vendor.js"),
  o = {
    props: {
      onEndReached: { type: Function, default: function () {} },
      onRefresh: { type: Function, default: function () {} },
      disableRefresh: { type: Boolean, default: !1 },
      disableLoadMore: { type: Boolean, default: !1 },
    },
    data: function () {
      return { isMP: !0 };
    },
    methods: {
      onRefreshH5: function () {
        var e = this;
        this.onRefresh()
          .then(function () {
            var o;
            null == (o = e.$refs.refresh) || o.stopPullDownRefresh();
          })
          .catch(function () {
            var o;
            null == (o = e.$refs.refresh) || o.stopPullDownRefresh();
          });
      },
    },
  };
Array ||
  (
    e.resolveComponent("st-reach-bottom") +
    e.resolveComponent("st-pull-refresh")
  )();
var n = e._export_sfc(o, [
  [
    "render",
    function (o, n, r, t, s, a) {
      return e.e(
        { a: s.isMP },
        s.isMP
          ? {}
          : {
              b: e.p({
                "on-reach-bottom": r.onEndReached,
                disabled: r.disableLoadMore,
              }),
              c: e.sr("refresh", "64d62f9e-0"),
              d: e.o(a.onRefreshH5, 3020),
              e: e.p({ disabled: r.disableRefresh }),
            }
      );
    },
  ],
]);
wx.createComponent(n);
