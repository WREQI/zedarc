require("../../../app.js");
var e = require("../../../common/vendor.js"),
  o = e.ref(!1);
exports.useCondProtocolCheck = function () {
  return {
    checkBoxClick: function () {
      if (!o.value)
        return e.index.showToast({ title: "请先勾选协议", icon: "none" }), !0;
    },
    hasCheckBoxClick: o,
  };
};
