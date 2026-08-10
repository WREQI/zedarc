var t = require("../../../../../../common/vendor.js"),
  e = require("../../../st-math/dist/index.js"),
  n = e.div_1(180, Math.PI),
  a = {
    props: { actions: { type: Object, required: !0 } },
    setup: function (a) {
      var r = t.ref({}),
        o = t.ref("");
      function u(t) {
        for (
          var n,
            a,
            r,
            o = Object.keys(t),
            u = o.length,
            s = 0,
            m = "",
            f = [],
            x = {},
            p = { startText: "", endText: "" },
            y = 0,
            h = 0;
          h < u;
          h++
        ) {
          var v = t[(m = o[h])];
          Array.isArray(v)
            ? ((s = Math.max(s, null != (n = d(v)) ? n : 0)),
              v.reduce(function (t, e) {
                var n;
                return (
                  (f = Object.keys(e)),
                  e.duration
                    ? ((y = e.duration), (p = c(m, e)))
                    : ((y =
                        (null == (n = null == e ? void 0 : e[f[0]])
                          ? void 0
                          : n.duration) || 0),
                      (p = i(m, e))),
                  l(x, t, p.startText),
                  l(x, t + y, p.endText),
                  t + e.duration
                );
              }, 0))
            : ((f = Object.keys(v)),
              "transform" !== m || v.duration
                ? ((s = Math.max(s, v.duration)),
                  (p = c(m, v)),
                  (y = v.duration))
                : ((y =
                    null !=
                    (r =
                      null == (a = null == v ? void 0 : v[f[0]])
                        ? void 0
                        : a.duration)
                      ? r
                      : 0),
                  (s = Math.max(s, y)),
                  (p = i(m, v))),
              l(x, "0", p.startText),
              l(x, y, p.endText));
        }
        return {
          result: Object.keys(x).map(function (t) {
            return ""
              .concat(e.mul_1(e.div_1(t, s), 100), "%{")
              .concat(x[t].join(""), "}");
          }),
          maxDuration: s,
        };
      }
      function c(t, e) {
        return {
          startText: "".concat(t, ":").concat(e.startValue, ";"),
          endText: "".concat(t, ":").concat(e.toValue, ";"),
        };
      }
      function i(t, e) {
        for (
          var n = { startValue: 0, toValue: 0, duration: 0 },
            a = "",
            r = "",
            o = Object.keys(e),
            u = 0;
          u < o.length;
          u++
        )
          (n = e[o[u]]),
            "rotate" === o[u] &&
              ((n.startValue = s(n.startValue) + "deg"),
              (n.toValue = s(n.toValue) + "deg")),
            /translate/.test(o[u]) &&
              ((n.startValue = n.startValue + "px"),
              (n.toValue = n.toValue + "px")),
            (a += "".concat(o[u], "(").concat(n.startValue, ") ")),
            (r += "".concat(o[u], "(").concat(n.toValue, ") "));
        return {
          startText: (a = "".concat(t, ":").concat(a, ";")),
          endText: (r = "".concat(t, ":").concat(r, ";")),
        };
      }
      function s(t) {
        return Math.ceil(e.mul_1(t, n));
      }
      function l(t, e, n) {
        t[e] ? t[e].push(n) : (t[e] = [n]);
      }
      function d(t) {
        return t.reduce(function (t, e) {
          return t + e.duration;
        }, 0);
      }
      function m() {
        return "animation-".concat(
          [1, 2]
            .map(function () {
              return "abcdefghijklmnopqrstuvwxyz".substr(
                Math.floor(e.mul_1(Math.random(), 26)),
                1
              );
            })
            .join("")
        );
      }
      return (
        t.onMounted(function () {}),
        {
          styleObj: r,
          timeFunc: o,
          createAnimation: function () {
            var t = u(a.actions),
              e = t.result,
              n = t.maxDuration,
              o = document.head || document.getElementsByTagName("head")[0],
              c = document.createElement("style"),
              i = m(),
              s = "@keyframes ".concat(i, " { ").concat(e.join(""), " }");
            o.appendChild(c),
              (c.type = "text/css"),
              c.appendChild(document.createTextNode(s)),
              (r.value = {
                animation: "".concat(n / 1e3, "s linear forwards ").concat(i),
              });
          },
          getCssText: u,
          getSingleProperty: c,
          getMultiProperty: i,
          rad2deg: s,
          setStyleMap: l,
          calDuration: d,
          getRandomName: m,
        }
      );
    },
  },
  r = t._export_sfc(a, [
    [
      "render",
      function (e, n, a, r, o, u) {
        return { a: t.s(r.styleObj) };
      },
    ],
  ]);
wx.createComponent(r);
