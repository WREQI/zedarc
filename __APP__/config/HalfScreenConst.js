require("../app.js");
var e = require("../service/aegis/utils.js");
function t(e) {
  var t = [];
  return (
    e.isKeyBoard && t.push("keyboard"),
    e.isBulletin && t.push("bulletin"),
    t.length ? (t.unshift("with"), t.join("_")) : "normal"
  );
}
function i(e) {
  return {
    normal: 658,
    with_keyboard: 1019,
    with_bulletin: 746,
    with_keyboard_bulletin: 1107,
    confirm_with_error_tip: 737,
  };
}
function r(e) {
  var t = {
    notSplit: {
      normal: 600,
      with_keyboard: 1049,
      with_bulletin: 688,
      with_keyboard_bulletin: 1137,
      confirm_with_error_tip: 679,
    },
  };
  return e && t[e]
    ? t[e]
    : {
        normal: 600,
        with_keyboard: 961,
        with_bulletin: 688,
        with_keyboard_bulletin: 1049,
        confirm_with_error_tip: 679,
      };
}
(exports.HALF_SCREEN_BAND_ASSIST_NORMAL_HEIGHT = 738),
  (exports.HALF_SCREEN_EMBEDED_PWD_HEIGHT = 892),
  (exports.HalfScreenCondtionHeight = 609),
  (exports.HalfScreenFourCondHeight = 1020),
  (exports.HalfScreenThreeCondHeight = 816),
  (exports.getClassicFormHeight = r),
  (exports.getEmbeddedFormHeight = function (i) {
    var o = t({ isKeyBoard: i.isKeyBoard, isBulletin: i.isBulletin }),
      n = i.simpleMode
        ? (i.version,
          {
            normal: 658,
            with_keyboard: 1019,
            with_bulletin: 746,
            with_keyboard_bulletin: 1107,
            confirm_with_error_tip: 737,
          })
        : r(i.version);
    return (
      n[o] ||
      (e.reportEventSafely("mon_trade_embedded_height_miss", {
        ext3: "heightKey:".concat(o),
        ext4: "simpleMode:"
          .concat(i.simpleMode, ",version:")
          .concat(i.version || "default"),
      }),
      n.normal)
    );
  }),
  (exports.getHalfHeightWithKeyBoard = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e.simpleMode
      ? (e.version,
        {
          normal: 658,
          with_keyboard: 1019,
          with_bulletin: 746,
          with_keyboard_bulletin: 1107,
          confirm_with_error_tip: 737,
        }).with_keyboard
      : r(e.version).with_keyboard;
  }),
  (exports.getHeightKey = t),
  (exports.getSimpleFormHeight = i);
