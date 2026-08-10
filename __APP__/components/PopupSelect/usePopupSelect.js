var e = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var t = require("../../common/vendor.js");
exports.usePopupSelect = function (i) {
  var n = e(
      {
        direction: { verticle: "down", horizontal: "left" },
        list: [],
        defaultSelectFirst: !0,
      },
      i || {}
    ),
    o = t.reactive({ downY: 10, leftX: 10, rightX: 10, upY: 10 }),
    c = t.ref(!1),
    r = t.reactive({ text: "", value: "" });
  n.defaultSelectFirst &&
    (!r || "" === r.value) &&
    n.list.length > 0 &&
    Object.assign(r, n.list[0]);
  var l = t.ref(n.list),
    a = t.computed(function () {
      return r.value;
    }),
    u = t.computed(function () {
      return r.text;
    }),
    s = t.computed(function () {
      var e,
        t,
        i = "".concat(n.direction.verticle, "Y"),
        c = "".concat(n.direction.horizontal, "X");
      return (null == (e = n.offset) ? void 0 : e.top)
        ? "top: "
            .concat(o[i] + (null == (t = n.offset) ? void 0 : t.top), "px; ")
            .concat([n.direction.horizontal], ": ")
            .concat(o[c], "px")
        : "top: "
            .concat(o[i], "px; ")
            .concat([n.direction.horizontal], ": ")
            .concat(o[c], "px");
    });
  return {
    list: l,
    show: c,
    direction: n.direction,
    positionStyle: s,
    selectedKey: a,
    selectedText: u,
    handleDisplayClick: function (e) {
      Object.assign(o, e), (c.value = !0);
    },
    handleFilterItemClick: function (e) {
      Object.assign(r, e), (c.value = !1);
    },
    hideSelectPopup: function () {
      c.value = !1;
    },
    setSelectedKey: function (e) {
      var t,
        i =
          null == (t = l.value)
            ? void 0
            : t.find(function (t) {
                return t.value === e;
              });
      Object.assign(r, i);
    },
  };
};
