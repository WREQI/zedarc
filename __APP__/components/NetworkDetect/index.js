var e = require("../../@babel/runtime/helpers/objectSpread2"),
  o = require("../../common/vendor.js"),
  n = {
    visible: !1,
    mask: !0,
    showClose: !0,
    maskClosable: !1,
    onHidden: null,
  },
  t = e(
    {
      selector: "#network-detect-component",
      onConfirm: o.noop,
      onCancel: o.noop,
      onHidden: o.noop,
    },
    n
  );
function r(e) {
  var n,
    r,
    l =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : t.selector,
    i =
      e ||
      (null == (r = null == (n = o.index) ? void 0 : n.getGlobalWrapCtx)
        ? void 0
        : r.call(n)),
    s = null == i ? void 0 : i.selectComponent(l);
  if (s) return s;
}
function l(o) {
  var n = Object.assign({}, t, o),
    l = r(n.context, n.selector);
  if (l) {
    var i = l.$vm || l;
    delete n.context, delete n.selector, i.show(e({}, n));
  }
}
(l.isShow = function (e) {
  var o = r(e.context, e.selector);
  if (o) return (o.$vm || o).isShow();
}),
  (l.hide = function (e) {
    var o = Object.assign({}, t, e);
    if (l.isShow(o)) {
      var n = (function (e) {
        var o = r(e.context, e.selector);
        if (o) return o.$vm || o;
      })(o);
      n && (n.i_showClose ? n.onClickClose() : n.onClickOverlay());
    }
  }),
  (exports.defaultOptions = n),
  (exports.networkDetect = l);
