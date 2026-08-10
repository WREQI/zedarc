var t,
  e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../@babel/runtime/helpers/typeof"),
  o = function (t, e, n) {
    return new Promise(function (o, r) {
      var a = function (t) {
          try {
            s(n.next(t));
          } catch (t) {
            r(t);
          }
        },
        i = function (t) {
          try {
            s(n.throw(t));
          } catch (t) {
            r(t);
          }
        },
        s = function (t) {
          return t.done ? o(t.value) : Promise.resolve(t.value).then(a, i);
        };
      s((n = n.apply(t, e)).next());
    });
  },
  r = require("../../../../../../common/vendor.js"),
  a = require("../../../stock-news-core/utils/request/index.js"),
  i = require("../../../stock-news-core/utils/shy/index.js"),
  s = require("../../../stock-news-core/utils/newsParser.js"),
  l = require("../../../stock-news-core/utils/report.js"),
  c = function () {
    var t = r.wx$1.getSystemInfoSync(),
      e = t.platform,
      n = t.version,
      o = t.system;
    return {
      env: { IS_PCWEIXIN: /(windows|mac|linux)/i.test(e) },
      platformVersion: n,
      os: o,
    };
  },
  u = {},
  d = {},
  f = { exports: {} };
(t = f),
  r.commonjsGlobal,
  (t.exports = (function () {
    function t(e) {
      return (t =
        "function" == typeof Symbol && "symbol" == n(Symbol.iterator)
          ? function (t) {
              return n(t);
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : n(t);
            })(e);
    }
    function e(t, n) {
      return (e =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, n);
    }
    function o() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    }
    function r(t, n, a) {
      return (r = o()
        ? Reflect.construct
        : function (t, n, o) {
            var r = [null];
            r.push.apply(r, n);
            var a = new (Function.bind.apply(t, r))();
            return o && e(a, o.prototype), a;
          }).apply(null, arguments);
    }
    function a(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return i(t);
        })(t) ||
        (function (t) {
          if (
            ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
            null != t["@@iterator"]
          )
            return Array.from(t);
        })(t) ||
        (function (t, e) {
          if (t) {
            if ("string" == typeof t) return i(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === n && t.constructor && (n = t.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(t)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? i(t, e)
                : void 0
            );
          }
        })(t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function i(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
      return o;
    }
    var s = Object.hasOwnProperty,
      l = Object.setPrototypeOf,
      c = Object.isFrozen,
      u = Object.getPrototypeOf,
      d = Object.getOwnPropertyDescriptor,
      f = Object.freeze,
      p = Object.seal,
      m = Object.create,
      h = "undefined" != typeof Reflect && Reflect,
      g = h.apply,
      y = h.construct;
    g ||
      (g = function (t, e, n) {
        return t.apply(e, n);
      }),
      f ||
        (f = function (t) {
          return t;
        }),
      p ||
        (p = function (t) {
          return t;
        }),
      y ||
        (y = function (t, e) {
          return r(t, a(e));
        });
    var w = E(Array.prototype.forEach),
      v = E(Array.prototype.pop),
      b = E(Array.prototype.push),
      T = E(String.prototype.toLowerCase),
      S = E(String.prototype.toString),
      C = E(String.prototype.match),
      x = E(String.prototype.replace),
      N = E(String.prototype.indexOf),
      D = E(String.prototype.trim),
      _ = E(RegExp.prototype.test),
      k = (function (t) {
        return function () {
          for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
            n[o] = arguments[o];
          return y(t, n);
        };
      })(TypeError);
    function E(t) {
      return function (e) {
        for (
          var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1;
          r < n;
          r++
        )
          o[r - 1] = arguments[r];
        return g(t, e, o);
      };
    }
    function A(t, e, n) {
      var o;
      (n = null !== (o = n) && void 0 !== o ? o : T), l && l(t, null);
      for (var r = e.length; r--; ) {
        var a = e[r];
        if ("string" == typeof a) {
          var i = n(a);
          i !== a && (c(e) || (e[r] = i), (a = i));
        }
        t[a] = !0;
      }
      return t;
    }
    function O(t) {
      var e,
        n = m(null);
      for (e in t) !0 === g(s, t, [e]) && (n[e] = t[e]);
      return n;
    }
    function L(t, e) {
      for (; null !== t; ) {
        var n = d(t, e);
        if (n) {
          if (n.get) return E(n.get);
          if ("function" == typeof n.value) return E(n.value);
        }
        t = u(t);
      }
      return function (t) {
        return null;
      };
    }
    var M = f([
        "a",
        "abbr",
        "acronym",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "bdi",
        "bdo",
        "big",
        "blink",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "center",
        "cite",
        "code",
        "col",
        "colgroup",
        "content",
        "data",
        "datalist",
        "dd",
        "decorator",
        "del",
        "details",
        "dfn",
        "dialog",
        "dir",
        "div",
        "dl",
        "dt",
        "element",
        "em",
        "fieldset",
        "figcaption",
        "figure",
        "font",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "img",
        "input",
        "ins",
        "kbd",
        "label",
        "legend",
        "li",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meter",
        "nav",
        "nobr",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "section",
        "select",
        "shadow",
        "small",
        "source",
        "spacer",
        "span",
        "strike",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "template",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "tr",
        "track",
        "tt",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
      ]),
      R = f([
        "svg",
        "a",
        "altglyph",
        "altglyphdef",
        "altglyphitem",
        "animatecolor",
        "animatemotion",
        "animatetransform",
        "circle",
        "clippath",
        "defs",
        "desc",
        "ellipse",
        "filter",
        "font",
        "g",
        "glyph",
        "glyphref",
        "hkern",
        "image",
        "line",
        "lineargradient",
        "marker",
        "mask",
        "metadata",
        "mpath",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialgradient",
        "rect",
        "stop",
        "style",
        "switch",
        "symbol",
        "text",
        "textpath",
        "title",
        "tref",
        "tspan",
        "view",
        "vkern",
      ]),
      H = f([
        "feBlend",
        "feColorMatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feDistantLight",
        "feFlood",
        "feFuncA",
        "feFuncB",
        "feFuncG",
        "feFuncR",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMergeNode",
        "feMorphology",
        "feOffset",
        "fePointLight",
        "feSpecularLighting",
        "feSpotLight",
        "feTile",
        "feTurbulence",
      ]),
      I = f([
        "animate",
        "color-profile",
        "cursor",
        "discard",
        "fedropshadow",
        "font-face",
        "font-face-format",
        "font-face-name",
        "font-face-src",
        "font-face-uri",
        "foreignobject",
        "hatch",
        "hatchpath",
        "mesh",
        "meshgradient",
        "meshpatch",
        "meshrow",
        "missing-glyph",
        "script",
        "set",
        "solidcolor",
        "unknown",
        "use",
      ]),
      F = f([
        "math",
        "menclose",
        "merror",
        "mfenced",
        "mfrac",
        "mglyph",
        "mi",
        "mlabeledtr",
        "mmultiscripts",
        "mn",
        "mo",
        "mover",
        "mpadded",
        "mphantom",
        "mroot",
        "mrow",
        "ms",
        "mspace",
        "msqrt",
        "mstyle",
        "msub",
        "msup",
        "msubsup",
        "mtable",
        "mtd",
        "mtext",
        "mtr",
        "munder",
        "munderover",
      ]),
      P = f([
        "maction",
        "maligngroup",
        "malignmark",
        "mlongdiv",
        "mscarries",
        "mscarry",
        "msgroup",
        "mstack",
        "msline",
        "msrow",
        "semantics",
        "annotation",
        "annotation-xml",
        "mprescripts",
        "none",
      ]),
      j = f(["#text"]),
      U = f([
        "accept",
        "action",
        "align",
        "alt",
        "autocapitalize",
        "autocomplete",
        "autopictureinpicture",
        "autoplay",
        "background",
        "bgcolor",
        "border",
        "capture",
        "cellpadding",
        "cellspacing",
        "checked",
        "cite",
        "class",
        "clear",
        "color",
        "cols",
        "colspan",
        "controls",
        "controlslist",
        "coords",
        "crossorigin",
        "datetime",
        "decoding",
        "default",
        "dir",
        "disabled",
        "disablepictureinpicture",
        "disableremoteplayback",
        "download",
        "draggable",
        "enctype",
        "enterkeyhint",
        "face",
        "for",
        "headers",
        "height",
        "hidden",
        "high",
        "href",
        "hreflang",
        "id",
        "inputmode",
        "integrity",
        "ismap",
        "kind",
        "label",
        "lang",
        "list",
        "loading",
        "loop",
        "low",
        "max",
        "maxlength",
        "media",
        "method",
        "min",
        "minlength",
        "multiple",
        "muted",
        "name",
        "nonce",
        "noshade",
        "novalidate",
        "nowrap",
        "open",
        "optimum",
        "pattern",
        "placeholder",
        "playsinline",
        "poster",
        "preload",
        "pubdate",
        "radiogroup",
        "readonly",
        "rel",
        "required",
        "rev",
        "reversed",
        "role",
        "rows",
        "rowspan",
        "spellcheck",
        "scope",
        "selected",
        "shape",
        "size",
        "sizes",
        "span",
        "srclang",
        "start",
        "src",
        "srcset",
        "step",
        "style",
        "summary",
        "tabindex",
        "title",
        "translate",
        "type",
        "usemap",
        "valign",
        "value",
        "width",
        "xmlns",
        "slot",
      ]),
      z = f([
        "accent-height",
        "accumulate",
        "additive",
        "alignment-baseline",
        "ascent",
        "attributename",
        "attributetype",
        "azimuth",
        "basefrequency",
        "baseline-shift",
        "begin",
        "bias",
        "by",
        "class",
        "clip",
        "clippathunits",
        "clip-path",
        "clip-rule",
        "color",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "cx",
        "cy",
        "d",
        "dx",
        "dy",
        "diffuseconstant",
        "direction",
        "display",
        "divisor",
        "dur",
        "edgemode",
        "elevation",
        "end",
        "fill",
        "fill-opacity",
        "fill-rule",
        "filter",
        "filterunits",
        "flood-color",
        "flood-opacity",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "fx",
        "fy",
        "g1",
        "g2",
        "glyph-name",
        "glyphref",
        "gradientunits",
        "gradienttransform",
        "height",
        "href",
        "id",
        "image-rendering",
        "in",
        "in2",
        "k",
        "k1",
        "k2",
        "k3",
        "k4",
        "kerning",
        "keypoints",
        "keysplines",
        "keytimes",
        "lang",
        "lengthadjust",
        "letter-spacing",
        "kernelmatrix",
        "kernelunitlength",
        "lighting-color",
        "local",
        "marker-end",
        "marker-mid",
        "marker-start",
        "markerheight",
        "markerunits",
        "markerwidth",
        "maskcontentunits",
        "maskunits",
        "max",
        "mask",
        "media",
        "method",
        "mode",
        "min",
        "name",
        "numoctaves",
        "offset",
        "operator",
        "opacity",
        "order",
        "orient",
        "orientation",
        "origin",
        "overflow",
        "paint-order",
        "path",
        "pathlength",
        "patterncontentunits",
        "patterntransform",
        "patternunits",
        "points",
        "preservealpha",
        "preserveaspectratio",
        "primitiveunits",
        "r",
        "rx",
        "ry",
        "radius",
        "refx",
        "refy",
        "repeatcount",
        "repeatdur",
        "restart",
        "result",
        "rotate",
        "scale",
        "seed",
        "shape-rendering",
        "specularconstant",
        "specularexponent",
        "spreadmethod",
        "startoffset",
        "stddeviation",
        "stitchtiles",
        "stop-color",
        "stop-opacity",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke",
        "stroke-width",
        "style",
        "surfacescale",
        "systemlanguage",
        "tabindex",
        "targetx",
        "targety",
        "transform",
        "transform-origin",
        "text-anchor",
        "text-decoration",
        "text-rendering",
        "textlength",
        "type",
        "u1",
        "u2",
        "unicode",
        "values",
        "viewbox",
        "visibility",
        "version",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y",
        "width",
        "word-spacing",
        "wrap",
        "writing-mode",
        "xchannelselector",
        "ychannelselector",
        "x",
        "x1",
        "x2",
        "xmlns",
        "y",
        "y1",
        "y2",
        "z",
        "zoomandpan",
      ]),
      B = f([
        "accent",
        "accentunder",
        "align",
        "bevelled",
        "close",
        "columnsalign",
        "columnlines",
        "columnspan",
        "denomalign",
        "depth",
        "dir",
        "display",
        "displaystyle",
        "encoding",
        "fence",
        "frame",
        "height",
        "href",
        "id",
        "largeop",
        "length",
        "linethickness",
        "lspace",
        "lquote",
        "mathbackground",
        "mathcolor",
        "mathsize",
        "mathvariant",
        "maxsize",
        "minsize",
        "movablelimits",
        "notation",
        "numalign",
        "open",
        "rowalign",
        "rowlines",
        "rowspacing",
        "rowspan",
        "rspace",
        "rquote",
        "scriptlevel",
        "scriptminsize",
        "scriptsizemultiplier",
        "selection",
        "separator",
        "separators",
        "stretchy",
        "subscriptshift",
        "supscriptshift",
        "symmetric",
        "voffset",
        "width",
        "xmlns",
      ]),
      W = f([
        "xlink:href",
        "xml:id",
        "xlink:title",
        "xml:space",
        "xmlns:xlink",
      ]),
      G = p(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
      $ = p(/<%[\w\W]*|[\w\W]*%>/gm),
      q = p(/\${[\w\W]*}/gm),
      X = p(/^data-[\-\w.\u00B7-\uFFFF]/),
      V = p(/^aria-[\-\w]+$/),
      Y = p(
        /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
      ),
      K = p(/^(?:\w+script|data):/i),
      J = p(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
      Z = p(/^html$/i),
      Q = p(/^[a-z][.\w]*(-[.\w]+)+$/i),
      tt = function () {
        return "undefined" == typeof window ? null : window;
      },
      et = function (e, n) {
        if ("object" !== t(e) || "function" != typeof e.createPolicy)
          return null;
        var o = null,
          r = "data-tt-policy-suffix";
        n.currentScript &&
          n.currentScript.hasAttribute(r) &&
          (o = n.currentScript.getAttribute(r));
        var a = "dompurify" + (o ? "#" + o : "");
        try {
          return e.createPolicy(a, {
            createHTML: function (t) {
              return t;
            },
            createScriptURL: function (t) {
              return t;
            },
          });
        } catch (t) {
          return null;
        }
      };
    return (function e() {
      var n =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tt(),
        o = function (t) {
          return e(t);
        };
      if (
        ((o.version = "2.5.7"),
        (o.removed = []),
        !n || !n.document || 9 !== n.document.nodeType)
      )
        return (o.isSupported = !1), o;
      var r = n.document,
        i = n.document,
        s = n.DocumentFragment,
        l = n.HTMLTemplateElement,
        c = n.Node,
        u = n.Element,
        d = n.NodeFilter,
        p = n.NamedNodeMap,
        m = void 0 === p ? n.NamedNodeMap || n.MozNamedAttrMap : p,
        h = n.HTMLFormElement,
        g = n.DOMParser,
        y = n.trustedTypes,
        E = u.prototype,
        nt = L(E, "cloneNode"),
        ot = L(E, "nextSibling"),
        rt = L(E, "childNodes"),
        at = L(E, "parentNode");
      if ("function" == typeof l) {
        var it = i.createElement("template");
        it.content &&
          it.content.ownerDocument &&
          (i = it.content.ownerDocument);
      }
      var st = et(y, r),
        lt = st ? st.createHTML("") : "",
        ct = i,
        ut = ct.implementation,
        dt = ct.createNodeIterator,
        ft = ct.createDocumentFragment,
        pt = ct.getElementsByTagName,
        mt = r.importNode,
        ht = {};
      try {
        ht = O(i).documentMode ? i.documentMode : {};
      } catch (t) {}
      var gt = {};
      o.isSupported =
        "function" == typeof at &&
        ut &&
        void 0 !== ut.createHTMLDocument &&
        9 !== ht;
      var yt,
        wt,
        vt = G,
        bt = $,
        Tt = q,
        St = X,
        Ct = V,
        xt = K,
        Nt = J,
        Dt = Q,
        _t = Y,
        kt = null,
        Et = A({}, [].concat(a(M), a(R), a(H), a(F), a(j))),
        At = null,
        Ot = A({}, [].concat(a(U), a(z), a(B), a(W))),
        Lt = Object.seal(
          Object.create(null, {
            tagNameCheck: {
              writable: !0,
              configurable: !1,
              enumerable: !0,
              value: null,
            },
            attributeNameCheck: {
              writable: !0,
              configurable: !1,
              enumerable: !0,
              value: null,
            },
            allowCustomizedBuiltInElements: {
              writable: !0,
              configurable: !1,
              enumerable: !0,
              value: !1,
            },
          })
        ),
        Mt = null,
        Rt = null,
        Ht = !0,
        It = !0,
        Ft = !1,
        Pt = !0,
        jt = !1,
        Ut = !0,
        zt = !1,
        Bt = !1,
        Wt = !1,
        Gt = !1,
        $t = !1,
        qt = !1,
        Xt = !0,
        Vt = !1,
        Yt = "user-content-",
        Kt = !0,
        Jt = !1,
        Zt = {},
        Qt = null,
        te = A({}, [
          "annotation-xml",
          "audio",
          "colgroup",
          "desc",
          "foreignobject",
          "head",
          "iframe",
          "math",
          "mi",
          "mn",
          "mo",
          "ms",
          "mtext",
          "noembed",
          "noframes",
          "noscript",
          "plaintext",
          "script",
          "style",
          "svg",
          "template",
          "thead",
          "title",
          "video",
          "xmp",
        ]),
        ee = null,
        ne = A({}, ["audio", "video", "img", "source", "image", "track"]),
        oe = null,
        re = A({}, [
          "alt",
          "class",
          "for",
          "id",
          "label",
          "name",
          "pattern",
          "placeholder",
          "role",
          "summary",
          "title",
          "value",
          "style",
          "xmlns",
        ]),
        ae = "http://www.w3.org/1998/Math/MathML",
        ie = "http://www.w3.org/2000/svg",
        se = "http://www.w3.org/1999/xhtml",
        le = se,
        ce = !1,
        ue = null,
        de = A({}, [ae, ie, se], S),
        fe = ["application/xhtml+xml", "text/html"],
        pe = "text/html",
        me = null,
        he = i.createElement("form"),
        ge = function (t) {
          return t instanceof RegExp || t instanceof Function;
        },
        ye = function (e) {
          (me && me === e) ||
            ((e && "object" === t(e)) || (e = {}),
            (e = O(e)),
            (yt = yt =
              -1 === fe.indexOf(e.PARSER_MEDIA_TYPE)
                ? pe
                : e.PARSER_MEDIA_TYPE),
            (wt = "application/xhtml+xml" === yt ? S : T),
            (kt = "ALLOWED_TAGS" in e ? A({}, e.ALLOWED_TAGS, wt) : Et),
            (At = "ALLOWED_ATTR" in e ? A({}, e.ALLOWED_ATTR, wt) : Ot),
            (ue =
              "ALLOWED_NAMESPACES" in e ? A({}, e.ALLOWED_NAMESPACES, S) : de),
            (oe =
              "ADD_URI_SAFE_ATTR" in e
                ? A(O(re), e.ADD_URI_SAFE_ATTR, wt)
                : re),
            (ee =
              "ADD_DATA_URI_TAGS" in e
                ? A(O(ne), e.ADD_DATA_URI_TAGS, wt)
                : ne),
            (Qt = "FORBID_CONTENTS" in e ? A({}, e.FORBID_CONTENTS, wt) : te),
            (Mt = "FORBID_TAGS" in e ? A({}, e.FORBID_TAGS, wt) : {}),
            (Rt = "FORBID_ATTR" in e ? A({}, e.FORBID_ATTR, wt) : {}),
            (Zt = "USE_PROFILES" in e && e.USE_PROFILES),
            (Ht = !1 !== e.ALLOW_ARIA_ATTR),
            (It = !1 !== e.ALLOW_DATA_ATTR),
            (Ft = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
            (Pt = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR),
            (jt = e.SAFE_FOR_TEMPLATES || !1),
            (Ut = !1 !== e.SAFE_FOR_XML),
            (zt = e.WHOLE_DOCUMENT || !1),
            (Gt = e.RETURN_DOM || !1),
            ($t = e.RETURN_DOM_FRAGMENT || !1),
            (qt = e.RETURN_TRUSTED_TYPE || !1),
            (Wt = e.FORCE_BODY || !1),
            (Xt = !1 !== e.SANITIZE_DOM),
            (Vt = e.SANITIZE_NAMED_PROPS || !1),
            (Kt = !1 !== e.KEEP_CONTENT),
            (Jt = e.IN_PLACE || !1),
            (_t = e.ALLOWED_URI_REGEXP || _t),
            (le = e.NAMESPACE || se),
            (Lt = e.CUSTOM_ELEMENT_HANDLING || {}),
            e.CUSTOM_ELEMENT_HANDLING &&
              ge(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
              (Lt.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
            e.CUSTOM_ELEMENT_HANDLING &&
              ge(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
              (Lt.attributeNameCheck =
                e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
            e.CUSTOM_ELEMENT_HANDLING &&
              "boolean" ==
                typeof e.CUSTOM_ELEMENT_HANDLING
                  .allowCustomizedBuiltInElements &&
              (Lt.allowCustomizedBuiltInElements =
                e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
            jt && (It = !1),
            $t && (Gt = !0),
            Zt &&
              ((kt = A({}, a(j))),
              (At = []),
              !0 === Zt.html && (A(kt, M), A(At, U)),
              !0 === Zt.svg && (A(kt, R), A(At, z), A(At, W)),
              !0 === Zt.svgFilters && (A(kt, H), A(At, z), A(At, W)),
              !0 === Zt.mathMl && (A(kt, F), A(At, B), A(At, W))),
            e.ADD_TAGS && (kt === Et && (kt = O(kt)), A(kt, e.ADD_TAGS, wt)),
            e.ADD_ATTR && (At === Ot && (At = O(At)), A(At, e.ADD_ATTR, wt)),
            e.ADD_URI_SAFE_ATTR && A(oe, e.ADD_URI_SAFE_ATTR, wt),
            e.FORBID_CONTENTS &&
              (Qt === te && (Qt = O(Qt)), A(Qt, e.FORBID_CONTENTS, wt)),
            Kt && (kt["#text"] = !0),
            zt && A(kt, ["html", "head", "body"]),
            kt.table && (A(kt, ["tbody"]), delete Mt.tbody),
            f && f(e),
            (me = e));
        },
        we = A({}, ["mi", "mo", "mn", "ms", "mtext"]),
        ve = A({}, ["annotation-xml"]),
        be = A({}, ["title", "style", "font", "a", "script"]),
        Te = A({}, R);
      A(Te, H), A(Te, I);
      var Se = A({}, F);
      A(Se, P);
      var Ce = function (t) {
          var e = at(t);
          (e && e.tagName) || (e = { namespaceURI: le, tagName: "template" });
          var n = T(t.tagName),
            o = T(e.tagName);
          return (
            !!ue[t.namespaceURI] &&
            (t.namespaceURI === ie
              ? e.namespaceURI === se
                ? "svg" === n
                : e.namespaceURI === ae
                ? "svg" === n && ("annotation-xml" === o || we[o])
                : Boolean(Te[n])
              : t.namespaceURI === ae
              ? e.namespaceURI === se
                ? "math" === n
                : e.namespaceURI === ie
                ? "math" === n && ve[o]
                : Boolean(Se[n])
              : t.namespaceURI === se
              ? !(e.namespaceURI === ie && !ve[o]) &&
                !(e.namespaceURI === ae && !we[o]) &&
                !Se[n] &&
                (be[n] || !Te[n])
              : !("application/xhtml+xml" !== yt || !ue[t.namespaceURI]))
          );
        },
        xe = function (t) {
          b(o.removed, { element: t });
          try {
            t.parentNode.removeChild(t);
          } catch (e) {
            try {
              t.outerHTML = lt;
            } catch (e) {
              t.remove();
            }
          }
        },
        Ne = function (t, e) {
          try {
            b(o.removed, { attribute: e.getAttributeNode(t), from: e });
          } catch (t) {
            b(o.removed, { attribute: null, from: e });
          }
          if ((e.removeAttribute(t), "is" === t && !At[t]))
            if (Gt || $t)
              try {
                xe(e);
              } catch (t) {}
            else
              try {
                e.setAttribute(t, "");
              } catch (t) {}
        },
        De = function (t) {
          var e, n;
          if (Wt) t = "<remove></remove>" + t;
          else {
            var o = C(t, /^[\r\n\t ]+/);
            n = o && o[0];
          }
          "application/xhtml+xml" === yt &&
            le === se &&
            (t =
              '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
              t +
              "</body></html>");
          var r = st ? st.createHTML(t) : t;
          if (le === se)
            try {
              e = new g().parseFromString(r, yt);
            } catch (t) {}
          if (!e || !e.documentElement) {
            e = ut.createDocument(le, "template", null);
            try {
              e.documentElement.innerHTML = ce ? lt : r;
            } catch (t) {}
          }
          var a = e.body || e.documentElement;
          return (
            t &&
              n &&
              a.insertBefore(i.createTextNode(n), a.childNodes[0] || null),
            le === se
              ? pt.call(e, zt ? "html" : "body")[0]
              : zt
              ? e.documentElement
              : a
          );
        },
        _e = function (t) {
          return dt.call(
            t.ownerDocument || t,
            t,
            d.SHOW_ELEMENT |
              d.SHOW_COMMENT |
              d.SHOW_TEXT |
              d.SHOW_PROCESSING_INSTRUCTION |
              d.SHOW_CDATA_SECTION,
            null,
            !1
          );
        },
        ke = function (t) {
          return (
            t instanceof h &&
            ("string" != typeof t.nodeName ||
              "string" != typeof t.textContent ||
              "function" != typeof t.removeChild ||
              !(t.attributes instanceof m) ||
              "function" != typeof t.removeAttribute ||
              "function" != typeof t.setAttribute ||
              "string" != typeof t.namespaceURI ||
              "function" != typeof t.insertBefore ||
              "function" != typeof t.hasChildNodes)
          );
        },
        Ee = function (e) {
          return "object" === t(c)
            ? e instanceof c
            : e &&
                "object" === t(e) &&
                "number" == typeof e.nodeType &&
                "string" == typeof e.nodeName;
        },
        Ae = function (t, e, n) {
          gt[t] &&
            w(gt[t], function (t) {
              t.call(o, e, n, me);
            });
        },
        Oe = function (t) {
          var e;
          if ((Ae("beforeSanitizeElements", t, null), ke(t))) return xe(t), !0;
          if (_(/[\u0080-\uFFFF]/, t.nodeName)) return xe(t), !0;
          var n = wt(t.nodeName);
          if (
            (Ae("uponSanitizeElement", t, { tagName: n, allowedTags: kt }),
            t.hasChildNodes() &&
              !Ee(t.firstElementChild) &&
              (!Ee(t.content) || !Ee(t.content.firstElementChild)) &&
              _(/<[/\w]/g, t.innerHTML) &&
              _(/<[/\w]/g, t.textContent))
          )
            return xe(t), !0;
          if ("select" === n && _(/<template/i, t.innerHTML)) return xe(t), !0;
          if (7 === t.nodeType) return xe(t), !0;
          if (Ut && 8 === t.nodeType && _(/<[/\w]/g, t.data)) return xe(t), !0;
          if (!kt[n] || Mt[n]) {
            if (!Mt[n] && Me(n)) {
              if (Lt.tagNameCheck instanceof RegExp && _(Lt.tagNameCheck, n))
                return !1;
              if (Lt.tagNameCheck instanceof Function && Lt.tagNameCheck(n))
                return !1;
            }
            if (Kt && !Qt[n]) {
              var r = at(t) || t.parentNode,
                a = rt(t) || t.childNodes;
              if (a && r)
                for (var i = a.length - 1; i >= 0; --i) {
                  var s = nt(a[i], !0);
                  (s.__removalCount = (t.__removalCount || 0) + 1),
                    r.insertBefore(s, ot(t));
                }
            }
            return xe(t), !0;
          }
          return t instanceof u && !Ce(t)
            ? (xe(t), !0)
            : ("noscript" !== n && "noembed" !== n && "noframes" !== n) ||
              !_(/<\/no(script|embed|frames)/i, t.innerHTML)
            ? (jt &&
                3 === t.nodeType &&
                ((e = t.textContent),
                (e = x(e, vt, " ")),
                (e = x(e, bt, " ")),
                (e = x(e, Tt, " ")),
                t.textContent !== e &&
                  (b(o.removed, { element: t.cloneNode() }),
                  (t.textContent = e))),
              Ae("afterSanitizeElements", t, null),
              !1)
            : (xe(t), !0);
        },
        Le = function (t, e, n) {
          if (Xt && ("id" === e || "name" === e) && (n in i || n in he))
            return !1;
          if (It && !Rt[e] && _(St, e));
          else if (Ht && _(Ct, e));
          else if (!At[e] || Rt[e]) {
            if (
              !(
                (Me(t) &&
                  ((Lt.tagNameCheck instanceof RegExp &&
                    _(Lt.tagNameCheck, t)) ||
                    (Lt.tagNameCheck instanceof Function &&
                      Lt.tagNameCheck(t))) &&
                  ((Lt.attributeNameCheck instanceof RegExp &&
                    _(Lt.attributeNameCheck, e)) ||
                    (Lt.attributeNameCheck instanceof Function &&
                      Lt.attributeNameCheck(e)))) ||
                ("is" === e &&
                  Lt.allowCustomizedBuiltInElements &&
                  ((Lt.tagNameCheck instanceof RegExp &&
                    _(Lt.tagNameCheck, n)) ||
                    (Lt.tagNameCheck instanceof Function &&
                      Lt.tagNameCheck(n))))
              )
            )
              return !1;
          } else if (oe[e]);
          else if (_(_t, x(n, Nt, "")));
          else if (
            ("src" !== e && "xlink:href" !== e && "href" !== e) ||
            "script" === t ||
            0 !== N(n, "data:") ||
            !ee[t]
          )
            if (Ft && !_(xt, x(n, Nt, "")));
            else if (n) return !1;
          return !0;
        },
        Me = function (t) {
          return "annotation-xml" !== t && C(t, Dt);
        },
        Re = function (e) {
          var n, r, a, i;
          Ae("beforeSanitizeAttributes", e, null);
          var s = e.attributes;
          if (s) {
            var l = {
              attrName: "",
              attrValue: "",
              keepAttr: !0,
              allowedAttributes: At,
            };
            for (i = s.length; i--; ) {
              var c = (n = s[i]),
                u = c.name,
                d = c.namespaceURI;
              if (
                ((r = "value" === u ? n.value : D(n.value)),
                (a = wt(u)),
                (l.attrName = a),
                (l.attrValue = r),
                (l.keepAttr = !0),
                (l.forceKeepAttr = void 0),
                Ae("uponSanitizeAttribute", e, l),
                (r = l.attrValue),
                !l.forceKeepAttr && (Ne(u, e), l.keepAttr))
              )
                if (Pt || !_(/\/>/i, r)) {
                  jt &&
                    ((r = x(r, vt, " ")),
                    (r = x(r, bt, " ")),
                    (r = x(r, Tt, " ")));
                  var f = wt(e.nodeName);
                  if (Le(f, a, r))
                    if (
                      (!Vt ||
                        ("id" !== a && "name" !== a) ||
                        (Ne(u, e), (r = Yt + r)),
                      Ut && _(/((--!?|])>)|<\/(style|title)/i, r))
                    )
                      Ne(u, e);
                    else {
                      if (
                        st &&
                        "object" === t(y) &&
                        "function" == typeof y.getAttributeType
                      )
                        if (d);
                        else
                          switch (y.getAttributeType(f, a)) {
                            case "TrustedHTML":
                              r = st.createHTML(r);
                              break;
                            case "TrustedScriptURL":
                              r = st.createScriptURL(r);
                          }
                      try {
                        d ? e.setAttributeNS(d, u, r) : e.setAttribute(u, r),
                          ke(e) ? xe(e) : v(o.removed);
                      } catch (t) {}
                    }
                } else Ne(u, e);
            }
            Ae("afterSanitizeAttributes", e, null);
          }
        },
        He = function t(e) {
          var n,
            o = _e(e);
          for (Ae("beforeSanitizeShadowDOM", e, null); (n = o.nextNode()); )
            Ae("uponSanitizeShadowNode", n, null),
              Oe(n) || (n.content instanceof s && t(n.content), Re(n));
          Ae("afterSanitizeShadowDOM", e, null);
        };
      return (
        (o.sanitize = function (e) {
          var a,
            i,
            l,
            u,
            d,
            f =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          if (
            ((ce = !e) && (e = "\x3c!--\x3e"), "string" != typeof e && !Ee(e))
          ) {
            if ("function" != typeof e.toString)
              throw k("toString is not a function");
            if ("string" != typeof (e = e.toString()))
              throw k("dirty is not a string, aborting");
          }
          if (!o.isSupported) {
            if (
              "object" === t(n.toStaticHTML) ||
              "function" == typeof n.toStaticHTML
            ) {
              if ("string" == typeof e) return n.toStaticHTML(e);
              if (Ee(e)) return n.toStaticHTML(e.outerHTML);
            }
            return e;
          }
          if (
            (Bt || ye(f),
            (o.removed = []),
            "string" == typeof e && (Jt = !1),
            Jt)
          ) {
            if (e.nodeName) {
              var p = wt(e.nodeName);
              if (!kt[p] || Mt[p])
                throw k(
                  "root node is forbidden and cannot be sanitized in-place"
                );
            }
          } else if (e instanceof c)
            (1 ===
              (i = (a = De("\x3c!----\x3e")).ownerDocument.importNode(e, !0))
                .nodeType &&
              "BODY" === i.nodeName) ||
            "HTML" === i.nodeName
              ? (a = i)
              : a.appendChild(i);
          else {
            if (!Gt && !jt && !zt && -1 === e.indexOf("<"))
              return st && qt ? st.createHTML(e) : e;
            if (!(a = De(e))) return Gt ? null : qt ? lt : "";
          }
          a && Wt && xe(a.firstChild);
          for (var m = _e(Jt ? e : a); (l = m.nextNode()); )
            (3 === l.nodeType && l === u) ||
              Oe(l) ||
              (l.content instanceof s && He(l.content), Re(l), (u = l));
          if (((u = null), Jt)) return e;
          if (Gt) {
            if ($t)
              for (d = ft.call(a.ownerDocument); a.firstChild; )
                d.appendChild(a.firstChild);
            else d = a;
            return (
              (At.shadowroot || At.shadowrootmod) && (d = mt.call(r, d, !0)), d
            );
          }
          var h = zt ? a.outerHTML : a.innerHTML;
          return (
            zt &&
              kt["!doctype"] &&
              a.ownerDocument &&
              a.ownerDocument.doctype &&
              a.ownerDocument.doctype.name &&
              _(Z, a.ownerDocument.doctype.name) &&
              (h = "<!DOCTYPE " + a.ownerDocument.doctype.name + ">\n" + h),
            jt &&
              ((h = x(h, vt, " ")), (h = x(h, bt, " ")), (h = x(h, Tt, " "))),
            st && qt ? st.createHTML(h) : h
          );
        }),
        (o.setConfig = function (t) {
          ye(t), (Bt = !0);
        }),
        (o.clearConfig = function () {
          (me = null), (Bt = !1);
        }),
        (o.isValidAttribute = function (t, e, n) {
          me || ye({});
          var o = wt(t),
            r = wt(e);
          return Le(o, r, n);
        }),
        (o.addHook = function (t, e) {
          "function" == typeof e && ((gt[t] = gt[t] || []), b(gt[t], e));
        }),
        (o.removeHook = function (t) {
          if (gt[t]) return v(gt[t]);
        }),
        (o.removeHooks = function (t) {
          gt[t] && (gt[t] = []);
        }),
        (o.removeAllHooks = function () {
          gt = {};
        }),
        o
      );
    })();
  })());
var p = f.exports,
  m =
    (r.commonjsGlobal && r.commonjsGlobal.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(d, "__esModule", { value: !0 }),
  (d.buildDirective = d.defaultDOMPurifyInstanceBuilder = void 0);
var h = m(p);
function g() {
  return h.default;
}
(d.defaultDOMPurifyInstanceBuilder = g),
  (d.buildDirective = function (t, e) {
    void 0 === t && (t = {}), void 0 === e && (e = g);
    var n = e();
    !(function (t, e) {
      var n,
        o,
        r = null !== (n = t.hooks) && void 0 !== n ? n : {};
      for (o in r) {
        var a = r[o];
        void 0 !== a && e.addHook(o, a);
      }
    })(t, n);
    var o = function (e, o) {
      var r;
      if (o.oldValue !== o.value) {
        var a = o.arg,
          i = t.namedConfigurations;
        i && void 0 !== a && void 0 !== i[a]
          ? (e.innerHTML = n.sanitize(o.value, i[a]))
          : (e.innerHTML = n.sanitize(
              o.value,
              null !== (r = t.default) && void 0 !== r ? r : {}
            ));
      }
    };
    return {
      inserted: o,
      update: o,
      unbind: function (t) {
        t.innerHTML = "";
      },
    };
  }),
  (function (t) {
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.buildVueDompurifyHTMLDirective = void 0);
    var e = d,
      n = d;
    Object.defineProperty(t, "buildVueDompurifyHTMLDirective", {
      enumerable: !0,
      get: function () {
        return n.buildDirective;
      },
    }),
      (t.default = {
        install: function (t, n, o) {
          void 0 === n && (n = {}),
            void 0 === o && (o = e.defaultDOMPurifyInstanceBuilder),
            t.directive("dompurify-html", (0, e.buildDirective)(n, o));
        },
      });
  })(u);
var y = r.getDefaultExportFromCjs(u);
r.Vue.use(y);
var w = {
  options: { styleIsolation: "shared" },
  props: [
    "reportData",
    "pathname",
    "translateStatus",
    "auto_open",
    "wzqConfig",
    "hasTranslation",
    "isDisclosure",
    "isResearch",
    "flucShowMode",
    "theme",
  ],
  components: {
    NewsCompRelatedStock: function () {
      return "./components/NewsCompRelatedStock.js";
    },
  },
  computed: {
    isTHSContentShow: function () {
      return !!this.data.content;
    },
    thsContentStr: function () {
      var t = this.isTHSContentShow
        ? this.data.content
            .replace(/\<table/g, '<div class="news-snptb"><table')
            .replace(/\/table\>/g, "/table></div>")
            .replace(/http:/g, "https:")
        : "";
      return (t = t.replace(/color: \w*;/g, ""));
    },
  },
  data: function () {
    return {
      data: null,
      downLoadState: !1,
      downLoadStateTwo: [],
      pdfShow: !1,
      html: "",
      showHtml: !0,
      showOCRContent: !1,
      ociContent: [],
      text: "点击下载文件",
      topText: "下载全文",
      textState: { origin: !1, trans: !1 },
      isWeb: !0,
      isMp: !0,
      thsContent: [],
      justCopy: !1,
    };
  },
  watch: {
    reportData: function () {
      this.init();
    },
  },
  beforeCreate: function () {},
  created: function () {
    this.reportData && this.init();
  },
  mounted: function () {
    var t = this;
    this.showOCRContent ||
      this.isTHSContentShow ||
      (this.auto_open && 1 === parseInt(this.auto_open, 10)
        ? this.showHtml ||
          (this.isWeb || 2 != +this.hasTranslation
            ? this.openPDF()
            : this.openPDFTwo())
        : i.shy.getNetworkStatus(function (e) {
            i.shy.getSystemInfo(function (n) {
              var o = e.networkType.toLowerCase();
              (("4g" === o && n.autoDownloadOnCell) ||
                ("wifi" === o && n.autoDownloadOnWiFi)) &&
                (t.showHtml || t.openPDF());
            });
          }));
  },
  methods: {
    escapeHTML: function (t) {
      if (!t) return "";
      var e = {
        "<": "&#60;",
        ">": "&#62;",
        '"': "&#34;",
        "'": "&#39;",
        "&": "&#38;",
      };
      return t.replace(/&(?![\w#]+;)|[<>"']/g, function (t) {
        return e[t];
      });
    },
    init: function () {
      this.data = this.reportData;
      var t = this;
      (this.data.stockcode =
        this.data.stockcode && this.data.stockcode.length > 5
          ? this.data.stockcode.splice(0, 5)
          : this.data.stockcode),
        this.isDisclosure
          ? (this.data.title && this.data.title.startsWith("【公告】")) ||
            (this.data.title = "【公告】".concat(this.data.title) || "")
          : (this.data.title && this.data.title.startsWith("【研报】")) ||
            (this.data.title = "【研报】".concat(this.data.title) || ""),
        (this.thsContent = this.data.content && this.handleTHSReportContent());
      var e = !1;
      if (
        (this.data &&
          this.data.pdf &&
          this.data.pdf != this.data.detail &&
          (e = !0),
        this.data.pdf === this.data.detail
          ? (this.showHtml = !1)
          : (this.showHtml = !0),
        this.data.detail_ocr_url,
        this.data.detail)
      ) {
        for (
          var n = this.data.detail.split("\n"),
            o = 0 === this.data.type && "nok" === this.data.id.substr(0, 3),
            r = 0 === this.data.type && "nos" === this.data.id.substr(0, 3),
            a = [],
            i = 0;
          i < n.length;
          i++
        ) {
          var s = void 0;
          a.push('<p class="news-normal">'),
            o
              ? ((s = n[i].replace(
                  /^((http)|(https)):\/\/img2\.gtimg\.com\/finance\/hk\/((pdf)|(iis))\//,
                  ""
                )),
                /^.*\.(HTML|html|HTM|htm|DOCX|DOCM|PPTX|XLSX|DOC|PPT|XLS|JPG|RAR)$/i.test(
                  s
                )
                  ? ((e = !1), (t.showHtml = !1))
                  : /^.*\.(PDF)$/i.test(s)
                  ? (t.showHtml = !1)
                  : /^.*\.(DOCM)$/i.test(s) &&
                    ((e = !1),
                    a.push(
                      '<p style="text-align:left;word-break: inherit;">点击以下链接查看全文。<br><a class="downloadFile" href="https://img2.gtimg.com/finance/hk/pdf/'.concat(
                        s,
                        '">点击查看</a></div></p>'
                      )
                    )))
              : r &&
                ((s = n[i].replace(
                  /^((http)|(https)):\/\/img2\.gtimg\.com\/finance\/hs\/((pdf)|(iis))\//,
                  ""
                )),
                /^.*\.(HTML|html|HTM|htm|DOCX|PPTX|XLSX|DOC|PPT|XLS|JPG|RAR)$/i.test(
                  s
                )
                  ? ((e = !1), (t.showHtml = !1))
                  : /^.*\.(PDF)$/i.test(s)
                  ? (t.showHtml = !1)
                  : /^.*\.(DOCM)$/i.test(s) &&
                    ((e = !1),
                    a.push(
                      '<p style="text-align:left;word-break: inherit;">点击以下链接查看全文。<br><a class="downloadFile" href="https://img2.gtimg.com/finance/hs/pdf/'.concat(
                        s,
                        '">点击查看</a></div></p>'
                      )
                    )));
          var l = n[i].replace(this.data.pdf, "");
          a.push(this.escapeHTML(l)), a.push("</p>");
        }
        (a = a.join("")), (this.pdfShow = e), (this.html = a);
      }
      this.hasTranslation,
        (this.justCopy = c().os.android && c().env.IS_LCT_XCX);
    },
    queryOciContent: function (t) {
      return o(
        this,
        null,
        e().mark(function n() {
          var o;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (o = null),
                      (e.prev = 1),
                      (e.next = 4),
                      a.request(t, {}, { method: "get", isShowToast: !1 })
                    );
                  case 4:
                    (o = e.sent), (e.next = 10);
                    break;
                  case 7:
                    (e.prev = 7),
                      (e.t0 = e.catch(1)),
                      (this.showOCRContent = !1);
                  case 10:
                    try {
                      this.ociContent = o
                        ? o.map(function (t) {
                            return (
                              "text" === t.cls &&
                                /^\s*([\u4e00-\u9fa5]{1,3}[、])/.test(
                                  t.content
                                ) &&
                                (t.isTitle = !0),
                              t
                            );
                          })
                        : [];
                    } catch (t) {
                      (this.showOCRContent = !1), l.aegisReportError(t);
                    }
                  case 11:
                  case "end":
                    return e.stop();
                }
            },
            n,
            this,
            [[1, 7]]
          );
        })
      );
    },
    openPDFTwo: function (t) {
      return o(
        this,
        null,
        e().mark(function n() {
          var o, a, i;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (this.data) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    this.data.pdf,
                      this.data.content_tr,
                      (a =
                        this.data &&
                        ("trans" === t ? this.data.content_tr : this.data.pdf)),
                      (i =
                        null !=
                        (o =
                          null == a ? void 0 : a.replace("http://", "https://"))
                          ? o
                          : ""),
                      r.wx$1.downloadFile({
                        url: i,
                        success: function (t) {
                          r.wx$1.hideLoading();
                          var e = t.tempFilePath;
                          r.wx$1.openDocument({ filePath: e });
                        },
                        fail: function () {
                          r.wx$1.hideLoading(),
                            r.wx$1.showModal({
                              title: "",
                              content: "公告下载失败",
                              showCancel: !1,
                              confirmText: "确定",
                            });
                        },
                      });
                  case 5:
                  case "end":
                    return e.stop();
                }
            },
            n,
            this
          );
        })
      );
    },
    openPDF: function (t) {
      var e;
      if (this.data) {
        var n = this,
          o = this.data && (t ? this.data.content_tr : this.data.pdf),
          a =
            null != (e = null == o ? void 0 : o.replace("http://", "https://"))
              ? e
              : "";
        (n.text = "文档下载中..."),
          (n.topText = "下载中..."),
          r.wx$1.downloadFile({
            url: a,
            success: function (t) {
              r.wx$1.hideLoading();
              var e = t.tempFilePath;
              r.wx$1.openDocument({ filePath: e }),
                (n.text = "点击打开已下载文档"),
                (n.topText = "查看全文");
            },
            fail: function () {
              r.wx$1.hideLoading(),
                r.wx$1.showModal({
                  title: "",
                  content: "公告下载失败",
                  showCancel: !1,
                  confirmText: "确定",
                });
            },
          });
      }
    },
    checkDownLoadState: function (t) {
      var e = this;
      (!this.pdfShow && this.showHtml) ||
        i.shy.checkDownloadFileState(t, function (t) {
          (e.downLoadState = !(
            !t.downloadStatus || "success" !== t.downloadStatus
          )),
            e.downLoadState && (e.text = "点击打开已下载文档");
        });
    },
    checkDownLoadStateTwo: function (t, e) {
      var n = this;
      (!this.pdfShow && this.showHtml) ||
        Promise.all([this.checkDownState(t), this.checkDownState(e)]).then(
          function (t) {
            n.downLoadStateTwo = t;
          }
        );
    },
    checkDownState: function (t) {
      return new Promise(function (e) {
        i.shy.checkDownloadFileState(t, function (t) {
          var n = !(!t.downloadStatus || "success" !== t.downloadStatus);
          e(n);
        });
      });
    },
    downloadFile: function (t, e) {
      return new Promise(function (n) {
        t
          ? n(!0)
          : i.shy.downloadFile([e], function (t) {
              var o = !(!t.downloadStatus || "success" !== t.downloadStatus[e]);
              n(o);
            });
      });
    },
    handleTHSReportContent: function () {
      if (!this.data.content) return [];
      var t = s.parse_1(this.thsContentStr),
        e =
          t &&
          t.filter(function (t) {
            return "element" === t.type && "html" === t.tagName;
          }),
        n =
          e.length &&
          e[0].children.filter(function (t) {
            return "element" === t.type && "body" === t.tagName;
          }),
        o = n.length && n[0].children;
      return s.processReportParsedData(
        [
          {
            type: "element",
            tagName: "div",
            attributes: [{ key: "id", value: "ths_news_text" }],
            children: o,
          },
        ],
        this.theme
      );
    },
  },
};
Array || r.resolveComponent("NewsCompRelatedStock")();
var v = r._export_sfc(w, [
  [
    "render",
    function (t, e, n, o, a, i) {
      return r.e(
        { a: a.data },
        a.data
          ? r.e(
              {
                b: r.t(a.data.title || ""),
                c: r.t(a.data.jgmc || ""),
                d: r.n(a.data.jgmc ? "" : "hide"),
                e: r.t(a.data.time || ""),
                f:
                  (a.showHtml && a.pdfShow) ||
                  (a.showOCRContent && a.data.pdf) ||
                  (i.isTHSContentShow && a.data.pdf),
              },
              (a.showHtml && a.pdfShow) ||
                (a.showOCRContent && a.data.pdf) ||
                (i.isTHSContentShow && a.data.pdf)
                ? {
                    g: r.t(a.topText),
                    h: r.o(function (t) {
                      return i.openPDF();
                    }, 3593),
                  }
                : {},
              { i: a.data.stockcode && 0 !== a.data.stockcode.length },
              a.data.stockcode && 0 !== a.data.stockcode.length
                ? {
                    j: r.p({
                      symbols: a.data.stockcode,
                      showType: "news",
                      num: 2,
                      pathname: n.pathname,
                      wzqConfig: n.wzqConfig,
                      flucShowMode: n.flucShowMode,
                      newsid: a.data.id,
                    }),
                  }
                : {},
              { k: i.isTHSContentShow },
              i.isTHSContentShow
                ? r.e({ l: a.isMp }, a.isMp ? { m: a.thsContent } : {})
                : a.showHtml && !a.showOCRContent
                ? { o: a.html || "" }
                : a.showHtml || a.showOCRContent
                ? a.showOCRContent
                  ? {
                      D: r.f(a.ociContent, function (t, e, n) {
                        return r.e(
                          { a: "text" === t.cls && !t.isTitle },
                          "text" !== t.cls || t.isTitle ? {} : { b: t.content },
                          { c: "text" === t.cls && t.isTitle },
                          "text" === t.cls && t.isTitle ? { d: t.content } : {},
                          { e: "table" === t.cls },
                          "table" === t.cls ? { f: t.content } : {},
                          { g: "picture" === t.cls },
                          "picture" === t.cls
                            ? { h: t.content, i: t.width + "px" }
                            : {}
                        );
                      }),
                    }
                  : {}
                : r.e(
                    {
                      q: r.n(
                        a.data.stockcode && 0 !== a.data.stockcode.length
                          ? ""
                          : "noStock"
                      ),
                      r: a.isWeb && 2 === n.hasTranslation,
                    },
                    a.isWeb && 2 === n.hasTranslation
                      ? {
                          s: r.o(function (t) {
                            return i.openPDF();
                          }, 3594),
                          t: r.o(function (t) {
                            return i.openPDF("translate");
                          }, 3595),
                        }
                      : 2 === n.hasTranslation
                      ? {
                          w: r.t(
                            a.textState.origin
                              ? "文档下载中..."
                              : "查看公告原文"
                          ),
                          x: r.o(function (t) {
                            return i.openPDFTwo("origin");
                          }, 3596),
                          y: r.t(
                            a.textState.trans ? "文档下载中..." : "查看公告翻译"
                          ),
                          z: r.o(function (t) {
                            return i.openPDFTwo("trans");
                          }, 3597),
                        }
                      : {
                          A: r.t(a.text),
                          B: r.o(function (t) {
                            return i.openPDF();
                          }, 3598),
                        },
                    { v: 2 === n.hasTranslation }
                  ),
              {
                n: a.showHtml && !a.showOCRContent,
                p: !a.showHtml && !a.showOCRContent,
                C: a.showOCRContent,
                E: r.t(
                  n.isDisclosure && 2 === n.hasTranslation
                    ? a.data.footernote_tr
                    : a.data.footernote
                ),
                F: r.n(!1 === n.translateStatus ? "english" : ""),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-78677d7d"],
]);
wx.createComponent(v);
