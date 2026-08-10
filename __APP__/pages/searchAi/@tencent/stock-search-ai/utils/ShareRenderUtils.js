var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../../../@babel/runtime/helpers/createClass"),
  s = require("../../../../../@babel/runtime/helpers/inherits"),
  r = require("../../../../../@babel/runtime/helpers/createSuper"),
  a = function (e, t, n) {
    return new Promise(function (s, r) {
      var a = function (e) {
          try {
            c(n.next(e));
          } catch (e) {
            r(e);
          }
        },
        i = function (e) {
          try {
            c(n.throw(e));
          } catch (e) {
            r(e);
          }
        },
        c = function (e) {
          return e.done ? s(e.value) : Promise.resolve(e.value).then(a, i);
        };
      c((n = n.apply(e, t)).next());
    });
  };
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var i = require("shareUtils.js"),
  c = require("../../stock-share-snapshot/components/CanvasImage.js"),
  o = require("../../stock-news-core/utils/market.js"),
  p = (function (i) {
    s(p, i);
    var c = r(p);
    function p() {
      return t(this, p), c.apply(this, arguments);
    }
    return (
      n(p, [
        {
          key: "getAnswerRenderList",
          value: function (e) {
            var t = Date.now(),
              n = this.formatContent(e, 360, 8),
              s = 56;
            n.length <= 6 && (s = 192 - (46 * n.length) / 2);
            for (
              var r = [
                  {
                    type: "image",
                    url: ""
                      .concat(
                        n.length <= 6
                          ? "https://st.gtimg.com/design/678987190384531471f5c81274d7e257"
                          : "https://st.gtimg.com/design/fd348289b1449d11d7715d60474d1457",
                        ".png?t="
                      )
                      .concat(t),
                  },
                ],
                a = 0;
              a < n.length && a < 7;
              a++
            )
              r.push({
                type: "text",
                fontSize: 30,
                color: "#475166",
                text: n[a],
                x: 56,
                y: s,
              }),
                (s += 46);
            return r;
          },
        },
        {
          key: "getMbtiRenderList",
          value: function (e) {
            var t,
              n = Date.now(),
              s = e.mbti,
              r = e.content,
              a = s || {},
              i = a.value,
              c = a.info,
              p = [
                {
                  type: "image",
                  url: "https://st.gtimg.com/design/3c332fea54d936edd67147eb8c318049.png?t=".concat(
                    n
                  ),
                },
              ],
              g = "".concat(null == i ? void 0 : i.toUpperCase(), "投资偏好"),
              u = 24 + (290 - this.measureText(g, 36, 500)) / 2;
            p.push({
              type: "text",
              fontSize: 36,
              color: "#262E40",
              fontWeight: 500,
              text: g,
              x: u,
              y: 60,
            }),
              p.push({
                type: "image",
                url: ""
                  .concat(
                    {
                      enfj: "https://st.gtimg.com/design/f5b7eefb3c1ad46bc0482b7450ad666e.png",
                      enfp: "https://st.gtimg.com/design/af7f0f09712ee4df758f494b645c3537.png",
                      entj: "https://st.gtimg.com/design/30efd40ac8e799c8b6e14586c75cf999.png",
                      entp: "https://st.gtimg.com/design/507b3ae31c8dcb0d0589f1d7a8b00074.png",
                      esfj: "https://st.gtimg.com/design/256c0cbd9e8d8a2fd983bd334794fb64.png",
                      esfp: "https://st.gtimg.com/design/98253b876582eca6506183932ffc4fc6.png",
                      estj: "https://st.gtimg.com/design/2281db420b9cc6eccf4a400880254bf2.png",
                      estp: "https://st.gtimg.com/design/785d8326706710db6f8650f2799edf35.png",
                      infj: "https://st.gtimg.com/design/2b6f970fc9f6e32a71a8c0e641fa79a0.png",
                      infp: "https://st.gtimg.com/design/9fbc3ee8f8a991a122e619194025bdcb.png",
                      intj: "https://st.gtimg.com/design/bcd9186a76b1689a20f7fb77607f51f3.png",
                      intp: "https://st.gtimg.com/design/ae3ef09e2899c20a36ff094acd9f2e2e.png",
                      isfj: "https://st.gtimg.com/design/635be9a2451f6d9d7b10389eadcdab1a.png",
                      isfp: "https://st.gtimg.com/design/236e92c6e1d088fe146239851c3da1c5.png",
                      istj: "https://st.gtimg.com/design/6f9507f675b0477b5a22710d4b53e86b.png",
                      istp: "https://st.gtimg.com/design/7ebe132fd085ec382cae02ed718ea720.png",
                    }[null == i ? void 0 : i.toLowerCase()],
                    "?t="
                  )
                  .concat(n),
                x: 345,
                y: 0,
                width: 120,
                height: 120,
              });
            var d = 138,
              f = c,
              h = c.split("。");
            h.length > 1 && (f = h.slice(1).join("。"));
            for (
              var l = this.formatContent(f, 432, 2, 24), m = 0;
              m < l.length;
              m++
            )
              p.push({
                type: "text",
                fontSize: 24,
                color: "#262E40",
                text: l[m],
                x: 24,
                y: d,
              }),
                (d += 34);
            for (
              var b = 24,
                v = JSON.parse(r.message),
                x = (
                  null == (t = null == v ? void 0 : v.component_data)
                    ? void 0
                    : t.data
                ).stocks,
                y = void 0 === x ? [] : x,
                w = 0;
              w < y.length;
              w++
            ) {
              var C = y[w],
                k = C.name,
                j = C.code,
                S = C.condition_values,
                q = b + (176 - this.measureText(k, 22, 400) - 28) / 2;
              p.push({
                type: "image",
                url: "".concat(o.getMarketIcon(j), "?t=").concat(n),
                x: q,
                y: 247,
                width: 22,
                height: 16,
              }),
                p.push({
                  type: "text",
                  fontSize: 22,
                  color: "#475166",
                  text: k,
                  x: q + 28,
                  y: 244,
                });
              var A = S[1],
                z = A.raw,
                P = A.disp,
                I = z > 0 ? "#e63535" : z < 0 ? "#1caa3c" : "#7a8499",
                M = b + (176 - this.measureText(P, 22, 400)) / 2;
              p.push({
                type: "text",
                fontSize: 22,
                color: I,
                text: P,
                x: M,
                y: 279,
              }),
                (b += 184);
            }
            return (
              p.push({
                type: "text",
                fontSize: 20,
                color: "#98A0B3CC",
                text: "*",
                x: 24,
                y: 338,
              }),
              p.push({
                type: "text",
                fontSize: 20,
                color: "#98A0B3CC",
                text: "股市有风险，投资需谨慎",
                x: 34,
                y: 336,
              }),
              p
            );
          },
        },
        {
          key: "renderContent",
          value: function (t) {
            return a(
              this,
              null,
              e().mark(function n() {
                var s = this;
                return e().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return n.abrupt(
                            "return",
                            (this.initOffscreenCanvas(),
                            new Promise(function (n, r) {
                              return a(
                                s,
                                null,
                                e().mark(function s() {
                                  var a, i, c, o, p;
                                  return e().wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.prev = 0),
                                              (a = t.answer),
                                              (i = t.functionObj),
                                              (c = t.isMbti),
                                              (o =
                                                c &&
                                                (null == i ? void 0 : i.mbti)
                                                  ? this.getMbtiRenderList(i)
                                                  : this.getAnswerRenderList(
                                                      a
                                                    )),
                                              (e.next = 7),
                                              this.draw(o)
                                            );
                                          case 7:
                                            (p = e.sent), n(p), (e.next = 14);
                                            break;
                                          case 11:
                                            (e.prev = 11),
                                              (e.t0 = e.catch(0)),
                                              r(e.t0);
                                          case 14:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    s,
                                    this,
                                    [[0, 11]]
                                  );
                                })
                              );
                            }))
                          );
                        case 1:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
          },
        },
      ]),
      p
    );
  })(c.CanvasImage);
exports.generateAiShareParam = function (t) {
  return a(
    this,
    null,
    e().mark(function n() {
      var s, r, a, c, o, g, u, d, f, h, l, m, b, v, x;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((c = (a = t || {}).question),
                  (o = a.isMbti),
                  (g = a.functionObj),
                  (u = a.requestId),
                  (d = a.shareCode),
                  (f = d),
                  (h = {
                    title: "投资问元宝，分析更专业",
                    imageUrl:
                      "https://st.gtimg.com/design/5619536bbc41e2aee0485f2f9bc3aa1c.png",
                    path: "/pages/searchAi/main",
                  }),
                  (e.prev = 2),
                  f)
                ) {
                  e.next = 8;
                  break;
                }
                return (e.next = 6), i.uploadAIShareContent(u);
              case 6:
                (l = e.sent), (f = null == l ? void 0 : l.sharecode);
              case 8:
                if (!f) {
                  e.next = 18;
                  break;
                }
                return (
                  (m = o
                    ? "👌🏻 已解锁「".concat(
                        null ==
                          (r =
                            null == (s = null == g ? void 0 : g.mbti)
                              ? void 0
                              : s.value)
                          ? void 0
                          : r.toUpperCase(),
                        "」人格的专属股票"
                      )
                    : "问元宝：".concat(c)),
                  (h = {
                    title: m,
                    path: "/pages/searchAi/share?shareCode="
                      .concat(f, "&stat_data=O6600p000h156&requestId=")
                      .concat(u)
                      .concat(o ? "&shareType=mbti" : ""),
                    mtaParams: { requestid: u },
                  }),
                  (b = new p()),
                  (e.next = 14),
                  b.renderContent(t)
                );
              case 14:
                (v = e.sent), (x = (v || {}).tempFilePath), (h.imageUrl = x);
              case 18:
                e.next = 22;
                break;
              case 20:
                (e.prev = 20), (e.t0 = e.catch(2));
              case 22:
                return e.abrupt("return", h);
              case 23:
              case "end":
                return e.stop();
            }
        },
        n,
        null,
        [[2, 20]]
      );
    })
  );
};
