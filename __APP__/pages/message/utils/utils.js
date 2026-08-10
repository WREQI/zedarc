var l = require("../../../@babel/runtime/helpers/slicedToArray");
require("../../../@babel/runtime/helpers/Arrayincludes");
var n = require("../config/newBoxConfig.js"),
  i = require("../config/localConfig.js"),
  e = require("../../../utils/getPlatform.js"),
  o = require("../../../common/vendor.js"),
  u = require("../../../stores/app/useMode.js").useModeStore();
exports.dealBoxJumpUrl = function (r) {
  var a, t, v;
  try {
    var d =
        null == (a = n.config)
          ? void 0
          : a.filter(function (l) {
              var n, i;
              return null ==
                (i =
                  null == (n = null == l ? void 0 : l.type)
                    ? void 0
                    : n.split(","))
                ? void 0
                : i.includes(null == r ? void 0 : r.msg_name);
            }),
      s =
        null == (t = i.localConfig)
          ? void 0
          : t.filter(function (l) {
              var n, i;
              return null ==
                (i =
                  null == (n = null == l ? void 0 : l.type)
                    ? void 0
                    : n.split(","))
                ? void 0
                : i.includes(null == r ? void 0 : r.msg_name);
            }),
      c = (null == r ? void 0 : r.msg_para) || "";
    try {
      (null == r ? void 0 : r.msg_para_encode) &&
        (c = decodeURIComponent(null == r ? void 0 : r.msg_para_encode));
    } catch (l) {}
    var p = c.split("&"),
      f = {};
    null == p ||
      p.forEach(function (n) {
        var i = n.split("="),
          e = l(i, 2),
          o = e[0],
          u = e[1];
        o && (f[o] = u);
      });
    var m = (null == d ? void 0 : d[0]) || {};
    if ((null == s ? void 0 : s.length) > 0) {
      var g = (function (l) {
        var n = e.getPlatform(),
          i = n.isInZxgXcx,
          o = n.isInWzqXcx,
          r = n.isWeixin,
          a = n.isLightWeb,
          t = n.isMpPlugin;
        return i
          ? null == l
            ? void 0
            : l.zxg_xcx
          : o
          ? null == l
            ? void 0
            : l.wzq_xcx
          : t
          ? u.simpleMode
            ? null == l
              ? void 0
              : l.wzq_xcx
            : null == l
            ? void 0
            : l.zxg_xcx
          : r && a
          ? null == l
            ? void 0
            : l.lite_h5
          : r && !a
          ? null == l
            ? void 0
            : l.wzq_h5
          : "";
      })((null == s ? void 0 : s[0]) || {});
      g && (m = Object.assign(m, g));
    }
    var h = {};
    null == (v = null == m ? void 0 : m.params) ||
      v.forEach(function (l) {
        if (null == f ? void 0 : f[null == l ? void 0 : l.pValue]) {
          var n = "".concat(
            null == f ? void 0 : f[null == l ? void 0 : l.pValue]
          );
          h[null == l ? void 0 : l.pKey] = n;
        } else l.pDefaultValue && (h[null == l ? void 0 : l.pKey] = "".concat(null == l ? void 0 : l.pDefaultValue));
      });
    var x = (null == m ? void 0 : m.path)
      ? o.dist.urltools.make(null == m ? void 0 : m.path, h)
      : "";
    return {
      path: (null == m ? void 0 : m.path) || "",
      name: (null == m ? void 0 : m.name) || "",
      params: h || {},
      opt: m.opt || "",
      fullPath: x,
    };
  } catch (d) {
    return { path: "", name: "", params: {}, opt: "", fullPath: "" };
  }
};
