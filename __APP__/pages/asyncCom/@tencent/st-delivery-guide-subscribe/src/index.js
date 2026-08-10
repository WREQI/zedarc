var e = require("../../../../../common/vendor.js"),
  t = {
    props: ["premote"],
    data: function () {
      return {
        showAdv: !1,
        advReadyDisplay: !1,
        advConfig: null,
        advStyleConfig: {},
        advContentConfig: {},
        premoteNew: null,
        isCloseByAnimate: !1,
        showUninterest: !1,
        tipsChecked: !1,
        subtitle: "",
      };
    },
    computed: {},
    onPageHide: function () {
      this.isCloseByAnimate = !1;
    },
    watch: {
      premote: {
        immediate: !0,
        handler: function (e) {
          var t = this;
          if (e)
            try {
              this.$nextTick(function () {
                var i, n, o, d, l, s, a;
                (t.premoteNew = e),
                  e.ad_list &&
                    e.ad_list.length > 0 &&
                    (t.advConfig = e.ad_list[0]),
                  (t.advStyleConfig = JSON.parse(
                    null ==
                      (n =
                        null == (i = null == e ? void 0 : e.component_param)
                          ? void 0
                          : i.component_style)
                      ? void 0
                      : n.template
                  )),
                  (t.advContentConfig =
                    (null == (o = null == e ? void 0 : e.component_param)
                      ? void 0
                      : o.component_content) || {}),
                  (t.showUninterest =
                    1 ===
                    (null == (d = t.advStyleConfig) ? void 0 : d.uninterest)),
                  (t.subtitle =
                    (null == (l = t.advContentConfig)
                      ? void 0
                      : l.guide_subscribe_subtitle) || ""),
                  (null == (s = t.advStyleConfig) ? void 0 : s.pre_wait_second)
                    ? setTimeout(function () {
                        t.showCurtainAdv();
                      }, 1e3 *
                        (null == (a = t.advStyleConfig)
                          ? void 0
                          : a.pre_wait_second))
                    : t.showCurtainAdv();
              });
            } catch (e) {}
        },
      },
    },
    methods: {
      reportShow: function () {
        var t, i;
        null == (i = null == (t = e.StockBridge) ? void 0 : t.deliverySdk) ||
          i.deliveryMtaAndRport(this.premoteNew, "brow");
      },
      closeAdv: function () {
        var t, i, n, o;
        (this.showAdv = !1),
          null == (i = null == (t = e.StockBridge) ? void 0 : t.deliverySdk) ||
            i.deliveryMtaAndRport(this.premoteNew, "close"),
          this.tipsChecked &&
            (null ==
              (o = null == (n = e.StockBridge) ? void 0 : n.deliverySdk) ||
              o.deliveryMtaAndRport(this.premoteNew, "uninterest"));
      },
      clickAdv: function () {
        var t,
          i,
          n,
          o,
          d = this;
        (this.showAdv = !1),
          null == (i = null == (t = e.StockBridge) ? void 0 : t.deliverySdk) ||
            i.deliveryMtaAndRport(this.premoteNew, "click"),
          this.tipsChecked &&
            (null ==
              (o = null == (n = e.StockBridge) ? void 0 : n.deliverySdk) ||
              o.deliveryMtaAndRport(this.premoteNew, "uninterest")),
          setTimeout(function () {
            var t;
            e.wx$1.navigateTo({
              url: "/pages/additional/webview/index?url=".concat(
                encodeURIComponent(
                  "https://zqact01.tenpay.com/activity/page/fitXcxQrcode/#/index?stat=".concat(
                    null == (t = d.advContentConfig)
                      ? void 0
                      : t.guide_subscribe_stat
                  )
                )
              ),
            });
          }, 200);
      },
      close: function () {
        var t;
        null == (t = e.StockBridge) ||
          t.report("yy.general.delivery_guide_subscribe_close_blank"),
          (this.advReadyDisplay = !1),
          this.closeAdv();
      },
      checkTips: function () {
        this.tipsChecked = !this.tipsChecked;
      },
      closeByAnimate: function () {
        var e = this;
        (this.isCloseByAnimate = !0),
          setTimeout(function () {
            e.closeAdv();
          }, 300);
      },
      showCurtainAdv: function () {
        var e,
          t,
          i = this;
        (this.advReadyDisplay = !0),
          (this.showAdv = !0),
          this.reportShow(),
          (null == (e = this.advStyleConfig) ? void 0 : e.exp_hold_s) &&
            setTimeout(function () {
              i.showAdv = !1;
            }, 1e3 *
              (null == (t = this.advStyleConfig) ? void 0 : t.exp_hold_s));
      },
    },
  },
  i = e._export_sfc(t, [
    [
      "render",
      function (t, i, n, o, d, l) {
        return e.e(
          { a: d.showAdv && d.advConfig },
          d.showAdv && d.advConfig
            ? e.e(
                { b: d.subtitle },
                d.subtitle ? { c: e.t(d.subtitle) } : {},
                { d: d.advContentConfig.ad_pic },
                d.advContentConfig.ad_pic
                  ? { e: "url(".concat(d.advContentConfig.ad_pic, ")") }
                  : {},
                { f: d.showUninterest },
                d.showUninterest
                  ? e.e(
                      { g: d.tipsChecked },
                      (d.tipsChecked, {}),
                      { h: !d.tipsChecked },
                      (d.tipsChecked, {}),
                      {
                        i: e.o(function (e) {
                          return l.checkTips();
                        }, 1068),
                      }
                    )
                  : {},
                {
                  j: e.o(function (e) {
                    return l.closeByAnimate();
                  }, 1069),
                  k: e.o(function () {
                    return l.clickAdv && l.clickAdv.apply(l, arguments);
                  }, 1070),
                  l: 1 == d.advStyleConfig.can_close,
                },
                1 == d.advStyleConfig.can_close
                  ? {
                      m: e.o(function (e) {
                        return l.closeByAnimate();
                      }, 1071),
                    }
                  : {},
                {
                  n: d.advReadyDisplay ? 1 : "",
                  o: d.isCloseByAnimate ? 1 : "",
                  p: e.o(function (e) {
                    return l.close();
                  }, 1072),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-1b7a1d37"],
  ]);
wx.createComponent(i);
