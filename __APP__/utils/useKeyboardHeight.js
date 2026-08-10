var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../@babel/runtime/helpers/asyncToGenerator");
require("../app.js");
var t = require("../common/vendor.js"),
  n = require("./getPlatform.js"),
  i = require("./system.js");
exports.useKeyboardHeight = function (a) {
  var u,
    o,
    c = t.ref(0),
    l = n.getPlatform().isMiniProgram,
    s = null == (u = t.getCurrentInstance()) ? void 0 : u.proxy,
    d = t.computed(function () {
      return "transform:translateY(-".concat(
        c.value,
        "px);transition:transform 0s;"
      );
    });
  return {
    keyboardStyle: l ? d : "",
    getKeyboardHeight:
      ((o = r(
        e().mark(function n(u) {
          var o, d, f, p, v;
          return e().wrap(function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  if (l) {
                    n.next = 2;
                    break;
                  }
                  return n.abrupt("return");
                case 2:
                  return (
                    (n.next = 4),
                    (function () {
                      var n = r(
                        e().mark(function r(n) {
                          return e().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return e.abrupt(
                                    "return",
                                    new Promise(function (e) {
                                      var r;
                                      n || e(200);
                                      var i =
                                        null ==
                                        (r =
                                          null == a ? void 0 : a.getElementCtx)
                                          ? void 0
                                          : r.call(a);
                                      t.index
                                        .createSelectorQuery()
                                        .in(i || s)
                                        .select(n)
                                        .boundingClientRect(function (r) {
                                          e(
                                            (null == r ? void 0 : r.height) ||
                                              200
                                          );
                                        })
                                        .exec();
                                    })
                                  );
                                case 1:
                                case "end":
                                  return e.stop();
                              }
                          }, r);
                        })
                      );
                      return function (e) {
                        return n.apply(this, arguments);
                      };
                    })()(null == a ? void 0 : a.elementSelector)
                  );
                case 4:
                  (d = n.sent),
                    (f = i.getWindowInfoCompact()),
                    (p = f.windowHeight),
                    (v = (
                      null == (o = null == u ? void 0 : u.detail)
                        ? void 0
                        : o.height
                    )
                      ? a.maxHeight || u.detail.height
                      : 0),
                    (c.value = Math.min(v, p - d - 30));
                case 9:
                case "end":
                  return n.stop();
              }
          }, n);
        })
      )),
      function (e) {
        return o.apply(this, arguments);
      }),
    recoverKeyboardHeight: function () {
      l && (c.value = 0);
    },
  };
};
