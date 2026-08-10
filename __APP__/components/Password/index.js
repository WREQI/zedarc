var e,
  o = require("../../@babel/runtime/helpers/objectSpread2");
require("../../@babel/runtime/helpers/Arrayincludes");
var r = require("../../common/vendor.js");
require("../../service/broker.js");
var t = require("../../utils/getPlatform.js"),
  n = require("../../config/enum.js"),
  s = require("../../service/aegis/utils.js"),
  l = require("../../config/broker/11100/index.js"),
  i = t.getPlatform().isOEM,
  c = {
    BANK: "bank",
    TRADE: "trade",
    FUND: "fund",
    TRANSFER: "transfer",
    PWD: "pwd",
    EMBEDDED: "embedded",
    ELEVENTH: "eleventh",
    BIOMETRICS: "biometrics",
  },
  a = {
    check: !0,
    selector: "#password-component",
    theme: i ? c.FUND : c.EMBEDDED,
    isTrade: !1,
    showErrorWithNotice: !0,
    hideOnFinish: !0,
    verifyCGI: "verify",
    showActions: !(null == (e = l.brokerConfig.dictionary.Enties.resetpwd)
      ? void 0
      : e.hidden),
    noSubmit: !1,
    needUpdateSeed: !0,
    passwordName: "",
    extraInfo: {},
    checkPWDScenes: n.CHECK_PWD_SCENES.normal,
    onSuccess: r.noop,
    onCancel: r.noop,
    onDowngradeToPwd: r.noop,
    onDestroy: r.noop,
  },
  d = Object.assign({}, a);
function u(e) {
  var o, t, n, s, l, i, c, a;
  if (
    null ==
    (t = null == (o = null == e ? void 0 : e.context) ? void 0 : o.$refs)
      ? void 0
      : t[e.selector]
  )
    return e.context.$refs[e.selector];
  if (
    null == (n = null == e ? void 0 : e.context) ? void 0 : n.getGlobalWrapCtx
  ) {
    var d = e.context.getGlobalWrapCtx();
    if (null == (s = null == d ? void 0 : d.$refs) ? void 0 : s[e.selector])
      return d.$refs[e.selector];
  }
  return (null == (l = r.index) ? void 0 : l.getGlobalWrapCtx)
    ? null ==
      (a = null == (c = (i = r.index).getGlobalWrapCtx) ? void 0 : c.call(i))
      ? void 0
      : a.$refs[e.selector]
    : null;
}
(exports.Password = function (e) {
  (null == e ? void 0 : e.theme) === c.BIOMETRICS &&
    s.reportEventSafely("BIO_AUTH_START", {
      ext4: (null == e ? void 0 : e.sceneForReport) || "",
    });
  var o = Object.assign({}, d, e),
    r = u(o);
  if (r) {
    var t = r.$vm || r,
      n = o.isTrade;
    return (
      i ||
        (o.theme !== c.TRANSFER ||
          o.passwordName ||
          (o.passwordName = "资金密码"),
        o.theme !== c.PWD &&
          o.theme !== c.BANK &&
          o.theme !== c.BIOMETRICS &&
          ([c.TRADE, c.TRANSFER].includes(o.theme) && !o.isTrade && (n = !0),
          (o.theme = c.EMBEDDED)),
        (o.showCloseIcon = o.showCloseIcon || n),
        (o.showErrorWithNotice = !0)),
      delete o.context,
      delete o.selector,
      (t.close = function () {
        t.check = !1;
      }),
      (function (e, o) {
        Object.keys(o).forEach(function (r) {
          "showCloseIcon" === r && e.closeIcon
            ? (e[r] = e.closeIcon || o[r])
            : (e[r] = o[r]);
        });
      })(t, o),
      t
    );
  }
  s.reportEventSafely("PASSWORD_ELE_NOT_FOUND");
}),
  (exports.THEME = c),
  (exports.hidePassword = function (e) {
    var r,
      t = Object.assign({}, d, e),
      n = u(o({ selector: "#password-component" }, t)),
      s = (null == n ? void 0 : n.$vm) || n;
    s &&
      (delete t.context,
      delete t.selector,
      t.isEmitHideCallback
        ? null == (r = s.handleHide) || r.call(s)
        : (s.check = !1));
  });
