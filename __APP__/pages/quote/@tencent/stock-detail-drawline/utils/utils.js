var e = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  t = Math.pow,
  a = require("../../../../../common/vendor.js"),
  s = ["#ff891e", "#3077ec", "#e63535", "#1caa3c", "#70778d"],
  i = [28, 32, 36],
  n = a.StockBridge.ENV === a.EnvTypeEnum.MP;
function r(e, t) {
  if (e && t) return e.x === t.x ? NaN : (e.y - t.y) / (e.x - t.x);
}
function o(e, t) {
  if (e && Array.isArray(t) && !(t.length < 2)) {
    var a = r(t[0], t[1]);
    if (isNaN(a)) return { x: t[0].x, y: e.y };
    if (0 === a) return { x: e.x, y: t[0].y };
    var s = (function (e, t) {
        if (e && Array.isArray(t) && !(t.length < 2)) {
          var a = e.x;
          return e.y - a * r(t[0], t[1]);
        }
      })(t[0], t),
      i = -1 / a,
      n = (e.y - e.x * i - s) / (a + 1 / a);
    return { x: n, y: a * n + s };
  }
}
function c(t, a) {
  var s = e(t, 2),
    i = s[0],
    n = s[1],
    r = (n.y - i.y) / (n.x - i.x),
    o = i.y - r * i.x,
    c = a.left,
    d = a.right,
    g = a.top,
    h = a.bottom,
    f = [],
    x = r * c + o;
  x >= g && x <= h && f.push({ x: c, y: x });
  var l = r * d + o;
  l >= g && l <= h && f.push({ x: d, y: l });
  var m = (g - o) / r;
  m >= c &&
    m <= d &&
    Math.abs(x - g) > 1e-5 &&
    Math.abs(l - g) > 1e-5 &&
    f.push({ x: m, y: g });
  var p = (h - o) / r;
  return (
    p >= c &&
      p <= d &&
      Math.abs(x - h) > 1e-5 &&
      Math.abs(l - h) > 1e-5 &&
      f.push({ x: p, y: h }),
    f
  );
}
function d(e, t) {
  var s = a.dayjs(e);
  if (["week", "month", "year"].indexOf(t) > -1)
    return { start: s.startOf(t), end: s.endOf(t) };
}
(exports.BORDEROPACITY = 0.1),
  (exports.COLORS = s),
  (exports.COLORSMAP = [
    { value: "#ff891e" },
    { value: "#3077ec" },
    { value: "#e63535" },
    { value: "#1caa3c" },
    { value: "#70778d" },
  ]),
  (exports.DEFAULT_COLOR = "#ff891e"),
  (exports.DEFAULT_CORNER_SIZE = 8),
  (exports.DEFAULT_FONTSIZE = 14),
  (exports.DEFAULT_WEIGHT = 2),
  (exports.FONTS = [
    { text: "大", value: 18 },
    { text: "中", value: 16 },
    { text: "小", value: 14 },
  ]),
  (exports.FONTSIZE = i),
  (exports.GuideLineConfig = {
    color: {
      white: "#262e40",
      black: "#e9ebf0",
      light: "#262e40",
      dark: "#e9ebf0",
    },
    weight: 1,
  }),
  (exports.LINEWEIGHT = [1, 2, 3]),
  (exports.RadiusRect = function (e, t, a, s, i, n, r, o) {
    var c = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 1,
      d =
        "number" == typeof n
          ? {
              borderTopLeftRadius: n,
              borderTopRightRadius: n,
              borderBottomLeftRadius: n,
              borderBottomRightRadius: n,
            }
          : n,
      g = d.borderTopLeftRadius,
      h = void 0 === g ? 0 : g,
      f = d.borderTopRightRadius,
      x = void 0 === f ? 0 : f,
      l = d.borderBottomLeftRadius,
      m = void 0 === l ? 0 : l,
      p = d.borderBottomRightRadius,
      u = void 0 === p ? 0 : p;
    e.save(),
      e.translate(t, a),
      e.beginPath(0),
      e.arc(s - u, i - u, u, 0, Math.PI / 2),
      e.lineTo(m, i),
      e.arc(m, i - m, m, Math.PI / 2, Math.PI),
      e.lineTo(0, m),
      e.arc(h, h, h, Math.PI, (3 * Math.PI) / 2),
      e.lineTo(s - x, 0),
      e.arc(s - x, x, x, (3 * Math.PI) / 2, 2 * Math.PI),
      e.lineTo(s, i - x),
      e.closePath(),
      (e.lineWidth = c),
      (null == r ? void 0 : r.alpha) && (e.globalAlpha = r.alpha),
      (e.strokeStyle = r.strokeStyle),
      (e.globalAlpha = 1),
      o &&
        (o.alpha && (e.globalAlpha = o.alpha),
        (e.fillStyle = o.fillStyle),
        e.fill(),
        (e.globalAlpha = 1)),
      e.stroke(),
      e.restore();
  }),
  (exports.SELECTRANGE = 8),
  (exports.SHAPES = [
    {
      shape: "line",
      type: "group",
      text: "直线",
      iconWhite:
        "https://st.gtimg.com/design/f26f4783a73468f337165fd7cb1d2637.svg",
      iconBlack:
        "https://st.gtimg.com/design/e0961a8e9609fb3f5ff32fde7a265357.svg",
      subs: [
        {
          shape: "straightLineSegment",
          name: "straightLineSegment",
          text: "水平线段",
          iconWhite:
            "https://st.gtimg.com/design/ba2240368bd4fd60208456a9662b3449.svg",
          iconBlack:
            "https://st.gtimg.com/design/33493346d2aa292d0aac50c1e2682888.svg",
        },
        {
          shape: "straightLine",
          name: "straightLine",
          text: "水平线",
          iconWhite:
            "https://st.gtimg.com/design/bcaf6d85aa34223084e0d6fcaa434709.svg",
          iconBlack:
            "https://st.gtimg.com/design/d939b50495376188388571d60d4940b4.svg",
        },
      ],
    },
    {
      shape: "slashLines",
      type: "group",
      text: "斜线",
      iconWhite:
        "https://st.gtimg.com/design/4e2cd97f3e5cff3430d79a4b50ab4bd5.svg",
      iconBlack:
        "https://st.gtimg.com/design/c1a1388e800e1b806678cee35b8d40e5.svg",
      subs: [
        {
          shape: "slashLineSegment",
          name: "slashLineSegment",
          text: "斜线段",
          iconWhite:
            "https://st.gtimg.com/design/dccd55afc4e9e55117474a70818f4c4d.svg",
          iconBlack:
            "https://st.gtimg.com/design/86146e895a5ae1589f64582facab422d.svg",
        },
        {
          shape: "slashLine",
          name: "slashLine",
          text: "斜直线",
          iconWhite:
            "https://st.gtimg.com/design/43c85f12b5d6c4dea6341db64c35cd00.svg",
          iconBlack:
            "https://st.gtimg.com/design/e8b9d73cbf454528ee05c70abe92a535.svg",
        },
        {
          shape: "slashRays",
          name: "slashRays",
          text: "射线",
          iconWhite:
            "https://st.gtimg.com/design/86ad193b2175cc652d885740819ebc4b.svg",
          iconBlack:
            "https://st.gtimg.com/design/95e2af178e95ba787b4c92eea91b3b14.svg",
        },
      ],
    },
    {
      shape: "doubleTrack",
      type: "group",
      text: "轨道",
      iconWhite:
        "https://st.gtimg.com/design/4fe653b6b34e4b3929444490e0bf850e.svg",
      iconBlack:
        "https://st.gtimg.com/design/f78b8630671c741494715f2661fdce1f.svg",
      subs: [
        {
          shape: "doubleTrack",
          name: "doubleTrack",
          text: "双轨线",
          iconWhite:
            "https://st.gtimg.com/design/1942644d0df0569a7806d65225fdd00f.svg",
          iconBlack:
            "https://st.gtimg.com/design/9681877fb3b506405efbeda0a402ba45.svg",
        },
        {
          shape: "threeTrack",
          name: "threeTrack",
          text: "三轨线",
          iconWhite:
            "https://st.gtimg.com/design/83fae73ca166c379b0ecb4dc38202393.svg",
          iconBlack:
            "https://st.gtimg.com/design/8f99b85fe6732b9fbaf7b97aea1c8bf9.svg",
        },
      ],
    },
    {
      shape: "rect",
      text: "矩形",
      iconWhite:
        "https://st.gtimg.com/design/08c12bd72c0e28a5ae0672a2e013d632.svg",
      iconBlack:
        "https://st.gtimg.com/design/e429f2fa37ecd67b328df9c67c885bf2.svg",
    },
    {
      shape: "goldenSeparate",
      text: "黄金分割",
      iconWhite:
        "https://st.gtimg.com/design/bf3eea1ff59bfbc625550d12fe86d2d1.svg",
      iconBlack:
        "https://st.gtimg.com/design/f666d5a4e47cad30b32a1e07796e6600.svg",
    },
    {
      shape: "text",
      text: "文本",
      iconWhite:
        "https://st.gtimg.com/design/a3b190c3fe7a3d6fbefc32eb41d060ca.png",
      iconBlack:
        "https://st.gtimg.com/design/8c2a09d0c162e519fb1334e3e7d63d90.png",
    },
    {
      shape: "clear",
      text: "清空",
      iconWhite:
        "https://st.gtimg.com/design/98f228a350ca95d2a62120c0c7112b6d.svg",
      iconBlack:
        "https://st.gtimg.com/design/e4a571f0d288b06760d18d5b0aef8b5c.svg",
    },
    {
      shape: "video",
      text: "说明",
      iconWhite:
        "https://st.gtimg.com/design/06c0037ae3d62bf8258aac15edfba7ac.svg",
      iconBlack:
        "https://st.gtimg.com/design/9f4b167518d7831c11e40ade8619fb9c.svg",
    },
  ]),
  (exports.VerticalFootCoord = o),
  (exports.WEIGHTS = [{ value: 1 }, { value: 2 }, { value: 3 }]),
  (exports.getColorsIndex = function (e) {
    var t = (function (e) {
      var t = e.match(
        /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
      );
      return t
        ? "#".concat(
            "0".concat(parseInt(t[1], 10).toString(16)).slice(-2) +
              "0".concat(parseInt(t[2], 10).toString(16)).slice(-2) +
              "0".concat(parseInt(t[3], 10).toString(16)).slice(-2)
          )
        : e;
    })(e).toLowerCase();
    return s.findIndex(function (e) {
      return e.toLowerCase() === t;
    });
  }),
  (exports.getFontSizeIndex = function (e) {
    return i.findIndex(function (t) {
      return t === 2 * e;
    });
  }),
  (exports.getLineSlope = r),
  (exports.getParallelVerticalFoot = function (e, t, a, s) {
    var i = e.x,
      n = e.y - t * i,
      r =
        "upper" === s
          ? n - a * Math.sqrt(Math.pow(t, 2) + 1)
          : n + a * Math.sqrt(Math.pow(t, 2) + 1);
    return o(e, [
      { x: 0, y: r },
      { x: -r / t, y: 0 },
    ]);
  }),
  (exports.getPixelCoords = function (e, t) {
    var s,
      i = t.xAxis,
      n = t.yAxis,
      r = t.layout,
      o = Math.abs(n.maxMin.max - n.maxMin.min),
      c = { x: 0, y: ((n.maxMin.max - e.y) / o) * r.chart.height };
    if (null == (s = e.x) ? void 0 : s.value) {
      var g = i.viewItems.lastIndexOf(e.x.value);
      if (g >= 0) c.x = g * i.itemWidth + i.itemWidth * e.x.offset;
      else {
        var h = i.viewItems[0],
          f = i.viewItems[i.viewItems.length - 1],
          x = i.tradeDate.indexOf(h),
          l = i.tradeDate.indexOf(f),
          m = i.tradeDate.indexOf(e.x.value);
        if (a.dayjs(e.x.value).isBefore(a.dayjs(h)))
          c.x = -(x - m - e.x.offset) * i.itemWidth;
        else if (a.dayjs(e.x.value).isAfter(a.dayjs(f))) {
          var p = i.viewItems.length - (l - x) - 1;
          c.x = (m - x + e.x.offset + p) * i.itemWidth;
        } else if (
          a
            .dayjs(e.x.value)
            .isBetween(
              a.dayjs(i.tradeDate[0]),
              a.dayjs(i.tradeDate[i.tradeDate.length - 1])
            )
        )
          for (var u = i.viewItems.length - 1; u >= 0; u--) {
            var b = d(i.viewItems[u]),
              v = b.start,
              y = b.end;
            if (a.dayjs(e.x.value).isBetween(v, y)) {
              c.x = u * i.itemWidth + i.itemWidth * e.x.offset;
              break;
            }
          }
      }
    }
    return c;
  }),
  (exports.getPixelRatio = function () {
    return a.StockBridge.ENV === a.EnvTypeEnum.MP
      ? a.wx$1.getSystemInfoSync().pixelRatio || 1
      : window.devicePixelRatio || 1;
  }),
  (exports.hexToRgbArray = function (e) {
    try {
      var t = e.replace(/^#/, "");
      return [
        parseInt(t.substring(0, 2), 16),
        parseInt(t.substring(2, 4), 16),
        parseInt(t.substring(4, 6), 16),
      ];
    } catch (e) {
      return [0, 0, 0];
    }
  }),
  (exports.parallelLineInBounds = function (t, a, s) {
    var i = e(t, 2),
      n = i[0],
      r = i[1],
      o = (r.y - n.y) / (r.x - n.x),
      d = a.y - o * a.x;
    return c(
      [
        { x: a.x, y: a.y },
        { x: a.x + 1, y: o * (a.x + 1) + d },
      ],
      s
    );
  }),
  (exports.rayInBounds = function (e, a, s) {
    var i = e.find(function (e) {
        return !e.isAnchor;
      }),
      n = c(e, s);
    if (0 === n.length) return [];
    var r = n.filter(function (e) {
      return a.x < i.x
        ? e.x > i.x
        : a.x > i.x
        ? e.x < i.x
        : a.y < i.y
        ? e.y > i.y
        : e.y < i.y;
    });
    if (0 === r.length) return [];
    var o = r.reduce(function (e, s) {
      var i = Math.sqrt(t(e.x - a.x, 2) + t(e.y - a.y, 2));
      return Math.sqrt(t(s.x - a.x, 2) + t(s.y - a.y, 2)) > i ? s : e;
    });
    return [a, o];
  }),
  (exports.rectSize = { width: 200, height: 120 }),
  (exports.requestAnimFrame = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return n
      ? t.requestAnimationFrame(e)
      : (
          (n
            ? t.requestAnimationFrame
            : window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.oRequestAnimationFrame ||
              window.msRequestAnimationFrame) ||
          function (e) {
            setTimeout(e, 1e3 / 60);
          }
        )(e);
  }),
  (exports.slashLineInBounds = c),
  (exports.uuid = function () {
    return ""
      .concat(new Date().getTime().toString().substr(7), "-")
      .concat(parseInt((1e4 * Math.random()).toString()));
  });
