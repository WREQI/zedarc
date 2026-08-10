require("../../../app.js");
var o = require("../../../common/vendor.js"),
  e = require("../../../utils/system.js");
exports.useAutoScrollIntoView = function (r) {
  var t = 0;
  return {
    setPageTop: function (o) {
      t = (null == o ? void 0 : o.scrollTop) || 0;
    },
    execPageScroll: function (i, n) {
      o.index
        .createSelectorQuery()
        .in(n)
        .select(i)
        .boundingClientRect(function (i) {
          if (i && i.top) {
            var n = e.getWindowInfoCompact(),
              l = n.windowHeight,
              c = n.screenWidth,
              u = null == r ? void 0 : r.bottom;
            (null == r ? void 0 : r.bottom) || (u = (240 * c) / 375);
            var s = i.top + i.height + u - l;
            if (o.isNumber(s) && s > 0) {
              var d = s + t + 30;
              if (null == r ? void 0 : r.onScroll) return void r.onScroll(d);
              o.index.pageScrollTo({ scrollTop: d, duration: 100 });
            }
          }
        })
        .exec();
    },
  };
};
