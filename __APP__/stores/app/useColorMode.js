require("../../app.js");
var e = require("../../common/vendor.js"),
  r = require("../../config/key.js"),
  o = e.defineStore("colorMode", function () {
    var o = e.ref("redRise"),
      n = e.computed(function () {
        return "greenRise" === o.value;
      }),
      t = function (n) {
        var t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (((o.value = n), t))
          try {
            e.index.setStorageSync(r.STORAGE_KEY_COLOR_MODE, n);
          } catch (e) {}
      };
    return {
      colorMode: o,
      isGreenRise: n,
      setColorMode: t,
      restoreColorMode: function () {
        try {
          var o = e.index.getStorageSync(r.STORAGE_KEY_COLOR_MODE) || null;
          ("greenRise" !== o && "redRise" !== o) || t(o, !1);
        } catch (e) {}
      },
    };
  });
exports.useColorModeStore = o;
