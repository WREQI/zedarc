var e = require("../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../@babel/runtime/helpers/createClass"),
  i = require("../../../../@babel/runtime/helpers/possibleConstructorReturn"),
  n = require("../../../../@babel/runtime/helpers/assertThisInitialized"),
  t = require("../../../../@babel/runtime/helpers/inherits"),
  u = require("../../../../@babel/runtime/helpers/createSuper"),
  a = require("../../../../@babel/runtime/helpers/typeof");
require("../../../../app.js");
var l = Object.defineProperty,
  s = function (e, r, i) {
    return (
      (function (e, r, i) {
        r in e
          ? l(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[r] = i);
      })(e, "symbol" != a(r) ? r + "" : r, i),
      i
    );
  },
  o = require("../../../chooseImage/platform/mp-weixin.js"),
  b = require("../../../../config/enum.js"),
  p = (function (a) {
    t(o, a);
    var l = u(o);
    function o(r) {
      var t;
      if (
        (e(this, o),
        (t = l.call(this)),
        s(n(t), "side", b.IDCARD_SIDE.FRONT),
        r === b.IDCARD_SIDE.FRONT)
      )
        t.fileName = "id_front.png";
      else {
        if (r !== b.IDCARD_SIDE.BACK)
          throw "IdCard Handler's side prop only can be one of ENUM_SDK_CONSTANTS.IDCARD_SIDE";
        t.fileName = "id_back.png";
      }
      return (t.side = r), i(t);
    }
    return (
      r(o, [
        {
          key: "isExtraOcrNeed",
          value: function () {
            return !1;
          },
        },
      ]),
      o
    );
  })(o.MpWeinxin);
exports.MpWeinxin = p;
