var e = require("../../../../common/vendor.js"),
  t = ({ exports: {} }.exports = (function () {
    function e() {
      for (var e = 0, t = {}; e < arguments.length; e++) {
        var r = arguments[e];
        for (var o in r) t[o] = r[o];
      }
      return t;
    }
    function t(e) {
      return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    return (function r(o) {
      function n() {}
      function i(t, r, i) {
        if ("undefined" != typeof document) {
          "number" == typeof (i = e({ path: "/" }, n.defaults, i)).expires &&
            (i.expires = new Date(1 * new Date() + 864e5 * i.expires)),
            (i.expires = i.expires ? i.expires.toUTCString() : "");
          try {
            var c = JSON.stringify(r);
            /^[\{\[]/.test(c) && (r = c);
          } catch (e) {}
          (r = o.write
            ? o.write(r, t)
            : encodeURIComponent(String(r)).replace(
                /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                decodeURIComponent
              )),
            (t = encodeURIComponent(String(t))
              .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
              .replace(/[\(\)]/g, escape));
          var u = "";
          for (var p in i)
            i[p] &&
              ((u += "; " + p), !0 !== i[p] && (u += "=" + i[p].split(";")[0]));
          return (document.cookie = t + "=" + r + u);
        }
      }
      function c(e, r) {
        if ("undefined" != typeof document) {
          for (
            var n = {},
              i = document.cookie ? document.cookie.split("; ") : [],
              c = 0;
            c < i.length;
            c++
          ) {
            var u = i[c].split("="),
              p = u.slice(1).join("=");
            r || '"' !== p.charAt(0) || (p = p.slice(1, -1));
            try {
              var a = t(u[0]);
              if (((p = (o.read || o)(p, a) || t(p)), r))
                try {
                  p = JSON.parse(p);
                } catch (e) {}
              if (((n[a] = p), e === a)) break;
            } catch (e) {}
          }
          return e ? n[e] : n;
        }
      }
      return (
        (n.set = i),
        (n.get = function (e) {
          return c(e, !1);
        }),
        (n.getJSON = function (e) {
          return c(e, !0);
        }),
        (n.remove = function (t, r) {
          i(t, "", e(r, { expires: -1 }));
        }),
        (n.defaults = {}),
        (n.withConverter = r),
        n
      );
    })(function () {});
  })()),
  r = e.getDefaultExportFromCjs(t),
  o = Object.freeze(
    Object.defineProperty({ __proto__: null, default: r }, Symbol.toStringTag, {
      value: "Module",
    })
  );
(exports.cookie = r), (exports.js_cookie = o), (exports.js_cookieExports = t);
