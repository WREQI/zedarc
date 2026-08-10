var t = require("../../../../../../../../common/vendor.js");
getApp().globalData;
var e = {
    props: ["premote"],
    data: function () {
      return {
        advInfo: null,
        advPicInfo: null,
        showAdv: !1,
        advReadyDisplay: !1,
        isNewStockCurtain: !1,
        animateShow: !0,
        showClose: !1,
        dxShareType: "2",
        advConfig: null,
        advStyleConfig: {},
        premoteNew: null,
        isCloseByAnimate: !1,
        styleType: "",
        guozhailv: "",
        showUninterest: !1,
      };
    },
    computed: {
      lotticPicUrl: function () {
        var t;
        return null == (t = this.advPicInfo) ? void 0 : t.lottie_src;
      },
      isAnimate: function () {
        return /^https:\/\/.*\.json$/.test(this.lotticPicUrl);
      },
    },
    onPageHide: function () {
      this.isCloseByAnimate = !1;
    },
    watch: {
      premote: {
        immediate: !0,
        handler: function (t) {
          var e = this;
          t &&
            this.$nextTick(function () {
              var i, o, n, a, r, s, d, l, c, p;
              (e.premoteNew = t),
                t.ad_list &&
                  t.ad_list.length > 0 &&
                  (e.advConfig = t.ad_list[0]),
                (e.advStyleConfig = JSON.parse(
                  null ==
                    (o =
                      null == (i = null == t ? void 0 : t.component_param)
                        ? void 0
                        : i.component_style)
                    ? void 0
                    : o.template
                )),
                (e.advPicInfo = e.$parent.deliveryFormatPic(e.premoteNew)),
                (e.styleType =
                  (null == (n = e.advStyleConfig) ? void 0 : n.style_type) ||
                  ""),
                (e.showUninterest =
                  1 ===
                  (null ==
                  (r =
                    null == (a = null == t ? void 0 : t.component_param)
                      ? void 0
                      : a.component_info)
                    ? void 0
                    : r.uninterest)),
                (null == (s = e.advConfig.ext_properties.curtain_ipo)
                  ? void 0
                  : s.length) > 0
                  ? ((e.isNewStockCurtain = !0),
                    (e.advReadyDisplay = !0),
                    (e.advInfo = e.advConfig.ext_properties))
                  : "guozhai" === e.styleType
                  ? (setTimeout(function () {
                      e.advReadyDisplay = !0;
                    }, 100),
                    (e.advInfo = e.advConfig),
                    (e.guozhailv =
                      null ==
                      (l = null == (d = e.advInfo) ? void 0 : d.ext_properties)
                        ? void 0
                        : l.gznhg_earn_ratio))
                  : (e.advInfo = e.advConfig),
                (null == (c = e.advStyleConfig) ? void 0 : c.pre_wait_second)
                  ? setTimeout(function () {
                      e.showCurtainAdv();
                    }, 1e3 *
                      (null == (p = e.advStyleConfig)
                        ? void 0
                        : p.pre_wait_second))
                  : e.showCurtainAdv();
            });
        },
      },
    },
    methods: {
      reportShow: function () {
        this.$parent.deliveryReportMta(
          this.$parent,
          this.premoteNew,
          "yy.choose.globalcurtainadv_middle_brow"
        ),
          this.$parent.reportQianjiGo(
            this.$parent,
            this.advConfig.dp_ctx,
            "show"
          );
      },
      closeAdv: function () {
        (this.showAdv = !1),
          this.$parent.deliveryReportMta(
            this.$parent,
            this.premoteNew,
            "yy.choose.globalcurtainadv_middle_close"
          ),
          this.$parent.reportQianjiGo(
            this.$parent,
            this.advConfig.dp_ctx,
            "close"
          );
      },
      clickAdv: function () {
        (this.showAdv = !1),
          this.$parent.deliveryReportMta(
            this.$parent,
            this.premoteNew,
            "yy.choose.globalcurtainadv_middle_click"
          ),
          this.$parent.reportQianjiGo(
            this.$parent,
            this.advConfig.dp_ctx,
            "click"
          ),
          this.$parent.deliveryDoJump(this.$parent, this.premoteNew);
      },
      imgLoadSuccess: function () {
        this.advReadyDisplay = !0;
      },
      imgLoadErr: function () {},
      confirm: function () {
        this.isNewStockCurtain && (this.advReadyDisplay = !1), this.clickAdv();
      },
      close: function () {
        (this.animateShow = !1), (this.advReadyDisplay = !1), this.closeAdv();
      },
      closeByAnimate: function () {
        var t = this;
        (this.isCloseByAnimate = !0),
          setTimeout(function () {
            t.closeAdv();
          }, 300);
      },
      showCurtainAdv: function () {
        var t,
          e,
          i = this;
        (this.showAdv = !0),
          this.reportShow(),
          (null == (t = this.advStyleConfig) ? void 0 : t.exp_hold_s) &&
            setTimeout(function () {
              i.showAdv = !1;
            }, 1e3 *
              (null == (e = this.advStyleConfig) ? void 0 : e.exp_hold_s));
      },
      getReportBuried: function (t) {
        var e, i;
        return (
          ((null ==
          (i = null == (e = this.premoteNew) ? void 0 : e.component_param)
            ? void 0
            : i.component_stat) || {})[t] || ""
        );
      },
      handleUninterestMore: function () {
        var t =
          this.getReportBuried("uninterest_more") ||
          "yy.choose._globalcurtainadv_uninterest_more_click";
        this.$parent.deliveryReportMta(this.$parent, this.premoteNew, t);
      },
      handleUninterestNot: function () {
        this.showAdv = !1;
        var t =
          this.getReportBuried("uninterest") ||
          "yy.choose._globalcurtainadv_uninterest";
        this.$parent.deliveryReportMta(this.$parent, this.premoteNew, t),
          this.$parent.reportQianjiGo(
            this.$parent,
            this.advConfig.dp_ctx,
            "uninterest"
          );
      },
    },
  },
  i = t._export_sfc(e, [
    [
      "render",
      function (e, i, o, n, a, r) {
        return t.e(
          { a: a.showAdv && a.advInfo },
          a.showAdv && a.advInfo
            ? t.e(
                { b: !r.isAnimate && a.advPicInfo.ad_pic },
                !r.isAnimate && a.advPicInfo.ad_pic
                  ? t.e(
                      { c: a.advPicInfo.ad_pic },
                      a.advPicInfo.ad_pic
                        ? {
                            d: a.advPicInfo.ad_pic,
                            e: t.o(function () {
                              return r.confirm && r.confirm.apply(r, arguments);
                            }, 1371),
                            f: t.o(function () {
                              return (
                                r.imgLoadSuccess &&
                                r.imgLoadSuccess.apply(r, arguments)
                              );
                            }, 1372),
                            g: t.o(function () {
                              return (
                                r.imgLoadErr && r.imgLoadErr.apply(r, arguments)
                              );
                            }, 1373),
                          }
                        : {},
                      { h: 1 == a.advStyleConfig.can_close },
                      1 == a.advStyleConfig.can_close
                        ? {
                            i: t.o(function (t) {
                              return r.closeByAnimate();
                            }, 1374),
                          }
                        : {},
                      {
                        j: a.advReadyDisplay && !r.isAnimate ? 1 : "",
                        k: a.isCloseByAnimate ? 1 : "",
                        l: t.o(function (t) {
                          return r.close();
                        }, 1375),
                      }
                    )
                  : {}
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-2399833d"],
  ]);
wx.createComponent(i);
