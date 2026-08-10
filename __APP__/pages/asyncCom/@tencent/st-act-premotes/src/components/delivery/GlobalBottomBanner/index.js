var e = require("../../../../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../utils/config.js"),
  n = require("../../../../../../../../common/vendor.js"),
  i = n.StockBridge.ENV === n.EnvTypeEnum.MP,
  o = ["mpwzq", "wzqlight"].includes("mpweapp"),
  r =
    "miniprogram" === (null == window ? void 0 : window.__wxjs_environment) ||
    /miniProgram/.test(null == navigator ? void 0 : navigator.userAgent),
  a = Boolean(r),
  l = {
    props: ["premote", "hasBottomBar", "isNewsPage"],
    components: {
      WxLaunchWeappCom: function () {
        return "../WxLaunchWeappCom/index.js";
      },
    },
    data: function () {
      return {
        isLiteMode: o,
        isMpEnv: i,
        advConfig: null,
        advPicInfo: null,
        advTextInfo: null,
        advStyleConfig: {},
        showAdv: !1,
        premoteNew: null,
        withExternalNavbar: !1,
        withExternalNavbarZxReplay: !1,
        IS_MINA: a,
        uiType: "",
        isAnimate: null,
        showCurtain: !1,
        isCurtainImgReady: !1,
        isCurtainCloseByAnimate: !1,
        showCondition: null,
        showFlag: !0,
      };
    },
    activated: function () {},
    mounted: function () {
      return (
        (t = this),
        null,
        (n = e().mark(function t() {
          var n = this;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  i ||
                    setTimeout(function () {
                      var e, t, i;
                      (n.withExternalNavbar = !!document.querySelector(
                        ".component-external-nav-bar"
                      )),
                        (n.withExternalNavbarZxReplay =
                          n.withExternalNavbar &&
                          !!document.querySelector(".mod-replyBox") &&
                          1 ==
                            (null ==
                            (i =
                              null ==
                              (t = null == (e = n.$parent) ? void 0 : e.$route)
                                ? void 0
                                : t.query)
                              ? void 0
                              : i.__share_flag__));
                    }, 800);
                case 1:
                case "end":
                  return e.stop();
              }
          }, t);
        })),
        new Promise(function (e, i) {
          var o = function (e) {
              try {
                a(n.next(e));
              } catch (e) {
                i(e);
              }
            },
            r = function (e) {
              try {
                a(n.throw(e));
              } catch (e) {
                i(e);
              }
            },
            a = function (t) {
              return t.done ? e(t.value) : Promise.resolve(t.value).then(o, r);
            };
          a((n = n.apply(t, null)).next());
        })
      );
      var t, n;
    },
    deactivated: function () {},
    beforeDestroy: function () {},
    computed: {
      isCurtainInteraction: function () {
        return "curtain" === this.uiType;
      },
      isShowConditionType: function () {
        return "condition" === this.uiType;
      },
    },
    watch: {
      premote: {
        immediate: !0,
        handler: function (e) {
          var t = this;
          e &&
            this.$nextTick(function () {
              var i, o, r, a, l, d, u;
              (t.premoteNew = e),
                e.ad_list &&
                  e.ad_list.length > 0 &&
                  (t.advConfig = e.ad_list[0]);
              var s = ((e.ad_list && e.ad_list[0]) || {}).component_param;
              try {
                s = JSON.parse(s);
              } catch (e) {}
              (t.advStyleConfig = JSON.parse(
                null == (i = null == s ? void 0 : s.component_style)
                  ? void 0
                  : i.template
              )),
                (t.advPicInfo =
                  null ==
                  (r = null == (o = n.StockBridge) ? void 0 : o.deliverySdk)
                    ? void 0
                    : r.deliveryFormatPic(t.premoteNew)),
                (t.advTextInfo =
                  null ==
                  (l = null == (a = n.StockBridge) ? void 0 : a.deliverySdk)
                    ? void 0
                    : l.deliveryFormatText(t.premoteNew)),
                (t.uiType = t.advStyleConfig.uitype),
                (t.showCondition = (s.component_content || {}).showCondition),
                t.isShowConditionType && t.showCondition
                  ? n.StockBridge.busOn(t.showCondition, function () {
                      t.showFlag && t.showBannerHandle(), (t.showFlag = !1);
                    })
                  : (
                      null == (d = t.advStyleConfig)
                        ? void 0
                        : d.pre_wait_second
                    )
                  ? setTimeout(function () {
                      t.showBannerHandle();
                    }, 1e3 *
                      (null == (u = t.advStyleConfig)
                        ? void 0
                        : u.pre_wait_second))
                  : t.showBannerHandle();
            });
        },
      },
    },
    methods: {
      renderComponent: t.debounce(100, function () {
        var e, t, n, i, o, r;
        if (-1 != this.premoteNew.f_carrier_path.indexOf("/")) {
          if (
            (null == (t = null == (e = this.$parent) ? void 0 : e.$route)
              ? void 0
              : t.path) != this.premoteNew.f_carrier_path &&
            (null == (i = null == (n = this.$parent) ? void 0 : n.$route)
              ? void 0
              : i.name) != this.premoteNew.f_carrier_name
          )
            return;
        } else if ((null == (r = null == (o = this.$parent) ? void 0 : o.$route) ? void 0 : r.name) != this.premoteNew.f_carrier_path) return;
        !(
          document.querySelectorAll(".delivery-choose-bottom-banner").length > 0
        ) &&
          document.querySelectorAll(".delivery-container").length > 0 &&
          this.showAdv &&
          (document
            .querySelectorAll(".delivery-container")[0]
            .insertAdjacentElement("beforeend", this.$el),
          this.reportShow());
      }),
      reportShow: function () {
        var e, t;
        null == (t = null == (e = n.StockBridge) ? void 0 : e.deliverySdk) ||
          t.deliveryMtaAndRport(this.premoteNew, "brow");
      },
      closeAdv: function () {
        var e, t;
        (this.showAdv = !1),
          (this.isAnimate = !1),
          null == (t = null == (e = n.StockBridge) ? void 0 : e.deliverySdk) ||
            t.deliveryMtaAndRport(this.premoteNew, "close");
      },
      clickAdv: function () {
        var e, i, o, r, a, l;
        if (
          (n.StockBridge.setStorage(
            t.QIANJI_HAS_CLICKED_QIANJI_STORAGE_KEY,
            this.advConfig
          ),
          null == (i = null == (e = n.StockBridge) ? void 0 : e.deliverySdk) ||
            i.deliveryMtaAndRport(this.premoteNew, "click"),
          this.isCurtainInteraction)
        )
          return (
            (this.showCurtain = !0),
            void (
              null ==
                (r = null == (o = n.StockBridge) ? void 0 : o.deliverySdk) ||
              r.deliveryMtaAndRport(this.premoteNew, "brow")
            )
          );
        null == (l = null == (a = n.StockBridge) ? void 0 : a.deliverySdk) ||
          l.deliveryDoJump(this.premoteNew);
      },
      showBannerHandle: function () {
        var e,
          t,
          n = this;
        (this.isAnimate = !0),
          (this.showAdv = !0),
          i ? this.reportShow() : this.renderComponent(),
          (null == (e = this.advStyleConfig) ? void 0 : e.exp_hold_s) &&
            setTimeout(function () {
              (n.isAnimate = !1),
                setTimeout(function () {
                  n.showAdv = !1;
                }, 250);
            }, 1e3 *
              (null == (t = this.advStyleConfig) ? void 0 : t.exp_hold_s));
      },
      curtainImgLoadSuccess: function () {
        this.isCurtainImgReady = !0;
      },
      curtainCloseByAnimate: function () {
        var e = this;
        (this.isCurtainCloseByAnimate = !0),
          setTimeout(function () {
            var t, i;
            (e.showCurtain = !1),
              null ==
                (i = null == (t = n.StockBridge) ? void 0 : t.deliverySdk) ||
                i.deliveryMtaAndRport(e.premoteNew, "close");
          }, 300);
      },
    },
  };
Array || n.resolveComponent("WxLaunchWeappCom")();
var d = n._export_sfc(l, [
  [
    "render",
    function (e, t, i, o, r, a) {
      return n.e(
        { a: r.showAdv && null != r.isAnimate && r.premoteNew },
        r.showAdv && null != r.isAnimate && r.premoteNew
          ? n.e(
              { b: r.advPicInfo.icon_pic },
              r.advPicInfo.icon_pic
                ? { c: "url(".concat(r.advPicInfo.icon_pic, ")") }
                : {},
              { d: n.t(r.advTextInfo.main_text), e: r.advTextInfo.button_text },
              r.advTextInfo.button_text
                ? { f: n.t(r.advTextInfo.button_text) }
                : {},
              { g: 1 == r.advStyleConfig.can_close },
              1 == r.advStyleConfig.can_close
                ? {
                    h: n.o(function () {
                      return a.closeAdv && a.closeAdv.apply(a, arguments);
                    }, 1383),
                  }
                : {},
              { i: !r.isMpEnv },
              r.isMpEnv
                ? {}
                : n.e(
                    { j: 1 == r.advStyleConfig.can_close },
                    1 == r.advStyleConfig.can_close
                      ? {
                          k: n.o(function () {
                            return a.closeAdv && a.closeAdv.apply(a, arguments);
                          }, 1384),
                        }
                      : {},
                    { l: n.p({ premote: i.premote }) }
                  ),
              {
                m: r.advStyleConfig.bg_color,
                n: n.o(function () {
                  return a.clickAdv && a.clickAdv.apply(a, arguments);
                }, 1385),
                o: i.hasBottomBar && !r.IS_MINA ? 1 : "",
                p: r.withExternalNavbar ? 1 : "",
                q: r.withExternalNavbarZxReplay ? 1 : "",
                r: i.hasBottomBar && r.IS_MINA ? 1 : "",
                s: r.isAnimate ? 1 : "",
                t: r.isAnimate ? "" : 1,
                v: r.isLiteMode ? 1 : "",
                w: r.isMpEnv ? 1 : "",
                x: i.isNewsPage ? 1 : "",
              }
            )
          : {},
        { y: a.isCurtainInteraction },
        a.isCurtainInteraction
          ? {
              z: r.advPicInfo.ad_pic,
              A: n.o(function () {
                return (
                  a.curtainImgLoadSuccess &&
                  a.curtainImgLoadSuccess.apply(a, arguments)
                );
              }, 1386),
            }
          : {},
        {
          B: n.o(function (e) {
            return a.curtainCloseByAnimate();
          }, 1387),
          C: r.isCurtainCloseByAnimate ? 1 : "",
          D: r.showCurtain && r.advPicInfo.ad_pic && r.isCurtainImgReady,
        }
      );
    },
  ],
  ["__scopeId", "data-v-f41be1a7"],
]);
wx.createComponent(d);
