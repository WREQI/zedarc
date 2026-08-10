require("../../../app.js");
var n = require("../../../common/vendor.js");
exports.useLongPress = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 200,
    u = arguments.length > 1 ? arguments[1] : void 0,
    o = n.ref(null),
    l = null;
  function t() {
    null !== l && (clearTimeout(l), (l = null)),
      null !== o.value && (o.value = null);
  }
  return (
    n.onBeforeUnmount(function () {
      t();
    }),
    {
      longPressActiveKey: o,
      onTouchstart: function (n, r) {
        t(),
          (l = setTimeout(function () {
            (o.value = r), null == u || u();
          }, e));
      },
      onTouchmove: function () {
        t();
      },
      onTouchcancel: function () {
        t();
      },
      clearLongPressActiveStatus: t,
    }
  );
};
