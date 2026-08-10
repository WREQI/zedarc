require("../../../../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../../../../common/vendor.js"),
  t = require("../../service/platform/index.js"),
  a =
    "mp" === e.StockBridge.ENV
      ? { IS_ZXG: !1, IS_LITE_MODE: !1, IS_MINA: !0 }
      : t.detect().env,
  r = a.IS_ZXG,
  n = a.IS_LITE_MODE,
  i = a.IS_MINA,
  s = {
    props: {
      snackbar: {
        type: Object,
        default: function () {
          return {};
        },
      },
      shareConfig: {
        type: Object,
        default: function () {
          return {};
        },
      },
      inviteCode: { type: String, default: null },
    },
    data: function () {
      return { show: !0 };
    },
    watch: {
      snackbar: {
        immediate: !0,
        deep: !0,
        handler: function () {
          this.showSnackbar();
        },
      },
    },
    methods: {
      showSnackbar: function () {
        (this.show = !0),
          e.StockBridge.report("yy.thirteenyear.askai_share_bar_task_brow");
      },
      hideSnackbar: function () {
        this.show = !1;
      },
      addInviteCodeToUrl: function (e) {
        if (!this.inviteCode) return e;
        var t = e.indexOf("#");
        if (-1 === t)
          return "".concat(e, "#/?invite_code=").concat(this.inviteCode);
        var a = e.substring(0, t),
          r = e.substring(t + 1);
        return r.includes("?")
          ? "".concat(a, "#").concat(r, "&invite_code=").concat(this.inviteCode)
          : ""
              .concat(a, "#")
              .concat(r, "?invite_code=")
              .concat(this.inviteCode);
      },
      handleShare: function () {
        e.StockBridge.report("yy.thirteenyear.askai_share_bar_task_click"),
          this.$emit("share", this.snackbar);
        var a =
            "https://zqact01.tenpay.com/activity/page/ThirteenYear/#/home?lite=" +
            (n || r ? 1 : 0),
          s = this.addInviteCodeToUrl(a),
          o =
            "https://st.gtimg.com/design/f16c733c8ee95996d9275f5cd6068398.png",
          c = r
            ? this.shareConfig.zxg_share_conf
            : this.shareConfig.wzq_share_conf;
        if (c) {
          var h = c.share_title ? c.share_title.split(";") : [""],
            d = c.share_subtitle ? c.share_subtitle.split(";") : [""],
            l = h[Math.floor(Math.random() * h.length)],
            u = d[Math.floor(Math.random() * d.length)],
            _ = i || r ? c.share_url_mina || a : c.share_url || a,
            f = this.addInviteCodeToUrl(_),
            p =
              i || r
                ? c.share_image_mina || o
                : c.share_image_wx ||
                  "https://st.gtimg.com/design/aca8269f97bf811772298c9de712d041.png";
          t.platform.shareActivity({
            shareUrl: f,
            shareImage: p,
            title: l,
            summary: u,
            logo: c.share_popup_logo,
          });
        } else t.platform.shareActivity({ shareUrl: s, shareImage: o });
      },
      handleClose: function () {
        this.$emit("close", this.snackbar), this.hideSnackbar();
      },
    },
  },
  o = e._export_sfc(s, [
    [
      "render",
      function (t, a, r, n, i, s) {
        return e.e(
          { a: e.t(r.snackbar.text), b: r.snackbar.subText },
          r.snackbar.subText ? { c: e.t(r.snackbar.subText) } : {},
          {
            d: e.o(function () {
              return s.handleShare && s.handleShare.apply(s, arguments);
            }, 5403),
            e: r.snackbar.fixed,
          },
          r.snackbar.fixed
            ? {
                f: e.o(function () {
                  return s.handleClose && s.handleClose.apply(s, arguments);
                }, 5404),
              }
            : {},
          { g: r.snackbar.fixed ? 1 : "", h: i.show }
        );
      },
    ],
    ["__scopeId", "data-v-29883c76"],
  ]);
wx.createComponent(o);
