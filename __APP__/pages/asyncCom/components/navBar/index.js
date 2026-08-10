require("../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, n) {
    return new Promise(function (a, i) {
      var s = function (t) {
          try {
            o(n.next(t));
          } catch (t) {
            i(t);
          }
        },
        c = function (t) {
          try {
            o(n.throw(t));
          } catch (t) {
            i(t);
          }
        },
        o = function (t) {
          return t.done ? a(t.value) : Promise.resolve(t.value).then(s, c);
        };
      o((n = n.apply(t, e)).next());
    });
  },
  n = require("../../../../common/vendor.js"),
  a = "OdP96fM_eFHulIca3yZEdLpzqNStStx8tHeZuy18GU4",
  i = {
    methods: {
      showSubAbt: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      new Promise(function (t, e) {
                        n.AbtInfoAPI.getAbtInfo(
                          "xcx_news_subscribe_message_abt",
                          { scenes: 6 }
                        ).then(function (e) {
                          t(e);
                        });
                      })
                    );
                  case 2:
                    return t.abrupt("return", t.sent);
                  case 3:
                  case "end":
                    return t.stop();
                }
            }, e);
          })
        );
      },
      informationTabCall: function () {
        return e(
          this,
          null,
          t().mark(function i() {
            var s = this;
            return t().wrap(function (i) {
              for (;;)
                switch ((i.prev = i.next)) {
                  case 0:
                    return (
                      (i.next = 2),
                      n.userinfo.get(!0, function (i) {
                        return e(
                          s,
                          null,
                          t().mark(function s() {
                            var c,
                              o,
                              r,
                              d,
                              u,
                              g,
                              b = this;
                            return t().wrap(
                              function (s) {
                                for (;;)
                                  switch ((s.prev = s.next)) {
                                    case 0:
                                      if (
                                        ((c = +i.subscribe),
                                        (o = "blank"),
                                        (r = !1),
                                        (d =
                                          (
                                            n.wx$1.getStorageSync(
                                              "informationShowGuide"
                                            ) || {}
                                          ).time || 0),
                                        c)
                                      ) {
                                        s.next = 9;
                                        break;
                                      }
                                      return (s.next = 6), this.showSubAbt();
                                    case 6:
                                      (u = s.sent),
                                        (g =
                                          (u &&
                                            u.data[0] &&
                                            u.data[0].report_info) ||
                                          {}),
                                        n.Request.reportMTAData({
                                          eventName:
                                            "yy.xcx_news_subscribe_message_abt",
                                          report_info: g,
                                        }),
                                        "xcxnews" ===
                                          (o =
                                            (u &&
                                              u.data[0] &&
                                              u.data[0].version) ||
                                            "blank") && Date.now() - d > 86400
                                          ? (n.wx$1.requestSubscribeMessage({
                                              tmplIds: [a],
                                              success: function (i) {
                                                return e(
                                                  b,
                                                  null,
                                                  t().mark(function e() {
                                                    return t().wrap(function (
                                                      t
                                                    ) {
                                                      for (;;)
                                                        switch (
                                                          (t.prev = t.next)
                                                        ) {
                                                          case 0:
                                                            "accept" === i[a]
                                                              ? n.Request.reportMTAData(
                                                                  {
                                                                    eventName:
                                                                      "yy.xcx_news_subscribe_message_success_callback",
                                                                    report_info:
                                                                      g,
                                                                  }
                                                                )
                                                              : n.Request.reportMTAData(
                                                                  {
                                                                    eventName:
                                                                      "yy.xcx_news_subscribe_message_reject_callback",
                                                                    report_info:
                                                                      g,
                                                                  }
                                                                );
                                                          case 1:
                                                          case "end":
                                                            return t.stop();
                                                        }
                                                    },
                                                    e);
                                                  })
                                                );
                                              },
                                              fail: function (n) {
                                                return e(
                                                  b,
                                                  null,
                                                  t().mark(function e() {
                                                    return t().wrap(function (
                                                      t
                                                    ) {
                                                      for (;;)
                                                        switch (
                                                          (t.prev = t.next)
                                                        ) {
                                                          case 0:
                                                          case "end":
                                                            return t.stop();
                                                        }
                                                    },
                                                    e);
                                                  })
                                                );
                                              },
                                            }),
                                            (r = !0))
                                          : Date.now() - d < 86400
                                          ? (r = !1)
                                          : Date.now() - d > 86400 && (r = !0);
                                    case 9:
                                      n.wx$1.setStorageSync(
                                        "informationShowGuide",
                                        {
                                          showType: o,
                                          showFlag: r,
                                          time: r ? Date.now() : d,
                                        }
                                      );
                                    case 10:
                                    case "end":
                                      return s.stop();
                                  }
                              },
                              s,
                              this
                            );
                          })
                        );
                      })
                    );
                  case 2:
                  case "end":
                    return i.stop();
                }
            }, i);
          })
        );
      },
    },
  },
  s = n.useBrokerInfo(),
  c = [
    {
      name: "新闻",
      id: "information",
      iconLink:
        "https://st.gtimg.com/design/48b4bdf2d20b6677adc4b30dc0e7d809.png",
      activeIconLink:
        "https://st.gtimg.com/design/48b4bdf2d20b6677adc4b30dc0e7d809.png",
      pos: 1,
    },
    {
      name: "自选",
      id: "choose",
      iconLink:
        "https://st.gtimg.com/design/37157b6edeeb88e7ac4a04d2661d33ec.png",
      activeIconLink:
        "https://st.gtimg.com/design/b312bd57dbc3afaa2f62149f8eae2022.png",
      pos: 2,
    },
    {
      name: "行情",
      id: "market",
      iconLink:
        "https://st.gtimg.com/design/55dc880e79a5f28deb9e5187e5c05133.png",
      activeIconLink:
        "https://st.gtimg.com/design/52f83b602db36fcb93ef15fae078016a.png",
      pos: 3,
    },
    {
      name: "交易",
      id: "asset",
      iconLink:
        "https://st.gtimg.com/design/d3dbb0b4383d4d6968b0a0b3c470d00b.png",
      activeIconLink:
        "https://st.gtimg.com/design/e4e08dbed5abede828e15c39f5ab51b9.png",
      pos: 4,
    },
    {
      name: "我的",
      id: "account",
      iconLink:
        "https://st.gtimg.com/design/c52dc31078961084a98ccce4b15dec4b.png",
      activeIconLink:
        "https://st.gtimg.com/design/c52dc31078961084a98ccce4b15dec4b.png",
      pos: 5,
    },
  ],
  o = {
    black: [
      {
        id: "choose",
        iconLink:
          "https://st.gtimg.com/design/88ec6204c2d81df2962a4f6f9f4ba718.png",
      },
      {
        id: "information",
        iconLink:
          "https://st.gtimg.com/design/48b4bdf2d20b6677adc4b30dc0e7d809.png",
      },
      {
        id: "market",
        iconLink:
          "https://st.gtimg.com/design/841e9881794eee2e5957c62b7e3e5f29.png",
      },
      {
        id: "strategy",
        iconLink:
          "https://st.gtimg.com/design/48ccf9cd6d9227a7497c4247fafbc728.png",
      },
      {
        id: "asset",
        iconLink:
          "https://st.gtimg.com/design/d41f4a780aa9483798140b571d2ffcc9.png",
      },
      {
        id: "apply",
        iconLink:
          "https://st.gtimg.com/design/416a4c7057eca3729fdaba1b72336a3f.png",
      },
      {
        id: "account",
        iconLink:
          "https://st.gtimg.com/design/c52dc31078961084a98ccce4b15dec4b.png",
      },
    ],
    white: [
      {
        id: "choose",
        iconLink:
          "https://st.gtimg.com/design/37157b6edeeb88e7ac4a04d2661d33ec.png",
      },
      {
        id: "information",
        iconLink:
          "https://st.gtimg.com/design/1de4ff04e4b7f4b266fc9983b367175d.png",
      },
      {
        id: "market",
        iconLink:
          "https://st.gtimg.com/design/55dc880e79a5f28deb9e5187e5c05133.png",
      },
      {
        id: "strategy",
        iconLink:
          "https://st.gtimg.com/design/2f4c4a7315c0cea290db7fbe5e3b6cd3.png",
      },
      {
        id: "asset",
        iconLink:
          "https://st.gtimg.com/design/d3dbb0b4383d4d6968b0a0b3c470d00b.png",
      },
      {
        id: "apply",
        iconLink:
          "https://st.gtimg.com/design/ad14bc6728b976ea59fe1b6907a5cd3e.png",
      },
      {
        id: "account",
        iconLink:
          "https://st.gtimg.com/design/ce5b80937ec238b888b22ec869d6f5fa.png",
      },
    ],
  },
  r = {
    name: "CustomNavBar",
    components: {
      Navbar: function () {
        return "../../@tencent/st-components/mp/Navbar/index.js";
      },
    },
    mixins: [i],
    data: function () {
      return {
        skin: n.wx$1.getStorageSync("user/skin") || "white",
        defaultTab: "",
        redPointShowArr: [],
        tabRoutes: n.defaultTabRoute,
        isShowExtenalNavBar: !1,
        isFirstPage: !1,
        navbarVersion: "v1",
        navbarHideByEvent: !1,
        tabList: c,
        applyTabConfig: {
          name: "开户",
          id: "apply",
          iconLink:
            "https://st.gtimg.com/design/ad14bc6728b976ea59fe1b6907a5cd3e.png",
          activeIconLink:
            "https://st.gtimg.com/design/18f877a874ac2b634c71ef9192a5163f.png",
          pos: 4,
        },
        skinTabConfig: o,
      };
    },
    computed: {
      show: function () {
        return this.isShowExtenalNavBar && !this.navbarHideByEvent;
      },
      hasAccount: function () {
        return n.useBrokerInfo().hasBind.value;
      },
    },
    watch: {
      show: {
        handler: function () {
          var t = this;
          getApp().globalData.setSkin(function (e) {
            t.skin = e || "white";
          });
        },
        immediate: !0,
      },
      isFirstPage: function () {
        this.setShow();
      },
      isShowExtenalNavBar: function () {
        this.setShow();
      },
      navbarHideByEvent: function () {
        this.setShow();
      },
    },
    mounted: function () {
      var t = this;
      try {
        n.wx$1.onAppRoute(function () {
          t.getDefaultTab();
        }),
          this.getDefaultTab(),
          this.judgeShowExternalNav(),
          getApp().globalData.Event.on("base.navbar.hide", this, function (e) {
            t.navbarHideByEvent = Boolean(e);
          });
      } catch (t) {}
    },
    beforeDestroy: function () {
      getApp().globalData.Event.remove("base.navbar.hide", this);
    },
    methods: {
      setShow: function () {
        var t =
          (this.isFirstPage || this.isShowExtenalNavBar) &&
          !this.navbarHideByEvent;
        (getApp().globalData.ShowCustomNavbar = t),
          getApp().globalData.Event.emit("ShowCustomNavbar", t);
      },
      updateExternalTab: function () {
        var t = this;
        this.$nextTick(function () {
          var e = t.$refs.navbar;
          if (e && e.navs) {
            var n = e.navs.find(function (e) {
              return e.id === t.defaultTab;
            });
            if (n && !n.name.includes("去")) {
              var a = {
                name: "去".concat(n.name, "首页"),
                iconLink: "https://st.gtimg.com/design/".concat(
                  "white" === t.skin
                    ? "63d3b6531bf8a3d9c23c4ed492c82574"
                    : "f317c2ce4b6830a54c953744c4fcba5a",
                  ".png"
                ),
                activeIconLink:
                  "https://st.gtimg.com/design/b181fe2f60606a29314555e1e6ac3b5f.png",
                id: n.id,
                pos: n.pos,
              };
              e.updateTab(t.defaultTab, a);
            }
          }
        });
      },
      recoverTab: function () {
        var t = this.$refs.navbar;
        if (t && t.navs) {
          var e = t.navs.find(function (t) {
            return t.name.includes("去");
          });
          if (e) {
            var n = c.find(function (t) {
              return t.id === e.id;
            });
            t.updateTab(e.id, n);
          }
        }
      },
      judgeShowExternalNav: function () {
        var t,
          e = this.getRouteInfo(),
          n = e.path,
          a = e.query.__push_flag__,
          i = !(
            /^\/(pages\/quote\/quote)/.test(n) ||
            /^\/(pages\/stockBasket\/detail)/.test(n) ||
            /^\/(pages\/newsCon\/newsDetail\/main)/.test(n) ||
            /^\/(pages\/act\/investcalendar\/detail)/.test(n)
          ),
          s =
            null == (t = null == __wxConfig ? void 0 : __wxConfig.tabBar)
              ? void 0
              : t.custom;
        (this.isShowExtenalNavBar = s
          ? 1 == +a && i
          : 1 == +a && i && !this.isFirstPage),
          this.isShowExtenalNavBar &&
            !this.isFirstPage &&
            this.updateExternalTab();
      },
      getDefaultTab: function () {
        var t = this.getRouteInfo(),
          e = t.path,
          a = t.pageName;
        if (
          ((this.defaultTab = n.defaultRouteTab[e] || ""),
          "/pages/index/trade" === e &&
            (this.defaultTab = this.hasAccount ? "asset" : "apply"),
          (this.isFirstPage = "" !== this.defaultTab),
          !this.defaultTab)
        ) {
          var i = [
            { id: "choose", childPaths: ["choose", "hq", "additional"] },
            { id: "trade", childPaths: ["trade"] },
            { id: "account", childPaths: ["account"] },
          ].find(function (t) {
            return t.childPaths.includes(a);
          });
          this.defaultTab = (null == i ? void 0 : i.id) || "";
        }
      },
      getRouteInfo: function () {
        var t,
          e = getCurrentPages(),
          a = e[e.length - 1] || {},
          i =
            (null == (t = null == a ? void 0 : a.$page)
              ? void 0
              : t.fullPath) || "",
          s = n.queryParse(i.replace(/^[^\?]+/, "")),
          c = (a.route || "")
            .replace(/^pages\//, "")
            .split("/")
            .shift();
        return { path: i ? i.split("?")[0] : "", query: s, pageName: c };
      },
      navigate: function (a) {
        return e(
          this,
          null,
          t().mark(function e() {
            var i, c, o, r, d, u, g;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((t.prev = 0),
                        (o = this.tabRoutes[a]),
                        (r = this.getRouteInfo()),
                        r.path !== o)
                      ) {
                        t.next = 4;
                        break;
                      }
                      return t.abrupt("return");
                    case 4:
                      n.Request.reportMTAData({
                        eventName: "base.navbar."
                          .concat(a, "_")
                          .concat(
                            this.isShowExtenalNavBar ? "external_" : "",
                            "click"
                          ),
                      }),
                        (d =
                          (null ==
                          (c =
                            null == (i = getApp().globalData.detect)
                              ? void 0
                              : i.env)
                            ? void 0
                            : c.IS_PCWEIXIN) || !1),
                        n.wx$1.switchTab({ url: o }),
                        this.recoverTab(),
                        ["asset", "apply"].includes(a) &&
                          !d &&
                          ((u = {
                            name: "AssetIndex",
                            query: { stat_data: "IhY00p000k001" },
                          }),
                          s.navigateToTrade(u)),
                        (t.next = 13);
                      break;
                    case 9:
                      (t.prev = 9),
                        (t.t0 = t.catch(0)),
                        (g =
                          "ERR_MAINTAIN" === t.t0.retcode
                            ? t.t0.retmsg
                            : "系统繁忙 请稍后再试"),
                        setTimeout(function () {
                          n.wx$1.showToast({
                            title: g,
                            icon: "none",
                            duration: 3e3,
                          });
                        }, 500);
                    case 13:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[0, 9]]
            );
          })
        );
      },
    },
  };
Array || n.resolveComponent("Navbar")();
var d = n._export_sfc(r, [
  [
    "render",
    function (t, e, a, i, s, c) {
      return n.e(
        { a: c.show },
        c.show
          ? {
              b: n.sr("navbar", "7f96717d-0"),
              c: n.n(s.navbarVersion),
              d: n.o(c.navigate, 445),
              e: n.p({
                "default-active-tab": s.defaultTab,
                "red-point-show-arr": s.redPointShowArr,
                skin: s.skin,
                "has-account": c.hasAccount,
                "navbar-version": s.navbarVersion,
                tabList: s.tabList,
                applyTabConfig: s.applyTabConfig,
                skinTabConfig: s.skinTabConfig,
                mpStyle: !0,
              }),
            }
          : {}
      );
    },
  ],
]);
wx.createComponent(d);
