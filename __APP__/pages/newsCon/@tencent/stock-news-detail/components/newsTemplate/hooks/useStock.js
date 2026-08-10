require("../../../../../../../common/vendor.js");
var r = require("../../../../stock-news-core/utils/newsParser.js");
exports.useStock = function () {
  return {
    TEXT_TYPE_ENUM: r.TEXT_TYPE_ENUM,
    stockCanNotJump: function (r) {
      return !(!r || !r.startsWith("bj"));
    },
  };
};
