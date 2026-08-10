var t = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = Object.defineProperty,
  a = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  s = function (t, e, a) {
    return e in t
      ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[e] = a);
  },
  c = function (t, e, i) {
    return new Promise(function (a, n) {
      var r = function (t) {
          try {
            u(i.next(t));
          } catch (t) {
            n(t);
          }
        },
        o = function (t) {
          try {
            u(i.throw(t));
          } catch (t) {
            n(t);
          }
        },
        u = function (t) {
          return t.done ? a(t.value) : Promise.resolve(t.value).then(r, o);
        };
      u((i = i.apply(t, e)).next());
    });
  },
  l = require("../../../../common/vendor.js"),
  h = {
    props: ["len", "config", "premote"],
    data: function () {
      return { abtType: "1", uiData: {}, isShow: !1, nowIndex: 0 };
    },
    watch: {
      len: {
        immediate: !0,
        handler: function (t, e) {
          e &&
            t > e &&
            this.isShow &&
            ((this.isShow = !1),
            this.$emit("updateHasDefaultChooseAdded", "added"));
        },
      },
    },
    created: function () {
      return c(
        this,
        null,
        e().mark(function t() {
          return e().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    this.initData();
                  case 1:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this
          );
        })
      );
    },
    methods: {
      initData: function () {
        return c(
          this,
          null,
          e().mark(function i() {
            var c, h, p, d;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      try {
                        l.StockBridge.report(
                          "yy.choose_guide_card.wzq_newuser_homepage_bigcardapply_brow",
                          { fchannel_id_fm_i: "I0100p000a005" }
                        ),
                          (this.uiData =
                            ((p = (function (e, i) {
                              for (var a in i || (i = {}))
                                o.call(i, a) && s(e, a, i[a]);
                              if (r) {
                                var n,
                                  c = t(r(i));
                                try {
                                  for (c.s(); !(n = c.n()).done; ) {
                                    a = n.value;
                                    u.call(i, a) && s(e, a, i[a]);
                                  }
                                } catch (t) {
                                  c.e(t);
                                } finally {
                                  c.f();
                                }
                              }
                              return e;
                            })({}, this.config)),
                            (d = {
                              subTitle:
                                null ==
                                (h =
                                  null == (c = this.config)
                                    ? void 0
                                    : c.subTitle)
                                  ? void 0
                                  : h.split(";"),
                            }),
                            a(p, n(d)))),
                          this.formatData(),
                          (this.isShow = !0),
                          this.$emit("yyRefreshHeight", "after"),
                          this.carouselMessage(),
                          l.StockBridge.report(
                            "yy.wzq_newuser_homepage_bigcardnews_brow"
                          ),
                          this.qianjiCompReportGo("show");
                      } catch (t) {
                        this.$emit("updateHasDefaultChooseAdded", "added"),
                          (this.isShow = !1);
                      }
                    case 1:
                    case "end":
                      return e.stop();
                  }
              },
              i,
              this
            );
          })
        );
      },
      qianjiCompReportGo: function (t) {
        var e, i;
        null == (i = null == (e = l.StockBridge) ? void 0 : e.deliverySdk) ||
          i.deliveryMtaAndRport(this.premote, t);
      },
      formatData: function () {
        if (this.uiData) {
          var t = this.uiData.subTitle;
          "string" == typeof t && (t = [].concat(t));
          var e = t.map(function (t) {
            return t
              .replace(/<#/g, '<span class="highlight">')
              .replace(/#>/g, "</span>");
          });
          this.uiData.subTitle = e;
        }
      },
      carouselMessage: function () {
        var t,
          e = this;
        1 == this.abtType &&
          (null == (t = this.uiData) ? void 0 : t.subTitle.length) > 1 &&
          (this.interVal = setInterval(function () {
            var t,
              i = e.nowIndex + 1;
            e.nowIndex =
              i > (null == (t = e.uiData) ? void 0 : t.subTitle.length) - 1
                ? 0
                : i;
          }, 3e3));
      },
      clickBtn: function () {
        var t = this;
        this.uiData.btnUrl &&
          (l.StockBridge.report(
            "yy.choose_guide_card.wzq_newuser_homepage_bigcardapply_btnclick",
            { fchannel_id_fm_i: "I0100p000a005" }
          ),
          this.qianjiCompReportGo("click"),
          setTimeout(function () {
            var e;
            null == (e = l.StockBridge.deliverySdk) ||
              e.deliveryDoJump(
                {},
                {
                  otherLinks: {
                    target_link_type: 3,
                    target_link: t.uiData.btnUrl,
                  },
                }
              );
          }, 100));
      },
    },
  },
  p = l._export_sfc(h, [
    [
      "render",
      function (t, e, i, a, n, r) {
        return l.e(
          { a: n.isShow && !!n.uiData && n.uiData.title && n.uiData.subTitle },
          n.isShow && n.uiData && n.uiData.title && n.uiData.subTitle
            ? l.e(
                { b: l.t(n.uiData.title), c: 0 == n.abtType },
                0 == n.abtType ? { d: n.uiData.subTitle[0] } : {},
                { e: 1 == n.abtType && n.uiData.subTitle.length > 0 },
                1 == n.abtType && n.uiData.subTitle.length > 0
                  ? {
                      f: l.f(n.uiData.subTitle, function (t, e, i) {
                        return l.e(
                          { a: e === n.nowIndex },
                          e === n.nowIndex ? { b: t } : {},
                          { c: e }
                        );
                      }),
                      g: l.n(n.uiData.subTitle.length > 1 ? "animate" : ""),
                    }
                  : {},
                { h: n.uiData.btnText },
                n.uiData.btnText
                  ? {
                      i: l.t(n.uiData.btnText),
                      j: l.o(function () {
                        return r.clickBtn && r.clickBtn.apply(r, arguments);
                      }, 1388),
                    }
                  : {},
                { k: n.uiData.bg_pic },
                n.uiData.bg_pic ? { l: "url(" + n.uiData.bg_pic + ")" } : {}
              )
            : {}
        );
      },
    ],
  ]);
wx.createComponent(p);
