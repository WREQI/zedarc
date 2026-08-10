var t = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../../common/vendor.js"),
  n = {
    inject: ["hqBridge"],
    props: {
      type: { type: String, default: "" },
      data: { type: Object, default: function () {} },
      iDataReady: { type: Boolean, default: !1 },
      isLiveType: { type: Boolean, default: !1 },
      market: { type: String, default: "" },
    },
    data: function () {
      return { hasMore: !1, timer: null };
    },
    computed: {
      title: function () {
        return {
          todayMarket: "今日市场",
          marketInterpretation: "市场解读",
          dailyRead: "每日必读",
        }[this.type];
      },
    },
    created: function () {
      this.getMarketInfo();
    },
    destroyed: function () {
      clearTimeout(this.timer);
    },
    methods: {
      getLines: function () {
        var t = this,
          n = 50;
        if ("mp" === this.hqBridge.ENV) {
          var i = null == getApp ? void 0 : getApp().globalData;
          (n = i.rpxToPx(n)),
            e.wx$1
              .createSelectorQuery()
              .in(this)
              .selectAll(".info-bar-inner-1, .info-bar-inner")
              .boundingClientRect()
              .exec(function () {
                var e,
                  i,
                  a,
                  r,
                  o,
                  l,
                  u,
                  s =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                2 ===
                  (null == (e = null == s ? void 0 : s[0])
                    ? void 0
                    : e.length) &&
                  ((t.singleLine =
                    (null ==
                    (a =
                      null == (i = null == s ? void 0 : s[0]) ? void 0 : i[0])
                      ? void 0
                      : a.height) < n),
                  (t.hasMore =
                    !t.singleLine &&
                    Math.floor(
                      null ==
                        (o =
                          null == (r = null == s ? void 0 : s[0])
                            ? void 0
                            : r[0])
                        ? void 0
                        : o.height
                    ) <
                      Math.floor(
                        null ==
                          (u =
                            null == (l = null == s ? void 0 : s[0])
                              ? void 0
                              : l[1])
                          ? void 0
                          : u.height
                      )));
              });
        } else {
          var a = this.$refs.upperContainer,
            r = this.$refs.midContainer;
          if (!a || !r)
            return void setTimeout(function () {
              t.getLines();
            }, 300);
          var o = this.getCurrentStyle(r, "line-height").replace("px", ""),
            l = this.getCurrentStyle(r, "height").replace("px", ""),
            u = Math.round(l / o);
          this.hasMore = u > 2;
        }
      },
      getCurrentStyle: function (t, e) {
        return t.currentStyle ? t.currentStyle[e] : getComputedStyle(t, !1)[e];
      },
      getMarketInfo: function () {
        return (
          (e = this),
          null,
          (n = t().mark(function e() {
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      this.$emit("getMarketInfo");
                    case 1:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })),
          new Promise(function (t, i) {
            var a = function (t) {
                try {
                  o(n.next(t));
                } catch (t) {
                  i(t);
                }
              },
              r = function (t) {
                try {
                  o(n.throw(t));
                } catch (t) {
                  i(t);
                }
              },
              o = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(a, r);
              };
            o((n = n.apply(e, null)).next());
          })
        );
        var e, n;
      },
      tapDetail: function () {
        this.navigateTo("tapDetail");
      },
      tapMore: function () {
        "dailyRead" === this.type
          ? this.navigateTo("tapMore")
          : this.navigateTo("tapDetail");
      },
      navigateTo: function (t) {
        var e = this;
        this.timer = setTimeout(function () {
          e.$emit(t);
        }, 100);
      },
    },
  },
  i = e._export_sfc(n, [
    [
      "render",
      function (t, n, i, a, r, o) {
        return e.e(
          { a: i.iDataReady },
          i.iDataReady
            ? e.e(
                { b: r.hasMore },
                r.hasMore
                  ? {
                      c: e.o(function () {
                        return o.tapMore && o.tapMore.apply(o, arguments);
                      }, 5334),
                    }
                  : {},
                {
                  d: e.t(o.title),
                  e: i.isLiveType,
                  f: e.t(i.data.summary || i.data.title),
                  g: !r.hasMore,
                },
                r.hasMore
                  ? {}
                  : {
                      h: e.o(function () {
                        return o.tapMore && o.tapMore.apply(o, arguments);
                      }, 5335),
                    },
                {
                  i: e.o(function () {
                    return o.tapDetail && o.tapDetail.apply(o, arguments);
                  }, 5336),
                  j: e.t(o.title),
                  k: i.isLiveType,
                  l: e.t(i.data.summary || i.data.title),
                  m: e.o(function () {
                    return o.tapDetail && o.tapDetail.apply(o, arguments);
                  }, 5337),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-97e7aea0"],
  ]);
wx.createComponent(i);
