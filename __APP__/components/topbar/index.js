require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = function (e, n, t) {
    return new Promise(function (i, o) {
      var r = function (e) {
          try {
            a(t.next(e));
          } catch (e) {
            o(e);
          }
        },
        c = function (e) {
          try {
            a(t.throw(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          return e.done ? i(e.value) : Promise.resolve(e.value).then(r, c);
        };
      a((t = t.apply(e, n)).next());
    });
  },
  t = require("../../common/vendor.js"),
  i = {
    choose: {
      click: "choose.search.bar_click",
      exposure: "choose.search.bar_exposure",
    },
    hq: { click: "hq.search.bar_click", exposure: "hq.search.bar_exposure" },
    news: {
      click: "news.search.bar_click",
      exposure: "news.search.bar_exposure",
    },
    discover: {
      click: "discover.search.bar_click",
      exposure: "discover.search.bar_exposure",
    },
  },
  o =
    ((typeof getApp === "function" && getApp()) || {}).globalData || {
      safeTop: 0,
      actData: { isAddMyXcxEnable: !1 },
      init: function (e) {
        e && e();
      },
      navigateTo: function (e) {
        wx.navigateTo(e || {});
      },
    },
  r = {
    components: {
      GuidePullDownAccess: function () {
        return "../../pages/asyncCom/@tencent/st-delivery-guide-pulldown-access/src/mp.js";
      },
      qianjiRedPointPlaceholder: function () {
        return "../../pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/RedPoint/qianjiRedPointPlaceHolderMp.js";
      },
      AiEntry: function () {
        return "../../pages/indexSbg/@tencent/stock-ai-entry-tiny/index.js";
      },
    },
    inject: ["hqBridge"],
    options: { styleIsolation: "shared" },
    props: ["from", "hideTitle", "hideSearch", "premoteMixin", "skin"],
    data: function () {
      return {
        safeTop: 0,
        searchTop: 0,
        fixWidth: 0,
        showAddXcx: !1,
        openid: "",
      };
    },
    computed: {
      fixStyle: function () {
        return "width: ".concat(this.fixWidth, "px;");
      },
      coverStyle: function () {
        return "width: 100%;";
      },
      isDevelopVersion: function () {
        var e, n;
        return (
          t.wx$1.getAccountInfoSync &&
          "develop" ===
            (null ==
            (n =
              null == (e = t.wx$1.getAccountInfoSync())
                ? void 0
                : e.miniProgram)
              ? void 0
              : n.envVersion)
        );
      },
    },
    created: function () {
      return n(
        this,
        null,
        e().mark(function n() {
          var i = this;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    "choose" === this.from &&
                      o.init(function () {
                        var e = t.login.getLoginInfo() || {};
                        i.openid = e.qluin;
                      });
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
    },
    mounted: function () {
      var e = this;
      this.$nextTick(function () {
        e.getSafeArea();
      });
    },
    onPageShow: function () {
      o.actData.isAddMyXcxEnable && (this.showAddXcx = !0);
    },
    methods: {
      getSafeArea: function () {
        var i = this,
          o = t.wx$1.getMenuButtonBoundingClientRect(),
          r = o.top,
          c = void 0 === r ? 0 : r,
          a = o.left;
        (this.safeTop = c),
          (this.fixWidth = a),
          this.$nextTick(function () {
            return n(
              i,
              null,
              e().mark(function n() {
                var t, i, o, r;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            this.hqBridge.getEleInfo(".top-bar-container", this)
                          );
                        case 2:
                          return (
                            (t = e.sent),
                            (i = (t || {}).height),
                            (o = void 0 === i ? 0 : i),
                            this.$emit("getBarHeight", o),
                            (e.next = 9),
                            this.hqBridge.getEleInfo(".big-title", this)
                          );
                        case 9:
                          (r = e.sent),
                            this.$emit(
                              "getTitleHeight",
                              r.height || 0,
                              this.safeTop
                            );
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
          });
      },
      jumpToSearch: function () {
        return n(
          this,
          null,
          e().mark(function n() {
            var r, c, a, s, u, l, p;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (u = this.from || "") &&
                          ((l = (i[u] || {}).click), this.hqBridge.report(l)),
                        o.navigateTo({
                          url: "/pages/additional/search/main",
                          fail: function (e) {},
                        }),
                        (e.prev = 3),
                        (e.next = 6),
                        t.AbtInfoAPI.getAbtInfo(
                          "ui_layer_1746698860763",
                          {},
                          { forceCallback: !0 }
                        )
                      );
                    case 6:
                      0 == +(p = e.sent).retcode &&
                        (null == (r = p.data[0]) ? void 0 : r.Version) &&
                        ["New", "Online"].includes(
                          null == (c = p.data[0]) ? void 0 : c.Version
                        ) &&
                        (t.StockBridge.setStorage(
                          "lite/search-version",
                          null == (a = p.data[0]) ? void 0 : a.Version
                        ),
                        t.StockBridge.setStorage(
                          "lite/search-version-abtinfo",
                          null == (s = p.data[0]) ? void 0 : s.report_info
                        )),
                        (e.next = 12);
                      break;
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(3));
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              this,
              [[3, 10]]
            );
          })
        );
      },
      goToProfile: function () {
        o.navigateTo({
          url: "/pages/index/account/main",
          fail: function (e) {},
        }),
          t.Request.reportMTAData({ eventName: "xcx_topbar_profile_click" });
      },
      specialDebugFunc: function () {
        t.wx$1.vibrateShort({ type: "heavy" }),
          this.isDevelopVersion &&
            t.wx$1.showModal({
              title: "调试路由跳转",
              editable: !0,
              placeholderText: "请输入路由路径，如 /pages/index/main",
              confirmText: "跳转",
              cancelText: "取消",
              success: function (e) {
                if (e.confirm && e.content) {
                  var n = e.content.trim();
                  t.wx$1.navigateTo({ url: n });
                }
              },
            });
      },
    },
  };
Array ||
  (
    t.resolveComponent("AiEntry") +
    t.resolveComponent("qianji-red-point-placeholder") +
    t.resolveComponent("GuidePullDownAccess")
  )();
var c = t._export_sfc(r, [
  [
    "render",
    function (e, n, i, o, r, c) {
      return t.e(
        {
          a: "".concat(r.safeTop, "px"),
          b: t.o(function () {
            return c.specialDebugFunc && c.specialDebugFunc.apply(c, arguments);
          }, 1311),
          c: c.isDevelopVersion,
        },
        (c.isDevelopVersion, {}),
        {
          d: t.n(!0 === i.hideTitle && "hidenbar"),
          e: t.n(!1 === i.hideTitle && "appearBar"),
          f: t.n(i.hideSearch && "hideBottom"),
          g: t.n(r.safeTop && "showBar"),
          h: !i.hideSearch,
        },
        i.hideSearch
          ? {}
          : t.e(
              {
                i: t.o(function () {
                  return c.jumpToSearch && c.jumpToSearch.apply(c, arguments);
                }, 1312),
                j: r.openid,
              },
              r.openid ? { k: t.p({ openid: r.openid, from: i.from }) } : {},
              {
                l: t.p({
                  name: "prorfile-icon-message-redpoint",
                  minaredpoint: i.premoteMixin && i.premoteMixin.RedPoint,
                }),
                m: t.o(function () {
                  return c.goToProfile && c.goToProfile.apply(c, arguments);
                }, 1313),
                n: t.s(!0 === i.hideTitle ? c.fixStyle : c.coverStyle),
              }
            ),
        { o: r.showAddXcx },
        r.showAddXcx ? { p: "".concat(r.safeTop, "px") } : {},
        { q: i.premoteMixin && i.premoteMixin.GuidePullDownAccess },
        i.premoteMixin && i.premoteMixin.GuidePullDownAccess
          ? { r: t.p({ premote: i.premoteMixin.GuidePullDownAccess }) }
          : {},
        { s: "".concat(r.safeTop, "px") }
      );
    },
  ],
  ["__scopeId", "data-v-409f5b71"],
]);
wx.createComponent(c);
