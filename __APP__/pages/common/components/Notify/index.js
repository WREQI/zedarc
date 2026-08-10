var e = require("../../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../../utils/dom.js"),
  o = {
    title: "",
    message: "",
    duration: 2e3,
    status: "success",
    customIconClass: "",
  },
  s = e({ selector: "#notify" }, o);
(exports.Notify = function (e) {
  var o,
    l,
    n,
    r = Object.assign({}, s, e);
  if (
    ((null == r ? void 0 : r.context) &&
      (n = null == (o = r.context) ? void 0 : o.selectComponent(r.selector)),
    n ||
      (n =
        null == (l = t.getContext()) ? void 0 : l.selectComponent(r.selector)),
    n)
  ) {
    var c = n.$vm || n;
    return delete r.context, delete r.selector, c.show(r), c;
  }
}),
  (exports.defaultOptions = o);
