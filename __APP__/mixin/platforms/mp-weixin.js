var t = require("../../common/vendor.js"),
  o = require("../../utils/getPlatform.js"),
  e = {
    data: function () {
      var o;
      return {
        rootFontSize:
          (null == (o = t.index) ? void 0 : o.cacheRootFontSize) || "41.4px",
      };
    },
    onLoad: function () {
      var e;
      if (!(null == (e = t.index) ? void 0 : e.cacheRootFontSize)) {
        var i = 414;
        try {
          var n = t.wx$1.getSystemInfoSync().screenWidth;
          n > 0 && (i = n);
          var r = Math.min(430, i) / 10 + "px";
          this.rootFontSize !== r && (this.rootFontSize = r),
            o.getPlatform().isPCWeixin || (t.index.cacheRootFontSize = r);
        } catch (n) {}
      }
    },
  };
exports.Mixin = e;
