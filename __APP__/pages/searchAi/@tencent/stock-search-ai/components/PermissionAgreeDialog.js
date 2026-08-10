var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  o = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  s = function (e, o, r) {
    return o in e
      ? t(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[o] = r);
  },
  c = require("../../../../../common/vendor.js"),
  l = require("../utils/StockBridgeWrapper.js"),
  p = require("../hooks/usePrivacyGrantHooks.js"),
  u = require("../hooks/useComponentConfigHooks.js"),
  h = require("../utils/envUtils.js"),
  d = {
    name: "PermissionAgreeDialog",
    props: {
      theme: { required: !0, type: String },
      isMP: { required: !0, type: Boolean, default: !1 },
      searchfrom: { type: String, default: "" },
      showFullScreenPermissionDialog: {
        required: !0,
        type: Boolean,
        default: !1,
      },
      protocalId: { required: !1, type: String, default: "" },
      privacyResult: { required: !1, type: Object, default: null },
      privacyType: { required: !1, type: String, default: "new_user" },
      reportPrefix: { required: !1, type: String, default: "jichu.ai_search" },
      reportInfo: {
        required: !1,
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (e) {
      var t = c.getCurrentInstance().proxy || c.getCurrentInstance(),
        o = p.usePrivacyGrantHooks(),
        r = o.grantWenAIUsePrivacy;
      return {
        grantUsePrivacy: o.grantUsePrivacy,
        copyToPasteboard: u.useLongPressHooks(t).copyToPasteboard,
        grantWenAIUsePrivacy: r,
      };
    },
    data: function () {
      return {
        showPopDialog: !1,
        hasAgree: !1,
        closeIconInPermissionImage:
          "https://st.gtimg.com/design/b3bec65b73286db4d35d7ab38d6edc97.png",
        unSelectIcon:
          "https://st.gtimg.com/design/128ccd44d49836f660a5a67bfa6c0d12.png",
        selectIcon:
          "https://st.gtimg.com/design/18af5b965344648cf3d1c9f239cb5693.png",
        isWzq: !1,
        isAndroid: /\bAndroid([^;]+)/.test(
          null == navigator ? void 0 : navigator.userAgent
        ),
        animClassBg: "",
        animClassMove: "",
        canShow: !1,
        isLight: h.IS_LITE_MODE,
      };
    },
    computed: {
      isNewUser: function () {
        return (
          !this.privacyType ||
          "new_user" === this.privacyType ||
          "community_yuanbao" === this.privacyType
        );
      },
      protocalName: function () {
        return this.privacyResult && this.privacyResult.title
          ? this.privacyResult.title
          : (l.StockBridge.ENV === c.EnvTypeEnum.SHY_NATIVE ||
              c.ShellTypeEnum.MPWAI,
            "《问元宝服务协议》");
      },
    },
    watch: {
      showFullScreenPermissionDialog: {
        handler: function (e) {
          var t = this;
          e
            ? ((this.animClassBg = "fade-enter-active"),
              (this.animClassMove = "slide-enter-active"),
              this.$nextTick(function () {
                t.canShow = !0;
              }),
              l.StockBridge.report(
                "".concat(this.reportPrefix, ".disclaimer_show"),
                { searchfrom: this.searchfrom }
              ))
            : ((this.animClassBg = "fade-leave-active"),
              (this.animClassMove = "slide-outer-active"),
              setTimeout(function () {
                t.canShow = !1;
              }, 400));
        },
        immediate: !0,
      },
    },
    methods: {
      onClickSelectIcon: function () {
        (this.hasAgree = !this.hasAgree),
          this.hasAgree && this.showPopTipsWindow(!1);
      },
      showPopTipsWindow: function (e) {
        this.showPopDialog = e;
      },
      onClosePopueWindow: function () {
        this.showPopTipsWindow(!1);
      },
      jumpToBeiAnUrl: function () {
        this.copyToPasteboard(
          "https://beian.cac.gov.cn/#/home",
          "已复制协议链接，您可以打开系统浏览器访问"
        );
      },
      jumpToProtocalUrl: function () {
        this.privacyResult && this.privacyResult.url
          ? this.openTargetUrl(this.privacyResult.url)
          : (l.StockBridge.ENV,
            c.EnvTypeEnum.SHY_NATIVE,
            this.openTargetUrl(
              "https://wzq.tenpay.com/mm/protocol?schemaid=protocol&appid=base&rowid=78"
            ));
      },
      openTargetUrl: function (e) {
        if (this.isMP) {
          var t = "/pages/additional/webview/index?url=".concat(
            encodeURIComponent(e),
            "&hideShareMenu=1"
          );
          c.wx$1.navigateTo({ url: t });
        } else l.StockBridge.openExtraWebview(e);
      },
      onlickDisAgree: function () {
        l.StockBridge.report("".concat(this.reportPrefix, ".disclaimer_deny"), {
          searchfrom: this.searchfrom,
        }),
          this.$emit("deny-protocal");
      },
      onlickAgree: function () {
        var t, c;
        this.hasAgree
          ? (l.StockBridge.report(
              "".concat(this.reportPrefix, ".disclaimer_agree"),
              ((t = (function (t, o) {
                for (var r in o || (o = {})) n.call(o, r) && s(t, r, o[r]);
                if (i) {
                  var c,
                    l = e(i(o));
                  try {
                    for (l.s(); !(c = l.n()).done; ) {
                      r = c.value;
                      a.call(o, r) && s(t, r, o[r]);
                    }
                  } catch (e) {
                    l.e(e);
                  } finally {
                    l.f();
                  }
                }
                return t;
              })({}, this.reportInfo)),
              (c = { searchfrom: this.searchfrom }),
              o(t, r(c)))
            ),
            this.$emit("agree-protocal"),
            "community_yuanbao" === this.privacyType
              ? this.grantUsePrivacy(this.protocalId, "wenyuanbao")
              : this.grantWenAIUsePrivacy(this.protocalId))
          : this.showPopTipsWindow(!0);
      },
    },
  },
  g = c._export_sfc(d, [
    [
      "render",
      function (e, t, o, r, i, n) {
        return c.e(
          { a: i.canShow },
          i.canShow ? { b: c.n(i.animClassBg) } : {},
          { c: i.canShow },
          i.canShow
            ? c.e(
                {
                  d: c.o(function () {
                    return (
                      n.jumpToBeiAnUrl && n.jumpToBeiAnUrl.apply(n, arguments)
                    );
                  }, 3064),
                  e: i.showPopDialog,
                },
                i.showPopDialog
                  ? {
                      f: i.closeIconInPermissionImage,
                      g: c.o(function () {
                        return (
                          n.onClosePopueWindow &&
                          n.onClosePopueWindow.apply(n, arguments)
                        );
                      }, 3065),
                      h: c.n(i.isAndroid ? "android" : ""),
                    }
                  : {},
                {
                  i: i.hasAgree ? i.selectIcon : i.unSelectIcon,
                  j: c.o(function () {
                    return (
                      n.onClickSelectIcon &&
                      n.onClickSelectIcon.apply(n, arguments)
                    );
                  }, 3066),
                  k: c.t(n.protocalName),
                  l: c.o(function () {
                    return (
                      n.jumpToProtocalUrl &&
                      n.jumpToProtocalUrl.apply(n, arguments)
                    );
                  }, 3067),
                  m: c.o(function () {
                    return (
                      n.onClickSelectIcon &&
                      n.onClickSelectIcon.apply(n, arguments)
                    );
                  }, 3068),
                  n: c.o(function () {
                    return (
                      n.onlickDisAgree && n.onlickDisAgree.apply(n, arguments)
                    );
                  }, 3069),
                  o: c.o(function () {
                    return n.onlickAgree && n.onlickAgree.apply(n, arguments);
                  }, 3070),
                  p: c.n(i.animClassMove),
                }
              )
            : {},
          { q: c.n(i.isLight ? "light" : ""), r: c.n("skin-".concat(o.theme)) }
        );
      },
    ],
    ["__scopeId", "data-v-4a8f2447"],
  ]);
wx.createComponent(g);
