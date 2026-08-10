var e = require("../../../common/vendor.js"),
  t = {
    update: null,
    begin: null,
    loopBegin: null,
    changeBegin: null,
    change: null,
    changeComplete: null,
    loopComplete: null,
    complete: null,
    loop: 1,
    direction: "normal",
    autoplay: !0,
    timelineOffset: 0,
  },
  n = {
    duration: 1e3,
    delay: 0,
    endDelay: 0,
    easing: "easeOutElastic(1, .5)",
    round: 0,
  },
  r = [
    "translateX",
    "translateY",
    "translateZ",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "perspective",
    "matrix",
    "matrix3d",
  ],
  a = { CSS: {}, springs: {} };
function i(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function o(e, t) {
  return e.indexOf(t) > -1;
}
function u(e, t) {
  return e.apply(null, t);
}
var s = {
  arr: function (e) {
    return Array.isArray(e);
  },
  obj: function (e) {
    return o(Object.prototype.toString.call(e), "Object");
  },
  pth: function (e) {
    return s.obj(e) && e.hasOwnProperty("totalLength");
  },
  svg: function (e) {
    return e instanceof SVGElement;
  },
  inp: function (e) {
    return e instanceof HTMLInputElement;
  },
  dom: function (e) {
    return e.nodeType || s.svg(e);
  },
  str: function (e) {
    return "string" == typeof e;
  },
  fnc: function (e) {
    return "function" == typeof e;
  },
  und: function (e) {
    return void 0 === e;
  },
  nil: function (e) {
    return s.und(e) || null === e;
  },
  hex: function (e) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
  },
  rgb: function (e) {
    return /^rgb/.test(e);
  },
  hsl: function (e) {
    return /^hsl/.test(e);
  },
  col: function (e) {
    return s.hex(e) || s.rgb(e) || s.hsl(e);
  },
  key: function (e) {
    return (
      !t.hasOwnProperty(e) &&
      !n.hasOwnProperty(e) &&
      "targets" !== e &&
      "keyframes" !== e
    );
  },
};
function c(e) {
  var t = /\(([^)]+)\)/.exec(e);
  return t
    ? t[1].split(",").map(function (e) {
        return parseFloat(e);
      })
    : [];
}
function l(e, t) {
  var n = c(e),
    r = i(s.und(n[0]) ? 1 : n[0], 0.1, 100),
    o = i(s.und(n[1]) ? 100 : n[1], 0.1, 100),
    u = i(s.und(n[2]) ? 10 : n[2], 0.1, 100),
    l = i(s.und(n[3]) ? 0 : n[3], 0.1, 100),
    f = Math.sqrt(o / r),
    d = u / (2 * Math.sqrt(o * r)),
    p = d < 1 ? f * Math.sqrt(1 - d * d) : 0,
    h = d < 1 ? (d * f - l) / p : -l + f;
  function m(e) {
    var n = t ? (t * e) / 1e3 : e;
    return (
      (n =
        d < 1
          ? Math.exp(-n * d * f) * (1 * Math.cos(p * n) + h * Math.sin(p * n))
          : (1 + h * n) * Math.exp(-n * f)),
      0 === e || 1 === e ? e : 1 - n
    );
  }
  return t
    ? m
    : function () {
        var t = a.springs[e];
        if (t) return t;
        for (var n = 0, r = 0; ; )
          if (1 === m((n += 1 / 6))) {
            if (++r >= 16) break;
          } else r = 0;
        var i = n * (1 / 6) * 1e3;
        return (a.springs[e] = i), i;
      };
}
function f(e) {
  return (
    void 0 === e && (e = 10),
    function (t) {
      return Math.ceil(i(t, 1e-6, 1) * e) * (1 / e);
    }
  );
}
var d,
  p,
  h = (function () {
    var e = 0.1;
    function t(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function n(e, t) {
      return 3 * t - 6 * e;
    }
    function r(e) {
      return 3 * e;
    }
    function a(e, a, i) {
      return ((t(a, i) * e + n(a, i)) * e + r(a)) * e;
    }
    function i(e, a, i) {
      return 3 * t(a, i) * e * e + 2 * n(a, i) * e + r(a);
    }
    return function (t, n, r, o) {
      if (0 <= t && t <= 1 && 0 <= r && r <= 1) {
        var u = new Float32Array(11);
        if (t !== n || r !== o)
          for (var s = 0; s < 11; ++s) u[s] = a(s * e, t, r);
        return function (e) {
          return (t === n && r === o) || 0 === e || 1 === e ? e : a(c(e), n, o);
        };
      }
      function c(n) {
        for (var o = 0, s = 1; 10 !== s && u[s] <= n; ++s) o += e;
        --s;
        var c = o + ((n - u[s]) / (u[s + 1] - u[s])) * e,
          l = i(c, t, r);
        return l >= 0.001
          ? (function (e, t, n, r) {
              for (var o = 0; o < 4; ++o) {
                var u = i(t, n, r);
                if (0 === u) return t;
                t -= (a(t, n, r) - e) / u;
              }
              return t;
            })(n, c, t, r)
          : 0 === l
          ? c
          : (function (e, t, n, r, i) {
              var o,
                u,
                s = 0;
              do {
                (o = a((u = t + (n - t) / 2), r, i) - e) > 0
                  ? (n = u)
                  : (t = u);
              } while (Math.abs(o) > 1e-7 && ++s < 10);
              return u;
            })(n, o, o + e, t, r);
      }
    };
  })(),
  m =
    ((d = {
      linear: function () {
        return function (e) {
          return e;
        };
      },
    }),
    (p = {
      Sine: function () {
        return function (e) {
          return 1 - Math.cos((e * Math.PI) / 2);
        };
      },
      Expo: function () {
        return function (e) {
          return e ? Math.pow(2, 10 * e - 10) : 0;
        };
      },
      Circ: function () {
        return function (e) {
          return 1 - Math.sqrt(1 - e * e);
        };
      },
      Back: function () {
        return function (e) {
          return e * e * (3 * e - 2);
        };
      },
      Bounce: function () {
        return function (e) {
          for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11; );
          return (
            1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
          );
        };
      },
      Elastic: function (e, t) {
        void 0 === e && (e = 1), void 0 === t && (t = 0.5);
        var n = i(e, 1, 10),
          r = i(t, 0.1, 2);
        return function (e) {
          return 0 === e || 1 === e
            ? e
            : -n *
                Math.pow(2, 10 * (e - 1)) *
                Math.sin(
                  ((e - 1 - (r / (2 * Math.PI)) * Math.asin(1 / n)) *
                    (2 * Math.PI)) /
                    r
                );
        };
      },
    }),
    ["Quad", "Cubic", "Quart", "Quint"].forEach(function (e, t) {
      p[e] = function () {
        return function (e) {
          return Math.pow(e, t + 2);
        };
      };
    }),
    Object.keys(p).forEach(function (e) {
      var t = p[e];
      (d["easeIn" + e] = t),
        (d["easeOut" + e] = function (e, n) {
          return function (r) {
            return 1 - t(e, n)(1 - r);
          };
        }),
        (d["easeInOut" + e] = function (e, n) {
          return function (r) {
            return r < 0.5 ? t(e, n)(2 * r) / 2 : 1 - t(e, n)(-2 * r + 2) / 2;
          };
        }),
        (d["easeOutIn" + e] = function (e, n) {
          return function (r) {
            return r < 0.5
              ? (1 - t(e, n)(1 - 2 * r)) / 2
              : (t(e, n)(2 * r - 1) + 1) / 2;
          };
        });
    }),
    d);
function g(e, t) {
  if (s.fnc(e)) return e;
  var n = e.split("(")[0],
    r = m[n],
    a = c(e);
  switch (n) {
    case "spring":
      return l(e, t);
    case "cubicBezier":
      return u(h, a);
    case "steps":
      return u(f, a);
    default:
      return u(r, a);
  }
}
function v(e) {
  try {
    return document.querySelectorAll(e);
  } catch (e) {
    return;
  }
}
function y(e, t) {
  for (
    var n = e.length,
      r = arguments.length >= 2 ? arguments[1] : void 0,
      a = [],
      i = 0;
    i < n;
    i++
  )
    if (i in e) {
      var o = e[i];
      t.call(r, o, i, e) && a.push(o);
    }
  return a;
}
function b(e) {
  return e.reduce(function (e, t) {
    return e.concat(s.arr(t) ? b(t) : t);
  }, []);
}
function w(e) {
  return s.arr(e)
    ? e
    : (s.str(e) && (e = v(e) || e),
      e instanceof NodeList || e instanceof HTMLCollection
        ? [].slice.call(e)
        : [e]);
}
function x(e, t) {
  return e.some(function (e) {
    return e === t;
  });
}
function C(e) {
  var t = {};
  for (var n in e) t[n] = e[n];
  return t;
}
function M(e, t) {
  var n = C(e);
  for (var r in e) n[r] = t.hasOwnProperty(r) ? t[r] : e[r];
  return n;
}
function A(e, t) {
  var n = C(e);
  for (var r in t) n[r] = s.und(e[r]) ? t[r] : e[r];
  return n;
}
function B(e) {
  var t =
    /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
      e
    );
  if (t) return t[1];
}
function T(e, t) {
  return s.fnc(e) ? e(t.target, t.id, t.total) : e;
}
function S(e, t) {
  return e.getAttribute(t);
}
function k(e, t, n) {
  if (x([n, "deg", "rad", "turn"], B(t))) return t;
  var r = a.CSS[t + n];
  if (!s.und(r)) return r;
  var i = document.createElement(e.tagName),
    o =
      e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
  o.appendChild(i), (i.style.position = "absolute"), (i.style.width = 100 + n);
  var u = 100 / i.offsetWidth;
  o.removeChild(i);
  var c = u * parseFloat(t);
  return (a.CSS[t + n] = c), c;
}
function I(e, t, n) {
  if (t in e.style) {
    var r = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
      a = e.style[t] || getComputedStyle(e).getPropertyValue(r) || "0";
    return n ? k(e, a, n) : a;
  }
}
function P(e, t) {
  return s.dom(e) && !s.inp(e) && (!s.nil(S(e, t)) || (s.svg(e) && e[t]))
    ? "attribute"
    : s.dom(e) && x(r, t)
    ? "transform"
    : s.dom(e) && "transform" !== t && I(e, t)
    ? "css"
    : null != e[t]
    ? "object"
    : void 0;
}
function D(e) {
  if (s.dom(e)) {
    for (
      var t,
        n = e.style.transform || "",
        r = /(\w+)\(([^)]*)\)/g,
        a = new Map();
      (t = r.exec(n));

    )
      a.set(t[1], t[2]);
    return a;
  }
}
function N(e, t, n, r) {
  switch (P(e, t)) {
    case "transform":
      return (function (e, t, n, r) {
        var a = o(t, "scale")
            ? 1
            : 0 +
              (function (e) {
                return o(e, "translate") || "perspective" === e
                  ? "px"
                  : o(e, "rotate") || o(e, "skew")
                  ? "deg"
                  : void 0;
              })(t),
          i = D(e).get(t) || a;
        return (
          n && (n.transforms.list.set(t, i), (n.transforms.last = t)),
          r ? k(e, i, r) : i
        );
      })(e, t, r, n);
    case "css":
      return I(e, t, n);
    case "attribute":
      return S(e, t);
    default:
      return e[t] || 0;
  }
}
function O(e, t) {
  var n = /^(\*=|\+=|-=)/.exec(e);
  if (!n) return e;
  var r = B(e) || 0,
    a = parseFloat(t),
    i = parseFloat(e.replace(n[0], ""));
  switch (n[0][0]) {
    case "+":
      return a + i + r;
    case "-":
      return a - i + r;
    case "*":
      return a * i + r;
  }
}
function $(e, t) {
  if (s.col(e))
    return (function (e) {
      return s.rgb(e)
        ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec((t = e)))
          ? "rgba(" + n[1] + ",1)"
          : t
        : s.hex(e)
        ? (function (e) {
            var t = e.replace(
                /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                function (e, t, n, r) {
                  return t + t + n + n + r + r;
                }
              ),
              n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return (
              "rgba(" +
              parseInt(n[1], 16) +
              "," +
              parseInt(n[2], 16) +
              "," +
              parseInt(n[3], 16) +
              ",1)"
            );
          })(e)
        : s.hsl(e)
        ? (function (e) {
            var t,
              n,
              r,
              a =
                /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) ||
                /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),
              i = parseInt(a[1], 10) / 360,
              o = parseInt(a[2], 10) / 100,
              u = parseInt(a[3], 10) / 100,
              s = a[4] || 1;
            function c(e, t, n) {
              return (
                n < 0 && (n += 1),
                n > 1 && (n -= 1),
                n < 1 / 6
                  ? e + 6 * (t - e) * n
                  : n < 0.5
                  ? t
                  : n < 2 / 3
                  ? e + (t - e) * (2 / 3 - n) * 6
                  : e
              );
            }
            if (0 == o) t = n = r = u;
            else {
              var l = u < 0.5 ? u * (1 + o) : u + o - u * o,
                f = 2 * u - l;
              (t = c(f, l, i + 1 / 3)),
                (n = c(f, l, i)),
                (r = c(f, l, i - 1 / 3));
            }
            return (
              "rgba(" + 255 * t + "," + 255 * n + "," + 255 * r + "," + s + ")"
            );
          })(e)
        : void 0;
      var t, n;
    })(e);
  if (/\s/g.test(e)) return e;
  var n = B(e),
    r = n ? e.substr(0, e.length - n.length) : e;
  return t ? r + t : r;
}
function q(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function U(e) {
  for (var t, n = e.points, r = 0, a = 0; a < n.numberOfItems; a++) {
    var i = n.getItem(a);
    a > 0 && (r += q(t, i)), (t = i);
  }
  return r;
}
function _(e) {
  if (e.getTotalLength) return e.getTotalLength();
  switch (e.tagName.toLowerCase()) {
    case "circle":
      return (function (e) {
        return 2 * Math.PI * S(e, "r");
      })(e);
    case "rect":
      return (function (e) {
        return 2 * S(e, "width") + 2 * S(e, "height");
      })(e);
    case "line":
      return (function (e) {
        return q(
          { x: S(e, "x1"), y: S(e, "y1") },
          { x: S(e, "x2"), y: S(e, "y2") }
        );
      })(e);
    case "polyline":
      return U(e);
    case "polygon":
      return (function (e) {
        var t = e.points;
        return U(e) + q(t.getItem(t.numberOfItems - 1), t.getItem(0));
      })(e);
  }
}
function L(e, t) {
  var n = t || {},
    r =
      n.el ||
      (function (e) {
        for (var t = e.parentNode; s.svg(t) && s.svg(t.parentNode); )
          t = t.parentNode;
        return t;
      })(e),
    a = r.getBoundingClientRect(),
    i = S(r, "viewBox"),
    o = a.width,
    u = a.height,
    c = n.viewBox || (i ? i.split(" ") : [0, 0, o, u]);
  return {
    el: r,
    viewBox: c,
    x: c[0] / 1,
    y: c[1] / 1,
    w: o,
    h: u,
    vW: c[2],
    vH: c[3],
  };
}
function j(e, t, n) {
  function r(n) {
    void 0 === n && (n = 0);
    var r = t + n >= 1 ? t + n : 0;
    return e.el.getPointAtLength(r);
  }
  var a = L(e.el, e.svg),
    i = r(),
    o = r(-1),
    u = r(1),
    s = n ? 1 : a.w / a.vW,
    c = n ? 1 : a.h / a.vH;
  switch (e.property) {
    case "x":
      return (i.x - a.x) * s;
    case "y":
      return (i.y - a.y) * c;
    case "angle":
      return (180 * Math.atan2(u.y - o.y, u.x - o.x)) / Math.PI;
  }
}
function E(e, t) {
  var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
    r = $(s.pth(e) ? e.totalLength : e, t) + "";
  return {
    original: r,
    numbers: r.match(n) ? r.match(n).map(Number) : [0],
    strings: s.str(e) || t ? r.split(n) : [],
  };
}
function F(e) {
  return y(e ? b(s.arr(e) ? e.map(w) : w(e)) : [], function (e, t, n) {
    return n.indexOf(e) === t;
  });
}
function R(e) {
  var t = F(e);
  return t.map(function (e, n) {
    return { target: e, id: n, total: t.length, transforms: { list: D(e) } };
  });
}
function H(e, t) {
  var n = C(t);
  if ((/^spring/.test(n.easing) && (n.duration = l(n.easing)), s.arr(e))) {
    var r = e.length;
    2 !== r || s.obj(e[0])
      ? s.fnc(t.duration) || (n.duration = t.duration / r)
      : (e = { value: e });
  }
  var a = s.arr(e) ? e : [e];
  return a
    .map(function (e, n) {
      var r = s.obj(e) && !s.pth(e) ? e : { value: e };
      return (
        s.und(r.delay) && (r.delay = n ? 0 : t.delay),
        s.und(r.endDelay) && (r.endDelay = n === a.length - 1 ? t.endDelay : 0),
        r
      );
    })
    .map(function (e) {
      return A(e, n);
    });
}
function V(e, t) {
  var n = [],
    r = t.keyframes;
  for (var a in (r &&
    (t = A(
      (function (e) {
        for (
          var t = y(
              b(
                e.map(function (e) {
                  return Object.keys(e);
                })
              ),
              function (e) {
                return s.key(e);
              }
            ).reduce(function (e, t) {
              return e.indexOf(t) < 0 && e.push(t), e;
            }, []),
            n = {},
            r = function (r) {
              var a = t[r];
              n[a] = e.map(function (e) {
                var t = {};
                for (var n in e)
                  s.key(n) ? n == a && (t.value = e[n]) : (t[n] = e[n]);
                return t;
              });
            },
            a = 0;
          a < t.length;
          a++
        )
          r(a);
        return n;
      })(r),
      t
    )),
  t))
    s.key(a) && n.push({ name: a, tweens: H(t[a], e) });
  return n;
}
var W = {
  css: function (e, t, n) {
    return (e.style[t] = n);
  },
  attribute: function (e, t, n) {
    return e.setAttribute(t, n);
  },
  object: function (e, t, n) {
    return (e[t] = n);
  },
  transform: function (e, t, n, r, a) {
    if ((r.list.set(t, n), t === r.last || a)) {
      var i = "";
      r.list.forEach(function (e, t) {
        i += t + "(" + e + ") ";
      }),
        (e.style.transform = i);
    }
  },
};
function X(e, t) {
  R(e).forEach(function (e) {
    for (var n in t) {
      var r = T(t[n], e),
        a = e.target,
        i = B(r),
        o = N(a, n, i, e),
        u = O($(r, i || B(o)), o),
        s = P(a, n);
      W[s](a, n, u, e.transforms, !0);
    }
  });
}
function Y(e, t) {
  return y(
    b(
      e.map(function (e) {
        return t.map(function (t) {
          return (function (e, t) {
            var n = P(e.target, t.name);
            if (n) {
              var r = (function (e, t) {
                  var n;
                  return e.tweens.map(function (r) {
                    var a = (function (e, t) {
                        var n = {};
                        for (var r in e) {
                          var a = T(e[r], t);
                          s.arr(a) &&
                            1 ===
                              (a = a.map(function (e) {
                                return T(e, t);
                              })).length &&
                            (a = a[0]),
                            (n[r] = a);
                        }
                        return (
                          (n.duration = parseFloat(n.duration)),
                          (n.delay = parseFloat(n.delay)),
                          n
                        );
                      })(r, t),
                      i = a.value,
                      o = s.arr(i) ? i[1] : i,
                      u = B(o),
                      c = N(t.target, e.name, u, t),
                      l = n ? n.to.original : c,
                      f = s.arr(i) ? i[0] : l,
                      d = B(f) || B(c),
                      p = u || d;
                    return (
                      s.und(o) && (o = l),
                      (a.from = E(f, p)),
                      (a.to = E(O(o, f), p)),
                      (a.start = n ? n.end : 0),
                      (a.end = a.start + a.delay + a.duration + a.endDelay),
                      (a.easing = g(a.easing, a.duration)),
                      (a.isPath = s.pth(i)),
                      (a.isPathTargetInsideSVG = a.isPath && s.svg(t.target)),
                      (a.isColor = s.col(a.from.original)),
                      a.isColor && (a.round = 1),
                      (n = a),
                      a
                    );
                  });
                })(t, e),
                a = r[r.length - 1];
              return {
                type: n,
                property: t.name,
                animatable: e,
                tweens: r,
                duration: a.end,
                delay: r[0].delay,
                endDelay: a.endDelay,
              };
            }
          })(e, t);
        });
      })
    ),
    function (e) {
      return !s.und(e);
    }
  );
}
function Z(e, t) {
  var n = e.length,
    r = function (e) {
      return e.timelineOffset ? e.timelineOffset : 0;
    },
    a = {};
  return (
    (a.duration = n
      ? Math.max.apply(
          Math,
          e.map(function (e) {
            return r(e) + e.duration;
          })
        )
      : t.duration),
    (a.delay = n
      ? Math.min.apply(
          Math,
          e.map(function (e) {
            return r(e) + e.delay;
          })
        )
      : t.delay),
    (a.endDelay = n
      ? a.duration -
        Math.max.apply(
          Math,
          e.map(function (e) {
            return r(e) + e.duration - e.endDelay;
          })
        )
      : t.endDelay),
    a
  );
}
var z = 0,
  G = [],
  Q = (function () {
    var e;
    function t(n) {
      for (var r = G.length, a = 0; a < r; ) {
        var i = G[a];
        i.paused ? (G.splice(a, 1), r--) : (i.tick(n), a++);
      }
      e = a > 0 ? requestAnimationFrame(t) : void 0;
    }
    return (
      "undefined" != typeof document &&
        document.addEventListener("visibilitychange", function () {
          K.suspendWhenDocumentHidden &&
            (J()
              ? (e = cancelAnimationFrame(e))
              : (G.forEach(function (e) {
                  return e._onDocumentVisibility();
                }),
                Q()));
        }),
      function () {
        e ||
          (J() && K.suspendWhenDocumentHidden) ||
          !(G.length > 0) ||
          (e = requestAnimationFrame(t));
      }
    );
  })();
function J() {
  return !!document && document.hidden;
}
function K(e) {
  void 0 === e && (e = {});
  var r,
    a = 0,
    o = 0,
    u = 0,
    s = 0,
    c = null;
  function l(e) {
    var t =
      window.Promise &&
      new Promise(function (e) {
        return (c = e);
      });
    return (e.finished = t), t;
  }
  var f = (function (e) {
    var r = M(t, e),
      a = M(n, e),
      i = V(a, e),
      o = R(e.targets),
      u = Y(o, i),
      s = Z(u, a),
      c = z;
    return (
      z++,
      A(r, {
        id: c,
        children: [],
        animatables: o,
        animations: u,
        duration: s.duration,
        delay: s.delay,
        endDelay: s.endDelay,
      })
    );
  })(e);
  function d() {
    var e = f.direction;
    "alternate" !== e && (f.direction = "normal" !== e ? "normal" : "reverse"),
      (f.reversed = !f.reversed),
      r.forEach(function (e) {
        return (e.reversed = f.reversed);
      });
  }
  function p(e) {
    return f.reversed ? f.duration - e : e;
  }
  function h() {
    (a = 0), (o = p(f.currentTime) * (1 / K.speed));
  }
  function m(e, t) {
    t && t.seek(e - t.timelineOffset);
  }
  function g(e) {
    for (var t = 0, n = f.animations, r = n.length; t < r; ) {
      var a = n[t],
        o = a.animatable,
        u = a.tweens,
        s = u.length - 1,
        c = u[s];
      s &&
        (c =
          y(u, function (t) {
            return e < t.end;
          })[0] || c);
      for (
        var l = i(e - c.start - c.delay, 0, c.duration) / c.duration,
          d = isNaN(l) ? 1 : c.easing(l),
          p = c.to.strings,
          h = c.round,
          m = [],
          g = c.to.numbers.length,
          v = void 0,
          b = 0;
        b < g;
        b++
      ) {
        var w = void 0,
          x = c.to.numbers[b],
          C = c.from.numbers[b] || 0;
        (w = c.isPath
          ? j(c.value, d * x, c.isPathTargetInsideSVG)
          : C + d * (x - C)),
          h && ((c.isColor && b > 2) || (w = Math.round(w * h) / h)),
          m.push(w);
      }
      var M = p.length;
      if (M) {
        v = p[0];
        for (var A = 0; A < M; A++) {
          p[A];
          var B = p[A + 1],
            T = m[A];
          isNaN(T) || (v += B ? T + B : T + " ");
        }
      } else v = m[0];
      W[a.type](o.target, a.property, v, o.transforms),
        (a.currentValue = v),
        t++;
    }
  }
  function v(e) {
    f[e] && !f.passThrough && f[e](f);
  }
  function b(e) {
    var t = f.duration,
      n = f.delay,
      h = t - f.endDelay,
      y = p(e);
    (f.progress = i((y / t) * 100, 0, 100)),
      (f.reversePlayback = y < f.currentTime),
      r &&
        (function (e) {
          if (f.reversePlayback) for (var t = s; t--; ) m(e, r[t]);
          else for (var n = 0; n < s; n++) m(e, r[n]);
        })(y),
      !f.began && f.currentTime > 0 && ((f.began = !0), v("begin")),
      !f.loopBegan && f.currentTime > 0 && ((f.loopBegan = !0), v("loopBegin")),
      y <= n && 0 !== f.currentTime && g(0),
      ((y >= h && f.currentTime !== t) || !t) && g(t),
      y > n && y < h
        ? (f.changeBegan ||
            ((f.changeBegan = !0), (f.changeCompleted = !1), v("changeBegin")),
          v("change"),
          g(y))
        : f.changeBegan &&
          ((f.changeCompleted = !0), (f.changeBegan = !1), v("changeComplete")),
      (f.currentTime = i(y, 0, t)),
      f.began && v("update"),
      e >= t &&
        ((o = 0),
        f.remaining && !0 !== f.remaining && f.remaining--,
        f.remaining
          ? ((a = u),
            v("loopComplete"),
            (f.loopBegan = !1),
            "alternate" === f.direction && d())
          : ((f.paused = !0),
            f.completed ||
              ((f.completed = !0),
              v("loopComplete"),
              v("complete"),
              !f.passThrough && "Promise" in window && (c(), l(f)))));
  }
  return (
    l(f),
    (f.reset = function () {
      var e = f.direction;
      (f.passThrough = !1),
        (f.currentTime = 0),
        (f.progress = 0),
        (f.paused = !0),
        (f.began = !1),
        (f.loopBegan = !1),
        (f.changeBegan = !1),
        (f.completed = !1),
        (f.changeCompleted = !1),
        (f.reversePlayback = !1),
        (f.reversed = "reverse" === e),
        (f.remaining = f.loop),
        (r = f.children);
      for (var t = (s = r.length); t--; ) f.children[t].reset();
      ((f.reversed && !0 !== f.loop) || ("alternate" === e && 1 === f.loop)) &&
        f.remaining++,
        g(f.reversed ? f.duration : 0);
    }),
    (f._onDocumentVisibility = h),
    (f.set = function (e, t) {
      return X(e, t), f;
    }),
    (f.tick = function (e) {
      (u = e), a || (a = u), b((u + (o - a)) * K.speed);
    }),
    (f.seek = function (e) {
      b(p(e));
    }),
    (f.pause = function () {
      (f.paused = !0), h();
    }),
    (f.play = function () {
      f.paused &&
        (f.completed && f.reset(), (f.paused = !1), G.push(f), h(), Q());
    }),
    (f.reverse = function () {
      d(), (f.completed = !f.reversed), h();
    }),
    (f.restart = function () {
      f.reset(), f.play();
    }),
    (f.remove = function (e) {
      te(F(e), f);
    }),
    f.reset(),
    f.autoplay && f.play(),
    f
  );
}
function ee(e, t) {
  for (var n = t.length; n--; ) x(e, t[n].animatable.target) && t.splice(n, 1);
}
function te(e, t) {
  var n = t.animations,
    r = t.children;
  ee(e, n);
  for (var a = r.length; a--; ) {
    var i = r[a],
      o = i.animations;
    ee(e, o), o.length || i.children.length || r.splice(a, 1);
  }
  n.length || r.length || t.pause();
}
(K.version = "3.2.1"),
  (K.speed = 1),
  (K.suspendWhenDocumentHidden = !0),
  (K.running = G),
  (K.remove = function (e) {
    for (var t = F(e), n = G.length; n--; ) te(t, G[n]);
  }),
  (K.get = N),
  (K.set = X),
  (K.convertPx = k),
  (K.path = function (e, t) {
    var n = s.str(e) ? v(e)[0] : e,
      r = t || 100;
    return function (e) {
      return { property: e, el: n, svg: L(n), totalLength: _(n) * (r / 100) };
    };
  }),
  (K.setDashoffset = function (e) {
    var t = _(e);
    return e.setAttribute("stroke-dasharray", t), t;
  }),
  (K.stagger = function (e, t) {
    void 0 === t && (t = {});
    var n = t.direction || "normal",
      r = t.easing ? g(t.easing) : null,
      a = t.grid,
      i = t.axis,
      o = t.from || 0,
      u = "first" === o,
      c = "center" === o,
      l = "last" === o,
      f = s.arr(e),
      d = f ? parseFloat(e[0]) : parseFloat(e),
      p = f ? parseFloat(e[1]) : 0,
      h = B(f ? e[1] : e) || 0,
      m = t.start || 0 + (f ? d : 0),
      v = [],
      y = 0;
    return function (e, t, s) {
      if ((u && (o = 0), c && (o = (s - 1) / 2), l && (o = s - 1), !v.length)) {
        for (var g = 0; g < s; g++) {
          if (a) {
            var b = c ? (a[0] - 1) / 2 : o % a[0],
              w = c ? (a[1] - 1) / 2 : Math.floor(o / a[0]),
              x = b - (g % a[0]),
              C = w - Math.floor(g / a[0]),
              M = Math.sqrt(x * x + C * C);
            "x" === i && (M = -x), "y" === i && (M = -C), v.push(M);
          } else v.push(Math.abs(o - g));
          y = Math.max.apply(Math, v);
        }
        r &&
          (v = v.map(function (e) {
            return r(e / y) * y;
          })),
          "reverse" === n &&
            (v = v.map(function (e) {
              return i ? (e < 0 ? -1 * e : -e) : Math.abs(y - e);
            }));
      }
      return m + (f ? (p - d) / y : d) * (Math.round(100 * v[t]) / 100) + h;
    };
  }),
  (K.timeline = function (e) {
    void 0 === e && (e = {});
    var t = K(e);
    return (
      (t.duration = 0),
      (t.add = function (r, a) {
        var i = G.indexOf(t),
          o = t.children;
        function u(e) {
          e.passThrough = !0;
        }
        i > -1 && G.splice(i, 1);
        for (var c = 0; c < o.length; c++) u(o[c]);
        var l = A(r, M(n, e));
        l.targets = l.targets || e.targets;
        var f = t.duration;
        (l.autoplay = !1),
          (l.direction = t.direction),
          (l.timelineOffset = s.und(a) ? f : O(a, f)),
          u(t),
          t.seek(l.timelineOffset);
        var d = K(l);
        u(d), o.push(d);
        var p = Z(o, e);
        return (
          (t.delay = p.delay),
          (t.endDelay = p.endDelay),
          (t.duration = p.duration),
          t.seek(0),
          t.reset(),
          t.autoplay && t.play(),
          t
        );
      }),
      t
    );
  }),
  (K.easing = g),
  (K.penner = m),
  (K.random = function (e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e;
  }),
  getApp().globalData;
var ne = {
    components: {},
    props: {
      type: { type: String, default: "" },
      isIphoneX: { type: Boolean, default: !1 },
      isSharePage: { type: Boolean, default: !1 },
      pageType: { type: String, default: "" },
      reportPrefix: { type: String, default: "" },
      shareType: { type: String, default: "wx" },
      abtest: { type: String, default: "a" },
      bottomBar: {
        type: Object,
        default: function () {
          return {
            type: "comments",
            title: "评论",
            praise: "0",
            praiseTitle: "很牛",
            transpondTitle: "转发",
          };
        },
      },
      isTapLike: { type: Boolean, default: !1 },
      itemData: { type: Object, default: function () {} },
      forbidComment: { type: Boolean, default: !1 },
      forwardNum: { type: Number, default: 0 },
      from: { type: String, default: "" },
      isMiniApp: { type: Boolean, default: !1 },
      shareConfig: {},
      userinfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      bubbleText: { type: String, default: "" },
      showBubble: { type: Boolean, default: !1 },
      shareTab: { type: Boolean, default: !1 },
      ceiling: { type: Boolean, default: !1 },
      newsId: { type: String, default: "" },
    },
    inject: {
      onCheckUserAgreementStatus: {
        default: function () {
          return function () {};
        },
      },
      didAgreeUserAgreement: { default: { value: !0 } },
    },
    data: function () {
      var e;
      return {
        query: null == (e = this.$cApi) ? void 0 : e.getUrlParams(this),
        h5Type: null == window ? void 0 : window.h5Type,
        avator: "",
        newBox: !0,
        iconChanged: !1,
        setBottomBarShareIcon: !1,
        hasRedDot: !1,
        friendsId: "",
        guidePostPopConfig: { close_pic: 1, bubbleCls: "guide-post-pop" },
        hasRender: !1,
      };
    },
    computed: {
      replyText: function () {
        return {
          detail: "暂不支持评论和转发",
          topic: "本话题暂不支持发帖互动",
          stock: "本评论区暂不支持发帖互动",
        }[this.pageType];
      },
      avatar: function () {
        return (
          this.userinfo.user_image ||
          this.userinfo.headimgurl ||
          "https://mat1.gtimg.com/finance/images/stock/p/xcx/6bacbb862beefac2.png"
        );
      },
      initNavBarIsShow: function () {
        return "detail" !== this.type;
      },
      commentTitle: function () {
        return "article" === this.bottomBar.type
          ? "回正文"
          : this.bottomBar.title;
      },
      isTl: function () {
        return !this.type || "timeline" === this.type;
      },
      isDetail: function () {
        return "detail" === this.type;
      },
      isNewsDetail: function () {
        return "newsDetail" === this.type;
      },
      pageid: function () {
        return "";
      },
      isAllowPageid: function () {
        return !0;
      },
    },
    created: function () {},
    mounted: function () {},
    methods: {
      updateShareMenu: function (t) {
        t
          ? e.wx$1.showShareMenu({
              menus: ["shareAppMessage", "shareTimeline"],
            })
          : e.wx$1.hideShareMenu();
      },
      getRssList: function () {
        var e = this;
        this.$cRequest
          .getRssListFollow({ begin: this.friendsId, unReadNum: 1 })
          .then(function (t) {
            var n = (t || {}).unReadNum;
            e.hasRedDot = n;
          });
      },
      goToFriends: function () {
        if (
          ((this.hasRedDot = !1),
          this.$cRequest.reportData(
            "".concat(this.reportPrefix, ".bottombar_go_communityfriends")
          ),
          localStorage.setItem("communityIndexTab", 1),
          this.isMiniApp && "miniapp" === this.from)
        ) {
          window.wx.miniProgram.navigateTo({ url: "/pages/square/index" });
        } else this.$router.push({ path: "/community/index" });
      },
      goHotSubject: function () {
        if (
          (this.$cRequest.reportData(
            "hq_shequ_gegu" === this.reportPrefix
              ? "".concat(this.reportPrefix, "_bottombar_go_communitysquare")
              : "bottombar_go_communitysquare"
          ),
          localStorage.setItem("communityIndexTab", 0),
          this.isMiniApp && "miniapp" === this.from)
        ) {
          window.wx.miniProgram.navigateTo({ url: "/pages/square/index" });
        } else this.$router.push({ path: "/community/index" });
      },
      bindTapInput: function () {
        var t;
        this.forbidComment
          ? this.replyText &&
            (null == (t = this.$cApi) || t.showToast(this.replyText))
          : this.didAgreeUserAgreement.value || !this.onCheckUserAgreementStatus
          ? e.login.isLogin()
            ? this.$emit("goEdit")
            : e.login.login()
          : this.onCheckUserAgreementStatus();
      },
      tapAvatar: function () {
        this.$emit("tapAvatar");
      },
      tapComment: function () {
        this.didAgreeUserAgreement.value || !this.onCheckUserAgreementStatus
          ? this.$emit("tapComment", this.bottomBar.type, !0)
          : this.onCheckUserAgreementStatus();
      },
      tapTurn: function () {
        this.$emit("tapTurn");
      },
      tapLike: function () {
        this.$emit("tapLike", this.$refs.niu.interval);
      },
      handleClickShare: function () {
        e.Request.reportMTAData({
          eventName: "news.mini.detail.share_wx_icon_click",
          newsid: this.newsId,
        });
      },
      handleUnSignUserAgreementClick: function () {
        this.didAgreeUserAgreement.value ||
          !this.onCheckUserAgreementStatus ||
          this.onCheckUserAgreementStatus();
      },
      focus: function () {
        this.$refs.myInput.focus();
      },
      resumeIcon: function () {
        (this.iconChanged = !1),
          (document.getElementsByClassName("icon-share")[0].style = "");
      },
      changeIcon: function (e) {
        var t = e.loop,
          n = e.callback,
          r = this;
        K.timeline({
          targets: ".share-btn .icon-share",
          scale: 0.4,
          opacity: 0.4,
          duration: 800,
          update: function (e) {
            e.progress >= 30 &&
              !r.iconChanged &&
              ((r.iconChanged = !0), n && n());
          },
        }).add({
          targets: ".share-btn .icon-wx",
          scale: 1,
          opacity: 1,
          duration: 800,
          complete: function () {
            K.timeline({
              loop: t || 6,
              duration: 300,
              targets: ".share-btn .icon-wx",
              easing: "easeInOutSine",
            })
              .add({ scale: 1.2, delay: 1e3 })
              .add({ scale: 1 })
              .add({ scale: 1.2 })
              .add({ scale: 1 });
          },
        });
      },
      tapShareBtn: function () {
        this.$emit("tapShare");
      },
      closeBubble: function () {
        this.$emit("closeBubble");
      },
    },
  },
  re = e._export_sfc(ne, [
    [
      "render",
      function (t, n, r, a, i, o) {
        return e.e(
          { a: "newsDetail" === r.type },
          "newsDetail" === r.type
            ? e.e(
                { b: r.forbidComment },
                (r.forbidComment, {}),
                {
                  c: e.t(r.forbidComment ? "暂不开放评论" : "谈谈我的想法"),
                  d: e.o(function () {
                    return o.bindTapInput && o.bindTapInput.apply(o, arguments);
                  }, 1683),
                  e: "none" !== r.bottomBar.type,
                },
                "none" !== r.bottomBar.type
                  ? e.e(
                      { f: "comments" === r.bottomBar.type },
                      ("comments" === r.bottomBar.type || r.bottomBar.type, {}),
                      {
                        g: "article" === r.bottomBar.type,
                        h: e.t(r.bottomBar.title),
                        i: e.o(function () {
                          return (
                            o.tapComment && o.tapComment.apply(o, arguments)
                          );
                        }, 1684),
                      }
                    )
                  : {},
                {
                  j:
                    "none" !== r.bottomBar.type &&
                    o.didAgreeUserAgreement.value,
                },
                "none" !== r.bottomBar.type && o.didAgreeUserAgreement.value
                  ? e.e(
                      { k: !i.iconChanged },
                      i.iconChanged && i.iconChanged
                        ? {
                            m: e.n(
                              "rb-share-img icon-wx icon-share-".concat(
                                r.shareType
                              )
                            ),
                          }
                        : {},
                      { l: i.iconChanged, n: r.forwardNum >= 99 },
                      r.forwardNum >= 99
                        ? {}
                        : { o: e.t(r.forwardNum ? r.forwardNum : "分享") },
                      {
                        p: e.o(function () {
                          return (
                            o.handleClickShare &&
                            o.handleClickShare.apply(o, arguments)
                          );
                        }, 1685),
                      }
                    )
                  : {},
                {
                  q:
                    "none" !== r.bottomBar.type &&
                    !o.didAgreeUserAgreement.value,
                },
                "none" === r.bottomBar.type || o.didAgreeUserAgreement.value
                  ? {}
                  : e.e(
                      { r: !i.iconChanged },
                      i.iconChanged && i.iconChanged
                        ? {
                            t: e.n(
                              "rb-share-img icon-wx icon-share-".concat(
                                r.shareType
                              )
                            ),
                          }
                        : {},
                      { s: i.iconChanged, v: r.forwardNum >= 99 },
                      r.forwardNum >= 99
                        ? {}
                        : { w: e.t(r.forwardNum ? r.forwardNum : "分享") },
                      {
                        x: e.o(function () {
                          return (
                            o.handleUnSignUserAgreementClick &&
                            o.handleUnSignUserAgreementClick.apply(o, arguments)
                          );
                        }, 1686),
                      }
                    )
              )
            : {},
          {
            y: e.n(r.type),
            z: e.n(r.isIphoneX && !r.isSharePage ? "is-iphone-x" : ""),
            A: e.n(r.isSharePage ? "is-share-page" : ""),
          }
        );
      },
    ],
    ["__scopeId", "data-v-56d10bef"],
  ]);
wx.createComponent(re);
