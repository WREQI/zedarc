var e = require("../../../../../../../common/vendor.js"),
  r = require("../../../hooks/useScroll.js"),
  n = "loading";
exports.indexItemUse = function () {
  var o = e.ref(!1),
    t = e.ref(null),
    u = e.ref(!1),
    s = e.getCurrentInstance().proxy || e.getCurrentInstance(),
    l = e.ref(n),
    f = r.useScroll().setInterActionHover;
  return {
    reportParams: {},
    contentRef: t,
    onListScroll: function (e) {},
    pullRefresh: function () {
      (u.value = !0),
        s.$refs.contentRef.refresh(),
        setTimeout(function () {
          u.value = !1;
        }, 300);
    },
    loadMore: function () {
      s.$refs.contentRef.loadMore();
    },
    refreshTriggered: u,
    refreshSuccess: function (e) {
      o.value = !0;
    },
    refreshFail: function () {
      l.value = "error";
    },
    pageStatus: l,
    didLoadData: o,
    onErrorRetry: function () {
      (l.value = n), s.$refs.contentRef.refresh();
    },
    onContainerScroll: function (e) {
      var r,
        n = null == (r = null == e ? void 0 : e.target) ? void 0 : r.scrollTop;
      f(n > 16);
    },
  };
};
