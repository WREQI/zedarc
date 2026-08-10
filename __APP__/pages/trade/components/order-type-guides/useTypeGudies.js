require("../../../../app.js");
var e = require("../../../../common/vendor.js");
exports.usePopupSelect = function () {
  var u = e.ref(!1);
  return {
    showTypeGuides: u,
    handleTypeGuidesShow: function () {
      u.value = !0;
    },
    handleTypeGuidesHide: function () {
      u.value = !1;
    },
  };
};
