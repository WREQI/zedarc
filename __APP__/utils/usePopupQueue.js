var e = require("../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = require("../@babel/runtime/helpers/toConsumableArray");
require("../app.js");
var n = require("../common/vendor.js");
exports.usePopupQueue = function (t) {
  var u = r(t).sort(function (e, r) {
      return e.priority - r.priority;
    }),
    a = n.reactive(new Set()),
    i = new Set(),
    l = n.computed(function () {
      try {
        return u.filter(function (e) {
          return !a.has(e.id) && (!e.enabled || e.enabled());
        });
      } catch (e) {
        return [];
      }
    }),
    o = n.computed(function () {
      var e, r;
      return null !== (e = null == (r = l.value[0]) ? void 0 : r.id) &&
        void 0 !== e
        ? e
        : null;
    }),
    c = n.computed(function () {
      return 0 === l.value.length;
    });
  function f(r) {
    if (!a.has(r) && (a.add(r), i.size > 0)) {
      var n,
        t = e(i);
      try {
        for (t.s(); !(n = t.n()).done; ) {
          var u = n.value;
          a.delete(u);
        }
      } catch (e) {
        t.e(e);
      } finally {
        t.f();
      }
      i.clear();
    }
  }
  var v = {
    currentId: o,
    isDone: c,
    skip: f,
    next: f,
    refresh: function (r) {
      var n = o.value,
        t =
          null != r
            ? r
            : u
                .filter(function (e) {
                  return e.reevaluate;
                })
                .map(function (e) {
                  return e.id;
                });
      if (n) {
        var l,
          c = e(t);
        try {
          for (c.s(); !(l = c.n()).done; ) {
            var f = l.value;
            f !== n && a.has(f) && i.add(f);
          }
        } catch (e) {
          c.e(e);
        } finally {
          c.f();
        }
      } else {
        var v,
          d = e(t);
        try {
          for (d.s(); !(v = d.n()).done; ) {
            var s = v.value;
            a.delete(s);
          }
        } catch (e) {
          d.e(e);
        } finally {
          d.f();
        }
      }
    },
  };
  return n.provide("popupQueue", v), v;
};
