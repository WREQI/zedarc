require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  r = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  c = function (e, n, r) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[n] = r);
  },
  u = function (e, n, t) {
    return new Promise(function (r, a) {
      var o = function (e) {
          try {
            s(t.next(e));
          } catch (e) {
            a(e);
          }
        },
        i = function (e) {
          try {
            s(t.throw(e));
          } catch (e) {
            a(e);
          }
        },
        s = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(o, i);
        };
      s((t = t.apply(e, n)).next());
    });
  },
  p = require("../../common/vendor.js"),
  f = {
    data: function () {
      return {
        dispStyles: ["1_123", "2_123", "3_123", "4_123"],
        buttonRows: [],
        msg: "这里展示结果",
        businesses: [],
      };
    },
    mounted: function () {
      return u(
        this,
        null,
        e().mark(function t() {
          var u, f, g, b, l, d;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (this.buttonRows = this.chunkArray(this.dispStyles, 3)),
                      (e.next = 3),
                      p.getSubscribeConfig()
                    );
                  case 3:
                    (u = e.sent.template_ids.reduce(function (e, t) {
                      var u;
                      return (
                        e.some(function (e) {
                          return e.business === t.business;
                        }) ||
                          e.push(
                            ((u = (function (e, t) {
                              for (var r in t || (t = {}))
                                i.call(t, r) && c(e, r, t[r]);
                              if (o) {
                                var a,
                                  u = n(o(t));
                                try {
                                  for (u.s(); !(a = u.n()).done; ) {
                                    r = a.value;
                                    s.call(t, r) && c(e, r, t[r]);
                                  }
                                } catch (e) {
                                  u.e(e);
                                } finally {
                                  u.f();
                                }
                              }
                              return e;
                            })({}, t)),
                            r(u, a({ num: 0, isSubscribed: !1 })))
                          ),
                        e
                      );
                    }, [])),
                      (this.businesses = u),
                      (f = n(this.businesses)),
                      (e.prev = 6),
                      f.s();
                  case 8:
                    if ((g = f.n()).done) {
                      e.next = 25;
                      break;
                    }
                    return (
                      (b = g.value),
                      (e.prev = 10),
                      (e.next = 13),
                      p.getTemplateId(b.business)
                    );
                  case 13:
                    return (
                      (l = e.sent), (e.next = 16), p.querySubscribeSwitch(l)
                    );
                  case 16:
                    (d = e.sent),
                      (b.isSubscribed = "accept" === d.status),
                      (e.next = 23);
                    break;
                  case 20:
                    (e.prev = 20), (e.t0 = e.catch(10)), (b.isSubscribed = !1);
                  case 23:
                    e.next = 8;
                    break;
                  case 25:
                    e.next = 30;
                    break;
                  case 27:
                    (e.prev = 27), (e.t1 = e.catch(6)), f.e(e.t1);
                  case 30:
                    return (e.prev = 30), f.f(), e.finish(30);
                  case 33:
                  case "end":
                    return e.stop();
                }
            },
            t,
            this,
            [
              [6, 27, 30, 33],
              [10, 20],
            ]
          );
        })
      );
    },
    methods: {
      chunkArray: function (e, n) {
        for (var t = [], r = 0; r < e.length; r += n) t.push(e.slice(r, r + n));
        return t;
      },
      navigateToUnion: function (e) {
        p.wx$1.navigateTo({
          url: "/pages/yy/ams?disp_style=".concat(e, "&dealer=10100"),
        });
      },
      subscribe: function (n) {
        return u(
          this,
          null,
          e().mark(function t() {
            var r,
              a = this;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), p.getTemplateId(n);
                  case 2:
                    (r = e.sent),
                      p
                        .subscribe(n, r)
                        .then(function (e) {
                          a.msg = "subscribe: "
                            .concat(e || "", " ")
                            .concat(e.errMsg || "");
                          var t = a.businesses.find(function (e) {
                            return e.business === n;
                          });
                          t && (t.num++, (t.isSubscribed = !0));
                        })
                        .catch(function (e) {});
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        );
      },
      silentSubscribe: function (e) {
        ["price_remind", "calendar_event", "gudan_notice"].includes(e)
          ? p.silentSubscribe()
          : p.silentSubscribe(e);
      },
      goToSearchImgOcr: function () {
        p.wx$1.navigateTo({
          url: "/pages/additional/search/imgOcr?_scene_from_=2",
        });
      },
      goToMorningReport: function () {
        p.wx$1.navigateTo({
          url: "/pages/report/morning/main?id=SN20250520070735a6e53ce6&type=4&isfrom=msg&stat_data=OyT00p000f069&articleStyle=card&__push_flag__=1&subtype=morningreportcard&__template_report_id__=zixunmorningreport&symbols=&_scene_from_=1012",
        });
      },
      goToDailyReport: function () {
        p.wx$1.navigateTo({
          url: "/pages/report/daily/main?isgray=1&from=msg&id=2025052002&__template_report_id__=marketnotice.after&__push_flag__=1&_scene_from_=1012",
        });
      },
      navigateToWechatHotSearch: function () {
        p.wx$1.navigateTo({
          url: "/pages/additional/search/hot_stock/main?tabId=1&_scene_from_=1012",
        });
      },
      navigateToInvestmentTopList: function () {
        p.wx$1.switchTab({
          url: "/pages/index/discover/main?toindex=top&_scene_from_=1012",
        });
      },
      navigateToBuffettStockList: function () {
        p.wx$1.navigateTo({
          url: "/pages/stockBasket/detail?gdId=gd000628&_scene_from_=1012",
        });
      },
      navigateToEtfRank: function (e, n, t, r) {
        p.wx$1.navigateTo({
          url: "/pages/act/guide/broker?broker="
            .concat(n, "&label=")
            .concat(t, "&stat_data=")
            .concat(e, "&key=")
            .concat(r),
        });
      },
      navigateToBank: function (e) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        p.wx$1.navigateTo({
          url: "/pages/act/channeldesignatedbank/main?stat_data="
            .concat(e)
            .concat(n ? "&bank=" + n : ""),
        });
      },
    },
  };
Array ||
  (
    p.resolveComponent("mp-privacy-dialog") +
    p.resolveComponent("stock-privacy-dialog")
  )();
var g = p._export_sfc(f, [
  [
    "render",
    function (e, n, t, r, a, o) {
      return {
        a: e.rootFontSize,
        b: p.p({ "no-auto": !0 }),
        c: p.f(a.buttonRows, function (e, n, t) {
          return {
            a: p.f(e, function (e, n, t) {
              return {
                a: p.t(e),
                b: n,
                c: p.o(
                  function (n) {
                    return o.navigateToUnion(e);
                  },
                  375,
                  n
                ),
              };
            }),
            b: n,
          };
        }),
        d: p.o(function () {
          return o.goToSearchImgOcr && o.goToSearchImgOcr.apply(o, arguments);
        }, 376),
        e: p.o(function () {
          return o.goToMorningReport && o.goToMorningReport.apply(o, arguments);
        }, 377),
        f: p.o(function () {
          return o.goToDailyReport && o.goToDailyReport.apply(o, arguments);
        }, 378),
        g: p.o(function () {
          return (
            o.navigateToWechatHotSearch &&
            o.navigateToWechatHotSearch.apply(o, arguments)
          );
        }, 379),
        h: p.o(function () {
          return (
            o.navigateToInvestmentTopList &&
            o.navigateToInvestmentTopList.apply(o, arguments)
          );
        }, 380),
        i: p.o(function () {
          return (
            o.navigateToBuffettStockList &&
            o.navigateToBuffettStockList.apply(o, arguments)
          );
        }, 381),
        j: p.o(function (e) {
          return o.navigateToEtfRank(
            "Ig600p000k",
            "10800",
            "etfrank",
            "yifangda"
          );
        }, 382),
        k: p.f(a.businesses, function (e, n, t) {
          return p.e(
            { a: p.t(e.business), b: e.isSubscribed },
            (e.isSubscribed, {}),
            {
              c: p.o(
                function () {
                  return o.subscribe(e.business);
                },
                383,
                n
              ),
              d: p.o(
                function () {
                  return o.silentSubscribe(e.business);
                },
                384,
                n
              ),
              e: p.t(e.num || 0),
              f: n,
            }
          );
        }),
        l: p.t(a.msg),
        m: p.o(function (e) {
          return o.navigateToBank("OlP01p000k011");
        }, 385),
        n: p.o(function (e) {
          return o.navigateToBank("OZB00p000g051", "icbc");
        }, 386),
        o: p.o(function (e) {
          return o.navigateToBank("OZB00p000g050", "boc");
        }, 387),
        p: p.o(function (e) {
          return o.navigateToBank("OZB00p000g053", "comm");
        }, 388),
        q: p.o(function (e) {
          return o.navigateToBank("OZB00p000g052", "abc");
        }, 389),
      };
    },
  ],
  ["__scopeId", "data-v-a573e25a"],
]);
wx.createPage(g);
