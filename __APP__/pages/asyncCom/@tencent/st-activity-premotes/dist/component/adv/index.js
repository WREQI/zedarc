require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../../../../../@babel/runtime/helpers/createClass"),
  r = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = Object.defineProperty,
  o = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  s = function (e, t, n) {
    return t in e
      ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  c = function (e, t) {
    for (var n in t || (t = {})) i.call(t, n) && s(e, n, t[n]);
    if (o) {
      var a,
        c = r(o(t));
      try {
        for (c.s(); !(a = c.n()).done; ) {
          n = a.value;
          u.call(t, n) && s(e, n, t[n]);
        }
      } catch (e) {
        c.e(e);
      } finally {
        c.f();
      }
    }
    return e;
  },
  l = function (e, t, n) {
    return new Promise(function (r, a) {
      var o = function (e) {
          try {
            u(n.next(e));
          } catch (e) {
            a(e);
          }
        },
        i = function (e) {
          try {
            u(n.throw(e));
          } catch (e) {
            a(e);
          }
        },
        u = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(o, i);
        };
      u((n = n.apply(e, t)).next());
    });
  },
  p = require("../../../../../../../common/vendor.js"),
  h = require("../../../../st-adapter/src/mta/index.js"),
  d = require("../../../../st-adapter/src/navigator/mp.js"),
  f = {
    setup: function () {
      return { premoteInfo: getApp().globalData.usePremoteInfo().premoteInfo };
    },
    data: function () {
      return {
        adType: "",
        premote: null,
        appRouteCallback: null,
        hasBottomBar: !1,
        returnArray: !1,
        comPath: "",
      };
    },
    watch: {
      premoteInfo: function (e) {
        this.comPath === e.path &&
          e[this.adType] &&
          e[this.adType].length > 0 &&
          ((this.premote = this.returnArray
            ? e[this.adType]
            : e[this.adType][0]),
          (this.hasBottomBar = e.hasBottomBar));
      },
    },
    created: function () {
      var e = this;
      (this.comPath = this.getPagePath()),
        (this.appRouteCallback = function () {
          e.premote = null;
        }),
        p.wx$1.onAppRoute(this.appRouteCallback);
    },
    beforeDestroy: function () {
      if (this.appRouteCallback && p.wx$1.offAppRoute) {
        try {
          p.wx$1.offAppRoute(this.appRouteCallback);
        } catch (e) {}
        this.appRouteCallback = null;
      }
    },
    methods: {
      initPremoteData: function (e, t) {
        (this.adType = e), (this.returnArray = t);
      },
      getPagePath: function () {
        var e = getCurrentPages();
        return e[e.length - 1].route;
      },
      clearPremoteDataCache: function () {
        this.premoteInfo[this.adType] && delete this.premoteInfo[this.adType];
      },
    },
  };
window && window.$broker && window.$broker.id;
var b = "https://wzq.tenpay.com/cgi-bin/ad.fcgi",
  m = new ((function () {
    function r() {
      t(this, r);
    }
    return (
      n(r, [
        {
          key: "query",
          value: function (t) {
            return l(
              this,
              null,
              e().mark(function n() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt(
                          "return",
                          h
                            .request(b, c({ action: 1 }, t), { method: "GET" })
                            .then(function (e) {
                              return e.data;
                            })
                        );
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, n);
              })
            );
          },
        },
        {
          key: "update",
          value: function (t) {
            return l(
              this,
              null,
              e().mark(function n() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt(
                          "return",
                          h.request(b, c({ action: 2 }, t)).then(function (e) {
                            return e.data;
                          })
                        );
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, n);
              })
            );
          },
        },
      ]),
      r
    );
  })())(),
  y = {},
  v = ["zx_top_banner"],
  w = {
    components: {
      AdvBanner: function () {
        return "./advBanner.js";
      },
    },
    mixins: [f],
    props: {
      type: { type: String, default: "" },
      size: { type: String, default: "" },
      isUpdate: { type: Boolean, default: !1 },
      sideLeft: { type: Boolean, default: !1 },
    },
    data: function () {
      return { showBanner: !1, bannerData: null };
    },
    watch: {
      premote: {
        handler: function (e) {
          var t = this;
          e
            ? ((this.bannerData = e),
              setTimeout(function () {
                t.showBanner = !0;
              }, 1e3))
            : ((this.showBanner = !1), (this.bannerData = null));
        },
        immediate: !0,
      },
    },
    mounted: function () {
      this.initPremoteData("newsdetail");
    },
    methods: {
      handleBannerClose: function () {
        var t, n, r, a, o;
        this.isUpdate &&
          this.bannerData &&
          ((a = null == (t = this.bannerData) ? void 0 : t.adid),
          (o = null == (n = this.bannerData) ? void 0 : n.ad_type),
          l(
            exports,
            null,
            e().mark(function t() {
              var n, r;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = { adid: a, ad_type: o, channel: 4 }),
                        ["zx_top_banner", "stockdetail_banner"].includes(o) ||
                          (n.oper = 2),
                        (r = y[o]) &&
                          r.adid === a &&
                          (r.show_disabled_front = !0),
                        (e.next = 6),
                        m.update(n)
                      );
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          )),
          h.reportMta(
            "".concat(
              null == (r = this.bannerData) ? void 0 : r.ad_type,
              "_close"
            ),
            this.bannerData
          ),
          this.clearPremoteDataCache();
      },
      handleBannerClick: function () {
        return l(
          this,
          null,
          e().mark(function t() {
            var n, r, a, o, i, u;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        (h.reportMta(
                          "".concat(
                            null == (n = this.bannerData) ? void 0 : n.ad_type,
                            "_click"
                          ),
                          this.bannerData
                        ),
                        (t.t0 = this.isUpdate && this.bannerData),
                        !t.t0)
                      ) {
                        t.next = 5;
                        break;
                      }
                      return (
                        (t.next = 5),
                        (o = this.type),
                        (i =
                          null == (r = this.bannerData)
                            ? void 0
                            : r.report_info),
                        (u = null == (a = this.bannerData) ? void 0 : a.adid),
                        l(
                          exports,
                          null,
                          e().mark(function t() {
                            return e().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2),
                                      m.update({
                                        channel: 4,
                                        ad_type: o,
                                        report_info: i,
                                        adid: u,
                                      })
                                    );
                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, t);
                          })
                        )
                      );
                    case 5:
                      v.includes(this.type) && (this.showBanner = !1),
                        this.bannerData.link &&
                          d.jump({ path: this.bannerData.link });
                    case 7:
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
    },
  };
Array || p.resolveComponent("AdvBanner")();
var k = p._export_sfc(w, [
  [
    "render",
    function (e, t, n, r, a, o) {
      return {
        a: p.o(o.handleBannerClose, 2129),
        b: p.o(o.handleBannerClick, 2130),
        c: p.p({
          "show-adv": a.showBanner,
          "adv-info": a.bannerData,
          type: n.type,
          size: n.size,
          "side-left": n.sideLeft,
        }),
      };
    },
  ],
]);
wx.createComponent(k);
