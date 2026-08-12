var e = require("../../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../../service/aegis/utils.js"),
  o = require("../../../utils/dom.js"),
  n = require("../../vendor.js"),
  l = {
    visible: !1,
    title: "",
    message: "",
    messageType: "text",
    confirmButtonText: "我知道了",
    cancelButtonText: "取消",
    showConfirmButton: !0,
    confirmButtonActive: !0,
    showCancelButton: !1,
    showClose: !1,
    maskClosable: !1,
    beforeClose: null,
    customClass: "",
    customStyle: "",
    messageAlign: "center",
    onHidden: null,
  },
  s = e({ selector: "#mp-dialog", onConfirm: n.noop, onCancel: n.noop }, l);
function i(n) {
  var l,
    i,
    r,
    c = Object.assign({}, s, n);
  if (
    ((null == c ? void 0 : c.context) &&
      (r = null == (l = c.context) ? void 0 : l.selectComponent(c.selector)),
    r ||
      (r =
        null == (i = o.getContext()) ? void 0 : i.selectComponent(c.selector)),
    r)
  ) {
    var a = r.$vm || r;
    delete c.context,
      delete c.selector,
      a.show(
        e(
          {
            callback: function (e, t, o) {
              "confirm" === e ? c.onConfirm(t) : c.onCancel(t, o);
            },
          },
          c
        )
      );
  } else
    t.reportEventSafely("DIALOG_ELE_NOT_FOUND", {
      ext3: null == c ? void 0 : c.selector,
      ext4: (null == c ? void 0 : c.message) || (null == c ? void 0 : c.title),
    });
}
function r(e) {
  var t = e.context || o.getContext(),
    n = null == t ? void 0 : t.selectComponent(e.selector || s.selector);
  if (n) return n.$vm || n;
}
(i.isShow = function (e) {
  var t = e.context || o.getContext(),
    n = null == t ? void 0 : t.selectComponent(e.selector || s.selector);
  if (n) return (n.$vm || n).isShow();
}),
  (i.hide = function (e) {
    var t = Object.assign({}, s, e);
    if (i.isShow(t)) {
      var o = r(t);
      o &&
        (o.i_showCancelButton
          ? o.handleCancel()
          : o.i_showClose
          ? o.onClickClose()
          : o.onClickOverlay());
    }
  }),
  (i.hideOnly = function (e) {
    var t = Object.assign({}, s, e);
    if (i.isShow(t)) {
      var o = r(t);
      o && o.hideOnly();
    }
  }),
  (i.getMessage = function (e) {
    var t = r(Object.assign({}, s, e));
    if (t) return t.i_message;
  }),
  (exports.Dialog = i),
  (exports.defaultOptions = l);
