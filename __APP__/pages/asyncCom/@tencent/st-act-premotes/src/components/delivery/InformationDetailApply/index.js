var t = require("../../../../../../../../common/vendor.js"),
  e = {
    name: "InformationDetailApply",
    props: { premote: { type: Object, default: null } },
    data: function () {
      return { advConfig: null, advPicInfo: {}, advTextInfo: {}, showAdv: !1 };
    },
    computed: {
      iconPic: function () {
        return (
          this.advPicInfo.icon_pic ||
          this.advPicInfo.material_pic ||
          "https://st.gtimg.com/wuji/pics/wzq_operation_test/tLgiDIhG.png"
        );
      },
    },
    watch: {
      premote: {
        immediate: !0,
        deep: !0,
        handler: function (e) {
          var i = this;
          e &&
            this.$nextTick(function () {
              var o, n, d, r;
              e.ad_list &&
                e.ad_list.length > 0 &&
                ((i.advConfig = e.ad_list[0]),
                (i.advPicInfo =
                  (null ==
                  (n = null == (o = t.StockBridge) ? void 0 : o.deliverySdk)
                    ? void 0
                    : n.deliveryFormatPic(e)) || {}),
                (i.advTextInfo =
                  (null ==
                  (r = null == (d = t.StockBridge) ? void 0 : d.deliverySdk)
                    ? void 0
                    : r.deliveryFormatText(e)) || {}),
                i.advConfig &&
                  ((i.showAdv = !0),
                  i.$nextTick(function () {
                    i.reportShow();
                  })));
            });
        },
      },
    },
    methods: {
      reportShow: function () {
        var e, i;
        null == (i = null == (e = t.StockBridge) ? void 0 : e.deliverySdk) ||
          i.deliveryMtaAndRport(this.premote, "brow");
      },
      clickAdv: function () {
        var e, i, o, n;
        null == (i = null == (e = t.StockBridge) ? void 0 : e.deliverySdk) ||
          i.deliveryMtaAndRport(this.premote, "click"),
          null == (n = null == (o = t.StockBridge) ? void 0 : o.deliverySdk) ||
            n.deliveryDoJump(this.premote);
      },
    },
  },
  i = t._export_sfc(e, [
    [
      "render",
      function (e, i, o, n, d, r) {
        return t.e(
          { a: d.showAdv },
          d.showAdv
            ? t.e({ b: r.iconPic }, r.iconPic ? { c: r.iconPic } : {}, {
                d: t.t(d.advTextInfo.main_text),
                e: t.t(d.advTextInfo.button_text || d.advTextInfo.sub_text),
                f: t.o(function () {
                  return r.clickAdv && r.clickAdv.apply(r, arguments);
                }, 4382),
              })
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-063f67e2"],
  ]);
wx.createComponent(i);
