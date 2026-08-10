var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../../../@babel/runtime/helpers/inherits"),
  a = require("../../../../../../@babel/runtime/helpers/createSuper"),
  c = function (e, t, r) {
    return new Promise(function (n, a) {
      var c = function (e) {
          try {
            s(r.next(e));
          } catch (e) {
            a(e);
          }
        },
        i = function (e) {
          try {
            s(r.throw(e));
          } catch (e) {
            a(e);
          }
        },
        s = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(c, i);
        };
      s((r = r.apply(e, t)).next());
    });
  };
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var i = (function (i) {
    n(u, i);
    var s = a(u);
    function u() {
      return t(this, u), s.apply(this, arguments);
    }
    return (
      r(u, [
        {
          key: "getQuestionRenderList",
          value: function (e) {
            if (!e) return [];
            var t = Date.now(),
              r = this.formatContent(e.question || "", 356, 3),
              n = 56;
            r.length <= 3 && (n = 192 - (38.85 * r.length) / 2 - 6);
            var a = "",
              c = 0,
              i = 0;
            1 === r.length
              ? ((a =
                  "https://st.gtimg.com/design/ccbb5584cb0c467fb8397fae6ceb1af8.png"),
                (c = 80),
                (i = 92))
              : 2 === r.length
              ? ((a =
                  "https://st.gtimg.com/design/7bbbd64dae888876aa6d5d6cb0c7cc03.png"),
                (c = 60),
                (i = 72))
              : ((a =
                  "https://st.gtimg.com/design/8a4250b1bf459a43c6e0c7234ea0aae2.png"),
                (c = 36),
                (i = 48));
            var s = [
              { type: "image", url: "".concat(a, "?t=").concat(t), x: 0, y: 0 },
            ];
            if (
              (e.headimgurl &&
                s.push({
                  type: "image",
                  url: "".concat(e.headimgurl, "?t=").concat(t),
                  x: 24,
                  y: c,
                  width: 48,
                  height: 48,
                  radius: 8,
                }),
              e.nickname &&
                s.push({
                  type: "text",
                  fontSize: 24,
                  color: "#000000",
                  fontWeight: 400,
                  text: e.nickname,
                  x: 88,
                  y: i,
                }),
              void 0 !== e.hot_score && null !== e.hot_score)
            ) {
              var u =
                456 - this.measureText("热力值".concat(e.hot_score), 24, 400);
              s.push({
                type: "text",
                fontSize: 24,
                color: "#00000066",
                fontWeight: 400,
                text: "热力值".concat(e.hot_score),
                x: u,
                y: i,
              });
            }
            for (var o = 0; o < r.length && o < 4; o++)
              s.push({
                type: "text",
                fontSize: 28,
                color: "#576B95",
                text: r[o],
                x: 80,
                y: n,
              }),
                (n += 38.85);
            return s;
          },
        },
        {
          key: "renderContent",
          value: function (t) {
            return c(
              this,
              null,
              e().mark(function r() {
                var n = this;
                return e().wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return r.abrupt(
                            "return",
                            (this.initOffscreenCanvas(),
                            new Promise(function (r, a) {
                              return c(
                                n,
                                null,
                                e().mark(function n() {
                                  var c, i;
                                  return e().wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.prev = 0),
                                              (c =
                                                this.getQuestionRenderList(t)),
                                              (e.next = 4),
                                              this.draw(c)
                                            );
                                          case 4:
                                            (i = e.sent), r(i), (e.next = 11);
                                            break;
                                          case 8:
                                            (e.prev = 8),
                                              (e.t0 = e.catch(0)),
                                              a(e.t0);
                                          case 11:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    n,
                                    this,
                                    [[0, 8]]
                                  );
                                })
                              );
                            }))
                          );
                        case 1:
                        case "end":
                          return r.stop();
                      }
                  },
                  r,
                  this
                );
              })
            );
          },
        },
        {
          key: "writeDrawList",
          value: function (t) {
            return c(
              this,
              null,
              e().mark(function r() {
                var n = this;
                return e().wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return r.abrupt(
                            "return",
                            (this.initOffscreenCanvas(),
                            new Promise(function (r, a) {
                              return c(
                                n,
                                null,
                                e().mark(function n() {
                                  var c;
                                  return e().wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            try {
                                              (c =
                                                this.getQuestionRenderList(t)),
                                                r(c);
                                            } catch (e) {
                                              a(e);
                                            }
                                          case 1:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    n,
                                    this
                                  );
                                })
                              );
                            }))
                          );
                        case 1:
                        case "end":
                          return r.stop();
                      }
                  },
                  r,
                  this
                );
              })
            );
          },
        },
      ]),
      u
    );
  })(
    require("../../../stock-share-snapshot/components/CanvasImage.js")
      .CanvasImage
  ),
  s = "https://st.gtimg.com/design/f16c733c8ee95996d9275f5cd6068398.png";
function u(e) {
  return "/pages/act/webview/main?url=".concat(encodeURIComponent(e));
}
exports.generateShareParam = function (t) {
  return c(
    this,
    null,
    e().mark(function r() {
      var n, a, c, o, h, p, l, f, m, g;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((a = (n = t || {}).share_code),
                  (c = void 0 === a ? "" : a),
                  (o = n.shareStat),
                  (h = void 0 === o ? "OUo00p000d452" : o),
                  (p =
                    "https://zqact01.tenpay.com/activity/page/ThirteenYear/#/home?share_code="
                      .concat(c, "&stat_data=")
                      .concat(h)),
                  (l = {
                    title: "【腾讯微证券十三周年庆】参与活动赢价值1688元大奖",
                    imageUrl: s,
                    path: u(p),
                  }),
                  c)
                ) {
                  e.next = 3;
                  break;
                }
                return e.abrupt("return", l);
              case 3:
                return (
                  (e.prev = 3), (f = new i()), (e.next = 7), f.renderContent(t)
                );
              case 7:
                return (
                  (m = e.sent),
                  (g = (m || {}).tempFilePath),
                  e.abrupt("return", {
                    title: "【微证券十三周年庆】快来帮我点赞冲排名赢大奖！",
                    path: u(p),
                    imageUrl: g || s,
                  })
                );
              case 13:
                return (
                  (e.prev = 13),
                  (e.t0 = e.catch(3)),
                  e.abrupt("return", {
                    title: "【微证券十三周年庆】快来帮我点赞冲排名赢大奖！",
                    path: u(p),
                    imageUrl: s,
                  })
                );
              case 16:
              case "end":
                return e.stop();
            }
        },
        r,
        null,
        [[3, 13]]
      );
    })
  );
};
