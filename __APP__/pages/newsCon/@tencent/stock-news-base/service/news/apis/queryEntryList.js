var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.defineProperties,
  l = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  o = function (e, r, n) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  c = function (e, t) {
    for (var n in t || (t = {})) u.call(t, n) && o(e, n, t[n]);
    if (i) {
      var l,
        c = r(i(t));
      try {
        for (c.s(); !(l = c.n()).done; ) {
          n = l.value;
          a.call(t, n) && o(e, n, t[n]);
        }
      } catch (e) {
        c.e(e);
      } finally {
        c.f();
      }
    }
    return e;
  },
  s = function (e, r) {
    return n(e, l(r));
  },
  y = require("../gray.js");
(exports.adaptQueryEntryListResp = function (e) {
  var r, t, n, l, i;
  if (!e) return e;
  var u = null != (r = e.retcode) ? r : e.code,
    a = "0" === String(u) || 0 === u,
    o =
      null !=
      (l = null != (n = null == (t = e.data) ? void 0 : t.items) ? n : e.items)
        ? l
        : [],
    y = c({}, e),
    p = (Array.isArray(o) ? o : []).map(function (e) {
      var r, t, n, l, i, u, a, o, y;
      return s(c({}, e), {
        entry_id: String(
          null != (t = null != (r = e.id) ? r : e.entry_id) ? t : ""
        ),
        name: String(null != (n = e.name) ? n : ""),
        title: String(null != (l = e.title) ? l : ""),
        content: String(null != (i = e.content) ? i : ""),
        category_id: String(null != (u = e.category_id) ? u : ""),
        category_title: String(null != (a = e.category_title) ? a : ""),
        related_content: String(null != (o = e.related_content) ? o : ""),
        display: Number(null != (y = e.display) ? y : 0),
      });
    });
  return s(c({}, y), {
    code: a ? 0 : Number(null != u ? u : -1),
    msg: String(null != (i = e.msg) ? i : ""),
    items: p,
  });
}),
  (exports.queryEntryList = function (r) {
    return (
      (t = this),
      null,
      (n = e().mark(function t() {
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  "return",
                  y.newsRequest("/zxg/news/simple_text/query_entry_list", r)
                );
              case 1:
              case "end":
                return e.stop();
            }
        }, t);
      })),
      new Promise(function (e, r) {
        var l = function (e) {
            try {
              u(n.next(e));
            } catch (e) {
              r(e);
            }
          },
          i = function (e) {
            try {
              u(n.throw(e));
            } catch (e) {
              r(e);
            }
          },
          u = function (r) {
            return r.done ? e(r.value) : Promise.resolve(r.value).then(l, i);
          };
        u((n = n.apply(t, null)).next());
      })
    );
    var t, n;
  });
