var e = require("../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../@babel/runtime/helpers/Arrayincludes"), require("../../app.js");
var r = require("../../config/enum.js");
require("../../service/broker.js");
var i = require("../../utils/getPlatform.js"),
  s = require("../../config/mpConfig.js"),
  n = require("../../service/navigateMp.js"),
  o = require("../../utils/index.js"),
  l = require("../../common/vendor.js"),
  c = require("../../stores/app/useNavbar.js"),
  u = require("../../stores/user/useUserinfo.js"),
  p = require("../../config/broker/11100/index.js"),
  h = {
    "/asset/index": ["交易", "asset", "NAV.ASSET"],
    "/apply/index": ["开户", "open", "NAV.APPLY"],
    "/apply/progress": ["开户", "open", "NAV.PROGRESS"],
    "/apply/recover": ["开户", "open", "NAV.FAILED"],
  },
  d = {
    "/newstock/index": { externalNavFrom: "msg" },
    "/newstock/records": { externalNavFrom: "msg" },
    "/trade/detail": { externalNavFrom: "msg" },
    "/transfer/fund": { externalNavFrom: "msg" },
    "/trade/debt": { externalNavFrom: "yy" },
    "/transfer/fund/recordsdetail": { externalNavFrom: "msg" },
  },
  b = {
    name: "NavbarForMp",
    props: { skin: { type: String, default: "light" } },
    setup: function () {
      var e = l.getCurrentInstance().proxy,
        t = c.useNavbarStore(),
        a = l.storeToRefs(t).externalNavBar4Mp,
        r = t.toggleExternalNav4Mp,
        i = l.storeToRefs(u.useUserinfoStore()).userinfo;
      return (
        l.onPageShow(function () {
          e.handleNavShow();
        }),
        {
          userinfo: i,
          externalNavBar4Mp: a,
          toggleExternalNav: r,
          prefixIocn: function (e) {
            return "https://st.gtimg.com/design/".concat(e);
          },
        }
      );
    },
    data: function () {
      return {
        active: "",
        tabBar: l.cloneDeep(s.tabBarZxgMp),
        showTabBar: !1,
        navbarNew: !0,
        isShowExtenalNavBar: !1,
      };
    },
    watch: {
      $route: {
        handler: function () {
          this.handleNavShow();
        },
        immediate: !0,
      },
      userinfo: {
        handler: function (e) {
          var t,
            a = e.userstate;
          if (
            null == (t = null == this ? void 0 : this.tabBar) ? void 0 : t.list
          ) {
            var i = this.tabBar.list.findIndex(function (e) {
              return ["asset", "apply"].includes(e.id);
            });
            if (-1 !== i)
              switch (a) {
                case r.USERSTATE.HASACCOUNT:
                case r.USERSTATE.HASBUNDLE:
                  (this.tabBar.list[i].id = "asset"),
                    (this.tabBar.list[i].pagePath = "/asset/index"),
                    (this.tabBar.list[i].text = "交易");
                  break;
                case r.USERSTATE.VERIFYING:
                  (this.tabBar.list[i].id = "apply"),
                    (this.tabBar.list[i].pagePath = "/apply/progress"),
                    (this.tabBar.list[i].text = "开户");
                  break;
                case r.USERSTATE.FAILED:
                  (this.tabBar.list[i].id = "apply"),
                    (this.tabBar.list[i].pagePath = "/apply/recover"),
                    (this.tabBar.list[i].text = "开户");
                  break;
                case r.USERSTATE.NOACCOUNT:
                default:
                  (this.tabBar.list[i].id = "apply"),
                    (this.tabBar.list[i].pagePath = "/apply/index"),
                    (this.tabBar.list[i].text = "开户");
              }
            this.updateTabsStyle();
          }
        },
        immediate: !0,
      },
      skin: {
        handler: function () {
          this.updateTabsStyle();
        },
        immediate: !0,
      },
      isShowExtenalNavBar: {
        handler: function (e, t) {
          var a;
          if (e !== t) {
            if (
              null == (a = null == this ? void 0 : this.tabBar)
                ? void 0
                : a.list
            ) {
              var r = this.tabBar.list.findIndex(function (e) {
                return ["asset", "apply"].includes(e.id);
              });
              -1 !== r &&
                ((this.tabBar.list[r].id = "gotoAsset"),
                (this.tabBar.list[r].pagePath = "/goto-asset"),
                (this.tabBar.list[r].text = "去资产首页"));
            }
            this.updateTabsStyle();
          }
        },
      },
    },
    created: function () {
      "zxgxcx" !== o.getMpFromSource()
        ? ((this.navbarNew = !0), (this.tabBar = l.cloneDeep(s.tabBarWzqMp)))
        : ((this.navbarNew = !1), (this.tabBar = l.cloneDeep(s.tabBarZxgMp)));
    },
    methods: {
      handleNavShow: function () {
        var e = this.$route,
          t = e.path,
          a = e.query,
          r = t.replace("pages", ""),
          s = i.getPlatform().isMpPlugin;
        o.getIsMpPluginComponent() &&
          (r = r.replace("/".concat(p.brokerConfig.base.fullName), "")),
          r || this.toggleExternalNav(!1);
        var n = (a || {}).from;
        if (n && !h[r]) {
          var l = d[r],
            c = (l || {}).externalNavFrom;
          if (l)
            return (
              (this.isShowExtenalNavBar =
                n === c || (null == n ? void 0 : n.includes(c))),
              this.toggleExternalNav(this.isShowExtenalNavBar),
              void (this.active = "/goto-asset")
            );
        }
        this.toggleExternalNav(!1),
          (this.showTabBar = h[r] && !s),
          (this.active = r);
      },
      isMatchActive: function (e) {
        return (
          this.active === e ||
          ("/apply/index" === e &&
            ["/apply/progress", "/apply/recover"].includes(this.active)) ||
          "/trade" === e ||
          "/goto-asset" === e
        );
      },
      navigate: function (e) {
        var r = this;
        return a(
          t().mark(function a() {
            var o;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      ("/goto-asset" === e &&
                        r.$router.push({ name: "AssetIndex" }),
                      !r.isMatchActive(e))
                    ) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    (o = i.getPlatform()),
                      o.isMpPlugin
                        ? n.navigateTo({
                            url: ""
                              .concat(e, "?brokerCode=")
                              .concat(p.brokerConfig.base.code),
                            linkType: s.linkTypeMap.plugin2MainMp,
                          })
                        : n.navigateBackMiniProgram({
                            extraData: {
                              path: ""
                                .concat(e, "?brokerCode=")
                                .concat(p.brokerConfig.base.code),
                            },
                          });
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, a);
          })
        )();
      },
      updateTabsStyle: function (t) {
        var a = t || s.skinTabConfig[this.skin] || {};
        "zxgxcx" !== o.getMpFromSource() && (a = s.newNavbarConfig);
        var r = this.tabBar.list.map(function (t) {
          var r,
            i,
            n = t.id;
          return e(
            e(
              e({}, t),
              (null == (r = s.defaultTabConfig.list) ? void 0 : r[n]) || {}
            ),
            (null == (i = a.list) ? void 0 : i[n]) || {}
          );
        });
        (this.tabBar.color =
          a.color || s.defaultTabConfig.color || this.tabBar.color),
          (this.tabBar.selectedColor =
            a.selectedColor ||
            s.defaultTabConfig.selectedColor ||
            this.tabBar.selectedColor),
          (this.tabBar.list = r);
      },
    },
  },
  v = l._export_sfc(b, [
    [
      "render",
      function (e, t, a, r, i, s) {
        return l.e(
          { a: (i.showTabBar || r.externalNavBar4Mp) && i.tabBar.list },
          (i.showTabBar || r.externalNavBar4Mp) && i.tabBar.list
            ? {
                b: l.f(i.tabBar.list, function (e, t, a) {
                  return {
                    a: r.prefixIocn(
                      s.isMatchActive(e.pagePath)
                        ? e.selectedIconPath
                        : e.iconPath
                    ),
                    b: l.t(e.text),
                    c: s.isMatchActive(e.pagePath)
                      ? i.tabBar.selectedColor
                      : i.tabBar.color,
                    d: t,
                    e: l.o(function (t) {
                      return s.navigate(e.pagePath);
                    }, t),
                  };
                }),
                c: i.navbarNew ? 1 : "",
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-aa5e7637"],
  ]);
wx.createComponent(v);
