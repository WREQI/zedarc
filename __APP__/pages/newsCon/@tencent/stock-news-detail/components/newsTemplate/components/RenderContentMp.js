var t = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = Object.defineProperty,
  a = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  n = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  c = function (t, a, r) {
    return a in t
      ? e(t, a, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[a] = r);
  },
  o = require("../../../../../../../common/vendor.js"),
  h = require("../../../../../vue-observe-visibility/dist/vue-observe-visibility.esm.js"),
  l = require("../../../../stock-news-core/utils/bus.js"),
  p = require("../hooks/useStock.js"),
  u = 0,
  d = /[\u4e00-\u9fff\u3400-\u4dbf]/,
  f = /[a-zA-Z0-9.:]/,
  g = {
    options: { styleIsolation: "shared" },
    props: [
      "newsId",
      "item",
      "itemIndex",
      "clickable",
      "isMP",
      "isWZQ",
      "wzqConfig",
      "speechable",
      "copyable",
    ],
    emits: ["goToFunctions", "goToNews", "goToStock", "handleTech", "goToUrl"],
    directives: { "observe-visibility": h.ObserveVisibility },
    setup: function () {
      var t = p.useStock();
      return {
        TEXT_TYPE_ENUM: t.TEXT_TYPE_ENUM,
        stockCanNotJump: t.stockCanNotJump,
      };
    },
    data: function () {
      var t = this;
      return {
        paragraphId:
          ((u += 1), "news-p-".concat(Date.now().toString(36), "-").concat(u)),
        charMode: !1,
        urlObserveConf: {
          callback: function (e, a) {
            return t.visibilityChanged(e, a);
          },
          once: !0,
          intersection: { threshold: 0.5 },
        },
      };
    },
    computed: {
      charUnits: function () {
        var e = (this.item && this.item.content) || [],
          o = [],
          h = 0;
        return (
          e.forEach(function (e, l) {
            e &&
              (function (t) {
                if (!t) return [];
                for (var e = [], a = 0; a < t.length; ) {
                  var r = t[a];
                  if (f.test(r)) {
                    for (var n = a + 1; n < t.length && f.test(t[n]); ) n += 1;
                    n < t.length && "%" === t[n] && (n += 1),
                      e.push({ text: t.slice(a, n) }),
                      (a = n);
                  } else d.test(r), e.push({ text: r }), (a += 1);
                }
                return e.length > 0 ? e : [{ text: t }];
              })(e.text || "").forEach(function (p) {
                var u, d;
                o.push(
                  ((u = (function (e, a) {
                    for (var r in a || (a = {})) s.call(a, r) && c(e, r, a[r]);
                    if (n) {
                      var o,
                        h = t(n(a));
                      try {
                        for (h.s(); !(o = h.n()).done; ) {
                          r = o.value;
                          i.call(a, r) && c(e, r, a[r]);
                        }
                      } catch (t) {
                        h.e(t);
                      } finally {
                        h.f();
                      }
                    }
                    return e;
                  })({}, e)),
                  (d = { text: p.text, _sidx: h, _cidx: l }),
                  a(u, r(d)))
                ),
                  (h += 1);
              });
          }),
          o
        );
      },
      charRenderNodes: function () {
        for (var t = this.charUnits || [], e = [], a = 0; a < t.length; ) {
          var r = t[a];
          if (this.isDashedUnit(r)) {
            for (
              var n = r._cidx, s = [];
              a < t.length && t[a]._cidx === n && this.isDashedUnit(t[a]);

            )
              s.push(t[a]), (a += 1);
            e.push({
              type: "word",
              wrapperClass: this.dashedWrapperClass(r),
              chars: s,
            });
          } else e.push({ type: "char", unit: r }), (a += 1);
        }
        return e;
      },
      lastUnitMeasureChars: function () {
        if (!this.charMode) return [];
        var t = this.charUnits || [];
        if (!t.length) return [];
        var e = t[t.length - 1],
          a = (e && e.text) || "";
        return a.length >= 2 ? a.split("") : [];
      },
      lastUnitMeasureClass: function () {
        var t = this.charUnits || [];
        if (!t.length) return ["news-char-measure", "news-sentence"];
        var e = t[t.length - 1],
          a = this.getCharUnitClass(e).filter(function (t) {
            return "news-char-mp" !== t;
          });
        return a.push("news-char-measure"), a;
      },
    },
    mounted: function () {
      this.isMP && l.BUS.$on("news-selectAll-query", this.handleSelectAllQuery);
    },
    beforeDestroy: function () {
      this.isMP &&
        l.BUS.$off("news-selectAll-query", this.handleSelectAllQuery);
    },
    methods: {
      visibilityChanged: function (t) {
        t &&
          this.isWZQ &&
          this.wzqConfig.stat.click(
            "news.detail.news_text_url_account_link_visited",
            void 0,
            void 0,
            { newsid: this.newsId }
          );
      },
      stockNotJump: function (t) {
        var e = t.stockId;
        return this.stockCanNotJump(e);
      },
      getCharUnitClass: function (t) {
        var e = ["news-char-mp", "news-sentence"];
        if (this.clickable) {
          var a = this.TEXT_TYPE_ENUM;
          switch (t.textType) {
            case a.NEWS:
              e.push("news-link");
              break;
            case a.STOCK:
              this.stockNotJump(t.clickParams) || e.push("news-stock");
              break;
            case a.FUNC:
              t.clickParams && t.clickParams.url
                ? e.push("news-stock", "news-func")
                : e.push("news-func");
              break;
            case a.URL:
              this.isMP || e.push("news-link");
              break;
            case a.TEACH:
              (this.isWZQ || this.isMP) && e.push("news-teach");
          }
        }
        return t.styles && e.push(t.styles), e;
      },
      isDashedUnit: function (t) {
        var e = this.getCharUnitClass(t);
        return -1 !== e.indexOf("news-link") || -1 !== e.indexOf("news-teach");
      },
      dashedWrapperClass: function (t) {
        var e = this.getCharUnitClass(t),
          a = [];
        return (
          -1 !== e.indexOf("news-link") && a.push("news-link"),
          -1 !== e.indexOf("news-teach") && a.push("news-teach"),
          a
        );
      },
      getCharUnitClassNoDash: function (t) {
        return this.getCharUnitClass(t).filter(function (t) {
          return "news-link" !== t && "news-teach" !== t;
        });
      },
      resetCharMode: function () {
        this.charMode = !1;
      },
      onParagraphLongpress: function (t) {
        var e = this;
        if (this.isMP) {
          var a =
              (t && t.touches && t.touches[0]) ||
              (t && t.changedTouches && t.changedTouches[0]) ||
              null,
            r = 0,
            n = 0;
          a
            ? ((r = "number" == typeof a.clientX ? a.clientX : a.pageX),
              (n = "number" == typeof a.clientY ? a.clientY : a.pageY))
            : t && t.detail && ((r = t.detail.x || 0), (n = t.detail.y || 0)),
            (this.charMode = !0),
            this.$nextTick(function () {
              var t = (e.charUnits || []).map(function (t) {
                return (t && t.text) || "";
              });
              l.BUS.$emit("news-ParagraphLongpress", {
                paragraphId: e.paragraphId,
                x: r,
                y: n,
                sentenceTexts: t,
                ctx: e,
                scope: e.$scope || null,
              });
            });
        }
      },
      handleSelectAllQuery: function () {
        var t = this,
          e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (this.isMP && this.item && "text" === this.item.type) {
          var a = e.token;
          "number" == typeof a &&
            ((this.charMode = !1),
            this.$nextTick(function () {
              var e = null;
              if (
                (void 0 !== o.index && o.index.createSelectorQuery
                  ? (e = o.index.createSelectorQuery.bind(o.index))
                  : void 0 !== o.wx$1 &&
                    o.wx$1.createSelectorQuery &&
                    (e = o.wx$1.createSelectorQuery.bind(o.wx$1)),
                e)
              ) {
                var r = e(),
                  n = r.in ? r.in(t) : r;
                n
                  .selectAll(".news-sentence-mp")
                  .fields({ rect: !0, size: !0, dataset: !0 }),
                  n.exec(function (e) {
                    var r = ((e && e[0]) || [])
                      .filter(function (t) {
                        return !(
                          !t ||
                          "number" != typeof t.left ||
                          !((t.width || 0) > 0 || (t.height || 0) > 0)
                        );
                      })
                      .map(function (t, e) {
                        var a = parseInt(t.dataset && t.dataset.sidx, 10),
                          r = Number.isFinite(a) ? a : e,
                          n = (t.dataset && t.dataset.text) || "",
                          s =
                            "number" == typeof t.right
                              ? t.right
                              : t.left + (t.width || 0),
                          i =
                            "number" == typeof t.bottom
                              ? t.bottom
                              : t.top + (t.height || 0);
                        return {
                          sidx: r,
                          text: n,
                          rects: [
                            { left: t.left, top: t.top, right: s, bottom: i },
                          ],
                        };
                      });
                    l.BUS.$emit("news-selectAll-result", {
                      token: a,
                      paragraphId: t.paragraphId,
                      itemIndex: t.itemIndex,
                      sentences: r,
                    });
                  });
              }
            }));
        }
      },
    },
  },
  x = o._export_sfc(g, [
    [
      "render",
      function (t, e, a, r, n, s) {
        return o.e(
          { a: "text" === a.item.type },
          "text" === a.item.type
            ? o.e(
                { b: !n.charMode },
                n.charMode
                  ? o.e(
                      {
                        d: o.f(s.charRenderNodes, function (t, e, a) {
                          return o.e(
                            { a: "word" === t.type },
                            "word" === t.type
                              ? {
                                  b: o.f(t.chars, function (t, e, a) {
                                    return {
                                      a: o.t(t.text),
                                      b: ""
                                        .concat(n.paragraphId, "-c")
                                        .concat(t._sidx),
                                      c: o.n(s.getCharUnitClassNoDash(t)),
                                      d: ""
                                        .concat(n.paragraphId, "-c")
                                        .concat(t._sidx),
                                      e: t._sidx,
                                      f: t.text,
                                    };
                                  }),
                                  c: n.paragraphId,
                                  d: o.n(t.wrapperClass),
                                }
                              : {
                                  e: o.t(t.unit.text),
                                  f: o.n(s.getCharUnitClass(t.unit)),
                                  g: ""
                                    .concat(n.paragraphId, "-c")
                                    .concat(t.unit._sidx),
                                  h: n.paragraphId,
                                  i: t.unit._sidx,
                                  j: t.unit.text,
                                },
                            { k: "".concat(n.paragraphId, "-n").concat(e) }
                          );
                        }),
                        e: s.lastUnitMeasureChars.length,
                      },
                      s.lastUnitMeasureChars.length
                        ? {
                            f: o.f(s.lastUnitMeasureChars, function (t, e, a) {
                              return {
                                a: o.t(t),
                                b: "".concat(n.paragraphId, "-m").concat(e),
                                c: "".concat(n.paragraphId, "-m").concat(e),
                                d: e,
                              };
                            }),
                            g: o.n(s.lastUnitMeasureClass),
                          }
                        : {}
                    )
                  : {
                      c: o.f(a.item.content, function (e, i, c) {
                        return o.e(
                          {
                            a:
                              e.textType === r.TEXT_TYPE_ENUM.NEWS &&
                              a.clickable,
                          },
                          e.textType === r.TEXT_TYPE_ENUM.NEWS && a.clickable
                            ? {
                                b: o.t(e.text),
                                c: "".concat(n.paragraphId, "-s").concat(i),
                                d: n.paragraphId,
                                e: i,
                                f: e.text,
                                g: o.n(e.styles),
                                h: o.o(function (a) {
                                  return t.$emit("goToNews", e.clickParams);
                                }, 5446),
                              }
                            : {},
                          {
                            i:
                              e.textType === r.TEXT_TYPE_ENUM.RAW ||
                              !a.clickable,
                          },
                          e.textType !== r.TEXT_TYPE_ENUM.RAW && a.clickable
                            ? {}
                            : {
                                j: o.t(e.text),
                                k: "".concat(n.paragraphId, "-s").concat(i),
                                l: n.paragraphId,
                                m: i,
                                n: e.text,
                                o: o.n(e.styles),
                              },
                          {
                            p:
                              e.textType === r.TEXT_TYPE_ENUM.STOCK &&
                              a.clickable,
                          },
                          e.textType === r.TEXT_TYPE_ENUM.STOCK && a.clickable
                            ? o.e(
                                { q: s.stockNotJump(e.clickParams) },
                                s.stockNotJump(e.clickParams)
                                  ? {
                                      r: o.t(e.text),
                                      s: ""
                                        .concat(n.paragraphId, "-s")
                                        .concat(i),
                                      t: n.paragraphId,
                                      v: i,
                                      w: e.text,
                                      x: o.n(e.styles),
                                    }
                                  : {
                                      y: o.t(e.text),
                                      z: ""
                                        .concat(n.paragraphId, "-s")
                                        .concat(i),
                                      A: n.paragraphId,
                                      B: i,
                                      C: e.text,
                                      D: o.n(e.styles),
                                      E: o.o(function (a) {
                                        return t.$emit(
                                          "goToStock",
                                          e.clickParams
                                        );
                                      }, 5447),
                                    }
                              )
                            : {},
                          {
                            F:
                              e.textType === r.TEXT_TYPE_ENUM.FUNC &&
                              a.clickable,
                          },
                          e.textType === r.TEXT_TYPE_ENUM.FUNC && a.clickable
                            ? o.e(
                                { G: e.clickParams.url },
                                e.clickParams.url
                                  ? {
                                      H: o.t(e.text),
                                      I: ""
                                        .concat(n.paragraphId, "-s")
                                        .concat(i),
                                      J: n.paragraphId,
                                      K: i,
                                      L: e.text,
                                      M: o.n(e.styles),
                                      N: o.o(function (a) {
                                        return t.$emit(
                                          "goToFunctions",
                                          e.clickParams
                                        );
                                      }, 5448),
                                    }
                                  : {
                                      O: o.t(e.text),
                                      P: ""
                                        .concat(n.paragraphId, "-s")
                                        .concat(i),
                                      Q: n.paragraphId,
                                      R: i,
                                      S: e.text,
                                      T: o.n(e.styles),
                                    }
                              )
                            : {},
                          {
                            U:
                              e.textType === r.TEXT_TYPE_ENUM.URL &&
                              a.clickable,
                          },
                          e.textType === r.TEXT_TYPE_ENUM.URL && a.clickable
                            ? o.e(
                                { V: a.isMP },
                                a.isMP
                                  ? {
                                      W: o.t(e.text),
                                      X: ""
                                        .concat(n.paragraphId, "-s")
                                        .concat(i),
                                      Y: n.paragraphId,
                                      Z: i,
                                      aa: e.text,
                                      ab: o.n(e.styles),
                                    }
                                  : {
                                      ac: o.t(e.text),
                                      ad: n.paragraphId,
                                      ae: i,
                                      af: e.text,
                                      ag: o.n(e.styles),
                                      ah: o.o(function (a) {
                                        return t.$emit(
                                          "goToUrl",
                                          e.clickParams
                                        );
                                      }, 5449),
                                    }
                              )
                            : {},
                          {
                            ai:
                              e.textType === r.TEXT_TYPE_ENUM.TEACH &&
                              a.clickable,
                          },
                          e.textType === r.TEXT_TYPE_ENUM.TEACH && a.clickable
                            ? o.e(
                                { aj: a.isWZQ || a.isMP },
                                a.isWZQ || a.isMP
                                  ? {
                                      ak: o.t(e.text),
                                      al: ""
                                        .concat(n.paragraphId, "-s")
                                        .concat(i),
                                      am: n.paragraphId,
                                      an: i,
                                      ao: e.text,
                                      ap: o.n(e.styles),
                                      aq: o.o(function (a) {
                                        return t.$emit(
                                          "handleTech",
                                          e.clickParams
                                        );
                                      }, 5450),
                                    }
                                  : {
                                      ar: o.t(e.text),
                                      as: ""
                                        .concat(n.paragraphId, "-s")
                                        .concat(i),
                                      at: n.paragraphId,
                                      av: i,
                                      aw: e.text,
                                      ax: o.n(e.styles),
                                    }
                              )
                            : {}
                        );
                      }),
                    },
                {
                  h: n.paragraphId,
                  i: o.n(a.item.tagClass),
                  j: o.n(!1 === a.speechable ? "" : "speech-readable"),
                  k: n.paragraphId,
                  l: o.o(function () {
                    return (
                      s.onParagraphLongpress &&
                      s.onParagraphLongpress.apply(s, arguments)
                    );
                  }, 5451),
                  m: o.o(function () {
                    return (
                      s.onParagraphLongpress &&
                      s.onParagraphLongpress.apply(s, arguments)
                    );
                  }, 5452),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-4edd536d"],
  ]);
wx.createComponent(x);
