require("../../../../../../../@babel/runtime/helpers/Objectvalues");
var t = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  o = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  a = function (t, e, o) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (t[e] = o);
  },
  s = function (t, n) {
    for (var s in n || (n = {})) i.call(n, s) && a(t, s, n[s]);
    if (o) {
      var c,
        d = e(o(n));
      try {
        for (d.s(); !(c = d.n()).done; ) {
          s = c.value;
          r.call(n, s) && a(t, s, n[s]);
        }
      } catch (t) {
        d.e(t);
      } finally {
        d.f();
      }
    }
    return t;
  },
  c = require("../../../../../../../common/vendor.js"),
  d = require("../../utils/service/index.js"),
  u = require("../../../../stock-community-base/utils/knife.js"),
  l = require("../../../../stock-community-base/utils/api/index.js"),
  m = require("../../../../stock-community-base/utils/constant.js"),
  f = {
    props: {
      index: [String, Number],
      indicator: { type: Boolean, default: !0 },
      isScroll: { type: Boolean, default: !1 },
      stat: { default: "", type: String },
    },
    data: function () {
      return {
        indicatorStyle: { width: 0, left: 0 },
        touched: !1,
        firstTime: !0,
      };
    },
    watch: {
      index: {
        handler: function (t) {
          var e = this;
          this.$emit("change", t),
            this.$nextTick(function () {
              return e.update();
            });
        },
      },
    },
    mounted: function () {
      this.update();
    },
    activated: function () {
      this.firstTime = !1;
    },
    methods: {
      update: function () {
        if (this.indicator) {
          var t,
            n = { left: 0, width: 0 },
            o = e(this.$slots.default);
          try {
            for (o.s(); !(t = o.n()).done; ) {
              var i = t.value.componentInstance;
              if (i) {
                var r = i.$el.scrollWidth;
                if (i.name === this.index) {
                  n.width = r;
                  break;
                }
                n.left += r;
              }
            }
          } catch (t) {
            o.e(t);
          } finally {
            o.f();
          }
          this.indicatorStyle = c.mapValues(n, function (t) {
            return "".concat(t, "px");
          });
        }
      },
      onTouchStart: function () {
        var t = this;
        (this.touched = !0),
          setTimeout(function () {
            return (t.touched = !1);
          }, 1e3);
      },
      onTouchMove: function (t) {
        this.isScroll && t.stopPropagation();
      },
    },
  },
  h = c._export_sfc(f, [
    [
      "render",
      function (t, e, n, o, i, r) {
        return c.e(
          { a: i.touched },
          (i.touched, {}),
          { b: n.indicator },
          n.indicator ? { c: c.s(i.indicatorStyle) } : {},
          {
            d: c.o(function () {
              return r.onTouchStart && r.onTouchStart.apply(r, arguments);
            }, 5916),
            e: c.o(function () {
              return r.onTouchMove && r.onTouchMove.apply(r, arguments);
            }, 5917),
          }
        );
      },
    ],
    ["__scopeId", "data-v-ae3b8af4"],
  ]),
  p = {
    props: { name: [String, Number], isNotify: [Boolean] },
    data: function () {
      return {
        selected: !1,
        touch: null,
        isClick: !1,
        isMobile: "ontouchstart" in window,
      };
    },
    mounted: function () {
      var t = this;
      (this.selected = this.name === this.$parent.index),
        this.$parent.$on("change", function (e) {
          t.selected = t.name === e;
        });
    },
    methods: {
      onClick: function () {
        this.$parent.$emit("select", this.name);
      },
      onTouchStart: function (t) {
        1 === t.touches.length &&
          ((this.touch = t.touches[0]), (this.isClick = !0));
      },
      onTouchMove: function (t) {
        if (1 === t.touches.length && this.isClick) {
          var e = t.touches[0],
            n = Math.abs(e.screenX - this.touch.screenX),
            o = Math.abs(e.screenY - this.touch.screenY);
          (n >= 9 || o >= 9) && (this.isClick = !1);
        }
      },
      onTouchEnd: function (t) {
        this.isClick && (this.onClick(), t.preventDefault()),
          (this.isClick = !1);
      },
    },
  },
  b = c._export_sfc(p, [
    [
      "render",
      function (t, e, n, o, i, r) {
        return c.e(
          { a: i.isMobile },
          i.isMobile
            ? c.e({ b: n.isNotify }, (n.isNotify, {}), {
                c: i.selected ? 1 : "",
              })
            : {
                d: i.selected ? 1 : "",
                e: c.o(function () {
                  return r.onClick && r.onClick.apply(r, arguments);
                }, 5912),
              },
          {
            f: c.o(function () {
              return r.onTouchStart && r.onTouchStart.apply(r, arguments);
            }, 5913),
            g: c.o(function () {
              return r.onTouchMove && r.onTouchMove.apply(r, arguments);
            }, 5914),
            h: c.o(function () {
              return r.onTouchEnd && r.onTouchEnd.apply(r, arguments);
            }, 5915),
          }
        );
      },
    ],
    ["__scopeId", "data-v-16124325"],
  ]),
  g = l.api.goPageCommon,
  y = {
    options: { styleIsolation: "shared" },
    components: { Tabs: h, Tab: b },
    props: {
      pageType: { type: String, default: "" },
      hotRank: { type: Number, default: 0 },
      tabsStyleType: { type: String, default: "1" },
      theme: { type: String, default: "blue" },
    },
    mounted: function () {
      this.hotRank && this.setAnimation();
    },
    watch: {
      hotRank: function (t) {
        t ? this.setAnimation() : (this.subjectBg = !1);
      },
    },
    methods: {
      formatCount: function (t, e) {
        return t >= 1e4 && t < 1e8
          ? "".concat((t / 1e4).toFixed("viewNum" === e ? 1 : 2), "w")
          : t >= 1e8
          ? "".concat((t / 1e8).toFixed(2), "亿")
          : t;
      },
      setAnimation: function () {
        var t = this;
        this.$nextTick(function () {
          setTimeout(function () {
            t.subjectBg = !0;
          }, 1e3);
        });
      },
      onScroll: function () {
        this.$emit("hotScroll");
      },
      scrollEnd: function () {
        this.$emit("hotScrollEnd");
      },
      formatView: function (t) {
        return u.formatView(t);
      },
      filterData: function (t, e) {
        return t.filter(function (t) {
          if (t[e]) return t;
        });
      },
      handleExpouse: function (t) {
        var e = ""
          .concat(m.prefix[this.pageType], ".")
          .concat(m.moduleName, "_hot_")
          .concat(["subject", "symbol", "topic"][t], "__show");
        this.$emit("commentReport", e);
      },
      labelText: function (t) {
        var e = { hot: "热", hotest: "爆", reco: "荐", new: "新" },
          n = "";
        return (
          Object.values(e).map(function (o, i) {
            o === t && (n = Object.keys(e)[i]);
          }),
          n
        );
      },
      getOrder: function (t) {
        return [this.topOne, this.topTwo, this.topThree][t];
      },
      getStColor: function (t) {
        return +t > 0 ? "up" : +t < 0 ? "down" : "gray";
      },
      handleItem: function (t) {
        var e = t.type,
          n = t.id,
          o = t.name,
          i = t.index,
          r = ""
            .concat(m.prefix[this.pageType], ".")
            .concat(m.moduleName, "_hot_")
            .concat(e, "_tap_")
            .concat(i + 1);
        this.$emit("commentReport", r);
        var a = { instance: this };
        switch (e) {
          case "subject":
            (a = s({ itemId: n, eventName: "detail" }, a)),
              "wzq" !== u.platform ||
                this.ismini ||
                this.isLiteMode ||
                this.$emit(
                  "commentReport",
                  "shequ.shequ_shouye.tab_default_hostpost_content_click"
                );
            break;
          case "symbol":
            a = s({ symbol: n, eventName: "stockdetail" }, a);
            break;
          case "topic":
            a = s({ topicId: n, topicName: o, eventName: "topic" }, a);
            break;
          case "comment":
            a = s({ symbol: n, eventName: "stockdetail", name: o }, a);
        }
        g(a);
      },
      handleJump: function (t) {
        if ("qqmac" !== this.platform) {
          if ((this.$emit("hotScroll"), "symbol" === this.renderKeys[t]))
            if ("mini" === u.platform) {
              c.StockBridge.routeTo({
                url: "/pages/additional/webview/index?url=".concat(
                  encodeURIComponent(
                    "https://wzq.tenpay.com/mp/v2/index.html#/hot?from=miniapp"
                  )
                ),
              });
            } else this.$router.push({ path: "/hot" });
          "topic" === this.renderKeys[t] &&
            g({ eventName: "plaza", instance: this });
          var e = ""
            .concat(m.prefix[this.pageType], ".")
            .concat(m.moduleName, "_hot_")
            .concat(this.renderKeys[t], "_tap_more");
          this.$emit("commentReport", e);
        }
      },
      getHotList: function () {
        var t = this;
        return d.getHotIndexBanner(s({}, { stock_num: 7 })).then(function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = e.data;
          (t.hotData = n || {}), t.handleExpouse(t.currentSlide);
        });
      },
      switchNav: function (t) {
        this.currentSlide !== t &&
          ((this.currentSlide = t),
          (this.currentSlideNum = t),
          this.handleExpouse(this.currentSlide));
      },
      swiperScrollChange: function (t) {
        var e = ((null == t ? void 0 : t.detail) || {}).current;
        this.switchNav(e);
      },
    },
    beforeCreate: function () {
      this.ismini = u.IsMINAPP;
    },
    created: function () {
      return (
        (e = this),
        null,
        (n = t().mark(function e() {
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    this.getHotList();
                  case 1:
                  case "end":
                    return t.stop();
                }
            },
            e,
            this
          );
        })),
        new Promise(function (t, o) {
          var i = function (t) {
              try {
                a(n.next(t));
              } catch (t) {
                o(t);
              }
            },
            r = function (t) {
              try {
                a(n.throw(t));
              } catch (t) {
                o(t);
              }
            },
            a = function (e) {
              return e.done ? t(e.value) : Promise.resolve(e.value).then(i, r);
            };
          a((n = n.apply(e, null)).next());
        })
      );
      var e, n;
    },
    data: function () {
      return {
        topic: "https://st.gtimg.com/image/sq/hotPost/topic.png",
        symbol: "https://st.gtimg.com/image/sq/hotPost/symbol.png",
        post: "https://st.gtimg.com/image/sq/hotPost/post.png",
        topicRed: "https://st.gtimg.com/image/sq/hotPost/topic_red.png",
        symbolRed: "https://st.gtimg.com/image/sq/hotPost/symbol_red.png",
        postRed: "https://st.gtimg.com/image/sq/hotPost/post_red.png",
        postGif:
          "https://st.gtimg.com/design/066f285b7ea1448d9c24966ad2ec2068.gif",
        topicGif:
          "https://st.gtimg.com/design/5cc800968112df9649f38e2c303e6955.gif",
        symbolGif:
          "https://st.gtimg.com/design/50b162e4364dcab39d7b081e18b321f5.gif",
        topicDark: "https://st.gtimg.com/image/sq/hotPost/topic_dark.png",
        symbolDark: "https://st.gtimg.com/image/sq/hotPost/symbol_dark.png",
        postDark: "https://st.gtimg.com/image/sq/hotPost/post_dark.png",
        topicRedDark:
          "https://st.gtimg.com/image/sq/hotPost/topic_red_dark.png",
        symbolRedDark:
          "https://st.gtimg.com/image/sq/hotPost/symbol_red_dark.png",
        postRedDark: "https://st.gtimg.com/image/sq/hotPost/post_red_dark.png",
        postGifDark:
          "https://st.gtimg.com/design/061fc786e21d914006efc75d90f7da76.gif",
        topicGifDark:
          "https://st.gtimg.com/design/707a0fcaab8f7cc640d37b93877da834.gif",
        symbolGifDark:
          "https://st.gtimg.com/design/26ea815587c0fa99cbba408491045872.gif",
        topOne: "https://st.gtimg.com/image/sq/hotPost/top1.png",
        topTwo: "https://st.gtimg.com/image/sq/hotPost/top2.png",
        topThree: "https://st.gtimg.com/image/sq/hotPost/top3.png",
        currentSlide: 0,
        currentSlideNum: 0,
        previousSlide: 0,
        hotData: {},
        options: {
          stopPropagation: !0,
          scrollX: !0,
          click: !0,
          probeType: 3,
          listenScroll: !0,
          eventPassthrough: "vertical",
        },
        ismini: !1,
        isLiteMode: u.IS_LITE_MODE,
        subjectBg: !1,
        platform: u.platform,
      };
    },
    computed: {
      ratioFormat: function () {
        return function (t) {
          return +t <= 0 ? t : "+".concat(t);
        };
      },
      ratioColor: function () {
        return function (t) {
          var e = +t;
          return e > 0 ? "red" : 0 === e ? "gray" : e < 0 ? "green" : void 0;
        };
      },
      checkData: function () {
        return u.isObject(this.hotData) && !!Object.keys(this.hotData).length;
      },
      currentGif: function () {
        var t = {
            subject: "black" === this.theme ? this.postGifDark : this.postGif,
            symbol:
              "black" === this.theme ? this.symbolGifDark : this.symbolGif,
            topic: "black" === this.theme ? this.topicGifDark : this.topicGif,
          },
          e = [];
        return (
          Object.keys(this.renderData).forEach(function (n) {
            e.push(t[n]);
          }),
          e[this.currentSlideNum] || ""
        );
      },
      tabInfo: function () {
        var t = {
            subject: {
              name: "热贴",
              id: "1",
              icon: "black" === this.theme ? this.postDark : this.post,
              iconRed: "black" === this.theme ? this.postRedDark : this.postRed,
            },
            symbol: {
              name: "热股",
              id: "2",
              icon: "black" === this.theme ? this.symbolDark : this.symbol,
              iconRed:
                "black" === this.theme ? this.symbolRedDark : this.symbolRed,
            },
            topic: {
              name: "话题",
              id: "3",
              icon: "black" === this.theme ? this.topicDark : this.topic,
              iconRed:
                "black" === this.theme ? this.topicRedDark : this.topicRed,
            },
          },
          e = [];
        return (
          Object.keys(this.renderData).forEach(function (n) {
            e.push(t[n]);
          }),
          e
        );
      },
      renderData: function () {
        var t = this.hotData;
        return (
          Object.values(t).forEach(function (e, n) {
            e.length || delete t[Object.keys(t)[n]];
          }),
          t.topic &&
            t.topic.forEach(function (e, n) {
              var o = e.top_related_stocks_info,
                i = e.stock_order;
              o &&
                o.length &&
                (t.topic[n].relatedStocks = o
                  .sort(function (t, e) {
                    var n = t.zdf - e.zdf;
                    return 0 === i ? -n : n;
                  })
                  .slice(0, 2));
            }),
          t
        );
      },
      renderKeys: function () {
        return Object.keys(this.renderData) || [];
      },
      tipsText: function () {
        var t = {
            subject: "看最热帖子,了解行情动向",
            symbol: "每5分钟更新",
            topic: "实时最爱讨论热点",
          },
          e = [];
        return (
          Object.keys(this.renderData).forEach(function (n) {
            e.push(t[n]);
          }),
          e[this.currentSlide] || ""
        );
      },
      isMp: function () {
        return "mp" === c.StockBridge.ENV;
      },
    },
  };
Array ||
  (
    c.resolveComponent("tab") +
    c.resolveComponent("tabs") +
    c.resolveComponent("st-slide-item") +
    c.resolveComponent("st-slide")
  )();
var k = c._export_sfc(y, [
  [
    "render",
    function (t, e, n, o, i, r) {
      return c.e(
        { a: r.checkData },
        r.checkData
          ? c.e(
              { b: !r.isMp },
              r.isMp
                ? c.e(
                    { g: r.isMp },
                    r.isMp
                      ? {
                          h: c.f(r.tabInfo, function (t, e, n) {
                            var o = t.name;
                            return {
                              a: c.t(o),
                              b: e,
                              c: "tab_".concat(e),
                              d: c.n(
                                e === i.currentSlide ? "tab-wrap2--active" : ""
                              ),
                              e: c.o(
                                function (t) {
                                  return r.switchNav(e);
                                },
                                5856,
                                "tab_".concat(e)
                              ),
                            };
                          }),
                        }
                      : {}
                  )
                : {
                    c: c.f(r.tabInfo, function (t, e, o) {
                      var a = t.icon,
                        s = t.iconRed,
                        d = t.name;
                      return c.e(
                        "1" === n.tabsStyleType
                          ? {
                              a: a,
                              b: c.n(e === i.currentSlide ? "unselect" : ""),
                              c: s,
                              d: c.n(e === i.currentSlide ? "current" : ""),
                              e: c.n(e === i.currentSlide ? "selected" : ""),
                              f: e === r.tabInfo.length - 1 ? 1 : "",
                            }
                          : {
                              g: c.t(d),
                              h: c.n(
                                e === i.currentSlide ? "tab-wrap2--active" : ""
                              ),
                            },
                        {
                          i: "tab_".concat(e),
                          j: "a47ad0da-1-" + o + ",a47ad0da-0",
                          k: c.p({ name: e }),
                        }
                      );
                    }),
                    d: "1" === n.tabsStyleType,
                    e: c.o(r.switchNav, 5855),
                    f: c.p({ index: i.currentSlide, indicator: !1 }),
                  },
              { i: "wzq" === i.platform },
              (i.platform, {}),
              { j: r.tipsText },
              r.tipsText
                ? c.e(
                    {
                      k: c.t(r.tipsText),
                      l: "subject" !== r.renderKeys[i.currentSlideNum],
                    },
                    "subject" !== r.renderKeys[i.currentSlideNum]
                      ? {
                          m: "https://wzq.gtimg.com/resources/shy/news/yaowen/white/arrow-right.png",
                        }
                      : {},
                    {
                      n: c.o(function (t) {
                        return r.handleJump(i.currentSlideNum);
                      }, 5857),
                    }
                  )
                : {},
              {
                o: r.currentGif,
                p: c.n("2" === n.tabsStyleType ? "dynamic-ip-tab2" : ""),
                q: !r.isMp,
              },
              r.isMp
                ? c.e(
                    { z: r.isMp },
                    r.isMp
                      ? {
                          A: c.f(r.renderData, function (t, e, o) {
                            return c.e(
                              { a: -1 !== ["subject"].indexOf(e) },
                              -1 !== ["subject"].indexOf(e)
                                ? {
                                    b: c.f(
                                      r.filterData(t, "title"),
                                      function (t, o, a) {
                                        var s = t.title,
                                          d = t.label,
                                          u = t.id;
                                        return c.e(
                                          {
                                            a:
                                              n.hotRank &&
                                              n.hotRank === o + 1 &&
                                              i.subjectBg,
                                          },
                                          (n.hotRank &&
                                            n.hotRank === o + 1 &&
                                            i.subjectBg,
                                          {}),
                                          { b: s },
                                          s ? { c: r.getOrder(o) } : {},
                                          { d: s },
                                          s ? { e: c.t(s) } : {},
                                          { f: d },
                                          d
                                            ? {
                                                g: c.t(d.slice(0, 1)),
                                                h: c.n(r.labelText(d)),
                                              }
                                            : {},
                                          {
                                            i: o,
                                            j: c.o(
                                              function (t) {
                                                return r.handleItem({
                                                  type: e,
                                                  id: u,
                                                  index: o,
                                                });
                                              },
                                              5870,
                                              o
                                            ),
                                          }
                                        );
                                      }
                                    ),
                                    c: c.n(e),
                                    d: c.n(
                                      +i.currentSlide ===
                                        r.renderKeys.indexOf(e)
                                        ? "current"
                                        : ""
                                    ),
                                  }
                                : {},
                              { e: -1 !== ["topic"].indexOf(e) },
                              -1 !== ["topic"].indexOf(e)
                                ? {
                                    f: c.f(
                                      r.filterData(t, "topic"),
                                      function (t, n, o) {
                                        var i = t.topic,
                                          a = t.topic_id,
                                          s = t.view_num,
                                          d = t.count,
                                          u = t.relatedStocks;
                                        return c.e(
                                          { a: i },
                                          i ? { b: r.getOrder(n) } : {},
                                          { c: i },
                                          i ? { d: c.t(i) } : {},
                                          { e: n < 2 },
                                          n < 2
                                            ? c.e(
                                                { f: u },
                                                u
                                                  ? {
                                                      g: c.f(
                                                        u,
                                                        function (t, e, n) {
                                                          var o = t.symbol,
                                                            i = t.name,
                                                            a = t.zdf;
                                                          return c.e(
                                                            { a: 0 !== e },
                                                            0 !== e
                                                              ? { b: c.t("|") }
                                                              : {},
                                                            {
                                                              c: c.t(i),
                                                              d: c.t(
                                                                r.ratioFormat(a)
                                                              ),
                                                              e: c.n(
                                                                r.ratioColor(a)
                                                              ),
                                                              f: o,
                                                            }
                                                          );
                                                        }
                                                      ),
                                                    }
                                                  : c.e(
                                                      { h: s > 0 },
                                                      s > 0
                                                        ? {
                                                            i: c.t(
                                                              r.formatCount(
                                                                s,
                                                                "viewNum"
                                                              )
                                                            ),
                                                          }
                                                        : {},
                                                      { j: s > 0 },
                                                      s > 0
                                                        ? { k: c.t("•") }
                                                        : {},
                                                      { l: d > 0 },
                                                      d > 0
                                                        ? {
                                                            m: c.t(
                                                              r.formatCount(
                                                                d,
                                                                "commentNum"
                                                              )
                                                            ),
                                                          }
                                                        : {}
                                                    )
                                              )
                                            : {},
                                          {
                                            n: n,
                                            o: c.o(
                                              function (t) {
                                                return r.handleItem({
                                                  type: e,
                                                  id: a,
                                                  name: i,
                                                  index: n,
                                                });
                                              },
                                              5871,
                                              n
                                            ),
                                          }
                                        );
                                      }
                                    ),
                                    g: c.n(e),
                                    h: c.n(
                                      +i.currentSlide ===
                                        r.renderKeys.indexOf(e)
                                        ? "current"
                                        : ""
                                    ),
                                  }
                                : {},
                              {
                                i:
                                  -1 !== ["symbol"].indexOf(e) && t && t.length,
                              },
                              -1 !== ["symbol"].indexOf(e) && t && t.length
                                ? c.e(
                                    { j: 7 === t.length },
                                    7 === t.length
                                      ? {
                                          k: c.t(t[0].name),
                                          l: c.t(
                                            -1 === t[0].zdf.indexOf("-")
                                              ? "+" + t[0].zdf
                                              : t[0].zdf
                                          ),
                                          m: c.n(r.getStColor(t[0].zdf)),
                                          n: c.o(
                                            function (e) {
                                              return r.handleItem({
                                                type: "symbol",
                                                id: t[0].symbol,
                                                name: t[0].name,
                                                index: 0,
                                              });
                                            },
                                            5872,
                                            e
                                          ),
                                          o: c.t(t[3].name),
                                          p: c.t(
                                            -1 === t[3].zdf.indexOf("-")
                                              ? "+" + t[3].zdf
                                              : t[3].zdf
                                          ),
                                          q: c.n(r.getStColor(t[3].zdf)),
                                          r: c.o(
                                            function (e) {
                                              return r.handleItem({
                                                type: "symbol",
                                                id: t[3].symbol,
                                                name: t[3].name,
                                                index: 3,
                                              });
                                            },
                                            5873,
                                            e
                                          ),
                                          s: c.t(t[4].name),
                                          t: c.t(
                                            -1 === t[4].zdf.indexOf("-")
                                              ? "+" + t[4].zdf
                                              : t[4].zdf
                                          ),
                                          v: c.n(r.getStColor(t[4].zdf)),
                                          w: c.o(
                                            function (e) {
                                              return r.handleItem({
                                                type: "symbol",
                                                id: t[4].symbol,
                                                name: t[4].name,
                                                index: 4,
                                              });
                                            },
                                            5874,
                                            e
                                          ),
                                          x: c.t(t[1].name),
                                          y: c.t(
                                            -1 === t[1].zdf.indexOf("-")
                                              ? "+" + t[1].zdf
                                              : t[1].zdf
                                          ),
                                          z: c.n(r.getStColor(t[1].zdf)),
                                          A: c.o(
                                            function (e) {
                                              return r.handleItem({
                                                type: "symbol",
                                                id: t[1].symbol,
                                                name: t[1].name,
                                                index: 1,
                                              });
                                            },
                                            5875,
                                            e
                                          ),
                                          B: c.t(t[2].name),
                                          C: c.t(
                                            -1 === t[2].zdf.indexOf("-")
                                              ? "+" + t[2].zdf
                                              : t[2].zdf
                                          ),
                                          D: c.n(r.getStColor(t[2].zdf)),
                                          E: c.o(
                                            function (e) {
                                              return r.handleItem({
                                                type: "symbol",
                                                id: t[2].symbol,
                                                name: t[2].name,
                                                index: 2,
                                              });
                                            },
                                            5876,
                                            e
                                          ),
                                          F: c.t(t[5].name),
                                          G: c.t(
                                            -1 === t[5].zdf.indexOf("-")
                                              ? "+" + t[5].zdf
                                              : t[5].zdf
                                          ),
                                          H: c.n(r.getStColor(t[5].zdf)),
                                          I: c.o(
                                            function (e) {
                                              return r.handleItem({
                                                type: "symbol",
                                                id: t[5].symbol,
                                                name: t[5].name,
                                                index: 5,
                                              });
                                            },
                                            5877,
                                            e
                                          ),
                                          J: c.t(t[6].name),
                                          K: c.t(
                                            -1 === t[6].zdf.indexOf("-")
                                              ? "+" + t[6].zdf
                                              : t[6].zdf
                                          ),
                                          L: c.n(r.getStColor(t[6].zdf)),
                                          M: c.o(
                                            function (e) {
                                              return r.handleItem({
                                                type: "symbol",
                                                id: t[6].symbol,
                                                name: t[6].name,
                                                index: 6,
                                              });
                                            },
                                            5878,
                                            e
                                          ),
                                        }
                                      : {},
                                    {
                                      N: c.n(e),
                                      O: c.n(
                                        +i.currentSlide ===
                                          r.renderKeys.indexOf(e)
                                          ? "current"
                                          : ""
                                      ),
                                    }
                                  )
                                : {},
                              { P: e }
                            );
                          }),
                          B: c.n(
                            "2" === n.tabsStyleType
                              ? "swiper-slide-margin-top"
                              : ""
                          ),
                          C: i.currentSlideNum,
                          D: c.o(function () {
                            return (
                              r.swiperScrollChange &&
                              r.swiperScrollChange.apply(r, arguments)
                            );
                          }, 5879),
                        }
                      : {}
                  )
                : {
                    r: c.f(r.renderData, function (t, e, o) {
                      return c.e(
                        { a: -1 !== ["subject"].indexOf(e) },
                        -1 !== ["subject"].indexOf(e)
                          ? {
                              b: c.f(
                                r.filterData(t, "title"),
                                function (t, o, a) {
                                  var s = t.title,
                                    d = t.label,
                                    u = t.id;
                                  return c.e(
                                    {
                                      a:
                                        n.hotRank &&
                                        n.hotRank === o + 1 &&
                                        i.subjectBg,
                                    },
                                    (n.hotRank &&
                                      n.hotRank === o + 1 &&
                                      i.subjectBg,
                                    {}),
                                    { b: s },
                                    s ? { c: r.getOrder(o) } : {},
                                    { d: s },
                                    s ? { e: c.t(s) } : {},
                                    { f: d },
                                    d
                                      ? {
                                          g: c.t(d.slice(0, 1)),
                                          h: c.n(r.labelText(d)),
                                        }
                                      : {},
                                    {
                                      i: o,
                                      j: c.o(
                                        function (t) {
                                          return r.handleItem({
                                            type: e,
                                            id: u,
                                            index: o,
                                          });
                                        },
                                        5858,
                                        o
                                      ),
                                    }
                                  );
                                }
                              ),
                              c: c.n(e),
                              d: c.n(
                                +i.currentSlide === r.renderKeys.indexOf(e)
                                  ? "current"
                                  : ""
                              ),
                            }
                          : {},
                        { e: -1 !== ["topic"].indexOf(e) },
                        -1 !== ["topic"].indexOf(e)
                          ? {
                              f: c.f(
                                r.filterData(t, "topic"),
                                function (t, n, o) {
                                  var i = t.topic,
                                    a = t.topic_id,
                                    s = t.view_num,
                                    d = t.count,
                                    u = t.relatedStocks;
                                  return c.e(
                                    { a: i },
                                    i ? { b: r.getOrder(n) } : {},
                                    { c: i },
                                    i ? { d: c.t(i) } : {},
                                    { e: n < 2 },
                                    n < 2
                                      ? c.e(
                                          { f: u },
                                          u
                                            ? {
                                                g: c.f(u, function (t, e, n) {
                                                  var o = t.symbol,
                                                    i = t.name,
                                                    a = t.zdf;
                                                  return c.e(
                                                    { a: 0 !== e },
                                                    0 !== e
                                                      ? { b: c.t("|") }
                                                      : {},
                                                    {
                                                      c: c.t(i),
                                                      d: c.t(r.ratioFormat(a)),
                                                      e: c.n(r.ratioColor(a)),
                                                      f: o,
                                                    }
                                                  );
                                                }),
                                              }
                                            : c.e(
                                                { h: s > 0 },
                                                s > 0
                                                  ? {
                                                      i: c.t(
                                                        r.formatCount(
                                                          s,
                                                          "viewNum"
                                                        )
                                                      ),
                                                    }
                                                  : {},
                                                { j: s > 0 },
                                                s > 0 ? { k: c.t("•") } : {},
                                                { l: d > 0 },
                                                d > 0
                                                  ? {
                                                      m: c.t(
                                                        r.formatCount(
                                                          d,
                                                          "commentNum"
                                                        )
                                                      ),
                                                    }
                                                  : {}
                                              )
                                        )
                                      : {},
                                    {
                                      n: n,
                                      o: c.o(
                                        function (t) {
                                          return r.handleItem({
                                            type: e,
                                            id: a,
                                            name: i,
                                            index: n,
                                          });
                                        },
                                        5859,
                                        n
                                      ),
                                    }
                                  );
                                }
                              ),
                              g: c.n(e),
                              h: c.n(
                                +i.currentSlide === r.renderKeys.indexOf(e)
                                  ? "current"
                                  : ""
                              ),
                            }
                          : {},
                        { i: -1 !== ["symbol"].indexOf(e) && t && t.length },
                        -1 !== ["symbol"].indexOf(e) && t && t.length
                          ? c.e(
                              { j: 7 === t.length },
                              7 === t.length
                                ? {
                                    k: c.t(t[0].name),
                                    l: c.t(
                                      -1 === t[0].zdf.indexOf("-")
                                        ? "+" + t[0].zdf
                                        : t[0].zdf
                                    ),
                                    m: c.n(r.getStColor(t[0].zdf)),
                                    n: c.o(
                                      function (e) {
                                        return r.handleItem({
                                          type: "symbol",
                                          id: t[0].symbol,
                                          name: t[0].name,
                                          index: 0,
                                        });
                                      },
                                      5860,
                                      e
                                    ),
                                    o: c.t(t[3].name),
                                    p: c.t(
                                      -1 === t[3].zdf.indexOf("-")
                                        ? "+" + t[3].zdf
                                        : t[3].zdf
                                    ),
                                    q: c.n(r.getStColor(t[3].zdf)),
                                    r: c.o(
                                      function (e) {
                                        return r.handleItem({
                                          type: "symbol",
                                          id: t[3].symbol,
                                          name: t[3].name,
                                          index: 3,
                                        });
                                      },
                                      5861,
                                      e
                                    ),
                                    s: c.t(t[4].name),
                                    t: c.t(
                                      -1 === t[4].zdf.indexOf("-")
                                        ? "+" + t[4].zdf
                                        : t[4].zdf
                                    ),
                                    v: c.n(r.getStColor(t[4].zdf)),
                                    w: c.o(
                                      function (e) {
                                        return r.handleItem({
                                          type: "symbol",
                                          id: t[4].symbol,
                                          name: t[4].name,
                                          index: 4,
                                        });
                                      },
                                      5862,
                                      e
                                    ),
                                    x: c.t(t[1].name),
                                    y: c.t(
                                      -1 === t[1].zdf.indexOf("-")
                                        ? "+" + t[1].zdf
                                        : t[1].zdf
                                    ),
                                    z: c.n(r.getStColor(t[1].zdf)),
                                    A: c.o(
                                      function (e) {
                                        return r.handleItem({
                                          type: "symbol",
                                          id: t[1].symbol,
                                          name: t[1].name,
                                          index: 1,
                                        });
                                      },
                                      5863,
                                      e
                                    ),
                                    B: c.t(t[2].name),
                                    C: c.t(
                                      -1 === t[2].zdf.indexOf("-")
                                        ? "+" + t[2].zdf
                                        : t[2].zdf
                                    ),
                                    D: c.n(r.getStColor(t[2].zdf)),
                                    E: c.o(
                                      function (e) {
                                        return r.handleItem({
                                          type: "symbol",
                                          id: t[2].symbol,
                                          name: t[2].name,
                                          index: 2,
                                        });
                                      },
                                      5864,
                                      e
                                    ),
                                    F: c.t(t[5].name),
                                    G: c.t(
                                      -1 === t[5].zdf.indexOf("-")
                                        ? "+" + t[5].zdf
                                        : t[5].zdf
                                    ),
                                    H: c.n(r.getStColor(t[5].zdf)),
                                    I: c.o(
                                      function (e) {
                                        return r.handleItem({
                                          type: "symbol",
                                          id: t[5].symbol,
                                          name: t[5].name,
                                          index: 5,
                                        });
                                      },
                                      5865,
                                      e
                                    ),
                                    J: c.t(t[6].name),
                                    K: c.t(
                                      -1 === t[6].zdf.indexOf("-")
                                        ? "+" + t[6].zdf
                                        : t[6].zdf
                                    ),
                                    L: c.n(r.getStColor(t[6].zdf)),
                                    M: c.o(
                                      function (e) {
                                        return r.handleItem({
                                          type: "symbol",
                                          id: t[6].symbol,
                                          name: t[6].name,
                                          index: 6,
                                        });
                                      },
                                      5866,
                                      e
                                    ),
                                  }
                                : {},
                              {
                                N: c.n(e),
                                O: c.n(
                                  +i.currentSlide === r.renderKeys.indexOf(e)
                                    ? "current"
                                    : ""
                                ),
                              }
                            )
                          : {},
                        { P: e, Q: "a47ad0da-3-" + o + ",a47ad0da-2" }
                      );
                    }),
                    s: c.n(
                      "2" === n.tabsStyleType ? "swiper-slide-margin-top" : ""
                    ),
                    t: c.sr("mySwiper", "a47ad0da-2"),
                    v: c.o(r.onScroll, 5867),
                    w: c.o(r.scrollEnd, 5868),
                    x: c.o(r.switchNav, 5869),
                    y: c.p({
                      loop: !1,
                      "auto-play": !1,
                      "show-dots": !0,
                      "refresh-reset-current": !1,
                      options: i.options,
                      initialIndex: i.currentSlideNum,
                    }),
                  },
              { E: c.n("2" === n.tabsStyleType ? "hot-post-tab2" : "") }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-a47ad0da"],
]);
wx.createComponent(k);
