require("../../../app.js");
var e = require("../../../common/vendor.js"),
  r = require("../../../utils/getPlatform.js");
Math || t();
var t = function () {
    return "../../../node-modules/@tencent/st-status/mp/index.js";
  },
  n = {
    __name: "TransferLoading",
    setup: function (t) {
      var n = r.getPlatform().isSimpleMode;
      return function (r, t) {
        return {
          a: e.p({
            "is-simple-mode": e.unref(n),
            type: e.unref(e.COMMON_PAGE_STATUS).LOADING,
          }),
        };
      };
    },
  },
  s = e._export_sfc(n, [["__scopeId", "data-v-e9a86e6a"]]);
wx.createComponent(s);
