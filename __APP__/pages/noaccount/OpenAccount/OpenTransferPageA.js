var e = require("../../../common/vendor.js"),
  t = require("../../../components/OpenPopup/utils.js"),
  n = require("./utils.js"),
  o = e.userinfo || e.__CJS__import__0__,
  s = {
    components: {
      PermissionAndOpenChatButton: function () {
        return "./PermissionAndOpenChatButton.js";
      },
    },
    props: {
      puserinfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      pageHide: { type: Boolean, required: !0 },
      openfrom: {
        type: String,
        required: !0,
        default: n.OPEN_MESSAGE_PATH_PARAM.MY,
      },
    },
    data: function () {
      return { isPass: !1, isSubcribe: !1, userinfo: this.puserinfo };
    },
    computed: {
      needcheck: function () {
        return (
          "msg" === this.openfrom &&
          ["noopen", "verifying"].indexOf(this.statusConfig.key) > -1
        );
      },
      statusConfig: function () {
        var n = this.userinfo,
          o = t.hasAccount(n),
          s = n.userstate === e.USERSTATE.NOACCOUNT,
          p = "1" === n.subscribe;
        return s
          ? {
              key: "noopen",
              titleText: "开户指引",
              step1Text: "点击「立即开户享低佣」，右下角发送小程序",
              bannerUrl:
                "https://wzq.gtimg.com/image/broker/apply/mpopen/process-banner-verifying.png",
              step2Text: "点击链接，立即开户",
              step2Url:
                "https://wzq.gtimg.com/image/broker/apply/mpopen/step-img-2-notopen.png",
              buttonText: "立即开户，享低佣",
            }
          : o
          ? p
            ? {
                key: "openedsubscribe",
                titleText: "开启投资之旅！",
                step1Text: "点击「立即前往交易」，右下角发送小程序",
                bannerUrl:
                  "https://wzq.gtimg.com/image/broker/apply/mpopen/process-banner-open.png",
                step2Text: "点击链接，前往交易",
                step2Url:
                  "https://wzq.gtimg.com/image/broker/apply/mpopen/step-img-2-open.png",
                buttonText: "立即前往交易",
              }
            : {
                key: "openednosubscribe",
                titleText: "关注公众号，开启投资之旅！",
                step1Text: "点击「立即关注」，右下角发送小程序",
                bannerUrl:
                  "https://wzq.gtimg.com/image/broker/apply/mpopen/process-banner-open.png",
                step2Text: "点击链接，关注公众号，前往交易",
                step2Url:
                  "https://wzq.gtimg.com/image/broker/apply/mpopen/step-img-2-open.png",
                buttonText: "立即关注",
              }
          : {
              key: "verifying",
              titleText: "开户进度获取指引",
              step1Text: "点击「立即查看开户进度」，右下角发送小程序",
              bannerUrl:
                "https://wzq.gtimg.com/image/broker/apply/mpopen/process-banner-verifying.png",
              step2Text: "点击链接，查看进度",
              step2Url:
                "https://wzq.gtimg.com/image/broker/apply/mpopen/step-img-2-notopen.png",
              buttonText: "立即查看开户进度",
            };
      },
    },
    created: function () {
      var e = this;
      this.puserinfo ||
        o.get(!0, function (t) {
          e.userinfo = t;
        });
    },
    methods: {
      reportData: function (t) {
        e.Request.reportMTAData({
          eventName: "xcx_transfer_openclick_"
            .concat(this.statusConfig.key, "_")
            .concat(t),
        });
      },
      backHome: function () {
        e.wx$1.reLaunch({ url: "/pages/index/index" });
      },
    },
  };
Array || e.resolveComponent("PermissionAndOpenChatButton")();
var p = e._export_sfc(s, [
  [
    "render",
    function (t, n, o, s, p, r) {
      return {
        a: r.statusConfig.bannerUrl,
        b: e.t(r.statusConfig.titleText),
        c: e.t(r.statusConfig.step1Text),
        d: e.t(r.statusConfig.step2Text),
        e: r.statusConfig.step2Url,
        f: e.t(r.statusConfig.buttonText),
        g: e.o(r.reportData, 2183),
        h: e.p({
          "is-subscribe": "openednosubscribe" === r.statusConfig.key,
          "page-hide": o.pageHide,
          openfrom: o.openfrom,
          "need-check-permission": r.needcheck,
        }),
        i: e.o(function () {
          return r.backHome && r.backHome.apply(r, arguments);
        }, 2184),
        j: e.s(
          p.userinfo.userstate ? "visibility:visible;" : "visibility:hidden;"
        ),
      };
    },
  ],
  ["__scopeId", "data-v-b77003d0"],
]);
wx.createComponent(p);
