require("../app.js");
var n = require("../common/vendor.js");
exports.showToast = function (e) {
  var o,
    i = new Date().getTime();
  function t() {
    n.index.showLoadingInstance &&
      n.index.showLoadingInstance.uniqueKey === i &&
      (n.index.showLoadingInstance = void 0),
      o && (clearTimeout(o), (o = null));
  }
  return (
    n.index.showLoadingInstance ||
      (n.index.showLoadingInstance = { noAutoHide: !0, uniqueKey: i }),
    n.index.showToast(e),
    (o = setTimeout(function () {
      t();
    }, e.duration || 2500)),
    t
  );
};
