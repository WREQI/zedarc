require("../../app.js");
var e = require("../../common/vendor.js"),
  r = require("../../config/index.js"),
  o = require("../../utils/system.js"),
  u = e.defineStore("mode", function () {
    var u,
      i = e.ref(!1);
    try {
      var n = o.getAccountInfo();
      i.value =
        (null == (u = null == n ? void 0 : n.miniProgram)
          ? void 0
          : u.appId) !== r.MP_INFO.zxgxcx;
    } catch (e) {
      i.value = !0;
    }
    return {
      simpleMode: i,
      updateSimpleMode: function (e) {
        var r = e.value;
        i.value = "zxgxcx" !== r;
      },
    };
  });
exports.useModeStore = u;
