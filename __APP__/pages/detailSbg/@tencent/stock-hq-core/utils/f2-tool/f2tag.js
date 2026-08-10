var t = require("../../../../../../common/vendor.js");
exports.createTag = function (e, a, i) {
  var n =
      arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "#fff",
    r = a.textValue,
    d =
      "undefined" != typeof document
        ? (function (t, e, a) {
            return a || (a = document.createElement("canvas").getContext("2d"))
              ? ((a.font = "10px sans-serif"), a.measureText(t))
              : { width: 0 };
          })(r).width
        : (function (e, a) {
            var i = t.wx$1.createCanvasContext("myCanvas");
            return (i.font = "10px sans-serif"), i.measureText(e).width;
          })(r),
    o = e.addGroup();
  a.x <= 30 && (a.x += d + 4 + 2);
  var s = {
    attrs: {
      x: a.x - d / 2 - 2 - 1,
      y: a.y,
      textAlign: "center",
      textBaseline: "middle",
      fontSize: 10,
      fill: a.fill,
      text: r,
      fontFamily: i,
    },
  };
  o.addShape("text", s);
  var x = o.getBBox(),
    f = {
      attrs: {
        x: x.minX - 2,
        y: x.minY - 2,
        width: x.width + 4,
        height: x.height + 4,
        stroke: a.fill,
        strokeOpacity: "0.5",
        fillStyle: n,
        fillOpacity: "0.85",
        lineWidth: 1,
        radius: 2,
      },
    };
  o.addShape("rect", f), o.addShape("text", s);
};
