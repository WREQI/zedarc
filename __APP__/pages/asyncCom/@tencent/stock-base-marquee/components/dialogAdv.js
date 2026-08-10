require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js"),
  t = {
    name: "detailDialog",
    props: {
      premote: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isShow: { type: Boolean, default: !1 },
    },
    inject: ["stockBridge"],
    data: function () {
      return {
        premoteNew: {},
        advConfig: {},
        advPicInfo: {},
        advTextInfo: {},
        advContainer: "",
      };
    },
    computed: {
      showAdv: function () {
        var e, t;
        return (
          (null == (e = this.advPicInfo) ? void 0 : e.ad_pic) &&
          (null == (t = this.advTextInfo) ? void 0 : t.main_text)
        );
      },
    },
    watch: {
      premote: {
        immediate: !0,
        handler: function (t) {
          var i;
          if (t && ((this.premoteNew = t), t.ad_list && t.ad_list.length > 0))
            try {
              this.advConfig = t.ad_list[0];
              var n = this.getCurParent();
              (this.advPicInfo = n.deliveryFormatPic(this.premoteNew)),
                (this.advTextInfo = n.deliveryFormatText(this.premoteNew));
              var o = this.premoteNew.component_info;
              (o = JSON.parse(o || "{}")),
                (this.advContainer = o.position_name),
                null == (i = this.stockBridge) ||
                  i.busOn(e.eventList.COMMON_MARQUEE_EVENT, this.advShowHandle);
            } catch (n) {}
        },
      },
      isShow: function (e) {
        e && this.reportShow();
      },
    },
    methods: {
      getCurParent: function () {
        var t, i;
        return [e.EnvTypeEnum.WZQ, e.EnvTypeEnum.WZQ_LITE].includes(
          null == (t = this.stockBridge) ? void 0 : t.ENV
        )
          ? this
          : null == (i = this.$parent)
          ? void 0
          : i.$parent;
      },
      reportShow: function () {
        var e = this.getCurParent(),
          t =
            (null == e
              ? void 0
              : e.deliveryFormatStatName(this.premoteNew, "brow")) ||
            "yy.marquee.adv_show";
        null == e || e.deliveryReportMta(e, this.premoteNew, t),
          null == e || e.reportQianjiGo(e, this.advConfig.dp_ctx, "show");
      },
      clickAdv: function () {
        var e = this.getCurParent(),
          t =
            (null == e
              ? void 0
              : e.deliveryFormatStatName(this.premoteNew, "click")) ||
            "yy.global.marquee_click";
        null == e || e.deliveryReportMta(e, this.premoteNew, t),
          null == e || e.reportQianjiGo(e, this.advConfig.dp_ctx, "click"),
          null == e || e.deliveryDoJump(this.$parent, this.premoteNew);
      },
      advShowHandle: function (e) {
        var t,
          i = this;
        "restNoticeDialogShow" ===
          (null == (t = null == e ? void 0 : e.data) ? void 0 : t.type) &&
          this.$nextTick(function () {
            var e,
              t = document.querySelector(i.advContainer);
            0 ===
              (null == (e = null == t ? void 0 : t.children)
                ? void 0
                : e.length) &&
              t &&
              t.insertAdjacentElement("beforeend", i.$el);
          });
      },
    },
  },
  i = e._export_sfc(t, [
    [
      "render",
      function (t, i, n, o, r, a) {
        return {
          a: r.advPicInfo.icon_pic,
          b: e.t(r.advTextInfo.main_text),
          c: e.o(function () {
            return a.clickAdv && a.clickAdv.apply(a, arguments);
          }, 1370),
        };
      },
    ],
    ["__scopeId", "data-v-41363d9b"],
  ]);
wx.createComponent(i);
