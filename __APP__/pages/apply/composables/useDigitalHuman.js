require("../../../app.js");
var e = require("../../../common/vendor.js");
exports.useDigitalHuman = function () {
  var r = e.ref(null),
    u = e.ref("");
  return {
    digitalHumanRef: r,
    videoId: u,
    updateVideoId: function (e) {
      u.value = e;
    },
  };
};
