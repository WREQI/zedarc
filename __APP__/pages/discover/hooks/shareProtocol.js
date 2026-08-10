var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../@tencent/st-canvas-image/OffscreenCanvas.js"),
  n = require("../../../common/vendor.js"),
  r = require("../@tencent/stock-community-ui/utils/service/index.js");
function a(e) {
  return e ? (e < 1e4 ? e : "".concat((e / 1e4).toFixed(1), "万")) : "0";
}
(exports.shareProtocol = function () {
  return {
    getShareSnapshot: function (o) {
      return (
        (i = this),
        null,
        (s = e().mark(function () {
          var i, s, c, u, l, f, p, h, x, v, g, y, d, m;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((i = o.event_heat),
                    (s = o.event_summary),
                    (c = o.event_id),
                    (u = o.event_create_time),
                    (function (e) {
                      var t = n.login.getLoginInfo(void 0) || {
                          qluin: "",
                          qlskey: "",
                        },
                        a = t && "qluin" in t ? t.qluin : "",
                        o = t && "qlskey" in t ? t.qlskey : "";
                      if (a && o) {
                        var i = {
                          qlskey: o,
                          qluin: a,
                          qlappid: "wx4ffb369b6881ee5e",
                          appid: "wx4ffb369b6881ee5e",
                          openid: a,
                          fskey: o,
                        };
                        r.recordUserAct(
                          { target_id: e, act_type: "share" },
                          {},
                          i
                        );
                      }
                    })(c),
                    (l = ""),
                    (f = 2),
                    s && s.length > 0 && ((l = s), (f = 3)),
                    !(l.length <= 0))
                  ) {
                    e.next = 5;
                    break;
                  }
                  return e.abrupt("return", {});
                case 5:
                  for (
                    p = (function (e, n, r, a) {
                      var o =
                          arguments.length > 4 && void 0 !== arguments[4]
                            ? arguments[4]
                            : 400,
                        i =
                          t.OffscreenCanvasImage.initCanvas().getContext("2d");
                      i.font = "".concat(o, " ").concat(a, "px stockFont");
                      for (
                        var s = e.split(""), c = [], u = "", l = 0;
                        l < s.length;

                      ) {
                        var f = s[l];
                        i.measureText(u).width + i.measureText(f).width < n
                          ? (u += f)
                          : (c.push(u), (u = f)),
                          (l += 1);
                      }
                      if ((c.push(u), c.length > r)) {
                        for (
                          var p = "...",
                            h = i.measureText(p).width,
                            x = c[r - 1],
                            v = "",
                            g = 0,
                            y = 0;
                          y < x.length;
                          y++
                        ) {
                          var d = x[y],
                            m = i.measureText(d).width;
                          if (g + m + h >= n) break;
                          (v += d), (g += m);
                        }
                        (v += p), c.splice(r - 1, 1, v);
                      }
                      return c.slice(0, r);
                    })(l, 368, f, 30),
                      h = [
                        {
                          type: "image",
                          text: "",
                          url: "https://st.gtimg.com/design/1b72e55778615d3a2ad6497df6984e4c.png?t=".concat(
                            Date.parse(new Date().toString())
                          ),
                          x: 0,
                          y: 0,
                        },
                      ],
                      x = 154,
                      2 === p.length ? (x = 131) : 3 === p.length && (x = 108),
                      x += 30,
                      v = 0;
                    v < p.length;
                    v++
                  )
                    (g = p[v]),
                      h.push({
                        type: "text",
                        text: g,
                        x: 56,
                        y: x,
                        style: { color: "#262E40", fontSize: 30 },
                      }),
                      (x += 45);
                  return (
                    20,
                    (y = "".concat(
                      ((d = 1e3 * u), n.dayjs(d).format("YYYY-MM-DD"))
                    )),
                    h.push({
                      type: "text",
                      text: y,
                      x: 24,
                      y: 348,
                      style: { color: "#262E4066", fontSize: 20 },
                    }),
                    h.push({
                      type: "text",
                      text: "热度",
                      x: 56,
                      y: 288,
                      style: { color: "#7A8499", fontSize: 20 },
                    }),
                    (m = a(i)),
                    h.push({
                      type: "text",
                      text: m,
                      x: 100,
                      y: 288,
                      style: {
                        color: "#475166",
                        fontSize: 20,
                        fontWeight: "500",
                      },
                    }),
                    (e.next = 15),
                    t.OffscreenCanvasImage.draw(h)
                  );
                case 15:
                  return e.abrupt("return", e.sent);
                case 16:
                case "end":
                  return e.stop();
              }
          }, c);
        })),
        new Promise(function (e, t) {
          var n = function e(n) {
              try {
                a(s.next(n));
              } catch (e) {
                t(e);
              }
            },
            r = function (e) {
              try {
                a(s.throw(e));
              } catch (e) {
                t(e);
              }
            },
            a = function (t) {
              return t.done ? e(t.value) : Promise.resolve(t.value).then(n, r);
            };
          a((s = s.apply(i, null)).next());
        })
      );
      var i, s;
    },
  };
}),
  (exports.tophotFormat = a);
