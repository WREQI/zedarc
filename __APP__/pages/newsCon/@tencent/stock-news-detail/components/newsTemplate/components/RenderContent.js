var e = require("../../../../../vue-observe-visibility/dist/vue-observe-visibility.esm.js"),
  t = require("../../../../../../../common/vendor.js"),
  i = require("../hooks/useStock.js"),
  s = {
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
    directives: { "observe-visibility": e.ObserveVisibility },
    setup: function () {
      var e = i.useStock();
      return {
        TEXT_TYPE_ENUM: e.TEXT_TYPE_ENUM,
        stockCanNotJump: e.stockCanNotJump,
      };
    },
    data: function () {
      var e = this;
      return {
        urlObserveConf: {
          callback: function (t, i) {
            return e.visibilityChanged(t, i);
          },
          once: !0,
          intersection: { threshold: 0.5 },
        },
      };
    },
    methods: {
      visibilityChanged: function (e) {
        e &&
          this.isWZQ &&
          this.wzqConfig.stat.click(
            "news.detail.news_text_url_account_link_visited",
            void 0,
            void 0,
            { newsid: this.newsId }
          );
      },
      stockNotJump: function (e) {
        var t = e.stockId;
        return this.stockCanNotJump(t);
      },
    },
  },
  c = t._export_sfc(s, [
    [
      "render",
      function (e, i, s, c, n, o) {
        return t.e(
          { a: "text" === s.item.type },
          "text" === s.item.type
            ? {
                b: t.f(s.item.content, function (i, n, l) {
                  return t.e(
                    { a: i.textType === c.TEXT_TYPE_ENUM.NEWS && s.clickable },
                    i.textType === c.TEXT_TYPE_ENUM.NEWS && s.clickable
                      ? {
                          b: t.t(i.text),
                          c: t.o(function (t) {
                            return e.$emit("goToNews", i.clickParams);
                          }, 5441),
                          d: t.n(i.styles),
                        }
                      : {},
                    { e: i.textType === c.TEXT_TYPE_ENUM.RAW || !s.clickable },
                    i.textType !== c.TEXT_TYPE_ENUM.RAW && s.clickable
                      ? {}
                      : { f: t.t(i.text), g: t.n(i.styles) },
                    { h: i.textType === c.TEXT_TYPE_ENUM.STOCK && s.clickable },
                    i.textType === c.TEXT_TYPE_ENUM.STOCK && s.clickable
                      ? t.e(
                          { i: o.stockNotJump(i.clickParams) },
                          o.stockNotJump(i.clickParams)
                            ? { j: t.t(i.text), k: t.n(i.styles) }
                            : {
                                l: t.t(i.text),
                                m: t.o(function (t) {
                                  return e.$emit("goToStock", i.clickParams);
                                }, 5442),
                                n: t.n(i.styles),
                              }
                        )
                      : {},
                    { o: i.textType === c.TEXT_TYPE_ENUM.FUNC && s.clickable },
                    i.textType === c.TEXT_TYPE_ENUM.FUNC && s.clickable
                      ? t.e(
                          { p: i.clickParams.url },
                          i.clickParams.url
                            ? {
                                q: t.t(i.text),
                                r: t.n(i.styles),
                                s: t.o(function (t) {
                                  return e.$emit(
                                    "goToFunctions",
                                    i.clickParams
                                  );
                                }, 5443),
                              }
                            : { t: t.t(i.text), v: t.n(i.styles) }
                        )
                      : {},
                    { w: i.textType === c.TEXT_TYPE_ENUM.URL && s.clickable },
                    i.textType === c.TEXT_TYPE_ENUM.URL && s.clickable
                      ? t.e(
                          { x: s.isMP },
                          s.isMP
                            ? { y: t.t(i.text), z: t.n(i.styles) }
                            : {
                                A: t.t(i.text),
                                B: t.o(function (t) {
                                  return e.$emit("goToUrl", i.clickParams);
                                }, 5444),
                                C: t.n(i.styles),
                              }
                        )
                      : {},
                    { D: i.textType === c.TEXT_TYPE_ENUM.TEACH && s.clickable },
                    i.textType === c.TEXT_TYPE_ENUM.TEACH && s.clickable
                      ? t.e(
                          { E: s.isWZQ || s.isMP },
                          s.isWZQ || s.isMP
                            ? {
                                F: t.t(i.text),
                                G: t.n(i.styles),
                                H: t.o(function (t) {
                                  return e.$emit("handleTech", i.clickParams);
                                }, 5445),
                              }
                            : { I: t.t(i.text), J: t.n(i.styles) },
                          { K: t.n(i.styles) }
                        )
                      : {}
                  );
                }),
                c: t.n(s.item.tagClass),
                d: t.n(!1 === s.speechable ? "" : "speech-readable"),
                e: t.n(s.copyable ? "" : "uncopyable"),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-16e33ca4"],
  ]);
wx.createComponent(c);
