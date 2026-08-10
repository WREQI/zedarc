var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../@babel/runtime/helpers/slicedToArray");
require("../../app.js");
var a = require("../StockLogo/utils.js"),
  n = require("./constants.js"),
  _ = require("./shareCardLayout.js");
function o(e, r, a, n, _, o, E) {
  var I = Math.min(o, n / 2, _ / 2);
  e.save(),
    e.beginPath(),
    e.moveTo(r + I, a),
    e.lineTo(r + n - I, a),
    e.arcTo(r + n, a, r + n, a + I, I),
    e.lineTo(r + n, a + _ - I),
    e.arcTo(r + n, a + _, r + n - I, a + _, I),
    e.lineTo(r + I, a + _),
    e.arcTo(r, a + _, r, a + _ - I, I),
    e.lineTo(r, a + I),
    e.arcTo(r, a, r + I, a, I),
    e.closePath(),
    e.clip();
  var T = (function (e, r, t, a, n) {
      var _ = e + t / 2,
        o = r + a / 2,
        E = (n * Math.PI) / 180,
        I = Math.sin(E),
        T = -Math.cos(E),
        i = Math.sqrt(t * t + a * a) / 2;
      return { x0: _ - I * i, y0: o - T * i, x1: _ + I * i, y1: o + T * i };
    })(r, a, n, _, E.angle),
    i = T.x0,
    l = T.y0,
    A = T.x1,
    c = T.y1,
    s = e.createLinearGradient(i, l, A, c);
  E.stops.forEach(function (e) {
    var r = t(e, 2),
      a = r[0],
      n = r[1];
    return s.addColorStop(Math.min(a, 1), n);
  }),
    (e.fillStyle = s),
    e.fillRect(r, a, n, _),
    e.restore();
}
exports.makeDrawShareSnapshot = function (E) {
  return (function () {
    var I = r(
      e().mark(function I(T, i) {
        var l,
          A,
          c,
          s,
          R,
          u,
          S,
          L,
          f,
          N,
          O,
          G,
          H,
          h,
          d,
          p,
          M,
          P,
          m,
          D,
          v,
          F,
          g,
          x,
          w,
          C,
          W,
          Z,
          k,
          y,
          K,
          X,
          b,
          B,
          Q;
        return e().wrap(function (I) {
          for (;;)
            switch ((I.prev = I.next)) {
              case 0:
                return (
                  (l = i.width),
                  (A = i.height),
                  (c = Array.from(
                    new Set(
                      E.items
                        .map(function (e) {
                          return a.buildStockLogoUrl(
                            e.market,
                            e.stock_code || ""
                          );
                        })
                        .filter(Boolean)
                    )
                  )),
                  (s = Array.from(
                    new Set(
                      E.items.map(function (e) {
                        return n.resolveMarketLogoKey(e.market, e.stock_cls);
                      })
                    )
                  )),
                  (R = E.simpleMode
                    ? n.IMAGES.shareBgSimple
                    : n.IMAGES.shareBgClassic),
                  (u = E.userHeadUrl || n.IMAGES.defaultAvatar),
                  (S = i.loadImage(R).catch(function () {
                    return null;
                  })),
                  (L = r(
                    e().mark(function t() {
                      var a;
                      return e().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (a = new Map()),
                                (t.next = 3),
                                Promise.all(
                                  c.map(
                                    (function () {
                                      var t = r(
                                        e().mark(function r(t) {
                                          var n;
                                          return e().wrap(
                                            function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    return (
                                                      (e.prev = 0),
                                                      (e.t0 = a),
                                                      (e.t1 = t),
                                                      (e.next = 5),
                                                      i.loadImage(t)
                                                    );
                                                  case 5:
                                                    (e.t2 = e.sent),
                                                      e.t0.set.call(
                                                        e.t0,
                                                        e.t1,
                                                        e.t2
                                                      ),
                                                      (e.next = 12);
                                                    break;
                                                  case 9:
                                                    (e.prev = 9),
                                                      (e.t3 = e.catch(0)),
                                                      null ==
                                                        (n =
                                                          E.onIconLoadError) ||
                                                        n.call(
                                                          E,
                                                          t,
                                                          e.t3 instanceof Error
                                                            ? e.t3
                                                            : new Error(
                                                                String(e.t3)
                                                              )
                                                        );
                                                  case 12:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            },
                                            r,
                                            null,
                                            [[0, 9]]
                                          );
                                        })
                                      );
                                      return function (e) {
                                        return t.apply(this, arguments);
                                      };
                                    })()
                                  )
                                )
                              );
                            case 3:
                              return t.abrupt("return", a);
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )()),
                  (f = r(
                    e().mark(function t() {
                      var a;
                      return e().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (a = new Map()),
                                (t.next = 3),
                                Promise.all(
                                  s.map(
                                    (function () {
                                      var t = r(
                                        e().mark(function r(t) {
                                          var _;
                                          return e().wrap(
                                            function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    return (
                                                      (e.prev = 0),
                                                      (e.t0 = a),
                                                      (e.t1 = t),
                                                      (e.next = 5),
                                                      i.loadImage(
                                                        n.MARKET_LOGOS[t]
                                                      )
                                                    );
                                                  case 5:
                                                    (e.t2 = e.sent),
                                                      e.t0.set.call(
                                                        e.t0,
                                                        e.t1,
                                                        e.t2
                                                      ),
                                                      (e.next = 12);
                                                    break;
                                                  case 9:
                                                    (e.prev = 9),
                                                      (e.t3 = e.catch(0)),
                                                      null ==
                                                        (_ =
                                                          E.onIconLoadError) ||
                                                        _.call(
                                                          E,
                                                          t,
                                                          e.t3 instanceof Error
                                                            ? e.t3
                                                            : new Error(
                                                                String(e.t3)
                                                              )
                                                        );
                                                  case 12:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            },
                                            r,
                                            null,
                                            [[0, 9]]
                                          );
                                        })
                                      );
                                      return function (e) {
                                        return t.apply(this, arguments);
                                      };
                                    })()
                                  )
                                )
                              );
                            case 3:
                              return t.abrupt("return", a);
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )()),
                  (N = r(
                    e().mark(function r() {
                      return e().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0), (e.next = 3), i.loadImage(u)
                                );
                              case 3:
                                return e.abrupt("return", e.sent);
                              case 6:
                                if (
                                  ((e.prev = 6),
                                  (e.t0 = e.catch(0)),
                                  u === n.IMAGES.defaultAvatar)
                                ) {
                                  e.next = 18;
                                  break;
                                }
                                return (
                                  (e.prev = 9),
                                  (e.next = 12),
                                  i.loadImage(n.IMAGES.defaultAvatar)
                                );
                              case 12:
                                return e.abrupt("return", e.sent);
                              case 15:
                                return (
                                  (e.prev = 15),
                                  (e.t1 = e.catch(9)),
                                  e.abrupt("return", null)
                                );
                              case 18:
                                return e.abrupt("return", null);
                              case 19:
                              case "end":
                                return e.stop();
                            }
                        },
                        r,
                        null,
                        [
                          [0, 6],
                          [9, 15],
                        ]
                      );
                    })
                  )()),
                  (I.next = 12),
                  Promise.all([S, L, f, N])
                );
              case 12:
                return (
                  (O = I.sent),
                  (G = t(O, 4)),
                  (H = G[0]),
                  (h = G[1]),
                  (d = G[2]),
                  (p = G[3]),
                  (function (e, r, a, n) {
                    var _ = r * n.cxRatio,
                      o = a * n.cyRatio,
                      E = r * n.rxRatio,
                      I = a * n.ryRatio;
                    e.save(), e.translate(_, o);
                    var T = 0 === E ? 1 : I / E;
                    e.scale(1, T);
                    var i = e.createRadialGradient(0, 0, 0, 0, 0, E);
                    n.stops.forEach(function (e) {
                      var r = t(e, 2),
                        a = r[0],
                        n = r[1];
                      return i.addColorStop(a, n);
                    }),
                      (e.fillStyle = i),
                      e.fillRect(-_, -o / T, r, a / T),
                      e.restore();
                  })(
                    T,
                    l,
                    A,
                    E.simpleMode
                      ? _.CARD_BG_RADIAL_SIMPLE
                      : _.CARD_BG_RADIAL_CLASSIC
                  ),
                  H &&
                    ((M = l * ((H.height || 1) / (H.width || 1))),
                    T.drawImage(H, 0, 0, l, M)),
                  (P =
                    _.TITLE_PADDING_TOP +
                    (_.TITLE_LINE_HEIGHT - _.TITLE_FONT_SIZE) / 2),
                  T.save(),
                  (T.font = ""
                    .concat(_.TITLE_FONT_WEIGHT, " ")
                    .concat(_.TITLE_FONT_SIZE, "px ")
                    .concat(
                      _.TITLE_FONT_FAMILY,
                      ', "PingFang SC", sans-serif'
                    )),
                  (T.textBaseline = "top"),
                  (T.fillStyle = _.TEXT_PRIMARY),
                  (m = "恭喜中签"),
                  (D = String(E.items.length)),
                  (v = T.measureText(m).width),
                  (F = T.measureText(D).width),
                  (g = _.TITLE_PADDING_X),
                  T.fillText(m, g, P),
                  (g += v),
                  (T.fillStyle = E.primaryColor),
                  T.fillText(D, g, P),
                  (g += F),
                  (T.fillStyle = _.TEXT_PRIMARY),
                  T.fillText("只！", g, P),
                  T.restore(),
                  i.drawText(
                    E.subTitle,
                    _.TITLE_PADDING_X,
                    _.TITLE_PADDING_TOP + _.TITLE_LINE_HEIGHT,
                    {
                      fontSize: _.SUBTITLE_FONT_SIZE,
                      lineHeight: _.SUBTITLE_LINE_HEIGHT,
                      color: _.TEXT_PRIMARY,
                      fontWeight: "normal",
                      maxWidth: l - 2 * _.TITLE_PADDING_X,
                    }
                  ),
                  (x = _.LIST_AREA_X_MARGIN),
                  (w = _.HEADER_HEIGHT + _.LIST_AREA_TOP_MARGIN),
                  (C = l - 2 * _.LIST_AREA_X_MARGIN),
                  (W =
                    _.LIST_INNER_TOP_PADDING +
                    _.ITEM_HEIGHT * Math.max(E.items.length, 1)),
                  o(
                    T,
                    x,
                    w,
                    C,
                    W,
                    _.LIST_AREA_RADIUS,
                    E.simpleMode
                      ? _.LIST_BG_GRADIENT_SIMPLE
                      : _.LIST_BG_GRADIENT_CLASSIC
                  ),
                  E.items.forEach(function (e, r) {
                    var t = w + _.LIST_INNER_TOP_PADDING + _.ITEM_HEIGHT * r,
                      o = x + _.LIST_INNER_X_PADDING,
                      I = a.buildStockLogoUrl(e.market, e.stock_code || ""),
                      l = I ? h.get(I) : null,
                      A = n.resolveMarketLogoKey(e.market, e.stock_cls),
                      c = d.get(A),
                      s = o;
                    if (l) {
                      var R =
                        t + (_.STOCK_NAME_LINE_HEIGHT - _.STOCK_LOGO_SIZE) / 2;
                      i.drawCircleImage(l, o, R, _.STOCK_LOGO_SIZE),
                        (s = o + _.STOCK_LOGO_SIZE + _.MARKET_LOGO_GAP);
                    } else if (c) {
                      var u =
                        t +
                        (_.STOCK_NAME_LINE_HEIGHT - _.MARKET_LOGO_HEIGHT) / 2;
                      T.drawImage(
                        c,
                        o,
                        u,
                        _.MARKET_LOGO_WIDTH,
                        _.MARKET_LOGO_HEIGHT
                      ),
                        (s = o + _.MARKET_LOGO_WIDTH + _.MARKET_LOGO_GAP);
                    }
                    i.drawText(e.stock_name, s, t, {
                      fontSize: _.STOCK_NAME_FONT_SIZE,
                      lineHeight: _.STOCK_NAME_LINE_HEIGHT,
                      color: _.TEXT_PRIMARY,
                      fontWeight: 500,
                      maxWidth: C - 2 * _.LIST_INNER_X_PADDING - (s - o),
                    });
                    var S = t + _.STOCK_NAME_LINE_HEIGHT + _.ITEM_HEADER_GAP,
                      L = (C - 2 * _.LIST_INNER_X_PADDING) / 2;
                    i.drawText(E.formatPrice(e.price), o, S, {
                      fontSize: _.VALUE_FONT_SIZE,
                      lineHeight: _.VALUE_LINE_HEIGHT,
                      color: _.TEXT_PRIMARY,
                      fontWeight: 500,
                    }),
                      i.drawText("股票价格", o, S + _.VALUE_LINE_HEIGHT, {
                        fontSize: _.LABEL_FONT_SIZE,
                        lineHeight: _.LABEL_LINE_HEIGHT,
                        color: _.TEXT_PRIMARY,
                      }),
                      i.drawText(E.formatQty(e.quantity), o + L, S, {
                        fontSize: _.VALUE_FONT_SIZE,
                        lineHeight: _.VALUE_LINE_HEIGHT,
                        color: _.TEXT_PRIMARY,
                        fontWeight: 500,
                      }),
                      i.drawText("中签数量", o + L, S + _.VALUE_LINE_HEIGHT, {
                        fontSize: _.LABEL_FONT_SIZE,
                        lineHeight: _.LABEL_LINE_HEIGHT,
                        color: _.TEXT_PRIMARY,
                      });
                  }),
                  (Z = w + W + _.LIST_AREA_BOTTOM_MARGIN),
                  (T.fillStyle = "#FFFFFF"),
                  T.fillRect(0, Z, l, _.FOOTER_HEIGHT),
                  (k = Z + (_.FOOTER_HEIGHT - _.AVATAR_SIZE) / 2),
                  p
                    ? i.drawCircleImage(p, _.FOOTER_PADDING, k, _.AVATAR_SIZE)
                    : (T.save(),
                      T.beginPath(),
                      T.arc(
                        _.FOOTER_PADDING + _.AVATAR_SIZE / 2,
                        k + _.AVATAR_SIZE / 2,
                        _.AVATAR_SIZE / 2,
                        0,
                        2 * Math.PI
                      ),
                      (T.fillStyle = "#F5F5F5"),
                      T.fill(),
                      T.restore()),
                  (y = _.FOOTER_PADDING + _.AVATAR_SIZE + _.NICKNAME_LEFT_GAP),
                  (K =
                    _.NICKNAME_LINE_HEIGHT +
                    _.NICKNAME_DATE_GAP +
                    _.DATE_LINE_HEIGHT),
                  (X = Z + (_.FOOTER_HEIGHT - K) / 2),
                  i.drawText(E.userNickName, y, X, {
                    fontSize: _.NICKNAME_FONT_SIZE,
                    lineHeight: _.NICKNAME_LINE_HEIGHT,
                    color: _.TEXT_PRIMARY,
                    fontWeight: 500,
                    maxWidth: _.NICKNAME_MAX_WIDTH,
                  }),
                  i.drawText(
                    E.todayDateText,
                    y,
                    X + _.NICKNAME_LINE_HEIGHT + _.NICKNAME_DATE_GAP,
                    {
                      fontSize: _.DATE_FONT_SIZE,
                      lineHeight: _.DATE_LINE_HEIGHT,
                      color: _.TEXT_PRIMARY,
                    }
                  ),
                  (b = l - _.FOOTER_PADDING - _.QR_WRAP_SIZE),
                  (B = Z + (_.FOOTER_HEIGHT - _.QR_WRAP_SIZE) / 2),
                  T.save(),
                  (T.shadowOffsetX = _.QR_WRAP_SHADOW_OFFSET_X),
                  (T.shadowOffsetY = _.QR_WRAP_SHADOW_OFFSET_Y),
                  (T.shadowBlur = _.QR_WRAP_SHADOW_BLUR),
                  (T.shadowColor = _.QR_WRAP_SHADOW_COLOR),
                  i.drawRoundRect(
                    b,
                    B,
                    _.QR_WRAP_SIZE,
                    _.QR_WRAP_SIZE,
                    _.QR_WRAP_RADIUS,
                    { fill: "#FFFFFF" }
                  ),
                  T.restore(),
                  i.drawRoundRect(
                    b,
                    B,
                    _.QR_WRAP_SIZE,
                    _.QR_WRAP_SIZE,
                    _.QR_WRAP_RADIUS,
                    {
                      stroke: _.QR_WRAP_BORDER_COLOR,
                      lineWidth: _.QR_WRAP_BORDER_WIDTH,
                    }
                  ),
                  (Q = (_.QR_WRAP_SIZE - _.QR_SIZE) / 2),
                  (I.next = 37),
                  i.drawQRCode(E.qrcodeURL, b + Q, B + Q, _.QR_SIZE, {
                    dark: "#000000",
                    light: "#FFFFFF",
                    errorCorrectionLevel: "M",
                    margin: 2,
                  })
                );
              case 37:
              case "end":
                return I.stop();
            }
        }, I);
      })
    );
    return function (e, r) {
      return I.apply(this, arguments);
    };
  })();
};
